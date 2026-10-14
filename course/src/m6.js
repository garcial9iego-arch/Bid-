(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 6, hours: 8, title: "Irrigation Takeoff",
slides: [

{ t: "cover",
  h: "Irrigation Takeoff",
  lead: "A takeoff is the list of everything on the plans, counted and measured. This module teaches you to take off an irrigation system piece by piece, organize it so it can be priced, and check it against the engineer's numbers.",
  objectives: [
    "Explain what a takeoff is and why you keep it separate from pricing",
    "Set up a plan set for takeoff: sheet list, legend, scale check, color code",
    "Count heads, valves, controllers, backflow and other devices by type and size",
    "Measure mainline, laterals, sleeves, wire and trench by size, class and depth",
    "Handle drip, fittings, thrust blocks, testing and waste with a consistent method",
    "Organize the takeoff by controller and by bid item in a spreadsheet",
    "Check your quantities against a real Caltrans quantity table (11-428704)"
  ],
  time: [["Reading and slides", "2 h"], ["Practice assignments", "6 h"], ["Module total", "8 h"]],
  body: `<p>You already know how an irrigation system goes in the ground. Here you learn to turn a plan sheet into a list of quantities. Pricing those quantities comes in Modules 8 and 9.</p>`
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
<li>When an addendum changes the plans, you change the counts, not the prices.</li>
<li>The same takeoff feeds your supplier quote requests.</li>
</ul></div>
<div><h3>What goes into a takeoff</h3><ul>
<li>Every item, with a clear name (size, type, class)</li>
<li>A unit: EA, LF, SF, CY, LS</li>
<li>A quantity, and where it came from (sheet number)</li>
<li>Notes: “by others,” “not paid separately,” “verify”</li>
</ul></div>
</div>`,
  watch: `<p>Don't mix guesses into the counts. If you think the plans are missing something, take off what's shown and add a separate line marked “allowance” or “not shown, added by estimator.” Mixed-up numbers can't be checked later.</p>`
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

{ h: "Counting heads",
  lead: "Count heads by exact type, body height and nozzle. A 12-inch pop-up with a pressure regulator is a different item from a 6-inch pop-up without one.",
  body: `<ul>
<li><strong>One line per legend symbol.</strong> Spray heads with different nozzles (quarter, half, full, strip) usually have different symbols. Keep them separate: you buy nozzles by pattern.</li>
<li><strong>Count by zone (valve).</strong> Count the heads on each valve, then add up. Zone counts let you check flow later, and they catch heads you counted twice.</li>
<li><strong>Bubblers count per tree or per shrub.</strong> Read the detail. A tree detail may show 2, 3 or 4 bubblers per tree.</li>
<li><strong>Riser heads and pop-ups are separate items.</strong> So are heads with check valves and pressure regulators.</li>
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
<tr><td>Quick couplers</td><td>Size, key type</td><td>Box and swing joint for each</td></tr>
<tr><td>Gate or ball valves (isolation)</td><td>Size</td><td>Box for each; check the detail for the box size</td></tr>
<tr><td>Valve boxes</td><td>Size: 10" round, standard, jumbo</td><td>Count them from the devices, not from separate symbols</td></tr>
<tr><td>Controllers</td><td>Station count, mount (wall, pedestal, enclosure)</td><td>Concrete pad, power, grounding, conduit</td></tr>
<tr><td>Sensors</td><td>Flow sensor size, master valve size, rain or weather sensor</td><td>Sensor cable or decoder, box</td></tr>
<tr><td>Air release, pressure regulating valves</td><td>Size</td><td>Box for each</td></tr>
</tbody></table></div>`,
  ex: `<p>Real counts from sheet IQ-1 of 11-428704: 6 new controllers plus 1 modified, 4 flow sensors, 4 1½" RCVs, 3 2" RCVs, 1 3" two-wire master valve, 1 2" gate valve, 4 3" gate valves, 7 4" gate valves, 1 pressure regulating valve, 8 combination air release valves, 3 antenna masts.</p>`,
  watch: `<p>Valve boxes are easy to miss because they're usually not drawn. Build the box count from your device count: one box per valve, quick coupler and isolation valve, unless the detail says otherwise.</p>`
},

{ h: "The point of connection",
  lead: "The point of connection (POC) is where the irrigation system meets the water supply. It's a cluster of expensive parts drawn as a few small symbols.",
  body: `<p>Typical POC parts, in order from the water source. Take off each one the plans and details show:</p>
<ol class="steps">
<li><div><b>Water meter and service</b>Usually installed by the water agency or another contractor. Note who provides it.</div></li>
<li class="hl"><div><b>Backflow preventer</b>Size and type (reduced pressure, double check), with its enclosure, concrete pad and any required test.</div></li>
<li><div><b>Isolation valve and strainer</b>Ball or gate valve, wye strainer if shown.</div></li>
<li><div><b>Master valve and flow sensor</b>Size, box, and cable or decoder to the controller.</div></li>
<li><div><b>Pressure regulator</b>If shown on the POC detail.</div></li>
<li><div><b>Fittings and short pipe runs</b>Brass or Schedule 80 nipples and unions on the assembly.</div></li>
</ol>`,
  ex: `<p>Real example: on 11-428704 (sheet IP-7), the single recycled-water POC at Palomar Street gets a new 3" two-wire master valve, a 2" flow sensor, 3" and 4" gate valves, an air release valve and an antenna mast. The existing recycled water meters and cross connection test station stay in place.</p>`,
  watch: `<p>Read the POC detail for who does what. On many private jobs the meter is by others, the backflow is yours, and the electrician runs power to the controller. If the plans don't say, ask in an RFI (Module 12) and state your assumption in the proposal (Module 13).</p>`
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
  deeper: `<p>Schedule 40 PVC (ASTM D1785) has a set wall thickness for each size, so its pressure rating goes down as the pipe gets bigger. Class pipe (ASTM D2241) is rated by pressure: Class 200 is SDR 21 and Class 315 is SDR 13.5, and the rating stays the same at every size. That's why specs often call Schedule 40 for small pipe and Class 315 for large mains. Read your job's spec section 32 80 00 for what it requires.</p>`,
  watch: `<p>Don't put two pipe classes on one line. On 11-428704, 2" pipe was Schedule 40 and 3" and 4" were Class 315. They are different bid items with different prices.</p>`
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
<tr><td>10" CHDPE pipe conduit</td><td class="num">366 LF</td><td class="num">370 LF (item 67)</td></tr>
<tr><td>4" Class 315 main inside the conduits</td><td class="num">648 LF</td><td class="num">included in item 63</td></tr>
</tbody></table></div>
<p>The 2" electrical conduits and pavement markers on IQ-2 are marked “(N)”: not a separate pay item. The winning bidder listed a boring subcontractor for 54% of the PVC pipe conduit item (item 66), “boring only.”</p>`,
  src: "11-428704 plans IQ-2; Bid Items 63, 66, 67; Bid Summary subcontractor list."
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
<li>Count a decoder for each valve (or each group of valves on one decoder)</li>
<li>Count surge arrestors and ground rods the detail shows</li>
<li>Count splice kits at every connection</li>
</ul></div>
</div>`,
  ex: `<p>Real example: on 11-428704, wire was one lump sum item (“Control and neutral conductors”). The two-wire POC decoder and ground rod at the master valve were marked “(N)”, not a separate bid item. The specs listed a supplier price for the decoder and 1,000 ft of two-wire cable. (Module 15 shows those prices.)</p>`,
  watch: `<p>Wire usually runs in the mainline trench, so it adds little trench. Where a wire run leaves the mainline to reach a valve, that piece of trench is extra. Don't forget wire inside sleeves under paving.</p>`
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
  watch: `<p>Freeway, school and city jobs often have existing utilities everywhere. On 11-428704, the U sheets showed gas, sewer, telecom and Otay Water District lines near the new main. Trench near utilities means potholing and hand digging.</p>`
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
  ex: `<p><strong>Worked math (made-up example):</strong> a 1,050 SF drip zone with inline tubing, 0.6 GPH emitters at 12" spacing, rows 18" apart.</p>
<ul>
<li>Tubing: 1,050 SF ÷ 1.5 ft = <strong>700 LF</strong></li>
<li>Emitters: 700 LF ÷ 1.0 ft = <strong>700 emitters</strong></li>
<li>Flow check: 700 × 0.6 GPH = 420 GPH. 420 ÷ 60 = <strong>7 GPM</strong> for this zone.</li>
</ul>`,
  watch: `<p>Check that the flow you calculate fits the valve and drip kit size on the plan. If your math says 15 GPM and the drawing shows a low-flow drip kit, something is off: either your area or the design. Ask before you bid.</p>`
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
  lead: "Takeoff words you'll use on every irrigation bid.",
  terms: [
    ["Takeoff", "The list of every item on the plans, counted or measured, with units. No prices."],
    ["Legend", "The table that explains each symbol on the plans."],
    ["POC (point of connection)", "Where the irrigation system connects to the water supply."],
    ["Backflow preventer", "An assembly that keeps irrigation water from flowing back into the drinking water supply."],
    ["RCV", "Remote control valve; opens and closes a zone when the controller signals it."],
    ["Master valve", "A valve near the POC that keeps the mainline closed when no zone is running."],
    ["Mainline", "Pipe that is always under pressure, from the POC to the valves."],
    ["Lateral", "Pipe downstream of a valve, pressurized only when the zone runs."],
    ["Schedule 40", "PVC pipe with a set wall thickness for each size."],
    ["Class 200 / Class 315", "PVC pipe rated by pressure (200 or 315 psi) at every size."],
    ["Sleeve", "A larger pipe placed under paving so pipe or wire can be pulled through later."],
    ["Bore / jack", "Pushing pipe under existing paving without cutting it."],
    ["Two-wire", "A control system using one two-wire cable and a decoder at each valve."],
    ["Common wire", "The shared return wire for all valves in a conventional system."],
    ["Thrust block", "Concrete placed at fittings on gasketed mainline to resist water pressure."],
    ["Inline drip tubing", "Tubing with emitters built in at a set spacing."],
    ["Waste factor", "Extra quantity added for cut-offs and losses, kept separate from the net quantity."],
    ["Assembly", "A device priced together with all the parts the detail shows."],
    ["(N)", "Caltrans plan mark: not a separate pay item. Still has a cost."],
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
    { q: "Several 11-428704 bid quantities are the plan total rounded up to the next 10. What's the best first step?", a: ["Assume every difference is an error and protest", "Recognize the rounding pattern, recheck your own count, and ask only about gaps you can't explain", "Use whichever number is lower"], c: 1, why: "Sort differences into rounding, your mistake, or a real question before you send an inquiry." }
  ]
},

{ t: "practice", id: "m6", h: "Practice assignments",
  lead: "Real takeoff work on a real Caltrans job, plus a spreadsheet you'll use on every bid.",
  items: [
    { h: "Set up the 11-428704 irrigation sheets", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a> and download the plans and Addendum 1. Make a sheet list of every irrigation sheet (ISS-1, IR-1 to 7, IP-1 to 7, ID-1 to 6, IQ-1, IQ-2) with what's on each. Mark which sheets Addendum 1 replaced.</p>" },
    { h: "Learn the legend", hrs: 0.5, d: "<p>On sheet ISS-1, copy every symbol and abbreviation into a list, with the item it stands for and the unit you'd take it off in (EA, LF, LS). Read the notes and write down every note that changes a quantity (for example, the default lateral size).</p>" },
    { h: "Count the devices on IP-7", hrs: 1.25, d: "<p>Sheet IP-7 (PDF page 38 of the plans, Palomar Street end) holds the recycled-water POC. Without looking at IQ-1, count every new device on it: controller work, antenna mast, flow sensor, master valve, gate valves by size, air release valves, valve box labels. Mark each symbol as you count it.</p>" },
    { h: "Measure the 4\" main on IP-7", hrs: 1, d: "<p>Check the scale against the graphic scale bar first. Then measure the new 4\" Class 315 main on IP-7 with a scale or a PDF length tool, run by run. Write each length on the sheet and total it.</p>" },
    { h: "Compare to IQ-1 and write it up", hrs: 0.5, d: "<p>Compare your IP-7 counts and 4\" main length to the IP-7 row of IQ-1 (1,130 LF of 4\" main, 2 CARVs, two 3\" and one 4\" gate valve, and so on). For each difference over 5%, decide: rounding, your mistake, or a question. Write one bidder inquiry the way you'd send it to Caltrans.</p>" },
    { h: "Build your takeoff spreadsheet", hrs: 1.25, d: "<p>Build a template with two tabs: by system (controller, valve, heads by type, pipe by size, drip SF) and by item (item, description, unit, net qty, waste %, order qty, source sheet, notes). Enter the worked example from this module and check that your totals match the quantity table.</p>" },
    { h: "Take off a small local job", hrs: 1, d: "<p>Find a small landscape plan set from a current public bid (for example the City of San Diego's <a href=\"https://www.sandiego.gov/cip/bidopps\" target=\"_blank\" rel=\"noopener\">bid opportunities</a> or a GC invitation you've received). Take off one irrigation sheet into your template. Note how long it took; you'll use that time to plan future bids.</p>" }
  ]
},

{ h: "Module 6 summary",
  lead: "You can now turn an irrigation plan into a checked, organized list of quantities.",
  body: `<ul>
<li>A takeoff is counts and measurements only. Prices come later.</li>
<li>Set up first: sheet list, legend, scale check, color code, mark everything you count.</li>
<li>Count devices by exact type and size; build boxes from devices; take off the whole POC.</li>
<li>Measure pipe by main or lateral, size and class. Measure sleeves, wire and trench by depth.</li>
<li>Drip tubing = area ÷ row spacing. Check the flow.</li>
<li>Handle fittings and waste with a consistent method based on your own jobs, kept separate from net quantities.</li>
<li>Organize by system to check, by item to price. Compare to the engineer's tables and sort differences into rounding, mistakes and questions.</li>
</ul>
<p><strong>Next: Module 7 · Planting, Soil and Hardscape Takeoff</strong></p>`
}
]
});
