(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 3, hours: 6, title: "Finding Work and Deciding What to Bid",
slides: [

{ t: "cover",
  h: "Finding Work and Deciding What to Bid",
  lead: "Bids don't come to a company nobody knows. This module shows where commercial landscape bids come from, how to get invited, and how to choose which ones are worth your time.",
  objectives: [
    "Name the places private and public landscape bids come from",
    "Get on general contractors' bid lists with emails and calls",
    "Set up bid platform and agency portal profiles",
    "Read a public bid notice and pull out what matters",
    "Decide go or no-go with a simple scorecard",
    "Understand cash flow and choose the right size of job",
    "Read a bid tab and learn from it"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "4.5 h"], ["Module total", "6 h"]],
  body: "<p>This module ends with real outreach: calls, emails and profiles. By the end, invitations should start arriving.</p>"
},

{ h: "Where commercial landscape bids come from",
  lead: "Work comes from two directions: GCs who invite you, and public agencies who advertise.",
  body: `<div class="twocol">
<div><h3>Private (through GCs)</h3><ul>
<li>Direct invitations from GC estimators you know</li>
<li>Bid platforms GCs use to invite subs (BuildingConnected, PlanHub)</li>
<li>Lead services that list upcoming projects (ConstructConnect, Dodge)</li>
<li>Referrals from suppliers, LAs and other subs</li>
<li>Repeat customers: developers, property managers, HOAs</li>
</ul></div>
<div><h3>Public (advertised)</h3><ul>
<li>City of San Diego, through PlanetBids</li>
<li>Other cities, the County, water districts and the Port</li>
<li>School and community college districts</li>
<li>State agencies (Cal eProcure) and Caltrans</li>
<li>A-license primes bidding public civil jobs, who need a landscape sub</li>
</ul></div>
</div>`,
  ex: `<p>One public City project can create several chances: you can bid it as prime if the license class allows, <em>and</em> send your landscape price to every A contractor on the planholders list if it doesn't.</p>`
},

{ h: "Getting on GC bid lists",
  lead: "Most private work goes to subs the GC already knows. Your job is to become one of them.",
  body: `<ol class="steps">
<li><div><b>Build a target list</b>20–40 commercial GCs that build in San Diego County: retail, multifamily, medical, schools, offices.</div></li>
<li><div><b>Find the right person</b>The chief estimator or preconstruction manager, not the front desk or the project manager.</div></li>
<li class="hl"><div><b>Send a short intro email</b>Who you are, what you do, the size you want, your capabilities statement attached.</div></li>
<li class="hl"><div><b>Call 3–5 days later</b>Ask to be added to their bid list for landscape and irrigation.</div></li>
<li><div><b>Complete their prequalification</b>Right away, while they remember you.</div></li>
<li><div><b>Log everything</b>Company, contact, date, response, next follow-up.</div></li>
<li><div><b>Bid what they send you</b>The first few invitations are a test. Respond to every one, even to decline.</div></li>
</ol>`,
  ex: `<p>Where to find GCs: the planholders and bidders lists on public jobs, ABC and AGC San Diego member directories, construction signs on job sites, project news in the San Diego Business Journal, and asking your irrigation supply house and nursery reps who's building.</p>`
},

{ h: "The intro email",
  lead: "Short, specific and easy to forward. The estimator should know in ten seconds what you do and how to invite you.",
  exLabel: "Email template (fill in the brackets)",
  ex: `<p><strong>Subject:</strong> Landscape &amp; irrigation sub, San Diego: request to join your bid list</p>
<p>Hi [Name],</p>
<p>I'm the estimator at [Company], a San Diego landscape and irrigation contractor (CSLB #[number], C-27, DIR #[number]). We install commercial planting and irrigation, water-efficient retrofits and plant establishment, typically $25,000–$500,000, anywhere in San Diego County.</p>
<p>We'd like to bid landscape and irrigation packages on your upcoming projects. Our capabilities statement is attached. Who should I send our prequalification to, and how do you send bid invites (BuildingConnected, email, other)?</p>
<p>Thanks,<br>[Your name] · [phone] · [email]</p>`,
  watch: `<p>Don't send a long history of the company or a price list. Don't send the same email to ten people at one company. Find the one estimator who sends landscape invitations.</p>`
},

{ h: "The follow-up call",
  lead: "Calls get results that emails don't. Keep it under two minutes.",
  exLabel: "Call script",
  ex: `<p><strong>You:</strong> “Hi, this is [Name] with [Company]. We're a landscape and irrigation contractor in San Diego. I emailed you on [day] about getting on your bid list. Do you have a minute?”</p>
<p><strong>If yes:</strong> “What kinds of projects do you have coming up with landscape? How do you send out bid invites? Do you have a prequalification form I can fill out today?”</p>
<p><strong>If they already have landscape subs:</strong> “Understood. We'd still like the chance to give you a competitive number on your next one. Can I be added as an extra bidder?”</p>
<p><strong>Close:</strong> “Thanks. I'll send the prequal back this week. Is it OK if I check in once a month on new projects?”</p>`,
  body: `<p>After the call, log it and set the next follow-up date. Most relationships take several contacts before the first invitation.</p>`
},

{ h: "Bid platforms",
  lead: "GCs send most private bid invitations through online platforms. A complete profile makes you show up in their searches.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Platform</th><th>What it is</th><th>Cost to subs</th></tr></thead>
<tbody>
<tr><td><strong>BuildingConnected</strong> (Autodesk)</td><td>The most common way large and mid-size GCs invite subs</td><td>Free to receive invites and bid</td></tr>
<tr><td><strong>PlanHub</strong></td><td>GC invites plus a project search</td><td>Free level; paid for more features</td></tr>
<tr><td><strong>ConstructConnect</strong></td><td>Project leads and plans from many sources</td><td>Paid subscription</td></tr>
<tr><td><strong>Dodge Construction Network</strong></td><td>Project leads and plans, early in design</td><td>Paid subscription</td></tr>
</tbody></table></div>
<p>Start with the free ones. Pay for a lead service only after you're ready to bid more than you're being invited to.</p>`,
  watch: `<p>Fill in your profile completely: every trade code for landscape and irrigation (for example CSI 32 80 00 Irrigation and 32 90 00 Planting), your service area, license, union or non-union, certifications. GCs filter by these. An empty profile never shows up.</p>`
},

{ h: "Public agency portals",
  lead: "Public bids are advertised openly. You have to register on each agency's portal to see documents and get notices.",
  body: `<ul>
<li><strong>City of San Diego:</strong> PlanetBids, reached from the City's “Doing CIP Business” page. Register as a vendor and pick the landscape and irrigation categories.</li>
<li><strong>Other agencies in the county:</strong> many cities, water districts and school districts also use PlanetBids, but <strong>each agency has its own PlanetBids portal and its own registration</strong>. Make a list and register on each one you'd work for.</li>
<li><strong>County of San Diego:</strong> its purchasing and contracting site lists construction bids.</li>
<li><strong>State:</strong> Cal eProcure. <strong>Caltrans:</strong> its contracts-out-for-bid listings.</li>
<li><strong>Federal (optional):</strong> SAM.gov, for military bases and federal property.</li>
</ul>`,
  ex: `<p>A good first list: City of San Diego, the County, and 5–8 nearby cities, water districts and school districts where your crews already work. Set notifications for landscape, irrigation, park, median, and water-efficiency projects.</p>`,
  deeper: `<p>On PlanetBids, downloading the documents usually puts you on the project's planholders list. That list is public to other bidders, so primes can find you, and you can find the primes to send your sub price to.</p>`
},

{ h: "Reading a public bid notice",
  lead: "The notice inviting bids tells you in one page whether to keep going. Learn to scan it in two minutes.",
  exLabel: "Practice example (made up for training, not a real project)",
  ex: `<div class="tablewrap"><table><tbody>
<tr><td><strong>Project</strong></td><td>Mira Mesa Blvd Median Irrigation &amp; Planting Retrofit</td></tr>
<tr><td><strong>Engineer's estimate</strong></td><td>$780,000</td></tr>
<tr><td><strong>License required</strong></td><td>Class A or C-27 at time of bid</td></tr>
<tr><td><strong>Bids due</strong></td><td>Thursday, 2:00 PM, electronic, through PlanetBids</td></tr>
<tr><td><strong>Pre-bid meeting</strong></td><td>Optional, 10:00 AM, two weeks before bid date</td></tr>
<tr><td><strong>Bid security</strong></td><td>10% bid bond</td></tr>
<tr><td><strong>SLBE/ELBE</strong></td><td>Mandatory participation goal (set in the bid documents)</td></tr>
<tr><td><strong>Wages</strong></td><td>Prevailing wage; DIR registration required</td></tr>
<tr><td><strong>Working days</strong></td><td>90 working days</td></tr>
<tr><td><strong>Liquidated damages</strong></td><td>$1,500 per day late</td></tr>
<tr><td><strong>Plant establishment</strong></td><td>120 days after acceptance of planting</td></tr>
<tr><td><strong>Questions due</strong></td><td>7 days before bid date, through PlanetBids Q&amp;A only</td></tr>
</tbody></table></div>`,
  body: `<p>In the example: the C-27 can be prime, the size is mid-range, it needs a bid bond, certified subs or self-performance count toward the goal, and the 120-day establishment period is real labor to price.</p>`
},

{ h: "Key terms in every notice",
  lead: "A few lines in a bid notice change your price and your risk.",
  body: `<ul>
<li><strong>Engineer's estimate:</strong> the agency's own guess at the cost. Good for sizing the job. Bids often land above or below it.</li>
<li><strong>Working days:</strong> how long you have to finish. Usually counts weekdays except holidays. Too short a schedule means more crews and overtime.</li>
<li><strong>Liquidated damages:</strong> a set dollar amount per day you're late, taken from your payment. At $1,500 a day, two weeks late costs $21,000.</li>
<li><strong>Mandatory pre-bid meeting:</strong> if it says mandatory and you miss it, you can't bid. No exceptions.</li>
<li><strong>Bid security:</strong> the bid bond, usually 10%.</li>
<li><strong>Bid opening:</strong> the time bids are opened and results read. Bids received one second late are rejected.</li>
</ul>`,
  watch: `<p>“Mandatory” means mandatory. Put mandatory meetings on the calendar the day you see the notice, and arrive early. Late arrivals often aren't signed in.</p>`
},

{ h: "Go or no-go: decide before you estimate",
  lead: "A full landscape estimate can take 10 to 40 hours. Spend that time on jobs you can win and want to win.",
  body: `<p><strong>Hard stops.</strong> Any of these means no-go, no matter what:</p>
<ul>
<li>License class not allowed as prime, and no primes you can sub to</li>
<li>Missed a mandatory pre-bid meeting</li>
<li>Can't get the required bond</li>
<li>Not registered with DIR on a public job (and can't register in time)</li>
<li>Not enough time left to do the estimate properly</li>
</ul>
<p>If none of those apply, score the job on the next slide.</p>`,
  ex: `<p>When you pass on a GC's invitation, tell them: “We're going to pass on this one because of [schedule/size], but please keep us on your list.” Silence can get you dropped from their list. A polite no keeps you on it.</p>`
},

{ t: "scorer", id: "gonogo", h: "Go / no-go scorecard",
  lead: "Score a real bid you're looking at. 2 = strong yes, 1 = so-so, 0 = no. Your choices are saved in this browser.",
  items: [
    ["Fits our scope", "Mostly irrigation and planting, work we do every day"],
    ["Right size", "Within our bonding, cash and crew capacity"],
    ["Schedule works", "Our crews are free when the job needs them"],
    ["Location", "Within our normal service area"],
    ["Good customer", "GC or agency pays on time and treats subs fairly"],
    ["Competition", "Few bidders, or we have an edge (relationship, SLBE/ELBE)"],
    ["Clear documents", "Plans and specs are complete; few unknowns"],
    ["Manageable risk", "Establishment period, liquidated damages and wage rules are clear"],
    ["Profit potential", "We can price it competitively and still make our margin"],
    ["Strategic value", "Builds a relationship, a project type or a reference we want"]
  ],
  bands: [
    [15, "Go", "Strong fit. Start the estimate."],
    [11, "Think it over", "Talk through the weak scores with the owner before estimating."],
    [0, "Pass", "Politely decline and ask to stay on the bid list."]
  ]
},

{ h: "Choose the right size of job",
  lead: "Start with jobs big enough to learn on and small enough to survive a mistake.",
  body: `<ul>
<li>A good first range for many landscape contractors is about <strong>$25,000 to $250,000</strong> of landscape scope. Adjust it to your company's largest past jobs, crew size and bonding.</li>
<li>Jobs too small for big landscape firms are where newcomers win first: small medians, irrigation retrofits, small retail pads, HOA renovations.</li>
<li>Grow the size step by step as you complete jobs and your bonding grows.</li>
</ul>`,
  watch: `<p>A job twice as big as anything you've built isn't just twice the work. It's bigger crews, more supervision, more cash tied up, and a bigger loss if the estimate is wrong.</p>`
},

{ h: "Cash flow: the math nobody shows you",
  lead: "You pay for labor and materials now, but get paid much later, minus retention. Here's a simple example.",
  body: `<p><strong>Example:</strong> a $150,000 landscape subcontract over three months. Your costs are $120,000 ($40,000 a month). You bill $50,000 at the end of each month. The GC pays about 45 days later and holds 5% retention.</p>
<div class="tablewrap"><table>
<thead><tr><th>Month</th><th class="num">You spend</th><th class="num">You receive</th><th class="num">Cash position</th></tr></thead>
<tbody>
<tr><td>1</td><td class="num">−$40,000</td><td class="num">$0</td><td class="num">−$40,000</td></tr>
<tr><td>2</td><td class="num">−$40,000</td><td class="num">$0</td><td class="num">−$80,000</td></tr>
<tr><td>3</td><td class="num">−$40,000</td><td class="num">+$47,500</td><td class="num">−$72,500</td></tr>
<tr><td>4</td><td class="num">$0</td><td class="num">+$47,500</td><td class="num">−$25,000</td></tr>
<tr><td>5</td><td class="num">$0</td><td class="num">+$47,500</td><td class="num">+$22,500</td></tr>
<tr><td>Later</td><td class="num">$0</td><td class="num">+$7,500 retention</td><td class="num">+$30,000</td></tr>
</tbody></table></div>
<p>The job makes $30,000. But the company needs about <strong>$80,000 of cash</strong> before the first payment arrives, and it doesn't see its profit until month 5 or later.</p>`,
  watch: `<p>Several jobs at once multiply this. Know how much cash or credit line the company has before you bid, and size jobs to fit. Supplier credit terms (net 30) help; ask your suppliers for them.</p>`
},

{ h: "Choosing your GCs",
  lead: "Not every GC is a good customer. Pick the ones worth building a relationship with.",
  body: `<div class="twocol">
<div><h3>Good signs</h3><ul>
<li>Builds the project types you want, regularly</li>
<li>Pays subs on time (ask other subs and suppliers)</li>
<li>Gives feedback after bid day</li>
<li>Has repeat owners and steady work</li>
<li>Fair subcontract terms</li>
</ul></div>
<div><h3>Warning signs</h3><ul>
<li>Reputation for slow pay or back-charges</li>
<li>Mechanics liens or lawsuits from subs</li>
<li>Uses sub bids only to “check” a favorite sub's price</li>
<li>Never shares results</li>
<li>One-sided subcontract (unlimited liability, pay-if-paid)</li>
</ul></div>
</div>`,
  ex: `<p>Your irrigation supply house rep sees who pays and who doesn't. Ask: “Which GCs do your contractor customers like working for?”</p>`
},

{ h: "Track every bid",
  lead: "If you don't write it down, you can't learn from it. Log every invitation and every bid.",
  body: `<p>For each bid, record:</p>
<ul>
<li>Bid number, project, GC or agency, contact</li>
<li>Due date and time, job walk, question deadline</li>
<li>Go/no-go decision and score</li>
<li>Your price, and the low or winning price when you learn it</li>
<li>How far over or under the low bid you were, as a percent</li>
<li>Result (won, lost, pending, no bid) and the reason</li>
<li>Follow-up date and notes</li>
</ul>
<p>Your company already has a tracker for this: <a href="https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP" target="_blank" rel="noopener">Commercial Bid Tracker</a>.</p>`,
  deeper: `<p>After 15–20 bids, patterns appear: which GCs you win with, which project types you're always too high on, and how far off you usually are. Those patterns guide your pricing (Module 10) and your bid review meetings.</p>`
},

{ h: "Bid tabs: free education",
  lead: "After a public bid opens, the agency posts every bidder's price. Studying them teaches you the market before you ever bid.",
  exLabel: "Practice bid tab (made up for training)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Rank</th><th>Bidder</th><th class="num">Total bid</th><th class="num">vs. low</th></tr></thead>
<tbody>
<tr><td>1</td><td>Landscape Co. A</td><td class="num">$356,880</td><td class="num">—</td></tr>
<tr><td>2</td><td>Landscape Co. B</td><td class="num">$371,250</td><td class="num">+4.0%</td></tr>
<tr><td>3</td><td>Engineering Contractor C</td><td class="num">$389,400</td><td class="num">+9.1%</td></tr>
<tr><td>4</td><td>Landscape Co. D</td><td class="num">$402,115</td><td class="num">+12.7%</td></tr>
<tr><td>5</td><td>Landscape Co. E</td><td class="num">$445,700</td><td class="num">+24.9%</td></tr>
<tr><td>6</td><td>Engineering Contractor F</td><td class="num">$497,300</td><td class="num">+39.3%</td></tr>
<tr><td></td><td>Engineer's estimate</td><td class="num">$412,000</td><td class="num">+15.4%</td></tr>
</tbody></table></div>`,
  body: `<p><strong>What this tells you:</strong></p>
<ul>
<li>The low bid came in about 13% under the engineer's estimate. That's the market's price, not the estimate.</li>
<li>The top four were within about 13% of each other: that's the competitive range.</li>
<li>Landscape specialists took 1st and 2nd. On landscape-heavy jobs they often beat general engineering firms.</li>
<li>Many public bids have line items. Comparing unit prices (per tree, per valve, per foot of pipe) teaches you the most.</li>
</ul>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Bid list", "A GC's list of subs it invites to bid."],
    ["Chief estimator / precon manager", "The person at a GC who runs bidding and sends sub invitations."],
    ["Bid platform", "Website GCs use to invite subs and collect bids."],
    ["Lead service", "Paid service listing upcoming projects and plans."],
    ["PlanetBids", "Bidding portal used by the City of San Diego and many local agencies."],
    ["Planholders list", "Public list of companies that downloaded a project's documents."],
    ["Notice inviting bids", "The public announcement of a bid, with key dates and requirements."],
    ["Engineer's estimate", "The agency's own estimate of the project cost."],
    ["Working days", "The time allowed to finish, usually counting weekdays."],
    ["Liquidated damages", "A set dollar amount per day you finish late."],
    ["Mandatory pre-bid", "A meeting you must attend to be allowed to bid."],
    ["Go / no-go", "The decision whether to spend time estimating a bid."],
    ["Cash flow", "When money actually goes out and comes in."],
    ["Net 30", "Supplier terms: pay within 30 days of the invoice."],
    ["Bid tab", "The posted list of every bidder's price."],
    ["Unit price", "The price for one unit: per tree, per valve, per foot."]
  ]
},

{ t: "quiz", id: "m3", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "Who at a GC should get your intro email?", a: ["The receptionist", "The chief estimator or preconstruction manager", "The superintendent on a job site"], c: 1, why: "Estimators run bidding and decide who gets invited." },
    { q: "You registered on the City of San Diego's PlanetBids. Are you registered with every agency on PlanetBids?", a: ["Yes, it's one account for all", "No, each agency has its own portal and registration", "Only for county agencies"], c: 1, why: "Each agency runs its own PlanetBids portal. Register on each one you want to bid." },
    { q: "A notice says the pre-bid meeting is mandatory. You can't make it. What happens?", a: ["You can still bid if you call them", "You can't bid that project", "You get a small penalty"], c: 1, why: "Missing a mandatory pre-bid meeting makes you ineligible to bid." },
    { q: "Liquidated damages are $1,500 per day. You finish 10 working days late. What could it cost?", a: ["$1,500", "$15,000", "Nothing if the plants look good"], c: 1, why: "10 days × $1,500 = $15,000, usually taken from your payments." },
    { q: "You decide not to bid a GC's invitation. What should you do?", a: ["Ignore it", "Reply that you're passing this time and want to stay on their list", "Send a very high number"], c: 1, why: "A polite decline keeps you on the list. Silence can get you dropped." },
    { q: "In the cash flow example, about how much cash did the company need before its first payment?", a: ["$30,000", "$80,000", "$150,000"], c: 1, why: "Two full months of costs went out before the first payment came in." },
    { q: "The low bid on a public job came in 13% under the engineer's estimate. What does that tell you?", a: ["The estimate is the real market price", "The market price was below the agency's estimate", "The low bidder will lose money for sure"], c: 1, why: "Bid tabs show what contractors actually bid. That's the price you compete against." },
    { q: "When is paying for a lead service (like ConstructConnect) worth it?", a: ["Before you've bid anything", "When you're ready to bid more than you're being invited to", "Never"], c: 1, why: "Start with free platforms and relationships. Pay for leads when you have the capacity to use them." }
  ]
},

{ t: "practice", id: "m3", h: "Practice assignments",
  lead: "By the end of these, the company should be visible to GCs and agencies, and invitations should start coming in.",
  items: [
    { h: "Register on public portals", hrs: 0.75, d: "<p>Register (or make the list to register, once the bidding entity is settled) on the City of San Diego's PlanetBids and at least 5 other local agencies. Choose landscape, irrigation and park categories. Save logins in a safe place.</p>" },
    { h: "Build your bid platform profiles", hrs: 0.5, d: "<p>Create complete profiles on BuildingConnected and PlanHub: trade codes, service area, license, DIR, certifications, capabilities statement.</p>" },
    { h: "Build a target list of 20 GCs", hrs: 1, d: "<p>Use planholders lists from recent public jobs, AGC and ABC San Diego member lists, and your supplier reps. For each: company, estimator name, email, phone, project types. Put them in a spreadsheet with columns for each contact date.</p>" },
    { h: "Send 5 intro emails and make 5 calls", hrs: 1, d: "<p>Use the email template and call script. Log every contact. Set follow-up dates. Note what each GC told you about their projects and bid process.</p>" },
    { h: "Score 3 open bids", hrs: 0.5, d: "<p>Find 3 open landscape or irrigation bids (public or private). For each, pull the notice details and run the go/no-go scorecard. Bring the scores to the owner and discuss.</p>" },
    { h: "Study 3 bid tabs", hrs: 0.75, d: "<p>Download results for 3 closed City or agency landscape projects. Record: engineer's estimate, number of bidders, low bid, spread between bids, and who won. If line items are posted, note the unit prices for trees, shrubs, valves and irrigation pipe. Save this; you'll use it in Module 15.</p>" }
  ]
},

{ h: "Module 3 summary",
  lead: "You know where bids come from, how to get invited, and how to choose. Next, you'll learn to read the plans.",
  body: `<ul>
<li>Private bids come through GCs; get on their lists with short emails, calls and fast prequalification.</li>
<li>Public bids are advertised; register on each agency's portal.</li>
<li>Read every notice for license class, mandatory meetings, bonds, schedule and liquidated damages.</li>
<li>Decide go or no-go before you spend hours estimating.</li>
<li>Size jobs to your cash, crews and bonding. Profit on paper isn't cash in the bank.</li>
<li>Track every bid and study bid tabs to learn the market.</li>
</ul>
<p><strong>Next: Module 4 · Reading Landscape and Irrigation Plans</strong> (coming next).</p>`
}
]
});
