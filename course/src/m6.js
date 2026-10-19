(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 6, hours: 12, title: "Irrigation Takeoff",
slides: [

{ t: "cover",
  h: "Irrigation Takeoff",
  lead: "A takeoff is the list of everything on the plans, counted and measured. This module teaches you to take off an irrigation system piece by piece, organize it so it can be priced, and check it against the engineer's numbers.",
  objectives: [
    "Explain what a takeoff is and why you keep it separate from pricing",
    "Set up a plan set for takeoff: sheet list, legend, scale check, color code",
    "Count heads, valves, controllers, backflow and every part of the point of connection",
    "Measure mainline, laterals, sleeves, wire and trench by size, class and depth, with the math shown",
    "Take off conventional and two-wire control systems, drip zones, fittings, testing and waste",
    "Organize the takeoff by controller and by bid item in a spreadsheet with formulas and checks",
    "Check your quantities against real Caltrans quantity tables (11-428704 and 11-431064) and catch common mistakes"
  ],
  time: [["Reading and slides", "4 h"], ["Practice assignments", "8 h"], ["Module total", "12 h"]],
  body: `<p>You already know how an irrigation system goes in the ground. Here you learn to turn a plan sheet into a list of quantities. Pricing those quantities comes in Modules 8 and 9.</p>
<p>This module has two full worked takeoffs (a spray and drip office site, and a drip-only parking lot), real quantity tables from two Caltrans freeway jobs, and a checklist you can use on every bid. Keep a calculator and a highlighter next to you.</p>`
},

{ h: "What a takeoff is, and why it comes before pricing",
  lead: "A takeoff answers one question: how much of each thing is on this job? Price comes later, in a separate step.",
  body: `<ol class="steps">
<li class="hl"><div><b>Takeoff</b>Count and measure every item on the plans. Output: a list of items, units and quantities. No dollars yet.</div></li>
<li><div><b>Pricing</b>Put material, labor and equipment costs on each quantity (Modules 8 and 9).</div></li>
<li><div><b>Markup and final number</b>Add overhead and profit (Module 10).</div></li>
</ol>
<div class="twocol">
<div><h3>Why keep them apart</h3><ul>
<li>You can check a takeoff by itself. Another person can recount it.</li>
<li>When a supplier price changes, you change the price, not the counts.</li>
<li>When an addendum (a written change to the bid documents) changes the plans, you change the counts, not the prices.</li>
<li>The same takeoff feeds your supplier quote requests.</li>
</ul></div>
<div><h3>What goes into a takeoff</h3><ul>
<li>Every item, with a clear name (size, type, class)</li>
<li>A unit: EA (each), LF (linear feet), SF (square feet), CY (cubic yards), LS (lump sum, one price for the whole thing)</li>
<li>A quantity, and where it came from (sheet number)</li>
<li>Notes: “by others,” “not paid separately,” “verify”</li>
</ul></div>
</div>`,
  watch: `<p>Don't mix guesses into the counts. If you think the plans are missing something, take off what's shown and add a separate line marked “allowance” or “not shown, added by estimator.” Mixed-up numbers can't be checked later.</p>`
},

{ h: "Your takeoff routine, start to finish",
  lead: "Do the same steps in the same order on every job. A routine is what keeps you from skipping the one item that loses the job's profit.",
  body: `<ol class="steps">
<li><div><b>1 · Get every document</b>Plans, specifications, every addendum, and any quantity sheets. Start an addendum log (Module 12) before you open the plans.</div></li>
<li><div><b>2 · Make the sheet list</b>Every irrigation sheet, its number, what's on it and its latest revision date.</div></li>
<li><div><b>3 · Check the scale on every sheet</b>Measure the graphic scale bar or a known dimension. Write the scale on your sheet list.</div></li>
<li><div><b>4 · Turn the legend into line items</b>One line per symbol, before you count anything.</div></li>
<li><div><b>5 · Read the notes, details and spec section</b>Default pipe sizes, depths, sleeve rules, wire rules, testing. These change quantities.</div></li>
<li class="hl"><div><b>6 · Count devices, controller by controller</b>Heads, valves, boxes, point of connection parts.</div></li>
<li><div><b>7 · Measure pipe by size and class</b>Mainline first, then laterals, valve by valve.</div></li>
<li><div><b>8 · Sleeves, wire and trench</b>Each one measured from what you already marked.</div></li>
<li><div><b>9 · List the work with no symbol</b>Testing, flushing, thrust blocks, programming, as-builts (drawings that show what was actually built).</div></li>
<li><div><b>10 · Total by item and check two ways</b>By controller and by sheet should give the same totals.</div></li>
<li><div><b>11 · Compare to the engineer's tables</b>Sort differences into rounding, your mistake, or a question.</div></li>
<li><div><b>12 · Freeze, save and hand off</b>Dated copy goes to pricing. Questions go into an RFI (request for information) list.</div></li>
</ol>`,
  ex: `<p>Time it. On your first few takeoffs, write down how long each step took. After five jobs you'll know how many hours a bid of a given size needs, which helps you decide what you have time to bid (Module 3).</p>`
},

{ h: "Set up before you count",
  lead: "Twenty minutes of setup saves hours of recounting. Know the sheets, learn the legend and check the scale before you count a single head.",
  body: `<ol class="steps">
<li><div><b>Make a sheet list</b>Write down every irrigation sheet, its number and what's on it: plans, legend, details, notes, quantity tables. Note the latest revision date on each.</div></li>
<li><div><b>Read the legend first</b>Copy every symbol into your takeoff as a line item before you count. If a symbol is on the legend, it gets a line, even if you end up with zero.</div></li>
<li class="hl"><div><b>Check the scale</b>Find the scale on each sheet. Measure something with a known length (a dimension or the graphic scale bar) to make sure your print or PDF is true to scale.</div></li>
<li><div><b>Pick a color code</b>One color per item type, the same on every job. Example: heads green, valves red, mainline blue, laterals by size, sleeves orange.</div></li>
<li><div><b>Mark as you go</b>Every symbol you count gets a check mark or a dot. Every pipe run you measure gets highlighted. When you're done, anything without a mark was missed.</div></li>
<li><div><b>Read the notes and details</b>Notes like “all unmarked laterals are 1 inch” change your pipe totals.</div></li>
</ol>`,
  ex: `<p>Real example: the 11-428704 plans are full-size 22" × 34" sheets drawn at 1" = 50'. Print them on 11" × 17" paper and the scale becomes 1" = 100'. If you measure a half-size print with a 1" = 50' scale, every length is half of what it should be. The sprinkler legend sheet ISS-1 also says “all lateral pipe not labeled must be 1 inch.”</p>`,
  src: "Caltrans contract 11-428704 plans, sheets ISS-1 and IP-1 to IP-7 (PDF page size 22 × 34 in)."
},

{ h: "Color-coding, step by step",
  lead: "A color code turns a busy plan into a map of what you've done. Use the same colors on every job so your eye learns them.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Example color</th><th>Mark</th></tr></thead>
<tbody>
<tr><td>Spray heads</td><td>Green</td><td>Dot on each symbol</td></tr>
<tr><td>Rotors and gear-drive heads</td><td>Dark green</td><td>Dot</td></tr>
<tr><td>Bubblers and tree wells</td><td>Brown</td><td>Dot</td></tr>
<tr><td>Valves (RCV, remote control valve) and drip kits</td><td>Red</td><td>Circle</td></tr>
<tr><td>Point of connection parts, backflow, master valve, flow sensor</td><td>Purple</td><td>Box around the cluster</td></tr>
<tr><td>Mainline</td><td>Blue</td><td>Highlight the line</td></tr>
<tr><td>Laterals</td><td>One color per size (yellow 1", orange 1¼", pink 1½" and so on)</td><td>Highlight</td></tr>
<tr><td>Sleeves and bores</td><td>Black or gray</td><td>Heavy line</td></tr>
<tr><td>Drip areas</td><td>Light blue fill</td><td>Area outline</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Save a working copy</b>Name it with the job, sheet and date, for example “SR905_IP-4_takeoff_2026-10-19.pdf.” Never mark up the only original.</div></li>
<li><div><b>Calibrate</b>In your PDF markup program, set the scale on each sheet from the scale bar. Check it on a second known length.</div></li>
<li><div><b>Build your tool set once</b>Make one count tool and one length tool per item, with the colors above. Save the set and reuse it on every job.</div></li>
<li class="hl"><div><b>Work one zone at a time</b>Count the heads on one valve, then measure its laterals, then move on. Write the valve number on your subtotal.</div></li>
<li><div><b>Stamp each finished sheet</b>“Takeoff done, initials, date.” If an addendum replaces the sheet later, you'll know which version you counted.</div></li>
<li><div><b>Export the totals</b>Most markup programs can export a list of counts and lengths to a spreadsheet. Paste it into your “by system” tab.</div></li>
</ol>`,
  watch: `<p>On paper, use highlighters that don't hide the line weight or the text. A dark marker over a pipe callout can hide the size label you need later.</p>`
},

{ h: "Count, measure or area: three kinds of quantities",
  lead: "Every item on an irrigation plan is one of three types. Knowing which one tells you how to take it off and what unit to use.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Type</th><th>How you take it off</th><th>Unit</th><th>Irrigation examples</th></tr></thead>
<tbody>
<tr><td><strong>Count</strong></td><td>Count each symbol</td><td>EA</td><td>Heads, valves, controllers, quick couplers, valve boxes, backflow, sensors, gate valves</td></tr>
<tr><td><strong>Measure</strong></td><td>Measure length along the line</td><td>LF</td><td>Mainline, laterals, sleeves, wire, trench, drip tubing (from runs shown)</td></tr>
<tr><td><strong>Area</strong></td><td>Measure the area, then convert</td><td>SF, then LF or EA</td><td>Drip zones drawn as shaded areas: area ÷ row spacing = tubing LF</td></tr>
<tr><td><strong>Lump sum</strong></td><td>One line, with a list of what's in it</td><td>LS</td><td>Testing, flushing, programming, as-builts, recycled-water signs</td></tr>
</tbody></table></div>`,
  ex: `<p>Real bid item units on 11-428704: controllers EA, 4" main LF, tree well sprinkler assemblies EA, control and neutral conductors (wire) LS, recycled water signs LS. Notice that the wire was a lump sum. You still take it off, because you have to buy it and install it.</p>`,
  src: "Caltrans 11-428704 Bid Item List, items 36, 41–46, 49, 51, 63."
},

{ h: "Read the sprinkler schedule and valve code first",
  lead: "The sprinkler schedule tells you what each head is. The valve code tells you how many heads and how much water each zone should have. Both are free checks on your count.",
  body: `<p>Real example: sheet ISS-1 of Caltrans job 11-431064 (SR-905 landscaping in Otay Mesa) has a sprinkler schedule with these columns. Each one matters to the takeoff:</p>
<div class="tablewrap"><table>
<thead><tr><th>Column</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Symbol and item description</td><td>Which bid item the head belongs to (riser, pop-up, tree well)</td></tr>
<tr><td>Sprinkler type</td><td>Gear drive (rotor), rotary stream or flood bubbler</td></tr>
<tr><td>Spray pattern</td><td>Q (quarter), H (half), F (full) or P (part circle, adjustable)</td></tr>
<tr><td>Radius, operating pressure, discharge</td><td>Example rows: rotary stream 18 ft at 50 psi (pounds per square inch), 0.5 GPM (gallons per minute) quarter and 1.0 GPM half; tree well bubblers 0.5 or 1.0 GPM at 30 psi</td></tr>
<tr><td>Riser height, pop-up height, protector</td><td>Riser 10", pop-up 12": part of the assembly you'll price</td></tr>
<tr><td>Tree well drainpipe length</td><td>10" on this job: material inside each tree well assembly</td></tr>
<tr><td>Remarks</td><td>Note 10: one flood bubbler per 24-inch box tree, per 15-gallon tree, per palm, and per shrub where shown</td></tr>
</tbody></table></div>
<p><strong>The valve code</strong> on ISS-1 reads like <strong>X-X(X)-12-13-21</strong>. In order: RCV size, controller group number or hydraulic block, controller unit letter, controller station, GPM, and quantity of sprinklers when shown.</p>`,
  ex: `<p>How you use it: if a valve tag says 21 sprinklers and 21 GPM, and you counted 19 half-circle heads at 1.0 GPM, you missed two heads or the designer changed the zone. Recount before you move on.</p>`,
  watch: `<p>The schedule's remarks can add parts that have no symbol: check valves (remark 3 on ISS-1), matched precipitation nozzles, protectors. Each one is in the assembly price, so it belongs in your takeoff notes.</p>`,
  src: "Caltrans 11-431064 plans, sheet ISS-1 (Irrigation Sprinkler Schedule, valve code and pipe sizing charts)."
},

{ h: "Counting heads",
  lead: "Count heads by exact type, body height and nozzle. A 12-inch pop-up with a pressure regulator is a different item from a 6-inch pop-up without one.",
  body: `<ul>
<li><strong>One line per legend symbol.</strong> Spray heads with different nozzles (quarter, half, full, strip) usually have different symbols. Keep them separate: you buy nozzles by pattern.</li>
<li><strong>Count by zone (valve).</strong> Count the heads on each valve, then add up. Zone counts let you check flow later, and they catch heads you counted twice.</li>
<li><strong>Bubblers count per tree or per shrub.</strong> Read the detail. A tree detail may show 2, 3 or 4 bubblers per tree.</li>
<li><strong>Riser heads and pop-ups are separate items.</strong> So are heads with check valves and pressure regulators (often shown as PRS, pressure-regulating stem).</li>
<li><strong>Count the assembly the detail shows.</strong> A head detail shows the swing joint or flex pipe, fittings and gravel. You'll price the whole assembly as one unit.</li>
</ul>`,
  ex: `<p>Real example: on 11-428704, the tree well detail shows four 0.5 GPM bubblers in a drain pipe for each pine tree. The bid item “Tree well sprinkler assembly” is counted per assembly (EA), and the lateral quantity table lists 172 of them. The bid item list says 180. More on that difference later in this module.</p>`,
  watch: `<p>Don't count heads from the zone label alone (“Zone 5: 18 heads”). Count the symbols on the plan. Designers update plans and forget to update labels.</p>`,
  src: "11-428704 plans ISS-1, ID sheets, IQ-1; Bid Item 51."
},

{ h: "Valves, boxes, controllers and sensors",
  lead: "Devices are few but expensive. Count each one by size and type, and give every device its box.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Device</th><th>Count by</th><th>Don't forget</th></tr></thead>
<tbody>
<tr><td>Remote control valves (RCVs)</td><td>Size (1", 1½", 2"), type (with pressure regulator, master valve)</td><td>Each one needs a valve box and wire connections</td></tr>
<tr><td>Drip control zone kits</td><td>Size</td><td>Valve, filter and pressure regulator together; often a jumbo box</td></tr>
<tr><td>Quick couplers (QC, a hose hookup valve opened with a key)</td><td>Size, key type</td><td>Box and swing joint for each</td></tr>
<tr><td>Gate or ball valves (isolation)</td><td>Size</td><td>Box for each; check the detail for the box size</td></tr>
<tr><td>Valve boxes</td><td>Size: 10" round, standard, jumbo</td><td>Count them from the devices, not from separate symbols</td></tr>
<tr><td>Controllers</td><td>Station count, mount (wall, pedestal, enclosure)</td><td>Concrete pad, power, grounding, conduit</td></tr>
<tr><td>Sensors</td><td>Flow sensor size, master valve size, rain or weather sensor</td><td>Sensor cable or decoder, box</td></tr>
<tr><td>Air release, pressure regulating valves</td><td>Size</td><td>Box for each</td></tr>
</tbody></table></div>`,
  ex: `<p>Real counts from sheet IQ-1 of 11-428704: 6 new controllers plus 1 modified, 4 flow sensors, 4 1½" RCVs, 3 2" RCVs, 1 3" two-wire master valve, 1 2" gate valve, 4 3" gate valves, 7 4" gate valves, 1 pressure regulating valve, 8 combination air release valves, 3 antenna masts.</p>`,
  watch: `<p>Valve boxes are easy to miss because they're usually not drawn. Build the box count from your device count: one box per valve, quick coupler and isolation valve, unless the detail says otherwise.</p>`
},

{ h: "Controllers: what comes with the box",
  lead: "A controller line in the bid is more than the controller. Read the spec to see what the controller price has to carry.",
  body: `<p>Real example, 11-431064 (SR-905):</p>
<div class="tablewrap"><table>
<thead><tr><th>Controller</th><th>Stations</th><th>Valves on the lateral tables</th><th>Stations left</th></tr></thead>
<tbody>
<tr><td>'164A'</td><td class="num">48</td><td class="num">33</td><td class="num">15</td></tr>
<tr><td>'165A'</td><td class="num">48</td><td class="num">35</td><td class="num">13</td></tr>
<tr><td>'166A'</td><td class="num">48</td><td class="num">35</td><td class="num">13</td></tr>
<tr><td>'166B'</td><td class="num">48</td><td class="num">48</td><td class="num">0</td></tr>
</tbody></table></div>
<ul>
<li>Each controller is its own bid item (items 41–44), each “48 station irrigation controller and enclosure.”</li>
<li>The Special Provisions say payment for the <strong>concrete foundation and pad, and conduit sweeps</strong> for the controller enclosure cabinet is included in the controller payment. Take them off anyway: CY of concrete, LF of conduit, sweeps EA.</li>
<li>The spec names the brand and lists Caltrans' quoted prices from a local supplier, with modems, radios and a 5-year data plan. Every one of those parts is in the bid item.</li>
<li>Controller '166B' has no backflow or flow sensor of its own on IQ-3. The spec gives it a radio and a flow-sharing software option so it can use '166A's flow sensor.</li>
</ul>`,
  watch: `<p>A controller with every station used ('166B' here) is fine for a public job built to plan. On a private job, check whether the spec asks for spare stations. Adding a bigger controller later is a change order (Module 16) the owner may not want to pay.</p>`,
  src: "Caltrans 11-431064 Bid Item List items 41–44; plans IQ-1, IQ-2, IQ-3; Special Provisions additions to sections 20-2.05B, 20-2.06B(2)(a) and 20-2.06D."
},

{ h: "The point of connection",
  lead: "The point of connection (POC) is where the irrigation system meets the water supply. It's a cluster of expensive parts drawn as a few small symbols.",
  body: `<p>Typical POC parts, in order from the water source. Take off each one the plans and details show:</p>
<ol class="steps">
<li><div><b>Water meter and service</b>Usually installed by the water agency or another contractor. Note who provides it.</div></li>
<li class="hl"><div><b>Backflow preventer</b>Size and type (RP, reduced pressure principle, or DC, double check), with its enclosure, concrete pad and any required test.</div></li>
<li><div><b>Isolation valve and strainer</b>Ball or gate valve, wye strainer (a Y-shaped screen that catches debris) if shown.</div></li>
<li><div><b>Master valve and flow sensor</b>Size, box, and cable or decoder to the controller.</div></li>
<li><div><b>Pressure regulator</b>If shown on the POC detail.</div></li>
<li><div><b>Fittings and short pipe runs</b>Brass, copper or Schedule 80 nipples and unions on the assembly.</div></li>
</ol>`,
  ex: `<p>Real example: on 11-428704 (sheet IP-7), the single recycled-water POC at Palomar Street gets a new 3" two-wire master valve, a 2" flow sensor, 3" and 4" gate valves, an air release valve and an antenna mast. The existing recycled water meters and cross connection test station stay in place.</p>`,
  watch: `<p>Read the POC detail for who does what. On many private jobs the meter is by others, the backflow is yours, and the electrician runs power to the controller. If the plans don't say, ask in an RFI (Module 12) and state your assumption in the proposal (Module 13).</p>`
},

{ h: "The point of connection, part by part: a real detail",
  lead: "One small symbol on the plan becomes a dozen parts on the detail. Walk the detail from the meter to the PVC and list every part.",
  body: `<p>Real example: detail ID-2 on 11-431064 is titled “Backflow preventer assembly in enclosure (BPAE) and remote control valve master (RCVM).” Walking it in the direction of flow:</p>
<ol class="steps">
<li><div><b>Supply line from the water meter</b>Note 3: copper pipe from the meter, through the backflow preventer assembly (BPA), to the connection to PVC (polyvinyl chloride pipe).</div></li>
<li><div><b>Two PCC thrust blocks</b>PCC means Portland cement concrete. One where the pipe turns up into the assembly, one where it turns back down.</div></li>
<li><div><b>Polyethylene tape</b>Note 4: all metal touching soil or concrete is wrapped with 2"-wide, 20-mil tape with ½" overlap.</div></li>
<li><div><b>Unions and ball valves</b>Shown as “typ” (typical, meaning the same at each place shown).</div></li>
<li class="hl"><div><b>The backflow preventer</b>2" on this job, bid item 46 (3 EA).</div></li>
<li><div><b>Wye strainer with plug</b>Note 1: same size as the backflow preventer.</div></li>
<li><div><b>Tee with threaded plug, then the master valve (RCVM)</b>Size per plan: 2" on this job.</div></li>
<li><div><b>6-inch-thick concrete slab</b>Extends at least 6" past the enclosure on all sides.</div></li>
<li><div><b>Enclosure</b>Two-piece, at least 30" wide, with lifting handles, hasp for a padlock and a vandal-resistant lock guard.</div></li>
<li><div><b>1" conduit for CNC</b>CNC means control and neutral conductors (the valve wires). It runs from the master valve to the controller.</div></li>
<li><div><b>PVC adaptor, slip × female thread</b>Where copper meets the PVC supply line.</div></li>
</ol>`,
  watch: `<p>Only the backflow preventer, master valve and flow sensor have their own bid items here. The copper, slab, enclosure, strainer, unions, tape and thrust blocks are inside those prices. If you don't list them, you won't price them.</p>`,
  src: "Caltrans 11-431064 plans, detail ID-2 and sheet IQ-3; Bid Item List items 40, 46, 47."
},

{ h: "Worked example · a POC parts list",
  lead: "Turn the detail into a parts list for one POC, then multiply by the number of POCs. Counts come from detail ID-2; sizes and lengths marked “example” are made up for practice.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part (from detail ID-2)</th><th>Unit</th><th class="num">Per POC</th><th class="num">× 3 POCs</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>2" backflow preventer</td><td>EA</td><td class="num">1</td><td class="num">3</td><td>Bid item 46</td></tr>
<tr><td>Enclosure, two-piece, 30" min width</td><td>EA</td><td class="num">1</td><td class="num">3</td><td>Inside item 46</td></tr>
<tr><td>2" ball valve</td><td>EA</td><td class="num">2</td><td class="num">6</td><td>One each side of the BPA</td></tr>
<tr><td>2" wye strainer with plug</td><td>EA</td><td class="num">1</td><td class="num">3</td><td>Same size as BPA</td></tr>
<tr><td>2" union</td><td>EA</td><td class="num">2</td><td class="num">6</td><td>As drawn</td></tr>
<tr><td>2" tee with threaded plug</td><td>EA</td><td class="num">1</td><td class="num">3</td><td></td></tr>
<tr><td>2" master valve (RCVM)</td><td>EA</td><td class="num">1</td><td class="num">3</td><td>Paid as a 2" RCV</td></tr>
<tr><td>2" flow sensor</td><td>EA</td><td class="num">1</td><td class="num">3</td><td>Bid item 47</td></tr>
<tr><td>Copper pipe, meter to PVC (example 14 LF)</td><td>LF</td><td class="num">14</td><td class="num">42</td><td>Measure on your job</td></tr>
<tr><td>PCC thrust blocks</td><td>EA</td><td class="num">2</td><td class="num">6</td><td>Per detail</td></tr>
<tr><td>Concrete slab, 6" thick</td><td>CY</td><td class="num">0.45</td><td class="num">1.36</td><td>Math below</td></tr>
<tr><td>Poly tape on metal</td><td>LF</td><td class="num">allow</td><td class="num">allow</td><td>Wrap length per detail</td></tr>
<tr><td>1" conduit for CNC to controller (example 25 LF)</td><td>LF</td><td class="num">25</td><td class="num">75</td><td>Measure on your job</td></tr>
<tr><td>PVC adaptor, slip × FPT (female pipe thread)</td><td>EA</td><td class="num">1</td><td class="num">3</td><td></td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Slab math (example enclosure 30" × 72"):</strong> add 6" each side, so the slab is 42" × 84" = 3.5 ft × 7.0 ft = 24.5 SF. At 6" thick (0.5 ft): 24.5 × 0.5 = 12.25 CF. 12.25 ÷ 27 = <strong>0.45 CY</strong> per POC. Three POCs: 0.45 × 3 = <strong>1.36 CY</strong>. Concrete trucks have minimum loads, so note “small pour” for pricing.</p>`,
  watch: `<p>Use the real enclosure size from the product you'll buy. Get its cut sheet (the maker's product data page) from the supplier with the quote.</p>`
},

{ h: "Meters, power and backflow testing: who does what",
  lead: "Some POC work is done or charged by someone else. Find out who, write it in the takeoff, and say it in your proposal.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Work</th><th>Usually done by</th><th>What to take off or note</th></tr></thead>
<tbody>
<tr><td>Water meter and service line</td><td>The water agency installs the meter; the owner pays fees</td><td>Who pays the meter fee? On Caltrans jobs it is a bid item: 11-431064 item 67 “Water meter charges” (LS).</td></tr>
<tr><td>Water used during the job</td><td>Often the contractor</td><td>11-431064 item 68 “Irrigation water service charges” (LS). On private jobs, ask who pays.</td></tr>
<tr><td>Power to the controller</td><td>An electrician (and the utility, SDG&amp;E, San Diego Gas &amp; Electric)</td><td>11-431064 item 66 “Electric service for irrigation” (LS). The low bidder listed an electrical subcontractor for 100% of it.</td></tr>
<tr><td>Backflow test after installation</td><td>A certified backflow tester</td><td>California's Cross-Connection Control Policy Handbook, in effect since July 1, 2024, requires backflow assemblies to be field tested after installation and at least once a year, by certified testers. Count one test per assembly. Check your water agency's form and tester rules.</td></tr>
<tr><td>Trenching on the street side of the meter</td><td>Varies</td><td>Read the plans and the agency's standards. If unclear, RFI.</td></tr>
</tbody></table></div>`,
  watch: `<p>On private jobs, the GC (general contractor) often assumes “irrigation starts at the meter.” If the meter, the power or the backflow test is not yours, say so in writing in your proposal (Module 13).</p>`,
  src: "Caltrans 11-431064 Bid Item List items 66–68 and Bid Summary subcontractor list; State Water Resources Control Board, Cross-Connection Control Policy Handbook (adopted Dec. 19, 2023, effective July 1, 2024): https://www.waterboards.ca.gov/drinking_water/certlic/drinkingwater/Publications.html"
},

{ h: "Measuring pipe: main, lateral, size and class",
  lead: "Pipe is taken off in linear feet, split by three things: mainline or lateral, pipe size, and pipe class.",
  body: `<div class="twocol">
<div><h3>Mainline</h3><ul>
<li>Always under pressure, from the POC to the valves</li>
<li>Usually heavier pipe and deeper trench</li>
<li>Often Class 315 or Schedule 40, gasketed on large sizes</li>
<li>Caltrans calls it “supply line, main supply side of control valve”</li>
</ul></div>
<div><h3>Laterals</h3><ul>
<li>Downstream of each valve, only pressurized when the zone runs</li>
<li>Usually lighter pipe and shallower trench</li>
<li>Often Class 200 or Schedule 40, depending on the spec</li>
<li>Caltrans calls it “supply line, lateral supply side”</li>
</ul></div>
</div>
<ol class="steps">
<li><div><b>Measure each size separately</b>Follow the line from fitting to fitting. Write each run's length next to it on the plan.</div></li>
<li><div><b>Use the sizing notes</b>Unlabeled pipe takes the default size from the notes or the sizing chart.</div></li>
<li class="hl"><div><b>Add the vertical pieces the plan can't show</b>Risers at valves and POC, depth changes at sleeves. A short allowance per valve is a common practice.</div></li>
<li><div><b>Total by size and class</b>One line each: 1" Class 200 lateral, 2" Schedule 40 main, and so on.</div></li>
</ol>`,
  deeper: `<p>Schedule 40 PVC (ASTM D1785) has a set wall thickness for each size, so its pressure rating goes down as the pipe gets bigger. Class pipe (ASTM D2241) is rated by pressure: Class 200 is SDR 21 and Class 315 is SDR 13.5, and the rating stays the same at every size. That's why specs often call Schedule 40 for small pipe and Class 315 for large mains. Read your job's spec section 32 80 00 for what it requires. (ASTM is the standards group whose numbers appear in specs; SDR, standard dimension ratio, is the pipe's outside diameter divided by its wall thickness.)</p>`,
  watch: `<p>Don't put two pipe classes on one line. On 11-428704, 2" pipe was Schedule 40 and 3" and 4" were Class 315. They are different bid items with different prices.</p>`
},

{ h: "Sizing unlabeled laterals with the pipe sizing chart",
  lead: "Many plans don't label every lateral. They give a sizing chart instead: the pipe size depends on how many heads are downstream of that piece of pipe.",
  body: `<p>Real chart, sheet ISS-1 of 11-431064, “Pipe sizing chart, pop-up sprinkler assembly” (Schedule 40, number of half heads at 1.0 GPM; one half head = two quarter heads):</p>
<div class="tablewrap"><table>
<thead><tr><th>Heads downstream</th><th class="num">1–11</th><th class="num">12–22</th><th class="num">23–30</th><th class="num">31–50</th><th class="num">51–75</th></tr></thead>
<tbody><tr><td>Pipe size</td><td class="num">1"</td><td class="num">1¼"</td><td class="num">1½"</td><td class="num">2"</td><td class="num">2½"</td></tr></tbody></table></div>
<p><strong>Worked example (made-up zone, real chart):</strong> 26 half heads in a straight line, 18 ft apart, fed from a valve at one end. The lead from the valve to the nearest head is 30 ft.</p>
<ol class="steps">
<li><div><b>Number the heads from the far end</b>Head 1 is farthest from the valve; head 26 is nearest.</div></li>
<li><div><b>Each piece of pipe carries the heads beyond it</b>The piece between head 5 and head 6 carries 5 heads.</div></li>
<li><div><b>1" for pieces carrying 1 to 11 heads</b>11 pieces × 18 ft = <strong>198 LF</strong>.</div></li>
<li><div><b>1¼" for pieces carrying 12 to 22 heads</b>11 pieces × 18 ft = <strong>198 LF</strong>.</div></li>
<li class="hl"><div><b>1½" for pieces carrying 23 to 26 heads</b>3 pieces × 18 ft = 54 LF, plus the 30 ft lead carrying all 26 = <strong>84 LF</strong>.</div></li>
<li><div><b>Check</b>198 + 198 + 84 = 480 LF of lateral. Flow: 26 × 1.0 GPM = 26 GPM, which fits the 1½" size at the valve.</div></li>
</ol>`,
  watch: `<p>Quarter heads count as half a half head. A zone of 20 quarter heads at 0.5 GPM is the same as 10 half heads. If you count quarters as halves, you'll size the pipe too big and overprice the zone.</p>`,
  src: "Caltrans 11-431064 plans, sheet ISS-1, pipe sizing charts and note 3 (unlabeled lateral pipe 1 inch or per sizing charts)."
},

{ h: "Sleeves, conduits and boring",
  lead: "Every place pipe or wire crosses under paving needs a sleeve or a bore. These are short runs with big costs.",
  body: `<ul>
<li><strong>Sleeves</strong> are larger pipes laid under paving before it's poured, so pipe and wire can be pulled through later. Take them off by size and LF. A common practice is one sleeve for pipe and a separate one for wire.</li>
<li><strong>Length:</strong> paving width plus the extension past each edge that the detail calls for.</li>
<li><strong>Who installs them:</strong> on new construction, sleeves often go in before the GC paves. Note the timing, because it may mean an extra trip.</li>
<li><strong>Boring or jacking</strong> is used where paving already exists and can't be cut. Take it off as LF of bore by size, and get a sub quote if you don't own a boring machine.</li>
</ul>`,
  ex: `<p>Real example: sheet IQ-2 of 11-428704 lists seven conduit crossings under ramps:</p>
<div class="tablewrap"><table>
<thead><tr><th>Conduit</th><th class="num">IQ-2 total</th><th class="num">Bid item</th></tr></thead>
<tbody>
<tr><td>8" and 10" PVC pipe conduit (170 + 112)</td><td class="num">282 LF</td><td class="num">290 LF (item 66)</td></tr>
<tr><td>10" CHDPE (corrugated high-density polyethylene) pipe conduit</td><td class="num">366 LF</td><td class="num">370 LF (item 67)</td></tr>
<tr><td>4" Class 315 main inside the conduits</td><td class="num">648 LF</td><td class="num">included in item 63</td></tr>
</tbody></table></div>
<p>The 2" electrical conduits and pavement markers on IQ-2 are marked “(N)”: not a separate pay item. The winning bidder listed a boring subcontractor for 54% of the PVC pipe conduit item (item 66), “boring only.”</p>`,
  src: "11-428704 plans IQ-2; Bid Items 63, 66, 67; Bid Summary subcontractor list."
},

{ h: "Worked example · sleeves and bores",
  lead: "Sleeve math is simple, but there are many small crossings. List each one in a table so none gets lost. The first part is a made-up job; the second is real.",
  body: `<p><strong>Made-up site:</strong> the detail says sleeves extend 12" past each paving edge. Mainline crossings get a pipe sleeve and a wire sleeve; lateral crossings get one sleeve.</p>
<div class="tablewrap"><table>
<thead><tr><th>Crossing</th><th class="num">Paving width</th><th class="num">Sleeve length</th><th class="num">How many</th><th>Takeoff</th></tr></thead>
<tbody>
<tr><td>Drive aisles, mainline</td><td class="num">26 ft</td><td class="num">26 + 1 + 1 = 28 ft</td><td class="num">3</td><td>4" pipe sleeve 84 LF; 2" wire sleeve 84 LF</td></tr>
<tr><td>Walks, laterals</td><td class="num">6 ft</td><td class="num">6 + 1 + 1 = 8 ft</td><td class="num">4</td><td>3" sleeve 32 LF</td></tr>
<tr><td>Existing driveway, mainline (bore)</td><td class="num">30 ft</td><td class="num">30 + 1 + 1 = 32 ft</td><td class="num">1</td><td>Bore 32 LF; 2 bore pits EA; sub quote</td></tr>
</tbody></table></div>
<p><strong>Real example (11-431064, sheet IQ-3 “Irrigation conduit”):</strong> two crossings on line “CL34,” at stations 31+00 and 34+00 (station = distance along the survey line; 31+00 means 3,100 ft).</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Each crossing</th><th class="num">Total</th><th>Where it is paid</th></tr></thead>
<tbody>
<tr><td>8" PVC pipe conduit</td><td class="num">130 LF</td><td class="num">260 LF</td><td>Item 61, 260 LF</td></tr>
<tr><td>3" Class 315 supply line inside it</td><td class="num">134 LF</td><td class="num">268 LF</td><td>Added to item 60</td></tr>
<tr><td>2" electrical conduit for CNC</td><td class="num">134 LF</td><td class="num">268 LF</td><td>(N), not a separate pay item</td></tr>
<tr><td>6" PVC pipe conduit (sleeve), IP-1 and IP-2</td><td class="num">40 LF</td><td class="num">80 LF</td><td>Item 62, 80 LF</td></tr>
</tbody></table></div>`,
  watch: `<p>Notice that the pipe inside each conduit (134 LF) is longer than the conduit (130 LF), so it can connect past both ends. If you take off only the conduit length, you'll come up short on the pipe.</p>`,
  src: "Caltrans 11-431064 plans IQ-3 (Irrigation Conduit table and Main Supply table); Bid Items 60–62."
},

{ h: "Wire: conventional and two-wire",
  lead: "Wire is measured in LF, but the way you measure depends on the control system.",
  body: `<div class="twocol">
<div><h3>Conventional (multi-wire)</h3><ul>
<li>One control wire from the controller to each valve, plus a common wire</li>
<li>Control wire LF = add the distance from the controller to each valve, along the trench</li>
<li>Common wire LF = length of the route to the farthest valve on each branch</li>
<li>Spare wires if the spec asks for them (often to the farthest valve)</li>
<li>Add slack at every valve and splice box</li>
</ul></div>
<div><h3>Two-wire (decoder)</h3><ul>
<li>One two-wire cable runs past every valve</li>
<li>Cable LF = the length of the path, usually along the mainline</li>
<li>Count a decoder (a small electronic module that turns a valve on when the controller sends its address) for each valve or group of valves</li>
<li>Count surge arrestors and ground rods the detail shows</li>
<li>Count splice kits at every connection</li>
</ul></div>
</div>`,
  ex: `<p>Real example: on 11-428704, wire was one lump sum item (“Control and neutral conductors”). The two-wire POC decoder and ground rod at the master valve were marked “(N)”, not a separate bid item. The specs listed a supplier price for the decoder and 1,000 ft of two-wire cable. (Module 15 shows those prices.)</p>`,
  watch: `<p>Wire usually runs in the mainline trench, so it adds little trench. Where a wire run leaves the mainline to reach a valve, that piece of trench is extra. Don't forget wire inside sleeves under paving.</p>`
},

{ h: "Worked example · conventional wire",
  lead: "Eight valves on one mainline branch. Every number here is a made-up example; use your spec's rules for spares and slack.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Valve</th><th class="num">V1</th><th class="num">V2</th><th class="num">V3</th><th class="num">V4</th><th class="num">V5</th><th class="num">V6</th><th class="num">V7</th><th class="num">V8</th></tr></thead>
<tbody><tr><td>Distance from controller along the trench (ft)</td><td class="num">60</td><td class="num">110</td><td class="num">165</td><td class="num">210</td><td class="num">250</td><td class="num">300</td><td class="num">340</td><td class="num">400</td></tr></tbody></table></div>
<ol class="steps">
<li><div><b>Control wires</b>One wire per valve: 60 + 110 + 165 + 210 + 250 + 300 + 340 + 400 = <strong>1,835 LF</strong>.</div></li>
<li><div><b>Common wire</b>One wire to the farthest valve on the branch: <strong>400 LF</strong>.</div></li>
<li><div><b>Spares</b>Example spec: 2 spare wires to the farthest valve: 2 × 400 = <strong>800 LF</strong>.</div></li>
<li class="hl"><div><b>Slack (example rule: 3 ft per wire at each valve it serves, 5 ft per wire at the controller)</b>Control: 8 × 3 + 8 × 5 = 64 LF. Common: 8 valves × 3 + 5 = 29 LF. Spares: 2 × (3 + 5) = 16 LF.</div></li>
<li><div><b>Totals</b>Control 1,835 + 64 = <strong>1,899 LF</strong>. Common 400 + 29 = <strong>429 LF</strong>. Spare 800 + 16 = <strong>816 LF</strong>. All wire: 3,144 LF.</div></li>
<li><div><b>Splices</b>Example: 2 waterproof splice kits per valve (control and common) = 16, plus 2 for the spare ends = <strong>18</strong>.</div></li>
<li><div><b>Order</b>If the supplier sells 500-ft rolls (example), control wire 1,899 LF = 4 rolls (2,000 ft). Keep the exact LF in the takeoff; the rounding goes in the order.</div></li>
</ol>`,
  watch: `<p>Specs usually set wire colors (common a different color from control, spares another). Each color is a separate roll. Count rolls by color, not just total feet.</p>`
},

{ h: "Worked example · two-wire",
  lead: "The same eight valves, now on a two-wire system. Compare the quantities: much less wire, but new parts. All numbers are made-up examples.",
  body: `<ol class="steps">
<li><div><b>Two-wire cable</b>One cable along the path to the farthest valve: 400 LF, plus 5 ft at the controller and 3 ft at each of 8 decoder stubs (24 ft) = <strong>429 LF</strong>.</div></li>
<li><div><b>Decoders</b>One single-station decoder per valve = <strong>8</strong>. If the plan shows two-station decoders for pairs of nearby valves, it would be 4.</div></li>
<li><div><b>Master valve and flow sensor</b>They usually need their own decoder or sensor decoder. Read the POC detail: on 11-428704 the POC decoder was a non-pay (N) item.</div></li>
<li class="hl"><div><b>Grounding</b>Count surge arrestors, ground rods and ground plates exactly as the detail or the maker's installation guide says (for example, one at the end of each path and at a set spacing). Each is EA.</div></li>
<li><div><b>Splices</b>Example: 2 kits where each decoder joins the path and 2 where it joins the valve solenoid = 4 per decoder × 8 = <strong>32</strong>.</div></li>
</ol>
<div class="tablewrap"><table>
<thead><tr><th>Same 8 valves</th><th class="num">Conventional</th><th class="num">Two-wire</th></tr></thead>
<tbody>
<tr><td>Wire or cable</td><td class="num">3,144 LF</td><td class="num">429 LF</td></tr>
<tr><td>Decoders</td><td class="num">0</td><td class="num">8</td></tr>
<tr><td>Splice kits</td><td class="num">18</td><td class="num">32</td></tr>
<tr><td>Grounding parts</td><td class="num">At controller</td><td class="num">Per detail</td></tr>
</tbody></table></div>`,
  watch: `<p>Two-wire cable is a specific product. Don't take it off as “wire” and price it as plain #14 single wire. Get the cable type from the spec and the controller maker.</p>`
},

{ h: "Trenching by depth",
  lead: "You price trench, not just pipe. Take off trench in LF by depth, because a deeper trench costs more per foot.",
  body: `<ol class="steps">
<li><div><b>Find the depth for each line</b>The installation detail or spec gives the cover over mainline, laterals and wire. Mainline is normally deeper.</div></li>
<li class="hl"><div><b>One trench line per depth</b>Example: mainline trench (deeper), lateral trench (shallower), drip header trench.</div></li>
<li><div><b>Don't double count shared trench</b>Where a lateral runs in the same trench as the main, count the trench once, at the deeper depth.</div></li>
<li><div><b>Take out sleeved and bored lengths</b>Pipe in a sleeve under paving isn't trenched by your crew in the usual way.</div></li>
<li><div><b>Note the conditions</b>Rock, roots, existing utilities, slopes, and hand-dig zones near trees all slow production. Note them now; you'll price them in Module 9.</div></li>
</ol>`,
  ex: `<p>Real example: the 11-428704 irrigation plan IP-7 has a note to “locate irrigation supply line to minimize trenching within the drip line of existing trees.” That's a hand-dig or careful-routing condition. Mark those stretches on your takeoff.</p>`,
  watch: `<p>Freeway, school and city jobs often have existing utilities everywhere. On 11-428704, the U sheets showed gas, sewer, telecom and Otay Water District lines near the new main. Trench near utilities means potholing (digging small test holes, often by hand or vacuum, to find the exact depth of a utility) and hand digging.</p>`
},

{ h: "Trench LF is not pipe LF",
  lead: "Several pipes and wires can share one trench. Count pipe by the foot of each pipe, and trench by the foot of ditch. They are different numbers.",
  body: `<p><strong>Made-up example:</strong> a 300-ft run of 2" mainline with the valve wire beside it. For the last 120 ft, a 1¼" lateral shares the same trench. Then the lateral turns away for 180 ft in its own trench.</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">LF</th><th>How</th></tr></thead>
<tbody>
<tr><td>2" mainline pipe</td><td class="num">300</td><td>Full run</td></tr>
<tr><td>1¼" lateral pipe</td><td class="num">300</td><td>120 shared + 180 alone</td></tr>
<tr><td>Wire bundle (counted in the wire takeoff)</td><td class="num">300</td><td>In the main trench</td></tr>
<tr><td><strong>Trench at mainline depth</strong></td><td class="num"><strong>300</strong></td><td>Includes the 120 shared</td></tr>
<tr><td><strong>Trench at lateral depth</strong></td><td class="num"><strong>180</strong></td><td>Only where the lateral is alone</td></tr>
<tr><td>Total trench</td><td class="num">480</td><td>Not 600 (pipe) and not 900 (pipe + wire)</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Mark shared runs on the plan</b>Where two lines are drawn side by side, write “shared” and count the trench once.</div></li>
<li><div><b>Check the detail for spacing</b>Some details require a set space between pipes in a shared trench, which can mean a wider trench. Note it for pricing.</div></li>
<li class="hl"><div><b>Call before you dig</b>California law (Government Code §4216.2) requires calling 811 (DigAlert in Southern California) at least two working days before digging, not counting the day you call, and marking the dig area in white. Count the utility crossings on the plans as potholes (EA) in your takeoff.</div></li>
</ol>`,
  watch: `<p>If you price trench per foot of pipe, a job with lots of shared trench looks much more expensive than it is, and you lose the bid. If you forget the lateral-only trench, you lose money. Keep both numbers.</p>`,
  src: "SDG&E, “Dial 811 before you dig”: https://www.sdge.com/more-information/safety/gas-safety/dial-811-you-dig ; California Government Code §4216.2."
},

{ h: "Fittings and waste: pick a method and stick with it",
  lead: "Plans don't show most fittings, and pipe never installs at exactly the measured length. Estimators handle both with a method they trust, built from their own past jobs.",
  body: `<div class="twocol">
<div><h3>Fittings method A: assemblies</h3><ul>
<li>Price each device as an assembly: the head plus its swing joint, tee and nipples</li>
<li>Each valve assembly: valve, fittings, box, gravel, wire connectors</li>
<li>Pipe fittings at turns and branches: count tees and ells where the plan shows them</li>
<li>More work to build, but follows the plans closely</li>
</ul></div>
<div><h3>Fittings method B: percent allowance</h3><ul>
<li>Add a percent of the pipe material cost for fittings and glue</li>
<li>Different percents for laterals (many fittings) and mainline (fewer)</li>
<li>Fast, but only as good as the data behind it</li>
<li>Check it against supplier invoices on finished jobs</li>
</ul></div>
</div>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Example waste allowance (practice numbers, set yours from your own jobs)</th></tr></thead>
<tbody>
<tr><td>PVC pipe</td><td>About 5%: cut-offs, bad ends, small field changes</td></tr>
<tr><td>Wire</td><td>About 10%: slack at valves and splices</td></tr>
<tr><td>Drip tubing</td><td>About 10%: bed edges and loops</td></tr>
<tr><td>Heads, valves, controllers</td><td>None: count exactly</td></tr>
</tbody></table></div>`,
  watch: `<p>Keep waste and fittings out of the measured quantity. Show the net quantity in one column and the allowance in another. On a unit-price public bid you're paid for the bid or measured quantity of pipe, never for your cut-offs, so fittings and waste have to be built into the unit price.</p>`,
  deeper: `<p>The percentages above are example numbers for practice. Your real numbers come from comparing what you bought on finished jobs (supplier invoices) to what the plans showed. Module 9 covers checking estimates against finished jobs.</p>`
},

{ h: "Fittings: the two methods side by side",
  lead: "Take off one spray zone both ways and compare. Every count and price on this slide is a made-up example for practice.",
  body: `<p><strong>The zone:</strong> 18 spray heads on 320 LF of lateral (1" and ¾"), one 1" valve, two ends, three size changes, two 90° turns.</p>
<div class="twocol">
<div><h3>Method A: count them</h3><ul>
<li>Tees at heads in the middle of a run: 16</li>
<li>Ells at the two dead ends: 2</li>
<li>Ells at 90° turns: 2</li>
<li>Reducing bushings at size changes: 3</li>
<li>Swing joints (one per head): 18</li>
<li>Male adapters at the valve: 2</li>
<li>Glue and primer: 1 set per zone</li>
<li>Example material cost of all these: <strong>$96</strong></li>
</ul></div>
<div><h3>Method B: percent of pipe</h3><ul>
<li>Lateral pipe: 320 LF × $0.60 per LF (example) = $192</li>
<li>Your allowance: 25% of pipe cost</li>
<li>$192 × 0.25 = <strong>$48</strong></li>
<li>Gap vs. counted: $96 − $48 = $48 per zone</li>
<li>On 16 zones: 16 × $48 = <strong>$768 short</strong></li>
</ul></div>
</div>`,
  ex: `<p>What this teaches: on small-pipe spray zones, fittings can cost about as much as half the pipe (here $96 ÷ $192 = 50%). A percent that works on a big mainline is too low for laterals. Count one or two typical zones on every job and use that to check your percent.</p>`,
  watch: `<p>Don't mix methods on one job. If the head assembly price already has its swing joint, don't count swing joints again in the fittings line.</p>`
},

{ h: "Fitting rules hidden in the notes",
  lead: "General notes and spec changes often add fittings that are never drawn. Read them and turn each one into a count.",
  body: `<p>Real examples from 11-431064 (SR-905):</p>
<div class="tablewrap"><table>
<thead><tr><th>Where</th><th>What it says (short)</th><th>What you take off</th></tr></thead>
<tbody>
<tr><td>ISS-1, note 2</td><td>Every 90° change in direction on new main supply line gets two 45° elbows</td><td>Count the 90° turns on the main. Elbows = turns × 2, by pipe size.</td></tr>
<tr><td>ISS-1, note 3</td><td>Unlabeled lateral pipe is 1", or per the sizing charts</td><td>Check every unlabeled run against the chart</td></tr>
<tr><td>ISS-1, note 4</td><td>Electrical conduit for CNC from the master valve and flow sensor to the controller is 1" conduit</td><td>LF of 1" conduit at each POC</td></tr>
<tr><td>IQ-3 and detail ID-7</td><td>3" ductile iron pipe (DIP, a strong iron pipe used where PVC isn't allowed) supply line: 65 LF on each of 8 plan sheets</td><td>520 LF, item 45, plus the flanged adapters, DIP nipples and expansion assembly the detail shows</td></tr>
<tr><td>Special Provisions</td><td>Expansion assembly 45° elbows must be ductile iron fittings</td><td>Separate fitting line for DIP elbows</td></tr>
<tr><td>Special Provisions</td><td>Pea gravel in tree well drainpipes, ½" maximum, rounded and washed</td><td>Gravel CF per tree well × 1,892 tree wells</td></tr>
</tbody></table></div>`,
  watch: `<p>“As shown” in a note means the detail controls. Open the detail and count what it draws: flanges, nipples, adapters, couplings. One expansion assembly can hold more fittings than a whole spray zone.</p>`,
  src: "Caltrans 11-431064 plans ISS-1 (notes 2–4), IQ-3, ID-7; Special Provisions additions to sections 20-2.08B(6) and 20-2.09B(4); Bid Item 45."
},

{ h: "Drip zones",
  lead: "Drip areas are usually drawn as shaded zones. You measure the area, then turn it into feet of tubing and number of emitters.",
  body: `<ol class="steps">
<li><div><b>Measure the drip area in SF</b>For each drip zone, from the plan.</div></li>
<li class="hl"><div><b>Tubing LF = area (SF) ÷ row spacing (ft)</b>Rows 18" apart means 1.5 ft. Rows 12" apart means 1.0 ft.</div></li>
<li><div><b>Emitters = tubing LF ÷ emitter spacing (ft)</b>For inline tubing, emitters come built in; you count them to check flow.</div></li>
<li><div><b>Add headers and footers</b>The PVC or blank tubing that feeds and connects the rows, measured as LF.</div></li>
<li><div><b>Count the parts the detail shows</b>Flush valves, air relief valves, operation indicators, staples, connectors.</div></li>
<li><div><b>For point-source drip</b>Count emitters per plant by plant size, using the detail (example: 2 emitters per 1-gallon, 4 per 15-gallon).</div></li>
</ol>`,
  ex: `<p><strong>Worked math (made-up example):</strong> a 1,050 SF drip zone with inline tubing, 0.6 GPH (gallons per hour) emitters at 12" spacing, rows 18" apart.</p>
<ul>
<li>Tubing: 1,050 SF ÷ 1.5 ft = <strong>700 LF</strong></li>
<li>Emitters: 700 LF ÷ 1.0 ft = <strong>700 emitters</strong></li>
<li>Flow check: 700 × 0.6 GPH = 420 GPH. 420 ÷ 60 = <strong>7 GPM</strong> for this zone.</li>
</ul>`,
  watch: `<p>Check that the flow you calculate fits the valve and drip kit size on the plan. If your math says 15 GPM and the drawing shows a low-flow drip kit, something is off: either your area or the design. Ask before you bid.</p>`
},

{ h: "Second takeoff · drip planters, part 1: the site and the tubing",
  lead: "A drip-only parking lot at a retail center. Everything here is a made-up example for practice. Module 7 does the planting for the same site.",
  body: `<p><strong>Sample job (made up):</strong> a retail center parking lot. Six planter islands, each 9 ft × 36 ft inside the curb, and two perimeter strips, each 6 ft × 220 ft. Inline drip tubing, 0.6 GPH emitters at 12", rows 18" apart. Four drip zones.</p>
<div class="tablewrap"><table>
<thead><tr><th>Area</th><th>Size</th><th class="num">SF each</th><th class="num">How many</th><th class="num">SF total</th></tr></thead>
<tbody>
<tr><td>Islands A–F</td><td>9 × 36</td><td class="num">324</td><td class="num">6</td><td class="num">1,944</td></tr>
<tr><td>Perimeter strips N and S</td><td>6 × 220</td><td class="num">1,320</td><td class="num">2</td><td class="num">2,640</td></tr>
<tr><td><strong>Total drip area</strong></td><td></td><td></td><td></td><td class="num"><strong>4,584</strong></td></tr>
</tbody></table></div>
<p><strong>Two ways to get tubing, and they should agree:</strong></p>
<div class="twocol">
<div><h3>Area method</h3><ul>
<li>Island: 324 ÷ 1.5 = 216 LF</li>
<li>Strip: 1,320 ÷ 1.5 = 880 LF</li>
<li>Total: 6 × 216 + 2 × 880 = <strong>3,056 LF</strong></li>
</ul></div>
<div><h3>Row method (detail: first row 3" from curb)</h3><ul>
<li>Island rows: (9 − 0.5) ÷ 1.5 = 5.7, so 6 rows × (36 − 0.5) = 213 LF</li>
<li>Strip rows: (6 − 0.5) ÷ 1.5 = 3.7, so 4 rows × (220 − 0.5) = 878 LF</li>
<li>Within 1–2% of the area method. Good.</li>
</ul></div>
</div>`,
  watch: `<p>Long narrow strips are where the two methods drift apart. A 220-ft strip is also longer than many tubing makers allow on one run. Check the detail: here the designer feeds each strip from the middle.</p>`
},

{ h: "Second takeoff · drip planters, part 2: zones, flow and parts",
  lead: "Split the tubing into zones, check each zone's flow, then count the parts the drip detail shows. Same made-up job.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Zone</th><th>Areas</th><th class="num">Tubing LF</th><th class="num">Emitters</th><th class="num">Flow (LF × 0.6 ÷ 60)</th></tr></thead>
<tbody>
<tr><td>1</td><td>Islands A, B, C</td><td class="num">648</td><td class="num">648</td><td class="num">6.5 GPM</td></tr>
<tr><td>2</td><td>Islands D, E, F</td><td class="num">648</td><td class="num">648</td><td class="num">6.5 GPM</td></tr>
<tr><td>3</td><td>North strip</td><td class="num">880</td><td class="num">880</td><td class="num">8.8 GPM</td></tr>
<tr><td>4</td><td>South strip</td><td class="num">880</td><td class="num">880</td><td class="num">8.8 GPM</td></tr>
<tr><td><strong>Total</strong></td><td></td><td class="num"><strong>3,056</strong></td><td class="num"><strong>3,056</strong></td><td class="num"><strong>30.6 GPM</strong></td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Drip control kits</b>4 (one per zone), 1" size. Check each zone's GPM against the kit's flow range on its cut sheet.</div></li>
<li><div><b>Headers and footers</b>Islands: a supply header and a flush header across each 9-ft end = 18 LF × 6 = 108 LF. Strips: supply header in the middle plus a flush header at each end = 3 × 6 = 18 LF × 2 = 36 LF. Total <strong>144 LF</strong> of 1" PVC.</div></li>
<li class="hl"><div><b>Supply between islands</b>Islands sit in a row with 26-ft drive aisles between them. Each crossing is 26 ft of aisle plus 4 ft into the bed on each side = 34 ft. Each zone crosses 2 aisles: 2 × 34 = 68 LF per zone × 2 zones = <strong>136 LF</strong> of 1" lateral. Sleeves: 2 crossings × 28 LF × 2 zones = <strong>112 LF</strong>.</div></li>
<li><div><b>Flush valves</b>One per flush header: islands 6, strips 2 each = <strong>10</strong>.</div></li>
<li><div><b>Air/vacuum relief valves</b>One per zone at the high point = <strong>4</strong>. Operation indicators: <strong>4</strong>.</div></li>
<li><div><b>Staples</b>Example spacing one per 4 ft: 3,056 ÷ 4 = 764, plus 2 per row end. Use the maker's spacing on your job.</div></li>
<li><div><b>Boxes</b>4 jumbo boxes (drip kits), 14 small round boxes (10 flush + 4 air relief).</div></li>
</ol>`,
  ex: `<p>Flow check math for zone 3: 880 emitters × 0.6 GPH = 528 GPH. 528 ÷ 60 = 8.8 GPM. The whole lot: 3,056 × 0.6 = 1,833.6 GPH ÷ 60 = 30.6 GPM, but only one zone runs at a time, so the POC sees about 8.8 GPM at most.</p>`
},

{ h: "Second takeoff · drip planters, part 3: the quantity table",
  lead: "The finished table for the drip lot. Net quantities, the waste column kept separate, and a source for every line. Made-up example.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Unit</th><th class="num">Net qty</th><th class="num">Waste</th><th class="num">Order qty</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Inline drip tubing, 0.6 GPH at 12"</td><td>LF</td><td class="num">3,056</td><td class="num">10%</td><td class="num">3,362</td><td>Area ÷ 1.5</td></tr>
<tr><td>1" drip control zone kit</td><td>EA</td><td class="num">4</td><td class="num">0</td><td class="num">4</td><td>Plan</td></tr>
<tr><td>1" Class 200 headers and footers</td><td>LF</td><td class="num">144</td><td class="num">5%</td><td class="num">152</td><td>Detail</td></tr>
<tr><td>1" Class 200 supply between islands</td><td>LF</td><td class="num">136</td><td class="num">5%</td><td class="num">143</td><td>Plan</td></tr>
<tr><td>1½" mainline from POC to 4 kits (example)</td><td>LF</td><td class="num">180</td><td class="num">5%</td><td class="num">189</td><td>Plan</td></tr>
<tr><td>2" sleeves under drive aisles</td><td>LF</td><td class="num">112</td><td class="num">0</td><td class="num">112</td><td>Plan + detail</td></tr>
<tr><td>Flush valve / air relief / indicator</td><td>EA</td><td class="num">10 / 4 / 4</td><td class="num">0</td><td class="num">10 / 4 / 4</td><td>Detail</td></tr>
<tr><td>Tubing staples</td><td>EA</td><td class="num">764</td><td class="num">10%</td><td class="num">841</td><td>Maker's spacing</td></tr>
<tr><td>Jumbo box / small round box</td><td>EA</td><td class="num">4 / 14</td><td class="num">0</td><td class="num">4 / 14</td><td>From devices</td></tr>
<tr><td>Control wire, 4 valves (example)</td><td>LF</td><td class="num">from wire sheet</td><td class="num">10%</td><td></td><td>Wire method slide</td></tr>
<tr><td>Flush and test each zone</td><td>LS</td><td class="num">1</td><td></td><td></td><td>Spec</td></tr>
</tbody></table></div>`,
  ex: `<p>Order quantity math: 3,056 × 1.10 = 3,361.6, rounded up to 3,362. 144 × 1.05 = 151.2, rounded up to 152. 764 × 1.10 = 840.4, rounded up to 841.</p>`,
  watch: `<p>Drip kits, flush valves and staples are cheap one by one. Forgotten together on 40 islands, they add up. That's why every part in the detail gets a line.</p>`
},

{ h: "Thrust blocks, testing and work nobody pays for separately",
  lead: "Some work has no symbol and no bid item, but it still takes labor and material. List it in your takeoff so it gets priced.",
  body: `<ul>
<li><strong>Thrust blocks:</strong> concrete at tees, bends, reducers and dead ends on gasketed mainline. Count them from the fittings on the mainline and the detail. Glued pipe in small sizes often doesn't need them; read the spec.</li>
<li><strong>Pressure testing:</strong> the spec sets the test pressure and time. Count tests by mainline section if the main will be built in stages.</li>
<li><strong>Coverage test and flushing:</strong> one line, LS.</li>
<li><strong>Warning tape, tracer wire, ID tags:</strong> LF along the mainline.</li>
<li><strong>Programming, as-builts, controller charts:</strong> LS.</li>
<li><strong>Recycled water labels and signs:</strong> per the plans and local rules.</li>
</ul>`,
  ex: `<p>Real example: on 11-428704, thrust blocks, warning tape, the two-wire decoder, ground rods and pavement markers were all marked “(N)”: no separate payment. The recycled water mains were pressure tested at 150 psi. You put the cost of these into the paid items they belong to, usually the 4" main.</p>`,
  watch: `<p>“Not separately paid” is about how you get paid. Take off the quantity anyway. If you skip the count, you'll skip the cost.</p>`,
  src: "11-428704 plans ISS-1, IQ-1, IQ-2; Special Provisions 20-2 (pressure testing modified to 150 psi)."
},

{ h: "Testing, flushing and start-up are labor items",
  lead: "Testing takes crew hours, water, gauges and return trips. Count how many times each test happens, then pricing can put hours on it. Hours below are made-up examples.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Count it as</th><th>How to count</th><th>Example labor (practice numbers)</th></tr></thead>
<tbody>
<tr><td>Mainline pressure test</td><td>EA per test section</td><td>Main built in 3 phases = 3 tests; add retests if your history shows them</td><td>2 workers × 3 h per test</td></tr>
<tr><td>Flush laterals before heads go on</td><td>EA per zone</td><td>Number of valves</td><td>0.25 h per zone</td></tr>
<tr><td>Flush drip zones</td><td>EA per zone</td><td>Number of drip kits</td><td>0.5 h per zone</td></tr>
<tr><td>Coverage test (run each zone with the inspector)</td><td>EA per zone</td><td>Number of valves; note if the inspector must attend</td><td>0.2 h per zone</td></tr>
<tr><td>Backflow certification test</td><td>EA per assembly</td><td>Number of backflow preventers</td><td>Sub quote from a certified tester</td></tr>
<tr><td>Controller programming and setup</td><td>EA per controller</td><td>Number of controllers; check for maker setup required by spec</td><td>2 h per controller</td></tr>
<tr><td>As-built drawings and controller charts</td><td>LS</td><td>One set, plus a chart per controller</td><td>4 h + 1 h per controller</td></tr>
<tr><td>Owner training</td><td>EA</td><td>Sessions in the spec</td><td>2 h per session</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Worked (made up):</strong> 16 valves, 1 controller, 1 backflow, main tested in 2 sections. Pressure tests: 2 × 2 workers × 3 h = 12 h. Lateral flush: 16 × 0.25 = 4 h. Coverage: 16 × 0.2 = 3.2 h. Programming: 2 h. As-builts: 4 + 1 = 5 h. Total <strong>26.2 crew hours</strong>, plus one backflow test by a sub.</p>`,
  watch: `<p>On Caltrans jobs, check the Special Provisions for changed test pressures and durations. 11-428704 raised the mainline test to 150 psi. Higher pressure can mean more failed joints and retests on old systems.</p>`
},

{ h: "Organizing the takeoff spreadsheet",
  lead: "Organize the same quantities two ways: by system (controller or POC) so you can check them, and by bid item so you can price them.",
  body: `<div class="twocol">
<div><h3>Tab 1: by system</h3><ul>
<li>Rows for each controller, then each valve under it</li>
<li>Columns for heads by type, pipe by size, drip SF</li>
<li>Lets you check: does each zone's flow fit its valve?</li>
<li>Matches the way the plans and Caltrans lateral tables are laid out</li>
</ul></div>
<div><h3>Tab 2: by bid item</h3><ul>
<li>One row per bid item or per line in your price list</li>
<li>Columns: item, description, unit, net quantity, waste %, order quantity, source sheets, notes</li>
<li>Totals pulled from Tab 1 with formulas</li>
<li>This is the tab that goes to pricing</li>
</ul></div>
</div>
<ol class="steps">
<li><div><b>Keep a source column</b>Sheet number for every quantity, so anyone can find it.</div></li>
<li><div><b>Keep a notes column</b>“(N) not paid,” “by others,” “verify with RFI.”</div></li>
<li class="hl"><div><b>Freeze the takeoff before pricing</b>Save a dated copy. Changes after that go in an addendum or revision column.</div></li>
</ol>`,
  ex: `<p>Caltrans does exactly this on 11-428704. Sheet IQ-1 has a lateral table organized by controller and valve number (97A-1, 97A-2, …) and a main supply table organized by plan sheet (IP-1 to IP-7). The totals at the bottom feed the bid items.</p>`
},

{ h: "A spreadsheet template with formulas",
  lead: "Build the template once and reuse it. Formulas do the totals and flag problems, so you spend your time counting, not adding.",
  body: `<p><strong>Tab 2 “By item” layout (row 6 shown as an example):</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>Col</th><th>Header</th><th>Example</th><th>Formula or rule</th></tr></thead>
<tbody>
<tr><td>A</td><td>Item no.</td><td>55</td><td>Bid item number, or your own code</td></tr>
<tr><td>B</td><td>Description</td><td>1" Sch 40 lateral</td><td>Size, class, type</td></tr>
<tr><td>C</td><td>Unit</td><td>LF</td><td>EA, LF, SF, CY, LS</td></tr>
<tr><td>D</td><td>Net qty</td><td>9,636</td><td>=SUMIFS('By system'!F:F,'By system'!B:B,B6)</td></tr>
<tr><td>E</td><td>Waste %</td><td>5%</td><td>Typed, from your own job history</td></tr>
<tr><td>F</td><td>Order qty</td><td>10,118</td><td>=ROUNDUP(D6*(1+E6),0)</td></tr>
<tr><td>G</td><td>Owner qty</td><td>40,785</td><td>Typed from the bid form (public jobs)</td></tr>
<tr><td>H</td><td>Difference %</td><td>…</td><td>=IF(G6=0,"",(D6-G6)/G6)</td></tr>
<tr><td>I</td><td>Flag</td><td>CHECK</td><td>=IF(AND(G6&lt;&gt;0,ABS(H6)&gt;0.05),"CHECK","")</td></tr>
<tr><td>J</td><td>Source sheets</td><td>IQ-1, IP-1 to IP-4</td><td>Typed</td></tr>
<tr><td>K</td><td>Paid how</td><td>Measured / (F) / (N) / LS</td><td>Typed from the bid form</td></tr>
<tr><td>L</td><td>Notes</td><td>“Unlabeled = 1 inch”</td><td>Typed</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Check totals two ways</b>At the bottom of Tab 1, total each column. In Tab 2, total the same items. Add a cell: =IF(Tab1total=Tab2total,"OK","MISMATCH").</div></li>
<li><div><b>Lock the formulas</b>Protect the formula columns so a typed number can't replace a formula by accident.</div></li>
<li class="hl"><div><b>Never round in the net column</b>Rounding happens only in the order column.</div></li>
</ol>`,
  watch: `<p>The most common spreadsheet error is a SUM range that misses the last rows you added. After any insert, click the total and look at the highlighted range.</p>`,
  deeper: `<p>Formulas shown are in the style used by common spreadsheet programs. Adjust names to your own tabs. If your tab name has spaces, the quotes around it are needed.</p>`
},

{ h: "Worked example, part 1: the site and the counts",
  lead: "A small commercial job, taken off step by step. Everything on this slide and the next is a made-up example for practice.",
  body: `<p><strong>Sample job (made up):</strong> a new medical office building on a 1.1-acre lot in North County. About 24,600 SF of landscape. Irrigation sheets L-1.0 (plan, 1" = 20') and L-1.1 (legend, notes, details). Our made-up spec: mainline 2" Schedule 40; laterals Class 200; sleeves Schedule 40; one 24-station smart controller on a pedestal.</p>
<div class="tablewrap"><table>
<thead><tr><th>Device</th><th>How it was counted</th><th class="num">Qty</th></tr></thead>
<tbody>
<tr><td>12" pop-up spray, PRS, 15' quarter / half / full nozzles</td><td>Counted on plan by symbol</td><td class="num">38 / 26 / 6</td></tr>
<tr><td>12" pop-up spray, side strip nozzle</td><td>Counted on plan</td><td class="num">14</td></tr>
<tr><td>6" pop-up rotor</td><td>Counted on plan</td><td class="num">22</td></tr>
<tr><td>Tree bubbler</td><td>28 trees × 2 per tree (detail)</td><td class="num">56</td></tr>
<tr><td>1" RCV (8 spray zones, 2 bubbler zones)</td><td>Counted</td><td class="num">10</td></tr>
<tr><td>1½" RCV (2 rotor zones)</td><td>Counted</td><td class="num">2</td></tr>
<tr><td>1" drip control zone kit</td><td>Counted</td><td class="num">4</td></tr>
<tr><td>Controller, 24-station, pedestal</td><td>16 zones used</td><td class="num">1</td></tr>
<tr><td>1½" RP backflow with enclosure and pad</td><td>POC detail (meter by others)</td><td class="num">1</td></tr>
<tr><td>1½" master valve / 1½" flow sensor / weather sensor</td><td>POC detail</td><td class="num">1 / 1 / 1</td></tr>
<tr><td>1½" ball valve (isolation)</td><td>Counted</td><td class="num">3</td></tr>
<tr><td>Quick coupler</td><td>Counted</td><td class="num">4</td></tr>
<tr><td>Valve box, standard (12 RCVs)</td><td>From devices</td><td class="num">12</td></tr>
<tr><td>Valve box, jumbo (4 drip kits + master valve/flow sensor)</td><td>From devices</td><td class="num">5</td></tr>
<tr><td>Valve box, 10" round (4 QC + 3 ball valves + 8 flush valves)</td><td>From devices</td><td class="num">15</td></tr>
</tbody></table></div>`,
  watch: `<p>Check: 8 + 2 + 2 + 4 = 16 zones, and the controller has 24 stations. Spray heads: 38 + 26 + 6 + 14 = 84. Always add up your sub-counts two ways.</p>`
},

{ h: "Worked example, part 2: measuring, math and the quantity table",
  lead: "Now the measured items, with the math shown. Same made-up job.",
  body: `<ul>
<li><strong>Mainline:</strong> 9 runs measured at 1" = 20', total <strong>610 LF</strong> of 2" Schedule 40. Sleeved length under 3 drive aisles: 3 × 26 LF = 78 LF.</li>
<li><strong>Laterals (Class 200):</strong> 1" = 1,360 LF, 1¼" = 410 LF, 1½" = 175 LF. Total 1,945 LF.</li>
<li><strong>Drip:</strong> 4 zones, 4,200 SF total, rows 18" apart. 4,200 ÷ 1.5 = <strong>2,800 LF</strong> of tubing; 2,800 emitters at 12". Flow: 2,800 × 0.6 GPH = 1,680 GPH ÷ 60 = 28 GPM total, 7 GPM per zone. Headers and footers: 240 LF of 1" Class 200.</li>
<li><strong>Wire:</strong> controller-to-valve distances added for all 16 valves = 4,560 LF of control wire. Common: 640 LF. Spare (spec: 2 spares to the farthest valve): 2 × 640 = 1,280 LF.</li>
<li><strong>Trench:</strong> mainline 610 − 78 sleeved = <strong>532 LF</strong> at mainline depth. Lateral 1,945 − 150 LF shared with mainline = 1,795 LF, plus 240 LF drip header = <strong>2,035 LF</strong> at lateral depth.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Unit</th><th class="num">Net qty</th><th class="num">Waste</th><th class="num">Order qty</th></tr></thead>
<tbody>
<tr><td>2" Sch 40 mainline</td><td>LF</td><td class="num">610</td><td class="num">5%</td><td class="num">641</td></tr>
<tr><td>1" Class 200 lateral (incl. drip headers 240)</td><td>LF</td><td class="num">1,600</td><td class="num">5%</td><td class="num">1,680</td></tr>
<tr><td>1¼" Class 200 lateral</td><td>LF</td><td class="num">410</td><td class="num">5%</td><td class="num">431</td></tr>
<tr><td>1½" Class 200 lateral</td><td>LF</td><td class="num">175</td><td class="num">5%</td><td class="num">184</td></tr>
<tr><td>4" Sch 40 sleeve (pipe) / 2" Sch 40 sleeve (wire)</td><td>LF</td><td class="num">78 / 78</td><td class="num">0</td><td class="num">78 / 78</td></tr>
<tr><td>3" Sch 40 lateral sleeve (6 walks × 8 LF)</td><td>LF</td><td class="num">48</td><td class="num">0</td><td class="num">48</td></tr>
<tr><td>Inline drip tubing, 0.6 GPH at 12"</td><td>LF</td><td class="num">2,800</td><td class="num">10%</td><td class="num">3,080</td></tr>
<tr><td>Drip flush valve / air relief / indicator</td><td>EA</td><td class="num">8 / 4 / 4</td><td class="num">0</td><td class="num">8 / 4 / 4</td></tr>
<tr><td>#14 control wire / common / spare</td><td>LF</td><td class="num">4,560 / 640 / 1,280</td><td class="num">10%</td><td class="num">5,016 / 704 / 1,408</td></tr>
<tr><td>Trench, mainline depth / lateral depth</td><td>LF</td><td class="num">532 / 2,035</td><td class="num">0</td><td class="num">532 / 2,035</td></tr>
<tr><td>Thrust blocks (glued 2" main per spec)</td><td>EA</td><td class="num">0</td><td></td><td></td></tr>
<tr><td>Pressure test, coverage test, programming, as-builts</td><td>LS</td><td class="num">1</td><td></td><td></td></tr>
</tbody></table></div>`,
  ex: `<p>Order quantity math: 610 × 1.05 = 640.5, rounded up to 641. 4,560 × 1.10 = 5,016. Suppliers sell pipe in 20-foot lengths and wire in rolls, so the supplier's quote will round again. That's fine: keep your takeoff in exact feet.</p>`,
  watch: `<p>The devices from part 1 plus this table are the full takeoff. Every line has a unit and a source. This is what you send to suppliers for quotes (Module 8) and what you put labor on (Module 9).</p>`
},

{ h: "Check your takeoff against the engineer's table",
  lead: "Public plans often include quantity tables. Do your own takeoff first, then compare. Real numbers from 11-428704 sheet IQ-1 (as revised by Addendum 1).",
  body: `<p><strong>4" Class 315 main by plan sheet</strong> (bid item 63 = 7,493 LF):</p>
<div class="tablewrap"><table><thead><tr><th>IP-1</th><th>IP-2</th><th>IP-3</th><th>IP-4</th><th>IP-5</th><th>IP-6</th><th>IP-7</th><th>In conduits (IQ-2)</th><th>Total</th></tr></thead>
<tbody><tr><td class="num">440</td><td class="num">1,365</td><td class="num">1,210</td><td class="num">165</td><td class="num">1,150</td><td class="num">1,385</td><td class="num">1,130</td><td class="num">648</td><td class="num"><strong>7,493</strong></td></tr></tbody></table></div>
<p><strong>Schedule 40 laterals</strong> (lateral table, totals):</p>
<div class="tablewrap"><table><thead><tr><th>Size</th><th class="num">IQ-1</th><th class="num">Bid item</th></tr></thead>
<tbody>
<tr><td>1"</td><td class="num">1,390 LF</td><td class="num">1,390 (item 57)</td></tr>
<tr><td>1¼"</td><td class="num">325 LF</td><td class="num">325 (item 58)</td></tr>
<tr><td>1½"</td><td class="num">60 LF</td><td class="num">60 (item 59)</td></tr>
<tr><td>2"</td><td class="num">172 LF lateral + 20 LF main side = 192</td><td class="num">192 (item 60)</td></tr>
<tr><td>2½"</td><td class="num">130 LF</td><td class="num">130 (item 61)</td></tr>
</tbody></table></div>`,
  ex: `<p>Notice the 2" line: the lateral table shows 172 LF, and the main supply table adds 20 LF on the main side (5 + 5 + 10 on IP-3, IP-4 and IP-5). The bid item combines them into 192 LF. If you compared only the lateral table, you'd think the bid item was 20 LF off.</p>
<p>Every pipe item on this job (items 57–63) is marked <strong>(F)</strong>, final pay: you're paid the bid quantity, so these match the plan tables exactly. Your own takeoff of the main tells you whether 7,493 LF is really enough pipe for the price you put on it.</p>
<p>Also notice many lateral entries are exactly 10 LF. This is a retrofit: most laterals stay, and the new pipe just reconnects them to the new main.</p>`,
  src: "11-428704 plans IQ-1 (replaced per Addendum 1, Aug 27, 2021) and IQ-2; Bid Items 57–63; Bid Summary ((F) marks)."
},

{ h: "Real cross-check · 11-431064 laterals by controller",
  lead: "A second real job, a new freeway landscape on SR-905. The lateral tables on IQ-1 and IQ-2 list every valve under each controller. Add them up and compare to the bid items.",
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
<ol class="steps">
<li><div><b>Add across, then down</b>1": 9,636 + 12,445 + 7,692 + 11,012 = 40,785. It matches item 55 to the foot.</div></li>
<li class="hl"><div><b>Look for pipe on both sides of the valve</b>2½": 12,438 lateral + 302 main side = 12,740, item 59. Same lesson as 11-428704: one size can live in two tables.</div></li>
<li><div><b>Count the valves</b>33 + 35 + 35 + 48 = 151 valves on the lateral tables.</div></li>
</ol>`,
  ex: `<p>Many rows show 396 LF of 1" pipe and 192 LF of 1¼". When you see the same number again and again, the designer probably used a standard zone layout. Measure two or three of those zones on the plan sheet yourself to confirm the standard length is real.</p>`,
  src: "Caltrans 11-431064 plans IQ-1, IQ-2 (lateral supply side tables and IQ sheet subtotal table), IQ-3; Bid Items 55–59."
},

{ h: "Real cross-check · 11-431064 main side and devices",
  lead: "Sheet IQ-3 lists the main supply side by plan sheet. Every device total matches a bid item, once you read the Special Provisions.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">IQ-3 total</th><th class="num">Bid item</th><th>How it adds up</th></tr></thead>
<tbody>
<tr><td>3" Class 315 supply line</td><td class="num">12,494</td><td class="num">12,494 (item 60)</td><td>12,226 by sheet + 268 in conduits</td></tr>
<tr><td>3" ductile iron pipe</td><td class="num">520</td><td class="num">520 (item 45)</td><td>65 LF on each of IP-1 to IP-8</td></tr>
<tr><td>1" RCV</td><td class="num">33</td><td class="num">33 (item 38)</td><td>By sheet</td></tr>
<tr><td>1½" RCV</td><td class="num">100</td><td class="num">100 (item 39)</td><td>By sheet</td></tr>
<tr><td>2" RCV</td><td class="num">18 + 3 master</td><td class="num">21 (item 40)</td><td>Spec: a master valve is paid as an RCV of the size shown</td></tr>
<tr><td>2" / 3" gate valves</td><td class="num">39 / 24</td><td class="num">39 / 24</td><td>By sheet</td></tr>
<tr><td>Backflow preventer / flow sensor</td><td class="num">3 / 3</td><td class="num">3 / 3</td><td>Sheets IP-4, IP-8, IP-10</td></tr>
<tr><td>Tree well sprinkler assembly</td><td class="num">1,892</td><td class="num">1,900</td><td>Rounded up</td></tr>
<tr><td>Riser, gear driven</td><td class="num">205</td><td class="num">210</td><td>Rounded up</td></tr>
<tr><td>Pop-up, gear driven</td><td class="num">301</td><td class="num">310</td><td>Rounded up</td></tr>
<tr><td>Riser sprinkler assembly</td><td class="num">111</td><td class="num">120</td><td>Rounded up</td></tr>
<tr><td>Pop-up sprinkler assembly</td><td class="num">1,120</td><td class="num">1,120</td><td>Same</td></tr>
</tbody></table></div>
<p>Valve check: 33 + 100 + 18 = 151 RCVs, the same as the 151 valves on the lateral tables. The 3 masters are extra, at the POCs.</p>`,
  watch: `<p>Without the spec line “remote control valve (master) is paid for as a remote control valve of the size shown,” you'd see 18 on the table and 21 on the bid form and think 3 valves were missing. Read the payment clauses before you call something an error.</p>`,
  src: "Caltrans 11-431064 plans IQ-1 to IQ-3; Special Provisions (replacement of section 20-2.10D); Bid Items 38–40, 45–60."
},

{ h: "When a table disagrees with itself",
  lead: "Quantity tables are typed by people. A subtotal copied from one table to another can be wrong. Always re-add from the rows.",
  body: `<p>Real example, 11-431064:</p>
<div class="tablewrap"><table>
<thead><tr><th>Where</th><th class="num">Tree wells shown</th></tr></thead>
<tbody>
<tr><td>IQ-1, '164A' table, subtotal row (and the rows add to this)</td><td class="num">608</td></tr>
<tr><td>IQ-1, '164A' subtotal repeated under the '165A' table</td><td class="num">613</td></tr>
<tr><td>IQ-2, '166A' table, subtotal row</td><td class="num">456</td></tr>
<tr><td>IQ-2, '166A' subtotal repeated under the '166B' table</td><td class="num">436</td></tr>
<tr><td>IQ-2 lateral total (uses 608 and 456)</td><td class="num">1,892</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Re-add the rows yourself</b>'164A' tree wells: 36 + 13 + 61 + 13 + 69 + 80 + 40 + 36 + 11 + 46 + 43 + 12 + 65 + 41 + 42 = 608. The 613 is a copying slip.</div></li>
<li><div><b>See which number the total used</b>608 + 319 + 456 + 509 = 1,892. With the repeated numbers it would be 613 + 319 + 436 + 509 = 1,877.</div></li>
<li class="hl"><div><b>Decide if it matters</b>Here the bid item (1,900) covers both, so it changes nothing. On a lump-sum job, or a bigger item, it could.</div></li>
</ol>`,
  watch: `<p>Never copy a subtotal from a table into your takeoff without checking it. Add the rows, or better, take off the sheet yourself and use the table only as a check.</p>`,
  src: "Caltrans 11-431064 plans IQ-1 and IQ-2 (lateral supply side tables); Bid Item 48."
},

{ h: "When the numbers don't match",
  lead: "Small differences are normal. Your job is to sort them into three groups: rounding, your mistake, or a real question for the owner.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item (11-428704)</th><th class="num">Plan table</th><th class="num">Bid item</th></tr></thead>
<tbody>
<tr><td>Replace valve box cover labels</td><td class="num">197</td><td class="num">200</td></tr>
<tr><td>PVC pipe conduit</td><td class="num">282 LF</td><td class="num">290 LF</td></tr>
<tr><td>10" CHDPE conduit</td><td class="num">366 LF</td><td class="num">370 LF</td></tr>
<tr><td>Tree well sprinkler assembly</td><td class="num">172</td><td class="num">180</td></tr>
<tr><td>Gate valves, flow sensors, RCVs, air release valves, controllers</td><td class="num">same</td><td class="num">same</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Look for a pattern</b>On this job, several bid quantities are the plan total rounded up to the next 10. That looks like rounding, not a missing item.</div></li>
<li><div><b>Recheck your own count</b>If your takeoff differs from both, your count is the first suspect.</div></li>
<li class="hl"><div><b>Ask about real gaps</b>If a difference can't be explained, send a bidder inquiry or RFI before bid day (Module 12).</div></li>
<li><div><b>Know how the item is paid</b>Measured items are paid on what you actually install. “(F)” final pay items are paid at the bid quantity, so errors there hit your profit directly (Module 15). On this job the rounded items are measured items; the (F) pipe items match the plan tables to the foot.</div></li>
</ol>`,
  watch: `<p>On a lump-sum private bid there is no owner's quantity. Your takeoff is the only number, and every mistake is yours. Check yourself with a second count or a second person on the high-dollar items.</p>`,
  src: "11-428704 IQ-1, IQ-2 and Bid Item List items 48, 51, 66, 67."
},

{ h: "Common takeoff mistakes",
  lead: "Most takeoff losses come from a short list of mistakes. Learn them now so you check for them every time. Dollar examples are made up.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>What it can cost (example)</th><th>How to avoid it</th></tr></thead>
<tbody>
<tr><td>Wrong scale (half-size print measured at full-size scale)</td><td>Every length off by half: 3,000 LF of pipe priced as 1,500</td><td>Check the scale bar on every sheet before measuring</td></tr>
<tr><td>Double counting at match lines (the line where one sheet continues on the next)</td><td>Heads and pipe at the edge counted on both sheets</td><td>Count only up to the match line on each sheet; mark the line in red</td></tr>
<tr><td>Missing an addendum sheet</td><td>Counting a zone the owner deleted, or missing one they added</td><td>Addendum log; stamp each sheet with the version you counted</td></tr>
<tr><td>Counting from zone labels</td><td>Label says 18 heads, plan shows 21</td><td>Count symbols; use labels only as a check</td></tr>
<tr><td>Two pipe classes on one line</td><td>Class 315 priced as Class 200</td><td>One line per size and class</td></tr>
<tr><td>Forgetting POC parts</td><td>Copper, slab, enclosure, strainer unpriced</td><td>Walk the POC detail part by part</td></tr>
<tr><td>Boxes not counted</td><td>30 boxes × $40 (example) = $1,200 missing</td><td>Build boxes from the device count</td></tr>
<tr><td>Pipe in sleeves counted as trench</td><td>Trench priced where none is dug, bid too high</td><td>Subtract sleeved and bored lengths from trench</td></tr>
<tr><td>Drip area includes paving or tree wells</td><td>Extra tubing, extra flow</td><td>Measure planted area only; subtract hardscape</td></tr>
<tr><td>Skipping “(N)” items</td><td>Thrust blocks, tape, decoders unpriced</td><td>Take them off; carry the cost in the paid item</td></tr>
<tr><td>Trusting the engineer's table</td><td>Copying a wrong subtotal</td><td>Take off first, compare second</td></tr>
<tr><td>Rounding too early</td><td>Small errors stacking up across many lines</td><td>Exact net numbers; round only to order</td></tr>
</tbody></table></div>`
},

{ h: "Scenarios: what would you do?",
  lead: "Short situations from real bid weeks. Read each one, decide, then read the answer.",
  body: `<ol class="steps">
<li><div><b>An addendum arrives two days before bid day</b>It replaces irrigation sheet IP-3 and the quantity table. <em>Right move:</em> log it, retake off IP-3 only, update the table, and re-send changed quantities to suppliers. <em>Why:</em> your quotes must match the plans you're bidding.</div></li>
<li><div><b>Six heads sit right on a match line</b>You can see them on both IP-4 and IP-5. <em>Right move:</em> count them on one sheet only, and write “counted on IP-4” on IP-5. <em>Why:</em> otherwise they get counted twice.</div></li>
<li class="hl"><div><b>A GC says “just use the engineer's quantities, everybody does”</b>It's a private job with a quantity list “for reference only.” <em>Right move:</em> do your own takeoff and price your own numbers. <em>Why:</em> on a lump-sum job you're paid for the work, not the list. A list that's short is your loss.</div></li>
<li><div><b>Your count of 1½" RCVs is 98, the bid form says 100</b>It's a measured Caltrans item. <em>Right move:</em> recount once. If you still get 98, bid the 100 at your unit price and note it. <em>Why:</em> measured items are paid on what's installed; small gaps are usually rounding or your miss.</div></li>
<li><div><b>The POC detail shows a meter, but nothing says who installs it</b><em>Right move:</em> send an RFI and state your assumption (“meter by others”) in the proposal. <em>Why:</em> a meter can cost more than the backflow, and assumptions in writing protect you.</div></li>
</ol>`
},

{ t: "scorer", id: "m6qa", h: "Takeoff QA checklist",
  lead: "Score your takeoff before it goes to pricing. 2 = done and checked, 1 = partly, 0 = not done. Your choices are saved in this browser.",
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
    ["Totals checked two ways", "By system equals by item; formulas checked; engineer's table compared and differences sorted"]
  ],
  bands: [
    [18, "Ready for pricing", "Freeze a dated copy and hand it off."],
    [13, "Fix the gaps first", "Finish the lines scored 0 or 1 before anyone prices this."],
    [0, "Not ready", "Go back to the routine at the start of this module."]
  ]
},

{ h: "Bid forms and takeoff tools",
  lead: "How the owner wants the price shown changes what you do with the takeoff. The tools you use to count are your choice.",
  body: `<div class="twocol">
<div><h3>Unit-price bid forms</h3><ul>
<li>Common on Caltrans, city and water district jobs</li>
<li>The owner gives the items and quantities. You give a price per unit.</li>
<li>You still do a takeoff, to check their quantities and to price things that have no item</li>
<li>Your total = sum of (unit price × owner's quantity)</li>
</ul></div>
<div><h3>Lump-sum bids</h3><ul>
<li>Common with GCs on private jobs</li>
<li>You give one price for the whole scope, sometimes with a breakdown (schedule of values)</li>
<li>Your takeoff is the quantity. Errors are yours.</li>
<li>GCs may ask for unit prices for adds and deducts (Module 13)</li>
</ul></div>
</div>
<div class="tablewrap"><table>
<thead><tr><th>Tool</th><th>Good for</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Paper prints, scale, highlighters, counter</td><td>Learning, small jobs, job walks</td><td>Half-size prints; scale must match the print</td></tr>
<tr><td>PDF markup software with count, length and area tools</td><td>Most commercial work; marks stay with the file</td><td>Calibrate the scale on every sheet</td></tr>
<tr><td>Dedicated takeoff software</td><td>High volume, linking takeoff to pricing</td><td>Cost and learning time; garbage in, garbage out</td></tr>
<tr><td>Spreadsheet</td><td>Organizing and totaling, any method above</td><td>Formula errors; lock and check totals</td></tr>
<tr><td>AI tools</td><td>Pulling spec requirements, summarizing legends and notes</td><td>Check every number against the sheets yourself</td></tr>
</tbody></table></div>`
},

{ t: "terms", h: "Words to know",
  lead: "Takeoff words and abbreviations you'll use on every irrigation bid.",
  terms: [
    ["Takeoff", "The list of every item on the plans, counted or measured, with units. No prices."],
    ["EA / LF / SF / CY / LS", "Each / linear feet / square feet / cubic yards / lump sum (one price for the whole item)."],
    ["Legend", "The table that explains each symbol on the plans."],
    ["Sprinkler schedule", "The table listing each head's type, pattern, radius, pressure and flow."],
    ["Valve code", "The tag at each valve giving its size, controller, station, GPM and number of heads."],
    ["Pipe sizing chart", "A chart that sets pipe size by the number of heads downstream."],
    ["GPM / GPH / psi", "Gallons per minute / gallons per hour / pounds per square inch."],
    ["POC (point of connection)", "Where the irrigation system connects to the water supply."],
    ["Backflow preventer (BPA)", "An assembly that keeps irrigation water from flowing back into the drinking water supply. BPAE means BPA in an enclosure."],
    ["RP / DC", "Reduced pressure principle / double check: two common types of backflow preventer."],
    ["Wye strainer", "A Y-shaped fitting with a screen that catches debris."],
    ["RCV", "Remote control valve; opens and closes a zone when the controller signals it."],
    ["Master valve (RCVM)", "A valve near the POC that keeps the mainline closed when no zone is running."],
    ["Flow sensor", "A meter that tells the controller how much water is flowing, to catch breaks."],
    ["QC (quick coupler)", "A valve on the mainline that opens with a key to give hose water."],
    ["PRS", "Pressure-regulating stem on a spray head."],
    ["Mainline", "Pipe that is always under pressure, from the POC to the valves."],
    ["Lateral", "Pipe downstream of a valve, pressurized only when the zone runs."],
    ["PVC", "Polyvinyl chloride, the plastic used for most irrigation pipe."],
    ["Schedule 40", "PVC pipe with a set wall thickness for each size."],
    ["Class 200 / Class 315", "PVC pipe rated by pressure (200 or 315 psi) at every size."],
    ["DIP", "Ductile iron pipe; strong iron pipe used where plastic isn't allowed."],
    ["PCC", "Portland cement concrete."],
    ["Sleeve", "A larger pipe placed under paving so pipe or wire can be pulled through later."],
    ["Bore / jack", "Pushing pipe under existing paving without cutting it."],
    ["CNC", "Control and neutral conductors: Caltrans' name for valve wires."],
    ["Two-wire", "A control system using one two-wire cable and a decoder at each valve."],
    ["Decoder", "A small module on a two-wire path that turns its valve on when the controller sends its address."],
    ["Common wire", "The shared return wire for all valves in a conventional system."],
    ["Thrust block", "Concrete placed at fittings on gasketed mainline to resist water pressure."],
    ["Inline drip tubing", "Tubing with emitters built in at a set spacing."],
    ["Header / footer", "The pipe that feeds the drip rows (supply header) and joins their far ends (flush header)."],
    ["Flush valve / air relief valve", "Drip parts that let dirt out at the end of a zone and let air in or out at the high point."],
    ["Match line", "The line where one plan sheet continues on the next."],
    ["Potholing", "Digging a small test hole to find the exact location and depth of a utility."],
    ["811 / DigAlert", "The call-before-you-dig service; required at least two working days before digging."],
    ["Waste factor", "Extra quantity added for cut-offs and losses, kept separate from the net quantity."],
    ["Net quantity / order quantity", "What the plans show / what you buy after waste and rounding."],
    ["Assembly", "A device priced together with all the parts the detail shows."],
    ["(N) / (F)", "Caltrans marks: not a separate pay item / final pay item, paid at the bid quantity."],
    ["Unit price bid", "A bid form where you price each item per unit and the owner gives the quantities."]
  ]
},

{ t: "quiz", id: "m6", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "Why keep the takeoff separate from pricing?", a: ["It looks more professional", "So counts and prices can each be checked and changed without redoing the other", "Because suppliers require it"], c: 1, why: "An addendum changes counts and a supplier quote changes prices. Keeping them apart makes both easy to update and check." },
    { q: "You measure a half-size print of a 1\" = 50' sheet with a 1\" = 50' scale and get 600 LF. What is the real length?", a: ["300 LF", "600 LF", "1,200 LF"], c: 2, why: "On a half-size print the true scale is 1\" = 100', so every length doubles." },
    { q: "A drip zone is 2,400 SF with rows 18 inches apart. About how much inline tubing is that?", a: ["1,600 LF", "2,400 LF", "3,600 LF"], c: 0, why: "2,400 SF ÷ 1.5 ft = 1,600 LF, before any waste allowance." },
    { q: "On 11-428704, the lateral table shows 172 LF of 2\" pipe, but bid item 60 is 192 LF. Why?", a: ["A mistake in the bid item", "The bid item also includes 20 LF of 2\" pipe on the main supply side", "Waste allowance"], c: 1, why: "IQ-1's main supply table adds 20 LF of 2\" Schedule 40, and the bid item combines both." },
    { q: "Thrust blocks are marked “(N)” on a Caltrans plan. What do you do in the takeoff?", a: ["Skip them", "Count them anyway and put their cost into the paid item they belong to", "Add a new bid item"], c: 1, why: "(N) means no separate payment, not no cost." },
    { q: "How should you build a valve box count when boxes aren't drawn?", a: ["Guess 10% of the head count", "From the device count: one box per valve, quick coupler and isolation valve, per the details", "Leave them out"], c: 1, why: "Boxes follow the devices. The details tell you which size each device gets." },
    { q: "In a conventional (multi-wire) system, how do you take off control wire?", a: ["Length of the mainline only", "Add the distance from the controller to each valve, then add slack", "One roll per controller"], c: 1, why: "Each valve has its own control wire back to the controller." },
    { q: "Several 11-428704 bid quantities are the plan total rounded up to the next 10. What's the best first step?", a: ["Assume every difference is an error and protest", "Recognize the rounding pattern, recheck your own count, and ask only about gaps you can't explain", "Use whichever number is lower"], c: 1, why: "Sort differences into rounding, your mistake, or a real question before you send an inquiry." },
    { q: "On 11-431064, IQ-3 shows 18 2\" RCVs plus 3 2\" master valves, and bid item 40 (2\" RCV) is 21. Why?", a: ["Caltrans rounded up", "The Special Provisions say a master valve is paid as an RCV of the size shown", "Three valves are missing from the plans"], c: 1, why: "Read the payment clause: masters are paid under the RCV item of their size, so 18 + 3 = 21." },
    { q: "Using the 11-431064 pop-up sizing chart, what size is a lateral piece carrying 26 half heads?", a: ["1¼\"", "1½\"", "2\""], c: 1, why: "The chart puts 23 to 30 half heads on 1½\" pipe." },
    { q: "A 2\" main runs 300 ft. A lateral shares the trench for 120 ft, then runs 180 ft alone. How much trench is there?", a: ["480 LF", "600 LF", "900 LF"], c: 0, why: "300 LF at main depth (including the shared part) plus 180 LF at lateral depth. Shared trench is counted once." },
    { q: "Valves sit 100, 200 and 300 ft from the controller. Before slack and spares, how much conventional control wire is that?", a: ["300 LF", "600 LF", "900 LF"], c: 1, why: "One control wire per valve: 100 + 200 + 300 = 600 LF. The common adds 300 LF more." },
    { q: "A repeated subtotal on a quantity sheet says 613, but the rows above it add to 608. What should you trust?", a: ["The repeated subtotal", "Your own re-added rows, and your own takeoff", "Whichever is higher"], c: 1, why: "Tables are typed by people. Re-add the rows; on 11-431064 the total used 608." },
    { q: "In California, how much notice must you give 811 (DigAlert) before trenching?", a: ["At least two working days, not counting the day you call", "24 hours", "No call is needed on private property"], c: 0, why: "Government Code §4216.2 requires at least two working days' notice before excavating." },
    { q: "The 8\" conduit at a crossing is 130 LF, but the 3\" pipe inside it is 134 LF. Why does that matter for takeoff?", a: ["It doesn't; use the conduit length", "The carrier pipe runs past both ends, so take it off from the pipe length, not the conduit length", "The extra 4 ft is waste"], c: 1, why: "On 11-431064 the pipe inside each conduit is longer than the conduit so it can connect beyond the ends." }
  ]
},

{ t: "practice", id: "m6", h: "Practice assignments",
  lead: "Real takeoff work on two real Caltrans jobs, math drills, and a spreadsheet you'll use on every bid.",
  items: [
    { h: "Set up the 11-428704 irrigation sheets", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a> and download the plans and Addendum 1. Make a sheet list of every irrigation sheet (ISS-1, IR-1 to 7, IP-1 to 7, ID-1 to 6, IQ-1, IQ-2) with what's on each. Mark which sheets Addendum 1 replaced.</p>" },
    { h: "Learn the legend", hrs: 0.5, d: "<p>On sheet ISS-1, copy every symbol and abbreviation into a list, with the item it stands for and the unit you'd take it off in (EA, LF, LS). Read the notes and write down every note that changes a quantity (for example, the default lateral size).</p>" },
    { h: "Count the devices on IP-7", hrs: 1.25, d: "<p>Sheet IP-7 (PDF page 38 of the plans, Palomar Street end) holds the recycled-water POC. Without looking at IQ-1, count every new device on it: controller work, antenna mast, flow sensor, master valve, gate valves by size, air release valves, valve box labels. Mark each symbol as you count it.</p>" },
    { h: "Measure the 4\" main on IP-7", hrs: 1, d: "<p>Check the scale against the graphic scale bar first. Then measure the new 4\" Class 315 main on IP-7 with a scale or a PDF length tool, run by run. Write each length on the sheet and total it.</p>" },
    { h: "Compare to IQ-1 and write it up", hrs: 0.5, d: "<p>Compare your IP-7 counts and 4\" main length to the IP-7 row of IQ-1 (1,130 LF of 4\" main, 2 CARVs, two 3\" and one 4\" gate valve, and so on). For each difference over 5%, decide: rounding, your mistake, or a question. Write one bidder inquiry the way you'd send it to Caltrans.</p>" },
    { h: "Build your takeoff spreadsheet", hrs: 1.25, d: "<p>Build a template with two tabs: by system (controller, valve, heads by type, pipe by size, drip SF) and by item (item, description, unit, net qty, waste %, order qty, owner qty, difference %, flag, source sheet, paid how, notes). Use the formulas on the template slide. Enter the worked example from this module and check that your totals match the quantity table.</p>" },
    { h: "Take off a small local job", hrs: 1, d: "<p>Find a small landscape plan set from a current public bid (for example the City of San Diego's <a href=\"https://www.sandiego.gov/cip/bidopps\" target=\"_blank\" rel=\"noopener\">bid opportunities</a> or a GC invitation you've received). Take off one irrigation sheet into your template. Note how long it took; you'll use that time to plan future bids.</p>" },
    { h: "Re-add the 11-431064 quantity tables", hrs: 1, d: "<p>Open <a href=\"#lab-11-431064\">Real Bid Lab · 11-431064</a> and download the plans. Go to sheets IQ-1, IQ-2 and IQ-3 (PDF pages 53 to 55). Re-add controller '165A' (35 valves) for every column: 1\", 1¼\", 1½\", 2\" pipe, tree wells, risers and pop-ups. Then check the IQ-3 totals for 3\" Class 315 pipe and gate valves against bid items 53, 54 and 60. Write down every place a number is carried from one table to another, and whether it was copied correctly.</p>" },
    { h: "List the POC parts from detail ID-2", hrs: 0.5, d: "<p>On the same plan set, open detail ID-2 (PDF page 47). Walk it in the direction of flow and list every part with a unit and a count per POC. Multiply by the 3 POCs on IQ-3. Mark which parts have their own bid item and which are inside another item's price.</p>" },
    { h: "Wire and drip drills", hrs: 0.5, d: "<p>Work these, showing the math. (1) Valves at 45, 90, 140, 200, 260 and 330 ft from the controller: control wire, common wire, and 2 spares to the farthest valve, no slack. (2) The same valves on two-wire: cable LF and decoders, no slack. (3) A 9 × 48 ft island with rows 18\" apart: tubing by the area method, and flow at 0.6 GPH per foot. Answers: (1) 1,065 LF control, 330 LF common, 660 LF spare; (2) 330 LF cable, 6 decoders; (3) 288 LF, 172.8 GPH = 2.9 GPM.</p>" }
  ]
},

{ h: "Module 6 summary",
  lead: "You can now turn an irrigation plan into a checked, organized list of quantities.",
  body: `<ul>
<li>A takeoff is counts and measurements only. Prices come later.</li>
<li>Follow the same routine on every job: documents, sheet list, scale, legend, notes, count, measure, unpaid work, totals, compare, freeze.</li>
<li>Count devices by exact type and size; build boxes from devices; walk the POC detail part by part and note who does the meter, power and backflow test.</li>
<li>Measure pipe by main or lateral, size and class. Size unlabeled pipe from the sizing chart. Measure sleeves, wire and trench by depth, and count shared trench once.</li>
<li>Conventional wire adds up every valve's run; two-wire is one path plus decoders, splices and grounding.</li>
<li>Drip tubing = area ÷ row spacing. Check the flow of every zone.</li>
<li>Handle fittings and waste with a consistent method based on your own jobs, kept separate from net quantities.</li>
<li>Organize by system to check, by item to price, with formulas that flag differences. Compare to the engineer's tables, re-add their subtotals, read the payment clauses, and sort differences into rounding, mistakes and questions.</li>
</ul>
<p><strong>Next: Module 7 · Planting, Soil and Hardscape Takeoff</strong></p>`
}
]
});
