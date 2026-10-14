(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 13, hours: 5, title: "Writing the Proposal",
slides: [

{ t: "cover",
  h: "Writing the Proposal",
  lead: "Your price only counts if the GC understands exactly what it buys. This module shows how to write a landscape and irrigation proposal that is clear, fair to you, and easy for a GC to compare and carry.",
  objectives: [
    "Name every part of a sub proposal to a GC and what goes in it",
    "Write scope by line item that matches the plans and the GC's breakdown",
    "Write clear exclusions and clarifications without over-excluding",
    "Price alternates and add/deduct unit prices",
    "Make your proposal easy for a GC to level",
    "Explain why a public bid form can't carry exclusions",
    "Use AI to draft line-item descriptions, then check every word"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "3.5 h"], ["Module total", "5 h"]],
  body: `<p>Module 10 gave you the number. This module is about the words around it. On bid day, the words decide whether your number gets used.</p>`
},

{ h: "What a proposal is, and why the words matter",
  lead: "Your proposal (also called a quote, bid or scope letter) is your written offer to the GC. If it's accepted, its words become part of your subcontract.",
  body: `<ul>
<li>The GC uses your proposal to build its own bid to the owner, often in the last hour before the deadline.</li>
<li>The GC compares your proposal to other landscape subs line by line. Anything unclear gets a “plug” (a guess) added to your number.</li>
<li>After award, the subcontract usually lists your proposal or its scope. What you included and excluded is what you'll be held to.</li>
<li>A good proposal answers the GC's questions before they're asked: what plans, what's in, what's out, how long, how much for changes.</li>
</ul>`,
  ex: `<p>Two subs bid $140,000. One proposal says “Landscape and irrigation per plans.” The other lists seven line items, references sheets L-1.0 to L-6.0 and Addenda 1–2, and states that the backflow preventer is by the plumber. The GC can carry the second one with confidence. The first one gets a plug.</p>`,
  watch: `<p>“Per plans and specs” with no plan dates is a blank check. If the plans change after you bid, you have no record of what you priced.</p>`
},

{ h: "The parts of a proposal",
  lead: "Every proposal has the same parts in the same order. Use one template so nothing gets left out.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>What goes in it</th></tr></thead>
<tbody>
<tr><td><strong>Header</strong></td><td>Your company, address, CSLB license # and classes, DIR # (public), contact, date, proposal #</td></tr>
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
  deeper: `<p>The company already has a bid template; the <a href="https://claude.ai/artifact/Lya5kQRNBTrDcNgc7xeumK" target="_blank" rel="noopener">How to Make a Bid</a> process (Step 9) says to fill in every section and mark “N/A” on sections that don't apply instead of deleting them. That way a missing section is always a mistake you can see.</p>`
},

{ h: "Header and document references",
  lead: "List exactly which documents you priced. This one paragraph protects you more than any other part of the proposal.",
  body: `<ul>
<li><strong>Plans:</strong> sheet numbers and the date or revision on each set. Example: “Landscape sheets L-1.0 through L-6.0, 100% CD set dated 06/12/2026.”</li>
<li><strong>Specifications:</strong> the sections you priced and their dates. Example: “Sections 32 80 00 Irrigation, 32 91 13 Soil Preparation, 32 93 00 Plants, dated 06/12/2026.”</li>
<li><strong>Addenda:</strong> every one, by number and date. If an addendum doesn't affect you, list it anyway so the GC knows you saw it.</li>
<li><strong>Other documents:</strong> geotech report, soils report, GC scope sheet, job walk notes.</li>
<li><strong>Your credentials:</strong> license number and class (C-27), DIR registration number on public work.</li>
</ul>`,
  watch: `<p>Check the GC's portal for addenda right before you send. A proposal that lists Addenda 1–2 when Addendum 3 changed the planting plan is a proposal for the wrong job.</p>`
},

{ h: "Scope by line item",
  lead: "Break the price into the pieces a GC needs: by type of work, matched to the plans, and matched to the GC's own breakdown when they give one.",
  body: `<ul>
<li>Group by CSI section or type of work: irrigation (32 80 00 / 32 84 00), soil preparation (32 91 13), turf (32 92 00), plants (32 93 00), mulch, DG and boulders, establishment.</li>
<li>For each line: what it is, key quantities and sizes, the sheet or spec reference, and a price.</li>
<li>Use the GC's breakdown if they send a scope sheet or bid form (later slide). If they split “irrigation sleeves” out, price sleeves separately.</li>
<li>Give quantities where it helps the GC check you: “(18) trees: (14) 24" box, (4) 36" box.”</li>
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

{ h: "Inclusions",
  lead: "Inclusions answer the questions a GC will ask while leveling. Use them for the items most likely to be missed or argued about.",
  body: `<ul>
<li>Point of connection: where your irrigation starts (downstream of the backflow, from the meter, from a stub-out)</li>
<li>Controller: furnish and install, mounting, and who connects power</li>
<li>Soil testing: number of tests included and what happens after the report</li>
<li>Fine grading: tolerance you'll deliver, once rough grade is handed to you</li>
<li>Establishment or maintenance period and what's in it</li>
<li>Submittals, as-builts, controller charts, O&amp;M manuals</li>
<li>Mobilizations: how many trips are in the price</li>
<li>Prevailing wage and certified payroll, when the job requires it</li>
</ul>`,
  ex: `<p>“Includes (2) mobilizations: one for irrigation and planting, one for punch list. Additional mobilizations requested by the GC: $850 each.” A GC planning a phased job now knows what phases will cost.</p>`
},

{ h: "Exclusions: clear, not over-excluded",
  lead: "An exclusion tells the GC what someone else must provide. A good one names a real item near your scope. A bad one excludes things you're supposed to do.",
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
  deeper: `<p>Exclusions only work if they don't conflict with what the GC's bid form or the specs require. The How to Make a Bid process (Step 5) says to check this before pricing. If the GC's bid instructions say “no qualified bids,” call the estimator and ask how to handle items you can't include.</p>`
},

{ h: "A starting list of exclusions and clarifications",
  lead: "Start every proposal from this list, then delete what doesn't apply and adjust the wording to the job. It's a starting point, not a form to paste.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Typical wording (adjust to the job)</th></tr></thead>
<tbody>
<tr><td>Permits and fees</td><td>Building, grading, encroachment and plan check permits and fees by others</td></tr>
<tr><td>Water meter and connection</td><td>Water meter, meter fees, capacity and connection fees by owner/GC; irrigation starts at the point of connection stated above</td></tr>
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
<tr><td>Storm water</td><td>SWPPP preparation and BMPs by GC, except protection of our own stockpiles</td></tr>
<tr><td>Testing</td><td>Third-party testing and inspection fees by others, except soil tests listed above</td></tr>
</tbody></table></div>`,
  watch: `<p>Read the job's documents before keeping a line. If the specs put the backflow preventer in the irrigation section, excluding it makes you incomplete. Either include it or call the GC and ask.</p>`
},

{ h: "Clarifications and assumptions",
  lead: "A clarification explains how you read something unclear, or a condition your price depends on. Use them where an RFI wasn't answered in time.",
  body: `<ul>
<li><strong>Interpretations:</strong> “Plant legend lists 1,150 #1 groundcover; plan count is 1,210. We priced 1,210 per the plans.”</li>
<li><strong>Conditions:</strong> “Price assumes site access for a skid steer and 10-wheel delivery truck to all planting areas.”</li>
<li><strong>Sequence:</strong> “Price assumes planting areas turned over in no more than two phases.”</li>
<li><strong>Unanswered RFIs:</strong> “RFI #3 (controller location) not answered by bid date. Priced as shown on L-3.0.”</li>
<li><strong>Substitutions:</strong> “Priced as specified. Equal products available on request.”</li>
</ul>`,
  ex: `<p>The How to Make a Bid process says: if an RFI answer doesn't come back in time, price it with a stated assumption on the bid. That assumption goes here, in plain words, with the RFI number.</p>`,
  watch: `<p>A clarification that quietly removes scope is an exclusion in disguise. GCs notice. If you aren't providing it, put it in exclusions where the GC expects to look.</p>`
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
<li>Common adds and deducts: per plant by size, per tree, per valve, per head, per LF of drip or lateral, per CY of mulch.</li>
<li>Add prices include labor, material, overhead and profit.</li>
<li>Deduct prices are lower than adds: you keep mobilization and some overhead when work is removed.</li>
<li>State a limit: “Unit prices apply to changes up to 15% of the quantity.”</li>
</ul></div>
</div>`,
  watch: `<p>Unit prices you write today become the change order prices on the job. If you lowball them to look good on bid day, every change during the job loses money.</p>`
},

{ h: "Schedule, plant establishment and warranty",
  lead: "GCs need to know how long you'll take, what comes before you, and how long you're responsible for the plants.",
  body: `<ul>
<li><strong>Duration and crew:</strong> “Approximately 6 weeks with a 5-person crew after site turnover.”</li>
<li><strong>What must happen first:</strong> rough grade, sleeves, power at the controller, water at the point of connection.</li>
<li><strong>Lead times:</strong> specimen trees, controllers or specified products with long lead times. Give the date you need approval to order.</li>
<li><strong>Plant establishment / maintenance:</strong> length (from the specs), when it starts (usually acceptance of planting), what's included, and who pays water.</li>
<li><strong>Warranty:</strong> plant and workmanship guarantee periods from the specs, starting at acceptance. State what voids it: vandalism, owner neglect, loss of water or power, acts of nature.</li>
</ul>`,
  ex: `<p>Real example of how long establishment can run: Caltrans 11-428704 had 120 working days of construction followed by 250 working days of plant establishment (<a href="#m15-1">Module 15</a>). Private jobs are usually much shorter. Whatever the specs say, state it in your proposal so the GC prices the same period.</p>`,
  watch: `<p>“Warranty per specs” without reading the specs is risky. Some landscape specs require replacing plants for a full year. Price the replacements in your establishment cost (Module 10), then state the period.</p>`
},

{ h: "Validity, payment, insurance, bonds and signature",
  lead: "The last section of the proposal protects your price and your cash.",
  body: `<ul>
<li><strong>Validity:</strong> “This proposal is valid for 30 days from the date above.” Match it to your supplier quotes (Module 8); if work starts later, the price may need escalation.</li>
<li><strong>Payment terms:</strong> monthly progress billing, retention per the subcontract, and payment for materials stored on site if allowed.</li>
<li><strong>Insurance:</strong> your limits, and that you'll provide certificates and endorsements required by the subcontract. Note any special requirement you haven't priced.</li>
<li><strong>Bonds:</strong> excluded unless requested; give the added cost as a percent.</li>
<li><strong>Signature:</strong> name, title, signature and date, plus a line for the GC to sign and accept.</li>
</ul>`,
  deeper: `<p>California law sets some payment rules no matter what the proposal says. Business and Professions Code § 7108.5 requires a prime contractor to pay a sub its share within 7 days of receiving each progress payment, unless otherwise agreed in writing. On public works, Public Contract Code § 7201 limits retention to 5% for contracts entered on or after January 1, 2012, with exceptions. Check the current text on leginfo.legislature.ca.gov; Module 16 covers billing and retention.</p>`,
  src: "Business and Professions Code § 7108.5; Public Contract Code § 7201."
},

{ h: "How GCs level bids, and how to make yours easy",
  lead: "The GC lines up every landscape proposal on one spreadsheet and adds plugs for missing items. The easiest proposal to level is often the one that gets carried.",
  body: `<p>Review the leveling example in <a href="#m1-14">Module 1 · Bid leveling</a>. Then make your proposal easy to put on that spreadsheet:</p>
<ol class="steps">
<li><div><b>Use their breakdown</b>If the GC sends a scope sheet or bid form, follow its items and order.</div></li>
<li class="hl"><div><b>One price per line</b>Every line item has its own number, and the lines add up to the total.</div></li>
<li><div><b>Say where you start and stop</b>Point of connection, controller power, sleeves, rough grade.</div></li>
<li><div><b>Short exclusions</b>Specific items, in a list, with who provides them.</div></li>
<li class="hl"><div><b>Alternates and unit prices separate</b>Never mixed into the base bid.</div></li>
<li><div><b>Send it early</b>A proposal received 2 hours before bid time gets studied. One received 10 minutes before gets plugged.</div></li>
<li><div><b>PDF on letterhead, signed</b>Plus the GC's own form if they asked for one.</div></li>
</ol>`,
  ex: `<p>After bid day, ask the GC estimator: “Was our proposal easy to level? Did you add any plugs to it?” The answer tells you which exclusion or missing line cost you.</p>`
},

{ h: "Responding to a GC's bid form and scope sheet",
  lead: "When a GC sends its own bid form or scope sheet, that's the format they'll level in. Fill it in exactly, then attach your proposal.",
  body: `<ol class="steps">
<li><div><b>Read every line of the scope sheet</b>GCs often put items in landscape that you don't expect: sleeves, fine grading, erosion control, site furnishings, tree protection.</div></li>
<li class="hl"><div><b>Answer every line</b>Included, excluded, or priced separately. A blank line gets a plug.</div></li>
<li><div><b>Use their totals and alternates</b>Match their alternate numbers and names.</div></li>
<li><div><b>Attach your proposal</b>Your full proposal adds the detail; make sure the two say the same thing.</div></li>
<li><div><b>Adjust for each GC</b>Different GCs split scope differently. Change the line items so each proposal matches what that GC asked for (How to Make a Bid, Step 10).</div></li>
</ol>`,
  watch: `<p>If the GC's form and your attached proposal disagree (the form says “sleeves: included,” your proposal excludes them), you've created a dispute before the job starts. Read both together before you send.</p>`
},

{ h: "Public bids · The bid form is the proposal",
  lead: "When you bid a public job as the prime, you fill in the agency's bid form. You can't add exclusions, conditions or your own scope letter.",
  body: `<ul>
<li>Every bidder must offer to do the same work under the same terms, so the agency can compare prices fairly.</li>
<li>An exclusion or condition changes what you're offering. That gives you an advantage the other bidders didn't get, and it can make your bid non-responsive.</li>
<li>The City of San Diego's bid documents say it plainly: “Conditional Bids may be rejected as being non-responsive. Alternative proposals will not be considered unless called for.”</li>
<li>Caltrans: you bid “based on the bid item quantities shown on the Bid Item List,” and “failure to submit the forms and information as specified may result in a nonresponsive bid.”</li>
</ul>
<p><strong>Where your clarifications go instead:</strong> ask questions before bid day (RFIs or bidder inquiries, Module 12). The answers come back as addenda that every bidder bids on.</p>`,
  ex: `<p>A note on a City bid like “price excludes rock excavation” could get the whole bid thrown out, even if it's the low price. If you're worried about rock, ask before bid day. If the answer doesn't come, price the risk (Module 10) or don't bid.</p>`,
  watch: `<p>Don't write notes, letters or cover pages into a public bid unless the instructions ask for them. Fill in the forms completely and exactly as instructed.</p>`,
  src: "City of San Diego bidding documents, Bid No. K-24-1952-DBB-3-A, Instructions to Bidders 2.6; Caltrans 2018 Standard Specifications, sections 2-1.09 and 2-1.33A."
},

{ h: "Public bids · Quoting a prime as a sub",
  lead: "When you quote a landscape scope to a prime contractor on a public job, write your quote around the agency's bid items so the prime can drop it straight into its bid.",
  body: `<ul>
<li><strong>Quote by bid item number:</strong> item, description, unit, quantity, your unit price and extension, exactly as the Bid Item List shows them.</li>
<li><strong>Say which items, and what percent:</strong> the prime must list subs on its Subcontractor List with bid item numbers and the percent of each item (Module 14). If you do only part of an item, say which part.</li>
<li><strong>Give the listing information:</strong> company name and city, license number, DIR registration number, and DBE or SLBE certification if you have it.</li>
<li><strong>Keep exclusions very short:</strong> the prime can't carry them into its bid. Anything you exclude, the prime must price itself or replace you.</li>
<li><strong>Send it early on bid day:</strong> primes assemble dozens of quotes in the last hours. Many subs quote several primes; the City's bid documents say a sub who quotes one bidder may also quote others.</li>
</ul>`,
  ex: `<p><strong>Real example, 11-428704:</strong> Blue Pacific listed Diversified Landscape for all irrigation, bid items 32–67. The winner, ACCU, listed a boring sub for part of one item: “Item 66, 54%, boring only.” That's the level of detail a prime needs from your quote. See <a href="#m15-1">Module 15</a>.</p>`,
  deeper: `<p>Caltrans 2018 Standard Specifications 2-1.10: the prime lists each sub doing more than ½ of 1 percent of the total bid or $10,000, whichever is greater, with its business name and location, license number (non-federal-aid contracts), public works contractor registration number, bid item numbers, percent of each item, and a description when less than 100% of an item. Section 3-1.03: no contractor or subcontractor may be awarded public work unless registered with DIR.</p>`,
  src: "Caltrans 2018 Standard Specifications 2-1.10, 3-1.03; Caltrans Bid Summary and ACCU bid book, contract 11-428704; City of San Diego Bid No. K-24-1952-DBB-3-A, Instructions to Bidders 17."
},

{ h: "Using AI to draft line-item descriptions",
  lead: "AI can turn your priced line items and the plans into clear descriptions fast. You are still responsible for every word that goes out.",
  body: `<p>The company's <a href="https://claude.ai/artifact/Lya5kQRNBTrDcNgc7xeumK" target="_blank" rel="noopener">How to Make a Bid</a> process does this in Step 8, after pricing:</p>
<ol class="steps">
<li><div><b>Give it the right inputs</b>The plans and specs, your priced line items with quantities, and your exclusions list.</div></li>
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
  body: `<p>Check the math: $48,600 + $14,200 + $21,400 + $26,300 + $9,800 + $12,700 + $7,800 = $140,800.</p>`
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
  watch: `<p>Every line on this page should trace back to your recap sheet (Module 10). If a unit price or alternate isn't on the recap, it hasn't been priced with your markups.</p>`
},

{ h: "Common mistakes",
  lead: "Most proposal mistakes are small on paper and expensive on the job.",
  body: `<ul>
<li>No plan dates or addenda listed, so you can't prove what you priced</li>
<li>Line items that don't add up to the total</li>
<li>Excluding work that's on the landscape plans, or that the GC's scope sheet gives to you</li>
<li>Pasting the full boilerplate exclusions list without reading the job</li>
<li>Leaving out the point of connection, controller power or sleeves</li>
<li>Unit prices with no markup, or lowballed to look good</li>
<li>Establishment period or warranty different from the specs</li>
<li>Validity period longer than your supplier quotes</li>
<li>Exclusions or notes written onto a public bid form</li>
<li>Sending the same proposal to every GC when their scope sheets differ</li>
<li>Sending at the last minute, unsigned, or as an editable file instead of a PDF</li>
</ul>`,
  ex: `<p>Before you send, read the proposal as if you were the GC estimator: “What would I have to plug? What would I argue about later?” Fix those first.</p>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Proposal / quote / scope letter", "A sub's written offer to a GC: scope, price and terms."],
    ["Scope by line item", "The price broken into types of work, each with a description."],
    ["Inclusion", "An item you state you are providing, to remove doubt."],
    ["Exclusion", "An item near your scope that you are not providing."],
    ["Clarification", "How you read an unclear item, or a condition your price depends on."],
    ["Assumption", "A condition you priced on, stated in the proposal."],
    ["Alternate", "An option priced separately, as an add or a deduct."],
    ["Voluntary alternate", "An option you offer that the documents didn't ask for."],
    ["Unit price", "A price per unit for adding or deleting work after award."],
    ["Point of connection (POC)", "Where your irrigation system starts."],
    ["Plug", "An amount a GC adds to a sub's bid to cover a missing item."],
    ["Bid leveling", "Comparing sub proposals side by side and adding plugs."],
    ["Scope sheet", "A GC's list of what each trade's price must include."],
    ["Validity period", "How long your price holds."],
    ["Plant establishment", "Period after planting when you water, weed and replace plants."],
    ["Warranty / guarantee", "Your promise to replace failed plants or fix work for a set time."],
    ["Conditional bid", "A public bid with conditions added; may be rejected as non-responsive."],
    ["Non-responsive", "A bid that doesn't follow the bid documents' rules."],
    ["Subcontractor List", "Form where a public prime lists subs, their items and percents."]
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
    { q: "AI wrote “(18) 36\" box trees” but you priced 24\" box. What's the rule?", a: ["Send it, the GC will catch it", "Check every quantity, size and product against your estimate before sending", "Delete the tree line"], c: 1, why: "You're responsible for every word in the proposal, whoever drafted it." }
  ]
},

{ t: "practice", id: "m13", h: "Practice assignments",
  lead: "By the end, you'll have a proposal template, a starting exclusions list, and two full proposals written.",
  items: [
    { h: "Build the proposal template", hrs: 0.5, d: "<p>Update the company's bid template so it has every part on the “Parts of a proposal” slide in that order: header with CSLB and DIR numbers, documents, line items, total, inclusions, exclusions, clarifications, alternates, unit prices, schedule, establishment, warranty, terms, signature. Save it as the master.</p>" },
    { h: "Write the company's starting exclusions list", hrs: 0.5, d: "<p>Start from the list in this module. Rewrite each line in the company's own words, delete what you'd never exclude, add anything from past jobs that caused arguments. Review it with the owner and mark which items need a GC phone call before you exclude them.</p>" },
    { h: "Quote the 11-428704 landscape scope to a prime", hrs: 1, d: "<p>Using <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a> and your prices from Module 15, write a sub quote to a made-up prime for the planting and irrigation items (items 20–69, leaving out what you'd subcontract or wouldn't do, such as electric service). List each item number, description, unit, quantity, unit price and extension; your license, DIR number and any certifications; the items and percents for the Subcontractor List; and no more than three short clarifications. Explain in two sentences why it has almost no exclusions.</p>" },
    { h: "Write a full proposal for a private-style job", hrs: 1, d: "<p>Use a landscape plan set from a current GC invitation (BuildingConnected or PlanHub). If you don't have one yet, download a landscape plan set from the <a href=\"https://www.sandiego.gov/cip/bidopps\" target=\"_blank\" rel=\"noopener\">City of San Diego bid opportunities</a> page and write the proposal as if you were quoting a GC on a private job. Use your template: plan dates, at least six line items, inclusions, exclusions adjusted to that job, clarifications, two alternates, five unit prices, schedule, establishment, warranty and terms.</p>" },
    { h: "Draft and check line items with AI", hrs: 0.25, d: "<p>Following Step 8 of <a href=\"https://claude.ai/artifact/Lya5kQRNBTrDcNgc7xeumK\" target=\"_blank\" rel=\"noopener\">How to Make a Bid</a>, have AI draft descriptions for the line items in your private-style proposal. Then mark every change you had to make: wrong quantities, invented details, promises of excluded work. Keep the list as your review checklist.</p>" },
    { h: "Level your own proposal", hrs: 0.25, d: "<p>Put your private-style proposal next to the sample proposal in this module on a leveling sheet like <a href=\"#m1-14\">Module 1's</a>. For each exclusion, write the plug a GC would add. Fix the two lines that would cost you the most on a GC's spreadsheet.</p>" }
  ]
},

{ h: "Module 13 summary",
  lead: "Your proposal tells the GC exactly what your number buys. Clear words get your price carried.",
  body: `<ul>
<li>Use one template with every part in the same order, and list plan dates and every addendum.</li>
<li>Break scope into line items that match the plans and the GC's breakdown, and add up to the total.</li>
<li>Exclude specific items that belong to others; don't exclude your own work.</li>
<li>Use clarifications for unclear items and unanswered RFIs, with the RFI number.</li>
<li>Price alternates and unit prices with the same markups as the base bid.</li>
<li>On public bids as prime, the bid form is the proposal: no exclusions or conditions. Quote primes by bid item number.</li>
<li>AI can draft descriptions; you check every quantity, size and promise before you sign.</li>
</ul>
<p><strong>Next: Module 14 · Submitting Public Bids and Bid Day</strong></p>`
}
]
});
