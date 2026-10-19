(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 4, hours: 8, title: "Reading Landscape and Irrigation Plans",
slides: [

{ t: "cover",
  h: "Reading Landscape and Irrigation Plans",
  lead: "You can't price what you can't read. This module covers every skill needed to open a commercial plan set, find each sheet that touches your scope, measure from it, and decode its lines, symbols, abbreviations, notes and details.",
  objectives: [
    "Navigate private (L-sheet) and Caltrans sets by index and sheet code, and track revisions and addenda",
    "Measure from any sheet or print: scale checks, odd areas, slopes, stationing and match lines",
    "Decode line types, abbreviations, irrigation and planting legends, callouts, hatches and notes",
    "Turn a detail into a parts list and check pipe sizes and flows against the schedule",
    "Find the water, power, grading and hardscape information on other disciplines' sheets",
    "Run a repeatable on-screen takeoff and conflict hunt, and avoid the traps that cost money"
  ],
  time: [["Reading and slides", "2.25 h"], ["Practice assignments", "5.75 h"], ["Module total", "8 h"]],
  body: `<p>Running example: Caltrans contract 11-428704, I-805 recycled-water conversion and planting in Chula Vista (<a href="#lab-11-428704">Real Bid Lab · 11-428704</a>; full bid in <a href="#m15-1">Module 15</a>). Second example: 11-431064, new landscaping on SR-905 in Otay Mesa (<a href="#lab-11-431064">Real Bid Lab · 11-431064</a>).</p>
<p>This module teaches the skills. The <a href="#plans-1">Plan Set Deep Dive</a> walks the 11-428704 sheets one by one; it is not repeated here. Unknown terms: <a href="#dict">Bid Dictionary</a>.</p>`,
  src: "Caltrans contract 11-428704: project plans (65 sheets, approved June 28, 2021) and Addendum 1 plans. Caltrans contract 11-431064: project plans (96 sheets)."
},

{ h: "The plan set: disciplines, sheet codes, private vs. Caltrans",
  lead: "Your scope lives on the landscape sheets, but your water source, power and most conflicts live on other disciplines' sheets; never bid from a partial set.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Group</th><th>Typical private set (U.S. National CAD Standard letters)</th><th>11-428704 (Caltrans codes)</th><th>Read it for</th></tr></thead>
<tbody>
<tr><td>General</td><td>G or T: title, index</td><td>Sheet 1: title, location map, index</td><td>Sheet count, issue date</td></tr>
<tr><td>Civil</td><td>C: grading, utilities, storm drain</td><td>PC-1 project control; U-1 to U-7 utilities</td><td>Water service, meter, sleeves, grades, utilities to avoid</td></tr>
<tr><td>Landscape notes, hardscape</td><td>L-0.0 notes and abbreviations; L-1.x layout; L-2.x hardscape details</td><td>(none on this job)</td><td>Walls, paving, mow curbs, headers, boulders, sleeves</td></tr>
<tr><td>Irrigation</td><td>L-3.x plans; L-3.4 legend, notes, water calcs; L-4.x details</td><td>ISS-1 schedule; IR-1 to 7 removal; IP-1 to 7 plans; ID-1 to 6 details; IQ-1, IQ-2 quantities</td><td>POC (point of connection), main, valves, heads, controllers, makes and models</td></tr>
<tr><td>Planting</td><td>L-5.x plans; L-5.4 legend and notes; L-6.0 details</td><td>PL-1 legend; PP-1 to 7 plans; PLD-1 details; PQ-1 quantities</td><td>Species, sizes, spacing, soil prep</td></tr>
<tr><td>Specs on sheets</td><td>L-7.0 (small jobs) or “see project manual 32 84 00”</td><td>Standard Specs plus Special Provisions (<a href="#m5-1">Module 5</a>)</td><td>Warranty, maintenance, tests</td></tr>
<tr><td>Electrical / architectural</td><td>E: power, conduit; A: buildings, podium planters</td><td>E-1, E-2 irrigation electric service</td><td>Controller power</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Topic</th><th>Private (L-sheets)</th><th>Caltrans</th></tr></thead>
<tbody>
<tr><td>Locating work</td><td>Dimensions from buildings, curbs, grid lines; key maps</td><td>Stations and offsets along survey lines</td></tr>
<tr><td>Quantities</td><td>Rarely given; the takeoff is yours</td><td>Quantity sheets (IQ, PQ) plus the Bid Item List</td></tr>
<tr><td>Products</td><td>Make and model on the legend, often “or equal”</td><td>Generic types; brands only where the Special Provisions require (Calsense here)</td></tr>
<tr><td>Details</td><td>Custom and manufacturer details</td><td>Project details (ID, PLD) plus statewide Standard Plans (RSP H-sheets)</td></tr>
<tr><td>Typical scale</td><td>1" = 10' to 1" = 30'</td><td>1" = 50' on plan sheets</td></tr>
<tr><td>Water rules</td><td>Water budget table for MWELO (Model Water Efficient Landscape Ordinance)</td><td>Notes and legend items (recycled water, purple parts)</td></tr>
<tr><td>“(N)”</td><td>New</td><td>On quantity tables: not a separate pay item</td></tr>
</tbody></table></div>`,
  ex: `<p>11-428704 has 65 sheets; only sheets 24 to 56 are landscape. Read only those and you miss traffic handling (19 to 23), utilities to avoid when trenching (11 to 17) and controller power (57, 58).</p>`,
  watch: `<p>A GC who sends “just the L-sheets” must also send civil utility, electrical site and architectural site sheets. If you can't get them, list your assumptions in the proposal (<a href="#m13-1">Module 13</a>). If a landscape note says “fine grading by landscape contractor,” it's yours even when the grades are on a civil sheet you never got.</p>`
},

{ h: "Title block, revisions and addenda",
  lead: "Read the title block on every sheet, and price only the current sheet: a revision cloud and delta show exactly what changed.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Title block item</th><th>Check</th></tr></thead>
<tbody>
<tr><td>Sheet title and code; “32 of 65”</td><td>Set is complete; translate sequence numbers to codes</td></tr>
<tr><td>Designer's stamp and signature</td><td>Licensed LA (landscape architect) responsible</td></tr>
<tr><td>Dates and issue name</td><td>“Bid Set,” “100% CD” (construction documents). “Preliminary,” “50% CD” or “Not for Construction” = not final; name the set and date you priced</td></tr>
<tr><td>Revision block</td><td>Each revision's number, date, description</td></tr>
<tr><td>Scale</td><td>In the block or under each drawing</td></tr>
</tbody></table></div>
<ul>
<li><strong>Revision cloud</strong> (scalloped outline) around the change, with a <strong>delta</strong> (numbered triangle) that matches the revision block.</li>
<li><strong>Addendum:</strong> formal, numbered change before bids are due; may replace sheets, change specs or answer questions. Acknowledge each on the bid form.</li>
<li><strong>Bulletin / ASI</strong> (architect's supplemental instructions): changes after award (<a href="#m16-1">Module 16</a>).</li>
</ul>`,
  ex: `<p>Addendum 1 on 11-428704: “plan sheets 22, 23, 45, and 56 are replaced.” Sheet 45 is IQ-1, sheet 56 is PQ-1. The new IQ-1 carries a delta “1” at the 2" remote control valve (RCV) total (now 3) and “REPLACED PER ADDENDUM No. 1 DATED AUGUST 27, 2021”; bid item 38 went from 4 to 3 valves. Title blocks read 11 SD 805 3.4/5.1 (District 11, San Diego County, Route 805, post miles 3.4 to 5.1), approved 06-28-21.</p>`,
  watch: `<p>When an addendum lands, swap the sheets in your working set the same day, compare old vs. new with an overlay, and re-measure every clouded area. Tracking addenda: <a href="#m12-1">Module 12</a>.</p>`,
  src: "Caltrans Addendum No. 1, Aug. 27, 2021, contract 11-428704; Addendum 1 plans, sheet IQ-1."
},

{ h: "Scale: measure, verify, calibrate",
  lead: "A written scale is true only at full sheet size; verify every sheet on a scale bar or known distance before you measure anything.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Scale</th><th>Typical use</th><th class="num">1 in =</th></tr></thead>
<tbody>
<tr><td>1" = 10'</td><td>Courtyards, enlargements</td><td class="num">10 ft</td></tr>
<tr><td>1" = 20'</td><td>Most commercial site landscape plans</td><td class="num">20 ft</td></tr>
<tr><td>1" = 30'</td><td>Larger sites, parks</td><td class="num">30 ft</td></tr>
<tr><td>1" = 50'</td><td>Corridors (all IP and PP sheets on 11-428704)</td><td class="num">50 ft</td></tr>
<tr><td>1/8" = 1'-0"</td><td>Architect's scale, buildings</td><td class="num">8 ft</td></tr>
<tr><td>NTS</td><td>Not to scale: most details</td><td class="num">Don't measure</td></tr>
</tbody></table></div>
<ul>
<li>Landscape and civil use an engineer's scale (10 to 60 parts per inch); architects use fractions per foot.</li>
<li>Full sheet sizes: 22" × 34" (11-428704), 24" × 36" or 30" × 42" (many private sets).</li>
<li>Check bars: the graphic scale bar, or the Caltrans “RELATIVE BORDER SCALE IS IN INCHES” bar, exactly 3" at full size.</li>
<li>Area scales with the square: the same rectangle at 1" = 40' is 4 times its area at 1" = 20'.</li>
<li>Odd beds: split into rectangles and right triangles (base × height ÷ 2), sum, then check against the bounding box.</li>
</ul>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Case</th><th>Math</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>IP-3 printed on 11×17; 3" border bar measures 1.5"</td><td>1.5 ÷ 3 = 0.5, so 1" = 100'; run of 2.2" × 100</td><td class="num">220 ft (not 110)</td></tr>
<tr><td>L-bed, 1" = 20': A 3.0"×1.5", B 1.0"×2.0", triangle 1.5"×1.0"</td><td>60×30 + 20×40 + 30×20÷2</td><td class="num">2,900 SF</td></tr>
<tr><td>Bounding box check, 4.0"×3.5"</td><td>80 × 70</td><td class="num">5,600 SF &gt; 2,900 OK</td></tr>
</tbody></table></div>`,
  watch: `<p>One sheet can carry a 1" = 20' plan and a 1" = 10' enlargement side by side: read the scale under each drawing. PDFs are often reduced or scanned at odd sizes, so calibrate every sheet in software, even within one set. Curves: more points or the area tool, never a guessed rectangle.</p>`
},

{ h: "North arrows, match lines and stationing",
  lead: "Long jobs are addressed by station along a named survey line: Sta 262+48 is 26,248 ft from that line's start, and stations give lengths without measuring.",
  body: `<ul>
<li><strong>North arrow:</strong> north is often not up; corridors are rotated to fit. Use it to match the plan to the site walk, civil sheets and sun exposure.</li>
<li><strong>Match line:</strong> “MATCH LINE SEE SHEET IP-2.” Count up to it, stop exactly there. A <strong>key map</strong> shows which part of the site each sheet covers.</li>
<li><strong>Station:</strong> before the plus = hundreds of feet. The line name matters: 11-428704 has “SD-805” (freeway), “O-6R,” “O-2” (ramps), “M-8.” Sta 261+00 “O-6R” is not Sta 261+00 “SD-805.”</li>
<li><strong>Lt / Rt:</strong> left or right looking up-station. <strong>Offset:</strong> sideways distance, like “12' Rt.” Ticks every 100 ft; big labels every 500 ft.</li>
</ul>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Source</th><th>Data</th><th>Math</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>IQ-2 conduit table</td><td>IP-4 and IP-5 crossings at 262+48 Lt and Rt (85 LF 8" PVC (polyvinyl chloride) conduit each, 4" main inside); IP-5 264+37 Rt, 122 LF CHDPE (corrugated high-density polyethylene, bid item 67)</td><td>26,437 − 26,248</td><td class="num">189 ft = 3.78" at 1" = 50'</td></tr>
<tr><td>IP-1 note</td><td>“Install 4" supply line west of existing berm from Sta 235+50 to Sta 249+70 'SD-805' line”</td><td>24,970 − 23,550</td><td class="num">1,420 ft of main</td></tr>
<tr><td>IQ-1 by sheet</td><td>4" main IP-1 440 LF, IP-2 1,365 LF</td><td>Split at the match line</td><td class="num">No double count</td></tr>
</tbody></table></div>`,
  watch: `<p>Match lines are where double counts happen: a valve or tree drawn on both sheets, a run measured twice. Mark the line on both sheets in your takeoff.</p>`
},

{ h: "Line types: new, existing, utilities",
  lead: "Line style and weight tell you what a line is and whether it's yours: new work is dark and heavy, existing is light, and “existing” is never free until you read the verb after it.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Usually</th><th>Bid impact</th></tr></thead>
<tbody>
<tr><td>Heavy solid</td><td>New mainline, edge of new work</td><td>LF by size and class</td></tr>
<tr><td>Thin solid or dashed</td><td>New lateral</td><td>Cheaper pipe, shallower trench</td></tr>
<tr><td>Light, gray, screened</td><td>Existing curbs, buildings, pipe</td><td>Protect; price only if a note says remove or modify</td></tr>
<tr><td>Dash-dot</td><td>Centerline (CL), property line (PL)</td><td>Station and setback reference</td></tr>
<tr><td>Lettered: —W—, —SD—, —E—, —G—, —SCC—</td><td>Utility or conduit</td><td>Trench near or cross; read the legend letter code</td></tr>
<tr><td>—x—TPFR—x—</td><td>Fence, often temporary protection fence</td><td>Pay item or work limit</td></tr>
<tr><td>Wavy</td><td>Wire or cable (“2W” two-wire on 11-428704)</td><td>LF, often in conduit</td></tr>
<tr><td>LIMIT OF WORK (LOW)</td><td>Edge of contract area</td><td>Nothing past it is yours</td></tr>
</tbody></table></div>
<p><strong>Existing labels:</strong> Exist, EXIST, (E), EX. <strong>Verbs:</strong> to remain (protect), remove, remove and salvage (to owner), abandon (leave dead in place), modify, relocate, operate. Removal sheets (IR on Caltrans, demo on private) are counted like new work.</p>`,
  ex: `<figure class="fig"><img src="img/pdd/iss1-legend.jpg" data-full="img/pdd/iss1-full.jpg" alt="ISS-1 legend showing line types for irrigation conduit, existing conduit, two-wire cable and symbols" loading="lazy"><figcaption><b>ISS-1 legend, 11-428704.</b> Solid double line = new irrigation conduit (Irr C); dashed = existing (Exist Irr C). —SCC— is electrical conduit, dashed if existing. Wavy “2W” = two-wire cable in 1" conduit. · tap to zoom</figcaption></figure>
<p>Real callouts: “REMOVE AND SALVAGE ICC” (irrigation controller enclosure cabinet), “Exist 3" BPA TO REMAIN,” “Exist 3" WM,” “Exist 2" GV,” and * on IP-7 valve callouts (you operate those existing valves during construction). Each is a different cost: removal labor, protection, or operating time.</p>`,
  watch: `<p>Line styles are firm habits, not a national rule: one firm's dashed line is lateral, another's is existing. Read every set's legend; ask about any line it doesn't define. Scans drop light lines, so zoom the original PDF before deciding an area is empty.</p>`
},

{ h: "Abbreviations: general, grading and site",
  lead: "The set's own abbreviation list governs; these are the codes on almost every set.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Code</th><th>Meaning and bid impact</th><th>Code</th><th>Meaning and bid impact</th></tr></thead>
<tbody>
<tr><td>TYP</td><td>Typical: applies to every similar item</td><td>FG / FS</td><td>Finish grade (soil) / finish surface (paving)</td></tr>
<tr><td>NTS</td><td>Not to scale: use written numbers</td><td>EG</td><td>Existing grade</td></tr>
<tr><td>EQ</td><td>Equal spaces: divide the total</td><td>TC / FL</td><td>Top of curb / flow line (gutter low line)</td></tr>
<tr><td>O.C., OC</td><td>On center spacing</td><td>TW / BW</td><td>Top / bottom of wall (BW often = FG at base)</td></tr>
<tr><td>SIM</td><td>Similar, with small changes; ask if unclear</td><td>INV / RIM</td><td>Inside bottom of pipe / top of grate or lid</td></tr>
<tr><td>NIC</td><td>Not in contract: nobody here builds it</td><td>HP / LP / GB</td><td>High point / low point / grade break</td></tr>
<tr><td>VIF</td><td>Verify in field: bid as shown, note the risk</td><td>FF</td><td>Finished floor: soil stays below it</td></tr>
<tr><td>(E), EX, EXIST / (N)</td><td>Existing / new (Caltrans tables: not a pay item)</td><td>AD, CB, SD, CO</td><td>Area drain, catch basin, storm drain, cleanout</td></tr>
<tr><td>CL ℄, PL, R/W, LOW</td><td>Centerline, property line, right of way, limit of work</td><td>PCC, AC, HMA, DG</td><td>Portland cement concrete, asphalt concrete, hot mix asphalt, decomposed granite</td></tr>
<tr><td>MIN, MAX, APPROX</td><td>Min and max are rules you must meet</td><td>CMU</td><td>Concrete masonry unit (block)</td></tr>
<tr><td>Ø, DIA; @, w/, CONT</td><td>Diameter; at, with, continuous (“tape CONT” = full trench)</td><td>BY OTHERS, FBO</td><td>Another contractor; furnished by others. Confirm who, write it in the proposal</td></tr>
<tr><td>DET, SHT, DWG, REF</td><td>Where to look next</td><td></td><td></td></tr>
</tbody></table></div>`,
  ex: `<p>Set-specific lists on 11-428704: ISS-1 has RWM (recycled water meter), RWCA (recycled water connection assembly), RWWS (recycled water identification and warning sign), CCTS (cross connection test station). PL-1 has W Germ (weed germination), MEPA (maintain existing planted areas), TPFR (temporary protection fence, rope). Caltrans writes “Exist,” “Elect,” “Irr C” in mixed case.</p>`,
  watch: `<p>Some codes mean two things: ADJ = adjust or adjacent; FS = flow sensor on irrigation sheets, finish surface on grading sheets. Read the sheet you're on.</p>`
},

{ h: "Grades and slopes",
  lead: "Grades set how hard your trenching and planting will be even when someone else grades: read spot elevations, contours and slope arrows, and convert plan area to surface area on steep slopes.",
  body: `<ul>
<li><strong>Spot elevation:</strong> “FG 112.50” at a dot. <strong>Contours:</strong> equal-height lines every 1 or 2 ft; existing dashed, proposed solid; tight = steep.</li>
<li><strong>Slope arrow</strong> points downhill: “2%” = rise ÷ run × 100; “2:1” = run:rise.</li>
<li><strong>Surface factor:</strong> √(run² + rise²) ÷ run. 2:1 = 1.118.</li>
</ul>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Given</th><th>Math</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>FG 112.50 and FG 108.00, 90 ft apart</td><td>4.50 ÷ 90</td><td class="num">5% (20:1)</td></tr>
<tr><td>Top 130.0, toe 118.0, 24 ft on plan</td><td>24 ÷ 12</td><td class="num">2:1 (50%)</td></tr>
<tr><td>1-ft contours 0.25" apart at 1" = 20'</td><td>1 ÷ 5</td><td class="num">20% (5:1)</td></tr>
<tr><td>TW 116.00 / BW 112.50</td><td>116.00 − 112.50</td><td class="num">3.5 ft wall</td></tr>
<tr><td>2:1 slope, 24 ft run</td><td>√(24² + 12²) = 26.8 ÷ 24</td><td class="num">×1.118 surface</td></tr>
</tbody></table></div>`,
  watch: `<p>On 2:1 slopes crews plant slower and specs often add erosion control fabric; mulch and fabric quantities use surface area, not plan area. Pricing grading, drainage and hardscape: <a href="#m17-1">Module 17</a>.</p>`
},

{ h: "Abbreviations: irrigation and planting",
  lead: "Legends, callouts and details use these codes; nursery and plan container sizes must match exactly or it's a substitution.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Irrigation</th><th>Meaning</th><th>Planting</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>POC</td><td>Point of connection</td><td>#1, #5, #15</td><td>1-, 5-, 15-gallon containers</td></tr>
<tr><td>BFP / BPA; RP; DC</td><td>Backflow preventer (assembly); reduced pressure principle; double check</td><td>24" BOX, 36" BOX</td><td>Tree boxes by width</td></tr>
<tr><td>WM / RWM</td><td>Water meter / recycled water meter</td><td>B&amp;B</td><td>Balled and burlapped</td></tr>
<tr><td>PRV; WS</td><td>Pressure regulating valve; wye strainer</td><td>BTH</td><td>Brown trunk height (palms)</td></tr>
<tr><td>MV, RCV-M, RCVM; FS</td><td>Master valve; flow sensor</td><td>MT / MULTI; STD</td><td>Multi-trunk; standard (single trunk)</td></tr>
<tr><td>RCV; CZK</td><td>Remote control valve; drip control zone kit</td><td>CAL; DBH</td><td>Caliper; diameter at breast height (existing trees)</td></tr>
<tr><td>QC; GV; BV</td><td>Quick coupler; gate valve; ball valve</td><td>FLT</td><td>Flats; also plugs, cuttings</td></tr>
<tr><td>ARV / CARV</td><td>(Combination) air release valve</td><td>TPZ</td><td>Tree protection zone</td></tr>
<tr><td>PVC; SCH 40; CL 200 / CL 315</td><td>Polyvinyl chloride; Schedule 40 wall; pressure class in psi</td><td>WUCOLS</td><td>Water Use Classification of Landscape Species: VL, L, M, H</td></tr>
<tr><td>HDPE</td><td>High-density polyethylene</td><td>SQYD</td><td>Square yards</td></tr>
<tr><td>GPM / GPH; PSI</td><td>Gallons per minute / hour; pounds per square inch</td><td>Plant code</td><td>ALO STR = <em>Aloe striata</em>, BAC PIL = <em>Baccharis pilularis</em></td></tr>
<tr><td>Irr C, Elect C; CNC</td><td>Irrigation, electrical conduit; low-voltage control and neutral conductors (Caltrans)</td><td>Caltrans groups</td><td>A = No. 1, B = No. 5, U = No. 15, K = 24" box, H = cutting (SS 20-3.01B(2)(a))</td></tr>
<tr><td>2W; ICC</td><td>Two-wire cable; irrigation controller enclosure cabinet</td><td></td><td></td></tr>
</tbody></table></div>`,
  ex: `<p>11-431064 PL-1 notes that limit which stock you can buy: “Ball &amp; burlap BTH (brown trunk height 15') unless otherwise noted,” “All Washingtonia palms must be brown skinned,” “Minimum 6' in height for Quercus agrifolia in container,” “Plant source from San Diego and Orange County only.” Send them to your nursery before it quotes.</p>`,
  src: "Caltrans 2018 Standard Specifications 20-3.01B(2)(a); Caltrans 11-431064 plans, PL-1."
},

{ h: "Irrigation: POC to valve",
  lead: "Read the system downstream from the POC; the first ten feet after the meter carry the highest cost per foot, and the plan shows them as one small symbol.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part, in flow order</th><th>Function</th><th>Priced</th></tr></thead>
<tbody>
<tr><td>POC: tap, meter, stub-out</td><td>System start</td><td>EA; confirm who installs</td></tr>
<tr><td>Meter (WM, RWM)</td><td>Usually set by the water agency</td><td>Often by others; agency fees excluded</td></tr>
<tr><td>Wye strainer</td><td>Catches grit ahead of backflow and valves</td><td>EA</td></tr>
<tr><td>Backflow (RP or DC)</td><td>Protects potable water; above ground, cage or enclosure on a pad</td><td>EA plus enclosure, testing</td></tr>
<tr><td>PRV</td><td>Only where pressure is too high</td><td>EA</td></tr>
<tr><td>Master valve, flow sensor</td><td>Shut the main on a break; wired to controller</td><td>EA plus box, wire</td></tr>
<tr><td>Controller</td><td>Smart or central-control on commercial jobs</td><td>EA plus pad, power, antenna</td></tr>
<tr><td>Mainline</td><td>Always pressurized; heavy solid line</td><td>LF by size and class</td></tr>
<tr><td>GV, BV, QC, ARV</td><td>Isolation, hose hookup, air release at high points</td><td>EA by size, with box</td></tr>
<tr><td>Sleeve / conduit</td><td>Carries main, lateral or wire under paving</td><td>LF by size; confirm who installs</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>11-431064 backflow and flow sensor details:</strong> wye strainer and fittings same size as the backflow; “BPA must be constructed with copper pipe from the water meter … through the BPA to connection to PVC”; all metal in contact with soil or concrete wrapped with 2" wide, 20 mil polyethylene tape with ½" overlap; flow sensor needs straight pipe of 10 × supply line diameter upstream and 5 × downstream. On 11-428704 the source is an existing Otay Water District recycled-water meter at Palomar Street (IP-7), with RWCA, CCTS, RWWS, CARV and an antenna mast in the legend.</p>`,
  watch: `<p>Mainline is pressurized all the time; laterals only when the zone runs. Specs usually require heavier pipe and deeper cover for main, so never price them at one rate. Open the POC, backflow, master valve and flow sensor details before pricing any of them.</p>`,
  src: "Caltrans contract 11-431064 plans, irrigation detail sheets (backflow preventer assembly and flow sensor details)."
},

{ h: "Valves, wire and valve callouts",
  lead: "Each valve symbol is a kit (valve, box, gravel, fittings, splices, tag), and its callout packs controller, station, size and flow into one line.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Device</th><th>Usually drawn as</th><th>Kit includes</th></tr></thead>
<tbody>
<tr><td>RCV</td><td>Filled circle or square with tag</td><td>Box, gravel, often isolation valve, connectors, ID tag</td></tr>
<tr><td>CZK (drip)</td><td>Valve symbol with filter/regulator note</td><td>Valve, filter, regulator, box</td></tr>
<tr><td>QC</td><td>Small triangle or circle on main</td><td>Swing joint, box, key at closeout</td></tr>
<tr><td>GV / BV</td><td>Bow tie on main</td><td>Box, sized to pipe</td></tr>
<tr><td>Flush valve or cap</td><td>End of drip zone</td><td>Box or cap</td></tr>
<tr><td>Control or two-wire</td><td>Often not drawn: “wire in common trench with main”</td><td>LF wire, splices, sometimes conduit</td></tr>
</tbody></table></div>
<figure class="fig"><img src="img/pdd/iss1-codes.jpg" data-full="img/pdd/iss1-full.jpg" alt="ISS-1 valve code template showing RCV size, Calsense group, controller letter, station, GPM and number of sprinklers" loading="lazy"><figcaption><b>ISS-1 valve code, 11-428704.</b> X-X(X)-XX-XX-XX = RCV size, Calsense group or hydraulic block, controller letter, station, GPM, sprinkler count when shown. Below: the dashed tag for relabeled boxes (existing controller and station, then new). · tap to zoom</figcaption></figure>
<p>Private tags are simpler: controller-station (“A-12”), size (1"), flow (18 GPM), sometimes hydrozone or precipitation rate.</p>`,
  ex: `<figure class="fig"><img src="img/pdd/ip7-valves.jpg" data-full="img/pdd/ip7-full.jpg" alt="IP-7 valve callouts such as 97A-7 (A-7) with asterisks" loading="lazy"><figcaption><b>IP-7 valve callouts.</b> “97A-7 (A-7)”: old valve A-7 becomes station 7 on controller '97A'. * = you operate that existing facility during construction. · tap to zoom</figcaption></figure>
<p>Special Provisions (SP) 20-2.01B(7): each RCV gets a polyurethane tag tied to the conductor, stamped both sides with controller and station in letters at least 1" high. 100 valves = 100 stamped tags.</p>`,
  watch: `<p>Count valves from callouts, then check stations against controller size: a 40-station unit can't run 44. IP-7: “Exist IC '97A' (GR Comm), 48 station, 35 used.” If you can't find how valves are wired, ask; wire and splices cost money on every valve (<a href="#m6-1">Module 6</a>).</p>`,
  src: "Plans ISS-1 and IP-7, Special Provisions 20-2.01B(7), contract 11-428704."
},

{ h: "Heads, drip, the sprinkler schedule and a flow check",
  lead: "The sprinkler schedule lists each head's make, radius, pressure and flow; sum flows per valve to check pipe sizes and callouts before you trust the plan.",
  body: `<ul>
<li><strong>Spray:</strong> fixed, about 4 to 15 ft; symbol shows arc. <strong>Rotor:</strong> gear or rotary nozzle, about 15 to 50+ ft. <strong>Bubbler:</strong> floods a basin.</li>
<li><strong>Drip:</strong> hatched area plus note (in-line tubing at set spacing) and a CZK; measure the area, derive tubing.</li>
<li><strong>Lateral:</strong> thinner or dashed, size on the run or from a sizing chart.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>ISS-1 row (11-428704)</th><th class="num">Radius</th><th class="num">psi</th><th class="num">GPM</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Riser sprinkler (gear driven), type 5</td><td class="num">40 ft</td><td class="num">50</td><td class="num">3.5</td><td>¾" inlet, 10" riser</td></tr>
<tr><td>Pop-up (gear driven), type 6</td><td class="num">40 ft</td><td class="num">50</td><td class="num">3.5</td><td>12" pop-up</td></tr>
<tr><td>Riser (gear driven), type 7</td><td class="num">48 ft</td><td class="num">50</td><td class="num">7.5</td><td></td></tr>
<tr><td>Tree well (flood bubbler)</td><td class="num">n/a</td><td class="num">see sheet</td><td class="num">0.5</td><td>4 per 24" box tree</td></tr>
</tbody></table></div>
<p>Bubbler pipe chart: 1" for 1 to 24, 1¼" for 25 to 44, 1½" for 45 to 60, 2" for 61 to 100. Note 5: unlabeled laterals are 1" or per the charts.</p>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Check</th><th>Math</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>Tree well valve, 11 trees</td><td>11 × 4 × 0.5</td><td class="num">22 GPM</td></tr>
<tr><td>Pipe leaving valve (44 bubblers)</td><td>chart 25 to 44</td><td class="num">1¼"</td></tr>
<tr><td>Size drop</td><td>24 ÷ 4 = last 6 trees on 1"</td><td class="num">first 5 trees on 1¼"</td></tr>
<tr><td>Rotor valve, 9 type-5</td><td>9 × 3.5</td><td class="num">31.5 GPM vs. callout</td></tr>
</tbody></table></div>`,
  watch: `<p>This is a reading check, not a redesign: if a pipe looks undersized, ask (<a href="#m12-1">Module 12</a>) and price what's shown unless the answer changes it. On private jobs price the exact model on the schedule; an “equal” needs approval (<a href="#m5-1">Module 5</a>).</p>`
},

{ h: "Notes, keynotes and callouts",
  lead: "Notes are contract requirements: one general note can add labor to every valve or head on the job, and a “typical” note on the first sheet usually governs the whole discipline.",
  body: `<ul>
<li><strong>General notes:</strong> numbered rules for the sheet or set. Read every one and write its cost next to it.</li>
<li><strong>Keynotes:</strong> number in a hexagon or circle on the plan, explained in a side list (common on private sets).</li>
<li><strong>Callouts:</strong> text and leader to one item: pipe size, valve tag, “Exist CAP.”</li>
</ul>
<p>The eight ISS-1 general notes and their costs are walked through in the <a href="#plans-12">Plan Set Deep Dive (ISS-1 notes)</a>. Typical cost drivers: two 45° elbows per 90° turn (note 2), purple or labeled parts per San Diego County Department of Environmental Health (DEH) recycled-water rules (note 3), no ponding or overspray (note 4), Calsense flow checking always on (note 7), no storage within tree driplines (note 8).</p>`,
  watch: `<p>If a note seems to change your scope, it does, until an RFI answer says otherwise.</p>`
},

{ h: "Planting legend and schedule",
  lead: "The plant legend is the shopping list: species, size, spacing, and on Caltrans sets the hole, basin, mulch, fertilizer and setbacks for each group.",
  body: `<p>Common columns: symbol, botanical and common name, size, quantity (often absent: you count), spacing, remarks (staking, multi-trunk, standard, matched specimens, WUCOLS rating).</p>
<p>Caltrans PL-1 adds: plant group, hole diameter and depth, basin type, plant area (SF), wood mulch (CY), staking, iron sulfate and slow-release fertilizer rates, fertilizer packets, on-center spacing, minimum distance from traveled way, pavement edge, fence, wall and ditches.</p>
<div class="tablewrap"><table>
<thead><tr><th>Group (size)</th><th>Example</th><th>Spacing</th><th>Extra work from the legend</th></tr></thead>
<tbody>
<tr><td>A (#1)</td><td>Salvia 'Bee's Bliss'</td><td>6 ft o.c.</td><td>Hole sized to root ball, 1 packet</td></tr>
<tr><td>B (#5)</td><td>Aloe striata 'Ghost Aloe'</td><td>3 ft o.c.</td><td>2 packets</td></tr>
<tr><td>H (cutting)</td><td>Carpobrotus edulis (hottentot fig)</td><td>1 ft o.c.</td><td>37,980 SF and 14,020 SF areas; fertilizer per 1,000 SF</td></tr>
<tr><td>K (24" box)</td><td>Pinus canariensis, Pinus eldarica</td><td>As shown</td><td>48" hole, 60" basin, staking, 5 packets, 40 ft from traveled way</td></tr>
</tbody></table></div>`,
  ex: `<p>Column-by-column walk of PL-1: <a href="#plans-20">Plan Set Deep Dive (PL-1)</a>.</p>`,
  src: "Plans PL-1 (11-428704); Caltrans 2018 Standard Specifications 20-3.01B(2)(a)."
},

{ h: "Planting symbols, existing trees and protection zones",
  lead: "Count every symbol and read every callout; when the two disagree, note both and ask which governs.",
  body: `<ul>
<li><strong>Trees:</strong> circle at mature canopy size with a trunk mark; style varies by species.</li>
<li><strong>Existing trees:</strong> light or dotted circles; “to remain,” “remove,” or an X through the symbol for removal.</li>
<li><strong>Shrubs:</strong> small circles, grouped, with a callout like “12 · #5 · ALO STR.”</li>
<li><strong>Dripline:</strong> canopy edge projected to the ground. <strong>TPZ:</strong> fenced zone limiting digging, storage and traffic. Costs: hand digging or boring, rerouted pipe, fence pay item, relocated staging, possibly an arborist. On private jobs look for an arborist report or tree protection plan.</li>
</ul>`,
  ex: `<figure class="fig"><img src="img/pdd/pp6-callouts-right.jpg" data-full="img/pdd/pp6-full.jpg" alt="PP-6 east end planting callouts: 60 each of five shrubs, compost, weed germination, wood mulch and temporary protection fence" loading="lazy"><figcaption><b>PP-6 east end, 11-428704.</b> One leader, a stack of callouts: 60 each of AEO HAW, ALO BLU, ALO STR, BAC PIL, SED NUS; 13 CY compost; 310 SQYD W Germ; 20 CY wood mulch; remove ground cover. —x—TPFR—x— = 220 LF of temporary protection fence. · tap to zoom</figcaption></figure>
<p>Tree protection on 11-428704 appears three times: ISS-1 note 8 (no storage within driplines), an IP-7 note keeping the supply line out of driplines, and TPFR on the planting sheets (PQ-1 total 1,120 LF).</p>`,
  watch: `<p>Main drawn through a dripline plus a note saying stay out is a conflict: ask how to build it, and price the slower method if no answer comes. A real symbol vs. callout mismatch on this job is in <a href="#m7-1">Module 7</a>.</p>`
},

{ h: "Hatches and on-center spacing",
  lead: "Groundcover, mulch and drip are hatched areas: measure the area, then convert with the spacing pattern; triangular spacing needs about 15% more plants than square.",
  body: `<ul>
<li>Every hatch matches a legend row; hatches overlap (groundcover in mulch in drip), so check each area against every hatch.</li>
<li>Square: plants = area ÷ s². Triangular: plants = area × 1.155 ÷ s².</li>
<li>If the pattern isn't stated, ask. Full planting takeoff: <a href="#m7-1">Module 7</a>.</li>
</ul>`,
  ex: `<p>2,400 SF of #1 at 3 ft o.c.: square 2,400 ÷ 9 = <strong>267</strong>; triangular 2,400 × 1.155 ÷ 9 = <strong>308</strong>. 41 plants difference on one bed.</p>
<figure class="fig"><img src="img/pdd/pl1-hatches.jpg" data-full="img/pdd/pl1-full.jpg" alt="PL-1 planting legend hatches for compost, weed germination, wood mulch, MEPA, existing trees and protection fence" loading="lazy"><figcaption><b>PL-1 hatches, 11-428704.</b> One hatch can be several jobs: diagonal = compost + weed germination + remove ground cover; horizontal adds wood mulch. Scalloped outline = MEPA. · tap to zoom</figcaption></figure>`
},

{ h: "Details: callouts and views",
  lead: "Details govern over the plan view and add the parts and depth the plan never shows; read the written dimensions, never scale a detail.",
  body: `<ul>
<li><strong>Private callout:</strong> split bubble, detail over sheet: “3 / L-5.1” = detail 3 on sheet L-5.1.</li>
<li><strong>Caltrans:</strong> ID and PLD sheets plus statewide Standard Plans, such as H4 sprinkler assembly revised as RSP H4 (revised standard plan), bound at the back of the set.</li>
<li>“(Mod)” in a title = standard detail modified for this job. Section cuts are lettered (A–A) and matched to the section drawing.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>View</th><th>Looking</th><th>Answers</th></tr></thead>
<tbody>
<tr><td>Plan</td><td>Straight down</td><td>How many, spacing, arrangement</td></tr>
<tr><td>Section</td><td>Sliced, from the side</td><td>Depth, layers (gravel, soil, pipe): labor</td></tr>
<tr><td>Elevation</td><td>Side, uncut</td><td>Heights: walls, signs, enclosures, pedestals</td></tr>
</tbody></table></div>`,
  ex: `<figure class="fig"><img src="img/pdd/id5-treewell.jpg" data-full="img/pdd/id5-full.jpg" alt="Tree well sprinkler assembly (Mod) detail with plan view and section view" loading="lazy"><figcaption><b>Tree Well Sprinkler Assembly (Mod), ID-5, 11-428704.</b> Plan: four bubblers 90° apart, 5' basin, 5' minimums. Section: 4" drainpipe filled with gravel, removable drain grate, check valve, riser, swing joint, 1" min to 2" max clearance at FG. · tap to zoom</figcaption></figure>
<p>One 24" box pine on the plan becomes, per ID-5 and PLD-1: 48" hole, 60" basin, staking, gravel sump, perforated PVC drain with purple grate, 4 bubblers on a swing joint, iron sulfate, slow-release fertilizer, 5 packets. Other ID sheets: antenna mast, master valve and flow sensor assembly, recycled-water sign and warning tape “continuously along the entire trench.”</p>`,
  watch: `<p>Valve box depth, gravel, thrust blocks, splices and staking are where “standard” stops being standard. Read every detail in your scope, and every TYP detail applies job-wide. Detail vs. plan precedence: <a href="#m5-1">Module 5</a>.</p>`,
  src: "Plans ID-1 to ID-6, PLD-1, RSP H4 (11-428704)."
},

{ h: "Worked example: detail to parts list",
  lead: "For every detail in scope, write a parts list with the math from its notes; that list is what you price.",
  body: `<p>Flow sensor assembly, 11-431064 irrigation details, 2" sensor on a 2" supply line.</p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Qty per assembly</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Flow sensor, size per plan</td><td>1 EA</td><td>Detail, legend</td></tr>
<tr><td>Straight PVC, no fittings</td><td>10 × 2" = 20" up + 5 × 2" = 10" down = 30"</td><td>Notes 1, 2</td></tr>
<tr><td>Valve box (Mod) or box extension, 2 side openings (must fit 30")</td><td>1 EA</td><td>Note 3</td></tr>
<tr><td>¾" gravel or crushed rock 6" min; woven wire cloth; No. 30 asphalt-saturated felt to seal openings</td><td>1 set</td><td>Detail</td></tr>
<tr><td>Couplings</td><td>As needed</td><td>Detail</td></tr>
<tr><td>Conduit and conductors to controller</td><td>LF from plan</td><td>Detail, plan</td></tr>
</tbody></table></div>`,
  watch: `<p>If the bid item or your assembly price already includes box and gravel, don't add them again. Pricing the lines: <a href="#m6-1">Module 6</a> and <a href="#m8-1">Module 8</a>.</p>`,
  src: "Caltrans contract 11-431064 plans, flow sensor detail notes 1 to 3."
},

{ h: "Quantity tables",
  lead: "Use quantity tables to check your takeoff and the bid item list, never as your count; read their footnotes.",
  body: `<p>IQ-1, 11-428704, 4" Class 315 main (LF):</p>
<div class="tablewrap"><table><thead><tr><th>IP-1</th><th>IP-2</th><th>IP-3</th><th>IP-4</th><th>IP-5</th><th>IP-6</th><th>IP-7</th><th>In conduits (IQ-2)</th><th>Total</th></tr></thead>
<tbody><tr><td class="num">440</td><td class="num">1,365</td><td class="num">1,210</td><td class="num">165</td><td class="num">1,150</td><td class="num">1,385</td><td class="num">1,130</td><td class="num">648</td><td class="num"><strong>7,493</strong></td></tr></tbody></table></div>
<p>6,845 on plan sheets + 648 in conduit = 7,493 LF = bid item 63. Other tables: laterals and heads by valve (IQ-1), conduit by station (IQ-2), plants by sheet and group (PQ-1). IQ-2 footnotes: “(N) not a separate pay item, for information only”; “* included on IQ-1.”</p>`,
  ex: `<p>If your IP-2 main is 1,000 LF vs. 1,365, look for a missed run or a bad calibration on that sheet. The IQ-1 tree well total (172) vs. bid item (180) is worked in the <a href="#plans-19">Plan Set Deep Dive</a>.</p>`,
  watch: `<p>Private quantity tables usually say “for reference only”: the takeoff is your responsibility. If a table and your takeoff disagree and you can't find why, ask; on lump sum state which you priced (<a href="#m13-1">Module 13</a>).</p>`
},

{ h: "Other disciplines: where trades meet",
  lead: "Most costly surprises sit where two trades meet: find each meeting point on every sheet that shows it, and treat “by others” as unconfirmed until the other trade's sheets show it too.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Meeting point</th><th>Sheets</th><th>Answer before bid day</th></tr></thead>
<tbody>
<tr><td>Water service, meter, POC</td><td>Civil utility, plumbing site, irrigation</td><td>Who taps, sets the meter, pays agency fees; where your pipe starts</td></tr>
<tr><td>Backflow and enclosure</td><td>Irrigation details, civil, plumbing</td><td>Who furnishes, installs, tests and certifies</td></tr>
<tr><td>Controller power</td><td>Electrical site plan, panel schedule</td><td>Who provides circuit, conduit, final connection</td></tr>
<tr><td>Sleeves under paving</td><td>Civil, hardscape, irrigation</td><td>Who installs, how many, size, before paving</td></tr>
<tr><td>Finish grade</td><td>Civil grading, landscape notes</td><td>Who does rough grade, who does fine grade</td></tr>
<tr><td>Existing utilities</td><td>Civil existing conditions, U-sheets</td><td>What you trench near or cross</td></tr>
<tr><td>Planters on structure, podiums</td><td>Architectural, structural</td><td>Drains, drain mat, waterproofing protection, lightweight soil</td></tr>
<tr><td>Edges, tree grates, root barrier, structural soil, area drains</td><td>Hardscape, civil</td><td>Who furnishes and installs; keep drains clear</td></tr>
<tr><td>Existing irrigation kept running</td><td>Removal (IR or demo), IP</td><td>Who waters existing plants during construction</td></tr>
</tbody></table></div>`,
  ex: `<p>11-428704: U-1 to U-7 show Otay Water District potable and recycled lines in the work area. E-1 shows an existing SDG&amp;E (San Diego Gas &amp; Electric) 120/240 V service with a 20 A breaker labeled “Irr” and 2 #10 conductors to the new controller enclosure: electrician's work, and the top three bidders in <a href="#m15-1">Module 15</a> all listed an electric service sub. 11-431064 put red “lava rock” gravel mulch, rock blanket and HDPE edging (with its own layout detail) inside the landscape set.</p>`,
  watch: `<p>Private POCs are often “stub-out by plumbing contractor” on one sheet and “by landscape contractor” on another. State in the proposal exactly where your work starts and write a clear exclusion (<a href="#m13-1">Module 13</a>). Pricing hardscape, grading and drainage: <a href="#m17-1">Module 17</a>.</p>`
},

{ h: "On-screen takeoff routine",
  lead: "Calibrate every sheet, one color per takeoff item, stop at match lines, then check totals by hand and against any quantity table.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Tool</th><th>Examples</th><th>Use</th></tr></thead>
<tbody>
<tr><td>PDF markup and measure</td><td>Bluebeam Revu; free readers with measure tools</td><td>Calibrate, length, area, count, markups, compare versions</td></tr>
<tr><td>Takeoff software</td><td>PlanSwift, On Center's On-Screen Takeoff</td><td>Items and assemblies flowing to the estimate</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Set up</b>Keep downloads untouched; work on a copy. Bookmark by sheet code. Build the sheet index (below). Stamp replaced sheets SUPERSEDED.</div></li>
<li class="hl"><div><b>Calibrate</b>On the scale bar or Caltrans 3" border bar, then confirm on two stations or a written dimension.</div></li>
<li><div><b>Item list</b>One measurement per takeoff line (“4" CL 315 main” LF, “#5 shrubs” count, “wood mulch” area), each its own color; legend on the cover.</div></li>
<li class="hl"><div><b>Measure</b>One sheet at a time, stop at match lines, zoom on crowded areas, add points on curves, note assumptions (“size not shown, 1" per note 5”).</div></li>
<li><div><b>Check and freeze</b>Export one row per item per sheet; compare to tables; re-measure one run per sheet by hand; save a dated PDF of what you priced.</div></li>
</ol>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Sheet</th><th>Code</th><th>Title</th><th>Rev / date</th><th>My scope?</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>24</td><td>ISS-1</td><td>Irrigation sprinkler schedule</td><td>03-22-21</td><td>Yes</td><td>8 notes priced</td></tr>
<tr><td>45</td><td>IQ-1</td><td>Irrigation quantities</td><td>Add. 1, 08-27-21</td><td>Yes</td><td>Replaced; 2" RCV now 3</td></tr>
<tr><td>57</td><td>E-1</td><td>Electric service (irrigation)</td><td>06-28-21</td><td>Check</td><td>Electrician quote</td></tr>
</tbody></table></div>
<p class="small">Sheet index template with sample rows from 11-428704.</p>`,
  watch: `<p>The two common software errors: a sheet never calibrated (it inherits the last sheet's scale) and a measurement on the wrong item. Spot-check every sheet against a rough hand number.</p>`
},

{ h: "Reading routine and conflict hunt",
  lead: "Read every set in the same order, first for understanding, and hunt conflicts on purpose; precedence decides who wins later, but only a pre-bid question protects your price.",
  body: `<p><strong>Order:</strong> title and index → swap in addenda → legends, schedules, abbreviations, general notes → irrigation from POC to end of main, every controller → planting hatches and symbols → details for each scope item → civil, electrical, architectural, traffic handling → quantity tables → questions list. Budget 1 to 2 h for a 10-sheet private set; about a half day for the 33 landscape sheets plus E-1, E-2 and utilities on 11-428704. Sheet-ranked order for that job: <a href="#plans-4">Plan Set Deep Dive</a>.</p>
<div class="tablewrap"><table>
<thead><tr><th>Compare</th><th>Look for</th></tr></thead>
<tbody>
<tr><td>Schedule vs. plan</td><td>Counts that differ; symbols missing from the legend</td></tr>
<tr><td>Plan vs. detail</td><td>Sizes, depths, parts; referenced detail missing</td></tr>
<tr><td>Note vs. note</td><td>General note vs. sheet note</td></tr>
<tr><td>Plan vs. specs</td><td>Product, test pressure, maintenance length</td></tr>
<tr><td>Quantity table vs. bid list</td><td>Rounding or real error</td></tr>
<tr><td>Landscape vs. other trades</td><td>Pipe through footings, trees over utilities, controller without power</td></tr>
<tr><td>Addendum vs. older sheets</td><td>Changed sheet whose dependent quantities didn't change</td></tr>
<tr><td>Plan vs. site</td><td>Existing conditions that aren't there at the job walk</td></tr>
</tbody></table></div>`,
  ex: `<p>Log columns: where (sheet, spot) · conflict · what you priced · question sent (date). It becomes your RFI list (<a href="#m12-1">Module 12</a>) and proposal clarifications.</p>`
},

{ h: "Real conflicts and hidden costs in Caltrans plan text",
  lead: "Real items from two San Diego Caltrans sets: some need a question, most are costs hiding in a note.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Job and sheet</th><th>Plans say</th><th>Action</th></tr></thead>
<tbody>
<tr><td>11-428704 IQ-1</td><td>Tree well assemblies total 172 (43 trees × 4); Bid Item List 180</td><td>Bidder inquiry; probably rounding</td></tr>
<tr><td>11-428704 WPC (water pollution control) sheets</td><td>Fiber roll 7,184 LF; bid list 7,190 LF</td><td>Rounding; note it, no question</td></tr>
<tr><td>11-428704 IQ-1, Addendum 1</td><td>2" RCV from 4 to 3</td><td>Re-price item 38; recheck that valve's laterals</td></tr>
<tr><td>11-428704 ISS-1 note 1</td><td>Heads, valves, main outside paved MVPs (maintenance vehicle pullouts); valves at exiting end</td><td>Check every MVP on the IP sheets</td></tr>
<tr><td>11-428704 ISS-1 note 6</td><td>Master valve and flow sensor conductors in 1" conduit</td><td>Price conduit, not direct-burial wire</td></tr>
<tr><td>11-431064 backflow detail</td><td>Copper meter to BPA; metal wrapped in 20 mil tape</td><td>Copper and wrap at every BPA</td></tr>
<tr><td>11-431064 PL-1</td><td>San Diego and Orange County stock only; brown-skinned Washingtonia</td><td>Tell the nursery before it quotes</td></tr>
<tr><td>11-431064 electrical notes</td><td>Verify service locations and voltages before work and ordering; pull box covers marked “CALTRANS” and “SERVICE IRRIGATION”</td><td>Put in the electrician's scope</td></tr>
</tbody></table></div>`,
  ex: `<p>“IQ-1 totals 172 tree well sprinkler assemblies; the Bid Item List shows 180 for item 51. Please confirm the quantity.” Sheet, item, conflict, one sentence.</p>`,
  src: "Caltrans 11-428704 plans (ISS-1 notes 1 and 6, IQ-1, WPC quantities) and Addendum 1; Caltrans 11-431064 plans (irrigation details, PL-1, electrical notes)."
},

{ h: "Mistakes that cost money",
  lead: "Plan-reading errors repeat across a whole job, so a small miss becomes a large dollar error; the wrong move in every case is guessing silently.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Trap</th><th>Example cost (practice prices)</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Half-size print not caught</td><td>1,000 LF measured, 2,000 true × $12/LF = $12,000 low</td><td>Check the bar on every sheet</td></tr>
<tr><td>Double count at match line</td><td>6 trees × $650 = $3,900 high</td><td>Mark match lines; stop there</td></tr>
<tr><td>TYP valve detail missed (isolation valve, bigger box)</td><td>80 RCV × $95 = $7,600 low</td><td>Read every TYP detail</td></tr>
<tr><td>Pricing a sheet an addendum replaced</td><td>Wrong quantities</td><td>Swap sheets day of receipt</td></tr>
<tr><td>Existing (light) items priced as new, or protect/remove/operate missed</td><td>Labor missed or added</td><td>Read the verb after “Exist”</td></tr>
<tr><td>“By others” only on your sheets</td><td>POC, sleeves, power come back to you</td><td>Confirm on the other trade's sheets or exclude</td></tr>
<tr><td>Notes on another sheet; removal sheets skipped</td><td>Labor on every item</td><td>Read every general note and IR/demo sheet</td></tr>
<tr><td>Symbol not in any legend</td><td>Unknown</td><td>RFI; price closest legend item and say so</td></tr>
<tr><td>Scan with no scale bar</td><td>Wrong scale</td><td>Calibrate on longest dimension, verify a second; ask for the original file</td></tr>
<tr><td>“Match existing” note</td><td>Wrong product</td><td>Photograph at job walk; quote that product</td></tr>
<tr><td>Schedule vs. symbol counts differ</td><td>Over or under</td><td>RFI; state which you priced</td></tr>
</tbody></table></div>`,
  ex: `<p>One careless read: $19,600 low and $3,900 high at once. Errors don't cancel.</p>`
},

{ t: "scorer", id: "plancheck", h: "Plan reading self-check",
  lead: "Bid-ready check before pricing. 2 = done and checked, 1 = done but unsure (write a question), 0 = not done. Saved in this browser.",
  items: [
    ["Complete set", "Sheet count matches the index; all addenda swapped in; issue date noted"],
    ["Scale checked", "Every sheet calibrated on a scale bar and checked on a known distance"],
    ["Lines and abbreviations", "Every line type and abbreviation on the set understood; unknowns listed"],
    ["Legends learned", "Every irrigation symbol, plant code and hatch matched to the legend"],
    ["Water source and power", "POC, meter, backflow, controller power found, and who builds each"],
    ["Existing and removals", "Every existing item marked remain, remove, salvage, modify or operate"],
    ["Details read", "Every detail in your scope turned into a parts list, including TYP notes"],
    ["Other disciplines", "Civil, grading, hardscape, electrical and architectural sheets checked for conflicts"],
    ["Quantities checked", "Your counts compared with any quantity tables or bid item list"],
    ["Questions written", "Every conflict and gap written as an RFI or proposal clarification"]
  ],
  bands: [
    [17, "Ready to price", "Your read of the set is solid. Keep the notes with the estimate."],
    [11, "Gaps to close", "Send questions for every line scored 1 before you price those items."],
    [0, "Keep reading", "Too many open items. Finish reading the set before you price."]
  ]
},

{ t: "terms", h: "Words to know",
  lead: "Module-specific terms. Abbreviation tables: <a href=\"#m4-7\">general and site</a>, <a href=\"#m4-9\">irrigation and planting</a>; everything else is in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Sheet index", "List of every sheet in the set, on the title sheet."],
    ["Title block", "Border box with sheet title, number, stamp, dates, scale and revisions."],
    ["Graphic scale bar", "Drawn ruler that stays true when the sheet is reduced."],
    ["Match line", "Line where a plan continues on another sheet."],
    ["Key map", "Small site map showing which area a sheet covers."],
    ["Station (Sta)", "Distance in feet along a named survey line: 262+48 = 26,248 ft."],
    ["Offset / Lt / Rt", "Sideways distance from the line, left or right looking up-station."],
    ["Contour", "Line connecting points of equal elevation."],
    ["Slope ratio", "Run:rise, like 2:1."],
    ["Mainline (supply line)", "Pipe under constant pressure upstream of the valves."],
    ["Lateral", "Pipe downstream of a valve, pressurized only when the zone runs."],
    ["Valve callout", "Tag giving controller, station, size and flow."],
    ["Sprinkler schedule", "Table of head types with model, radius, pressure and flow."],
    ["Plant legend", "Table of plants with size, spacing and install requirements."],
    ["Plant code", "Abbreviated botanical name, like ALO STR."],
    ["Hatch", "Fill pattern marking an area such as groundcover or mulch."],
    ["Triangular spacing", "Offset rows; about 15% more plants than square spacing."],
    ["Dripline / TPZ", "Canopy edge / tree protection zone."],
    ["Keynote", "Numbered plan tag explained in a list on the sheet."],
    ["Detail callout", "Bubble giving detail and sheet, like 3 / L-5.1."],
    ["Section / elevation", "Cut-through side view / uncut side view."],
    ["(Mod)", "Standard detail modified for this job."],
    ["Revision cloud / delta", "Outline and numbered triangle marking a change."],
    ["Addendum", "Formal numbered change to bid documents before bids are due."],
    ["Quantity table", "Designer's quantities by sheet (IQ, PQ on Caltrans): a check, not your count."]
  ]
},

{ t: "quiz", id: "m4", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "You print a 1\" = 50' sheet on 11×17. The 3\" Caltrans border bar measures 1.5\". A main run measures 2.6\". How long is it?", a: ["130 ft", "260 ft", "65 ft"], c: 1, why: "1.5 ÷ 3 = 0.5, so the print is 1\" = 100'. 2.6 × 100 = 260 ft." },
    { q: "A note says install 4\" main from Sta 241+30 to Sta 249+70 on the same line. How much main?", a: ["840 ft", "8.4 ft", "1,420 ft"], c: 0, why: "24,970 − 24,130 = 840 ft." },
    { q: "An L-shaped bed at 1\" = 20' measures 3.0\" × 1.5\" plus 1.0\" × 2.0\". Area?", a: ["1,300 SF", "2,600 SF", "5,200 SF"], c: 1, why: "60 × 30 = 1,800 SF plus 20 × 40 = 800 SF = 2,600 SF." },
    { q: "1,800 SF of shrubs at 3 ft o.c., triangular spacing. About how many plants?", a: ["200", "231", "600"], c: 1, why: "1,800 × 1.155 ÷ 9 = 231. Square spacing would be 200." },
    { q: "A tree well valve serves 11 trees, 4 bubblers each, with the ISS-1 chart (1\" for 1 to 24, 1¼\" for 25 to 44). Flow and pipe size leaving the valve?", a: ["22 GPM, 1¼\"", "44 GPM, 1½\"", "22 GPM, 1\""], c: 0, why: "44 bubblers × 0.5 = 22 GPM; 44 falls in the 25 to 44 band, so 1¼\"." },
    { q: "Wood mulch goes on a 2:1 slope that measures 4,000 SF on plan. What area do you price?", a: ["4,000 SF", "About 4,470 SF", "8,000 SF"], c: 1, why: "Surface factor for 2:1 is √(2² + 1²) ÷ 2 = 1.118; 4,000 × 1.118 ≈ 4,470 SF." },
    { q: "On a Caltrans quantity table, an item marked “(N)” means:", a: ["New work you price", "Not a separate pay item; include its cost elsewhere if it's your work", "Existing to remain"], c: 1, why: "IQ-2: “(N) not a separate pay item, for information only.” On private sets (N) usually means new." },
    { q: "The irrigation valve detail is marked TYP and adds an isolation valve and larger box. The plan shows 80 RCVs. What do you price?", a: ["One isolation valve at the valve the detail points to", "80 isolation valves and 80 larger boxes", "Nothing until an RFI is answered"], c: 1, why: "TYP applies to every similar item: all 80 valves." },
    { q: "Only your landscape sheets say controller power is “by others.” The E-sheets show no circuit. Best move?", a: ["Assume the electrician has it", "Ask, and if unresolved write a clear exclusion stating where your work starts", "Silently add a full electrical price"], c: 1, why: "“By others” must appear on the other trade's sheets. Otherwise ask and exclude in writing." },
    { q: "Your IP-2 takeoff shows 1,000 LF of 4\" main; IQ-1 shows 1,365 LF. Other sheets match. Most likely cause?", a: ["IQ-1 is wrong; use your number", "A missed run or bad calibration on IP-2", "Rounding"], c: 1, why: "A sheet-specific 27% gap with others matching points to that sheet's calibration or a missed run. Recheck before asking." }
  ]
},

{ t: "practice", id: "m4", h: "Practice assignments",
  lead: "Real plans, a PDF tool with measure and markup. These extend, and don't repeat, the Deep Dive practice.",
  items: [
    { h: "Index the set and swap in Addendum 1", hrs: 0.5, d: "<p>From <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>, download the Plans and Addendum 1 plans. Build the sheet index (number, code, title, date, in scope) for sheets 24 to 58, mark the sheets Addendum 1 replaced, and swap them into a working copy.</p>" },
    { h: "Irrigation markup, scale and stationing", hrs: 1.25, d: "<p>On IP-1 and IP-7, color-mark the POC (IP-7), new 4\" main, controllers and antenna masts, conduit crossings, gate valves and match lines; decode five valve callouts. Check IP-1 main against 440 LF on IQ-1. Calibrate IP-5 and measure 262+48 Rt to 264+37 Rt against 189 ft. Compute the Sta 235+50 to 249+70 main. Print one sheet at 11×17 and convert three runs with the corrected scale.</p>" },
    { h: "Planting sheet against PQ-1", hrs: 0.75, d: "<p>On PP-1, color each hatch and symbol, count #1 and 24\" box symbols, sum the cutting callouts, and compare to the PP-1 row on PQ-1. List every difference.</p>" },
    { h: "Details to parts lists", hrs: 1, d: "<p>From <a href=\"#lab-11-431064\">Real Bid Lab · 11-431064</a>, write parts lists for the backflow preventer assembly and one valve detail, with every note and length rule; mark supplier-quote lines vs. labor-only. Then follow a 24\" box pine on 11-428704 from PP to PLD-1 and ID-5 and list what the details add, and record the controller power source from E-1.</p>" },
    { h: "Index a private or City set", hrs: 1.25, d: "<p>Get a current commercial landscape set (GC invitation, <a href=\"https://www.sandiego.gov/purchasing/bids-contracts\" target=\"_blank\" rel=\"noopener\">City bid page</a> or an agency PlanetBids portal). Build the sheet index, find the POC, controller power and sleeve sheets, list every abbreviation and line type not covered in this module (look them up in the <a href=\"#dict\">Bid Dictionary</a>), and note five symbols, notes or codes that differ from the Caltrans set.</p>" },
    { h: "Conflict hunt and bidder questions", hrs: 1, d: "<p>On 11-428704 or 11-431064, find five conflicts, gaps or hidden costs not listed in this module. For each: sheet, conflict, what you'd price, and a one- or two-sentence bidder inquiry.</p>" }
  ]
},

{ h: "Module 4 summary",
  lead: "Read the whole set in a fixed order, measure only from verified scales, and turn every note and detail into a priced line or a written question.",
  body: `<ul>
<li>Know the set type (private L-sheets vs. Caltrans codes), get every discipline, and price only current sheets.</li>
<li>Verify scale on every sheet; half size doubles the scale; stations give lengths directly; stop at match lines.</li>
<li>Line weight separates new from existing; the verb after “Exist” sets the cost. The set's own abbreviation list governs.</li>
<li>Read irrigation from POC downstream; check flows and pipe sizes against the schedule; each valve is a kit.</li>
<li>Count symbols and read callouts; convert hatches with the right spacing pattern; respect TPZs.</li>
<li>Details govern and hide parts and depth: make a parts list for each.</li>
<li>Meeting points with other trades, quantity-table checks and a logged conflict hunt close the read.</li>
</ul>
<p><strong>Next: <a href="#m5-1">Module 5 · Reading Specifications</a></strong></p>`
}
]
});
