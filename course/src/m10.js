(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 10, hours: 8, title: "Overhead, Markup and Your Final Number",
slides: [

{ t: "cover",
  h: "Overhead, Markup and Your Final Number",
  lead: "Modules 6 to 9 gave you the cost of the work. This module turns that cost into a price: one that pays for the office, the trucks and the people who never touch a shovel, and still leaves a profit.",
  objectives: [
    "Separate direct costs, job overhead and company overhead, and read a profit and loss statement",
    "Calculate your overhead rate from last year's numbers, spread it fairly, and know your break-even volume",
    "Convert between markup and margin without the common mistake",
    "Set profit by job type and risk with a decision matrix, and hold a minimum margin",
    "Price bonds, insurance, escalation, contingency and alternates without double counting",
    "Build three full bids: small private, mid-size public and a Caltrans-style unit price bid with time-related overhead and mobilization",
    "Test a price with what-if changes and a cash flow check",
    "Review a final number with a recap sheet, a checklist, benchmarks and your bid history"
  ],
  time: [["Reading and slides", "3.5 h"], ["Practice assignments", "4.5 h"], ["Module total", "8 h"]],
  body: `<p>Every dollar figure in this module is an example for practice unless it says it comes from a real bid. Use your own company's numbers on real bids.</p>`
},

{ h: "From cost to price: the price stack",
  lead: "A bid price is built in layers. Each layer pays for something different, and skipping one means you pay for it out of your own pocket.",
  body: `<ol class="steps">
<li><div><b>Direct work cost</b>Materials, labor, equipment and subcontractors for the work you install (Modules 6–9).</div></li>
<li><div><b>Job overhead</b>Costs this job causes that aren't part of any one item: supervision, trucks, temporary facilities, submittals.</div></li>
<li><div><b>Allowances</b>Escalation and contingency, only where there's a real reason.</div></li>
<li class="hl"><div><b>Company overhead</b>This job's share of the office, the estimator, accounting and the yard.</div></li>
<li class="hl"><div><b>Profit</b>What the company earns for the work and the risk.</div></li>
<li><div><b>Bond and insurance charged on the price</b>Costs that grow with the size of the contract.</div></li>
<li><div><b>Round, review, recap</b>Check the math, compare to benchmarks, and sign off.</div></li>
</ol>`,
  watch: `<p>Most new estimators price the work well and then add one flat percent at the end “for overhead and profit.” That one number hides whether you're covering your overhead at all. Keep the layers separate on your recap so you can see each one.</p>`
},

{ h: "Your final number, step by step",
  lead: "Follow the same steps on every bid, from the last cost line to the signed number. Each step has a home on the recap sheet.",
  body: `<ol class="steps">
<li><div><b>1 · Total the direct cost by scope</b>Irrigation, soil prep, planting, mulch, establishment. Material, labor, equipment, subs.</div></li>
<li><div><b>2 · List job overhead</b>Every line, even when it's zero.</div></li>
<li><div><b>3 · Add allowances with written reasons</b>Escalation, contingency.</div></li>
<li class="hl"><div><b>4 · Apply company overhead %</b>Your forward-looking rate.</div></li>
<li><div><b>5 · Score the risk and pick profit %</b>Use the markup policy and the decision matrix.</div></li>
<li><div><b>6 · Add insurance and bond</b>At your agent's and surety's rates, only where required.</div></li>
<li><div><b>7 · Calculate the walk-away price</b>Cost + overhead + minimum profit + insurance and bond.</div></li>
<li><div><b>8 · Spread into bid items</b>For unit price bids, put the markup into each item (factor method), or into TRO (time-related overhead) and mobilization on Caltrans jobs.</div></li>
<li><div><b>9 · Price alternates and unit price extras</b>Same markups.</div></li>
<li class="hl"><div><b>10 · Review</b>Math, benchmarks, market, gut. Run the final review checklist.</div></li>
<li><div><b>11 · Owner sign-off</b>Recap signed and dated.</div></li>
<li><div><b>12 · After the bid</b>Log the result and learn from it.</div></li>
</ol>`
},

{ h: "Direct cost vs. indirect cost",
  lead: "A direct cost goes into the ground or onto a specific bid item. An indirect cost keeps the job or the company running.",
  body: `<div class="twocol">
<div><h3>Direct costs</h3><ul>
<li>Pipe, heads, valves, wire, controllers</li>
<li>Trees, shrubs, groundcover, mulch, soil amendments</li>
<li>Crew labor installing the work, with burden</li>
<li>Trencher, mini excavator, skid steer time on the work</li>
<li>Subs: boring, hydroseed, traffic control, electrical</li>
<li>Sales tax and delivery on materials</li>
</ul></div>
<div><h3>Indirect costs</h3><ul>
<li><strong>Job overhead:</strong> belongs to one job, but not to one item (foreman's non-working time, job trucks, storage container)</li>
<li><strong>Company overhead:</strong> belongs to the business, shared by all jobs (office rent, estimator, bookkeeper, yard)</li>
</ul></div>
</div>`,
  ex: `<p>A foreman who spends 6 hours a day installing valves and 2 hours on paperwork and meetings: the 6 hours are direct labor on the valve items. The 2 hours are job overhead.</p>`,
  deeper: `<p>The line between them is your company's choice, as long as you're consistent. If job trucks are in your crew day cost (Module 9), don't add them again as job overhead. Write down your rule once and follow it on every bid.</p>`
},

{ h: "Job overhead",
  lead: "Job overhead is every cost this job creates that isn't already in a unit price. List it on every bid, even when a line is zero.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>What to include</th><th>How to price it</th></tr></thead>
<tbody>
<tr><td>Supervision</td><td>Superintendent or foreman time not spent installing; PM (project manager) time</td><td>Hours per week × weeks × rate</td></tr>
<tr><td>Trucks and trailers</td><td>Pickups, flatbeds, water truck days not in crew cost</td><td>Days on job × daily rate</td></tr>
<tr><td>Temporary facilities</td><td>Storage container, portable toilet, temporary fence, water for establishment</td><td>Months × rental, plus delivery and pickup</td></tr>
<tr><td>Bonds</td><td>Performance and payment bond if required</td><td>Your surety's rate × contract amount (later slide)</td></tr>
<tr><td>Insurance</td><td>General liability and umbrella charged per job, extra endorsements</td><td>Your agent's rating basis (later slide)</td></tr>
<tr><td>Permits and fees</td><td>Only if the contract makes them yours: encroachment, meter, inspection</td><td>Look up the actual fee schedule</td></tr>
<tr><td>Paperwork</td><td>Submittals, as-builts, O&amp;M (operation and maintenance) manuals, certified payroll, safety plan</td><td>Office hours × rate</td></tr>
<tr><td>Cleanup and disposal</td><td>Dump fees, green waste, final cleanup</td><td>Loads × cost per load</td></tr>
</tbody></table></div>`,
  watch: `<p>On a GC's (general contractor's) job, the GC often provides toilets, fencing and dumpsters. Read the GC's scope sheet. Don't price what they provide, and don't assume they provide what they don't. Demolition, grading, drainage and hardscape that GCs sometimes hand to landscape subs are separate scopes; see <a href="#m17-1">Module 17</a>.</p>`
},

{ h: "Company overhead",
  lead: "Company overhead (also called general overhead) is what it costs to keep the doors open, whether you win a job or not.",
  body: `<ul>
<li>Office rent, utilities, phones, internet, software and computers</li>
<li>Salaries that aren't charged to jobs: owner's office time, estimator, bookkeeper, office manager</li>
<li>Accounting, legal, licensing and professional fees</li>
<li>The yard and shop: rent, small tools, maintenance not charged to jobs</li>
<li>Vehicles for the office and estimator</li>
<li>Insurance and taxes that aren't charged per job</li>
<li>Marketing, plan rooms, bid platform fees, association dues</li>
<li>Bids you lose: every hour spent on a bid you don't win is overhead</li>
</ul>`,
  ex: `<p>Starting a commercial division adds overhead before it adds revenue: an estimator's salary, takeoff software, plan printing, DIR (Department of Industrial Relations) registration and new insurance endorsements. Put those into next year's overhead budget so the first commercial bids carry their share.</p>`
},

{ h: "Reading a P&L (profit and loss statement)",
  lead: "The P&L, also called the income statement, shows a year of money in and money out. Your overhead rate starts here, so learn to read its three parts.",
  exLabel: "Example P&L (made-up numbers for practice; matches the next slide)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">Amount</th><th>What it means</th></tr></thead>
<tbody>
<tr><td><strong>Revenue</strong> (sales, contract income)</td><td class="num"><strong>$2,400,000</strong></td><td>Everything billed for work done</td></tr>
<tr><td>Materials</td><td class="num">$690,000</td><td rowspan="5">Cost of revenue (also called cost of goods sold, COGS, or job costs): the money spent doing the jobs</td></tr>
<tr><td>Field labor and burden</td><td class="num">$780,000</td></tr>
<tr><td>Subcontractors</td><td class="num">$140,000</td></tr>
<tr><td>Equipment and trucks</td><td class="num">$130,000</td></tr>
<tr><td>Job overhead (supervision, dump fees)</td><td class="num">$60,000</td></tr>
<tr><td><strong>Total cost of revenue</strong></td><td class="num"><strong>$1,800,000</strong></td><td></td></tr>
<tr><td><strong>Gross profit</strong> ($2,400,000 − $1,800,000)</td><td class="num"><strong>$600,000</strong></td><td>25.0% of revenue; what's left to pay overhead and profit</td></tr>
<tr><td>Operating expenses (company overhead)</td><td class="num">$350,000</td><td>Office, staff, yard, insurance, software, and so on</td></tr>
<tr><td><strong>Net income before tax</strong></td><td class="num"><strong>$250,000</strong></td><td>10.4% of revenue</td></tr>
</tbody></table></div>`,
  body: `<p>Ask the owner or CPA (certified public accountant) for last year's P&L and this year's to date. If the P&L lumps everything together, ask the CPA to split it into job costs and overhead. You can't price overhead you can't see.</p>`,
  watch: `<p>A P&L shows what happened, not what will happen. Use it to set a forward-looking budget, as the next slide shows.</p>`
},

{ h: "Your overhead rate, from last year's numbers",
  lead: "Divide last year's company overhead by last year's direct job costs. That percentage is what every dollar of job cost must carry.",
  exLabel: "Worked example (made-up numbers for practice, use your company's)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Last year's company overhead</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Office rent and utilities</td><td class="num">$36,000</td></tr>
<tr><td>Office staff and bookkeeping</td><td class="num">$90,000</td></tr>
<tr><td>Owner and estimator time not charged to jobs</td><td class="num">$110,000</td></tr>
<tr><td>Yard and shop</td><td class="num">$30,000</td></tr>
<tr><td>Office vehicles</td><td class="num">$18,000</td></tr>
<tr><td>Insurance not charged to jobs</td><td class="num">$24,000</td></tr>
<tr><td>Software, phones, IT (information technology)</td><td class="num">$12,000</td></tr>
<tr><td>Licenses, accounting, legal</td><td class="num">$10,000</td></tr>
<tr><td>Marketing and bid services</td><td class="num">$6,000</td></tr>
<tr><td>Everything else</td><td class="num">$14,000</td></tr>
<tr><td><strong>Total company overhead</strong></td><td class="num"><strong>$350,000</strong></td></tr>
</tbody></table></div>
<p>Revenue was $2,400,000. Direct job costs (including job overhead) were $1,800,000.</p>
<p><strong>Overhead rate on cost</strong> = $350,000 ÷ $1,800,000 = <strong>19.4%</strong><br>
Overhead as a share of revenue = $350,000 ÷ $2,400,000 = 14.6%<br>
Profit = $2,400,000 − $1,800,000 − $350,000 = $250,000 (10.4% of revenue)</p>`,
  body: `<p><strong>Look forward, too.</strong> Next year the company adds a commercial estimator and software. Budget: $420,000 of overhead on an expected $2,100,000 of direct cost = <strong>20.0%</strong>. Use the higher, forward-looking rate.</p>`,
  deeper: `<p>Get the numbers from the profit and loss statement and ask the CPA to help sort accounts into “job cost” and “overhead.” A daily overhead figure is also useful: $420,000 ÷ about 250 working days ≈ $1,680 per working day for the whole company. You'll use that for Caltrans time-related overhead later in this module.</p>`
},

{ h: "Worked example · Where costs sit changes the rate",
  lead: "The same company can show a 19% or a 29% overhead rate, depending on where truck and equipment costs sit. Either is fine if your estimates match it.",
  exLabel: "Practice example: same P&L, two ways of filing $130,000 of equipment and truck costs",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">A: in job cost</th><th class="num">B: in overhead</th></tr></thead>
<tbody>
<tr><td>Direct job cost</td><td class="num">$1,800,000</td><td class="num">$1,800,000 − $130,000 = $1,670,000</td></tr>
<tr><td>Company overhead</td><td class="num">$350,000</td><td class="num">$350,000 + $130,000 = $480,000</td></tr>
<tr><td><strong>Overhead rate on cost</strong></td><td class="num"><strong>19.4%</strong></td><td class="num"><strong>$480,000 ÷ $1,670,000 = 28.7%</strong></td></tr>
</tbody></table></div>`,
  body: `<ul>
<li><strong>Use A</strong> if your estimates price trucks and equipment on every job (Module 9 crew-day with truck, equipment lines).</li>
<li><strong>Use B</strong> if your estimates don't price trucks and equipment job by job.</li>
<li><strong>The trap:</strong> using 19.4% while leaving trucks out of your estimates. On $1,670,000 of cost, 9.3 points short (28.7% − 19.4%) means your bids recover about <strong>$155,000</strong> a year less overhead than the company really spends.</li>
</ul>`,
  watch: `<p>Write your company's rule at the top of the recap template: “Trucks and equipment are priced in the job (A).” Then check that every estimate follows it.</p>`
},

{ h: "Worked example · Two ways to spread overhead",
  lead: "Most estimators add overhead as a percent of cost. Some charge it per labor hour. The choice moves money between material-heavy and labor-heavy jobs.",
  exLabel: "Practice example: $420,000 overhead budget; 30,000 field labor hours expected next year",
  ex: `<p><strong>Method 1 · Percent of cost:</strong> $420,000 ÷ $2,100,000 = 20% of direct cost.<br>
<strong>Method 2 · Per labor hour (LH):</strong> $420,000 ÷ 30,000 LH = $14.00 per LH.</p>
<div class="tablewrap"><table>
<thead><tr><th>Job (both $60,000 direct cost)</th><th class="num">Labor hours</th><th class="num">Method 1: 20%</th><th class="num">Method 2: $14 per LH</th></tr></thead>
<tbody>
<tr><td>Job X: material-heavy (box trees, controller, backflow)</td><td class="num">700</td><td class="num">$12,000</td><td class="num">700 × $14 = $9,800</td></tr>
<tr><td>Job Y: labor-heavy (hand trenching, many 1-gallons)</td><td class="num">1,100</td><td class="num">$12,000</td><td class="num">1,100 × $14 = $15,400</td></tr>
</tbody></table></div>`,
  body: `<p>Overhead mostly goes to running crews: supervision, yard, trucks, payroll. So the per-LH method charges labor-heavy jobs more and material-heavy jobs less. Some companies use a mix: a small percent on material and subs, plus a rate per LH.</p>`,
  watch: `<p>Pick one method with the owner, write it down and use it on every bid. Switching methods between bids makes your bid history useless.</p>`
},

{ h: "Break-even volume",
  lead: "Overhead is paid only by work you win. Know how much work the company must win just to cover it.",
  exLabel: "Practice example using the forward budget",
  ex: `<ul>
<li>Overhead budget: <strong>$420,000</strong>. Overhead markup: 20% on cost.</li>
<li>Each $1.00 of job cost you win brings in $0.20 toward overhead.</li>
<li>Job cost needed to cover overhead: $420,000 ÷ 0.20 = <strong>$2,100,000</strong>. With overhead added, that's $2,520,000 of sales before any profit.</li>
<li><strong>If you only win $1,800,000 of job cost:</strong> overhead recovered = $1,800,000 × 0.20 = $360,000. Short by <strong>$60,000</strong>.</li>
<li>Profit at 10% on $1,800,000 × 1.20 = $216,000 on paper. Real profit after the shortfall: $216,000 − $60,000 = <strong>$156,000</strong>.</li>
</ul>`,
  body: `<p>This is why a new division's first year matters. Every bid you lose still costs estimator time. Track volume won against the break-even every month.</p>`,
  watch: `<p>If you see the year coming in short, don't quietly raise the overhead percent on the next few bids. That makes you less competitive when you most need wins. Cut overhead spending or chase more of the right work.</p>`
},

{ h: "Markup vs. margin",
  lead: "Markup is a percent of your cost. Margin is a percent of your price. They are different numbers for the same dollars.",
  body: `<ul>
<li><strong>Markup</strong> = (price − cost) ÷ <strong>cost</strong></li>
<li><strong>Margin</strong> = (price − cost) ÷ <strong>price</strong></li>
<li>Markup to margin: <strong>margin = markup ÷ (1 + markup)</strong></li>
<li>Margin to markup: <strong>markup = margin ÷ (1 − margin)</strong></li>
<li>To hit a target margin: <strong>price = cost ÷ (1 − margin)</strong></li>
</ul>
<p><strong>Example:</strong> cost $100,000, price $120,000. Profit $20,000. Markup = $20,000 ÷ $100,000 = 20%. Margin = $20,000 ÷ $120,000 = 16.7%.</p>
<div class="tablewrap"><table>
<thead><tr><th class="num">Markup on cost</th><th class="num">Equals margin on price</th></tr></thead>
<tbody>
<tr><td class="num">10%</td><td class="num">9.1%</td></tr>
<tr><td class="num">15%</td><td class="num">13.0%</td></tr>
<tr><td class="num">20%</td><td class="num">16.7%</td></tr>
<tr><td class="num">25%</td><td class="num">20.0%</td></tr>
<tr><td class="num">30%</td><td class="num">23.1%</td></tr>
<tr><td class="num">35%</td><td class="num">25.9%</td></tr>
<tr><td class="num">40%</td><td class="num">28.6%</td></tr>
</tbody></table></div>`,
  watch: `<p><strong>The common mistake:</strong> the owner says “we need a 20% margin,” and the estimator multiplies cost by 1.20. That's a 20% markup, which is only a 16.7% margin. On $100,000 of cost, the right price for a 20% margin is $100,000 ÷ 0.80 = <strong>$125,000</strong>, not $120,000. That $5,000 gap repeats on every job.</p>`,
  deeper: `<p>Accountants and financial statements use margin (profit as a percent of revenue). Estimators usually build prices with markup. Agree with the owner on which word you're using, and write it at the top of your recap sheet.</p>`
},

{ h: "Setting profit: job type, risk and how badly you want it",
  lead: "Profit isn't one fixed number. It moves with the risk you're taking and how much the job is worth to the company.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Push profit up when…</th><th>Push profit down when…</th></tr></thead>
<tbody>
<tr><td>Small job: fixed costs are a bigger share</td><td>Large, simple, repetitive scope</td></tr>
<tr><td>Long plant establishment or maintenance period</td><td>Short schedule, clean handoff</td></tr>
<tr><td>Unclear plans, many unknowns, RFIs (requests for information) not answered</td><td>Complete plans, quantities given</td></tr>
<tr><td>New GC or agency, slow-pay reputation, heavy LDs (liquidated damages: a set dollar charge per day you finish late)</td><td>Repeat GC who pays on time</td></tr>
<tr><td>Crews are already busy</td><td>Crews will be idle without it</td></tr>
<tr><td>Few qualified bidders</td><td>Many bidders, tight bid history</td></tr>
</tbody></table></div>`,
  exLabel: "Example markup policy (made up; set yours with the owner)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Job type</th><th class="num">Profit on cost + overhead</th></tr></thead>
<tbody>
<tr><td>Private, GC sub, under $50,000</td><td class="num">12–15%</td></tr>
<tr><td>Private, GC sub, $50,000–$500,000</td><td class="num">8–12%</td></tr>
<tr><td>Public, as sub to a prime</td><td class="num">8–10%</td></tr>
<tr><td>Public, as prime (bonds, paperwork, LDs)</td><td class="num">10–15%</td></tr>
<tr><td>Strategic job you badly want</td><td class="num">Down to the minimum (later slide)</td></tr>
</tbody></table></div>`,
  watch: `<p>“How badly we want it” is a real reason to cut profit, but only profit. Never cut overhead or cost to win. If the numbers only work by assuming crews will go faster than they ever have, the job will lose money.</p>`
},

{ t: "scorer", id: "markuprisk", h: "Markup decision matrix",
  lead: "Score the job you're pricing. 2 = yes, 1 = partly, 0 = no. A high score means low risk, so profit can sit at the low end of your policy range. Saved in this browser.",
  items: [
    ["Plans and specs are complete", "Few “verify in field” notes; details and legends clear"],
    ["Quantities checked and solid", "Your takeoff matches the bid form or the GC's numbers"],
    ["Customer pays on time", "Known GC or agency with a good payment record"],
    ["Short schedule, short establishment", "No long plant establishment or maintenance period"],
    ["Low penalties", "No or low liquidated damages; reasonable warranty terms"],
    ["Normal site", "Daytime, open access, no freeway closures or night work"],
    ["Repeat relationship", "We've worked for this customer and want to keep them"],
    ["Strong competition expected", "Many qualified bidders; tight bid history on similar jobs"],
    ["We need the work", "Crews would be idle in that period without it"],
    ["Well within our size", "A mistake on this job wouldn't hurt the company badly"]
  ],
  bands: [
    [15, "Low end of your range", "Low risk and strong competition. Price profit at the low end of the policy range for this job type."],
    [9, "Middle of your range", "Normal risk. Use the middle of the policy range, and handle named risks with contingency."],
    [0, "Top of range, or pass", "High risk. Price profit at the top of the range, add clarifications, or go back to go/no-go (Module 3)."]
  ],
  body: `<p>The matrix doesn't replace judgment. It makes you look at every risk before you pick a number, and it gives the owner a reason for the profit you chose. Write the score on the recap sheet.</p>`
},

{ h: "The minimum margin rule",
  lead: "Decide your walk-away number before bid day, when you're calm. Below it, you don't bid, no matter who asks.",
  body: `<ol class="steps">
<li><div><b>Floor 1: cover all costs</b>Direct cost + job overhead + allowances. Below this you lose money on the job itself.</div></li>
<li class="hl"><div><b>Floor 2: cover overhead</b>Add your full company overhead rate. Below this the job helps no one; it just keeps crews busy.</div></li>
<li><div><b>Floor 3: minimum profit</b>Add the owner's minimum profit (for example 5% on cost). This is the walk-away price.</div></li>
</ol>
<p>Put the walk-away price on the recap sheet in a separate box. If a GC asks you to “sharpen your pencil,” you know how far you can go.</p>`,
  ex: `<p>Using the worked example later in this module: cost $153,672 → plus 20% overhead = $184,406 → plus 5% minimum profit = $193,627, plus insurance and bond ≈ $200,300. That's the walk-away number. The bid price was $209,800, so there's about $9,500 of room, and no more.</p>`,
  watch: `<p>Busy seasons tempt you to bid high; slow seasons tempt you to bid at cost. A bid at cost still loses the overhead it was supposed to carry. A few of those in a row can sink a year.</p>`
},

{ h: "Bond premium and insurance, per job",
  lead: "Bonds and some insurance are charged on the size of the contract. Calculate them on each bid; don't bury them in overhead.",
  body: `<div class="twocol">
<div><h3>Bond premium</h3><ul>
<li>Performance and payment bonds are priced as a percent of the contract amount.</li>
<li>Your surety sets your rate. It often steps down as the contract gets bigger, and depends on your company's finances and history.</li>
<li>Private GCs often don't require sub bonds. Show the bond cost as a separate add in your proposal (Module 13) unless the bid documents require it.</li>
<li>Public prime bids: the bond is required, so it goes into the price. Caltrans's specs treat bond cost as part of mobilization when the job has a mobilization item (see “deeper”).</li>
</ul></div>
<div><h3>Insurance</h3><ul>
<li>Workers' comp is in your labor burden (Module 9). Don't add it twice.</li>
<li>GL (general liability) is often rated on payroll or sales. Ask your agent which, and the rate.</li>
<li>Extra costs per job: higher limits, umbrella, additional insured endorsements, wrap-up credits or charges (OCIP or CCIP: an owner- or contractor-controlled insurance program that covers everyone on the job).</li>
</ul></div>
</div>`,
  exLabel: "Example (made-up rates; get yours from your agent and surety)",
  ex: `<p>Price before bond and insurance: $202,847. GL rated at $9.00 per $1,000 of sales: $202,847 × 0.009 = $1,826. Bond at 2.5%: ($202,847 + $1,826) × 0.025 = $5,117.</p>`,
  deeper: `<p>The Caltrans 2018 Standard Specifications say that for lump-sum items paid by a schedule of values, “for a contract with a bid item for mobilization, accept progress payments for bond costs as included in the mobilization bid item” (section 9-1.16B). Module 2 covers how bonding capacity works.</p>`,
  src: "Caltrans 2018 Standard Specifications, section 9-1.16B."
},

{ h: "Escalation allowance",
  lead: "Escalation is the price increase between the day you bid and the day you buy. Add it when the gap is long and the quote won't hold.",
  body: `<ul>
<li>Check the expiration date on every supplier quote (Module 8). Many hold for 30 days.</li>
<li>Estimate when each material will actually be bought: trees and pipe are often bought months after bid day.</li>
<li>Ask the supplier what increase they expect. Write down what they said.</li>
<li>Apply the allowance only to the materials exposed to the gap, not to labor you've already priced at next year's rates.</li>
<li>Public jobs: prevailing wage rates often have scheduled increases. Price labor at the rate in effect when the work will be done (Module 11).</li>
</ul>`,
  exLabel: "Example (made-up)",
  ex: `<p>Materials $62,400. Work starts in 5 months; the supplier's quote holds 30 days and the rep expects about 3% higher by then. Escalation = $62,400 × 3% = <strong>$1,872</strong>. One line on the recap, with a note saying why.</p>`,
  watch: `<p>If you get a quote that's guaranteed through the purchase date, you don't need escalation on those items. Adding it anyway just makes you high.</p>`
},

{ h: "Contingency: when and how",
  lead: "Contingency is money for a specific risk you can name but can't price exactly. It's not a cushion for sloppy takeoff.",
  body: `<div class="twocol">
<div><h3>Use contingency when</h3><ul>
<li>Plans say “verify in field” about the existing point of connection</li>
<li>A geotech (soils) report mentions cobbles or rock in planting areas</li>
<li>An RFI wasn't answered before bid day, and you priced an assumption</li>
<li>The job ties into an old irrigation system you couldn't test</li>
</ul></div>
<div><h3>Don't use it when</h3><ul>
<li>The risk is already in your production rate (Module 9)</li>
<li>You added waste factors to materials (Module 7)</li>
<li>You excluded or clarified the risk in your proposal (Module 13)</li>
<li>You just don't trust your takeoff (fix the takeoff)</li>
</ul></div>
</div>`,
  exLabel: "Example (made-up)",
  ex: `<p>The plans show an existing 2" mainline as the point of connection, marked “contractor to verify size and condition.” You carry $2,000 contingency for a possible repair or reroute, and write the reason next to it on the recap.</p>`,
  watch: `<p><strong>Double counting</strong> is the most common way good estimates lose bids. A slower production rate, plus extra waste, plus contingency, plus a higher profit “because it's risky” can price the same risk four times. Each risk gets handled in one place.</p>`
},

{ h: "Worked example, part 1 · From direct cost to total cost",
  lead: "A made-up private job, priced as a landscape and irrigation sub to a GC. Every number is an example for practice.",
  exLabel: "Example job (made up): retail pad, Otay Mesa, 24,000 SF (square feet) of landscape, planned at 10 weeks",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Basis</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Materials (with tax and delivery)</td><td>Takeoff × supplier quotes (Modules 6–8)</td><td class="num">$62,400</td></tr>
<tr><td>Labor (burdened)</td><td>Hours × crew rates (Module 9)</td><td class="num">$58,800</td></tr>
<tr><td>Equipment</td><td>Days × rates (Module 9)</td><td class="num">$9,600</td></tr>
<tr><td>Subcontractors</td><td>Boulder setting with crane, hydroseed</td><td class="num">$7,200</td></tr>
<tr><td><strong>Direct work cost</strong></td><td></td><td class="num"><strong>$138,000</strong></td></tr>
<tr><td>Supervision</td><td>Non-working foreman and PM time</td><td class="num">$6,500</td></tr>
<tr><td>Trucks and trailers</td><td>Not in crew cost</td><td class="num">$3,200</td></tr>
<tr><td>Storage container</td><td>GC provides toilets and fence</td><td class="num">$900</td></tr>
<tr><td>Submittals, as-builts, O&amp;M</td><td>Office hours</td><td class="num">$1,200</td></tr>
<tr><td><strong>Job overhead</strong></td><td></td><td class="num"><strong>$11,800</strong></td></tr>
<tr><td>Escalation</td><td>3% on materials</td><td class="num">$1,872</td></tr>
<tr><td>Contingency</td><td>Point of connection unknown</td><td class="num">$2,000</td></tr>
<tr><td><strong>Total cost</strong></td><td>$138,000 + $11,800 + $1,872 + $2,000</td><td class="num"><strong>$153,672</strong></td></tr>
</tbody></table></div>`,
  body: `<p>Notice what's <em>not</em> here yet: no company overhead, no profit, no bond or insurance. Those come next, in that order.</p>`
},

{ h: "Worked example, part 2 · From total cost to final bid",
  lead: "Add overhead, then profit, then the costs charged on the price. Round, then check.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Step</th><th>Math</th><th class="num">Running total</th></tr></thead>
<tbody>
<tr><td>Total cost</td><td>From part 1</td><td class="num">$153,672.00</td></tr>
<tr><td>+ Company overhead 20%</td><td>$153,672 × 0.20 = $30,734.40</td><td class="num">$184,406.40</td></tr>
<tr><td>+ Profit 10%</td><td>$184,406.40 × 0.10 = $18,440.64</td><td class="num">$202,847.04</td></tr>
<tr><td>+ General liability</td><td>$202,847.04 × 0.009 = $1,825.62</td><td class="num">$204,672.66</td></tr>
<tr><td>+ Bond 2.5% (only if required)</td><td>$204,672.66 × 0.025 = $5,116.82</td><td class="num">$209,789.48</td></tr>
<tr><td><strong>Final bid (rounded up to $100)</strong></td><td></td><td class="num"><strong>$209,800</strong></td></tr>
</tbody></table></div>`,
  body: `<p><strong>What the final number means:</strong></p>
<ul>
<li>Job cost (total cost + insurance + bond) = $160,614. Gross profit = $209,800 − $160,614 = $49,186, a <strong>23.4% gross margin</strong>.</li>
<li>Overhead recovered: $30,734. Net profit: $49,186 − $30,734 = $18,452, an <strong>8.8% net margin</strong>.</li>
<li>Overall markup on total cost: $209,800 ÷ $153,672 − 1 = <strong>36.5%</strong>. That's what “we mark up 36%” really contains.</li>
<li>Cost per SF: $209,800 ÷ 24,000 SF = <strong>$8.74/SF</strong>.</li>
</ul>`,
  watch: `<p>A 20% overhead plus 10% profit is not a 30% markup. Applied in steps, it's 1.20 × 1.10 = 1.32, a 32% markup before insurance and bond. Pick one method, stepped or added, and use it every time.</p>`
},

{ h: "Sensitivity · What if things go wrong?",
  lead: "Before you sign, test the price. Change one cost at a time and see what's left of the profit. Uses the retail pad numbers above (net profit $18,452 on $209,800).",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>What if…</th><th>Math</th><th class="num">Cost added</th><th class="num">Net profit left</th></tr></thead>
<tbody>
<tr><td>Labor runs 15% over</td><td>$58,800 × 0.15</td><td class="num">$8,820</td><td class="num">$9,632 (4.6%)</td></tr>
<tr><td>Materials cost 5% more than quoted</td><td>$62,400 × 0.05</td><td class="num">$3,120</td><td class="num">$15,332 (7.3%)</td></tr>
<tr><td>Job runs 3 weeks longer</td><td>Job overhead $6,500 + $3,200 + $900 = $10,600 over 10 weeks = $1,060 a week × 3</td><td class="num">$3,180</td><td class="num">$15,272 (7.3%)</td></tr>
<tr><td><strong>All three at once</strong></td><td>$8,820 + $3,120 + $3,180</td><td class="num"><strong>$15,120</strong></td><td class="num"><strong>$3,332 (1.6%)</strong></td></tr>
<tr><td>You cut the price 5% to win</td><td>$209,800 × 0.05</td><td class="num">$10,490 less income</td><td class="num">$7,962 (3.8%)</td></tr>
</tbody></table></div>
<p>Percents are net profit ÷ $209,800. Insurance and bond change a little with price; ignore that for a quick test.</p>`,
  body: `<p><strong>What it teaches:</strong> labor is the biggest risk on this job. A 15% labor overrun eats half the profit. Before cutting price, ask: “How sure am I about the production rates?” If not very sure, cutting price is a bad bet.</p>`,
  watch: `<p>Put a sensitivity line on your recap for the riskiest cost (usually labor): “Labor +15% leaves $9,632.” It helps the owner decide on price pressure calmly.</p>`
},

{ h: "Cash flow and margin",
  lead: "Profit on paper isn't cash in the bank. You pay crews weekly and suppliers monthly, but get paid weeks later, minus retention. Margin has to cover the cost of waiting.",
  body: `<ul>
<li><strong>Billing:</strong> usually once a month for work done (a pay application, Module 16).</li>
<li><strong>Payment timing:</strong> the GC or agency pays weeks after you bill. Private GCs often pay you after they get paid.</li>
<li><strong>Retention:</strong> a share of each payment held back until the job is finished. The contract says how much (Module 16).</li>
<li><strong>Your costs come first:</strong> payroll every week, materials on net 30 terms (Module 8), rentals up front.</li>
<li><strong>The cost of waiting:</strong> if you borrow on a line of credit to cover the gap, the interest is a real job cost.</li>
</ul>`,
  watch: `<p>A material-heavy job that front-loads costs (box trees, controllers, a backflow) needs the most cash early. Plan the cash before you win, not after (Module 3).</p>`
},

{ h: "Worked example · Cash flow on the retail pad job",
  lead: "The $209,800 job from the worked example, over three months. Payment 30 days after each month-end billing, 5% retention (example). All numbers are practice examples.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Month</th><th class="num">Costs paid</th><th class="num">Billed</th><th class="num">Cash received</th><th class="num">Cash position (running)</th></tr></thead>
<tbody>
<tr><td>1</td><td class="num">$62,000</td><td class="num">$72,000</td><td class="num">$0</td><td class="num">−$62,000</td></tr>
<tr><td>2</td><td class="num">$58,000</td><td class="num">$80,000</td><td class="num">$72,000 × 0.95 = $68,400</td><td class="num">−$51,600</td></tr>
<tr><td>3</td><td class="num">$40,614</td><td class="num">$57,800</td><td class="num">$80,000 × 0.95 = $76,000</td><td class="num">−$16,214</td></tr>
<tr><td>4</td><td class="num">$0</td><td class="num">—</td><td class="num">$57,800 × 0.95 = $54,910</td><td class="num">+$38,696</td></tr>
<tr><td>Later</td><td class="num">$0</td><td class="num">—</td><td class="num">Retention 5% × $209,800 = $10,490</td><td class="num">+$49,186</td></tr>
</tbody></table></div>
<p>Costs total $160,614 and billings total $209,800, so the final cash position equals the gross profit, $49,186. But the company is $62,000 in the hole after month 1.</p>
<p><strong>Cost of the gap:</strong> borrowing an average of about $45,000 for 3 months at 9% a year (example rate): $45,000 × 0.09 × 3 ÷ 12 = <strong>$1,012.50</strong>. That comes straight out of profit unless it's in the price.</p>`,
  watch: `<p>If retention is held until the end of a long plant establishment period, that $10,490 may wait many months. Read the payment and retention terms before you set profit.</p>`
},

{ h: "Worked bid 1 · Small private job",
  lead: "An HOA (homeowners association) entry renovation in Poway, as a direct contract with the HOA: new drip, 3 valves, planting and mulch. Every number is a practice example.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Math</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Materials (tax 7.75% and delivery included)</td><td>From quotes (Module 8)</td><td class="num">$9,850.00</td></tr>
<tr><td>Labor</td><td>196 LH × $36.04 (Module 9)</td><td class="num">$7,063.84</td></tr>
<tr><td>Equipment</td><td>Trencher 2 days, dump trailer</td><td class="num">$1,150.00</td></tr>
<tr><td><strong>Direct cost</strong></td><td></td><td class="num"><strong>$18,063.84</strong></td></tr>
<tr><td>Supervision</td><td>6 h × $55</td><td class="num">$330.00</td></tr>
<tr><td>Dump fees (old plants, sod)</td><td>3 loads × $120</td><td class="num">$360.00</td></tr>
<tr><td><strong>Total cost</strong></td><td></td><td class="num"><strong>$18,753.84</strong></td></tr>
<tr><td>+ Company overhead 20%</td><td>$18,753.84 × 0.20 = $3,750.77</td><td class="num">$22,504.61</td></tr>
<tr><td>+ Profit 15% (small-job policy)</td><td>$22,504.61 × 0.15 = $3,375.69</td><td class="num">$25,880.30</td></tr>
<tr><td>+ General liability 0.9%</td><td>$25,880.30 × 0.009 = $232.92</td><td class="num">$26,113.22</td></tr>
<tr><td>Bond</td><td>Not required</td><td class="num">$0.00</td></tr>
<tr><td><strong>Final price (rounded up to $100)</strong></td><td></td><td class="num"><strong>$26,200</strong></td></tr>
</tbody></table></div>`,
  body: `<ul>
<li><strong>Walk-away:</strong> $18,753.84 × 1.20 × 1.05 × 1.009 = $23,842.51. Room to negotiate: $26,200 − $23,842.51 = $2,357.49.</li>
<li><strong>Gross margin:</strong> job cost $18,753.84 + $232.92 = $18,986.76. Gross profit $26,200 − $18,986.76 = $7,213.24, or 27.5%.</li>
<li><strong>Net margin:</strong> $7,213.24 − $3,750.77 overhead = $3,462.47, or 13.2%.</li>
<li><strong>Schedule check:</strong> 196 LH ÷ 4 people ÷ 8 hours = 6.1 crew-days. Does a week and a bit fit the HOA's calendar?</li>
</ul>`,
  watch: `<p>On small jobs, fixed costs (mobilization, supervision trips, dump runs) are a big share. That's why the policy allows 12%–15% profit under $50,000. Don't bid small jobs at big-job markups.</p>`
},

{ h: "Worked bid 2 · Mid-size public job as prime",
  lead: "A City of San Diego pocket park, landscape and irrigation only, bid as the prime contractor at prevailing wage with a bond. Every number is a practice example.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Basis</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Materials (tax and delivery included)</td><td>Quotes</td><td class="num">$118,400.00</td></tr>
<tr><td>Labor at prevailing wage</td><td>1,640 LH × $86.00 (example burdened mix of laborers and tenders)</td><td class="num">$141,040.00</td></tr>
<tr><td>Equipment</td><td>Days × rates</td><td class="num">$18,200.00</td></tr>
<tr><td>Subcontractors</td><td>Electrical for controller power, concrete pads</td><td class="num">$22,500.00</td></tr>
<tr><td>90-day plant establishment</td><td>Visits × crew cost</td><td class="num">$9,600.00</td></tr>
<tr><td><strong>Direct cost</strong></td><td></td><td class="num"><strong>$309,740.00</strong></td></tr>
<tr><td>Job overhead</td><td>Supervision $24,600; certified payroll and compliance $4,800; trucks $6,400; toilet and fence $3,900; submittals and as-builts $2,800</td><td class="num">$42,500.00</td></tr>
<tr><td>Escalation</td><td>2% on materials</td><td class="num">$2,368.00</td></tr>
<tr><td><strong>Total cost</strong></td><td></td><td class="num"><strong>$354,608.00</strong></td></tr>
<tr><td>+ Company overhead 20%</td><td>$70,921.60</td><td class="num">$425,529.60</td></tr>
<tr><td>+ Profit 10% (public prime policy 10%–15%)</td><td>$42,552.96</td><td class="num">$468,082.56</td></tr>
<tr><td>+ General liability 0.9%</td><td>$4,212.74</td><td class="num">$472,295.30</td></tr>
<tr><td>+ Performance and payment bond 2.5%</td><td>$11,807.38</td><td class="num">$484,102.68</td></tr>
<tr><td><strong>Total bid</strong></td><td>Spread into the City's bid items (factor method, next slide)</td><td class="num"><strong>$484,102.68</strong></td></tr>
</tbody></table></div>`,
  body: `<ul>
<li><strong>Walk-away</strong> (5% minimum profit): $354,608 × 1.20 × 1.05 × 1.009 × 1.025 = <strong>$462,098.02</strong>.</li>
<li><strong>Gross margin:</strong> ($484,102.68 − $370,628.12 job cost with insurance and bond) ÷ $484,102.68 = 23.4%. <strong>Net:</strong> $42,552.96 ÷ $484,102.68 = 8.8%.</li>
<li>Public bids are sealed: there is no “sharpen your pencil” call. The walk-away is for deciding the profit before you submit.</li>
</ul>`,
  watch: `<p>On a public prime bid, also price what a prime carries that a sub doesn't: SLBE/ELBE (the City's Small Local Business Enterprise and Emerging Local Business Enterprise program) outreach and forms, the DAS 140 form (Division of Apprenticeship Standards notice of contract award), weekly certified payroll, and the City's traffic control and SWPPP (storm water pollution prevention plan) items if they're yours (Modules 2, 11 and 14).</p>`
},

{ h: "Spreading markup into bid items",
  lead: "Public bid forms ask for a price on every item. The simple, honest way to spread overhead and profit is the factor method: every item gets the same markup.",
  body: `<ol class="steps">
<li><div><b>1 · Cost each bid item</b>Direct cost per item, including its share of job overhead if you spread that too.</div></li>
<li class="hl"><div><b>2 · Find the factor</b>Factor = total bid ÷ total cost of the items you're spreading into.</div></li>
<li><div><b>3 · Multiply</b>Unit price = unit cost × factor, rounded to the cent.</div></li>
<li><div><b>4 · Extend and add up</b>Quantity × unit price for every item. The sum will be a few dollars off from rounding.</div></li>
<li><div><b>5 · Fix the rounding on one item</b>Adjust one large-quantity unit price by a cent, or a lump sum item, to land on your total.</div></li>
<li><div><b>6 · Check every extension again</b>On Caltrans bids the unit price governs if the extension doesn't match.</div></li>
</ol>`,
  ex: `<p><strong>Practice example:</strong> bid 2's items cost $354,608 (total cost). Total bid $484,102.68. Factor = $484,102.68 ÷ $354,608 = <strong>1.3652</strong>. A 1-gallon plant costing $14.20 becomes $14.20 × 1.3652 = $19.39. A 1½" valve costing $410.00 becomes $559.73.</p>`,
  watch: `<p>Some estimators load more markup on early items to get paid sooner. That's front-loading (later slide). The factor method keeps every unit price honest, which protects you when quantities change.</p>`
},

{ h: "Public bids · Caltrans time-related overhead (TRO)",
  lead: "Some Caltrans jobs have a bid item called time-related overhead, paid per working day. It changes where your overhead goes.",
  body: `<ul>
<li><strong>What it pays for:</strong> time-related field overhead (project managers, superintendents, field office) and home-office overhead (administration, insurance, accounting, estimating) for the time needed to do the work.</li>
<li><strong>The rule:</strong> if the job has a TRO item, “you must exclude the time-related overhead from every other bid item price.” Don't load it in both places.</li>
<li><strong>Quantity:</strong> working days, not counting plant establishment days.</li>
<li><strong>Payment:</strong> per working day as reported, up to a cap of 20% of the total bid ÷ the original working days. The balance is paid once all non-plant-establishment work is done.</li>
<li><strong>Not included:</strong> mobilization, permits, licenses and other one-time costs, and your subs' overhead.</li>
</ul>`,
  ex: `<p><strong>Real bids, 11-428704 (I-805 Chula Vista):</strong> item 2, TRO, 120 working days. The six bidders put <strong>$250 to $1,500 per day</strong> on it: $600 (winner ACCU), $520, $570, $600, $1,500 and $250. The winner's TRO total was 120 × $600 = $72,000, about 6% of its $1,176,120 bid. The 250 working days of plant establishment weren't part of the TRO quantity. On another lab job, 11-422004, one bidder put $1 per day on TRO. A price like that is something to study in the bid tab, not something to copy.</p>
<p><strong>Your number:</strong> with $1,680/day of company overhead (earlier slide), if this job would be about 30% of the company's work while it runs, its share is about $500/day, plus field supervision time. That lands inside the real range. See <a href="#m15-1">Module 15</a> for the full job.</p>`,
  watch: `<p>If the TRO quantity grows because the job runs long, Caltrans pays the same daily price up to 149% of the bid quantity. Beyond that, either side can ask for an adjustment backed by a CPA audit. Price it at your real daily overhead, not as a place to hide profit.</p>`,
  src: "Caltrans 2018 Standard Specifications, section 9-1.11; Bid Summary, contract 11-428704, item 2."
},

{ h: "Public bids · The mobilization item",
  lead: "Mobilization pays for getting set up: moving equipment in, bonds, the first submittals. On Caltrans jobs, how much of it you get paid early is limited by law.",
  body: `<p>Caltrans pays mobilization in steps as the job progresses (PCC (Public Contract Code) 10264(a), used by Standard Specifications 9-1.16D):</p>
<div class="tablewrap"><table>
<thead><tr><th>When this much of the original contract is earned</th><th>Caltrans may pay up to the lesser of</th></tr></thead>
<tbody>
<tr><td>5%</td><td>50% of the mobilization bid, or 5% of the contract</td></tr>
<tr><td>10%</td><td>75% of the mobilization bid, or 7.5% of the contract</td></tr>
<tr><td>20%</td><td>95% of the mobilization bid, or 9.5% of the contract</td></tr>
<tr><td>50%</td><td>100% of the mobilization bid, or 10% of the contract</td></tr>
<tr><td>All work complete</td><td>Any mobilization above 10% of the contract</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Real bids, 11-428704, item 70 mobilization, as a share of each bid:</strong> ACCU (winner) $20,000 = 1.7% · Diversified $99,100 = 8.4% · Griffith $58,000 = 4.7% · Blue Pacific $120,000 = 7.5% · Mercer-Fraser $330,000 = 10.0% · Marina $80,000 = 7.2%. The winner kept mobilization small and carried its costs in the work items.</p>`,
  watch: `<p>Mobilization above 10% of the contract waits until the end of the job. A big mobilization number doesn't bring cash in sooner than the law allows.</p>`,
  src: "Public Contract Code § 10264(a); Caltrans 2018 Standard Specifications, section 9-1.16D; Bid Summary, contract 11-428704, item 70."
},

{ h: "Worked bid 3 · Caltrans-style unit price bid, part 1",
  lead: "A small made-up Caltrans planting and irrigation job: 60 working days plus plant establishment. TRO carries the overhead; work items carry profit only. Practice numbers.",
  body: `<p><strong>Step 1 · TRO per day.</strong> Company overhead $1,680 a day × this job's share of the company's work, about 20% = $336. Plus part-time field supervision, 2 h a day × $57 = $114. <strong>TRO = $450 per working day</strong>, 60 days = $27,000.</p>
<p><strong>Step 2 · Work items at cost × 1.10 (10% profit).</strong> No company overhead here, because TRO pays it (Standard Specifications 9-1.11).</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Qty</th><th class="num">Unit cost</th><th class="num">Unit price (× 1.10)</th><th class="num">Extension</th></tr></thead>
<tbody>
<tr><td>Plant (Group A), 1-gallon</td><td class="num">1,500 EA</td><td class="num">$13.20</td><td class="num">$14.52</td><td class="num">$21,780.00</td></tr>
<tr><td>Plant (Group B), 5-gallon</td><td class="num">200 EA</td><td class="num">$34.50</td><td class="num">$37.95</td><td class="num">$7,590.00</td></tr>
<tr><td>Wood mulch</td><td class="num">150 CY</td><td class="num">$62.00</td><td class="num">$68.20</td><td class="num">$10,230.00</td></tr>
<tr><td>1" plastic pipe (Schedule 40) (supply line)</td><td class="num">3,000 LF</td><td class="num">$5.10</td><td class="num">$5.61</td><td class="num">$16,830.00</td></tr>
<tr><td>Pop-up sprinkler assembly (gear driven)</td><td class="num">120 EA</td><td class="num">$88.00</td><td class="num">$96.80</td><td class="num">$11,616.00</td></tr>
<tr><td>1½" remote control valve</td><td class="num">10 EA</td><td class="num">$520.00</td><td class="num">$572.00</td><td class="num">$5,720.00</td></tr>
<tr><td>Plant establishment work</td><td class="num">1 LS</td><td class="num">$38,000.00</td><td class="num">$41,800.00</td><td class="num">$41,800.00</td></tr>
<tr><td colspan="4"><strong>Work items total</strong> (cost $105,060)</td><td class="num"><strong>$115,566.00</strong></td></tr>
</tbody></table></div>`,
  watch: `<p>The unit costs here already include material with tax, prevailing wage labor, equipment and job costs like trucks. If your company keeps any home-office cost out of TRO, it must go into the items instead. Never in both.</p>`,
  src: "Caltrans 2018 Standard Specifications, section 9-1.11 (time-related overhead)."
},

{ h: "Worked bid 3 · part 2: mobilization, bond and checks",
  lead: "Mobilization carries one-time setup and the bond. Then check the total against the rules.",
  body: `<p><strong>Step 3 · Mobilization.</strong> One-time costs: equipment move-in and out $3,200 + field setup and first submittals $1,800 = $5,000, × 1.10 = $5,500. Bond 2.5% (example rate) on the whole contract goes here too (9-1.16B).</p>
<p><strong>Step 4 · Solve for the bond.</strong> Everything except the bond: $115,566 + $27,000 + $5,500 = $148,066. The bond is 2.5% of the final total, so total = $148,066 ÷ 0.975 = $151,862.56, and the bond = $3,796.56. Mobilization = $5,500 + $3,796.56 = $9,296.56. <strong>Round to $9,300.</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>Bid item</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Time-related overhead, 60 WDAY (working days) × $450</td><td class="num">$27,000.00</td></tr>
<tr><td>Work items (part 1)</td><td class="num">$115,566.00</td></tr>
<tr><td>Mobilization</td><td class="num">$9,300.00</td></tr>
<tr><td><strong>Total bid</strong></td><td class="num"><strong>$151,866.00</strong></td></tr>
</tbody></table></div>
<p><strong>Checks:</strong></p>
<ul>
<li><strong>Mobilization share:</strong> $9,300 ÷ $151,866 = 6.1%. Under 10%, so it can all be paid during the job.</li>
<li><strong>TRO cap:</strong> 20% × $151,866 ÷ 60 = $506.22 a day. Our $450 is under the cap, so the full daily price can be paid as days are worked.</li>
<li><strong>Bond check:</strong> 2.5% × $151,866 = $3,796.65; mobilization covers it.</li>
<li><strong>Every extension:</strong> quantity × unit price, then the sum.</li>
</ul>`,
  watch: `<p>Real Caltrans jobs also have traffic control, storm water, job site management and other general items. Price each one; don't let them hide in the work items. See Module 15 for a real bid built item by item.</p>`,
  src: "Caltrans 2018 Standard Specifications, sections 9-1.11 and 9-1.16; Public Contract Code § 10264(a)."
},

{ h: "Real numbers · TRO and mobilization on 5 Caltrans jobs",
  lead: "How the winners priced the overhead and setup items on the Real Bid Lab jobs. Real data from the Caltrans Bid Summaries.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Contract · winner</th><th class="num">Winning bid</th><th class="num">TRO per day × days</th><th class="num">TRO share</th><th class="num">Mobilization</th><th class="num">Mob. share</th></tr></thead>
<tbody>
<tr><td>11-422004 · Diversified Landscape</td><td class="num">$557,307.25</td><td class="num">$480 × 60</td><td class="num">5.2%</td><td class="num">$39,500</td><td class="num">7.1%</td></tr>
<tr><td>11-428704 · ACCU Construction</td><td class="num">$1,176,120.00</td><td class="num">$600 × 120</td><td class="num">6.1%</td><td class="num">$20,000</td><td class="num">1.7%</td></tr>
<tr><td>11-431064 · Griffith Company</td><td class="num">$4,247,463.10</td><td class="num">$600 × 120</td><td class="num">1.7%</td><td class="num">$159,000</td><td class="num">3.7%</td></tr>
<tr><td>11-428804 · PAL General Engineering</td><td class="num">$5,468,945.45</td><td class="num">$900 × 200</td><td class="num">3.3%</td><td class="num">$246,500</td><td class="num">4.5%</td></tr>
<tr><td>11-430674 · Diversified Landscape</td><td class="num">$11,546,030.50</td><td class="num">$1,640 × 200</td><td class="num">2.8%</td><td class="num">$248,000</td><td class="num">2.1%</td></tr>
</tbody></table></div>
<p>Across all 26 counted bids, the median TRO was $780 a day and the median mobilization $273,000 (mostly from the big jobs).</p>`,
  ex: `<p><strong>What it shows:</strong> winners kept TRO between about 2% and 6% of the bid and mobilization under 10%, usually well under. TRO per day rose with job size, from $480 on a $557,000 job to $1,640 on an $11.5 million job. None of them used these items to front-load.</p>`,
  src: "Caltrans Bid Summaries for 11-422004, 11-428704, 11-431064, 11-428804 and 11-430674 (Real Bid Lab data), items 090100 (TRO) and 999990 (mobilization). Medians exclude bids flagged non-responsive or declined."
},

{ h: "Public bids · Front-loading and unbalanced bids",
  lead: "Moving money between items keeps your total the same but changes when and how you get paid. Done too far, it can cost you the job or the profit.",
  body: `<ul>
<li><strong>Front-loading:</strong> putting extra money in early items (mobilization, removals, mainline) and less in late items (plant establishment) to get cash sooner.</li>
<li><strong>Unbalanced bid:</strong> item prices that don't reflect each item's real cost plus its fair share of overhead and profit.</li>
<li><strong>Why agencies care:</strong> if quantities change, an unbalanced bid can end up costing the agency more than a balanced bid that looked higher on bid day.</li>
</ul>
<p><strong>The risks to you:</strong></p>
<ul>
<li>On Caltrans jobs, if a quantity goes above 125% or below 75% of the bid quantity, the unit price can be adjusted (Standard Specifications 9-1.06). An overloaded item that's cut, or an underpriced item that overruns, can wipe out the profit you thought you moved.</li>
<li>If the Engineer eliminates an item, Caltrans pays only your costs incurred, not the money you loaded into it.</li>
<li>On federal-aid jobs, a bid that is both mathematically and materially unbalanced can lose federal concurrence in the award.</li>
<li>Many local agencies' bid instructions say they may reject an unbalanced bid. Read the instructions to bidders on every job.</li>
</ul>`,
  ex: `<p>On 11-428704 the six bidders priced plant establishment from $10,000 to $300,000 (<a href="#m15-1">Module 15</a>). A very low price on a late item and a high one on an early item is the pattern reviewers look for.</p>`,
  watch: `<p>Price every item at its real cost plus its share of overhead and profit. That's the safe default for a new estimator, and it makes your bid history useful, because each unit price means something.</p>`,
  deeper: `<p>Federal rules (23 CFR (Code of Federal Regulations) 635.102) define a <em>mathematically unbalanced</em> bid as one with items that don't reflect reasonable actual costs plus a proportionate share of profit, overhead and indirect costs, and a <em>materially unbalanced</em> bid as one that creates reasonable doubt that the award would give the lowest ultimate cost. Under 23 CFR 635.114, a bid that is only mathematically unbalanced may be awarded; when it's both, FHWA (Federal Highway Administration) acts to protect the federal interest. The Caltrans 2018 Standard Specifications don't have a separate unbalanced-bid section; the changed-quantity rules in 9-1.06 are what bite.</p>`,
  src: "Caltrans 2018 Standard Specifications, sections 9-1.06A–D; FHWA summary of 23 CFR 635 (fhwa.dot.gov/construction/contracts/910814.cfm)."
},

{ h: "Alternates, add/deducts and unit price extras",
  lead: "Many bids ask for prices beyond the base bid. Price each one with the same markups as the base bid, and think about what really changes.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Kind</th><th>What it is</th><th>How to price it</th></tr></thead>
<tbody>
<tr><td><strong>Add alternate</strong></td><td>Extra work the owner may choose to add</td><td>Its direct cost, plus any added job overhead, × your markups</td></tr>
<tr><td><strong>Deduct alternate</strong></td><td>Work the owner may remove</td><td>Only the cost that truly goes away, × markups. Fixed costs often stay.</td></tr>
<tr><td><strong>Unit price extras</strong></td><td>A price per unit for added or removed quantities (each extra plant, extra LF)</td><td>Unit cost × markups; add a small-quantity premium if needed</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Practice examples</strong> (markups 20% overhead, 10% profit, 0.9% GL; factor 1.20 × 1.10 × 1.009 = 1.3319):</p>
<ul>
<li><strong>Add alternate:</strong> upsize 8 trees from 24" to 36" box. Added direct cost $4,200 (tree price difference, bigger machine, more labor). $4,200 × 1.3319 = $5,593.98 → <strong>$5,600</strong>.</li>
<li><strong>Deduct alternate:</strong> delete drip in parking islands. Material and labor that go away: $3,000. Mobilization and supervision don't change. $3,000 × 1.3319 = $3,995.70 → offer <strong>$3,900</strong> (round down on deducts, so you're never giving back more than you save).</li>
<li><strong>Unit price, each extra 1-gallon plant:</strong> material $7.94 (Module 8) + labor 0.12 LH × $34.16 = $4.10 → $12.04 × 1.3319 = <strong>$16.04</strong>.</li>
</ul>`,
  watch: `<p>On public bids, read the instructions: alternates may or may not count toward deciding the low bidder. Price them carefully either way. Module 13 covers how to present alternates in a private proposal.</p>`
},

{ h: "Rounding and the final review",
  lead: "Before you sign, check the number four ways: the math, your benchmarks, the market, and your gut.",
  body: `<ol class="steps">
<li><div><b>Math check</b>Totals foot (add down) and cross-foot (add across). Every quantity × unit price = extension. Every addendum quantity is in. Recompute one big item by hand.</div></li>
<li><div><b>Benchmarks</b>Cost per SF of landscape, per tree, per valve, labor as a percent of total. Compare to your own finished jobs.</div></li>
<li class="hl"><div><b>Market</b>Public: compare to the engineer's estimate and to bid tab history for similar items. Private: compare to what you've learned from GCs after past bids.</div></li>
<li><div><b>Gut check</b>Ask: would I sign a contract for this number tomorrow? Could I explain each layer to the owner?</div></li>
<li><div><b>Round</b>Round the private lump sum up to a clean figure ($100 or $500). Don't round public unit prices you've already extended; the bid form's math must be exact.</div></li>
</ol>`,
  ex: `<p>Engineer's estimates aren't the market. On 11-428704 the winning bid was 22% under the engineer's estimate (<a href="#m15-1">Module 15</a>). If you're right at the estimate, you may be high. Bid tabs for similar items tell you more.</p>`,
  watch: `<p>If a benchmark is far off (say, $14/SF when your similar jobs ran $7–$10), don't adjust the price to match. Find the reason first: a missed scope, a quantity error, or a real difference in this job.</p>`,
  deeper: `<p>On a Caltrans bid, if the unit price and the item total don't agree, the unit price governs (<a href="#m15-1">Module 15</a>). On private bids, have a second person check the recap before it goes out; the How to Make a Bid process calls for this in Step 9.</p>`
},

{ h: "The bid recap sheet",
  lead: "One page that shows every layer of the price. It's what the owner signs off on, and what you'll compare to the job's final cost.",
  exLabel: "Recap sheet layout (build this in your spreadsheet)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Section</th><th>Lines</th></tr></thead>
<tbody>
<tr><td><strong>Header</strong></td><td>Project, GC or agency, bid date, plan and addenda dates, estimator, reviewer</td></tr>
<tr><td><strong>Direct cost by scope</strong></td><td>Irrigation · Soil prep · Planting · Mulch, DG (decomposed granite) and boulders · Establishment/maintenance · Each with material, labor, equipment, sub columns</td></tr>
<tr><td><strong>Job overhead</strong></td><td>Supervision · Trucks · Temporary facilities · Permits · Paperwork · Cleanup</td></tr>
<tr><td><strong>Allowances</strong></td><td>Escalation (reason) · Contingency (reason)</td></tr>
<tr><td><strong>Markups</strong></td><td>Company overhead % · Profit % · Insurance · Bond</td></tr>
<tr><td><strong>Totals</strong></td><td>Bid price · Walk-away price · Gross margin % · Net margin %</td></tr>
<tr><td><strong>Checks</strong></td><td>Cost per SF · Labor hours and crew weeks · Labor % of cost · Engineer's estimate or bid tab comparison</td></tr>
<tr><td><strong>Alternates and unit prices</strong></td><td>Each priced with the same markups</td></tr>
<tr><td><strong>Sign-off</strong></td><td>Estimator, reviewer, owner, date</td></tr>
</tbody></table></div>`,
  body: `<p>Keep the recap for every bid, won or lost. On jobs you win, the recap becomes the budget the field is measured against (Module 16).</p>`
},

{ h: "The recap sheet, line by line",
  lead: "Here is the recap filled in with the retail pad numbers, with the formula for each line. Copy the formulas into your template.",
  exLabel: "Recap template with the worked example (practice numbers)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Formula</th><th class="num">Example</th></tr></thead>
<tbody>
<tr><td>1 Materials</td><td>From pricing sheet</td><td class="num">$62,400</td></tr>
<tr><td>2 Labor</td><td>LH × crew rates</td><td class="num">$58,800</td></tr>
<tr><td>3 Equipment</td><td>Days × rates</td><td class="num">$9,600</td></tr>
<tr><td>4 Subcontractors</td><td>Leveled sub quotes</td><td class="num">$7,200</td></tr>
<tr><td>5 Direct cost</td><td>1 + 2 + 3 + 4</td><td class="num">$138,000</td></tr>
<tr><td>6 Job overhead</td><td>Sum of job overhead lines</td><td class="num">$11,800</td></tr>
<tr><td>7 Escalation (reason)</td><td>Exposed material × %</td><td class="num">$1,872</td></tr>
<tr><td>8 Contingency (reason)</td><td>Named risk</td><td class="num">$2,000</td></tr>
<tr><td>9 Total cost</td><td>5 + 6 + 7 + 8</td><td class="num">$153,672</td></tr>
<tr><td>10 Company overhead</td><td>9 × overhead %</td><td class="num">$30,734</td></tr>
<tr><td>11 Profit</td><td>(9 + 10) × profit %</td><td class="num">$18,441</td></tr>
<tr><td>12 GL insurance</td><td>(9 + 10 + 11) × GL rate</td><td class="num">$1,826</td></tr>
<tr><td>13 Bond (if required)</td><td>(9 + 10 + 11 + 12) × bond rate</td><td class="num">$5,117</td></tr>
<tr><td>14 Bid price</td><td>Sum, rounded up</td><td class="num">$209,800</td></tr>
<tr><td>15 Walk-away price</td><td>9 × (1 + OH %) × (1 + min. profit %) × insurance and bond</td><td class="num">≈ $200,300</td></tr>
<tr><td>16 Gross margin</td><td>(14 − 9 − 12 − 13) ÷ 14</td><td class="num">23.4%</td></tr>
<tr><td>17 Net margin</td><td>(14 − 9 − 10 − 12 − 13) ÷ 14</td><td class="num">8.8%</td></tr>
<tr><td>18 Cost per SF</td><td>14 ÷ landscape SF</td><td class="num">$8.74</td></tr>
<tr><td>19 Crew-weeks</td><td>Total LH ÷ crew size ÷ 40</td><td class="num">From labor sheet</td></tr>
<tr><td>20 Risk score and sensitivity</td><td>Matrix score; labor +15% result</td><td class="num">Score; $9,632 left</td></tr>
</tbody></table></div>`,
  watch: `<p>Lock the formula cells so a typed-over number can't break the recap. Change inputs only in their input cells.</p>`
},

{ t: "scorer", id: "finalreview", h: "Final review checklist",
  lead: "Run this before any price leaves the office. 2 = done and checked, 1 = partly, 0 = not done. Saved in this browser.",
  items: [
    ["All addenda in", "Every addendum acknowledged; its quantities and changes priced"],
    ["Scope matches the documents", "Every bid item or spec section is priced, excluded or clarified"],
    ["Math checked", "Extensions, footing and cross-footing; one big item recomputed by hand"],
    ["Quotes current and leveled", "Material and sub quotes under their expiration; gaps filled"],
    ["Labor rates right", "Private or current prevailing wage with increases; work windows applied"],
    ["Overhead and profit per policy", "Forward overhead rate; profit from the policy and risk score"],
    ["No double counting", "Each risk priced once: rate, waste, contingency or profit"],
    ["Benchmarks compared", "Cost per SF, per tree, per head vs. past jobs and bid data; gaps explained"],
    ["Walk-away price set", "Written in its own box on the recap"],
    ["Second person checked it", "Reviewer initials on the recap; owner signed"]
  ],
  bands: [
    [19, "Send it", "Everything checked. Submit with confidence."],
    [15, "Fix first", "Close the gaps you scored 0 or 1 before submitting."],
    [0, "Stop", "Too many open items. Go back through the steps; a rushed bid is a risky bid."]
  ]
},

{ h: "Use your bid history to tune markup",
  lead: "Your bid tracker shows whether your markup is working. Review it every quarter, not after one lost bid.",
  body: `<p>Log every bid in the <a href="https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP" target="_blank" rel="noopener">Commercial Bid Tracker</a> with your price, the low or winning price, and your profit %.</p>
<ul>
<li><strong>Hit rate</strong> = bids won ÷ bids submitted, by job type and by GC.</li>
<li><strong>Distance from low</strong> = (your price − low price) ÷ low price.</li>
<li><strong>Money left on the table</strong> on jobs you won = (2nd place − your price) ÷ your price.</li>
</ul>`,
  exLabel: "Example review (made-up data)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Job type</th><th class="num">Bids</th><th class="num">Won</th><th class="num">Avg. distance from low</th><th>What it suggests</th></tr></thead>
<tbody>
<tr><td>Private retail, GC A</td><td class="num">5</td><td class="num">3</td><td class="num">+1%</td><td>Pricing fits; check if you left money on the table</td></tr>
<tr><td>Private multifamily</td><td class="num">6</td><td class="num">0</td><td class="num">+14%</td><td>Check scope and costs before touching markup</td></tr>
<tr><td>Public, sub to primes</td><td class="num">4</td><td class="num">1</td><td class="num">+4%</td><td>Close; compare unit prices item by item</td></tr>
</tbody></table></div>`,
  watch: `<p>When you're far from low, cutting profit is the last step, not the first. A 14% gap is usually scope, production rates or material pricing. Find the cause in the bid tab or the GC's feedback, then fix that.</p>`
},

{ h: "Worked example · Reading a bid log",
  lead: "Ten bids from the new division's first months. Calculate the numbers, then decide what to change. Made-up data for practice.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Type</th><th class="num">Our price</th><th class="num">Low or winning price</th><th class="num">2nd place (if we won)</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>1</td><td>Private, large</td><td class="num">$212,000</td><td class="num">$198,500</td><td class="num"></td><td class="num">Lost, +6.8%</td></tr>
<tr><td>2</td><td>Private, small</td><td class="num">$86,400</td><td class="num">us</td><td class="num">$91,200</td><td class="num">Won, 5.6% left</td></tr>
<tr><td>3</td><td>Private, large</td><td class="num">$145,000</td><td class="num">$131,000</td><td class="num"></td><td class="num">Lost, +10.7%</td></tr>
<tr><td>4</td><td>Public</td><td class="num">$388,000</td><td class="num">$352,600</td><td class="num"></td><td class="num">Lost, +10.0%</td></tr>
<tr><td>5</td><td>Private, small</td><td class="num">$64,200</td><td class="num">us</td><td class="num">$70,900</td><td class="num">Won, 10.4% left</td></tr>
<tr><td>6</td><td>Private, large</td><td class="num">$97,500</td><td class="num">$92,300</td><td class="num"></td><td class="num">Lost, +5.6%</td></tr>
<tr><td>7</td><td>Public</td><td class="num">$261,000</td><td class="num">us</td><td class="num">$264,300</td><td class="num">Won, 1.3% left</td></tr>
<tr><td>8</td><td>Private, large</td><td class="num">$158,000</td><td class="num">$139,800</td><td class="num"></td><td class="num">Lost, +13.0%</td></tr>
<tr><td>9</td><td>Private, small</td><td class="num">$42,800</td><td class="num">us</td><td class="num">$49,900</td><td class="num">Won, 16.6% left</td></tr>
<tr><td>10</td><td>Private, large</td><td class="num">$120,400</td><td class="num">$113,900</td><td class="num"></td><td class="num">Lost, +5.7%</td></tr>
</tbody></table></div>`,
  body: `<ul>
<li><strong>Hit rate:</strong> 4 of 10 = 40%. Small private: 3 of 3. Large private: 0 of 5. Public: 1 of 2.</li>
<li><strong>Small private jobs:</strong> money left averages (5.6 + 10.4 + 16.6) ÷ 3 = <strong>10.9%</strong>. You may be too cheap here. Try 2–3 points more profit on the next few and watch the hit rate.</li>
<li><strong>Large private jobs:</strong> distance from low averages (6.8 + 10.7 + 5.6 + 13.0 + 5.7) ÷ 5 = <strong>8.4%</strong>. That's bigger than your whole profit. Look at costs first: crew size, production rates, material quotes on these jobs.</li>
<li><strong>Public:</strong> too few bids to judge. Keep bidding and compare unit prices item by item.</li>
</ul>`,
  watch: `<p>Ten bids is a small sample. Make small changes, write down what you changed and when, and check again next quarter.</p>`
},

{ h: "Learning from public bid results",
  lead: "Public bid results are published. Every result, even a loss, tells you where the market was. Real results from the five Caltrans jobs show how close bids can be.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Contract</th><th class="num">Winning bid</th><th class="num">2nd place</th><th class="num">Money left on the table</th><th class="num">Winner vs. engineer's estimate</th></tr></thead>
<tbody>
<tr><td>11-422004</td><td class="num">$557,307.25</td><td class="num">$687,805.00</td><td class="num">23.4%</td><td class="num">36.4% under</td></tr>
<tr><td>11-428704</td><td class="num">$1,176,120.00</td><td class="num">$1,179,705.30</td><td class="num">0.3%</td><td class="num">22.4% under</td></tr>
<tr><td>11-431064</td><td class="num">$4,247,463.10</td><td class="num">$4,254,436.10</td><td class="num">0.2%</td><td class="num">0.1% under</td></tr>
<tr><td>11-428804</td><td class="num">$5,468,945.45</td><td class="num">$5,795,426.00</td><td class="num">6.0%</td><td class="num">8.2% under</td></tr>
<tr><td>11-430674</td><td class="num">$11,546,030.50</td><td class="num">$12,177,446.25</td><td class="num">5.5%</td><td class="num">3.0% over</td></tr>
</tbody></table></div>
<p>Money left = (2nd place − winner) ÷ winner. Second place is the next counted bid (bids flagged non-responsive or declined are left out).</p>`,
  ex: `<p><strong>What it shows:</strong> on two of five jobs, first and second were less than half a percent apart: $3,585.30 on 11-428704 and $6,973.00 on 11-431064. A small change in markup would have flipped the result. On the others, the winner could have bid 5%–23% higher and still won. The engineer's estimate was a poor guide: winners ranged from 36% under to 3% over it.</p>`,
  watch: `<p>After every public bid, download the bid summary, put your item prices next to the winner's and the median, and write down the three biggest differences. That habit teaches more than any book (Module 15).</p>`,
  src: "Caltrans Bid Summaries and engineer's estimates for 11-422004, 11-428704, 11-431064, 11-428804 and 11-430674 (Real Bid Lab data)."
},

{ h: "Common final-number mistakes",
  lead: "The last hour before a bid is when expensive mistakes happen. Know them in advance.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>What it costs</th><th>How to avoid it</th></tr></thead>
<tbody>
<tr><td>Using markup when the owner meant margin</td><td>$5,000 per $100,000 of cost at a “20%” target</td><td>Write “markup” or “margin” at the top of the recap</td></tr>
<tr><td>One flat “O&amp;P” (overhead and profit) percent</td><td>Overhead not covered without anyone noticing</td><td>Separate overhead and profit lines</td></tr>
<tr><td>Overhead rate that doesn't match how you estimate</td><td>Trucks or equipment priced nowhere</td><td>Write the company rule; check each bid</td></tr>
<tr><td>Same risk priced in several places</td><td>Bid too high, job lost</td><td>One home for each risk</td></tr>
<tr><td>Bond on a private bid that didn't require one</td><td>2%–3% too high (example rates)</td><td>Show bond as a separate add</td></tr>
<tr><td>Overhead in TRO and in the items</td><td>Bid too high</td><td>Exclude TRO from other items</td></tr>
<tr><td>Price cut on bid day with no walk-away price</td><td>Work at a loss</td><td>Set the walk-away the day before</td></tr>
<tr><td>Last-minute change not carried through</td><td>Total doesn't match the items</td><td>Second person checks after any change</td></tr>
<tr><td>Alternates priced without markup</td><td>Free work</td><td>Same markups as the base bid</td></tr>
</tbody></table></div>`
},

{ h: "Scenarios · Price pressure",
  lead: "Short situations every estimator meets. Decide what you'd do, then read the right move.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>The right move</th><th>Why</th></tr></thead>
<tbody>
<tr><td>A GC calls after the bid: “You're 8% high. Can you sharpen it?”</td><td>Ask what's different: scope, exclusions, quantities. If your scope matches, offer only what's above your walk-away, or hold your price.</td><td>An 8% gap is usually scope. Cutting profit to chase it may leave you working for free.</td></tr>
<tr><td>The owner wants to win a job “at any price” to get in with a new GC.</td><td>Cut profit toward the minimum, but keep cost and overhead whole. Write the decision on the recap.</td><td>Losing money doesn't buy loyalty; GCs remember good work, not cheap work.</td></tr>
<tr><td>A public bid's engineer's estimate is 20% above your number.</td><td>Check your scope and quantities. If they're right, don't raise your price to the estimate.</td><td>Engineer's estimates aren't the market (see the real results).</td></tr>
<tr><td>Two of your last three bids were won by tiny margins.</td><td>Check money left on the table across the log before changing anything.</td><td>Small samples mislead; look for a pattern.</td></tr>
<tr><td>A late addendum adds 300 plants an hour before the bid.</td><td>Price them at your unit cost × markups, carry it through, and have a second person check the total.</td><td>Late changes cause most bid-day math errors.</td></tr>
</tbody></table></div>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook. Abbreviations are spelled out.",
  terms: [
    ["Direct cost", "Material, labor, equipment and subs for the installed work."],
    ["Indirect cost", "Costs that keep the job or company running but aren't part of one item."],
    ["Job overhead", "Indirect costs caused by one job: supervision, trucks, temporary facilities."],
    ["Company (general) overhead", "Costs of running the business shared by all jobs: office, estimator, accounting, yard."],
    ["P&L (profit and loss statement)", "The yearly report of revenue, job costs, overhead and net income; also called the income statement."],
    ["COGS / cost of revenue", "Cost of goods sold: the job costs on the P&L."],
    ["Overhead rate", "Company overhead ÷ direct job costs, as a percent."],
    ["Break-even volume", "The job cost you must win in a year for overhead markup to pay all company overhead."],
    ["Markup", "Profit (or overhead and profit) as a percent of cost."],
    ["Margin", "Profit as a percent of price."],
    ["Gross margin", "Price minus job cost, as a percent of price."],
    ["Net margin", "Profit after company overhead, as a percent of price."],
    ["O&P", "Overhead and profit."],
    ["Walk-away price", "The lowest price you'll bid: cost + overhead + minimum profit."],
    ["Markup decision matrix", "A scorecard of job risks used to pick where in your profit range to land."],
    ["Bond premium", "What the surety charges for a bond, as a percent of the contract."],
    ["GL", "General liability insurance."],
    ["OCIP / CCIP", "Owner- or contractor-controlled insurance program: one policy covering everyone on a job."],
    ["Escalation", "Expected price increase between bid day and purchase."],
    ["Contingency", "Money for a named risk that can't be priced exactly."],
    ["Double counting", "Pricing the same risk in more than one place."],
    ["Sensitivity test", "Changing one cost at a time to see how much profit is left."],
    ["Retention", "A share of each payment held back until the job is finished."],
    ["Cash position", "Cash received minus cash paid on a job, so far."],
    ["Factor method", "Spreading markup by multiplying every item's cost by total bid ÷ total cost."],
    ["Time-related overhead (TRO)", "Caltrans bid item paying field and home-office overhead per working day (WDAY)."],
    ["Mobilization", "Bid item for setup costs, paid in steps on Caltrans jobs."],
    ["Front-loading", "Putting extra money in early items to get paid sooner."],
    ["Unbalanced bid", "Item prices that don't reflect each item's real cost plus its share of overhead and profit."],
    ["Add / deduct alternate", "A price to add or remove a defined piece of work if the owner chooses."],
    ["Unit price extra", "A price per unit for added or removed quantities."],
    ["Engineer's estimate (EE)", "The agency's own estimate of the job cost, published with the bid results."],
    ["Money left on the table", "How much lower your winning bid was than second place."],
    ["Bid recap sheet", "One-page summary of every layer of a bid price."],
    ["Hit rate", "Bids won ÷ bids submitted."],
    ["LDs (liquidated damages)", "A set dollar charge per day the job finishes late."],
    ["PCC / FHWA / CFR", "Public Contract Code (California); Federal Highway Administration; Code of Federal Regulations."]
  ]
},

{ t: "quiz", id: "m10", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "Your foreman spends 2 hours a day in meetings and paperwork. Where does that cost go?", a: ["Direct labor on the planting items", "Job overhead", "Company overhead"], c: 1, why: "It's caused by this job but isn't part of any one item, so it's job overhead." },
    { q: "Last year: $300,000 company overhead, $1,500,000 direct job costs. What's the overhead rate on cost?", a: ["15%", "20%", "25%"], c: 1, why: "$300,000 ÷ $1,500,000 = 20%." },
    { q: "You add a 20% markup to cost. What's your margin?", a: ["20%", "16.7%", "25%"], c: 1, why: "Margin = markup ÷ (1 + markup) = 0.20 ÷ 1.20 = 16.7%." },
    { q: "Cost is $80,000 and the owner wants a 20% margin. What's the price?", a: ["$96,000", "$100,000", "$104,000"], c: 1, why: "Price = cost ÷ (1 − margin) = $80,000 ÷ 0.80 = $100,000." },
    { q: "You slowed the production rate for rocky soil and added contingency for rock. What's the problem?", a: ["Nothing, more is safer", "You priced the same risk twice", "Contingency isn't allowed on private jobs"], c: 1, why: "That's double counting. Handle each risk in one place." },
    { q: "A Caltrans job has a time-related overhead item. What must you do with other bid items?", a: ["Add TRO to them too", "Exclude time-related overhead from them", "Put all overhead in mobilization"], c: 1, why: "Standard Specifications 9-1.11A: exclude TRO from every other item price." },
    { q: "On a $1,000,000 Caltrans job you bid $150,000 for mobilization. When is the part above $100,000 paid?", a: ["At the first progress payment", "When 50% of the work is earned", "After all work is complete"], c: 2, why: "Mobilization above 10% of the original contract is paid on completion (PCC 10264(a)(5))." },
    { q: "You've lost 6 multifamily bids, each about 14% over low. What should you check first?", a: ["Cut profit to zero", "Scope, production rates and material prices", "Stop bidding forever"], c: 1, why: "A gap that big is usually cost or scope, not markup." },
    { q: "Truck costs sit in overhead on the P&L, but your estimates also price trucks on every job. What happens?", a: ["Nothing", "Trucks get charged twice and you bid high", "Trucks get charged zero times"], c: 1, why: "The overhead rate already carries them; pricing them in the job again double counts." },
    { q: "Overhead budget $420,000, overhead markup 20% on cost. How much job cost must you win to cover overhead?", a: ["$840,000", "$2,100,000", "$4,200,000"], c: 1, why: "$420,000 ÷ 0.20 = $2,100,000." },
    { q: "Labor is $58,800 and net profit is $18,452. Labor runs 15% over. About how much profit is left?", a: ["$9,632", "$15,332", "$0"], c: 0, why: "$58,800 × 0.15 = $8,820; $18,452 − $8,820 = $9,632." },
    { q: "Total bid $484,102.68, total cost $354,608. What's the factor for spreading markup into items?", a: ["1.20", "1.3652", "1.32"], c: 1, why: "Factor = total bid ÷ total cost = 1.3652." },
    { q: "On a deduct alternate, why round down and leave fixed costs in?", a: ["To make the owner happy", "Because supervision and mobilization don't go away when the work is removed", "It's required by law"], c: 1, why: "Only the cost that truly goes away should be deducted." },
    { q: "On 11-428704, first and second place were how far apart?", a: ["About 0.3%", "About 10%", "About 22%"], c: 0, why: "$1,179,705.30 vs. $1,176,120.00 is a 0.3% gap; markup decisions matter at the margin." },
    { q: "A Caltrans job's TRO cap works out to $506 a day. You price TRO at $450. What does that mean?", a: ["Your bid is rejected", "Your full daily TRO price can be paid as days are worked", "TRO is paid only at the end"], c: 1, why: "Daily TRO payments are capped at 20% of the bid ÷ working days; $450 is under the cap." }
  ]
},

{ t: "practice", id: "m10", h: "Practice assignments",
  lead: "Use your company's real numbers. By the end you'll have an overhead rate, a markup policy, a risk scorecard and a recap sheet ready for the next bid.",
  items: [
    { h: "Calculate the company's overhead rate", hrs: 0.75, d: "<p>Get last year's profit and loss statement from the owner or CPA. Sort every account into direct job cost or company overhead, using the lists in this module, and write the company rule for trucks and equipment. Calculate the overhead rate on cost and as a share of revenue. Then build next year's overhead budget with the commercial division's added costs, and calculate the forward-looking rate, the daily overhead figure and the break-even volume.</p>" },
    { h: "Write the markup policy and minimum margin", hrs: 0.25, d: "<p>Sit down with the owner. Agree on profit ranges by job type (like the example table), the minimum profit for the walk-away price, the overhead spreading method, and whether you'll talk in markup or margin. Write it on one page and make a markup-to-margin conversion card for your desk.</p>" },
    { h: "Get your real bond and insurance rates", hrs: 0.25, d: "<p>Call the surety agent and ask for the company's bond rate schedule by contract size. Call the insurance agent and ask how general liability is rated (payroll or sales), the rate, and the cost of common additional insured and higher-limit requirements. Write the per-job formulas into your recap template.</p>" },
    { h: "Build the bid recap sheet", hrs: 0.5, d: "<p>Build the recap from the line-by-line slide in a spreadsheet. Formulas for every layer: job overhead, escalation, contingency, overhead %, profit %, insurance, bond, walk-away price, gross and net margin, cost per SF, risk score and a labor +15% sensitivity line. Test it with the worked example and confirm you get $209,789.48 before rounding.</p>" },
    { h: "Take a real estimate to a final number", hrs: 0.75, d: "<p>Take the takeoff and pricing you built in Modules 6–9 (or any landscape job you've estimated). Score it on the markup decision matrix, then run it through your recap sheet: job overhead, allowances with written reasons, overhead, profit, insurance, bond. Calculate the walk-away price, cost per SF, both margins and a sensitivity line. Run the final review checklist and have the owner review it.</p>" },
    { h: "Analyze TRO and mobilization on real Caltrans bids", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a> and one other job in the <a href=\"#lab\">Real Bid Lab</a> that has a time-related overhead item. For each bidder, calculate mobilization as a percent of its total and TRO per day × days. Then calculate what your company's daily overhead share would be on that job and compare it to the range.</p>" },
    { h: "Review your bid history", hrs: 0.5, d: "<p>Enter every bid you've submitted so far into the <a href=\"https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP\" target=\"_blank\" rel=\"noopener\">Commercial Bid Tracker</a> with the low price where you know it. Calculate hit rate, average distance from low and money left on the table by job type, like the bid log example. Write three sentences on what it suggests, and set a quarterly review date with the owner.</p>" },
    { h: "Spread a public bid into items", hrs: 0.5, d: "<p>Take a public bid form with 6 to 10 items (a Real Bid Lab job or a City of San Diego bid). Cost each item, add overhead, profit, insurance and bond to get a total, then spread it with the factor method. Fix the rounding on one item, and check every extension and the total.</p>" },
    { h: "Run a cash flow for one job", hrs: 0.5, d: "<p>For a job you priced, lay out costs paid, billings and cash received month by month, using the real payment and retention terms from the contract or bid documents. Find the peak cash need and the interest cost at the company's line-of-credit rate. Decide with the owner whether the profit covers it.</p>" }
  ]
},

{ h: "Module 10 summary",
  lead: "You can now turn a cost estimate into a price you can defend, layer by layer.",
  body: `<ul>
<li>Keep the layers separate: direct cost, job overhead, allowances, company overhead, profit, insurance and bond. Follow the 12 steps on every bid.</li>
<li>Read the P&L, calculate your overhead rate, match it to how you estimate, pick one spreading method, and know your break-even volume.</li>
<li>Markup is on cost, margin is on price. A 20% markup is a 16.7% margin; a 20% margin needs a 25% markup.</li>
<li>Set profit by risk and job type with the decision matrix, and decide your walk-away price before bid day.</li>
<li>Use escalation and contingency only for named reasons, price each risk once, and price alternates with the same markups.</li>
<li>Test the price with what-if changes and a cash flow check before you sign.</li>
<li>On Caltrans jobs, keep time-related overhead in the TRO item only, size mobilization honestly, spread markup with the factor method, and check the TRO and mobilization rules.</li>
<li>Check the final number with the recap sheet, the final review checklist, benchmarks, public bid results and your bid log.</li>
</ul>
<p><strong>Next: Module 11 · Prevailing Wage and Public Works Compliance</strong></p>`
}
]
});
