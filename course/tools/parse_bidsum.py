"""Parse a Caltrans "BID SUMMARY" (BID211) text file (pdftotext -layout output)
into JSON: header facts, bidders, bid items, and every bidder's unit prices.

Usage: python3 parse_bidsum.py <bid_summary.txt> <bid_items_portal.csv> > out.json
Every bidder's line items are re-added and checked against its printed total.
"""
import csv, json, re, sys

ORD = {"SECOND": 2, "THIRD": 3, "FOURTH": 4, "FIFTH": 5, "SIXTH": 6, "SEVENTH": 7,
       "EIGHTH": 8, "NINTH": 9, "TENTH": 10, "ELEVENTH": 11, "TWELFTH": 12}

def num(s):
    s = s.strip().replace(",", "")
    return float(s) if s else 0.0

def parse(path, csv_path):
    lines = open(path, encoding="utf-8", errors="ignore").read().splitlines()
    text = "\n".join(lines)
    head = {}
    m = re.search(r"BID OPENING DATE\s+(\d\d/\d\d/\d\d)", text); head["bid_open"] = m.group(1) if m else None
    m = re.search(r"NUMBER OF BIDDERS\s+(\d+)", text); head["num_bidders"] = int(m.group(1)) if m else None
    m = re.search(r"ENGINEERS EST\s+([\d,\.]+)", text); head["engineers_estimate"] = num(m.group(1)) if m else None
    m = re.search(r"TOTAL NUMBER OF WORKING DAYS\s+(\d+)", text); head["working_days_summary"] = int(m.group(1)) if m else None
    m = re.search(r"PROPOSALS ISSUED\s+(\d+)", text); head["proposals_issued"] = int(m.group(1)) if m else None

    # Bidders block (page 1, sometimes continuing on page 2): rank, total, id, name.
    # The line under a bidder can hold a status (e.g. "NR LATE DBE/DVBE SUBMITTAL")
    # at the left, or the rest of a long name under the name column.
    bidders = []
    brow = re.compile(r"^\s{5,}(\d{1,2})\s+([\d,]+\.\d\d)\s+(\d{1,2})\s+(\S.*?)\s{2,}\d{3} \d{3}-\d{4}")
    for i, ln in enumerate(lines):
        if "L I S T" in ln: break
        m = brow.match(ln)
        if not m: continue
        b = {"rank": int(m.group(1)), "total": num(m.group(2)), "id": int(m.group(3)), "name": m.group(4).strip()}
        nxt = lines[i + 1] if i + 1 < len(lines) else ""
        stripped = re.sub(r"\s+\d{6,}\s*$", "", nxt)
        if stripped.strip():
            col = len(stripped) - len(stripped.lstrip())
            if col < m.start(4) - 4:
                b["status"] = stripped.strip()
            else:
                b["name"] += " " + stripped.strip()
        bidders.append(b)

    # Items come from the low bidder's proposal table (the final, post-addenda list).
    # Descriptions can wrap onto the next line; the portal CSV is only a cross-check.
    portal = {}
    with open(csv_path) as f:
        for r in csv.DictReader(f):
            portal[int(r["line"])] = r
    items, low, in_low, last = [], {}, False, None
    row = re.compile(r"^\s{2,10}(\d{1,3})\s+(\(F\)\s*)?(\w{6})\s+(.*?)\s{2,}(\S+)\s+(LUMP SUM|[\d,\.]+)\s+([\d,]*\.\d\d)\s+([\d,]+\.\d\d)\s*$")
    for ln in lines:
        if "P R O P O S A L" in ln and "L O W" in ln: in_low = True; last = None; continue
        if "R E M A I N I N G" in ln: in_low = False
        if not in_low: continue
        m = row.match(ln)
        if m:
            no = int(m.group(1)); qtxt = m.group(6)
            it = {"no": no, "code": m.group(3), "desc": m.group(4).strip(), "unit": m.group(5),
                  "qty": 1.0 if qtxt == "LUMP SUM" else num(qtxt), "final_pay": bool(m.group(2))}
            items.append(it); low[no] = num(m.group(7)); last = it
            continue
        c = re.match(r"^\s{20,30}(\S.*?)\s*$", ln)
        if last and c and not re.search(r"\d{2}/\d{2}/\d{2}|BID211|PAGE|TOTAL|^-+$", ln) and len(c.group(1)) < 45:
            last["desc"] += " " + c.group(1).strip()
        elif ln.strip().startswith("-") or "ITEM" in ln:
            last = None
    for it in items:
        r = portal.get(it["no"])
        it["portal_match"] = bool(r and r["item_code"] == it["code"])
    prices = {1: low}

    # Remaining bidders tables
    cols = []
    for ln in lines:
        if "|" in ln and re.search(r"SECOND|THIRD|FOURTH|FIFTH|SIXTH|SEVENTH|EIGHTH|NINTH|TENTH|ELEVENTH|TWELFTH", ln):
            cols = [ORD[w] for w in re.findall(r"(SECOND|THIRD|FOURTH|FIFTH|SIXTH|SEVENTH|EIGHTH|NINTH|TENTH|ELEVENTH|TWELFTH)", ln)]
            continue
        m = re.match(r"^\s*(\d{1,3})\s*\|(.*)$", ln)
        if m and cols:
            parts = m.group(2).split("|")
            for rank, part in zip(cols, parts):
                nums = re.findall(r"[\d,]*\.\d+|[\d,]+", part)
                if len(nums) >= 2:
                    prices.setdefault(rank, {})[int(m.group(1))] = num(nums[0])
                elif len(nums) == 1 and part.strip():
                    prices.setdefault(rank, {})[int(m.group(1))] = None
    # Check totals
    checks = []
    for b in bidders:
        p = prices.get(b["rank"], {})
        tot = round(sum((p.get(it["no"]) or 0) * it["qty"] for it in items), 2)
        b["items_found"] = sum(1 for it in items if p.get(it["no"]) is not None)
        b["computed_total"] = tot
        b["total_matches"] = abs(tot - b["total"]) < 1.0
        checks.append((b["rank"], b["name"], b["total"], tot, b["items_found"], len(items)))
    return {"head": head, "bidders": bidders, "items": items,
            "prices": {str(r): {str(k): v for k, v in d.items()} for r, d in prices.items()}}, checks

if __name__ == "__main__":
    data, checks = parse(sys.argv[1], sys.argv[2])
    for c in checks:
        print("rank %d %-40s printed %14.2f computed %14.2f items %d/%d %s" % (c[0], c[1][:40], c[2], c[3], c[4], c[5], "OK" if abs(c[2]-c[3]) < 1 else "MISMATCH"), file=sys.stderr)
    json.dump(data, sys.stdout, indent=1)
