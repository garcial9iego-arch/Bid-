(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 4, hours: 13, title: "Reading Landscape and Irrigation Plans",
slides: [

{ t: "cover",
  h: "Reading Landscape and Irrigation Plans",
  lead: "You can't price what you can't read. This module teaches you to open a commercial plan set, find every sheet that touches your scope, measure from it, and understand every line, symbol, abbreviation and note on it.",
  objectives: [
    "Explain what a plan set is, how private and Caltrans sets differ, and find any sheet fast using the index and sheet codes",
    "Read scales, check the scale on a PDF or half-size print, and measure lengths and odd-shaped areas",
    "Read north arrows, match lines and stationing like Sta 262+48",
    "Read line types, plan abbreviations (TYP, NTS, EQ, OC, FG, TC, TW, BW, INV, POC and more), legends, schedules, notes and callouts",
    "Recognize every common irrigation device and planting symbol, and turn a detail, section or elevation into a parts list",
    "Find the grading, hardscape, civil, utility and electrical information that touches your scope",
    "Work a set on screen step by step, hunt for conflicts, and avoid the most common plan-reading traps"
  ],
  time: [["Reading and slides", "4 h"], ["Practice assignments", "9 h"], ["Module total", "13 h"]],
  body: `<p>The running example is a real plan set: Caltrans contract 11-428704, the I-805 recycled-water conversion and planting in Chula Vista (the whole bid is walked through in <a href="#m15-1">Module 15</a>). Download it now from <a href="#lab-11-428704">Real Bid Lab · 11-428704</a> and keep it open while you read. Some examples also come from 11-431064, new landscaping on SR-905 in Otay Mesa (<a href="#lab-11-431064">Real Bid Lab · 11-431064</a>).</p>
<p>This module teaches the skills. The <a href="#plans-1">Plan Set Deep Dive</a> then walks the 11-428704 sheets one by one with pictures. Use them together. Words and abbreviations you don't know are also in the <a href="#dict">Bid Dictionary</a>.</p>`,
  src: "Caltrans contract 11-428704: project plans (65 sheets, approved June 28, 2021) and Addendum 1 plans. Caltrans contract 11-431064: project plans (96 sheets)."
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
  watch: `<p>Never bid from a partial set. A general contractor (GC) may send you “just the landscape sheets.” Ask for the full set, or at least the civil utility sheets, the electrical site plan and the architectural site plan. If you can't get them, list that in your proposal as an assumption (Module 13).</p>`
},

{ h: "Private (L-sheet) sets vs. Caltrans sets",
  lead: "The same irrigation and planting work is drawn very differently on a private job and on a Caltrans job. Know which kind you're holding before you start.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Topic</th><th>Typical private set (L-sheets)</th><th>Caltrans set (11-428704)</th></tr></thead>
<tbody>
<tr><td>Who drew it</td><td>A landscape architect hired by the owner, architect or civil engineer</td><td>The Caltrans district landscape architecture unit</td></tr>
<tr><td>Sheet names</td><td>L-1.0, L2.01, L-3 and so on, often split into hardscape, irrigation and planting</td><td>Fixed codes: ISS, IR, IP, ID, IQ for irrigation; PL, PP, PLD, PQ for planting</td></tr>
<tr><td>Where things are</td><td>Dimensions from buildings, curbs and grid lines; key maps</td><td>Stations and offsets along survey lines</td></tr>
<tr><td>Quantities</td><td>Rarely given; you do the takeoff</td><td>Quantity sheets (IQ, PQ) plus the Bid Item List</td></tr>
<tr><td>Products</td><td>Make and model named on the legend, often “or equal”</td><td>Generic types on the legend; brands only when the Special Provisions require them (Calsense controllers here)</td></tr>
<tr><td>Details</td><td>Custom details and manufacturer details on the L-sheets</td><td>Project details (ID, PLD) plus statewide Standard Plans (RSP H-sheets)</td></tr>
<tr><td>Specs</td><td>Notes on the sheets (small jobs) or a project manual (bigger jobs)</td><td>Standard Specifications plus job Special Provisions</td></tr>
<tr><td>Scale</td><td>Often 1" = 10' to 1" = 30'</td><td>1" = 50' on the plan sheets</td></tr>
<tr><td>Water rules</td><td>Often a water budget table for the state water-efficiency rules (MWELO, Module 5)</td><td>Notes and legend items instead (recycled water rules, purple parts)</td></tr>
</tbody></table></div>`,
  ex: `<p>On a private retail job, you'll find a valve by its callout next to a building corner, with a dimension like “6' from back of curb.” On 11-428704 you find it by sheet and station: the IP sheet, then the station along the “SD-805” line. Both work. You just read them differently.</p>`,
  watch: `<p>Don't carry Caltrans habits into a private set or the other way around. On a private set, no quantity sheet means every count is yours. On Caltrans, “(N)” on a quantity table means “not a separate pay item,” while on a private set “(N)” usually means “new.”</p>`
},

{ h: "A typical private landscape sheet list",
  lead: "Private sets don't follow one fixed numbering, but most use the same order. Here is a made-up example list so you know what to expect.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Sheet (example)</th><th>Title</th><th>What you look for</th></tr></thead>
<tbody>
<tr><td>L-0.0</td><td>Landscape cover, general notes, abbreviations</td><td>Every abbreviation; notes that apply to all L-sheets</td></tr>
<tr><td>L-1.0 to L-1.3</td><td>Hardscape or layout plans</td><td>Walls, paving, mow curbs, headers, boulders, sleeves; who builds them (Module 18)</td></tr>
<tr><td>L-2.0</td><td>Hardscape details</td><td>Edging, tree grates, planter walls</td></tr>
<tr><td>L-3.0 to L-3.3</td><td>Irrigation plans</td><td>POC (point of connection), mainline, valves, heads, drip areas, controller</td></tr>
<tr><td>L-3.4</td><td>Irrigation legend, notes and water calculations</td><td>Make and model of every part; the water budget</td></tr>
<tr><td>L-4.0, L-4.1</td><td>Irrigation details</td><td>Backflow, valve, head, drip and controller details</td></tr>
<tr><td>L-5.0 to L-5.3</td><td>Planting plans</td><td>Tree symbols, shrub callouts, groundcover hatches</td></tr>
<tr><td>L-5.4</td><td>Plant legend and planting notes</td><td>Species, sizes, spacing, soil prep notes</td></tr>
<tr><td>L-6.0</td><td>Planting details</td><td>Tree staking, root barrier, planting on slopes</td></tr>
<tr><td>L-7.0</td><td>Landscape specifications (on sheets)</td><td>Warranty, maintenance period, tests (Module 5)</td></tr>
</tbody></table></div>
<p class="small">Example only. Every firm numbers differently. Always build your own index from the real title sheet.</p>`,
  ex: `<p>On a small private job the “specs” may be one sheet of notes (like L-7.0 above). On a large job the same sheet may just say “see project manual, Section 32 84 00.” Either way they are part of the contract.</p>`,
  watch: `<p>Some sets put grading on the landscape sheets, some on the civil sheets only, and some on both. If the landscape plan says “fine grading by landscape contractor,” that's your work even though the grades are on a civil sheet you didn't get.</p>`
},

{ h: "Sheet order and numbering",
  lead: "Sheets are grouped by discipline, in a standard order. The sheet code tells you the discipline before you even look at the drawing.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Typical private set</th><th>What's on it</th><th>11-428704 (Caltrans)</th></tr></thead>
<tbody>
<tr><td>G or T: title sheet, sheet index</td><td>Project name, location map, list of every sheet</td><td>Sheet 1: Title and location map, index</td></tr>
<tr><td>C: civil (grading, utilities, storm drain)</td><td>Grades, water service, meters, sleeves under paving</td><td>PC-1 project control; U-1 to U-7 utility plans</td></tr>
<tr><td>L: landscape notes, hardscape, layout</td><td>General notes, walls, paving, boulders, DG (decomposed granite)</td><td>(none; no hardscape on this job)</td></tr>
<tr><td>L or IR: irrigation plans</td><td>Pipe, valves, heads, controller, POC (point of connection)</td><td>ISS-1 irrigation sprinkler schedule; IR-1 to 7 irrigation removal; IP-1 to 7 irrigation plans</td></tr>
<tr><td>L: irrigation details</td><td>How each piece is built</td><td>ID-1 to ID-6 irrigation details; IQ-1, IQ-2 irrigation quantities</td></tr>
<tr><td>L or PL: planting plans</td><td>Plant locations, groundcover areas</td><td>PL-1 plant legend; PP-1 to 7 planting plans</td></tr>
<tr><td>L: planting details</td><td>Tree and shrub planting, staking</td><td>PLD-1 planting details; PQ-1 planting quantities</td></tr>
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
<li><strong>Dates:</strong> plans approval date, plot date, issue date (for example “Bid Set” or “100% CD,” meaning 100% complete construction documents).</li>
<li><strong>Revision block:</strong> each revision's number, date and description.</li>
<li><strong>Scale:</strong> often in the title block, sometimes under each drawing.</li>
</ul>`,
  ex: `<p>On 11-428704 every landscape sheet shows the landscape architect's stamp, a plans approval date of 06-28-21, the route and post miles (11 SD 805 3.4/5.1: District 11, San Diego County, Route 805, post miles 3.4 to 5.1), and “SCALE: 1" = 50'” on the plan sheets. The border also has a small bar labeled “RELATIVE BORDER SCALE IS IN INCHES” marked 0 to 3. You'll use that bar on the next slides.</p>`,
  watch: `<p>Check the issue name. A set marked “Preliminary,” “50% CD” (half-finished construction documents) or “Not for Construction” is not final. You can still bid it if asked, but say in your proposal which set and date you priced.</p>`
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
<p>Landscape and civil sheets use an <strong>engineer's scale</strong> (10, 20, 30, 40, 50, 60 parts per inch). Architects use an <strong>architect's scale</strong> (fractions of an inch per foot). Use the ruler that matches. NTS means “not to scale.”</p>`,
  ex: `<p><strong>Worked example.</strong> On IP-1 (1" = 50'), you measure a run of new main at 3.4 inches.</p>
<p>3.4 in × 50 ft per in = <strong>170 ft</strong>.</p>
<p>A planting area on a 1" = 20' sheet measures 4.5" by 2.0". That's (4.5 × 20) × (2.0 × 20) = 90 ft × 40 ft = <strong>3,600 SF</strong> (square feet). Note that area grows with the square of the scale: the same rectangle on a 1" = 40' sheet would be four times bigger, 14,400 SF.</p>`,
  watch: `<p>A sheet can hold drawings at different scales: a plan at 1" = 20' and an enlargement at 1" = 10' side by side. Read the scale under each drawing, not just the title block.</p>`
},

{ h: "Worked example: measuring an odd-shaped bed",
  lead: "Real planting areas are rarely rectangles. Break the shape into rectangles and triangles, measure each one, then add them up.",
  body: `<ol class="steps">
<li><div><b>Trace the outline</b>Mark the edge of the bed on your print or PDF so you can see the whole shape.</div></li>
<li class="hl"><div><b>Split it</b>Draw light lines that cut the bed into rectangles and right triangles. Fewer pieces means fewer mistakes.</div></li>
<li><div><b>Measure each piece</b>Measure in inches, then convert with the scale.</div></li>
<li><div><b>Use the right formula</b>Rectangle = length × width. Triangle = base × height ÷ 2.</div></li>
<li class="hl"><div><b>Add and check</b>Add the pieces. Then draw one big rectangle around the whole bed: your answer must be smaller than that box.</div></li>
</ol>`,
  ex: `<p><strong>Worked example (example numbers for practice).</strong> An L-shaped bed with a cut corner on a 1" = 20' sheet:</p>
<div class="tablewrap"><table>
<thead><tr><th>Piece</th><th>Measured</th><th>Real size</th><th class="num">Area</th></tr></thead>
<tbody>
<tr><td>Rectangle A</td><td>3.0" × 1.5"</td><td>60 ft × 30 ft</td><td class="num">1,800 SF</td></tr>
<tr><td>Rectangle B</td><td>1.0" × 2.0"</td><td>20 ft × 40 ft</td><td class="num">800 SF</td></tr>
<tr><td>Triangle C</td><td>base 1.5", height 1.0"</td><td>30 ft × 20 ft ÷ 2</td><td class="num">300 SF</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td class="num"><strong>2,900 SF</strong></td></tr>
</tbody></table></div>
<p>Check: the box around the whole bed is 4.0" × 3.5" = 80 ft × 70 ft = 5,600 SF. 2,900 SF is smaller, so the answer is reasonable.</p>`,
  watch: `<p>Curved beds: split them into enough small pieces that the curve is close, or use the area tool in your PDF software (later in this module). Never guess a curve as a rectangle.</p>`
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
  ex: `<p>IP-1 ends at the right edge with “MATCH LINE SEE SHEET IP-2.” Main that runs up to the match line is counted on IP-1; main past it is counted on IP-2. Sheet IQ-1 lists the 4" main by sheet: IP-1 has 440 LF (linear feet) and IP-2 has 1,365 LF.</p>`,
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
<p>PVC is polyvinyl chloride plastic pipe. CHDPE is corrugated high-density polyethylene pipe (bid item 67, 10" corrugated high density polyethylene pipe conduit). Distance between the two crossings on the right side: 264+37 − 262+48 = 26,437 − 26,248 = <strong>189 ft</strong>. On a 1" = 50' sheet that's 189 ÷ 50 = <strong>3.78 inches</strong>. Measure it on IP-5 to check your scale.</p>`,
  deeper: `<p>A note on IP-1 says “Install 4" supply line west of existing berm from Sta 235+50 to Sta 249+70 'SD-805' line.” That's 24,970 − 23,550 = 1,420 ft of main defined by stations alone. When a note gives stations, you can compute the length without measuring.</p>`
},

{ h: "Lines: what each line type means",
  lead: "Before symbols, learn the lines. The kind of line (solid, dashed, dotted, with letters in it) tells you what it is, and whether it's new or existing.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Line looks like</th><th>Usually means</th><th>Why you care</th></tr></thead>
<tbody>
<tr><td>Heavy solid line</td><td>New mainline, or the edge of new work</td><td>Pressurized pipe you install; priced by LF and size</td></tr>
<tr><td>Thin solid or dashed line</td><td>New lateral pipe (downstream of a valve)</td><td>Cheaper pipe, shallower trench</td></tr>
<tr><td>Light, gray or “screened” line</td><td>Existing things: curbs, buildings, old pipe</td><td>Background. Protect it, don't price it, unless a note says remove or modify</td></tr>
<tr><td>Long dash, short dash (dash-dot)</td><td>Centerline (CL or ℄) or property line (PL)</td><td>Reference lines for stations and setbacks</td></tr>
<tr><td>Line with letters in it, like —SCC— or —W—</td><td>A utility or conduit: W water, SD storm drain, E electric, G gas</td><td>Something to trench near or cross; read the legend for each letter code</td></tr>
<tr><td>Line with x marks, like —x—TPFR—x—</td><td>Fence, often temporary protection fence</td><td>A pay item or a work limit</td></tr>
<tr><td>Wavy line</td><td>Wire or cable (on 11-428704, “2W” two-wire cable)</td><td>Wire priced by LF; often in conduit</td></tr>
<tr><td>Heavy line with a label “LIMIT OF WORK” (LOW)</td><td>Edge of the contract work area</td><td>Nothing past it is yours</td></tr>
</tbody></table></div>`,
  ex: `<figure class="fig"><img src="img/pdd/iss1-legend.jpg" data-full="img/pdd/iss1-full.jpg" alt="ISS-1 legend showing line types for irrigation conduit, existing conduit, two-wire cable and symbols" loading="lazy"><figcaption><b>ISS-1 legend, 11-428704.</b> A solid double line is new irrigation conduit (Irr C); the same line broken into dashes is <em>existing</em> (Exist Irr C). —SCC— is electrical conduit; the dashed version is existing. The wavy “2W” line is two-wire cable in 1-inch conduit. · tap to zoom</figcaption></figure>`,
  watch: `<p>Line styles are not a national rule. One firm's dashed line is lateral pipe; another's is existing pipe. Read the legend on every set, and if a line type isn't in the legend, ask (Module 12).</p>`
},

{ h: "Line weight and existing vs. new",
  lead: "Designers draw your new work dark and bold, and everything already there light. Reading that difference correctly is the first step to not pricing someone else's work.",
  body: `<ul>
<li><strong>Line weight</strong> means how thick the line is drawn. New work is usually heavy; existing is thin, gray or dotted.</li>
<li><strong>Existing labels:</strong> “Exist,” “EXIST,” “(E)” or “EX” in front of a callout. On 11-428704: “Exist 3" WM” (existing 3-inch water meter), “Exist 2" GV” (existing 2-inch gate valve).</li>
<li><strong>Existing does not mean free.</strong> Read the words after it: “to remain” (protect it), “remove,” “remove and salvage” (take it out carefully and give it to the owner), “abandon” (leave it in place, dead), “modify,” “relocate” or “operate.”</li>
<li><strong>Removal sheets</strong> (IR sheets on 11-428704, “demo” sheets on private jobs) show existing items that you take out. Count them like new work.</li>
</ul>`,
  ex: `<p>Real callouts from 11-428704 sheet IR (removal) and IP (new work): “REMOVE AND SALVAGE ICC” (take out an irrigation controller enclosure cabinet and save it), “Exist 3" BPA TO REMAIN” (backflow preventer assembly stays), and the * mark on IP-7 valve callouts, which means you operate those existing valves during construction. Each has a different cost: removal labor, protection, or operating time.</p>`,
  watch: `<p>Scanned plans often lose the light lines. If an area looks empty, open the original PDF and zoom in before you decide nothing is there.</p>`
},

{ h: "Common plan abbreviations · general notes",
  lead: "Plans are full of short codes. These are the ones you'll see on almost every set, private or public. When a set has its own abbreviation list, that list wins.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Abbreviation</th><th>Stands for</th><th>What it means for you</th></tr></thead>
<tbody>
<tr><td>TYP</td><td>Typical</td><td>The note or detail applies to every similar item, not just the one it points to</td></tr>
<tr><td>NTS</td><td>Not to scale</td><td>Don't measure; use the written numbers</td></tr>
<tr><td>EQ</td><td>Equal</td><td>Spaces marked EQ are equal; divide the total</td></tr>
<tr><td>O.C. or OC</td><td>On center</td><td>Center-to-center spacing of plants, heads or posts</td></tr>
<tr><td>SIM</td><td>Similar</td><td>Built like the referenced item, with small changes; ask if unclear</td></tr>
<tr><td>NIC</td><td>Not in contract</td><td>Shown for information; nobody on this contract builds it</td></tr>
<tr><td>VIF</td><td>Verify in field</td><td>Check it on site before you build; bid the shown amount and note the risk</td></tr>
<tr><td>(E), EX, EXIST</td><td>Existing</td><td>Already there; see the previous slide</td></tr>
<tr><td>(N)</td><td>New (private sets)</td><td>On Caltrans quantity tables it means “not a separate pay item”</td></tr>
<tr><td>CL or ℄, PL, R/W</td><td>Centerline, property line, right of way</td><td>Reference and boundary lines</td></tr>
<tr><td>LOW</td><td>Limit of work</td><td>The edge of the work area</td></tr>
<tr><td>MIN, MAX, APPROX</td><td>Minimum, maximum, approximately</td><td>Minimums and maximums are rules you must meet</td></tr>
<tr><td>Ø or DIA</td><td>Diameter</td><td>Pipe, hole or basin size</td></tr>
<tr><td>@, w/, CONT</td><td>At, with, continuous</td><td>“Tape CONT” means along the whole trench</td></tr>
<tr><td>DET, SHT, DWG, REF</td><td>Detail, sheet, drawing, reference</td><td>Where to look next</td></tr>
<tr><td>BY OTHERS, FBO</td><td>Done by another contractor; furnished by others</td><td>Not yours, but confirm who and write it in your proposal</td></tr>
</tbody></table></div>`,
  ex: `<p>11-428704 has its own abbreviation lists: ISS-1 lists RWM (recycled water meter), RWCA (recycled water connection assembly), RWWS (recycled water identification and warning sign) and CCTS (cross connection test station). PL-1 lists W Germ (weed germination), MEPA (maintain existing planted areas) and TPFR (temporary protection fence, rope). Caltrans also writes “Exist,” “Elect” (electrical) and “Irr C” (irrigation conduit) in mixed case.</p>`,
  watch: `<p>Some abbreviations mean two things. ADJ can be “adjust” or “adjacent.” FS can be “flow sensor” on an irrigation sheet and “finish surface” on a grading sheet. Read the set's own list and the sheet you're on.</p>`
},

{ h: "Common plan abbreviations · grading and site",
  lead: "Grading and site sheets use their own codes, mostly for heights. You need them to read slopes, planters and walls, even if someone else does the grading.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Abbreviation</th><th>Stands for</th><th>What it is</th></tr></thead>
<tbody>
<tr><td>FG</td><td>Finish grade</td><td>The final height of the soil surface</td></tr>
<tr><td>FS</td><td>Finish surface</td><td>The final height of paving or other hard surface</td></tr>
<tr><td>EG</td><td>Existing grade</td><td>Today's ground height</td></tr>
<tr><td>TC</td><td>Top of curb</td><td>Height of the curb top</td></tr>
<tr><td>FL</td><td>Flow line</td><td>The low line where water runs, such as the gutter</td></tr>
<tr><td>TW / BW</td><td>Top of wall / bottom of wall</td><td>Wall heights; BW is often the finish grade at the wall's base</td></tr>
<tr><td>INV</td><td>Invert</td><td>The inside bottom of a pipe or drain</td></tr>
<tr><td>RIM</td><td>Rim</td><td>Top of a drain grate or box lid</td></tr>
<tr><td>HP / LP</td><td>High point / low point</td><td>Where water drains away from, and to</td></tr>
<tr><td>GB</td><td>Grade break</td><td>Where the slope changes</td></tr>
<tr><td>FF</td><td>Finished floor</td><td>Building floor height; soil must stay below it</td></tr>
<tr><td>AD, CB, SD, CO</td><td>Area drain, catch basin, storm drain, cleanout</td><td>Drainage parts you may install or must avoid</td></tr>
<tr><td>PCC, AC, HMA, DG</td><td>Portland cement concrete, asphalt concrete, hot mix asphalt, decomposed granite</td><td>Paving types you may trench through or sleeve under</td></tr>
<tr><td>CMU</td><td>Concrete masonry unit (block)</td><td>Block walls and planters</td></tr>
</tbody></table></div>`,
  ex: `<p>“FG 112.50” next to a dot means the soil surface at that spot must end at elevation 112.50 feet. “TW 116.00 / BW 112.50” at a planter wall means a wall 3.5 ft tall above finish grade (116.00 − 112.50 = 3.50).</p>`,
  watch: `<p>Grading, drainage and hardscape are often handed to landscape subs. Module 18 covers pricing them (<a href="#m18-1">Module 18</a>). Here you only need to read them.</p>`
},

{ h: "Grading marks you need to read",
  lead: "Even when you don't do the grading, the grades decide how hard your planting and trenching will be. Learn to read spot elevations, contours and slope arrows.",
  body: `<ul>
<li><strong>Spot elevation:</strong> a dot or small cross with a height, like “FG 112.50.”</li>
<li><strong>Contour lines:</strong> lines that connect points of the same height, usually every 1 or 2 feet. Close together means steep; far apart means flat. Existing contours are dashed; new (proposed) contours are solid.</li>
<li><strong>Slope arrow:</strong> an arrow pointing downhill with a number like “2%” (percent slope) or “2:1” (2 feet across for every 1 foot up or down).</li>
<li><strong>Percent slope</strong> = rise ÷ run × 100. <strong>Ratio slope</strong> = run ÷ rise, written run:rise.</li>
</ul>`,
  ex: `<p><strong>Worked example (example numbers for practice).</strong></p>
<ol class="steps">
<li><div><b>Two spot grades</b>FG 112.50 and FG 108.00 are 90 ft apart. Rise = 112.50 − 108.00 = 4.50 ft. Slope = 4.50 ÷ 90 × 100 = <strong>5%</strong> (a ratio of 90 ÷ 4.5 = 20:1). Easy to work on.</div></li>
<li class="hl"><div><b>A planted slope</b>Top of slope 130.0, toe 118.0, 24 ft apart on plan. Rise 12 ft, run 24 ft: 24 ÷ 12 = <strong>2:1</strong>, which is 50%. Crews plant slower here, and the spec may require erosion control fabric.</div></li>
<li><div><b>Contours</b>1-ft contours that are 0.25" apart on a 1" = 20' sheet are 5 ft apart on the ground. 1 ft rise in 5 ft = 20%, or 5:1.</div></li>
</ol>`,
  watch: `<p>Plan area is flat area. A 2:1 slope has more real surface than the plan shows: about 1.118 times as much (the slope length, √(24² + 12²) = 26.8 ft, divided by the 24 ft run). For mulch or fabric on steep slopes, that difference is real material. Module 7 and <a href="#m18-1">Module 18</a> cover the pricing.</p>`
},

{ h: "Irrigation symbols: from the water source to the valve",
  lead: "Learn the legend before you look at the plan. Every irrigation set starts at the point of connection and works downstream to the valves.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part (common abbreviation)</th><th>What it does</th><th>How it's priced</th></tr></thead>
<tbody>
<tr><td>Point of connection (POC)</td><td>Where your system starts: a tap, a meter, a stub-out left by the plumber or civil contractor</td><td>EA (each); check who installs it</td></tr>
<tr><td>Water meter (WM; RWM for recycled)</td><td>Measures water; usually set by the water agency</td><td>Often by others; agency fees excluded</td></tr>
<tr><td>Backflow preventer (BFP or BPA, backflow preventer assembly; RP, reduced pressure principle assembly; DC, double check valve assembly)</td><td>Keeps irrigation water out of drinking water</td><td>EA, plus enclosure and testing</td></tr>
<tr><td>Master valve (MV, RCV-M or RCVM)</td><td>Shuts the mainline when no zone is running</td><td>EA</td></tr>
<tr><td>Flow sensor (FS)</td><td>Detects breaks and high flow</td><td>EA, plus wire to controller</td></tr>
<tr><td>Controller (Irr C on some sets; ICC = irrigation controller enclosure cabinet)</td><td>The timer; on commercial jobs often a smart or central-control unit</td><td>EA, plus pad, power, antenna</td></tr>
<tr><td>Mainline (supply line, main)</td><td>Pipe under constant pressure, upstream of the valves; heavy solid line</td><td>LF by size and class</td></tr>
<tr><td>Remote control valve (RCV)</td><td>Opens one zone; callout shows controller and station</td><td>EA by size</td></tr>
<tr><td>Quick coupler (QC)</td><td>Hose hookup on the mainline</td><td>EA</td></tr>
<tr><td>Gate or ball valve (GV, BV)</td><td>Manual shutoff to isolate parts of the main</td><td>EA by size</td></tr>
<tr><td>Sleeve / conduit</td><td>Pipe under paving that carries main, lateral or wire</td><td>LF by size; check who installs</td></tr>
</tbody></table></div>`,
  ex: `<p>On 11-428704 the legend adds recycled-water parts: RWCA (recycled water connection assembly), RWM (recycled water meter), CCTS (cross connection test station), RWWS (recycled water warning sign), CARV (combination air release valve), antenna mast and 2W (two-wire cable). The water source is an existing Otay Water District recycled-water meter at Palomar Street (IP-7).</p>`,
  watch: `<p>Mainline is pressurized all the time; laterals (downstream of the valves) are only pressurized when the zone runs. Specs usually require heavier pipe and deeper cover for the main. Never price main and lateral at the same rate.</p>`
},

{ h: "Irrigation devices up close · the water source assembly",
  lead: "The first ten feet after the meter hold the most expensive parts per foot on the job. The detail sheets show every piece, and the notes add more.",
  body: `<p>In order, from the water source downstream, a typical commercial assembly has:</p>
<ol class="steps">
<li><div><b>Meter and service</b>Usually by the water agency or civil contractor. Find out who (next slides).</div></li>
<li><div><b>Wye strainer (WS)</b>A Y-shaped screen that catches grit before the backflow and valves.</div></li>
<li class="hl"><div><b>Backflow preventer</b>RP (reduced pressure) or DC (double check) assembly, above ground, often in a locking cage or enclosure on a concrete pad.</div></li>
<li><div><b>Pressure regulator (PRV, pressure regulating valve)</b>Only where pressure is too high.</div></li>
<li class="hl"><div><b>Master valve and flow sensor</b>In valve boxes, wired back to the controller so it can shut the main on a break.</div></li>
<li><div><b>Controller</b>On a pad or wall, with power (electrical sheets) and sometimes an antenna.</div></li>
</ol>`,
  ex: `<p><strong>Real notes from 11-431064 (SR-905) irrigation details:</strong></p>
<ul>
<li>“Wye strainer and fittings must be same size as backflow preventer shown on plans.”</li>
<li>“BPA must be constructed with copper pipe from the water meter … through the BPA to connection to PVC as shown on detail.” (Copper costs more than PVC. Price it.)</li>
<li>“All metal in contact with soil and Portland cement concrete must be wrapped with 2" wide plastic backed adhesive polyethylene tape 20 mil thick with ½" overlap.”</li>
<li>The flow sensor detail calls for straight pipe with no fittings: “Length = 10 × supply line Dia” on one side and “5 × supply line Dia” on the other.</li>
</ul>`,
  watch: `<p>None of those notes show on the plan view, where the whole assembly is one small symbol. Always open the detail for the POC, backflow, master valve and flow sensor before you price them.</p>`,
  src: "Caltrans contract 11-431064 plans, irrigation detail sheets (backflow preventer assembly and flow sensor details)."
},

{ h: "Irrigation devices up close · valves, boxes and wire",
  lead: "Each valve on the plan is really a small kit: the valve, a box, gravel, fittings, wire splices and a tag. The legend and details tell you what's in the kit.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Device</th><th>Usually drawn as</th><th>What comes with it</th></tr></thead>
<tbody>
<tr><td>Remote control valve (RCV)</td><td>Filled circle or square with a callout tag</td><td>Valve box, gravel, isolation valve (often), wire connectors, ID tag</td></tr>
<tr><td>Drip control zone kit (CZK)</td><td>Valve symbol with a filter and regulator note</td><td>Valve, filter, pressure regulator, box</td></tr>
<tr><td>Quick coupler (QC)</td><td>Small triangle or circle on the main</td><td>Swing joint, box, coupler key at closeout</td></tr>
<tr><td>Isolation, gate or ball valve (GV, BV)</td><td>Bow-tie shape on the main</td><td>Box; sized to the pipe</td></tr>
<tr><td>Air release valve (ARV; CARV on Caltrans)</td><td>Small symbol at high points of the main</td><td>Box and gravel</td></tr>
<tr><td>Flush valve or flush cap (drip)</td><td>Small symbol at the end of a drip zone</td><td>Box or cap</td></tr>
<tr><td>Control wire or two-wire cable</td><td>Often not drawn; “wire in common trench with main”</td><td>LF of wire, splices, sometimes conduit</td></tr>
</tbody></table></div>
<p class="small">Shapes vary by designer. The table shows common habits; the legend on your set is the rule.</p>`,
  ex: `<p>Real spec text that turns into labor, 11-428704 Special Provisions (SP) 20-2.01B(7): “Remote control valves must be labeled with a polyurethane tag. Attach the tag tightly with a nylon tie to the conductor wire. The tag must be stamped on both sides with the appropriate letters and numbers at least 1 inch high showing the valve's controller and station.” On a job with 100 valves that's 100 stamped tags.</p>`,
  watch: `<p>Wire is often not drawn at all. Look for a note such as “control wire in common trench with mainline” or a two-wire symbol. If you can't find how the valves are wired, ask. Wire and splices are a real cost on every valve (Module 6).</p>`
},

{ h: "Reading a valve callout",
  lead: "The tag next to each valve packs four or five facts into one line. Learn the pattern on each set from its legend.",
  body: `<figure class="fig"><img src="img/pdd/iss1-codes.jpg" data-full="img/pdd/iss1-full.jpg" alt="ISS-1 valve code template showing RCV size, Calsense group, controller letter, station, GPM and number of sprinklers" loading="lazy"><figcaption><b>ISS-1 valve code, 11-428704.</b> X-X(X)-XX-XX-XX = RCV size, Calsense group number or hydraulic block, controller unit letter, controller station, gallons per minute (GPM), and quantity of sprinklers when shown. Below it, the dashed tag for replacing valve box cover labels: existing controller and station, then new controller and station. · tap to zoom</figcaption></figure>
<p>A typical private set uses a simpler tag: a controller letter and station number (like “A-12”), the valve size (1"), and the zone flow (18 GPM), sometimes with the precipitation rate or hydrozone. The legend shows the pattern.</p>`,
  ex: `<figure class="fig"><img src="img/pdd/ip7-valves.jpg" data-full="img/pdd/ip7-full.jpg" alt="IP-7 valve callouts such as 97A-7 (A-7) with asterisks" loading="lazy"><figcaption><b>IP-7 valve callouts.</b> “97A-7 (A-7)” means old valve A-7 becomes station 7 on controller '97A'. The * means you operate that existing facility during construction. · tap to zoom</figcaption></figure>`,
  watch: `<p>Count valves from the callouts, then check the station count against each controller's size. A 40-station controller can't run 44 stations. On 11-428704, IP-7 reads “Exist IC '97A' (GR Comm), 48 station, 35 used”: room to spare.</p>`
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
<p>The pipe sizing chart on the same sheet: 1" for 1 to 24 bubblers, 1¼" for 25 to 44, 1½" for 45 to 60, 2" for 61 to 100 (at 0.5 GPM each). Note 5 says any lateral not labeled must be 1", or as shown on the pipe sizing charts. (psi = pounds per square inch; GPM = gallons per minute.)</p>`,
  watch: `<p>On a private job the schedule usually names the make and model, sometimes with “or equal.” Price exactly the model shown. A cheaper “equal” must be approved (Module 5), and you may not get approval after you've won.</p>`
},

{ h: "Worked example: flow and pipe size from the legend",
  lead: "The schedule gives each head's flow. Add them up for a valve and you can check pipe sizes and controller loads before you trust the plan.",
  body: `<p>Use the real ISS-1 numbers from 11-428704 with example head counts.</p>
<ol class="steps">
<li><div><b>A tree well valve</b>11 trees × 4 flood bubblers = 44 bubblers. 44 × 0.5 GPM = <strong>22 GPM</strong>.</div></li>
<li class="hl"><div><b>Pipe size at the valve</b>The pipe sizing chart says 25 to 44 bubblers = 1¼". So the first run leaving the valve is <strong>1¼"</strong>. After you pass enough trees that 24 or fewer bubblers remain downstream, the pipe drops to 1".</div></li>
<li><div><b>Where the size changes</b>24 bubblers ÷ 4 per tree = 6 trees. The last 6 trees on the run are on 1"; the first 5 trees' worth of pipe is 1¼".</div></li>
<li class="hl"><div><b>A rotor valve</b>9 type-5 riser sprinklers × 3.5 GPM = <strong>31.5 GPM</strong>. Compare that to the GPM written in the valve callout. If they don't match, find out why.</div></li>
</ol>`,
  ex: `<p>Why bother? On a private lump-sum job, you price the pipe sizes. If the plan shows 1" pipe for 44 bubblers, either the plan is wrong or you missed a chart. Catching it on bid day saves a change order fight later.</p>`,
  watch: `<p>This is a reading check, not a redesign. Don't change the design in your bid. If your math says a pipe is too small, ask a question (Module 12) and price what's shown unless the answer changes it.</p>`
},

{ h: "Notes, keynotes and callouts",
  lead: "Notes are part of the contract. A single general note can add hours of labor to every valve or head on the job.",
  body: `<ul>
<li><strong>General notes:</strong> rules for the whole sheet or set, usually in a numbered list. Read every one.</li>
<li><strong>Keynotes:</strong> a number or letter in a symbol (a hexagon or circle) on the plan, explained in a keynote list on the side. Common on private sets.</li>
<li><strong>Callouts:</strong> text with a leader line pointing to one thing: a pipe size, a valve label, “Exist CAP” (existing cap).</li>
<li><strong>Valve callouts:</strong> on 11-428704, a tag like “97G-26” means controller '97G', station 26.</li>
<li><strong>Abbreviations:</strong> “Exist” means existing. “(E)” and “(N)” mean existing and new on many private sets, but on Caltrans quantity tables “(N)” means <em>not a separate pay item</em>. Always read the abbreviation list on that set.</li>
</ul>`,
  ex: `<p>Real general notes on ISS-1 and what they cost you:</p>
<ul>
<li>Note 2: every 90° turn in the main needs two 45° elbows. (More fittings and labor.)</li>
<li>Note 3: all piping, equipment and sprinkler caps must be purple or labeled per San Diego County Department of Environmental Health (DEH) rules for recycled water. (Purple parts cost more.)</li>
<li>Note 4: no ponding, runoff or overspray of recycled water. (Adjustment time, maybe different nozzles.)</li>
<li>Note 7: Calsense flow checking must be enabled at all times. (Programming and troubleshooting time.)</li>
<li>Note 8: no storage of materials or equipment within the dripline of existing trees. (Plan your staging.)</li>
</ul>`,
  watch: `<p>Notes on one sheet often apply to others. A “typical” note on the first irrigation sheet usually applies to every irrigation sheet. If a note seems to change your scope, it does, until an RFI (request for information) says otherwise (Module 12).</p>`
},

{ h: "Irrigation and planting abbreviations",
  lead: "These codes show up on legends, callouts and details. Keep this table next to you on your first few sets.",
  body: `<div class="twocol">
<div><h3>Irrigation</h3><ul>
<li><strong>POC</strong> point of connection</li>
<li><strong>BFP / BPA</strong> backflow preventer (assembly); <strong>RP</strong> reduced pressure; <strong>DC</strong> double check</li>
<li><strong>PRV</strong> pressure regulating valve; <strong>WS</strong> wye strainer</li>
<li><strong>MV / RCVM</strong> master valve; <strong>FS</strong> flow sensor</li>
<li><strong>RCV</strong> remote control valve; <strong>CZK</strong> drip control zone kit</li>
<li><strong>QC</strong> quick coupler; <strong>GV</strong> gate valve; <strong>BV</strong> ball valve</li>
<li><strong>PVC</strong> polyvinyl chloride pipe; <strong>SCH 40</strong> Schedule 40 (wall thickness); <strong>CL 200 / CL 315</strong> pressure class in psi</li>
<li><strong>HDPE</strong> high-density polyethylene</li>
<li><strong>GPM / GPH</strong> gallons per minute / per hour; <strong>PSI</strong> pounds per square inch</li>
<li><strong>Irr C, Elect C</strong> irrigation conduit, electrical conduit (Caltrans)</li>
<li><strong>CNC</strong> on Caltrans sheets, the low-voltage control and neutral conductors (wires)</li>
<li><strong>2W</strong> two-wire cable; <strong>ICC</strong> irrigation controller enclosure cabinet</li>
</ul></div>
<div><h3>Planting</h3><ul>
<li><strong>#1, #5, #15</strong> 1-, 5-, 15-gallon size containers</li>
<li><strong>24" BOX, 36" BOX</strong> tree boxes by width</li>
<li><strong>B&amp;B</strong> balled and burlapped (root ball wrapped in burlap)</li>
<li><strong>BTH</strong> brown trunk height (palms)</li>
<li><strong>MT / MULTI</strong> multi-trunk; <strong>STD</strong> standard (single trunk)</li>
<li><strong>CAL</strong> caliper (trunk thickness); <strong>DBH</strong> diameter at breast height (existing trees)</li>
<li><strong>FLT</strong> flats; plugs; cuttings</li>
<li><strong>TPZ</strong> tree protection zone</li>
<li><strong>WUCOLS</strong> Water Use Classification of Landscape Species: VL, L, M, H (very low to high)</li>
<li><strong>SQYD, CY</strong> square yards, cubic yards</li>
<li><strong>Plant codes</strong> like “ALO STR” (next slides)</li>
</ul></div>
</div>`,
  ex: `<p>Real planting notes from 11-431064 PL-1: “Ball &amp; burlap BTH (brown trunk height 15') unless otherwise noted,” “All Washingtonia palms must be brown skinned,” “Minimum 6' in height for Quercus agrifolia in container,” and “Plant source from San Diego and Orange County only.” Each one limits which nursery stock you can buy and what it costs.</p>`,
  watch: `<p>Container sizes in nursery quotes and on plans don't always match. A “#5” on the plan is a 5-gallon class container. If a nursery offers a different size, it's a substitution that needs approval (Module 5).</p>`
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

{ h: "Planting symbols: trees, shrubs and plant codes",
  lead: "Trees are drawn big, shrubs small, and groundcover as a pattern. Each symbol connects to the legend by its shape or by a short plant code.",
  body: `<ul>
<li><strong>Trees:</strong> a circle drawn about the size of the canopy at maturity, with a center mark where the trunk goes. Different species get different circle styles (spiky, scalloped, plain).</li>
<li><strong>Existing trees:</strong> light or dotted circles. Look for “to remain,” “remove” or a big X through the symbol (common for removal).</li>
<li><strong>Shrubs:</strong> small circles, often grouped, with a leader to a callout like “12 · #5 · ALO STR.”</li>
<li><strong>Plant codes:</strong> many sets use the first letters of the botanical name: ALO STR = <em>Aloe striata</em>, BAC PIL = <em>Baccharis pilularis</em>.</li>
<li><strong>Groundcover and mulch:</strong> hatch patterns (next slides).</li>
</ul>`,
  ex: `<figure class="fig"><img src="img/pdd/pp6-callouts-right.jpg" data-full="img/pdd/pp6-full.jpg" alt="PP-6 east end planting callouts: 60 each of five shrubs, compost, weed germination, wood mulch and temporary protection fence" loading="lazy"><figcaption><b>PP-6 east end, 11-428704.</b> One leader carries a stack of callouts: 60 each of five species by plant code (AEO HAW, ALO BLU, ALO STR, BAC PIL, SED NUS), 13 CY compost, 310 SQYD W Germ (weed germination), 20 CY wood mulch, remove ground cover. Dotted circles are the shrubs; the —x—TPFR—x— line is 220 LF of temporary protection fence. · tap to zoom</figcaption></figure>`,
  watch: `<p>Count every symbol <em>and</em> read every callout. Sometimes the callout number and the count of symbols differ. Note both, and ask which governs (Module 7 shows a real case on this job).</p>`
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
<p>The difference is 41 plants. At any price per installed plant, that's real money on one bed.</p>
<figure class="fig"><img src="img/pdd/pl1-hatches.jpg" data-full="img/pdd/pl1-full.jpg" alt="PL-1 planting legend hatches for compost, weed germination, wood mulch, MEPA, existing trees and protection fence" loading="lazy"><figcaption><b>PL-1 hatches, 11-428704.</b> One hatch can mean several jobs at once: diagonal lines = compost + weed germination + remove ground cover; horizontal lines add wood mulch. The scalloped outline is MEPA (maintain existing planted areas). · tap to zoom</figcaption></figure>`,
  watch: `<p>Hatches can overlap: a groundcover hatch inside a mulch hatch inside a drip hatch. One area may need plants, mulch and drip. Make a list of every hatch in the legend and check each area for all of them.</p>`
},

{ h: "Existing trees and protection zones",
  lead: "Existing trees limit where you can trench, stage and drive. The plans show them, and the notes tell you what you can't do near them.",
  body: `<ul>
<li><strong>Dripline:</strong> the outer edge of a tree's canopy, projected straight down to the ground.</li>
<li><strong>Tree protection zone (TPZ):</strong> a fenced area around a tree where digging, storage and driving are limited. Shown with a fence line and a note or detail.</li>
<li><strong>What it changes:</strong> hand digging or boring instead of trenching, rerouted pipe, a protection fence pay item, staging somewhere else, maybe an arborist on site.</li>
<li>On private jobs, look for an arborist report or tree protection plan in the set or the specs.</li>
</ul>`,
  ex: `<p>11-428704 has three layers of the same rule: ISS-1 note 8 (“No storage of materials or equipment is allowed within the dripline of existing trees and shrubs”), an IP-7 note to keep the supply line out of tree drip lines, and the TPFR fence on the planting sheets (220 LF on the east end of PP-6 alone; PQ-1 totals 1,120 LF).</p>`,
  watch: `<p>If the main is drawn right through a tree's dripline and a note says to stay out, the plan and the note conflict. Ask how they want it built, and price the slower method if no answer comes.</p>`
},

{ h: "Details and detail callouts",
  lead: "Details show how each item is built. They usually add parts and labor that the plan view never shows.",
  body: `<ul>
<li><strong>Private sets:</strong> a callout bubble on the plan, split in two: the top number is the detail, the bottom is the sheet. “3 / L-5.1” means detail 3 on sheet L-5.1.</li>
<li><strong>Caltrans sets:</strong> details are on ID (irrigation) and PLD (planting) sheets, titled by item, plus statewide <strong>Standard Plans</strong> (for example H4, the sprinkler assembly, revised as RSP H4, a revised standard plan, bound at the back of this set).</li>
<li>Most details say <strong>NTS</strong> or “No scale.” Read the written dimensions; never measure a detail.</li>
<li>When the detail and the plan disagree, the detail usually governs (Module 5 explains the order of precedence).</li>
</ul>`,
  ex: `<p>The tree well detail (ID-5 and PLD-1) turns one 24" box pine into: a 48" hole, a 60" basin, staking, a gravel sump, a perforated PVC drainpipe with a removable purple drain grate, 4 flood bubblers on a swing joint, iron sulfate, slow-release fertilizer and 5 fertilizer packets. The plan view shows a single tree symbol.</p>
<p>Other ID sheets show the antenna mast, master valve and flow sensor assembly, and the recycled water warning sign and detectable warning tape that runs “continuously along the entire trench.”</p>`,
  watch: `<p>Read every detail that applies to your scope before pricing, even if it looks standard. Valve box depth, gravel, thrust blocks, wire splices and staking are where “standard” stops being standard.</p>`,
  src: "Plans ID-1 to ID-6, PLD-1, RSP H4 (11-428704)."
},

{ h: "Anatomy of a detail: plan, section and elevation",
  lead: "A detail often shows the same thing from two or three directions. Each view answers a different question.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>View</th><th>Looking from</th><th>Answers</th></tr></thead>
<tbody>
<tr><td><strong>Plan</strong></td><td>Straight down from above</td><td>How many, how far apart, where around the plant or valve</td></tr>
<tr><td><strong>Section</strong></td><td>A slice cut straight through, seen from the side</td><td>How deep, what's under the ground, layers (gravel, soil, pipe)</td></tr>
<tr><td><strong>Elevation</strong></td><td>The side, without cutting</td><td>How tall: walls, signs, enclosures, controller pedestals</td></tr>
</tbody></table></div>
<ul>
<li>Every detail has a <strong>title</strong> (often with “(Mod),” meaning a standard detail changed for this job), a <strong>number</strong>, and a <strong>scale</strong> or “NTS.”</li>
<li><strong>Leader lines</strong> run from a note to the part it names.</li>
<li>On larger drawings, a <strong>section cut symbol</strong> (a line with arrows and a letter, like A–A) shows where the slice was taken. The section drawing elsewhere has the same letter.</li>
</ul>`,
  ex: `<figure class="fig"><img src="img/pdd/id5-treewell.jpg" data-full="img/pdd/id5-full.jpg" alt="Tree well sprinkler assembly (Mod) detail with plan view and section view" loading="lazy"><figcaption><b>Tree Well Sprinkler Assembly (Mod), ID-5, 11-428704.</b> The <em>plan</em> (top) shows four flood bubblers 90° apart, a 5' diameter tree basin and 5' minimum distances. The <em>section</em> (bottom) shows depth: 4" drainpipe filled with gravel, removable drain grate, check valve, riser, swing joint, and a 1" min to 2" max clearance at FG (finish grade). · tap to zoom</figcaption></figure>`,
  watch: `<p>The plan view of a detail tells you how many parts; the section tells you how deep you dig. Read both. Depth is labor.</p>`
},

{ h: "Worked example: turning a detail into a parts list",
  lead: "For every detail in your scope, write a short parts and steps list. Then you'll never miss what the plan view hides.",
  body: `<p>Detail: flow sensor assembly, 11-431064 (SR-905) irrigation details. Example: a 2" flow sensor on a 2" supply line.</p>
<ol class="steps">
<li><div><b>List every labeled part</b>Flow sensor (size per plan), valve box (Mod) and cover, ¾" gravel or crushed rock 6" minimum, woven wire cloth, PVC pipe per plan, electrical conduit for the conductors to the controller.</div></li>
<li class="hl"><div><b>Do the math in the notes</b>Note 1: straight pipe = 10 × supply line diameter = 10 × 2" = <strong>20"</strong>. Note 2: 5 × 2" = <strong>10"</strong>. That's 30" of straight pipe with no fittings: the box must fit it, or it needs a box extension (note 3: “valve box or box extension with 2 side openings”).</div></li>
<li><div><b>Note the extras</b>The detail also says “seal openings with No. 30 asphalt-saturated felt.” A small item, but on every box.</div></li>
<li class="hl"><div><b>Write it as a list</b>1 sensor, 1 box with extension if needed, gravel, wire cloth, felt, 30" straight pipe, couplings, conduit run to the controller. Price each line (Modules 6 and 8).</div></li>
</ol>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Qty per assembly</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Flow sensor, size per plan</td><td>1 EA</td><td>Detail and legend</td></tr>
<tr><td>Valve box (Mod) with 2 side openings</td><td>1 EA</td><td>Detail, note 3</td></tr>
<tr><td>Straight PVC, no fittings</td><td>20" + 10" for a 2" line</td><td>Notes 1 and 2</td></tr>
<tr><td>¾" gravel, 6" min; woven wire cloth; No. 30 felt</td><td>1 set</td><td>Detail</td></tr>
<tr><td>Conduit and conductors to controller</td><td>LF from plan</td><td>Detail and plan</td></tr>
</tbody></table></div>`,
  watch: `<p>Don't price the same parts twice. If the bid item or your assembly price already includes the box and gravel, don't add them again as separate lines.</p>`,
  src: "Caltrans contract 11-431064 plans, flow sensor detail notes 1 to 3."
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
  ex: `<p>On 11-428704: the utility sheets (U-1 to U-7) show Otay Water District water and recycled-water lines in the work area. Electrical sheet E-1 shows an existing San Diego Gas &amp; Electric (SDG&amp;E) service enclosure, 120/240 V (volts), with a 20-amp breaker labeled “Irr,” and a note to install 2 #10 conductors in conduit per the irrigation detail to the new controller enclosure. That's an electrician's work. The top three bidders in Module 15 all listed an electric service subcontractor.</p>`,
  watch: `<p>On private jobs, the POC is often “stub-out by plumbing contractor” on one sheet and “by landscape contractor” on another. Find every mention, and state in your proposal exactly where your work starts (Module 13).</p>`
},

{ h: "Hardscape and site sheets that touch your work",
  lead: "Walls, paving and drains aren't irrigation or planting, but they decide where your pipe can go, what you sleeve, and what you dig around. Read them for the edges of your work.",
  body: `<ul>
<li><strong>Sleeves:</strong> every place a pipe or wire crosses under paving needs a sleeve before the paving goes in. Find who installs them, and when.</li>
<li><strong>Edges:</strong> mow curbs, headers and edging separate lawn, beds and DG (decomposed granite). Often on the hardscape sheets, sometimes in your scope.</li>
<li><strong>Planters and raised beds:</strong> wall height (TW/BW), drains, waterproofing and soil depth. Planters on a podium deck add drain mats and lightweight soil.</li>
<li><strong>Tree grates, root barriers and structural soil</strong> near paving: who furnishes and installs?</li>
<li><strong>Drains in planting areas</strong> (area drains, subdrains): you must keep them clear and may be asked to install them.</li>
</ul>`,
  ex: `<p>11-431064 (SR-905) put several of these in the landscape set itself: gravel mulch types with color requirements (“mostly red in color, closely resembling ‘red lava rock’”), rock blanket and HDPE (high-density polyethylene) edging with a separate layout detail (“See planting details for HDPE edging layout”). If you didn't read those sheets, you'd miss several rock products and an edging item.</p>`,
  watch: `<p>Pricing hardscape, grading and drainage is a different skill. Module 18 covers the scopes GCs often hand to landscape subs (<a href="#m18-1">Module 18</a>). Here, just mark every hardscape item that touches your work and note who builds it.</p>`
},

{ h: "Coordination: who draws it, who builds it",
  lead: "Most costly surprises happen where two trades meet. Make a list of every meeting point and find each one on every sheet that shows it.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Meeting point</th><th>Sheets to check</th><th>Question to answer before bid day</th></tr></thead>
<tbody>
<tr><td>Water service, meter, POC</td><td>Civil utility, plumbing, irrigation</td><td>Who taps, who sets the meter, who pays agency fees, where does my pipe start?</td></tr>
<tr><td>Backflow and enclosure</td><td>Irrigation details, civil, plumbing</td><td>Who furnishes, who installs, who tests and certifies?</td></tr>
<tr><td>Controller power</td><td>Electrical site plan, panel schedule, irrigation details</td><td>Who provides the circuit, conduit and the final connection?</td></tr>
<tr><td>Sleeves under paving</td><td>Civil, hardscape, irrigation</td><td>Who installs them, how many, what size, before paving?</td></tr>
<tr><td>Finish grade</td><td>Civil grading, landscape notes</td><td>Who brings the site to rough grade, and who does fine grading?</td></tr>
<tr><td>Planter drains and waterproofing</td><td>Architectural, structural, landscape</td><td>Who installs drains and protects waterproofing during planting?</td></tr>
<tr><td>Existing irrigation to keep running</td><td>Removal (IR or demo) sheets, IP sheets</td><td>Who keeps existing plants watered during construction?</td></tr>
</tbody></table></div>`,
  ex: `<p>11-428704 answers several of these in writing: E-1 puts the controller power on the electrical side with 2 #10 conductors from an existing 20 A irrigation breaker; the * on IP-7 valve callouts puts operating existing valves on you. When a set answers it, quote the sheet in your notes. When it doesn't, ask.</p>`,
  watch: `<p>“By others” on one sheet is not enough. The other trade's sheets must show it as theirs too. If only your sheets say “by others,” assume it may come back to you and write a clear exclusion (Module 13).</p>`
},

{ h: "Revisions, clouds and addenda",
  lead: "Plans change during bidding. A revision cloud and a numbered triangle show exactly what changed. Pricing an old sheet is one of the most expensive mistakes you can make.",
  body: `<ul>
<li><strong>Revision cloud:</strong> a scalloped outline drawn around the changed area.</li>
<li><strong>Delta:</strong> a triangle with the revision number next to the cloud. It matches a line in the title block's revision list.</li>
<li><strong>Addendum:</strong> a formal change issued before bids are due. It may replace whole sheets, change spec sections, or answer questions. Each addendum is numbered.</li>
<li><strong>Bulletin / ASI (architect's supplemental instructions):</strong> changes after the contract is signed (Module 16).</li>
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

{ h: "Digital workflow, step 1 · set up the job folder",
  lead: "Ten minutes of setup saves hours of hunting later, and makes it easy to prove which set you priced.",
  body: `<ol class="steps">
<li><div><b>Make one folder per bid</b>Name it by date due, owner and project, like “2026-11-14 City Median Retrofit.”</div></li>
<li><div><b>Make subfolders</b>01 Bid docs as received · 02 Addenda · 03 Working set · 04 Takeoff · 05 Quotes · 06 Proposal.</div></li>
<li class="hl"><div><b>Never mark up the original</b>Keep the downloaded files untouched in 01. Copy them into 03 and work only there.</div></li>
<li><div><b>Bookmark by sheet code</b>Add a bookmark for each sheet (ISS-1, IP-1, L-3.1) so you can jump between them.</div></li>
<li><div><b>Swap in addenda</b>When an addendum replaces a sheet, put the new sheet in the working set, stamp the old one “SUPERSEDED,” and log it.</div></li>
<li class="hl"><div><b>Start a sheet index</b>A simple table: sheet number, code, title, date, “in my scope?” yes or no, notes.</div></li>
</ol>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Sheet</th><th>Code</th><th>Title</th><th>Rev / date</th><th>My scope?</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>24</td><td>ISS-1</td><td>Irrigation sprinkler schedule</td><td>03-22-21</td><td>Yes</td><td>8 notes priced</td></tr>
<tr><td>45</td><td>IQ-1</td><td>Irrigation quantities</td><td>Add. 1, 08-27-21</td><td>Yes</td><td>Replaced sheet; 2" RCV now 3</td></tr>
<tr><td>57</td><td>E-1</td><td>Electric service (irrigation)</td><td>06-28-21</td><td>Check</td><td>Electrician; get a quote</td></tr>
</tbody></table></div>
<p class="small">Sample rows from 11-428704. Use this as a template.</p>`,
  watch: `<p>File names like “plans(3) final FINAL.pdf” cause real mistakes. Rename every file the day you download it.</p>`
},

{ h: "Digital workflow, step 2 · calibrate, measure and count",
  lead: "Use the same routine on every sheet so your numbers can be checked by anyone.",
  body: `<ol class="steps">
<li><div><b>Calibrate</b>Use the measurement tool's calibrate function on the scale bar or the Caltrans 3" border bar. Then measure a known distance (two stations, or a written dimension) to confirm.</div></li>
<li class="hl"><div><b>Set up your item list</b>One measurement type per bid item or takeoff line: “4" CL 315 main” (LF), “#5 shrubs” (count), “Wood mulch” (area). Give each its own color.</div></li>
<li><div><b>Work one sheet at a time</b>Stop at match lines. Finish a sheet completely before the next.</div></li>
<li><div><b>Counts</b>Click every symbol with the count tool. Zoom in on crowded areas so you don't skip any.</div></li>
<li class="hl"><div><b>Lengths and areas</b>Trace pipe runs with the length tool and beds with the area tool. For curved beds, click more points.</div></li>
<li><div><b>Label as you go</b>Add a short note on anything odd: “size not shown, assumed 1" per note 5.”</div></li>
</ol>`,
  ex: `<p><strong>Color legend (example).</strong> Red = 4" main · Orange = 2" main · Blue = 1" lateral · Purple = 1¼" lateral · Green dots = #5 shrubs · Dark green dots = 24" box trees · Brown area = wood mulch · Gray area = weed germination. Keep the legend as a markup on the cover of your working set.</p>`,
  watch: `<p>The two most common software errors are a sheet that was never calibrated (it uses the last sheet's scale) and a measurement placed on the wrong layer or item. Check the item totals sheet by sheet against a rough hand estimate.</p>`
},

{ h: "Digital workflow, step 3 · compare, export and check",
  lead: "The takeoff isn't done until it's checked, exported and tied to a sheet and date.",
  body: `<ol class="steps">
<li><div><b>Compare revisions</b>When a sheet is replaced, use the compare or overlay feature to highlight what moved. Re-measure everything in the changed areas.</div></li>
<li class="hl"><div><b>Export the quantities</b>Export your measurement list to a spreadsheet, one row per item per sheet.</div></li>
<li><div><b>Total by item</b>Add the sheets. Compare each total to the quantity tables or bid item list, if there are any.</div></li>
<li class="hl"><div><b>Hand check one item per sheet</b>Re-measure one run with the scale bar or a ruler. If it's off by more than a few percent, find out why.</div></li>
<li><div><b>Save a frozen copy</b>Save the marked-up set as a PDF with the date in the name. That is your record of what you priced.</div></li>
</ol>`,
  ex: `<p><strong>Check example from 11-428704.</strong> Your 4" main by sheet should come close to IQ-1: 440, 1,365, 1,210, 165, 1,150, 1,385 and 1,130 LF, plus 648 LF in conduits = 7,493 LF. If your IP-2 total is 1,000 LF instead of 1,365, look for a missed run or a bad calibration on that sheet.</p>`,
  watch: `<p>If a quantity table and your takeoff disagree and you can't find why, don't quietly use one. Ask, and on a lump-sum bid state which one you priced (Module 13).</p>`
},

{ h: "A routine for reading a new set",
  lead: "Read the set in the same order every time. The first pass is for understanding, not counting.",
  body: `<ol class="steps">
<li><div><b>Title sheet and index</b>Check you have every sheet. Note the date and issue name.</div></li>
<li><div><b>All addenda</b>Swap in replaced sheets before you start.</div></li>
<li class="hl"><div><b>Legends, schedules, abbreviations and general notes</b>ISS-1 and PL-1 on the example job. Learn every symbol, line type and hatch.</div></li>
<li><div><b>Irrigation plans</b>Start at the POC and follow the main to the end. Find every controller.</div></li>
<li><div><b>Planting plans</b>Find every hatch and plant symbol; note trees and specimen sizes.</div></li>
<li class="hl"><div><b>Details</b>For each item in your scope, read its detail.</div></li>
<li><div><b>Other disciplines</b>Civil utility and grading, electrical, architectural site plan, traffic handling on road jobs.</div></li>
<li><div><b>Quantity tables</b>If there are any, use them to check.</div></li>
<li><div><b>Questions list</b>Write down every conflict or gap as you go. These become RFIs, requests for information (Module 12).</div></li>
</ol>`,
  ex: `<p>Budget your time: a first read-through of a 10-sheet private landscape set might take 1 to 2 hours. On the 65-sheet I-805 set, reading only the 33 landscape sheets plus E-1, E-2 and the utility sheets carefully is a half day. That time saves you from pricing the wrong job. For a guided pass through those sheets with pictures, use the <a href="#plans-1">Plan Set Deep Dive</a>.</p>`
},

{ h: "Conflict hunting: where conflicts hide",
  lead: "A conflict is any place where two parts of the documents say different things. Hunt for them on purpose, in the same places every time.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Compare</th><th>What to look for</th></tr></thead>
<tbody>
<tr><td>Schedule vs. plan</td><td>Plant or head counts in the legend that don't match the symbols; a symbol on the plan that's not in the legend</td></tr>
<tr><td>Plan vs. detail</td><td>Different sizes, depths or parts; a detail that's referenced but missing</td></tr>
<tr><td>Note vs. note</td><td>A general note that says one thing and a sheet note that says another</td></tr>
<tr><td>Plan vs. specs</td><td>Product named on the legend vs. product in the spec; test pressures; maintenance length</td></tr>
<tr><td>Quantity table vs. bid item list</td><td>Totals that don't match (rounding, or a real error)</td></tr>
<tr><td>Landscape vs. other disciplines</td><td>Pipe through a building footing, trees over a utility, controller with no power shown</td></tr>
<tr><td>Addendum vs. older sheets</td><td>A changed sheet whose quantities didn't change on the sheets that depend on it</td></tr>
<tr><td>Plan vs. site</td><td>Existing conditions on the plan that aren't there at the job walk (Module 12)</td></tr>
</tbody></table></div>`,
  ex: `<p>Keep a running list with four columns: where (sheet and spot), what conflicts, what you priced, question sent (date). It becomes your RFI list and the clarifications in your proposal.</p>`,
  watch: `<p>Precedence rules (Module 5) tell you which document wins after the fact. They don't make you whole if you priced the cheaper version. Ask before bid day.</p>`
},

{ h: "Real conflicts and hidden costs in Caltrans plan text",
  lead: "Here are real items from the plan sets of two San Diego Caltrans jobs. Some are conflicts to ask about; some are costs hiding in a note.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Job and sheet</th><th>What the plans say</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>11-428704 IQ-1</td><td>Tree well sprinkler assemblies add to 172 (43 trees × 4); Bid Item List says 180</td><td>Bidder inquiry; probably rounding (see the Deep Dive)</td></tr>
<tr><td>11-428704 WPC sheets (water pollution control)</td><td>Fiber roll 7,184 LF on plans; bid list 7,190 LF</td><td>Small rounding; note it, no question needed</td></tr>
<tr><td>11-428704 IQ-1, Addendum 1</td><td>2" remote control valves changed from 4 to 3</td><td>Re-price item 38; re-check that valve's laterals</td></tr>
<tr><td>11-428704 ISS-1 note 1</td><td>Heads, valves and main near MVPs (maintenance vehicle pullouts) must be outside the paved MVP; valves at the exiting end</td><td>Check every MVP location on the IP sheets</td></tr>
<tr><td>11-428704 ISS-1 note 6</td><td>Conduit for the conductors from the master valve and flow sensor to the controller must be 1-inch</td><td>Price 1" conduit, not direct-burial wire</td></tr>
<tr><td>11-431064 backflow detail</td><td>Copper pipe from the meter through the BPA; metal wrapped with 20 mil tape</td><td>Price copper and wrap at every BPA</td></tr>
<tr><td>11-431064 PL-1</td><td>Plant source San Diego and Orange County only; brown-skinned Washingtonia palms</td><td>Tell your nursery before they quote</td></tr>
<tr><td>11-431064 electrical notes</td><td>Contractor must verify service locations and voltages before starting work and ordering material; pull box covers marked “CALTRANS” and “SERVICE IRRIGATION”</td><td>Include in the electrician's scope</td></tr>
</tbody></table></div>`,
  ex: `<p>Writing the question: “IQ-1 totals 172 tree well sprinkler assemblies; the Bid Item List shows 180 for item 51. Please confirm the quantity.” Short, specific, with the sheet and item number. Module 12 has more templates.</p>`,
  src: "Caltrans 11-428704 plans (ISS-1 notes 1 and 6, IQ-1, WPC quantities) and Addendum 1; Caltrans 11-431064 plans (irrigation details, PL-1, electrical notes)."
},

{ h: "Scenarios: what would you do?",
  lead: "Short, real-world situations. Decide your move, then read the answer.",
  body: `<ol class="steps">
<li><div><b>The GC sends only L-sheets.</b>Ask for the civil utility, electrical site and architectural site sheets. If they don't come, bid with written assumptions: POC at a stub-out within 5 ft of the meter (example), controller power by others, sleeves by others. List them in the proposal (Module 13).</div></li>
<li class="hl"><div><b>A symbol on the plan isn't in the legend.</b>Check every legend in the set, including details and the cover sheet. Still missing? Send an RFI. Until answered, price it as the closest legend item and say so.</div></li>
<li><div><b>The PDF is a scan with no scale bar.</b>Calibrate on the longest written dimension, then check a second one. If two dimensions disagree, ask for the original file.</div></li>
<li class="hl"><div><b>An addendum arrives the day before bid.</b>Swap the sheets, compare old and new, re-measure clouded areas, update the price, and acknowledge the addendum on the bid form.</div></li>
<li><div><b>A note says “match existing.”</b>Go see what exists at the job walk, photograph it, and get a price for that exact product.</div></li>
</ol>`,
  watch: `<p>In every scenario the wrong move is the same: guessing silently. Either get an answer in writing or write your assumption into the proposal.</p>`
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

{ h: "What the traps cost: three worked examples",
  lead: "Small reading errors turn into big dollar errors because they repeat across a whole job. Here is the math.",
  body: `<p class="small">Example prices for practice only. Use your own costs.</p>
<ol class="steps">
<li><div><b>Half-size print not caught</b>A main measures 1,000 LF on your half-size print, but the true length is 2,000 LF. At an example installed cost of $12 per LF: missed 1,000 LF × $12 = <strong>$12,000 low</strong>. You win the job and lose money on every foot.</div></li>
<li class="hl"><div><b>Trees counted on both sides of a match line</b>6 trees counted twice × an example $650 per installed 24" box tree = <strong>$3,900 high</strong>. On a close bid, that can lose the job.</div></li>
<li><div><b>A “typical” valve note missed</b>The detail adds an isolation valve and a bigger box at every RCV. 80 valves × an example $95 extra each = <strong>$7,600 low</strong>.</div></li>
</ol>`,
  ex: `<p>Add them up: one set read carelessly could be $19,600 low and $3,900 high at the same time. Errors don't cancel out on purpose. Check each trap every time.</p>`,
  watch: `<p>The fix costs minutes: check the scale bar, mark match lines, and read every “TYP” detail. Put those three on your personal checklist.</p>`
},

{ t: "scorer", id: "plancheck", h: "Plan reading self-check",
  lead: "Run this before you start pricing. Score each line: 2 = done and checked, 1 = done but unsure (write a question), 0 = not done yet. Your choices are saved in this browser.",
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
  lead: "Add these to your notebook. The full list of trade words is in the Bid Dictionary.",
  terms: [
    ["Plan set", "All the drawings for one project."],
    ["Sheet index", "The list of every sheet in the set, usually on the title sheet."],
    ["Title block", "The border box with sheet title, number, stamp, dates and revisions."],
    ["Scale", "How many real feet one inch on the drawing stands for, like 1\" = 20'."],
    ["Graphic scale bar", "A ruler drawn on the sheet that stays true when the sheet is shrunk."],
    ["NTS", "Not to scale. Don't measure it."],
    ["TYP", "Typical: the note or detail applies to every similar item."],
    ["EQ", "Equal: the marked spaces are the same size."],
    ["SIM", "Similar: built like the referenced item with small changes."],
    ["NIC", "Not in contract: shown for information only."],
    ["VIF", "Verify in field: check it on site."],
    ["(E) / Exist", "Existing: already on the site."],
    ["Match line", "Line where one plan sheet continues on another."],
    ["Station (Sta)", "Distance in feet along a survey line, written like 262+48 (26,248 ft)."],
    ["Offset / Lt / Rt", "Sideways distance from the line, to the left or right."],
    ["LOW", "Limit of work: the edge of the contract work area."],
    ["FG / FS", "Finish grade (soil) / finish surface (paving): final heights."],
    ["TC / FL", "Top of curb / flow line (where water runs)."],
    ["TW / BW", "Top of wall / bottom of wall."],
    ["INV", "Invert: the inside bottom of a pipe or drain."],
    ["Contour", "A line connecting points of equal height."],
    ["Slope ratio", "Run to rise, like 2:1 (2 ft across for 1 ft up)."],
    ["POC", "Point of connection: where the irrigation system gets its water."],
    ["Backflow preventer (BFP, BPA, RP, DC)", "Device that keeps irrigation water out of drinking water."],
    ["Mainline (supply line)", "Pipe under constant pressure upstream of the valves."],
    ["Lateral", "Pipe downstream of a valve, pressurized only when the zone runs."],
    ["RCV", "Remote control valve: opens one irrigation zone."],
    ["Valve callout", "The tag by a valve giving controller, station, size and flow."],
    ["GPM / PSI", "Gallons per minute (flow) / pounds per square inch (pressure)."],
    ["Sprinkler schedule", "Table of every head type with model, radius, pressure and flow."],
    ["Plant legend / schedule", "Table of every plant with size, spacing and installation notes."],
    ["Plant code", "Short name from the botanical name, like ALO STR for Aloe striata."],
    ["O.C.", "On center: distance from one plant's center to the next."],
    ["Hatch", "A fill pattern showing an area, like groundcover or mulch."],
    ["Dripline / TPZ", "Edge of a tree's canopy / tree protection zone around it."],
    ["Keynote", "A numbered tag on the plan explained in a list on the sheet."],
    ["Detail callout", "Bubble telling you which detail and which sheet, like 3 / L-5.1."],
    ["Section / elevation", "A cut-through side view / an uncut side view."],
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
    { q: "A 1,800 SF bed is planted at 3 ft o.c., square spacing. About how many plants?", a: ["200", "600", "231"], c: 0, why: "1,800 ÷ (3 × 3) = 200. Triangular spacing would give about 231." },
    { q: "A valve detail is marked “TYP.” What does that mean for your price?", a: ["It applies only to the valve it points to", "It applies to every similar valve on the job", "It is optional"], c: 1, why: "TYP means typical: the detail or note applies to every similar item." },
    { q: "A planter wall is labeled TW 116.00 and BW 112.50. How tall is the wall above finish grade?", a: ["3.5 ft", "11.6 ft", "1.16 ft"], c: 0, why: "Top of wall minus bottom of wall: 116.00 − 112.50 = 3.50 ft." },
    { q: "Top of slope is 130.0 and the toe is 118.0, 24 ft apart on plan. What is the slope?", a: ["1:2", "2:1", "12:1"], c: 1, why: "Rise 12 ft, run 24 ft. Run ÷ rise = 24 ÷ 12 = 2, written 2:1." },
    { q: "A tree well valve feeds 11 trees with 4 bubblers each at 0.5 GPM. What is the flow?", a: ["5.5 GPM", "22 GPM", "44 GPM"], c: 1, why: "11 × 4 = 44 bubblers; 44 × 0.5 = 22 GPM." },
    { q: "An existing item on the plan is labeled “Exist … to remain.” What does it usually mean for you?", a: ["Remove it", "Protect it and don't price installing it", "Replace it with new"], c: 1, why: "“To remain” means it stays. You protect it; you don't install or remove it." },
    { q: "Only your landscape sheets say the controller power is “by others.” What should you do?", a: ["Assume it's covered", "Check the electrical sheets and, if it isn't shown there, ask or write a clear exclusion", "Add a full electrical price without asking"], c: 1, why: "“By others” must be shown on the other trade's sheets too. If not, ask and exclude in writing." }
  ]
},

{ t: "practice", id: "m4", h: "Practice assignments",
  lead: "Nine hours with real plans. Use a PDF tool with a measure and markup feature (Bluebeam Revu trial or a free PDF reader with measuring).",
  items: [
    { h: "Download and index the real plan set", hrs: 0.5, d: "<p>From <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>, download the Plans and Addendum 1 plans. Make a one-page index: sheet number, code (ISS-1, IP-1 and so on) and title for sheets 24 to 58. Mark which sheets Addendum 1 replaced and swap them into your working copy.</p>" },
    { h: "Learn the two legends", hrs: 0.75, d: "<p>On ISS-1 and PL-1, list every symbol, hatch and abbreviation with its meaning, in your own words. Include the sprinkler schedule rows, the pipe sizing chart and the 8 general notes. Next to each note, write one way it affects price.</p>" },
    { h: "Mark up the irrigation plans", hrs: 1.25, d: "<p>On IP-1 and IP-7, mark in color: the point of connection (IP-7), the new 4\" main, every controller and antenna mast, every conduit crossing, gate valves, and both match lines. Write the controller and station for five valve callouts. Check your marked main on IP-1 against the 440 LF on IQ-1.</p>" },
    { h: "Scale and stationing exercise", hrs: 1, d: "<p>(1) On the relative border scale bar, check whether your PDF view or print is full size. (2) Calibrate IP-5 and measure the distance between the crossings at Sta 262+48 Rt and 264+37 Rt; compare to the 189 ft from the stations. (3) Using the IP-1 note, compute the length of main from Sta 235+50 to Sta 249+70. (4) Print one sheet at 11 × 17, measure three runs with a ruler, and convert them using the corrected scale. Write down every step.</p>" },
    { h: "Mark up a planting sheet", hrs: 1, d: "<p>On PP-1, highlight each hatch and plant symbol in a different color. Count the 1-gallon and 24\" box symbols you see, and add up the cutting callouts on that sheet. Compare to the PP-1 row on PQ-1. List any differences.</p>" },
    { h: "Follow details and other disciplines", hrs: 0.5, d: "<p>Follow a 24\" box pine from PP sheets to its details on PLD-1 and ID-5. List every part and step the details add. Then open E-1 and write down the power source, breaker and wire for the controllers.</p>" },
    { h: "Index a private or city plan set", hrs: 1, d: "<p>Get one current or recent commercial landscape plan set: a GC invitation, or a City of San Diego or other agency project found through <a href=\"https://www.sandiego.gov/purchasing/bids-contracts\" target=\"_blank\" rel=\"noopener\">the City's bid page</a> or an agency PlanetBids portal. Build the same sheet index, find the POC, controller power and sleeve sheets, and list five symbols or notes that differ from the Caltrans set.</p>" },
    { h: "Abbreviation and line-type hunt", hrs: 0.5, d: "<p>On ISS-1, PL-1, one IP sheet and one PP sheet of 11-428704, list every abbreviation and every line type you find, with its meaning. Mark any that you could not find in a legend or in this module, and look them up in the <a href=\"#dict\">Bid Dictionary</a>. Do the same for the private set from the item above and note any codes that mean something different there.</p>" },
    { h: "Turn two details into parts lists", hrs: 0.75, d: "<p>From <a href=\"#lab-11-431064\">Real Bid Lab · 11-431064</a>, open the irrigation detail sheets. Write a parts and steps list (like the flow sensor example in this module) for the backflow preventer assembly and for one valve detail. Include every note, the math for any length rule, and which parts would be in a supplier quote versus labor only.</p>" },
    { h: "Conflict hunt and bidder questions", hrs: 1, d: "<p>Pick 11-428704 or 11-431064. Using the conflict hunting table, find at least five conflicts, gaps or hidden costs that are not already listed in this module. For each, write the sheet, what conflicts, what you would price, and a short bidder inquiry of one or two sentences.</p>" },
    { h: "Set up a digital working set", hrs: 0.75, d: "<p>Make the job folder and subfolders from the digital workflow slides for one of the jobs. Rename the files, bookmark every landscape sheet by code, build the sheet index table, calibrate three sheets, and set up a color legend for at least six takeoff items. Save a dated PDF of your marked-up set.</p>" }
  ]
},

{ h: "Module 4 summary",
  lead: "You can now open a plan set, find your sheets and read every line, symbol and note on them. Next, you'll read the specifications that go with them.",
  body: `<ul>
<li>Use the index and sheet codes to find every sheet that touches your scope, including civil, utility and electrical. Private L-sheet sets and Caltrans sets are drawn differently; know which you have.</li>
<li>Check the scale on every sheet and print. Half size doubles the scale. Calibrate in software on a scale bar. Break odd beds into rectangles and triangles.</li>
<li>Read north arrows, match lines and stations. Sta 262+48 is 26,248 ft along a named line.</li>
<li>Learn line types, abbreviations (TYP, NTS, EQ, OC, NIC, VIF, FG, TC, TW, BW, INV, POC and more), the legend, schedule and notes before looking at the plan. Notes are part of the contract.</li>
<li>Follow every detail callout and turn each detail into a parts list. Plans show how many; sections show how deep.</li>
<li>Read grading, hardscape and other trades' sheets for the edges of your work, and list every meeting point.</li>
<li>Work on screen with a fixed routine, use quantity tables to check, hunt conflicts on purpose, and keep one current set.</li>
</ul>
<p><strong>Next: Module 5 · Reading Specifications</strong></p>`
}
]
});
