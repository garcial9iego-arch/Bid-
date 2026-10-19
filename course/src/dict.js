/* Bid Dictionary: searchable glossary built from window.GLOSSARY (src/glossary.js). */
(function(){
  const G = (window.GLOSSARY || []).slice().sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
  if(!G.length) return;
  const CATS = Array.from(new Set(G.map(g => g.cat))).sort();
  const norm = s => String(s || "").toLowerCase().replace(/<[^>]+>/g, " ").replace(/[^a-z0-9&/#"'.-]+/g, " ").trim();
  G.forEach(g => { g._k = norm(g.term + " " + (g.abbr || "") + " " + (g.also || "")); g._d = norm(g.def + " " + (g.ex || "")); g._a = norm(g.abbr); });
  let q = "", cat = "";
  function el(tag, cls, txt){ const e = document.createElement(tag); if(cls) e.className = cls; if(txt != null) e.textContent = txt; return e; }
  function match(){
    const t = norm(q);
    let list = cat ? G.filter(g => g.cat === cat) : G;
    if(!t) return list;
    const scored = [];
    list.forEach(g => {
      let s = 0;
      if(g._a === t || norm(g.term) === t) s = 4;
      else if(g._a.startsWith(t) || norm(g.term).startsWith(t)) s = 3;
      else if(g._k.includes(t)) s = 2;
      else if(t.split(" ").every(w => g._k.includes(w) || g._d.includes(w))) s = 1;
      if(s) scored.push([s, g]);
    });
    return scored.sort((a, b) => b[0] - a[0]).map(x => x[1]);
  }
  function entry(g){
    const d = el("div", "dict-e"); d.id = "d-" + norm(g.term).replace(/\s+/g, "-");
    const h = el("dt");
    h.append(el("span", "dict-t", g.term));
    if(g.abbr) h.append(el("span", "dict-a", g.abbr));
    const dd = el("dd");
    const meta = el("div", "dict-m"); meta.append(el("span", null, g.cat));
    if(g.also) meta.append(el("span", null, "Also: " + g.also));
    if(g.mod != null && window.COURSE_MODULES && window.COURSE_MODULES.some(m => m.n === g.mod)){ const a = el("a", null, "Taught in Module " + g.mod); a.href = "#m" + g.mod + "-1"; meta.append(a); }
    const def = el("div", "dict-d"); def.innerHTML = g.def;
    dd.append(def);
    if(g.ex){ const ex = el("div", "dict-x"); ex.innerHTML = g.ex; dd.append(ex); }
    dd.append(meta);
    d.append(h, dd); return d;
  }
  function render(main){
    main.innerHTML = "";
    const head = el("section", "dict-head");
    head.innerHTML = '<span class="eyebrow">Reference</span><h1>Bid Dictionary</h1><p>Words, abbreviations and phrases you will see on plans, specs, bid forms and contracts, or hear on calls and job walks. Type a word or an abbreviation like <strong>NIC</strong>, <strong>LF</strong> or <strong>TYP</strong>.</p>';
    const bar = el("div", "dict-bar");
    const inp = el("input"); inp.type = "search"; inp.placeholder = "Search, e.g. OC, retention, fine grade"; inp.value = q; inp.setAttribute("aria-label", "Search the dictionary");
    const sel = el("select"); sel.setAttribute("aria-label", "Category");
    sel.append(new Option("All categories (" + G.length + ")", ""));
    CATS.forEach(c => sel.append(new Option(c + " (" + G.filter(g => g.cat === c).length + ")", c)));
    sel.value = cat;
    bar.append(inp, sel);
    const count = el("p", "dict-count");
    const letters = el("nav", "dict-az"); letters.setAttribute("aria-label", "Jump to letter");
    const out = el("dl", "dict-list");
    head.append(bar, count, letters);
    main.append(head, out);
    function draw(){
      const list = match();
      count.textContent = list.length + (list.length === 1 ? " entry" : " entries") + (q || cat ? " found" : "");
      out.innerHTML = ""; letters.innerHTML = "";
      if(!list.length){ out.append(el("p", "dict-none", "Nothing found. Try a shorter word, or check the spelling. If a word from a real bid is missing, write it in your notebook and ask your estimator or the agency.")); return; }
      const grouped = !q;
      let last = "";
      list.forEach(g => {
        const L = /[a-z]/i.test(g.term[0]) ? g.term[0].toUpperCase() : "#";
        if(grouped && L !== last){
          last = L; const hh = el("h2", "dict-L", L); hh.id = "dict-L-" + (L === "#" ? "num" : L); out.append(hh);
          const a = el("button", null, L); a.type = "button"; a.onclick = () => hh.scrollIntoView({ block: "start", behavior: "smooth" }); letters.append(a);
        }
        out.append(entry(g));
      });
    }
    let tm; inp.oninput = () => { clearTimeout(tm); tm = setTimeout(() => { q = inp.value; draw(); }, 120); };
    sel.onchange = () => { cat = sel.value; draw(); };
    draw();
  }
  window.DICT = { render, count: G.length };
})();
