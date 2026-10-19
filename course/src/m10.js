(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 10, hours: 5.5, title: "Overhead, Markup and Your Final Number",
slides: [

{ t: "cover",
  h: "Overhead, Markup and Your Final Number",
  lead: "Modules 6 to 9 give you the cost of the work. This module turns cost into a price that carries the office, the people who never touch a shovel, the risk, and a profit.",
  objectives: [
    "Separate direct cost, job overhead and company overhead; derive an overhead rate from a P&L and know your break-even volume",
    "Convert markup and margin correctly and set profit by risk with a decision matrix and a walk-away price",
    "Price bonds, insurance, escalation, contingency and alternates without double counting",
    "Build three full bids: small private, public prime, and a Caltrans unit price bid with TRO and mobilization",
    "Stress-test a price for cost overruns and cash flow, then review it with a recap sheet, benchmarks and bid history"
  ],
  time: [["Reading and slides", "1.75 h"], ["Practice assignments", "3.75 h"], ["Module total", "5.5 h"]],
  body: `<p>Dollar figures are practice examples unless they come from a named real bid.</p>`
},

{ h: "The price stack",
  lead: "Build the price in layers and keep each layer visible on the recap. One flat “overhead and profit” percent hides whether overhead is covered at all.",
  body: `<ol class="steps">
<li><div><b>1 · Direct cost by scope</b>Material, labor, equipment, subs for irrigation, soil prep, planting, mulch, establishment (<a href="#m6-1">Modules 6–9</a>).</div></li>
<li><div><b>2 · Job overhead</b>Every line, even when zero.</div></li>
<li><div><b>3 · Allowances</b>Escalation and contingency, each with a written reason.</div></li>
<li class="hl"><div><b>4 · Company overhead %</b>Your forward-looking rate.</div></li>
<li class="hl"><div><b>5 · Profit %</b>From policy and the risk score; set the walk-away price.</div></li>
<li><div><b>6 · Insurance and bond on the price</b>Agent's and surety's rates, only where required.</div></li>
<li><div><b>7 · Spread into bid items</b>Factor method, or TRO (time-related overhead) and mobilization on Caltrans jobs.</div></li>
<li><div><b>8 · Alternates and unit price extras</b>Same markups.</div></li>
<li class="hl"><div><b>9 · Review and sign-off</b>Math, benchmarks, market, gut; owner signs the recap. After the bid, log the result.</div></li>
</ol>`
},

{ h: "Direct cost, job overhead, company overhead",
  lead: "Direct cost goes into the ground or onto one bid item. Job overhead belongs to one job but no single item. Company overhead belongs to the business.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Layer</th><th>Lines</th><th>How to price</th></tr></thead>
<tbody>
<tr><td><strong>Direct</strong></td><td>Pipe, heads, valves, wire, controllers, plants, mulch, amendments, tax and delivery; burdened install labor; machine time on the work; subs (boring, hydroseed, traffic control, electrical)</td><td>Takeoff × prices and rates</td></tr>
<tr><td rowspan="6"><strong>Job overhead</strong></td><td>Supervision not installing; PM (project manager) time</td><td>Hours/week × weeks × rate</td></tr>
<tr><td>Trucks and trailers not in crew cost</td><td>Days × daily rate</td></tr>
<tr><td>Storage container, toilet, temp fence, establishment water</td><td>Months × rental + delivery</td></tr>
<tr><td>Permits and fees, only if the contract makes them yours</td><td>Actual fee schedule</td></tr>
<tr><td>Submittals, as-builts, O&amp;M (operation and maintenance) manuals, certified payroll, safety plan</td><td>Office hours × rate</td></tr>
<tr><td>Cleanup, dump fees, green waste</td><td>Loads × cost</td></tr>
<tr><td><strong>Company overhead</strong></td><td>Office rent, utilities, software; unbilled salaries (owner office time, estimator, bookkeeper); accounting, legal, licenses; yard and shop; office vehicles; insurance not charged per job; marketing, plan rooms, dues; every hour on bids you lose</td><td>Overhead rate (next slide)</td></tr>
</tbody></table></div>
<p>A foreman installing valves 6 h and in meetings 2 h: 6 h direct, 2 h job overhead. Where you draw the line is your choice; write the rule once and follow it.</p>`,
  watch: `<p>On a GC job, read the scope sheet: the GC often supplies toilets, fencing and dumpsters. Don't price what they provide or assume what they don't. A new commercial division adds overhead before revenue (estimator, takeoff software, DIR (Department of Industrial Relations) registration, insurance endorsements); budget it so the first bids carry it. Demolition, grading, drainage and hardscape are separate scopes (<a href="#m17-1">Module 17</a>).</p>`
},

{ h: "Overhead rate from the P&L",
  lead: "Overhead rate = company overhead ÷ direct job cost. Use the higher of last year's actual and next year's budget.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>P&amp;L (profit and loss statement), practice numbers</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td><strong>Revenue</strong></td><td class="num"><strong>$2,400,000</strong></td></tr>
<tr><td>Cost of revenue (COGS, cost of goods sold): materials $690,000 · field labor and burden $780,000 · subs $140,000 · equipment and trucks $130,000 · job overhead $60,000</td><td class="num">$1,800,000</td></tr>
<tr><td><strong>Gross profit</strong> (25.0%)</td><td class="num"><strong>$600,000</strong></td></tr>
<tr><td>Operating expenses (company overhead): office $36,000 · office staff $90,000 · owner and estimator unbilled $110,000 · yard $30,000 · office vehicles $18,000 · insurance $24,000 · software and IT $12,000 · licenses, accounting, legal $10,000 · marketing $6,000 · other $14,000</td><td class="num">$350,000</td></tr>
<tr><td><strong>Net income before tax</strong> (10.4%)</td><td class="num"><strong>$250,000</strong></td></tr>
</tbody></table></div>
<ul>
<li><strong>Last year:</strong> $350,000 ÷ $1,800,000 = <strong>19.4%</strong> on cost (14.6% of revenue).</li>
<li><strong>Forward:</strong> add a commercial estimator and software: $420,000 ÷ $2,100,000 expected direct cost = <strong>20.0%</strong>. Use this.</li>
<li><strong>Daily overhead:</strong> $420,000 ÷ about 250 working days ≈ <strong>$1,680/day</strong> (used for Caltrans TRO).</li>
</ul>`,
  body: `<p>If the P&amp;L lumps everything together, have the CPA (certified public accountant) split accounts into job cost and overhead.</p>`
},

{ h: "Overhead traps and break-even volume",
  lead: "The rate must match how you estimate, one spreading method must be used on every bid, and overhead is recovered only on work you win.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>$130,000 equipment and trucks filed…</th><th class="num">A: in job cost</th><th class="num">B: in overhead</th></tr></thead>
<tbody>
<tr><td>Direct cost / overhead</td><td class="num">$1,800,000 / $350,000</td><td class="num">$1,670,000 / $480,000</td></tr>
<tr><td><strong>Overhead rate</strong></td><td class="num"><strong>19.4%</strong></td><td class="num"><strong>28.7%</strong></td></tr>
</tbody></table></div>
<p>Use A only if every estimate prices trucks and equipment (<a href="#m9-1">Module 9</a>). Using 19.4% while leaving them out under-recovers 9.3 points × $1,670,000 ≈ <strong>$155,000 a year</strong>. Write the rule at the top of the recap template.</p>
<div class="tablewrap"><table>
<thead><tr><th>Spreading $420,000 (30,000 LH expected)</th><th class="num">20% of cost</th><th class="num">$14.00 per labor hour (LH)</th></tr></thead>
<tbody>
<tr><td>Job X, $60,000 cost, material-heavy, 700 LH</td><td class="num">$12,000</td><td class="num">$9,800</td></tr>
<tr><td>Job Y, $60,000 cost, labor-heavy, 1,100 LH</td><td class="num">$12,000</td><td class="num">$15,400</td></tr>
</tbody></table></div>
<p>Per-LH charges crew-driven jobs more, which matches where overhead really goes; a hybrid (small % on material and subs + rate per LH) also works. Pick one with the owner and never switch between bids, or your bid history stops meaning anything.</p>
<p><strong>Break-even volume</strong> = overhead budget ÷ overhead markup = $420,000 ÷ 0.20 = <strong>$2,100,000</strong> of job cost ($2,520,000 of sales before profit). Win only $1,800,000: recovered $360,000, short $60,000; paper profit $216,000 becomes $156,000.</p>`,
  watch: `<p>If the year is running short, don't quietly raise the overhead percent; that makes you less competitive when you most need wins. Cut spending or chase more of the right work. Track volume won against break-even monthly.</p>`
},

{ h: "Markup vs. margin",
  lead: "Markup is on cost, margin is on price. To hit a target margin: price = cost ÷ (1 − margin).",
  body: `<ul>
<li>Margin = markup ÷ (1 + markup) · markup = margin ÷ (1 − margin)</li>
<li>Cost $100,000, price $120,000: markup 20%, margin 16.7%.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th class="num">Markup</th><th class="num">10%</th><th class="num">15%</th><th class="num">20%</th><th class="num">25%</th><th class="num">30%</th><th class="num">35%</th><th class="num">40%</th></tr></thead>
<tbody><tr><td class="num"><strong>Margin</strong></td><td class="num">9.1%</td><td class="num">13.0%</td><td class="num">16.7%</td><td class="num">20.0%</td><td class="num">23.1%</td><td class="num">25.9%</td><td class="num">28.6%</td></tr></tbody>
</table></div>
<p>Stepped markups multiply: 20% overhead then 10% profit = 1.20 × 1.10 = 32% markup, not 30%.</p>`,
  watch: `<p>Owner says “20% margin,” estimator multiplies by 1.20: that's a 16.7% margin. On $100,000 the right price is $125,000, not $120,000, and the $5,000 gap repeats on every job. Write “markup” or “margin” at the top of the recap; accountants mean margin.</p>`
},

{ h: "Setting profit and the walk-away price",
  lead: "Profit moves with risk and how much the job is worth to you. Overhead and cost never move. Set the walk-away price before bid day.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Push profit up</th><th>Push profit down</th></tr></thead>
<tbody>
<tr><td>Small job; fixed costs a big share</td><td>Large, simple, repetitive scope</td></tr>
<tr><td>Long establishment or maintenance</td><td>Short schedule, clean handoff</td></tr>
<tr><td>Unclear plans, unanswered RFIs</td><td>Complete plans, quantities given</td></tr>
<tr><td>New or slow-pay GC or agency; heavy LDs (liquidated damages, a set charge per late day)</td><td>Repeat GC who pays on time</td></tr>
<tr><td>Crews already busy; few qualified bidders</td><td>Crews idle without it; many bidders</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Practice policy (set yours with the owner)</th><th class="num">Profit on cost + overhead</th></tr></thead>
<tbody>
<tr><td>Private GC sub, under $50,000</td><td class="num">12–15%</td></tr>
<tr><td>Private GC sub, $50,000–$500,000</td><td class="num">8–12%</td></tr>
<tr><td>Public, sub to a prime</td><td class="num">8–10%</td></tr>
<tr><td>Public prime (bonds, paperwork, LDs)</td><td class="num">10–15%</td></tr>
<tr><td>Strategic job</td><td class="num">Down to the minimum</td></tr>
</tbody></table></div>
<p><strong>Walk-away price</strong> = total cost × (1 + overhead %) × (1 + minimum profit %, e.g. 5%) × insurance and bond. Put it in its own box on the recap. It's how far you can go when a GC asks you to sharpen your pencil; on sealed public bids it bounds the profit you choose.</p>`,
  watch: `<p>A bid at cost still loses the overhead it was supposed to carry. If the numbers only work with crews faster than they've ever been, the job loses money.</p>`
},

{ t: "scorer", id: "markuprisk", h: "Markup decision matrix",
  lead: "Score the job: 2 = yes, 1 = partly, 0 = no. High score means low risk, so profit sits at the low end of your policy range. Saved in this browser.",
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
  body: `<p>Write the score on the recap. It gives the owner a reason for the profit you chose.</p>`
},

{ h: "Bond, insurance and allowances",
  lead: "Price bond and per-job insurance on the price itself; add escalation and contingency only for named risks, and price each risk in exactly one place.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>Bond premium</td><td>Surety's % of contract, stepping down with size. Public prime: in the price. Private GC: show as a separate add (<a href="#m13-1">Module 13</a>) unless required. Caltrans with a mobilization item: bond cost is paid in mobilization (Standard Specifications 9-1.16B).</td></tr>
<tr><td>Insurance</td><td>Workers' comp is already in burden. GL (general liability) is rated on payroll or sales; add per-job extras: higher limits, umbrella, additional insured endorsements, OCIP/CCIP (owner- or contractor-controlled insurance program) credits or charges.</td></tr>
<tr><td>Escalation</td><td>Only on materials bought after the quote expires (often 30 days). Ask the supplier what increase to expect and note it. Price public labor at the rate in effect when the work happens (<a href="#m11-1">Module 11</a>). None on items with a quote guaranteed to purchase.</td></tr>
<tr><td>Contingency</td><td>A named risk you can't price exactly: “verify in field” point of connection, geotech report mentioning cobbles, unanswered RFI with an assumed answer, tie-in to an untested system. Not for risks already in production rates, waste factors or proposal exclusions, and never for an untrusted takeoff (fix the takeoff).</td></tr>
</tbody></table></div>`,
  ex: `<p>Retail pad: price before insurance $202,847; GL $9.00 per $1,000 of sales = $1,826; bond 2.5% × ($202,847 + $1,826) = $5,117. Escalation: materials $62,400, start in 5 months, rep expects +3% = $1,872. Contingency: existing 2" main, “verify size and condition” = $2,000.</p>`,
  watch: `<p>Slower rate + extra waste + contingency + higher profit “because it's risky” prices one risk four times. That is how good estimates lose bids.</p>`,
  src: "Caltrans 2018 Standard Specifications, section 9-1.16B."
},

{ h: "The recap sheet · retail pad worked example",
  lead: "One page shows every layer with its formula. It's what the owner signs, and on a win it becomes the field budget.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Formula</th><th class="num">Retail pad, Otay Mesa, 24,000 SF, 10 weeks, GC sub</th></tr></thead>
<tbody>
<tr><td>1–4 Materials / labor / equipment / subs</td><td>Pricing sheets (boulder crane, hydroseed subs)</td><td class="num">$62,400 / $58,800 / $9,600 / $7,200</td></tr>
<tr><td>5 Direct cost</td><td>1 + 2 + 3 + 4</td><td class="num">$138,000</td></tr>
<tr><td>6 Job overhead</td><td>Supervision $6,500 + trucks $3,200 + container $900 + submittals $1,200</td><td class="num">$11,800</td></tr>
<tr><td>7–8 Escalation / contingency (reasons)</td><td>3% on materials / point of connection</td><td class="num">$1,872 / $2,000</td></tr>
<tr><td><strong>9 Total cost</strong></td><td>5 + 6 + 7 + 8</td><td class="num"><strong>$153,672.00</strong></td></tr>
<tr><td>10 Company overhead</td><td>9 × 20%</td><td class="num">$30,734.40</td></tr>
<tr><td>11 Profit</td><td>(9 + 10) × 10%</td><td class="num">$18,440.64</td></tr>
<tr><td>12 GL</td><td>(9 + 10 + 11) × 0.9%</td><td class="num">$1,825.62</td></tr>
<tr><td>13 Bond (if required)</td><td>(9 to 12) × 2.5%</td><td class="num">$5,116.82</td></tr>
<tr><td><strong>14 Bid price</strong></td><td>$209,789.48, rounded up to $100</td><td class="num"><strong>$209,800</strong></td></tr>
<tr><td>15 Walk-away</td><td>9 × 1.20 × 1.05 × 1.009 × 1.025</td><td class="num">≈ $200,300</td></tr>
<tr><td>16 Gross margin</td><td>(14 − 9 − 12 − 13) ÷ 14</td><td class="num">23.4%</td></tr>
<tr><td>17 Net margin</td><td>(14 − 9 − 10 − 12 − 13) ÷ 14</td><td class="num">8.8% ($18,452)</td></tr>
<tr><td>18 Overall markup on total cost</td><td>14 ÷ 9 − 1</td><td class="num">36.5%</td></tr>
<tr><td>19 Cost per SF</td><td>14 ÷ landscape SF</td><td class="num">$8.74</td></tr>
<tr><td>20 Crew-weeks, risk score, sensitivity</td><td>LH ÷ crew ÷ 40; matrix; labor +15%</td><td class="num">From sheets; $9,632 left</td></tr>
</tbody></table></div>`,
  body: `<p>Header: project, GC or agency, bid date, plan and addenda dates, estimator, reviewer, markup-or-margin rule, truck rule. Footer: alternates and unit prices at the same markups; sign-off by estimator, reviewer, owner, with date. Lock formula cells; type only in input cells.</p>`
},

{ h: "Stress test: overruns and cash flow",
  lead: "Before you sign, see what's left of the profit if things go wrong, and how deep the job takes you into cash.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Retail pad what-if (net $18,452 on $209,800)</th><th class="num">Cost added</th><th class="num">Net left</th></tr></thead>
<tbody>
<tr><td>Labor 15% over ($58,800 × 0.15)</td><td class="num">$8,820</td><td class="num">$9,632 (4.6%)</td></tr>
<tr><td>Materials 5% over quote</td><td class="num">$3,120</td><td class="num">$15,332 (7.3%)</td></tr>
<tr><td>3 weeks longer (job overhead $10,600 ÷ 10 wk × 3)</td><td class="num">$3,180</td><td class="num">$15,272 (7.3%)</td></tr>
<tr><td><strong>All three</strong></td><td class="num"><strong>$15,120</strong></td><td class="num"><strong>$3,332 (1.6%)</strong></td></tr>
<tr><td>Price cut 5% to win</td><td class="num">$10,490 less income</td><td class="num">$7,962 (3.8%)</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Month (paid 30 days after billing, 5% retention)</th><th class="num">Costs paid</th><th class="num">Billed</th><th class="num">Received</th><th class="num">Running cash</th></tr></thead>
<tbody>
<tr><td>1</td><td class="num">$62,000</td><td class="num">$72,000</td><td class="num">$0</td><td class="num">−$62,000</td></tr>
<tr><td>2</td><td class="num">$58,000</td><td class="num">$80,000</td><td class="num">$68,400</td><td class="num">−$51,600</td></tr>
<tr><td>3</td><td class="num">$40,614</td><td class="num">$57,800</td><td class="num">$76,000</td><td class="num">−$16,214</td></tr>
<tr><td>4</td><td class="num">$0</td><td class="num"></td><td class="num">$54,910</td><td class="num">+$38,696</td></tr>
<tr><td>Retention release</td><td class="num"></td><td class="num"></td><td class="num">$10,490</td><td class="num">+$49,186 (= gross profit)</td></tr>
</tbody></table></div>
<p>Financing about $45,000 for 3 months at 9%: $45,000 × 0.09 × 3 ÷ 12 = <strong>$1,012.50</strong> out of profit unless priced.</p>`,
  body: `<p>Labor is the biggest risk here: a 15% overrun eats half the profit. If you aren't sure of your production rates, cutting price is a bad bet. Payroll is weekly, materials net 30, rentals up front; pay applications are monthly and paid weeks later, minus retention (<a href="#m16-1">Module 16</a>).</p>`,
  watch: `<p>Retention held through a long establishment period can wait many months. Material-heavy jobs (box trees, controllers, backflow) need the most cash early; plan it before you win (<a href="#m3-1">Module 3</a>).</p>`
},

{ h: "Worked bid 1 · Small private job",
  lead: "Poway HOA (homeowners association) entry renovation, direct contract: drip, 3 valves, planting, mulch. Bid $26,200; walk-away $23,842.51. Practice numbers.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Math</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Materials (7.75% tax, delivery)</td><td>Quotes</td><td class="num">$9,850.00</td></tr>
<tr><td>Labor</td><td>196 LH × $36.04</td><td class="num">$7,063.84</td></tr>
<tr><td>Equipment</td><td>Trencher 2 days, dump trailer</td><td class="num">$1,150.00</td></tr>
<tr><td>Supervision · dump fees</td><td>6 h × $55 · 3 loads × $120</td><td class="num">$330.00 · $360.00</td></tr>
<tr><td><strong>Total cost</strong></td><td></td><td class="num"><strong>$18,753.84</strong></td></tr>
<tr><td>+ Overhead 20%</td><td>$3,750.77</td><td class="num">$22,504.61</td></tr>
<tr><td>+ Profit 15% (small-job policy)</td><td>$3,375.69</td><td class="num">$25,880.30</td></tr>
<tr><td>+ GL 0.9%; no bond</td><td>$232.92</td><td class="num">$26,113.22</td></tr>
<tr><td><strong>Price, rounded up to $100</strong></td><td></td><td class="num"><strong>$26,200</strong></td></tr>
</tbody></table></div>`,
  body: `<p>Walk-away $18,753.84 × 1.20 × 1.05 × 1.009 = $23,842.51 (room $2,357.49). Gross margin ($26,200 − $18,986.76) ÷ $26,200 = 27.5%; net $3,462.47 = 13.2%. Schedule: 196 ÷ 4 ÷ 8 = 6.1 crew-days.</p>`,
  watch: `<p>Fixed costs (mobilization, supervision trips, dump runs) are a large share of small jobs. Don't bid them at big-job markups.</p>`
},

{ h: "Worked bid 2 · Public prime, City of San Diego",
  lead: "Pocket park, landscape and irrigation only, prime at prevailing wage with a bond. Bid $484,102.68; walk-away $462,098.02. Practice numbers.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Basis</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Materials</td><td>Quotes with tax and delivery</td><td class="num">$118,400.00</td></tr>
<tr><td>Labor</td><td>1,640 LH × $86.00 (burdened laborer/tender mix)</td><td class="num">$141,040.00</td></tr>
<tr><td>Equipment · subs (controller power, pads) · 90-day establishment</td><td></td><td class="num">$18,200 · $22,500 · $9,600</td></tr>
<tr><td><strong>Direct cost</strong></td><td></td><td class="num"><strong>$309,740.00</strong></td></tr>
<tr><td>Job overhead</td><td>Supervision $24,600; certified payroll and compliance $4,800; trucks $6,400; toilet and fence $3,900; submittals $2,800</td><td class="num">$42,500.00</td></tr>
<tr><td>Escalation</td><td>2% on materials</td><td class="num">$2,368.00</td></tr>
<tr><td><strong>Total cost</strong></td><td></td><td class="num"><strong>$354,608.00</strong></td></tr>
<tr><td>+ Overhead 20% / profit 10% / GL 0.9% / bond 2.5%</td><td>$70,921.60 / $42,552.96 / $4,212.74 / $11,807.38</td><td class="num"><strong>$484,102.68</strong></td></tr>
</tbody></table></div>`,
  body: `<p>Walk-away (5% minimum): $354,608 × 1.20 × 1.05 × 1.009 × 1.025 = $462,098.02. Gross margin ($484,102.68 − $370,628.12) ÷ $484,102.68 = 23.4%; net 8.8%. Sealed bid: no pencil-sharpening call, so decide profit before submitting.</p>`,
  watch: `<p>Price what a prime carries that a sub doesn't: SLBE/ELBE (Small and Emerging Local Business Enterprise) outreach and forms, the DAS 140 (Division of Apprenticeship Standards contract award notice), weekly certified payroll, and the City's traffic control and SWPPP (storm water pollution prevention plan) items if yours (<a href="#m2-1">Module 2</a>, <a href="#m11-1">11</a>, <a href="#m14-1">14</a>).</p>`
},

{ h: "Spreading markup: the factor method",
  lead: "Factor = total bid ÷ total cost. Every unit price = unit cost × factor, so every item carries the same markup.",
  body: `<ol class="steps">
<li><div><b>Cost each item</b>Including its share of job overhead if you spread that too.</div></li>
<li class="hl"><div><b>Factor and multiply</b>Round unit prices to the cent.</div></li>
<li><div><b>Extend and close</b>Adjust one large-quantity unit price by a cent, or a lump sum, to land on the total.</div></li>
<li><div><b>Recheck every extension</b>On Caltrans bids the unit price governs if the extension disagrees.</div></li>
</ol>`,
  ex: `<p>Bid 2: $484,102.68 ÷ $354,608 = <strong>1.3652</strong>. A 1-gallon at $14.20 cost → $19.39; a 1½" valve at $410.00 → $559.73.</p>`,
  watch: `<p>Balanced prices protect you when quantities change and make your bid history meaningful. Front-loading is covered two slides on.</p>`
},

{ h: "Caltrans TRO and mobilization rules",
  lead: "If a Caltrans job has a TRO item, all time-related overhead goes there and nowhere else. Mobilization pays setup and bond, with early payment capped by law.",
  body: `<ul>
<li><strong>TRO pays</strong> field overhead (PMs, superintendents, field office) and home-office overhead for the time to do the work. “You must exclude the time-related overhead from every other bid item price.” Not included: mobilization, permits, licenses, one-time costs, subs' overhead.</li>
<li><strong>Quantity:</strong> working days, excluding plant establishment days. Paid per working day up to 20% of total bid ÷ original working days; the balance when all non-establishment work is done. Overruns are paid at bid price to 149% of quantity; beyond that either side may seek an adjustment backed by a CPA audit.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Mobilization: when this share of the original contract is earned</th><th>Caltrans may pay up to the lesser of</th></tr></thead>
<tbody>
<tr><td>5%</td><td>50% of mobilization, or 5% of contract</td></tr>
<tr><td>10%</td><td>75%, or 7.5%</td></tr>
<tr><td>20%</td><td>95%, or 9.5%</td></tr>
<tr><td>50%</td><td>100%, or 10%</td></tr>
<tr><td>All work complete</td><td>Any mobilization above 10% of contract</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>11-428704, item 2 TRO, 120 working days:</strong> six bidders $250–$1,500/day; winner ACCU $600 = $72,000, about 6% of its $1,176,120. One bidder on 11-422004 put $1/day: study it, don't copy it. <strong>Item 70 mobilization share:</strong> ACCU $20,000 = 1.7% · Diversified $99,100 = 8.4% · Griffith $58,000 = 4.7% · Blue Pacific $120,000 = 7.5% · Mercer-Fraser $330,000 = 10.0% · Marina $80,000 = 7.2%. Your TRO: $1,680/day overhead × about 30% of company work ≈ $500/day plus field supervision, inside the real range (<a href="#m15-1">Module 15</a>).</p>`,
  src: "Caltrans 2018 Standard Specifications 9-1.11, 9-1.16D; Public Contract Code § 10264(a); Bid Summaries 11-428704 items 2 and 70, 11-422004."
},

{ h: "Worked bid 3 · Caltrans unit price bid",
  lead: "60 working days plus establishment: TRO carries overhead, work items carry profit only, mobilization carries setup and bond. Bid $151,866. Practice numbers.",
  ex: `<p><strong>TRO:</strong> $1,680 × 20% job share = $336 + supervision 2 h × $57 = $114 → <strong>$450/day × 60 = $27,000</strong>.</p>
<div class="tablewrap"><table>
<thead><tr><th>Work item (cost × 1.10, no overhead)</th><th class="num">Qty</th><th class="num">Unit cost</th><th class="num">Unit price</th><th class="num">Extension</th></tr></thead>
<tbody>
<tr><td>Plant (Group A), 1-gallon</td><td class="num">1,500 EA</td><td class="num">$13.20</td><td class="num">$14.52</td><td class="num">$21,780.00</td></tr>
<tr><td>Plant (Group B), 5-gallon</td><td class="num">200 EA</td><td class="num">$34.50</td><td class="num">$37.95</td><td class="num">$7,590.00</td></tr>
<tr><td>Wood mulch</td><td class="num">150 CY</td><td class="num">$62.00</td><td class="num">$68.20</td><td class="num">$10,230.00</td></tr>
<tr><td>1" plastic pipe (Sch 40) (supply line)</td><td class="num">3,000 LF</td><td class="num">$5.10</td><td class="num">$5.61</td><td class="num">$16,830.00</td></tr>
<tr><td>Pop-up sprinkler assembly (gear driven)</td><td class="num">120 EA</td><td class="num">$88.00</td><td class="num">$96.80</td><td class="num">$11,616.00</td></tr>
<tr><td>1½" remote control valve</td><td class="num">10 EA</td><td class="num">$520.00</td><td class="num">$572.00</td><td class="num">$5,720.00</td></tr>
<tr><td>Plant establishment work</td><td class="num">1 LS</td><td class="num">$38,000</td><td class="num">$41,800</td><td class="num">$41,800.00</td></tr>
<tr><td colspan="4"><strong>Work items</strong> (cost $105,060)</td><td class="num"><strong>$115,566.00</strong></td></tr>
</tbody></table></div>
<p><strong>Mobilization:</strong> move-in/out $3,200 + setup and first submittals $1,800 = $5,000 × 1.10 = $5,500. Bond is 2.5% of the final total: ($115,566 + $27,000 + $5,500) ÷ 0.975 = $151,862.56, bond $3,796.56, mobilization $9,296.56 → <strong>$9,300</strong>.</p>
<div class="tablewrap"><table>
<thead><tr><th>Bid</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>TRO 60 WDAY (working days) × $450 + work items + mobilization</td><td class="num"><strong>$151,866.00</strong></td></tr>
<tr><td>Check: mobilization $9,300 ÷ $151,866</td><td class="num">6.1% (under 10%, all paid during the job)</td></tr>
<tr><td>Check: TRO cap 20% × $151,866 ÷ 60</td><td class="num">$506.22/day (≥ $450)</td></tr>
<tr><td>Check: bond 2.5% × $151,866</td><td class="num">$3,796.65 (covered)</td></tr>
</tbody></table></div>`,
  watch: `<p>Unit costs include taxed material, prevailing wage labor, equipment and job costs. Any home-office cost kept out of TRO goes in the items, never both. Real jobs add traffic control, storm water and job site management items; price each (<a href="#m15-1">Module 15</a>).</p>`,
  src: "Caltrans 2018 Standard Specifications 9-1.11 and 9-1.16; Public Contract Code § 10264(a)."
},

{ h: "Real numbers · TRO and mobilization on 5 Caltrans jobs",
  lead: "Winners kept TRO at about 2–6% of the bid and mobilization under 10%. None used these items to front-load.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Contract · winner</th><th class="num">Winning bid</th><th class="num">TRO/day × days</th><th class="num">TRO share</th><th class="num">Mobilization</th><th class="num">Mob. share</th></tr></thead>
<tbody>
<tr><td>11-422004 · Diversified Landscape</td><td class="num">$557,307.25</td><td class="num">$480 × 60</td><td class="num">5.2%</td><td class="num">$39,500</td><td class="num">7.1%</td></tr>
<tr><td>11-428704 · ACCU Construction</td><td class="num">$1,176,120.00</td><td class="num">$600 × 120</td><td class="num">6.1%</td><td class="num">$20,000</td><td class="num">1.7%</td></tr>
<tr><td>11-431064 · Griffith Company</td><td class="num">$4,247,463.10</td><td class="num">$600 × 120</td><td class="num">1.7%</td><td class="num">$159,000</td><td class="num">3.7%</td></tr>
<tr><td>11-428804 · PAL General Engineering</td><td class="num">$5,468,945.45</td><td class="num">$900 × 200</td><td class="num">3.3%</td><td class="num">$246,500</td><td class="num">4.5%</td></tr>
<tr><td>11-430674 · Diversified Landscape</td><td class="num">$11,546,030.50</td><td class="num">$1,640 × 200</td><td class="num">2.8%</td><td class="num">$248,000</td><td class="num">2.1%</td></tr>
</tbody></table></div>
<p>TRO per day rose with job size. Across all 26 counted bids: median TRO $780/day, median mobilization $273,000 (driven by the big jobs).</p>`,
  src: "Caltrans Bid Summaries for 11-422004, 11-428704, 11-431064, 11-428804 and 11-430674 (Real Bid Lab data), items 090100 (TRO) and 999990 (mobilization). Medians exclude bids flagged non-responsive or declined."
},

{ h: "Front-loading and unbalanced bids",
  lead: "Shifting money between items keeps the total but changes when you're paid and what happens when quantities change. The safe default is every item at real cost plus its share.",
  body: `<ul>
<li><strong>Front-loading:</strong> extra money in early items (mobilization, removals, mainline), less in late ones (establishment).</li>
<li><strong>Unbalanced:</strong> item prices that don't reflect real cost plus a fair share of overhead and profit.</li>
<li><strong>Risks:</strong> Caltrans adjusts unit prices when a quantity goes above 125% or below 75% (Standard Specifications 9-1.06), so an overloaded item that's cut or an underpriced item that overruns wipes out the move. An eliminated item pays only costs incurred. Federal-aid bids both mathematically and materially unbalanced can lose FHWA (Federal Highway Administration) concurrence. Many local agencies may reject unbalanced bids; read the instructions to bidders.</li>
</ul>`,
  ex: `<p>On 11-428704 bidders priced plant establishment from $10,000 to $300,000 (<a href="#m15-1">Module 15</a>). Low on a late item and high on an early one is the pattern reviewers look for.</p>`,
  deeper: `<p>23 CFR (Code of Federal Regulations) 635.102: <em>mathematically unbalanced</em> = items not reflecting reasonable actual cost plus proportionate profit, overhead and indirect cost; <em>materially unbalanced</em> = reasonable doubt the award gives the lowest ultimate cost. Under 635.114 a merely mathematically unbalanced bid may be awarded; when both, FHWA acts to protect the federal interest. The 2018 Caltrans Standard Specifications have no separate unbalanced-bid section; the changed-quantity rules in 9-1.06 are what bite.</p>`,
  src: "Caltrans 2018 Standard Specifications 9-1.06A–D; FHWA summary of 23 CFR 635 (fhwa.dot.gov/construction/contracts/910814.cfm)."
},

{ h: "Alternates and unit price extras",
  lead: "Price alternates and extras at the base-bid markups, and deduct only cost that really goes away.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Kind</th><th>Price</th></tr></thead>
<tbody>
<tr><td>Add alternate</td><td>Direct cost + added job overhead, × markups</td></tr>
<tr><td>Deduct alternate</td><td>Only cost that goes away, × markups; round down. Mobilization and supervision usually stay.</td></tr>
<tr><td>Unit price extra</td><td>Unit cost × markups, plus a small-quantity premium if needed</td></tr>
</tbody></table></div>`,
  ex: `<p>Factor 1.20 × 1.10 × 1.009 = 1.3319. <strong>Add:</strong> 8 trees 24" → 36" box, $4,200 added cost → $5,593.98 → <strong>$5,600</strong>. <strong>Deduct:</strong> drip in parking islands, $3,000 that goes away → $3,995.70 → offer <strong>$3,900</strong>. <strong>Extra 1-gallon:</strong> $7.94 material + 0.12 LH × $36.04 = $12.26 × 1.3319 = <strong>$16.33</strong>.</p>`,
  watch: `<p>On public bids, read whether alternates count toward low bidder. Presentation in private proposals: <a href="#m13-1">Module 13</a>.</p>`
},

{ h: "Final review",
  lead: "Check the number four ways (math, benchmarks, market, gut), close every item on the checklist, then round.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Check</th><th>Pass when</th></tr></thead>
<tbody>
<tr><td>Addenda</td><td>Every addendum acknowledged and its quantities priced</td></tr>
<tr><td>Scope</td><td>Every bid item or spec section priced, excluded or clarified</td></tr>
<tr><td>Math</td><td>Foots and cross-foots; every quantity × unit price = extension; one big item recomputed by hand</td></tr>
<tr><td>Quotes</td><td>Material and sub quotes unexpired and leveled</td></tr>
<tr><td>Labor</td><td>Private or current prevailing wage with increases; work windows applied</td></tr>
<tr><td>Markups</td><td>Forward overhead rate; profit from policy and risk score; walk-away in its box</td></tr>
<tr><td>Double counting</td><td>Each risk in one place</td></tr>
<tr><td>Benchmarks</td><td>Cost per SF, per tree, per head, labor % vs. your finished jobs and bid data; gaps explained, not adjusted away</td></tr>
<tr><td>Market</td><td>Public: engineer's estimate and bid tabs. Private: GC feedback from past bids</td></tr>
<tr><td>Gut</td><td>Would you sign this tomorrow and explain every layer to the owner?</td></tr>
<tr><td>Second person</td><td>Reviewer initials after the last change; owner signs</td></tr>
</tbody></table></div>
<p><strong>Round</strong> private lump sums up to $100 or $500. Never round extended public unit prices.</p>`,
  ex: `<p>The 11-428704 winner was 22% under the engineer's estimate. If you're right at the estimate, you may be high (<a href="#m15-1">Module 15</a>).</p>`
},

{ h: "Bid history: tune markup with data",
  lead: "Review the bid log quarterly by job type. A big distance from low is usually cost or scope, not markup.",
  body: `<p>Log every bid in the <a href="https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP" target="_blank" rel="noopener">Commercial Bid Tracker</a>. Hit rate = won ÷ submitted. Distance from low = (yours − low) ÷ low. Money left on the table = (2nd − yours) ÷ yours.</p>
<div class="tablewrap"><table>
<thead><tr><th>First 10 bids (practice)</th><th class="num">Bids</th><th class="num">Won</th><th class="num">Avg. result</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Private small: $86,400, $64,200, $42,800 (2nd $91,200, $70,900, $49,900)</td><td class="num">3</td><td class="num">3</td><td class="num">10.9% left</td><td>Try 2–3 points more profit; watch hit rate</td></tr>
<tr><td>Private large: +6.8%, +10.7%, +5.6%, +13.0%, +5.7% over low</td><td class="num">5</td><td class="num">0</td><td class="num">+8.4%</td><td>Bigger than the whole profit: check crew size, rates, material quotes</td></tr>
<tr><td>Public: lost +10.0%; won $261,000 vs. $264,300</td><td class="num">2</td><td class="num">1</td><td class="num">1.3% left</td><td>Too few; compare unit prices item by item</td></tr>
</tbody></table></div>`,
  watch: `<p>Ten bids is a small sample. Change one thing at a time, write down what and when, and check next quarter.</p>`
},

{ h: "Learning from public bid results",
  lead: "Public results show where the market was. On two of five real Caltrans jobs, first and second were under 0.5% apart.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Contract</th><th class="num">Winning bid</th><th class="num">2nd place</th><th class="num">Left on table</th><th class="num">Winner vs. engineer's estimate</th></tr></thead>
<tbody>
<tr><td>11-422004</td><td class="num">$557,307.25</td><td class="num">$687,805.00</td><td class="num">23.4%</td><td class="num">36.4% under</td></tr>
<tr><td>11-428704</td><td class="num">$1,176,120.00</td><td class="num">$1,179,705.30</td><td class="num">0.3%</td><td class="num">22.4% under</td></tr>
<tr><td>11-431064</td><td class="num">$4,247,463.10</td><td class="num">$4,254,436.10</td><td class="num">0.2%</td><td class="num">0.1% under</td></tr>
<tr><td>11-428804</td><td class="num">$5,468,945.45</td><td class="num">$5,795,426.00</td><td class="num">6.0%</td><td class="num">8.2% under</td></tr>
<tr><td>11-430674</td><td class="num">$11,546,030.50</td><td class="num">$12,177,446.25</td><td class="num">5.5%</td><td class="num">3.0% over</td></tr>
</tbody></table></div>
<p>Gaps of $3,585.30 (11-428704) and $6,973.00 (11-431064): a small markup change flips the result. Elsewhere the winner could have bid 5–23% higher. Winners ran from 36% under to 3% over the engineer's estimate: a poor guide. Second place is the next counted bid.</p>`,
  watch: `<p>After every public bid, put your item prices next to the winner's and the median and write down the three biggest differences (<a href="#m15-1">Module 15</a>).</p>`,
  src: "Caltrans Bid Summaries and engineer's estimates for 11-422004, 11-428704, 11-431064, 11-428804 and 11-430674 (Real Bid Lab data)."
},

{ h: "Mistakes that cost money",
  lead: "The last hour before a bid is when expensive mistakes happen.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Cost</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Markup used when the owner meant margin</td><td>$5,000 per $100,000 at a “20%” target</td><td>Rule at the top of the recap</td></tr>
<tr><td>One flat O&amp;P (overhead and profit) %</td><td>Overhead silently uncovered</td><td>Separate lines</td></tr>
<tr><td>Overhead rate doesn't match estimating</td><td>Trucks priced twice or never</td><td>Written company rule</td></tr>
<tr><td>Same risk in several places</td><td>Too high, job lost</td><td>One home per risk</td></tr>
<tr><td>Bond on a private bid that didn't require one</td><td>2–3% high</td><td>Separate add</td></tr>
<tr><td>Overhead in TRO and in items</td><td>Too high</td><td>TRO only</td></tr>
<tr><td>Bid-day cut with no walk-away; cutting cost or overhead to chase a GC's “you're 8% high”</td><td>Work at a loss; 8% is usually scope</td><td>Ask what differs; cut only profit, only to walk-away</td></tr>
<tr><td>Late addendum not carried through</td><td>Total ≠ items</td><td>Unit cost × markups, then second-person check</td></tr>
<tr><td>Raising price to the engineer's estimate</td><td>Lost bid</td><td>Check scope and quantities; hold your number</td></tr>
<tr><td>Alternates without markup</td><td>Free work</td><td>Base-bid markups</td></tr>
</tbody></table></div>`
},

{ t: "terms", h: "Words to know",
  lead: "Module 10 terms. Full list: <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Job overhead", "Indirect cost caused by one job but not one item: supervision, trucks, temporary facilities."],
    ["Company (general) overhead", "Cost of running the business, shared by all jobs."],
    ["P&L", "Profit and loss (income) statement: revenue, job costs, overhead, net income."],
    ["Overhead rate", "Company overhead ÷ direct job cost."],
    ["Break-even volume", "Job cost you must win for overhead markup to cover all company overhead."],
    ["Markup / margin", "Profit as a percent of cost / of price."],
    ["Gross / net margin", "Price minus job cost / minus job cost and overhead, as a percent of price."],
    ["Walk-away price", "Lowest price you'll bid: cost + overhead + minimum profit + insurance and bond."],
    ["Markup decision matrix", "Risk scorecard that sets where in the profit range you land."],
    ["Bond premium", "Surety's charge, a percent of the contract."],
    ["OCIP / CCIP", "Owner- or contractor-controlled insurance program covering everyone on a job."],
    ["Escalation", "Expected price increase between bid and purchase."],
    ["Contingency", "Money for a named risk that can't be priced exactly."],
    ["Double counting", "Pricing one risk in more than one place."],
    ["Sensitivity test", "Changing one cost at a time to see the profit left."],
    ["Retention", "Share of each payment held until completion."],
    ["Factor method", "Spreading markup: every item's cost × (total bid ÷ total cost)."],
    ["Time-related overhead (TRO)", "Caltrans item paying field and home-office overhead per working day."],
    ["Mobilization", "Setup item; Caltrans pays it in steps under PCC 10264."],
    ["Front-loading / unbalanced bid", "Extra money in early items / item prices not reflecting real cost plus fair share."],
    ["Add / deduct alternate", "Price to add or remove defined work at the owner's option."],
    ["Engineer's estimate", "The agency's own cost estimate, published with results."],
    ["Money left on the table", "(2nd place − winning bid) ÷ winning bid."],
    ["Hit rate", "Bids won ÷ bids submitted."],
    ["Bid recap sheet", "One page showing every layer of the price, signed off by the owner."]
  ]
},

{ t: "quiz", id: "m10", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "Cost is $80,000 and the owner wants a 20% margin. Price?", a: ["$96,000", "$100,000", "$104,000"], c: 1, why: "Price = cost ÷ (1 − margin) = $80,000 ÷ 0.80. $96,000 is a 20% markup (16.7% margin)." },
    { q: "Your P&L carries all trucks in overhead (rate 28.7%), but you use last year's 19.4% figure computed with trucks in job cost, and your estimates don't price trucks. Result?", a: ["Trucks charged twice", "Trucks recovered nowhere; bids short about 9 points of overhead", "No effect"], c: 1, why: "The rate must match the estimating rule. Here trucks fall between the two and are never recovered." },
    { q: "Overhead budget $420,000 at 20% on cost. You win $1,500,000 of job cost. Overhead shortfall?", a: ["$0", "$120,000", "$84,000"], c: 1, why: "Recovered $1,500,000 × 0.20 = $300,000; $420,000 − $300,000 = $120,000." },
    { q: "Total cost $50,000; overhead 20%, minimum profit 5%, GL 0.9%, no bond. Walk-away price?", a: ["$62,500", "$63,567", "$60,000"], c: 1, why: "$50,000 × 1.20 × 1.05 × 1.009 = $63,567. $62,500 adds percents instead of stepping and drops GL; $60,000 has no profit or GL." },
    { q: "You slowed the trench rate for rock, added 5% waste, carried $3,000 rock contingency and bumped profit for risk. Problem?", a: ["None; safer", "One risk priced up to four times", "Contingency isn't allowed on private jobs"], c: 1, why: "Each risk gets one home. Stacking makes you high and loses the bid." },
    { q: "Caltrans job with a TRO item. A bidder also loads 20% company overhead into every work item. Consequence?", a: ["Required by 9-1.11", "Overhead counted twice and the bid is high", "Overhead moves to mobilization automatically"], c: 1, why: "9-1.11: exclude time-related overhead from every other item price." },
    { q: "On a $1,000,000 Caltrans contract you bid $150,000 mobilization. When is the part above $100,000 paid?", a: ["First progress payment", "At 50% earned", "After all work is complete"], c: 2, why: "PCC 10264(a): mobilization above 10% of the original contract waits until completion." },
    { q: "Work items total $120,000, TRO $30,000, mobilization before bond $6,000, bond 2.5% of the final total, carried in mobilization. Total bid?", a: ["$159,900", "$160,000", "$156,000"], c: 1, why: "$156,000 ÷ 0.975 = $160,000; the $4,000 bond goes in mobilization. $159,900 takes 2.5% of the pre-bond total and leaves the bond short." },
    { q: "Deduct alternate: removing drip saves $3,000 of material and labor; supervision and mobilization don't change. Markup factor 1.3319. Offer?", a: ["$3,900", "$4,600", "$3,000"], c: 0, why: "$3,000 × 1.3319 = $3,995.70, rounded down. Fixed costs stay, so don't deduct them." },
    { q: "Five large private bids averaged 8.4% over low; your profit is 8%. First move?", a: ["Cut profit to zero", "Check scope, crew size, production rates and material quotes", "Raise overhead to compensate"], c: 1, why: "The gap exceeds the whole profit, so cost or scope is the cause." }
  ]
},

{ t: "practice", id: "m10", h: "Practice assignments",
  lead: "Use real company numbers. Finish with an overhead rate, a markup policy and a working recap sheet.",
  items: [
    { h: "Calculate the company's overhead rate", hrs: 0.75, d: "<p>From last year's P&amp;L, sort every account into job cost or overhead with the CPA and write the truck and equipment rule. Compute last year's rate, next year's forward rate with commercial-division costs, daily overhead, and break-even volume.</p>" },
    { h: "Set markup policy, bond and insurance rates", hrs: 0.5, d: "<p>With the owner: profit ranges by job type, minimum profit for the walk-away, spreading method, and markup-or-margin wording, on one page. Get the surety's bond rate schedule and the agent's GL rating basis, rate and endorsement costs.</p>" },
    { h: "Build the recap sheet", hrs: 0.5, d: "<p>Build the 20-line recap with locked formulas, walk-away, margins, cost per SF, risk score and a labor +15% line. Test it on the retail pad: $209,789.48 before rounding.</p>" },
    { h: "Take a real estimate to a final number", hrs: 0.75, d: "<p>Take a takeoff priced in Modules 6–9. Score it on the matrix, run the recap, compute walk-away, margins and sensitivity, lay out monthly cash flow with real payment and retention terms, run the final review, and have the owner review it.</p>" },
    { h: "Analyze TRO and mobilization on real bids", hrs: 0.5, d: "<p>In <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a> and one other <a href=\"#lab\">Real Bid Lab</a> job with a TRO item, compute each bidder's mobilization share and TRO total. Compare your company's daily overhead share on that job to the range.</p>" },
    { h: "Spread a public bid into items", hrs: 0.5, d: "<p>Take a 6–10 item public bid form (Real Bid Lab or City of San Diego). Cost each item, build the total with markups, spread with the factor method, close the rounding on one item and check every extension.</p>" },
    { h: "Start the bid history review", hrs: 0.25, d: "<p>Enter every bid so far in the <a href=\"https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP\" target=\"_blank\" rel=\"noopener\">Commercial Bid Tracker</a>. Compute hit rate, distance from low and money left by job type, and set a quarterly review with the owner.</p>" }
  ]
},

{ h: "Module 10 summary",
  lead: "Turn cost into a price you can defend, layer by layer, and know the lowest number you'll accept before bid day.",
  body: `<ul>
<li>Direct cost → job overhead → allowances → company overhead → profit → insurance and bond, each visible on the recap.</li>
<li>Overhead rate from the P&amp;L, forward-looking, matched to how you estimate, spread one way; track break-even volume.</li>
<li>Price = cost ÷ (1 − margin). Stepped markups multiply.</li>
<li>Profit from policy and the risk matrix; walk-away = cost × overhead × minimum profit × insurance and bond.</li>
<li>Escalation and contingency only for named reasons; each risk priced once; alternates at base markups.</li>
<li>Stress-test labor overruns and cash flow before signing.</li>
<li>Caltrans: overhead in TRO only, mobilization honest and under 10%, factor method for items, no unbalancing.</li>
<li>Final review, then learn from bid results and your bid log every quarter.</li>
</ul>
<p><strong>Next: <a href="#m11-1">Module 11 · Prevailing Wage and Public Works Compliance</a></strong></p>`
}
]
});
