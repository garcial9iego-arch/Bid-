/* Real Bid Lab: price real Caltrans District 11 planting and irrigation jobs,
   then compare against every bidder's actual line-item prices. Data: window.REAL_BIDS. */
window.LAB = (function(){
const P = window.REAL_BIDS || [];
const CATS = [
  ["planting", "Planting & soil"],
  ["irrigation", "Irrigation"],
  ["erosion", "Erosion control"],
  ["general", "General, traffic & storm water"],
  ["civil", "Civil & other"]
];
const SUB_SCOPE = ["planting", "irrigation", "erosion"];
const store = {
  get(k, d){ try { const v = localStorage.getItem("clb:lab:" + k); return v == null ? d : JSON.parse(v); } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem("clb:lab:" + k, JSON.stringify(v)); } catch(e){} }
};
const money = v => v == null || !isFinite(v) ? "—" : (v < 0 ? "−$" : "$") + Math.abs(v).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const unitMoney = v => v == null || !isFinite(v) ? "—" : "$" + v.toLocaleString("en-US", { minimumFractionDigits: v < 100 && v % 1 ? 2 : 0, maximumFractionDigits: 2 });
const pct = v => v == null || !isFinite(v) ? "—" : (v > 0 ? "+" : v < 0 ? "−" : "") + Math.abs(v * 100).toFixed(1) + "%";
const qtyFmt = v => v.toLocaleString("en-US", { maximumFractionDigits: 2 });
const dateFmt = s => { if(!s) return "—"; const d = new Date(s + "T12:00:00"); return isNaN(d) ? s : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }); };
const titleCase = s => s.toLowerCase().replace(/(^|[\s\-\/&(])([a-z])/g, (m, a, c) => a + c.toUpperCase())
  .replace(/\bLlc\b/g, "LLC").replace(/\bDba\b/g, "dba").replace(/\bSd\b/g, "SD");
function el(tag, cls, html){ const e = document.createElement(tag); if(cls) e.className = cls; if(html != null) e.innerHTML = html; return e; }
function txt(tag, cls, t){ const e = document.createElement(tag); if(cls) e.className = cls; e.textContent = t; return e; }
function median(a){ const s = a.filter(x => x != null).sort((x, y) => x - y); if(!s.length) return null; const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }

function state(p){
  const s = store.get(p.id, null) || {};
  if(!s.prices) s.prices = {};
  if(!s.cats) s.cats = SUB_SCOPE.slice();
  return s;
}
function save(p, s){ store.set(p.id, s); }
function inScope(p, s){ return p.items.map((it, k) => ({ it, k })).filter(x => !x.it.deleted && s.cats.includes(x.it.cat)); }
function yourUnit(p, s, it, k){ return it.fixed ? p.prices[0][k] : (s.prices[it.no] === "" || s.prices[it.no] == null ? null : +s.prices[it.no]); }
function yourTotal(p, s){
  let t = 0, priced = 0, n = 0;
  inScope(p, s).forEach(({ it, k }) => { n++; const u = yourUnit(p, s, it, k); if(u != null && isFinite(u)){ t += u * it.qty; priced++; } });
  return { total: t, priced, n };
}
function bidderScopeTotal(p, s, j){ return inScope(p, s).reduce((a, { it, k }) => a + (p.prices[j][k] || 0) * it.qty, 0); }
function winnerIndex(p){ const w = p.bidders.findIndex(b => b.awarded); return w < 0 ? 0 : w; }
function fullScope(s){ return CATS.every(c => s.cats.includes(c[0])); }

/* ---------- Lab home ---------- */
function renderList(main, go){
  main.innerHTML = "";
  const hero = el("section", "home-hero");
  hero.append(txt("span", "eyebrow", "Real Bid Lab · Caltrans District 11 · San Diego County"));
  hero.append(txt("h1", null, "Price a real job, then see how close you got"));
  hero.append(el("p", null, "Each job below was really advertised and bid in San Diego County. You get the actual plans, specifications and bid item list. Enter your unit prices, then reveal what every contractor bid, item by item, and where your number would have placed."));
  main.append(hero);
  const how = el("section", "how");
  how.innerHTML = [
    ["1 · Read the documents", "Open the plans and Special Provisions. Find your scope, plant sizes, establishment period and anything unusual."],
    ["2 · Pick your scope", "Price only the landscape items, as a sub would quote a prime, or price the whole job as the prime."],
    ["3 · Price every item", "Enter a unit price per item. Quantities are Caltrans's, as on any public bid. Your work is saved in this browser."],
    ["4 · Reveal and learn", "See your rank, how far off the winner you were, and the items that cost you the most."]
  ].map(x => '<div><h3>' + x[0] + '</h3><p>' + x[1] + '</p></div>').join("");
  main.append(how);
  const wrap = el("div", "tablewrap");
  const t = el("table");
  t.innerHTML = '<thead><tr><th>Level</th><th>Contract</th><th>Job</th><th>Bid opened</th><th class="num">Bidders</th><th class="num">Advertised estimate</th><th>Your bid</th></tr></thead>';
  const tb = el("tbody");
  P.forEach(p => {
    const s = state(p); const yt = yourTotal(p, s);
    const tr = el("tr");
    tr.append(txt("td", null, p.level), txt("td", "mono", p.id));
    const td = el("td"); const b = txt("button", "rowlink", p.short); b.type = "button"; b.onclick = () => go("lab", p.id); td.append(b);
    td.append(txt("div", "note", p.why)); tr.append(td);
    tr.append(txt("td", null, dateFmt(p.bidOpen)), txt("td", "num", String(p.bidders.length)), txt("td", "num", money(p.advertised)));
    let st = "Not started";
    if(yt.priced) st = s.revealed ? "Revealed · " + pct(yt.total / bidderScopeTotal(p, s, winnerIndex(p)) - 1) + " vs winner" : yt.priced + " of " + yt.n + " items priced";
    tr.append(el("td", null, '<span class="status ' + (s.revealed ? "ready" : "soon") + '"></span>'));
    tr.lastChild.firstChild.textContent = st;
    tb.append(tr);
  });
  t.append(tb); wrap.append(t); main.append(wrap);
  main.append(el("p", "note", 'Source: Caltrans Contractors Corner (bid item lists, plans, Special Provisions and Bid Summaries). Every bidder\'s line items in this lab were re-added and match Caltrans\'s printed totals to the cent. These bids are from 2021–2022; costs have risen since, so pricing with today\'s costs will usually land higher.'));
  main.lastChild.style.marginTop = "14px";
}

/* ---------- Project page ---------- */
function renderProject(main, id, go){
  const p = P.find(x => x.id === id); if(!p){ renderList(main, go); return; }
  const s = state(p);
  main.innerHTML = "";
  const back = txt("button", "ghost", "← All real bids"); back.type = "button"; back.onclick = () => go("lab"); main.append(back);
  const head = el("div", "mhead"); head.style.marginTop = "12px";
  head.append(txt("span", "eyebrow", p.level + " · Caltrans contract " + p.id + " · bid opened " + dateFmt(p.bidOpen)));
  head.append(txt("h1", null, p.short));
  main.append(head);

  const sheet = el("article", "sheet");
  const body = el("div", "sheet-body");
  body.append(txt("p", "lead", p.scope));
  if(p.id === "11-428704"){
    const w = el("div", "callout ex");
    w.append(txt("span", "lbl", "Full walkthrough"));
    w.append(el("div", null, '<p>Module 15 walks through this exact job from start to finish: every document, the hidden costs, the DBE rule that sank the lowest bid, and how all six bidders priced it. <a href="#m15-1">Open the walkthrough →</a></p>'));
    body.append(w);
  }
  const facts = el("dl", "facts");
  [["Caltrans description", p.title], ["Location", titleCase(p.location || "")], ["Route / postmile", p.route], ["License required", p.license],
   ["Time allowed", p.days], ["Advertised estimate", money(p.advertised) + " (printed in the specs)"], ["Bid packages issued", String(p.proposalsIssued)], ["Bidders", String(p.bidders.length)]]
    .forEach(([k, v]) => { const d = el("div"); d.append(txt("dt", null, k), txt("dd", null, v || "—")); facts.append(d); });
  body.append(facts);

  const docs = el("div", "docs");
  docs.append(txt("h3", null, "Bid documents"));
  const ul = el("ul");
  p.documents.forEach(d => {
    const li = el("li"); const a = txt("a", null, d.label); a.href = d.url; a.target = "_blank"; a.rel = "noopener";
    li.append(a, txt("span", "note", " · PDF" + (d.bytes ? ", " + (d.bytes / 1048576).toFixed(d.bytes > 1048576 ? 0 : 1) + " MB" : "")));
    ul.append(li);
  });
  const li2 = el("li"); const a2 = txt("a", null, "Contract page on Caltrans Contractors Corner"); a2.href = p.contractPage; a2.target = "_blank"; a2.rel = "noopener"; li2.append(a2); ul.append(li2);
  const li3 = el("li"); const a3 = txt("a", null, "Caltrans 2018 Standard Specifications and Standard Plans"); a3.href = "https://dot.ca.gov/programs/design/ccs-standard-plans-and-standard-specifications"; a3.target = "_blank"; a3.rel = "noopener"; li3.append(a3); ul.append(li3);
  docs.append(ul);
  docs.append(el("p", "note", "Plan sets are large (10–25 MB). The Special Provisions list the plant groups, the establishment period, the water meter fees and Caltrans's set prices. Read the addenda: they change the plans and the item list."));
  body.append(docs);

  const tips = el("details", "deeper");
  tips.append(txt("summary", null, "Pricing help: plant groups, units and Caltrans terms"));
  tips.append(el("div", "inner", `
<p><strong>Caltrans plant groups</strong> (from the Special Provisions): A = No. 1 container (1-gallon) · B = No. 5 container (5-gallon) · U = No. 15 container (15-gallon) · K = 24-inch box · Z = palm tree · H = cutting (for example ice plant or other groundcover cuttings).</p>
<p><strong>Units:</strong> EA each · LF linear feet · SQFT square feet · SQYD square yards · CY cubic yards · LB pounds · LS lump sum (one price for the whole item) · WDAY working day · HR hour.</p>
<ul>
<li><strong>Time-related overhead (WDAY):</strong> your daily field overhead (supervision, trucks, office trailer) per working day.</li>
<li><strong>Plant establishment work:</strong> everything you do during the establishment period: watering, weeding, replacing dead plants, reports. On these jobs it runs 250–750 working days, so it is real money.</li>
<li><strong>Weed germination:</strong> watering the area to sprout weeds, then killing them before planting.</li>
<li><strong>Mobilization:</strong> moving onto the job. Caltrans limits how much it pays early, but bidders often load overhead here.</li>
<li><strong>Items marked "set by Caltrans"</strong> have a price fixed in the specs. Every bidder uses the same number, so they're filled in for you.</li>
</ul>`));
  body.append(tips);
  sheet.append(body); main.append(sheet);

  /* Scope picker */
  const scope = el("section", "scope");
  scope.append(txt("h2", null, "1 · Choose what you're pricing"));
  const presets = el("div", "btnrow");
  const bSub = txt("button", "btn", "Landscape sub scope"); bSub.type = "button";
  const bAll = txt("button", "btn", "Full prime bid"); bAll.type = "button";
  presets.append(bSub, bAll);
  scope.append(presets);
  const boxes = el("div", "catboxes");
  CATS.forEach(([key, label]) => {
    const n = p.items.filter(it => it.cat === key && !it.deleted).length; if(!n) return;
    const id = "cat-" + p.id + "-" + key;
    const lab = el("label", "catbox"); const cb = document.createElement("input"); cb.type = "checkbox"; cb.id = id; cb.checked = s.cats.includes(key);
    cb.onchange = () => { s.cats = CATS.map(c => c[0]).filter(k => k === key ? cb.checked : s.cats.includes(k)); save(p, s); drawSheet(); };
    lab.htmlFor = id; lab.append(cb, txt("span", null, label + " (" + n + ")")); boxes.append(lab);
  });
  scope.append(boxes);
  bSub.onclick = () => { s.cats = SUB_SCOPE.slice(); save(p, s); renderProject(main, id, go); };
  bAll.onclick = () => { s.cats = CATS.map(c => c[0]); save(p, s); renderProject(main, id, go); };
  scope.append(el("p", "note", "Landscape sub scope is planting, irrigation and erosion control: what a C-27 company would quote to a prime. Full prime bid adds traffic control, storm water, mobilization and civil work, as the companies below actually bid it."));
  main.append(scope);

  /* Bid sheet */
  const sheetSec = el("section", "bidsheet");
  sheetSec.append(txt("h2", null, "2 · Price each item"));
  const totalBar = el("div", "totalbar");
  sheetSec.append(totalBar);
  const tableWrap = el("div", "tablewrap"); sheetSec.append(tableWrap);
  const actions = el("div", "btnrow"); sheetSec.append(actions);
  main.append(sheetSec);
  const results = el("section", "results"); main.append(results);

  function drawTotal(){
    const yt = yourTotal(p, s);
    totalBar.innerHTML = "";
    const a = el("div"); a.append(txt("span", "eyebrow", "Your bid for this scope"), txt("div", "bigtotal", money(yt.total)));
    const b = txt("div", "note", yt.priced + " of " + yt.n + " items priced" + (yt.priced < yt.n ? " · unpriced items count as $0" : ""));
    totalBar.append(a, b);
  }

  function drawSheet(){
    const rev = !!s.revealed;
    const w = winnerIndex(p);
    const t = el("table", "items");
    t.innerHTML = '<thead><tr><th>No.</th><th>Item</th><th>Unit</th><th class="num">Qty</th><th class="num">Your unit price</th><th class="num">Your amount</th>' +
      (rev ? '<th class="num">Winner unit price</th><th class="num">All bidders (low–median–high)</th><th class="num">You vs winner</th>' : '') + '</tr></thead>';
    const tb = el("tbody");
    CATS.forEach(([key, label]) => {
      if(!s.cats.includes(key)) return;
      const rows = p.items.map((it, k) => ({ it, k })).filter(x => x.it.cat === key && !x.it.deleted);
      if(!rows.length) return;
      const hr = el("tr", "grouprow"); const hc = txt("td", null, label); hc.colSpan = rev ? 9 : 6; hr.append(hc); tb.append(hr);
      let sub = 0, subW = 0;
      rows.forEach(({ it, k }) => {
        const tr = el("tr");
        tr.append(txt("td", "mono", String(it.no)));
        const d = el("td", "desc"); d.append(txt("span", null, it.desc));
        d.append(txt("span", "code", "Item " + it.code + (it.fixed ? " · set by Caltrans" : "")));
        tr.append(d, txt("td", "mono", it.unit), txt("td", "num", qtyFmt(it.qty)));
        const pc = el("td", "num");
        const inp = document.createElement("input"); inp.type = "number"; inp.min = "0"; inp.step = "any"; inp.inputMode = "decimal";
        inp.id = "u-" + p.id + "-" + it.no; inp.setAttribute("aria-label", "Your unit price for item " + it.no + ", " + it.desc);
        if(it.fixed){ inp.value = p.prices[0][k]; inp.disabled = true; }
        else if(s.prices[it.no] != null) inp.value = s.prices[it.no];
        const amt = el("td", "num");
        const u0 = yourUnit(p, s, it, k);
        amt.textContent = u0 == null ? "—" : money(u0 * it.qty);
        if(u0 != null) sub += u0 * it.qty;
        inp.oninput = () => {
          s.prices[it.no] = inp.value === "" ? null : inp.value; save(p, s);
          const u = yourUnit(p, s, it, k); amt.textContent = u == null ? "—" : money(u * it.qty);
          drawTotal(); if(s.revealed) drawResults();
        };
        pc.append(inp); tr.append(pc, amt);
        if(rev){
          const wu = p.prices[w][k]; subW += (wu || 0) * it.qty;
          const col = p.prices.map(r => r[k]).filter(x => x != null);
          tr.append(txt("td", "num", unitMoney(wu)));
          tr.append(txt("td", "num range", unitMoney(Math.min(...col)) + " – " + unitMoney(median(col)) + " – " + unitMoney(Math.max(...col))));
          const diff = u0 != null && wu ? u0 / wu - 1 : null;
          const dc = txt("td", "num", diff == null ? "—" : pct(diff));
          if(diff != null && Math.abs(diff) > 0.25 && !it.fixed) dc.className += diff > 0 ? " hi" : " lo";
          tr.append(dc);
        }
        tb.append(tr);
      });
      const sr = el("tr", "subrow");
      const sl = txt("td", null, label + " subtotal"); sl.colSpan = 5; sr.append(sl, txt("td", "num", money(sub)));
      if(rev){ sr.append(txt("td", "num", money(subW))); sr.append(el("td")); sr.append(txt("td", "num", subW ? pct(sub / subW - 1) : "—")); }
      tb.append(sr);
    });
    t.append(tb); tableWrap.innerHTML = ""; tableWrap.append(t);
    drawTotal();
    drawActions();
    drawResults();
  }

  function drawActions(){
    actions.innerHTML = "";
    if(!s.revealed){
      const r = txt("button", "btn primary", "3 · Reveal the real bids"); r.type = "button";
      r.onclick = () => {
        const yt = yourTotal(p, s);
        actions.innerHTML = "";
        const c = el("div", "confirm");
        c.append(txt("span", null, yt.priced < yt.n ? "You've priced " + yt.priced + " of " + yt.n + " items. Reveal anyway? You can keep editing afterward." : "Reveal every bidder's prices? You can keep editing afterward."));
        const y = txt("button", "btn primary", "Reveal"); y.type = "button"; y.onclick = () => { s.revealed = true; save(p, s); drawSheet(); results.scrollIntoView({ block: "start" }); };
        const n = txt("button", "btn", "Not yet"); n.type = "button"; n.onclick = drawActions;
        c.append(y, n); actions.append(c);
      };
      actions.append(r);
    } else {
      const h = txt("button", "btn", "Hide results and try again"); h.type = "button"; h.onclick = () => { s.revealed = false; save(p, s); drawSheet(); };
      actions.append(h);
    }
    const cp = txt("button", "ghost", "Copy my bid"); cp.type = "button";
    cp.onclick = () => {
      const lines = [p.id + " " + p.short, "Item\tDescription\tUnit\tQty\tUnit price\tAmount"];
      inScope(p, s).forEach(({ it, k }) => { const u = yourUnit(p, s, it, k); lines.push([it.no, it.desc, it.unit, it.qty, u == null ? "" : u, u == null ? "" : (u * it.qty).toFixed(2)].join("\t")); });
      lines.push("TOTAL\t\t\t\t\t" + yourTotal(p, s).total.toFixed(2));
      const text = lines.join("\n");
      const done = () => { cp.textContent = "Copied"; setTimeout(() => cp.textContent = "Copy my bid", 1600); };
      try { navigator.clipboard.writeText(text).then(done, () => fallback(text)); } catch(e){ fallback(text); }
    };
    function fallback(text){ const ta = el("textarea", "copyfallback"); ta.value = text; ta.setAttribute("aria-label", "Your bid as text"); actions.append(ta); ta.select(); }
    const clr = txt("button", "ghost", "Clear my prices"); clr.type = "button";
    clr.onclick = () => {
      const box = el("span", "confirm"); clr.replaceWith(box);
      box.append(txt("span", null, "Erase every price you entered for this job?"));
      const y = txt("button", "btn", "Erase"); y.type = "button"; y.onclick = () => { s.prices = {}; s.revealed = false; save(p, s); renderProject(main, id, go); };
      const n = txt("button", "ghost", "Keep them"); n.type = "button"; n.onclick = drawActions;
      box.append(y, n);
    };
    actions.append(cp, clr);
  }

  function drawResults(){
    results.innerHTML = "";
    if(!s.revealed) return;
    const yt = yourTotal(p, s); const w = winnerIndex(p);
    const rows = p.bidders.map((b, j) => ({ name: titleCase(b.name), total: bidderScopeTotal(p, s, j), b, you: false }));
    rows.push({ name: "You", total: yt.total, you: true });
    const valid = rows.filter(r => r.you || !r.b.status);
    valid.sort((a, b) => a.total - b.total);
    // Ties count in your favor: your place is 1 + the number of bids strictly below yours.
    const rank = valid.filter(r => !r.you && r.total < yt.total).length + 1;
    const wTot = rows[w].total;
    const off = wTot ? yt.total / wTot - 1 : 0;
    const offText = Math.abs(off) < 0.0005 ? "right at" : pct(off).replace(/^[+−]/, "") + (off > 0 ? " above" : " below");
    results.append(txt("h2", null, "4 · How your bid compares"));
    const head = el("div", "verdict");
    const scopeName = fullScope(s) ? "the full bid" : "the items you priced (" + s.cats.map(c => CATS.find(x => x[0] === c)[1].toLowerCase()).join(", ") + ")";
    head.append(txt("p", "lead", "Across " + scopeName + ", you would have placed " + ordinal(rank) + " of " + valid.length + ". You were " + offText + " the winning bid of " + money(wTot) + " (" + titleCase(p.bidders[w].name) + ")."));
    if(yt.priced < yt.n) head.append(txt("p", "note", "You left " + (yt.n - yt.priced) + " items unpriced; they count as $0, which makes your total look lower than it really is."));
    if(!fullScope(s)) head.append(txt("p", "note", "Bidders' totals here add up only the same items you priced. The companies bid the whole job, so they may have moved money between items (for example into mobilization or traffic control)."));
    results.append(head);

    /* Ranking bars */
    const max = Math.max(...rows.map(r => r.total), fullScope(s) ? p.engineersEstimate : 0) || 1;
    const chart = el("div", "rankchart");
    const all = rows.slice().sort((a, b) => a.total - b.total);
    all.forEach(r => {
      const line = el("div", "rk" + (r.you ? " you" : "") + (r.b && r.b.awarded ? " won" : ""));
      const nm = el("div", "rk-name"); nm.append(txt("span", null, r.name));
      if(r.b && r.b.awarded) nm.append(txt("span", "tag won", "Awarded"));
      if(r.b && r.b.status) nm.append(txt("span", "tag nr", r.b.status));
      const bar = el("div", "rk-bar"); const fill = el("i"); fill.style.width = (r.total / max * 100).toFixed(1) + "%"; bar.append(fill);
      line.append(nm, bar, txt("div", "rk-val", money(r.total) + (r.you ? "" : "  " + pct(r.total / wTot - 1))));
      chart.append(line);
    });
    if(fullScope(s) && p.engineersEstimate){
      const line = el("div", "rk ee"); const nm = el("div", "rk-name"); nm.append(txt("span", null, "Caltrans engineer's estimate"));
      const bar = el("div", "rk-bar"); const fill = el("i"); fill.style.width = (p.engineersEstimate / max * 100).toFixed(1) + "%"; bar.append(fill);
      line.append(nm, bar, txt("div", "rk-val", money(p.engineersEstimate) + "  " + pct(p.engineersEstimate / wTot - 1))); chart.append(line);
    }
    results.append(chart);

    /* Biggest differences */
    const diffs = inScope(p, s).filter(x => !x.it.fixed).map(({ it, k }) => {
      const u = yourUnit(p, s, it, k); const wu = p.prices[w][k] || 0;
      return { it, k, you: u == null ? 0 : u * it.qty, win: wu * it.qty, priced: u != null };
    }).map(d => Object.assign(d, { gap: d.you - d.win })).sort((a, b) => Math.abs(b.gap) - Math.abs(a.gap)).slice(0, 8);
    results.append(txt("h3", null, "Where your number differed most from the winner"));
    const dw = el("div", "tablewrap"); const dt = el("table");
    dt.innerHTML = '<thead><tr><th>No.</th><th>Item</th><th class="num">Your amount</th><th class="num">Winner amount</th><th class="num">Difference</th></tr></thead>';
    const db = el("tbody");
    diffs.forEach(d => {
      const tr = el("tr");
      tr.append(txt("td", "mono", String(d.it.no)), txt("td", null, d.it.desc + (d.priced ? "" : " (not priced)")), txt("td", "num", money(d.you)), txt("td", "num", money(d.win)));
      const g = txt("td", "num", (d.gap > 0 ? "+" : "") + money(d.gap)); if(Math.abs(d.gap) >= 1) g.className += d.gap > 0 ? " hi" : " lo"; tr.append(g); db.append(tr);
    });
    dt.append(db); dw.append(dt); results.append(dw);

    const learn = el("div", "callout ex");
    learn.append(txt("span", "lbl", "How to learn from this"));
    learn.append(el("div", null, `<ul>
<li>Look at the <strong>low–median–high</strong> range on each item, not only the winner. One bidder's unit price can be odd; the median shows what the market usually charges.</li>
<li>Big gaps on <strong>lump sum items</strong> (plant establishment, mobilization, traffic control) usually mean a different idea of scope or duration. Reread that section of the Special Provisions.</li>
<li>Big gaps on <strong>unit items</strong> (pipe, plants, sprinklers) usually mean a production rate or material price that's off. Check your crew output and supplier quotes.</li>
<li>Write down three lessons in your bid notebook before you try the next job.</li></ul>`));
    results.append(learn);
  }

  drawSheet();
}
function ordinal(n){ const s = ["th", "st", "nd", "rd"], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }

return { renderList, renderProject, projects: P };
})();
