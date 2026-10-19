(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 9, hours: 6.5, title: "Labor, Production Rates and Equipment",
slides: [

{ t: "cover",
  h: "Labor, Production Rates and Equipment",
  lead: "Two bidders buy the same pipe at the same price. The one who knows its crews' real output and real cost per hour wins the job and makes money on it.",
  objectives: [
    "Build burdened hourly, daily and per-labor-hour crew rates for private and prevailing wage work",
    "Price overtime, crew size, travel and paid-but-unproductive time",
    "Build a production rate library from your own timecards and adjust it for site conditions and work windows",
    "Turn a takeoff into labor hours and cost",
    "Price owned and rented equipment, including the own-or-rent break-even",
    "Benchmark all-in unit prices against real Caltrans bids and feed finished jobs back into your rates"
  ],
  time: [["Reading and slides", "1.75 h"], ["Practice assignments", "4.75 h"], ["Module total", "6.5 h"]],
  body: "<p>Production rates and percentages here are practice numbers unless a source is named. Replace them with your own.</p>"
},

{ h: "The labor formula and pricing order",
  lead: "Labor cost = quantity × labor hours per unit × burdened cost per labor hour. Equipment cost = machine time × rate + every move.",
  body: `<p>One <strong>labor hour (LH)</strong> is one worker for one hour. Price in this order, each number in its own cell:</p>
<ol class="steps">
<li><div><b>1 · Wage type</b>Private, or prevailing wage from the DIR (California Department of Industrial Relations) determination (<a href="#m11-1">Module 11</a>).</div></li>
<li><div><b>2 · Crew rates</b>Wage, burden and benefits per hour, per day, per LH.</div></li>
<li class="hl"><div><b>3 · A production rate on every takeoff line</b>LH per unit, from your library.</div></li>
<li><div><b>4 · Site and window adjustments</b>Slope, rock, access, closures, night work.</div></li>
<li><div><b>5 · Crew-day check</b>Total LH ÷ crew size ÷ 8 must fit the schedule.</div></li>
<li><div><b>6 · Equipment</b>Owned rates, rentals, delivery, fuel, moves.</div></li>
<li><div><b>7 · Time-based costs</b>Supervision, trucks, small tools, travel.</div></li>
<li><div><b>8 · Benchmark</b>All-in unit prices vs. past jobs and Caltrans bids.</div></li>
<li class="hl"><div><b>9 · Close the loop</b>After the job, estimated vs. actual hours by cost code.</div></li>
</ol>`,
  watch: `<p>Rate errors multiply. On 11-428704 one bidder priced iceplant cuttings at $6.00 each instead of about $0.80, adding about $322,000 (<a href="#m15-1">Module 15</a>).</p>`
},

{ h: "Labor burden",
  lead: "Burden is every cost an hour of pay carries beyond the wage. Get each piece from its real source, never from another company's percent.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>Basis</th><th>Source</th></tr></thead>
<tbody>
<tr><td>FICA (Federal Insurance Contributions Act)</td><td>Employer 6.2% Social Security (to the yearly wage cap) + 1.45% Medicare = 7.65% of wages</td><td>IRS</td></tr>
<tr><td>FUTA (federal unemployment), California UI (unemployment insurance) and ETT (employment training tax)</td><td>% of each worker's first wages each year; rates change yearly</td><td>CPA or payroll service</td></tr>
<tr><td>Workers' compensation</td><td>Rate per $100 of payroll by class code × your experience mod (claims history). Landscape is usually class 0042.</td><td>Insurance agent</td></tr>
<tr><td>General liability</td><td>On payroll or sales</td><td>Insurance agent</td></tr>
<tr><td>Benefits (fringe)</td><td>Health, paid time off, retirement; on public work, the determination's fringe</td><td>Company costs; DIR</td></tr>
</tbody></table></div>
<p><strong>Spreadsheet:</strong> one row per worker (wage, burden = wage × total burden %, benefits, cost per hour). Crew per hour = sum of rows; per day = × paid hours; per LH = ÷ workers. Burden applies to the wage on the check, not to fringe paid into plans (confirm with CPA and agent). Keep a pure crew rate and a separate line with truck and tools. Label each sheet with crew type and date.</p>`,
  watch: `<p>Workers' comp is usually the biggest burden item for landscape crews.</p>`,
  deeper: `<p>California has had a FUTA credit reduction in recent years, raising the federal rate. WCIRB (Workers' Compensation Insurance Rating Bureau of California) class 0042 includes sprinkler and drainage work when the employer is mainly doing landscape work at that job; irrigation-only work can fall in another class.</p>`,
  src: "IRS Tax Topic 751; EDD, Federal Unemployment Tax Act page; WCIRB classification 0042, Landscape Gardening."
},

{ h: "Paid hours vs. productive hours",
  lead: "A crew paid 8 hours rarely installs for 8. Put the non-producing time in the rates or on its own line, never both.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Practice day (time your own crews)</th><th class="num">Hours</th></tr></thead>
<tbody>
<tr><td>Load at yard 0.50 · drive both ways 1.00 · safety talk and layout 0.25 · cleanup 0.25</td><td class="num">2.00</td></tr>
<tr><td><strong>Productive</strong> (8.00 − 2.00), 75% of paid</td><td class="num"><strong>6.00</strong></td></tr>
</tbody></table></div>
<ul>
<li><strong>Best:</strong> rates built from full-day timecards already contain this time.</li>
<li><strong>Otherwise:</strong> clean install rates plus a line of days × crew size × non-producing hours.</li>
<li>A book rate that assumes 8 productive hours understates your cost by 8 ÷ 6 = 1.33×.</li>
</ul>`,
  watch: `<p>When crews must meet at the yard and ride together, the ride is generally paid work time. Confirm your policy with payroll or an employment attorney.</p>`
},

{ h: "Worked example · Private crew rate",
  lead: "Four-person private irrigation crew: $144.16 per crew-hour, $36.04 per LH. Practice wages and rates except FICA.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Math</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>Wages</td><td>Foreman $34 + installer $26 + 2 laborers × $22</td><td class="num">$104.00/h</td></tr>
<tr><td>Burden 25.15%</td><td>FICA 7.65 + unemployment 3.00 + comp 12.00 + liability 2.50; $104.00 × 25.15%</td><td class="num">$26.16</td></tr>
<tr><td>Benefits</td><td>4 × $3.50</td><td class="num">$14.00</td></tr>
<tr><td><strong>Crew per hour</strong></td><td></td><td class="num"><strong>$144.16</strong></td></tr>
<tr><td>Crew per 8-hour day</td><td>× 8</td><td class="num">$1,153.28</td></tr>
<tr><td><strong>Per LH</strong></td><td>÷ 4</td><td class="num"><strong>$36.04</strong></td></tr>
<tr><td>Small tools 3% + crew truck</td><td>$34.60 + $95.00</td><td class="num">$129.60</td></tr>
<tr><td><strong>Crew-day with truck and tools</strong></td><td></td><td class="num"><strong>$1,282.88</strong></td></tr>
</tbody></table></div>`,
  body: `<p>Use $36.04 × LH for item labor; use the crew-day figure to check schedules.</p>`
},

{ h: "Prevailing wage crews",
  lead: "On public work the same crew costs about twice as much per hour. Rebuild every crew from the current determination.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>2026-2 San Diego DIR crew</th><th class="num">Basic (on the check)</th><th class="num">Total hourly</th></tr></thead>
<tbody>
<tr><td>Landscape/Irrigation Fitter (Plumber)</td><td class="num">$47.85</td><td class="num">$76.40</td></tr>
<tr><td>Landscape/Irrigation Laborer × 2</td><td class="num">$95.14</td><td class="num">$153.34</td></tr>
<tr><td>Landscape/Irrigation Tender (within ratio)</td><td class="num">$21.97</td><td class="num">$30.19</td></tr>
<tr><td><strong>Crew</strong></td><td class="num"><strong>$164.96</strong></td><td class="num"><strong>$259.93</strong></td></tr>
</tbody></table></div>
<ul>
<li>Burden on basic wages: $164.96 × 25.15% (example) = $41.49</li>
<li><strong>Crew per hour $301.42 · day $2,411.36 · per LH $75.36</strong> (2.1× the private $36.04)</li>
<li>With 3% tools ($72.34) and $95 truck: $2,578.70 per day</li>
</ul>
<p><strong>2021 federal-aid comparison (11-428704):</strong> fitter $35.30 + $24.10, two Laborer Group 2 at $35.76 + $20.48, Operator Group 4 $50.81 + $27.20. Base $157.63 + fringe $92.26 + burden $39.64 = <strong>$289.53 per crew-hour</strong>. On that job DIR rates were higher and governed.</p>`,
  watch: `<p>Fitter rate applies only within the fitter scope; tenders only within ratio rules; on federal-aid jobs a tender may need the federal laborer rate; machine hours need the Operating Engineer rate. Rates change at least twice a year: pull them from <a href="https://www.dir.ca.gov/oprl/DPreWageDetermination.htm" target="_blank" rel="noopener">DIR</a> on every bid.</p>`,
  src: "DIR SD-102-X-14-2026-1 (Landscape/Irrigation Laborer and Tender); DIR SDI-2026-2 (Landscape/Irrigation Fitter); U.S. DOL General Decision CA20210001 Mod. 12 (11-428704 Addendum 1)."
},

{ h: "Overtime",
  lead: "Overtime costs 1.5× per hour and produces less per hour. Price it only when the schedule forces it, and say so in the proposal.",
  body: `<ul>
<li><strong>California private work:</strong> 1.5× over 8 h/day (to 12), over 40 h/week, and the first 8 h of the 7th consecutive day. 2× over 12 h/day and over 8 h on the 7th day.</li>
<li><strong>Public works:</strong> at least 1.5× basic over 8/day or 40/week, plus each craft's own overtime, Saturday and shift rules (<a href="#m11-1">Module 11</a>).</li>
<li>Burden applies to overtime pay.</li>
</ul>`,
  ex: `<p>$22 laborer, 10-hour day: 8 × $22 + 2 × $33 = $242 vs. $220 straight (+10%). If hours 9 and 10 produce 10% less, each costs 1.5 ÷ 0.9 = 1.67× a normal hour per unit.</p>`,
  watch: `<p>A GC schedule shorter than your crew-days means overtime or a second crew in the price and a stated schedule assumption (<a href="#m13-1">Module 13</a>).</p>`,
  src: "California Labor Code §510; DIR Labor Commissioner Overtime FAQ; Labor Code §§1810–1815."
},

{ h: "Crew size: cost per unit, not per hour",
  lead: "Pick the crew with the lowest cost per unit installed. A bigger crew wins only when there's enough work face to keep it busy.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">Crew A: 3</th><th class="num">Crew B: 5</th></tr></thead>
<tbody>
<tr><td>Makeup</td><td class="num">Foreman + 2 laborers</td><td class="num">Foreman + installer + 3 laborers</td></tr>
<tr><td>Crew per hour (wages × 1.2515 + $3.50/worker)</td><td class="num">$108.12</td><td class="num">$175.19</td></tr>
<tr><td>Heads per crew-hour (your records)</td><td class="num">9</td><td class="num">17</td></tr>
<tr><td>LH per head</td><td class="num">0.333</td><td class="num">0.294</td></tr>
<tr><td><strong>Labor per head</strong></td><td class="num"><strong>$12.01</strong></td><td class="num"><strong>$10.31</strong></td></tr>
</tbody></table></div>
<p>B costs 62% more per hour but 14% less per head: $1,700 saved on 1,000 heads, nothing on a 40-head zone.</p>
<div class="tablewrap"><table>
<thead><tr><th>Crew</th><th>Use for</th><th>Limit</th></tr></thead>
<tbody>
<tr><td>2: lead + helper</td><td>Valves, controllers, repairs, punch</td><td>Someone always waiting on long runs</td></tr>
<tr><td>3–4: foreman + 2–3</td><td>Most zones and planting; base your rates here</td><td>Standard</td></tr>
<tr><td>5–6</td><td>Long open runs, big planting, mulch</td><td>Needs work face and supervision</td></tr>
<tr><td>Split crews</td><td>Trench ahead, install behind</td><td>Slower crew sets the pace</td></tr>
<tr><td>Operator + laborers</td><td>Machine trench, box trees, fine grading</td><td>Operator rate on public work; idle machine</td></tr>
</tbody></table></div>`
},

{ h: "Production rates from your own jobs",
  lead: "Write rates as LH per unit so they fit any crew size, and build them from your own timecards, weighted by quantity.",
  body: `<p>Units per crew-hour = crew size ÷ LH per unit (4 ÷ 0.30 = 13.3 heads per crew-hour).</p>
<ol class="steps">
<li><div><b>Pick 3–5 similar finished jobs</b>Commercial or large residential.</div></li>
<li class="hl"><div><b>Quantities and hours by task</b>Quantities from plans, as-builts or invoices; hours from timecards or daily reports (foreman splits them if needed).</div></li>
<li><div><b>Weighted rate</b>Total hours ÷ total units across jobs, not the average of the job rates.</div></li>
<li><div><b>Record conditions</b>Soil, slope, access, crew size, season. Explain the high and low jobs.</div></li>
</ol>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Spray heads</th><th class="num">Heads</th><th class="num">LH</th><th class="num">LH/head</th></tr></thead>
<tbody>
<tr><td>Job 2311 retail pad</td><td class="num">310</td><td class="num">109</td><td class="num">0.352</td></tr>
<tr><td>Job 2402 small office</td><td class="num">180</td><td class="num">50</td><td class="num">0.278</td></tr>
<tr><td>Job 2418 apartments</td><td class="num">420</td><td class="num">134</td><td class="num">0.319</td></tr>
<tr><td><strong>Weighted</strong></td><td class="num"><strong>910</strong></td><td class="num"><strong>293</strong></td><td class="num"><strong>0.322</strong></td></tr>
</tbody></table></div>
<p>The simple average (0.316) overweights the small job. New standard 0.32 (was 0.30): on a 600-head bid, 12 LH × $36.04 = $432.48 more.</p>`,
  watch: `<p>Online and cost-book rates come from other crews, soils and wages. Use them only as a rough check. Leave a job with a one-time cause (rework, vandalism) out of the average and note why.</p>`
},

{ h: "Rate card and foreman daily report",
  lead: "Each rate gets a card that says where it came from. Each card is fed by a daily report with hours and quantities by cost code.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rate card field</th><th>Example</th><th>Daily report field</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Cost code, task, unit</td><td>03 · spray head with swing joint · EA</td><td>Job, date, weather</td><td>2418, [date], dry soil</td></tr>
<tr><td>Standard rate / range</td><td>0.32 / 0.28–0.35 LH</td><td>Crew and hours each</td><td>Foreman 8, installer 8, laborers 8, 8</td></tr>
<tr><td>Normal conditions</td><td>Flat, normal soil, lateral already in</td><td>Hours by code</td><td>02: 14 · 03: 12 · 04: 4 · travel/load: 2 (= 32)</td></tr>
<tr><td>Crew and source jobs</td><td>Foreman + 3; jobs 2311, 2402, 2418</td><td>Quantity by code</td><td>02: 380 LF · 03: 38 heads · 04: 2 valves</td></tr>
<tr><td>Included / not included</td><td>Swing joint, head, nozzle, adjust, full paid day / trench and lateral (code 02)</td><td>Equipment hours</td><td>Walk-behind trencher 5 h</td></tr>
<tr><td>Adjustments</td><td>2:1 slope ×1.4; tight planters ×1.2</td><td>Delays / extra work</td><td>1 h waiting on GC; 2 heads added (photo)</td></tr>
<tr><td>Updated / by</td><td>[date] / estimator</td><td>Signature</td><td>Foreman</td></tr>
</tbody></table></div>
<p>Use 8–15 cost codes, the same on every job and in every estimate (e.g. 01 mainline, 02 laterals, 03 heads, 04 valves and wire, 05 controller, 10 soil prep, 11 plants, 12 mulch, 20 establishment). Hours by code must add to paid hours.</p>`,
  watch: `<p>Included and not-included lines stop the classic double count: trench priced in the head rate and again in the pipe rate. Delay and extra-work entries are your change-order evidence (<a href="#m16-1">Module 16</a>).</p>`
},

{ h: "Production rate library (practice numbers)",
  lead: "A starter library to practice the math. Normal soil, flat, open site, daytime. Replace every line with your own data before bidding.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Code · task</th><th>Unit</th><th class="num">LH/unit</th></tr></thead>
<tbody>
<tr><td>01 · Hand trench 12", normal soil</td><td>LF</td><td class="num">0.10</td></tr>
<tr><td>01 · Ride-on trencher 18"–24" for main</td><td>LF</td><td class="num">0.02 + machine</td></tr>
<tr><td>01 · Main 2" PVC, lay, glue, test, backfill</td><td>LF</td><td class="num">0.06</td></tr>
<tr><td>01 · Main 3"–4" PVC with thrust blocks, trench to compaction</td><td>LF</td><td class="num">0.12–0.16</td></tr>
<tr><td>02 · Lateral to 1½", machine trench and backfill</td><td>LF</td><td class="num">0.04</td></tr>
<tr><td>02 · Lateral in open trench / sleeve before paving</td><td>LF</td><td class="num">0.03 / 0.08</td></tr>
<tr><td>03 · Spray head / rotor with swing joint</td><td>EA</td><td class="num">0.30 / 0.50</td></tr>
<tr><td>03 · Bubbler or tree well assembly</td><td>EA</td><td class="num">0.40</td></tr>
<tr><td>03 · Drip line on grade, staked</td><td>LF</td><td class="num">0.01</td></tr>
<tr><td>04 · Remote control valve, box, splices / quick coupler</td><td>EA</td><td class="num">1.5 / 0.75</td></tr>
<tr><td>04 · Valve wire in open trench</td><td>LF</td><td class="num">0.005</td></tr>
<tr><td>05 · Controller, mount and connect / backflow 1"–2" with enclosure and pad</td><td>EA</td><td class="num">6–10 / 8–12</td></tr>
<tr><td>06 · Flush, pressure test, coverage test, adjust</td><td>zone</td><td class="num">1.5–2.5</td></tr>
<tr><td>10 · Light clearing / amend and till 6" / hand fine grade</td><td>1,000 SF</td><td class="num">2–4 / 2–3 / 3–5</td></tr>
<tr><td>11 · Groundcover flats or rooted cuttings</td><td>EA</td><td class="num">0.02–0.04</td></tr>
<tr><td>11 · 1-gal / 5-gal / 15-gal staked</td><td>EA</td><td class="num">0.10–0.15 / 0.25–0.35 / 0.75–1.0</td></tr>
<tr><td>11 · 24" box / 36" box, with machine</td><td>EA</td><td class="num">3–4 / 5–7 + machine</td></tr>
<tr><td>12 · Wood mulch 3", wheelbarrow / rock mulch 3", hand</td><td>CY / TON</td><td class="num">0.6–1.0 / 1.0–1.5</td></tr>
<tr><td>13 · Fiber rolls, staked</td><td>LF</td><td class="num">0.02–0.03</td></tr>
<tr><td>Blown mulch, hydroseed</td><td></td><td class="num">Sub quote</td></tr>
</tbody></table></div>`,
  watch: `<p>Controller and backflow hours swing with power, pads and water-agency inspection; read the details each time. Hydroseed on 11-422004, 11-430674 and 11-431064 (item 210430) ran $0.10–$0.25 per SF all-in; subcontract it. Grading, demolition and hardscape rates: <a href="#m17-1">Module 17</a>.</p>`,
  src: "Caltrans Bid Summaries, item 210430: 11-422004 item 43, 11-431064 item 63, 11-430674 item 99."
},

{ h: "Adjusting for site conditions",
  lead: "Apply a factor only to the quantity where the condition exists. One blended rate hides the cost.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Condition</th><th>Effect</th><th>Practice factor</th></tr></thead>
<tbody>
<tr><td>Slope 3:1 / 2:1</td><td>Hand carrying, footing, safety lines</td><td>×1.15–1.3 / ×1.3–1.6</td></tr>
<tr><td>Rock, hardpan, caliche</td><td>Trencher can't cut or wears fast</td><td>×1.5–3, or change method (rock trencher, breaker)</td></tr>
<tr><td>Tight access</td><td>Hand digging, long carries</td><td>×1.2–1.5</td></tr>
<tr><td>Existing utilities</td><td>Potholing, hand dig near lines</td><td>Hours per crossing</td></tr>
<tr><td>Occupied site</td><td>Tenants, traffic, other trades</td><td>×1.1–1.25</td></tr>
<tr><td>Recycled water</td><td>Purple materials, warning tape, signs, separation from potable, inspections; 150 psi (pounds per square inch) tests on 11-428704</td><td>Extra tasks as their own hours</td></tr>
<tr><td>Closures, night work</td><td>Short windows</td><td>Productive ÷ paid hours (work window slide)</td></tr>
</tbody></table></div>`,
  ex: `<p>3,000 LF lateral, 1,000 LF of it on 2:1: 2,000 × 0.04 + 1,000 × 0.04 × 1.5 = 80 + 60 = 140 LH, not 120.</p>`,
  watch: `<p>Rock, slope and access show up on a site walk, rarely on the plan (<a href="#m12-1">Module 12</a>).</p>`
},

{ h: "From takeoff to labor hours",
  lead: "Put a rate beside every takeoff line, sum the hours, then check the total in crew-days.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Spray zone from Module 8</th><th class="num">Qty</th><th class="num">LH/unit</th><th class="num">LH</th></tr></thead>
<tbody>
<tr><td>Spray heads with swing joints</td><td class="num">22 EA</td><td class="num">0.30</td><td class="num">6.6</td></tr>
<tr><td>Lateral (160 LF 1" + 240 LF ¾")</td><td class="num">400 LF</td><td class="num">0.04</td><td class="num">16.0</td></tr>
<tr><td>Valve with box and wiring</td><td class="num">1 EA</td><td class="num">1.5</td><td class="num">1.5</td></tr>
<tr><td>Valve wire</td><td class="num">300 LF</td><td class="num">0.005</td><td class="num">1.5</td></tr>
<tr><td>Flush, test, adjust</td><td class="num">1 LS</td><td class="num">2.0</td><td class="num">2.0</td></tr>
<tr><td colspan="3"><strong>Total</strong></td><td class="num"><strong>27.6</strong></td></tr>
</tbody></table></div>
<p>Labor 27.6 × $36.04 = <strong>$994.70</strong> ($45.21 per head). With Module 8 material ($43.87 per head): $89.08 per head before equipment, overhead and profit. Crew-days: 27.6 ÷ 4 ÷ 8 = 0.86. If your crew can't do this zone in a day, find the rate that's off.</p>`
},

{ h: "Time-based costs: supervision, trucks, tools, travel",
  lead: "Costs that grow with job length are priced per day, per month or per move, and every one of them grows if the schedule slips.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Cost</th><th>How to price</th></tr></thead>
<tbody>
<tr><td>Supervision above foreman (super, PM (project manager) visits, meetings, inspections)</td><td>Days or hours per week × duration; job cost vs. overhead per <a href="#m10-1">Module 10</a></td></tr>
<tr><td>Small tools and consumables</td><td>% of labor (practice 2–5%); check against yearly spend</td></tr>
<tr><td>Crew truck</td><td>Practice: ownership and insurance $13,800/yr ÷ 230 days $60 + fuel 6 gal × $5 $30 + maintenance $5 = <strong>$95/day</strong></td></tr>
<tr><td>Site extras (toilet, test water, storage, fencing, trash)</td><td>Per month</td></tr>
<tr><td>Daily travel</td><td>Paid drive × crew × days, plus truck miles</td></tr>
<tr><td>Mobilization / demobilization</td><td>Load, haul, unload, set up; once per phase</td></tr>
<tr><td>Return trips</td><td>Punch, inspections, establishment visits</td></tr>
<tr><td>Prevailing wage travel and subsistence</td><td>Each craft's Travel PDF on DIR (<a href="#m11-1">Module 11</a>)</td></tr>
</tbody></table></div>`,
  ex: `<p>Job 45 min each way, crew of 4, 25 days: 1.5 × 4 × 25 = 150 LH = $5,406 at $36.04. If your rates came from jobs 15 min out (0.5 h drive inside them), add only the extra 1.0 h: 1.0 × 4 × 25 × $36.04 = <strong>$3,604</strong>.</p>`,
  watch: `<p>Far jobs lose more time to parts runs. Stock the truck or add an allowance.</p>`
},

{ h: "Owned equipment and the own-or-rent break-even",
  lead: "An owned machine costs ownership every year whether it runs or not, plus operating cost per running hour. Own only above the break-even days.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Mini excavator (practice)</th><th>Math</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>Depreciation</td><td>($60,000 − $18,000 resale) ÷ 5 yr</td><td class="num">$8,400/yr</td></tr>
<tr><td>Interest on average value</td><td>6% × ($60,000 + $18,000) ÷ 2</td><td class="num">$2,340/yr</td></tr>
<tr><td>Insurance, registration, storage</td><td></td><td class="num">$2,400/yr</td></tr>
<tr><td><strong>Ownership</strong></td><td></td><td class="num"><strong>$13,140/yr</strong></td></tr>
<tr><td><strong>Operating</strong></td><td>Fuel 1.5 gal × $5 + maintenance $6 + wear parts $3</td><td class="num"><strong>$16.50/h</strong></td></tr>
<tr><td>Rate at 800 h/yr</td><td>$13,140 ÷ 800 + $16.50</td><td class="num"><strong>$32.93/h</strong></td></tr>
<tr><td>Rate at 400 h/yr</td><td>$13,140 ÷ 400 + $16.50</td><td class="num">$49.35/h</td></tr>
<tr><td>Saving per day owned vs. rented</td><td>(Rent $350 + fuel $60) − $16.50 × 8</td><td class="num">$278</td></tr>
<tr><td><strong>Break-even</strong></td><td>$13,140 ÷ $278</td><td class="num"><strong>47.3 days/yr</strong></td></tr>
</tbody></table></div>`,
  body: `<p>Own what runs most working days and you can maintain and store; rent seasonal or special machines (stump grinder, auger, rock trencher, large excavator). Add delivery (rent) and your own hauling (own) when large; weekly and monthly rental rates raise the break-even. A new commercial division should rent the first season, log machine days, then run this test.</p>`,
  watch: `<p>The operator is labor. Don't put the operator's wage in the machine rate and again in the crew.</p>`,
  deeper: `<p>Caltrans <a href="https://dot.ca.gov/programs/construction/equipment-rental-rates-and-labor-surcharge" target="_blank" rel="noopener">Labor Surcharge and Equipment Rental Rates</a> set what Caltrans pays for force account extra work (actual time and materials plus set markups). Use them to check your own rates and to price change orders on Caltrans jobs.</p>`
},

{ h: "Rentals and job equipment",
  lead: "Price the whole rental trip and list every machine, every period and every move from the schedule.",
  body: `<p><strong>Rental cost =</strong> best rate period (day, week, 4-week month) + delivery and pickup + fuel + damage waiver and environmental fees + sales tax. A trencher at $425/day or $1,300/week: 4 days → the week rate, + $300 delivery and pickup = $1,600 plus fuel. Keep dated quotes from two San Diego yards in your price list.</p>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>10-week job (practice rates)</th><th>Basis</th><th class="num">Cost</th></tr></thead>
<tbody>
<tr><td>Ride-on trencher, rented</td><td>2 wk × $1,300 + $300 delivery</td><td class="num">$2,900.00</td></tr>
<tr><td>Trencher fuel</td><td>10 days × $45</td><td class="num">$450.00</td></tr>
<tr><td>Mini excavator, owned</td><td>6 days × 8 h × $32.93</td><td class="num">$1,580.64</td></tr>
<tr><td>Excavator moves</td><td>2 × $160</td><td class="num">$320.00</td></tr>
<tr><td>Skid steer, rented (trees, mulch)</td><td>3 days × $325 + $300 delivery</td><td class="num">$1,275.00</td></tr>
<tr><td>Plate compactor, rented</td><td>4 days × $95</td><td class="num">$380.00</td></tr>
<tr><td>Dump truck, owned</td><td>8 days × $180</td><td class="num">$1,440.00</td></tr>
<tr><td colspan="2"><strong>Job equipment</strong></td><td class="num"><strong>$8,345.64</strong></td></tr>
</tbody></table></div>
<p>Charge each machine to the items it serves, or carry one line and spread it. Every dollar must land in a price.</p>`,
  watch: `<p>A machine needed in week 2 and again in week 7 is two rentals and two deliveries.</p>`
},

{ h: "Trenching methods",
  lead: "The trench is often the largest irrigation labor cost, and the method sets the rate.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Method</th><th>Best for</th><th>Limit</th></tr></thead>
<tbody>
<tr><td>Hand</td><td>Short runs, near utilities and roots</td><td>Slowest</td></tr>
<tr><td>Walk-behind trencher</td><td>Laterals in planting areas</td><td>Rock, hard clay</td></tr>
<tr><td>Ride-on trencher</td><td>Long laterals and mains, open sites</td><td>Turning room, trailer to move</td></tr>
<tr><td>Mini excavator</td><td>Mains, deep or wide trench, valve and backflow pits</td><td>Wider trench, more backfill and compaction</td></tr>
<tr><td>Vibratory plow</td><td>Small poly in turf where specs allow</td><td>Rarely allowed for commercial PVC</td></tr>
<tr><td>Boring (directional, jack-and-bore)</td><td>Under paving, driveways, ramps</td><td>Usually subcontracted</td></tr>
</tbody></table></div>`,
  ex: `<p>The 11-428704 winner subcontracted only the boring: its sub list shows “Item 66, 54%, boring only.” Utility sheets U-1 to U-7 showed gas, sewer, telecom and Otay Water District recycled lines; price the potholing and hand digging. Call DigAlert (811) before digging.</p>`,
  src: "11-428704 ACCU Construction bid book (subcontractor list); 11-428704 plans U-1 to U-7."
},

{ h: "Work windows, night and freeway work",
  lead: "Production factor = (window − setup and pickup) ÷ paid hours. Price the lost hours or you pay them yourself.",
  body: `<ul>
<li><strong>Loss sources:</strong> rain and wet soil for days after, heat, owner or school hours, noise rules, phased and stop-and-go work, waiting on trades, spec waiting periods (11-428704: 21 days after irrigation before planting in weed germination areas), long shifts.</li>
<li><strong>11-428704 windows:</strong> I-805 lane closures about 9 PM–5 AM Mon–Thu; right shoulder about 9 AM–3 PM weekdays (Special Provisions 12-4.02C).</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Window</th><th>Productive hours (practice setup)</th><th class="num">Factor</th></tr></thead>
<tbody>
<tr><td>Shoulder 6 h</td><td>6 − 1.0 = 5</td><td class="num">5 ÷ 8 = 0.625</td></tr>
<tr><td>Night lane 8 h</td><td>8 − 1.5 = 6.5, plus lighting and any night pay</td><td class="num">0.81</td></tr>
</tbody></table></div>
<p>A 250 LF/day mainline crew makes about 156 LF in a shoulder shift.</p>
<div class="tablewrap"><table>
<thead><tr><th>Freeway cost</th><th>How to price</th></tr></thead>
<tbody>
<tr><td>Traffic control</td><td>Its own bid item or sub (11-428704 item 4, Traffic Control System); never buried in planting</td></tr>
<tr><td>Night shift pay</td><td>Private: company policy. Public: craft shift rules (<a href="#m11-1">Module 11</a>)</td></tr>
<tr><td>Light towers, safety gear, training, safety person if specified</td><td>Per night or per job</td></tr>
<tr><td>Canceled closure after crew arrives</td><td>Allowance; the crew is still paid</td></tr>
<tr><td>Staging</td><td>Smaller loads, more trips; nothing left on the shoulder</td></tr>
</tbody></table></div>`,
  watch: `<p>Night output falls further than the window alone shows. Build the factor from your own night jobs. Holidays, events and the Plaza Bonita holiday shopping blackout removed more days on 11-428704.</p>`,
  src: "11-428704 Special Provisions 12-4.02C (Charts G1–G3), 20-1.03E; Caltrans Bid Summary 11-428704 item 4."
},

{ h: "Worked example · Planting on a freeway shoulder",
  lead: "1,460 one-gallon plants (11-428704 item 27) in a 9 AM–3 PM shoulder window cost $9,316.78 more in labor than on an open site.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Step</th><th>Math</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>Normal LH (practice 0.12)</td><td>1,460 × 0.12</td><td class="num">175.2 LH</td></tr>
<tr><td>Paid LH at window</td><td>175.2 ÷ 0.625</td><td class="num">280.32 LH</td></tr>
<tr><td>Rate per LH, 2026 Landscape/Irrigation Laborer</td><td>$76.67 total + $47.57 × 25.15% burden</td><td class="num">$88.63</td></tr>
<tr><td><strong>Labor at window</strong></td><td>280.32 × $88.63</td><td class="num"><strong>$24,844.76</strong></td></tr>
<tr><td>Open site</td><td>175.2 × $88.63</td><td class="num">$15,527.98</td></tr>
<tr><td><strong>Cost of window</strong></td><td></td><td class="num"><strong>$9,316.78 ($6.38/plant)</strong></td></tr>
<tr><td>Labor per plant</td><td>$24,844.76 ÷ 1,460</td><td class="num">$17.02</td></tr>
</tbody></table></div>`,
  body: `<p>2021 bids on item 27 (five counted): $8.00–$85.00 all-in, median $18.00, winner $25.00. Wages have risen since 2021.</p>`,
  watch: `<p>Tenders cut this cost on a state-funded job. The 2021 federal decision on 11-428704 had no landscape tender, so tenders had to get at least the federal laborer rate.</p>`,
  src: "Caltrans Bid Summary 11-428704 item 27, Plant (Group A); DIR SD-102-X-14-2026-1."
},

{ h: "Real benchmarks · by job",
  lead: "Quantity drives unit price: 1\" pipe ran about $12/LF on a 330 LF job and about $5 on 20,000+ LF jobs.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item and contract</th><th class="num">Qty</th><th class="num">Winner</th><th class="num">Median</th><th class="num">Range</th></tr></thead>
<tbody>
<tr><td colspan="5"><strong>1" Sch 40 (Schedule 40) plastic pipe (supply line), LF</strong></td></tr>
<tr><td>11-422004 Carmel Valley (item 35)</td><td class="num">330</td><td class="num">$5.55</td><td class="num">$11.71</td><td class="num">$5.55–$20.00</td></tr>
<tr><td>11-428704 Chula Vista (item 57)</td><td class="num">1,390</td><td class="num">$7.00</td><td class="num">$7.00</td><td class="num">$4.30–$50.00</td></tr>
<tr><td>11-428804 San Ysidro (item 61)</td><td class="num">21,198</td><td class="num">$6.00</td><td class="num">$4.80</td><td class="num">$4.00–$6.00</td></tr>
<tr><td>11-431064 Otay Mesa (item 55)</td><td class="num">40,785</td><td class="num">$4.60</td><td class="num">$4.70</td><td class="num">$4.60–$7.20</td></tr>
<tr><td>11-430674 South County (item 82)</td><td class="num">57,127</td><td class="num">$4.50</td><td class="num">$4.95</td><td class="num">$4.50–$5.62</td></tr>
<tr><td colspan="5"><strong>Plant (Group A), 1-gallon, EA</strong></td></tr>
<tr><td>11-422004 (item 22)</td><td class="num">440</td><td class="num">$8.30</td><td class="num">$10.15</td><td class="num">$5.00–$13.00</td></tr>
<tr><td>11-428704 (item 27)</td><td class="num">1,460</td><td class="num">$25.00</td><td class="num">$18.00</td><td class="num">$8.00–$85.00</td></tr>
<tr><td>11-428804 (item 36)</td><td class="num">5,220</td><td class="num">$10.00</td><td class="num">$10.00</td><td class="num">$6.00–$13.20</td></tr>
<tr><td>11-431064 (item 28)</td><td class="num">6,880</td><td class="num">$6.90</td><td class="num">$7.00</td><td class="num">$6.90–$11.90</td></tr>
<tr><td>11-430674 (item 37)</td><td class="num">31,900</td><td class="num">$8.30</td><td class="num">$7.45</td><td class="num">$6.00–$14.00</td></tr>
<tr><td colspan="5"><strong>Tree well sprinkler assembly, EA</strong> (none on 11-422004)</td></tr>
<tr><td>11-428704 (item 51)</td><td class="num">180</td><td class="num">$90.00</td><td class="num">$60.00</td><td class="num">$20.30–$400.00</td></tr>
<tr><td>11-428804 (item 55)</td><td class="num">480</td><td class="num">$35.00</td><td class="num">$40.00</td><td class="num">$28.80–$78.00</td></tr>
<tr><td>11-431064 (item 48)</td><td class="num">1,900</td><td class="num">$58.00</td><td class="num">$48.00</td><td class="num">$45.00–$58.00</td></tr>
<tr><td>11-430674 (item 74)</td><td class="num">2,560</td><td class="num">$28.30</td><td class="num">$55.00</td><td class="num">$28.30–$70.00</td></tr>
</tbody></table></div>
<p>All-in prices (material, labor, equipment, overhead, profit), 2021–2022. Across all 26 counted bids: 1" pipe median $5.25/LF, 1-gallon median $9.50. The $50/LF pipe and $400 tree well came from one bidder on 11-428704 that finished far behind.</p>`,
  watch: `<p>Bidders shift money between items (<a href="#m15-1">Module 15</a>). Compare groups of items and use the middle of the pack, not the winner.</p>`,
  src: "Caltrans Bid Summaries for 11-422004, 11-428704, 11-428804, 11-431064 and 11-430674 (Real Bid Lab data). Medians exclude bids flagged non-responsive."
},

{ h: "Real benchmarks · medians across all five jobs",
  lead: "Price the item yourself first, then compare to the median; investigate any gap over about 25% before you change a number.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item (code)</th><th>Unit</th><th class="num">Bids</th><th class="num">Median</th><th class="num">Job medians</th></tr></thead>
<tbody>
<tr><td>Pop-up sprinkler, gear driven (208447)</td><td>EA</td><td class="num">26</td><td class="num">$94.50</td><td class="num">$80.00–$120.00</td></tr>
<tr><td>Riser sprinkler, gear driven (208446)</td><td>EA</td><td class="num">22</td><td class="num">$53.20</td><td class="num">$42.92–$64.50</td></tr>
<tr><td>Tree well sprinkler (208445)</td><td>EA</td><td class="num">22</td><td class="num">$54.00</td><td class="num">$40.00–$60.00</td></tr>
<tr><td>1" / 1½" / 2" remote control valve (206562/4/5)</td><td>EA</td><td class="num">8 / 17 / 8</td><td class="num">$449 / $550 / $577.50</td><td class="num">$385.00–$614.50</td></tr>
<tr><td>2" gate valve (208575)</td><td>EA</td><td class="num">26</td><td class="num">$583.00</td><td class="num">$500.00–$812.50</td></tr>
<tr><td>Flow sensor (208442)</td><td>EA</td><td class="num">22</td><td class="num">$1,516.50</td><td class="num">$1,305–$2,530</td></tr>
<tr><td>2" backflow preventer assembly (208426)</td><td>EA</td><td class="num">8</td><td class="num">$7,625.00</td><td class="num">$7,250–$8,100</td></tr>
<tr><td>3" / 4" plastic pipe, Class 315 (208607/8)</td><td>LF</td><td class="num">26 / 10</td><td class="num">$12.60 / $17.00</td><td class="num">$10.60–$19.84</td></tr>
<tr><td>Plant Group H, iceplant cuttings (204008)</td><td>EA</td><td class="num">19</td><td class="num">$0.75</td><td class="num">$0.50–$0.80</td></tr>
<tr><td>Plant Group A, No. 1 container (204035)</td><td>EA</td><td class="num">26</td><td class="num">$9.50</td><td class="num">$7.00–$18.00</td></tr>
<tr><td>Plant Group B, No. 5 container (204036)</td><td>EA</td><td class="num">13</td><td class="num">$26.20</td><td class="num">$20.44–$40.00</td></tr>
<tr><td>Plant Group U, No. 15 trees (204038)</td><td>EA</td><td class="num">17</td><td class="num">$170.00</td><td class="num">$160–$185</td></tr>
<tr><td>Plant Group K, 24" box trees (204011)</td><td>EA</td><td class="num">13</td><td class="num">$480.00</td><td class="num">$459.90–$600</td></tr>
<tr><td>Wood mulch (205035)</td><td>CY</td><td class="num">26</td><td class="num">$56.15</td><td class="num">$40–$145</td></tr>
<tr><td>Compost (210610)</td><td>CY</td><td class="num">22</td><td class="num">$56.50</td><td class="num">$45.70–$80.00</td></tr>
<tr><td>Hydroseed (210430)</td><td>SF</td><td class="num">12</td><td class="num">$0.105</td><td class="num">$0.10–$0.20</td></tr>
</tbody></table></div>
<p><strong>Plant establishment (204099), LS:</strong> medians $48,100 (11-428704, 250 working days) to $292,200 (11-430674, 750 working days); the 11-428704 winner bid $35,000, about $140 per working day. Wood mulch: $145/CY on 55 CY (11-422004) vs. $40 on 8,040 CY (11-430674).</p>
<p><strong>Use:</strong> match item, quantity, site and year; compare to the median; adjust for wage and price growth since 2021–2022; write down the cause of any gap (“$11.20 vs. $9.50 median: shoulder window”). If your costs are real and the market is lower, the job may be a no-go (<a href="#m3-1">Module 3</a>).</p>`,
  ex: `<p><strong>11-428704 controllers:</strong> specs printed the Calsense '97B' 40-station at $9,743.66 before tax and delivery; item 41 winner $15,000, median $17,000 (tax, delivery, foundation, wiring, vendor setup, overhead, profit). Item 40 (modify '97A'), kit quoted $6,708.64, median bid $2,000: below material, so money moved elsewhere (<a href="#m10-1">Module 10</a>).</p>`,
  watch: `<p>Thin data (8 bids) is a hint, not a standard. Group letters vary by job: on these, A = No. 1, B = No. 5, U = No. 15, K = 24" box. Read the planting legend.</p>`,
  src: "Caltrans Bid Summaries for the five Real Bid Lab jobs; 11-428704 Special Provisions 20-2.06B(2)(a) and 20-10.02B(1); planting legends 11-428804, 11-431064, 11-428704 PL-1. Medians exclude flagged bids."
},

{ h: "Worked example · 1,000 LF of 4\" mainline",
  lead: "On long runs production rate is the whole game: 250 LF/day gives $7.74/LF private and $13.13/LF prevailing wage, before material.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Step (open flat site, practice rates)</th><th>Math</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>Install + test/punch days</td><td>1,000 ÷ 250 + 0.5</td><td class="num">4.5 days</td></tr>
<tr><td>Crew-hours / LH</td><td>4.5 × 8; × 4 workers</td><td class="num">36 / 144 (0.144 LH/LF)</td></tr>
<tr><td><strong>Labor</strong></td><td>36 × $144.16</td><td class="num"><strong>$5,189.76</strong></td></tr>
<tr><td>Trencher week + delivery + fuel</td><td>$1,300 + 2 × $150 + 4 × $45</td><td class="num">$1,780.00</td></tr>
<tr><td>Plate compactor + crew truck</td><td>2 × $95 + 4.5 × $95</td><td class="num">$617.50</td></tr>
<tr><td>Small tools</td><td>3% × labor</td><td class="num">$155.69</td></tr>
<tr><td><strong>Total / per LF</strong></td><td></td><td class="num"><strong>$7,742.95 / $7.74</strong></td></tr>
<tr><td>At 2021 prevailing wage crew</td><td>36 × $289.53 + 3% + $2,397.50</td><td class="num">$13,133.27 / $13.13</td></tr>
</tbody></table></div>`,
  body: `<p>Real bids: 11-428704 (7,493 LF of 4" main) $12.00–$35.00, median $16.00, winner $12.00; 11-430674 (33,604 LF) winner and median $18.00. A $12.00 all-in price means far more than 250 LF/day on long straight shoulder runs.</p>`,
  watch: `<p>In a 9 AM–3 PM shoulder window production drops to about 156 LF/day and labor rises about 60%.</p>`,
  src: "Caltrans Bid Summaries 11-428704 item 63 and 11-430674 item 88."
},

{ h: "Estimated vs. actual: the feedback loop",
  lead: "Every finished job tests your rates. Compare by cost code, find the cause, and change a rate only on a pattern or a clear reason.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Code</th><th class="num">Qty</th><th class="num">Est. rate</th><th class="num">Est. h</th><th class="num">Actual h</th><th class="num">Actual rate</th><th class="num">Diff.</th></tr></thead>
<tbody>
<tr><td>02 Laterals</td><td class="num">2,400 LF</td><td class="num">0.04</td><td class="num">96</td><td class="num">88</td><td class="num">0.037</td><td class="num">−8%</td></tr>
<tr><td>03 Spray heads</td><td class="num">310 EA</td><td class="num">0.30</td><td class="num">93</td><td class="num">109</td><td class="num">0.35</td><td class="num">+17%</td></tr>
<tr><td>04 Valves and wire</td><td class="num">14 EA</td><td class="num">1.5</td><td class="num">21</td><td class="num">26</td><td class="num">1.86</td><td class="num">+24%</td></tr>
<tr><td>11 1-gallon</td><td class="num">600 EA</td><td class="num">0.12</td><td class="num">72</td><td class="num">66</td><td class="num">0.11</td><td class="num">−8%</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td class="num"><strong>282</strong></td><td class="num"><strong>289</strong></td><td></td><td class="num"><strong>+2%</strong></td></tr>
</tbody></table></div>`,
  body: `<p>The total is close but heads and valves ran 17–24% over; on a heads-heavy job that hurts. Ask the foreman why (head type, rock, missing parts, rework), update after two or three jobs agree or the cause is clear, and note the reason on the rate card. Show foremen their numbers in use; recording improves.</p>`,
  watch: `<p>Hours written up at week's end are guesses. Require daily entries by cost code.</p>`
},

{ h: "Mistakes that cost money",
  lead: "The labor and equipment errors that sink new commercial estimators, and the fix for each.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Cost</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Wages without burden</td><td>20–30% low on labor (practice range)</td><td>Crew-rate spreadsheet</td></tr>
<tr><td>Private crew rate on a public job</td><td>About half the real labor</td><td>Rebuild from DIR</td></tr>
<tr><td>Pricing all laborers on a state job that allows tenders</td><td>Higher than competitors</td><td>Crew mix the ratio rules allow</td></tr>
<tr><td>Book rates instead of your own</td><td>Unknown, either way</td><td>Rate cards from timecards</td></tr>
<tr><td>One rate for the whole site</td><td>Slopes, rock, tight areas underpriced</td><td>Split the takeoff by condition</td></tr>
<tr><td>Ignoring the work window</td><td>Up to 60% more labor on shoulder work</td><td>Productive ÷ paid hours</td></tr>
<tr><td>Crew-days exceed the GC schedule</td><td>Unpriced overtime or second crew</td><td>Price it; state the assumption</td></tr>
<tr><td>Travel counted twice or not at all</td><td>Every day, either way</td><td>In the rates or a line, not both</td></tr>
<tr><td>Operator in machine and crew rate</td><td>Double charge</td><td>Operator is labor only</td></tr>
<tr><td>Rental without delivery and fuel</td><td>Hundreds per machine</td><td>Price the whole trip</td></tr>
<tr><td>No hours by cost code</td><td>Same error on every bid</td><td>Daily report</td></tr>
</tbody></table></div>`
},

{ t: "terms", h: "Words to know",
  lead: "Module 9 terms. Full list: <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Labor burden", "Payroll taxes, insurance and benefits on top of wages."],
    ["Burdened rate", "Wage plus burden: the true cost of one worker-hour."],
    ["Crew rate", "Combined hourly cost of everyone on a crew."],
    ["Labor hour (LH)", "One worker working one hour."],
    ["Crew-hour / crew-day", "One full crew working one hour / one day."],
    ["Experience mod", "Workers' comp multiplier based on your claims history."],
    ["Class code 0042", "WCIRB workers' comp class for landscape gardening."],
    ["Tender", "Lower-paid prevailing wage helper classification, allowed only within set ratios."],
    ["Production rate", "Labor hours per unit, or units per crew-hour."],
    ["Paid vs. productive hours", "Timecard hours vs. hours actually installing work."],
    ["Work face", "Work open and ready at one time; it caps useful crew size."],
    ["Cost code", "Task label used in both the estimate and the daily report."],
    ["Rate card", "Library row: rate, unit, range, conditions, source jobs, inclusions."],
    ["Weighted rate", "Total hours ÷ total units across jobs, so larger jobs count more."],
    ["Adjustment factor", "Multiplier on a rate for harder conditions."],
    ["Work window", "Allowed working hours, such as a lane closure period."],
    ["Production factor", "(Window − setup and pickup) ÷ paid hours."],
    ["Ownership cost", "Depreciation, interest, insurance and storage, whether a machine runs or not."],
    ["Operating cost", "Fuel, maintenance and wear per running hour."],
    ["Own-or-rent break-even", "Yearly ownership cost ÷ saving per day of use."],
    ["Mobilization / demobilization", "Moving crews and equipment in and set up / moving out."],
    ["Force account", "Extra work paid at actual labor, equipment and material plus set markups."],
    ["Benchmark", "A real market price used to check your number, not to set it."]
  ]
},

{ t: "quiz", id: "m9", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "Wages for a 3-person crew total $90/h. Burden is 25%, benefits $3.50 per worker. Crew cost per LH?", a: ["$41.00", "$37.50", "$33.50"], c: 0, why: "$90 × 1.25 = $112.50, + 3 × $3.50 = $123.00 per crew-hour, ÷ 3 = $41.00. $37.50 drops benefits; $33.50 drops burden." },
    { q: "Your rates come from full-day timecards on jobs 15 minutes from the yard. A new job is 45 minutes away. What travel do you add?", a: ["The full 1.5 h per worker per day", "Nothing; travel is in the rates", "The extra 1.0 h per worker per day"], c: 2, why: "The rates already hold 0.5 h of drive. Add only the difference, or you pay the drive twice." },
    { q: "Three jobs: 310 heads in 109 LH, 180 in 50 LH, 420 in 134 LH. Rate to put on the card?", a: ["0.316 LH per head", "0.322 LH per head", "0.352 LH per head"], c: 1, why: "293 ÷ 910 = 0.322. The simple average of job rates (0.316) overweights the small job." },
    { q: "Crew A: $108.12/h, 9 heads/h. Crew B: $175.19/h, 17 heads/h. Which do you bid on 1,000 heads, and on a 40-head zone?", a: ["A on both", "B on 1,000 heads; A or your standard crew on 40 heads", "B on both, it's always cheaper per head"], c: 1, why: "B is $10.31 vs. $12.01 per head when it has work face. On 40 heads it runs out of work and the gap disappears." },
    { q: "3,000 LF of lateral at 0.04 LH/LF, 1,000 LF of it on a 2:1 slope (factor 1.5). Labor hours?", a: ["120", "140", "180"], c: 1, why: "2,000 × 0.04 + 1,000 × 0.04 × 1.5 = 80 + 60 = 140. Applying 1.5 to everything gives 180." },
    { q: "A 6-hour shoulder window loses 1 hour to closure setup and pickup; crews are paid 8. A task takes 200 LH on an open site. Paid LH in the window?", a: ["250", "320", "267"], c: 1, why: "Factor 5 ÷ 8 = 0.625; 200 ÷ 0.625 = 320 LH." },
    { q: "Ownership $13,140/yr. Your own machine costs $132 per day of use; renting costs $410. You expect 30 days of use. Own or rent?", a: ["Own", "Rent", "Same cost"], c: 1, why: "Break-even is $13,140 ÷ $278 = 47.3 days. At 30 days, renting is cheaper." },
    { q: "Your 1-gallon all-in price on a shoulder job is 30% above the Caltrans median. First move?", a: ["Cut to the median", "Find the cause: quantity, rate, crew cost, material, window", "Ignore the benchmark"], c: 1, why: "Benchmarks flag possible errors. A real cause (like a work window) justifies the gap; an error gets fixed." },
    { q: "On 11-428704, item 40 (modify controller '97A') had a $6,708.64 kit in the specs and a median bid of $2,000. Best reading?", a: ["Bidders found a cheaper kit", "Money was shifted to other items; don't use it as a cost benchmark", "The kit was not required"], c: 1, why: "A median below the specified material cost signals item unbalancing, not real cost." },
    { q: "California private work: a laborer works 10 hours on a Tuesday (no 7th-day issue). Pay for hours 9 and 10?", a: ["Straight time", "1½ times the regular rate", "Double time"], c: 1, why: "Over 8 up to 12 in a workday is 1.5× (Labor Code §510). Double time starts over 12." }
  ]
},

{ t: "practice", id: "m9", h: "Practice assignments",
  lead: "Finish with your real crew rates, a starter rate library and an equipment cost sheet.",
  items: [
    { h: "Get the real burden numbers", hrs: 0.5, d: "<p>From the CPA or payroll service: this year's FICA, FUTA, California UI and ETT rates and wage limits. From the insurance agent: workers' comp per $100 of payroll by class code, experience mod, and how liability is priced. Compute your total burden percent.</p>" },
    { h: "Build private and prevailing wage crew rates", hrs: 1, d: "<p>Build your irrigation and planting crews per hour, per day and per LH with real wages. Rebuild both at current San Diego County rates for landscape/irrigation laborer, tender, fitter and operator from <a href=\"https://www.dir.ca.gov/oprl/DPreWageDetermination.htm\" target=\"_blank\" rel=\"noopener\">DIR</a>. Date every rate.</p>" },
    { h: "Mine past jobs for production rates", hrs: 1, d: "<p>With a foreman, pull quantities and hours from 3 finished jobs for at least 6 tasks (laterals, mainline, heads, valves, 1-gallon, 5-gallon). Compute weighted LH per unit, note conditions, and fill a rate card for each. If you have no task-level hours, have a foreman log one full day by task and compute the productive share.</p>" },
    { h: "Build an equipment cost sheet", hrs: 0.75, d: "<p>For each owned machine and truck, compute ownership per year, operating per hour, and hourly and daily rates. Get day, week and month rates plus delivery from two San Diego rental yards for a ride-on trencher, mini excavator and plate compactor. Run the own-or-rent break-even for one machine.</p>" },
    { h: "Benchmark against Caltrans", hrs: 0.5, d: "<p>In the <a href=\"#lab\">Real Bid Lab</a>, take 1\" pipe, 4\" main, 1-gallon plants, tree well sprinklers and gear-drive pop-ups. Price each all-in with your crew rate, your rates and Module 8 material, compare to the median, and explain any gap over 25%.</p>" },
    { h: "Price a freeway shoulder planting item", hrs: 0.5, d: "<p>Price <a href=\"#lab-11-428704\">11-428704</a> item 27 (1,460 one-gallon plants) at today's DIR laborer rate, your burden, a 9 AM–3 PM window and quoted plant and fertilizer cost. Compare per plant to the bids and list what overhead, profit and traffic control still add.</p>" },
    { h: "Start an estimated vs. actual log", hrs: 0.5, d: "<p>On a job now in progress, set 8–15 cost codes with the foreman and start the daily report. At closeout, fill in the log and bring it to bid review.</p>" }
  ]
},

{ h: "Module 9 summary",
  lead: "Price labor from your own crew costs and rates, adjusted for the real site and window, and check it against the market.",
  body: `<ul>
<li>Labor = quantity × LH per unit × burdened rate per LH. Burden from your CPA and agent; paid vs. productive hours handled once.</li>
<li>Prevailing wage crews run about 2× private ($75.36 vs. $36.04 per LH in the examples). Pull current DIR rates every bid; use tenders where allowed.</li>
<li>Choose crews by cost per unit. Price overtime only when the schedule forces it.</li>
<li>Rates from your timecards, weighted by quantity, on rate cards fed by daily reports. Adjust only where conditions apply; use production factor = productive ÷ paid hours for windows.</li>
<li>Equipment = ownership + operating; rent below the break-even. Price the whole rental trip and every move.</li>
<li>Benchmark all-in prices against Caltrans medians, explain the gaps, and close the loop with estimated vs. actual hours.</li>
</ul>
<p><strong>Next: <a href="#m10-1">Module 10 · Overhead, Markup and Your Final Number</a></strong></p>`
}
]
});
