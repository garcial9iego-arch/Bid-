(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 1, hours: 9.5, title: "How Construction Bidding Works",
slides: [

{ t: "cover",
  h: "How Construction Bidding Works",
  lead: "Before you price a single sprinkler head, you need to know how the commercial world works: who is involved, how money and paperwork move, and how a contractor wins a job.",
  objectives: [
    "Explain in your own words what a bid is and why it is a promise",
    "Name every player on a commercial project and what each one does",
    "Describe how contracts, bills, payments and retention move between them",
    "Tell the difference between private work and public work, and between lump sum and unit price contracts",
    "Explain how general contractors choose subs, and protect yourself from bid shopping",
    "Read a real public bid tab and learn from it",
    "Follow a bid from invitation to award, and avoid the common beginner mistakes"
  ],
  time: [["Reading and slides", "4 h"], ["Practice assignments", "5.5 h"], ["Module total", "9.5 h"]],
  body: "<p>You already know how to install landscape and irrigation. This module adds the part nobody at the company knows yet: how commercial work is bought and sold. Take it in two or three sittings. The real examples come from a City of San Diego park job and five real Caltrans freeway landscape jobs.</p>"
},

{ h: "How to use this course",
  lead: "Every slide starts in plain words. Extra detail is there when you want it, but you never need it to keep going.",
  body: `<ul>
<li><strong>Main text</strong> is what you must know. Read this on every slide.</li>
<li><strong>Example</strong> boxes show how it looks on a real job. When numbers are made up for practice, the box says so.</li>
<li><strong>Watch out</strong> boxes are mistakes that cost contractors money.</li>
<li><strong>Go deeper</strong> opens extra detail: laws, numbers and fine print. Skip it the first time if you like.</li>
<li><strong>Read aloud</strong> (top right of each slide) reads the slide to you.</li>
<li><strong>Words to know</strong> near the end of each module lists new terms and abbreviations. Keep your own list too.</li>
<li><strong>Bid Dictionary</strong> (<a href="#dict">open it here</a>) lets you look up any word or abbreviation you meet on a plan, spec or bid form.</li>
<li><strong>Practice</strong> is where most of the hours are. The course only works if you do the practice.</li>
</ul>`,
  deeper: `<p>About accuracy: fees, limits and rules change. Numbers in this course were checked in 2026. Before you rely on one for a real bid, confirm it at the source listed on the slide.</p>
<p>This course is training, not legal advice. For how your company is set up, contracts and bonding, the right people are a construction attorney, a CPA (certified public accountant) and a surety (bonding) agent.</p>`
},

{ h: "What is a bid?",
  lead: "A bid is a written promise: “We will do this exact work, under these conditions, for this price.”",
  body: `<p>Every bid has three parts:</p>
<ol>
<li><strong>Scope.</strong> The work you will do. On commercial jobs this comes from the plans and specifications, not from a conversation.</li>
<li><strong>Price.</strong> One total, often broken into line items.</li>
<li><strong>Terms.</strong> What is <em>not</em> included (exclusions), assumptions you made, and how long the price is good for.</li>
</ol>
<p>If the client accepts it, your bid becomes the basis of a contract. You are expected to build it for that number.</p>`,
  ex: `<p>“Landscape and irrigation per sheets L-1.0 to L-4.2 and spec sections 32 84 00 and 32 93 00, including 90-day plant establishment. Excludes permits, bonds and water meter fees. Total: $186,400. Price good for 60 days.”</p>
<p>In that sentence, “L-1.0” is a landscape plan sheet number and “32 84 00” is a spec section number from CSI MasterFormat (the numbering system most project manuals use; Division 32 is site work and landscape).</p>`,
  watch: `<p>Never send a number you are not willing to build for. “We'll fix it later” does not work in commercial bidding. A low number you can't live with is worse than losing the bid.</p>`,
  deeper: `<p><strong>Public bids:</strong> in California, once public bids are opened you generally can't withdraw yours. The Public Contract Code (sections 5100–5110) gives relief only for certain clerical mistakes (not bad judgment), and you must notify the agency in writing within five working days after the bid opening.</p>
<p><strong>Private bids to a general contractor:</strong> a subcontractor's bid can still bind you. In the California case <em>Drennan v. Star Paving</em> (1958), a general contractor used a sub's low bid in its own bid; the sub tried to back out, and the court held the sub to its price because the general contractor had relied on it. That idea, called promissory estoppel, is still applied today.</p>`,
  src: "California Public Contract Code §§5100–5110; Drennan v. Star Paving Co., 51 Cal.2d 409 (1958)."
},

{ h: "Residential vs. commercial: what changes",
  lead: "Installing landscape is the same skill. What changes is who hires you, the paperwork, the competition and how you get paid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>Residential (what you know)</th><th>Commercial (what you're learning)</th></tr></thead>
<tbody>
<tr><td><strong>Who hires you</strong></td><td>A homeowner</td><td>A general contractor (GC), or a public agency directly</td></tr>
<tr><td><strong>Who designs</strong></td><td>Often you</td><td>A landscape architect. You build exactly what is drawn.</td></tr>
<tr><td><strong>Documents</strong></td><td>A sketch or an idea</td><td>A plan set, a specification book and a contract</td></tr>
<tr><td><strong>How price is set</strong></td><td>You quote, they decide</td><td>Several contractors price the same plans; the comparison decides</td></tr>
<tr><td><strong>Payment</strong></td><td>Deposit and progress payments</td><td>Monthly bill (“pay application”), paid 30–60+ days later, with part held back until the end (“retention,” usually 5%)</td></tr>
<tr><td><strong>Paperwork</strong></td><td>Light</td><td>Insurance certificates, submittals, schedules, lien releases, certified payroll on public jobs</td></tr>
<tr><td><strong>Changes</strong></td><td>Talk it over and adjust</td><td>Only by a written, signed change order</td></tr>
<tr><td><strong>Schedule</strong></td><td>Flexible</td><td>Tied to the GC's schedule. Delays can cost you money.</td></tr>
</tbody></table></div>`,
  deeper: `<p>California's home improvement rules limit a homeowner down payment to 10% of the contract or $1,000, whichever is less (Business and Professions Code §7159). Commercial contracts don't have that cap, but they have their own terms: retention, pay-when-paid clauses, insurance requirements and more. You will read those in Module 16.</p>`,
  src: "Cal. Business & Professions Code §7159."
},

{ h: "The players on a commercial project",
  lead: "Every commercial job has the same cast. Learn who each one is, because each one affects your bid.",
  body: `<div class="flow" role="list">
<div class="node" role="listitem"><b>Owner</b><span>Pays for the project: a developer, business, HOA (homeowners association), city, school district</span></div>
<div class="node" role="listitem"><b>Designers</b><span>Landscape architect, civil engineer, architect</span></div>
<div class="node" role="listitem"><b>General contractor</b><span>Signs with the owner, runs the job, hires the trades</span></div>
<div class="node you" role="listitem"><b>You: landscape sub</b><span>Irrigation, planting, soil, mulch, establishment</span></div>
<div class="node" role="listitem"><b>Suppliers</b><span>Irrigation supply house, nurseries, soil yards, rental yards</span></div>
<div class="node" role="listitem"><b>Inspectors</b><span>City inspector, owner's rep, agency resident engineer</span></div>
</div>
<ul>
<li>The <strong>landscape architect (LA)</strong> draws the planting and irrigation plans and writes the landscape specs. They answer design questions and approve your products.</li>
<li>The <strong>civil engineer</strong> draws grading, drainage and utilities. Your water source (the point of connection) is often on their sheets.</li>
<li>The <strong>general contractor (GC)</strong> is your customer on most private jobs. Their estimator invites you to bid; their project manager and superintendent run the job.</li>
</ul>
<p>The next five slides look at each group more closely.</p>`,
  ex: `<p>A new drive-thru coffee shop. <strong>Owner:</strong> a developer. <strong>LA:</strong> draws three landscape sheets. <strong>GC:</strong> builds everything and hires you for landscape and irrigation. <strong>Suppliers:</strong> you buy irrigation parts from a supply house such as Ewing or SiteOne, and plants from a wholesale nursery. <strong>Inspector:</strong> the city checks the backflow device and the final landscape.</p>`
},

{ h: "The owner's side: owner, owner's rep and construction manager",
  lead: "The owner pays for the job. On bigger jobs the owner also hires people to watch the money and the work, and you will deal with them.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Role</th><th>Who they are</th><th>What they do that affects you</th></tr></thead>
<tbody>
<tr><td><strong>Owner</strong></td><td>Developer, business, HOA (homeowners association), city, school district, Caltrans (the California Department of Transportation)</td><td>Sets the budget, signs the main contract, pays. Approves (or refuses) changes.</td></tr>
<tr><td><strong>Owner's representative (owner's rep)</strong></td><td>A consultant or staff person who speaks for the owner</td><td>Runs meetings, reviews monthly bills, approves change orders up to a limit. Your paperwork often passes across their desk.</td></tr>
<tr><td><strong>Construction manager (CM)</strong></td><td>A firm hired to manage the project for the owner</td><td>Manages schedule and budget. On some jobs the CM bids out “trade packages” directly, so you may bid to the CM instead of a GC.</td></tr>
<tr><td><strong>Resident engineer (RE)</strong></td><td>The agency's person in charge in the field on public jobs</td><td>Measures quantities, approves work, signs off on payment. On Caltrans and City of San Diego jobs, the RE is who you answer to.</td></tr>
<tr><td><strong>Property manager</strong></td><td>Runs the finished property</td><td>Takes over the landscape after acceptance. Gets your controller charts, as-built drawings and warranty calls.</td></tr>
</tbody></table></div>`,
  ex: `<p>On the City of San Diego's EMTS Boat Dock Esplanade park (bid K-24-1952), the specs say final grades “shall be acceptable to the Resident Engineer before planting.” That is a person you need to schedule, not just a line in a book.</p>`,
  watch: `<p>A friendly owner's rep on site can't change your contract. Only a written change order signed by the party you contract with (usually the GC) does. Module 16 covers change orders.</p>`,
  src: "City of San Diego, Bidding Documents for EMTS Boat Dock Esplanade, K-24-1952-DBB-3-A (2023), Supplementary Special Provisions §801."
},

{ h: "The landscape architect: what they do for you",
  lead: "The landscape architect (LA) designs the job, then checks your work at almost every step. Knowing their steps helps you plan your time and your price.",
  body: `<ol class="steps">
<li><div><b>Designs it</b>Draws the planting and irrigation plans, details and notes, and writes the landscape spec sections.</div></li>
<li><div><b>Answers bidding questions</b>Your written questions (RFIs, requests for information) go to the GC or agency, which sends them to the LA. Answers come back as addenda (official changes to the bid documents).</div></li>
<li class="hl"><div><b>Reviews submittals</b>Before you buy anything, you send product data sheets, plant photos and nursery sources, soil tests and samples. The LA approves or rejects them.</div></li>
<li><div><b>Observes the work</b>Checks things like the irrigation coverage test, plant layout before planting, and tree staking.</div></li>
<li><div><b>Walks the punch list</b>Lists everything to fix before acceptance.</div></li>
<li class="hl"><div><b>Signs off establishment</b>At the end of the plant establishment period, agrees that the plants are healthy and complete.</div></li>
</ol>
<p>Other designers you'll meet: the <strong>civil engineer</strong> (grading, drainage, water meter and point of connection), the <strong>electrical engineer</strong> (power to the controller), and sometimes a <strong>soils lab or agronomist</strong> who tests soil and writes amendment recommendations.</p>`,
  ex: `<p>Real spec wording, City of San Diego K-24-1952: palm photos go to the Project Landscape Architect “for approval for a minimum of 15 days prior to delivery,” the LA “is the sole judge as to acceptability of each plant,” and rejected plants must be replaced “within one week of written notice” at the contractor's expense.</p>`,
  watch: `<p>A rejected load of 24-inch box trees means a new order, a new delivery and a crew standing around. Visit the nursery, tag the trees early, and send photos before delivery.</p>`,
  src: "City of San Diego K-24-1952 Supplementary Special Provisions, Section 801 plant material requirements (items 9–11)."
},

{ h: "Inspectors and agency field staff",
  lead: "Someone checks your work before the job is accepted. Know who it is on each job and how much notice they need.",
  body: `<ul>
<li><strong>Building or right-of-way inspector</strong> (city or county): checks permit work, such as the backflow device, sleeves under a public sidewalk, or electrical for the controller.</li>
<li><strong>Resident engineer (RE) and their inspectors</strong> on public jobs: watch daily work, measure installed quantities for payment, and record problems.</li>
<li><strong>The landscape architect (LA)</strong>: observation visits at set points in the work.</li>
<li><strong>Backflow tester</strong>: backflow preventers are tested by a certified tester, and the report goes to the water agency or inspector. Check the specs and the local water agency's rules on each job.</li>
<li><strong>Special inspections</strong> named in the specs, like a pressure test on the mainline, soil compaction tests, or a water-agency inspection when converting to recycled water.</li>
</ul>`,
  ex: `<p>K-24-1952 requires the contractor to “request, in writing, at least one (1) week in advance” any mandatory site observation by the City's representative. Caltrans job 11-422004 had a bid item just to “certify existing backflow preventers.” Inspections take time and sometimes cost money, so they belong in your schedule and your price.</p>`,
  watch: `<p>Covering work before it is inspected (backfilling a mainline before the pressure test, for example) can mean digging it back up at your own cost.</p>`,
  src: "City of San Diego K-24-1952 Supplementary Special Provisions §200-5.1; Caltrans contract 11-422004 bid item 32."
},

{ h: "The general contractor's team",
  lead: "A general contractor (GC) is a company of people with different jobs. Talk to the right one at the right time.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Person at the GC</th><th>What they do</th><th>When you deal with them</th></tr></thead>
<tbody>
<tr><td><strong>Chief estimator / preconstruction (precon) manager</strong></td><td>Runs bidding, sends invitations, picks subs</td><td>Getting on bid lists, bid day, scope questions</td></tr>
<tr><td><strong>Estimator</strong></td><td>Collects and levels sub bids for one project</td><td>During bidding and right after</td></tr>
<tr><td><strong>Project manager (PM)</strong></td><td>Runs the contract after award: subcontracts, submittals, change orders, billing</td><td>From award to final payment</td></tr>
<tr><td><strong>Project engineer (PE)</strong></td><td>Helps the PM with paperwork: submittals, RFIs, logs</td><td>Daily paperwork during the job</td></tr>
<tr><td><strong>Superintendent (super)</strong></td><td>Runs the site: schedule, crews, safety, inspections</td><td>Every day you're on site</td></tr>
<tr><td><strong>Accounts payable / project accountant</strong></td><td>Processes your pay applications and lien releases</td><td>Every month when you bill</td></tr>
</tbody></table></div>`,
  ex: `<p>The estimator who loved your number will hand the job to a PM after award. Send the PM your submittals, insurance certificate and schedule quickly. A good first month with the PM is what gets you invited again.</p>`,
  watch: `<p>The superintendent can ask you to do extra work, but usually can't approve extra money. Get a signed change order or at least a signed time-and-materials ticket from the person the subcontract names before you do extra work.</p>`
},

{ h: "Suppliers, and the subs you hire",
  lead: "You are a sub to the GC, but you will also buy from suppliers and sometimes hire your own subcontractors.",
  body: `<div class="twocol">
<div><h3>Your suppliers</h3><ul>
<li>Irrigation supply house: pipe, fittings, heads, valves, controllers, wire, backflow</li>
<li>Wholesale nurseries: trees, shrubs, groundcover, flats, cuttings</li>
<li>Soil and mulch yards: amendments, topsoil, mulch, DG (decomposed granite), boulders</li>
<li>Rental yards: trenchers, mini excavators, skid steers, compaction equipment</li>
</ul></div>
<div><h3>Subs a landscape company may hire</h3><ul>
<li>Electrician: power to controllers and booster pumps</li>
<li>Directional boring: pipe under roads and drives without trenching</li>
<li>Traffic control: lane closures, signs, cones on street and freeway jobs</li>
<li>Hydroseed or erosion control</li>
<li>Concrete for mow curbs, pads and boxes, if you don't self-perform it</li>
</ul></div>
</div>`,
  ex: `<p><strong>Real example, Caltrans 11-428704 (I-805 Chula Vista):</strong> the winning bidder listed subs for boring (Golden State Boring &amp; Pipe Jacking), electric service for irrigation (Perry Electric, item 69), traffic control (Synergy Traffic Control, items 3–6 and 8), temporary railing (Hi-Way Safety Rentals, item 7) and wood mulch (Turboscape, item 31). Even a landscape-heavy job needs other trades.</p>`,
  deeper: `<p>When you hire a sub, you take on the GC's role for that piece: check their license and DIR (Department of Industrial Relations) registration, get their insurance certificate, and pay them on time. Other scopes landscape subs get handed, like demolition, grading, drainage and hardscape, are covered in <a href="#m17-1">Module 17</a>.</p>`,
  src: "Caltrans Bid Summary, contract 11-428704 (bid opened Sept. 8, 2021), List of Subcontractors, bidder 04."
},

{ h: "How contracts, bills and money move",
  lead: "Contracts flow down. Bills flow up. Money flows back down, slowly, with some held back.",
  body: `<ol class="steps">
<li><div><b>Owner signs a contract with the general contractor (GC).</b>The GC promises to build the whole project.</div></li>
<li class="hl"><div><b>GC signs a subcontract with you.</b>You promise to build the landscape scope.</div></li>
<li><div><b>You buy from suppliers.</b>Purchase orders for pipe, heads, plants, soil.</div></li>
<li class="hl"><div><b>Each month you bill the GC.</b>A “pay application” for the percent of work you finished.</div></li>
<li><div><b>The GC bills the owner.</b>Your bill goes inside theirs.</div></li>
<li><div><b>The owner pays the GC, then the GC pays you.</b>Often 30–60+ days after you billed, minus retention.</div></li>
<li class="hl"><div><b>Retention comes at the end.</b>The money held back (usually 5%) is released after the whole project is complete and accepted.</div></li>
</ol>`,
  watch: `<p>You pay your crew every week and your suppliers within 30 days, but you may not see the GC's money for two months. A job can be profitable on paper and still run you out of cash. Module 3 shows this with real numbers.</p>`,
  deeper: `<ul>
<li>On private jobs in California, a GC generally must pay a sub within 7 days of receiving payment for that sub's work, unless the contract says otherwise in writing (Business and Professions Code §7108.5).</li>
<li>On California public works, retention is generally capped at 5% (Public Contract Code §7201).</li>
<li>For private contracts signed on or after January 1, 2026, retention is also capped at 5% of each payment and of the contract, with exceptions (for example, a sub who was told at bid time that bonds were required and then didn't provide them, and residential projects of four stories or less that aren't mixed-use) (Civil Code §8811).</li>
<li>Many subcontracts include “pay-when-paid” language. It affects how long you wait, so read it before you sign.</li>
<li>With each payment you sign a lien release. California uses statutory forms (Civil Code §§8132–8138). Never sign an unconditional release before the money clears.</li>
</ul>`,
  src: "Cal. B&P Code §7108.5; Public Contract Code §7201; Civil Code §§8811, 8132–8138."
},

{ h: "Worked example: where the money goes, month by month",
  lead: "Here is one landscape subcontract followed from first bill to last retention check, with every line of math.",
  exLabel: "Example numbers for practice (a made-up private job signed in 2026)",
  ex: `<p>Subcontract: <strong>$200,000</strong> for landscape and irrigation. Retention: <strong>5%</strong>. You bill at the end of each month for the work done that month.</p>
<div class="tablewrap"><table>
<thead><tr><th>Bill</th><th class="num">Work billed</th><th class="num">Retention held (5%)</th><th class="num">Check you receive</th></tr></thead>
<tbody>
<tr><td>#1 Sleeves, mainline</td><td class="num">$40,000</td><td class="num">$40,000 × 0.05 = $2,000</td><td class="num">$38,000</td></tr>
<tr><td>#2 Laterals, heads, valves</td><td class="num">$80,000</td><td class="num">$4,000</td><td class="num">$76,000</td></tr>
<tr><td>#3 Soil prep, planting, mulch</td><td class="num">$60,000</td><td class="num">$3,000</td><td class="num">$57,000</td></tr>
<tr><td>#4 Establishment (90 days)</td><td class="num">$20,000</td><td class="num">$1,000</td><td class="num">$19,000</td></tr>
<tr><td><strong>Totals</strong></td><td class="num"><strong>$200,000</strong></td><td class="num"><strong>$10,000</strong></td><td class="num"><strong>$190,000</strong></td></tr>
</tbody></table></div>
<p><strong>When is the $10,000 paid?</strong> Retention is released after the <em>whole project</em> is complete, not when your part is. Say the building is finished 4 months after your last day. The owner then has up to 45 days to pay the GC, and the GC has 10 days after receiving it to pay you. 4 months + 45 days + 10 days ≈ <strong>6 months after you left the site</strong>.</p>
<p><strong>Why it matters:</strong> if your profit on this job is 10% ($200,000 × 0.10 = $20,000), then $10,000 ÷ $20,000 = <strong>half of your profit</strong> sits in retention for half a year.</p>`,
  body: `<p>Plan for retention the day you bid: it is real money you have earned but can't spend yet. Module 3 turns this into a full cash flow plan, and Module 16 covers billing and getting retention released.</p>`,
  deeper: `<p>The 45-day and 10-day clocks are Civil Code §§8812 and 8814 (private works). On public works, the agency must release retention within 60 days after completion, and the prime must pay each sub its share within 7 days of receiving it (Public Contract Code §7107). Late retention carries a 2% per month charge under §7107. A contract can't waive these public works rules.</p>`,
  src: "Cal. Civil Code §§8811, 8812, 8814; Public Contract Code §7107."
},

{ h: "California's payment clocks",
  lead: "State law sets deadlines for paying subs. Know them so you know when to call about a late check.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>What</th><th>Private job</th><th>Public job</th></tr></thead>
<tbody>
<tr><td>GC pays you after the GC is paid for your work</td><td>7 days, unless otherwise agreed in writing (B&amp;P Code §7108.5)</td><td>7 days (B&amp;P Code §7108.5; agencies often repeat this in the contract)</td></tr>
<tr><td>Maximum retention</td><td>5% for contracts signed on or after Jan 1, 2026, with exceptions (Civil Code §8811)</td><td>Generally 5% (Public Contract Code §7201)</td></tr>
<tr><td>Owner or agency releases retention</td><td>Within 45 days after completion (Civil Code §8812)</td><td>Within 60 days after completion (PCC §7107)</td></tr>
<tr><td>GC passes your retention to you</td><td>Within 10 days of receiving it (Civil Code §8814)</td><td>Within 7 days of receiving it (PCC §7107)</td></tr>
<tr><td>Penalty for paying late</td><td>2% per month on the late amount (B&amp;P Code §7108.5)</td><td>2% per month (B&amp;P §7108.5 and PCC §7107)</td></tr>
</tbody></table></div>
<p>“PCC” means the California Public Contract Code. “B&amp;P Code” means the Business and Professions Code.</p>`,
  watch: `<p>A “pay-when-paid” clause or a good-faith dispute can change when money is due. A GC may hold up to 150% of an amount that is truly in dispute. Read the payment section of every subcontract before you sign (Module 16).</p>`,
  src: "Cal. B&P Code §7108.5; Civil Code §§8811, 8812, 8814; Public Contract Code §§7107, 7201."
},

{ h: "The life of a project",
  lead: "Landscape is one of the last trades on most jobs. You bid early, but you may install many months later.",
  body: `<ol class="steps">
<li><div><b>Design</b>The owner hires designers. Plans and specs are drawn.</div></li>
<li class="hl"><div><b>Bidding</b>General contractors and subs price the plans. This is what this course teaches.</div></li>
<li><div><b>Award and contract</b>The owner picks a general contractor. The general contractor picks subs and signs subcontracts.</div></li>
<li class="hl"><div><b>Submittals</b>You send product data, plant sources, soil tests and samples for approval before you order.</div></li>
<li><div><b>Construction</b>Grading, utilities, building, paving. You install sleeves early, then come back near the end.</div></li>
<li class="hl"><div><b>Landscape installation</b>Irrigation, soil prep, planting, mulch, controller programming.</div></li>
<li><div><b>Inspection and punch list</b>The landscape architect and inspector walk the job and list fixes.</div></li>
<li class="hl"><div><b>Plant establishment / maintenance period</b>You water, weed and replace dead plants for a set time, often 90 days or more.</div></li>
<li><div><b>Final acceptance and warranty</b>Retention is released. Your warranty period starts, often one year.</div></li>
</ol>`,
  ex: `<p>You bid an apartment project in March. The building takes 14 months. You install landscape the next May. If plant or PVC (polyvinyl chloride, the plastic irrigation pipe) prices rise 8% in that time, that comes out of your profit unless your bid planned for it.</p>`,
  deeper: `<p>The plant establishment (or maintenance) period is set in the specs. Public projects often require 90 days to a year, sometimes much longer: Caltrans job 11-422004 required 750 working days of plant establishment, about three years. It is real labor that must be in your price. Module 5 shows where to find it in the specs.</p>`,
  src: "Caltrans 11-422004 Notice to Bidders (plant establishment 750 working days)."
},

{ h: "Two markets: private and public",
  lead: "Private and public jobs use the same estimating skills but different rules. You will learn both.",
  body: `<div class="twocol">
<div><h3>Private work</h3><ul>
<li>Owner is a business, developer or HOA (homeowners association)</li>
<li>You usually bid to a general contractor (GC), not the owner</li>
<li>The GC can pick any sub it wants, not only the lowest</li>
<li>Relationships matter a lot</li>
<li>Invites come by email and bid platforms</li>
<li>Prices can be discussed and adjusted</li>
<li>Prevailing wage usually doesn't apply</li>
</ul></div>
<div><h3>Public work</h3><ul>
<li>Owner is a city, county, school district, water district or state agency</li>
<li>Must be advertised; any qualified contractor can bid</li>
<li>Award goes to the “lowest responsive, responsible bidder”</li>
<li>All bid prices become public after opening</li>
<li>Strict forms and deadlines; small mistakes get bids thrown out</li>
<li>Prevailing wage, DIR (Department of Industrial Relations) registration and certified payroll apply</li>
<li>Bonds are usually required</li>
</ul></div>
</div>`,
  watch: `<p>Some “private” projects are paid partly with public money, such as affordable housing with city or state funds. That can make them public works for prevailing wage. Always check the bid documents for prevailing wage language.</p>`,
  deeper: `<p>California Labor Code §1720(a)(1) defines public works as construction “paid for in whole or in part out of public funds.” That is why some privately owned projects still require prevailing wages.</p>`,
  src: "Cal. Labor Code §1720."
},

{ h: "How projects get contracted",
  lead: "How the owner hires the general contractor changes how and when you get to bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Method</th><th>In plain words</th><th>What it means for you</th></tr></thead>
<tbody>
<tr><td><strong>Design-bid-build (DBB)</strong></td><td>Design is finished, then contractors bid, then it gets built. Most common on public work.</td><td>You bid on finished plans. Price competition is strongest.</td></tr>
<tr><td><strong>Hard bid</strong></td><td>Lowest qualified price wins.</td><td>Your number has to be sharp, and your scope complete.</td></tr>
<tr><td><strong>Negotiated</strong></td><td>A private owner picks a general contractor they trust.</td><td>The general contractor still asks subs for prices, but may also weigh relationships and quality.</td></tr>
<tr><td><strong>Design-build (DB)</strong></td><td>One team designs and builds.</td><td>You may help design the irrigation system and give budgets early.</td></tr>
<tr><td><strong>Construction manager at risk (CMAR)</strong></td><td>A builder joins the team during design and guarantees a maximum price.</td><td>You may give early budget numbers, then bid formally later.</td></tr>
</tbody></table></div>`,
  ex: `<p>A school district hires a general contractor by CMAR to modernize a campus. In design, the general contractor asks you for a budget price for the new playfield irrigation. Months later, it sends out formal bid packages and you bid the final plans with other landscape subs.</p>
<p>Real: the City's K-24-1952 bid number ends in “DBB,” for design-bid-build.</p>`
},

{ h: "Contract types: how you get paid",
  lead: "The contract type decides what you are paid for: a fixed total, a price per unit installed, or your actual costs plus a fee.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Type</th><th>How you're paid</th><th>Who carries the risk</th><th>Landscape example</th></tr></thead>
<tbody>
<tr><td><strong>Lump sum (LS) / stipulated sum</strong></td><td>One fixed price for the whole scope</td><td>You. If your takeoff was short, the extra is yours.</td><td>Most private subcontracts: “Landscape and irrigation per plans, $186,400.”</td></tr>
<tr><td><strong>Unit price</strong></td><td>A price per unit (per LF, linear foot; per EA, each; per CY, cubic yard) times the quantity actually installed and measured</td><td>Shared. The agency's quantities are estimates; you're paid for what you install.</td><td>Caltrans: “Bids must be on a unit price basis.” Item 63 on 11-428704: 4″ pipe, 7,493 LF.</td></tr>
<tr><td><strong>Lump sum with unit prices</strong></td><td>Most items are lump sum, a few are unit price</td><td>Mixed</td><td>City of San Diego K-24-1952: “a Lump Sum contract with Unit Price provisions.”</td></tr>
<tr><td><strong>Time and materials (T&amp;M)</strong></td><td>Hourly labor rates plus materials plus markup</td><td>Mostly the owner</td><td>Extra work during a job, emergency repairs, some maintenance</td></tr>
<tr><td><strong>Cost-plus / GMP (guaranteed maximum price)</strong></td><td>Actual cost plus a fee, up to a cap</td><td>Shared; you carry costs above the cap</td><td>Usually between owner and GC on negotiated or CMAR jobs; subs still usually get lump sum subcontracts</td></tr>
</tbody></table></div>`,
  watch: `<p>On a unit price job, an item with a big quantity and a low unit price can grow or shrink when the work is measured. Read how each item is measured and paid in the specs (Module 5).</p>`,
  src: "Caltrans 11-428704 Notice to Bidders and Bid Item List; City of San Diego K-24-1952 Instructions to Bidders §11."
},

{ h: "Worked example: unit price vs. lump sum",
  lead: "The same pipe, two contract types. Watch what happens when the field quantity is different from the bid quantity.",
  exLabel: "Example (real bid quantity and price; the field quantity is made up)",
  ex: `<p>Caltrans 11-428704, item 63: <strong>4″ plastic pipe (Class 315) supply line, 7,493 LF</strong>. The winning bidder priced it at <strong>$12.00 per LF</strong>.</p>
<p>Bid amount: 7,493 LF × $12.00 = <strong>$89,916</strong>.</p>
<p>Now say the route changes in the field and the RE (resident engineer) measures <strong>7,900 LF</strong> installed.</p>
<div class="tablewrap"><table>
<thead><tr><th></th><th>Unit price contract</th><th>Lump sum contract</th></tr></thead>
<tbody>
<tr><td>What you're paid</td><td>7,900 × $12.00 = <strong>$94,800</strong></td><td><strong>$89,916</strong>, the fixed price</td></tr>
<tr><td>Difference</td><td>$94,800 − $89,916 = +$4,884 paid to you</td><td>You install 407 LF more for no more money, unless you get a change order</td></tr>
</tbody></table></div>
<p>The reverse is also true. If only 7,000 LF is installed on a unit price job, you're paid 7,000 × $12.00 = $84,000, and any fixed costs you buried in that unit price shrink with it.</p>`,
  body: `<ul>
<li>On <strong>lump sum</strong> work, your own takeoff is the whole risk. Measure carefully (Modules 6 and 7).</li>
<li>On <strong>unit price</strong> work, check the agency's quantities anyway. If a quantity looks wrong, ask before bid day (Module 12).</li>
</ul>`,
  deeper: `<p>Public specs usually have a rule for big quantity changes on unit price items, which can let either side ask for a price adjustment. On Caltrans jobs it's in the Standard Specifications; on City jobs it's in the Greenbook and Whitebook. Module 5 shows where to find these clauses.</p>`,
  src: "Caltrans Bid Summary 11-428704, item 63 (ACCU Construction, $12.00/LF)."
},

{ h: "Where a landscape contractor fits",
  lead: "Depending on the job, you are either a subcontractor to a general contractor or the main (“prime”) contractor yourself.",
  body: `<div class="twocol">
<div><h3>As a subcontractor</h3><ul>
<li>Landscape on buildings: retail centers, offices, apartments, hotels, medical, schools</li>
<li>Landscape on bigger civil jobs, under a general engineering (Class A) contractor: street projects, large parks, stormwater basins</li>
<li>Your customer is the general contractor</li>
</ul></div>
<div><h3>As the prime contractor</h3><ul>
<li>Landscape-only public jobs: median planting, park irrigation retrofits, water-saving turf conversions, landscape renovations</li>
<li>Only when the bid notice allows your license class (Module 2)</li>
<li>Your customer is the agency, and you handle all the paperwork</li>
</ul></div>
</div>`,
  ex: `<p>Typical San Diego County landscape bids: a median irrigation retrofit for a city, a school field renovation, planting and irrigation for a new apartment complex, an HOA common-area renovation, planting in a stormwater basin on a street project, and landscape for a new medical office building.</p>
<p>Real: the City's EMTS Boat Dock Esplanade park (K-24-1952) required a Class A prime, so a landscape company could only take part as a sub. Caltrans 11-428704 allowed “Class A … or C-27,” so a landscape company could be the prime.</p>`
},

{ h: "A private job, start to finish",
  lead: "Here is the whole story of one private job, the way it usually goes for a landscape sub.",
  exLabel: "Example story (made up for training)",
  ex: `<ol class="steps">
<li><div><b>Week 0 · Invitation</b>A general contractor (GC) invites you on BuildingConnected to bid landscape for a two-story medical office in Escondido. Bids due in 12 days.</div></li>
<li><div><b>Week 0 · Go/no-go</b>Size about $150,000 of landscape, a GC you want to work with, crews free next spring. Go.</div></li>
<li><div><b>Week 1 · Study and take off</b>You read sheets L-1 to L-5, the civil utility sheet (water meter), the electrical sheet (controller power) and spec sections 32 84 00 and 32 93 00. You count and measure.</div></li>
<li class="hl"><div><b>Week 1 · Question</b>The plans show no backflow enclosure. You send an RFI (request for information) through the GC. Addendum 1 adds one.</div></li>
<li><div><b>Week 2 · Price and send</b>Supplier and nursery quotes, labor, markup. You send a one-page proposal with clear inclusions and exclusions the day before bids are due.</div></li>
<li><div><b>Bid day · Leveling</b>The GC's estimator calls: “Does your number include the 90-day maintenance?” Yes. You're the leveled low.</div></li>
<li><div><b>Month 1 · Owner awards the GC</b>The GC calls for a scope review meeting, then sends a subcontract. You read the payment, retention and insurance sections before signing.</div></li>
<li class="hl"><div><b>Month 2 · Submittals and sleeves</b>You submit products and plant sources. You install sleeves before paving.</div></li>
<li><div><b>Months 9–10 · Install</b>Mainline, valves, laterals, heads, soil prep, planting, mulch, controller programming. Monthly pay applications.</div></li>
<li><div><b>Month 10 · Punch list</b>The landscape architect lists 22 items. You fix them in a week.</div></li>
<li class="hl"><div><b>Months 10–13 · Establishment</b>Weekly visits, replace two dead shrubs, adjust the controller.</div></li>
<li><div><b>About month 16 · Retention</b>The building is complete, and your 5% retention arrives about two months later.</div></li>
</ol>`,
  body: `<p>Notice how long it is from bid to last dollar: more than a year. That is normal for a landscape sub on a building job.</p>`
},

{ h: "A public job, start to finish: I-805 Chula Vista",
  lead: "This is the real timeline of Caltrans contract 11-428704, a recycled-water irrigation conversion and planting job a C-27 company could bid as prime.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Date</th><th>What happened</th></tr></thead>
<tbody>
<tr><td>Aug 2, 2021</td><td>Advertised. Notice to Bidders: Class A or C-27 license, DBE (Disadvantaged Business Enterprise) goal 14%, unit price bid, 10% bid security, estimated cost $1,510,000.</td></tr>
<tr><td>Aug 27, 2021</td><td>Addendum 1: changed plan sheets, bid items and wage rates. Every bidder had to bid the changes.</td></tr>
<tr><td>Sept 8, 2021, 2:00 PM</td><td>Bids due electronically on Bid Express. Six bids received, opened and read by webcast.</td></tr>
<tr><td>Days after opening</td><td>DBE forms due. The bidder with the lowest number was marked “NR LATE DBE/DVBE SUBMITTAL” (non-responsive) and lost the job.</td></tr>
<tr><td>Oct 1, 2021</td><td>Awarded to ACCU Construction, Inc. at $1,176,120.00.</td></tr>
<tr><td>Then</td><td>120 working days to build, then 250 working days of plant establishment: 370 working days in all.</td></tr>
</tbody></table></div>`,
  ex: `<p>Compare it with the private story: same field work, but every step on the public side is fixed in writing (dates, forms, bonds, wage rates), and every bidder's prices became public. Module 15 walks through this exact job document by document.</p>`,
  watch: `<p>The lowest bid, $1,106,287.75, did not win. It was thrown out for a paperwork deadline after bid day. On public work, the forms are part of the price.</p>`,
  src: "Caltrans 11-428704 Notice to Bidders (dated Aug. 2, 2021), Addendum 1 (Aug. 27, 2021) and Bid Summary; award date from Caltrans contract page. See Module 15."
},

{ h: "“Lowest responsive, responsible bidder”",
  lead: "Public jobs don't go to the lowest number alone. They go to the lowest bid that followed the rules, from a company that can do the work.",
  body: `<ul>
<li><strong>Lowest:</strong> the lowest total price.</li>
<li><strong>Responsive:</strong> the bid follows the instructions exactly. Every form filled and signed, every addendum acknowledged, the bid bond included, subcontractors listed, submitted on time.</li>
<li><strong>Responsible:</strong> the company can actually do the job: right license, registered with the DIR (Department of Industrial Relations), experience, a clean record, financial strength.</li>
</ul>
<p>Miss any one and the agency can throw out your bid, even if it was the cheapest.</p>`,
  ex: `<p>Bidder A: $412,000, everything complete. Bidder B: $398,000, but forgot to acknowledge Addendum 2, which added 40 trees. The agency finds Bidder B non-responsive and awards to Bidder A. Bidder B did all the work of estimating for nothing.</p>`,
  deeper: `<p>Agencies can choose to waive a truly minor irregularity that gives no bidder an advantage. You can't count on it. Anything that touches price, such as an addendum or a missing bond, usually can't be waived.</p>`
},

{ h: "What's inside a bid package",
  lead: "When you get invited to bid, you receive a package of documents. All of it matters, not only the drawings.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Document</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td><strong>Invitation to bid / Notice inviting bids</strong></td><td>Project name, due date and time, where to submit, job walk date, license needed, bond needed</td></tr>
<tr><td><strong>Instructions to bidders</strong></td><td>The rules for how to bid. Follow them exactly.</td></tr>
<tr><td><strong>Bid form</strong></td><td>The form your price goes on. Public jobs often have line items with quantities.</td></tr>
<tr><td><strong>Plans (drawings)</strong></td><td>What to build and where. Landscape sheets usually start with “L”.</td></tr>
<tr><td><strong>Specifications (project manual)</strong></td><td>Products, quality, methods, testing, warranty, establishment period</td></tr>
<tr><td><strong>Addenda</strong></td><td>Changes issued during bidding. Each one changes the job.</td></tr>
<tr><td><strong>Contract and bond forms</strong></td><td>What you'll sign if you win</td></tr>
<tr><td><strong>Wage information</strong></td><td>On public work: prevailing wage requirements</td></tr>
<tr><td><strong>Reports</strong></td><td>Soil or geotechnical reports, sometimes an agronomic soil test</td></tr>
</tbody></table></div>`,
  ex: `<p>Real: the City's K-24-1952 bid book has a Required Documents Schedule, Notice Inviting Bids, Instructions to Bidders, bond forms, a Scope of Work, the Equal Opportunity Contracting Program section, prevailing wage, Supplementary Special Provisions with ten appendices (including an environmental document and a Coastal Commission permit), the contract agreement and the certification forms. The plans were a separate set of 32 sheets.</p>`,
  watch: `<p>The landscape sheets aren't the only ones that matter. The water meter and point of connection may be on civil sheets, and controller power on electrical sheets. Module 4 teaches you to search the whole set.</p>`,
  src: "City of San Diego K-24-1952 bidding documents, table of contents and Scope of Work §1.1.1 (plans 41608-1-D through 41608-32-D)."
},

{ h: "What a landscape scope usually includes",
  lead: "Commercial landscape bids are bigger than “plants and sprinklers.” Here is what usually falls in your package.",
  body: `<div class="twocol">
<div><h3>Irrigation</h3><ul>
<li>Point of connection (POC) to the water source</li>
<li>Backflow preventer and enclosure</li>
<li>Master valve and flow sensor</li>
<li>Controller, weather or soil sensor</li>
<li>Mainline (pressure pipe), by size</li>
<li>Remote control valves and valve boxes</li>
<li>Lateral lines, spray heads, rotors, drip</li>
<li>Control wire, sleeves under paving</li>
<li>Testing, as-built drawings, controller chart</li>
</ul></div>
<div><h3>Planting</h3><ul>
<li>Weed removal before planting</li>
<li>Fine grading</li>
<li>Soil testing and amendments</li>
<li>Trees with staking or guying, and root barrier</li>
<li>Shrubs and groundcover by container size</li>
<li>Turf: sod or seed (less common now)</li>
<li>Mulch, decomposed granite (DG), boulders</li>
<li>Plant establishment / maintenance period</li>
<li>Warranty and plant replacement</li>
</ul></div>
</div>`,
  watch: `<p>Sleeves under paving are often drawn on the landscape sheets but must be installed before paving, months before you start. Ask early who installs them.</p>`,
  deeper: `<p>General contractors also hand landscape subs other scopes: demolition, fine and rough grading, area drains, site walls, paving, fencing. Those have their own risks. See <a href="#m17-1">Module 17</a>.</p>`
},

{ h: "Bid leveling: how a general contractor compares subs",
  lead: "General contractors (GCs) don't just pick the lowest number. They line up every bid and fill in anything missing with their own estimate, called a “plug.”",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Sub A</th><th class="num">Sub B</th><th class="num">Sub C</th></tr></thead>
<tbody>
<tr><td>Base bid as submitted</td><td class="num">$182,000</td><td class="num">$164,000</td><td class="num">$176,000</td></tr>
<tr><td>90-day establishment</td><td class="num">Included</td><td class="num">Excluded → plug $14,000</td><td class="num">Included</td></tr>
<tr><td>Backflow and enclosure</td><td class="num">Included</td><td class="num">Excluded → plug $6,000</td><td class="num">Included</td></tr>
<tr><td>Sleeves under paving</td><td class="num">Included</td><td class="num">Included</td><td class="num">Included</td></tr>
<tr><td><strong>Leveled total</strong></td><td class="num"><strong>$182,000</strong></td><td class="num"><strong>$184,000</strong></td><td class="num"><strong>$176,000</strong></td></tr>
</tbody></table></div>
<p>Sub B looked cheapest, but after leveling, Sub C is the real low bid. The GC calls Sub C.</p>`,
  ex: `<p>The lesson for you: a complete, clear bid is easier for a GC to say yes to. If you exclude something, say it plainly so the GC isn't surprised later. That builds trust, and trust gets you invited again.</p>`,
  deeper: `<p>GCs usually plug missing items on the high side to protect themselves. So a missing item can make a sub look more expensive than they really are. Clear inclusions and exclusions keep the comparison fair. Module 13 covers how to write them.</p>`
},

{ h: "How general contractors choose subs, beyond price",
  lead: "On private work the general contractor (GC) is betting its own money on you. After leveling, these are the questions an estimator asks.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>What the GC checks</th><th>What they want to see</th></tr></thead>
<tbody>
<tr><td><strong>Complete scope</strong></td><td>Your proposal covers everything in the landscape package, with few exclusions</td></tr>
<tr><td><strong>Track record</strong></td><td>Similar jobs finished, references they can call</td></tr>
<tr><td><strong>Manpower</strong></td><td>Enough crews to install on their schedule, and a foreman who can read plans</td></tr>
<tr><td><strong>Paperwork</strong></td><td>Insurance that meets their limits, fast submittals, clean pay applications</td></tr>
<tr><td><strong>Safety</strong></td><td>A written safety program and an EMR (experience modification rate, a workers' comp safety score) of about 1.0 or lower</td></tr>
<tr><td><strong>Money</strong></td><td>Financially stable; able to bond the subcontract if asked</td></tr>
<tr><td><strong>Certifications</strong></td><td>SLBE/ELBE (City of San Diego small local business) or DBE (Disadvantaged Business Enterprise) status when the job has a participation goal</td></tr>
<tr><td><strong>Responsiveness</strong></td><td>Answers calls on bid day, returns forms quickly</td></tr>
<tr><td><strong>History with them</strong></td><td>No past fights over change orders or back-charges</td></tr>
</tbody></table></div>`,
  ex: `<p>Two landscape subs are $3,000 apart on a $250,000 package. The lower one has never worked for this GC and sent an incomplete prequalification form. The higher one finished two jobs for them last year with no punch list problems. Many GCs take the second one, or ask them to match.</p>`,
  watch: `<p>On public jobs with a subcontracting goal, a certified sub can be worth more to the prime than a cheaper uncertified one. Module 2 explains SLBE, ELBE and DBE.</p>`
},

{ h: "The scope review call",
  lead: "If you're low or close, the general contractor (GC) will call to confirm your scope before using your number. Be ready for it.",
  body: `<p><strong>Questions you'll usually hear:</strong></p>
<ul>
<li>“Did you include all addenda?” (Have the numbers ready: “Addenda 1 through 3.”)</li>
<li>“Is the establishment period in your number? How long?”</li>
<li>“Who installs sleeves? The backflow? Controller power?”</li>
<li>“Are you including soil testing and amendments per the soil report?”</li>
<li>“What's your crew size and how many weeks on site?”</li>
<li>“Can you meet our insurance and bond requirements?”</li>
<li>“Any exclusions I should know about?”</li>
</ul>
<p><strong>How to handle it:</strong> have your estimate and proposal open, answer only what you know, and confirm in writing afterward with a short email.</p>`,
  exLabel: "Follow-up email (fill in the brackets)",
  ex: `<p>“Thanks for the call today on [project]. To confirm: our price of $[amount] includes Addenda 1–[n], [90]-day establishment, backflow and enclosure, and sleeves per sheet [L-x]. It excludes [permits, water meter fees, electrical to the controller]. Crew of [5], about [6] weeks on site. Please call with any questions. [Name, phone]”</p>`,
  watch: `<p>Never say “yes, that's included” to be agreeable when you didn't price it. It becomes part of your subcontract, and you'll build it for free.</p>`
},

{ h: "Bid shopping and bid peddling",
  lead: "Bid shopping is when a general contractor (GC) uses your price to pressure other subs lower, often after the GC already won. It is common on private work and limited by law on public work.",
  body: `<ul>
<li><strong>Bid shopping:</strong> the GC tells Sub B, “Sub A is at $180,000. Beat it and the job is yours.” Or, after award, the GC asks every sub to cut 5%.</li>
<li><strong>Bid peddling:</strong> the same thing from the sub's side. A sub who lost calls the GC after bid day and offers to beat the winner's number.</li>
<li><strong>Why it hurts you:</strong> you did the estimating work, the GC used your price to win, and then someone else gets the job. Or you get it at a price with no profit left.</li>
</ul>
<p><strong>Public work protects listed subs.</strong> On California public works, the prime must list each sub doing more than one-half of 1% of its bid (on streets and highways, more than one-half of 1% or $10,000, whichever is greater). After that, the prime can replace a listed sub only for reasons in the law, such as the sub refusing to sign, going bankrupt, or not being licensed.</p>
<p><strong>Private work has no listing law.</strong> Your protection there is your own habits (next slide).</p>`,
  watch: `<p>Never peddle your own price after bid day. GCs talk to each other, and a sub known for undercutting after the fact stops getting invites from good GCs.</p>`,
  deeper: `<p>The listing rules are the Subletting and Subcontracting Fair Practices Act, Public Contract Code §§4100–4114. §4104 sets the listing threshold, §4107 lists the only reasons a listed sub can be substituted (the sub gets notice and five working days to object), §4110 lets the agency cancel the contract or charge the prime a penalty of up to 10% of the subcontract, and §4111 makes a violation grounds for CSLB (Contractors State License Board) discipline. Module 14 covers listing on bid day.</p>`,
  src: "Cal. Public Contract Code §§4100, 4104, 4107, 4110, 4111."
},

{ h: "Protecting yourself from bid shopping",
  lead: "You can't stop every general contractor (GC) from shopping your number, but you can make it harder and cheaper for you.",
  body: `<ol class="steps">
<li><div><b>Know which GCs shop</b>Ask suppliers and other subs. Note it in your bid log when a GC asks you to “sharpen” after award.</div></li>
<li class="hl"><div><b>Send your scope early, your price late</b>Scope letter a day or two ahead; price in the last hours before the GC's cutoff, so it can't be passed around for long.</div></li>
<li><div><b>Make your number hard to compare cheaply</b>A complete scope with clear inclusions means a cheaper sub's number gets plugged up.</div></li>
<li><div><b>Put a time limit on your price</b>“Price good for 60 days” stops a GC from shopping it for six months.</div></li>
<li class="hl"><div><b>Decide your floor before bid day</b>Know the lowest number you'll accept and why. If asked to cut, change scope, not just price: “I can take $4,000 off if you deliver the soil amendment.”</div></li>
<li><div><b>Never reveal or ask for another sub's price</b>If a GC tells you a competitor's number, don't use it as your target. Recheck your own estimate instead.</div></li>
<li><div><b>Be willing to walk away</b>A job at no profit is worse than no job.</div></li>
</ol>`,
  ex: `<p><strong>Scenario:</strong> a GC calls a week after winning. “You're $9,000 high against another landscape sub. Can you match?” <strong>The right move:</strong> ask what scope the other number includes; check your own estimate for anything you overpriced; if you lower, lower for a real reason; if you can't, say so politely and stay on the list. <strong>Why:</strong> matching blindly teaches that GC to shop you every time.</p>`
},

{ h: "Ethics: the lines you never cross",
  lead: "Bidding runs on trust and on the law. A few practices can cost you your license, your company, or worse.",
  body: `<ul>
<li><strong>No collusion.</strong> Never agree with a competitor on prices, on who will bid, or on who will “take a turn.” Every California public bid includes a noncollusion declaration signed under penalty of perjury.</li>
<li><strong>Tell the truth on forms.</strong> Prequalification answers, DBE or SLBE use, certified payroll and certifications are signed statements. False ones can mean debarment (being banned from public work) and criminal charges.</li>
<li><strong>Use certified firms for real.</strong> If you list a certified sub to meet a goal, they must actually do that work. Passing money through a “front” company breaks program rules.</li>
<li><strong>Keep other bids private.</strong> Don't share a competitor's number you hear, and don't ask for one.</li>
<li><strong>No gifts to public staff.</strong> Agencies have strict gift rules. Don't offer meals, gifts or favors to inspectors or agency staff.</li>
<li><strong>Bid what you'll build.</strong> Don't win low on purpose planning to make it up on change orders.</li>
</ul>`,
  watch: `<p>If anyone suggests “you take this one, we'll take the next one,” end the conversation and tell the owner of your company. That is bid rigging.</p>`,
  deeper: `<p>The noncollusion declaration is required by Public Contract Code §7106. Price fixing and bid rigging are illegal under California's Cartwright Act (Business and Professions Code §16720 and following) and the federal Sherman Act. The City of San Diego's K-24-1952 bid also required certifications of pending actions, business interests, and debarment status for the prime and its subs.</p>`,
  src: "Cal. Public Contract Code §7106; Cal. B&P Code §16720; City of San Diego K-24-1952 Required Documents Schedule."
},

{ h: "Why bids are won and lost",
  lead: "Price matters most, but plenty of bids are lost before price is even compared.",
  body: `<div class="twocol">
<div><h3>Common reasons for losing</h3><ul>
<li>Price too high (often from missing production efficiency or a high markup)</li>
<li>Scope gaps or unclear exclusions</li>
<li>Late. Even one minute late on a public bid.</li>
<li>Missing forms, signatures, bond or addenda</li>
<li>Not registered with the DIR (Department of Industrial Relations) or wrong license class</li>
<li>No relationship; the general contractor already trusts another sub</li>
<li>Can't meet the schedule or insurance requirements</li>
</ul></div>
<div><h3>What winners do</h3><ul>
<li>Read every document, including addenda</li>
<li>Know their real costs from past jobs</li>
<li>Send clean, complete, easy-to-compare proposals</li>
<li>Submit early and confirm it was received</li>
<li>Follow up after bid day and ask for feedback</li>
<li>Track results and learn the market's prices</li>
<li>Keep relationships with general contractor estimators</li>
</ul></div>
</div>`
},

{ h: "A bid from start to finish",
  lead: "A typical bid takes two to four weeks from invitation to due date. Here's what happens along the way.",
  body: `<ol class="steps">
<li><div><b>Day 1: Invitation arrives</b>Download everything. Put the due date and job walk on the calendar. Decide go or no-go.</div></li>
<li><div><b>Day 3: Job walk / pre-bid meeting</b>See the site. Note access, existing conditions, water source.</div></li>
<li class="hl"><div><b>Days 3–12: Study and take off</b>Read plans and specs. Count and measure everything.</div></li>
<li><div><b>Day 10: Question deadline</b>Last day to send RFIs (requests for information). The City of San Diego, for example, may not consider questions received less than 14 days before bid opening.</div></li>
<li><div><b>Day 13: Last addendum</b>Answers and changes are issued. Update your takeoff.</div></li>
<li class="hl"><div><b>Days 12–16: Price it</b>Supplier quotes, labor, equipment, overhead and markup.</div></li>
<li><div><b>Day 17: Sub bids due to general contractors</b>Often the day before, or the morning of, the general contractor's deadline.</div></li>
<li><div><b>Day 18, 2:00 PM: General contractor bids due to the owner</b>Public bids are opened and read, often the same day.</div></li>
<li><div><b>Weeks later: Award and contract</b>Then the notice to proceed (NTP), the official start.</div></li>
</ol>`,
  deeper: `<p>On public jobs the bid results (“bid tabulation” or “bid tab”) are usually posted online within days. Even when you don't bid, these are a free education in what the market pays. The next three slides read a real one.</p>`,
  src: "City of San Diego K-24-1952 Notice Inviting Bids §9.2."
},

{ h: "Bid day, for real",
  lead: "On bid day a general contractor's estimator is collecting dozens of prices from every trade in a few hours. Make it easy for them.",
  body: `<ul>
<li><strong>Send your scope early</strong> (a day or two before) so the estimator can read it before the rush.</li>
<li><strong>Send your price on time</strong>, using the general contractor's bid form if they have one.</li>
<li><strong>Confirm they received it.</strong> A short call or email: “Did you get our landscape number?”</li>
<li><strong>Be reachable.</strong> Estimators call with last-minute questions. A missed call can mean a missed job.</li>
<li><strong>Send to every general contractor</strong> bidding the project, not only one. Each one is a separate chance to win.</li>
</ul>`,
  watch: `<p>Many subs send their price in the final hour so competitors can't “shop” it. That's normal, but if your email arrives after the general contractor has finished their spreadsheet, you're out. Know each one's cutoff time.</p>`
},

{ h: "Reading a real bid tab: the totals",
  lead: "A bid tab (bid tabulation) lists every bidder's price after a public bid opening. Here are the real totals for Caltrans 11-428704, I-805 Chula Vista.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rank</th><th>Bidder</th><th class="num">Total bid</th><th class="num">Over the low bid</th></tr></thead>
<tbody>
<tr><td>1</td><td>ACCU Construction, Inc. (awarded)</td><td class="num">$1,176,120.00</td><td class="num">—</td></tr>
<tr><td>2</td><td>Diversified Landscape Co.</td><td class="num">$1,179,705.30</td><td class="num">+0.3%</td></tr>
<tr><td>3</td><td>Griffith Company</td><td class="num">$1,234,875.85</td><td class="num">+5.0%</td></tr>
<tr><td>4</td><td>Blue Pacific Engineering &amp; Construction</td><td class="num">$1,592,126.21</td><td class="num">+35.4%</td></tr>
<tr><td>5</td><td>Mercer-Fraser Company</td><td class="num">$3,311,895.00</td><td class="num">+181.6%</td></tr>
<tr><td>—</td><td>Marina Landscape, Inc. “NR LATE DBE/DVBE SUBMITTAL”</td><td class="num">$1,106,287.75</td><td class="num">not counted</td></tr>
<tr><td></td><td>Engineer's estimate (EE)</td><td class="num">$1,516,176.50</td><td class="num">+28.9%</td></tr>
</tbody></table></div>`,
  exLabel: "How to work out “over the low bid” (show the math)",
  ex: `<p>Divide the bid by the low bid, subtract 1, and turn it into a percent.</p>
<p>Diversified: $1,179,705.30 ÷ $1,176,120.00 = 1.0030 → 1.0030 − 1 = 0.0030 → <strong>0.3%</strong>. That's only $3,585.30 apart on a $1.2 million job.</p>
<p>Griffith: $1,234,875.85 ÷ $1,176,120.00 = 1.0500 → <strong>5.0%</strong>.</p>
<p>Engineer's estimate: $1,516,176.50 ÷ $1,176,120.00 = 1.2891 → the low bid was 28.9% below the agency's own estimate. Caltrans's bid summary shows it the other way: the low bid was $340,056.50, or 22.43%, under the estimate ($340,056.50 ÷ $1,516,176.50).</p>`,
  src: "Caltrans Bid Summary, contract 11-428704, bid opening 09/08/21 (data/caltrans/11-428704)."
},

{ h: "Reading a real bid tab: the line items",
  lead: "Public bid tabs often show every bidder's unit price for every item. This is where you learn how the market prices landscape work.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item (quantity)</th><th class="num">ACCU (1st)</th><th class="num">Diversified (2nd)</th><th class="num">Griffith (3rd)</th><th class="num">Blue Pacific (4th)</th><th class="num">Mercer-Fraser (5th)</th></tr></thead>
<tbody>
<tr><td>63 · 4″ pipe, per LF (7,493 LF)</td><td class="num">$12.00</td><td class="num">$13.70</td><td class="num">$16.00</td><td class="num">$20.63</td><td class="num">$35.00</td></tr>
<tr><td>27 · Plant Group A, 1-gallon, each (1,460)</td><td class="num">$25.00</td><td class="num">$11.80</td><td class="num">$8.00</td><td class="num">$18.00</td><td class="num">$85.00</td></tr>
<tr><td>26 · Plant Group K, 24″ box tree, each (43)</td><td class="num">$700</td><td class="num">$480</td><td class="num">$5.50</td><td class="num">$600</td><td class="num">$700</td></tr>
<tr><td>41 · 40-station controller and enclosure, each (1)</td><td class="num">$15,000</td><td class="num">$17,000</td><td class="num">$13,000</td><td class="num">$25,625</td><td class="num">$25,000</td></tr>
<tr><td>30 · Plant establishment work, LS (lump sum)</td><td class="num">$35,000</td><td class="num">$48,100</td><td class="num">$50,000</td><td class="num">$30,000</td><td class="num">$300,000</td></tr>
<tr><td>9 · Job site management, LS</td><td class="num">$5,000</td><td class="num">$42,500</td><td class="num">$6,000</td><td class="num">$40,000</td><td class="num">$125,000</td></tr>
<tr><td>70 · Mobilization, LS</td><td class="num">$20,000</td><td class="num">$99,100</td><td class="num">$58,000</td><td class="num">$120,000</td><td class="num">$330,000</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>What to notice:</strong></p>
<ul>
<li>The winner was not lowest on every item. ACCU was highest of the top three on 1-gallon plants ($25 vs. $11.80 and $8.00) but lowest on pipe, mobilization and job site management.</li>
<li>Griffith's $5.50 for a 24″ box tree is far below any real cost. Bidders sometimes move money between items. Don't copy an odd price as if it were the market.</li>
<li>Lump sum items like mobilization varied from $20,000 to $330,000. That's where bidders put overhead in different places.</li>
<li>Big-quantity items (pipe) were the closest together. That's where the market price is clearest.</li>
</ul>`,
  watch: `<p>Moving money between items on purpose (an “unbalanced bid”) can get a public bid rejected and can backfire when quantities change. Module 14 covers it.</p>`,
  src: "Caltrans Bid Summary 11-428704, items 9, 26, 27, 30, 41, 63, 70; see Real Bid Lab, <a href=\"#lab-11-428704\">11-428704</a>."
},

{ h: "Reading a real bid tab: the subcontractor list",
  lead: "The bid summary also lists every bidder's subs. It shows who teams with whom, and who might hire you.",
  body: `<ul>
<li><strong>ACCU Construction (1st)</strong> listed subs for boring, traffic control, temporary railing, electric service and wood mulch.</li>
<li><strong>Griffith Company (3rd)</strong>, a large engineering contractor, listed D.B. Electric for the electric service, Maneri Traffic Control for traffic items, Synergy Traffic Control for temporary railing, and RTC Inc. for storm water plans, sampling and job site management.</li>
<li><strong>Blue Pacific Engineering (4th)</strong> listed <strong>Diversified Landscape Co.</strong> as its sub for the irrigation items: pipe, valves, controllers, gate valves, sprinklers and more. Diversified also bid the job as a prime and came in 2nd.</li>
</ul>`,
  ex: `<p>The lesson for a landscape company: on a job like this you have two chances. Bid it as the prime if your license and bonding allow, <em>and</em> send your landscape and irrigation price to the engineering contractors bidding it. Diversified did both on this job.</p>`,
  deeper: `<p>The bid summary shows each listed sub's city and license number and the item numbers (with percent) they were listed for. Use these lists to build your target list of primes who hire landscape subs (Module 3).</p>`,
  src: "Caltrans Bid Summary 11-428704, List of Subcontractors, bidders 04, 05 and 06."
},

{ h: "What carries over, and what's new",
  lead: "You're not starting from zero. Your field knowledge is a big advantage once you add the office skills.",
  body: `<div class="twocol">
<div><h3>You already have</h3><ul>
<li>How irrigation systems are built</li>
<li>Plant knowledge and sizes</li>
<li>How long installation really takes</li>
<li>Supplier relationships</li>
<li>A crew that knows the work</li>
<li>A C-27 (landscaping) license and history</li>
</ul></div>
<div><h3>You're adding</h3><ul>
<li>Reading formal plans and specifications</li>
<li>Precise takeoffs and estimating</li>
<li>Written communication: RFIs (requests for information), proposals</li>
<li>Insurance, bonds and registrations</li>
<li>Public works rules and prevailing wage</li>
<li>Tracking bids and learning from results</li>
</ul></div>
</div>`,
  ex: `<p>Many new commercial estimators come from the office and have never installed a valve. You have the opposite advantage: when you count labor hours, you know what a day of trenching really looks like. Keep that advantage as you learn the paperwork.</p>`
},

{ h: "Common beginner mistakes (part 1)",
  lead: "Most new commercial bidders lose money in the same few ways. Learn them here instead of on a job.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>What it costs</th><th>How to avoid it</th></tr></thead>
<tbody>
<tr><td>Pricing from the landscape sheets only</td><td>Missed water meter, point of connection, controller power or sleeves: thousands of dollars of unpaid work</td><td>Search the civil and electrical sheets for anything that touches your scope (Module 4)</td></tr>
<tr><td>Skipping an addendum</td><td>Public: bid thrown out. Private: you build the change for free.</td><td>Keep an addenda log; check the portal the day before bids are due</td></tr>
<tr><td>Forgetting the establishment period</td><td>Weeks or years of unpaid visits: 750 working days on Caltrans 11-422004</td><td>Find the establishment section in the specs on day one</td></tr>
<tr><td>No time limit on your price</td><td>Price rises eat your profit when the job starts a year later</td><td>“Price valid 60 days,” plus an escalation clause where you can</td></tr>
<tr><td>Vague exclusions</td><td>The general contractor plugs you high, or you end up doing it for free</td><td>Write a clear inclusions/exclusions list (Module 13)</td></tr>
<tr><td>Sending to only one general contractor</td><td>If that one loses, you lose</td><td>Send to every general contractor bidding the job</td></tr>
</tbody></table></div>`,
  src: "Caltrans 11-422004 Notice to Bidders."
},

{ h: "Common beginner mistakes (part 2)",
  lead: "More mistakes that cost new bidders money, and the habit that prevents each one.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>What it costs</th><th>How to avoid it</th></tr></thead>
<tbody>
<tr><td>Being even one minute late</td><td>Public bid rejected, all your estimating time lost</td><td>Submit hours early; electronic uploads can be slow</td></tr>
<tr><td>Missing a form due after bid day</td><td>Real case: the lowest bidder on 11-428704 lost a $1.1 million job for late DBE forms</td><td>Put every after-bid deadline on the calendar before you submit (Module 14)</td></tr>
<tr><td>Signing a subcontract without reading it</td><td>Pay-if-paid terms, high retention, big back-charge rights</td><td>Read payment, retention, insurance and indemnity first (Module 16)</td></tr>
<tr><td>Not planning cash for retention and slow pay</td><td>A profitable job that runs the company out of cash</td><td>Make a cash flow plan for every job over a set size (Module 3)</td></tr>
<tr><td>Extra work on a handshake</td><td>Never paid</td><td>Written change order, or at least a signed T&amp;M (time and materials) ticket, before the work</td></tr>
<tr><td>Underestimating paperwork time</td><td>Certified payroll, submittals and safety plans take office hours you didn't price</td><td>Price office and supervision time as a real cost (Modules 9 and 10)</td></tr>
</tbody></table></div>`,
  src: "Caltrans Bid Summary 11-428704 (bidder 6 marked NR LATE DBE/DVBE SUBMITTAL)."
},

{ h: "Scenarios: what would you do?",
  lead: "Short real-world situations. Think of your answer before you read the right move.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>The right move</th><th>Why</th></tr></thead>
<tbody>
<tr><td>The day before bids are due you find Addendum 3, which adds a one-year maintenance period.</td><td>Price the maintenance, update your number, and tell every general contractor your price includes Addendum 3.</td><td>The general contractors will level on it; a number without it will be plugged or rejected.</td></tr>
<tr><td>The superintendent asks you to add 12 trees: “We'll take care of you.”</td><td>Thank them, give a written price, and wait for a signed change order (or a signed T&amp;M ticket) before planting.</td><td>Superintendents usually can't approve money. Unwritten extras are rarely paid.</td></tr>
<tr><td>After a public bid opening you realize you left out a $40,000 item.</td><td>Call the owner of your company and an attorney the same day. Relief exists only for real clerical errors, with written notice within five working days.</td><td>Public bids generally can't be withdrawn for judgment errors (PCC §§5100–5110). Module 14 covers this.</td></tr>
<tr><td>A competitor's estimator calls: “Let's not both chase the school job.”</td><td>Decline and end the call. Tell your company's owner.</td><td>That is bid rigging, which is illegal.</td></tr>
<tr><td>A general contractor wants your price but says insurance must be $5M per occurrence; you carry $1M plus a $1M umbrella.</td><td>Ask your agent what it costs to meet it before bid day, and add the cost or note the exception.</td><td>Insurance you can't provide means you can't sign the subcontract.</td></tr>
</tbody></table></div>`,
  src: "Cal. Public Contract Code §§5100–5110; Cal. B&P Code §16720."
},

{ h: "Abbreviations you'll see right away",
  lead: "Bid documents are full of short forms. Here are the ones from this module. The Bid Dictionary has hundreds more.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Short form</th><th>Means</th><th>Short form</th><th>Means</th></tr></thead>
<tbody>
<tr><td>GC</td><td>General contractor</td><td>LA</td><td>Landscape architect</td></tr>
<tr><td>CM / CMAR</td><td>Construction manager / construction manager at risk</td><td>RE</td><td>Resident engineer (agency's field boss)</td></tr>
<tr><td>DBB / DB</td><td>Design-bid-build / design-build</td><td>GMP</td><td>Guaranteed maximum price</td></tr>
<tr><td>LS</td><td>Lump sum</td><td>EA</td><td>Each</td></tr>
<tr><td>LF</td><td>Linear foot</td><td>SF / SQYD</td><td>Square foot / square yard</td></tr>
<tr><td>CY</td><td>Cubic yard</td><td>T&amp;M</td><td>Time and materials</td></tr>
<tr><td>RFI</td><td>Request for information</td><td>NTP</td><td>Notice to proceed</td></tr>
<tr><td>EE</td><td>Engineer's estimate</td><td>NR</td><td>Non-responsive (on a bid tab)</td></tr>
<tr><td>DBE</td><td>Disadvantaged Business Enterprise</td><td>DVBE</td><td>Disabled Veteran Business Enterprise</td></tr>
<tr><td>SLBE / ELBE</td><td>Small / Emerging Local Business Enterprise (City of San Diego)</td><td>DIR</td><td>California Department of Industrial Relations</td></tr>
<tr><td>CSLB</td><td>Contractors State License Board</td><td>PCC</td><td>California Public Contract Code</td></tr>
<tr><td>POC</td><td>Point of connection (water source)</td><td>DG</td><td>Decomposed granite</td></tr>
<tr><td>WD</td><td>Working days</td><td>COI</td><td>Certificate of insurance</td></tr>
</tbody></table></div>
<p>Look up any other short form in the <a href="#dict">Bid Dictionary</a>. Type it exactly as you see it, like “NIC” or “TYP.”</p>`
},

{ h: "Ask yourself: Module 1 self-check",
  lead: "If you can answer these out loud without looking, you're ready for Module 2. If not, go back to the slide named in brackets.",
  body: `<ol>
<li>What three parts does every bid have? [What is a bid?]</li>
<li>Who do you send submittals to, and who approves them? [The landscape architect]</li>
<li>Who is the RE on a public job, and why does it matter to you? [Owner's side]</li>
<li>On a $200,000 subcontract with 5% retention, how much is held back, and roughly when do you get it? [Worked example]</li>
<li>What's the difference between lump sum and unit price, and who carries the quantity risk in each? [Contract types]</li>
<li>Name three things a general contractor checks besides price. [How general contractors choose subs]</li>
<li>What is bid shopping, and what protects a listed sub on public work? [Bid shopping]</li>
<li>Why didn't the lowest bid on 11-428704 win? [Reading a real bid tab]</li>
<li>What does “responsive” mean? “Responsible”? [Lowest responsive, responsible bidder]</li>
<li>Name four beginner mistakes and the habit that prevents each. [Common beginner mistakes]</li>
</ol>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your own notebook. You'll see every one of them again.",
  terms: [
    ["Bid", "A written promise to do specific work for a specific price."],
    ["General contractor (GC)", "The company hired by the owner to build the whole project. Hires subs."],
    ["Subcontractor (sub)", "A specialty company hired by the GC for one part of the work."],
    ["Prime contractor", "The contractor hired directly by the owner. On landscape-only jobs, that can be you."],
    ["Owner", "Whoever pays for the project: developer, business, HOA or agency."],
    ["HOA", "Homeowners association. Often owns and pays for common-area landscape."],
    ["Owner's representative (owner's rep)", "Person or firm who speaks for the owner on the job."],
    ["Construction manager (CM)", "Firm hired to manage a project for the owner. A CM at risk (CMAR) also guarantees a price."],
    ["Resident engineer (RE)", "The agency's person in charge in the field on a public job."],
    ["Landscape architect (LA)", "Designs the landscape and irrigation and writes the landscape specs."],
    ["Superintendent (super)", "The GC's person who runs the job site."],
    ["Project manager (PM)", "The GC's person who runs the contract after award."],
    ["Scope of work", "Exactly what work is included in your bid."],
    ["Plans / drawings", "The sheets showing what to build and where."],
    ["Specifications (specs)", "The written book of products, methods and requirements."],
    ["Addendum (plural: addenda)", "An official change to the bid documents issued before bids are due."],
    ["Takeoff", "Counting and measuring everything on the plans."],
    ["RFI", "Request for information. A written question about the documents."],
    ["Submittal", "Product data, samples or photos you send for approval before you buy or install."],
    ["Bid leveling", "When the GC compares sub bids side by side and fills gaps."],
    ["Plug", "The GC's own estimate for something a sub left out."],
    ["Lump sum (LS)", "One fixed price for the whole scope or item."],
    ["Unit price", "A price per unit (per LF, EA, CY), paid on the quantity actually installed."],
    ["Time and materials (T&M)", "Paid for actual hours and materials plus markup."],
    ["GMP", "Guaranteed maximum price: cost plus a fee, up to a cap."],
    ["DBB / DB", "Design-bid-build / design-build: two ways an owner buys a project."],
    ["Pay application", "Your monthly bill for the work completed."],
    ["Retention", "Part of each payment held back until the job is finished. Usually capped at 5% in California."],
    ["Change order", "A signed, written change to the contract scope or price."],
    ["Punch list", "The list of fixes found at the final walk-through."],
    ["Plant establishment period", "Time after planting when you maintain and replace plants, set by the specs."],
    ["Prevailing wage", "Minimum wages set by the state for public works."],
    ["Responsive", "A bid that followed all the instructions."],
    ["Responsible", "A bidder able to do the work: licensed, registered, qualified."],
    ["Bid tab (bid tabulation)", "The posted list of every bidder's price after a public bid opening."],
    ["Engineer's estimate (EE)", "The agency's own estimate of the job's cost."],
    ["NR", "Non-responsive. Marked on a bid tab when a bid broke the rules."],
    ["Bid shopping", "A GC using one sub's price to push others lower, often after award."],
    ["Bid peddling", "A sub offering to beat a competitor's price after bid day."],
    ["Noncollusion declaration", "A signed statement in every California public bid that the bid is genuine and not rigged."],
    ["Mobilization", "Getting people, equipment and the site set up to start; often its own lump sum item."],
    ["Notice to proceed (NTP)", "The official go-ahead to start the work."]
  ]
},

{ t: "quiz", id: "m1", h: "Check yourself",
  lead: "Tap an answer to see if you got it. You can try again any time.",
  qs: [
    { q: "What is a bid?", a: ["A rough guess at the cost", "A written promise to do specific work for a specific price", "A question about the plans"], c: 1, why: "A bid is a promise. If it's accepted, it becomes the basis of a contract you're expected to honor." },
    { q: "On a new office building, who usually hires the landscape contractor?", a: ["The owner directly", "The landscape architect", "The general contractor"], c: 2, why: "On building projects, the GC holds the contract with the owner and hires the trades as subs." },
    { q: "What is retention?", a: ["Part of each payment held back until the job is finished", "A penalty for being late", "The deposit the owner pays up front"], c: 0, why: "Retention is released after the job is accepted. In California it is generally capped at 5% on public works, and on most private contracts signed since Jan 1, 2026." },
    { q: "Sub B had the lowest number but excluded the maintenance period. What will the GC most likely do?", a: ["Award to Sub B because it's cheapest", "Add a plug for the missing maintenance and compare again", "Ask the owner to remove the maintenance period"], c: 1, why: "That's bid leveling. After plugs are added, a 'cheap' bid often isn't the lowest anymore." },
    { q: "A public bid is the lowest but the bidder forgot to acknowledge an addendum. What can happen?", a: ["Nothing, the price is all that matters", "The bid can be rejected as non-responsive", "The agency must call the bidder to fix it"], c: 1, why: "Public jobs go to the lowest responsive, responsible bidder. Missing an addendum usually makes a bid non-responsive." },
    { q: "Which is usually TRUE of public work but not most private work?", a: ["Prevailing wage and DIR registration apply", "Relationships decide who wins", "Prices are kept secret after bidding"], c: 0, why: "Public works require prevailing wages and DIR registration, and bid results are public." },
    { q: "How are changes made on a commercial job?", a: ["A phone call with the superintendent", "A written, signed change order", "Adding it to the next invoice"], c: 1, why: "Without a signed change order, extra work is often never paid." },
    { q: "Why does landscape bidding carry extra price risk?", a: ["Plants are always on sale", "Landscape is installed near the end, often months after the bid", "Landscape contracts can't be changed"], c: 1, why: "Prices for plants, pipe and labor can rise between bid day and installation. Your bid should account for it." },
    { q: "On a unit price contract, you bid 7,493 LF of pipe at $12/LF and the RE measures 7,900 LF installed. What are you paid?", a: ["$89,916, the bid amount", "$94,800, for the measured quantity", "Nothing extra without a lawsuit"], c: 1, why: "Unit price work is paid on the measured quantity: 7,900 × $12 = $94,800." },
    { q: "On Caltrans 11-428704, why didn't the lowest bid ($1,106,287.75) win?", a: ["It was too low to be believed", "The bidder turned in its DBE forms late and was marked non-responsive", "The bidder had the wrong license"], c: 1, why: "The bid tab marks it NR LATE DBE/DVBE SUBMITTAL. Forms due after bid day count as much as the price." },
    { q: "A GC who already won the job tells you another sub is $9,000 lower and asks you to beat it. What is this called?", a: ["Bid leveling", "Bid shopping", "A change order"], c: 1, why: "Using one sub's price to push another lower, especially after award, is bid shopping." },
    { q: "On California public works, what protects a listed sub from being swapped for a cheaper one after award?", a: ["Nothing", "The Subletting and Subcontracting Fair Practices Act (PCC §4100 and following)", "The sub's insurance policy"], c: 1, why: "A listed sub can be substituted only for reasons in the law, such as refusing to sign or not being licensed." },
    { q: "Who decides if a delivered plant is acceptable on the City's K-24-1952 job?", a: ["The nursery", "The project landscape architect", "The truck driver"], c: 1, why: "The spec says the Project Landscape Architect is the sole judge of each plant, and rejected plants are replaced at the contractor's expense." },
    { q: "A competitor suggests you each skip one of two school bids so you both win one. What is this?", a: ["Smart teamwork", "Bid rigging, which is illegal", "Normal on public jobs"], c: 1, why: "Agreeing on who bids or who wins is collusion. Every California public bid includes a signed noncollusion declaration." }
  ]
},

{ t: "practice", id: "m1", h: "Practice assignments",
  lead: "This is where the learning happens. Check each one off when it's done.",
  items: [
    { h: "Set up your bid notebook", hrs: 0.25, d: "<p>Start a binder or digital notebook with three sections: Words to know, Questions to ask, and Bid log. Copy this module's terms into it in your own words.</p>" },
    { h: "Map a real project you know", hrs: 0.5, d: "<p>Pick a shopping center, apartment complex or office near you with commercial landscape. Write down who the owner, GC and landscape architect probably were. Look for construction signs, ask the property manager, or search the City's permit records. Draw the contract chain from this module.</p>" },
    { h: "Take the City's free bidding tutorials", hrs: 1.5, d: "<p>Go to <a href=\"https://www.sandiego.gov/cip/bidopps/doingbusiness\" target=\"_blank\" rel=\"noopener\">City of San Diego · Doing CIP Business</a> and work through the online tutorials. Write down 10 things you learned and 3 questions you still have.</p>" },
    { h: "Open one real bid package", hrs: 1, d: "<p>From the City's bid opportunities page (PlanetBids), find a closed project that includes landscape or irrigation. You may need a free vendor account. List every document in the package, then find the bid results and write down the low bid and the number of bidders.</p>" },
    { h: "Interview your boss", hrs: 0.5, d: "<p>Ask and write down:</p><ul><li>The three largest jobs the company has done, and their dollar size</li><li>Crew sizes and equipment we own</li><li>Our main suppliers and nurseries</li><li>Any HOA, commercial or public work done before</li><li>What size of commercial job the owner is comfortable starting with</li></ul>" },
    { h: "Explain it back", hrs: 0.75, d: "<p>Write one page, or explain out loud to a coworker, how a commercial landscape bid works from invitation to payment. Use at least 10 words from the Words to know list. If you get stuck, that's the part to reread.</p>" },
    { h: "Read a real bid tab yourself", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-422004\">Real Bid Lab · 11-422004</a> (I-5 Carmel Valley). Write down each bidder's total, work out how far each one was over the low bid as a percent (show your math), and compare the low bid to the engineer's estimate. Then pick three line items and note the highest and lowest unit price. Write two sentences on what surprised you.</p>" },
    { h: "Write the company's bid-shopping rules", hrs: 0.25, d: "<p>Write a half-page policy for the owner to approve: when we send scope and price, how long our prices are good for, how we answer a request to “sharpen,” the lowest margin we'll accept, and that we never share or ask for a competitor's number.</p>" },
    { h: "Work the retention example on a real job", hrs: 0.25, d: "<p>Take a past company job (or a made-up $150,000 job). Split it into monthly bills, hold 5% retention from each, and write down how much is held in total and the earliest date you would see it if the whole project finished 4 months after your work. Show every line of math.</p>" }
  ]
},

{ h: "Module 1 summary",
  lead: "You now know how the commercial world is set up. Next, you'll make sure the company is legally and practically ready to bid.",
  body: `<ul>
<li>A bid is a promise. Scope, price and terms must all be clear.</li>
<li>On most commercial jobs you're a sub to a general contractor. On landscape-only public jobs you can be the prime.</li>
<li>Know the cast: owner, owner's rep, construction manager, resident engineer, landscape architect, the general contractor's team, inspectors, suppliers and your own subs.</li>
<li>Contracts flow down, bills flow up, money flows back down slowly, with retention (usually 5%) held until the whole project is done.</li>
<li>Lump sum puts quantity risk on you; unit price pays for what's measured.</li>
<li>Private work runs on relationships and bid leveling. Public work runs on strict rules and the lowest responsive, responsible bid.</li>
<li>Protect yourself from bid shopping, and never cross the ethics lines.</li>
<li>Bid tabs are free market data: read the totals, the line items and the sub lists.</li>
<li>Complete, clear and on-time bids win more often than cheap, confusing ones.</li>
</ul>
<p><strong>Next: Module 2 · Your License, Your Company and Getting Bid-Ready.</strong></p>`
}
]
});
