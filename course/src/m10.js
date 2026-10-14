(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 10, hours: 5, title: "Overhead, Markup and Your Final Number",
slides: [

{ t: "cover",
  h: "Overhead, Markup and Your Final Number",
  lead: "Modules 6 to 9 gave you the cost of the work. This module turns that cost into a price: one that pays for the office, the trucks and the people who never touch a shovel, and still leaves a profit.",
  objectives: [
    "Separate direct costs, job overhead and company overhead",
    "Calculate your overhead rate from last year's numbers",
    "Convert between markup and margin without the common mistake",
    "Set profit by job type and risk, and hold a minimum margin",
    "Price bonds, insurance, escalation and contingency without double counting",
    "Price Caltrans time-related overhead and mobilization items and avoid unbalanced bids",
    "Review a final number with a recap sheet, benchmarks and your bid history"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "3.5 h"], ["Module total", "5 h"]],
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
<tr><td>Supervision</td><td>Superintendent or foreman time not spent installing; project manager time</td><td>Hours per week × weeks × rate</td></tr>
<tr><td>Trucks and trailers</td><td>Pickups, flatbeds, water truck days not in crew cost</td><td>Days on job × daily rate</td></tr>
<tr><td>Temporary facilities</td><td>Storage container, portable toilet, temporary fence, water for establishment</td><td>Months × rental, plus delivery and pickup</td></tr>
<tr><td>Bonds</td><td>Performance and payment bond if required</td><td>Your surety's rate × contract amount (later slide)</td></tr>
<tr><td>Insurance</td><td>General liability and umbrella charged per job, extra endorsements</td><td>Your agent's rating basis (later slide)</td></tr>
<tr><td>Permits and fees</td><td>Only if the contract makes them yours: encroachment, meter, inspection</td><td>Look up the actual fee schedule</td></tr>
<tr><td>Paperwork</td><td>Submittals, as-builts, O&amp;M manuals, certified payroll, safety plan</td><td>Office hours × rate</td></tr>
<tr><td>Cleanup and disposal</td><td>Dump fees, green waste, final cleanup</td><td>Loads × cost per load</td></tr>
</tbody></table></div>`,
  watch: `<p>On a GC's job, the GC often provides toilets, fencing and dumpsters. Read the GC's scope sheet. Don't price what they provide, and don't assume they provide what they don't.</p>`
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
  ex: `<p>Starting a commercial division adds overhead before it adds revenue: an estimator's salary, takeoff software, plan printing, DIR registration and new insurance endorsements. Put those into next year's overhead budget so the first commercial bids carry their share.</p>`
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
<tr><td>Software, phones, IT</td><td class="num">$12,000</td></tr>
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
<tr><td>Unclear plans, many unknowns, RFIs not answered</td><td>Complete plans, quantities given</td></tr>
<tr><td>New GC or agency, slow-pay reputation, heavy liquidated damages</td><td>Repeat GC who pays on time</td></tr>
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
<tr><td>Strategic job you badly want</td><td class="num">Down to the minimum (next slide)</td></tr>
</tbody></table></div>`,
  watch: `<p>“How badly we want it” is a real reason to cut profit, but only profit. Never cut overhead or cost to win. If the numbers only work by assuming crews will go faster than they ever have, the job will lose money.</p>`
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
<li>General liability is often rated on payroll or sales. Ask your agent which, and the rate.</li>
<li>Extra costs per job: higher limits, umbrella, additional insured endorsements, wrap-up (OCIP/CCIP) credits or charges.</li>
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
<li>A geotech report mentions cobbles or rock in planting areas</li>
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
  exLabel: "Example job (made up): retail pad, Otay Mesa, 24,000 SF of landscape",
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
  body: `<p>Caltrans pays mobilization in steps as the job progresses (Public Contract Code 10264(a), used by Standard Specifications 9-1.16D):</p>
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
  deeper: `<p>Federal rules (23 CFR 635.102) define a <em>mathematically unbalanced</em> bid as one with items that don't reflect reasonable actual costs plus a proportionate share of profit, overhead and indirect costs, and a <em>materially unbalanced</em> bid as one that creates reasonable doubt that the award would give the lowest ultimate cost. Under 23 CFR 635.114, a bid that is only mathematically unbalanced may be awarded; when it's both, FHWA acts to protect the federal interest. The Caltrans 2018 Standard Specifications don't have a separate unbalanced-bid section; the changed-quantity rules in 9-1.06 are what bite.</p>`,
  src: "Caltrans 2018 Standard Specifications, sections 9-1.06A–D; FHWA summary of 23 CFR 635 (fhwa.dot.gov/construction/contracts/910814.cfm)."
},

{ h: "Rounding and the final review",
  lead: "Before you sign, check the number four ways: the math, your benchmarks, the market, and your gut.",
  body: `<ol class="steps">
<li><div><b>Math check</b>Totals foot and cross-foot. Every quantity × unit price = extension. Every addendum quantity is in. Recompute one big item by hand.</div></li>
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
<tr><td><strong>Direct cost by scope</strong></td><td>Irrigation · Soil prep · Planting · Mulch, DG and boulders · Establishment/maintenance · Each with material, labor, equipment, sub columns</td></tr>
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

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Direct cost", "Material, labor, equipment and subs for the installed work."],
    ["Indirect cost", "Costs that keep the job or company running but aren't part of one item."],
    ["Job overhead", "Indirect costs caused by one job: supervision, trucks, temporary facilities."],
    ["Company (general) overhead", "Costs of running the business shared by all jobs: office, estimator, accounting, yard."],
    ["Overhead rate", "Company overhead ÷ direct job costs, as a percent."],
    ["Markup", "Profit (or overhead and profit) as a percent of cost."],
    ["Margin", "Profit as a percent of price."],
    ["Gross margin", "Price minus job cost, as a percent of price."],
    ["Net margin", "Profit after company overhead, as a percent of price."],
    ["Walk-away price", "The lowest price you'll bid: cost + overhead + minimum profit."],
    ["Bond premium", "What the surety charges for a bond, as a percent of the contract."],
    ["Escalation", "Expected price increase between bid day and purchase."],
    ["Contingency", "Money for a named risk that can't be priced exactly."],
    ["Double counting", "Pricing the same risk in more than one place."],
    ["Time-related overhead (TRO)", "Caltrans bid item paying field and home-office overhead per working day."],
    ["Mobilization", "Bid item for setup costs, paid in steps on Caltrans jobs."],
    ["Front-loading", "Putting extra money in early items to get paid sooner."],
    ["Unbalanced bid", "Item prices that don't reflect each item's real cost plus its share of overhead and profit."],
    ["Bid recap sheet", "One-page summary of every layer of a bid price."],
    ["Hit rate", "Bids won ÷ bids submitted."]
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
    { q: "You've lost 6 multifamily bids, each about 14% over low. What should you check first?", a: ["Cut profit to zero", "Scope, production rates and material prices", "Stop bidding forever"], c: 1, why: "A gap that big is usually cost or scope, not markup." }
  ]
},

{ t: "practice", id: "m10", h: "Practice assignments",
  lead: "Use your company's real numbers. By the end you'll have an overhead rate, a markup policy and a recap sheet ready for the next bid.",
  items: [
    { h: "Calculate the company's overhead rate", hrs: 0.75, d: "<p>Get last year's profit and loss statement from the owner or CPA. Sort every account into direct job cost or company overhead, using the lists in this module. Calculate the overhead rate on cost and as a share of revenue. Then build next year's overhead budget with the commercial division's added costs, and calculate the forward-looking rate and the daily overhead figure.</p>" },
    { h: "Write the markup policy and minimum margin", hrs: 0.25, d: "<p>Sit down with the owner. Agree on profit ranges by job type (like the example table), the minimum profit for the walk-away price, and whether you'll talk in markup or margin. Write it on one page and make a markup-to-margin conversion card for your desk.</p>" },
    { h: "Get your real bond and insurance rates", hrs: 0.25, d: "<p>Call the surety agent and ask for the company's bond rate schedule by contract size. Call the insurance agent and ask how general liability is rated (payroll or sales), the rate, and the cost of common additional insured and higher-limit requirements. Write the per-job formulas into your recap template.</p>" },
    { h: "Build the bid recap sheet", hrs: 0.5, d: "<p>Build the recap layout from this module in a spreadsheet. Formulas for every layer: job overhead, escalation, contingency, overhead %, profit %, insurance, bond, walk-away price, gross and net margin, cost per SF. Test it with the worked example and confirm you get $209,789.48 before rounding.</p>" },
    { h: "Take a real estimate to a final number", hrs: 0.75, d: "<p>Take the takeoff and pricing you built in Modules 6–9 (or any landscape job you've estimated). Run it through your recap sheet: job overhead, allowances with written reasons, overhead, profit, insurance, bond. Calculate the walk-away price, cost per SF and both margins. Have the owner review it.</p>" },
    { h: "Analyze TRO and mobilization on real Caltrans bids", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a> and one other job in the <a href=\"#lab\">Real Bid Lab</a> that has a time-related overhead item. For each bidder, calculate mobilization as a percent of its total and TRO per day × days. Then calculate what your company's daily overhead share would be on that job and compare it to the range.</p>" },
    { h: "Review your bid history", hrs: 0.5, d: "<p>Enter every bid you've submitted so far into the <a href=\"https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP\" target=\"_blank\" rel=\"noopener\">Commercial Bid Tracker</a> with the low price where you know it. Calculate hit rate and average distance from low by job type. Write three sentences on what it suggests, and set a quarterly review date with the owner.</p>" }
  ]
},

{ h: "Module 10 summary",
  lead: "You can now turn a cost estimate into a price you can defend, layer by layer.",
  body: `<ul>
<li>Keep the layers separate: direct cost, job overhead, allowances, company overhead, profit, insurance and bond.</li>
<li>Calculate your overhead rate from last year's real numbers, and budget forward for the new division.</li>
<li>Markup is on cost, margin is on price. A 20% markup is a 16.7% margin; a 20% margin needs a 25% markup.</li>
<li>Set profit by risk and job type, and decide your walk-away price before bid day.</li>
<li>Use escalation and contingency only for named reasons, and price each risk once.</li>
<li>On Caltrans jobs, keep time-related overhead in the TRO item only, know how mobilization is paid, and price items honestly.</li>
<li>Check the final number with a recap sheet, benchmarks, the market and your bid history.</li>
</ul>
<p><strong>Next: Module 11 · Prevailing Wage and Public Works Compliance</strong></p>`
}
]
});
