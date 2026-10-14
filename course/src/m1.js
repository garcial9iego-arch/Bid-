(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 1, hours: 6, title: "How Construction Bidding Works",
slides: [

{ t: "cover",
  h: "How Construction Bidding Works",
  lead: "Before you price a single sprinkler head, you need to know how the commercial world works: who is involved, how money and paperwork move, and how a contractor wins a job.",
  objectives: [
    "Explain in your own words what a bid is and why it is a promise",
    "Name every player on a commercial project and what each one does",
    "Describe how contracts, bills and payments move between them",
    "Tell the difference between private work and public work",
    "Explain why the cheapest bid does not always win",
    "Follow a bid from invitation to award, day by day"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "4.5 h"], ["Module total", "6 h"]],
  body: "<p>You already know how to install landscape and irrigation. This module adds the part nobody at the company knows yet: how commercial work is bought and sold.</p>"
},

{ h: "How to use this course",
  lead: "Every slide starts in plain words. Extra detail is there when you want it, but you never need it to keep going.",
  body: `<ul>
<li><strong>Main text</strong> is what you must know. Read this on every slide.</li>
<li><strong>Example</strong> boxes show how it looks on a real job.</li>
<li><strong>Watch out</strong> boxes are mistakes that cost contractors money.</li>
<li><strong>Go deeper</strong> opens extra detail: laws, numbers and fine print. Skip it the first time if you like.</li>
<li><strong>Read aloud</strong> (top right of each slide) reads the slide to you.</li>
<li><strong>Words to know</strong> near the end of each module lists new terms. Keep your own list too.</li>
<li><strong>Practice</strong> is where most of the hours are. The course only works if you do the practice.</li>
</ul>`,
  deeper: `<p>About accuracy: fees, limits and rules change. Numbers in this course were checked in 2026. Before you rely on one for a real bid, confirm it at the source listed on the slide.</p>
<p>This course is training, not legal advice. For how your company is set up, contracts and bonding, the right people are a construction attorney, a CPA and a surety (bonding) agent.</p>`
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
  ex: `<p>“Landscape and irrigation per sheets L-1.0 to L-4.2 and spec sections 32 84 00 and 32 93 00, including 90-day plant establishment. Excludes permits, bonds and water meter fees. Total: $186,400. Price good for 60 days.”</p>`,
  watch: `<p>Never send a number you are not willing to build for. “We'll fix it later” does not work in commercial bidding. A low number you can't live with is worse than losing the bid.</p>`,
  deeper: `<p><strong>Public bids:</strong> in California, once public bids are opened you generally can't withdraw yours. The Public Contract Code (sections 5100–5110) gives relief only for certain clerical mistakes (not bad judgment), and you must notify the agency in writing within five working days after the bid opening.</p>
<p><strong>Private bids to a GC:</strong> a subcontractor's bid can still bind you. In the California case <em>Drennan v. Star Paving</em> (1958), a GC used a sub's low bid in its own bid; the sub tried to back out, and the court held the sub to its price because the GC had relied on it. That idea, called promissory estoppel, is still applied today.</p>`,
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
<tr><td><strong>Payment</strong></td><td>Deposit and progress payments</td><td>Monthly bill (“pay application”), paid 30–60+ days later, with 5–10% held back until the end (“retention”)</td></tr>
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
<div class="node" role="listitem"><b>Owner</b><span>Pays for the project: a developer, business, HOA, city, school district</span></div>
<div class="node" role="listitem"><b>Designers</b><span>Landscape architect, civil engineer, architect</span></div>
<div class="node" role="listitem"><b>General contractor</b><span>Signs with the owner, runs the job, hires the trades</span></div>
<div class="node you" role="listitem"><b>You: landscape sub</b><span>Irrigation, planting, soil, mulch, establishment</span></div>
<div class="node" role="listitem"><b>Suppliers</b><span>Irrigation supply house, nurseries, soil yards, rental yards</span></div>
<div class="node" role="listitem"><b>Inspectors</b><span>City inspector, owner's rep, agency resident engineer</span></div>
</div>
<ul>
<li>The <strong>landscape architect (LA)</strong> draws the planting and irrigation plans and writes the landscape specs. They answer design questions and approve your products.</li>
<li>The <strong>civil engineer</strong> draws grading, drainage and utilities. Your water source (the point of connection) is often on their sheets.</li>
<li>The <strong>GC</strong> is your customer on most private jobs. Their estimator invites you to bid; their project manager and superintendent run the job.</li>
</ul>`,
  ex: `<p>A new drive-thru coffee shop. <strong>Owner:</strong> a developer. <strong>LA:</strong> draws three landscape sheets. <strong>GC:</strong> builds everything and hires you for landscape and irrigation. <strong>Suppliers:</strong> you buy irrigation parts from a supply house such as Ewing or SiteOne, and plants from a wholesale nursery. <strong>Inspector:</strong> the city checks the backflow device and the final landscape.</p>`
},

{ h: "How contracts, bills and money move",
  lead: "Contracts flow down. Bills flow up. Money flows back down, slowly, with some held back.",
  body: `<ol class="steps">
<li><div><b>Owner signs a contract with the GC.</b>The GC promises to build the whole project.</div></li>
<li class="hl"><div><b>GC signs a subcontract with you.</b>You promise to build the landscape scope.</div></li>
<li><div><b>You buy from suppliers.</b>Purchase orders for pipe, heads, plants, soil.</div></li>
<li class="hl"><div><b>Each month you bill the GC.</b>A “pay application” for the percent of work you finished.</div></li>
<li><div><b>The GC bills the owner.</b>Your bill goes inside theirs.</div></li>
<li><div><b>The owner pays the GC, then the GC pays you.</b>Often 30–60+ days after you billed, minus retention.</div></li>
<li class="hl"><div><b>Retention comes at the end.</b>The 5–10% held back is released after the job is accepted.</div></li>
</ol>`,
  watch: `<p>You pay your crew every week and your suppliers within 30 days, but you may not see the GC's money for two months. A job can be profitable on paper and still run you out of cash. Module 3 shows this with real numbers.</p>`,
  deeper: `<ul>
<li>On private jobs in California, a GC generally must pay a sub within 7 days of receiving payment for that sub's work, unless the contract says otherwise (Business and Professions Code §7108.5).</li>
<li>On California public works, retention is generally capped at 5% (Public Contract Code §7201).</li>
<li>Many subcontracts include “pay-when-paid” language. It affects how long you wait, so read it before you sign.</li>
<li>With each payment you sign a lien release. California uses statutory forms (Civil Code §§8132–8138). Never sign an unconditional release before the money clears.</li>
</ul>`,
  src: "Cal. B&P Code §7108.5; Public Contract Code §7201; Civil Code §§8132–8138."
},

{ h: "The life of a project",
  lead: "Landscape is one of the last trades on most jobs. You bid early, but you may install many months later.",
  body: `<ol class="steps">
<li><div><b>Design</b>The owner hires designers. Plans and specs are drawn.</div></li>
<li class="hl"><div><b>Bidding</b>GCs and subs price the plans. This is what this course teaches.</div></li>
<li><div><b>Award and contract</b>The owner picks a GC. The GC picks subs and signs subcontracts.</div></li>
<li class="hl"><div><b>Submittals</b>You send product data, plant sources, soil tests and samples for approval before you order.</div></li>
<li><div><b>Construction</b>Grading, utilities, building, paving. You install sleeves early, then come back near the end.</div></li>
<li class="hl"><div><b>Landscape installation</b>Irrigation, soil prep, planting, mulch, controller programming.</div></li>
<li><div><b>Inspection and punch list</b>The LA and inspector walk the job and list fixes.</div></li>
<li class="hl"><div><b>Plant establishment / maintenance period</b>You water, weed and replace dead plants for a set time, often 90 days or more.</div></li>
<li><div><b>Final acceptance and warranty</b>Retention is released. Your warranty period starts, often one year.</div></li>
</ol>`,
  ex: `<p>You bid an apartment project in March. The building takes 14 months. You install landscape the next May. If plant or PVC prices rise 8% in that time, that comes out of your profit unless your bid planned for it.</p>`,
  deeper: `<p>The plant establishment (or maintenance) period is set in the specs. Public projects often require 90 days to a year, sometimes longer, with weekly visits, reports and plant replacement. It is real labor that must be in your price. Module 5 shows where to find it in the specs.</p>`
},

{ h: "Two markets: private and public",
  lead: "Private and public jobs use the same estimating skills but different rules. You will learn both.",
  body: `<div class="twocol">
<div><h3>Private work</h3><ul>
<li>Owner is a business, developer or HOA</li>
<li>You usually bid to a GC, not the owner</li>
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
<li>Prevailing wage, DIR registration and certified payroll apply</li>
<li>Bonds are usually required</li>
</ul></div>
</div>`,
  watch: `<p>Some “private” projects are paid partly with public money, such as affordable housing with city or state funds. That can make them public works for prevailing wage. Always check the bid documents for prevailing wage language.</p>`,
  deeper: `<p>California Labor Code §1720(a)(1) defines public works as construction “paid for in whole or in part out of public funds.” That is why some privately owned projects still require prevailing wages.</p>`,
  src: "Cal. Labor Code §1720."
},

{ h: "How projects get contracted",
  lead: "How the owner hires the GC changes how and when you get to bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Method</th><th>In plain words</th><th>What it means for you</th></tr></thead>
<tbody>
<tr><td><strong>Design-bid-build</strong></td><td>Design is finished, then contractors bid, then it gets built. Most common on public work.</td><td>You bid on finished plans. Price competition is strongest.</td></tr>
<tr><td><strong>Hard bid</strong></td><td>Lowest qualified price wins.</td><td>Your number has to be sharp, and your scope complete.</td></tr>
<tr><td><strong>Negotiated</strong></td><td>A private owner picks a GC they trust.</td><td>The GC still asks subs for prices, but may also weigh relationships and quality.</td></tr>
<tr><td><strong>Design-build</strong></td><td>One team designs and builds.</td><td>You may help design the irrigation system and give budgets early.</td></tr>
<tr><td><strong>CM at risk / CMAR</strong></td><td>A builder joins the team during design and guarantees a maximum price.</td><td>You may give early budget numbers, then bid formally later.</td></tr>
</tbody></table></div>`,
  ex: `<p>A school district hires a GC by CMAR to modernize a campus. In design, the GC asks you for a budget price for the new playfield irrigation. Months later, the GC sends out formal bid packages and you bid the final plans with other landscape subs.</p>`
},

{ h: "Where a landscape contractor fits",
  lead: "Depending on the job, you are either a subcontractor to a GC or the main (“prime”) contractor yourself.",
  body: `<div class="twocol">
<div><h3>As a subcontractor</h3><ul>
<li>Landscape on buildings: retail centers, offices, apartments, hotels, medical, schools</li>
<li>Landscape on bigger civil jobs, under a general engineering (Class A) contractor: street projects, large parks, stormwater basins</li>
<li>Your customer is the GC</li>
</ul></div>
<div><h3>As the prime contractor</h3><ul>
<li>Landscape-only public jobs: median planting, park irrigation retrofits, water-saving turf conversions, landscape renovations</li>
<li>Only when the bid notice allows your license class (Module 2)</li>
<li>Your customer is the agency, and you handle all the paperwork</li>
</ul></div>
</div>`,
  ex: `<p>Typical San Diego County landscape bids: a median irrigation retrofit for a city, a school field renovation, planting and irrigation for a new apartment complex, an HOA common-area renovation, planting in a stormwater basin on a street project, and landscape for a new medical office building.</p>`
},

{ h: "“Lowest responsive, responsible bidder”",
  lead: "Public jobs don't go to the lowest number alone. They go to the lowest bid that followed the rules, from a company that can do the work.",
  body: `<ul>
<li><strong>Lowest:</strong> the lowest total price.</li>
<li><strong>Responsive:</strong> the bid follows the instructions exactly. Every form filled and signed, every addendum acknowledged, the bid bond included, subcontractors listed, submitted on time.</li>
<li><strong>Responsible:</strong> the company can actually do the job: right license, registered with DIR, experience, a clean record, financial strength.</li>
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
  watch: `<p>The landscape sheets aren't the only ones that matter. The water meter and point of connection may be on civil sheets, and controller power on electrical sheets. Module 4 teaches you to search the whole set.</p>`
},

{ h: "What a landscape scope usually includes",
  lead: "Commercial landscape bids are bigger than “plants and sprinklers.” Here is what usually falls in your package.",
  body: `<div class="twocol">
<div><h3>Irrigation</h3><ul>
<li>Point of connection to the water source</li>
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
<li>Mulch, decomposed granite, boulders</li>
<li>Plant establishment / maintenance period</li>
<li>Warranty and plant replacement</li>
</ul></div>
</div>`,
  watch: `<p>Sleeves under paving are often drawn on the landscape sheets but must be installed before paving, months before you start. Ask early who installs them.</p>`
},

{ h: "Bid leveling: how a GC compares subs",
  lead: "GCs don't just pick the lowest number. They line up every bid and fill in anything missing with their own estimate, called a “plug.”",
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

{ h: "Why bids are won and lost",
  lead: "Price matters most, but plenty of bids are lost before price is even compared.",
  body: `<div class="twocol">
<div><h3>Common reasons for losing</h3><ul>
<li>Price too high (often from missing production efficiency or a high markup)</li>
<li>Scope gaps or unclear exclusions</li>
<li>Late. Even one minute late on a public bid.</li>
<li>Missing forms, signatures, bond or addenda</li>
<li>Not registered (DIR) or wrong license class</li>
<li>No relationship; the GC already trusts another sub</li>
<li>Can't meet the schedule or insurance requirements</li>
</ul></div>
<div><h3>What winners do</h3><ul>
<li>Read every document, including addenda</li>
<li>Know their real costs from past jobs</li>
<li>Send clean, complete, easy-to-compare proposals</li>
<li>Submit early and confirm it was received</li>
<li>Follow up after bid day and ask for feedback</li>
<li>Track results and learn the market's prices</li>
<li>Keep relationships with GC estimators</li>
</ul></div>
</div>`
},

{ h: "A bid from start to finish",
  lead: "A typical bid takes two to four weeks from invitation to due date. Here's what happens along the way.",
  body: `<ol class="steps">
<li><div><b>Day 1: Invitation arrives</b>Download everything. Put the due date and job walk on the calendar. Decide go or no-go.</div></li>
<li><div><b>Day 3: Job walk / pre-bid meeting</b>See the site. Note access, existing conditions, water source.</div></li>
<li class="hl"><div><b>Days 3–12: Study and take off</b>Read plans and specs. Count and measure everything.</div></li>
<li><div><b>Day 10: Question deadline</b>Last day to send RFIs (questions).</div></li>
<li><div><b>Day 13: Last addendum</b>Answers and changes are issued. Update your takeoff.</div></li>
<li class="hl"><div><b>Days 12–16: Price it</b>Supplier quotes, labor, equipment, overhead and markup.</div></li>
<li><div><b>Day 17: Sub bids due to GCs</b>Often the day before, or the morning of, the GC's deadline.</div></li>
<li><div><b>Day 18, 2:00 PM: GC bids due to the owner</b>Public bids are opened and read, often the same day.</div></li>
<li><div><b>Weeks later: Award and contract</b>Then the notice to proceed, the official start.</div></li>
</ol>`,
  deeper: `<p>On public jobs the bid results (“bid tabulation” or “bid tab”) are usually posted online within days. Even when you don't bid, these are a free education in what the market pays. Module 3 shows how to read them.</p>`
},

{ h: "Bid day, for real",
  lead: "On bid day a GC estimator is collecting dozens of prices from every trade in a few hours. Make it easy for them.",
  body: `<ul>
<li><strong>Send your scope early</strong> (a day or two before) so the estimator can read it before the rush.</li>
<li><strong>Send your price on time</strong>, using the GC's bid form if they have one.</li>
<li><strong>Confirm they received it.</strong> A short call or email: “Did you get our landscape number?”</li>
<li><strong>Be reachable.</strong> Estimators call with last-minute questions. A missed call can mean a missed job.</li>
<li><strong>Send to every GC</strong> bidding the project, not only one. Each GC is a separate chance to win.</li>
</ul>`,
  watch: `<p>Many subs send their price in the final hour so competitors can't “shop” it. That's normal, but if your email arrives after the GC has finished their spreadsheet, you're out. Know each GC's cutoff time.</p>`
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
<li>A C-27 license and history</li>
</ul></div>
<div><h3>You're adding</h3><ul>
<li>Reading formal plans and specifications</li>
<li>Precise takeoffs and estimating</li>
<li>Written communication: RFIs, proposals</li>
<li>Insurance, bonds and registrations</li>
<li>Public works rules and prevailing wage</li>
<li>Tracking bids and learning from results</li>
</ul></div>
</div>`,
  ex: `<p>Many new commercial estimators come from the office and have never installed a valve. You have the opposite advantage: when you count labor hours, you know what a day of trenching really looks like. Keep that advantage as you learn the paperwork.</p>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your own notebook. You'll see every one of them again.",
  terms: [
    ["Bid", "A written promise to do specific work for a specific price."],
    ["General contractor (GC)", "The company hired by the owner to build the whole project. Hires subs."],
    ["Subcontractor (sub)", "A specialty company hired by the GC for one part of the work."],
    ["Prime contractor", "The contractor hired directly by the owner. On landscape-only jobs, that can be you."],
    ["Owner", "Whoever pays for the project: developer, business, HOA or agency."],
    ["Landscape architect (LA)", "Designs the landscape and irrigation and writes the landscape specs."],
    ["Scope of work", "Exactly what work is included in your bid."],
    ["Plans / drawings", "The sheets showing what to build and where."],
    ["Specifications (specs)", "The written book of products, methods and requirements."],
    ["Addendum (plural: addenda)", "An official change to the bid documents issued before bids are due."],
    ["Takeoff", "Counting and measuring everything on the plans."],
    ["RFI", "Request for information. A written question about the documents."],
    ["Bid leveling", "When the GC compares sub bids side by side and fills gaps."],
    ["Plug", "The GC's own estimate for something a sub left out."],
    ["Pay application", "Your monthly bill for the work completed."],
    ["Retention", "Part of each payment (often 5–10%) held back until the job is finished."],
    ["Change order", "A signed, written change to the contract scope or price."],
    ["Punch list", "The list of fixes found at the final walk-through."],
    ["Plant establishment period", "Time after planting when you maintain and replace plants, set by the specs."],
    ["Prevailing wage", "Minimum wages set by the state for public works."],
    ["Responsive", "A bid that followed all the instructions."],
    ["Responsible", "A bidder able to do the work: licensed, registered, qualified."],
    ["Bid tab", "The posted list of every bidder's price after a public bid opening."],
    ["Notice to proceed (NTP)", "The official go-ahead to start the work."]
  ]
},

{ t: "quiz", id: "m1", h: "Check yourself",
  lead: "Tap an answer to see if you got it. You can try again any time.",
  qs: [
    { q: "What is a bid?", a: ["A rough guess at the cost", "A written promise to do specific work for a specific price", "A question about the plans"], c: 1, why: "A bid is a promise. If it's accepted, it becomes the basis of a contract you're expected to honor." },
    { q: "On a new office building, who usually hires the landscape contractor?", a: ["The owner directly", "The landscape architect", "The general contractor"], c: 2, why: "On building projects, the GC holds the contract with the owner and hires the trades as subs." },
    { q: "What is retention?", a: ["Part of each payment held back until the job is finished", "A penalty for being late", "The deposit the owner pays up front"], c: 0, why: "Retention (often 5–10%, capped at 5% on most California public works) is released after the job is accepted." },
    { q: "Sub B had the lowest number but excluded the maintenance period. What will the GC most likely do?", a: ["Award to Sub B because it's cheapest", "Add a plug for the missing maintenance and compare again", "Ask the owner to remove the maintenance period"], c: 1, why: "That's bid leveling. After plugs are added, a 'cheap' bid often isn't the lowest anymore." },
    { q: "A public bid is the lowest but the bidder forgot to acknowledge an addendum. What can happen?", a: ["Nothing, the price is all that matters", "The bid can be rejected as non-responsive", "The agency must call the bidder to fix it"], c: 1, why: "Public jobs go to the lowest responsive, responsible bidder. Missing an addendum usually makes a bid non-responsive." },
    { q: "Which is usually TRUE of public work but not most private work?", a: ["Prevailing wage and DIR registration apply", "Relationships decide who wins", "Prices are kept secret after bidding"], c: 0, why: "Public works require prevailing wages and DIR registration, and bid results are public." },
    { q: "How are changes made on a commercial job?", a: ["A phone call with the superintendent", "A written, signed change order", "Adding it to the next invoice"], c: 1, why: "Without a signed change order, extra work is often never paid." },
    { q: "Why does landscape bidding carry extra price risk?", a: ["Plants are always on sale", "Landscape is installed near the end, often months after the bid", "Landscape contracts can't be changed"], c: 1, why: "Prices for plants, pipe and labor can rise between bid day and installation. Your bid should account for it." }
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
    { h: "Explain it back", hrs: 0.75, d: "<p>Write one page, or explain out loud to a coworker, how a commercial landscape bid works from invitation to payment. Use at least 10 words from the Words to know list. If you get stuck, that's the part to reread.</p>" }
  ]
},

{ h: "Module 1 summary",
  lead: "You now know how the commercial world is set up. Next, you'll make sure the company is legally and practically ready to bid.",
  body: `<ul>
<li>A bid is a promise. Scope, price and terms must all be clear.</li>
<li>On most commercial jobs you're a sub to a GC. On landscape-only public jobs you can be the prime.</li>
<li>Contracts flow down, bills flow up, money flows back down slowly, with retention held.</li>
<li>Private work runs on relationships and bid leveling. Public work runs on strict rules and the lowest responsive, responsible bid.</li>
<li>Complete, clear and on-time bids win more often than cheap, confusing ones.</li>
</ul>
<p><strong>Next: Module 2 · Your License, Your Company and Getting Bid-Ready.</strong></p>`
}
]
});
