(function(){
/* Plan Set Deep Dive: a sheet-by-sheet walkthrough of the real Caltrans 11-428704 plan set.
   Images are crops of the public plan PDFs (course/src/img/pdd). Click any image to zoom. */
const fig = (name, cap, full, alt) =>
  '<figure class="fig"><img src="img/pdd/' + name + '.jpg" data-full="img/pdd/' + (full || name) + '.jpg" alt="' + (alt || cap.replace(/<[^>]+>/g, "")) + '" loading="lazy"><figcaption>' + cap + ' · tap to zoom</figcaption></figure>';
const T1 = '<span class="tier t1">TIER 1 · PRICE DRIVER</span>';
const T2 = '<span class="tier t2">TIER 2 · COST MODIFIER</span>';
const T3 = '<span class="tier t3">TIER 3 · CONTEXT</span>';

(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: "P", code: "PLANS", kicker: "Plan Set Deep Dive", hours: 6, title: "Plan Set Deep Dive: Reading a Real Plan Set to Bid It",
slides: [

{ t: "cover",
  h: "Plan Set Deep Dive",
  lead: "A full walkthrough of a real 65-sheet landscape and irrigation plan set: Caltrans contract 11-428704 on I-805 in Chula Vista. First you'll see every sheet ranked by how much it matters to your bid. Then you'll go through the important sheets up close, line by line, the way an estimator reads them.",
  objectives: [
    "Know what every type of sheet in a plan set is for",
    "Rank sheets by how much they affect your price, and spend your time accordingly",
    "Read a title block, scale, stationing, north arrow, match lines and notes",
    "Read a sprinkler schedule, plant legend and quantity tables column by column",
    "Read removal plans, connection points, details and the electrical sheet",
    "Follow one item through every sheet, spec and bid item that touches it",
    "Find plan conflicts worth a bidder question"
  ],
  time: [["Reading and slides", "2 h"], ["Practice on the real sheets", "4 h"], ["Workshop total", "6 h"]],
  body: `<p>Every image here is a real sheet from the plans Caltrans published for this job. Tap any image to open it full size and zoom in. Keep the full plan PDF open too: <a href="#lab-11-428704">Real Bid Lab · 11-428704</a> links to it. Module 15 covers the rest of this bid (specs, forms, results); this workshop is only about the plans.</p>`
},

{ h: "The whole set at a glance",
  lead: "65 sheets, in 10 groups. Sheet 1 tells you what all of them are.",
  body: fig("set-mosaic", "<b>All 65 sheets of 11-428704</b>, in order: title and control (1–2), water pollution (3–10), utilities (11–17), signs and traffic (18–23), landscape (24–56), electrical (57–58), revised standard plans (59–65).", "set-mosaic", "Thumbnails of all 65 plan sheets") +
`<div class="tablewrap"><table>
<thead><tr><th>Sheets</th><th>Group</th><th>Codes</th></tr></thead>
<tbody>
<tr><td class="num">1–2</td><td>Title, location map, survey control</td><td class="mono">Title, PC-1</td></tr>
<tr><td class="num">3–10</td><td>Temporary water pollution control plans and quantities</td><td class="mono">WPC-1 to 7, WPCQ-1</td></tr>
<tr><td class="num">11–17</td><td>Utility plans (information only)</td><td class="mono">U-1 to 7</td></tr>
<tr><td class="num">18</td><td>Construction area signs</td><td class="mono">CS-1</td></tr>
<tr><td class="num">19–23</td><td>Traffic handling plans and quantities</td><td class="mono">TH-1 to 4, THQ-1</td></tr>
<tr><td class="num">24–46</td><td>Irrigation: schedule, removal, plans, details, quantities</td><td class="mono">ISS-1, IR-1 to 7, IP-1 to 7, ID-1 to 6, IQ-1, IQ-2</td></tr>
<tr><td class="num">47–56</td><td>Planting: legend, plans, details, quantities</td><td class="mono">PL-1, PP-1 to 7, PLD-1, PQ-1</td></tr>
<tr><td class="num">57–58</td><td>Electric service for irrigation</td><td class="mono">E-1, E-2</td></tr>
<tr><td class="num">59–65</td><td>Revised Standard Plans</td><td class="mono">RSP H4, H6, H9, ES-1A/1B/1C, ES-8A</td></tr>
</tbody></table></div>`,
  ex: `<p>Private-job plan sets look different (sheet numbers like L-1.0, L-2.0, IR-1, IR-2, plus architectural and civil sheets), but the same groups are there: a cover, a legend or schedule, plans, details and notes. Everything you learn on this set carries over.</p>`
},

{ h: "Rank the sheets by how much they move your price",
  lead: "You don't read every sheet with the same care. Spend your time where the money is.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Tier</th><th>Sheets on this job</th><th>Why it matters</th><th>How to read it</th></tr></thead>
<tbody>
<tr><td>${T1}</td><td>ISS-1, IR-1 to 7, IP-1 to 7, IQ-1/IQ-2, PL-1, PP-1 to 7, PQ-1</td><td>Every item you price is defined here: what, how many, where</td><td>Every symbol, note and number. Check every quantity.</td></tr>
<tr><td>${T1}</td><td>ID-1 to 6, PLD-1</td><td>Details turn a symbol into a list of parts and labor</td><td>Every part in each detail you'll build</td></tr>
<tr><td>${T2}</td><td>TH-1 to 4, THQ-1, CS-1</td><td>K-rail, closures and signs: cost and work hours</td><td>Quantities and locations; get a sub quote</td></tr>
<tr><td>${T2}</td><td>E-1, E-2</td><td>Power to controllers: who, where, what</td><td>Legend notes and scope boxes</td></tr>
<tr><td>${T2}</td><td>WPC-1 to 7, WPCQ-1</td><td>Fiber rolls, entrances, inlet protection</td><td>Quantity table and locations</td></tr>
<tr><td>${T3}</td><td>Title, PC-1, U-1 to 7, RSP sheets</td><td>Limits, utilities to avoid, standard details</td><td>Skim once. Check for conflicts with your work.</td></tr>
</tbody></table></div>`,
  ex: `<p>A rough split for a set like this: about 70% of your plan time on Tier 1, 20% on Tier 2, 10% on Tier 3. Adjust it to the job. On a job with lots of traffic control or a long electrical run, Tier 2 grows.</p>`,
  watch: `<p>“Information only” sheets (utilities) still cost money. An existing 8" water line crossing your new main means hand digging, potholing and possible conflicts. Tier 3 means skim, not skip.</p>`
},

{ h: "The order to read them in",
  lead: "Learn the language first, then the design, then the numbers, then everything around it.",
  body: `<ol class="steps">
<li><div><b>Title sheet (1)</b>Limits of work, index, contract number, the date the plans were approved.</div></li>
<li><div><b>Legends and schedules (ISS-1, PL-1)</b>Learn every symbol and abbreviation before you look at a plan.</div></li>
<li class="hl"><div><b>Removal plans (IR)</b>What exists today and what goes away.</div></li>
<li class="hl"><div><b>Irrigation plans (IP), then planting plans (PP)</b>Follow the design from the water source outward.</div></li>
<li><div><b>Details (ID, PLD)</b>Look up every detail referenced on the plans.</div></li>
<li class="hl"><div><b>Quantity sheets (IQ, PQ)</b>Compare to your own counts and to the bid item list.</div></li>
<li><div><b>Traffic, electrical, water pollution (TH, E, WPC)</b>What it takes to do the work.</div></li>
<li><div><b>Utilities, control, standard plans (U, PC, RSP)</b>Conflicts and standard parts.</div></li>
<li><div><b>Addenda</b>Swap in replaced sheets. Look for the triangle revision marks.</div></li>
</ol>`
},

{ h: "Anatomy of a sheet",
  lead: "Every Caltrans sheet has the same frame around the drawing. Here's IP-7, one of the irrigation plans.",
  body: fig("ip7-full", "<b>Sheet 38 of 65 · IP-7 Irrigation Plan.</b> Notes top left, a schematic box, title block top right, north arrow, stationed centerline, match line, callouts, and the sheet title and scale bottom right.") +
`<ol class="steps">
<li><div><b>Title block</b>Top right: district, county, route, post miles, sheet number, total sheets, who signed it.</div></li>
<li><div><b>Notes</b>Top left: rules for everything on this sheet.</div></li>
<li><div><b>North arrow</b>Which way is north. Freeway sheets are often rotated.</div></li>
<li><div><b>Centerline and stations</b>The “SD-805” line with station ticks every 100 feet.</div></li>
<li><div><b>Match lines</b>Where this sheet joins the next one (“MATCH LINE SEE SHEET IP-6”).</div></li>
<li><div><b>Callouts and leaders</b>Text with a line pointing to the thing it describes.</div></li>
<li><div><b>Sheet title, code and scale</b>Bottom right: “IRRIGATION PLAN · IP-7 · SCALE 1" = 50'”.</div></li>
<li><div><b>Margins</b>Designer and checker names, last revision date, a relative border scale bar.</div></li>
</ol>`
},

{ h: "The title block",
  lead: "Small box, lots of information. Check it on every sheet you use.",
  body: `<div class="figrow">` + fig("ip7-titleblock", "<b>IP-7 title block:</b> District 11, San Diego County, Route 805, post miles 3.4/5.1, sheet 38 of 65, signed by a licensed landscape architect, plans approved 06-28-21.", "ip7-full") + fig("ip7-sheettitle", "<b>Sheet title and scale:</b> Irrigation Plan IP-7, 1\" = 50'. The vertical text at right is the last revision date (04-13-21).", "ip7-full") + `</div>
<ul>
<li><strong>Sheet No. / Total Sheets</strong> (38 / 65): make sure you have every sheet. A missing sheet is missing scope.</li>
<li><strong>Who signed it</strong>: landscape sheets are signed by a licensed landscape architect, traffic sheets by a civil engineer, electrical by an electrical engineer. That tells you who designed what.</li>
<li><strong>Plans approval date</strong> (06-28-21): matches the date on the bid book. Addendum sheets carry their own date and a triangle mark.</li>
<li><strong>Sheet code</strong> (IP-7): what every other sheet and the quantity tables use to refer to this one.</li>
</ul>`
},

{ h: "Scale: check it before you measure",
  lead: "1\" = 50' means one inch on the full-size sheet is 50 feet on the ground. That's only true if the sheet is printed full size.",
  body: `<ul>
<li>Full-size Caltrans sheets are 22" × 34". Half-size prints (11" × 17") make the scale 1" = 100'.</li>
<li>Each sheet has a <strong>relative border scale</strong> bar at the bottom: 0 to 3 inches at full size. Measure it on your print or PDF. If it measures 1.5", your sheet is at half size.</li>
<li>In takeoff software, calibrate the scale on every sheet using a known dimension or the bar, not just the scale note.</li>
<li>“NO SCALE” (title sheet, details) means don't measure it at all.</li>
</ul>`,
  ex: `<p><strong>Quick check with stationing:</strong> station ticks on IP-7 are 100 feet apart. At 1" = 50', they should be 2" apart on a full-size sheet. If they're 1" apart on your print, you're at half size and everything you measure must be doubled.</p>`,
  watch: `<p>Scaling the wrong way is one of the easiest ways to be off by 50% or 100% on pipe and area quantities. Always check the scale bar first.</p>`
},

{ h: "Stationing, north arrow and match lines",
  lead: "Stations are how freeway and street plans say where things are. They're distances along a centerline, in feet.",
  body: fig("ip7-stationing", "<b>IP-7 stationing:</b> the “SD-805” line with ticks every 100 feet (290, 1, 2 … 295 …). The match line at left joins IP-6.", "ip7-full") +
`<ul>
<li><strong>Station 298+55</strong> means 29,855 feet from the start of the line (298 × 100 + 55).</li>
<li>On the plan, big numbers (290, 295, 300) mark every 500 feet; small ticks (1, 2, 3…) are the hundreds in between.</li>
<li><strong>Lt / Rt</strong> = left or right of the line, looking in the direction stations increase.</li>
<li><strong>Match lines</strong> tell you which sheet continues the drawing. Follow them when tracing a main from sheet to sheet.</li>
<li><strong>North arrow:</strong> on this job most sheets are rotated so the freeway runs across the page. Use the arrow, not the page edge.</li>
</ul>`,
  ex: `<p>From the title sheet: Begin Construction is Sta 211+60 and End Construction is Sta 298+55. 29,855 − 21,160 = <strong>8,695 feet</strong>, about 1.65 miles of freeway.</p>`
},

{ h: "Notes: rules for the whole sheet",
  lead: "Notes are short, but each one can add cost. Read every note on every Tier 1 sheet.",
  body: fig("ip7-notes", "<b>IP-7 notes:</b> right-of-way contact, keep the supply line out of tree drip lines, and * = operate existing irrigation facilities.", "ip7-full") +
`<div class="tablewrap"><table>
<thead><tr><th>Note on IP-7</th><th>What it means for your bid</th></tr></thead>
<tbody>
<tr><td>Contact right of way engineering for accurate right of way data</td><td>The R/W line on the plan is approximate. Don't work or stage outside it.</td></tr>
<tr><td>Locate the supply line to minimize trenching within drip lines of existing trees</td><td>Your trench route may be longer or need hand digging near trees.</td></tr>
<tr><td>* = operate existing irrigation facilities</td><td>Valves marked with * stay in service and you run them during the job (bid item 33).</td></tr>
</tbody></table></div>`
},

{ h: "The title sheet",
  lead: "The first sheet shows the job limits and the index of every sheet.",
  body: fig("title-full", "<b>Sheet 1 · Title and location map.</b> Index of plans (top left), job description, location map, limits of work and construction, contract number 11-428704.") +
`<ul>
<li><strong>Index of plans</strong>: the groups and sheet ranges. Use it to confirm you have all 65 sheets.</li>
<li><strong>Begin/End Work vs. Begin/End Construction</strong>: work limits (Sta 201+60 to 308+55) are wider than construction limits (Sta 211+60 to 298+55). Signs and traffic control can extend beyond the construction area.</li>
<li><strong>“To be supplemented by Standard Plans dated 2018”</strong>: standard details not drawn here still apply.</li>
<li><strong>License note</strong>: “The contractor shall possess the class (or classes) of license as specified in the Notice to Bidders.”</li>
</ul>`,
  deeper: `<p>${T3} for pricing, but read it first. It's also where you find the federal-aid project number (ACIM-8051(641)E), which tells you federal rules apply.</p>`
},

{ h: "ISS-1: the irrigation sprinkler schedule",
  lead: `${T1} This table tells you exactly what each sprinkler symbol is. You price from it.`,
  body: fig("iss1-schedule", "<b>ISS-1 Irrigation Sprinkler Schedule.</b> One row per sprinkler type: symbol, type, pattern, radius, pressure, flow, inlet, swing joint, riser or pop-up height, remarks.", "iss1-full") +
`<div class="tablewrap"><table>
<thead><tr><th>Symbol</th><th>What it is</th><th>Key data</th></tr></thead>
<tbody>
<tr><td>⑤ (circle 5)</td><td>Riser sprinkler, gear driven, part circle</td><td>40' radius, 50 psi, 3.5 GPM, ¾" inlet, Type I swing joint, 10" riser</td></tr>
<tr><td>[5] (square 5)</td><td>Same, full circle (F)</td><td>40' radius, 3.5 GPM</td></tr>
<tr><td>⑥</td><td>Pop-up, gear driven</td><td>12" pop-up with protector; required next to shoulders, curbs, sidewalks and dikes</td></tr>
<tr><td>● (large)</td><td>Riser, gear driven</td><td>48' radius, 7.5 GPM</td></tr>
<tr><td>⑪</td><td>Riser, gear driven</td><td>25' radius, 1.8 GPM</td></tr>
<tr><td>• (small)</td><td>Tree well sprinkler assembly</td><td>Flood bubbler, 30 psi, 0.5 GPM, ½" inlet, internal check valve, 4 per 24" box tree</td></tr>
</tbody></table></div>
<p>The circled numbers in Remarks point to the “applicable when circled” list: ⑦ adjustable arc, ⑧ matched precipitation nozzles, ③ check valve, ⑩ four bubblers per 24" box tree.</p>`,
  ex: `<p>For each row, price one complete assembly: head + nozzle + swing joint + riser or pop-up + fittings + labor. Bid items 51–53 are each “sprinkler assembly,” so that's the unit you price.</p>`
},

{ h: "ISS-1: notes that cost money",
  lead: "Eight notes. Each one changes how you build or what you buy.",
  body: fig("iss1-notes", "<b>ISS-1 notes 1–8.</b>", "iss1-full") +
`<div class="tablewrap"><table>
<thead><tr><th>Note</th><th>Cost impact</th></tr></thead>
<tbody>
<tr><td>1 · Equipment outside paved maintenance pullouts; valves at the exiting end</td><td>Layout and trench routing</td></tr>
<tr><td>2 · 90° turns in new main = two 45° elbows</td><td>More fittings and thrust blocks</td></tr>
<tr><td>3 · Recycled water: piping, equipment and caps purple or labeled per County DEH</td><td>Purple parts cost more; labeling labor</td></tr>
<tr><td>4 · No ponding, runoff or overspray of recycled water</td><td>Nozzle adjustment time; risk during establishment</td></tr>
<tr><td>5 · Unlabeled laterals are 1"</td><td>Default pipe size for takeoff</td></tr>
<tr><td>6 · 1" conduit for wire from master valve and flow sensor to controller</td><td>Conduit and pull boxes</td></tr>
<tr><td>7 · Calsense flow checking must stay on</td><td>Programming and troubleshooting time</td></tr>
<tr><td>8 · No storage within drip lines of existing trees</td><td>Staging space and material handling</td></tr>
</tbody></table></div>`
},

{ h: "ISS-1: legend and codes",
  lead: "The legend and the valve code tell you how to read every label on the irrigation plans.",
  body: `<div class="figrow">` + fig("iss1-codes", "<b>Valve code and valve box label code.</b>", "iss1-full") + fig("iss1-legend", "<b>Legend, applicable-when-circled list and pipe sizing chart.</b>", "iss1-full") + `</div>
<ul>
<li><strong>Valve code</strong> X-X(X)-XX-XX-XX: RCV size, Calsense group or hydraulic block, controller letter, station, GPM, number of sprinklers.</li>
<li><strong>Replace valve box cover labels</strong>: the code shows the old controller and station, then the new ones. Every “R” symbol on the plans is one label (bid item 48).</li>
<li><strong>Abbreviations:</strong> RWM recycled water meter · RWCA recycled water connection assembly · RWWS recycled water warning sign · CCTS cross-connection test station · CARV combination air release valve · CNC control and neutral conductors · Irr C irrigation conduit.</li>
<li><strong>Pipe sizing chart (tree well laterals):</strong> 1" for 1–24 bubblers, 1¼" for 25–44, 1½" for 45–60, 2" for 61–100, at 0.5 GPM each.</li>
<li><strong>GR Comm / SR Comm:</strong> cellular modem vs spread-spectrum radio controller communication.</li>
</ul>`
},

{ h: "IR sheets: what's there now and what goes",
  lead: `${T1} Removal plans show the existing system. Struck-through labels mean remove; “to remain” means don't touch.`,
  body: fig("ir4-callouts", "<b>IR-4 callouts near East Orange Ave:</b> remove and salvage satellite controllers 40(J) and 40(I); existing 3\" water meter and backflow to remain; flow sensor, master valve and gate valve struck through (removed).", "ir4-full") +
`<ul>
<li><strong>“REMOVE AND SALVAGE Exist ICC-SAT ‘40(J)’ · 40 stations available · 34 used”</strong>: take out the old controller and deliver it to Caltrans (items 34–35). Salvage means careful removal and a trip to the Kearny Mesa landscape office.</li>
<li><strong>“Exist 3" WM to remain · Exist 3" BPAE to remain”</strong>: the drinking water meter and backflow stay; you cut and cap downstream.</li>
<li><strong>Struck-through items</strong> (2" FS, 3" RCVM, 4" GV): removed.</li>
<li><strong>“CAP”</strong>: cap the existing line at that point.</li>
<li><strong>Station labels</strong> like J-8 to J-12: existing valves that stay and get renamed on the IP sheets.</li>
</ul>`,
  watch: `<p>Removal is lump-sum work with no quantities given. Count every removal, cap and salvage callout on all seven IR sheets yourself, then price the crew time.</p>`
},

{ h: "IP-7: following the water from the source",
  lead: `${T1} Start every irrigation review at the point of connection. On this job there's one: recycled water at Palomar Street.`,
  body: `<div class="figrow">` + fig("ip7-schematic", "<b>Two-wire irrigation schematic (IP-7).</b> Existing recycled water connection assemblies and cross-connection test station feed a new 3\" two-wire master valve, flow sensor, gate valves, air release valve and antenna mast.", "ip7-full") + fig("ip7-poc", "<b>The connection point on the plan.</b> Existing 2-2\" recycled water meters at Palomar St, the new 4\" supply line heading north, 1\" CARVs, the 3\" RCVM (two-wire) and 2\" flow sensor.", "ip7-full") + `</div>
<ol class="steps">
<li><div><b>Existing: 2 recycled water meters, 2 RWCAs, CCTS</b>Owned by the water district side; you connect downstream.</div></li>
<li><div><b>New 3" gate valve, 2" flow sensor, 3" master valve (two-wire)</b>Bid items 39, 50, 55.</div></li>
<li><div><b>New 4" gate valve, 1" CARV</b>Items 56, 65.</div></li>
<li class="hl"><div><b>New 4" Class 315 supply line</b>Runs north along the shoulder, sheet after sheet (item 63).</div></li>
<li><div><b>Antenna mast with Yagi antenna</b>Item 47; detail on ID-1.</div></li>
</ol>`
},

{ h: "IP-7: valves and controller labels",
  lead: "Callouts along the main show which existing valves are renamed, which you operate, and what controller they report to.",
  body: fig("ip7-valves", "<b>Valve callouts on IP-7:</b> “97A-7 (A-7)” means old valve A-7 becomes station 7 on controller 97A. The * means you operate it during construction.", "ip7-full") +
`<ul>
<li><strong>“Exist ICC (single) · Exist IC ‘97A’ (GR Comm) · 48 station · 35 stations used”</strong>: the existing controller at Palomar you modify (item 40, detail ID-1).</li>
<li><strong>97A-11 (A-11) … 97A-16 (A-16)</strong>: existing valves re-assigned. Each one needs a new valve box cover label.</li>
<li><strong>Exist 2" GV</strong>: existing gate valves to leave in place.</li>
<li><strong>“SEE NOTE 2”</strong>: trench away from tree drip lines here.</li>
</ul>`,
  ex: `<p>Do this sheet by sheet: list every new device (count), every renamed valve (label count), and every “Exist” item you must work around. Then compare to IQ-1.</p>`
},

{ h: "Details: from symbol to parts list",
  lead: `${T1} A detail shows how one thing is built. Every part in it is something you buy and install.`,
  body: `<div class="figrow">` + fig("id5-treewell", "<b>ID-5 Tree well sprinkler assembly (Mod).</b> 4 flood bubblers 90° apart in a 5' tree basin, 4\" drain pipe filled with gravel, removable drain grate, check valve, riser and swing joint.", "id5-full") + fig("id6-sign", "<b>ID-6 Recycled water warning sign.</b> 12\" × 18\", English and Spanish, metal post set 30\" minimum in the ground, theft-proof bolts.", "id6-full") + `</div>
<p><strong>Turning the tree well detail into a price:</strong></p>
<ul>
<li>Parts per bubbler: flood bubbler, check valve, riser, swing joint, 4" perforated drain pipe, gravel, filter fabric, purple drain grate</li>
<li>Labor per bubbler: dig, assemble, set grate 1"–2" above grade, connect to lateral</li>
<li>4 per 24" box tree × 43 trees, plus shrubs that get 2 (“additional flood bubbler, two total where occurs”)</li>
</ul>`,
  watch: `<p>“(Mod)” after a detail name means Caltrans modified its standard version. Don't price from memory of the standard plan; price what this detail shows.</p>`
},

{ h: "IQ-1: the irrigation quantity table",
  lead: `${T1} The quantity table breaks down every irrigation bid item by plan sheet. It's your check, and Caltrans's.`,
  body: fig("iq1-main", "<b>IQ-1 Irrigation Quantities (main supply side), replaced by Addendum 1.</b> Columns are bid items; rows are IP sheets 1–7. The triangle marks the changed cell.", "iq1-full") +
`<ul>
<li><strong>Columns</strong>: one per item (controllers by name, antenna mast, valve box labels, flow sensor, RCVs by size, gate valves, PRV, CARV, pipe by size).</li>
<li><strong>Rows</strong>: IP-1 to IP-7, then subtotals, the lateral total (from the left table) and conduit pipe from IQ-2.</li>
<li><strong>(N)</strong>: “not a separate bid item, for information only.” CEC boxes, two-wire decoder, ground rod. You still build them; their cost goes into other items.</li>
<li><strong>The triangle ①</strong> under the 2" RCV column: changed by Addendum 1 (4 → 3).</li>
</ul>`,
  ex: `<p><strong>Totals vs bid items:</strong> 4" pipe 7,493 LF = item 63 exactly. Valve box cover labels 197 here, but item 48 says 200. Small round-ups like that are normal; big gaps are questions to ask.</p>`
},

{ h: "IQ-1: the lateral table and a question to ask",
  lead: "The left table lists lateral pipe and sprinklers by controller and valve. Add it up yourself.",
  body: fig("iq1-laterals", "<b>IQ-1 lateral supply side, by controller (97A, 97B, 97C, 97E, 97F, 97G) and valve.</b> Totals: 1\" 1,390 LF · 1¼\" 325 · 1½\" 60 · 2\" 172 · 2½\" 130 · tree well 172 · riser 15 · pop-up 1.", "iq1-full") +
`<ul>
<li>These totals match bid items 57, 58, 59 and 61 exactly. 2" pipe 172 + 20 on the main side = 192 = item 60.</li>
<li><strong>Tree wells: 36 + 44 + 48 + 44 = 172 here (43 trees × 4), but bid item 51 is 180.</strong> Caltrans rounded several measured items up a little on this job (labels 197 → 200, compost 282 → 290), so this is probably rounding. If you're not sure, a short bidder inquiry settles it: “IQ-1 totals 172 tree well sprinkler assemblies; the Bid Item List shows 180. Please confirm.”</li>
<li>Valve 97C-38 alone has 350 LF of 1" and 110 LF of 1¼": long laterals on that station. Look it up on the IP sheet to see why.</li>
</ul>`,
  watch: `<p>On a unit-price public bid, you're paid for what you install, so a small quantity error is usually Caltrans's risk. On a lump-sum private bid, it's yours. Check quantity tables either way.</p>`
},

{ h: "PL-1: the plant legend, column by column",
  lead: `${T1} The plant legend is the planting equivalent of the sprinkler schedule. Every column is a cost.`,
  body: fig("pl1-legend", "<b>PL-1 Plant Legend.</b> Plant group and size, plant number, symbol, botanical and common name, hole size, basin type, plant area, wood mulch, staking, fertilizer rates, packet fertilizer, on-center spacing, minimum distances, remarks.", "pl1-full") +
`<div class="tablewrap"><table>
<thead><tr><th>Column</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Plant group (size)</td><td>A = No. 1 container, B = No. 5, H = cutting, K = 24" box: sets the bid item and unit price</td></tr>
<tr><td>Botanical name</td><td>Underlined letters are the plan abbreviation (CARpobrotus EDUlis = CAR EDU)</td></tr>
<tr><td>Hole size / basin type</td><td>② “sufficient to receive root ball”; trees 48" diameter with a 60" basin (⑤)</td></tr>
<tr><td>Plant area (H)</td><td>Iceplant areas: 37,980 SF and 14,020 SF</td></tr>
<tr><td>Wood mulch (basin)</td><td>0.06 CY per shrub, 0.2 CY per tree; ⑩ included with area mulch in groundcover</td></tr>
<tr><td>Application rates</td><td>Iron sulfate and slow-release fertilizer per plant or per 1,000 SF</td></tr>
<tr><td>Packet fertilizer</td><td>1 per No. 1, 2 per No. 5, 5 per tree</td></tr>
<tr><td>On-center spacing</td><td>Iceplant 1'; shrubs 3' or 6'; trees “as shown”</td></tr>
<tr><td>Minimum distance from</td><td>ETW (edge of traveled way), EP, fence, wall, ditches: trees 40' from traffic</td></tr>
</tbody></table></div>`
},

{ h: "PL-1: sequence of work and hatch patterns",
  lead: "The sequence table is your schedule. The hatches tell you which treatment each area gets.",
  body: `<div class="figrow">` + fig("pl1-sequence", "<b>Application and sequence of work:</b> 1 irrigation · 2 weed germination · 3 compost (medium, 200 CY/acre) · 4 planting · 5 wood chip mulch (3\" depth).", "pl1-full") + fig("pl1-hatches", "<b>Planting legend hatches:</b> compost + weed germination + remove groundcover; the same plus wood mulch; MEPA; wood mulch; existing trees; temporary protection fence (rope).", "pl1-full") + `</div>
<ul>
<li><strong>Compost at 200 CY per acre</strong>: 200 ÷ 43,560 SF × 1,000 = about 4.6 CY per 1,000 SF.</li>
<li><strong>Weed germination</strong> comes between irrigation and planting. The specs add a 21-day hold.</li>
<li><strong>MEPA</strong> (maintain existing planted areas) areas get maintenance, not new planting.</li>
<li><strong>TPFR</strong> (temporary protection fence, rope) protects existing trees and shrubs, or nests if found.</li>
</ul>`
},

{ h: "PP-6: reading a planting plan",
  lead: `${T1} On Caltrans planting plans, each area has a callout with the plant counts and quantities. You still check them.`,
  body: `<div class="figrow">` + fig("pp6-callouts-left", "<b>PP-6 south side:</b> 190 AEO HAW, 190 SED DEN, 13,450 CAR EDU, 64 CY compost, 1,540 SQYD weed germination, remove groundcover; 94,020 SF MEPA; remove pampas grass.", "pp6-full") + fig("pp6-callouts-right", "<b>PP-6 east end:</b> 60 each of five shrubs, compost, weed germination, 20 CY wood mulch, and 220 LF of temporary protection fence around existing trees and shrubs.", "pp6-full") + `</div>
<ul>
<li>Read each callout, find the hatch it points to, and confirm the treatment matches the legend.</li>
<li>Check the math: 13,450 iceplant cuttings at 1' spacing need about 13,450 SF of area. Measure the hatched area to confirm.</li>
<li>Work items that aren't plants also live here: <strong>remove pampas grass</strong> (the specs require bagging seed heads and same-day disposal), remove groundcover, protection fence.</li>
</ul>`,
  ex: `<p>This sheet also has a small hatched area at the top with its own callout: <strong>1,960 CAR EDU</strong>, 7 CY compost, 190 SQYD weed germination. That 1,960 was missing from the original quantity table. Addendum 1 raised the iceplant total from 60,015 to 61,975, exactly 1,960 more. Reading every callout catches errors like this.</p>`
},

{ h: "PQ-1: planting quantities",
  lead: `${T1} Two tables: plants by species and group, and area treatments by sheet.`,
  body: `<div class="figrow">` + fig("pq1-plants", "<b>Plant quantities (Addendum 1 version).</b> Each species by group, with packet fertilizer, basin mulch, iron sulfate and slow-release fertilizer. Totals: A 1,458 · B 110 · H 61,975 · K 43.", "pq1-full") + fig("pq1-areas", "<b>Planting area quantities by sheet.</b> Weed germination 7,020 SQYD · wood mulch 185 CY · compost 282 CY · protection fence 1,120 LF · MEPA by sheet (estimate only).", "pq1-full") + `</div>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">PQ-1</th><th class="num">Bid item</th></tr></thead>
<tbody>
<tr><td>Plant group A (No. 1)</td><td class="num">1,458</td><td class="num">1,460</td></tr>
<tr><td>Plant group H (cutting)</td><td class="num">61,975</td><td class="num">61,975</td></tr>
<tr><td>Packet fertilizer</td><td class="num">1,893</td><td class="num">1,900</td></tr>
<tr><td>Wood mulch</td><td class="num">185 CY</td><td class="num">190 CY</td></tr>
<tr><td>Compost</td><td class="num">282 CY</td><td class="num">290 CY</td></tr>
</tbody></table></div>
<p>Caltrans rounds bid quantities up a little. <strong>MEPA</strong> square footage (about 717,000 SF) is marked “for estimate only” because item 29 is lump sum: you need it to price, but you won't be paid per foot.</p>`
},

{ h: "TH-4: traffic handling",
  lead: `${T2} Traffic sheets show where K-rail, crash cushions, drums and signs go. They drive a big lump sum and a sub quote.`,
  body: fig("th4-full", "<b>TH-4 Traffic Handling Plan (Addendum 1 version).</b> Temporary railing (Type K) runs with begin and end stations, alternative temporary crash cushions, 6 plastic drums per run, signs W21-5, W21-5bL/R and G20-2, and sections showing the work area behind the rail.") +
`<ul>
<li><strong>Railing runs by station</strong>: “END Temp Railing (Type K) Sta 266+60 ‘SD-805’ line” is the addendum change that raised K-rail from 1,340 to 1,700 LF.</li>
<li><strong>Sections A-A and B-B</strong>: through traffic on one side, your work area behind the rail, 3' between rail and lane edge.</li>
<li><strong>Why it's there</strong>: the rail runs line up with conduit crossings at ramps, where crews work close to traffic.</li>
<li>Send TH-1 to TH-4, THQ-1 and CS-1 to a traffic control company for a quote.</li>
</ul>`
},

{ h: "E-1: electric service for irrigation",
  lead: `${T2} Controllers need power. The electrical sheets show where it comes from and what you install.`,
  body: fig("e1-full", "<b>E-1 Electric Service for Irrigation.</b> Numbered boxes: (1) existing SDG&E service enclosure at 4432 Main St with a 20 A irrigation breaker, (2) new controller cabinet conductors, (3) disconnect power, (4) conduit with 2 #10 wires.") +
`<ul>
<li><strong>Legend 1</strong>: existing Type III-BF service enclosure, 120/240 V, with “1P – 20 A CB (Irr)”. The power source already exists.</li>
<li><strong>Legend 2</strong>: in the new controller cabinet, install service conductors, terminate them, add a ground lug and grounding electrode.</li>
<li><strong>Legend 4</strong>: conduit per irrigation details, pull 2 #10 (Irr).</li>
<li><strong>Note 3</strong>: “The contractor must verify location(s) of service equipment enclosure and voltages… prior to start of work and ordering material.”</li>
</ul>`,
  ex: `<p>Most bidders subcontracted item 69, Electric Service for Irrigation, to an electrical contractor. Send E-1, E-2 and the controller details to an electrician for a quote.</p>`
},

{ h: "Tier 3 sheets: skim, but look for conflicts",
  lead: `${T3} These sheets rarely have a bid item of yours, but they explain the site.`,
  body: `<div class="tablewrap"><table>
<thead><tr><th>Sheets</th><th>What to look for</th></tr></thead>
<tbody>
<tr><td>PC-1 Project control</td><td>Survey monuments: don't disturb them</td></tr>
<tr><td>WPC-1 to 7, WPCQ-1</td><td>Fiber roll 7,184 LF on plans (7,190 bid), 8 construction entrances, 2 inlet protections: items 14–16</td></tr>
<tr><td>U-1 to 7 Utilities</td><td>Owners: City of Chula Vista sewer; AT&amp;T, Cox, Sprint telecom; Otay Water District water and recycled water; SDG&amp;E gas and electric. Where existing lines cross your trench, plan hand digging.</td></tr>
<tr><td>CS-1 Construction area signs</td><td>Sign types and locations for your traffic sub</td></tr>
<tr><td>RSP H4, H6, H9</td><td>Standard sprinkler, valve and trench details as revised; check trench depth for the main</td></tr>
<tr><td>RSP ES-1A to ES-8A</td><td>Electrical legends and pull box standards for your electrician</td></tr>
</tbody></table></div>`
},

{ h: "Follow one item through the whole set",
  lead: "The best way to understand a plan set is to trace a single item through every sheet and document that touches it.",
  body: `<p><strong>Example: controller ‘97A’ (bid item 40, “Modify irrigation controller and enclosure ‘97A’”)</strong></p>
<ol class="steps">
<li><div><b>ISS-1</b>Legend: antenna mast symbol; GR vs SR communication; valve code shows controller letter.</div></li>
<li><div><b>IR-7</b>What exists at Palomar today.</div></li>
<li class="hl"><div><b>IP-7</b>“Exist IC ‘97A’ (GR Comm), 48 station, 35 used”; two-wire schematic; antenna mast.</div></li>
<li><div><b>ID-1</b>Detail “Modify irrigation controller and enclosure ‘97A’”: radio, Yagi antenna, two-wire terminal.</div></li>
<li><div><b>IQ-1</b>One “modify” in the IP-7 row; antenna mast count.</div></li>
<li><div><b>E-1 / E-2</b>Which existing service feeds the controller, and the breaker for irrigation.</div></li>
<li class="hl"><div><b>Special Provisions 20-10.02B(1)</b>The Calsense parts list and the quoted price: $6,708.64.</div></li>
<li><div><b>Bid item 40</b>Lump sum per each. The winner bid $14,000.</div></li>
</ol>`,
  ex: `<p>Do this for the five most expensive items on any job. You'll understand the design, catch conflicts, and know exactly what your price covers.</p>`
},

{ h: "Plan review checklist for bidding",
  lead: "Use this every time. Check each box before you start pricing.",
  body: `<ol class="steps">
<li><div><b>Complete set</b>Sheet count matches the title block; addendum sheets swapped in.</div></li>
<li><div><b>Scale verified</b>On every sheet you measure, using the border scale bar.</div></li>
<li><div><b>Legends learned</b>Every symbol and abbreviation on ISS and PL sheets.</div></li>
<li class="hl"><div><b>Water source found</b>Point of connection, meter, backflow, pressure; recycled or potable.</div></li>
<li><div><b>Removals counted</b>Every remove, cap, salvage and “to remain”.</div></li>
<li class="hl"><div><b>New work counted</b>Your own counts, by sheet, compared to the quantity tables.</div></li>
<li><div><b>Details listed</b>Every detail referenced, with its parts and any “(Mod)”.</div></li>
<li><div><b>Notes priced</b>Every note on Tier 1 sheets has a cost line or a “no cost” check.</div></li>
<li class="hl"><div><b>Questions written</b>Every mismatch, missing quantity or conflict, as a bidder inquiry.</div></li>
<li><div><b>Tier 2 sent out</b>Traffic, electrical, and anything else you'll sub, sent for quotes.</div></li>
</ol>`
},

{ t: "terms", h: "Words to know",
  lead: "Plan-reading words from this set.",
  terms: [
    ["Title block", "The box with the job, sheet number, signer and dates."],
    ["Sheet code", "The short name of a sheet, like IP-7 or PQ-1."],
    ["Scale", "How plan distance converts to real distance (1\" = 50')."],
    ["Relative border scale", "A printed bar to check if a sheet is full size."],
    ["Station", "Distance along a centerline in feet, written like 298+55."],
    ["Match line", "Where one sheet continues on another."],
    ["Callout", "Text with a leader line pointing to what it describes."],
    ["Legend", "The key to symbols and hatch patterns."],
    ["Sprinkler schedule", "The table defining each sprinkler symbol."],
    ["Detail", "A drawing showing how one item is built."],
    ["(Mod)", "A Caltrans standard detail modified for this job."],
    ["Quantity table", "A sheet breaking bid quantities down by plan sheet."],
    ["(N)", "Not a separate bid item; for information only."],
    ["Revision triangle", "The mark showing what an addendum changed."],
    ["Point of connection (POC)", "Where the irrigation system connects to the water supply."],
    ["RWCA / CCTS", "Recycled water connection assembly / cross-connection test station."],
    ["MEPA", "Maintain existing planted areas."],
    ["TPFR", "Temporary protection fence (rope)."],
    ["ETW / EP", "Edge of traveled way / edge of pavement."],
    ["R/W", "Right of way: the owner's property line."]
  ]
},

{ t: "quiz", id: "plans", h: "Check yourself",
  lead: "Every answer comes from the real sheets.",
  qs: [
    { q: "A sheet says SCALE 1\" = 50', but the 3-inch border scale bar measures 1.5\" on your print. What scale is your print?", a: ["1\" = 50'", "1\" = 100'", "1\" = 25'"], c: 1, why: "Your print is half size, so every inch is 100 feet. Double anything you measure." },
    { q: "How far is Sta 298+55 from Sta 211+60?", a: ["87 feet", "8,695 feet", "86.95 miles"], c: 1, why: "29,855 − 21,160 = 8,695 feet." },
    { q: "On ISS-1, what does symbol ⑥ require?", a: ["Use next to shoulders, curbs, sidewalks and dikes", "Use only on slopes", "Use at tree wells"], c: 0, why: "Remark ⑤ on the ⑥ pop-up row says it's required adjacent to shoulders, curbs, sidewalks and dikes." },
    { q: "On a removal plan, a label is struck through. What does that mean?", a: ["Keep it", "Remove it", "Ignore it"], c: 1, why: "Struck-through existing items are removed; “to remain” items stay." },
    { q: "An item on IQ-1 is marked (N). What does that mean for your bid?", a: ["You don't build it", "It's not a separate bid item, so its cost goes into other items", "Caltrans supplies it"], c: 1, why: "(N) means for information only. You still build and pay for it." },
    { q: "IQ-1 totals 172 tree well assemblies; the bid item says 180. What is the best approach?", a: ["Bid 172 at the bid item", "Check whether it fits the agency's rounding pattern; if unsure, ask in writing before bid day", "Ignore all quantity tables"], c: 1, why: "Caltrans rounded several items up slightly on this job. Small gaps are usually rounding; anything you can't explain is a written question before bids close." },
    { q: "Why did Addendum 1 raise the iceplant count by exactly 1,960?", a: ["A new area was added to the design", "A callout on PP-6 had been left out of the quantity table", "Caltrans rounded up"], c: 1, why: "The 1,960 CAR EDU callout on PP-6 wasn't in the original PQ-1 total." },
    { q: "Which sheets are Tier 1 for a landscape bidder?", a: ["Utility plans", "Irrigation and planting plans, schedules, details and quantity tables", "Project control"], c: 1, why: "Tier 1 sheets define what you build and how much: they set your price." }
  ]
},

{ t: "practice", id: "plans", h: "Practice on the real sheets",
  lead: "Four hours with the real plan PDF open. Links are in the Real Bid Lab.",
  items: [
    { h: "Check the set and the scale", hrs: 0.25, d: "<p>Open the plans from <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>. Confirm all 65 sheets are there. On IP-3, measure the border scale bar and two station ticks. Write down whether your PDF view is full size.</p>" },
    { h: "Learn the legends", hrs: 0.5, d: "<p>Make a one-page cheat sheet of every symbol and abbreviation on ISS-1 and PL-1. Quiz yourself until you can name each one without looking.</p>" },
    { h: "Count one removal sheet", hrs: 0.5, d: "<p>On IR-4, list every remove, cap, salvage and “to remain” item. Estimate crew hours for the removal work on that sheet.</p>" },
    { h: "Take off one irrigation sheet", hrs: 1, d: "<p>On IP-5, count new devices and measure the new 4\" main. Compare your numbers to the IP-5 row on IQ-1 (1,150 LF of 4\", controllers 97B and 97C, 31 labels, 1 flow sensor, 1 antenna mast). Explain any difference.</p>" },
    { h: "Check one planting sheet", hrs: 0.75, d: "<p>On PP-6, read every callout and measure the iceplant area. Does 13,450 cuttings at 1' spacing fit? Compare the sheet's compost, weed germination and fence to the PP-6 row on PQ-1.</p>" },
    { h: "Trace one item", hrs: 0.5, d: "<p>Pick bid item 63 (4\" main) or item 30 (plant establishment). Trace it through every sheet, the Special Provisions and the bid item list, like the 97A example. Write the trail down.</p>" },
    { h: "Write two bidder inquiries", hrs: 0.5, d: "<p>Write the tree well question (172 vs 180) and one more mismatch you found, in proper form: sheet, item, the conflict, and a proposed answer.</p>" }
  ]
},

{ h: "Deep dive summary",
  lead: "You've now read a real plan set the way an estimator does.",
  body: `<ul>
<li>Rank sheets by how much they affect your price. Spend most of your time on legends, plans, details and quantity tables.</li>
<li>Check the scale and learn the legends before you measure or count anything.</li>
<li>Start irrigation at the water source and follow it out. Start planting with the legend and the sequence of work.</li>
<li>Details are parts lists. Notes are cost lines.</li>
<li>Quantity tables are a check, not the truth. Add them up and compare to the plans and the bid list.</li>
<li>Every mismatch becomes a bidder question, asked in writing before bid day.</li>
</ul>
<p><strong>Next:</strong> price this job in the <a href="#lab-11-428704">Real Bid Lab</a>, or read the full bid walkthrough in <a href="#m15-1">Module 15</a>.</p>`
}
]
});
})();
