(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 7, hours: 11, title: "Planting, Soil and Hardscape Takeoff",
slides: [

{ t: "cover",
  h: "Planting, Soil and Hardscape Takeoff",
  lead: "Planting takeoffs mix counting and math: count the plants, then turn square feet into plant counts, cubic yards of mulch and compost, and pounds of fertilizer and seed. This module shows every conversion with the math written out.",
  objectives: [
    "Count plants by symbol and by callout, by container size and Caltrans plant group, and turn legend rates into totals",
    "Figure groundcover counts from area and spacing, and measure odd-shaped and sloped areas",
    "Take off trees in detail: box sizes, staking and guying, root barrier, pits and palms",
    "Read an agronomic soils report and turn its rates into amendment quantities",
    "Turn areas into cubic yards and tons of mulch, compost, DG, rock and boulders",
    "Take off turf, seed (including pure live seed), hydroseed, erosion control and plant establishment",
    "Take off the hardscape that belongs in a landscape scope, and check your work against real Caltrans quantity sheets (11-428704, 11-431064)"
  ],
  time: [["Reading and slides", "4 h"], ["Practice assignments", "7 h"], ["Module total", "11 h"]],
  body: `<p>Same rules as Module 6: count and measure first, price later. Have a calculator next to you. Every formula here is one you'll use on every bid. If area and volume math is rusty, Module 0 has drills.</p>
<p>This module has two full worked takeoffs (a medical office and a retail center), real quantity sheets from two Caltrans freeway jobs, and a checklist you can use on every bid.</p>`
},

{ h: "What a planting takeoff includes",
  lead: "A planting plan carries more quantities than plants. List every one of them before you start counting.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Group</th><th>Items</th><th>Units</th></tr></thead>
<tbody>
<tr><td>Plants</td><td>Trees, shrubs, groundcover, vines, cuttings, plugs</td><td>EA (each), by size</td></tr>
<tr><td>Tree extras</td><td>Stakes, ties, guying, root barrier, tree basins, fertilizer tablets</td><td>EA, LF (linear feet)</td></tr>
<tr><td>Soil prep</td><td>Fine grading, ripping or tilling, amendments, fertilizer, soil tests</td><td>SF (square feet), CY (cubic yards), LB (pounds)</td></tr>
<tr><td>Weed control</td><td>Weed abatement, grow-and-kill (weed germination) cycles</td><td>SF or SQYD (square yards)</td></tr>
<tr><td>Top dressing</td><td>Bark or wood mulch, compost, DG (decomposed granite), rock and gravel mulch, cobble</td><td>CY or SF</td></tr>
<tr><td>Turf and seed</td><td>Sod, seed, hydroseed, erosion control blankets, fiber rolls</td><td>SF, LB, LF</td></tr>
<tr><td>Hardscape in the landscape scope</td><td>Edging, DG paving, boulders, low walls, pavers</td><td>LF, SF, EA</td></tr>
<tr><td>Care after planting</td><td>Plant establishment and maintenance</td><td>Days, months, visits, LS (lump sum)</td></tr>
</tbody></table></div>`,
  ex: `<p>Real example: on Caltrans job 11-430674 (SR-5/75/805/905), the planting items included Groups H, K, Z, A, B and U plants, rock mulch in three types (SQFT), gravel mulch (204,000 SQFT), decomposed granite (55,900 SQFT), wood mulch (8,040 CY), edging (3,660 LF), hydroseed (315,000 SQFT) and compost (470 CY).</p>`,
  src: "Caltrans contract 11-430674 Bid Item List, items 30–47, 99–100."
},

{ h: "Your planting takeoff routine",
  lead: "Do the same steps in the same order on every job. Planting has many small per-plant and per-area items, and a routine is how none get dropped.",
  body: `<ol class="steps">
<li><div><b>1 · Documents and addenda</b>Plans, specs, soils report, every addendum. Start the addendum log.</div></li>
<li><div><b>2 · Sheet list and scale check</b>Planting plans, legend, details, quantity sheets. Check the scale bar on each.</div></li>
<li><div><b>3 · Legend into lines</b>One line per plant per size, plus one line for every per-plant rate column (fertilizer, mulch, stakes).</div></li>
<li><div><b>4 · Read notes, details and spec</b>Spacing pattern, setbacks, staking, root barrier, soil prep rates, mulch depth, establishment period.</div></li>
<li class="hl"><div><b>5 · Count plants sheet by sheet</b>Trees, shrubs, then groundcover areas. Subtotal by sheet.</div></li>
<li><div><b>6 · Measure areas by type</b>Planted beds, turf, seed, each mulch and rock type, DG, weed control. Note slopes.</div></li>
<li><div><b>7 · Turn rates into materials</b>Per plant (packets, mulch) and per area (compost, fertilizer, seed).</div></li>
<li><div><b>8 · Hardscape in your scope</b>Edging, DG, boulders, as the bid scope says.</div></li>
<li><div><b>9 · Establishment and maintenance</b>Duration, visits, area, replacement plants.</div></li>
<li><div><b>10 · Check two ways and compare</b>Plant count vs. irrigation count; your totals vs. the engineer's sheet.</div></li>
<li><div><b>11 · Freeze and hand off</b>Dated copy to pricing; questions to the RFI (request for information) list.</div></li>
</ol>`,
  watch: `<p>Steps 3 and 7 are where planting takeoffs lose money. A plant count is easy. The packets, basin mulch, stakes and fertilizer that ride on each plant are what estimators forget.</p>`
},

{ h: "Counting plants: by symbol and by callout",
  lead: "Plans show plants two ways. Symbols you count one by one. Callouts tell you the number in a written label. Some plans use both.",
  body: `<div class="twocol">
<div><h3>By symbol</h3><ul>
<li>Each plant has its own symbol on the plan</li>
<li>Count every symbol of each type and mark it as you go</li>
<li>Usual on private commercial plans for trees and shrubs</li>
<li>Count by area of the plan so you can recheck one area at a time</li>
</ul></div>
<div><h3>By callout</h3><ul>
<li>A label with a number and a plant code, like “50 AEO HAW”</li>
<li>Add up all the callouts for each plant on each sheet</li>
<li>Usual on Caltrans and large public plans, and for groundcover areas</li>
<li>The symbols may be scattered and not one per plant</li>
</ul></div>
</div>
<ol class="steps">
<li><div><b>Make a line for each plant in the legend</b>Botanical name, size, and the code used on the plan.</div></li>
<li class="hl"><div><b>Count sheet by sheet</b>Write a subtotal per sheet. That lets you compare to quantity tables that are organized by sheet.</div></li>
<li><div><b>Check the match lines</b>Plants right at a match line (the line where one sheet continues on the next) can be counted on both sheets, or on neither.</div></li>
</ol>`,
  ex: `<p>Real example: planting sheet PP-7 of 11-428704 uses callouts like “50 AEO HAW, 50 ALO BLU, 50 ALO STR, 50 BAC PIL, 50 SED NUS” with a leader line to one planting area. The codes are the underlined parts of the botanical names in the legend on PL-1 (AEOnium HAWorthii, ALOe 'BLUe Elf').</p>`,
  watch: `<p>Some symbols mean “groups of 3 or 5 randomly placed.” Note the legend remarks. On 11-428704, PL-1 note 11 says shrubs are “randomly planted as singles and groups of three or five throughout designated area.” You count the callout number, not the symbols.</p>`,
  src: "11-428704 plans PL-1 and PP-7."
},

{ h: "Read the plant legend: every column is a quantity",
  lead: "A Caltrans plant legend is a takeoff sheet in disguise. Each column is a rate or a rule you multiply by the plant count.",
  body: `<p>Real example: sheet PL-1 (Plant Legend) of 11-431064, SR-905 in Otay Mesa. Its columns and what each one means for the takeoff:</p>
<div class="tablewrap"><table>
<thead><tr><th>Column</th><th>Example value</th><th>Takeoff use</th></tr></thead>
<tbody>
<tr><td>Plant group (size)</td><td>A (No. 1), B (No. 5), K (24" box), U (No. 15), Z (palm)</td><td>Which bid item the plant belongs to</td></tr>
<tr><td>Hole size, diameter and depth</td><td>“Sufficient to receive root ball,” or “see tree hole and basin detail”</td><td>Digging labor; amended backfill if the detail calls for it</td></tr>
<tr><td>Basin type</td><td>1</td><td>Which basin detail to build</td></tr>
<tr><td>Wood mulch, basin (CY)</td><td>0.03 per Group A plant, 0.04 per B, 0.08 per K, 0.06 per U</td><td>Basin mulch CY = plants × rate</td></tr>
<tr><td>Packet fertilizer (EA)</td><td>1 per A, 2 per B, 5 per K, 3 per U, 5 per palm</td><td>Packets = plants × rate</td></tr>
<tr><td>Staking</td><td>“See standard detail” for trees</td><td>Stakes and ties per tree</td></tr>
<tr><td>On center spacing (ft)</td><td>Group A shrubs at 8, 5, 6 and 3 ft; others “as shown on plans”</td><td>Plants from area, where callouts aren't given</td></tr>
<tr><td>Minimum planting distance from ETW (edge of traveled way), EP (edge of pavement), fence, wall, paved ditch, earth ditch</td><td>3, 3, 4, 3, 3, 3 ft</td><td>Strips you don't plant: subtract them from bed areas</td></tr>
<tr><td>Remarks and notes</td><td>Note 1: quantities are “per plant” unless shown per SQFT or SQYD; note 10: plants sourced from San Diego and Orange County only</td><td>How to read every rate; supplier limits for pricing</td></tr>
</tbody></table></div>`,
  watch: `<p>The minimum distances are easy to skip. A 3-ft no-plant strip along 1,000 ft of pavement is 3,000 SF that gets no plants, but may still get mulch or weed control. Measure what the plan actually hatches.</p>`,
  src: "Caltrans 11-431064 plans, sheet PL-1 (Plant Legend and notes)."
},

{ h: "Container sizes and Caltrans plant groups",
  lead: "Plants are counted by container size. Caltrans uses a letter for each size, and each letter is its own bid item.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Caltrans group</th><th>Description</th><th>Container size (cu in)</th></tr></thead>
<tbody>
<tr><td>A</td><td>No. 1 container (1-gallon)</td><td class="num">152–251</td></tr>
<tr><td>B</td><td>No. 5 container (5-gallon)</td><td class="num">785–1,242</td></tr>
<tr><td>U</td><td>No. 15 container (15-gallon)</td><td class="num">2,768–3,696</td></tr>
<tr><td>K</td><td>24-inch box</td><td class="num">5,775–6,861</td></tr>
<tr><td>H</td><td>Cutting</td><td>—</td></tr>
<tr><td>F / P / S</td><td>In flats / plugs / seedling (bare root)</td><td>—</td></tr>
<tr><td>C / E / I / M / O / Z</td><td>Balled and burlapped / bulb / pot / liner / acorn / palm tree</td><td>—</td></tr>
</tbody></table></div>
<p>Private plans just list the size: #1, #5, #15, 24" box, 36" box, 48" box, flats, plugs. Keep one line per plant per size.</p>`,
  ex: `<p>Real example: 11-428704 had four plant items. Group A (1-gallon, 1,460 bid), Group B (5-gallon ghost aloe, 110), Group H (iceplant cuttings, 61,975) and Group K (24" box pines, 43). Every plant in the legend sits under one of those letters.</p>`,
  watch: `<p>A 1-gallon and a 5-gallon of the same plant are two different lines with very different prices and labor. So are a 24" box and a 36" box tree. Never combine sizes.</p>`,
  src: "Caltrans Revised Standard Specifications 20-3.01B(2)(a) plant group table (bound into the 11-428704 Special Provisions); 11-428704 Bid Item List."
},

{ h: "Per-plant rates turned into totals",
  lead: "Multiply each plant group by its legend rates, then add. Real numbers from the 11-431064 plant quantity sheet (PQ-1).",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Group</th><th class="num">Plants (PQ-1)</th><th class="num">Packets each</th><th class="num">Packets</th><th class="num">Basin mulch CY each</th><th class="num">Basin mulch CY</th><th class="num">Bid item qty</th></tr></thead>
<tbody>
<tr><td>A (No. 1)</td><td class="num">6,874</td><td class="num">1</td><td class="num">6,874</td><td class="num">0.03</td><td class="num">206.22</td><td class="num">6,880</td></tr>
<tr><td>B (No. 5)</td><td class="num">2,119</td><td class="num">2</td><td class="num">4,238</td><td class="num">0.04</td><td class="num">84.76</td><td class="num">2,120</td></tr>
<tr><td>K (24" box)</td><td class="num">439</td><td class="num">5</td><td class="num">2,195</td><td class="num">0.08</td><td class="num">35.12</td><td class="num">440</td></tr>
<tr><td>U (No. 15)</td><td class="num">306</td><td class="num">3</td><td class="num">918</td><td class="num">0.06</td><td class="num">18.36</td><td class="num">310</td></tr>
<tr><td>Z (palm)</td><td class="num">90</td><td class="num">5</td><td class="num">450</td><td class="num">none</td><td class="num">0</td><td class="num">90</td></tr>
<tr><td><strong>Total</strong></td><td class="num">9,828</td><td></td><td class="num"><strong>14,675</strong></td><td></td><td class="num"><strong>344.46</strong></td><td></td></tr>
</tbody></table></div>
<ul>
<li>Packet fertilizer: PQ-1 says 14,675. Bid item 25 is 14,700, rounded up.</li>
<li>Basin mulch: PQ-1 shows a subtotal of 344.36 CY, and PQ-2 carries 344 CY into the wood mulch total.</li>
</ul>`,
  ex: `<p>Why 344.36 and not 344.46? On PQ-1 the creeping myoporum row shows 4,413 plants and 132.29 CY. But 4,413 × 0.03 = 132.39. A 0.1 CY typing slip. It changes nothing here, but it's proof that you re-multiply every rate yourself instead of copying the sheet.</p>`,
  watch: `<p>Basin mulch is part of the wood mulch bid item, not a separate line. If you take off area mulch only, you'll miss 344 CY on this job.</p>`,
  src: "Caltrans 11-431064 plans PL-1, PQ-1 (Plant Quantities), PQ-2; Bid Items 25–30, 35."
},

{ h: "Groundcover by area and spacing",
  lead: "Groundcover is drawn as a shaded area with a spacing. You measure the area and use a formula to get the number of plants.",
  body: `<div class="twocol">
<div><h3>Square spacing</h3><ul>
<li>Plants in rows and columns, like a grid</li>
<li>Each plant uses a square s × s</li>
<li><strong>Plants per SF = 1 ÷ s²</strong></li>
<li>s = spacing in feet</li>
</ul></div>
<div><h3>Triangular spacing</h3><ul>
<li>Each row offset by half a space, so every plant is s from its neighbors</li>
<li>Each plant uses 0.866 × s² (rows are only 0.866 × s apart)</li>
<li><strong>Plants per SF = 1.155 ÷ s²</strong></li>
<li>About 15.5% more plants than square</li>
</ul></div>
</div>
<div class="tablewrap"><table>
<thead><tr><th>Spacing</th><th class="num">s²</th><th class="num">Square (per SF)</th><th class="num">Triangular (per SF)</th></tr></thead>
<tbody>
<tr><td>12" (1 ft)</td><td class="num">1</td><td class="num">1.000</td><td class="num">1.155</td></tr>
<tr><td>18" (1.5 ft)</td><td class="num">2.25</td><td class="num">0.444</td><td class="num">0.513</td></tr>
<tr><td>24" (2 ft)</td><td class="num">4</td><td class="num">0.250</td><td class="num">0.289</td></tr>
<tr><td>36" (3 ft)</td><td class="num">9</td><td class="num">0.111</td><td class="num">0.128</td></tr>
</tbody></table></div>`,
  deeper: `<p>Where 1.155 comes from: in triangular spacing, rows are s × sin 60° = 0.866 × s apart, and plants in each row are s apart. So each plant uses 0.866 × s² of area, and plants per SF = 1 ÷ (0.866 × s²) = 1.1547 ÷ s². Rounded, 1.155 ÷ s².</p>`,
  watch: `<p>If the plan doesn't say square or triangular, look at the planting detail. Triangular is common for groundcover. If nothing says, ask, or state your assumption in the proposal. The difference is 15% of the plants.</p>`
},

{ h: "Measuring odd-shaped areas",
  lead: "Real beds are rarely rectangles. Break each bed into simple shapes, add them, and subtract what isn't planted.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Shape</th><th>Area formula</th></tr></thead>
<tbody>
<tr><td>Rectangle</td><td>length × width</td></tr>
<tr><td>Triangle</td><td>½ × base × height</td></tr>
<tr><td>Circle</td><td>3.1416 × radius × radius</td></tr>
<tr><td>Half circle</td><td>3.1416 × radius × radius ÷ 2</td></tr>
<tr><td>Trapezoid (two parallel sides a and b)</td><td>½ × (a + b) × height</td></tr>
<tr><td>Long curvy strip</td><td>average width × length along the middle</td></tr>
</tbody></table></div>
<p><strong>Worked example (made up):</strong> a bed made of a 40 × 18 ft rectangle, a triangle with an 18-ft base and 12-ft height, and a half circle on the other end with a 9-ft radius. A 6 × 6 ft utility box pad sits inside it.</p>
<ol class="steps">
<li><div><b>Rectangle</b>40 × 18 = 720 SF</div></li>
<li><div><b>Triangle</b>½ × 18 × 12 = 108 SF</div></li>
<li><div><b>Half circle</b>3.1416 × 9 × 9 ÷ 2 = 127.2 SF</div></li>
<li><div><b>Subtract the pad</b>6 × 6 = 36 SF</div></li>
<li class="hl"><div><b>Net bed area</b>720 + 108 + 127.2 − 36 = <strong>919.2 SF</strong></div></li>
</ol>`,
  ex: `<p>With a PDF markup program, trace the bed outline with the area tool after calibrating the scale. Then check it with the shapes method on one bed per sheet. If the two numbers are more than a few percent apart, the scale or the tracing is off.</p>`,
  watch: `<p>Subtract tree wells, utility pads, boulders over a set size and paths that cross the bed, but only if the plan leaves them unplanted. Don't subtract shrubs from a groundcover area unless the detail says groundcover stops at the shrubs.</p>`
},

{ h: "Spacing math, worked",
  lead: "Two worked examples: one made up, one from a real Caltrans job.",
  body: `<p><strong>Example 1 (made up):</strong> a 3,600 SF bed of rosemary groundcover, #1 containers at 36" on center, triangular.</p>
<ul>
<li>s = 3 ft, s² = 9</li>
<li>Triangular: 3,600 × 1.155 ÷ 9 = <strong>462 plants</strong></li>
<li>Square would be 3,600 ÷ 9 = 400 plants: 62 fewer</li>
<li>Edge setback: the detail says the first row is 18" from the curb, and 240 LF of the bed is along a curb. Take out 240 × 1.5 = 360 SF. Net area 3,240 SF × 1.155 ÷ 9 = 415.8, so <strong>416 plants</strong>.</li>
</ul>
<p><strong>Example 2 (real, 11-428704):</strong> the plant legend on PL-1 lists iceplant cuttings (Group H) at 1 ft on center over planting areas of 37,980 SF and 14,020 SF = 52,000 SF.</p>
<ul>
<li>Square: 52,000 × 1.000 = 52,000 cuttings</li>
<li>Triangular: 52,000 × 1.155 = <strong>60,060 cuttings</strong></li>
<li>The original bid item said 60,015, close to the triangular figure. The callouts on the planting sheets add up to 61,975, and Addendum 1 changed the bid item to that number.</li>
</ul>`,
  watch: `<p>When the plans also give callouts, an area-and-spacing count is your check. When they disagree, use the callouts the owner pays on, and ask about the difference. On 11-428704 Group H was an (F) final pay item, so the bid quantity was the paid quantity.</p>`,
  src: "11-428704 plans PL-1, PP-1 to PP-7, PQ-1; Addendum 1 (Aug 27, 2021); Bid Summary item 25 (F)."
},

{ h: "Trees: size, staking, root barrier and basins",
  lead: "A tree is one plant symbol and a dozen takeoff items. Read the tree detail and take off every part of it.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>How to take off</th><th>Unit</th></tr></thead>
<tbody>
<tr><td>Tree</td><td>Count by species and box size (15-gal, 24", 36", 48" box)</td><td>EA</td></tr>
<tr><td>Staking or guying</td><td>Trees × stakes per tree from the detail; count ties too</td><td>EA</td></tr>
<tr><td>Root barrier</td><td>Trees within the distance of paving the detail gives × LF per tree. Linear (along paving) or surround, per detail.</td><td>LF</td></tr>
<tr><td>Planting pit and backfill</td><td>Pit size from the detail; amendments per pit</td><td>EA or CY</td></tr>
<tr><td>Basin and basin mulch</td><td>Basin size from the detail × depth</td><td>EA or CY</td></tr>
<tr><td>Fertilizer tablets, iron sulfate</td><td>Rate per tree × number of trees</td><td>EA, LB</td></tr>
<tr><td>Irrigation at the tree</td><td>Bubblers or drip per tree (in the irrigation takeoff, Module 6)</td><td>EA</td></tr>
</tbody></table></div>`,
  ex: `<p>Real per-plant rates from the 11-428704 plant legend (PL-1), times the counts:</p>
<ul>
<li>Pines (Group K, 24" box): 48" diameter hole, 5 packet fertilizers each, 0.5 LB iron sulfate each, 0.2 CY basin mulch each, staking per the standard detail.</li>
<li>15 Canary Island pines: 15 × 5 = 75 packets, 15 × 0.5 = 7.5 LB iron sulfate, 15 × 0.2 = 3.0 CY mulch.</li>
<li>28 Eldarica pines: 28 × 5 = 140 packets, 28 × 0.5 = 14 LB, 28 × 0.2 = 5.6 CY.</li>
</ul>
<p>Those are exactly the numbers on the quantity sheet PQ-1.</p>`,
  watch: `<p>The specs on 11-428704 say “payment for tree hole and basin work is included in the payment for plant (group K).” The tree price has to carry the hole, basin, staking and drain work too.</p>`,
  src: "11-428704 plans PL-1, PLD-1, PQ-1; Special Provisions (tree hole and basin payment clause)."
},

{ h: "Tree takeoff in detail: the formulas",
  lead: "Each tree part has its own simple formula. Read the numbers from your job's detail; the ones below are made-up examples.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>Formula</th><th>Example (made up)</th></tr></thead>
<tbody>
<tr><td>Stakes</td><td>trees × stakes per tree</td><td>24" box: 2 stakes × 20 trees = 40</td></tr>
<tr><td>Tree ties</td><td>stakes × ties per stake</td><td>40 stakes × 2 ties = 80</td></tr>
<tr><td>Guying (for big boxes and windy sites)</td><td>trees × guys per tree; each guy has an anchor, cable and marker</td><td>36" box: 3 guys × 5 trees = 15 guy kits</td></tr>
<tr><td>Root barrier, linear</td><td>trees near paving × LF per tree from the detail</td><td>12 trees × 12 LF = 144 LF</td></tr>
<tr><td>Root barrier, surround</td><td>3.1416 × ring diameter + overlap, per tree</td><td>36" ring: 3.1416 × 3 = 9.42 + 1 ft overlap = 10.42 LF per tree</td></tr>
<tr><td>Pit volume</td><td>3.1416 × radius² × depth</td><td>4-ft wide, 2-ft deep pit: 3.1416 × 2 × 2 × 2 = 25.1 CF</td></tr>
<tr><td>Backfill</td><td>pit volume − root ball volume</td><td>25.1 − 7.0 CF ball = 18.1 CF = 0.67 CY</td></tr>
<tr><td>Amendment in backfill</td><td>backfill × percent by volume from the detail</td><td>0.67 CY × 25% = 0.17 CY compost per tree</td></tr>
<tr><td>Tree grates or well frames</td><td>count by size</td><td>EA</td></tr>
</tbody></table></div>`,
  ex: `<p>Root barrier is sold in panels or rolls. Keep the takeoff in exact LF, and let the supplier's quote round to full panels. Write the panel length on the takeoff notes so pricing knows.</p>`,
  watch: `<p>Box trees are heavy. A 36" or 48" box may need a loader or crane, and access for it. Write “equipment needed” and the count by box size in the takeoff notes, so labor and equipment pricing (Module 9) doesn't miss it.</p>`
},

{ h: "Worked example · a parking lot tree row",
  lead: "Twenty 24-inch box trees in parking islands and five 36-inch box trees at an entry. All numbers are made up for practice.",
  body: `<p><strong>Detail rules (made up):</strong> 24" box: 2 stakes, 2 ties per stake, linear root barrier 12 LF on each curb side, 6 fertilizer tablets. 36" box: 3 guys, surround root barrier with a 36" ring, 8 tablets. Pits get 0.17 CY compost (24") or 0.35 CY (36").</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Math</th><th class="num">Qty</th></tr></thead>
<tbody>
<tr><td>Trees, 24" box</td><td>Counted</td><td class="num">20 EA</td></tr>
<tr><td>Trees, 36" box</td><td>Counted</td><td class="num">5 EA</td></tr>
<tr><td>Stakes</td><td>20 × 2</td><td class="num">40 EA</td></tr>
<tr><td>Ties</td><td>40 × 2</td><td class="num">80 EA</td></tr>
<tr><td>Guy kits</td><td>5 × 3</td><td class="num">15 EA</td></tr>
<tr><td>Root barrier, linear</td><td>20 trees × 2 sides × 12 LF</td><td class="num">480 LF</td></tr>
<tr><td>Root barrier, surround</td><td>5 × (3.1416 × 3 + 1)</td><td class="num">52.1 LF</td></tr>
<tr><td>Fertilizer tablets</td><td>20 × 6 + 5 × 8</td><td class="num">160 EA</td></tr>
<tr><td>Compost in pits</td><td>20 × 0.17 + 5 × 0.35</td><td class="num">5.15 CY</td></tr>
<tr><td>Bubblers (irrigation takeoff)</td><td>25 trees × 2</td><td class="num">50 EA</td></tr>
</tbody></table></div>`,
  watch: `<p>Cross-check: 25 trees here must match 25 trees in the irrigation takeoff (bubblers ÷ bubblers per tree). If they don't, one of the takeoffs is wrong.</p>`
},

{ h: "Palms and specimen trees",
  lead: "Palms are often sold by trunk height, not container size. Read the legend remarks before you count.",
  body: `<p>Real example, 11-431064 plant legend (PL-1):</p>
<div class="tablewrap"><table>
<thead><tr><th>Plant</th><th>Group</th><th class="num">Qty (PQ-1)</th><th>Remarks on PL-1</th></tr></thead>
<tbody>
<tr><td>Hybrid fan palm (Washingtonia)</td><td>Z, palm tree</td><td class="num">90</td><td>Ball and burlap, BTH (brown trunk height, the height of bare trunk below the leaves) 15 ft unless noted; all must be brown skinned; see palm tree detail; 5 packets each</td></tr>
<tr><td>Pindo palm (Butia capitata)</td><td>K, 24" box</td><td class="num">94</td><td>Counted with the 24" box trees; 5 packets and 0.08 CY basin mulch each</td></tr>
<tr><td>Coast live oak</td><td>K, 24" box</td><td class="num">142</td><td>Note 12: at least 6 ft tall in the container</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Count palms by species and trunk height</b>A 15-ft BTH palm and a 20-ft BTH palm are two lines with very different prices.</div></li>
<li><div><b>Read the palm detail</b>Hole size, backfill, bracing, and whether fronds are tied up for shipping.</div></li>
<li class="hl"><div><b>Note equipment and access</b>Ball-and-burlap palms with 15 ft of trunk need a crane or a large loader. Note it for pricing.</div></li>
<li><div><b>Note quality rules</b>Minimum heights, “brown skinned,” and local sourcing (note 10: San Diego and Orange County growers only) all limit which nurseries can quote (Module 8).</div></li>
</ol>`,
  src: "Caltrans 11-431064 plans PL-1 (remarks 11–13, notes 10 and 12) and PQ-1; Bid Items 26 and 27."
},

{ h: "Soil prep and amendments",
  lead: "Soil prep is taken off by area, then turned into material quantities using rates from the specs or the soils report.",
  body: `<ol class="steps">
<li><div><b>Measure the planting area in SF</b>All planted beds and turf areas. Leave out paving, DG and rock areas unless the spec says to prep them.</div></li>
<li><div><b>Find the rates</b>The spec (32 91 13 on private jobs) or the agronomic soils report gives amendments per 1,000 SF, tilling depth and fertilizer rates. Some say “per the soils report,” which means you need the report.</div></li>
<li class="hl"><div><b>Material = area ÷ 1,000 × rate</b>Example: 21,400 SF at 4 CY per 1,000 SF = 21.4 × 4 = 85.6 CY.</div></li>
<li><div><b>Add plant pit backfill</b>If the detail calls for amended backfill per plant, take it off per plant size.</div></li>
<li><div><b>Fine grading</b>SF of finish grading in planting areas. Note if rough grading is by the GC (general contractor) or by you.</div></li>
<li><div><b>Soil tests</b>Count the samples the spec asks for, before and after amending.</div></li>
</ol>`,
  watch: `<p>If the spec says “amend per soils report” and no report is in the bid set, you can't take off the amendments. Ask for the report in an RFI, or state the rate you assumed in your proposal.</p>`,
  deeper: `<p>Unit conversions to keep handy: 1 CY = 27 CF. 1 acre = 43,560 SF. 1 SQYD = 9 SF. Caltrans often measures weed germination in SQYD and compost in CY; private specs usually use SF and CY.</p>`
},

{ h: "How to read an agronomic soils report",
  lead: "A soils report is a lab's test of the site soil plus its recommendations. For the takeoff, you mostly need the recommendations page. The sample below is made up.",
  body: `<p><strong>What's in a typical report, in order:</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>Section</th><th>What it means</th><th>Do you take it off?</th></tr></thead>
<tbody>
<tr><td>Sample ID and location</td><td>Which part of the site each sample came from</td><td>Yes: different areas can get different rates</td></tr>
<tr><td>pH</td><td>How acid or alkaline the soil is</td><td>Only through the recommendations</td></tr>
<tr><td>ECe (salinity) and SAR (sodium adsorption ratio)</td><td>Salt and sodium levels; recycled water sites watch these closely</td><td>Only through the recommendations (often gypsum or leaching)</td></tr>
<tr><td>Nutrients (nitrogen, phosphorus, potassium and others)</td><td>What the soil is short of</td><td>Through the fertilizer rate</td></tr>
<tr><td>Organic matter and texture (sand, silt, clay)</td><td>Why compost is needed and how much</td><td>Through the compost rate</td></tr>
<tr><td>Infiltration or drainage notes</td><td>Whether planting pits need drainage work</td><td>Yes, if it calls for drains or ripping</td></tr>
<tr><td><strong>Recommendations</strong></td><td>Rates per 1,000 SF, depth to mix in, backfill mix, notes for turf vs. shrubs</td><td><strong>Yes: this is your takeoff page</strong></td></tr>
</tbody></table></div>
<p><strong>Sample recommendation lines (made up):</strong> “Shrub areas: per 1,000 SF, spread 4 CY nitrogen-stabilized compost, 50 LB gypsum and 15 LB pre-plant fertilizer; mix to 6 inches. Turf areas: 3 CY compost per 1,000 SF. Tree backfill: 3 parts site soil to 1 part compost.”</p>`,
  watch: `<p>Don't interpret the lab numbers yourself. The lab's own interpretation column (low, normal, high) and the recommendations page are what the designer and inspector will hold you to. If a report has no recommendations page, ask for it.</p>`,
  deeper: `<p>Module 5 (“Price changers 2 · Soil tests and amendments”) covers how spec language about soil testing changes your price. Here you only need the rates.</p>`
},

{ h: "Worked example · soil prep from the report",
  lead: "Turn the sample recommendations into quantities. Areas and rates are made up for practice.",
  body: `<p><strong>Areas:</strong> shrub beds 18,500 SF; turf 2,500 SF; 30 trees with amended backfill.</p>
<ol class="steps">
<li><div><b>Compost, shrubs</b>18,500 ÷ 1,000 × 4 = 18.5 × 4 = <strong>74.0 CY</strong></div></li>
<li><div><b>Compost, turf</b>2,500 ÷ 1,000 × 3 = 2.5 × 3 = <strong>7.5 CY</strong></div></li>
<li><div><b>Gypsum (both areas)</b>21,000 ÷ 1,000 × 50 = 21 × 50 = <strong>1,050 LB</strong>. In 50-lb bags (example bag size): 21 bags.</div></li>
<li><div><b>Pre-plant fertilizer</b>21 × 15 = <strong>315 LB</strong></div></li>
<li><div><b>Tree backfill compost</b>Example 0.67 CY backfill per pit × 1 part in 4 (25%) = 0.17 CY × 30 = <strong>5.0 CY</strong></div></li>
<li class="hl"><div><b>Total compost</b>74.0 + 7.5 + 5.0 = <strong>86.5 CY</strong></div></li>
<li><div><b>Tilling</b>21,000 SF to 6 inches. Note slopes or tight areas that need hand work.</div></li>
</ol>`,
  ex: `<p><strong>Sanity check:</strong> how thick is 4 CY per 1,000 SF spread on top? Thickness in inches = CY × 324 ÷ SF = 4 × 324 ÷ 1,000 = <strong>1.3 inches</strong>. That's a normal layer to mix into 6 inches of soil. If your math ever gives 13 inches, you slipped a decimal.</p>`,
  watch: `<p>Reports often have different rates for different samples. If sample 1 (north beds) and sample 2 (south slope) differ, split the area and take off each one at its own rate.</p>`
},

{ h: "Compost by the acre: real math",
  lead: "On 11-428704, compost was 200 CY per acre. Here's how to turn that into quantities and check the engineer's numbers.",
  body: `<ol class="steps">
<li><div><b>Per 1,000 SF</b>1 acre = 43,560 SF. 200 CY ÷ 43.56 = <strong>4.59 CY per 1,000 SF</strong>.</div></li>
<li><div><b>Depth</b>200 CY × 27 = 5,400 CF spread over 43,560 SF = 0.124 ft = <strong>about 1.5 inches</strong>.</div></li>
<li class="hl"><div><b>Real check, sheet PP-7</b>The compost callout covers 310 SQYD. 310 × 9 = 2,790 SF. 2,790 ÷ 43,560 = 0.064 acre. 0.064 × 200 = 12.8 CY. The plan says <strong>13 CY</strong>.</div></li>
<li><div><b>Real check, sheet PP-1</b>440 SQYD × 9 = 3,960 SF ÷ 43,560 = 0.091 acre × 200 = 18.2 CY. PQ-1 says <strong>18 CY</strong>.</div></li>
</ol>`,
  ex: `<p>PQ-1 lists compost by sheet: 18 + 62 + 53 + 7 + 45 + 84 + 13 = <strong>282 CY</strong>. The bid item (68) is 290 CY.</p>
<p>Notice on PP-7 that weed germination covers 500 SQYD but compost only 310 SQYD of it. Compost goes only where the callouts say, so you can't just multiply the whole weed germination area by the rate.</p>`,
  src: "11-428704 plans PL-1 (Application and Sequence of Work: compost 200 CY/acre), PP-1, PP-7, PQ-1; Bid Item 68."
},

{ h: "Mulch: square feet to cubic yards",
  lead: "Mulch is sold by the cubic yard but drawn as an area. One formula does the conversion.",
  body: `<p style="font-size:1.15em"><strong>CY = SF × depth in inches ÷ 324</strong></p>
<p>Why 324? A cubic yard is 27 CF, and there are 12 inches in a foot. 27 × 12 = 324. So SF × (inches ÷ 12) ÷ 27 = SF × inches ÷ 324.</p>
<div class="tablewrap"><table>
<thead><tr><th>Area</th><th>Depth</th><th>Math</th><th class="num">CY</th></tr></thead>
<tbody>
<tr><td>1,000 SF</td><td>3"</td><td>1,000 × 3 ÷ 324</td><td class="num">9.26</td></tr>
<tr><td>19,000 SF</td><td>3"</td><td>19,000 × 3 ÷ 324</td><td class="num">175.9</td></tr>
<tr><td>2,000 SF</td><td>2"</td><td>2,000 × 2 ÷ 324</td><td class="num">12.3</td></tr>
<tr><td>Reverse: 82 CY</td><td>3"</td><td>82 × 324 ÷ 3</td><td class="num">8,856 SF covered</td></tr>
</tbody></table></div>
<p>Shortcut: at 3" deep, 1 CY covers 108 SF.</p>`,
  ex: `<p>Real example (11-428704): the plan calls for wood chip mulch 3" deep. PQ-1 shows 120 CY of area mulch (20 CY on PP-6 and 100 CY on PP-7) plus 65 CY of basin mulch around individual plants = <strong>185 CY</strong>. The bid item (31) is 190 CY. On PP-7, the 100 CY is two callouts: 18 CY and 82 CY.</p>`,
  watch: `<p>Mulch settles, and suppliers' loads aren't exact. Many estimators add a small allowance for settling and spreading loss. That's a practice number you set from your own jobs, kept in its own column.</p>`,
  src: "11-428704 plans PL-1 (wood chip, 3\" depth), PP-7, PQ-1; Bid Item 31."
},

{ h: "DG, rock, gravel and boulders",
  lead: "Caltrans pays these by the square foot, but suppliers sell them by the ton or yard. Take off the area, then convert.",
  body: `<ol class="steps">
<li><div><b>Measure the area by type</b>Each rock size or DG type is its own line. Rock mulch Type 1, 2 and 3 are different items.</div></li>
<li><div><b>Get the depth from the detail</b>DG paving might be 3" compacted; rock mulch 3" to 6"; cobble by size.</div></li>
<li class="hl"><div><b>CY = SF × inches ÷ 324</b>Same formula as mulch.</div></li>
<li><div><b>Convert to what the supplier sells</b>Ask the supplier how many tons per CY for that material. Weights vary by rock type and size.</div></li>
<li><div><b>Add compaction for DG</b>DG is delivered loose and compacted in place. Use an allowance from the supplier or your jobs.</div></li>
<li><div><b>Add the extras</b>Filter fabric under rock (SF plus overlap), stabilizer for DG, edging around it.</div></li>
<li><div><b>Boulders</b>Count by size (example: 2'–3', 3'–4', 4'–5'). Weight sets the equipment you'll need.</div></li>
</ol>`,
  ex: `<p>Real Caltrans units: on 11-422004 (I-5 Carmel Valley), 20 decorative boulders (EA), rock mulch Type 1 (1,910 SQFT) and Type 2 (1,330 SQFT), edging (240 LF). On 11-430674, decomposed granite was 55,900 SQFT and gravel mulch 204,000 SQFT.</p>`,
  watch: `<p>Don't guess the weight of rock. Get the conversion from the supplier who will quote it, in writing. Module 8 covers supplier quotes.</p>`,
  src: "Caltrans Bid Item Lists, contracts 11-422004 (items 19, 24, 25, 27) and 11-430674 (items 44, 45)."
},

{ h: "Boulders: by the ton or by each",
  lead: "Owners count boulders each, by size. Suppliers often sell them by the ton. Your takeoff has to carry both, so pricing can compare.",
  body: `<div class="twocol">
<div><h3>Priced each (EA)</h3><ul>
<li>Plan shows symbols with a size range</li>
<li>Count by size class: 2–3 ft, 3–4 ft, 4–5 ft</li>
<li>Caltrans example: 11-422004 had 20 “decorative boulders,” EA</li>
<li>Easy to check; supplier picks to the size range</li>
</ul></div>
<div><h3>Priced by the ton</h3><ul>
<li>Supplier weighs the load</li>
<li>You need an estimated weight per size class from the supplier</li>
<li>Tons also tell you what machine can set them</li>
<li>Rock mulch made of 4–12" cobble (11-431064) is paid by area, not count</li>
</ul></div>
</div>
<p><strong>Worked example (made up):</strong> 6 boulders at 2–3 ft, 4 at 3–4 ft, 2 at 4–5 ft. The supplier tells you their typical weights for that rock: about 0.5, 1.5 and 3.0 tons (example numbers; get yours in writing).</p>
<ul>
<li>Tons: 6 × 0.5 + 4 × 1.5 + 2 × 3.0 = 3 + 6 + 6 = <strong>15 tons</strong></li>
<li>Count: <strong>12 EA</strong> in three size lines</li>
<li>Heaviest single boulder: about 3 tons. Note the machine size needed to set it.</li>
<li>Burial: if the detail says bury one-third, note the extra digging per boulder.</li>
</ul>`,
  watch: `<p>“Each” prices from suppliers often exclude delivery and setting. Keep the count, the tons and the heaviest piece in the takeoff, so Module 8 (supplier quotes) and Module 9 (equipment) can both use it.</p>`,
  src: "Caltrans 11-422004 Bid Item List (decorative boulders, EA); 11-431064 plans PL-1 (rock mulch requirements: rock varies 4 to 12 inches)."
},

{ h: "Slope area vs. plan area",
  lead: "A plan is a view from straight above. On a slope, the real surface is bigger than what you measure on the plan. Some items are paid on the real surface.",
  body: `<p><strong>Slope factor = length along the slope ÷ length on the plan.</strong> For a slope of H feet across for every 1 foot up (written H:1), the factor is √(H² + 1) ÷ H.</p>
<div class="tablewrap"><table>
<thead><tr><th>Slope</th><th class="num">4:1</th><th class="num">3:1</th><th class="num">2:1</th><th class="num">1.5:1</th><th class="num">1:1</th></tr></thead>
<tbody><tr><td>Factor</td><td class="num">1.031</td><td class="num">1.054</td><td class="num">1.118</td><td class="num">1.202</td><td class="num">1.414</td></tr></tbody></table></div>
<p><strong>Worked example (made up):</strong> 10,000 SF measured on the plan, all on a 2:1 slope. Real surface = 10,000 × 1.118 = <strong>11,180 SF</strong>. That's 1,180 SF more mulch, seed or fabric than the plan area shows.</p>
<p><strong>Where it matters on real jobs:</strong></p>
<ul>
<li>11-431064 Special Provisions: “The payment quantity for rock mulch is the area measured parallel to the surface of rock mulch.” On a slope, that's the bigger number.</li>
<li>11-431064 sheet PL-2 gives the seed mix in “pounds pure live seed per acre (slope measurement).”</li>
</ul>`,
  watch: `<p>Check whether the owner's quantities are plan area or slope area before you compare them to yours. If you measured plan area and they used slope area, you'll think they're 12% high on every 2:1 slope.</p>`,
  src: "Caltrans 11-431064 Special Provisions section 20-5.03E(4) (rock mulch payment quantity); plans PL-2 (seed mix rates, slope measurement)."
},

{ h: "Math drills · mulch, DG, rock and fabric",
  lead: "Work each one before you read the answer. Depths, densities and roll sizes marked “example” are made up for practice.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Problem</th><th>Math</th><th class="num">Answer</th></tr></thead>
<tbody>
<tr><td>1</td><td>DG path 4 ft × 180 ft, 3" compacted, example 20% compaction allowance</td><td>720 × 3 ÷ 324 = 6.67 CY; × 1.2</td><td class="num">8.0 CY loose</td></tr>
<tr><td>2</td><td>Gravel mulch Type 1, 115,000 SF (11-431064 quantity), if it were 2" deep</td><td>115,000 × 2 ÷ 324</td><td class="num">709.9 CY</td></tr>
<tr><td>3</td><td>Rock mulch 94,100 SF (11-431064 quantity), if the average depth were 6"</td><td>94,100 × 6 ÷ 324</td><td class="num">1,742.6 CY</td></tr>
<tr><td>4</td><td>How much area does 3,290 CY of wood mulch cover at 3"?</td><td>3,290 × 324 ÷ 3</td><td class="num">355,320 SF</td></tr>
<tr><td>5</td><td>22.2 CY of cobble, supplier says 1.4 tons per CY (example)</td><td>22.2 × 1.4</td><td class="num">31.1 tons</td></tr>
<tr><td>6</td><td>Filter fabric under 1,800 SF of cobble, 10% overlap, example rolls of 1,500 SF</td><td>1,800 × 1.10 = 1,980; ÷ 1,500 = 1.32</td><td class="num">1,980 SF, 2 rolls</td></tr>
<tr><td>7</td><td>Compost at 70 CY per acre on 57,200 SF</td><td>57,200 ÷ 43,560 = 1.313 acres × 70</td><td class="num">91.9 CY</td></tr>
<tr><td>8</td><td>Bark 3" on 6,500 SF on a 3:1 slope</td><td>6,500 × 1.054 = 6,851 SF × 3 ÷ 324</td><td class="num">63.4 CY</td></tr>
</tbody></table></div>`,
  watch: `<p>Drills 2 and 3 use real areas with made-up depths. On a real bid, the depth comes from the detail or spec. Never assume it.</p>`
},

{ h: "Weed control and weed germination",
  lead: "Weed work is taken off by area, then multiplied by the number of treatments or cycles the spec calls for.",
  body: `<ul>
<li><strong>Weed abatement:</strong> clearing and killing existing weeds before work. SF (or SQYD) of area.</li>
<li><strong>Weed germination (grow-and-kill):</strong> water the soil to sprout weeds, then kill them, before planting. Take off the area, count the cycles the spec requires, and note the waiting time.</li>
<li><strong>Pre-emergent herbicide</strong> (a weed killer that stops seeds from sprouting): SF of area times the number of applications, if specified.</li>
<li><strong>Removing existing groundcover:</strong> its own line where the plans call for it.</li>
</ul>`,
  ex: `<p>Real example (11-428704): weed germination was 7,020 SQYD (= 63,180 SF), and PQ-1 and the bid item match exactly. The specs say: “Do not perform planting work in weed germination areas for a period of 21 days after irrigation systems have been installed,” keep the soil moist enough to germinate weeds, and control the weeds that sprout with pesticides. That's three weeks of watering and a pesticide application before you plant.</p>`,
  watch: `<p>Weed germination costs time as well as labor. The quantity is SF, but the cost includes the irrigation running, the wait and the return trip. Note the duration in your takeoff so pricing doesn't miss it.</p>`,
  src: "11-428704 Special Provisions 20-1.03E; plans PQ-1; Bid Item 21."
},

{ h: "Turf, seed, hydroseed and erosion control",
  lead: "Each of these is taken off as an area, then turned into material using a rate.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Takeoff</th><th>Material math</th></tr></thead>
<tbody>
<tr><td>Sod</td><td>SF of turf area</td><td>SF plus a small cutting allowance; suppliers sell by SF or by pallet</td></tr>
<tr><td>Seed (turf or native)</td><td>SF of seeded area</td><td>LB = area ÷ 1,000 × rate per 1,000 SF (or acres × rate per acre)</td></tr>
<tr><td>Hydroseed</td><td>SF of area</td><td>Seed, fiber, tackifier (a glue that holds the mix on the soil) and fertilizer by rate per acre from the spec</td></tr>
<tr><td>Bonded fiber matrix</td><td>SF of slope</td><td>By rate per acre from the spec</td></tr>
<tr><td>Erosion control blanket or jute</td><td>SF of slope</td><td>Add overlaps and anchor trench per detail; count staples</td></tr>
<tr><td>Fiber rolls</td><td>LF along the contour lines shown</td><td>Count stakes per roll per detail</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Seed math (made-up example):</strong> 12,000 SF of native seed at 4 LB per 1,000 SF = 12 × 4 = <strong>48 LB</strong>. If the spec gives 40 LB per acre: 12,000 ÷ 43,560 = 0.275 acre × 40 = 11 LB.</p>
<p><strong>Real units:</strong> on 11-422004, hydroseed was 154,000 SQFT, bonded fiber matrix 47,600 SQFT, fiber rolls 4,550 LF, and “move-in/move-out (erosion control)” 3 EA. Each mobilization of the hydroseed truck was its own item.</p>`,
  watch: `<p>Hydroseed rates are often per acre while areas are in SF. Convert carefully: divide SF by 43,560 to get acres. A slip here is a factor of 43 or more.</p>`,
  src: "Caltrans 11-422004 Bid Item List, items 39–43."
},

{ h: "Worked example · sod and seed",
  lead: "A small turf area done both ways. Rates, pallet size and allowances are made-up examples; use your spec and your supplier's numbers.",
  body: `<p><strong>The area:</strong> a 6,400 SF turf area on flat ground.</p>
<div class="twocol">
<div><h3>As sod</h3><ul>
<li>Net: 6,400 SF</li>
<li>Cutting allowance 5%: 6,400 × 1.05 = <strong>6,720 SF</strong></li>
<li>Example pallet: 500 SF. 6,720 ÷ 500 = 13.4, so <strong>14 pallets</strong></li>
<li>Starter fertilizer, example 10 LB per 1,000 SF: 6.4 × 10 = <strong>64 LB</strong></li>
<li>Soil prep and fine grading: 6,400 SF</li>
</ul></div>
<div><h3>As seed</h3><ul>
<li>Net: 6,400 SF</li>
<li>Example spec rate 8 LB per 1,000 SF: 6.4 × 8 = <strong>51.2 LB</strong></li>
<li>Starter fertilizer: same 64 LB</li>
<li>Seed cover (mulch or topdressing) per spec, SF</li>
<li>Longer establishment and more watering visits: note it</li>
</ul></div>
</div>`,
  watch: `<p>Sod is often delivered the day it's cut and must go down fast. Note the sod area per day the crew can lay, so the order can be split into deliveries. That's a pricing and scheduling note, not a quantity change.</p>`
},

{ h: "Pure live seed (PLS) math",
  lead: "Native seed rates are often given in pounds of pure live seed. A bag of seed is never 100% pure and 100% alive, so you buy more bulk pounds than the PLS rate.",
  body: `<ol class="steps">
<li><div><b>PLS fraction = purity × germination</b>Purity is the share of the bag that is the right seed. Germination is the share of that seed that sprouts. Both are on the seed tag.</div></li>
<li class="hl"><div><b>Bulk LB = PLS LB ÷ (purity × germination)</b>This is what you actually buy.</div></li>
</ol>
<p><strong>Real rates, 11-431064 sheet PL-2 (coastal sage scrub mix):</strong> 12 species, 28.1 LB PLS per acre in total. California poppy is 3.0 LB PLS per acre with a minimum germination of 60%.</p>
<div class="tablewrap"><table>
<thead><tr><th>Step</th><th>Math</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>Hydroseed area (PQ-2)</td><td>796,550 SF ÷ 43,560</td><td class="num">18.29 acres</td></tr>
<tr><td>Whole mix, PLS</td><td>18.29 × 28.1</td><td class="num">513.8 LB PLS</td></tr>
<tr><td>Poppy, PLS</td><td>18.29 × 3.0</td><td class="num">54.9 LB PLS</td></tr>
<tr><td>Poppy, bulk (example purity 95%, germination 60%)</td><td>54.9 ÷ (0.95 × 0.60)</td><td class="num">96.3 LB bulk</td></tr>
</tbody></table></div>`,
  watch: `<p>The seed supplier quotes bulk pounds. Send them the PLS rates and areas, and ask them to quote bulk to meet the PLS. Don't compare a PLS number to a bulk price.</p>`,
  src: "Caltrans 11-431064 plans PL-2 (Seed Mix, coastal sage scrub, pounds pure live seed per acre, slope measurement) and PQ-2."
},

{ h: "Hydroseed and erosion control on a real job",
  lead: "11-431064 had 797,000 SF of hydroseed. The erosion control table gives the sequence and rates. Turn each rate into a quantity, and look for anything that doesn't add up.",
  body: `<p><strong>Erosion control sequence, sheet PL-2:</strong> step 1 temporary fiber rolls (removed later), step 2 irrigation, step 3 weed germination, step 4 compost (fine) at 70 CY per acre, step 5 planting, step 6 hydroseed: tackifier (psyllium) 1,500 LB per acre, fiber (wood) 150 LB per acre, seed mix 28.1 LB per acre, as printed.</p>
<div class="tablewrap"><table>
<thead><tr><th>Material</th><th>Rate (PL-2)</th><th>Math on 18.29 acres</th><th class="num">Result</th><th>Plan sheet / bid item</th></tr></thead>
<tbody>
<tr><td>Compost</td><td>70 CY/acre</td><td>18.29 × 70</td><td class="num">1,280 CY</td><td>PQ-2 1,178 CY; item 64 1,180 CY</td></tr>
<tr><td>Tackifier</td><td>1,500 LB/acre</td><td>18.29 × 1,500</td><td class="num">27,429 LB</td><td>In hydroseed item 63</td></tr>
<tr><td>Wood fiber</td><td>150 LB/acre</td><td>18.29 × 150</td><td class="num">2,743 LB</td><td>In hydroseed item 63</td></tr>
<tr><td>Seed</td><td>28.1 LB PLS/acre</td><td>18.29 × 28.1</td><td class="num">514 LB PLS</td><td>In hydroseed item 63</td></tr>
</tbody></table></div>
<ol class="steps">
<li class="hl"><div><b>The compost doesn't reconcile</b>Each sheet on PQ-2 works out to about 64 CY per acre (84 CY on 57,200 SF is 64.0). At 70 CY per acre, you'd need about 102 CY more. Possible reasons: compost covers less area than hydroseed, or the area is measured differently. A bidder inquiry settles it.</div></li>
<li><div><b>The tackifier and fiber rates are worth a question</b>Many hydroseed mixes use much more fiber than tackifier. A table showing the reverse may be a typing swap. Don't fix it yourself: ask.</div></li>
<li><div><b>Who did the work</b>The low bidder listed a hydroseeding subcontractor for 100% of item 63. Temporary fiber roll was 23,800 LF (item 17).</div></li>
</ol>`,
  watch: `<p>Your hydroseed sub prices from the rates. If the rates are wrong on the plans and nobody asks, every bidder's sub prices something different, and the job's paperwork fights start on day one.</p>`,
  src: "Caltrans 11-431064 plans PL-2 (Erosion Control table, Seed Mix) and PQ-2; Bid Items 17, 63, 64; Bid Summary subcontractor list."
},

{ h: "Gravel mulch, rock mulch and edging on a real job",
  lead: "Sheet PQ-2 of 11-431064 lists every area item by plan sheet. Compare each total to its bid item, and notice the one that goes the wrong way.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">PQ-2 total</th><th class="num">Bid item</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Weed germination</td><td class="num">115,099 SQYD</td><td class="num">116,000</td><td>Rounded up</td></tr>
<tr><td>Hydroseed</td><td class="num">796,550 SQFT</td><td class="num">797,000</td><td>PP-9 to PP-12 only</td></tr>
<tr><td>Compost</td><td class="num">1,178 CY</td><td class="num">1,180</td><td>Same sheets as hydroseed</td></tr>
<tr><td>Gravel mulch Type 1 / 2 / 3</td><td class="num">114,440 / 79,490 / 27,100</td><td class="num">115,000 / 79,500 / 27,100</td><td>PP-1 to PP-4; red, white and brown rock per PL-1</td></tr>
<tr><td>Rock mulch</td><td class="num">94,100 SQFT</td><td class="num">94,100</td><td>Rounded cobble 4–12"</td></tr>
<tr><td>Rock blanket</td><td class="num">3,775 SQFT</td><td class="num">3,780</td><td>PP-9 to PP-11</td></tr>
<tr><td>Edging (black HDPE, high-density polyethylene)</td><td class="num">6,200 LF</td><td class="num">6,200</td><td>Same four sheets as the gravel mulch</td></tr>
<tr><td><strong>Wood mulch</strong></td><td class="num"><strong>3,320 CY</strong></td><td class="num"><strong>3,290</strong></td><td><strong>Bid item is 30 CY lower</strong></td></tr>
</tbody></table></div>
<p>Wood mulch on PQ-2: 1,011 + 921 + 548 + 496 = 2,976 CY of area mulch, plus 344 CY of plant basin mulch = 3,320 CY.</p>
<ol class="steps">
<li><div><b>Every other item rounds up or matches</b>So rounding doesn't explain a bid quantity that's lower.</div></li>
<li class="hl"><div><b>Is it measured or final pay?</b>The bid form doesn't mark it (F), so it's measured: you're paid for what you place. Bid your unit price on 3,290, but buy and plan for 3,320 plus your allowance.</div></li>
<li><div><b>Ask anyway</b>A short bidder inquiry (Module 12) costs nothing and tells you whether one sheet changed.</div></li>
</ol>`,
  watch: `<p>Specs add work these areas don't show: 11-431064 requires grading and compacting to at least 90% relative compaction before gravel or rock mulch, and a 1 SQYD rock sample before delivery. Take off the compaction area with the mulch area.</p>`,
  src: "Caltrans 11-431064 plans PL-1 (gravel and rock mulch requirements), PQ-2 (Planting Area Quantities); Special Provisions additions to sections 20-5.03C and 20-5.03E; Bid Items 22–24, 32–36, 63, 64."
},

{ h: "Hardscape inside the landscape scope",
  lead: "Some hardscape is usually part of the landscape package. Take it off with the same methods, and check that the work fits your license.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Takeoff</th><th>Unit</th></tr></thead>
<tbody>
<tr><td>Edging (steel, aluminum, HDPE, concrete mow curb)</td><td>Length along the bed edges shown</td><td>LF</td></tr>
<tr><td>DG paving</td><td>Area; CY from depth; stabilizer; base if detailed</td><td>SF, CY</td></tr>
<tr><td>Pavers</td><td>Area by type and pattern; base and sand from detail; edge restraint LF</td><td>SF, LF</td></tr>
<tr><td>Low landscape and seat walls</td><td>Length and height; footing per detail</td><td>LF or SF of face</td></tr>
<tr><td>Boulders, cobble, stepping stones</td><td>Count by size, or area for cobble</td><td>EA, SF</td></tr>
</tbody></table></div>
<p>Module 18 covers demolition, grading, drainage and the larger hardscape scopes landscape subs get handed: <a href="#m18-1">go to Module 18</a>.</p>`,
  watch: `<p>CSLB (Contractors State License Board) defines the C-27 as work on “landscape systems and facilities” that improve the grounds, including preparing and grading land “for the installation of any architectural, horticultural and decorative treatment or arrangement.” Larger walls, structural concrete, retaining walls and site lighting may need other classifications or an engineered design. Read the scope against the definition (Module 2) and, if unsure, ask CSLB before you bid it.</p>`,
  deeper: `<p>The full definition is in California Code of Regulations, Title 16, §832.27. On a private job, hardscape is often split between the landscape sub and the concrete or masonry sub. Read the GC's bid scope carefully and say in your proposal exactly which hardscape items you include (Module 13).</p>`,
  src: "CSLB C-27 Landscaping classification (16 CCR §832.27): cslb.ca.gov."
},

{ h: "Edging, DG paths and pavers: takeoff basics",
  lead: "Three small hardscape items that show up in most landscape packages, worked once each. Depths, allowances and spacings are made-up examples.",
  body: `<p><strong>1 · DG path, 5 ft × 140 ft, stabilized DG 3" over 4" base, header both sides</strong></p>
<ul>
<li>Area: 5 × 140 = 700 SF</li>
<li>DG: 700 × 3 ÷ 324 = 6.48 CY compacted × 1.2 example allowance = <strong>7.8 CY loose</strong></li>
<li>Base: 700 × 4 ÷ 324 = <strong>8.6 CY</strong> compacted (get the base allowance from the supplier)</li>
<li>Header: 2 sides × 140 + 2 ends × 5 = <strong>290 LF</strong>; stakes per the maker's spacing</li>
<li>Stabilizer: per the maker's rate per ton or per CY of DG</li>
</ul>
<p><strong>2 · Paver patio, 400 SF, 6" base, 1" sand</strong></p>
<ul>
<li>Pavers: 400 SF + 5% cuts = <strong>420 SF</strong></li>
<li>Base: 400 × 6 ÷ 324 = <strong>7.4 CY</strong>; sand: 400 × 1 ÷ 324 = <strong>1.2 CY</strong></li>
<li>Edge restraint: the perimeter not against a wall or curb, LF</li>
</ul>
<p><strong>3 · Bed edging</strong></p>
<ul>
<li>Measure only edges where the plan shows edging, usually where two surfaces meet (mulch and turf, gravel types)</li>
<li>One line per material and height; add the maker's stakes and splice pieces</li>
</ul>`,
  watch: `<p>Edging is a line, not an area. Where one edging strip separates two materials, count it once, not once for each side.</p>`
},

{ h: "Plant establishment and maintenance quantities",
  lead: "Care after planting is priced from time. Take off the duration, the visits and the area you'll care for.",
  body: `<ol class="steps">
<li><div><b>Find the duration</b>The spec gives the establishment period (days, working days or months) and any maintenance period after it.</div></li>
<li class="hl"><div><b>Turn it into visits</b>Visits = duration ÷ how often you go. 90 days weekly is about 13 visits.</div></li>
<li><div><b>Area and count</b>The SF you maintain and the number of plants you'll replace if they die.</div></li>
<li><div><b>List the tasks per visit</b>Watering checks, weeding, pest control, irrigation checks, trash, reports.</div></li>
<li><div><b>List the one-time tasks</b>Fertilizing on set dates, seasonal schedules, final walk.</div></li>
<li><div><b>Water and power</b>Who pays for water during establishment? Note it.</div></li>
</ol>`,
  ex: `<p>Real example (11-428704): Type 1 plant establishment of 250 working days, plus “maintain existing planted areas” as a lump sum. The PQ-1 sheet lists the existing planted areas per sheet (about 717,000 SF total) “for estimate only.” Fertilizing was set for the first week of April, July and September.</p>`,
  watch: `<p>Bidders on 11-428704 priced plant establishment from $10,000 to $300,000 (Module 15). A takeoff of duration, visits and tasks is what keeps your number grounded.</p>`,
  src: "11-428704 Notice to Bidders, Special Provisions 20-4, plans PQ-1."
},

{ h: "Worked example · a long establishment period",
  lead: "11-431064 has 750 working days of plant establishment. Turn that into visits and crew hours. The duration is real; the visit plan and hours are made-up examples.",
  body: `<p><strong>Real facts (11-431064 Special Provisions):</strong> complete the work, excluding plant establishment, within 120 working days; complete plant establishment within 750 working days; Type 1 plant establishment; submit seasonal watering schedules for March–May, June–August, September–October and November–February; keep the site neat, including areas the public can't see.</p>
<ol class="steps">
<li><div><b>Working days to calendar time</b>A rough rule: about 250 working days a year once weekends and holidays come out. 750 ÷ 250 = about <strong>3 years</strong>. Check the contract's own calendar.</div></li>
<li><div><b>Visits (example plan: one crew visit per week)</b>3 years × 52 weeks = <strong>156 visits</strong>.</div></li>
<li><div><b>Crew hours (example: 2 workers × 6 hours per visit)</b>156 × 12 = <strong>1,872 crew hours</strong>.</div></li>
<li><div><b>Seasonal schedules</b>4 seasons × 3 years = <strong>12 watering schedules</strong> to prepare and submit.</div></li>
<li class="hl"><div><b>Replacement plants (example allowance 5% of Group A)</b>6,874 × 0.05 = 343.7, so <strong>344 one-gallon plants</strong>. Keep it as a separate line so you can change the percent.</div></li>
<li><div><b>Area to keep weeded</b>Every planted, mulched and seeded area on PQ-2, plus the hydroseed slopes.</div></li>
</ol>`,
  watch: `<p>On a three-year establishment, wages and water rates will change before the end (Modules 9 and 11). Note the duration and the start date in your takeoff so pricing can escalate them.</p>`,
  src: "Caltrans 11-431064 Special Provisions (time to complete; additions to sections 20-4.01A, 20-4.01C(1), 20-4.03A); Bid Item 31."
},

{ h: "Worked example, part 1: plants and trees",
  lead: "The same made-up medical office site from Module 6, now the planting. All numbers on this slide and the next are a made-up example for practice.",
  body: `<p><strong>Site areas (made up):</strong> planted beds 19,000 SF, sod 2,400 SF, DG paving 1,400 SF, cobble in a bioswale 1,800 SF. Total 24,600 SF.</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>How counted</th><th class="num">Qty</th></tr></thead>
<tbody>
<tr><td>Trees, 36" box</td><td>Symbols</td><td class="num">4</td></tr>
<tr><td>Trees, 24" box</td><td>Symbols</td><td class="num">16</td></tr>
<tr><td>Trees, 15-gallon</td><td>Symbols</td><td class="num">8</td></tr>
<tr><td>Shrubs, #5</td><td>Symbols, by species (subtotal)</td><td class="num">310</td></tr>
<tr><td>Shrubs, #1</td><td>Symbols, by species (subtotal)</td><td class="num">420</td></tr>
<tr><td>Groundcover rosemary, #1 at 36" triangular</td><td>3,240 SF net × 1.155 ÷ 9</td><td class="num">416</td></tr>
<tr><td>Tree stakes</td><td>24" box: 16 × 2; 15-gal: 8 × 2; 36" box: 4 × 3</td><td class="num">60</td></tr>
<tr><td>Root barrier, linear</td><td>12 trees within 5' of paving × 12 LF each</td><td class="num">144 LF</td></tr>
<tr><td>Fertilizer tablets</td><td>Detail rates: 36" box 8, 24" box 6, 15-gal 4, #5 2, #1 1 → 32 + 96 + 32 + 620 + 836</td><td class="num">1,616</td></tr>
</tbody></table></div>`,
  ex: `<p>Check the tablet math: 4 × 8 = 32; 16 × 6 = 96; 8 × 4 = 32; 310 × 2 = 620; (420 + 416) × 1 = 836. Total 32 + 96 + 32 + 620 + 836 = 1,616.</p>`,
  watch: `<p>The tree count must match the irrigation takeoff: Module 6 had 28 trees × 2 bubblers. Here 4 + 16 + 8 = 28. When planting and irrigation counts don't match, one of them is wrong.</p>`
},

{ h: "Worked example, part 2: soil, mulch, hardscape and the quantity table",
  lead: "Now the area items, with the math shown.",
  body: `<ul>
<li><strong>Fine grading and soil prep:</strong> beds + sod = 19,000 + 2,400 = 21,400 SF.</li>
<li><strong>Compost:</strong> made-up soils report rate 4 CY per 1,000 SF: 21.4 × 4 = 85.6 CY.</li>
<li><strong>Pre-plant fertilizer:</strong> 20 LB per 1,000 SF: 21.4 × 20 = 428 LB.</li>
<li><strong>Bark mulch 3":</strong> 19,000 × 3 ÷ 324 = 175.9 CY.</li>
<li><strong>Cobble 4":</strong> 1,800 × 4 ÷ 324 = 22.2 CY. Filter fabric 1,800 SF + 10% overlap = 1,980 SF.</li>
<li><strong>DG paving 3" compacted:</strong> 1,400 × 3 ÷ 324 = 13.0 CY compacted. With an example 20% compaction allowance: 13.0 × 1.2 = 15.6 CY loose.</li>
<li><strong>Sod:</strong> 2,400 SF + 5% = 2,520 SF.</li>
<li><strong>Weed abatement:</strong> 19,000 SF × 2 grow-and-kill cycles (spec).</li>
<li><strong>Establishment:</strong> 90 days, weekly = 13 visits.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Unit</th><th class="num">Net qty</th><th class="num">Allowance</th><th class="num">Order qty</th></tr></thead>
<tbody>
<tr><td>Fine grading / soil prep</td><td>SF</td><td class="num">21,400</td><td></td><td class="num">21,400</td></tr>
<tr><td>Compost amendment</td><td>CY</td><td class="num">85.6</td><td class="num">round up</td><td class="num">86</td></tr>
<tr><td>Pre-plant fertilizer</td><td>LB</td><td class="num">428</td><td></td><td class="num">428</td></tr>
<tr><td>Bark mulch, 3"</td><td>CY</td><td class="num">175.9</td><td class="num">5%</td><td class="num">185</td></tr>
<tr><td>Cobble, 4" / filter fabric</td><td>CY / SF</td><td class="num">22.2 / 1,800</td><td class="num">— / 10%</td><td class="num">23 / 1,980</td></tr>
<tr><td>DG paving, 3" compacted</td><td>SF (CY)</td><td class="num">1,400 (13.0)</td><td class="num">20%</td><td class="num">15.6 CY</td></tr>
<tr><td>Steel edging</td><td>LF</td><td class="num">420</td><td class="num">5%</td><td class="num">441</td></tr>
<tr><td>Boulders 2'–3' / 3'–4' / 4'–5'</td><td>EA</td><td class="num">6 / 4 / 2</td><td></td><td class="num">6 / 4 / 2</td></tr>
<tr><td>Sod</td><td>SF</td><td class="num">2,400</td><td class="num">5%</td><td class="num">2,520</td></tr>
<tr><td>Weed abatement (2 cycles)</td><td>SF</td><td class="num">19,000</td><td></td><td class="num">38,000 SF treated</td></tr>
<tr><td>Plant establishment, 90 days</td><td>Visits</td><td class="num">13</td><td></td><td class="num">13</td></tr>
</tbody></table></div>`,
  watch: `<p>The allowances (5%, 10%, 20%) are example practice numbers. Set yours from what you actually bought on finished jobs, and keep them in their own column so anyone can see the net quantity.</p>`
},

{ h: "Second takeoff · retail center, part 1: areas",
  lead: "The retail center from Module 6's drip example, now the planting. Everything here is a made-up example for practice.",
  body: `<p><strong>Sample job (made up):</strong> a retail center in South County. Parking islands and perimeter strips (drip, from Module 6), a frontage bed along the street, a small DG seating area and a bioretention basin (a planted low area that holds and soaks in storm water) with cobble.</p>
<div class="tablewrap"><table>
<thead><tr><th>Area</th><th>How measured</th><th class="num">SF</th></tr></thead>
<tbody>
<tr><td>Parking islands (6 × 9 × 36)</td><td>Rectangles</td><td class="num">1,944</td></tr>
<tr><td>Perimeter strips (2 × 6 × 220)</td><td>Rectangles</td><td class="num">2,640</td></tr>
<tr><td>Frontage bed</td><td>PDF area tool, checked by shapes</td><td class="num">6,200</td></tr>
<tr><td><strong>Planted beds total</strong></td><td></td><td class="num"><strong>10,784</strong></td></tr>
<tr><td>DG seating area</td><td>Rectangle</td><td class="num">600</td></tr>
<tr><td>Basin bottom (flat)</td><td>Plan area</td><td class="num">1,200</td></tr>
<tr><td>Basin side slopes, 3:1</td><td>800 SF plan × 1.054</td><td class="num">843</td></tr>
<tr><td><strong>Basin cobble total</strong></td><td>1,200 + 843</td><td class="num"><strong>2,043</strong></td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Check against Module 6</b>Drip area there was 1,944 + 2,640 = 4,584 SF. Same here. The frontage bed is on spray.</div></li>
<li><div><b>Use the slope factor where the surface tilts</b>The basin sides are 3:1, so plan area × 1.054.</div></li>
<li class="hl"><div><b>Keep areas by type</b>Every later quantity (mulch, compost, fabric, weeding) is built from these lines.</div></li>
</ol>`
},

{ h: "Second takeoff · retail center, part 2: plants and rates",
  lead: "Count the plants, then apply the detail rates. Same made-up job.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Math</th><th class="num">Qty</th></tr></thead>
<tbody>
<tr><td>Trees, 24" box (6 islands + 14 in strips)</td><td>Symbols</td><td class="num">20</td></tr>
<tr><td>Trees, 36" box (frontage)</td><td>Symbols</td><td class="num">5</td></tr>
<tr><td>Shrubs, #5</td><td>Symbols, by species</td><td class="num">180</td></tr>
<tr><td>Shrubs, #1</td><td>Symbols, by species</td><td class="num">520</td></tr>
<tr><td>Groundcover, #1 at 24" triangular, 2,400 SF of the frontage</td><td>2,400 × 1.155 ÷ 4</td><td class="num">693</td></tr>
<tr><td>Stakes (24" box, 2 each)</td><td>20 × 2</td><td class="num">40</td></tr>
<tr><td>Guy kits (36" box, 3 each)</td><td>5 × 3</td><td class="num">15</td></tr>
<tr><td>Root barrier, linear, 24" box trees by paving</td><td>20 × 12 LF</td><td class="num">240 LF</td></tr>
<tr><td>Root barrier, surround, 36" ring</td><td>5 × (3.1416 × 3 + 1)</td><td class="num">52.1 LF</td></tr>
<tr><td>Fertilizer tablets (36" box 8, 24" box 6, #5 2, #1 1)</td><td>40 + 120 + 360 + 1,213</td><td class="num">1,733</td></tr>
</tbody></table></div>
<p>Tablet math: 5 × 8 = 40; 20 × 6 = 120; 180 × 2 = 360; (520 + 693) × 1 = 1,213. Total 40 + 120 + 360 + 1,213 = 1,733.</p>`,
  watch: `<p>Tree check against Module 6: the drip lot had 6 islands and 2 strips. 6 island trees + 14 strip trees = 20 trees on drip. Those trees need their own bubbler or drip ring in the irrigation takeoff, or the design must show that the drip grid waters them. If it's not shown, ask.</p>`
},

{ h: "Second takeoff · retail center, part 3: the quantity table",
  lead: "Area items for the retail center, with the math in the second column. Rates, depths and allowances are made-up examples.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Math</th><th>Unit</th><th class="num">Net qty</th><th class="num">Allowance</th><th class="num">Order qty</th></tr></thead>
<tbody>
<tr><td>Soil prep and fine grading</td><td>Planted beds</td><td>SF</td><td class="num">10,784</td><td></td><td class="num">10,784</td></tr>
<tr><td>Compost, 4 CY per 1,000 SF</td><td>10.784 × 4</td><td>CY</td><td class="num">43.1</td><td class="num">round up</td><td class="num">44</td></tr>
<tr><td>Bark mulch 3"</td><td>10,784 × 3 ÷ 324</td><td>CY</td><td class="num">99.9</td><td class="num">5%</td><td class="num">105</td></tr>
<tr><td>Cobble 6" in basin</td><td>2,043 × 6 ÷ 324</td><td>CY</td><td class="num">37.8</td><td class="num">none</td><td class="num">38</td></tr>
<tr><td>Filter fabric under cobble</td><td>2,043 × 1.10</td><td>SF</td><td class="num">2,043</td><td class="num">10%</td><td class="num">2,248</td></tr>
<tr><td>DG 3" compacted</td><td>600 × 3 ÷ 324 = 5.56</td><td>CY</td><td class="num">5.56</td><td class="num">20%</td><td class="num">6.7</td></tr>
<tr><td>Steel edging (example measured)</td><td>Bed edges shown</td><td>LF</td><td class="num">380</td><td class="num">5%</td><td class="num">399</td></tr>
<tr><td>Weed abatement, 2 cycles</td><td>10,784 × 2</td><td>SF treated</td><td class="num">21,568</td><td></td><td class="num">21,568</td></tr>
<tr><td>Plant establishment, 90 days weekly</td><td>90 ÷ 7</td><td>Visits</td><td class="num">13</td><td></td><td class="num">13</td></tr>
</tbody></table></div>`,
  ex: `<p>Order quantity math: 99.9 × 1.05 = 104.9, rounded up to 105. 2,043 × 1.10 = 2,247.3, rounded up to 2,248. 5.56 × 1.2 = 6.67, about 6.7 CY.</p>`,
  watch: `<p>Bioretention basins often have their own soil mix, underdrain and grading by the civil contractor. Before you price the cobble, read the civil sheets to see what is yours (Module 4, and Module 18 for drainage scope).</p>`
},

{ h: "Check your takeoff against PQ-1",
  lead: "Real numbers from the 11-428704 planting quantity sheet (PQ-1, as revised by Addendum 1), compared to the bid items.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">PQ-1</th><th class="num">Bid item</th><th>How PQ-1 got there</th></tr></thead>
<tbody>
<tr><td>Plant (Group A)</td><td class="num">1,458</td><td class="num">1,460</td><td>186 + 340 + 110 + 110 + 186 + 186 + 230 + 110</td></tr>
<tr><td>Plant (Group B)</td><td class="num">110</td><td class="num">110</td><td>Ghost aloe</td></tr>
<tr><td>Plant (Group K)</td><td class="num">43</td><td class="num">43</td><td>15 Canary Island + 28 Eldarica pines</td></tr>
<tr><td>Wood mulch</td><td class="num">185 CY</td><td class="num">190 CY</td><td>120 area + 65 basin</td></tr>
<tr><td>Compost</td><td class="num">282 CY</td><td class="num">290 CY</td><td>18 + 62 + 53 + 7 + 45 + 84 + 13</td></tr>
<tr><td>Packet fertilizer</td><td class="num">1,893</td><td class="num">1,900</td><td>1 per Group A plant, 2 per ghost aloe, 5 per pine</td></tr>
<tr><td>Iron sulfate</td><td class="num">229.5 LB</td><td class="num">230 LB</td><td>208 iceplant + 7.5 + 14 pines</td></tr>
<tr><td>Slow-release fertilizer</td><td class="num">416 LB</td><td class="num">420 LB</td><td>Iceplant areas</td></tr>
<tr><td>Weed germination</td><td class="num">7,020 SQYD</td><td class="num">7,020</td><td>By sheet</td></tr>
<tr><td>Temporary protection fence (rope)</td><td class="num">1,120 LF</td><td class="num">1,120</td><td>By sheet</td></tr>
</tbody></table></div>`,
  ex: `<p>The pattern is the same one you saw in Module 6: many bid quantities are the plan total rounded up. Group A: 1,458 → 1,460. Mulch: 185 → 190. Compost: 282 → 290. Small differences like these are usually rounding. Check your own count before you ask.</p>
<p>Packet fertilizer check: Group A 1,458 × 1 = 1,458; ghost aloe 110 × 2 = 220; pines 43 × 5 = 215. 1,458 + 220 + 215 = 1,893.</p>`,
  watch: `<p>The iceplant fertilizer is a rate per area: 4 LB of iron sulfate and 8 LB of slow-release per 1,000 SF over 52,000 SF. 52 × 4 = 208 LB and 52 × 8 = 416 LB. Per-area rates are easy to miss if you only count plants.</p>`,
  src: "11-428704 plans PL-1 and PQ-1 (replaced per Addendum 1, Aug 27, 2021); Bid Items 19, 21–28, 31, 68."
},

{ h: "Group H: when the callouts and the bid item disagree",
  lead: "On 11-428704, the iceplant cuttings bid item was wrong in the original bid book. Adding up the callouts shows it.",
  body: `<p>Group H callouts on the seven planting sheets:</p>
<p>4,600 + 15,750 + 12,900 + 185 + 1,790 + 2,430 + 2,730 + 6,180 + 1,960 + 13,450 = <strong>61,975</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>Source</th><th class="num">Group H cuttings</th></tr></thead>
<tbody>
<tr><td>Area × spacing check: 52,000 SF at 1 ft, triangular</td><td class="num">about 60,060</td></tr>
<tr><td>Original bid item 25</td><td class="num">60,015</td></tr>
<tr><td>Sum of plan callouts</td><td class="num">61,975</td></tr>
<tr><td>Bid item 25 after Addendum 1 (and revised PQ-1)</td><td class="num">61,975</td></tr>
</tbody></table></div>`,
  ex: `<p>A bidder who added up the callouts during bidding would have found a 1,960-cutting gap before Caltrans fixed it. That's the purpose of your own takeoff: you find the problems, and you ask about them in time.</p>`,
  watch: `<p>Group H was an (F) final pay item: paid at the bid quantity. With 61,975 cuttings, a 1,960 difference at the winner's $0.80 each is about $1,570. Not large here, but the same mistake on a bigger item or a higher price costs real money. Module 15 walks through the whole job.</p>`,
  src: "11-428704 plans PP-1 to PP-7, PL-1, PQ-1; Addendum 1; Bid Summary item 25."
},

{ h: "Real cross-check: comparing two freeway jobs",
  lead: "Ratios from past jobs won't give you a quantity, but they catch big mistakes. Compare your job to similar real jobs and ask why if you're far off.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Bid item quantity</th><th class="num">11-431064 (SR-905)</th><th class="num">11-430674 (SR-5/75/805/905)</th></tr></thead>
<tbody>
<tr><td>Container plants (Groups A, B, K, U, Z)</td><td class="num">9,840</td><td class="num">37,350</td></tr>
<tr><td>Group H cuttings</td><td class="num">none</td><td class="num">741,405</td></tr>
<tr><td>Packet fertilizer</td><td class="num">14,700</td><td class="num">48,000</td></tr>
<tr><td>Packets per container plant</td><td class="num">1.49</td><td class="num">1.29</td></tr>
<tr><td>Hydroseed</td><td class="num">797,000 SQFT</td><td class="num">315,000 SQFT</td></tr>
<tr><td>Compost</td><td class="num">1,180 CY</td><td class="num">470 CY</td></tr>
<tr><td>Compost per acre of hydroseed</td><td class="num">about 64.5</td><td class="num">about 65</td></tr>
<tr><td>Gravel mulch</td><td class="num">221,600 SQFT (3 types)</td><td class="num">204,000 SQFT</td></tr>
<tr><td>Decomposed granite</td><td class="num">none</td><td class="num">55,900 SQFT</td></tr>
<tr><td>Wood mulch</td><td class="num">3,290 CY</td><td class="num">8,040 CY</td></tr>
<tr><td>Edging</td><td class="num">6,200 LF</td><td class="num">3,660 LF</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Packets per plant</b>11-431064: 14,700 ÷ 9,840 = 1.49. 11-430674: 48,000 ÷ 37,350 = 1.29. A takeoff showing 4 packets per plant on a similar mix would be worth a recheck.</div></li>
<li class="hl"><div><b>Compost per acre of hydroseed</b>11-430674: 470 ÷ (315,000 ÷ 43,560) = 65. 11-431064: 1,180 ÷ 18.29 = 64.5. Both near the same ratio, which makes 11-431064's printed 70 CY per acre the odd one out.</div></li>
<li><div><b>Use ratios as alarms, not answers</b>Every job's design is different. A ratio far off only tells you where to look.</div></li>
</ol>`,
  src: "Caltrans Bid Item Lists: 11-431064 items 25–30, 32–36, 63, 64; 11-430674 items 32–39, 44–47, 99, 100."
},

{ h: "Common planting takeoff mistakes",
  lead: "The same handful of mistakes cause most planting losses. Check for each one before your takeoff goes to pricing. Dollar examples are made up.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>What it can cost (example)</th><th>How to avoid it</th></tr></thead>
<tbody>
<tr><td>Square spacing used where triangular is meant</td><td>15% of the groundcover missing</td><td>Read the detail; state your assumption</td></tr>
<tr><td>Sizes combined (24" and 36" box on one line)</td><td>36" trees priced at 24" prices</td><td>One line per plant per size</td></tr>
<tr><td>Per-plant rates skipped</td><td>Basin mulch, packets, stakes unpriced (344 CY of mulch on 11-431064)</td><td>Turn every legend rate column into a line</td></tr>
<tr><td>Per-area rates skipped</td><td>Iceplant fertilizer by the 1,000 SF missed</td><td>Read “per SQFT” rates in the legend notes</td></tr>
<tr><td>Wrong depth or no depth for mulch</td><td>A 2" vs. 3" mix-up is a third of the mulch</td><td>Depth from the legend or detail, written on the line</td></tr>
<tr><td>Plan area used where slope area is paid</td><td>12% short on every 2:1 slope</td><td>Check how each item is measured</td></tr>
<tr><td>Acres and SF mixed up</td><td>Seed off by a factor of 43,560</td><td>Write the unit on every number</td></tr>
<tr><td>PLS rate priced as bulk seed</td><td>Seed under-ordered</td><td>Send PLS rates to the seed supplier</td></tr>
<tr><td>Double counting at match lines</td><td>Plants and callouts counted on two sheets</td><td>Count to the match line only</td></tr>
<tr><td>No-plant setbacks ignored</td><td>Plants counted in strips the legend keeps clear</td><td>Apply the minimum distances</td></tr>
<tr><td>Establishment priced as a guess</td><td>A three-year job priced like 90 days</td><td>Duration, visits, hours, replacements</td></tr>
<tr><td>Planting and irrigation counts not compared</td><td>Trees with no bubblers, or bubblers with no trees</td><td>Cross-check tree counts both ways</td></tr>
</tbody></table></div>`
},

{ h: "Scenarios: what would you do?",
  lead: "Short situations from real bid weeks. Decide first, then read the answer.",
  body: `<ol class="steps">
<li><div><b>The spec says “amend per soils report,” and the report isn't in the bid set</b><em>Right move:</em> RFI for the report; if no answer by bid day, state your assumed rate (for example “4 CY compost per 1,000 SF”) in the proposal. <em>Why:</em> your number has to rest on something written.</div></li>
<li><div><b>The plant legend shows groundcover at 18" o.c. (on center) but doesn't say square or triangular</b><em>Right move:</em> check the planting detail; if silent, ask, and state the pattern you priced. <em>Why:</em> 15% of the plants depends on it.</div></li>
<li class="hl"><div><b>Your wood mulch total is 3,320 CY; the bid form says 3,290</b>It's a measured item. <em>Right move:</em> recheck your numbers, send a short inquiry, and plan to buy for your own takeoff. <em>Why:</em> a bid quantity lower than the plans isn't rounding.</div></li>
<li><div><b>A GC's invitation lists “DG paths and seat walls” in your package</b><em>Right move:</em> take off the DG; check the wall height and footing against your license and the C-27 definition before including the walls. <em>Why:</em> some walls need another license or an engineer (see <a href="#m18-1">Module 18</a>).</div></li>
<li><div><b>The plant establishment period is 750 working days</b><em>Right move:</em> convert to about 3 years, build a visit and hour plan, and flag it for wage escalation. <em>Why:</em> establishment is where bids on the same job differ by tens of thousands of dollars.</div></li>
</ol>`
},

{ t: "scorer", id: "m7qa", h: "Planting takeoff QA checklist",
  lead: "Score your planting takeoff before it goes to pricing. 2 = done and checked, 1 = partly, 0 = not done. Your choices are saved in this browser.",
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
  lead: "Planting, soil and hardscape takeoff words and abbreviations.",
  terms: [
    ["Callout", "A label on the plan giving a quantity and plant code, like “50 AEO HAW.”"],
    ["On center (o.c.)", "The distance from the center of one plant to the center of the next."],
    ["Square spacing", "Plants in a grid. Plants per SF = 1 ÷ s²."],
    ["Triangular spacing", "Rows offset by half a space. Plants per SF = 1.155 ÷ s²."],
    ["Plant group", "Caltrans letter for a container size, like A (1-gallon) or K (24\" box)."],
    ["Container size", "#1, #5, #15, 24\" box and so on. Each size is its own line."],
    ["Cutting", "A piece of a plant, like iceplant, planted to root (Caltrans Group H)."],
    ["BTH (brown trunk height)", "The height of bare palm trunk below the leaves; how palms are sized."],
    ["B&amp;B (ball and burlap)", "A plant dug with its soil ball wrapped in burlap instead of a container."],
    ["Packet fertilizer", "A slow-release fertilizer packet placed in the planting hole, counted per plant."],
    ["Basin", "The ring of soil around a plant that holds water; often mulched."],
    ["Root barrier", "A panel along paving or around a root ball that guides roots down."],
    ["Guying", "Holding a large tree with cables and ground anchors instead of stakes."],
    ["ETW / EP", "Edge of traveled way / edge of pavement: Caltrans reference lines for planting setbacks."],
    ["Soil amendment", "Material like compost mixed into soil to improve it, at a rate per area."],
    ["Agronomic soils report", "A lab report on soil samples that sets amendment and fertilizer rates."],
    ["ECe / SAR", "Soil salinity / sodium adsorption ratio: soils report values that drive amendments like gypsum."],
    ["Fine grading", "Final shaping of the soil surface before planting."],
    ["Relative compaction", "How dense soil is compared to its maximum; specs call for a percent, like 90%."],
    ["Weed germination", "Watering to sprout weeds, then killing them, before planting."],
    ["Pre-emergent", "A weed killer that stops seeds from sprouting."],
    ["Mulch", "A layer of wood chips, bark or rock over the soil."],
    ["324", "The number to divide SF × inches by to get cubic yards."],
    ["SQYD / acre", "Square yard (9 SF) / acre (43,560 SF)."],
    ["Slope factor", "Number that turns plan area into true surface area on a slope; 1.118 for 2:1."],
    ["DG (decomposed granite)", "Crushed granite used for paths and paving, compacted in place."],
    ["Gravel mulch / rock mulch / rock blanket", "Caltrans rock surface items, each its own bid item and type."],
    ["HDPE", "High-density polyethylene, a tough plastic used for edging and pipe."],
    ["Filter fabric", "A cloth laid under rock to keep soil and rock from mixing."],
    ["Hydroseed", "Seed, fiber mulch, tackifier and fertilizer sprayed on as a slurry."],
    ["Tackifier", "A glue in hydroseed that holds the mix on the soil."],
    ["PLS (pure live seed)", "The part of a seed lot that is the right seed and will sprout: purity × germination."],
    ["Bonded fiber matrix", "A sprayed erosion control cover that bonds to the soil."],
    ["Fiber roll", "A rolled tube of fiber staked along a slope to slow runoff."],
    ["Bioretention basin", "A planted low area that holds storm water and lets it soak in."],
    ["Plant establishment", "The period after planting when the contractor waters and cares for the plants."],
    ["Working day", "A day the contract counts for time; usually weekdays that aren't holidays."],
    ["C-27", "California landscaping contractor license; its scope is set in 16 CCR §832.27."]
  ]
},

{ t: "quiz", id: "m7", h: "Check yourself",
  lead: "Tap an answer to check it. Keep a calculator handy.",
  qs: [
    { q: "How many plants are needed for 1,800 SF at 18\" on center, triangular?", a: ["About 800", "About 924", "About 1,200"], c: 1, why: "1,800 × 1.155 ÷ 2.25 = 924." },
    { q: "How many cubic yards of mulch for 5,400 SF at 3 inches deep?", a: ["About 17 CY", "About 50 CY", "About 150 CY"], c: 1, why: "5,400 × 3 ÷ 324 = 50 CY." },
    { q: "Why do you divide by 324 to get cubic yards from SF and inches?", a: ["It's a supplier rule", "27 CF per CY × 12 inches per foot = 324", "It includes waste"], c: 1, why: "SF × (inches ÷ 12) ÷ 27 is the same as SF × inches ÷ 324." },
    { q: "Compost is specified at 200 CY per acre. About how much is that per 1,000 SF?", a: ["2 CY", "4.6 CY", "20 CY"], c: 1, why: "200 ÷ 43.56 = 4.59 CY per 1,000 SF." },
    { q: "On 11-428704, PQ-1 shows 185 CY of wood mulch and the bid item is 190 CY. What is the likely reason?", a: ["Rounding up of the plan total", "A missing planting sheet", "Waste added by Caltrans"], c: 0, why: "Many items on this job are the plan total rounded up (1,458 → 1,460, 282 → 290)." },
    { q: "A 24\" box tree and a 36\" box tree of the same species should be:", a: ["One line, since it's the same plant", "Two separate lines", "Counted as plant groups only"], c: 1, why: "Different sizes have different prices, labor and equipment." },
    { q: "The Group H callouts on 11-428704 added up to 61,975, but the original bid item said 60,015. What happened?", a: ["Nothing, Caltrans pays the actual count", "Addendum 1 changed the bid item to 61,975", "The bidders had to use 60,015"], c: 1, why: "The addendum replaced PQ-1 and the bid item to match the callouts." },
    { q: "The spec says “amend per the soils report,” and there's no report in the bid set. What should you do?", a: ["Guess a rate and say nothing", "Ask for the report in an RFI, or state your assumed rate in the proposal", "Leave amendments out"], c: 1, why: "You can't take off a rate you don't have. Ask, or make your assumption visible." },
    { q: "On 11-431064, Group B plants get 2 packets and 0.04 CY of basin mulch each. How much basin mulch for 2,119 Group B plants?", a: ["42.4 CY", "84.8 CY", "169.5 CY"], c: 1, why: "2,119 × 0.04 = 84.76 CY." },
    { q: "10,000 SF is measured on the plan, all on a 2:1 slope, and the item is paid on surface area. About how much is that?", a: ["10,000 SF", "11,180 SF", "20,000 SF"], c: 1, why: "The slope factor for 2:1 is 1.118, so 10,000 × 1.118 = 11,180 SF." },
    { q: "A seed rate is 3.0 LB PLS per acre. The seed tag shows 95% purity and 60% germination. About how many bulk pounds per acre?", a: ["1.7 LB", "3.0 LB", "5.3 LB"], c: 2, why: "3.0 ÷ (0.95 × 0.60) = 5.26 LB bulk per acre." },
    { q: "On 11-431064, the plan sheets total 3,320 CY of wood mulch but the bid item is 3,290 CY. What's the right first move?", a: ["Call it rounding and move on", "Recheck your own numbers, send a short inquiry, and plan to buy for your own takeoff", "Bid only 3,290 CY of material"], c: 1, why: "A bid quantity lower than the plans isn't rounding up. It's measured, so you're paid for what you place, but you should ask." },
    { q: "A 36-inch root barrier ring needs how much barrier per tree, before overlap?", a: ["About 3 LF", "About 9.4 LF", "About 12 LF"], c: 1, why: "Circumference = 3.1416 × diameter = 3.1416 × 3 ft = 9.42 LF." },
    { q: "About how long is 750 working days of plant establishment?", a: ["About 2 years", "About 3 years", "About 5 years"], c: 1, why: "At roughly 250 working days a year, 750 ÷ 250 = about 3 years. Check the contract calendar." },
    { q: "Hydroseed covers 796,550 SF and the spec rate is 28.1 LB PLS per acre. About how much seed is that?", a: ["About 51 LB PLS", "About 514 LB PLS", "About 22,400 LB PLS"], c: 1, why: "796,550 ÷ 43,560 = 18.29 acres × 28.1 = 513.8 LB PLS." }
  ]
},

{ t: "practice", id: "m7", h: "Practice assignments",
  lead: "Real planting takeoffs on two Caltrans jobs, math drills, and a template you'll reuse.",
  items: [
    { h: "Read the plant legend", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a> and the plans. On sheet PL-1 (PDF page 47), list each plant with its group, spacing, per-plant rates (packet fertilizer, iron sulfate, basin mulch) and remarks. Read the Application and Sequence of Work table.</p>" },
    { h: "Take off sheet PP-7", hrs: 1.25, d: "<p>On sheet PP-7 (PDF page 54), add up every callout: plants by code, weed germination SQYD, wood mulch CY, compost CY and temporary protection fence LF. Convert plant codes to Groups A and B with the legend. Then compare to the PP-7 row of PQ-1 (Addendum 1 version): 500 SQYD weed germination, 100 CY wood mulch, 13 CY compost, 600 LF fence. Explain any difference.</p>" },
    { h: "Check PQ-1 against the bid items", hrs: 0.5, d: "<p>For every item on PQ-1, find the matching bid item and write both numbers side by side. Mark each difference as rounding, error or question. Write one bidder inquiry for the item you'd most want answered.</p>" },
    { h: "Mulch and compost drills", hrs: 0.75, d: "<p>Work these, showing the math: (1) 6,500 SF at 3\". (2) 2,000 SF at 2\". (3) How many SF does 82 CY cover at 3\"? (4) Compost at 200 CY/acre on 310 SQYD. (5) Compost depth in inches at 200 CY/acre. (6) Cobble at 4\" on 2,750 SF. Answers: 60.2 CY; 12.3 CY; 8,856 SF; 12.8 CY; about 1.5\"; 34.0 CY.</p>" },
    { h: "Spacing drills", hrs: 0.5, d: "<p>Work square and triangular counts for: 3,600 SF at 24\"; 10,000 SF at 12\"; 850 SF at 18\"; 52,000 SF at 1 ft. Then redo the first one with an 18\" setback along 200 LF of curb. Answers: 900 / 1,040; 10,000 / 11,550; 378 / 436; 52,000 / 60,060; setback net 3,300 SF → 825 / 953.</p>" },
    { h: "Take off a local planting plan", hrs: 1, d: "<p>Use a planting sheet from a current San Diego public bid (for example the City of San Diego's <a href=\"https://www.sandiego.gov/cip/bidopps\" target=\"_blank\" rel=\"noopener\">bid opportunities</a>) or a GC invitation. Take off plants by size, soil prep SF, amendments, mulch CY and any DG or rock. Use the rates from that job's specs, not from this module.</p>" },
    { h: "Build your planting takeoff tab", hrs: 0.5, d: "<p>Add a planting tab to the spreadsheet you built in Module 6: plants by size, per-plant rate columns, tree extras, area items with formulas for SF × inches ÷ 324, area × spacing, slope factor and PLS. Enter this module's worked examples and check that your totals match.</p>" },
    { h: "Re-add the 11-431064 planting sheets", hrs: 1, d: "<p>Open <a href=\"#lab-11-431064\">Real Bid Lab · 11-431064</a> and download the plans. On PL-1 (PDF page 56) read the per-plant rates. On PQ-1 (page 79) re-multiply every row's packets and basin mulch and find the row with the slip. On PQ-2 (page 80) re-add every column and compare each total to its bid item. List every item where the bid quantity is not the plan total rounded up, and write a bidder inquiry for the one that matters most.</p>" },
    { h: "Hydroseed, PLS and slope drills", hrs: 0.5, d: "<p>Using sheet PL-2 of 11-431064: (1) Convert 182,250 SF (PP-10) to acres and figure compost at 70 CY/acre, then compare to the 270 CY on PQ-2. (2) Bulk pounds of purple needlegrass (6.0 LB PLS/acre, 60% germination) for 18.29 acres at an example 90% purity. (3) Plan area 4,000 SF on a 1.5:1 slope: surface area. Answers: (1) 4.18 acres, 292.9 CY vs. 270; (2) 109.7 LB PLS, 203.2 LB bulk; (3) 4,808 SF.</p>" },
    { h: "Read a soils report", hrs: 0.5, d: "<p>Find a sample agronomic soils report (ask a local soil lab for a sample, or use one from a past job or a public bid's appendix). Mark the recommendations page. Take off the amendments for a made-up 15,000 SF shrub area and 3,000 SF turf area using its rates, and write down any rate you'd need to ask about.</p>" }
  ]
},

{ h: "Module 7 summary",
  lead: "You can now take off a planting plan and turn areas into the materials you'll buy.",
  body: `<ul>
<li>Follow the same routine on every job: documents, legend into lines, notes and details, plants by sheet, areas by type, rates, hardscape, establishment, checks.</li>
<li>Count plants by symbol or callout, one line per species per size. Caltrans pays by plant group letter. Turn every legend rate column into a quantity, and re-multiply it yourself.</li>
<li>Groundcover: square = 1 ÷ s² per SF, triangular = 1.155 ÷ s² per SF. Break odd beds into shapes; take out setbacks.</li>
<li>Trees carry stakes, ties, guys, root barrier, pits, basins and per-tree rates. Palms are counted by trunk height.</li>
<li>Soil prep and amendments: area ÷ 1,000 × rate, from the spec or the soils report's recommendations page.</li>
<li>Mulch, DG and rock: CY = SF × inches ÷ 324. Get tons from the supplier. Use the slope factor where items are paid on surface area.</li>
<li>Seed: acres × rate; buy bulk = PLS ÷ (purity × germination). Hydroseed parts each have a rate per acre.</li>
<li>Weed germination, establishment and maintenance are priced from area and time: cycles, days, visits and hours.</li>
<li>Check against the engineer's sheets. Most small differences are rounding; a bid quantity below the plans, or a rate that doesn't reconcile, gets asked about before bid day.</li>
</ul>
<p><strong>Next: Module 8 · Pricing Materials and Working with Suppliers</strong></p>`
}
]
});
