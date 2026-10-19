(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 0, hours: 3, title: "Estimator's Toolkit: Units, Factors and Takeoff Setup",
slides: [

{ t: "cover",
  h: "Estimator's Toolkit: Units, Factors and Takeoff Setup",
  lead: "The conversions, field factors and sheet layout every landscape and irrigation takeoff runs on, checked against real Caltrans quantities.",
  objectives: [
    "Convert between the pay units on a bid form (LF, SF, SQYD, CY, ACRE, EA, LS) without unit errors",
    "Turn area and depth into CY, and spec rates (CY per acre) into quantities",
    "Apply slope factors and square vs. triangular spacing factors",
    "Read Caltrans plant groups, plan scale and stationing",
    "Use GPM, PSI and elevation to read why the irrigation design looks the way it does",
    "Set price from cost with markup or margin, and count working vs. calendar days",
    "Lay out a takeoff and pricing sheet that rolls up by bid item"
  ],
  time: [["Reading and slides", "1.25 h"], ["Practice assignments", "1.75 h"], ["Module total", "3 h"]],
  body: `<p>Real numbers come from Caltrans contract 11-428704 (I-805, Chula Vista; Caltrans is the California Department of Transportation), with the source named. Anything else is labeled made-up. Drill answers are under <strong>Go deeper</strong>.</p>`
},

{ h: "Pay units and area conversions",
  lead: "Price in the unit printed on this bid form; the same material is paid by SF on one job and CY on the next.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Unit</th><th>Means</th><th>Typical items</th><th>Real line (11-428704)</th></tr></thead>
<tbody>
<tr><td><strong>LF</strong></td><td>Linear foot</td><td>Pipe, wire, conduit, edging</td><td>Item 63, 4" Class 315 supply line, 7,493 LF</td></tr>
<tr><td><strong>SF</strong> (Caltrans: SQFT)</td><td>Square foot</td><td>Planting area, DG (decomposed granite), sod, rock</td><td>Private plans use SF most</td></tr>
<tr><td><strong>SQYD</strong></td><td>Square yard = 9 SF</td><td>Weed control, seeding, compost callouts</td><td>Item 21, weed germination, 7,020 SQYD</td></tr>
<tr><td><strong>ACRE</strong></td><td>43,560 SF</td><td>Application rates, hydroseed</td><td>Compost 200 CY per acre (sheet PL-1)</td></tr>
<tr><td><strong>CY</strong></td><td>Cubic yard = 27 CF (cubic feet)</td><td>Mulch, compost, soil, rock</td><td>Item 31, wood mulch, 190 CY</td></tr>
<tr><td><strong>EA</strong></td><td>Each</td><td>Plants, heads, valves, controllers</td><td>Item 27, Group A plants, 1,460 EA</td></tr>
<tr><td><strong>LS</strong></td><td>Lump sum</td><td>Work not measured</td><td>Plant establishment work</td></tr>
<tr><td><strong>LB</strong></td><td>Pound</td><td>Fertilizer, seed, amendments</td><td>Iron sulfate, 230 LB</td></tr>
</tbody></table></div>
<p><strong>Area chain:</strong> SF ÷ 9 = SQYD. SF ÷ 43,560 = acres. 1 acre = 4,840 SQYD.</p>
<p><strong>Real:</strong> item 21, 7,020 SQYD × 9 = 63,180 SF ÷ 43,560 = 1.45 acres.</p>`,
  watch: `<p>PDF measure tools report SF. Forget ÷ 9 on a SQYD item and your unit price is 9 times off.</p>`,
  deeper: `<p>In PVC (polyvinyl chloride) pipe names, the class number is the pressure rating in psi; Schedule 40 is a wall thickness. Pipe sizes are nominal names, not measured diameters. See <a href="#m6-1">Module 6</a>.</p>`,
  src: "11-428704 Bid Item List items 21, 27, 31, 63; plans PL-1."
},

{ h: "Volume: area × depth → CY, and rates per acre",
  lead: "CY = SF × depth in inches ÷ 324 (12 × 27); a per-acre rate becomes CY per 1,000 SF by dividing by 43.56.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Depth</th><th class="num">1"</th><th class="num">2"</th><th class="num">3"</th><th class="num">4"</th><th class="num">6"</th><th class="num">12"</th></tr></thead>
<tbody>
<tr><td>CY per 1,000 SF</td><td class="num">3.09</td><td class="num">6.17</td><td class="num">9.26</td><td class="num">12.35</td><td class="num">18.52</td><td class="num">37.04</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Real check: compost callout, sheet PP-7</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>Callout area: 310 SQYD × 9</td><td class="num">2,790 SF</td></tr>
<tr><td>2,790 ÷ 43,560</td><td class="num">0.064 acre</td></tr>
<tr><td>0.064 × 200 CY/acre (PL-1 rate)</td><td class="num">12.8 CY</td></tr>
<tr><td>Plan callout</td><td class="num">13 CY: matches</td></tr>
</tbody></table></div>
<p>200 CY per acre = 4.59 CY per 1,000 SF = about 1.5" deep (5,400 CF over 43,560 SF).</p>`,
  watch: `<p>The agency pays the bid quantity. Waste, settling and whole-load rounding go in what you buy and inside your unit price, never in the quantity you price. On 11-428704 the engineer rounded plan totals up for the bid list (compost 282 CY on the plans, 290 CY bid).</p>`,
  src: "11-428704 plans PL-1 (compost 200 CY/acre, 3\" wood mulch), PP-7 (13 CY), PQ-1; Bid Item List item 68."
},

{ h: "Slope factor and slope area",
  lead: "Plans are drawn flat; real surface = plan area × √(H² + 1) ÷ H for an H:1 slope.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Slope (H:V)</th><th class="num">Percent</th><th class="num">Degrees</th><th class="num">Surface factor</th></tr></thead>
<tbody>
<tr><td>4:1</td><td class="num">25%</td><td class="num">14.0°</td><td class="num">1.031</td></tr>
<tr><td>3:1</td><td class="num">33%</td><td class="num">18.4°</td><td class="num">1.054</td></tr>
<tr><td>2:1</td><td class="num">50%</td><td class="num">26.6°</td><td class="num">1.118</td></tr>
<tr><td>1.5:1</td><td class="num">67%</td><td class="num">33.7°</td><td class="num">1.202</td></tr>
<tr><td>1:1</td><td class="num">100%</td><td class="num">45.0°</td><td class="num">1.414</td></tr>
</tbody></table></div>
<ul>
<li>Grading plans write ratios horizontal : vertical. Confirm in the legend.</li>
<li>Made-up: 4,000 SF of 2:1 on plan × 1.118 = 4,472 SF real. 3" mulch: 41.4 CY, not 37.0 CY from plan area.</li>
<li>Check the measurement clause: most items pay on plan (horizontal) area, so the factor goes into your material and labor cost, not the quantity.</li>
</ul>`,
  watch: `<p>Slope costs more in labor than in material: no wheelbarrows on 2:1, roped crews on 1.5:1 and steeper, slower planting and mulching. Set slope production rates separately (<a href="#m9-1">Module 9</a>).</p>`
},

{ h: "Plant spacing factors and Caltrans plant groups",
  lead: "Plants = SF ÷ s² square or SF × 1.155 ÷ s² triangular (s in feet), and each Caltrans plant group is its own bid item.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Spacing o.c. (on center)</th><th class="num">Square, plants/SF</th><th class="num">Triangular, plants/SF</th><th class="num">Triangular row spacing</th></tr></thead>
<tbody>
<tr><td>12"</td><td class="num">1.000</td><td class="num">1.155</td><td class="num">10.4"</td></tr>
<tr><td>18"</td><td class="num">0.444</td><td class="num">0.513</td><td class="num">15.6"</td></tr>
<tr><td>24"</td><td class="num">0.250</td><td class="num">0.289</td><td class="num">20.8"</td></tr>
<tr><td>36"</td><td class="num">0.111</td><td class="num">0.128</td><td class="num">31.2"</td></tr>
<tr><td>48"</td><td class="num">0.0625</td><td class="num">0.072</td><td class="num">41.6"</td></tr>
</tbody></table></div>
<p>1.155 = 2 ÷ √3 (about 15% more than square); triangular rows sit 0.866 × s apart. Round counts up.</p>
<div class="tablewrap"><table>
<thead><tr><th>Trade name</th><th>Group</th><th>Caltrans description</th><th class="num">Container (cu in)</th><th>11-428704 item</th></tr></thead>
<tbody>
<tr><td>1-gallon (#1)</td><td>A</td><td>No. 1 container</td><td class="num">152–251</td><td>27: 1,460 EA</td></tr>
<tr><td>5-gallon (#5)</td><td>B</td><td>No. 5 container</td><td class="num">785–1,242</td><td>28: 110 EA</td></tr>
<tr><td>15-gallon (#15)</td><td>U</td><td>No. 15 container</td><td class="num">2,768–3,696</td><td>none</td></tr>
<tr><td>24" box</td><td>K</td><td>24-inch box</td><td class="num">5,775–6,861</td><td>26: 43 EA (pines)</td></tr>
<tr><td>Cutting</td><td>H</td><td>Cutting</td><td class="num">n/a</td><td>25: 61,975 EA iceplant (after Addendum 1)</td></tr>
<tr><td>Palm</td><td>Z</td><td>Palm tree</td><td class="num">n/a</td><td>none</td></tr>
</tbody></table></div>
<p>Other groups: C balled and burlapped, E bulb, F flats, I pot, M liner, O acorn, P plugs, S seedling (bare root). Private plans name the size directly: #1, #5, #15, 24" and 36" box, flats, plugs. Never combine sizes on one line.</p>`,
  watch: `<p>If neither legend nor planting detail says square or triangular, RFI (request for information) or state the assumption: it moves the count 15%. When symbol count and callout disagree, price the callout and RFI the difference. Edge setbacks and callout checks: <a href="#m7-1">Module 7</a>.</p>`,
  src: "11-428704 Special Provisions, replacement table for Standard Specifications 20-3.01B(2)(a); Bid Item List items 25–28; Addendum 1. Spacing formulas as derived in Module 7."
},

{ h: "Scale and stationing",
  lead: "Feet = paper inches × scale, but only after you verify the print size; station lengths need no measuring at all.",
  body: `<div class="twocol">
<div><h3>Scale</h3><ul>
<li>1" = 50' (many 11-428704 sheets): 3.2" measured = 160 ft.</li>
<li>Site and landscape plans use engineer scales (10, 20, 30, 40, 50, 60). Architect scales (1/4" = 1'-0") show up on details.</li>
<li>A 24 × 36 sheet printed on 11 × 17 is half size: 1" = 50' measures as 1" = 100'.</li>
<li>Calibrate every sheet off a written dimension, station pair or the scale bar before you measure.</li>
</ul></div>
<div><h3>Stationing</h3><ul>
<li>Sta 298+55 = 29,855 ft along that named line.</li>
<li>Length = higher station − lower station.</li>
<li>Real (11-428704, IP-1): 4" supply line Sta 235+50 to 249+70 = 24,970 − 23,550 = <strong>1,420 LF</strong>.</li>
<li>LT / RT are left and right looking up-station.</li>
</ul></div>
</div>`,
  watch: `<p>Stations compare only on the same line. Sta 261+00 on a ramp line is not Sta 261+00 on the freeway line. Line names and match lines: <a href="#m4-1">Module 4</a> and the <a href="#plans-1">Plan Set Deep Dive</a>.</p>`,
  deeper: `<p>Caltrans sheets carry a relative border scale bar so you can tell whether a print is full size. NTS (not to scale) details are never measured.</p>`,
  src: "11-428704 plans: title sheet (Sta 298+55, SD 805 line), IP-1 note, WPC and U sheets at 1\" = 50' with relative border scale."
},

{ h: "GPM, PSI and elevation",
  lead: "Every foot of rise costs 0.433 PSI (1 PSI lifts water 2.31 ft); add zone flow in GPM to see why the plans size valves, regulators or boosters the way they do.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Quantity</th><th>Rule of thumb</th></tr></thead>
<tbody>
<tr><td>GPM (gallons per minute)</td><td>Zone flow = sum of head or emitter flows. 10 rotors × 3 GPM = 30 GPM.</td></tr>
<tr><td>PSI (pounds per square inch)</td><td>Static pressure at the POC (point of connection), minus elevation, minus friction through meter, BFP (backflow preventer), pipe and valves.</td></tr>
<tr><td>Elevation</td><td>±0.433 PSI per ft. Zone 46 ft above the meter: about 20 PSI lost before friction.</td></tr>
<tr><td>Water</td><td>1 CF = 7.48 gal. 1 gal = 8.34 lb.</td></tr>
<tr><td>Pipe rating</td><td>Class 315 PVC is rated 315 PSI.</td></tr>
</tbody></table></div>`,
  ex: `<p>Made-up: 80 PSI static at the meter, zone 46 ft uphill: 80 − 46 × 0.433 = about 60 PSI static at the zone. Rotors needing 45 PSI at the head still have about 15 PSI for friction. A zone 100 ft uphill (43 PSI lost) would not, which is why steep sites show booster pumps.</p>`,
  deeper: `<p>The landscape architect designs the hydraulics; you price what is drawn. Use these numbers to catch scope the drawings imply but don't itemize (pressure regulators, booster pump power, larger mains) and raise them by RFI. Takeoff method: <a href="#m6-1">Module 6</a>.</p>`
},

{ h: "Extensions, markup and margin",
  lead: "Quantity × unit price = extension; markup is on cost, margin is on price, and price = cost ÷ (1 − margin).",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Description</th><th class="num">Qty</th><th>Unit</th><th class="num">Winning unit price</th><th class="num">Extension</th></tr></thead>
<tbody>
<tr><td>25</td><td>Plant (Group H), cuttings</td><td class="num">61,975</td><td>EA</td><td class="num">$0.80</td><td class="num">$49,580.00</td></tr>
<tr><td>27</td><td>Plant (Group A)</td><td class="num">1,460</td><td>EA</td><td class="num">$25.00</td><td class="num">$36,500.00</td></tr>
<tr><td>31</td><td>Wood mulch</td><td class="num">190</td><td>CY</td><td class="num">$50.00</td><td class="num">$9,500.00</td></tr>
<tr><td>63</td><td>4" plastic pipe (Class 315) (supply line)</td><td class="num">7,493</td><td>LF</td><td class="num">$12.00</td><td class="num">$89,916.00</td></tr>
<tr><td>68</td><td>Compost</td><td class="num">290</td><td>CY</td><td class="num">$80.00</td><td class="num">$23,200.00</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Markup on cost</th><th class="num">10%</th><th class="num">15%</th><th class="num">20%</th><th class="num">25%</th><th class="num">33.3%</th></tr></thead>
<tbody>
<tr><td>Equals margin on price</td><td class="num">9.1%</td><td class="num">13.0%</td><td class="num">16.7%</td><td class="num">20.0%</td><td class="num">25.0%</td></tr>
</tbody></table></div>
<p>Margin = markup ÷ (1 + markup). Markup = margin ÷ (1 − margin).</p>`,
  ex: `<p>Real: the top two bids on 11-428704 were $3,585.30 apart (0.30% over low). One bidder priced the 61,975 cuttings at $6.00 against $0.48 to $0.90 from the others, about $322,000 more on one line.</p>`,
  watch: `<p>On public unit-price bids the unit price usually governs if it disagrees with your extension, so a typo in a unit price changes your total. Write unit prices per one unit, to the decimals the bid form allows. Choosing markup: <a href="#m10-1">Module 10</a>.</p>`,
  src: "Caltrans Bid Summary 11-428704 (opened Sept 8, 2021): ACCU Construction $1,176,120.00, Diversified Landscape Co. $1,179,705.30; item 25 unit prices as analyzed in Module 15."
},

{ h: "Working days vs. calendar days",
  lead: "Contract time is usually working days as the contract defines them; bid deadlines are exact clock times on the agency's clock.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>Calendar days</th><th>Working days</th></tr></thead>
<tbody>
<tr><td>Counts</td><td>Every day</td><td>Weekdays minus holidays; on Caltrans also days weather or listed causes stop the controlling work</td></tr>
<tr><td>Rule of thumb</td><td>30 ≈ 1 month</td><td>About 5 per week; 20 ≈ 4 weeks before rain and holidays</td></tr>
<tr><td>Typical use</td><td>Notices, bid periods, some private contracts</td><td>Public contract time, liquidated damages</td></tr>
</tbody></table></div>
<p><strong>Real (11-428704):</strong> 120 working days to build + 250 working days plant establishment = 370 working days. 120 working days ≈ 24 weeks, more than 5 months before weather. Bids opened Wednesday, Sept 8, 2021, 14:00 (2:00 PM) on Bid Express; Addendum 1 issued Aug 27, 12 calendar days earlier.</p>`,
  watch: `<p>One contract can use three clocks. The same 11-428704 specs give 5 business days to dispute the weekly statement of working days. Read each deadline's exact words.</p>`,
  deeper: `<p>Caltrans defines working day in Standard Specifications 1-1.07B; special provisions can amend it. City contracts define days in their own definitions section.</p>`,
  src: "11-428704 Notice to Bidders, Addendum 1, Special Provisions (contract time; weekly statement of working days); Caltrans 2018 Standard Specifications 1-1.07B."
},

{ h: "Takeoff and pricing sheet layout",
  lead: "Two tabs: a takeoff tab with one row per measurement, and a pricing tab that rolls quantities up by bid item with SUMIFS and locks every rate cell with $.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Where</th><th>Columns or cells</th><th>Formula pattern</th></tr></thead>
<tbody>
<tr><td><strong>Header</strong></td><td>Project, bid date and time, plan date, addenda received, tax rate ($B$1), markup ($B$2)</td><td>Typed once; every formula points here</td></tr>
<tr><td><strong>Takeoff tab</strong>, one row per measured area or count</td><td>A bid item no. · B sheet · C description · D raw qty · E unit · F factor (slope, spacing, ÷ 9, ÷ 324) · G pay qty · H notes/source</td><td>G = D × F, e.g. =D5*1.155/1.5^2 for 18" triangular; =D6*3/324 for 3" mulch</td></tr>
<tr><td><strong>Pricing tab</strong>, one row per bid item</td><td>A item · B bid qty (agency) · C takeoff qty · D buy qty · E material $/unit · F labor $/unit · G equipment $/unit · H unit cost · I unit price · J extension</td><td>C =SUMIFS(Takeoff!$G:$G, Takeoff!$A:$A, $A5)<br>D =ROUNDUP(C5*(1+waste %),0)<br>H =(D5*E5*(1+$B$1)+B5*(F5+G5))/B5<br>I =ROUND(H5*(1+$B$2),2)<br>J =B5*I5</td></tr>
<tr><td><strong>Checks</strong></td><td>Takeoff qty vs. bid qty (flag over ±5%), SUM total vs. sum of extensions, total vs. engineer's estimate</td><td>=ABS(C5/B5-1)>0.05</td></tr>
</tbody></table></div>`,
  ex: `<p>The extension always uses the agency's bid quantity (B), while cost uses what you buy (D). The difference is your waste and quantity risk, priced inside the unit price.</p>`,
  watch: `<p>Never type a number over a formula; color any hard-coded value. After inserting rows, confirm SUM and SUMIFS ranges still cover them. Units mixed in one column (SF next to SQYD) break SUMIFS silently: convert in column F, not in your head.</p>`,
  deeper: `<p>F4 (Excel, Windows) cycles $ locking on a cell reference. $A5 locks the column only, so the formula copies down the item list but still reads column A. In Google Sheets the same SUMIFS syntax works across tabs.</p>`
},

{ t: "std", h: "Drill 1 · Units and factors on real quantities",
  lead: "Work each on paper first; answers under Go deeper.",
  body: `<ol>
<li>11-428704 item 21: 7,020 SQYD. SF and acres?</li>
<li>Compost at 200 CY/acre over 5,000 SF. CY?</li>
<li>4,000 SF of 2:1 slope on plan gets 3" mulch. Real surface and CY?</li>
<li>5,000 SF of iceplant cuttings at 12" o.c. triangular vs. square?</li>
<li>4" main from Sta 235+50 to 249+70, 5% waste, 20 ft lengths. LF and lengths to buy?</li>
<li>A 1" = 50' sheet printed on 11 × 17. You measure 2.4". Real length?</li>
<li>80 PSI static at the meter, zone 46 ft uphill. Static PSI at the zone?</li>
<li>Cost $80,000 and you need a 13% margin. Price and equivalent markup?</li>
<li>Griffith Company bid $1,234,875.85 on 11-428704; low was $1,176,120.00. Percent over low?</li>
</ol>`,
  deeper: `<ol>
<li>7,020 × 9 = <strong>63,180 SF</strong>; ÷ 43,560 = <strong>1.45 acres</strong></li>
<li>5,000 ÷ 43,560 × 200 = <strong>23.0 CY</strong> (or 5 × 4.59)</li>
<li>4,000 × 1.118 = <strong>4,472 SF</strong>; × 3 ÷ 324 = <strong>41.4 CY</strong></li>
<li>Triangular <strong>5,775</strong>; square <strong>5,000</strong></li>
<li><strong>1,420 LF</strong>; × 1.05 = 1,491 ÷ 20 = 74.6, buy <strong>75 lengths</strong></li>
<li>Half size, so 1" = 100': <strong>240 ft</strong>. Verify against a written dimension.</li>
<li>80 − 46 × 0.433 = <strong>about 60 PSI</strong>, before friction</li>
<li>80,000 ÷ 0.87 = <strong>$91,954</strong>; markup 0.13 ÷ 0.87 = <strong>14.9%</strong></li>
<li>$58,755.85 ÷ $1,176,120.00 = <strong>5.0% over low</strong></li>
</ol>`,
  src: "11-428704 Bid Item List item 21, plans IP-1 and PL-1, Caltrans Bid Summary. Other numbers are made up."
},

{ t: "std", h: "Drill 2 · Take off and price a small bed",
  lead: "One made-up bed, takeoff to price; answers under Go deeper.",
  body: `<p><strong>Bed:</strong> L-shape, 40 × 20 ft plus 15 × 10 ft, square corners, flat. <strong>Plans:</strong> #1 groundcover 24" o.c. triangular; 3" wood mulch; compost 200 CY/acre; edging all around.</p>
<p><strong>Made-up prices:</strong> #1 $9.50 EA; mulch $45/CY; compost $40/CY; edging $3.25/LF; tax 8.75% on materials. Price materials at a 15% margin.</p>
<ol>
<li>Area, plants, mulch CY, compost CY (round up purchases), edging LF</li>
<li>Material subtotal, tax, material cost</li>
<li>Material price at 15% margin</li>
</ol>`,
  deeper: `<ol>
<li>800 + 150 = <strong>950 SF</strong>. Plants 950 × 0.289 = 274.3 → <strong>275</strong>. Mulch 950 × 3 ÷ 324 = 8.8 → <strong>9 CY</strong>. Compost 950 ÷ 43,560 × 200 = 4.36 → <strong>5 CY</strong>. Edging: an L with square corners has the perimeter of its bounding box, (40 + 30) × 2 = <strong>140 LF</strong>.</li>
<li>$2,612.50 + $405.00 + $200.00 + $455.00 = <strong>$3,672.50</strong>; tax $321.34; cost <strong>$3,993.84</strong></li>
<li>$3,993.84 ÷ 0.85 = <strong>$4,698.64</strong> (a 17.6% markup)</li>
</ol>
<p>Labor and equipment: <a href="#m9-1">Module 9</a>. Overhead and final markup: <a href="#m10-1">Module 10</a>.</p>`,
  src: "Compost rate from 11-428704 plans PL-1. Everything else made up."
},

{ t: "terms", h: "Words to know",
  lead: "Module 0 terms. Every bidding term is in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["LF / SF / SQYD / CY / EA / LS / LB", "Linear foot / square foot / square yard (9 SF) / cubic yard (27 CF) / each / lump sum / pound."],
    ["Acre", "43,560 SF or 4,840 SQYD."],
    ["324 rule", "CY = SF × depth in inches ÷ 324."],
    ["Application rate", "Spec quantity per area, like 200 CY of compost per acre."],
    ["Slope ratio (H:V)", "Horizontal to vertical. 2:1 is 50%."],
    ["Slope factor", "Real surface ÷ plan area: √(H² + 1) ÷ H. 1.118 for 2:1."],
    ["On center (o.c.)", "Spacing from the center of one plant or head to the next."],
    ["Triangular spacing", "Offset rows; plants = SF × 1.155 ÷ s²."],
    ["Plant group", "Caltrans letter for a container size: A #1, B #5, U #15, K 24\" box, H cutting, Z palm."],
    ["Engineer scale", "Scales in multiples of 10 ft per inch, used on site plans."],
    ["Station (Sta)", "Feet along a named survey line; 298+55 = 29,855 ft."],
    ["GPM / PSI", "Gallons per minute (flow) / pounds per square inch (pressure)."],
    ["0.433", "PSI gained or lost per foot of elevation change."],
    ["POC", "Point of connection: the irrigation water source."],
    ["Extension", "Quantity × unit price on one bid line."],
    ["Markup", "(Price − cost) ÷ cost."],
    ["Margin", "(Price − cost) ÷ price."],
    ["Working day", "A day that counts toward contract time, as the contract defines it."],
    ["Calendar day", "Every day, weekends and holidays included."],
    ["Percent over low", "(Bid − low bid) ÷ low bid."],
    ["SUMIFS", "Spreadsheet function that totals a column for rows matching criteria, such as a bid item number."],
    ["Absolute reference ($B$1)", "A cell address locked so it does not shift when the formula is copied."]
  ]
},

{ t: "quiz", id: "m0", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "A bid item is 2,400 SQYD of weed control. Your PDF takeoff says 21,960 SF. What do you do?", a: ["Price 21,960 at the SQYD unit price", "Price the bid quantity, 2,400 SQYD; your takeoff is 2,440 SQYD, so note the 1.7% overrun risk", "Change the bid quantity to 2,440"], c: 1, why: "21,960 ÷ 9 = 2,440 SQYD. You price the agency's quantity; the difference is a quantity risk you note or RFI, not a number you change." },
    { q: "3,600 SF of bed gets 4\" of compost-amended topsoil. How many CY?", a: ["44.4 CY", "133.3 CY", "400 CY"], c: 0, why: "3,600 × 4 ÷ 324 = 44.4 CY. 133.3 is the ÷ 9 error (CF ÷ 9 instead of ÷ 27)." },
    { q: "A spec calls for 150 CY of compost per acre. How many CY for 12,000 SF?", a: ["18 CY", "41.3 CY", "1.8 CY"], c: 1, why: "12,000 ÷ 43,560 = 0.2755 acre × 150 = 41.3 CY." },
    { q: "A 1.5:1 slope is 6,000 SF on plan and the item pays by horizontal area. Jute netting covers the real surface. How much jute do you cost?", a: ["6,000 SF", "6,708 SF", "7,212 SF"], c: 2, why: "Factor for 1.5:1 is 1.202: 6,000 × 1.202 = 7,212 SF. You get paid on 6,000, so the extra 1,212 SF goes into your unit price." },
    { q: "3,000 SF of groundcover at 24\" o.c., spacing not stated. What is the count spread?", a: ["750 square to 866 triangular, so RFI or state the assumption", "750 either way", "1,500 to 1,733"], c: 0, why: "3,000 ÷ 4 = 750; 3,000 × 1.155 ÷ 4 = 866.25 → 867. A 15% swing is worth an RFI." },
    { q: "Irrigation note: 3\" main from Sta 112+40 to 118+15, same line. How many LF?", a: ["575 LF", "6.75 LF", "11,815 LF"], c: 0, why: "11,815 − 11,240 = 575 LF." },
    { q: "Static pressure is 70 PSI at the POC. The highest zone is 60 ft above it, and its heads need 40 PSI. What should you suspect?", a: ["Nothing, 70 PSI is plenty", "About 44 PSI static remains before friction, so look for a booster pump or pressure note and RFI if none", "The pipe class is too low"], c: 1, why: "60 × 0.433 = 26 PSI lost. 70 − 26 = 44 PSI before meter, backflow and pipe losses; 40 PSI at the head is unlikely without a booster." },
    { q: "A GC asks for a 20% margin on your $150,000 cost. What price?", a: ["$180,000", "$187,500", "$170,000"], c: 1, why: "Price = cost ÷ (1 − margin) = 150,000 ÷ 0.80 = $187,500. Adding 20% to cost ($180,000) is only a 16.7% margin." },
    { q: "Contract time is 60 working days and NTP (notice to proceed) is a Monday with one holiday in the period. About when is the contract time used up, with no weather days?", a: ["About 60 days later", "About 12 weeks and 1 day later", "About 8.5 weeks later"], c: 1, why: "60 working days ≈ 12 five-day weeks, plus the holiday pushes it one more working day." },
    { q: "In the pricing tab, =SUMIFS(Takeoff!$G:$G, Takeoff!$A:$A, $A5) is copied down. Why the $ before A in $A5?", a: ["It locks the column so every row reads its own item number in column A", "It rounds the result", "It prevents the formula from updating"], c: 0, why: "$A5 locks the column but lets the row change, so row 6 reads A6, row 7 reads A7, and so on." }
  ]
},

{ t: "practice", id: "m0", h: "Practice assignments",
  lead: "Real documents only. Check each one off when done.",
  items: [
    { h: "Build the two-tab takeoff and pricing sheet", hrs: 0.75, d: "<p>In Excel or <a href=\"https://sheets.google.com\" target=\"_blank\" rel=\"noopener\">Google Sheets</a>, build the layout from the takeoff and pricing sheet slide: header with locked tax and markup cells, a takeoff tab with factor and pay-quantity columns, and a pricing tab that rolls up by item with SUMIFS. Enter Drill 2 and match the answers to the cent. Keep it as your template.</p>" },
    { h: "Verify 11-428704 quantities and extensions", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>. Recompute the PP-7 compost callout from the PL-1 rate, and the IP-1 supply line length from its stations. Then pick five items with different units (EA, LF, CY, LB, SQYD), check each bidder's extensions and each bidder's percent over low.</p>" },
    { h: "Calibrate and measure on the real plans", hrs: 0.5, d: "<p>From the Real Bid Lab, open the 11-428704 plans. Check one sheet's print size against its relative border scale, calibrate your measure tool at 1\" = 50', and measure one supply line run. Compare it to the station difference on the same run and explain any gap.</p>" }
  ]
},

{ h: "Module 0 summary: the formula card",
  lead: "Keep this card beside every takeoff; each line is a mistake that has cost someone a bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rule</th><th>Error it prevents</th></tr></thead>
<tbody>
<tr><td>SF ÷ 9 = SQYD; SF ÷ 43,560 = acres</td><td>9× unit price error on SQYD items</td></tr>
<tr><td>CY = SF × in ÷ 324; rate per acre ÷ 43.56 = CY per 1,000 SF</td><td>3× error from CF ÷ 9</td></tr>
<tr><td>Slope factor √(H² + 1) ÷ H (2:1 = 1.118)</td><td>12% short on 2:1 material; underpriced slope labor</td></tr>
<tr><td>Triangular = SF × 1.155 ÷ s²</td><td>15% plant shortfall</td></tr>
<tr><td>Groups A #1, B #5, U #15, K 24" box, H cutting, Z palm</td><td>Wrong item priced</td></tr>
<tr><td>Verify scale on every sheet; stations subtract on the same line</td><td>2× error on half-size prints</td></tr>
<tr><td>0.433 PSI per ft of rise</td><td>Missed booster or regulator scope</td></tr>
<tr><td>Price = cost ÷ (1 − margin)</td><td>Short profit when margin is confused with markup</td></tr>
<tr><td>Read each clock: working, calendar, business days</td><td>Late bids, missed dispute windows, liquidated damages</td></tr>
<tr><td>Bid qty × unit price; waste inside the unit price; check extensions two ways</td><td>10× zero errors, unit price typos that govern</td></tr>
</tbody></table></div>
<p><strong>Next:</strong> <a href="#m1-1">Module 1 · How Construction Bidding Works</a>.</p>`
}
]
});
