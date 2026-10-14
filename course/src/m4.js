(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 4, hours: 8, title: "Reading Landscape and Irrigation Plans",
slides: [

{ t: "cover",
  h: "Reading Landscape and Irrigation Plans",
  lead: "You can't price what you can't read. This module teaches you to open a commercial plan set, find every sheet that touches your scope, measure from it, and understand every symbol and note on it.",
  objectives: [
    "Explain what a plan set is and find any sheet fast using the index and sheet codes",
    "Read scales, check the scale on a PDF or half-size print, and measure distances",
    "Read north arrows, match lines and stationing like Sta 262+48",
    "Read irrigation and planting legends, schedules, notes and callouts",
    "Follow a detail callout to the right detail and know what it adds to your price",
    "Find the civil, utility and electrical sheets that hold your water and power",
    "Spot revisions and addenda, and avoid the most common plan-reading traps"
  ],
  time: [["Reading and slides", "2 h"], ["Practice assignments", "6 h"], ["Module total", "8 h"]],
  body: `<p>The running example is a real plan set: Caltrans contract 11-428704, the I-805 recycled-water conversion and planting in Chula Vista (the whole bid is walked through in <a href="#m15-1">Module 15</a>). Download it now from <a href="#lab-11-428704">Real Bid Lab · 11-428704</a> and keep it open while you read. The practice has you mark it up for real.</p>`,
  src: "Caltrans contract 11-428704: project plans (65 sheets, approved June 28, 2021) and Addendum 1 plans."
},

{ h: "What a plan set is",
  lead: "A plan set is the drawings for one project. It shows where the work goes and how much of it there is. The specifications (Module 5) tell you the quality and the methods.",
  body: `<ul>
<li>A <strong>sheet</strong> is one drawing page. A commercial set can have 5 sheets (a small retail pad) or several hundred (a school or freeway job).</li>
<li>Each design discipline draws its own sheets: the <strong>landscape architect (LA)</strong> draws irrigation and planting, the <strong>civil engineer</strong> draws grading, utilities and storm drains, the <strong>electrical engineer</strong> draws power, and the <strong>architect</strong> draws buildings.</li>
<li>Your scope lives mostly on the landscape sheets. But your water source, your power and many of your conflicts live on the other sheets.</li>
<li>On public jobs the agency gives you the <strong>bid item list</strong> with quantities. On most private jobs you do your own takeoff (Modules 6 and 7) from these sheets.</li>
</ul>`,
  ex: `<p>The 11-428704 set has 65 sheets. Only 33 of them (sheets 24 to 56) are landscape sheets. A landscape estimator who reads only those 33 will miss the traffic handling (sheets 19 to 23), the utilities to avoid when trenching (11 to 17) and the controller power (57 and 58).</p>`,
  watch: `<p>Never bid from a partial set. A GC may send you “just the landscape sheets.” Ask for the full set, or at least the civil utility sheets, the electrical site plan and the architectural site plan. If you can't get them, list that in your proposal as an assumption (Module 13).</p>`
},

{ h: "Sheet order and numbering",
  lead: "Sheets are grouped by discipline, in a standard order. The sheet code tells you the discipline before you even look at the drawing.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Typical private set</th><th>What's on it</th><th>11-428704 (Caltrans)</th></tr></thead>
<tbody>
<tr><td>G or T: title sheet, sheet index</td><td>Project name, location map, list of every sheet</td><td>Sheet 1: Title and location map, index</td></tr>
<tr><td>C: civil (grading, utilities, storm drain)</td><td>Grades, water service, meters, sleeves under paving</td><td>PC-1 project control; U-1 to U-7 utility plans</td></tr>
<tr><td>L: landscape notes, hardscape, layout</td><td>General notes, walls, paving, boulders, DG</td><td>(none; no hardscape on this job)</td></tr>
<tr><td>L or IR: irrigation plans</td><td>Pipe, valves, heads, controller, POC</td><td>ISS-1 schedule; IR-1 to 7 removal; IP-1 to 7 plans</td></tr>
<tr><td>L: irrigation details</td><td>How each piece is built</td><td>ID-1 to ID-6; IQ-1, IQ-2 quantities</td></tr>
<tr><td>L or PL: planting plans</td><td>Plant locations, groundcover areas</td><td>PL-1 legend; PP-1 to 7 plans</td></tr>
<tr><td>L: planting details</td><td>Tree and shrub planting, staking</td><td>PLD-1 details; PQ-1 quantities</td></tr>
<tr><td>E: electrical</td><td>Power to the controller, conduit</td><td>E-1, E-2 electric service for irrigation</td></tr>
<tr><td>A: architectural</td><td>Buildings, planters, podium decks</td><td>(none)</td></tr>
</tbody></table></div>`,
  ex: `<p>Every sheet carries two numbers. On 11-428704, the irrigation sprinkler schedule is <strong>sheet 24 of 65</strong> (its place in the set) and <strong>ISS-1</strong> (its code). Addendum 1 says “plan sheets 22, 23, 45, and 56 are replaced.” Sheet 45 is IQ-1 and sheet 56 is PQ-1. You have to translate sequence numbers into codes to know what changed.</p>`,
  deeper: `<p>Most private design firms use the letter codes of the U.S. National CAD Standard (G general, C civil, L landscape, A architectural, E electrical), with their own numbering after the letter, such as L-1.0 or L2.01. Caltrans uses its own codes: I-sheets for irrigation (ISS, IR, IP, ID, IQ), P-sheets for planting (PL, PP, PLD, PQ), and Q at the end of a code for a quantity sheet.</p>`
},

{ h: "The title block: read it first on every sheet",
  lead: "The box along the edge of each sheet tells you what the sheet is, who signed it, what scale it is, and whether it has been revised.",
  body: `<ul>
<li><strong>Sheet title and code:</strong> “IRRIGATION PLAN · IP-1”.</li>
<li><strong>Sheet number and total:</strong> “32 of 65”. Check that you have them all.</li>
<li><strong>Project:</strong> name, contract or project number, location.</li>
<li><strong>Designer's stamp and signature:</strong> the licensed landscape architect who is responsible for the design.</li>
<li><strong>Dates:</strong> plans approval date, plot date, issue date (for example “Bid Set” or “100% CD”).</li>
<li><strong>Revision block:</strong> each revision's number, date and description.</li>
<li><strong>Scale:</strong> often in the title block, sometimes under each drawing.</li>
</ul>`,
  ex: `<p>On 11-428704 every landscape sheet shows the landscape architect's stamp, a plans approval date of 06-28-21, the route and post miles (11 SD 805 3.4/5.1), and “SCALE: 1" = 50'” on the plan sheets. The border also has a small bar labeled “RELATIVE BORDER SCALE IS IN INCHES” marked 0 to 3. You'll use that bar on the next slides.</p>`,
  watch: `<p>Check the issue name. A set marked “Preliminary,” “50% CD” or “Not for Construction” is not final. You can still bid it if asked, but say in your proposal which set and date you priced.</p>`
},

{ h: "Scales: turning inches into feet",
  lead: "A scale says how many real feet one inch on the paper stands for. 1\" = 50' means every inch on the sheet is 50 feet on the ground.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Scale</th><th>Where you'll see it</th><th class="num">1 inch on paper =</th></tr></thead>
<tbody>
<tr><td>1" = 10'</td><td>Small sites, courtyards, enlarged areas</td><td class="num">10 ft</td></tr>
<tr><td>1" = 20'</td><td>Most commercial site landscape plans</td><td class="num">20 ft</td></tr>
<tr><td>1" = 30'</td><td>Larger sites, parks</td><td class="num">30 ft</td></tr>
<tr><td>1" = 50'</td><td>Long corridors (all IP and PP sheets on 11-428704)</td><td class="num">50 ft</td></tr>
<tr><td>1/8" = 1'-0"</td><td>Architect's scale, building plans</td><td class="num">8 ft</td></tr>
<tr><td>NTS / No scale</td><td>Most details</td><td class="num">Don't measure</td></tr>
</tbody></table></div>
<p>Landscape and civil sheets use an <strong>engineer's scale</strong> (10, 20, 30, 40, 50, 60 parts per inch). Architects use an <strong>architect's scale</strong> (fractions of an inch per foot). Use the ruler that matches.</p>`,
  ex: `<p><strong>Worked example.</strong> On IP-1 (1" = 50'), you measure a run of new main at 3.4 inches.</p>
<p>3.4 in × 50 ft per in = <strong>170 ft</strong>.</p>
<p>A planting area on a 1" = 20' sheet measures 4.5" by 2.0". That's (4.5 × 20) × (2.0 × 20) = 90 ft × 40 ft = <strong>3,600 SF</strong>. Note that area grows with the square of the scale: the same rectangle on a 1" = 40' sheet would be four times bigger, 14,400 SF.</p>`,
  watch: `<p>A sheet can hold drawings at different scales: a plan at 1" = 20' and an enlargement at 1" = 10' side by side. Read the scale under each drawing, not just the title block.</p>`
},

{ h: "Checking the scale on PDFs and half-size prints",
  lead: "A scale is only true at the full printed size. Shrink the sheet and every measurement shrinks with it. Always check before you measure.",
  body: `<ol class="steps">
<li><div><b>Know the full size</b>The 11-428704 sheets are 22" × 34" (that's the page size in the PDF). Many private sets are 24" × 36" or 30" × 42".</div></li>
<li class="hl"><div><b>Find a check bar</b>Use the graphic scale bar (a ruler drawn on the sheet), or on Caltrans sheets the “relative border scale” bar, which is exactly 3 inches long at full size.</div></li>
<li><div><b>Measure the bar</b>If the 3-inch bar measures 3 inches, the printed scale is true. If it measures 1.5 inches, the print is half size.</div></li>
<li class="hl"><div><b>Fix the scale</b>Half size doubles the scale: 1" = 50' becomes 1" = 100'. In software, calibrate on the bar or on a long written dimension.</div></li>
<li><div><b>Check a known distance</b>Measure something with a written dimension or two stations (next slides). If it doesn't match, stop and recalibrate.</div></li>
</ol>`,
  ex: `<p><strong>Worked example.</strong> You print IP-3 on 11" × 17" paper. The relative border scale bar measures 1.5" instead of 3". Your ratio is 1.5 ÷ 3 = 0.5, so the print is half size. A run that measures 2.2" on your print is 2.2 × 100 = <strong>220 ft</strong>, not 110 ft.</p>`,
  watch: `<p>PDFs are often scanned, reduced or exported at odd sizes. The scale written on the sheet tells you the drawing scale at full size, not the scale of what's on your screen. Calibrate every sheet in your takeoff software, even sheets in the same set.</p>`
},

{ h: "North arrows and match lines",
  lead: "The north arrow tells you which way the sheet faces. Match lines tell you where one sheet ends and the next begins.",
  body: `<ul>
<li><strong>North arrow:</strong> every plan sheet has one. North is often <em>not</em> up. Long sites are rotated so they fit across the sheet. On the I-805 sheets the freeway runs north-south in real life but across the sheet on paper.</li>
<li>Use the north arrow to match the plan to the site walk, to the civil sheets and to the sun (shade plants on the north side of buildings).</li>
<li><strong>Match line:</strong> a heavy line with a note like “MATCH LINE SEE SHEET IP-2.” Everything past it is drawn on the other sheet.</li>
<li><strong>Key map:</strong> a small site map on each sheet showing which part of the project that sheet covers. Large private sets almost always have one.</li>
</ul>`,
  ex: `<p>IP-1 ends at the right edge with “MATCH LINE SEE SHEET IP-2.” Main that runs up to the match line is counted on IP-1; main past it is counted on IP-2. Sheet IQ-1 lists the 4" main by sheet: IP-1 has 440 LF and IP-2 has 1,365 LF.</p>`,
  watch: `<p>The most common double count happens at match lines: a valve or tree drawn on both sheets, or a pipe run measured twice. Mark the match line on both sheets in your takeoff and stop exactly there.</p>`
},

{ h: "Stationing: the address system for long jobs",
  lead: "On roads, medians and pipelines, locations are given by station: the distance in feet along a named survey line. Sta 262+48 means 262 hundreds plus 48 feet, or 26,248 feet from the start of that line.",
  body: `<ul>
<li><strong>How to read it:</strong> the number before the plus sign is hundreds of feet; after it, feet. 262+48 = 26,200 + 48 = 26,248 ft.</li>
<li><strong>The line name matters:</strong> 11-428704 has several lines: “SD-805” (the freeway), “O-6R” and “O-2” (ramps), “M-8”. Sta 261+00 on “O-6R” is not the same place as Sta 261+00 on “SD-805”.</li>
<li><strong>Lt / Rt:</strong> left or right of the line, looking in the direction the stations increase.</li>
<li><strong>Offset:</strong> the distance sideways from the line, like “12' Rt.”</li>
<li>Tick marks along the line show each 100-foot station; big labels (225, 230, 235) every 500 feet.</li>
</ul>`,
  ex: `<p><strong>Worked example from IQ-2 (irrigation conduit table):</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>Sheet</th><th>Line</th><th>Station</th><th>Side</th><th class="num">8" PVC conduit</th><th class="num">4" main inside</th></tr></thead>
<tbody>
<tr><td>IP-4</td><td>“SD-805”</td><td>262+48</td><td>Lt</td><td class="num">85 LF</td><td class="num">85 LF</td></tr>
<tr><td>IP-5</td><td>“SD-805”</td><td>262+48</td><td>Rt</td><td class="num">85 LF</td><td class="num">85 LF</td></tr>
<tr><td>IP-5</td><td>“SD-805”</td><td>264+37</td><td>Rt</td><td class="num">(122 LF CHDPE)</td><td class="num">122 LF</td></tr>
</tbody></table></div>
<p>Distance between the two crossings on the right side: 264+37 − 262+48 = 26,437 − 26,248 = <strong>189 ft</strong>. On a 1" = 50' sheet that's 189 ÷ 50 = <strong>3.78 inches</strong>. Measure it on IP-5 to check your scale.</p>`,
  deeper: `<p>A note on IP-1 says “Install 4" supply line west of existing berm from Sta 235+50 to Sta 249+70 'SD-805' line.” That's 24,970 − 23,550 = 1,420 ft of main defined by stations alone. When a note gives stations, you can compute the length without measuring.</p>`
},

{ h: "Irrigation symbols: from the water source to the valve",
  lead: "Learn the legend before you look at the plan. Every irrigation set starts at the point of connection and works downstream to the valves.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part (common abbreviation)</th><th>What it does</th><th>How it's priced</th></tr></thead>
<tbody>
<tr><td>Point of connection (POC)</td><td>Where your system starts: a tap, a meter, a stub-out left by the plumber or civil contractor</td><td>EA; check who installs it</td></tr>
<tr><td>Water meter (WM; RWM for recycled)</td><td>Measures water; usually set by the water agency</td><td>Often by others; agency fees excluded</td></tr>
<tr><td>Backflow preventer (BFP, RP, DC)</td><td>Keeps irrigation water out of drinking water</td><td>EA, plus enclosure and testing</td></tr>
<tr><td>Master valve (MV, RCV-M)</td><td>Shuts the mainline when no zone is running</td><td>EA</td></tr>
<tr><td>Flow sensor (FS)</td><td>Detects breaks and high flow</td><td>EA, plus wire to controller</td></tr>
<tr><td>Controller (Irr C, ICC = enclosure)</td><td>The timer; on commercial jobs often a smart or central-control unit</td><td>EA, plus pad, power, antenna</td></tr>
<tr><td>Mainline (supply line, main)</td><td>Pipe under constant pressure, upstream of the valves; heavy solid line</td><td>LF by size and class</td></tr>
<tr><td>Remote control valve (RCV)</td><td>Opens one zone; callout shows controller and station</td><td>EA by size</td></tr>
<tr><td>Quick coupler (QC)</td><td>Hose hookup on the mainline</td><td>EA</td></tr>
<tr><td>Gate or ball valve (GV)</td><td>Manual shutoff to isolate parts of the main</td><td>EA by size</td></tr>
<tr><td>Sleeve / conduit</td><td>Pipe under paving that carries main, lateral or wire</td><td>LF by size; check who installs</td></tr>
</tbody></table></div>`,
  ex: `<p>On 11-428704 the legend adds recycled-water parts: RWCA (recycled water connection assembly), RWM, CCTS (cross connection test station), RWWS (recycled water warning sign), CARV (combination air release valve), antenna mast and 2W (two-wire cable). The water source is an existing Otay Water District recycled-water meter at Palomar Street (IP-7).</p>`,
  watch: `<p>Mainline is pressurized all the time; laterals (downstream of the valves) are only pressurized when the zone runs. Specs usually require heavier pipe and deeper cover for the main. Never price main and lateral at the same rate.</p>`
},

{ h: "Irrigation symbols: heads, drip and the sprinkler schedule",
  lead: "Each head type has its own symbol. The sprinkler schedule (or irrigation legend) lists every type with its make, model, radius, pressure and flow.",
  body: `<ul>
<li><strong>Spray heads:</strong> fixed spray, short throw (about 4 to 15 ft). Symbols show the arc: full, half, quarter circle.</li>
<li><strong>Rotors:</strong> gear-driven or rotary nozzles, longer throw (about 15 to 50+ ft).</li>
<li><strong>Bubblers:</strong> flood water into a tree or shrub basin.</li>
<li><strong>Drip:</strong> usually shown as a hatched area with a note (in-line drip tubing at a set spacing) and a control zone kit at the valve. You measure the area, then figure the tubing.</li>
<li><strong>Lateral pipe:</strong> thinner or dashed line, size labeled on the run, or sized by a chart.</li>
</ul>`,
  ex: `<p>Real rows from ISS-1 (11-428704):</p>
<div class="tablewrap"><table>
<thead><tr><th>Type</th><th class="num">Radius</th><th class="num">Pressure</th><th class="num">Flow</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Riser sprinkler assembly (gear driven), type 5</td><td class="num">40 ft</td><td class="num">50 psi</td><td class="num">3.5 GPM</td><td>¾" inlet, on 10" riser</td></tr>
<tr><td>Pop-up sprinkler assembly (gear driven), type 6</td><td class="num">40 ft</td><td class="num">50 psi</td><td class="num">3.5 GPM</td><td>12" pop-up</td></tr>
<tr><td>Riser sprinkler assembly (gear driven), type 7</td><td class="num">48 ft</td><td class="num">50 psi</td><td class="num">7.5 GPM</td><td></td></tr>
<tr><td>Tree well sprinkler assembly (flood bubbler)</td><td class="num">n/a</td><td class="num">see sheet</td><td class="num">0.5 GPM</td><td>4 per 24" box tree</td></tr>
</tbody></table></div>
<p>The pipe sizing chart on the same sheet: 1" for 1 to 24 bubblers, 1¼" for 25 to 44, 1½" for 45 to 60, 2" for 61 to 100 (at 0.5 GPM each). Note 5 says any lateral not labeled must be 1", or as shown on the pipe sizing charts.</p>`,
  watch: `<p>On a private job the schedule usually names the make and model, sometimes with “or equal.” Price exactly the model shown. A cheaper “equal” must be approved (Module 5), and you may not get approval after you've won.</p>`
},

{ h: "Notes, keynotes and callouts",
  lead: "Notes are part of the contract. A single general note can add hours of labor to every valve or head on the job.",
  body: `<ul>
<li><strong>General notes:</strong> rules for the whole sheet or set, usually in a numbered list. Read every one.</li>
<li><strong>Keynotes:</strong> a number or letter in a symbol (a hexagon or circle) on the plan, explained in a keynote list on the side. Common on private sets.</li>
<li><strong>Callouts:</strong> text with a leader line pointing to one thing: a pipe size, a valve label, “Exist CAP”.</li>
<li><strong>Valve callouts:</strong> on 11-428704, a tag like “97G-26” means controller '97G', station 26.</li>
<li><strong>Abbreviations:</strong> “Exist” means existing. “(E)” and “(N)” mean existing and new on many private sets, but on Caltrans quantity tables “(N)” means <em>not a separate pay item</em>. Always read the abbreviation list on that set.</li>
</ul>`,
  ex: `<p>Real general notes on ISS-1 and what they cost you:</p>
<ul>
<li>Note 2: every 90° turn in the main needs two 45° elbows. (More fittings and labor.)</li>
<li>Note 3: all piping, equipment and sprinkler caps must be purple or labeled per San Diego County DEH rules for recycled water. (Purple parts cost more.)</li>
<li>Note 4: no ponding, runoff or overspray of recycled water. (Adjustment time, maybe different nozzles.)</li>
<li>Note 7: Calsense flow checking must be enabled at all times. (Programming and troubleshooting time.)</li>
<li>Note 8: no storage of materials or equipment within the dripline of existing trees. (Plan your staging.)</li>
</ul>`,
  watch: `<p>Notes on one sheet often apply to others. A “typical” note on the first irrigation sheet usually applies to every irrigation sheet. If a note seems to change your scope, it does, until an RFI says otherwise (Module 12).</p>`
},

{ h: "The planting legend and schedule",
  lead: "The plant legend is your shopping list. It tells you every species, the container size, the spacing and how each plant is installed.",
  body: `<p>Columns you'll see on most planting schedules:</p>
<ul>
<li><strong>Symbol</strong> (what it looks like on the plan), <strong>botanical name</strong> and <strong>common name</strong></li>
<li><strong>Size:</strong> #1 (1-gallon), #5, #15, 24" box, 36" box, flats, plugs, cuttings</li>
<li><strong>Quantity</strong> (sometimes; often you count), and <strong>spacing</strong> for groundcover and shrub masses</li>
<li><strong>Remarks:</strong> staking, multi-trunk, standard, matched specimens, water use (WUCOLS rating)</li>
</ul>`,
  ex: `<p>Caltrans PL-1 on 11-428704 has more columns than most: plant group (size), plant number, symbol, botanical and common name, hole diameter and depth, basin type, plant area (SF), wood mulch (CY), staking, application rates for iron sulfate and slow-release fertilizer, packet fertilizer, on-center spacing, minimum planting distance from the traveled way, edge of pavement, fence, wall and ditches, and remarks.</p>
<div class="tablewrap"><table>
<thead><tr><th>Group (size)</th><th>Example</th><th>Spacing</th><th>Extra work from the legend</th></tr></thead>
<tbody>
<tr><td>A (#1)</td><td>Salvia 'Bee's Bliss'</td><td>6 ft o.c.</td><td>Hole sized to the root ball, 1 fertilizer packet</td></tr>
<tr><td>B (#5)</td><td>Aloe striata 'Ghost Aloe'</td><td>3 ft o.c.</td><td>2 fertilizer packets</td></tr>
<tr><td>H (cutting)</td><td>Carpobrotus edulis (hottentot fig)</td><td>1 ft o.c.</td><td>37,980 SF and 14,020 SF areas, fertilizer per 1,000 SF</td></tr>
<tr><td>K (24" box)</td><td>Pinus canariensis, Pinus eldarica</td><td>As shown</td><td>48" hole, 60" basin, staking, 5 packets, 40 ft from traveled way</td></tr>
</tbody></table></div>`,
  deeper: `<p>Caltrans uses letters for container sizes in Standard Specifications section 20-3.01B(2)(a): A = No. 1 container, B = No. 5, U = No. 15, K = 24-inch box, H = cutting, among others. Private sets write the size out (#1, #5, #15, 24" box). Same plants, different labels.</p>`,
  src: "Plans PL-1 (11-428704); Caltrans 2018 Standard Specifications 20-3.01B(2)(a)."
},

{ h: "Groundcover hatches and spacing on center",
  lead: "Groundcover, mulch and drip areas are shown as hatch patterns, not individual symbols. You measure the area, then use the spacing to get a plant count.",
  body: `<ul>
<li>Each hatch (diagonal lines, dots, crosshatch) matches a row in the legend.</li>
<li><strong>O.C. (on center)</strong> is the distance from the center of one plant to the center of the next.</li>
<li><strong>Square spacing:</strong> plants in a grid. Plants per SF = 1 ÷ (spacing × spacing).</li>
<li><strong>Triangular spacing:</strong> rows offset like a honeycomb. It fits about 15% more plants: plants per SF = 1.155 ÷ (spacing × spacing).</li>
<li>The legend or a note says which pattern. If it doesn't, ask (Module 12). Module 7 covers the full planting takeoff.</li>
</ul>`,
  ex: `<p><strong>Worked example (example numbers for practice).</strong> A 2,400 SF shrub bed of #1 plants at 3 ft o.c.:</p>
<ul>
<li>Square: 2,400 ÷ (3 × 3) = 2,400 ÷ 9 = <strong>267 plants</strong></li>
<li>Triangular: 2,400 × 1.155 ÷ 9 = <strong>308 plants</strong></li>
</ul>
<p>The difference is 41 plants. At any price per installed plant, that's real money on one bed.</p>`,
  watch: `<p>Hatches can overlap: a groundcover hatch inside a mulch hatch inside a drip hatch. One area may need plants, mulch and drip. Make a list of every hatch in the legend and check each area for all of them.</p>`
},

{ h: "Details and detail callouts",
  lead: "Details show how each item is built. They usually add parts and labor that the plan view never shows.",
  body: `<ul>
<li><strong>Private sets:</strong> a callout bubble on the plan, split in two: the top number is the detail, the bottom is the sheet. “3 / L-5.1” means detail 3 on sheet L-5.1.</li>
<li><strong>Caltrans sets:</strong> details are on ID (irrigation) and PLD (planting) sheets, titled by item, plus statewide <strong>Standard Plans</strong> (for example H4, the sprinkler assembly, revised as RSP H4 and bound at the back of this set).</li>
<li>Most details say <strong>NTS</strong> or “No scale.” Read the written dimensions; never measure a detail.</li>
<li>When the detail and the plan disagree, the detail usually governs (Module 5 explains the order of precedence).</li>
</ul>`,
  ex: `<p>The tree well detail (ID-5 and PLD-1) turns one 24" box pine into: a 48" hole, a 60" basin, staking, a gravel sump, a perforated PVC drainpipe with a removable purple drain grate, 4 flood bubblers on a swing joint, iron sulfate, slow-release fertilizer and 5 fertilizer packets. The plan view shows a single tree symbol.</p>
<p>Other ID sheets show the antenna mast, master valve and flow sensor assembly, and the recycled water warning sign and detectable warning tape that runs “continuously along the entire trench.”</p>`,
  watch: `<p>Read every detail that applies to your scope before pricing, even if it looks standard. Valve box depth, gravel, thrust blocks, wire splices and staking are where “standard” stops being standard.</p>`,
  src: "Plans ID-1 to ID-6, PLD-1, RSP H4 (11-428704)."
},

{ h: "Quantity tables and schedules",
  lead: "Caltrans and many public sets include quantity tables. They help you check your takeoff and the bid item list, but they're not always right.",
  body: `<p>IQ-1 on 11-428704 lists the 4" Class 315 main by plan sheet:</p>
<div class="tablewrap"><table><thead><tr><th>IP-1</th><th>IP-2</th><th>IP-3</th><th>IP-4</th><th>IP-5</th><th>IP-6</th><th>IP-7</th><th>In conduits (IQ-2)</th><th>Total</th></tr></thead>
<tbody><tr><td class="num">440</td><td class="num">1,365</td><td class="num">1,210</td><td class="num">165</td><td class="num">1,150</td><td class="num">1,385</td><td class="num">1,130</td><td class="num">648</td><td class="num"><strong>7,493</strong></td></tr></tbody></table></div>
<p>440 + 1,365 + 1,210 + 165 + 1,150 + 1,385 + 1,130 = 6,845 LF on the plan sheets, plus 648 LF in conduits = <strong>7,493 LF</strong>, which matches bid item 63.</p>
<ul>
<li>Other tables: lateral pipe and heads by valve (IQ-1), conduit by station (IQ-2), plants by sheet and group (PQ-1).</li>
<li>Footnotes matter: on IQ-2, “(N) not a separate pay item, for information only” and “* included on IQ-1.”</li>
</ul>`,
  watch: `<p>Private plan sets rarely include quantities, and when they do they often say “for reference only.” The contractor is responsible for the takeoff. Use any table as a check, never as your count.</p>`,
  ex: `<p>Module 15 shows what checking IQ-1 against the bid list turns up on this job: the table adds to 172 tree well assemblies, but the bid item says 180. It's probably Caltrans rounding up, as on several other items, and a short written question confirms it.</p>`
},

{ h: "Finding your water and power on other sheets",
  lead: "The landscape sheets show where your system goes. The civil, utility and electrical sheets often show where it gets its water and power, and who builds those parts.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>You need to know</th><th>Look on</th></tr></thead>
<tbody>
<tr><td>Where the irrigation water service, meter and backflow are, and who installs them</td><td>Civil utility plan (C-sheets), plumbing site plan</td></tr>
<tr><td>Sleeves under drives, walks and parking</td><td>Civil, hardscape or irrigation sheets; check that someone installs them before paving</td></tr>
<tr><td>Power to the controller (circuit, conduit, who pulls wire)</td><td>Electrical site plan (E-sheets) and panel schedule</td></tr>
<tr><td>Existing utilities you'll trench near</td><td>Civil existing conditions or utility sheets (U-sheets)</td></tr>
<tr><td>Planters on structure, podium decks, building drains, wall footings</td><td>Architectural and structural sheets</td></tr>
<tr><td>Finish grades, swales and slope steepness</td><td>Civil grading plan</td></tr>
</tbody></table></div>`,
  ex: `<p>On 11-428704: the utility sheets (U-1 to U-7) show Otay Water District water and recycled-water lines in the work area. Electrical sheet E-1 shows an existing SDG&amp;E service enclosure, 120/240 V, with a 20-amp breaker labeled “Irr,” and a note to install 2 #10 conductors in conduit per the irrigation detail to the new controller enclosure. That's an electrician's work. The top three bidders in Module 15 all listed an electric service subcontractor.</p>`,
  watch: `<p>On private jobs, the POC is often “stub-out by plumbing contractor” on one sheet and “by landscape contractor” on another. Find every mention, and state in your proposal exactly where your work starts (Module 13).</p>`
},

{ h: "Revisions, clouds and addenda",
  lead: "Plans change during bidding. A revision cloud and a numbered triangle show exactly what changed. Pricing an old sheet is one of the most expensive mistakes you can make.",
  body: `<ul>
<li><strong>Revision cloud:</strong> a scalloped outline drawn around the changed area.</li>
<li><strong>Delta:</strong> a triangle with the revision number next to the cloud. It matches a line in the title block's revision list.</li>
<li><strong>Addendum:</strong> a formal change issued before bids are due. It may replace whole sheets, change spec sections, or answer questions. Each addendum is numbered.</li>
<li><strong>Bulletin / ASI:</strong> changes after the contract is signed (Module 16).</li>
</ul>`,
  ex: `<p>Addendum 1 on 11-428704 replaced sheet 45 (IQ-1). The new sheet carries a triangle with “1” next to the 2" remote control valve total (now 3) and the note “REPLACED PER ADDENDUM No. 1 DATED AUGUST 27, 2021.” The same addendum changed bid item 38 from 4 to 3 valves.</p>`,
  watch: `<p>Keep one current set. When an addendum arrives, replace the old sheets in your takeoff file right away, mark the date on your cover sheet, and re-check every quantity in the clouded areas. Module 12 covers tracking addenda.</p>`,
  src: "Caltrans Addendum No. 1, Aug. 27, 2021, contract 11-428704; Addendum 1 plans, sheet IQ-1."
},

{ h: "Digital plan tools",
  lead: "Most commercial estimators read and take off plans on screen. The tools differ, but they all do the same few jobs.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Tool type</th><th>Examples</th><th>What it's good for</th></tr></thead>
<tbody>
<tr><td>PDF markup and measuring</td><td>Bluebeam Revu; free PDF readers with measure tools</td><td>Calibrating scale, measuring length and area, counting symbols, markups, comparing two versions of a sheet</td></tr>
<tr><td>Dedicated takeoff software</td><td>PlanSwift, On Center's On-Screen Takeoff</td><td>Takeoff tied to item lists and assemblies, quantities that flow to a spreadsheet or estimate</td></tr>
<tr><td>Spreadsheet</td><td>Excel, Google Sheets</td><td>Your estimate itself, and checking totals from any tool</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Calibrate each sheet</b>Use the scale bar or a long dimension, not the scale label alone.</div></li>
<li class="hl"><div><b>One color per item</b>4" main red, 2" main orange, laterals blue, and so on. Keep a legend.</div></li>
<li><div><b>Count, then check</b>Use the count tool for heads and plants, then compare to any schedule or quantity table.</div></li>
<li><div><b>Use overlay or compare</b>When an addendum replaces a sheet, compare the old and new to see every change.</div></li>
</ol>`,
  watch: `<p>Software measures what you trace. A wrong calibration or a missed match line goes straight into your bid. Spot check one measurement per sheet by hand or with the scale bar. Prices and plans for these tools change; check the vendors' sites and try free trials before buying.</p>`
},

{ h: "A routine for reading a new set",
  lead: "Read the set in the same order every time. The first pass is for understanding, not counting.",
  body: `<ol class="steps">
<li><div><b>Title sheet and index</b>Check you have every sheet. Note the date and issue name.</div></li>
<li><div><b>All addenda</b>Swap in replaced sheets before you start.</div></li>
<li class="hl"><div><b>Legends, schedules and general notes</b>ISS-1 and PL-1 on the example job. Learn every symbol and hatch.</div></li>
<li><div><b>Irrigation plans</b>Start at the POC and follow the main to the end. Find every controller.</div></li>
<li><div><b>Planting plans</b>Find every hatch and plant symbol; note trees and specimen sizes.</div></li>
<li class="hl"><div><b>Details</b>For each item in your scope, read its detail.</div></li>
<li><div><b>Other disciplines</b>Civil utility and grading, electrical, architectural site plan, traffic handling on road jobs.</div></li>
<li><div><b>Quantity tables</b>If there are any, use them to check.</div></li>
<li><div><b>Questions list</b>Write down every conflict or gap as you go. These become RFIs (Module 12).</div></li>
</ol>`,
  ex: `<p>Budget your time: a first read-through of a 10-sheet private landscape set might take 1 to 2 hours. On the 65-sheet I-805 set, reading only the 33 landscape sheets plus E-1, E-2 and the utility sheets carefully is a half day. That time saves you from pricing the wrong job.</p>`
},

{ h: "Common traps",
  lead: "Most plan-reading mistakes are the same few, made over and over. Check for each one before you price.",
  body: `<ul>
<li><strong>Wrong scale:</strong> half-size print, scanned PDF, or an enlargement at a different scale on the same sheet.</li>
<li><strong>Old sheets:</strong> pricing a sheet an addendum replaced.</li>
<li><strong>Double counts at match lines</strong>, or items missed between two sheets.</li>
<li><strong>Existing vs. new:</strong> “Exist” or “(E)” items drawn lightly that you don't install, or must protect, remove or modify.</li>
<li><strong>“By others”:</strong> POC, sleeves, controller power or backflow assumed by others but not shown anywhere as someone else's.</li>
<li><strong>Typical details:</strong> a “typ.” detail that applies to every valve, head or tree on the job.</li>
<li><strong>Notes far from the plan:</strong> general notes on a different sheet that change every item.</li>
<li><strong>Removal and demolition sheets</strong> (IR sheets on the example job) skipped because they aren't “new work.”</li>
<li><strong>Plant schedule counts</strong> that don't match the symbols on the plan.</li>
<li><strong>Missing sheets</strong> referenced in a callout but not in your set.</li>
</ul>`,
  watch: `<p>When the schedule and the plan disagree on a count, don't just pick one. Ask (RFI), and if there's no answer before bid day, state in your proposal which you priced.</p>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Plan set", "All the drawings for one project."],
    ["Sheet index", "The list of every sheet in the set, usually on the title sheet."],
    ["Title block", "The border box with sheet title, number, stamp, dates and revisions."],
    ["Scale", "How many real feet one inch on the drawing stands for, like 1\" = 20'."],
    ["Graphic scale bar", "A ruler drawn on the sheet that stays true when the sheet is shrunk."],
    ["NTS", "Not to scale. Don't measure it."],
    ["Match line", "Line where one plan sheet continues on another."],
    ["Station (Sta)", "Distance in feet along a survey line, written like 262+48 (26,248 ft)."],
    ["Offset / Lt / Rt", "Sideways distance from the line, to the left or right."],
    ["POC", "Point of connection: where the irrigation system gets its water."],
    ["Mainline (supply line)", "Pipe under constant pressure upstream of the valves."],
    ["Lateral", "Pipe downstream of a valve, pressurized only when the zone runs."],
    ["RCV", "Remote control valve: opens one irrigation zone."],
    ["Sprinkler schedule", "Table of every head type with model, radius, pressure and flow."],
    ["Plant legend / schedule", "Table of every plant with size, spacing and installation notes."],
    ["O.C.", "On center: distance from one plant's center to the next."],
    ["Hatch", "A fill pattern showing an area, like groundcover or mulch."],
    ["Keynote", "A numbered tag on the plan explained in a list on the sheet."],
    ["Detail callout", "Bubble telling you which detail and which sheet, like 3 / L-5.1."],
    ["Revision cloud / delta", "Outline and numbered triangle marking a change."],
    ["Addendum", "A formal change to the bid documents issued before bids are due."]
  ]
},

{ t: "quiz", id: "m4", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "A sheet says 1\" = 50'. You measure 2.6 inches on a full-size print. How long is it?", a: ["52 ft", "130 ft", "260 ft"], c: 1, why: "2.6 × 50 = 130 ft." },
    { q: "You printed a 1\" = 50' sheet at half size. What is the scale of your print?", a: ["1\" = 25'", "1\" = 50'", "1\" = 100'"], c: 2, why: "Half size doubles the feet per inch, so each printed inch is 100 ft." },
    { q: "What does Sta 262+48 mean?", a: ["262.48 miles along the road", "26,248 feet along the named survey line", "Sheet 262, detail 48"], c: 1, why: "Before the plus is hundreds of feet: 262 × 100 + 48 = 26,248 ft." },
    { q: "How far apart are Sta 262+48 and Sta 264+37 on the same line?", a: ["189 ft", "1.89 ft", "211 ft"], c: 0, why: "26,437 − 26,248 = 189 ft." },
    { q: "A detail bubble reads 4 / L-5.2. Where is the detail?", a: ["Sheet 4, detail L-5.2", "Detail 4 on sheet L-5.2", "Keynote 4 on any L sheet"], c: 1, why: "Top is the detail number, bottom is the sheet." },
    { q: "Where would you usually find the power circuit for the irrigation controller?", a: ["The planting legend", "The electrical sheets", "The sprinkler schedule"], c: 1, why: "Power, conduit and breakers are on the electrical (E) sheets, as on E-1 of 11-428704." },
    { q: "On a Caltrans quantity table, what does “(N)” mean?", a: ["New work", "Not a separate pay item", "North side"], c: 1, why: "The IQ-2 footnote says “(N) not a separate pay item, for information only.” Always read the abbreviation list for each set." },
    { q: "A 1,800 SF bed is planted at 3 ft o.c., square spacing. About how many plants?", a: ["200", "600", "231"], c: 0, why: "1,800 ÷ (3 × 3) = 200. Triangular spacing would give about 231." }
  ]
},

{ t: "practice", id: "m4", h: "Practice assignments",
  lead: "Six hours with real plans. Use a PDF tool with a measure and markup feature (Bluebeam Revu trial or a free PDF reader with measuring).",
  items: [
    { h: "Download and index the real plan set", hrs: 0.5, d: "<p>From <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>, download the Plans and Addendum 1 plans. Make a one-page index: sheet number, code (ISS-1, IP-1 and so on) and title for sheets 24 to 58. Mark which sheets Addendum 1 replaced and swap them into your working copy.</p>" },
    { h: "Learn the two legends", hrs: 0.75, d: "<p>On ISS-1 and PL-1, list every symbol, hatch and abbreviation with its meaning, in your own words. Include the sprinkler schedule rows, the pipe sizing chart and the 8 general notes. Next to each note, write one way it affects price.</p>" },
    { h: "Mark up the irrigation plans", hrs: 1.25, d: "<p>On IP-1 and IP-7, mark in color: the point of connection (IP-7), the new 4\" main, every controller and antenna mast, every conduit crossing, gate valves, and both match lines. Write the controller and station for five valve callouts. Check your marked main on IP-1 against the 440 LF on IQ-1.</p>" },
    { h: "Scale and stationing exercise", hrs: 1, d: "<p>(1) On the relative border scale bar, check whether your PDF view or print is full size. (2) Calibrate IP-5 and measure the distance between the crossings at Sta 262+48 Rt and 264+37 Rt; compare to the 189 ft from the stations. (3) Using the IP-1 note, compute the length of main from Sta 235+50 to Sta 249+70. (4) Print one sheet at 11 × 17, measure three runs with a ruler, and convert them using the corrected scale. Write down every step.</p>" },
    { h: "Mark up a planting sheet", hrs: 1, d: "<p>On PP-1, highlight each hatch and plant symbol in a different color. Count the 1-gallon and 24\" box symbols you see, and add up the cutting callouts on that sheet. Compare to the PP-1 row on PQ-1. List any differences.</p>" },
    { h: "Follow details and other disciplines", hrs: 0.5, d: "<p>Follow a 24\" box pine from PP sheets to its details on PLD-1 and ID-5. List every part and step the details add. Then open E-1 and write down the power source, breaker and wire for the controllers.</p>" },
    { h: "Index a private or city plan set", hrs: 1, d: "<p>Get one current or recent commercial landscape plan set: a GC invitation, or a City of San Diego or other agency project found through <a href=\"https://www.sandiego.gov/purchasing/bids-contracts\" target=\"_blank\" rel=\"noopener\">the City's bid page</a> or an agency PlanetBids portal. Build the same sheet index, find the POC, controller power and sleeve sheets, and list five symbols or notes that differ from the Caltrans set.</p>" }
  ]
},

{ h: "Module 4 summary",
  lead: "You can now open a plan set, find your sheets and read them. Next, you'll read the specifications that go with them.",
  body: `<ul>
<li>Use the index and sheet codes to find every sheet that touches your scope, including civil, utility and electrical.</li>
<li>Check the scale on every sheet and print. Half size doubles the scale. Calibrate in software on a scale bar.</li>
<li>Read north arrows, match lines and stations. Sta 262+48 is 26,248 ft along a named line.</li>
<li>Learn the legend, schedule and notes before looking at the plan. Notes are part of the contract.</li>
<li>Follow every detail callout. Details add parts and labor the plan view doesn't show.</li>
<li>Use quantity tables to check, not to count. Keep one current set and watch for clouds and addenda.</li>
</ul>
<p><strong>Next: Module 5 · Reading Specifications</strong></p>`
}
]
});
