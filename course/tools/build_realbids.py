"""Build course/src/realbids.js from the saved Caltrans data in course/data/caltrans/.

For each contract folder it parses the Bid Summary text (every bidder's unit price
for every item), checks each bidder's items add up to its printed total, reads the
document list and award from the saved Contractors Corner page JSON, and writes one
JS data file the course page loads.

Usage: python3 course/tools/build_realbids.py
"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from parse_bidsum import parse

ROOT = os.path.join(os.path.dirname(__file__), "..")
DATA = os.path.join(ROOT, "data", "caltrans")
OUT = os.path.join(ROOT, "src", "realbids.js")
DL = "https://cdotprod.service-now.com/api/x_cado2_contractor/public_attachment_downloader_api/"
PAGE = "https://cdotprod.service-now.com/cc?id=cc_advertisement_details&ad_id="

# Hand-written context for each practice project, in order of difficulty.
# Every number here comes from the bid item list or Special Provisions.
PROJECTS = [
  {"id": "11-422004", "level": "Starter", "short": "I-5 Carmel Valley: pervious concrete and landscape",
   "scope": "Pervious and minor concrete and asphalt work on I-5 near Carmel Mountain Road and Carmel Valley Road, plus landscape changes: 440 one-gallon plants, rock and wood mulch, 20 decorative boulders, a small irrigation change (battery-powered controller, 15 gear-driven pop-ups, about 665 LF of pipe), and 154,000 SF of hydroseed with erosion control.",
   "why": "The smallest job here, with only 56 items. A landscape company won it against three civil contractors.",
   "license": "Class A, or a combination of Class C licenses that makes up the majority of the work",
   "advertised": 880000, "days": "60 working days, plus 750 working days of plant establishment"},
  {"id": "11-428704", "level": "Beginner", "short": "I-805 Chula Vista: recycled-water conversion and planting",
   "scope": "Convert the I-805 freeway irrigation in Chula Vista (Main St to Palomar St) from drinking water to recycled water: 6 new 32–40 station controllers plus 1 modified, a master valve, 4 flow sensors, 7,493 LF of 4\" mainline, gate valves, sprinklers, 200 valve box labels and recycled-water signs. Planting: 61,975 cuttings (Group H), 1,460 one-gallon, 110 five-gallon and 43 24-inch box trees, with mulch and compost.",
   "why": "Mostly irrigation and planting. Six bidders, and the top two were only $3,585 apart.",
   "license": "Class A or C-27",
   "advertised": 1510000, "days": "120 working days, plus 250 working days of plant establishment"},
  {"id": "11-431064", "level": "Intermediate", "short": "SR-905 Otay Mesa: new highway landscaping",
   "scope": "New landscaping on SR-905 from Caliente Avenue to La Media Road: 4 new 48-station controllers, 3 backflow preventers, 154 remote control valves, about 107,300 LF of supply pipe, 1,760 sprinklers plus 1,900 tree-well sprinklers; 9,840 container plants (1-gallon to 24-inch box, plus palms); 221,600 SF of gravel mulch, 94,100 SF of rock mulch, 3,290 CY of wood mulch and 797,000 SF of hydroseed.",
   "why": "Almost pure planting and irrigation, which is exactly the C-27 trade. The winner beat second place by only $6,973.",
   "license": "Class A or C-27",
   "advertised": 4260000, "days": "120 working days, plus 750 working days of plant establishment"},
  {"id": "11-428804", "level": "Advanced", "short": "I-805 / SR-905 San Ysidro: recycled-water conversion",
   "scope": "Convert irrigation on I-805 (San Ysidro Blvd to the Otay River) and SR-905 to recycled water: about 13,000 LF of new 6\" and 8\" C900 recycled-water distribution line with gate wells and air releases, 5 new controllers, 100 pressure-regulating valves, about 69,000 LF of supply pipe and sprinklers. Planting: 436,843 cuttings, 5,220 one-gallon and 480 fifteen-gallon plants. Also some excavation, slope paving, concrete, signs and striping.",
   "why": "Ten bidders, so you can see how wide a real bid spread gets.",
   "license": "Class A or C-27",
   "advertised": 6000000, "days": "200 working days, plus 625 working days of plant establishment"},
  {"id": "11-430674", "level": "Expert", "short": "SR-5/75/805/905: planting, irrigation and slope paving",
   "scope": "Planting and irrigation at several South County freeway locations: 14 new controllers, 21,358 LF of 8\" recycled-water line, about 149,000 LF of supply pipe, 4,440 sprinklers plus 2,560 tree-well sprinklers; 741,405 cuttings and about 37,350 container plants (1-gallon to 24-inch box, plus palms); 204,000 SF of gravel mulch, 55,900 SF of decomposed granite, 8,040 CY of wood mulch; plus roadway excavation and exposed-aggregate slope paving.",
   "why": "A large, real job with 120 items. Try it once the smaller ones feel comfortable.",
   "license": "Class A or C-27",
   "advertised": 11000000, "days": "200 working days, plus 750 working days of plant establishment"},
]

PLANT_KW = ("PLANT", "MULCH", "FERTILIZER", "IRON SULFATE", "WEED", "BOULDER", "ROCK BLANKET", "DECOMPOSED GRANITE", "EDGING", "COMPOST", "ROADSIDE CLEARING", "PRUNE")
IRR_KW = ("IRRIGATION", "SPRINKLER", "VALVE", "CONTROLLER", "ANTENNA", "FLOW SENSOR", "BACKFLOW", "SUPPLY LINE", "RECYCLED WATER", "CONDUCTORS", "PIPE CONDUIT", "WATER SERVICE", "VALVE BOX", "WATER LATERAL", "WATER METER")
EROSION_KW = ("HYDROSEED", "BONDED FIBER", "FIBER ROLLS", "EROSION CONTROL", "ROLLED EROSION", "CHECK DAM")

def category(code, desc):
    d = desc.upper()
    if code == "999990" or code.startswith(("070", "090", "12", "13", "14")):
        return "general"
    if any(k in d for k in ("TRAFFIC", "CRASH CUSHION", "SOLID WASTE", "PROTECTION FENCE", "LEAD COMPLIANCE", "DISPUTE", "SUBSURFACE LOCATOR", "DELETED PER ADDENDUM", "MESSAGE SIGN", "TEMPORARY RAILING")):
        return "general"
    if code == "210610": return "planting"
    if code.startswith("210") or any(k in d for k in EROSION_KW): return "erosion"
    if code == "206005": return "planting"
    if code.startswith(("206", "208")) or code == "870136" or code.startswith("995") or any(k in d for k in IRR_KW): return "irrigation"
    if code.startswith(("200", "202", "204", "205")) or any(k in d for k in PLANT_KW): return "planting"
    return "civil"

def widgets(page):
    res = {}
    def walk(c):
        for r in c.get("rows", []):
            for col in r.get("columns", []):
                for w in col.get("widgets", []):
                    ww = w["widget"]; res[ww.get("id")] = ww.get("data", {})
                walk(col)
    for c in page["result"]["containers"]: walk(c)
    return res

def docs(res):
    out = []
    def rec(t):
        for r in t.get("records", []):
            size = next((f["display_value"] for f in r["secondary_fields"] if f.get("label") == "Size bytes"), None)
            out.append({"tag": t.get("filePath") or t.get("tag"), "name": r["display_field"]["display_value"], "url": DL + r["sys_id"], "bytes": int(str(size).replace(",", "")) if size else None})
        for s in t.get("subTag", []) or []:
            if isinstance(s, dict): rec(s)
    for grp in res.get("cc_detail_bid_docs", {}).get("allTags", []) or []:
        for t in grp: rec(t)
    summ = []
    for grp in res.get("cc_post_bid_docs", {}).get("allTags", []) or []:
        for t in grp:
            for r in t.get("records", []):
                if (t.get("tag") or "") == "summary" or r["display_field"]["display_value"].endswith(t.get("tag", "") + ".pdf"):
                    pass
    return out

def label(d):
    n = d["name"]; tag = (d["tag"] or "").lower()
    if "plans" in n:
        m = re.search(r"pgs_(\d+)-(\d+)", n)
        base = "Plans" if "ad" not in re.sub(r"^\d\d-\w{6}", "", n).split("plans")[0] else "Addendum plans"
        am = re.search(r"ad(\d+)plans", n)
        if am: return "Addendum %d plans" % int(am.group(1))
        return "Plans" + (" (sheets %d–%d)" % (int(m.group(1)), int(m.group(2))) if m else "")
    if n.endswith("sp.pdf"): return "Special Provisions (specs)"
    if n.endswith("IH.pdf"): return "Information Handout (reports)"
    m = re.search(r"ad(\d+)\.pdf$", n)
    if m: return "Addendum %d" % int(m.group(1))
    return None  # wage rates, DBE forms and the like are left out

def main():
    out = []
    for meta in PROJECTS:
        c = meta["id"]; folder = os.path.join(DATA, c)
        data, checks = parse(os.path.join(folder, c + "_bid_summary.txt"), os.path.join(folder, c + "_bid_items_portal.csv"))
        bad = [x for x in checks if abs(x[2] - x[3]) >= 1]
        if bad: raise SystemExit("%s: bidder totals do not match: %r" % (c, bad))
        res = widgets(json.load(open(os.path.join(folder, "contract_page.json"))))
        det = {f.get("label"): f.get("display_value") for it in res.get("cc_details", {}).get("list", []) for f in it["secondary_fields"]}
        award = res.get("cc_detail_contract_award", {})
        items = data["items"]
        bidders = sorted(data["bidders"], key=lambda b: b["rank"])
        prices = []
        for b in bidders:
            p = data["prices"][str(b["rank"])]
            prices.append([p.get(str(it["no"])) for it in items])
        its = []
        for k, it in enumerate(items):
            col = [prices[j][k] for j in range(len(bidders))]
            # Caltrans sets some prices in the specs (e.g. rain event action plans); every bidder then shows the same number.
            fixed = len(bidders) > 1 and len(set(col)) == 1 and col[0] not in (None, 0)
            its.append({"no": it["no"], "code": it["code"], "desc": it["desc"], "unit": it["unit"], "qty": it["qty"],
                        "cat": category(it["code"], it["desc"]), "fixed": fixed, "deleted": "DELETED" in it["desc"]})
        aw = (award.get("awardedContractor") or "").upper()
        def same(a, b):
            norm = lambda s: re.sub(r"[^A-Z0-9 ]", "", s.upper()).replace("ENGINEERING", "ENGR").split()
            return set(norm(b)[:2]) <= set(norm(a))
        for b in bidders:
            b["awarded"] = bool(aw) and same(aw, b["name"])
        dl = [dict(d, label=label(d)) for d in docs(res)]
        dl = [d for d in dl if d["label"]]
        h = data["head"]
        out.append(dict(meta,
            title=det.get("Work Description"), location=det.get("Location Description"), route=det.get("County-Route-PM"),
            advertisedOn=det.get("Advertisement Date"), bidOpen=det.get("Bid Open Date"),
            awardDate=award.get("awardDate"), awardedTo=award.get("awardedContractor"),
            engineersEstimate=h["engineers_estimate"], proposalsIssued=h["proposals_issued"],
            contractPage=PAGE + c, documents=dl,
            bidders=[{"rank": b["rank"], "name": b["name"], "total": b["total"], "status": b.get("status"), "awarded": b["awarded"]} for b in bidders],
            items=its, prices=prices))
        print("%s: %d items, %d bidders, %d documents, awarded %s" % (c, len(its), len(bidders), len(dl), [b["name"] for b in bidders if b["awarded"]]))
    js = "// Generated by course/tools/build_realbids.py from Caltrans Bid Summaries. Do not edit by hand.\nwindow.REAL_BIDS = " + json.dumps(out, separators=(",", ":")) + ";\n"
    open(OUT, "w").write(js)
    print("wrote", OUT, len(js) // 1024, "KB")

if __name__ == "__main__":
    main()
