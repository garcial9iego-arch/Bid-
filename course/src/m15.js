(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 15, hours: 7, title: "Real Bid Practice: Price It, Then Compare to the Winner",
slides: [

{ t: "cover",
  h: "One real bid, start to finish: I-805 Chula Vista",
  lead: "Caltrans contract 11-428704, a recycled-water irrigation conversion and replanting on I-805, followed from advertisement to award: every document, the hidden costs, and how six real bidders priced it.",
  objectives: [
    "Know every document in a Caltrans bid package and what it controls",
    "Read the plans and specs for scope, quantities and hidden costs",
    "Check bid quantities against the plan tables and decide what to ask",
    "Apply prevailing wage, DBE, subcontractor listing and bid book rules",
    "Read the Bid Summary line by line and learn from each bidder's pricing",
    "Price the job in the Real Bid Lab and compare to the winner"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice: price the real job", "5.5 h"], ["Module total", "7 h"]],
  body: `<p>Path: Notice to Bidders → spec book layers → plans → quantity check → addendum → hidden costs → prices → subs and DBE → bid book → results. All source files are linked in <a href="#lab-11-428704">Real Bid Lab · 11-428704</a>.</p>`,
  src: "Caltrans Contractors Corner, contract 11-428704: Notice to Bidders, Special Provisions, plans, Addendum 1, Bid Summary, ACCU Construction bid book."
},

{ h: "The job at a glance",
  lead: "About 1.7 miles of I-805, a $1.2M low bid, six bidders, and a C-27 could bid it as prime.",
  body: `<div class="tablewrap"><table><tbody>
<tr><td><strong>Owner</strong></td><td>Caltrans District 11 (federal-aid project ACIM-8051(641)E)</td></tr>
<tr><td><strong>Where</strong></td><td>I-805 in Chula Vista, 0.3 mile south of Main Street to the Palomar Street overcrossing</td></tr>
<tr><td><strong>Work</strong></td><td>“Convert irrigation system to recycled water, irrigation and planting”</td></tr>
<tr><td><strong>License to bid as prime</strong></td><td>Class A or C-27 (landscape is the majority of the work)</td></tr>
<tr><td><strong>Time</strong></td><td>120 working days to build + 250 working days of plant establishment = 370</td></tr>
<tr><td><strong>Estimated cost (Notice to Bidders)</strong></td><td>$1,510,000</td></tr>
<tr><td><strong>Advertised / bid opened</strong></td><td>Aug 2, 2021 / Sept 8, 2021, 2:00 PM</td></tr>
<tr><td><strong>Packages issued / bids received</strong></td><td>16 / 6 (three were landscape companies)</td></tr>
<tr><td><strong>Awarded</strong></td><td>ACCU Construction, Inc., $1,176,120.00, Oct 1, 2021</td></tr>
</tbody></table></div>`
},

{ h: "Every document in the package",
  lead: "Read all of them: the plans show the work, but most cost and most disqualification risk sit in the other documents.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Document</th><th>Contents</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td><strong>Notice to Bidders</strong></td><td>Dates, license, DBE goal, time, estimate</td><td>Go/no-go starts here</td></tr>
<tr><td><strong>Bid Item List</strong></td><td>70 items with units and quantities</td><td>What you price</td></tr>
<tr><td><strong>Special Provisions</strong> (316 pp.)</td><td>Job rules plus statewide revisions to the Standard Specifications</td><td>Products, methods, testing, work hours, submittals: most hidden costs</td></tr>
<tr><td><strong>2018 Standard Specifications and Standard Plans</strong> (not in the package)</td><td>Caltrans base rules and details</td><td>The Special Provisions only list changes; read both</td></tr>
<tr><td><strong>Plans</strong> (65 sheets)</td><td>Irrigation, planting, traffic, water pollution, utilities, quantity tables</td><td>Where the work is and how much</td></tr>
<tr><td><strong>Addendum 1</strong> (Aug 27, 2021)</td><td>4 plan sheets, 3 bid items, new wage rates</td><td>Bid the changed quantities; acknowledge it</td></tr>
<tr><td><strong>Federal wage rates</strong></td><td>U.S. DOL decision, San Diego County</td><td>Pay the higher of state or federal</td></tr>
<tr><td><strong>DBE forms</strong></td><td>Commitment, Confirmation, Good Faith Efforts</td><td>Due day 5 after bid; late = bid rejected (it happened here)</td></tr>
<tr><td><strong>Bid book</strong> (Bid Express)</td><td>Bid form, prices, subs, bond, certifications</td><td>A missing piece can make the bid non-responsive</td></tr>
<tr><td><strong>Bid Summary</strong> (after opening)</td><td>Every bidder's total, subs and unit prices</td><td>Free market data</td></tr>
</tbody></table></div>`
},

{ h: "Step 1 · The Notice to Bidders",
  lead: "Two pages answer most go/no-go questions; read each line as a cost or a risk.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Notice says</th><th>Means for you</th></tr></thead>
<tbody>
<tr><td>“Bids open… September 8, 2021… until 2:00 p.m.… via Bid Express… Bids received after this time will not be accepted.”</td><td>Electronic only: set up the Bid Express account and digital ID well before bid day</td></tr>
<tr><td>“Class A license or… C-27”</td><td>A C-27 can prime it</td></tr>
<tr><td>“The DBE Contract goal is 14 percent.”</td><td>About $165,000 of a $1.18M bid to certified DBEs, or documented good faith efforts</td></tr>
<tr><td>Federal-aid project</td><td>Federal wage rates, DBE rules, federal certifications</td></tr>
<tr><td>“Bids must be on a unit price basis.”</td><td>Paid per unit installed (except final-pay items)</td></tr>
<tr><td>“Bidder's security equal to at least 10 percent of the bid.”</td><td>About $118,000 bid bond; line up the surety early</td></tr>
<tr><td>120 / 250 / 370 working days</td><td>Build, plant establishment, total</td></tr>
<tr><td>No pre-bid meeting; inquiries through Caltrans's online bidder inquiry system</td><td>Visit the shoulders from public roads; questions on unclear plans “must be asked before bid opening”</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Go/no-go for a C-27:</strong> license OK · DIR registration · $118K bid bond and $1.2M performance and payment bonds · 14% DBE · freeway night work and traffic control (subcontract it) · one year of establishment. With bonding in place, a realistic first public prime.</p>`
},

{ h: "Step 2 · How the Caltrans spec book is built",
  lead: "The downloaded book contains only changes; base rules live in the 2018 Standard Specifications under the same section numbers.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Layer</th><th>What it is</th></tr></thead>
<tbody>
<tr><td>2018 Standard Specifications</td><td>Base rules for every Caltrans job; Section 20 is Landscape. Not in the package.</td></tr>
<tr><td>Revised Standard Specifications (04-16-21)</td><td>Statewide updates, bound into this job's book (262 pp.)</td></tr>
<tr><td>Special Provisions (44 pp.)</td><td>This job only; each clause reads “Add to section 20-2…” or “Replace the 1st paragraph of…”</td></tr>
<tr><td>Standard Plans (2018) and Revised Standard Plans</td><td>Standard details, e.g. sprinkler assembly (RSP H4), swing joint (H5)</td></tr>
</tbody></table></div>
<p>Section map: 2 bidding, DBE forms and deadlines · 7 insurance, prevailing wage, certified payroll · 12 traffic control and closure hours · 13 storm water · 14 environmental (birds, paleontology, lead, solid waste) · 20 landscape · 21 erosion control and compost · 86–87 electrical.</p>`,
  watch: `<p>Only in the 2018 Standard Specifications: liquidated damages per day (8-1.10), bonds (3-1), payment of mobilization and time-related overhead (9-1), base plant establishment and replacement rules (20-4). Read only the Special Provisions and you miss them.</p>`
},

{ h: "Step 3 · The plans, sheet by sheet",
  lead: "Sixty-five sheets in groups, each group ending in its own quantity table.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Sheets</th><th>Content</th><th>Use</th></tr></thead>
<tbody>
<tr><td>Title, PC-1</td><td>Location, limits, survey control</td><td>Where work starts and ends</td></tr>
<tr><td>WPC-1 to 7, WPCQ-1</td><td>Temporary water pollution control</td><td>Fiber roll (7,190 LF), 8 construction entrances, inlet protection</td></tr>
<tr><td>U-1 to 7</td><td>Existing utilities (information only)</td><td>Gas, sewer, telecom, Otay Water District recycled water to avoid when trenching</td></tr>
<tr><td>CS-1, TH-1 to 4, THQ-1</td><td>Signs and traffic handling</td><td>K-rail runs, crash cushions, drums: price or get a sub quote</td></tr>
<tr><td>ISS-1</td><td>Sprinkler schedule, legend, notes</td><td>Head types, pipe sizing, purple pipe rules</td></tr>
<tr><td>IR-1 to 7 / IP-1 to 7 (1"=50')</td><td>Irrigation removal / new irrigation</td><td>Remove, salvage, cap / new main, valves, controllers, connections</td></tr>
<tr><td>ID-1 to 6, IQ-1, IQ-2</td><td>Irrigation details, quantities</td><td>Construction of each piece; pipe and parts by sheet and valve</td></tr>
<tr><td>PL-1, PP-1 to 7, PLD-1, PQ-1</td><td>Plant legend, planting plans, details, quantities</td><td>Species, sizes, spacing, fertilizer, sequence; counts by area</td></tr>
<tr><td>E-1, E-2</td><td>Electric service</td><td>Power to new controllers from existing SDG&amp;E service</td></tr>
<tr><td>Last 7 sheets</td><td>Revised Standard Plans (H4, H6, H9, ES-1A/B/C, ES-8A)</td><td>Details changed for this job</td></tr>
</tbody></table></div>`,
  ex: `<p>First read: title → plant legend and sprinkler schedule (symbols) → irrigation and planting plans → details → quantity tables → traffic and water pollution sheets.</p>`
},

{ h: "Reading the irrigation design",
  lead: "Cut off three potable connections and feed the corridor from one recycled-water point of connection.",
  body: `<ul>
<li><strong>Recycled source</strong> at Palomar Street (IP-7): existing Otay Water District recycled meters; new 3" two-wire master valve, flow sensor, gate valves, air release valve, antenna mast.</li>
<li><strong>Three potable connections cut off</strong> (Main Street, East Orange Avenue and one more, IR sheets): meters and backflows stay; downstream parts removed, line capped.</li>
<li><strong>New 4" Class 315 main, 7,493 LF</strong>, tied into existing laterals.</li>
<li><strong>Controllers:</strong> '97A' modified; '97B'–'97G' new (32–40 stations), replacing satellites removed and salvaged to Caltrans.</li>
<li><strong>Ramp crossings:</strong> 648 LF of 8" and 10" conduit at seven crossings, each carrying the 4" main and wire.</li>
</ul>`,
  watch: `<p>Recycled water: everything purple or labeled per San Diego County DEH (pipe, heads, caps, drain grates), warning tape along the whole main trench, English/Spanish warning signs, 150 psi pressure test on mains, no overspray or runoff onto roads.</p>`,
  src: "Plans IP-1 to IP-7, IR-1 to IR-7, ISS-1, ID-6, IQ-2; Special Provisions 20-2.01."
},

{ h: "Sprinklers, details and unpaid work",
  lead: "The schedule and details define what you buy and build, including work with no bid item of its own.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>From the plans</th><th>Effect on price</th></tr></thead>
<tbody>
<tr><td>Gear-drive rotors on 10" risers or 12" pop-ups, 25'–48' radius</td><td>Price head, swing joint and riser as one assembly (items 52–53)</td></tr>
<tr><td>Tree well sprinkler: 0.5 GPM bubbler in a drain pipe, 4 per tree</td><td>Item 51, 43 box trees (quantity check next slide)</td></tr>
<tr><td>Lateral sizing: 1" to 24 heads, 1¼" to 44, 1½" to 60, 2" to 100</td><td>Check your pipe takeoff against the designer's logic</td></tr>
<tr><td>90° turns in the main made with two 45° elbows</td><td>More fittings than assumed</td></tr>
<tr><td>Thrust blocks, warning tape, two-wire decoder, ground rods, pavement markers at conduits, marked “(N)”</td><td><strong>No separate payment</strong>: carry the cost in the pipe, valve or controller items they belong to</td></tr>
<tr><td>Calsense flow checking on at all times</td><td>Programming and troubleshooting hours</td></tr>
</tbody></table></div>`
},

{ h: "Reading the planting design",
  lead: "Mostly iceplant cuttings on slopes, drought-tolerant shrubs and 43 boxed pines, with a 21-day weed wait built in.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Group (size)</th><th>Plants</th><th>Spacing</th><th class="num">Bid qty</th></tr></thead>
<tbody>
<tr><td>H (cutting)</td><td>Carpobrotus edulis (Hottentot fig)</td><td>1' o.c.</td><td class="num">61,975</td></tr>
<tr><td>A (1-gal)</td><td>Prostrate acacia, aeonium, aloe, dwarf coyote brush, two salvias, two sedums</td><td>3'–6'</td><td class="num">1,460</td></tr>
<tr><td>B (5-gal)</td><td>Ghost aloe</td><td>3'</td><td class="num">110</td></tr>
<tr><td>K (24" box)</td><td>Canary Island pine, Eldarica pine</td><td>As shown, 40' from traffic</td><td class="num">43</td></tr>
</tbody></table></div>
<p><strong>Sequence (PL-1):</strong> irrigation → weed germination → compost (200 CY/acre) → planting → 3" wood mulch. Specs: “Do not perform planting work in weed germination areas for a period of 21 days after irrigation systems have been installed.” Three weeks of watering and waiting go in the schedule.</p>`,
  deeper: `<p>Each pine: 48" hole, 60" basin, staking, gravel sump, perforated drain pipe with purple grate, 4 bubblers, iron sulfate, slow-release fertilizer, 5 fertilizer packets (PLD-1). Hole and basin work is included in the tree price (item 26).</p>`,
  src: "Plans PL-1, PP-1 to PP-7, PLD-1, PQ-1; Special Provisions 20-1.03E, 20-3.02D."
},

{ h: "Step 4 · Check the quantities",
  lead: "Caltrans gives the quantities; trace each one to the plan tables and ask about gaps, hardest on final-pay items.",
  body: `<p><strong>4" main, item 63 = 7,493 LF</strong> (IQ-1 by sheet):</p>
<div class="tablewrap"><table><thead><tr><th>IP-1</th><th>IP-2</th><th>IP-3</th><th>IP-4</th><th>IP-5</th><th>IP-6</th><th>IP-7</th><th>Conduits</th><th>Total</th></tr></thead>
<tbody><tr><td class="num">440</td><td class="num">1,365</td><td class="num">1,210</td><td class="num">165</td><td class="num">1,150</td><td class="num">1,385</td><td class="num">1,130</td><td class="num">648</td><td class="num"><strong>7,493</strong></td></tr></tbody></table></div>
<p><strong>Iceplant cuttings, item 25:</strong> callouts on the 7 planting sheets: 4,600 + 15,750 + 12,900 + 185 + 1,790 + 2,430 + 2,730 + 6,180 + 1,960 + 13,450 = <strong>61,975</strong>. The original bid list said 60,015; Addendum 1 fixed it.</p>
<p><strong>Tree wells, item 51:</strong> IQ-1 adds up to 172 tree well sprinkler assemblies (43 trees × 4); item 51 says 180. Caltrans rounded many measured items up slightly on this job (valve box labels 197 → 200, compost 282 → 290, packet fertilizer 1,893 → 1,900), so 180 is probably rounding. Ask before bid day when a gap exceeds that pattern or sits on a lump-sum or final-pay item.</p>
<p><strong>(F) final pay:</strong> paid at the bid quantity whatever you install, unless the Engineer changes the work. Here: iceplant cuttings (item 25) and every supply pipe size (items 57–63), all matching the plan tables exactly. Other items are paid by units installed. On (F) items, a quantity error is your gain or loss.</p>`
},

{ h: "Step 5 · Addendum 1",
  lead: "Twelve days before bid opening Caltrans changed three items, four sheets and the wage rates; every bidder had to bid the new version.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Change</th><th class="num">Before</th><th class="num">After</th></tr></thead>
<tbody>
<tr><td>Item 7 · Temporary railing (Type K)</td><td class="num">1,340 LF</td><td class="num">1,700 LF</td></tr>
<tr><td>Item 25 · Plant (Group H) cuttings</td><td class="num">60,015</td><td class="num">61,975</td></tr>
<tr><td>Item 38 · 2" remote control valve</td><td class="num">4</td><td class="num">3</td></tr>
<tr><td>Plan sheets 22, 23, 45, 56</td><td colspan="2">Replaced (traffic handling, irrigation and planting quantities)</td></tr>
<tr><td>Federal wage rates</td><td colspan="2">Modification 12 (Aug 27, 2021), higher carpenter and laborer rates</td></tr>
</tbody></table></div>
<p>“Submit bids for this work with the understanding and full consideration of this addendum.” The bid form lists every addendum received; the winner's lists “1”.</p>`,
  watch: `<p>Check for addenda the morning of bid day. Old quantities make your extensions wrong; an unacknowledged addendum can make the bid non-responsive.</p>`
},

{ h: "Step 6 · Hidden costs: freeway hours and traffic",
  lead: "On a freeway, the hours you may work are a cost; this job's closure charts mostly allow nights and early weekend mornings.",
  body: `<ul>
<li><strong>Lane closures</strong> (at least 3 lanes open): roughly Mon–Thu 9 PM–5 AM, Friday until 5 AM, early weekend mornings. Shoulder closures roughly 9 AM–3 PM weekdays. Verify in Special Provisions 12-4.02C.</li>
<li><strong>Blackouts:</strong> holidays, special events, and noon the day before Thanksgiving to Jan 2 at listed shopping areas, including Plaza Bonita.</li>
<li><strong>Every closure:</strong> impact attenuator truck, certified TCT (traffic control technician), certified flaggers, weekly reports, requests through the LCS (Lane Closure System).</li>
<li><strong>Bid items:</strong> traffic control system, construction area signs, 36 drums, 2 message signs, 1,700 LF K-rail, 6 crash cushions.</li>
<li><strong>Within 6' of a lane at 45 mph or more:</strong> close the next lane too.</li>
</ul>`,
  ex: `<p>Every bidder subcontracted traffic control and K-rail. You need a reliable traffic control quote before bid day, not attenuator trucks.</p>`,
  src: "Special Provisions 12-3, 12-4.02C; Revised Standard Specifications 12."
},

{ h: "Step 6 · Hidden costs: environment, soil and paperwork",
  lead: "None of these appear on a planting or irrigation sheet; price them from the Special Provisions.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Requirement</th><th>What it costs you</th></tr></thead>
<tbody>
<tr><td>ADL (aerially deposited lead) up to 556 mg/kg, to 5' deep</td><td>Lead compliance plan (item 1); off-site soil disposal at your cost</td></tr>
<tr><td>Paleontology</td><td>No digging without the monitor; 15 days' notice; 1 h training for everyone who digs</td></tr>
<tr><td>Nesting birds, Feb 15–Aug 31</td><td>15 working days' notice before disturbing vegetation; 100' stop-work zone at active nests</td></tr>
<tr><td>Storm water risk level 2</td><td>SWPPP by a QSD within 15 days of approval, QSP-trained manager, rain event plans, sampling</td></tr>
<tr><td>Solid waste from the public</td><td>300 h: weekly, 2 laborers and a pickup with arrow board per hour, disposal included</td></tr>
<tr><td>Start-of-work submittals</td><td>CPM schedule, SWPPP, closure contingency plan, existing-planting work plan, deficiency list, job hazard analyses; payment withheld when late</td></tr>
<tr><td>Partnering (over $1M and 100+ working days)</td><td>Professional facilitator</td></tr>
</tbody></table></div>`,
  src: "Special Provisions 7-1.02K(6)(j), 13-3.01A, 14-1, 14-7.04, 14-10.01A, 5-1.09."
},

{ h: "Free pricing: Caltrans quoted the controllers",
  lead: "The specs name the Calsense supplier and list its prices: material cost handed to you.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Quote (before tax and delivery)</th></tr></thead>
<tbody>
<tr><td>'97B' 40-station CS3000, flow sensing, antenna, radio, surge protection</td><td class="num">$9,743.66</td></tr>
<tr><td>'97C', '97E', '97F' 40-station</td><td class="num">$9,034.35 each</td></tr>
<tr><td>'97D' 32-station</td><td class="num">$8,496.23</td></tr>
<tr><td>'97G' 40-station with Yagi antenna</td><td class="num">$9,692.41</td></tr>
<tr><td>'97A' modification kit (radio, antenna, 2-wire terminal, 5-year data plan)</td><td class="num">$6,708.64</td></tr>
<tr><td>Calsense FM-2 2" flow sensor</td><td class="num">$543.25 each</td></tr>
<tr><td>Two-wire master valve decoder + 1,000' 2-wire cable</td><td class="num">$824.90</td></tr>
</tbody></table></div>
<p>SiteOne Landscape Supply, Kearny Villa Road, San Diego; good until April 14, 2022.</p>`,
  ex: `<p>The winner bid each new controller at $14,000–$15,000 installed. Minus $9,000–$9,700 of quoted material leaves what it carried for tax, delivery, pad and foundation (included), installation, wiring and markup. Run this check on every item with a known material cost.</p>`,
  src: "Special Provisions 20-2.05B, 20-2.06B(2)(a), 20-2.10B(10)(a), 20-10.02B(1)."
},

{ h: "Plant establishment and existing planting",
  lead: "Two lump sums cover about a year of maintenance and drew a 30× price spread.",
  body: `<ul>
<li><strong>Plant establishment (item 30):</strong> Type 1, 250 working days. Water, weed, pest control, replace dead plants, keep the site “neat and presentable… including areas not visible to the public.” Four seasonal watering schedules built in Calsense; fertilize the first week of April, July and September; annual functional irrigation test with the Engineer.</li>
<li><strong>Maintain existing planted areas (item 29):</strong> about 717,000 SF. Work plan 20 days before starting; deficiency list from a joint inspection 15 days before starting; water existing plants until contract acceptance.</li>
<li><strong>Operate and check-and-test existing irrigation (items 32–33):</strong> you own the old system's performance while you rebuild it.</li>
</ul>`,
  ex: `<p>Item 30 bids: $35,000 (winner), $48,100, $50,000, $30,000, $300,000, $10,000. When your lump sum is far from the pack, reread the section: either you see something they missed, or the reverse.</p>`,
  src: "Special Provisions 20-4.01, 20-4.03, 20-10.03; Bid Summary items 29–30."
},

{ h: "Labor at prevailing wage",
  lead: "Federal-aid Caltrans job: pay at least the higher of the state and federal rate for each classification, reported on certified payroll.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Federal classification (San Diego, 2021)</th><th class="num">Base</th><th class="num">Fringe</th><th class="num">Total</th></tr></thead>
<tbody>
<tr><td>Laborer Group 1: landscape laborer, flagger, fine grader</td><td class="num">$35.30</td><td class="num">$20.48</td><td class="num">$55.78</td></tr>
<tr><td>Laborer Group 2: irrigation laborer, tree climber</td><td class="num">$35.76</td><td class="num">$20.48</td><td class="num">$56.24</td></tr>
<tr><td>Laborer Group 3: hydroseeder, compactor</td><td class="num">$36.17</td><td class="num">$20.48</td><td class="num">$56.65</td></tr>
<tr><td>Laborer Group 4: pipelayer</td><td class="num">$37.01</td><td class="num">$20.48</td><td class="num">$57.49</td></tr>
<tr><td>Plumber: landscape/irrigation fitter</td><td class="num">$35.30</td><td class="num">$24.10</td><td class="num">$59.40</td></tr>
<tr><td>Operator Group 3: skid steer</td><td class="num">$49.32</td><td class="num">$27.20</td><td class="num">$76.52</td></tr>
<tr><td>Operator Group 4: mini backhoe, boring machine</td><td class="num">$50.81</td><td class="num">$27.20</td><td class="num">$78.01</td></tr>
</tbody></table></div>
<p>Add payroll taxes, workers' comp and liability on top. Certified payroll through LCPtracker Pro.</p>`,
  watch: `<p>2021 rates from this job's decision; rates rise yearly. On a live bid, compare the DIR state rate with the federal decision attached to that job, classification by classification.</p>`,
  src: "U.S. DOL General Decision CA20210001, Mod. 12; Notice to Bidders; Special Provisions 7-1.02K(3)."
},

{ h: "Step 7 · Subcontractors: who did what",
  lead: "Landscape bidders self-performed irrigation and planting and subbed traffic control, K-rail and electrical.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Bidder</th><th>Subcontracted</th><th>Self-performed</th></tr></thead>
<tbody>
<tr><td>ACCU (1st)</td><td>Traffic control, K-rail, boring (54% of conduit item), wood mulch, electric service</td><td>All irrigation, planting, establishment, SWPPP</td></tr>
<tr><td>Diversified Landscape (2nd)</td><td>Traffic control, electric service</td><td>Everything else</td></tr>
<tr><td>Griffith (3rd)</td><td>Traffic control, K-rail, storm water paperwork, electric service</td><td>Irrigation and planting</td></tr>
<tr><td>Blue Pacific (4th)</td><td><strong>Diversified Landscape for all irrigation (items 32–67)</strong></td><td>The rest</td></tr>
<tr><td>Marina Landscape (rejected)</td><td>Lead plan consultant, boring, sweeping, SWPPP, traffic control</td><td>Irrigation and planting</td></tr>
</tbody></table></div>`,
  ex: `<p>Diversified bid twice: as prime (2nd, $3,585 behind) and as Blue Pacific's irrigation sub. Same model for your division: prime landscape-heavy jobs, quote irrigation and planting to GCs on the rest.</p>`,
  deeper: `<p>The subcontractor list asks for name, city, license number, DIR registration, item numbers and percent of each item. For a partial item, give the percent and describe the part, e.g. ACCU's “Item 66, 54%, boring only.” California requires listing every sub doing more than one-half of one percent of the bid.</p>`
},

{ h: "Step 8 · The DBE goal",
  lead: "On federal-aid jobs the DBE package, due after bid day, decides whether your bid counts at all.",
  body: `<ul>
<li><strong>Goal:</strong> 14% to firms certified by the CUCP (California Unified Certification Program) as DBEs (Disadvantaged Business Enterprises).</li>
<li><strong>Due 4:00 PM on day 5 after opening:</strong> DBE Commitment (each DBE, items, dollars); DBE Confirmation signed by each DBE; Good Faith Efforts documentation if short (who, when, quotes, why not chosen); a copy of each DBE quote.</li>
<li>Confirm at bid time each DBE is certified for the work code it will perform.</li>
<li>Start outreach the week you decide to bid: CUCP directory for trucking, traffic control, SWPPP, electrical, mulch and materials; written quotes; a contact log.</li>
</ul>`,
  watch: `<p>The low bid, Marina Landscape at $1,106,287.75 (about $70,000 under the winner), was rated non-responsive: “LATE DBE/DVBE SUBMITTAL.”</p>`,
  src: "Notice to Bidders; Revised Standard Specifications 2-1.12B, 2-1.33B(2)(b); DBE forms OBEO-0006, -0007, -0008."
},

{ h: "Step 9 · The bid book you submit",
  lead: "The winner's bid book ran 37 pages; any missing piece can make a bid non-responsive.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>Contents and rules</th></tr></thead>
<tbody>
<tr><td>Bid to the Department</td><td>Company, license and DIR numbers, addenda acknowledged (“1”), form of bid security, signature affirming every certification</td></tr>
<tr><td>Bid Item List</td><td>Unit price and total for all 70 items; unit price governs a mismatch; a missing price can be non-responsive; don't round</td></tr>
<tr><td>Subcontractor List</td><td>Five subs, items and percents</td></tr>
<tr><td>Price index adjustment opt-out</td><td>Left blank (did not opt out)</td></tr>
<tr><td>Small Business status</td><td>Statistics only</td></tr>
<tr><td>Federal certifications</td><td>Lobbying, equal employment, debarment and suspension</td></tr>
<tr><td>State certifications</td><td>Noncollusion, child support, safety violations, antitrust, bidder responsibility</td></tr>
<tr><td>Bid bond</td><td>Electronic, 10%, national surety, executed about three weeks before bid day</td></tr>
</tbody></table></div>`,
  watch: `<p>The bidder responsibility page: untruthful answers “will result in a finding that the bid is nonresponsive.”</p>`
},

{ h: "The results",
  lead: "The low responsive bid came in 22% under the engineer's estimate; the top three were within 5%.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rank</th><th>Bidder</th><th class="num">Total</th><th class="num">vs. winner</th></tr></thead>
<tbody>
<tr><td>1</td><td>ACCU Construction (awarded)</td><td class="num">$1,176,120.00</td><td class="num">—</td></tr>
<tr><td>2</td><td>Diversified Landscape</td><td class="num">$1,179,705.30</td><td class="num">+0.3%</td></tr>
<tr><td>3</td><td>Griffith Company</td><td class="num">$1,234,875.85</td><td class="num">+5.0%</td></tr>
<tr><td>4</td><td>Blue Pacific Engineering &amp; Construction</td><td class="num">$1,592,126.21</td><td class="num">+35.4%</td></tr>
<tr><td>5</td><td>Mercer-Fraser</td><td class="num">$3,311,895.00</td><td class="num">+181.6%</td></tr>
<tr><td>—</td><td>Marina Landscape (non-responsive, late DBE)</td><td class="num">$1,106,287.75</td><td class="num">−5.9%</td></tr>
<tr><td></td><td>Caltrans engineer's estimate</td><td class="num">$1,516,176.50</td><td class="num">+28.9%</td></tr>
</tbody></table></div>`,
  ex: `<p>The market was far below the estimate. Bid your cost, not the estimate.</p>`
},

{ h: "What the line items teach",
  lead: "Close totals, very different paths.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">ACCU (won)</th><th class="num">Diversified</th><th class="num">Griffith</th><th class="num">Blue Pacific</th><th class="num">Mercer-Fraser</th><th class="num">Marina (NR)</th></tr></thead>
<tbody>
<tr><td>Mobilization (LS)</td><td class="num">$20,000</td><td class="num">$99,100</td><td class="num">$58,000</td><td class="num">$120,000</td><td class="num">$330,000</td><td class="num">$80,000</td></tr>
<tr><td>Time-related overhead ($/day × 120)</td><td class="num">$600</td><td class="num">$520</td><td class="num">$570</td><td class="num">$600</td><td class="num">$1,500</td><td class="num">$250</td></tr>
<tr><td>Iceplant cuttings ($ ea × 61,975)</td><td class="num">$0.80</td><td class="num">$0.48</td><td class="num">$0.90</td><td class="num">$0.80</td><td class="num">$6.00</td><td class="num">$0.65</td></tr>
<tr><td>4" Class 315 main ($/LF × 7,493)</td><td class="num">$12.00</td><td class="num">$13.70</td><td class="num">$16.00</td><td class="num">$20.63</td><td class="num">$35.00</td><td class="num">$22.00</td></tr>
<tr><td>Conduit under ramps ($/LF × 290)</td><td class="num">$400</td><td class="num">$350</td><td class="num">$315</td><td class="num">$537.50</td><td class="num">$150</td><td class="num">$400</td></tr>
<tr><td>Plant establishment (LS)</td><td class="num">$35,000</td><td class="num">$48,100</td><td class="num">$50,000</td><td class="num">$30,000</td><td class="num">$300,000</td><td class="num">$10,000</td></tr>
</tbody></table></div>
<ul>
<li><strong>Big quantities multiply small errors:</strong> $6.00 vs $0.80 per cutting = $5.20 × 61,975 ≈ $322,000 on one item.</li>
<li><strong>Money moves between items:</strong> the winner carried almost nothing in mobilization and more in items like conduit (unbalanced bidding).</li>
<li><strong>Benchmark the median</strong> of the six, not any single price.</li>
</ul>`,
  src: "Caltrans Bid Summary, contract 11-428704 (verified: every bidder's items add up to its printed total)."
},

{ h: "After the bid",
  lead: "The post-bid deadlines decided this job as much as the prices did.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Date</th><th>Event</th></tr></thead>
<tbody>
<tr><td>Sept 8, 2:00 PM</td><td>Bids opened by webcast; preliminary results posted</td></tr>
<tr><td><strong>Sept 13, 4:00 PM</strong></td><td><strong>DBE package due (day 5).</strong> Marina missed it.</td></tr>
<tr><td>Within 10 days</td><td>Copies of bid and subcontractor list showing DIR registration numbers</td></tr>
<tr><td>Oct 1, 2021</td><td>Awarded to ACCU; protests must come before award</td></tr>
<tr><td>Oct 19, 2021</td><td>Contract approved; bonds and insurance in place</td></tr>
<tr><td>Within 55 days</td><td>Start job site work once schedule, SWPPP and closure plan are authorized; 72 hours' notice</td></tr>
<tr><td>Then</td><td>120 working days of construction, 250 of establishment, acceptance, warranty</td></tr>
</tbody></table></div>`,
  deeper: `<p>Caltrans holds no retention from progress payments but can withhold payment in months when required submittals are late. Stored materials are paid before installation only above $50,000 ($25,000 for certified small businesses). Insurance for a $1M–$10M bid includes a $10M umbrella. Contracts after award: <a href="#m16-1">Module 16</a>.</p>`,
  src: "Special Provisions 8-1.04C; Revised Standard Specifications 7-1.06, 9-1.16; Caltrans award record."
},

{ t: "terms", h: "Words to know",
  lead: "Caltrans terms from this job. Full list: <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Notice to Bidders", "Opening pages of the spec book: job summary and bid rules."],
    ["Bid Item List", "Numbered items, units and quantities you price."],
    ["Special Provisions (SP)", "Job-only rules, written as changes to the Standard Specifications."],
    ["Standard Specifications", "Caltrans's base rule book (2018 edition here)."],
    ["Revised Standard Plans (RSP)", "Updated standard details bound into the plans."],
    ["(F) final pay item", "Paid at the bid quantity, not the measured quantity, unless the Engineer changes the work."],
    ["(N) no separate payment", "Work shown on the plans whose cost goes into other items."],
    ["Working day", "A day work can be done, counted toward contract time."],
    ["Type 1 plant establishment", "Caltrans establishment period with set work and duration (250 working days here)."],
    ["Bid Express", "The site where Caltrans bids are submitted electronically."],
    ["Bidder inquiry", "A question to Caltrans during bidding, answered publicly."],
    ["DBE", "Disadvantaged Business Enterprise, certified by the CUCP."],
    ["Good faith efforts", "Documented attempts to meet the DBE goal when short."],
    ["Non-responsive", "A bid rejected for not following the bid rules."],
    ["LCS", "Lane Closure System for requesting and reporting closures."],
    ["TCT", "Traffic control technician, required on every closure."],
    ["QSD / QSP", "Qualified SWPPP developer / practitioner."],
    ["ADL", "Aerially deposited lead in freeway soils."],
    ["COZEEP", "CHP officers for traffic breaks, billed to the contractor."],
    ["Unbalanced bid", "Shifting money between items while keeping the total."],
    ["Bid Summary", "Caltrans's post-bid report with every bidder's prices."]
  ]
},

{ t: "quiz", id: "m15", h: "Check yourself",
  lead: "Every answer comes from the real job.",
  qs: [
    { q: "Your bid total is $1,176,120. What is the minimum bid bond?", a: ["$58,806 (5%)", "$117,612 (10%)", "$1,176,120 (100%)"], c: 1, why: "The Notice requires bidder's security of at least 10% of the bid." },
    { q: "Bids opened Wednesday, Sept 8, 2021. When was the DBE package due?", a: ["With the bid, 2:00 PM Sept 8", "4:00 PM Monday, Sept 13 (day 5)", "Within 10 days, Sept 18"], c: 1, why: "DBE forms are due by 4 PM on the 5th day after opening. The 10-day deadline is for the DIR-number copies." },
    { q: "IQ-1 totals 172 tree well assemblies; item 51 (not final pay) says 180. Best response?", a: ["Bid 172, since the plans govern", "Price 180 at your unit price; it fits the job's rounding pattern and you're paid for units installed", "Refuse to bid until Caltrans issues an addendum"], c: 1, why: "Caltrans rounded measured items up slightly on this job (197 → 200, 282 → 290). Item 51 is paid by units installed, so the risk is small." },
    { q: "Item 63 (4\" main) is marked (F) at 7,493 LF. You install 7,300 LF and the Engineer changed nothing. You're paid for:", a: ["7,300 LF", "7,493 LF", "The average of the two"], c: 1, why: "Final-pay items are paid at the bid quantity unless the Engineer changes the work." },
    { q: "Addendum 1 changed item 38 (2\" remote control valve) from 4 to 3. What goes on your Bid Item List?", a: ["4, the original quantity", "3, and acknowledge Addendum 1 on the bid form", "Leave the item blank"], c: 1, why: "Bid the changed quantities and list the addendum; a blank price or unacknowledged addendum can make the bid non-responsive." },
    { q: "Where do you find liquidated damages per day for this job?", a: ["This job's Special Provisions", "2018 Standard Specifications, section 8-1.10", "The title sheet"], c: 1, why: "The job's book lists only changes; base rules like liquidated damages are in the Standard Specifications." },
    { q: "Thrust blocks and warning tape are marked “(N)”. How do you price them?", a: ["Leave them out; they're not paid", "Carry their cost in the pipe items they belong to", "Bill them later as extra work"], c: 1, why: "(N) means no separate payment, not free." },
    { q: "Calsense quoted '97C' at $9,034.35. If you bid it at $14,500 installed, roughly how much covers tax, delivery, pad, install, wiring and markup?", a: ["About $3,500", "About $5,470", "About $9,000"], c: 1, why: "$14,500 − $9,034.35 = $5,465.65." },
    { q: "Mercer-Fraser bid $6.00 per cutting vs the winner's $0.80 on 61,975 cuttings. What did that one item add?", a: ["About $32,000", "About $322,000", "About $3.2 million"], c: 1, why: "$5.20 × 61,975 = $322,270." },
    { q: "Plant establishment bids ranged $10,000 to $300,000; the middle four were $30,000–$50,000. Your number is $140,000. Next step?", a: ["Submit it; lump sums vary", "Reread section 20-4 and the Standard Specifications to find what you or they misread", "Average the others and use that"], c: 1, why: "A large spread on a lump sum means different readings of scope or duration. Find the difference before you bid." }
  ]
},

{ t: "practice", id: "m15", h: "Practice: bid this job yourself",
  lead: "Real estimating on real documents from the Real Bid Lab.",
  items: [
    { h: "Go/no-go from the Notice", hrs: 0.5, d: "<p>From <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>, download the plans, Special Provisions and Addendum 1, plus 2018 Standard Specifications section 20. Score the job on the <a href=\"#m3-1\">Module 3</a> scorecard for your company and list the bonds, insurance and DBE plan you'd need.</p>" },
    { h: "Mark up the scope on the plans", hrs: 1, d: "<p>On ISS-1, IP-1 to IP-7, PL-1 and PP-1 to PP-7, mark the connection point, new main, each controller, the conduits and tree locations. List what you don't understand.</p>" },
    { h: "Check five quantities", hrs: 0.75, d: "<p>Trace items 63 (4\" main), 25 (cuttings), 27 (1-gallon), 51 (tree wells) and 31 (wood mulch) to the quantity sheets. Write a bidder inquiry, as you'd send it, for any gap outside the rounding pattern.</p>" },
    { h: "Price the hidden costs", hrs: 0.75, d: "<p>From the Special Provisions, list every cost not on a plan sheet (closure hours, traffic, lead, monitors, submittals, trash pickup) with a dollar or crew-day figure.</p>" },
    { h: "Crew rate at prevailing wage", hrs: 0.25, d: "<p>Build an hourly cost for a 4-person irrigation crew with a foreman and a mini backhoe from the wage table, plus payroll taxes, workers' comp and insurance.</p>" },
    { h: "Price the landscape scope in the lab", hrs: 1.5, d: "<p>In the Real Bid Lab, choose “Landscape sub scope” and price every planting, irrigation and erosion item. Use the Calsense quotes. Don't look at the results.</p>" },
    { h: "Reveal and write your lessons", hrs: 0.75, d: "<p>Reveal the real bids. For your five biggest differences from the median, write why you were off and what you'd change. Bring it to the next bid review.</p>" }
  ]
},

{ h: "Module 15 summary",
  lead: "A real public bid, from advertisement to award.",
  body: `<ul>
<li>A Caltrans package has layers: Notice, Bid Item List, Special Provisions, Standard Specifications, plans, addenda, wage rates, forms. Read all of them.</li>
<li>Trace quantities to the plan tables; check (F) items hardest; ask before bid day when a gap exceeds the rounding pattern.</li>
<li>Bid every addendum's quantities (items 7, 25, 38 here) and acknowledge it.</li>
<li>Freeway landscape hidden costs: closure hours, traffic control, environmental rules, submittals, a year of establishment.</li>
<li>Use prices the specs hand you (Calsense quotes).</li>
<li>Paperwork decides winners: the low bid lost over a late DBE package.</li>
<li>Benchmark against the median of the Bid Summary, not just the winner.</li>
</ul>
<p><strong>Next:</strong> price the other real jobs in the <a href="#lab">Real Bid Lab</a>, starting with Carmel Valley.</p>`
}
]
});
