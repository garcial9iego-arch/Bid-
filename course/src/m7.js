(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 7, hours: 8, title: "Planting, Soil and Hardscape Takeoff",
slides: [

{ t: "cover",
  h: "Planting, Soil and Hardscape Takeoff",
  lead: "Count plants by species and size, convert areas into plant counts, cubic yards, tons and pounds, and carry every per-plant and per-area rate the legend hides.",
  objectives: [
    "Count plants by symbol and callout, by container size and Caltrans plant group, and turn every legend rate column into a quantity",
    "Compute groundcover from area and square or triangular spacing, net of setbacks, and apply slope factors where items are paid on surface area",
    "Take off trees, palms, soil prep from a soils report, mulch, DG, rock, boulders, seed (including PLS), hydroseed and establishment",
    "Take off the hardscape that belongs in a C-27 landscape scope",
    "Reconcile against real Caltrans planting quantity sheets (11-428704, 11-431064) and flag the quantities that don't add up"
  ],
  time: [["Reading and slides", "2.25 h"], ["Practice assignments", "5.75 h"], ["Module total", "8 h"]],
  body: `<p>Same rules as <a href="#m6-1">Module 6</a>: quantities first, price later. Two complete takeoffs (the Module 6 medical office and retail lot, now planted) plus real quantity sheets from two Caltrans freeway jobs.</p>`
},

{ h: "Scope and routine",
  lead: "A planting plan carries far more quantities than plants; the per-plant and per-area rates are where planting takeoffs lose money.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Group</th><th>Items</th><th>Units</th></tr></thead>
<tbody>
<tr><td>Plants</td><td>Trees, shrubs, groundcover, vines, cuttings, plugs</td><td>EA by size</td></tr>
<tr><td>Tree extras</td><td>Stakes, ties, guys, root barrier, basins, tablets</td><td>EA, LF</td></tr>
<tr><td>Soil prep</td><td>Fine grading, ripping, amendments, fertilizer, soil tests</td><td>SF, CY, LB</td></tr>
<tr><td>Weed control</td><td>Abatement, weed germination (grow-and-kill) cycles</td><td>SF or SQYD</td></tr>
<tr><td>Top dressing</td><td>Wood mulch, compost, DG (decomposed granite), rock and gravel mulch, cobble</td><td>CY or SF</td></tr>
<tr><td>Turf and seed</td><td>Sod, seed, hydroseed, blankets, fiber rolls</td><td>SF, LB, LF</td></tr>
<tr><td>Hardscape in scope</td><td>Edging, DG paving, boulders, low walls, pavers</td><td>LF, SF, EA</td></tr>
<tr><td>Care after planting</td><td>Establishment, maintenance, replacements</td><td>Days, visits, LS</td></tr>
</tbody></table></div>
<p><strong>Routine:</strong> documents and addenda (including the soils report) · sheet list and scale · legend to lines, one per plant per size plus one per rate column · notes, details, spec (spacing pattern, setbacks, staking, soil rates, mulch depth, establishment) · plants by sheet · areas by type, noting slopes · rates to materials · hardscape in scope · establishment · plant vs. irrigation cross-check and engineer's sheet · freeze.</p>`,
  ex: `<p>Caltrans 11-430674 (SR-5/75/805/905) planting items: Groups H, K, Z, A, B and U plants; rock mulch in three types (SQFT); gravel mulch 204,000 SQFT; DG 55,900 SQFT; wood mulch 8,040 CY; edging 3,660 LF; hydroseed 315,000 SQFT; compost 470 CY.</p>`,
  src: "Caltrans contract 11-430674 Bid Item List, items 30–47, 99–100."
},

{ h: "Counting plants: symbols, callouts, groups",
  lead: "Count symbols one by one or sum callout numbers, one line per plant per size, subtotaled by sheet; Caltrans pays each container size as its own group letter.",
  body: `<ul>
<li><strong>Symbols:</strong> usual on private plans for trees and shrubs; mark each as counted.</li>
<li><strong>Callouts</strong> ("50 AEO HAW"): usual on Caltrans and for groundcover; sum per plant per sheet. Symbols may be scattered and not one per plant.</li>
<li>Subtotal by sheet so you can compare to quantity tables organized by sheet; count to match lines only.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Caltrans group</th><th>Description</th><th class="num">Container (cu in)</th></tr></thead>
<tbody>
<tr><td>A / B / U</td><td>No. 1 / No. 5 / No. 15 container</td><td class="num">152–251 / 785–1,242 / 2,768–3,696</td></tr>
<tr><td>K</td><td>24" box</td><td class="num">5,775–6,861</td></tr>
<tr><td>H / F / P / S</td><td>Cutting / flats / plugs / seedling (bare root)</td><td></td></tr>
<tr><td>C / E / I / M / O / Z</td><td>Balled and burlapped / bulb / pot / liner / acorn / palm</td><td></td></tr>
</tbody></table></div>
<p>Private plans list sizes directly (#1, #5, #15, 24", 36", 48" box, flats, plugs). Never combine sizes of one species.</p>`,
  ex: `<p>11-428704 PP-7: "50 AEO HAW, 50 ALO BLU, 50 ALO STR, 50 BAC PIL, 50 SED NUS," codes from the underlined parts of the PL-1 botanical names (AEOnium HAWorthii, ALOe 'BLUe Elf'). PL-1 note 11: shrubs "randomly planted as singles and groups of three or five throughout designated area," so count the callout, not the symbols. The job had four plant items: Group A (1,460), B (110 ghost aloe), H (61,975 iceplant cuttings), K (43 pines).</p>`,
  src: "11-428704 plans PL-1, PP-7, Bid Item List; Caltrans Revised Standard Specifications 20-3.01B(2)(a) plant group table (in the 11-428704 Special Provisions)."
},

{ h: "Every legend column is a quantity",
  lead: "A Caltrans plant legend is a takeoff sheet: each column is a rate or rule you multiply by the plant count or subtract from the bed area.",
  body: `<p>11-431064 sheet PL-1 (SR-905, Otay Mesa):</p>
<div class="tablewrap"><table>
<thead><tr><th>Column</th><th>Example</th><th>Use</th></tr></thead>
<tbody>
<tr><td>Plant group</td><td>A, B, K, U, Z</td><td>Bid item</td></tr>
<tr><td>Hole size</td><td>"Sufficient to receive root ball" or per tree hole detail</td><td>Dig labor; amended backfill if detailed</td></tr>
<tr><td>Basin type</td><td>1</td><td>Basin detail to build</td></tr>
<tr><td>Wood mulch, basin (CY)</td><td>0.03 A, 0.04 B, 0.08 K, 0.06 U</td><td>Plants × rate</td></tr>
<tr><td>Packet fertilizer (EA)</td><td>1 A, 2 B, 5 K, 3 U, 5 palm</td><td>Plants × rate</td></tr>
<tr><td>Staking</td><td>Per standard detail for trees</td><td>Stakes, ties per tree</td></tr>
<tr><td>On-center spacing</td><td>Group A shrubs at 8, 5, 6, 3 ft; others "as shown"</td><td>Plants from area where no callout</td></tr>
<tr><td>Minimum distance from ETW (edge of traveled way), EP (edge of pavement), fence, wall, paved ditch, earth ditch</td><td>3, 3, 4, 3, 3, 3 ft</td><td>No-plant strips out of bed areas</td></tr>
<tr><td>Notes</td><td>Note 1: rates "per plant" unless per SQFT or SQYD. Note 10: plants sourced from San Diego and Orange County only.</td><td>How to read rates; nursery limits for <a href="#m8-1">Module 8</a></td></tr>
</tbody></table></div>`,
  watch: `<p>A 3-ft setback along 1,000 ft of pavement is 3,000 SF with no plants that may still get mulch or weed control. Measure what the plan hatches.</p>`,
  src: "Caltrans 11-431064 plans, sheet PL-1 (Plant Legend and notes)."
},

{ h: "Per-plant rates to totals: 11-431064 PQ-1",
  lead: "Re-multiply every rate yourself; the sheet's own arithmetic can be off.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Group</th><th class="num">Plants</th><th class="num">Packets</th><th class="num">Basin mulch CY</th><th class="num">Bid item</th></tr></thead>
<tbody>
<tr><td>A (No. 1)</td><td class="num">6,874</td><td class="num">× 1 = 6,874</td><td class="num">× 0.03 = 206.22</td><td class="num">6,880</td></tr>
<tr><td>B (No. 5)</td><td class="num">2,119</td><td class="num">× 2 = 4,238</td><td class="num">× 0.04 = 84.76</td><td class="num">2,120</td></tr>
<tr><td>K (24" box)</td><td class="num">439</td><td class="num">× 5 = 2,195</td><td class="num">× 0.08 = 35.12</td><td class="num">440</td></tr>
<tr><td>U (No. 15)</td><td class="num">306</td><td class="num">× 3 = 918</td><td class="num">× 0.06 = 18.36</td><td class="num">310</td></tr>
<tr><td>Z (palm)</td><td class="num">90</td><td class="num">× 5 = 450</td><td class="num">0</td><td class="num">90</td></tr>
<tr><td><strong>Total</strong></td><td class="num">9,828</td><td class="num"><strong>14,675</strong></td><td class="num"><strong>344.46</strong></td><td></td></tr>
</tbody></table></div>
<p>Packets: PQ-1 14,675; bid item 25 is 14,700 (rounded up). Basin mulch: PQ-1 subtotal 344.36 CY; PQ-2 carries 344 CY into the wood mulch total.</p>`,
  ex: `<p>The 0.1 CY gap: PQ-1's creeping myoporum row shows 4,413 plants and 132.29 CY, but 4,413 × 0.03 = 132.39. Trivial here; on a bigger rate it isn't.</p>`,
  watch: `<p>Basin mulch rides in the wood mulch bid item. Take off area mulch only and you miss 344 CY on this job.</p>`,
  src: "Caltrans 11-431064 plans PL-1, PQ-1 (Plant Quantities), PQ-2; Bid Items 25–30, 35."
},

{ h: "Groundcover from area and spacing",
  lead: "Square: plants per SF = 1 ÷ s². Triangular: 1.155 ÷ s², about 15.5% more. Measure the net bed in simple shapes first.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Spacing</th><th class="num">Square / SF</th><th class="num">Triangular / SF</th></tr></thead>
<tbody>
<tr><td>12"</td><td class="num">1.000</td><td class="num">1.155</td></tr>
<tr><td>18"</td><td class="num">0.444</td><td class="num">0.513</td></tr>
<tr><td>24"</td><td class="num">0.250</td><td class="num">0.289</td></tr>
<tr><td>36"</td><td class="num">0.111</td><td class="num">0.128</td></tr>
</tbody></table></div>
<p><strong>Net area (made up):</strong> 40 × 18 rectangle 720 + triangle ½ × 18 × 12 = 108 + half circle π × 9² ÷ 2 = 127.2 − 6 × 6 utility pad 36 = <strong>919.2 SF</strong>. Long curvy strips: average width × centerline length. Trace beds with a calibrated PDF area tool and check one bed per sheet by shapes; more than a few percent apart means scale or tracing error.</p>
<p><strong>Worked (made up):</strong> 3,600 SF rosemary, #1 at 36" triangular. 3,600 × 1.155 ÷ 9 = 462 (square: 400). First row 18" off a 240-LF curb: 3,600 − 240 × 1.5 = 3,240 SF × 1.155 ÷ 9 = <strong>416</strong>.</p>`,
  deeper: `<p>Triangular rows are s × sin 60° = 0.866s apart with plants s apart, so each plant occupies 0.866s² and density is 1 ÷ 0.866s² = 1.1547 ÷ s².</p>`,
  watch: `<p>If neither plan nor detail says square or triangular, ask or state the assumption: it moves 15% of the groundcover. Subtract tree wells, pads and paths only where the plan leaves them unplanted; don't subtract shrubs unless the detail stops groundcover at them.</p>`
},

{ h: "Spacing check vs. callouts: 11-428704 Group H",
  lead: "When the plan gives callouts, an area-and-spacing count is your check; on this job it exposed a bid item that was wrong in the original bid book.",
  body: `<p>PL-1: iceplant cuttings (Group H) at 1 ft on center over 37,980 + 14,020 = 52,000 SF.</p>
<p>Callouts on the planting sheets: 4,600 + 15,750 + 12,900 + 185 + 1,790 + 2,430 + 2,730 + 6,180 + 1,960 + 13,450 = <strong>61,975</strong>.</p>
<div class="tablewrap"><table>
<thead><tr><th>Source</th><th class="num">Group H</th></tr></thead>
<tbody>
<tr><td>52,000 SF square / triangular</td><td class="num">52,000 / about 60,060</td></tr>
<tr><td>Original bid item 25</td><td class="num">60,015</td></tr>
<tr><td>Sum of plan callouts</td><td class="num">61,975</td></tr>
<tr><td>Bid item 25 after Addendum 1 (and revised PQ-1)</td><td class="num">61,975</td></tr>
</tbody></table></div>`,
  ex: `<p>Group H was (F) final pay: paid at the bid quantity. A bidder who summed the callouts found the 1,960-cutting gap before Caltrans fixed it; at the winner's $0.80 each that is about $1,570. The same slip on a larger or pricier item is real money (<a href="#m15-1">Module 15</a>).</p>`,
  src: "11-428704 plans PL-1, PP-1 to PP-7, PQ-1; Addendum 1 (Aug 27, 2021); Bid Summary item 25 (F)."
},

{ h: "Trees: every part of the detail",
  lead: "One tree symbol is a dozen lines; each has a one-line formula from the detail.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>Formula</th><th>Example (made up)</th></tr></thead>
<tbody>
<tr><td>Tree</td><td>Count by species and box size</td><td>EA</td></tr>
<tr><td>Stakes / ties</td><td>trees × stakes; stakes × ties</td><td>20 × 2 = 40; 40 × 2 = 80</td></tr>
<tr><td>Guying (large boxes, wind)</td><td>trees × guys; each guy = anchor, cable, marker</td><td>5 × 3 = 15 kits</td></tr>
<tr><td>Root barrier, linear</td><td>trees within detail distance of paving × LF per tree</td><td>12 × 12 = 144 LF</td></tr>
<tr><td>Root barrier, surround</td><td>π × ring diameter + overlap</td><td>36" ring: 9.42 + 1 = 10.42 LF/tree</td></tr>
<tr><td>Pit / backfill</td><td>π r² × depth; pit − root ball</td><td>4 ft × 2 ft: 25.1 CF − 7.0 = 18.1 CF = 0.67 CY</td></tr>
<tr><td>Backfill amendment</td><td>backfill × % by volume</td><td>0.67 × 25% = 0.17 CY compost</td></tr>
<tr><td>Tablets, iron sulfate, basin mulch</td><td>rate per tree × trees</td><td>EA, LB, CY</td></tr>
<tr><td>Grates, frames; bubblers</td><td>By size; bubblers in <a href="#m6-1">Module 6</a></td><td>EA</td></tr>
</tbody></table></div>
<p>Keep root barrier in exact LF and let the quote round to panels. Note box sizes needing a loader or crane for <a href="#m9-1">Module 9</a>.</p>`,
  ex: `<p>11-428704 PL-1, Group K pines (24" box): 48" hole, 5 packets, 0.5 LB iron sulfate, 0.2 CY basin mulch each. 15 Canary Island pines: 75 packets, 7.5 LB, 3.0 CY. 28 Eldarica pines: 140, 14 LB, 5.6 CY. Exactly PQ-1. The Special Provisions put tree hole and basin work in the Group K payment, so the tree price carries hole, basin, staking and drain.</p>`,
  src: "11-428704 plans PL-1, PLD-1, PQ-1; Special Provisions (tree hole and basin payment clause)."
},

{ h: "Palms and specimen trees",
  lead: "Palms are sized by brown trunk height, not container; each height is its own line, and the legend's quality rules limit who can supply them.",
  body: `<p>11-431064 PL-1:</p>
<div class="tablewrap"><table>
<thead><tr><th>Plant</th><th>Group</th><th class="num">PQ-1</th><th>Remarks</th></tr></thead>
<tbody>
<tr><td>Hybrid fan palm (Washingtonia)</td><td>Z</td><td class="num">90</td><td>Ball and burlap, BTH (brown trunk height) 15 ft unless noted, brown skinned, palm detail, 5 packets</td></tr>
<tr><td>Pindo palm (Butia capitata)</td><td>K, 24" box</td><td class="num">94</td><td>With box trees: 5 packets, 0.08 CY basin mulch</td></tr>
<tr><td>Coast live oak</td><td>K, 24" box</td><td class="num">142</td><td>Note 12: at least 6 ft tall in the container</td></tr>
</tbody></table></div>
<ul>
<li>15-ft and 20-ft BTH palms are different lines with very different prices.</li>
<li>Read the palm detail: hole, backfill, bracing, fronds tied for shipping.</li>
<li>B&amp;B palms with 15 ft of trunk need a crane or large loader: note it.</li>
<li>Minimum heights, "brown skinned" and local-source rules (note 10) narrow the nursery list (<a href="#m8-1">Module 8</a>).</li>
</ul>`,
  src: "Caltrans 11-431064 plans PL-1 (remarks 11–13, notes 10 and 12) and PQ-1; Bid Items 26 and 27."
},

{ h: "Soil prep from the soils report",
  lead: "Material = area ÷ 1,000 × rate, using the recommendations page of the agronomic soils report or the spec (32 91 13 on private jobs).",
  body: `<ul>
<li>Prep area: planted beds and turf; exclude paving, DG and rock unless the spec includes them. Fine grading SF; note whether rough grading is the GC's.</li>
<li>Report sections that matter: sample IDs and locations (different areas, different rates), drainage notes (pit drains, ripping) and the <strong>recommendations page</strong>. pH, ECe (salinity), SAR (sodium adsorption ratio), nutrients and texture reach you only through those recommendations; don't interpret lab values yourself.</li>
<li>Count soil test samples before and after amending.</li>
</ul>
<p><strong>Worked (made-up report):</strong> shrubs 4 CY compost, 50 LB gypsum, 15 LB pre-plant fertilizer per 1,000 SF, mixed 6"; turf 3 CY compost per 1,000; tree backfill 3:1 site soil to compost. Shrubs 18,500 SF, turf 2,500 SF, 30 trees.</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Math</th><th class="num">Qty</th></tr></thead>
<tbody>
<tr><td>Compost, shrubs / turf</td><td>18.5 × 4; 2.5 × 3</td><td class="num">74.0 / 7.5 CY</td></tr>
<tr><td>Tree backfill compost</td><td>0.67 CY × 25% × 30</td><td class="num">5.0 CY</td></tr>
<tr><td>Total compost</td><td></td><td class="num">86.5 CY</td></tr>
<tr><td>Gypsum / fertilizer</td><td>21 × 50; 21 × 15</td><td class="num">1,050 / 315 LB</td></tr>
<tr><td>Till to 6"</td><td>Note hand-work areas</td><td class="num">21,000 SF</td></tr>
</tbody></table></div>`,
  ex: `<p>Sanity check: spread depth in inches = CY × 324 ÷ SF = 4 × 324 ÷ 1,000 = 1.3": normal for mixing into 6". An answer of 13" is a decimal slip.</p>`,
  watch: `<p>"Amend per soils report" with no report in the bid set: RFI for it, or state the assumed rate in the proposal. Split areas when samples carry different rates.</p>`
},

{ h: "Compost by the acre: 11-428704",
  lead: "Convert acre rates once (200 CY/acre = 4.59 CY per 1,000 SF, about 1.5\" deep) and apply them only to the callout areas, not the whole weed germination area.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Sheet</th><th>Callout area</th><th>Math</th><th class="num">Calc</th><th class="num">Plan</th></tr></thead>
<tbody>
<tr><td>PP-7</td><td>310 SQYD = 2,790 SF</td><td>÷ 43,560 × 200</td><td class="num">12.8 CY</td><td class="num">13 CY</td></tr>
<tr><td>PP-1</td><td>440 SQYD = 3,960 SF</td><td>÷ 43,560 × 200</td><td class="num">18.2 CY</td><td class="num">18 CY</td></tr>
</tbody></table></div>
<p>PQ-1 by sheet: 18 + 62 + 53 + 7 + 45 + 84 + 13 = <strong>282 CY</strong>; bid item 68 is 290 CY. Depth: 200 × 27 = 5,400 CF ÷ 43,560 SF = 0.124 ft.</p>`,
  ex: `<p>PP-7 has 500 SQYD of weed germination but compost on only 310 SQYD of it. Multiplying the whole germination area by the rate would overstate compost by 60%.</p>`,
  src: "11-428704 plans PL-1 (Application and Sequence of Work: compost 200 CY/acre), PP-1, PP-7, PQ-1; Bid Item 68."
},

{ h: "Mulch, DG, rock and boulders",
  lead: "CY = SF × depth in inches ÷ 324 (at 3\", 1 CY covers 108 SF). Then convert to what the supplier sells, using the supplier's own tons per CY.",
  body: `<ul>
<li>One line per material and type (rock mulch Type 1, 2, 3 are separate items); depth from the detail, never assumed.</li>
<li>DG: delivered loose, compacted in place; add the compaction allowance from the supplier or your history, plus stabilizer and base if detailed.</li>
<li>Rock: filter fabric SF plus overlap; edging around it.</li>
<li>Boulders: count by size class (2–3, 3–4, 4–5 ft) and carry tons and heaviest piece for equipment. Example weights 0.5 / 1.5 / 3.0 T: 6, 4 and 2 boulders = 3 + 6 + 6 = 15 T, 12 EA, heaviest 3 T. Note burial depth (e.g. one-third) as extra digging.</li>
<li>Settling and spreading loss: a separate allowance column from your own jobs.</li>
</ul>`,
  ex: `<p>11-428704: wood chip mulch 3" deep. PQ-1 area mulch 120 CY (PP-6 20, PP-7 100 as 18 + 82 CY) + 65 CY basin mulch = 185 CY; bid item 31 is 190. Check: 82 CY × 324 ÷ 3 = 8,856 SF covered. Real units: 11-422004 (I-5 Carmel Valley) had 20 decorative boulders (EA), rock mulch Type 1 1,910 SQFT and Type 2 1,330 SQFT, edging 240 LF; 11-430674 had DG 55,900 and gravel mulch 204,000 SQFT.</p>`,
  watch: `<p>"Each" boulder prices often exclude delivery and setting. Get the CY-to-ton conversion in writing from the supplier who quotes it.</p>`,
  src: "11-428704 plans PL-1, PP-7, PQ-1, Bid Item 31; Caltrans Bid Item Lists 11-422004 (items 19, 24, 25, 27) and 11-430674 (items 44, 45)."
},

{ h: "Slope area vs. plan area",
  lead: "Slope factor = √(H² + 1) ÷ H for an H:1 slope; use it wherever the item is paid or bought on surface area.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Slope</th><th class="num">4:1</th><th class="num">3:1</th><th class="num">2:1</th><th class="num">1.5:1</th><th class="num">1:1</th></tr></thead>
<tbody><tr><td>Factor</td><td class="num">1.031</td><td class="num">1.054</td><td class="num">1.118</td><td class="num">1.202</td><td class="num">1.414</td></tr></tbody></table></div>
<p>10,000 SF on plan at 2:1 = 11,180 SF of surface: 1,180 SF more mulch, seed or fabric. Bark 3" on 6,500 SF at 3:1: 6,500 × 1.054 × 3 ÷ 324 = 63.4 CY.</p>
<ul>
<li>11-431064 Special Provisions: "The payment quantity for rock mulch is the area measured parallel to the surface of rock mulch."</li>
<li>11-431064 PL-2: seed rates in "pounds pure live seed per acre (slope measurement)."</li>
</ul>`,
  watch: `<p>Confirm whether the owner's quantity is plan or slope area before comparing; a plan-area takeoff will make every 2:1 slope look 12% overstated.</p>`,
  src: "Caltrans 11-431064 Special Provisions 20-5.03E(4) (rock mulch payment quantity); plans PL-2 (seed mix rates, slope measurement)."
},

{ h: "Weed control, turf and seed",
  lead: "Weed work is area × treatments plus a waiting period; turf and seed are area × rate, with acres converted carefully.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Takeoff</th><th>Material</th></tr></thead>
<tbody>
<tr><td>Weed abatement / pre-emergent</td><td>SF × applications</td><td>Per spec</td></tr>
<tr><td>Weed germination</td><td>SF or SQYD × cycles; note watering and wait</td><td>Pesticide per spec</td></tr>
<tr><td>Sod</td><td>SF + cutting allowance</td><td>By SF or pallet</td></tr>
<tr><td>Seed</td><td>SF</td><td>LB = SF ÷ 1,000 × rate, or acres × rate</td></tr>
<tr><td>Hydroseed / bonded fiber matrix</td><td>SF</td><td>Seed, fiber, tackifier, fertilizer per acre</td></tr>
<tr><td>Blanket / fiber rolls</td><td>SF of slope + overlaps, anchor trench / LF on contours</td><td>Staples; stakes per roll</td></tr>
</tbody></table></div>
<p><strong>Sod vs. seed (made up), 6,400 SF flat:</strong> sod 6,400 × 1.05 = 6,720 SF = 14 pallets of 500; seed at 8 LB/1,000 = 51.2 LB plus seed cover and a longer establishment. Starter fertilizer 64 LB either way. Sod must go down the day it is cut: note crew SF per day to split deliveries.</p>`,
  ex: `<p>11-428704: weed germination 7,020 SQYD (63,180 SF), PQ-1 equals the bid item. Spec: "Do not perform planting work in weed germination areas for a period of 21 days after irrigation systems have been installed," keep soil moist and control sprouts with pesticide: three weeks of watering and a return trip. 11-422004: hydroseed 154,000 SQFT, bonded fiber matrix 47,600 SQFT, fiber rolls 4,550 LF, and 3 EA "move-in/move-out (erosion control)," each truck mobilization its own item.</p>`,
  watch: `<p>Per-acre rate on an SF area: divide by 43,560 first. A slip is a factor of 43 or more.</p>`,
  src: "11-428704 Special Provisions 20-1.03E, plans PQ-1, Bid Item 21; Caltrans 11-422004 Bid Item List items 39–43."
},

{ h: "Hydroseed on 11-431064: PLS and rates that don't reconcile",
  lead: "Buy bulk seed = PLS ÷ (purity × germination); then run every PL-2 rate against the area and question what doesn't match.",
  body: `<p>PL-2 erosion control sequence: temporary fiber rolls, irrigation, weed germination, compost (fine) 70 CY/acre, planting, hydroseed with tackifier (psyllium) 1,500 LB/acre, wood fiber 150 LB/acre, seed 28.1 LB PLS/acre (12-species coastal sage scrub; California poppy 3.0 LB PLS/acre at 60% minimum germination). Hydroseed area PQ-2: 796,550 SF ÷ 43,560 = 18.29 acres.</p>
<div class="tablewrap"><table>
<thead><tr><th>Material</th><th>Math</th><th class="num">Result</th><th>Plan / bid</th></tr></thead>
<tbody>
<tr><td>Seed mix</td><td>18.29 × 28.1</td><td class="num">513.8 LB PLS</td><td>In item 63</td></tr>
<tr><td>Poppy, bulk (example 95% purity)</td><td>18.29 × 3.0 = 54.9 ÷ (0.95 × 0.60)</td><td class="num">96.3 LB bulk</td><td>In item 63</td></tr>
<tr><td>Tackifier / fiber</td><td>18.29 × 1,500; × 150</td><td class="num">27,429 / 2,743 LB</td><td>In item 63</td></tr>
<tr><td>Compost</td><td>18.29 × 70</td><td class="num">1,280 CY</td><td>PQ-2 1,178; item 64 1,180</td></tr>
</tbody></table></div>
<ul>
<li><strong>Compost:</strong> each PQ-2 sheet works out near 64 CY/acre (84 CY on 57,200 SF = 64.0). At the printed 70, about 102 CY more. Either compost covers less than the hydroseed area or areas are measured differently: bidder inquiry.</li>
<li><strong>Tackifier vs. fiber:</strong> most mixes carry far more fiber than tackifier; the reverse may be a transposition. Ask; don't fix it yourself.</li>
<li>Low bidder listed a hydroseed sub for 100% of item 63. Temporary fiber roll: 23,800 LF (item 17).</li>
</ul>`,
  watch: `<p>Send the seed supplier PLS rates and areas and ask for bulk pounds to meet them; never compare a PLS number to a bulk price. If the plan rates are wrong and nobody asks, every bidder's sub prices something different.</p>`,
  src: "Caltrans 11-431064 plans PL-2 (Erosion Control table, Seed Mix, pounds PLS per acre, slope measurement) and PQ-2; Bid Items 17, 63, 64; Bid Summary subcontractor list."
},

{ h: "Area items on 11-431064 PQ-2: the one that goes the wrong way",
  lead: "Owner rounding goes up; a bid quantity below the plan total is not rounding and gets an inquiry.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">PQ-2</th><th class="num">Bid item</th><th>Note</th></tr></thead>
<tbody>
<tr><td>Weed germination</td><td class="num">115,099 SQYD</td><td class="num">116,000</td><td>Up</td></tr>
<tr><td>Hydroseed / compost</td><td class="num">796,550 SF / 1,178 CY</td><td class="num">797,000 / 1,180</td><td>PP-9 to PP-12</td></tr>
<tr><td>Gravel mulch Type 1 / 2 / 3</td><td class="num">114,440 / 79,490 / 27,100</td><td class="num">115,000 / 79,500 / 27,100</td><td>PP-1 to PP-4; red, white, brown</td></tr>
<tr><td>Rock mulch (rounded cobble 4–12")</td><td class="num">94,100 SF</td><td class="num">94,100</td><td></td></tr>
<tr><td>Rock blanket</td><td class="num">3,775 SF</td><td class="num">3,780</td><td>PP-9 to PP-11</td></tr>
<tr><td>Edging, black HDPE (high-density polyethylene)</td><td class="num">6,200 LF</td><td class="num">6,200</td><td>Same sheets as gravel</td></tr>
<tr><td><strong>Wood mulch</strong></td><td class="num"><strong>3,320 CY</strong></td><td class="num"><strong>3,290</strong></td><td><strong>30 CY lower</strong></td></tr>
</tbody></table></div>
<p>Wood mulch: 1,011 + 921 + 548 + 496 = 2,976 CY area + 344 basin = 3,320. It is not marked (F), so it is measured: bid your unit price on 3,290, buy and plan for 3,320 plus allowance, and send a short inquiry (<a href="#m12-1">Module 12</a>).</p>`,
  watch: `<p>Spec work the areas don't show: grade and compact to at least 90% relative compaction before gravel or rock mulch, and a 1 SQYD rock sample before delivery. Carry the compaction area with the mulch area.</p>`,
  src: "Caltrans 11-431064 plans PL-1, PQ-2 (Planting Area Quantities); Special Provisions additions to 20-5.03C and 20-5.03E; Bid Items 22–24, 32–36, 63, 64."
},

{ h: "Hardscape inside the landscape scope",
  lead: "Edging, DG, pavers, boulders and low walls are taken off with the same methods; check each against the C-27 scope before including it.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Takeoff</th><th>Worked (made up)</th></tr></thead>
<tbody>
<tr><td>DG path 5 × 140, stabilized 3" over 4" base, header both sides</td><td>SF; CY by depth; header LF</td><td>700 SF; DG 6.48 CY × 1.2 = 7.8 CY loose; base 8.6 CY; header 2 × 140 + 2 × 5 = 290 LF</td></tr>
<tr><td>Pavers 400 SF, 6" base, 1" sand</td><td>SF + cuts; base, sand CY; edge restraint LF</td><td>420 SF; 7.4 CY; 1.2 CY; open perimeter LF</td></tr>
<tr><td>Bed edging</td><td>LF where shown, per material and height; stakes, splices</td><td>One strip between two materials counts once</td></tr>
<tr><td>Low and seat walls</td><td>LF and height; footing per detail</td><td>LF or SF of face</td></tr>
<tr><td>Boulders, cobble, steppers</td><td>EA by size; SF for cobble</td><td></td></tr>
</tbody></table></div>`,
  watch: `<p>CSLB (Contractors State License Board) defines C-27 as work on "landscape systems and facilities," including preparing and grading land "for the installation of any architectural, horticultural and decorative treatment or arrangement." Retaining walls, structural concrete and larger walls may need another classification or an engineered design (<a href="#m2-1">Module 2</a>). Larger hardscape, grading and drainage scopes: <a href="#m17-1">Module 17</a>.</p>`,
  deeper: `<p>Full definition: California Code of Regulations, Title 16, §832.27. On private jobs hardscape is often split with the concrete or masonry sub; name exactly which hardscape items you include (<a href="#m13-1">Module 13</a>).</p>`,
  src: "CSLB C-27 Landscaping classification (16 CCR §832.27): cslb.ca.gov."
},

{ h: "Plant establishment: duration to visits and hours",
  lead: "Establishment is priced from time: duration, visit frequency, crew hours, replacements, schedules and who pays water.",
  body: `<p><strong>11-431064 facts:</strong> work excluding establishment in 120 working days; establishment complete within 750 working days, Type 1; seasonal watering schedules for March–May, June–August, September–October, November–February; keep the site neat including areas the public can't see.</p>
<div class="tablewrap"><table>
<thead><tr><th>Step</th><th>Math (visit plan and hours are examples)</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>Working days to years</td><td>750 ÷ about 250 per year (check contract calendar)</td><td class="num">about 3 years</td></tr>
<tr><td>Visits, weekly</td><td>3 × 52</td><td class="num">156</td></tr>
<tr><td>Crew hours, 2 workers × 6 h</td><td>156 × 12</td><td class="num">1,872</td></tr>
<tr><td>Watering schedules</td><td>4 seasons × 3 years</td><td class="num">12</td></tr>
<tr><td>Replacements, 5% of Group A</td><td>6,874 × 0.05</td><td class="num">344</td></tr>
<tr><td>Weeded area</td><td>All planted, mulched and seeded areas on PQ-2</td><td class="num">SF</td></tr>
</tbody></table></div>
<p>Per visit: watering checks, weeding, pest control, irrigation checks, trash, reports. One-time: scheduled fertilizing, final walk.</p>`,
  ex: `<p>11-428704: Type 1 establishment of 250 working days, plus "maintain existing planted areas" LS, with about 717,000 SF listed on PQ-1 "for estimate only"; fertilize the first week of April, July and September. Bids for establishment ranged from $10,000 to $300,000 (<a href="#m15-1">Module 15</a>): a duration, visit and task takeoff is what grounds the number.</p>`,
  watch: `<p>A three-year period crosses wage and water-rate changes: record duration and start date so pricing can escalate them (<a href="#m11-1">Module 11</a>).</p>`,
  src: "Caltrans 11-431064 Special Provisions (time; additions to 20-4.01A, 20-4.01C(1), 20-4.03A), Bid Item 31; 11-428704 Notice to Bidders, Special Provisions 20-4, plans PQ-1."
},

{ h: "Worked takeoff 1 · medical office: plants",
  lead: "The Module 6 medical office, now planted. All numbers made up.",
  body: `<p>Beds 19,000 SF, sod 2,400, DG paving 1,400, bioswale cobble 1,800: 24,600 SF.</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Source</th><th class="num">Qty</th></tr></thead>
<tbody>
<tr><td>Trees 36" / 24" box / 15-gal</td><td>Symbols</td><td class="num">4 / 16 / 8</td></tr>
<tr><td>Shrubs #5 / #1</td><td>Symbols by species</td><td class="num">310 / 420</td></tr>
<tr><td>Rosemary #1, 36" triangular</td><td>3,240 SF net × 1.155 ÷ 9</td><td class="num">416</td></tr>
<tr><td>Stakes</td><td>16 × 2 + 8 × 2 + 4 × 3</td><td class="num">60</td></tr>
<tr><td>Root barrier, linear</td><td>12 trees within 5' of paving × 12</td><td class="num">144 LF</td></tr>
<tr><td>Tablets (36" 8, 24" 6, 15-gal 4, #5 2, #1 1)</td><td>32 + 96 + 32 + 620 + 836</td><td class="num">1,616</td></tr>
</tbody></table></div>`,
  watch: `<p>Tree check: 4 + 16 + 8 = 28, matching Module 6's 28 trees × 2 bubblers. When planting and irrigation counts differ, one takeoff is wrong.</p>`
},

{ h: "Worked takeoff 1 · medical office: areas and quantity table",
  lead: "Area items from the same site, net quantities with allowances kept separate.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Math</th><th>Unit</th><th class="num">Net</th><th class="num">Allow</th><th class="num">Order</th></tr></thead>
<tbody>
<tr><td>Fine grading / soil prep</td><td>19,000 + 2,400</td><td>SF</td><td class="num">21,400</td><td></td><td class="num">21,400</td></tr>
<tr><td>Compost, 4 CY / 1,000</td><td>21.4 × 4</td><td>CY</td><td class="num">85.6</td><td class="num">round</td><td class="num">86</td></tr>
<tr><td>Pre-plant fertilizer, 20 LB / 1,000</td><td>21.4 × 20</td><td>LB</td><td class="num">428</td><td></td><td class="num">428</td></tr>
<tr><td>Bark mulch 3"</td><td>19,000 × 3 ÷ 324</td><td>CY</td><td class="num">175.9</td><td class="num">5%</td><td class="num">185</td></tr>
<tr><td>Cobble 4" / filter fabric</td><td>1,800 × 4 ÷ 324; 1,800 + 10%</td><td>CY / SF</td><td class="num">22.2 / 1,800</td><td class="num">0 / 10%</td><td class="num">23 / 1,980</td></tr>
<tr><td>DG paving 3" compacted</td><td>1,400 × 3 ÷ 324</td><td>CY</td><td class="num">13.0</td><td class="num">20%</td><td class="num">15.6</td></tr>
<tr><td>Steel edging</td><td>Measured</td><td>LF</td><td class="num">420</td><td class="num">5%</td><td class="num">441</td></tr>
<tr><td>Boulders 2–3 / 3–4 / 4–5 ft</td><td>Symbols</td><td>EA</td><td class="num">6 / 4 / 2</td><td></td><td class="num">6 / 4 / 2</td></tr>
<tr><td>Sod</td><td>2,400 + 5%</td><td>SF</td><td class="num">2,400</td><td class="num">5%</td><td class="num">2,520</td></tr>
<tr><td>Weed abatement, 2 cycles</td><td>19,000 × 2</td><td>SF treated</td><td class="num">38,000</td><td></td><td class="num">38,000</td></tr>
<tr><td>Establishment 90 days weekly</td><td>90 ÷ 7</td><td>Visits</td><td class="num">13</td><td></td><td class="num">13</td></tr>
</tbody></table></div>`,
  watch: `<p>Allowances (5%, 10%, 20%) are practice numbers. Set yours from what you actually bought on finished jobs.</p>`
},

{ h: "Second takeoff · retail center: areas and plants",
  lead: "The Module 6 drip lot plus a spray frontage bed, a DG seating area and a bioretention basin. All numbers made up.",
  body: `<div class="twocol">
<div><h3>Areas</h3>
<div class="tablewrap"><table>
<thead><tr><th>Area</th><th class="num">SF</th></tr></thead>
<tbody>
<tr><td>Islands 6 × 9 × 36</td><td class="num">1,944</td></tr>
<tr><td>Strips 2 × 6 × 220</td><td class="num">2,640</td></tr>
<tr><td>Frontage bed (area tool, checked by shapes)</td><td class="num">6,200</td></tr>
<tr><td><strong>Planted beds</strong></td><td class="num"><strong>10,784</strong></td></tr>
<tr><td>DG seating</td><td class="num">600</td></tr>
<tr><td>Basin bottom + 3:1 sides (800 × 1.054 = 843)</td><td class="num">2,043</td></tr>
</tbody></table></div></div>
<div><h3>Plants and tree parts</h3>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Qty</th></tr></thead>
<tbody>
<tr><td>24" box (6 islands + 14 strips) / 36" box (frontage)</td><td class="num">20 / 5</td></tr>
<tr><td>Shrubs #5 / #1</td><td class="num">180 / 520</td></tr>
<tr><td>Groundcover #1, 24" tri on 2,400 SF: × 1.155 ÷ 4</td><td class="num">693</td></tr>
<tr><td>Stakes 20 × 2 / guy kits 5 × 3</td><td class="num">40 / 15</td></tr>
<tr><td>Root barrier linear 20 × 12 / surround 5 × (π × 3 + 1)</td><td class="num">240 / 52.1 LF</td></tr>
<tr><td>Tablets 5 × 8 + 20 × 6 + 180 × 2 + 1,213 × 1</td><td class="num">1,733</td></tr>
</tbody></table></div></div>
</div>
<p>Drip beds match Module 6 (4,584 SF). Pit compost at 0.17 CY (24") and 0.35 CY (36"): 20 × 0.17 + 5 × 0.35 = 5.15 CY.</p>`,
  watch: `<p>The 20 trees sit in the drip grid. Each needs a bubbler or drip ring in the irrigation takeoff, or the design must show the grid waters them; if not shown, ask.</p>`
},

{ h: "Second takeoff · retail center: quantity table",
  lead: "Area items for the retail center with the math in line. Rates, depths and allowances are examples.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Math</th><th>Unit</th><th class="num">Net</th><th class="num">Allow</th><th class="num">Order</th></tr></thead>
<tbody>
<tr><td>Soil prep, fine grading</td><td>Planted beds</td><td>SF</td><td class="num">10,784</td><td></td><td class="num">10,784</td></tr>
<tr><td>Compost 4 CY / 1,000 + pits</td><td>10.784 × 4 = 43.1; + 5.15</td><td>CY</td><td class="num">48.3</td><td class="num">round</td><td class="num">49</td></tr>
<tr><td>Bark mulch 3"</td><td>10,784 × 3 ÷ 324</td><td>CY</td><td class="num">99.9</td><td class="num">5%</td><td class="num">105</td></tr>
<tr><td>Cobble 6" in basin</td><td>2,043 × 6 ÷ 324</td><td>CY</td><td class="num">37.8</td><td class="num">0</td><td class="num">38</td></tr>
<tr><td>Filter fabric</td><td>2,043 × 1.10</td><td>SF</td><td class="num">2,043</td><td class="num">10%</td><td class="num">2,248</td></tr>
<tr><td>DG 3" compacted</td><td>600 × 3 ÷ 324</td><td>CY</td><td class="num">5.56</td><td class="num">20%</td><td class="num">6.7</td></tr>
<tr><td>Steel edging</td><td>Measured</td><td>LF</td><td class="num">380</td><td class="num">5%</td><td class="num">399</td></tr>
<tr><td>Weed abatement, 2 cycles</td><td>10,784 × 2</td><td>SF treated</td><td class="num">21,568</td><td></td><td class="num">21,568</td></tr>
<tr><td>Establishment 90 days weekly</td><td>90 ÷ 7</td><td>Visits</td><td class="num">13</td><td></td><td class="num">13</td></tr>
</tbody></table></div>`,
  watch: `<p>Bioretention basins often carry their own soil mix, underdrain and grading by the civil contractor. Read the civil sheets before pricing cobble (<a href="#m4-1">Module 4</a>, <a href="#m17-1">Module 17</a>).</p>`
},

{ h: "Real cross-check · 11-428704 PQ-1",
  lead: "Most gaps are the plan total rounded up; per-area rates are the ones plant-only takeoffs miss.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">PQ-1</th><th class="num">Bid</th><th>Build-up</th></tr></thead>
<tbody>
<tr><td>Group A</td><td class="num">1,458</td><td class="num">1,460</td><td>186 + 340 + 110 + 110 + 186 + 186 + 230 + 110</td></tr>
<tr><td>Group B / K</td><td class="num">110 / 43</td><td class="num">110 / 43</td><td>Ghost aloe; 15 + 28 pines</td></tr>
<tr><td>Wood mulch</td><td class="num">185 CY</td><td class="num">190</td><td>120 area + 65 basin</td></tr>
<tr><td>Compost</td><td class="num">282 CY</td><td class="num">290</td><td>By sheet</td></tr>
<tr><td>Packet fertilizer</td><td class="num">1,893</td><td class="num">1,900</td><td>1,458 × 1 + 110 × 2 + 43 × 5</td></tr>
<tr><td>Iron sulfate</td><td class="num">229.5 LB</td><td class="num">230</td><td>52 × 4 = 208 iceplant + 7.5 + 14 pines</td></tr>
<tr><td>Slow-release fertilizer</td><td class="num">416 LB</td><td class="num">420</td><td>52 × 8 iceplant</td></tr>
<tr><td>Weed germination / rope fence</td><td class="num">7,020 SQYD / 1,120 LF</td><td class="num">same</td><td>By sheet</td></tr>
</tbody></table></div>`,
  ex: `<p>Iceplant fertilizer is per area: 4 LB iron sulfate and 8 LB slow-release per 1,000 SF over 52,000 SF. Count plants only and you miss 624 LB.</p>`,
  src: "11-428704 plans PL-1 and PQ-1 (replaced per Addendum 1, Aug 27, 2021); Bid Items 19, 21–28, 31, 68."
},

{ h: "Real cross-check · ratios from two freeway jobs",
  lead: "Ratios from comparable jobs don't give quantities; they flag where to look.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Bid item quantity</th><th class="num">11-431064 (SR-905)</th><th class="num">11-430674 (SR-5/75/805/905)</th></tr></thead>
<tbody>
<tr><td>Container plants (A, B, K, U, Z)</td><td class="num">9,840</td><td class="num">37,350</td></tr>
<tr><td>Group H cuttings</td><td class="num">none</td><td class="num">741,405</td></tr>
<tr><td>Packet fertilizer</td><td class="num">14,700</td><td class="num">48,000</td></tr>
<tr><td><strong>Packets per container plant</strong></td><td class="num"><strong>1.49</strong></td><td class="num"><strong>1.29</strong></td></tr>
<tr><td>Hydroseed / compost</td><td class="num">797,000 SF / 1,180 CY</td><td class="num">315,000 SF / 470 CY</td></tr>
<tr><td><strong>Compost per hydroseed acre</strong></td><td class="num"><strong>64.5</strong></td><td class="num"><strong>65</strong></td></tr>
<tr><td>Gravel mulch / DG</td><td class="num">221,600 SF (3 types) / none</td><td class="num">204,000 / 55,900 SF</td></tr>
<tr><td>Wood mulch / edging</td><td class="num">3,290 CY / 6,200 LF</td><td class="num">8,040 CY / 3,660 LF</td></tr>
</tbody></table></div>
<p>Both jobs land near 65 CY of compost per hydroseed acre (470 ÷ 7.23; 1,180 ÷ 18.29), which makes 11-431064's printed 70 CY/acre the outlier. A takeoff showing 4 packets per plant on a similar mix deserves a recheck.</p>`,
  src: "Caltrans Bid Item Lists: 11-431064 items 25–30, 32–36, 63, 64; 11-430674 items 32–39, 44–47, 99, 100."
},

{ h: "Mistakes that cost money",
  lead: "Check each before freezing the planting takeoff.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Effect</th><th>Control</th></tr></thead>
<tbody>
<tr><td>Square spacing where triangular is meant</td><td>15% of groundcover missing</td><td>Read the detail; state the assumption</td></tr>
<tr><td>Sizes combined</td><td>36" box priced as 24"</td><td>One line per plant per size</td></tr>
<tr><td>Per-plant and per-area rates skipped</td><td>344 CY basin mulch (11-431064), iceplant fertilizer missed</td><td>Every legend rate column is a line</td></tr>
<tr><td>Wrong or missing mulch depth</td><td>2" vs. 3" is a third of the mulch</td><td>Depth from legend or detail on the line</td></tr>
<tr><td>Plan area where slope area is paid</td><td>12% short on 2:1</td><td>Check each item's measurement clause</td></tr>
<tr><td>Acres and SF mixed; PLS priced as bulk</td><td>Seed off by 43,560×; under-ordered</td><td>Units on every number; send PLS to supplier</td></tr>
<tr><td>Setbacks ignored; match-line double count</td><td>Plants in no-plant strips or counted twice</td><td>Apply minimum distances; count to the line</td></tr>
<tr><td>Establishment guessed</td><td>Three years priced like 90 days</td><td>Duration, visits, hours, replacements</td></tr>
<tr><td>Walls taken without license check</td><td>Out-of-class or engineered work</td><td>C-27 scope; ask CSLB if unsure</td></tr>
<tr><td>Planting and irrigation not compared</td><td>Trees without bubblers</td><td>Cross-check tree counts</td></tr>
</tbody></table></div>`
},

{ t: "scorer", id: "m7qa", h: "Planting takeoff QA checklist",
  lead: "Score before the takeoff goes to pricing. 2 = done and checked, 1 = partly, 0 = not done. Saved in this browser.",
  items: [
    ["Documents and addenda", "Every addendum logged; soils report in hand or asked for"],
    ["Legend into lines", "Every plant and size has a line; every legend rate column is a line"],
    ["Plants counted by sheet", "Symbols and callouts counted to the match lines; subtotals by sheet"],
    ["Spacing and setbacks", "Square or triangular confirmed; no-plant setbacks and edges taken out"],
    ["Trees complete", "Stakes, ties, guys, root barrier, pits, palms by trunk height"],
    ["Areas by type", "Beds, turf, seed, each mulch and rock type, DG; slope factor where paid on slope"],
    ["Rates applied", "Per plant and per area rates multiplied by you, not copied"],
    ["Seed and hydroseed", "Acres converted; PLS rates sent as PLS; tackifier, fiber, compost listed"],
    ["Establishment", "Duration, visits, hours, replacements and schedules listed"],
    ["Checks done", "Trees match irrigation; totals checked two ways; engineer's sheet compared"]
  ],
  bands: [
    [18, "Ready for pricing", "Freeze a dated copy and hand it off."],
    [13, "Fix the gaps first", "Finish the lines scored 0 or 1 before anyone prices this."],
    [0, "Not ready", "Go back to the routine at the start of this module."]
  ]
},

{ t: "terms", h: "Words to know",
  lead: "Planting, soil and hardscape takeoff terms. Full list in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Callout", "Plan label with a quantity and plant code, like \"50 AEO HAW.\""],
    ["On center (o.c.)", "Center-to-center plant spacing."],
    ["Square / triangular spacing", "Plants per SF = 1 ÷ s² / 1.155 ÷ s²."],
    ["Plant group", "Caltrans letter for a container size: A No. 1, B No. 5, U No. 15, K 24\" box, H cutting, Z palm."],
    ["BTH", "Brown trunk height: bare palm trunk below the leaves."],
    ["B&amp;B", "Ball and burlap: dug with the soil ball wrapped."],
    ["Packet fertilizer", "Slow-release packet in the planting hole, counted per plant."],
    ["Basin mulch", "Mulch in the watering ring around a plant; rides in the wood mulch item."],
    ["Root barrier, linear / surround", "Panel along paving / ring around the root ball."],
    ["Guying", "Cables and ground anchors holding a large tree."],
    ["ETW / EP", "Edge of traveled way / edge of pavement: planting setback lines."],
    ["Agronomic soils report", "Lab soil analysis with amendment rates; use its recommendations page."],
    ["ECe / SAR", "Salinity / sodium adsorption ratio; drive gypsum and leaching recommendations."],
    ["Weed germination", "Water to sprout weeds, then kill them, before planting."],
    ["324", "SF × inches ÷ 324 = CY."],
    ["Slope factor", "√(H² + 1) ÷ H; 1.118 for 2:1."],
    ["Relative compaction", "Density as a percent of maximum; 11-431064 requires 90% under rock mulch."],
    ["Gravel mulch / rock mulch / rock blanket", "Separate Caltrans rock surface items."],
    ["Filter fabric", "Cloth under rock that keeps soil and rock apart."],
    ["Hydroseed / tackifier", "Sprayed slurry of seed, fiber, tackifier and fertilizer / the glue in it."],
    ["PLS", "Pure live seed = purity × germination; bulk LB = PLS ÷ that fraction."],
    ["Bioretention basin", "Planted low area that holds and infiltrates storm water."],
    ["Plant establishment", "Contract period of watering and care after planting; Caltrans Type 1."],
    ["Working day", "A day the contract counts toward time, roughly 250 per year."],
    ["C-27", "California landscaping contractor license; scope in 16 CCR §832.27."]
  ]
},

{ t: "quiz", id: "m7", h: "Check yourself",
  lead: "Keep a calculator handy.",
  qs: [
    { q: "Plants for 1,800 SF at 18\" on center, triangular?", a: ["About 800", "About 924", "About 1,200"], c: 1, why: "1,800 × 1.155 ÷ 2.25 = 924." },
    { q: "Mulch for 5,400 SF at 3\"?", a: ["About 17 CY", "About 50 CY", "About 150 CY"], c: 1, why: "5,400 × 3 ÷ 324 = 50 CY." },
    { q: "Compost at 200 CY per acre on a 310 SQYD callout area?", a: ["About 1.4 CY", "About 12.8 CY", "About 62 CY"], c: 1, why: "310 × 9 = 2,790 SF ÷ 43,560 × 200 = 12.8 CY; 11-428704 PP-7 shows 13." },
    { q: "On 11-431064, 2,119 Group B plants at 0.04 CY basin mulch each. Basin mulch?", a: ["42.4 CY", "84.8 CY", "169.5 CY"], c: 1, why: "2,119 × 0.04 = 84.76 CY, part of the wood mulch item." },
    { q: "10,000 SF on plan, all 2:1 slope, paid on surface area. Pay quantity?", a: ["10,000 SF", "11,180 SF", "20,000 SF"], c: 1, why: "2:1 factor 1.118." },
    { q: "Seed rate 3.0 LB PLS per acre; tag 95% purity, 60% germination. Bulk LB per acre?", a: ["1.7", "3.0", "5.3"], c: 2, why: "3.0 ÷ (0.95 × 0.60) = 5.26." },
    { q: "11-431064 plan sheets total 3,320 CY wood mulch; the measured bid item is 3,290. Best move?", a: ["Call it rounding", "Bid the unit price on 3,290, buy for 3,320 plus allowance, and send a short inquiry", "Buy only 3,290 CY"], c: 1, why: "Owner rounding goes up; a lower bid quantity needs a question. Measured items pay what you place." },
    { q: "11-431064 PL-2 says compost 70 CY/acre, but PQ-2 works out near 64 CY/acre on every sheet. What do you do?", a: ["Use 70 and ignore PQ-2", "Use PQ-2 silently", "Send a bidder inquiry; note the 102 CY difference in your takeoff"], c: 2, why: "A rate that doesn't reconcile with the quantity sheet is a question, not your call." },
    { q: "11-428704 Group H: 52,000 SF at 1 ft triangular gives about 60,060; callouts sum to 61,975; the original bid item said 60,015. Item is (F). What mattered?", a: ["Nothing; Caltrans pays the actual count", "Summing callouts found a 1,960-cutting gap, fixed by Addendum 1", "Use the area count"], c: 1, why: "(F) pays the bid quantity; your own sum is what catches the gap before bid day." },
    { q: "750 working days of plant establishment, weekly visits by 2 workers for 6 h. Crew hours?", a: ["About 936", "About 1,872", "About 4,500"], c: 1, why: "750 ÷ 250 ≈ 3 years × 52 = 156 visits × 12 h = 1,872." }
  ]
},

{ t: "practice", id: "m7", h: "Practice assignments",
  lead: "Real planting takeoffs on two Caltrans jobs and a reusable tab.",
  items: [
    { h: "Read the 11-428704 plant legend", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>. On PL-1 (PDF page 47), list each plant with group, spacing, per-plant and per-area rates and remarks. Read the Application and Sequence of Work table.</p>" },
    { h: "Take off sheet PP-7", hrs: 1.25, d: "<p>On PP-7 (PDF page 54), add every callout: plants by code, weed germination SQYD, wood mulch CY, compost CY, temporary protection fence LF. Convert codes to Groups A and B. Compare to the PP-7 row of PQ-1 (Addendum 1): 500 SQYD weed germination, 100 CY wood mulch, 13 CY compost, 600 LF fence. Explain every difference.</p>" },
    { h: "PQ-1 against the bid items", hrs: 0.5, d: "<p>Put every PQ-1 item beside its bid item. Mark each difference rounding, error or question, and write one bidder inquiry for the item that matters most.</p>" },
    { h: "Re-add the 11-431064 planting sheets", hrs: 1, d: "<p>Open <a href=\"#lab-11-431064\">Real Bid Lab · 11-431064</a>. On PL-1 (PDF page 56) read the rates. On PQ-1 (page 79) re-multiply every row's packets and basin mulch and find the slip. On PQ-2 (page 80) re-add every column against its bid item. List each item where the bid quantity is not the plan total rounded up, and draft the inquiry.</p>" },
    { h: "Hydroseed and PLS on PL-2", hrs: 0.5, d: "<p>(1) Convert 182,250 SF (PP-10) to acres and compute compost at 70 CY/acre; compare to the 270 CY on PQ-2. (2) Bulk LB of purple needlegrass (6.0 LB PLS/acre, 60% germination) for 18.29 acres at an example 90% purity. (3) 4,000 SF plan at 1.5:1: surface area. Answers: 4.18 acres, 292.9 CY vs. 270; 109.7 LB PLS, 203.2 LB bulk; 4,808 SF.</p>" },
    { h: "Take off a live local planting plan", hrs: 1, d: "<p>Use a planting sheet from a current San Diego public bid (for example the City's <a href=\"https://www.sandiego.gov/cip/bidopps\" target=\"_blank\" rel=\"noopener\">bid opportunities</a>) or a GC invitation. Take off plants by size, soil prep SF, amendments, mulch CY, DG and rock, using that job's spec rates.</p>" },
    { h: "Add the planting tab", hrs: 0.5, d: "<p>Add a planting tab to your Module 6 workbook: plants by size with per-plant rate columns, tree extras, and area items with formulas for SF × in ÷ 324, area × spacing factor, slope factor and PLS. Enter worked takeoff 1 and confirm the totals.</p>" },
    { h: "Read a real soils report", hrs: 0.5, d: "<p>Get a sample agronomic report (a local soil lab, a past job, or a public bid appendix). Mark the recommendations page, take off amendments for 15,000 SF shrubs and 3,000 SF turf at its rates, and list any rate you would need to ask about.</p>" }
  ]
},

{ h: "Module 7 summary",
  lead: "A frozen planting takeoff carries every plant by size plus every per-plant and per-area rate, re-multiplied by you and reconciled to the owner's sheets.",
  body: `<ul>
<li>One line per species per size; Caltrans pays by group letter. Every legend rate column becomes a line.</li>
<li>Groundcover: 1 ÷ s² square, 1.155 ÷ s² triangular, on net area after setbacks. Check callouts against area × spacing.</li>
<li>Trees and palms carry stakes, guys, root barrier, pits, basins and rates; palms by BTH; note equipment.</li>
<li>Soil: area ÷ 1,000 × rate from the report's recommendations. Mulch, DG, rock: SF × in ÷ 324, tons from the supplier. Slope factor where paid on surface.</li>
<li>Seed: acres × rate; bulk = PLS ÷ (purity × germination). Weed control and establishment are area and time.</li>
<li>Owner rounding goes up. A bid quantity below the plans, or a rate that doesn't reconcile, gets an inquiry before bid day.</li>
</ul>
<p><strong>Next: <a href="#m8-1">Module 8 · Pricing Materials and Working with Suppliers</a></strong></p>`
}
]
});
