(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 13, hours: 9, title: "Writing the Proposal",
slides: [

{ t: "cover",
  h: "Writing the Proposal",
  lead: "Your price only counts if the GC (general contractor) understands exactly what it buys. This module shows how to write a landscape and irrigation proposal that is clear, fair to you, and easy for a GC to compare and carry.",
  objectives: [
    "Name every part of a sub proposal to a GC and what goes in it",
    "Write scope by line item, step by step, that matches the plans and the GC's breakdown",
    "Pick exclusions and clarifications from a library, without over-excluding",
    "Price alternates and add/deduct unit prices, showing every line of math",
    "Write schedule, phasing, plant establishment and warranty language",
    "Answer a GC scope sheet, revise a proposal after an addendum, and quote a public prime by bid item",
    "Check every proposal with a review checklist before it goes out, including anything AI drafted"
  ],
  time: [["Reading and slides", "4 h"], ["Practice assignments", "5 h"], ["Module total", "9 h"]],
  body: `<p>Module 10 gave you the number. This module is about the words around it. On bid day, the words decide whether your number gets used.</p>
<p>You'll see two full sample proposals: one to a GC on a made-up private medical office job, and one to a prime contractor on the real Caltrans SR-905 landscaping job (contract 11-431064), quoted by bid item.</p>`
},

{ h: "What a proposal is, and why the words matter",
  lead: "Your proposal (also called a quote, bid or scope letter) is your written offer to the GC (general contractor). If it's accepted, its words become part of your subcontract.",
  body: `<ul>
<li>The GC uses your proposal to build its own bid to the owner, often in the last hour before the deadline.</li>
<li>The GC compares your proposal to other landscape subs line by line. Anything unclear gets a “plug” (a guess) added to your number.</li>
<li>After award, the subcontract usually lists your proposal or its scope. What you included and excluded is what you'll be held to.</li>
<li>A good proposal answers the GC's questions before they're asked: what plans, what's in, what's out, how long, how much for changes.</li>
</ul>`,
  ex: `<p>Two subs bid $140,000. One proposal says “Landscape and irrigation per plans.” The other lists seven line items, references sheets L-1.0 to L-6.0 and Addenda 1–2, and states that the backflow preventer is by the plumber. The GC can carry the second one with confidence. The first one gets a plug.</p>`,
  watch: `<p>“Per plans and specs” (specifications) with no plan dates is a blank check. If the plans change after you bid, you have no record of what you priced.</p>`
},

{ h: "Which document are you writing?",
  lead: "The same company writes four kinds of offers. Know which one you're writing before you open the template.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>What you send</th><th>Can you add exclusions?</th></tr></thead>
<tbody>
<tr><td>Private job, you're a sub to a GC (general contractor)</td><td>Your proposal on letterhead, plus the GC's bid form or scope sheet if they sent one</td><td>Yes, short and specific</td></tr>
<tr><td>Public job, you're a sub quoting a prime contractor</td><td>A quote organized by the agency's bid item numbers, plus your listing information</td><td>Almost none. The prime can't carry them into its bid.</td></tr>
<tr><td>Public job, you're the prime</td><td>The agency's bid forms, filled in exactly (Module 14)</td><td>No. Conditions can make the bid non-responsive.</td></tr>
<tr><td>Private job, you're hired directly by the owner (HOA, property manager)</td><td>A proposal that becomes the contract, so add payment, change and warranty terms</td><td>Yes</td></tr>
</tbody></table></div>`,
  ex: `<p>The same Tuesday, you might send a proposal to three GCs on a private medical office job, and a bid-item quote to two primes on a Caltrans freeway job. Different documents, same estimate behind them.</p>`
},

{ h: "Before you write · gather these first",
  lead: "A proposal is only as good as the papers on your desk when you write it. Pull these together before you type a word.",
  body: `<ol class="steps">
<li><div><b>Your recap sheet</b>The final priced estimate from Module 10, with every line item, alternate and unit price.</div></li>
<li><div><b>The plan and spec log</b>Sheet numbers, dates and revisions; spec (specification) sections and dates.</div></li>
<li class="hl"><div><b>The addenda log</b>Every addendum by number and date (Module 12). Check the portal again right now.</div></li>
<li><div><b>The GC's invitation, bid form and scope sheet</b>Their line items, alternates and any “no qualified bids” rule.</div></li>
<li><div><b>RFI log</b>Each RFI (request for information) you sent, and whether it was answered.</div></li>
<li><div><b>Supplier and sub quotes</b>With their own exclusions and how long their prices are good.</div></li>
<li><div><b>Job walk notes and photos</b>Site conditions you priced: access, slopes, existing plants, water and power.</div></li>
</ol>`,
  watch: `<p>If you can't find one of these, stop and get it. Writing from memory is how a $9,000 item ends up neither included nor excluded.</p>`
},

{ h: "The parts of a proposal",
  lead: "Every proposal has the same parts in the same order. Use one template so nothing gets left out.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>What goes in it</th></tr></thead>
<tbody>
<tr><td><strong>Header</strong></td><td>Your company, address, CSLB (Contractors State License Board) license # and classes, DIR (Department of Industrial Relations) registration # on public work, contact, date, proposal #</td></tr>
<tr><td><strong>To / project</strong></td><td>GC name and estimator, project name and address, bid date</td></tr>
<tr><td><strong>Documents</strong></td><td>Plan sheets and dates, spec sections and dates, every addendum by number and date</td></tr>
<tr><td><strong>Scope by line item</strong></td><td>Each type of work with a short description and a price</td></tr>
<tr><td><strong>Base bid total</strong></td><td>The sum, in numbers (and words if you like)</td></tr>
<tr><td><strong>Inclusions</strong></td><td>Items you're providing that a GC might wonder about</td></tr>
<tr><td><strong>Exclusions</strong></td><td>Work near your scope that you are not providing</td></tr>
<tr><td><strong>Clarifications / assumptions</strong></td><td>How you read unclear items, and conditions your price depends on</td></tr>
<tr><td><strong>Alternates</strong></td><td>Each priced separately, add or deduct</td></tr>
<tr><td><strong>Unit prices</strong></td><td>Add and deduct prices for common changes</td></tr>
<tr><td><strong>Schedule</strong></td><td>Duration, crew size, sequence, lead times</td></tr>
<tr><td><strong>Establishment / maintenance</strong></td><td>Length, what's done, when it starts</td></tr>
<tr><td><strong>Warranty</strong></td><td>Plant and workmanship guarantee periods and conditions</td></tr>
<tr><td><strong>Terms</strong></td><td>Validity period, payment terms, insurance and bond notes</td></tr>
<tr><td><strong>Signature</strong></td><td>Name, title, signature, date; a line for the GC to accept</td></tr>
</tbody></table></div>`,
  deeper: `<p>The company already has a bid template; the <a href="https://claude.ai/artifact/Lya5kQRNBTrDcNgc7xeumK" target="_blank" rel="noopener">How to Make a Bid</a> process (Step 9) says to fill in every section and mark “N/A” (not applicable) on sections that don't apply instead of deleting them. That way a missing section is always a mistake you can see.</p>`
},

{ h: "Header and document references",
  lead: "List exactly which documents you priced. This one paragraph protects you more than any other part of the proposal.",
  body: `<ul>
<li><strong>Plans:</strong> sheet numbers and the date or revision on each set. Example: “Landscape sheets L-1.0 through L-6.0, 100% CD (construction documents) set dated 06/12/2026.”</li>
<li><strong>Specifications:</strong> the sections you priced and their dates. Example: “Sections 32 80 00 Irrigation, 32 91 13 Soil Preparation, 32 93 00 Plants, dated 06/12/2026.” (These are CSI MasterFormat numbers, the standard way specs are numbered; see Module 5.)</li>
<li><strong>Addenda:</strong> every one, by number and date. If an addendum doesn't affect you, list it anyway so the GC (general contractor) knows you saw it.</li>
<li><strong>Other documents:</strong> geotech (soils engineering) report, agronomic soil report, GC scope sheet, job walk notes.</li>
<li><strong>Your credentials:</strong> CSLB license number and class (C-27 Landscaping), DIR (Department of Industrial Relations) registration number on public work.</li>
</ul>`,
  watch: `<p>Check the GC's portal for addenda right before you send. A proposal that lists Addenda 1–2 when Addendum 3 changed the planting plan is a proposal for the wrong job.</p>`
},

{ h: "Scope by line item",
  lead: "Break the price into the pieces a GC (general contractor) needs: by type of work, matched to the plans, and matched to the GC's own breakdown when they give one.",
  body: `<ul>
<li>Group by CSI (Construction Specifications Institute) section or type of work: irrigation (32 80 00 / 32 84 00), soil preparation (32 91 13), turf (32 92 00), plants (32 93 00), mulch, DG (decomposed granite) and boulders, establishment.</li>
<li>For each line: what it is, key quantities and sizes, the sheet or spec reference, and a price.</li>
<li>Use the GC's breakdown if they send a scope sheet or bid form (later slides). If they split “irrigation sleeves” out, price sleeves separately.</li>
<li>Give quantities where it helps the GC check you: “(18) trees: (14) 24" box, (4) 36" box.” The number in parentheses is a count.</li>
<li>Keep descriptions short. One to four lines per item.</li>
</ul>`,
  exLabel: "Good vs. weak line items",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Weak</th><th>Clear</th></tr></thead>
<tbody>
<tr><td>Irrigation per plans</td><td>Irrigation system per L-3.0 to L-3.2 and 32 84 00, from the downstream side of the backflow preventer: smart controller, flow sensor, master valve, (14) remote control valves, drip and spray zones, mainline, laterals, wire and testing</td></tr>
<tr><td>Trees</td><td>(18) trees per L-4.0: (14) 24" box, (4) 36" box, with staking per detail 4/L-5.0 and root barrier where within 5' of paving</td></tr>
<tr><td>Maintenance</td><td>90-day maintenance and plant establishment after planting is accepted: weekly visits, watering schedule, weeding, replacement of failed plants</td></tr>
</tbody></table></div>`
},

{ h: "Writing one line item, step by step",
  lead: "Every good line item answers five questions in the same order. Write them in this order and you won't forget one.",
  body: `<ol class="steps">
<li><div><b>1. What is it?</b>Name the work the way the plans and specs (specifications) name it: “Shrubs and groundcover,” “Drip irrigation,” “Stabilized DG (decomposed granite).”</div></li>
<li><div><b>2. Where is it shown?</b>Sheet numbers and spec section: “per L-4.0, L-4.1 and 32 93 00.”</div></li>
<li class="hl"><div><b>3. How much and what size?</b>The counts and sizes you priced: “(420) #5, (1,210) #1.” #5 and #1 are nursery container sizes (5-gallon and 1-gallon class).</div></li>
<li><div><b>4. Where does it start and stop?</b>The edge of your work: “from the downstream side of the backflow,” “to the back of curb,” “3" depth.”</div></li>
<li><div><b>5. What's in it that a GC might doubt?</b>The one or two items most often argued about: staking, root barrier, testing, as-builts (drawings of what was actually installed).</div></li>
</ol>`,
  exLabel: "Building one line, step by step",
  ex: `<p>1. Mulch → 2. Mulch, per L-4.0 and 32 93 00 → 3. Mulch, per L-4.0 and 32 93 00, 3" shredded bark, about 15,600 SF (square feet) → 4. …in all shrub and groundcover areas, excluding DG areas and tree wells in paving → 5. …includes weed fabric where shown on detail 6/L-5.0.</p>
<p><strong>Final:</strong> “Mulch per L-4.0 and 32 93 00: 3" shredded bark in all shrub and groundcover areas, about 15,600 SF, excluding DG areas and tree wells in paving; weed fabric where shown on 6/L-5.0.”</p>`,
  watch: `<p>Don't write a quantity you didn't count. If the 15,600 SF is the landscape architect's number and you measured 15,200 SF, write the number you priced and say where it came from.</p>`
},

{ h: "More good and weak line items",
  lead: "Weak lines leave the GC (general contractor) guessing. Clear lines say what, where, how much and where it stops.",
  exLabel: "Good vs. weak line items, part 2",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Weak</th><th>Clear</th></tr></thead>
<tbody>
<tr><td>Soil prep</td><td>Soil preparation per 32 91 13: (1) agronomic soil test, amendments per the lab report up to the rates in 32 91 13 2.3, rototill to 6" depth, fine grade to ±0.1 ft (plus or minus one-tenth of a foot)</td></tr>
<tr><td>Drip</td><td>Drip irrigation per L-3.1: (6) drip zones, each with a control valve, filter and pressure regulator kit; inline drip tubing at 18" spacing; flush valves and air relief valves per detail 3/L-3.3</td></tr>
<tr><td>Sleeves</td><td>Irrigation sleeves under paving per L-3.0: Sch 40 (Schedule 40, a pipe wall thickness) PVC, sizes shown, furnished and installed before paving; GC to give 5 working days' notice before paving</td></tr>
<tr><td>DG</td><td>Stabilized DG paving per L-2.0 and detail 2/L-5.1: 3,200 SF, 3" compacted depth over compacted subgrade, with 1/4" x 4" steel header at all edges</td></tr>
<tr><td>Boulders</td><td>(22) boulders, 2–3 ton, set 1/3 below grade, locations per L-2.0, final placement field-adjusted with the landscape architect</td></tr>
<tr><td>Clean up</td><td>Daily cleanup of our debris; final cleanup of planting areas at completion; haul-off of our green waste and packaging</td></tr>
</tbody></table></div>`,
  watch: `<p>Every detail number you cite must exist. Open the sheet and check “2/L-5.1” really is the DG detail before you send.</p>`
},

{ h: "Words that promise too much",
  lead: "Some words sound professional but quietly promise more than you priced. Replace them with words that say exactly what you'll do.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Risky word or phrase</th><th>Why it's risky</th><th>Safer wording</th></tr></thead>
<tbody>
<tr><td>“Complete landscape system”</td><td>Complete can include the backflow, power and sleeves you excluded</td><td>“Landscape and irrigation as listed in items 1–7”</td></tr>
<tr><td>“All work shown”</td><td>Pulls in work on civil and electrical sheets that touch landscape</td><td>“Work shown on L-1.0 to L-6.0”</td></tr>
<tr><td>“Per plans and specs”</td><td>Which plans? Which date? Every section?</td><td>“Per the documents listed above”</td></tr>
<tr><td>“Turnkey”</td><td>Means ready to use, including permits, water and power</td><td>Don't use it</td></tr>
<tr><td>“As required”</td><td>Required by whom? The inspector can require a lot</td><td>Give the count or depth you priced</td></tr>
<tr><td>“Fully functional” or “guaranteed”</td><td>Makes you responsible for parts others install</td><td>“Tested and operating from the point of connection to the last head”</td></tr>
<tr><td>“Unlimited” or “as needed” visits</td><td>No limit on your cost</td><td>“Weekly visits for 90 days”</td></tr>
</tbody></table></div>`,
  ex: `<p>A GC (general contractor) on a made-up job holds a sub to “complete irrigation system” when the meter turns out to be 400 feet from the planting. The sub's own word “complete” makes the extra pipe arguable. “From the point of connection stubbed 5 feet inside the property line” would have ended the argument.</p>`
},

{ h: "Inclusions",
  lead: "Inclusions answer the questions a GC (general contractor) will ask while leveling. Use them for the items most likely to be missed or argued about.",
  body: `<ul>
<li>POC (point of connection): where your irrigation starts (downstream of the backflow, from the meter, from a stub-out)</li>
<li>Controller: furnish and install, mounting, and who connects power</li>
<li>Soil testing: number of tests included and what happens after the report</li>
<li>Fine grading: tolerance you'll deliver, once rough grade is handed to you</li>
<li>Establishment or maintenance period and what's in it</li>
<li>Submittals, as-builts, controller charts, O&amp;M (operation and maintenance) manuals</li>
<li>Mobilizations: how many trips to set up on site are in the price</li>
<li>Prevailing wage and certified payroll, when the job requires it (Module 11)</li>
</ul>`,
  ex: `<p>“Includes (2) mobilizations: one for irrigation and planting, one for punch list. Additional mobilizations requested by the GC: $850 each.” A GC planning a phased job now knows what phases will cost.</p>`
},

{ h: "Exclusions: clear, not over-excluded",
  lead: "An exclusion tells the GC (general contractor) what someone else must provide. A good one names a real item near your scope. A bad one excludes things you're supposed to do.",
  body: `<div class="twocol">
<div><h3>Clear exclusions</h3><ul>
<li>Name a specific item: “Backflow preventer and enclosure (by plumbing).”</li>
<li>Point to who usually does it: “by electrical,” “by GC,” “by owner.”</li>
<li>Cover items the plans leave open, so the GC can assign them.</li>
<li>Match the GC's scope sheet; if the sheet gives an item to landscape, either include it or call it out clearly.</li>
</ul></div>
<div><h3>Over-excluding</h3><ul>
<li>Excluding work shown on the landscape plans (“tree staking excluded”)</li>
<li>Vague catch-alls: “anything not specifically listed”</li>
<li>Pages of boilerplate a GC won't read</li>
<li>Excluding risk you should price, like normal soil conditions</li>
</ul></div>
</div>`,
  watch: `<p>Every exclusion is a plug the GC adds to your number when leveling. Exclude ten items with $1,500 plugs each, and your “low” $140,000 becomes $155,000 on their spreadsheet. Exclude what truly belongs to others, and price the rest.</p>`,
  deeper: `<p>Exclusions only work if they don't conflict with what the GC's bid form or the specs require. The How to Make a Bid process (Step 5) says to check this before pricing. If the GC's bid instructions say “no qualified bids” (no exclusions or conditions allowed), call the estimator and ask how to handle items you can't include.</p>`
},

{ h: "A starting list of exclusions and clarifications",
  lead: "Start every proposal from this list, then delete what doesn't apply and adjust the wording to the job. The next four slides explain when to use each one.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Typical wording (adjust to the job)</th></tr></thead>
<tbody>
<tr><td>Permits and fees</td><td>Building, grading, encroachment and plan check permits and fees by others</td></tr>
<tr><td>Water meter and connection</td><td>Water meter, meter fees, capacity and connection fees by owner/GC; irrigation starts at the POC (point of connection) stated above</td></tr>
<tr><td>Backflow preventer</td><td>Backflow preventer and enclosure by plumbing, unless listed in scope</td></tr>
<tr><td>Power to controllers</td><td>120V power, conduit and final electrical connection to the controller by electrical</td></tr>
<tr><td>Sleeves</td><td>Sleeves under hardscape by others; we provide a sleeve layout and will inspect before paving</td></tr>
<tr><td>Rough grading</td><td>Rough grade delivered to ±0.1 ft of finish grade, less soil and mulch depth, by others</td></tr>
<tr><td>Soil import/export</td><td>Import or export of soil excluded unless listed; amendments per the soil report included up to the rates in the spec</td></tr>
<tr><td>Rock and debris</td><td>Removal of rock, concrete, asphalt or construction debris from planting areas excluded</td></tr>
<tr><td>Hazardous materials</td><td>Testing, handling and disposal of contaminated or hazardous soils excluded</td></tr>
<tr><td>Work hours</td><td>Night, weekend and overtime work excluded unless required by the documents listed</td></tr>
<tr><td>Traffic control</td><td>Traffic control, flaggers and lane closures excluded</td></tr>
<tr><td>Bonds</td><td>Performance and payment bonds excluded; available at an added cost of [x]% if requested</td></tr>
<tr><td>Prevailing wage</td><td>Price based on non-prevailing wage unless stated; prevailing wage priced on request</td></tr>
<tr><td>Damage by others</td><td>Repair of work damaged by other trades or the public after our installation excluded</td></tr>
<tr><td>Water</td><td>Water for establishment and maintenance supplied by owner through the permanent meter</td></tr>
<tr><td>Storm water</td><td>SWPPP (storm water pollution prevention plan) preparation and BMPs (best management practices, like fiber rolls and inlet protection) by GC, except protection of our own stockpiles</td></tr>
<tr><td>Testing</td><td>Third-party testing and inspection fees by others, except soil tests listed above</td></tr>
</tbody></table></div>`,
  watch: `<p>Read the job's documents before keeping a line. If the specs put the backflow preventer in the irrigation section, excluding it makes you incomplete. Either include it or call the GC (general contractor) and ask.</p>`
},

{ h: "Exclusions library · site, grading and access",
  lead: "Use these when the plans or the GC's scope sheet give the work to another trade, or leave it unassigned. Don't use them to dodge work drawn on your sheets.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Exclusion</th><th>Use it when</th><th>Don't use it when</th></tr></thead>
<tbody>
<tr><td>Rough grading by others</td><td>Grading is on the civil (C-) sheets and the grading sub owns it</td><td>The landscape plans show only fine grading and you're the only earth-moving trade</td></tr>
<tr><td>Import/export of soil</td><td>Quantities aren't shown and the soil report isn't out</td><td>The plans show a topsoil import quantity on your sheets; price it</td></tr>
<tr><td>Rock, concrete and debris removal</td><td>Planting areas are on a site with old foundations or fill</td><td>Normal rock you'd expect from the soil report; price it</td></tr>
<tr><td>Demolition and clearing</td><td>Demo is on separate demo sheets for the GC or a demo sub</td><td>Removal of existing plants or irrigation shown on your L- sheets</td></tr>
<tr><td>Traffic control</td><td>Street-side work where the GC runs traffic control for everyone</td><td>You're the prime, or your work is the only work in the street</td></tr>
<tr><td>SWPPP and BMPs</td><td>The GC holds the storm water permit for the site</td><td>The spec puts erosion control (fiber rolls, hydroseed) in your section</td></tr>
</tbody></table></div>`,
  ex: `<p>Many landscape subs get handed nearby scopes like demo, grading, drainage and hardscape. Module 18 covers how to price or exclude them: <a href="#m18-1">Module 18</a>.</p>`
},

{ h: "Exclusions library · water, irrigation and power",
  lead: "Most landscape disputes happen where your irrigation meets another trade's work. Say exactly where you start and stop.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Exclusion</th><th>Use it when</th><th>Watch for</th></tr></thead>
<tbody>
<tr><td>Water meter, fees and service line</td><td>Almost always: the owner pays the water agency (for example, City of San Diego, Otay or Sweetwater) and the plumber or civil sub runs the service</td><td>Caltrans jobs where meter charges are a bid item (11-431064 item 67 Water Meter Charges); the prime carries those</td></tr>
<tr><td>Backflow preventer and enclosure</td><td>The plumbing or civil sheets show it</td><td>If the irrigation spec section lists it, include it or call</td></tr>
<tr><td>120V power to the controller</td><td>The electrical sheets show the circuit</td><td>Say who makes the final connection at the controller</td></tr>
<tr><td>Sleeves under paving</td><td>The GC's concrete sub installs sleeves</td><td>Offer a sleeve layout and an inspection before paving</td></tr>
<tr><td>Recycled water signs and tags</td><td>Never exclude if the job uses recycled (purple pipe) water and your spec lists them</td><td>Local water agency rules decide the signs</td></tr>
<tr><td>Irrigation water during establishment</td><td>The owner's meter is live and the owner pays the water bill</td><td>Caltrans item 68 Irrigation Water Service Charges on 11-431064 shows it can be a real cost</td></tr>
</tbody></table></div>`,
  watch: `<p>Write the POC (point of connection) in plain words in your scope line, not only in the exclusions: “Irrigation starts at the 2" stub-out downstream of the backflow preventer.”</p>`,
  src: "Caltrans contract 11-431064 Bid Item List, items 67 and 68."
},

{ h: "Exclusions library · planting, soil and maintenance",
  lead: "Planting exclusions protect you from things you can't control: missing water, other trades and the weather.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Exclusion or condition</th><th>Use it when</th><th>Example wording</th></tr></thead>
<tbody>
<tr><td>Damage by others</td><td>Always on active job sites</td><td>“Repair of plants or irrigation damaged by others after installation is extra work.”</td></tr>
<tr><td>Loss of water or power</td><td>The owner or GC controls the meter or power</td><td>“Warranty void for plant loss caused by water or power interruptions not under our control.”</td></tr>
<tr><td>Soil amendments beyond spec rates</td><td>The soil test isn't done yet</td><td>“Amendments included up to the rates in 32 91 13; added amendments by unit price.”</td></tr>
<tr><td>Maintenance beyond the stated period</td><td>The GC may delay acceptance</td><td>“Maintenance beyond 90 days caused by others' delays at $1,250 per month.”</td></tr>
<tr><td>Vandalism and theft</td><td>Public sites, parks, medians</td><td>“Replacement of stolen or vandalized material is extra work.”</td></tr>
<tr><td>Existing plants to remain</td><td>The plans don't say who protects them</td><td>“Tree protection fencing by GC; we protect plants within our work areas.”</td></tr>
</tbody></table></div>`,
  watch: `<p>Don't exclude what the spec puts on you. If the spec says the contractor replaces dead plants during establishment, that's your cost. Price it (Module 10), then state the period.</p>`
},

{ h: "Exclusions library · paperwork, insurance, bonds and general conditions",
  lead: "These items cost money but don't show on the plans. Decide each one on purpose.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Usual choice</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Permits and plan check fees</td><td>Exclude</td><td>The owner or GC pulls permits for the whole project</td></tr>
<tr><td>Performance and payment bonds</td><td>Exclude, give the added percent</td><td>A sub bond is only required if the GC asked for it in the invitation (PCC 4108)</td></tr>
<tr><td>Special insurance (higher limits, wrap-up programs)</td><td>Note what you carry; price anything extra on request</td><td>You can't price what you haven't seen</td></tr>
<tr><td>Prevailing wage and certified payroll</td><td>Include on public work; state it either way</td><td>A private-wage price on a public job is a missing cost</td></tr>
<tr><td>Testing and inspection fees</td><td>Exclude third-party testing except your soil test</td><td>The owner normally hires the testing lab</td></tr>
<tr><td>General conditions (dumpsters, toilets, fencing, field office)</td><td>Exclude unless the GC's scope sheet assigns them</td><td>GCs usually provide them for all trades</td></tr>
<tr><td>Liquidated damages</td><td>Clarify: only for delays you cause</td><td>LDs (liquidated damages) are a set dollar amount per day late; Module 16</td></tr>
</tbody></table></div>`,
  deeper: `<p>Public Contract Code (PCC) section 4108: a sub bidding to a prime on a public job must be ready to give performance and payment bonds if the prime asks, but the prime may require them only if its written or published request for sub bids clearly states the amount and requirements, and who pays for them. If the request didn't say, the prime can't impose the bond later under that section.</p>`,
  src: "Cal. Public Contract Code § 4108 (via california.public.law, verified Oct. 2026)."
},

{ h: "Call first, or exclude?",
  lead: "Some items are too big to exclude quietly. A two-minute call to the GC (general contractor) estimator beats a $15,000 plug.",
  body: `<ol class="steps">
<li><div><b>Is it drawn or specified in your section?</b>Yes → include it. If you truly can't, call before you exclude.</div></li>
<li><div><b>Does the GC's scope sheet give it to landscape?</b>Yes → include it, or call and ask to move it. Don't bury it in exclusions.</div></li>
<li class="hl"><div><b>Is it bigger than about 3% of your price?</b>Yes → call. A big exclusion changes how the GC levels you. (3% is a rule of thumb for this course, not a law.)</div></li>
<li><div><b>Is it clearly another trade's work?</b>Yes → exclude it and name the trade.</div></li>
<li><div><b>Still unsure?</b>Price it as a separate line or an alternate so the GC can choose.</div></li>
</ol>`,
  exLabel: "Phone script",
  ex: `<p>“Hi, this is [name] with [company], landscape on Mission Valley MOB (medical office building). Your scope sheet lists ‘site furnishings’ under landscape. Do you want us to carry benches and trash cans, or are they going to a site furnishings vendor? If you want them from us, I'll show them as a separate line.” Then write down who said what, and when.</p>`
},

{ h: "Clarifications and assumptions",
  lead: "A clarification explains how you read something unclear, or a condition your price depends on. Use them where an RFI (request for information) wasn't answered in time.",
  body: `<ul>
<li><strong>Interpretations:</strong> “Plant legend lists 1,150 #1 groundcover; plan count is 1,210. We priced 1,210 per the plans.”</li>
<li><strong>Conditions:</strong> “Price assumes site access for a skid steer and 10-wheel delivery truck to all planting areas.”</li>
<li><strong>Sequence:</strong> “Price assumes planting areas turned over in no more than two phases.”</li>
<li><strong>Unanswered RFIs:</strong> “RFI #3 (controller location) not answered by bid date. Priced as shown on L-3.0.”</li>
<li><strong>Substitutions:</strong> “Priced as specified. Equal products available on request.”</li>
</ul>`,
  ex: `<p>The How to Make a Bid process says: if an RFI answer doesn't come back in time, price it with a stated assumption on the bid. That assumption goes here, in plain words, with the RFI number.</p>`,
  watch: `<p>A clarification that quietly removes scope is an exclusion in disguise. GCs (general contractors) notice. If you aren't providing it, put it in exclusions where the GC expects to look.</p>`
},

{ h: "Alternates and unit prices",
  lead: "Alternates price options the owner might choose. Unit prices price changes after the contract is signed. Both use the same markups as your base bid.",
  body: `<div class="twocol">
<div><h3>Alternates</h3><ul>
<li>Price every alternate the documents ask for, using the documents' numbers and names.</li>
<li>Say add or deduct, and what changes.</li>
<li>Price each alternate on its own. Note if two alternates interact.</li>
<li>Voluntary alternates (your own ideas, like a cheaper equal product) go in a separate section, clearly labeled.</li>
</ul></div>
<div><h3>Unit prices</h3><ul>
<li>Common adds and deducts: per plant by size, per tree, per valve, per head, per LF (linear foot) of drip or lateral, per CY (cubic yard) of mulch.</li>
<li>Add prices include labor, material, overhead and profit.</li>
<li>Deduct prices are lower than adds: you keep mobilization and some overhead when work is removed.</li>
<li>State a limit: “Unit prices apply to changes up to 15% of the quantity.”</li>
</ul></div>
</div>`,
  watch: `<p>Unit prices you write today become the change order prices on the job. If you lowball them to look good on bid day, every change during the job loses money.</p>`
},

{ h: "Worked example · pricing an add alternate",
  lead: "An alternate is a small estimate of its own. Price it line by line with the same rates and markup as the base bid.",
  exLabel: "Example numbers for practice (use your own costs)",
  body: `<p><strong>Alternate 3:</strong> extend maintenance from 90 days to 12 months on the sample medical office job. That adds 9 months, about 39 more weekly visits.</p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Math</th><th class="num">Cost</th></tr></thead>
<tbody>
<tr><td>Labor</td><td>39 visits × 2 workers × 3 hours = 234 hours × $58/hour (example burdened rate)</td><td class="num">$13,572.00</td></tr>
<tr><td>Truck and fuel</td><td>39 visits × $35</td><td class="num">$1,365.00</td></tr>
<tr><td>Fertilizer and small materials</td><td>3 feedings, lump sum</td><td class="num">$450.00</td></tr>
<tr><td>Plant replacement allowance</td><td>Example: about 2% of #1 and #5 plants</td><td class="num">$800.00</td></tr>
<tr><td><strong>Subtotal</strong></td><td>13,572 + 1,365 + 450 + 800</td><td class="num"><strong>$16,187.00</strong></td></tr>
<tr><td>Markup</td><td>15% (example, use your Module 10 markup) × $16,187</td><td class="num">$2,428.05</td></tr>
<tr><td><strong>Alternate price</strong></td><td>16,187 + 2,428.05 = $18,615.05, rounded</td><td class="num"><strong>Add $18,600</strong></td></tr>
</tbody></table></div>`,
  watch: `<p>Rounding is fine. Forgetting markup isn't. An alternate priced at cost is a gift if the owner picks it.</p>`
},

{ h: "Worked example · a deduct alternate",
  lead: "A deduct is the cost you actually save when work is removed. Mobilization, supervision and overhead usually stay.",
  exLabel: "Example numbers for practice (use your own costs)",
  body: `<p><strong>Alternate 2:</strong> delete the (22) boulders on the sample job.</p>
<div class="tablewrap"><table>
<thead><tr><th>Cost you save</th><th>Math</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Boulders, delivered</td><td>22 × $110 (example quote)</td><td class="num">$2,420.00</td></tr>
<tr><td>Sales tax</td><td>$2,420 × 7.75% (example rate; use the rate for the delivery address)</td><td class="num">$187.55</td></tr>
<tr><td>Setting labor</td><td>16 hours × $62/hour (example rate)</td><td class="num">$992.00</td></tr>
<tr><td><strong>Credit</strong></td><td>2,420 + 187.55 + 992 = $3,599.55</td><td class="num"><strong>Deduct $3,600</strong></td></tr>
</tbody></table></div>
<p><strong>What you don't give back:</strong> the loader is still on site for DG (decomposed granite), the foreman still supervises, and your overhead doesn't drop. So the credit returns direct cost only, with no markup.</p>`,
  watch: `<p>If two alternates touch the same work (delete boulders, and also upsize the DG area into where the boulders were), say so: “Alternate 2 assumes Alternate 4 is not accepted.”</p>`
},

{ h: "Worked example · building add and deduct unit prices",
  lead: "A unit price for one #5 shrub is priced for a small change, not a big order. Small quantities cost more per plant.",
  exLabel: "Example numbers for practice (use your own costs)",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">Add (per #5 shrub)</th><th class="num">Deduct (per #5 shrub)</th></tr></thead>
<tbody>
<tr><td>Plant (example nursery price)</td><td class="num">$14.00</td><td class="num">$14.00</td></tr>
<tr><td>Sales tax, 7.75% example</td><td class="num">$1.09</td><td class="num">$1.09</td></tr>
<tr><td>Amendment and planting tablets</td><td class="num">$2.00</td><td class="num">$2.00</td></tr>
<tr><td>Labor at $62/hour</td><td class="num">0.60 h = $37.20</td><td class="num">0.45 h = $27.90</td></tr>
<tr><td>Extra delivery and handling for a small order</td><td class="num">$8.00</td><td class="num">$0.00</td></tr>
<tr><td><strong>Direct cost</strong></td><td class="num">$62.29</td><td class="num">$44.99</td></tr>
<tr><td>Markup</td><td class="num">× 1.25 = $77.86</td><td class="num">× 1.10 = $49.49</td></tr>
<tr><td><strong>Unit price</strong></td><td class="num"><strong>$78</strong></td><td class="num"><strong>$50</strong></td></tr>
</tbody></table></div>
<p><strong>Why they differ:</strong> adding a few plants means a separate trip and slower work (0.60 hours each). Removing plants from a big planting saves only the normal rate (0.45 hours), and you keep part of your markup because overhead doesn't shrink.</p>`,
  ex: `<p>These are the $78 add and $50 deduct shown in the sample proposal later in this module. Every unit price in a proposal should have a small worksheet like this behind it.</p>`
},

{ h: "Allowances and unit price limits",
  lead: "An allowance is a fixed amount for something nobody can price yet. A limit tells the GC (general contractor) when your unit prices stop applying.",
  body: `<ul>
<li><strong>Allowance:</strong> “Include an allowance of $3,000 for added soil amendments after the soil test.” You bill only what's used, at agreed prices. If more is needed, it's a change order.</li>
<li><strong>Owner allowance in the documents:</strong> if the bid documents say “include an allowance of $5,000 for specimen tree upgrades,” carry exactly that number. Don't mark it up unless the documents say to.</li>
<li><strong>Unit price limit:</strong> “Unit prices apply to added or deleted quantities up to 15% of each item. Larger changes priced separately.”</li>
<li><strong>Minimum charge:</strong> “Minimum change order: $450,” so a two-plant change doesn't cost you a whole trip.</li>
</ul>`,
  ex: `<p><strong>Math:</strong> with a 15% limit on (1,210) #1 groundcover, unit prices cover changes up to 1,210 × 0.15 = 181.5, so up to (181) plants. A change of (300) plants gets a new price.</p>`,
  watch: `<p>An allowance is not free money. If you include it in your total and then don't spend it, the owner gets it back as a credit at the end.</p>`
},

{ h: "Schedule, plant establishment and warranty",
  lead: "GCs (general contractors) need to know how long you'll take, what comes before you, and how long you're responsible for the plants.",
  body: `<ul>
<li><strong>Duration and crew:</strong> “Approximately 6 weeks with a 5-person crew after site turnover.”</li>
<li><strong>What must happen first:</strong> rough grade, sleeves, power at the controller, water at the POC (point of connection).</li>
<li><strong>Lead times:</strong> specimen trees, controllers or specified products with long lead times. Give the date you need approval to order.</li>
<li><strong>Plant establishment / maintenance:</strong> length (from the specs), when it starts (usually acceptance of planting), what's included, and who pays water.</li>
<li><strong>Warranty:</strong> plant and workmanship guarantee periods from the specs, starting at acceptance. State what voids it: vandalism, owner neglect, loss of water or power, acts of nature.</li>
</ul>`,
  ex: `<p>Real example of how long establishment can run: Caltrans 11-428704 had 120 working days of construction followed by 250 working days of plant establishment (<a href="#m15-1">Module 15</a>). Private jobs are usually much shorter. Whatever the specs say, state it in your proposal so the GC prices the same period.</p>`,
  watch: `<p>“Warranty per specs” without reading the specs is risky. Some landscape specs require replacing plants for a full year. Price the replacements in your establishment cost (Module 10), then state the period.</p>`
},

{ h: "Schedule and phasing language you can reuse",
  lead: "Short, specific schedule sentences protect you when the GC's (general contractor's) schedule slips or splits into phases.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>Wording to adapt</th></tr></thead>
<tbody>
<tr><td>Duration</td><td>“Approximately [6] weeks of on-site work with a [5]-person crew, after all planting areas are turned over.”</td></tr>
<tr><td>Phases</td><td>“Price includes [2] phases. Each added phase or mobilization: $[850].”</td></tr>
<tr><td>Turnover condition</td><td>“Areas turned over at rough grade ±0.1 ft, free of debris, with sleeves installed and water available at the POC (point of connection).”</td></tr>
<tr><td>Sleeves before paving</td><td>“GC to give 5 working days' notice before paving so sleeves can be verified.”</td></tr>
<tr><td>Long-lead items</td><td>“Specimen trees require submittal approval 6 weeks before planting to hold the nursery's stock.”</td></tr>
<tr><td>Season</td><td>“Planting between June and September may require added watering visits at the unit price listed.”</td></tr>
<tr><td>Delay</td><td>“If work is delayed more than 60 days after the scheduled start by causes outside our control, material escalation will be priced as a change.”</td></tr>
</tbody></table></div>`,
  watch: `<p>Don't promise a finish date you don't control. Promise a duration that starts when your work areas are ready.</p>`
},

{ h: "Plant establishment and warranty language · real examples",
  lead: "Copy the period from the specs, then say when it starts, what you do, and what's not your responsibility.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Job</th><th>What the documents said</th></tr></thead>
<tbody>
<tr><td>City of San Diego EMTS (Embarcadero) Boat Dock Esplanade park, K-24-1952</td><td>A 90-calendar-day plant establishment period, included in the contract time, starting with acceptance of the planting installation. Punch list completion “authorizes start of maintenance period.” Final walk-through at the end of the 90 days.</td></tr>
<tr><td>Caltrans SR-905 Otay Mesa, 11-431064</td><td>A Type 1 plant establishment period of 750 working days, after 120 working days of construction. Four seasonal watering schedules (March–May, June–August, September–October, November–February). “Maintain a neat and presentable job site… including areas not visible to the public.”</td></tr>
</tbody></table></div>
<p><strong>Template:</strong> “Includes [90]-day plant establishment per [section], starting on written acceptance of planting: [weekly] visits, controller adjustment, weeding, fertilizing per spec, and replacement of failed plants with the same species and size. Water by owner. Excludes damage by others, vandalism, theft, and loss caused by water or power interruptions outside our control.”</p>`,
  watch: `<p>750 working days is roughly three years of visits. On a Caltrans job, the establishment item is real money: on 11-431064 the three bids for Plant Establishment Work were $95,000, $140,000 and $153,900.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Supplementary Special Provisions 6-1.1 and 801-1; Caltrans 11-431064 Special Provisions 20-4 and Bid Summary item 31."
},

{ h: "Validity, payment, insurance, bonds and signature",
  lead: "The last section of the proposal protects your price and your cash.",
  body: `<ul>
<li><strong>Validity:</strong> “This proposal is valid for 30 days from the date above.” Match it to your supplier quotes (Module 8); if work starts later, the price may need escalation.</li>
<li><strong>Payment terms:</strong> monthly progress billing, retention (money held back until the end) per the subcontract, and payment for materials stored on site if allowed.</li>
<li><strong>Insurance:</strong> your limits, and that you'll provide certificates and endorsements required by the subcontract. Note any special requirement you haven't priced.</li>
<li><strong>Bonds:</strong> excluded unless requested; give the added cost as a percent.</li>
<li><strong>Signature:</strong> name, title, signature and date, plus a line for the GC (general contractor) to sign and accept.</li>
</ul>`,
  deeper: `<p>California law sets some payment rules no matter what the proposal says. Business and Professions Code § 7108.5 requires a prime contractor to pay a sub its share within 7 days of receiving each progress payment, unless otherwise agreed in writing. On public works, Public Contract Code § 7201 limits retention to 5% for contracts entered on or after January 1, 2012, with exceptions. Check the current text on leginfo.legislature.ca.gov; Module 16 covers billing and retention.</p>`,
  src: "Business and Professions Code § 7108.5; Public Contract Code § 7201."
},

{ h: "How GCs level bids, and how to make yours easy",
  lead: "The GC (general contractor) lines up every landscape proposal on one spreadsheet and adds plugs for missing items. The easiest proposal to level is often the one that gets carried.",
  body: `<p>Review the leveling example in <a href="#m1-14">Module 1 · Bid leveling</a>. Then make your proposal easy to put on that spreadsheet:</p>
<ol class="steps">
<li><div><b>Use their breakdown</b>If the GC sends a scope sheet or bid form, follow its items and order.</div></li>
<li class="hl"><div><b>One price per line</b>Every line item has its own number, and the lines add up to the total.</div></li>
<li><div><b>Say where you start and stop</b>POC (point of connection), controller power, sleeves, rough grade.</div></li>
<li><div><b>Short exclusions</b>Specific items, in a list, with who provides them.</div></li>
<li class="hl"><div><b>Alternates and unit prices separate</b>Never mixed into the base bid.</div></li>
<li><div><b>Send it early</b>A proposal received 2 hours before bid time gets studied. One received 10 minutes before gets plugged.</div></li>
<li><div><b>PDF on letterhead, signed</b>Plus the GC's own form if they asked for one.</div></li>
</ol>`,
  ex: `<p>After bid day, ask the GC estimator: “Was our proposal easy to level? Did you add any plugs to it?” The answer tells you which exclusion or missing line cost you.</p>`
},

{ h: "Responding to a GC's bid form and scope sheet",
  lead: "When a GC (general contractor) sends its own bid form or scope sheet, that's the format they'll level in. Fill it in exactly, then attach your proposal.",
  body: `<ol class="steps">
<li><div><b>Read every line of the scope sheet</b>GCs often put items in landscape that you don't expect: sleeves, fine grading, erosion control, site furnishings, tree protection.</div></li>
<li class="hl"><div><b>Answer every line</b>Included, excluded, or priced separately. A blank line gets a plug.</div></li>
<li><div><b>Use their totals and alternates</b>Match their alternate numbers and names.</div></li>
<li><div><b>Attach your proposal</b>Your full proposal adds the detail; make sure the two say the same thing.</div></li>
<li><div><b>Adjust for each GC</b>Different GCs split scope differently. Change the line items so each proposal matches what that GC asked for (How to Make a Bid, Step 10).</div></li>
</ol>`,
  watch: `<p>If the GC's form and your attached proposal disagree (the form says “sleeves: included,” your proposal excludes them), you've created a dispute before the job starts. Read both together before you send.</p>`
},

{ h: "Worked example · answering a GC scope sheet",
  lead: "Here's a made-up GC (general contractor) scope sheet for landscape, answered line by line. Every line gets an answer and, where needed, a price.",
  exLabel: "Made-up scope sheet and answers (prices are examples)",
  body: `<div class="tablewrap"><table>
<thead><tr><th>#</th><th>GC scope sheet line</th><th>Our answer</th><th class="num">Price</th></tr></thead>
<tbody>
<tr><td>1</td><td>Irrigation complete from POC (point of connection)</td><td>Included, from downstream of backflow</td><td class="num">In base</td></tr>
<tr><td>2</td><td>Backflow preventer and enclosure</td><td>Excluded, shown on plumbing sheet P-2.1</td><td class="num">Separate: $4,200</td></tr>
<tr><td>3</td><td>Irrigation sleeves under hardscape</td><td>Included per L-3.0 (GC asked for it here)</td><td class="num">In base: $3,150</td></tr>
<tr><td>4</td><td>Fine grading of planting areas</td><td>Included to ±0.1 ft once rough grade is turned over</td><td class="num">In base</td></tr>
<tr><td>5</td><td>Erosion control on slopes (jute netting)</td><td>Included per L-2.1</td><td class="num">In base</td></tr>
<tr><td>6</td><td>Site furnishings (benches, trash cans)</td><td>Excluded, not landscape; can provide if asked</td><td class="num">Separate: $11,800</td></tr>
<tr><td>7</td><td>Tree protection fencing</td><td>Excluded, by GC per general conditions</td><td class="num">N/A</td></tr>
<tr><td>8</td><td>90-day maintenance</td><td>Included</td><td class="num">In base</td></tr>
<tr><td>9</td><td>Prevailing wage</td><td>Not required on this private job; noted</td><td class="num">N/A</td></tr>
<tr><td>10</td><td>Bond</td><td>Excluded; available at +2.5%</td><td class="num">$3,520</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Bond math:</strong> base bid $140,800 × 2.5% = $3,520. <strong>Sleeves:</strong> the GC put them in landscape, so you moved them into your base bid and your total went from $137,650 to $140,800. Your separate proposal must now say “sleeves included” too.</p>`,
  watch: `<p>“Separate” prices let the GC choose. They also keep your base number comparable with subs who answered the same way.</p>`
},

{ h: "Revising a proposal after an addendum",
  lead: "An addendum after you've sent your proposal means a revised proposal, clearly marked, even if your price doesn't change.",
  body: `<ol class="steps">
<li><div><b>Read the addendum the day it comes out</b>Log it (Module 12). Mark every change that touches landscape, irrigation or your exclusions.</div></li>
<li><div><b>Re-price only what changed</b>Change quantities on your takeoff and recap sheet first, then on the proposal.</div></li>
<li class="hl"><div><b>Mark the revision</b>“Proposal #26-041 Rev. 1, dated 07/09/2026, supersedes the 07/08/2026 proposal.”</div></li>
<li><div><b>Add the addendum to the document list</b>“Addendum 3 (07/08/2026).”</div></li>
<li><div><b>Say what changed in one line</b>“Rev. 1 adds Addendum 3: (6) added 24" box trees at the north lot. Base bid increased $3,840.”</div></li>
<li><div><b>Send to every GC you quoted</b>And confirm by phone that they're using the new one.</div></li>
</ol>`,
  exLabel: "Example numbers for practice",
  ex: `<p>Addendum 3 adds (6) 24" box trees. Your tree price in the base bid is $640 each, installed and staked (the add unit price in the sample). 6 × $640 = $3,840. Old base $140,800 + $3,840 = <strong>$144,640</strong>. If the addendum doesn't change your price, still send Rev. 1 that lists the addendum: “No change in price.”</p>`,
  watch: `<p>Two versions of your proposal on a GC's desk is dangerous. Always say which one it replaces, and ask the GC to throw out the old one.</p>`
},

{ h: "Public bids · The bid form is the proposal",
  lead: "When you bid a public job as the prime, you fill in the agency's bid form. You can't add exclusions, conditions or your own scope letter.",
  body: `<ul>
<li>Every bidder must offer to do the same work under the same terms, so the agency can compare prices fairly.</li>
<li>An exclusion or condition changes what you're offering. That gives you an advantage the other bidders didn't get, and it can make your bid non-responsive (not following the rules, so it can be thrown out).</li>
<li>The City of San Diego's bid documents say it plainly: “Conditional Bids may be rejected as being non-responsive. Alternative proposals will not be considered unless called for.”</li>
<li>Caltrans: you bid “based on the bid item quantities shown on the Bid Item List,” and “failure to submit the forms and information as specified may result in a nonresponsive bid.”</li>
</ul>
<p><strong>Where your clarifications go instead:</strong> ask questions before bid day (RFIs, requests for information, or bidder inquiries, Module 12). The answers come back as addenda that every bidder bids on.</p>`,
  ex: `<p>A note on a City bid like “price excludes rock excavation” could get the whole bid thrown out, even if it's the low price. If you're worried about rock, ask before bid day. If the answer doesn't come, price the risk (Module 10) or don't bid.</p>`,
  watch: `<p>Don't write notes, letters or cover pages into a public bid unless the instructions ask for them. Fill in the forms completely and exactly as instructed.</p>`,
  src: "City of San Diego bidding documents, Bid No. K-24-1952-DBB-3-A, Instructions to Bidders 2.6; Caltrans 2018 Standard Specifications, sections 2-1.09 and 2-1.33A."
},

{ h: "Public bids · Quoting a prime as a sub",
  lead: "When you quote a landscape scope to a prime contractor on a public job, write your quote around the agency's bid items so the prime can drop it straight into its bid.",
  body: `<ul>
<li><strong>Quote by bid item number:</strong> item, description, unit, quantity, your unit price and extension (unit price × quantity), exactly as the Bid Item List shows them.</li>
<li><strong>Say which items, and what percent:</strong> the prime must list subs on its Subcontractor List with bid item numbers and the percent of each item (Module 14). If you do only part of an item, say which part.</li>
<li><strong>Give the listing information:</strong> company name and city, CSLB license number, DIR registration number, and DBE (Disadvantaged Business Enterprise) or SLBE (Small Local Business Enterprise) certification if you have it.</li>
<li><strong>Keep exclusions very short:</strong> the prime can't carry them into its bid. Anything you exclude, the prime must price itself or replace you.</li>
<li><strong>Send it early on bid day:</strong> primes assemble dozens of quotes in the last hours. Many subs quote several primes; the City's bid documents say a sub who quotes one bidder may also quote others.</li>
</ul>`,
  ex: `<p><strong>Real example, 11-428704:</strong> Blue Pacific listed Diversified Landscape for all irrigation, bid items 32–67. The winner, ACCU, listed a boring sub for part of one item: “Item 66, 54%, boring only.” That's the level of detail a prime needs from your quote. See <a href="#m15-1">Module 15</a>.</p>`,
  deeper: `<p>Caltrans 2018 Standard Specifications 2-1.10: the prime lists each sub doing more than ½ of 1 percent of the total bid or $10,000, whichever is greater, with its business name and location, license number (non-federal-aid contracts), public works contractor registration number, bid item numbers, percent of each item, and a description when less than 100% of an item. Section 3-1.03: no contractor or subcontractor may be awarded public work unless registered with DIR (Department of Industrial Relations).</p>`,
  src: "Caltrans 2018 Standard Specifications 2-1.10, 3-1.03; Caltrans Bid Summary and ACCU bid book, contract 11-428704; City of San Diego Bid No. K-24-1952-DBB-3-A, Instructions to Bidders 17."
},

{ h: "Sample sub quote to a prime · 11-431064, page 1",
  lead: "A second full sample: a landscape sub's quote to a prime on the real Caltrans SR-905 job. The items and quantities are real. The company and all prices are made up for training.",
  exLabel: "Sample quote (real bid items; made-up company and prices)",
  ex: `<p><strong>[YOUR COMPANY] · Landscape &amp; Irrigation</strong> · CSLB #[number] (C-27) · DIR #[number] · [phone] · [email]<br>
<strong>QUOTE #22-118</strong> to: all prime bidders · Caltrans contract 11-431064, SR-905 landscaping, Caliente Ave to La Media Rd · Bid opening 05/17/2022 · Addendum 1 (05/12/2022) acknowledged · Prevailing wage included</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Description</th><th>Unit</th><th class="num">Qty</th><th class="num">Unit price</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>21</td><td>Roadside clearing</td><td>LS</td><td class="num">1</td><td class="num">42,000.00</td><td class="num">42,000.00</td></tr>
<tr><td>22</td><td>Rock mulch</td><td>SQFT</td><td class="num">94,100</td><td class="num">3.10</td><td class="num">291,710.00</td></tr>
<tr><td>23</td><td>Rock blanket</td><td>SQFT</td><td class="num">3,780</td><td class="num">13.50</td><td class="num">51,030.00</td></tr>
<tr><td>24</td><td>Weed germination</td><td>SQYD</td><td class="num">116,000</td><td class="num">0.40</td><td class="num">46,400.00</td></tr>
<tr><td>25</td><td>Packet fertilizer</td><td>EA</td><td class="num">14,700</td><td class="num">0.18</td><td class="num">2,646.00</td></tr>
<tr><td>26</td><td>Plant (Group K) · 24" box</td><td>EA</td><td class="num">440</td><td class="num">395.00</td><td class="num">173,800.00</td></tr>
<tr><td>27</td><td>Plant (Group Z) · palm</td><td>EA</td><td class="num">90</td><td class="num">1,050.00</td><td class="num">94,500.00</td></tr>
<tr><td>28</td><td>Plant (Group A) · No. 1</td><td>EA</td><td class="num">6,880</td><td class="num">6.40</td><td class="num">44,032.00</td></tr>
<tr><td>29</td><td>Plant (Group B) · No. 5</td><td>EA</td><td class="num">2,120</td><td class="num">18.50</td><td class="num">39,220.00</td></tr>
<tr><td>30</td><td>Plant (Group U) · No. 15</td><td>EA</td><td class="num">310</td><td class="num">115.00</td><td class="num">35,650.00</td></tr>
<tr><td>31</td><td>Plant establishment work (750 working days)</td><td>LS</td><td class="num">1</td><td class="num">98,000.00</td><td class="num">98,000.00</td></tr>
<tr><td>32</td><td>Gravel mulch (Type 1)</td><td>SQFT</td><td class="num">115,000</td><td class="num">2.25</td><td class="num">258,750.00</td></tr>
<tr><td>33</td><td>Gravel mulch (Type 2)</td><td>SQFT</td><td class="num">79,500</td><td class="num">2.20</td><td class="num">174,900.00</td></tr>
<tr><td>34</td><td>Gravel mulch (Type 3)</td><td>SQFT</td><td class="num">27,100</td><td class="num">1.95</td><td class="num">52,845.00</td></tr>
<tr><td>35</td><td>Wood mulch</td><td>CY</td><td class="num">3,290</td><td class="num">40.00</td><td class="num">131,600.00</td></tr>
<tr><td>36</td><td>Edging</td><td>LF</td><td class="num">6,200</td><td class="num">8.25</td><td class="num">51,150.00</td></tr>
<tr><td>64</td><td>Compost (CY)</td><td>CY</td><td class="num">1,180</td><td class="num">38.00</td><td class="num">44,840.00</td></tr>
<tr><td></td><td colspan="4"><strong>Planting subtotal (17 items)</strong></td><td class="num"><strong>1,633,073.00</strong></td></tr>
</tbody></table></div>`,
  body: `<p><strong>Units:</strong> LS = lump sum, SQFT = square feet, SQYD = square yards, EA = each, CY = cubic yards, LF = linear feet. The Group letters come from the Caltrans spec table: A = No. 1 container, B = No. 5, U = No. 15, K = 24-inch box, Z = palm tree.</p>`,
  src: "Caltrans 11-431064 Bid Item List and Special Provisions 20-3.01B(2)(a) plant group table. Prices are made up."
},

{ h: "Sample sub quote · page 2, irrigation",
  lead: "The irrigation items, in the same order and with the same units as the Bid Item List, so the prime can copy them line for line.",
  exLabel: "Sample quote, continued (made-up prices)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Description</th><th>Unit</th><th class="num">Qty</th><th class="num">Unit price</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>37</td><td>Control and neutral conductors</td><td>LS</td><td class="num">1</td><td class="num">98,000.00</td><td class="num">98,000.00</td></tr>
<tr><td>38</td><td>1" remote control valve</td><td>EA</td><td class="num">33</td><td class="num">410.00</td><td class="num">13,530.00</td></tr>
<tr><td>39</td><td>1 1/2" remote control valve</td><td>EA</td><td class="num">100</td><td class="num">455.00</td><td class="num">45,500.00</td></tr>
<tr><td>40</td><td>2" remote control valve</td><td>EA</td><td class="num">21</td><td class="num">505.00</td><td class="num">10,605.00</td></tr>
<tr><td>41–44</td><td>48-station controllers and enclosures (164A, 165A, 166A, 166B)</td><td>EA</td><td class="num">4</td><td class="num">13,800 / 13,800 / 16,200 / 13,800</td><td class="num">57,600.00</td></tr>
<tr><td>45</td><td>3" ductile iron pipe (supply line)</td><td>LF</td><td class="num">520</td><td class="num">135.00</td><td class="num">70,200.00</td></tr>
<tr><td>46</td><td>2" backflow preventer assembly</td><td>EA</td><td class="num">3</td><td class="num">7,400.00</td><td class="num">22,200.00</td></tr>
<tr><td>47</td><td>Flow sensor</td><td>EA</td><td class="num">3</td><td class="num">1,250.00</td><td class="num">3,750.00</td></tr>
<tr><td>48</td><td>Tree well sprinkler assembly</td><td>EA</td><td class="num">1,900</td><td class="num">47.00</td><td class="num">89,300.00</td></tr>
<tr><td>49</td><td>Riser sprinkler assembly (gear driven)</td><td>EA</td><td class="num">210</td><td class="num">58.00</td><td class="num">12,180.00</td></tr>
<tr><td>50</td><td>Pop-up sprinkler assembly (gear driven)</td><td>EA</td><td class="num">310</td><td class="num">96.00</td><td class="num">29,760.00</td></tr>
<tr><td>51</td><td>Riser sprinkler assembly</td><td>EA</td><td class="num">120</td><td class="num">48.00</td><td class="num">5,760.00</td></tr>
<tr><td>52</td><td>Pop-up sprinkler assembly</td><td>EA</td><td class="num">1,120</td><td class="num">82.00</td><td class="num">91,840.00</td></tr>
<tr><td>53</td><td>2" gate valve</td><td>EA</td><td class="num">39</td><td class="num">440.00</td><td class="num">17,160.00</td></tr>
<tr><td>54</td><td>3" gate valve</td><td>EA</td><td class="num">24</td><td class="num">820.00</td><td class="num">19,680.00</td></tr>
<tr><td>55</td><td>1" plastic pipe (Sch 40) supply line</td><td>LF</td><td class="num">40,785</td><td class="num">4.25</td><td class="num">173,336.25</td></tr>
<tr><td>56</td><td>1 1/4" plastic pipe (Sch 40) supply line</td><td>LF</td><td class="num">26,844</td><td class="num">4.40</td><td class="num">118,113.60</td></tr>
<tr><td>57</td><td>1 1/2" plastic pipe (Sch 40) supply line</td><td>LF</td><td class="num">6,682</td><td class="num">5.10</td><td class="num">34,078.20</td></tr>
<tr><td>58</td><td>2" plastic pipe (Sch 40) supply line</td><td>LF</td><td class="num">7,802</td><td class="num">6.20</td><td class="num">48,372.40</td></tr>
<tr><td>59</td><td>2 1/2" plastic pipe (Sch 40) supply line</td><td>LF</td><td class="num">12,740</td><td class="num">8.40</td><td class="num">107,016.00</td></tr>
<tr><td>60</td><td>3" plastic pipe (Class 315) supply line</td><td>LF</td><td class="num">12,494</td><td class="num">11.50</td><td class="num">143,681.00</td></tr>
<tr><td></td><td colspan="4"><strong>Irrigation subtotal (24 items)</strong></td><td class="num"><strong>1,211,662.45</strong></td></tr>
<tr><td></td><td colspan="4"><strong>TOTAL QUOTE, items 21–60 and 64 (41 items)</strong></td><td class="num"><strong>2,844,735.45</strong></td></tr>
</tbody></table></div>`,
  body: `<p><strong>Check the math:</strong> $1,633,073.00 + $1,211,662.45 = $2,844,735.45. In a real quote, list items 41–44 on four separate lines like the Bid Item List does. They're combined here only to fit the screen.</p>`,
  watch: `<p>Quote every unit price to the cent the way you want it carried. On Caltrans bids the unit price is what counts (Module 14), and the prime will copy yours.</p>`
},

{ h: "Sample sub quote · page 3, listing information and terms",
  lead: "The last page gives the prime everything it needs to list you, and the few conditions a prime can live with.",
  exLabel: "Sample quote, continued",
  ex: `<p><strong>For your Subcontractor List:</strong> [Company], [City], CA · CSLB #[number] · DIR #[number] · Items 21–36 (100%), 37–60 (100%), 64 (100%) · DBE (Disadvantaged Business Enterprise) certified: [yes/no, certification #]</p>
<p><strong>Not included in this quote (for the prime to price):</strong> items 1–20 (general, traffic control, storm water), 61–62 PVC conduit and sleeves (boring by others), 63 hydroseed, 65 subsurface locator, 66 electric service for irrigation, 67 water meter charges, 68 irrigation water service charges, 69 mobilization.</p>
<p><strong>Clarifications (3):</strong> (1) Quantities per the Bid Item List; paid on measured quantities per Caltrans specifications. (2) Traffic control for our work by the prime under item 6. (3) Plant establishment price covers the full 750 working days per Special Provisions 20-4, including the four seasonal watering schedules.</p>
<p><strong>Terms:</strong> Prevailing wage and certified payroll included. Valid for 60 days from bid opening. Bonds available at an added [x]% if requested in writing before bid (PCC 4108). Payment and retention per subcontract and state law.</p>
<p>[Name, title, signature, date]</p>`,
  body: `<p>The “not included” list is not an exclusion of work inside your items. It tells the prime which bid items you didn't quote, so it knows what it still has to cover.</p>`,
  deeper: `<p>Real comparison: on 11-431064, the winning prime (Griffith Company, $4,247,463.10) listed subs for hydroseed (item 63, 100%), electrical (items 65 and 66), storm water (items 10, 11, 13), traffic control (items 6 at 64%, 7, 8, 9) and solid waste and clearing (items 20, 21). It did not list a landscape sub for the planting and irrigation items. Second-place Marina Landscape ($4,254,436.10) listed Turboscape for item 35 at 34%, “wood mulch.” Your quote might be used in full, in part, or not at all.</p>`,
  src: "Caltrans 11-431064 Bid Summary (list of subcontractors), bid opening 05/17/2022."
},

{ h: "Using AI to draft line-item descriptions",
  lead: "AI can turn your priced line items and the plans into clear descriptions fast. You are still responsible for every word that goes out.",
  body: `<p>The company's <a href="https://claude.ai/artifact/Lya5kQRNBTrDcNgc7xeumK" target="_blank" rel="noopener">How to Make a Bid</a> process does this in Step 8, after pricing:</p>
<ol class="steps">
<li><div><b>Give it the right inputs</b>The plans and specs (specifications), your priced line items with quantities, and your exclusions list.</div></li>
<li><div><b>Ask for specific output</b>A short description for each line, grouped by type of work, with sheet and spec references, and nothing from the exclusions list.</div></li>
<li class="hl"><div><b>Check it against your estimate</b>Every quantity, size and product in the text must match what you priced.</div></li>
<li class="hl"><div><b>Check it against your exclusions</b>Delete anything that promises excluded work.</div></li>
<li><div><b>Check the sheet references</b>Open each sheet it cites. AI can invent a detail number that looks right.</div></li>
<li><div><b>Cut extra promises</b>Words like “complete,” “all,” “fully functional” or “per plans and specs” can promise more than you priced.</div></li>
</ol>`,
  watch: `<p>AI writes confident sentences even when it's wrong. A description that says “(18) 36" box trees” when you priced 24" box is a $10,000 problem with your signature on it.</p>`
},

{ h: "Sample proposal, page 1",
  lead: "A complete proposal for a made-up San Diego commercial job. The project, companies and prices are invented for training.",
  exLabel: "Sample proposal (made-up project, company and prices)",
  ex: `<p><strong>[YOUR COMPANY NAME] · Landscape &amp; Irrigation</strong><br>[Address], San Diego, CA · CSLB #[number] (B, C-27) · DIR #[number] · [phone] · [email]</p>
<p><strong>PROPOSAL #26-041</strong> · Date: 07/08/2026 · Valid 30 days</p>
<p><strong>To:</strong> Harbor Peak Builders (made-up GC), Attn: Chief Estimator<br>
<strong>Project:</strong> Mission Valley Medical Office Building (made-up), San Diego, CA · Bid date 07/09/2026</p>
<p><strong>Documents priced:</strong> Landscape sheets L-1.0 to L-6.0, 100% CD set dated 06/12/2026 · Specifications 32 84 00, 32 91 13, 32 93 00 dated 06/12/2026 · Addendum 1 (06/24/2026) and Addendum 2 (07/01/2026) · Geotechnical report dated 03/15/2026</p>
<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Scope</th><th class="num">Price</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Irrigation</strong> (32 84 00, L-3.0 to L-3.2): from the downstream side of the backflow preventer; smart controller with flow sensor and master valve; (14) remote control valves; drip zones with filter and pressure regulator kits; spray and rotor zones; 2" Sch 40 mainline; laterals, wire, testing, controller charts and as-builts</td><td class="num">$48,600</td></tr>
<tr><td>2</td><td><strong>Soil preparation and fine grading</strong> (32 91 13): (1) agronomic soil test; amendments per the report up to the rates in the spec; fine grade ±0.1 ft</td><td class="num">$14,200</td></tr>
<tr><td>3</td><td><strong>Trees</strong> (32 93 00, L-4.0): (14) 24" box, (4) 36" box; staking per detail 4/L-5.0; root barrier where within 5' of paving</td><td class="num">$21,400</td></tr>
<tr><td>4</td><td><strong>Shrubs and groundcover</strong> (L-4.0, L-4.1): (420) #5, (1,210) #1, groundcover flats as shown</td><td class="num">$26,300</td></tr>
<tr><td>5</td><td><strong>Mulch</strong>: 3" shredded bark in all planting areas, about 15,600 SF</td><td class="num">$9,800</td></tr>
<tr><td>6</td><td><strong>Stabilized DG and boulders</strong> (L-2.0): 3,200 SF stabilized DG with steel header; (22) boulders, 2–3 ton</td><td class="num">$12,700</td></tr>
<tr><td>7</td><td><strong>90-day maintenance and plant establishment</strong> after acceptance of planting</td><td class="num">$7,800</td></tr>
<tr><td></td><td><strong>BASE BID TOTAL</strong></td><td class="num"><strong>$140,800</strong></td></tr>
</tbody></table></div>`,
  body: `<p>Check the math: $48,600 + $14,200 + $21,400 + $26,300 + $9,800 + $12,700 + $7,800 = $140,800. (CD = construction documents; SF = square feet; DG = decomposed granite; Sch 40 = Schedule 40 PVC pipe.)</p>`
},

{ h: "Sample proposal, page 2",
  lead: "Alternates, unit prices, inclusions, exclusions, clarifications, schedule and terms, all on one page.",
  exLabel: "Sample proposal, continued (made-up prices)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Alternates</th><th class="num">Price</th></tr></thead>
<tbody>
<tr><td>Alt. 1 (per bid form): upsize (6) 24" box trees to 36" box</td><td class="num">Add $4,950</td></tr>
<tr><td>Alt. 2 (per bid form): delete boulders</td><td class="num">Deduct $3,600</td></tr>
<tr><td>Alt. 3: extend maintenance from 90 days to 12 months</td><td class="num">Add $18,600</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Unit prices (changes up to 15% of quantity)</th><th class="num">Add</th><th class="num">Deduct</th></tr></thead>
<tbody>
<tr><td>#1 shrub, installed</td><td class="num">$38</td><td class="num">$22</td></tr>
<tr><td>#5 shrub, installed</td><td class="num">$78</td><td class="num">$50</td></tr>
<tr><td>24" box tree, staked</td><td class="num">$640</td><td class="num">$520</td></tr>
<tr><td>Remote control valve with box</td><td class="num">$640</td><td class="num">$480</td></tr>
<tr><td>Drip tubing, per LF</td><td class="num">$4.10</td><td class="num">$2.60</td></tr>
</tbody></table></div>
<p><strong>Includes:</strong> (2) mobilizations; submittals, as-builts and controller charts; (1) soil test; non-prevailing wage labor.</p>
<p><strong>Excludes:</strong> permits and fees · water meter and connection fees · backflow preventer and enclosure (plumbing) · 120V power and connection at controller (electrical) · sleeves under paving (we provide layout) · rough grading · soil import/export · removal of rock or debris · hazardous materials · traffic control · night or weekend work · bonds (available at an added 2.5%) · repair of damage by others.</p>
<p><strong>Clarifications:</strong> Rough grade turned over at ±0.1 ft. Plant count on L-4.1 (1,210 #1) used over legend count (1,150). Water for maintenance by owner through permanent meter. Priced as specified; equals on request.</p>
<p><strong>Schedule:</strong> about 6 weeks with a 5-person crew after site turnover; trees need approval to order 4 weeks before planting. <strong>Warranty:</strong> per spec 32 93 00, from acceptance; excludes vandalism, owner neglect and loss of water or power.</p>
<p><strong>Terms:</strong> Monthly progress billing; retention per subcontract. Certificates of insurance per subcontract requirements. Valid 30 days.</p>
<p>Submitted by: ______________ [Name, Title] Date: ________ · Accepted by (GC): ______________ Date: ________</p>`,
  watch: `<p>Every line on this page should trace back to your recap sheet (Module 10). If a unit price or alternate isn't on the recap, it hasn't been priced with your markups. (LF = linear foot; GC = general contractor.)</p>`
},

{ h: "Sending the proposal",
  lead: "How you send it matters almost as much as what's in it. A clean email, a signed PDF and a phone call.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part of the email</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Subject</td><td>Landscape &amp; Irrigation Proposal · Mission Valley MOB · Bid 07/09 · [Company]</td></tr>
<tr><td>Opening line</td><td>“Attached is our proposal #26-041 for landscape and irrigation, base bid $140,800, including Addenda 1 and 2.”</td></tr>
<tr><td>What's attached</td><td>Signed PDF proposal; your completed scope sheet or bid form; insurance certificate sample if they asked</td></tr>
<tr><td>Key notes, 3 lines max</td><td>“Backflow and controller power excluded (plumbing and electrical). Sleeves included per your scope sheet. Alternates 1–3 priced separately.”</td></tr>
<tr><td>Close</td><td>“Please call me at [phone] with any leveling questions. I'll be available until bid time.”</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Send as a PDF</b>Never as an editable Word or Excel file.</div></li>
<li><div><b>Upload too</b>If the GC (general contractor) uses BuildingConnected or PlanHub, submit through the platform as well as by email.</div></li>
<li class="hl"><div><b>Call to confirm</b>“Did you get our proposal? Any questions?” Write down who you spoke to.</div></li>
</ol>`,
  watch: `<p>Don't email a proposal to a general inbox at 1:50 PM and assume it arrived. Find the estimator's name a week before.</p>`
},

{ h: "Scenario · the GC calls 30 minutes before bid",
  lead: "A GC (general contractor) estimator calls: “You're $9,000 under the next landscape sub. Did you miss something?” Here's the right move.",
  body: `<ol class="steps">
<li><div><b>Stay calm and ask what's different</b>“Which lines are we lower on?” Most GCs will tell you a category, not the other sub's price.</div></li>
<li><div><b>Check your scope against theirs</b>Open your recap sheet. Did you price the item they named? The right sheets? All addenda?</div></li>
<li class="hl"><div><b>If you missed something, say so</b>“We missed the jute netting on L-2.1. Add $6,400.” Send a revised proposal right away, marked Rev. 1.</div></li>
<li><div><b>If you didn't, hold your number</b>“We checked. It's all in. Our soil prep is lower because we're using our own equipment.”</div></li>
<li><div><b>Never cut price on the phone just to win</b>Lowering your price because you heard someone else's number is how bid shopping starts.</div></li>
</ol>`,
  watch: `<p>A low price you can't explain is a warning, not a win. Module 10's final price review and Module 15's line-by-line comparison are your tools.</p>`
},

{ h: "Proposal review checklist",
  lead: "Score your proposal before it goes out. 2 = done and checked, 1 = done but not checked, 0 = missing. Your choices are saved in this browser.",
  t: "scorer", id: "proposalcheck",
  items: [
    ["Documents listed", "Every plan sheet with its date, every spec section, every addendum by number and date"],
    ["Totals add up", "Line items add up to the base bid, checked by a second person"],
    ["Quantities match the recap", "Every count and size in the words matches what you priced"],
    ["POC and edges stated", "Point of connection, controller power, sleeves and rough grade turnover are clear"],
    ["Exclusions are specific", "Each names an item and who provides it; nothing shown on your sheets is excluded"],
    ["GC scope sheet answered", "Every line answered: included, excluded or priced separately; matches the proposal"],
    ["Alternates and unit prices", "Priced with markup, labeled add or deduct, and kept separate from the base bid"],
    ["Schedule and establishment", "Duration, phases, lead times, establishment period and start match the specs"],
    ["Terms", "Validity no longer than supplier quotes; payment, insurance and bond notes included"],
    ["Signed PDF, sent early", "On letterhead, signed, sent at least 2 hours before bid time, receipt confirmed"]
  ],
  bands: [
    [18, "Send it", "Ready to go."],
    [14, "Fix first", "Fix the 0s and 1s before you send."],
    [0, "Not ready", "Stop and work through the template again."]
  ]
},

{ h: "Common mistakes",
  lead: "Most proposal mistakes are small on paper and expensive on the job.",
  body: `<ul>
<li>No plan dates or addenda listed, so you can't prove what you priced</li>
<li>Line items that don't add up to the total</li>
<li>Excluding work that's on the landscape plans, or that the GC's (general contractor's) scope sheet gives to you</li>
<li>Pasting the full boilerplate exclusions list without reading the job</li>
<li>Leaving out the POC (point of connection), controller power or sleeves</li>
<li>Unit prices with no markup, or lowballed to look good</li>
<li>Establishment period or warranty different from the specs</li>
<li>Validity period longer than your supplier quotes</li>
<li>Exclusions or notes written onto a public bid form</li>
<li>Sending the same proposal to every GC when their scope sheets differ</li>
<li>Sending at the last minute, unsigned, or as an editable file instead of a PDF</li>
</ul>`,
  ex: `<p>Before you send, read the proposal as if you were the GC estimator: “What would I have to plug? What would I argue about later?” Fix those first.</p>`
},

{ h: "Common mistakes · what they cost",
  lead: "Each mistake has a price. These examples use the made-up sample job to show how fast small mistakes add up.",
  exLabel: "Example numbers for practice",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>What happens</th><th class="num">Example cost</th></tr></thead>
<tbody>
<tr><td>Addendum 3 not listed (added 6 trees)</td><td>You build the trees for free or argue about it</td><td class="num">6 × $640 = $3,840</td></tr>
<tr><td>“Complete irrigation system” with POC (point of connection) unstated</td><td>You run 400 LF (linear feet) of 2" pipe to a distant meter</td><td class="num">400 × $14 = $5,600</td></tr>
<tr><td>Unit price for #5 shrubs priced at cost ($62.29) instead of $78</td><td>Owner adds 120 shrubs at your price</td><td class="num">120 × $15.71 = $1,885.20 of lost markup</td></tr>
<tr><td>Validity 90 days, supplier quote 30 days</td><td>The nursery raises its $15,000 tree quote 8% before you order</td><td class="num">$15,000 × 8% = $1,200</td></tr>
<tr><td>Ten loose exclusions</td><td>GC plugs $1,500 each and carries the next sub</td><td class="num">You lose the job</td></tr>
</tbody></table></div>`,
  watch: `<p>Add it up: the first four mistakes alone cost $12,525.20 on a $140,800 job. That's about 9% of the price, which can be most or all of your profit (Module 10).</p>`
},

{ h: "Ask yourself before you send",
  lead: "Five questions, out loud, every time. If you can't answer one, you're not done.",
  body: `<ol class="steps">
<li><div><b>“What exactly did I price?”</b>Point to the sheet dates and addenda on page 1.</div></li>
<li><div><b>“Where does my work start and stop?”</b>POC (point of connection), power, sleeves, grade, curbs.</div></li>
<li class="hl"><div><b>“If I were the GC (general contractor), what would I plug?”</b>Each exclusion and each blank scope sheet line.</div></li>
<li><div><b>“What changes are likely, and are my unit prices ready for them?”</b>Added plants, moved valves, extra mulch.</div></li>
<li><div><b>“Would I sign this as a contract tomorrow?”</b>Because that's what it may become.</div></li>
</ol>`,
  ex: `<p>On a public bid as a sub, add a sixth question: “Can the prime copy my quote into its bid item list and Subcontractor List without calling me?”</p>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook. The full list of bid words is in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Proposal / quote / scope letter", "A sub's written offer to a GC: scope, price and terms."],
    ["GC (general contractor)", "The contractor who holds the main contract with the owner and hires subs."],
    ["Prime contractor", "The contractor that bids directly to the public agency; on public jobs, the same role as a GC."],
    ["Scope by line item", "The price broken into types of work, each with a description."],
    ["Inclusion", "An item you state you are providing, to remove doubt."],
    ["Exclusion", "An item near your scope that you are not providing."],
    ["Clarification", "How you read an unclear item, or a condition your price depends on."],
    ["Assumption", "A condition you priced on, stated in the proposal."],
    ["Alternate", "An option priced separately, as an add or a deduct."],
    ["Voluntary alternate", "An option you offer that the documents didn't ask for."],
    ["Unit price", "A price per unit for adding or deleting work after award."],
    ["Allowance", "A fixed amount carried for work that can't be priced yet; unused money goes back to the owner."],
    ["POC (point of connection)", "Where your irrigation system starts."],
    ["Plug", "An amount a GC adds to a sub's bid to cover a missing item."],
    ["Bid leveling", "Comparing sub proposals side by side and adding plugs."],
    ["Scope sheet", "A GC's list of what each trade's price must include."],
    ["No qualified bids", "A GC or agency rule that bids may not carry exclusions or conditions."],
    ["Validity period", "How long your price holds."],
    ["Revision (Rev. 1)", "A replacement proposal, numbered and dated, that says what changed."],
    ["Plant establishment", "Period after planting when you water, weed and replace plants."],
    ["Type 1 plant establishment", "Caltrans term for an establishment period with full maintenance; 750 working days on 11-431064."],
    ["Warranty / guarantee", "Your promise to replace failed plants or fix work for a set time."],
    ["Mobilization", "Moving crew and equipment onto the site and setting up; each trip costs money."],
    ["Conditional bid", "A public bid with conditions added; may be rejected as non-responsive."],
    ["Non-responsive", "A bid that doesn't follow the bid documents' rules."],
    ["Subcontractor List", "Form where a public prime lists subs, their items and percents."],
    ["Bid item", "One numbered line on a public agency's Bid Item List, with a unit and quantity."],
    ["Extension", "Unit price × quantity."],
    ["LS, EA, LF, SF / SQFT, SQYD, CY", "Lump sum, each, linear feet, square feet, square yards, cubic yards."],
    ["#1, #5, #15 container; 24\" box", "Nursery container sizes (about 1, 5 and 15 gallons) and a 24-inch wooden box tree."],
    ["CSI / MasterFormat", "The Construction Specifications Institute's numbering system for specs, like 32 93 00 Plants."],
    ["CSLB", "Contractors State License Board, which licenses California contractors."],
    ["DIR registration", "Registration with the Department of Industrial Relations, required to bid or work on public works."],
    ["RFI (request for information)", "A written question about the plans or specs."],
    ["DG (decomposed granite)", "Crushed granite used for paths; “stabilized” DG has a binder added."],
    ["Sch 40 / Class 315", "PVC pipe wall ratings; Schedule 40 and pressure Class 315."],
    ["SWPPP and BMPs", "Storm water pollution prevention plan, and the best management practices (fiber rolls, inlet protection) it calls for."],
    ["LDs (liquidated damages)", "A set dollar amount per day the job finishes late."],
    ["O&amp;M manual", "Operation and maintenance manual given to the owner at the end."]
  ]
},

{ t: "quiz", id: "m13", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "Why list plan sheet dates and every addendum in your proposal?", a: ["It looks professional", "It records exactly which documents your price covers", "The GC requires it by law"], c: 1, why: "If plans change after you bid, the dates prove what you priced." },
    { q: "Your proposal excludes ten items near your scope. What will the GC likely do?", a: ["Ignore them", "Add a plug for each one when leveling", "Call every other sub to remove theirs"], c: 1, why: "Each exclusion is a gap the GC has to fill, usually with a plug on your number." },
    { q: "Which exclusion is clear?", a: ["Anything not specifically listed", "Backflow preventer and enclosure, by plumbing", "Excludes all extra work"], c: 1, why: "It names a specific item and who provides it." },
    { q: "An RFI about the controller location wasn't answered by bid day. What do you do on a private bid?", a: ["Don't mention it", "State how you priced it as a clarification with the RFI number", "Exclude the controller"], c: 1, why: "A stated assumption tells the GC exactly what your price covers." },
    { q: "Why are deduct unit prices usually lower than add unit prices?", a: ["To trick the GC", "You keep mobilization and some overhead when work is removed", "Deducts don't include material"], c: 1, why: "Removing work doesn't remove all of your fixed costs." },
    { q: "You're the prime on a City of San Diego job and worry about rock. Can you write “excludes rock excavation” on the bid form?", a: ["Yes, if it's in writing", "No, a conditional bid may be rejected as non-responsive", "Only on Caltrans jobs"], c: 1, why: "Every bidder must bid the same terms; ask before bid day instead." },
    { q: "Quoting a prime on a Caltrans job, how should you organize your quote?", a: ["By your own line items", "By the agency's bid item numbers, units and quantities", "As one lump sum"], c: 1, why: "The prime needs to drop your prices into its bid item list and list your items and percents." },
    { q: "AI wrote “(18) 36\" box trees” but you priced 24\" box. What's the rule?", a: ["Send it, the GC will catch it", "Check every quantity, size and product against your estimate before sending", "Delete the tree line"], c: 1, why: "You're responsible for every word in the proposal, whoever drafted it." },
    { q: "Which phrase is safest in a scope line?", a: ["Complete irrigation system", "Irrigation from the 2\" stub-out downstream of the backflow, per L-3.0 to L-3.2", "All irrigation as required"], c: 1, why: "It says where the work starts and which sheets it covers, without open-ended promises." },
    { q: "An alternate's direct cost is $16,187 and your markup is 15%. About what do you quote?", a: ["$16,187", "$18,600", "$32,374"], c: 1, why: "$16,187 × 1.15 = $18,615.05, rounded to $18,600." },
    { q: "The GC's scope sheet puts irrigation sleeves in landscape, but your proposal excludes them. What should you do?", a: ["Leave both as they are", "Include them or answer the scope line clearly and make the proposal match", "Delete the scope sheet"], c: 1, why: "If the two documents disagree, you've created a dispute before the job starts." },
    { q: "Addendum 3 arrives after you sent your proposal and doesn't change your price. What do you send?", a: ["Nothing", "A Rev. 1 proposal listing Addendum 3, saying no change in price", "A new proposal with a new number and no reference to the old one"], c: 1, why: "The GC needs to know you saw the addendum and which proposal to use." },
    { q: "On a Caltrans sub quote, why list the bid items you did NOT quote?", a: ["To exclude work inside your items", "So the prime knows which items it still has to cover", "Caltrans requires it"], c: 1, why: "It's a map of your coverage, not an exclusion of your own work." },
    { q: "A unit price limit says unit prices apply to changes up to 15% of quantity. The item is 1,210 plants. Up to how many plants do your unit prices cover?", a: ["121", "181", "1,210"], c: 1, why: "1,210 × 0.15 = 181.5, so up to 181 plants." }
  ]
},

{ t: "practice", id: "m13", h: "Practice assignments",
  lead: "By the end, you'll have a proposal template, an exclusions library, a scope sheet answer, two full proposals and a review checklist.",
  items: [
    { h: "Build the proposal template", hrs: 0.5, d: "<p>Update the company's bid template so it has every part on the “Parts of a proposal” slide in that order: header with CSLB and DIR numbers, documents, line items, total, inclusions, exclusions, clarifications, alternates, unit prices, schedule, establishment, warranty, terms, signature. Save it as the master.</p>" },
    { h: "Write the company's exclusions library", hrs: 0.5, d: "<p>Start from the list and the four library slides in this module. Rewrite each line in the company's own words, sorted by category (site, water and power, planting and maintenance, paperwork). For each, write “use when” and “don't use when.” Delete what you'd never exclude, add anything from past jobs that caused arguments, and mark which items need a GC phone call first. Review it with the owner.</p>" },
    { h: "Quote the 11-428704 landscape scope to a prime", hrs: 1, d: "<p>Using <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a> and your prices from Module 15, write a sub quote to a made-up prime for the planting and irrigation items (items 20–69, leaving out what you'd subcontract or wouldn't do, such as electric service). Follow the three-page 11-431064 sample: each item number, description, unit, quantity, unit price and extension; your license, DIR number and any certifications; the items and percents for the Subcontractor List; the items you didn't quote; and no more than three short clarifications. Check every extension.</p>" },
    { h: "Write a full proposal for a private-style job", hrs: 1, d: "<p>Use a landscape plan set from a current GC invitation (BuildingConnected or PlanHub). If you don't have one yet, download a landscape plan set from the <a href=\"https://www.sandiego.gov/cip/bidopps/\" target=\"_blank\" rel=\"noopener\">City of San Diego bid opportunities</a> page and write the proposal as if you were quoting a GC on a private job. Use your template: plan dates, at least six line items written with the five-step method, inclusions, exclusions from your library adjusted to that job, clarifications, two alternates, five unit prices, schedule and phasing language, establishment, warranty and terms.</p>" },
    { h: "Price alternates and unit prices with full math", hrs: 0.5, d: "<p>For the proposal you just wrote, build a worksheet for one add alternate, one deduct alternate and five unit prices (add and deduct), showing every line of math like the worked examples: material, tax, labor hours and rate, extras, markup and rounding. Use the company's real labor rate and markup from Modules 9 and 10.</p>" },
    { h: "Answer a GC scope sheet", hrs: 0.5, d: "<p>Ask a GC you're prequalifying with for a sample landscape scope sheet, or use the made-up one in this module. Answer every line (included, excluded, or priced separately with a price), then make sure your proposal says the same thing. Write down any line you'd call the GC about and what you'd ask.</p>" },
    { h: "Revise your proposal for an addendum", hrs: 0.25, d: "<p>Invent an addendum that adds three trees and deletes 200 SF of DG on your private-style job. Re-price it on your recap sheet, then issue Rev. 1 with the revision line, the addendum in the document list, the one-line summary of the change and the new total.</p>" },
    { h: "Draft and check line items with AI", hrs: 0.25, d: "<p>Following Step 8 of <a href=\"https://claude.ai/artifact/Lya5kQRNBTrDcNgc7xeumK\" target=\"_blank\" rel=\"noopener\">How to Make a Bid</a>, have AI draft descriptions for the line items in your private-style proposal. Then mark every change you had to make: wrong quantities, invented details, risky words like “complete” or “as required,” and promises of excluded work. Keep the list as your review checklist.</p>" },
    { h: "Level your own proposal and run the checklist", hrs: 0.5, d: "<p>Put your private-style proposal next to the sample proposal in this module on a leveling sheet like <a href=\"#m1-14\">Module 1's</a>. For each exclusion, write the plug a GC would add. Fix the two lines that would cost you the most. Then score the final version on the Proposal review checklist slide and fix every line that scored below 2.</p>" }
  ]
},

{ h: "Module 13 summary",
  lead: "Your proposal tells the GC (general contractor) exactly what your number buys. Clear words get your price carried.",
  body: `<ul>
<li>Know which document you're writing: GC proposal, bid-item quote to a public prime, or the agency's own bid form.</li>
<li>Gather your recap, plan and addenda logs, RFI log and the GC's scope sheet before you write.</li>
<li>Use one template, list plan dates and every addendum, and write each line item in five steps: what, where shown, how much, where it stops, what's included.</li>
<li>Exclude specific items that belong to others, chosen from a library; call first on big items; never exclude your own work.</li>
<li>Price alternates and unit prices with full math and the same markups as the base bid; state limits and allowances.</li>
<li>Write clear schedule, phasing, establishment and warranty language that matches the specs.</li>
<li>Answer every scope sheet line, issue a numbered revision after any addendum, and quote public primes by bid item with listing information.</li>
<li>Check every proposal with the review checklist, including anything AI drafted, and send it early as a signed PDF.</li>
</ul>
<p><strong>Next: Module 14 · Submitting Public Bids and Bid Day</strong></p>`
}
]
});
