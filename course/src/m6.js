(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 6, hours: 9, title: "Irrigation Takeoff",
slides: [

{ t: "cover",
  h: "Irrigation Takeoff",
  lead: "Turn an irrigation plan set into checked quantities by item, size, class and depth, then reconcile them against the engineer's tables before anyone prices them.",
  objectives: [
    "Run a repeatable takeoff routine: sheet list, scale check, legend to lines, count, measure, unpaid work, two-way totals, freeze",
    "Count heads, valves, boxes, controllers and every point-of-connection part; size unlabeled laterals from the sizing chart",
    "Measure pipe by main or lateral, size and class; sleeves, conventional and two-wire control, and trench by depth",
    "Handle fittings, waste, drip zones, testing and non-pay work with a consistent method",
    "Reconcile against real Caltrans quantity tables (11-428704, 11-431064) and sort every difference into rounding, your error or a question"
  ],
  time: [["Reading and slides", "2.25 h"], ["Practice assignments", "6.75 h"], ["Module total", "9 h"]],
  body: `<p>Two complete takeoffs (a spray and drip medical office, and a drip-only parking lot) plus real quantity tables from two Caltrans freeway jobs. Pricing the quantities is <a href="#m8-1">Module 8</a> (material) and <a href="#m9-1">Module 9</a> (labor).</p>`
},

{ h: "The takeoff routine and setup",
  lead: "Quantities only, same order every job: a fixed routine is what catches the item that would have eaten the profit.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Step</th><th>Do</th></tr></thead>
<tbody>
<tr><td>1 · Documents</td><td>Plans, specs, every addendum, quantity sheets. Start the addendum log (<a href="#m12-1">Module 12</a>) first.</td></tr>
<tr><td>2 · Sheet list and scale</td><td>Every irrigation sheet, its revision date, and a scale check against the graphic bar or a known dimension.</td></tr>
<tr><td>3 · Legend to lines</td><td>One line per symbol before counting, even if it ends at zero.</td></tr>
<tr><td>4 · Notes, details, spec</td><td>Default pipe sizes, depths, sleeve, wire and testing rules. These change quantities.</td></tr>
<tr><td>5 · Count devices</td><td>Controller by controller, valve by valve.</td></tr>
<tr><td>6 · Measure</td><td>Mainline, then laterals by valve; sleeves, wire, trench.</td></tr>
<tr><td>7 · Work with no symbol</td><td>Testing, flushing, thrust blocks, programming, as-builts.</td></tr>
<tr><td>8 · Total two ways</td><td>By controller and by sheet must agree.</td></tr>
<tr><td>9 · Compare</td><td>Engineer's tables; sort differences.</td></tr>
<tr><td>10 · Freeze</td><td>Dated copy to pricing; questions to the RFI list.</td></tr>
</tbody></table></div>
<ul>
<li><strong>Units:</strong> count (EA), measure (LF), area converted to LF or EA (drip SF), or LS with a written list of what's in it.</li>
<li><strong>Marking:</strong> one color per item type, same on every job (heads green, valves red, POC purple, main blue, laterals one color per size, sleeves black). Dot every symbol, highlight every run; anything unmarked was missed. In PDF tools, calibrate each sheet and verify on a second known length.</li>
<li><strong>Version control:</strong> stamp each finished sheet with initials, date and revision so an addendum shows which version you counted.</li>
<li><strong>No guesses in counts:</strong> take off what is shown; anything you add goes on its own line marked "allowance" or "not shown."</li>
</ul>`,
  ex: `<p>11-428704 plans are 22" × 34" at 1" = 50'. A half-size 11" × 17" print is 1" = 100'; measured at 1" = 50', every length is half. Sheet ISS-1 also says "all lateral pipe not labeled must be 1 inch." Control wire was an LS bid item: you still take it off, because you buy and install it.</p>`,
  src: "Caltrans 11-428704 plans ISS-1, IP-1 to IP-7 (22 × 34 in sheets); Bid Item List items 36, 41–46, 49, 51, 63."
},

{ h: "Sprinkler schedule and valve code",
  lead: "The schedule defines each head; the valve code gives each zone's head count and GPM. Both are free checks on your count.",
  body: `<p>Sheet ISS-1 of Caltrans 11-431064 (SR-905, Otay Mesa):</p>
<div class="tablewrap"><table>
<thead><tr><th>Column</th><th>Takeoff use</th></tr></thead>
<tbody>
<tr><td>Symbol and item description</td><td>Bid item the head belongs to (riser, pop-up, tree well)</td></tr>
<tr><td>Type and pattern</td><td>Gear drive, rotary stream or flood bubbler; Q, H, F or P (adjustable part circle)</td></tr>
<tr><td>Radius, pressure, discharge</td><td>Rotary stream 18 ft at 50 psi (pounds per square inch): 0.5 GPM (gallons per minute) quarter, 1.0 GPM half; tree well bubblers 0.5 or 1.0 GPM at 30 psi</td></tr>
<tr><td>Riser, pop-up height, protector</td><td>Riser 10", pop-up 12": part of the priced assembly</td></tr>
<tr><td>Tree well drainpipe</td><td>10" per tree well assembly</td></tr>
<tr><td>Remarks</td><td>Note 10: one flood bubbler per 24" box tree, 15-gal tree, palm, and shrub where shown. Remark 3: check valves.</td></tr>
</tbody></table></div>
<p><strong>Valve code</strong> X-X(X)-12-13-21: RCV (remote control valve) size, controller group or hydraulic block, controller letter, station, GPM, sprinkler count when shown.</p>`,
  ex: `<p>Tag says 21 sprinklers and 21 GPM; you counted 19 half heads at 1.0 GPM. Two heads are missing from your count or the zone changed. Recount before moving on.</p>`,
  watch: `<p>Remarks add parts with no symbol: check valves, matched-precipitation nozzles, protectors. They belong in the assembly.</p>`,
  src: "Caltrans 11-431064 plans, sheet ISS-1 (Irrigation Sprinkler Schedule, valve code, pipe sizing charts)."
},

{ h: "Heads, valves, boxes and sensors",
  lead: "Count by exact type, size and options, zone by zone; build boxes from devices because they are rarely drawn.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Device</th><th>Separate lines by</th><th>Carries</th></tr></thead>
<tbody>
<tr><td>Heads</td><td>Symbol, body height, nozzle pattern, PRS (pressure-regulating stem), check valve; riser vs. pop-up</td><td>Swing joint or flex, fittings, gravel per detail (price as an assembly)</td></tr>
<tr><td>Bubblers</td><td>Per tree or shrub from the detail (2, 3 or 4 per tree)</td><td>Drain pipe, gravel on tree wells</td></tr>
<tr><td>RCVs</td><td>Size; pressure regulating; master</td><td>Box, wire connections</td></tr>
<tr><td>Drip control kits</td><td>Size</td><td>Valve, filter, regulator; usually jumbo box</td></tr>
<tr><td>Quick couplers (QC), gate/ball valves</td><td>Size, key type</td><td>Box; swing joint on QC</td></tr>
<tr><td>Controllers</td><td>Stations, mount</td><td>Pad, power, grounding, conduit</td></tr>
<tr><td>Flow sensor, master valve, weather sensor</td><td>Size</td><td>Box, sensor cable or decoder</td></tr>
<tr><td>Air release, pressure regulating valves</td><td>Size</td><td>Box</td></tr>
</tbody></table></div>
<p>Count symbols on the plan, never zone labels. Box count = one per valve, QC and isolation valve unless the detail says otherwise, sized per detail (10" round, standard, jumbo).</p>`,
  ex: `<p>11-428704 sheet IQ-1: 6 new controllers plus 1 modified, 4 flow sensors, 4 1½" RCVs, 3 2" RCVs, 1 3" two-wire master valve, 1 2", 4 3" and 7 4" gate valves, 1 pressure regulating valve, 8 combination air release valves, 3 antenna masts. Tree well sprinkler assemblies (four 0.5 GPM bubblers per pine, counted EA): lateral table 172, bid item 180.</p>`,
  src: "11-428704 plans ISS-1, ID sheets, IQ-1; Bid Item 51."
},

{ h: "Controllers: read what the price carries",
  lead: "A controller bid item includes everything the spec bundles with it; take those parts off even when they are not paid separately.",
  body: `<p>11-431064, bid items 41–44, each a "48 station irrigation controller and enclosure":</p>
<div class="tablewrap"><table>
<thead><tr><th>Controller</th><th class="num">Stations</th><th class="num">Valves on lateral tables</th><th class="num">Spare</th></tr></thead>
<tbody>
<tr><td>'164A'</td><td class="num">48</td><td class="num">33</td><td class="num">15</td></tr>
<tr><td>'165A'</td><td class="num">48</td><td class="num">35</td><td class="num">13</td></tr>
<tr><td>'166A'</td><td class="num">48</td><td class="num">35</td><td class="num">13</td></tr>
<tr><td>'166B'</td><td class="num">48</td><td class="num">48</td><td class="num">0</td></tr>
</tbody></table></div>
<ul>
<li>Concrete foundation and pad, and conduit sweeps, are included in the controller payment. Take off CY, LF of conduit and sweeps anyway.</li>
<li>The spec names the brand and prints Caltrans' supplier quotes, including modems, radios and a 5-year data plan.</li>
<li>'166B' has no backflow or flow sensor of its own on IQ-3; '166A' and '166B' share a spread spectrum radio and flow-monitoring option. Packages differ by controller: read each.</li>
</ul>`,
  watch: `<p>Zero spare stations is fine on a public job built to plan. On private work, check whether the spec requires spares; a larger controller later is a change order (<a href="#m16-1">Module 16</a>).</p>`,
  src: "Caltrans 11-431064 Bid Item List items 41–44; plans IQ-1 to IQ-3; Special Provisions additions to 20-2.05B, 20-2.06B(2)(a), 20-2.06D."
},

{ h: "Point of connection: parts and responsibility",
  lead: "The POC (point of connection) is a cluster of expensive parts drawn as a few symbols, and some of it belongs to someone else. Find out who and write it down.",
  body: `<p>Typical sequence from the source: meter and service, backflow preventer (RP, reduced pressure principle, or DC, double check) with enclosure and pad, isolation valve and wye strainer, master valve and flow sensor, pressure regulator, brass or Sch 80 nipples and unions.</p>
<div class="tablewrap"><table>
<thead><tr><th>Work</th><th>Usually by</th><th>Take off or note</th></tr></thead>
<tbody>
<tr><td>Meter and service</td><td>Water agency; owner pays fees</td><td>11-431064 item 67 "Water meter charges" (LS)</td></tr>
<tr><td>Water during the job</td><td>Often contractor</td><td>11-431064 item 68 "Irrigation water service charges" (LS); ask on private jobs</td></tr>
<tr><td>Power to controller</td><td>Electrician and SDG&amp;E (San Diego Gas &amp; Electric)</td><td>11-431064 item 66 "Electric service for irrigation" (LS); low bidder listed an electrical sub for 100%</td></tr>
<tr><td>Backflow test</td><td>Certified tester</td><td>One test per assembly. The State Water Board's Cross-Connection Control Policy Handbook (effective July 1, 2024) requires testing after installation and at least annually.</td></tr>
<tr><td>Street side of meter</td><td>Varies</td><td>Read the agency standards; RFI if unclear</td></tr>
</tbody></table></div>`,
  ex: `<p>11-428704 sheet IP-7: the single recycled-water POC at Palomar Street gets a new 3" two-wire master valve, 2" flow sensor, 3" and 4" gate valves, an air release valve and an antenna mast. Existing meters and cross connection test station stay.</p>`,
  watch: `<p>On private jobs GCs often assume "irrigation starts at the meter." If meter, power or backflow test isn't yours, exclude it in writing (<a href="#m13-1">Module 13</a>).</p>`,
  src: "Caltrans 11-431064 Bid Item List items 66–68 and Bid Summary subcontractor list; 11-428704 plans IP-7; State Water Resources Control Board, Cross-Connection Control Policy Handbook (adopted Dec. 19, 2023, effective July 1, 2024): https://www.waterboards.ca.gov/drinking_water/certlic/drinkingwater/Publications.html"
},

{ h: "Real POC detail to parts list",
  lead: "Walk the detail in the direction of flow and list every part; only three of these parts have their own bid items, so the rest must ride in those prices.",
  body: `<p>11-431064 detail ID-2, "Backflow preventer assembly in enclosure (BPAE) and remote control valve master (RCVM)," three POCs. Counts from the detail; lengths marked example are for practice.</p>
<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>Unit</th><th class="num">Per POC</th><th class="num">× 3</th><th>Note</th></tr></thead>
<tbody>
<tr><td>2" backflow preventer (BPA)</td><td>EA</td><td class="num">1</td><td class="num">3</td><td>Bid item 46</td></tr>
<tr><td>Enclosure, two-piece, 30" min, hasp, lock guard</td><td>EA</td><td class="num">1</td><td class="num">3</td><td>In item 46</td></tr>
<tr><td>2" ball valves / unions ("typ")</td><td>EA</td><td class="num">2 / 2</td><td class="num">6 / 6</td><td></td></tr>
<tr><td>2" wye strainer with plug (note 1: BPA size)</td><td>EA</td><td class="num">1</td><td class="num">3</td><td></td></tr>
<tr><td>2" tee with threaded plug</td><td>EA</td><td class="num">1</td><td class="num">3</td><td></td></tr>
<tr><td>2" master valve (RCVM)</td><td>EA</td><td class="num">1</td><td class="num">3</td><td>Paid as 2" RCV</td></tr>
<tr><td>2" flow sensor</td><td>EA</td><td class="num">1</td><td class="num">3</td><td>Bid item 47</td></tr>
<tr><td>Copper, meter through BPA to PVC (note 3; example 14 LF)</td><td>LF</td><td class="num">14</td><td class="num">42</td><td>Measure</td></tr>
<tr><td>PCC (Portland cement concrete) thrust blocks, up and down</td><td>EA</td><td class="num">2</td><td class="num">6</td><td></td></tr>
<tr><td>Slab 6" thick, 6" past enclosure each side</td><td>CY</td><td class="num">0.45</td><td class="num">1.36</td><td>Math below</td></tr>
<tr><td>Poly tape, 2" wide, 20 mil, ½" overlap on all buried metal (note 4)</td><td>LF</td><td class="num">allow</td><td class="num">allow</td><td></td></tr>
<tr><td>1" conduit for CNC (control and neutral conductors) to controller (example 25 LF)</td><td>LF</td><td class="num">25</td><td class="num">75</td><td>Measure</td></tr>
<tr><td>PVC adaptor, slip × FPT</td><td>EA</td><td class="num">1</td><td class="num">3</td><td></td></tr>
</tbody></table></div>`,
  ex: `<p>Slab, example 30" × 72" enclosure: 42" × 84" = 3.5 × 7.0 = 24.5 SF × 0.5 ft = 12.25 CF ÷ 27 = 0.45 CY; × 3 = 1.36 CY. Flag "small pour": truck minimums. Use the enclosure size from the cut sheet of the product you will buy.</p>`,
  src: "Caltrans 11-431064 plans, detail ID-2 and sheet IQ-3; Bid Item List items 40, 46, 47."
},

{ h: "Pipe: main or lateral, size, class",
  lead: "One line per main/lateral, size and class; unlabeled pipe takes the default from the notes or the sizing chart.",
  body: `<div class="twocol">
<div><h3>Mainline</h3><ul>
<li>Always pressurized, POC to valves</li>
<li>Heavier class, deeper trench; often Class 315 or Sch 40, gasketed in large sizes</li>
<li>Caltrans: "supply line, main supply side of control valve"</li>
</ul></div>
<div><h3>Laterals</h3><ul>
<li>Downstream of the valve, pressurized only when running</li>
<li>Lighter class, shallower trench; Class 200 or Sch 40 per spec</li>
<li>Caltrans: "supply line, lateral supply side"</li>
</ul></div>
</div>
<ul>
<li>Measure fitting to fitting; write each run length on the plan.</li>
<li>Add vertical pieces the plan can't show: risers at valves and POC, depth changes at sleeves (a short allowance per valve is common).</li>
<li>On 11-428704, 2" was Sch 40 and 3" and 4" were Class 315: different bid items, different prices.</li>
</ul>`,
  deeper: `<p>Schedule 40 PVC (ASTM D1785) has a fixed wall per size, so its pressure rating drops as size increases. Class pipe (ASTM D2241) is pressure-rated at every size: Class 200 is SDR 21, Class 315 is SDR 13.5 (SDR, standard dimension ratio, is outside diameter ÷ wall). Hence the common spec pattern: Sch 40 small, Class 315 for large mains. Check section 32 80 00 on private jobs.</p>`
},

{ h: "Sizing unlabeled laterals from the chart",
  lead: "Each piece of lateral is sized by the heads downstream of it, so a straight zone steps down in size toward the far end.",
  body: `<p>11-431064 ISS-1, "Pipe sizing chart, pop-up sprinkler assembly" (Sch 40, half heads at 1.0 GPM; 1 half = 2 quarters):</p>
<div class="tablewrap"><table>
<thead><tr><th>Heads downstream</th><th class="num">1–11</th><th class="num">12–22</th><th class="num">23–30</th><th class="num">31–50</th><th class="num">51–75</th></tr></thead>
<tbody><tr><td>Pipe size</td><td class="num">1"</td><td class="num">1¼"</td><td class="num">1½"</td><td class="num">2"</td><td class="num">2½"</td></tr></tbody></table></div>
<p><strong>Worked (made-up zone, real chart):</strong> 26 half heads in a line at 18 ft, valve at one end, 30 ft lead to the nearest head. Number heads from the far end; the piece between head n and n+1 carries n heads.</p>
<div class="tablewrap"><table>
<thead><tr><th>Size</th><th>Pieces</th><th class="num">LF</th></tr></thead>
<tbody>
<tr><td>1" (1–11)</td><td>11 × 18</td><td class="num">198</td></tr>
<tr><td>1¼" (12–22)</td><td>11 × 18</td><td class="num">198</td></tr>
<tr><td>1½" (23–26)</td><td>3 × 18 + 30 lead</td><td class="num">84</td></tr>
<tr><td>Total</td><td>26 GPM at the valve fits 1½"</td><td class="num">480</td></tr>
</tbody></table></div>`,
  watch: `<p>Quarter heads count as half a half head: 20 quarters at 0.5 GPM = 10 halves. Counting quarters as halves oversizes the pipe and overprices the zone.</p>`,
  src: "Caltrans 11-431064 plans, sheet ISS-1, pipe sizing charts and note 3 (unlabeled lateral pipe 1 inch or per sizing charts)."
},

{ h: "Sleeves, conduits and bores",
  lead: "Every crossing under paving is a sleeve or a bore: short runs, high cost. Sleeve length = paving width + the extension the detail calls for each side.",
  body: `<ul>
<li>Common practice: one sleeve for pipe and a separate one for wire at mainline crossings; one sleeve at lateral crossings. Sleeves often go in before the GC paves: note the extra trip.</li>
<li>Bores under existing paving: LF by size plus bore pits (EA); get a sub quote if you don't own the rig.</li>
<li>Take off the carrier pipe from its own length, not the conduit length.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Real job</th><th>Item</th><th class="num">Plan</th><th class="num">Bid item</th></tr></thead>
<tbody>
<tr><td>11-428704 IQ-2</td><td>8" and 10" PVC pipe conduit (170 + 112)</td><td class="num">282 LF</td><td class="num">290 (item 66)</td></tr>
<tr><td>11-428704 IQ-2</td><td>10" CHDPE (corrugated high-density polyethylene) conduit</td><td class="num">366 LF</td><td class="num">370 (item 67)</td></tr>
<tr><td>11-428704 IQ-2</td><td>4" Class 315 main inside the conduits</td><td class="num">648 LF</td><td class="num">in item 63</td></tr>
<tr><td>11-431064 IQ-3</td><td>8" PVC conduit, 2 crossings on CL34 (Sta 31+00, 34+00) × 130</td><td class="num">260 LF</td><td class="num">260 (item 61)</td></tr>
<tr><td>11-431064 IQ-3</td><td>3" Class 315 inside it, 2 × 134</td><td class="num">268 LF</td><td class="num">added to item 60</td></tr>
<tr><td>11-431064 IQ-3</td><td>2" electrical conduit for CNC, 2 × 134</td><td class="num">268 LF</td><td class="num">(N)</td></tr>
<tr><td>11-431064 IP-1, IP-2</td><td>6" PVC conduit (sleeve), 2 × 40</td><td class="num">80 LF</td><td class="num">80 (item 62)</td></tr>
</tbody></table></div>`,
  ex: `<p>On 11-428704 the 2" electrical conduits and pavement markers were (N), not separately paid, and the winning bidder listed a boring sub for 54% of item 66, "boring only." On 11-431064 the carrier pipe (134 LF) is longer than its conduit (130 LF) so it connects past both ends.</p>`,
  src: "11-428704 plans IQ-2, Bid Items 63, 66, 67, Bid Summary subcontractor list; 11-431064 plans IQ-3, IP-1, IP-2, Bid Items 60–62."
},

{ h: "Wire: conventional vs. two-wire",
  lead: "Conventional wire sums every valve's run; two-wire is one path plus decoders, splices and grounding.",
  body: `<p><strong>Worked (made up):</strong> 8 valves on one branch at 60, 110, 165, 210, 250, 300, 340 and 400 ft from the controller along the trench. Example spec: 2 spares to the farthest valve; slack 3 ft per wire at each valve, 5 ft at the controller.</p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Conventional</th><th class="num">LF / EA</th><th>Two-wire</th><th class="num">LF / EA</th></tr></thead>
<tbody>
<tr><td>Control</td><td>Sum of runs 1,835 + slack 8 × 3 + 8 × 5 = 64</td><td class="num">1,899</td><td>Path 400 + 5 + 8 stubs × 3</td><td class="num">429</td></tr>
<tr><td>Common</td><td>400 + 8 × 3 + 5</td><td class="num">429</td><td>None</td><td class="num">0</td></tr>
<tr><td>Spares</td><td>2 × 400 + 2 × 8</td><td class="num">816</td><td>Per spec</td><td class="num">0</td></tr>
<tr><td>Total wire</td><td></td><td class="num">3,144</td><td></td><td class="num">429</td></tr>
<tr><td>Decoders</td><td></td><td class="num">0</td><td>1 per valve (4 if 2-station on pairs)</td><td class="num">8</td></tr>
<tr><td>Splice kits</td><td>2 per valve + 2 spare ends</td><td class="num">18</td><td>4 per decoder</td><td class="num">32</td></tr>
<tr><td>Grounding</td><td>At controller</td><td></td><td>Surge arrestors, rods, plates per detail or maker's guide</td><td class="num">EA</td></tr>
</tbody></table></div>
<ul>
<li>Wire colors are set by spec (common, control and spare differ): count rolls by color. Keep exact LF in the takeoff; round to rolls in the order.</li>
<li>Two-wire cable is a specific product; never price it as #14 single conductor.</li>
<li>Wire usually rides the mainline trench. Where it leaves the main to reach a valve, that trench is extra; wire in sleeves counts too.</li>
</ul>`,
  ex: `<p>11-428704: wire was one LS item ("Control and neutral conductors"); the two-wire POC decoder and ground rod at the master valve were (N), and the spec listed a supplier price for the decoder and 1,000 ft of cable (<a href="#m15-1">Module 15</a>).</p>`
},

{ h: "Trench by depth, not by pipe",
  lead: "Pipe is counted per foot of each pipe; trench per foot of ditch, by depth, with shared runs counted once at the deeper depth.",
  body: `<p><strong>Worked (made up):</strong> 300 ft of 2" main with wire. A 1¼" lateral shares the last 120 ft, then runs 180 ft alone.</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">LF</th></tr></thead>
<tbody>
<tr><td>2" main / 1¼" lateral / wire bundle</td><td class="num">300 / 300 / 300</td></tr>
<tr><td>Trench at main depth (includes 120 shared)</td><td class="num">300</td></tr>
<tr><td>Trench at lateral depth (lateral alone)</td><td class="num">180</td></tr>
<tr><td>Total trench</td><td class="num">480, not 600 or 900</td></tr>
</tbody></table></div>
<ul>
<li>Depth per line from the detail or spec; one trench line per depth (main, lateral, drip header).</li>
<li>Subtract sleeved and bored lengths. Check the detail for required spacing in a shared trench (wider trench).</li>
<li>Mark conditions for <a href="#m9-1">Module 9</a>: rock, roots, slopes, hand-dig near trees, utility crossings (count as potholes, EA).</li>
<li>Call 811 (DigAlert) at least two working days before digging, not counting the day of the call, and white-line the area (Gov. Code §4216.2).</li>
</ul>`,
  ex: `<p>11-428704 IP-7: "locate irrigation supply line to minimize trenching within the drip line of existing trees" is a hand-dig condition. The U sheets showed gas, sewer, telecom and Otay Water District lines near the new main: potholing (small test holes, often by vacuum) and hand digging.</p>`,
  watch: `<p>Pricing trench per foot of pipe overprices shared-trench jobs and loses bids; forgetting lateral-only trench loses money. Carry both numbers.</p>`,
  src: "California Government Code §4216.2; SDG&E, \"Dial 811 before you dig\": https://www.sdge.com/more-information/safety/gas-safety/dial-811-you-dig ; 11-428704 plans IP-7, U sheets."
},

{ h: "Fittings and waste",
  lead: "Pick one fittings method, calibrate it from your own invoices, and keep waste in its own column so net quantities stay checkable.",
  body: `<div class="twocol">
<div><h3>A: assemblies and counts</h3><ul>
<li>Head = head + swing joint + tee + nipples; valve = valve + fittings + box + gravel + connectors</li>
<li>Count tees and ells where drawn</li>
<li>Slower, tracks the plan</li>
</ul></div>
<div><h3>B: percent of pipe cost</h3><ul>
<li>Separate percents for laterals (many fittings) and main (few)</li>
<li>Fast; only as good as the data behind it</li>
</ul></div>
</div>
<p><strong>Check one zone both ways (made up):</strong> 18 heads, 320 LF of 1" and ¾" lateral. Counted: 16 tees, 4 ells, 3 bushings, 18 swing joints, 2 male adapters, glue = $96. Percent: 320 × $0.60 = $192 × 25% = $48. Short $48 per zone, $768 on 16 zones. Spray-zone fittings ran 50% of pipe cost; a mainline percent is too low for laterals.</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Example waste (set yours from finished jobs)</th></tr></thead>
<tbody>
<tr><td>PVC pipe</td><td>about 5%</td></tr>
<tr><td>Wire, drip tubing</td><td>about 10%</td></tr>
<tr><td>Heads, valves, controllers</td><td>0: exact count</td></tr>
</tbody></table></div>`,
  watch: `<p>On a unit-price public bid you are paid the bid or measured pipe quantity, never cut-offs, so fittings and waste live inside the unit price. Don't mix methods: if the head assembly includes its swing joint, don't count swing joints again.</p>`
},

{ h: "Fitting rules hidden in notes and specs",
  lead: "General notes and special provisions add fittings that are never drawn; turn each into a count.",
  body: `<p>11-431064 (SR-905):</p>
<div class="tablewrap"><table>
<thead><tr><th>Where</th><th>Says</th><th>Take off</th></tr></thead>
<tbody>
<tr><td>ISS-1 note 2</td><td>Every 90° turn on new main gets two 45° elbows</td><td>Turns × 2, by size</td></tr>
<tr><td>ISS-1 note 3</td><td>Unlabeled lateral is 1" or per sizing charts</td><td>Check each unlabeled run against the chart</td></tr>
<tr><td>ISS-1 note 4</td><td>CNC conduit from master valve and flow sensor to controller is 1"</td><td>LF of 1" conduit per POC</td></tr>
<tr><td>IQ-3, detail ID-7</td><td>3" DIP (ductile iron pipe) supply line, 65 LF on each of 8 sheets</td><td>520 LF, item 45, plus flanged adapters, DIP nipples and expansion assembly per detail</td></tr>
<tr><td>Special Provisions</td><td>Expansion assembly 45° elbows must be ductile iron</td><td>Separate DIP elbow line</td></tr>
<tr><td>Special Provisions</td><td>Pea gravel in tree well drainpipes, ½" max, rounded, washed</td><td>Gravel CF per tree well × 1,892</td></tr>
</tbody></table></div>`,
  watch: `<p>"As shown" means the detail controls: count its flanges, nipples, adapters and couplings. One expansion assembly can hold more fittings than a spray zone.</p>`,
  src: "Caltrans 11-431064 plans ISS-1 (notes 2–4), IQ-3, ID-7; Special Provisions additions to 20-2.08B(6) and 20-2.09B(4); Bid Item 45."
},

{ h: "Work with no symbol: thrust blocks, tests, start-up",
  lead: "(N) means not paid separately, not free: count it and carry the cost in the paid item it belongs to.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Count as</th><th>Example labor (practice)</th></tr></thead>
<tbody>
<tr><td>Thrust blocks</td><td>EA at tees, bends, reducers, dead ends on gasketed main (small glued pipe often exempt; read spec)</td><td></td></tr>
<tr><td>Warning tape, tracer wire, ID tags</td><td>LF along main</td><td></td></tr>
<tr><td>Mainline pressure test</td><td>EA per test section (main built in 3 phases = 3) plus retests from history</td><td>2 workers × 3 h</td></tr>
<tr><td>Lateral flush / drip flush</td><td>EA per valve / drip kit</td><td>0.25 h / 0.5 h</td></tr>
<tr><td>Coverage test with inspector</td><td>EA per valve</td><td>0.2 h</td></tr>
<tr><td>Backflow certification</td><td>EA per assembly</td><td>Tester sub quote</td></tr>
<tr><td>Programming and setup</td><td>EA per controller</td><td>2 h</td></tr>
<tr><td>As-builts and controller charts</td><td>LS + 1 per controller</td><td>4 h + 1 h each</td></tr>
<tr><td>Owner training, recycled-water signs</td><td>EA per spec</td><td>2 h per session</td></tr>
</tbody></table></div>
<p><strong>Worked (made up):</strong> 16 valves, 1 controller, main tested in 2 sections: 12 + 4 + 3.2 + 2 + 5 = <strong>26.2 crew hours</strong>, plus one backflow test by a sub.</p>`,
  ex: `<p>11-428704: thrust blocks, warning tape, the two-wire decoder, ground rods and pavement markers were all (N); their cost belongs in the 4" main. The Special Provisions raised the recycled-water main test to 150 psi (method A modified), which on an old system means more failed joints and retests.</p>`,
  src: "11-428704 plans ISS-1, IQ-1, IQ-2; Special Provisions 20-2 (pressure testing modified to 150 psi)."
},

{ h: "Takeoff spreadsheet and bid form type",
  lead: "Hold the same quantities two ways, by system to check and by bid item to price, with formulas that flag disagreement with the owner's numbers.",
  body: `<p><strong>Tab 1 by system:</strong> controller, then valve; heads by type, pipe by size, drip SF. Mirrors Caltrans lateral tables and lets you check flow per zone. <strong>Tab 2 by item</strong> (goes to pricing):</p>
<div class="tablewrap"><table>
<thead><tr><th>Col</th><th>Header</th><th>Formula or rule</th></tr></thead>
<tbody>
<tr><td>A–C</td><td>Item, description (size, class, type), unit</td><td>Bid item number or own code</td></tr>
<tr><td>D</td><td>Net qty</td><td>=SUMIFS('By system'!F:F,'By system'!B:B,B6)</td></tr>
<tr><td>E–F</td><td>Waste %, order qty</td><td>=ROUNDUP(D6*(1+E6),0)</td></tr>
<tr><td>G–I</td><td>Owner qty, difference %, flag</td><td>=IF(G6=0,"",(D6-G6)/G6) and =IF(AND(G6&lt;&gt;0,ABS(H6)&gt;0.05),"CHECK","")</td></tr>
<tr><td>J–L</td><td>Source sheets, paid how (measured / (F) / (N) / LS), notes</td><td>Typed</td></tr>
</tbody></table></div>
<ul>
<li>Cross-tab check cell: =IF(Tab1total=Tab2total,"OK","MISMATCH"). Lock formula columns. Never round in the net column. After any row insert, recheck SUM ranges.</li>
<li><strong>Unit-price form</strong> (Caltrans, cities, water districts): owner gives items and quantities; you still take off to test their quantities and to price work with no item. <strong>Lump sum</strong> (GCs, private): your takeoff is the quantity and every error is yours; GCs may ask for add/deduct unit prices.</li>
</ul>`,
  ex: `<p>11-428704 IQ-1 is laid out exactly this way: a lateral table by controller and valve (97A-1, 97A-2...) and a main supply table by plan sheet (IP-1 to IP-7), totals feeding the bid items.</p>`
},

{ h: "Worked takeoff 1 · medical office: devices",
  lead: "A complete small commercial takeoff; all numbers are made up. Planting for the same site is in Module 7.",
  body: `<p>New medical office, 1.1-acre lot, about 24,600 SF of landscape. Sheets L-1.0 (plan, 1" = 20') and L-1.1 (legend, notes, details). Spec: main 2" Sch 40; laterals Class 200; sleeves Sch 40; one 24-station smart controller on a pedestal.</p>
<div class="tablewrap"><table>
<thead><tr><th>Device</th><th>Source</th><th class="num">Qty</th></tr></thead>
<tbody>
<tr><td>12" pop-up spray, PRS, 15' Q / H / F</td><td>Symbols</td><td class="num">38 / 26 / 6</td></tr>
<tr><td>12" pop-up spray, side strip</td><td>Symbols</td><td class="num">14</td></tr>
<tr><td>6" pop-up rotor</td><td>Symbols</td><td class="num">22</td></tr>
<tr><td>Tree bubbler</td><td>28 trees × 2 (detail)</td><td class="num">56</td></tr>
<tr><td>1" RCV (8 spray, 2 bubbler) / 1½" RCV (2 rotor)</td><td>Symbols</td><td class="num">10 / 2</td></tr>
<tr><td>1" drip control kit</td><td>Symbols</td><td class="num">4</td></tr>
<tr><td>24-station controller, pedestal</td><td>16 zones used</td><td class="num">1</td></tr>
<tr><td>1½" RP backflow, enclosure, pad (meter by others)</td><td>POC detail</td><td class="num">1</td></tr>
<tr><td>1½" master valve / flow sensor / weather sensor</td><td>POC detail</td><td class="num">1 / 1 / 1</td></tr>
<tr><td>1½" ball valve / quick coupler</td><td>Symbols</td><td class="num">3 / 4</td></tr>
<tr><td>Box: standard (12 RCV) / jumbo (4 kits + MV/FS) / 10" round (4 QC + 3 BV + 8 flush)</td><td>From devices</td><td class="num">12 / 5 / 15</td></tr>
</tbody></table></div>`,
  watch: `<p>Add sub-counts two ways: 8 + 2 + 2 + 4 = 16 zones on a 24-station controller; sprays 38 + 26 + 6 + 14 = 84.</p>`
},

{ h: "Worked takeoff 1 · medical office: measured items",
  lead: "Measured quantities with the math, then the quantity table that goes to suppliers and to labor pricing.",
  body: `<ul>
<li><strong>Main:</strong> 9 runs = 610 LF 2" Sch 40; 3 drive-aisle sleeves × 26 = 78 LF sleeved.</li>
<li><strong>Laterals:</strong> 1" 1,360, 1¼" 410, 1½" 175 = 1,945 LF.</li>
<li><strong>Drip:</strong> 4,200 SF ÷ 1.5 ft rows = 2,800 LF tubing; × 0.6 GPH ÷ 60 = 28 GPM, 7 per zone; headers and footers 240 LF of 1".</li>
<li><strong>Wire:</strong> runs to 16 valves = 4,560 control; common 640; spares 2 × 640 = 1,280.</li>
<li><strong>Trench:</strong> main 610 − 78 = 532 LF; lateral 1,945 − 150 shared + 240 drip header = 2,035 LF.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Unit</th><th class="num">Net</th><th class="num">Waste</th><th class="num">Order</th></tr></thead>
<tbody>
<tr><td>2" Sch 40 main</td><td>LF</td><td class="num">610</td><td class="num">5%</td><td class="num">641</td></tr>
<tr><td>1" Class 200 (incl. 240 drip header)</td><td>LF</td><td class="num">1,600</td><td class="num">5%</td><td class="num">1,680</td></tr>
<tr><td>1¼" / 1½" Class 200</td><td>LF</td><td class="num">410 / 175</td><td class="num">5%</td><td class="num">431 / 184</td></tr>
<tr><td>4" pipe sleeve / 2" wire sleeve / 3" lateral sleeve (6 walks × 8)</td><td>LF</td><td class="num">78 / 78 / 48</td><td class="num">0</td><td class="num">78 / 78 / 48</td></tr>
<tr><td>Inline drip, 0.6 GPH at 12"</td><td>LF</td><td class="num">2,800</td><td class="num">10%</td><td class="num">3,080</td></tr>
<tr><td>Drip flush / air relief / indicator</td><td>EA</td><td class="num">8 / 4 / 4</td><td class="num">0</td><td class="num">8 / 4 / 4</td></tr>
<tr><td>#14 control / common / spare</td><td>LF</td><td class="num">4,560 / 640 / 1,280</td><td class="num">10%</td><td class="num">5,016 / 704 / 1,408</td></tr>
<tr><td>Trench main / lateral depth</td><td>LF</td><td class="num">532 / 2,035</td><td class="num">0</td><td class="num">532 / 2,035</td></tr>
<tr><td>Thrust blocks (glued 2" main per spec)</td><td>EA</td><td class="num">0</td><td></td><td></td></tr>
<tr><td>Pressure test, coverage, programming, as-builts</td><td>LS</td><td class="num">1</td><td></td><td></td></tr>
</tbody></table></div>`,
  watch: `<p>Keep exact feet in the takeoff. Supplier rounding to 20-ft sticks and wire rolls happens in the quote (<a href="#m8-1">Module 8</a>).</p>`
},

{ h: "Second takeoff · drip parking lot: areas, tubing, zones",
  lead: "Drip tubing = area ÷ row spacing; emitters = tubing ÷ emitter spacing; zone GPM = emitters × GPH ÷ 60. Made-up retail lot; Module 7 plants the same site.",
  body: `<p>Six islands 9 × 36 ft inside curb, two perimeter strips 6 × 220 ft. Inline tubing, 0.6 GPH emitters at 12", rows 18" apart, first row 3" from curb.</p>
<div class="tablewrap"><table>
<thead><tr><th>Zone</th><th>Areas</th><th class="num">SF</th><th class="num">Tubing LF (SF ÷ 1.5)</th><th class="num">Emitters</th><th class="num">GPM</th></tr></thead>
<tbody>
<tr><td>1</td><td>Islands A–C (3 × 324)</td><td class="num">972</td><td class="num">648</td><td class="num">648</td><td class="num">6.5</td></tr>
<tr><td>2</td><td>Islands D–F</td><td class="num">972</td><td class="num">648</td><td class="num">648</td><td class="num">6.5</td></tr>
<tr><td>3</td><td>North strip</td><td class="num">1,320</td><td class="num">880</td><td class="num">880</td><td class="num">8.8</td></tr>
<tr><td>4</td><td>South strip</td><td class="num">1,320</td><td class="num">880</td><td class="num">880</td><td class="num">8.8</td></tr>
<tr><td>Total</td><td></td><td class="num">4,584</td><td class="num">3,056</td><td class="num">3,056</td><td class="num">30.6</td></tr>
</tbody></table></div>
<p><strong>Row-method check:</strong> island (9 − 0.5) ÷ 1.5 = 5.7, so 6 rows × 35.5 = 213 LF (area method 216); strip (6 − 0.5) ÷ 1.5 = 3.7, so 4 rows × 219.5 = 878 LF (880). Within 1–2%. Only one zone runs at a time, so the POC sees 8.8 GPM peak, not 30.6.</p>`,
  watch: `<p>Long strips are where the methods drift, and 220 ft may exceed the maker's maximum run: the designer feeds each strip from the middle. Check every zone's GPM against the kit's flow range on its cut sheet; a mismatch means your area or the design is off.</p>`
},

{ h: "Second takeoff · drip parking lot: parts and quantity table",
  lead: "Every part in the drip detail gets a line: cheap individually, expensive when forgotten on 40 islands.",
  body: `<ul>
<li><strong>Headers/footers:</strong> islands 2 × 9 × 6 = 108 LF; strips center supply + 2 end flush = 3 × 6 × 2 = 36 LF; 144 LF of 1".</li>
<li><strong>Supply between islands:</strong> 26-ft aisle + 4 ft into each bed = 34 ft × 2 crossings × 2 zones = 136 LF; sleeves 28 × 2 × 2 = 112 LF.</li>
<li><strong>Flush valves</strong> 6 + 2 × 2 = 10; air/vacuum relief 4 (high point per zone); indicators 4; staples 3,056 ÷ 4 ft = 764 plus 2 per row end (use maker's spacing).</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Unit</th><th class="num">Net</th><th class="num">Waste</th><th class="num">Order</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Inline drip, 0.6 GPH at 12"</td><td>LF</td><td class="num">3,056</td><td class="num">10%</td><td class="num">3,362</td><td>Area ÷ 1.5</td></tr>
<tr><td>1" drip control kit</td><td>EA</td><td class="num">4</td><td class="num">0</td><td class="num">4</td><td>Plan</td></tr>
<tr><td>1" Class 200 headers / supply between islands</td><td>LF</td><td class="num">144 / 136</td><td class="num">5%</td><td class="num">152 / 143</td><td>Detail / plan</td></tr>
<tr><td>1½" main POC to kits (example)</td><td>LF</td><td class="num">180</td><td class="num">5%</td><td class="num">189</td><td>Plan</td></tr>
<tr><td>2" sleeves under aisles</td><td>LF</td><td class="num">112</td><td class="num">0</td><td class="num">112</td><td>Plan + detail</td></tr>
<tr><td>Flush / air relief / indicator</td><td>EA</td><td class="num">10 / 4 / 4</td><td class="num">0</td><td class="num">10 / 4 / 4</td><td>Detail</td></tr>
<tr><td>Staples</td><td>EA</td><td class="num">764</td><td class="num">10%</td><td class="num">841</td><td>Maker</td></tr>
<tr><td>Jumbo / 10" round boxes</td><td>EA</td><td class="num">4 / 14</td><td class="num">0</td><td class="num">4 / 14</td><td>From devices</td></tr>
<tr><td>Control wire, 4 valves</td><td>LF</td><td class="num">per wire method</td><td class="num">10%</td><td></td><td>Wire slide</td></tr>
<tr><td>Flush and test each zone</td><td>LS</td><td class="num">1</td><td></td><td></td><td>Spec</td></tr>
</tbody></table></div>`
},

{ h: "Real cross-check · 11-428704 IQ-1",
  lead: "Take off first, then compare: on (F) items the bid quantity is what you are paid, so your own count tells you whether the pipe you priced is really enough.",
  body: `<p>4" Class 315 main by sheet (item 63 = 7,493 LF), IQ-1 as revised by Addendum 1:</p>
<div class="tablewrap"><table><thead><tr><th>IP-1</th><th>IP-2</th><th>IP-3</th><th>IP-4</th><th>IP-5</th><th>IP-6</th><th>IP-7</th><th>In conduits (IQ-2)</th><th>Total</th></tr></thead>
<tbody><tr><td class="num">440</td><td class="num">1,365</td><td class="num">1,210</td><td class="num">165</td><td class="num">1,150</td><td class="num">1,385</td><td class="num">1,130</td><td class="num">648</td><td class="num"><strong>7,493</strong></td></tr></tbody></table></div>
<div class="tablewrap"><table><thead><tr><th>Sch 40 lateral</th><th class="num">IQ-1</th><th class="num">Bid item</th></tr></thead>
<tbody>
<tr><td>1" / 1¼" / 1½"</td><td class="num">1,390 / 325 / 60</td><td class="num">items 57 / 58 / 59, same</td></tr>
<tr><td>2"</td><td class="num">172 lateral + 20 main side = 192</td><td class="num">192 (item 60)</td></tr>
<tr><td>2½"</td><td class="num">130</td><td class="num">130 (item 61)</td></tr>
</tbody></table></div>`,
  ex: `<p>The 2" line: the main supply table adds 5 + 5 + 10 LF on IP-3, IP-4 and IP-5. Compare only the lateral table and you would think item 60 was 20 LF off. Items 57–63 are all (F), so they match the plan tables to the foot. Many lateral entries are exactly 10 LF: a retrofit where new pipe just reconnects existing laterals to the new main.</p>`,
  src: "11-428704 plans IQ-1 (replaced per Addendum 1, Aug 27, 2021) and IQ-2; Bid Items 57–63; Bid Summary ((F) marks)."
},

{ h: "Real cross-check · 11-431064 laterals by controller",
  lead: "Add across, then down; one pipe size can live in two tables.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Controller (valves)</th><th class="num">1"</th><th class="num">1¼"</th><th class="num">1½"</th><th class="num">2"</th><th class="num">2½"</th></tr></thead>
<tbody>
<tr><td>'164A' (33)</td><td class="num">9,636</td><td class="num">6,976</td><td class="num">1,140</td><td class="num">2,465</td><td class="num">977</td></tr>
<tr><td>'165A' (35)</td><td class="num">12,445</td><td class="num">5,775</td><td class="num">1,445</td><td class="num">2,006</td><td class="num">0</td></tr>
<tr><td>'166A' (35)</td><td class="num">7,692</td><td class="num">6,666</td><td class="num">1,689</td><td class="num">1,479</td><td class="num">5,071</td></tr>
<tr><td>'166B' (48)</td><td class="num">11,012</td><td class="num">7,427</td><td class="num">2,408</td><td class="num">1,852</td><td class="num">6,390</td></tr>
<tr><td><strong>Lateral total</strong></td><td class="num"><strong>40,785</strong></td><td class="num"><strong>26,844</strong></td><td class="num"><strong>6,682</strong></td><td class="num"><strong>7,802</strong></td><td class="num"><strong>12,438</strong></td></tr>
<tr><td>Main side (IQ-3)</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">302</td></tr>
<tr><td><strong>Bid item (55–59)</strong></td><td class="num">40,785</td><td class="num">26,844</td><td class="num">6,682</td><td class="num">7,802</td><td class="num">12,740</td></tr>
</tbody></table></div>
<p>1": 9,636 + 12,445 + 7,692 + 11,012 = 40,785, item 55 to the foot. 2½": 12,438 + 302 main side = 12,740, item 59. Valves: 33 + 35 + 35 + 48 = 151.</p>`,
  ex: `<p>Many rows repeat 396 LF of 1" and 192 LF of 1¼": a standard zone layout. Measure two or three of those zones yourself to confirm the standard length is real.</p>`,
  src: "Caltrans 11-431064 plans IQ-1, IQ-2 (lateral supply side tables and subtotal table), IQ-3; Bid Items 55–59."
},

{ h: "Real cross-check · 11-431064 main side and devices",
  lead: "Every IQ-3 total ties to a bid item once you read the payment clauses; read them before calling anything an error.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">IQ-3</th><th class="num">Bid item</th><th>How</th></tr></thead>
<tbody>
<tr><td>3" Class 315 supply</td><td class="num">12,494</td><td class="num">12,494 (60)</td><td>12,226 by sheet + 268 in conduits</td></tr>
<tr><td>3" DIP</td><td class="num">520</td><td class="num">520 (45)</td><td>65 LF on each of IP-1 to IP-8</td></tr>
<tr><td>1" / 1½" RCV</td><td class="num">33 / 100</td><td class="num">33 (38) / 100 (39)</td><td>By sheet</td></tr>
<tr><td>2" RCV</td><td class="num">18 + 3 master</td><td class="num">21 (40)</td><td>Spec: master paid as RCV of the size shown</td></tr>
<tr><td>2" / 3" gate valves</td><td class="num">39 / 24</td><td class="num">39 / 24</td><td>By sheet</td></tr>
<tr><td>Backflow / flow sensor</td><td class="num">3 / 3</td><td class="num">3 / 3</td><td>IP-4, IP-8, IP-10</td></tr>
<tr><td>Tree well assembly</td><td class="num">1,892</td><td class="num">1,900</td><td>Rounded up</td></tr>
<tr><td>Riser gear driven / pop-up gear driven / riser assembly</td><td class="num">205 / 301 / 111</td><td class="num">210 / 310 / 120</td><td>Rounded up</td></tr>
<tr><td>Pop-up sprinkler assembly</td><td class="num">1,120</td><td class="num">1,120</td><td>Same</td></tr>
</tbody></table></div>
<p>Valve check: 33 + 100 + 18 = 151 RCVs, matching the 151 valves on the lateral tables; the 3 masters are extra, at the POCs.</p>`,
  src: "Caltrans 11-431064 plans IQ-1 to IQ-3; Special Provisions (replacement of 20-2.10D); Bid Items 38–40, 45–60."
},

{ h: "Sorting differences: rounding, error or question",
  lead: "Re-add every subtotal yourself, recognize the owner's rounding pattern, and send an inquiry only for what neither explains.",
  body: `<div class="twocol">
<div><h3>11-428704: rounding pattern</h3>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Plan</th><th class="num">Bid</th></tr></thead>
<tbody>
<tr><td>Valve box cover labels</td><td class="num">197</td><td class="num">200</td></tr>
<tr><td>PVC pipe conduit</td><td class="num">282</td><td class="num">290</td></tr>
<tr><td>10" CHDPE conduit</td><td class="num">366</td><td class="num">370</td></tr>
<tr><td>Tree well assembly</td><td class="num">172</td><td class="num">180</td></tr>
<tr><td>Valves, sensors, controllers</td><td class="num">same</td><td class="num">same</td></tr>
</tbody></table></div></div>
<div><h3>11-431064: a table that disagrees with itself</h3>
<div class="tablewrap"><table>
<thead><tr><th>Tree wells</th><th class="num">Shown</th></tr></thead>
<tbody>
<tr><td>IQ-1 '164A' subtotal (rows add to it)</td><td class="num">608</td></tr>
<tr><td>Same subtotal repeated under '165A'</td><td class="num">613</td></tr>
<tr><td>IQ-2 '166A' subtotal</td><td class="num">456</td></tr>
<tr><td>Same repeated under '166B'</td><td class="num">436</td></tr>
<tr><td>IQ-2 lateral total</td><td class="num">1,892</td></tr>
</tbody></table></div></div>
</div>
<ul>
<li>'164A' rows: 36 + 13 + 61 + 13 + 69 + 80 + 40 + 36 + 11 + 46 + 43 + 12 + 65 + 41 + 42 = 608; the 613 is a copying slip. The total used 608 + 319 + 456 + 509 = 1,892 (repeated figures would give 1,877). Bid item 1,900 covers both, so no effect here; on a lump-sum job it could matter.</li>
<li>On 11-428704 the rounded items are measured (paid on installed quantity); the (F) pipe items match to the foot. An (F) quantity error hits profit directly (<a href="#m15-1">Module 15</a>).</li>
<li>If you differ from both plan and bid, your count is the first suspect. Unexplained gaps go to a bidder inquiry before bid day (<a href="#m12-1">Module 12</a>).</li>
</ul>`,
  src: "11-428704 IQ-1, IQ-2, Bid Items 48, 51, 66, 67; Caltrans 11-431064 plans IQ-1 and IQ-2, Bid Item 48."
},

{ h: "Mistakes that cost money",
  lead: "Most irrigation takeoff losses come from this short list; check each before freezing.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Effect</th><th>Control</th></tr></thead>
<tbody>
<tr><td>Half-size print at full-size scale</td><td>Every length halved</td><td>Scale bar check every sheet</td></tr>
<tr><td>Match-line double count</td><td>Edge heads and pipe counted twice</td><td>Count to the line; note "counted on IP-4" on IP-5</td></tr>
<tr><td>Addendum sheet not retaken</td><td>Quotes and counts don't match the bid set</td><td>Log, retake that sheet only, re-send changed quantities to suppliers</td></tr>
<tr><td>Zone labels used as counts</td><td>Label 18, plan 21</td><td>Count symbols</td></tr>
<tr><td>Two classes on one line</td><td>Class 315 priced as 200</td><td>One line per size and class</td></tr>
<tr><td>POC parts and boxes skipped</td><td>Copper, slab, strainer, 30 boxes unpriced</td><td>Walk the detail; boxes from devices</td></tr>
<tr><td>Sleeved pipe counted as trench; drip area includes paving</td><td>Bid high</td><td>Subtract sleeves, bores, hardscape</td></tr>
<tr><td>(N) items skipped</td><td>Thrust blocks, tape, decoders free</td><td>Count; carry in paid item</td></tr>
<tr><td>"Reference only" quantity list used on lump sum</td><td>A short list is your loss</td><td>Own takeoff; list as a check only</td></tr>
<tr><td>Rounding early</td><td>Errors stack</td><td>Exact net; round only to order</td></tr>
</tbody></table></div>`,
  watch: `<p>POC detail shows a meter but names no installer: send an RFI and state "meter by others" in the proposal. A meter can cost more than the backflow.</p>`
},

{ t: "scorer", id: "m6qa", h: "Takeoff QA checklist",
  lead: "Score before the takeoff goes to pricing. 2 = done and checked, 1 = partly, 0 = not done. Saved in this browser.",
  items: [
    ["All documents and addenda", "Every addendum logged; every sheet stamped with the version counted"],
    ["Scale checked", "Scale bar checked on every sheet, including half-size prints and PDFs"],
    ["Legend complete", "Every legend symbol has a line, even if the count is zero"],
    ["Everything marked", "Every symbol dotted, every pipe highlighted; nothing unmarked left"],
    ["Counts by zone", "Heads counted by valve, checked against valve codes and flows"],
    ["POC walked part by part", "Backflow, enclosure, slab, valves, strainer, master valve, flow sensor, conduit"],
    ["Pipe by size and class", "Main and laterals split; unlabeled pipe sized from the chart or notes"],
    ["Sleeves, wire and trench", "Sleeves listed; wire by method; trench by depth with shared runs counted once"],
    ["Unpaid work listed", "(N) items, thrust blocks, tests, flushing, programming, as-builts"],
    ["Totals checked two ways", "By system equals by item; engineer's table compared and differences sorted"]
  ],
  bands: [
    [18, "Ready for pricing", "Freeze a dated copy and hand it off."],
    [13, "Fix the gaps first", "Finish the lines scored 0 or 1 before anyone prices this."],
    [0, "Not ready", "Go back to the routine at the start of this module."]
  ]
},

{ t: "terms", h: "Words to know",
  lead: "Irrigation takeoff terms. Full list in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Net / order quantity", "What the plans show / what you buy after waste and rounding."],
    ["Sprinkler schedule", "Table of each head's type, pattern, radius, pressure, flow and riser height."],
    ["Valve code", "Tag at each valve: size, controller, station, GPM, head count."],
    ["Pipe sizing chart", "Sets lateral size by heads downstream."],
    ["POC", "Point of connection: where irrigation meets the water supply."],
    ["BPA / BPAE", "Backflow preventer assembly / one in an enclosure."],
    ["RP / DC", "Reduced pressure principle / double check backflow types."],
    ["RCV / RCVM", "Remote control valve / master valve near the POC; Caltrans pays a master as an RCV of its size."],
    ["Flow sensor", "Meter that reports flow to the controller to catch breaks."],
    ["Mainline / lateral", "Always pressurized, POC to valves / downstream of a valve."],
    ["Sch 40 / Class 200 / Class 315", "PVC with fixed wall per size / pressure-rated SDR 21 / SDR 13.5."],
    ["DIP", "Ductile iron pipe."],
    ["Sleeve / bore", "Pipe laid under new paving for later pulls / pipe pushed under existing paving."],
    ["CNC", "Control and neutral conductors: Caltrans' valve wires."],
    ["Two-wire / decoder", "One cable past all valves / module that opens its valve on its address."],
    ["Common wire", "Shared return wire in a conventional system."],
    ["Thrust block", "Concrete at fittings on gasketed main to resist pressure."],
    ["Header / footer", "Pipe feeding drip rows / joining their far ends for flushing."],
    ["Match line", "Where one sheet continues on the next."],
    ["Potholing", "Small test hole to locate a utility's depth."],
    ["811 / DigAlert", "Call-before-you-dig; two working days' notice (Gov. Code §4216.2)."],
    ["Assembly", "A device priced with every part its detail shows."],
    ["(N) / (F)", "Caltrans: not a separate pay item / final pay, paid at the bid quantity."],
    ["Unit-price bid", "Owner gives items and quantities; you price per unit."]
  ]
},

{ t: "quiz", id: "m6", h: "Check yourself",
  lead: "Work each one; most need a number or a call.",
  qs: [
    { q: "You measure a half-size print of a 1\" = 50' sheet with a 1\" = 50' scale and get 600 LF. Real length?", a: ["300 LF", "600 LF", "1,200 LF"], c: 2, why: "Half-size makes the true scale 1\" = 100', so every length doubles." },
    { q: "Using the 11-431064 pop-up sizing chart, what size is a lateral piece carrying 26 half heads?", a: ["1¼\"", "1½\"", "2\""], c: 1, why: "The chart puts 23 to 30 half heads on 1½\"." },
    { q: "A drip zone is 2,400 SF with rows 18\" apart, 0.6 GPH emitters at 12\". Tubing and flow?", a: ["1,600 LF, 9.6 GPM", "2,400 LF, 24 GPM", "1,600 LF, 16 GPM"], c: 2, why: "2,400 ÷ 1.5 = 1,600 LF = 1,600 emitters × 0.6 = 960 GPH ÷ 60 = 16 GPM." },
    { q: "On 11-428704 the lateral table shows 172 LF of 2\" pipe, but bid item 60 is 192 LF. Why?", a: ["Caltrans rounded up", "The bid item includes 20 LF of 2\" on the main supply side", "Waste allowance"], c: 1, why: "IQ-1's main supply table adds 5 + 5 + 10 LF of 2\"; the item combines both tables." },
    { q: "On 11-431064, IQ-3 shows 18 2\" RCVs plus 3 2\" master valves; item 40 is 21. Why?", a: ["Rounding", "The Special Provisions pay a master valve as an RCV of the size shown", "Three valves are missing from the plans"], c: 1, why: "Read the payment clause: 18 + 3 = 21." },
    { q: "A 2\" main runs 300 ft; a lateral shares the trench for 120 ft, then runs 180 ft alone. Total trench?", a: ["480 LF", "600 LF", "900 LF"], c: 0, why: "300 at main depth (shared part included) + 180 at lateral depth." },
    { q: "Valves sit 100, 200 and 300 ft from the controller. Conventional control plus common wire, before slack and spares?", a: ["600 LF", "900 LF", "1,200 LF"], c: 1, why: "Control 100 + 200 + 300 = 600; common to the farthest valve 300; 900 total." },
    { q: "Thrust blocks are marked (N) on the 4\" main of a Caltrans plan. What happens to them?", a: ["Skip them", "Count them and carry their cost in the 4\" main unit price", "Add your own bid item"], c: 1, why: "(N) means no separate payment, not no cost." },
    { q: "A repeated subtotal says 613 tree wells, but the rows above add to 608 and the sheet total used 608. What do you carry?", a: ["613, the later figure", "608, re-added from the rows and checked against your own takeoff", "The bid item only"], c: 1, why: "Tables are typed by people; re-add rows. On 11-431064 the 613 was a copying slip." },
    { q: "An 8\" conduit crossing is 130 LF and the 3\" carrier inside is 134 LF. How do you take off the 3\"?", a: ["130 LF, the conduit length", "134 LF, from the carrier pipe length", "130 LF plus 5% waste"], c: 1, why: "The carrier runs past both ends to connect; taking off conduit length shorts the pipe." }
  ]
},

{ t: "practice", id: "m6", h: "Practice assignments",
  lead: "Real takeoff work on two Caltrans jobs, plus the template you'll use on every bid.",
  items: [
    { h: "Set up 11-428704 and read the legend", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>; download the plans and Addendum 1. Make a sheet list (ISS-1, IR-1 to 7, IP-1 to 7, ID-1 to 6, IQ-1, IQ-2), mark the sheets Addendum 1 replaced, and turn every ISS-1 symbol into a line with its unit. List every note that changes a quantity.</p>" },
    { h: "Count the devices on IP-7", hrs: 1.25, d: "<p>Sheet IP-7 (PDF page 38, Palomar Street end) holds the recycled-water POC. Without looking at IQ-1, count every new device: controller work, antenna mast, flow sensor, master valve, gate valves by size, air release valves, valve box labels. Mark each symbol.</p>" },
    { h: "Measure the 4\" main on IP-7", hrs: 1, d: "<p>Verify the scale against the graphic bar, then measure the new 4\" Class 315 main run by run. Write each length on the sheet and total it.</p>" },
    { h: "Compare to IQ-1 and write the inquiry", hrs: 0.5, d: "<p>Compare your IP-7 counts and main length to the IP-7 row of IQ-1 (1,130 LF of 4\" main, 2 CARVs, two 3\" and one 4\" gate valve, and so on). Sort each difference over 5% into rounding, your error or a question. Draft one bidder inquiry as you'd send it to Caltrans.</p>" },
    { h: "Re-add the 11-431064 quantity tables", hrs: 1, d: "<p>Open <a href=\"#lab-11-431064\">Real Bid Lab · 11-431064</a>. On IQ-1 to IQ-3 (PDF pages 53 to 55), re-add controller '165A' (35 valves) for every column: 1\", 1¼\", 1½\", 2\" pipe, tree wells, risers, pop-ups. Check the IQ-3 totals for 3\" Class 315 and gate valves against items 53, 54 and 60. List every number carried between tables and whether it was copied correctly.</p>" },
    { h: "Parts list from detail ID-2", hrs: 0.5, d: "<p>On the same set, open detail ID-2 (PDF page 47). Walk it in the direction of flow and list every part with unit and count per POC, × 3 POCs. Mark which parts have their own bid item and which ride in another item.</p>" },
    { h: "Build the takeoff template", hrs: 1, d: "<p>Build the two-tab workbook (by system; by item with net, waste, order, owner qty, difference %, flag, source, paid how, notes) using the formulas on the template slide. Enter worked takeoff 1 and confirm your totals match its quantity table.</p>" },
    { h: "Take off a live local sheet", hrs: 1, d: "<p>Take one irrigation sheet from a current public bid (for example the City of San Diego's <a href=\"https://www.sandiego.gov/cip/bidopps\" target=\"_blank\" rel=\"noopener\">bid opportunities</a>) or a GC invitation into your template. Record the time it took: that is your first data point for sizing future bids (<a href=\"#m3-1\">Module 3</a>).</p>" }
  ]
},

{ h: "Module 6 summary",
  lead: "A frozen irrigation takeoff is exact net quantities by item, size and class, each with a source sheet, reconciled against the owner's numbers.",
  body: `<ul>
<li>Routine every job: documents, sheet list, scale, legend to lines, notes, count, measure, no-symbol work, two-way totals, compare, freeze.</li>
<li>Count devices by exact type; boxes from devices; walk the POC detail and assign meter, power and backflow test.</li>
<li>Pipe by main or lateral, size and class; unlabeled pipe from the sizing chart; carrier pipe from its own length.</li>
<li>Conventional wire sums runs; two-wire is path + decoders + splices + grounding. Trench by depth, shared runs once, sleeves out.</li>
<li>Drip: SF ÷ row spacing; check every zone's GPM. Fittings and waste by a calibrated method, in their own column.</li>
<li>(N) work is counted and carried in a paid item. Re-add every engineer subtotal, read payment clauses, and sort differences into rounding, error or question.</li>
</ul>
<p><strong>Next: <a href="#m7-1">Module 7 · Planting, Soil and Hardscape Takeoff</a></strong></p>`
}
]
});
