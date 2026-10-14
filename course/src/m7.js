(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 7, hours: 7, title: "Planting, Soil and Hardscape Takeoff",
slides: [

{ t: "cover",
  h: "Planting, Soil and Hardscape Takeoff",
  lead: "Planting takeoffs mix counting and math: count the plants, then turn square feet into plant counts, cubic yards of mulch and compost, and pounds of fertilizer and seed. This module shows every conversion with the math written out.",
  objectives: [
    "Count plants by symbol and by callout, by container size and Caltrans plant group",
    "Figure groundcover counts from area and spacing, square and triangular",
    "Take off trees with staking, root barrier and basin materials",
    "Turn areas into cubic yards of mulch, compost, DG and rock",
    "Take off soil prep, weed control, turf, seed, hydroseed and erosion control",
    "Take off the hardscape that belongs in a landscape scope, within C-27 limits",
    "Check your takeoff against a real Caltrans planting quantity sheet (11-428704 PQ-1)"
  ],
  time: [["Reading and slides", "2 h"], ["Practice assignments", "5 h"], ["Module total", "7 h"]],
  body: `<p>Same rules as Module 6: count and measure first, price later. Have a calculator next to you. Every formula here is one you'll use on every bid.</p>`
},

{ h: "What a planting takeoff includes",
  lead: "A planting plan carries more quantities than plants. List every one of them before you start counting.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Group</th><th>Items</th><th>Units</th></tr></thead>
<tbody>
<tr><td>Plants</td><td>Trees, shrubs, groundcover, vines, cuttings, plugs</td><td>EA, by size</td></tr>
<tr><td>Tree extras</td><td>Stakes, ties, guying, root barrier, tree basins, fertilizer tablets</td><td>EA, LF</td></tr>
<tr><td>Soil prep</td><td>Fine grading, ripping or tilling, amendments, fertilizer, soil tests</td><td>SF, CY, LB</td></tr>
<tr><td>Weed control</td><td>Weed abatement, grow-and-kill (weed germination) cycles</td><td>SF or SQYD</td></tr>
<tr><td>Top dressing</td><td>Bark or wood mulch, compost, DG, rock and gravel mulch, cobble</td><td>CY or SF</td></tr>
<tr><td>Turf and seed</td><td>Sod, seed, hydroseed, erosion control blankets, fiber rolls</td><td>SF, LB, LF</td></tr>
<tr><td>Hardscape in the landscape scope</td><td>Edging, DG paving, boulders, low walls, pavers</td><td>LF, SF, EA</td></tr>
<tr><td>Care after planting</td><td>Plant establishment and maintenance</td><td>Days, months, visits, LS</td></tr>
</tbody></table></div>`,
  ex: `<p>Real example: on Caltrans job 11-430674 (SR-5/75/805/905), the planting items included Groups H, K, Z, A, B and U plants, rock mulch in three types (SQFT), gravel mulch (204,000 SQFT), decomposed granite (55,900 SQFT), wood mulch (8,040 CY), edging (3,660 LF), hydroseed (315,000 SQFT) and compost (470 CY).</p>`,
  src: "Caltrans contract 11-430674 Bid Item List, items 30–47, 99–100."
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
<li><div><b>Check the match lines</b>Plants right at a match line can be counted on both sheets, or on neither.</div></li>
</ol>`,
  ex: `<p>Real example: planting sheet PP-7 of 11-428704 uses callouts like “50 AEO HAW, 50 ALO BLU, 50 ALO STR, 50 BAC PIL, 50 SED NUS” with a leader line to one planting area. The codes are the underlined parts of the botanical names in the legend on PL-1 (AEOnium HAWorthii, ALOe 'BLUe Elf').</p>`,
  watch: `<p>Some symbols mean “groups of 3 or 5 randomly placed.” Note the legend remarks. On 11-428704, PL-1 note 11 says shrubs are “randomly planted as singles and groups of three or five throughout designated area.” You count the callout number, not the symbols.</p>`,
  src: "11-428704 plans PL-1 and PP-7."
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

{ h: "Soil prep and amendments",
  lead: "Soil prep is taken off by area, then turned into material quantities using rates from the specs or the soils report.",
  body: `<ol class="steps">
<li><div><b>Measure the planting area in SF</b>All planted beds and turf areas. Leave out paving, DG and rock areas unless the spec says to prep them.</div></li>
<li><div><b>Find the rates</b>The spec (32 91 13 on private jobs) or the agronomic soils report gives amendments per 1,000 SF, tilling depth and fertilizer rates. Some say “per the soils report,” which means you need the report.</div></li>
<li class="hl"><div><b>Material = area ÷ 1,000 × rate</b>Example: 21,400 SF at 4 CY per 1,000 SF = 21.4 × 4 = 85.6 CY.</div></li>
<li><div><b>Add plant pit backfill</b>If the detail calls for amended backfill per plant, take it off per plant size.</div></li>
<li><div><b>Fine grading</b>SF of finish grading in planting areas. Note if rough grading is by the GC or by you.</div></li>
<li><div><b>Soil tests</b>Count the samples the spec asks for, before and after amending.</div></li>
</ol>`,
  watch: `<p>If the spec says “amend per soils report” and no report is in the bid set, you can't take off the amendments. Ask for the report in an RFI, or state the rate you assumed in your proposal.</p>`,
  deeper: `<p>Unit conversions to keep handy: 1 CY = 27 CF. 1 acre = 43,560 SF. 1 SQYD = 9 SF. Caltrans often measures weed germination in SQYD and compost in CY; private specs usually use SF and CY.</p>`
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

{ h: "Weed control and weed germination",
  lead: "Weed work is taken off by area, then multiplied by the number of treatments or cycles the spec calls for.",
  body: `<ul>
<li><strong>Weed abatement:</strong> clearing and killing existing weeds before work. SF (or SQYD) of area.</li>
<li><strong>Weed germination (grow-and-kill):</strong> water the soil to sprout weeds, then kill them, before planting. Take off the area, count the cycles the spec requires, and note the waiting time.</li>
<li><strong>Pre-emergent herbicide:</strong> SF of area times the number of applications, if specified.</li>
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
<tr><td>Hydroseed</td><td>SF of area</td><td>Seed, fiber, tackifier and fertilizer by rate per acre from the spec</td></tr>
<tr><td>Bonded fiber matrix</td><td>SF of slope</td><td>By rate per acre from the spec</td></tr>
<tr><td>Erosion control blanket or jute</td><td>SF of slope</td><td>Add overlaps and anchor trench per detail; count staples</td></tr>
<tr><td>Fiber rolls</td><td>LF along the contour lines shown</td><td>Count stakes per roll per detail</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Seed math (made-up example):</strong> 12,000 SF of native seed at 4 LB per 1,000 SF = 12 × 4 = <strong>48 LB</strong>. If the spec gives 40 LB per acre: 12,000 ÷ 43,560 = 0.275 acre × 40 = 11 LB.</p>
<p><strong>Real units:</strong> on 11-422004, hydroseed was 154,000 SQFT, bonded fiber matrix 47,600 SQFT, fiber rolls 4,550 LF, and “move-in/move-out (erosion control)” 3 EA. Each mobilization of the hydroseed truck was its own item.</p>`,
  watch: `<p>Hydroseed rates are often per acre while areas are in SF. Convert carefully: divide SF by 43,560 to get acres. A slip here is a factor of 43 or more.</p>`,
  src: "Caltrans 11-422004 Bid Item List, items 39–43."
},

{ h: "Hardscape inside the landscape scope",
  lead: "Some hardscape is usually part of the landscape package. Take it off with the same methods, and check that the work fits your license.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Takeoff</th><th>Unit</th></tr></thead>
<tbody>
<tr><td>Edging (steel, aluminum, concrete mow curb)</td><td>Length along the bed edges shown</td><td>LF</td></tr>
<tr><td>DG paving</td><td>Area; CY from depth; stabilizer; base if detailed</td><td>SF, CY</td></tr>
<tr><td>Pavers</td><td>Area by type and pattern; base and sand from detail; edge restraint LF</td><td>SF, LF</td></tr>
<tr><td>Low landscape and seat walls</td><td>Length and height; footing per detail</td><td>LF or SF of face</td></tr>
<tr><td>Boulders, cobble, stepping stones</td><td>Count by size, or area for cobble</td><td>EA, SF</td></tr>
</tbody></table></div>`,
  watch: `<p>CSLB defines the C-27 as work on “landscape systems and facilities” that improve the grounds, including preparing and grading land “for the installation of any architectural, horticultural and decorative treatment or arrangement.” Larger walls, structural concrete, retaining walls and site lighting may need other classifications or an engineered design. Read the scope against the definition (Module 2) and, if unsure, ask CSLB before you bid it.</p>`,
  deeper: `<p>The full definition is in California Code of Regulations, Title 16, §832.27. On a private job, hardscape is often split between the landscape sub and the concrete or masonry sub. Read the GC's bid scope carefully and say in your proposal exactly which hardscape items you include (Module 13).</p>`,
  src: "CSLB C-27 Landscaping classification (16 CCR §832.27): cslb.ca.gov."
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

{ t: "terms", h: "Words to know",
  lead: "Planting and soil takeoff words.",
  terms: [
    ["Callout", "A label on the plan giving a quantity and plant code, like “50 AEO HAW.”"],
    ["On center (o.c.)", "The distance from the center of one plant to the center of the next."],
    ["Square spacing", "Plants in a grid. Plants per SF = 1 ÷ s²."],
    ["Triangular spacing", "Rows offset by half a space. Plants per SF = 1.155 ÷ s²."],
    ["Plant group", "Caltrans letter for a container size, like A (1-gallon) or K (24\" box)."],
    ["Container size", "#1, #5, #15, 24\" box and so on. Each size is its own line."],
    ["Cutting", "A piece of a plant, like iceplant, planted to root (Caltrans Group H)."],
    ["Root barrier", "A panel along paving or around a root ball that guides roots down."],
    ["Soil amendment", "Material like compost mixed into soil to improve it, at a rate per area."],
    ["Agronomic soils report", "A lab report on soil samples that sets amendment and fertilizer rates."],
    ["Fine grading", "Final shaping of the soil surface before planting."],
    ["Weed germination", "Watering to sprout weeds, then killing them, before planting."],
    ["Mulch", "A layer of wood chips, bark or rock over the soil."],
    ["324", "The number to divide SF × inches by to get cubic yards."],
    ["DG (decomposed granite)", "Crushed granite used for paths and paving, compacted in place."],
    ["Hydroseed", "Seed, fiber mulch, tackifier and fertilizer sprayed on as a slurry."],
    ["Bonded fiber matrix", "A sprayed erosion control cover that bonds to the soil."],
    ["Fiber roll", "A rolled tube of fiber staked along a slope to slow runoff."],
    ["Plant establishment", "The period after planting when the contractor waters and cares for the plants."],
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
    { q: "The spec says “amend per the soils report,” and there's no report in the bid set. What should you do?", a: ["Guess a rate and say nothing", "Ask for the report in an RFI, or state your assumed rate in the proposal", "Leave amendments out"], c: 1, why: "You can't take off a rate you don't have. Ask, or make your assumption visible." }
  ]
},

{ t: "practice", id: "m7", h: "Practice assignments",
  lead: "A real planting takeoff on a Caltrans sheet, math drills, and a template you'll reuse.",
  items: [
    { h: "Read the plant legend", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a> and the plans. On sheet PL-1 (PDF page 47), list each plant with its group, spacing, per-plant rates (packet fertilizer, iron sulfate, basin mulch) and remarks. Read the Application and Sequence of Work table.</p>" },
    { h: "Take off sheet PP-7", hrs: 1.25, d: "<p>On sheet PP-7 (PDF page 54), add up every callout: plants by code, weed germination SQYD, wood mulch CY, compost CY and temporary protection fence LF. Convert plant codes to Groups A and B with the legend. Then compare to the PP-7 row of PQ-1 (Addendum 1 version): 500 SQYD weed germination, 100 CY wood mulch, 13 CY compost, 600 LF fence. Explain any difference.</p>" },
    { h: "Check PQ-1 against the bid items", hrs: 0.5, d: "<p>For every item on PQ-1, find the matching bid item and write both numbers side by side. Mark each difference as rounding, error or question. Write one bidder inquiry for the item you'd most want answered.</p>" },
    { h: "Mulch and compost drills", hrs: 0.75, d: "<p>Work these, showing the math: (1) 6,500 SF at 3\". (2) 2,000 SF at 2\". (3) How many SF does 82 CY cover at 3\"? (4) Compost at 200 CY/acre on 310 SQYD. (5) Compost depth in inches at 200 CY/acre. (6) Cobble at 4\" on 2,750 SF. Answers: 60.2 CY; 12.3 CY; 8,856 SF; 12.8 CY; about 1.5\"; 34.0 CY.</p>" },
    { h: "Spacing drills", hrs: 0.5, d: "<p>Work square and triangular counts for: 3,600 SF at 24\"; 10,000 SF at 12\"; 850 SF at 18\"; 52,000 SF at 1 ft. Then redo the first one with an 18\" setback along 200 LF of curb. Answers: 900 / 1,040; 10,000 / 11,550; 378 / 436; 52,000 / 60,060; setback net 3,300 SF → 825 / 953.</p>" },
    { h: "Take off a local planting plan", hrs: 1, d: "<p>Use a planting sheet from a current San Diego public bid (for example the City of San Diego's <a href=\"https://www.sandiego.gov/cip/bidopps\" target=\"_blank\" rel=\"noopener\">bid opportunities</a>) or a GC invitation. Take off plants by size, soil prep SF, amendments, mulch CY and any DG or rock. Use the rates from that job's specs, not from this module.</p>" },
    { h: "Build your planting takeoff tab", hrs: 0.5, d: "<p>Add a planting tab to the spreadsheet you built in Module 6: plants by size, tree extras, area items with formulas for SF × inches ÷ 324 and area × spacing. Enter this module's worked example and check that your totals match.</p>" }
  ]
},

{ h: "Module 7 summary",
  lead: "You can now take off a planting plan and turn areas into the materials you'll buy.",
  body: `<ul>
<li>Count plants by symbol or callout, one line per species per size. Caltrans pays by plant group letter.</li>
<li>Groundcover: square = 1 ÷ s² per SF, triangular = 1.155 ÷ s² per SF. Take out edge setbacks.</li>
<li>Trees carry stakes, root barrier, basins and per-tree rates. Read the detail.</li>
<li>Soil prep and amendments: area ÷ 1,000 × rate, from the spec or soils report. 200 CY per acre = 4.59 CY per 1,000 SF.</li>
<li>Mulch, DG and rock: CY = SF × inches ÷ 324. Get weight conversions from the supplier.</li>
<li>Weed germination, establishment and maintenance are priced from area and time: cycles, days and visits.</li>
<li>Check against the engineer's quantity sheet. Most small differences are rounding; real gaps get asked about before bid day.</li>
</ul>
<p><strong>Next: Module 8 · Pricing Materials and Working with Suppliers</strong></p>`
}
]
});
