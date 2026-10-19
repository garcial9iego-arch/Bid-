(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 9, hours: 10, title: "Labor, Production Rates and Equipment",
slides: [

{ t: "cover",
  h: "Labor, Production Rates and Equipment",
  lead: "Labor is where landscape bids are won and lost. Two companies can buy the same pipe for the same price. The one that knows how fast its crews really work, and what an hour of that crew really costs, prices the job right.",
  objectives: [
    "Build the true hourly and daily cost of a crew, including labor burden, step by step in a spreadsheet",
    "Price private and prevailing wage crews, overtime, travel time and crew size choices",
    "Build a production rate library from your own past jobs and adjust it for site conditions",
    "Convert a takeoff into labor hours, item by item",
    "Figure the hourly cost of owned equipment, find the own-or-rent break-even, and price a job's equipment",
    "Account for lost productivity from weather, short work windows, night work and traffic closures",
    "Check your numbers against real Caltrans bids and feed your finished jobs back into your rates"
  ],
  time: [["Reading and slides", "3.5 h"], ["Practice assignments", "6.5 h"], ["Module total", "10 h"]],
  body: "<p>You already know how the work gets done in the field. This module turns that knowledge into numbers. All production rates and percentages in this module are practice examples unless a real source is named. Replace them with your company's own numbers.</p>"
},

{ h: "The labor formula",
  lead: "Every labor price comes from two numbers: how many hours the work takes, and what each hour costs.",
  body: `<div class="tablewrap"><table><tbody>
<tr><td><strong>Labor hours</strong></td><td>= quantity × labor hours per unit (production rate)</td></tr>
<tr><td><strong>Labor cost</strong></td><td>= labor hours × burdened cost per hour</td></tr>
<tr><td><strong>Equipment cost</strong></td><td>= equipment hours or days × equipment rate, plus moving it to the job</td></tr>
</tbody></table></div>
<p>One <strong>labor hour (LH)</strong> is one worker working one hour. The rest of this module is about getting each of those numbers right.</p>`,
  ex: `<p>22 spray heads × 0.30 labor hours each = 6.6 labor hours. At $36.04 per burdened labor hour, that's $237.86. If your real rate is 0.40 hours per head, you're 33% low on every head in the bid.</p>`,
  watch: `<p>A small error in the production rate multiplies across thousands of units. On 11-428704, one bidder priced iceplant cuttings at $6.00 each instead of about $0.80, adding about $322,000 to its bid (Module 15).</p>`
},

{ h: "Labor pricing, step by step",
  lead: "Labor and equipment pricing follows the same order on every bid. Do the steps in order and keep each number in its own cell.",
  body: `<ol class="steps">
<li><div><b>1 · Decide public or private</b>Private wages, or prevailing wage from the DIR (California Department of Industrial Relations) determination? (Module 11)</div></li>
<li><div><b>2 · Build the crew rates</b>Wages, burden and benefits for each crew you'll use. Per hour and per day.</div></li>
<li class="hl"><div><b>3 · Put a production rate on every takeoff line</b>From your rate library, in LH per unit.</div></li>
<li><div><b>4 · Adjust for site conditions</b>Slope, rock, access, work windows, night work.</div></li>
<li><div><b>5 · Total the labor hours, then check in crew-days</b>Does the schedule make sense?</div></li>
<li><div><b>6 · Price equipment</b>Owned rates, rentals, delivery, fuel, mobilization.</div></li>
<li><div><b>7 · Add supervision, trucks, small tools, travel</b>Per day or per job.</div></li>
<li><div><b>8 · Benchmark</b>Compare all-in unit prices to your past jobs and the Caltrans bid data.</div></li>
<li class="hl"><div><b>9 · Save the estimate for the feedback loop</b>After the job, compare estimated hours to actual hours by cost code.</div></li>
</ol>`
},

{ h: "What a crew hour really costs",
  lead: "The wage is only the start. Every hour of pay carries taxes, insurance and benefits. Together these are called labor burden.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>What it is</th><th>Where the real number comes from</th></tr></thead>
<tbody>
<tr><td><strong>Wage</strong></td><td>Hourly pay for each worker</td><td>Your payroll; on public work, the prevailing wage determination</td></tr>
<tr><td><strong>Social Security and Medicare (FICA: Federal Insurance Contributions Act)</strong></td><td>Employer share: 6.2% + 1.45% = 7.65% of wages (Social Security stops at a yearly wage cap)</td><td>IRS (Internal Revenue Service)</td></tr>
<tr><td><strong>Unemployment taxes</strong></td><td>Federal (FUTA: Federal Unemployment Tax Act) and California (UI: unemployment insurance, and ETT: employment training tax), on the first part of each worker's yearly wages</td><td>Your CPA (certified public accountant) or payroll service (rates change yearly)</td></tr>
<tr><td><strong>Workers' compensation</strong></td><td>Insurance for job injuries, priced per $100 of payroll by job class. Landscape work is usually class 0042, Landscape Gardening.</td><td>Your insurance agent</td></tr>
<tr><td><strong>General liability</strong></td><td>Often priced on payroll or sales</td><td>Your insurance agent</td></tr>
<tr><td><strong>Benefits (fringe)</strong></td><td>Health insurance, paid time off, retirement, union or prevailing wage fringe</td><td>Your company's benefit costs; the wage determination on public work</td></tr>
</tbody></table></div>`,
  watch: `<p>Workers' comp is often the biggest piece of burden for landscape crews, and it depends on your class codes and your experience modification (your claims history). Don't copy another company's percentage. Ask your agent for your real rate per $100 of payroll for each class you use.</p>`,
  deeper: `<p>The employer share of FICA is set by federal law: 6.2% Social Security and 1.45% Medicare (IRS Topic 751). California employers pay FUTA, state UI and ETT on a limited wage base each year; California has had a FUTA credit reduction in recent years, which raises the federal rate. These change every year, so get the current numbers from your CPA. The WCIRB's (Workers' Compensation Insurance Rating Bureau of California) class 0042 includes sprinkler and drainage work when the employer is mainly doing landscape work at that job; irrigation-only work can fall in another class. Your agent will tell you which classes apply.</p>`,
  src: "IRS Tax Topic 751 (Social Security and Medicare withholding rates); EDD, Federal Unemployment Tax Act page; WCIRB classification 0042, Landscape Gardening."
},

{ h: "Paid hours vs. productive hours",
  lead: "A crew paid for 8 hours rarely installs for 8 hours. Know where the other hours go, and make sure your rates or your estimate pay for them.",
  exLabel: "Practice example: one 8-hour day (made-up times; time your own crews)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Where the time goes</th><th class="num">Hours</th></tr></thead>
<tbody>
<tr><td>Load the truck and trailer at the yard</td><td class="num">0.50</td></tr>
<tr><td>Drive to the job and back (company truck, crew rides together)</td><td class="num">1.00</td></tr>
<tr><td>Morning safety talk and layout</td><td class="num">0.25</td></tr>
<tr><td>Cleanup, put away, secure the site</td><td class="num">0.25</td></tr>
<tr><td><strong>Non-producing time</strong></td><td class="num"><strong>2.00</strong></td></tr>
<tr><td><strong>Productive time</strong> (8.00 − 2.00)</td><td class="num"><strong>6.00</strong></td></tr>
</tbody></table></div>
<p>Productive share: 6.00 ÷ 8.00 = <strong>75%</strong>. If a rate from a book assumes 8 productive hours, your real cost per unit is 8 ÷ 6 = 1.33 times higher.</p>`,
  body: `<p><strong>Two ways to handle it, pick one:</strong></p>
<ul>
<li><strong>Best:</strong> build production rates from timecards that include the whole paid day. Then the non-producing time is already inside each rate.</li>
<li><strong>Otherwise:</strong> use “clean” install rates and add the non-producing hours as their own line: days on the job × crew size × 2 hours.</li>
</ul>`,
  watch: `<p>Don't do both. Rates from full-day timecards plus a separate travel line pays for the drive twice. When crews must meet at the yard and ride together, that ride is generally paid work time; ask your payroll provider or employment attorney how your company handles it.</p>`
},

{ h: "Building the crew-day spreadsheet, step by step",
  lead: "Build crew rates once in a spreadsheet, with every number in its own cell. Then every bid just picks a crew.",
  body: `<ol class="steps">
<li><div><b>1 · One row per worker</b>Columns: position, wage per hour (the pay on the check), benefits per hour.</div></li>
<li><div><b>2 · Burden cells at the top</b>One cell each: FICA 7.65%, unemployment %, workers' comp % (your rate per $100 ÷ 100), liability %. A total burden cell adds them.</div></li>
<li class="hl"><div><b>3 · Burden per worker</b>= wage × total burden %. Burden goes on the wage on the check, not on fringe you pay into plans (ask your CPA and agent how your payroll is charged).</div></li>
<li><div><b>4 · Cost per hour per worker</b>= wage + burden + benefits.</div></li>
<li><div><b>5 · Crew cost per hour</b>= sum of the rows.</div></li>
<li><div><b>6 · Crew cost per day</b>= crew cost per hour × paid hours per day (usually 8).</div></li>
<li><div><b>7 · Average per labor hour</b>= crew cost per hour ÷ number of workers. This is the rate you multiply by LH.</div></li>
<li><div><b>8 · Crew-day with truck and tools (separate line)</b>Add the truck per day and small tools as a percent. Keep the “pure” crew rate too.</div></li>
<li><div><b>9 · Label and date it</b>“Private irrigation crew, rates as of [date].” Make a copy for each crew type and for prevailing wage.</div></li>
</ol>`,
  exLabel: "Spreadsheet layout",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>A · Position</th><th class="num">B · Wage</th><th class="num">C · Burden (= B × burden %)</th><th class="num">D · Benefits</th><th class="num">E · Cost per hour (= B + C + D)</th></tr></thead>
<tbody>
<tr><td>Foreman</td><td class="num">…</td><td class="num">…</td><td class="num">…</td><td class="num">…</td></tr>
<tr><td>Laborer</td><td class="num">…</td><td class="num">…</td><td class="num">…</td><td class="num">…</td></tr>
<tr><td><strong>Crew per hour</strong></td><td class="num">sum</td><td class="num">sum</td><td class="num">sum</td><td class="num">sum</td></tr>
</tbody></table></div>`
},

{ h: "Worked example · Crew day cost",
  lead: "A four-person private-work irrigation crew. The wages and the percentages are practice examples, except FICA.",
  exLabel: "Practice example (made-up wages and rates; get yours from payroll, your CPA and your insurance agent)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Worker</th><th class="num">Wage per hour</th></tr></thead>
<tbody>
<tr><td>Foreman</td><td class="num">$34.00</td></tr>
<tr><td>Irrigation installer</td><td class="num">$26.00</td></tr>
<tr><td>Laborer</td><td class="num">$22.00</td></tr>
<tr><td>Laborer</td><td class="num">$22.00</td></tr>
<tr><td><strong>Crew wages per hour</strong></td><td class="num"><strong>$104.00</strong></td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Burden on wages</th><th class="num">Rate</th></tr></thead>
<tbody>
<tr><td>FICA (real rate)</td><td class="num">7.65%</td></tr>
<tr><td>Unemployment taxes (example)</td><td class="num">3.00%</td></tr>
<tr><td>Workers' comp (example)</td><td class="num">12.00%</td></tr>
<tr><td>General liability (example)</td><td class="num">2.50%</td></tr>
<tr><td><strong>Total burden</strong></td><td class="num"><strong>25.15%</strong></td></tr>
</tbody></table></div>
<p><strong>Math:</strong></p>
<ul>
<li>Burden: $104.00 × 25.15% = $26.16 per hour</li>
<li>Benefits (example $3.50 per worker-hour): 4 × $3.50 = $14.00 per hour</li>
<li><strong>Crew cost per hour: $104.00 + $26.16 + $14.00 = $144.16</strong></li>
<li><strong>Crew cost per 8-hour day: $144.16 × 8 = $1,153.28</strong></li>
<li>Average per labor hour: $144.16 ÷ 4 = <strong>$36.04</strong></li>
</ul>`,
  body: `<p>Trucks, tools, supervision above the foreman and equipment come next, as separate lines. Keep the crew rate “pure” so you can reuse it.</p>`,
  watch: `<p>Paid hours aren't all productive hours. Drive time, morning meeting, loading the truck and cleanup are paid. Either count them in your production rates (best, if your rates come from timecards) or add them as their own hours.</p>`
},

{ h: "Worked example · Planting crew day with truck and tools",
  lead: "A four-person private planting crew, built with the spreadsheet steps. Wages and percentages are practice examples, except FICA.",
  exLabel: "Practice example (made-up wages; same 25.15% example burden)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Position</th><th class="num">Wage</th><th class="num">Burden 25.15%</th><th class="num">Benefits</th><th class="num">Cost per hour</th></tr></thead>
<tbody>
<tr><td>Planting foreman</td><td class="num">$32.00</td><td class="num">$8.05</td><td class="num">$3.50</td><td class="num">$43.55</td></tr>
<tr><td>Laborer</td><td class="num">$22.00</td><td class="num">$5.53</td><td class="num">$3.50</td><td class="num">$31.03</td></tr>
<tr><td>Laborer</td><td class="num">$22.00</td><td class="num">$5.53</td><td class="num">$3.50</td><td class="num">$31.03</td></tr>
<tr><td>Laborer</td><td class="num">$22.00</td><td class="num">$5.53</td><td class="num">$3.50</td><td class="num">$31.03</td></tr>
<tr><td><strong>Crew per hour</strong></td><td class="num"><strong>$98.00</strong></td><td class="num"><strong>$24.65</strong></td><td class="num"><strong>$14.00</strong></td><td class="num"><strong>$136.65</strong></td></tr>
</tbody></table></div>
<ul>
<li>Burden on the crew: $98.00 × 25.15% = $24.65 (the rows round to $24.64; use the crew total)</li>
<li><strong>Crew day:</strong> $136.65 × 8 = <strong>$1,093.20</strong></li>
<li><strong>Per labor hour:</strong> $136.65 ÷ 4 = <strong>$34.16</strong></li>
<li>Small tools 3% (example): $1,093.20 × 0.03 = $32.80</li>
<li>Crew truck (example from the truck slide): $95.00</li>
<li><strong>Crew day with truck and tools: $1,093.20 + $32.80 + $95.00 = $1,221.00</strong></li>
</ul>`,
  body: `<p>Use $34.16 per LH for planting labor and $1,221.00 when you check a schedule in crew-days. A cheaper crew per hour isn't automatically cheaper per plant; that depends on production (crew composition slides).</p>`
},

{ h: "Public work: prevailing wage crews",
  lead: "On public jobs, the wage and fringe are set by the state (and on federal-aid jobs, also the federal government). The same crew can cost about twice as much per hour.",
  exLabel: "Example using real 2021 rates from the 11-428704 federal wage decision",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Worker (federal classification)</th><th class="num">Base</th><th class="num">Fringe</th></tr></thead>
<tbody>
<tr><td>Plumber: landscape/irrigation fitter (lead)</td><td class="num">$35.30</td><td class="num">$24.10</td></tr>
<tr><td>Laborer Group 2: irrigation laborer</td><td class="num">$35.76</td><td class="num">$20.48</td></tr>
<tr><td>Laborer Group 2: irrigation laborer</td><td class="num">$35.76</td><td class="num">$20.48</td></tr>
<tr><td>Operator Group 4: mini backhoe</td><td class="num">$50.81</td><td class="num">$27.20</td></tr>
<tr><td><strong>Totals</strong></td><td class="num"><strong>$157.63</strong></td><td class="num"><strong>$92.26</strong></td></tr>
</tbody></table></div>
<p>Using the same example burden of 25.15%, applied to base wages only in this example: $157.63 × 25.15% = $39.64.</p>
<p><strong>Crew cost per hour: $157.63 + $92.26 + $39.64 = $289.53.</strong> About 2 times the private example crew ($144.16).</p>`,
  body: `<p>Module 11 covers prevailing wage rules in detail: which rate applies, apprentices, certified payroll and how fringe can be paid. Module 11 also shows that on this job the state (DIR) rates were higher than the federal ones, and the higher rate had to be paid.</p>`,
  watch: `<p>These are 2021 rates, used here only because they're from a real job. Rates go up every year. For a real bid, get the current state determination from <a href="https://www.dir.ca.gov/oprl/DPreWageDetermination.htm" target="_blank" rel="noopener">DIR</a> (and the federal decision bound into the specs on federal-aid jobs), and pay the higher of the two. Ask your CPA how taxes and insurance apply to the fringe part on your payroll.</p>`,
  src: "U.S. DOL (Department of Labor) General Decision CA20210001, Mod. 12 (bound into 11-428704 Addendum 1); DIR prevailing wage determinations."
},

{ h: "Worked example · A 2026 prevailing wage irrigation crew",
  lead: "The same spreadsheet, with real 2026-2 San Diego County DIR rates. The burden percent is the practice example; use your own.",
  exLabel: "Real DIR rates (2026-2 period) with example burden",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Worker (DIR craft)</th><th class="num">Basic rate (on the check)</th><th class="num">Total hourly rate</th></tr></thead>
<tbody>
<tr><td>Landscape/Irrigation Fitter (Plumber)</td><td class="num">$47.85</td><td class="num">$76.40</td></tr>
<tr><td>Landscape/Irrigation Laborer</td><td class="num">$47.57</td><td class="num">$76.67</td></tr>
<tr><td>Landscape/Irrigation Laborer</td><td class="num">$47.57</td><td class="num">$76.67</td></tr>
<tr><td>Landscape/Irrigation Tender (allowed as the 3rd laborer-side worker)</td><td class="num">$21.97</td><td class="num">$30.19</td></tr>
<tr><td><strong>Crew totals</strong></td><td class="num"><strong>$164.96</strong></td><td class="num"><strong>$259.93</strong></td></tr>
</tbody></table></div>
<ul>
<li>Burden on check wages: $164.96 × 25.15% = $41.49</li>
<li><strong>Crew per hour: $259.93 + $41.49 = $301.42</strong></li>
<li><strong>Crew per 8-hour day: $301.42 × 8 = $2,411.36</strong></li>
<li>Per labor hour: $301.42 ÷ 4 = <strong>$75.36</strong></li>
<li>With small tools 3% ($72.34) and the $95 truck: <strong>$2,578.70 per day</strong></li>
</ul>`,
  body: `<p>Compare: the private irrigation crew costs $36.04 per LH. This crew costs $75.36, about 2.1 times as much. Every irrigation unit price on a public job moves with it.</p>`,
  watch: `<p>The fitter rate applies only when the fitter scope applies, and tenders must follow the ratio rules (Module 11). On federal-aid Caltrans jobs, a tender may have to be paid the federal laborer rate. Machine time needs the Operating Engineer rate for those hours: pull the current one from DIR. Rates change at least twice a year.</p>`,
  src: "DIR determination SD-102-X-14-2026-1 (Landscape/Irrigation Laborer and Tender); DIR San Diego County subtrades SDI-2026-2 (Landscape/Irrigation Fitter). See Module 11."
},

{ h: "Overtime and long days",
  lead: "Overtime costs more per hour and usually produces less per hour. Price it only when the schedule forces it.",
  body: `<ul>
<li><strong>California private-work overtime:</strong> 1½ times the regular rate for hours over 8 in a workday (up to 12) and over 40 in a workweek, and for the first 8 hours on the 7th day in a row. Double time over 12 hours in a day, and over 8 hours on the 7th day.</li>
<li><strong>Public works</strong> add their own rules: hours over 8 a day or 40 a week at 1½ the basic rate at least, plus each craft's own overtime and Saturday rules (Module 11).</li>
<li><strong>Burden</strong> applies to overtime pay too.</li>
<li><strong>Output drops</strong> on long days and long weeks. People get tired, and mistakes go up.</li>
</ul>`,
  ex: `<p>Practice example (made up): a $22.00 laborer works a 10-hour day. Pay: 8 × $22.00 + 2 × $33.00 = $242.00, compared with $220.00 if those 10 hours were all straight time. That's 10% more for the day. If output in hours 9 and 10 is also 10% lower (example), the last two hours cost about 1.5 ÷ 0.9 = 1.67 times a normal hour per unit installed.</p>`,
  watch: `<p>If a GC's schedule squeezes your work into fewer days than your crew needs, price the overtime or a second crew, and say so in your proposal (Module 13). Don't assume you'll “make it up” in the field.</p>`,
  src: "California Labor Code §510; DIR Labor Commissioner, Overtime FAQ (dir.ca.gov/dlse/faq_overtime.htm). Public works: Labor Code §§1810–1815 (Module 11)."
},

{ h: "Crew composition choices",
  lead: "Who is on the crew changes both the cost per hour and the output per hour. The goal is the lowest cost per unit installed, not the lowest cost per hour.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Crew type</th><th>Good for</th><th>Watch for</th></tr></thead>
<tbody>
<tr><td>2 people: lead + helper</td><td>Small jobs, punch list, valve and controller work, repairs</td><td>Slow on big runs; one person always waiting</td></tr>
<tr><td>3–4 people: foreman + 2–3</td><td>Most zones: trenching, pipe, heads; normal planting</td><td>The standard; build most rates on it</td></tr>
<tr><td>5–6 people: foreman + skilled + laborers</td><td>Long open runs, big planting areas, mulch</td><td>Needs enough work face so nobody waits; more supervision</td></tr>
<tr><td>Split crews</td><td>Trenching crew ahead, install crew behind</td><td>Both must keep pace; the slower crew sets the speed</td></tr>
<tr><td>Operator + laborers</td><td>Machine trenching, box trees, grading for planting</td><td>Operator rate on public jobs; machine idle time</td></tr>
</tbody></table></div>`,
  watch: `<p>Adding people doesn't add output evenly. A sixth worker on a small zone may just stand around. Match crew size to the work face (how much work is open at one time).</p>`
},

{ h: "Worked example · Crew size and cost per head",
  lead: "Two crews setting spray heads on the same job. Which is cheaper per head? Wages and output are practice examples.",
  exLabel: "Practice example (made-up wages and output; 25.15% example burden plus $3.50 benefits per worker)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">Crew A: 3 people</th><th class="num">Crew B: 5 people</th></tr></thead>
<tbody>
<tr><td>Who</td><td class="num">Foreman $34 + 2 laborers $22</td><td class="num">Foreman $34 + installer $26 + 3 laborers $22</td></tr>
<tr><td>Wages per hour</td><td class="num">$78.00</td><td class="num">$126.00</td></tr>
<tr><td>Wages × 1.2515</td><td class="num">$97.62</td><td class="num">$157.69</td></tr>
<tr><td>Benefits</td><td class="num">3 × $3.50 = $10.50</td><td class="num">5 × $3.50 = $17.50</td></tr>
<tr><td><strong>Crew per hour</strong></td><td class="num"><strong>$108.12</strong></td><td class="num"><strong>$175.19</strong></td></tr>
<tr><td>Heads set per crew-hour (from your records)</td><td class="num">9</td><td class="num">17</td></tr>
<tr><td>LH per head</td><td class="num">3 ÷ 9 = 0.333</td><td class="num">5 ÷ 17 = 0.294</td></tr>
<tr><td><strong>Labor cost per head</strong></td><td class="num"><strong>$108.12 ÷ 9 = $12.01</strong></td><td class="num"><strong>$175.19 ÷ 17 = $10.31</strong></td></tr>
</tbody></table></div>`,
  body: `<p>Crew B costs 62% more per hour, but sets heads 14% cheaper, because the installer keeps the laborers busy. On 1,000 heads, that's (12.01 − 10.31) × 1,000 = <strong>$1,700</strong>. On a 40-head zone the difference disappears, because the big crew runs out of work face.</p>`,
  watch: `<p>The output numbers here are made up. Get yours by timing real crews on real jobs. If you don't have the data, use your standard crew and its rates.</p>`
},

{ h: "Production rates",
  lead: "A production rate says how fast work gets done. Write it as labor hours per unit, so it works for any crew size.",
  body: `<div class="twocol">
<div><h3>Labor hours per unit (LH/unit)</h3><ul>
<li>0.30 LH per spray head</li>
<li>0.04 LH per LF (linear foot) of lateral</li>
<li>Works for a crew of 2 or 6</li>
<li>Best for estimating</li>
</ul></div>
<div><h3>Units per crew-hour or crew-day</h3><ul>
<li>“Our 4-person crew sets 13 heads an hour”</li>
<li>“We put in 250 LF of main a day”</li>
<li>Easy to picture in the field</li>
<li>Depends on crew size</li>
</ul></div>
</div>
<p><strong>Converting:</strong> units per crew-hour = crew size ÷ LH per unit. With 4 people and 0.30 LH per head: 4 ÷ 0.30 = 13.3 heads per crew-hour.</p>`,
  watch: `<p>Production rates found online or in national cost books come from other crews, other soils and other wage levels. Use them only as a rough check. Your own timecards are the best source.</p>`
},

{ h: "Building rates from your past jobs",
  lead: "Your company has done C-27 work for years. That history is your best production data, if you dig it out.",
  body: `<ol class="steps">
<li><div><b>Pick 3 to 5 finished jobs</b>Ones similar to what you'll bid: commercial or large residential irrigation and planting.</div></li>
<li class="hl"><div><b>Get the installed quantities</b>From the plans, as-builts (drawings marked up to show what was really built) or invoices: LF of pipe by size, heads, valves, plants by size.</div></li>
<li class="hl"><div><b>Get the hours by task</b>From timecards or daily reports. If hours weren't split by task, ask the foreman to help divide them.</div></li>
<li><div><b>Divide</b>Hours ÷ quantity = LH per unit.</div></li>
<li><div><b>Write down the conditions</b>Soil, slope, access, crew size, season. A rate means little without them.</div></li>
<li><div><b>Compare across jobs</b>Use the middle value as your standard rate, and note why the high and low jobs were different.</div></li>
</ol>`,
  ex: `<p>Practice example: a past job had 2,400 LF of 1" and ¾" lateral, and timecards show 88 labor hours of trenching, pipe and backfill. 88 ÷ 2,400 = 0.037 LH per LF. Two other jobs came out at 0.041 and 0.052 (rocky site). Standard rate: about 0.04, with a rock adjustment.</p>`,
  deeper: `<p>From now on, set up cost codes on every job (for example: 01 mainline, 02 laterals, 03 heads, 04 valves and wire, 05 controller, 10 soil prep, 11 plants by size, 12 mulch, 20 establishment) and have foremen record hours by code every day. In a year you'll have far better rates than any book.</p>`
},

{ h: "The production rate card",
  lead: "Every rate in your library gets its own card (one row in a spreadsheet). The card says where the number came from, so you can trust it or fix it.",
  exLabel: "Rate card template (one row per task), filled with a practice example",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Field</th><th>Example entry</th></tr></thead>
<tbody>
<tr><td>Cost code and task</td><td>03 · Pop-up spray head with swing joint, set and adjust</td></tr>
<tr><td>Unit</td><td>EA (each)</td></tr>
<tr><td>Standard rate (LH per unit)</td><td>0.32</td></tr>
<tr><td>Range seen</td><td>0.28–0.35</td></tr>
<tr><td>Normal conditions</td><td>Flat, normal soil, open site, lateral already in</td></tr>
<tr><td>Crew it came from</td><td>Foreman + 3</td></tr>
<tr><td>Source jobs</td><td>Job 2311 (310 heads), 2402 (180), 2418 (420)</td></tr>
<tr><td>What's included</td><td>Swing joint, head, nozzle, flush, adjust; full paid day</td></tr>
<tr><td>What's not included</td><td>Trench and lateral pipe (code 02)</td></tr>
<tr><td>Adjustments</td><td>Slope 2:1 ×1.4 (example); tight planters ×1.2</td></tr>
<tr><td>Last updated / by</td><td>[date] / estimator</td></tr>
</tbody></table></div>`,
  watch: `<p>The “included” and “not included” lines prevent the most common double count: pricing the trench in the head rate and again in the pipe rate.</p>`
},

{ h: "Foreman daily report and cost codes",
  lead: "Rates come from hours by task. Hours by task come from a simple daily report the foreman fills out before leaving the job.",
  exLabel: "Daily report template (paper or phone app)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Field</th><th>Example entry</th></tr></thead>
<tbody>
<tr><td>Job name, number, date, weather</td><td>Retail pad, 2418, [date], sunny, dry soil</td></tr>
<tr><td>Crew on site and hours each</td><td>Foreman 8, installer 8, laborers 8, 8</td></tr>
<tr><td>Hours by cost code</td><td>02 Laterals 14 · 03 Heads 12 · 04 Valves 4 · Travel/load 2</td></tr>
<tr><td>Quantity installed by cost code</td><td>02: 380 LF · 03: 38 heads · 04: 2 valves</td></tr>
<tr><td>Equipment used and hours</td><td>Walk-behind trencher 5 h</td></tr>
<tr><td>Delays and why</td><td>Waited 1 h for GC to move a dumpster</td></tr>
<tr><td>Extra work or changes</td><td>Added 2 heads at the GC's request (photo)</td></tr>
<tr><td>Signature</td><td>Foreman</td></tr>
</tbody></table></div>
<p>Check: hours by code add to the crew's paid hours: 14 + 12 + 4 + 2 = 32 = 4 workers × 8.</p>`,
  body: `<p>Keep the cost code list short, 8 to 15 codes, and the same on every job. Use the same codes in your estimate, so you can compare line for line.</p>`,
  watch: `<p>The “delays” and “extra work” lines are also your evidence for change orders (Module 16). Photos with dates help.</p>`
},

{ h: "Example production rates",
  lead: "A starting table so you can practice. These are example numbers for training only. Replace every line with your own rates.",
  exLabel: "Example rates for practice (normal soil, flat ground, good access, daytime)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Task</th><th>Unit</th><th class="num">Example LH per unit</th><th class="num">4-person crew, per hour</th></tr></thead>
<tbody>
<tr><td>Lateral pipe to 1½", machine trench, backfill</td><td>LF</td><td class="num">0.04</td><td class="num">100 LF</td></tr>
<tr><td>Mainline 3"–4", trench, lay, backfill, compact</td><td>LF</td><td class="num">0.12–0.16</td><td class="num">25–33 LF</td></tr>
<tr><td>Valve wire in open trench</td><td>LF</td><td class="num">0.005</td><td class="num">800 LF</td></tr>
<tr><td>Spray head with swing joint</td><td>EA</td><td class="num">0.30</td><td class="num">13</td></tr>
<tr><td>Gear-drive rotor with swing joint</td><td>EA</td><td class="num">0.50</td><td class="num">8</td></tr>
<tr><td>Remote control valve with box and wiring</td><td>EA</td><td class="num">1.5</td><td class="num">2.7</td></tr>
<tr><td>1-gallon plant</td><td>EA</td><td class="num">0.10–0.15</td><td class="num">27–40</td></tr>
<tr><td>5-gallon plant</td><td>EA</td><td class="num">0.25–0.35</td><td class="num">11–16</td></tr>
<tr><td>15-gallon tree with stakes</td><td>EA</td><td class="num">0.75–1.0</td><td class="num">4–5</td></tr>
<tr><td>24" box tree, with machine</td><td>EA</td><td class="num">3–4 plus machine</td><td class="num">1–1.3</td></tr>
<tr><td>Wood mulch, 3" deep, by wheelbarrow</td><td>CY (cubic yard)</td><td class="num">0.6–1.0</td><td class="num">4–7 CY</td></tr>
</tbody></table></div>`,
  watch: `<p>Never put a number from this table into a real bid without checking it against your own jobs. The purpose here is to practice the math, not to price work.</p>`
},

{ h: "Production rate library · irrigation",
  lead: "A fuller list of irrigation tasks to build your library around. Every number is an example to practice with. Replace each one with your own data.",
  exLabel: "Example library (practice numbers; normal conditions, daytime)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Cost code · task</th><th>Unit</th><th class="num">Example LH per unit</th></tr></thead>
<tbody>
<tr><td>01 · Hand trench 12" deep, normal soil</td><td>LF</td><td class="num">0.10</td></tr>
<tr><td>01 · Machine trench 18"–24" for main, ride-on trencher</td><td>LF</td><td class="num">0.02 + machine</td></tr>
<tr><td>01 · Mainline 2" PVC, lay, glue, test, backfill</td><td>LF</td><td class="num">0.06</td></tr>
<tr><td>01 · Mainline 3"–4" PVC, with thrust blocks</td><td>LF</td><td class="num">0.12–0.16</td></tr>
<tr><td>02 · Lateral ¾"–1½", in open trench</td><td>LF</td><td class="num">0.03</td></tr>
<tr><td>02 · Sleeve under paving, open cut before paving</td><td>LF</td><td class="num">0.08</td></tr>
<tr><td>03 · Spray head with swing joint</td><td>EA</td><td class="num">0.30</td></tr>
<tr><td>03 · Rotor with swing joint</td><td>EA</td><td class="num">0.50</td></tr>
<tr><td>03 · Bubbler or tree well assembly</td><td>EA</td><td class="num">0.40</td></tr>
<tr><td>03 · Drip line, on grade, staked</td><td>LF</td><td class="num">0.01</td></tr>
<tr><td>04 · Remote control valve, box, wire splices</td><td>EA</td><td class="num">1.5</td></tr>
<tr><td>04 · Quick coupler with swing joint</td><td>EA</td><td class="num">0.75</td></tr>
<tr><td>04 · Valve wire pulled in open trench</td><td>LF</td><td class="num">0.005</td></tr>
<tr><td>05 · Controller, wall or pedestal mount, connect wires</td><td>EA</td><td class="num">6–10</td></tr>
<tr><td>05 · Backflow preventer 1"–2" with enclosure and pad</td><td>EA</td><td class="num">8–12</td></tr>
<tr><td>06 · Flush, pressure test, coverage test and adjust</td><td>per zone</td><td class="num">1.5–2.5</td></tr>
</tbody></table></div>`,
  watch: `<p>Controller and backflow hours vary a lot with power, concrete pads and the water agency's inspection. Check the details on the plans each time; don't trust a library number blindly for those.</p>`
},

{ h: "Production rate library · planting, soil and mulch",
  lead: "The same idea for planting work. Example numbers for practice only; build yours from your own jobs.",
  exLabel: "Example library (practice numbers; normal soil, flat, good access)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Cost code · task</th><th>Unit</th><th class="num">Example LH per unit</th></tr></thead>
<tbody>
<tr><td>10 · Weed removal and clearing, light</td><td>1,000 SF</td><td class="num">2–4</td></tr>
<tr><td>10 · Spread amendment and till 6", with tiller</td><td>1,000 SF</td><td class="num">2–3</td></tr>
<tr><td>10 · Fine grade planting areas by hand</td><td>1,000 SF</td><td class="num">3–5</td></tr>
<tr><td>11 · Groundcover from flats or rooted cuttings</td><td>EA</td><td class="num">0.02–0.04</td></tr>
<tr><td>11 · 1-gallon plant</td><td>EA</td><td class="num">0.10–0.15</td></tr>
<tr><td>11 · 5-gallon plant</td><td>EA</td><td class="num">0.25–0.35</td></tr>
<tr><td>11 · 15-gallon tree, staked</td><td>EA</td><td class="num">0.75–1.0</td></tr>
<tr><td>11 · 24" box tree, with machine and staking</td><td>EA</td><td class="num">3–4 plus machine</td></tr>
<tr><td>11 · 36" box tree, with machine</td><td>EA</td><td class="num">5–7 plus machine</td></tr>
<tr><td>12 · Wood mulch 3", wheelbarrow</td><td>CY</td><td class="num">0.6–1.0</td></tr>
<tr><td>12 · Wood mulch 3", blown in by a mulch-blower sub</td><td>CY</td><td class="num">Sub price</td></tr>
<tr><td>12 · Rock mulch 3", by hand</td><td>TON</td><td class="num">1.0–1.5</td></tr>
<tr><td>13 · Hydroseed</td><td>SF</td><td class="num">Usually subcontracted</td></tr>
<tr><td>13 · Fiber rolls, staked</td><td>LF</td><td class="num">0.02–0.03</td></tr>
<tr><td>20 · Plant establishment visit (per crew visit)</td><td>visit</td><td class="num">From your maintenance records</td></tr>
</tbody></table></div>`,
  watch: `<p>Hydroseed on the 11-422004, 11-430674 and 11-431064 Caltrans jobs ran $0.10 to $0.25 per SF all-in (bid item 210430). Most landscape contractors subcontract it. Get a sub quote rather than building a rate. Grading, demolition and hardscape rates belong to those scopes; see <a href="#m17-1">Module 17</a>.</p>`,
  src: "Caltrans Bid Summaries, item 210430 Hydroseed: 11-422004 item 43, 11-431064 item 63, 11-430674 item 99 (Real Bid Lab data)."
},

{ h: "Adjusting for site conditions",
  lead: "Your standard rates assume a normal site. Most commercial sites aren't normal somewhere. Adjust the rate for the part of the job where conditions change.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Condition</th><th>What it does</th><th>Example adjustment (practice)</th></tr></thead>
<tbody>
<tr><td>Slopes</td><td>Slower walking, hand carrying, safety lines on steep slopes</td><td>3:1 slope (3 feet across for every 1 foot up) ×1.15–1.3; 2:1 slope ×1.3–1.6</td></tr>
<tr><td>Rock, hardpan, caliche</td><td>Trencher can't cut, or wears out fast</td><td>×1.5–3, or change the method (rock trencher, breaker)</td></tr>
<tr><td>Tight access</td><td>No machines, hand digging, long carries</td><td>×1.2–1.5</td></tr>
<tr><td>Existing utilities</td><td>Potholing, hand digging near lines</td><td>Add hours per crossing</td></tr>
<tr><td>Freeway or night work</td><td>Short windows, setup and teardown of closures, lighting</td><td>Figure productive hours per shift (later slides)</td></tr>
<tr><td>Recycled water</td><td>Purple materials, warning tape along the main, signs, separation from drinking water lines, inspections, 150 psi (pounds per square inch) tests on 11-428704</td><td>Add the extra tasks as their own hours</td></tr>
<tr><td>Working around an open site</td><td>Tenants, traffic, other trades in the way</td><td>×1.1–1.25</td></tr>
</tbody></table></div>`,
  ex: `<p>A job has 3,000 LF of lateral: 2,000 LF on flat ground and 1,000 LF on a 2:1 slope. Flat: 2,000 × 0.04 = 80 LH. Slope: 1,000 × 0.04 × 1.5 = 60 LH. Total 140 LH, instead of 120 LH if you'd used one rate for everything.</p>`,
  watch: `<p>Walk the site before you price it (Module 12). Rock, slope and access are much easier to see in person than on a plan.</p>`
},

{ h: "From takeoff to labor hours",
  lead: "Put a production rate next to every takeoff line. The sum is the labor for the job.",
  exLabel: "Worked example: the spray zone from Module 8 (example rates)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Qty</th><th class="num">LH per unit</th><th class="num">Labor hours</th></tr></thead>
<tbody>
<tr><td>Spray heads with swing joints</td><td class="num">22 EA</td><td class="num">0.30</td><td class="num">6.6</td></tr>
<tr><td>Lateral pipe (160 LF 1" + 240 LF ¾")</td><td class="num">400 LF</td><td class="num">0.04</td><td class="num">16.0</td></tr>
<tr><td>Valve with box and wiring</td><td class="num">1 EA</td><td class="num">1.5</td><td class="num">1.5</td></tr>
<tr><td>Valve wire</td><td class="num">300 LF</td><td class="num">0.005</td><td class="num">1.5</td></tr>
<tr><td>Flush, test and adjust</td><td class="num">1 LS (lump sum)</td><td class="num">2.0</td><td class="num">2.0</td></tr>
<tr><td colspan="3"><strong>Total labor hours</strong></td><td class="num"><strong>27.6</strong></td></tr>
</tbody></table></div>
<p><strong>Labor cost:</strong> 27.6 LH × $36.04 = <strong>$994.70</strong>, or $994.70 ÷ 22 = $45.21 per head.</p>
<p><strong>With material from Module 8</strong> ($43.87 per head), the zone costs about $89.08 per head before equipment, overhead and profit.</p>`,
  body: `<p>Check the result in crew-days: 27.6 LH ÷ 4 people ÷ 8 hours = 0.86 crew-days. Ask yourself: “Could my crew finish this zone in a day?” If your gut says no, find out which rate is off.</p>`
},

{ h: "Supervision, small tools and trucks",
  lead: "Some costs don't belong to any one item but grow with the job's length. Price them per day or as a percent of labor.",
  body: `<ul>
<li><strong>Supervision above the foreman:</strong> superintendent or PM (project manager) site visits, meetings, inspections. Price as days or hours per week for the length of the job. Module 10 decides what's job cost and what's overhead.</li>
<li><strong>Small tools and consumables:</strong> shovels, pipe cutters, saw blades, glue brushes, safety gear. Many estimators use a small percent of labor (an example range for practice is 2% to 5%). Check it against what you actually spend in a year.</li>
<li><strong>Trucks:</strong> crew trucks, a dump truck, a trailer. Price as a daily rate times the days on the job.</li>
<li><strong>Job site extras:</strong> portable toilet, water for testing, storage container, fencing, trash. Price them per month.</li>
</ul>`,
  exLabel: "Practice example: daily cost of a crew truck (made-up numbers)",
  ex: `<ul>
<li>Ownership and insurance: $13,800 per year ÷ 230 working days = $60.00 per day</li>
<li>Fuel: 6 gallons × $5.00 = $30.00 per day</li>
<li>Maintenance and tires: $5.00 per day</li>
<li><strong>Truck cost: $95.00 per working day</strong></li>
</ul>`,
  watch: `<p>If a job runs longer than planned, every one of these costs keeps adding up. That's why schedule matters to price.</p>`
},

{ h: "Travel time and mobilization",
  lead: "Distance costs money every single day of the job. Count the drive, and count every time you move crews and machines in and out.",
  body: `<ul>
<li><strong>Daily travel:</strong> paid drive time × crew size × days on site. Plus truck miles.</li>
<li><strong>Mobilization (move-in):</strong> loading, hauling and unloading equipment, setting up storage and layout. <strong>Demobilization (move-out)</strong> is the same in reverse.</li>
<li><strong>Phased jobs:</strong> each phase is another move-in and move-out. Count them from the schedule.</li>
<li><strong>Return trips:</strong> punch list (the final fix-it list), inspections and establishment visits are extra trips after the main work.</li>
<li><strong>Prevailing wage travel:</strong> some crafts require travel or subsistence pay by distance. Check each craft's Travel PDF on DIR's site (Module 11).</li>
</ul>`,
  ex: `<p><strong>Practice example (made up):</strong> the job is 45 minutes from the yard each way. Crew of 4, 25 crew-days on site. Paid travel: 1.5 h × 4 workers × 25 days = <strong>150 LH</strong>. At $36.04 per LH, that's <strong>$5,406</strong>, before truck miles. If your production rates came from timecards on jobs 15 minutes from the yard, they hold only 0.5 h of drive per day, so add the extra 1.0 h per worker per day: 1.0 × 4 × 25 × $36.04 = $3,604.</p>`,
  watch: `<p>Far jobs also mean more lost time for forgotten parts. Add a parts-run allowance or stock the truck well.</p>`
},

{ h: "Equipment: own or rent?",
  lead: "Owned equipment isn't free just because it's paid off. Rented equipment costs more per day but nothing when it's idle.",
  body: `<div class="twocol">
<div><h3>Own it when</h3><ul>
<li>You use it most working days (a mini excavator, a trencher, a skid steer for a busy company)</li>
<li>You can keep it maintained</li>
<li>You have a place to store it</li>
<li>Cash or financing is available</li>
</ul></div>
<div><h3>Rent it when</h3><ul>
<li>You need it a few weeks a year (stump grinder, auger, large excavator, rock trencher)</li>
<li>The job needs a special machine</li>
<li>You want the rental yard to handle repairs</li>
<li>You're not sure the work will continue</li>
</ul></div>
</div>
<p>Either way, every bid carries an equipment cost for each machine. Owned equipment gets an hourly rate (next slide). Rented equipment gets the rental rate plus delivery, pickup, fuel and damage waiver.</p>`,
  deeper: `<p>Caltrans publishes <a href="https://dot.ca.gov/programs/construction/equipment-rental-rates-and-labor-surcharge" target="_blank" rel="noopener">Labor Surcharge and Equipment Rental Rates</a>, used to pay for extra work done at force account (paid by actual time and materials). Its equipment rates show how ownership and operating costs are built for many machine types. They're a useful check on your own rates and the basis for pricing change order work on Caltrans jobs.</p>`
},

{ h: "Worked example · Hourly cost of an owned machine",
  lead: "Owned equipment cost has two parts: owning it (whether it runs or not) and operating it (only when it runs).",
  exLabel: "Practice example: mini excavator (made-up numbers)",
  ex: `<p><strong>Ownership cost per year</strong></p>
<ul>
<li>Purchase $60,000; expected resale after 5 years $18,000</li>
<li>Depreciation: ($60,000 − $18,000) ÷ 5 = $8,400</li>
<li>Interest on money tied up: 6% × average value ($60,000 + $18,000) ÷ 2 = 6% × $39,000 = $2,340</li>
<li>Insurance, registration and storage: $2,400</li>
<li><strong>Ownership: $13,140 per year</strong></li>
</ul>
<p><strong>Operating cost per hour</strong></p>
<ul>
<li>Fuel: 1.5 gallons × $5.00 = $7.50</li>
<li>Maintenance and repairs: $6.00</li>
<li>Wear parts (tracks, teeth, hoses): $3.00</li>
<li><strong>Operating: $16.50 per hour</strong></li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Hours used per year</th><th class="num">Ownership per hour</th><th class="num">Operating per hour</th><th class="num">Total per hour</th></tr></thead>
<tbody>
<tr><td>800</td><td class="num">$13,140 ÷ 800 = $16.43</td><td class="num">$16.50</td><td class="num"><strong>$32.93</strong></td></tr>
<tr><td>400</td><td class="num">$13,140 ÷ 400 = $32.85</td><td class="num">$16.50</td><td class="num"><strong>$49.35</strong></td></tr>
</tbody></table></div>`,
  body: `<p>The fewer hours a machine works, the more each hour costs. If your excavator sits half the year, renting may be cheaper.</p>`,
  watch: `<p>The operator is labor, not equipment. Don't put the operator's wage in the machine rate and again in the crew rate.</p>`
},

{ h: "Worked example · Own or rent break-even",
  lead: "How many days a year must you use a machine before owning beats renting? Divide the yearly ownership cost by what you save each day you use your own.",
  exLabel: "Practice example: the same mini excavator (made-up rental numbers)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">Own</th><th class="num">Rent</th></tr></thead>
<tbody>
<tr><td>Fixed cost per year</td><td class="num">$13,140 (ownership)</td><td class="num">$0</td></tr>
<tr><td>Cost per 8-hour day used</td><td class="num">Operating $16.50 × 8 = $132</td><td class="num">Rental $350 + fuel $60 = $410</td></tr>
<tr><td>Saving per day if you own</td><td class="num" colspan="2">$410 − $132 = $278</td></tr>
<tr><td><strong>Break-even</strong></td><td class="num" colspan="2"><strong>$13,140 ÷ $278 = 47.3 days a year</strong></td></tr>
</tbody></table></div>
<p>If the company will use the excavator more than about <strong>48 days a year</strong>, owning is cheaper. Fewer, and renting wins.</p>`,
  body: `<p>This simple test leaves out delivery charges (renting) and your own hauling (owning). Add them if they're large. Weekly and monthly rental rates also lower the rental cost per day, which raises the break-even.</p>`,
  watch: `<p>A new commercial division doesn't know its volume yet. Rent for the first season, track the days each machine was needed, then run this test with real numbers.</p>`
},

{ h: "Rentals and mobilization",
  lead: "A rental's daily rate is only part of its cost. Price the whole trip.",
  body: `<ul>
<li><strong>Rate periods:</strong> day, week and 4-week month. A week usually costs much less than 5 days; a month much less than 4 weeks. Price the period you'll actually need.</li>
<li><strong>Delivery and pickup:</strong> each way, often more for larger machines or far locations.</li>
<li><strong>Fuel:</strong> returned full, or refueling charges.</li>
<li><strong>Damage waiver and environmental fees:</strong> often a percent of the rental.</li>
<li><strong>Sales tax on rentals.</strong></li>
<li><strong>Mobilization of owned equipment:</strong> your truck, trailer and driver time to move it to the job and back. Count every move. If the job is phased, you'll move it several times.</li>
</ul>`,
  ex: `<p>Practice example (made up): a ride-on trencher at $425/day or $1,300/week. Delivery $150 each way. For 4 working days, the week rate ($1,300) beats 4 days ($1,700). Total: $1,300 + $300 delivery and pickup = $1,600, plus fuel.</p>`,
  watch: `<p>Get rental quotes from two San Diego rental yards for the machines you rent most, and add them to your price list with the date, just like materials (Module 8).</p>`
},

{ h: "Worked example · Equipment for a whole job",
  lead: "List every machine, how long you need it, and every move. Practice numbers; use your own rates and rental quotes.",
  exLabel: "Practice example: a 10-week landscape and irrigation job (made-up rates)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Machine</th><th>Basis</th><th class="num">Cost</th></tr></thead>
<tbody>
<tr><td>Ride-on trencher (rented)</td><td>2 weeks × $1,300 + delivery and pickup $300</td><td class="num">$2,900.00</td></tr>
<tr><td>Trencher fuel</td><td>10 days × $45</td><td class="num">$450.00</td></tr>
<tr><td>Mini excavator (owned)</td><td>6 days × 8 h × $32.93</td><td class="num">$1,580.64</td></tr>
<tr><td>Move owned excavator in and out</td><td>2 moves × $160 (truck, trailer, driver time)</td><td class="num">$320.00</td></tr>
<tr><td>Skid steer (rented) for box trees and mulch</td><td>3 days × $325 + delivery and pickup $300</td><td class="num">$1,275.00</td></tr>
<tr><td>Plate compactor (rented)</td><td>4 days × $95</td><td class="num">$380.00</td></tr>
<tr><td>Dump truck (owned)</td><td>8 days × $180</td><td class="num">$1,440.00</td></tr>
<tr><td colspan="2"><strong>Equipment for the job</strong></td><td class="num"><strong>$8,345.64</strong></td></tr>
</tbody></table></div>`,
  body: `<p>Then spread it: put each machine's cost on the bid items it serves (trencher to pipe items, skid steer to trees and mulch), or keep one equipment line and spread it at the end. Either way, every dollar must land somewhere in your prices.</p>`,
  watch: `<p>Check the schedule: if the trencher is needed in week 2 and again in week 7, that's two rentals and two deliveries, not one.</p>`
},

{ h: "Trenching methods",
  lead: "The trench is often the biggest labor cost in irrigation. The method you pick sets the production rate.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Method</th><th>Best for</th><th>Watch for</th></tr></thead>
<tbody>
<tr><td>Hand trenching</td><td>Short runs, tight spots, near utilities and roots</td><td>Slowest; needed near existing lines</td></tr>
<tr><td>Walk-behind trencher</td><td>Laterals in planting areas, moderate access</td><td>Struggles in rock and hard clay</td></tr>
<tr><td>Ride-on trencher</td><td>Long laterals and mainlines, open sites</td><td>Needs room to turn and a trailer to move</td></tr>
<tr><td>Mini excavator</td><td>Mainlines, deep or wide trenches, valve and backflow pits</td><td>Wider trench means more backfill and compaction</td></tr>
<tr><td>Vibratory plow (pulling pipe)</td><td>Small poly or flexible lines in turf, where the specs allow it</td><td>Rarely allowed for commercial PVC</td></tr>
<tr><td>Boring (directional or jack-and-bore)</td><td>Under paving, driveways and ramps</td><td>Usually subcontracted</td></tr>
</tbody></table></div>`,
  ex: `<p>On 11-428704, the winning bidder subcontracted boring for the ramp crossings: its subcontractor list shows “Item 66, 54%, boring only.” The landscape company did the rest of the trenching itself.</p>`,
  watch: `<p>Call DigAlert (811) before you dig, and price the hand digging and potholing needed near marked utilities. The utility sheets on 11-428704 showed gas, sewer, telecom and Otay Water District recycled lines along the work.</p>`,
  src: "11-428704 ACCU Construction bid book (subcontractor list); 11-428704 plans U-1 to U-7."
},

{ h: "Productivity losses",
  lead: "Some days your crew is paid for 8 hours and works far fewer. Price those lost hours, or you'll pay for them yourself.",
  body: `<ul>
<li><strong>Weather:</strong> rain stops trenching and planting, and wet soil slows everything for days after. Heat slows work and adds water breaks.</li>
<li><strong>Short work windows:</strong> hours allowed by the owner, school schedules, noise rules, tenant hours.</li>
<li><strong>Traffic closures:</strong> on freeway jobs, you can only work while a closure is up.</li>
<li><strong>Stop-and-go work:</strong> phased jobs, waiting on other trades, many small move-ins.</li>
<li><strong>Waiting periods in the specs:</strong> for example, 11-428704 required 21 days after irrigation before planting in weed germination areas.</li>
<li><strong>Overtime and long shifts:</strong> output per hour drops when people are tired.</li>
</ul>`,
  exLabel: "Example using the 11-428704 closure windows",
  ex: `<p>The lane closure charts allowed I-805 lane closures roughly 9 PM to 5 AM Monday through Thursday, and right shoulder closures roughly 9 AM to 3 PM on weekdays (see Module 15).</p>
<ul>
<li><strong>Shoulder work:</strong> a 6-hour window. If the closure takes about 30 minutes to set and 30 to remove (an assumption for practice), about 5 productive hours remain. Crew paid 8 hours: 5 ÷ 8 = 62.5% of a normal day.</li>
<li><strong>Night lane closure:</strong> an 8-hour window, minus about 1.5 hours for setup and pickup (practice assumption) = 6.5 hours. 6.5 ÷ 8 = 81%, plus lighting and any night pay required by the wage determination.</li>
<li>A crew that puts in 250 LF of main a day on an open site would make about 250 × 0.625 = 156 LF in a shoulder shift.</li>
</ul>`,
  deeper: `<p>Check each job's closure charts and work hour rules before you set production. On 11-428704 they were in Special Provisions 12-4.02C. Holidays, special events and the holiday shopping blackout near Plaza Bonita removed more days.</p>`,
  src: "11-428704 Special Provisions 12-4.02C (Charts G1–G3), 20-1.03E."
},

{ h: "Night and freeway work",
  lead: "Freeway jobs add costs that don't exist on a retail pad: closures, lighting, night pay, safety gear and slower work. List them one by one.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Cost</th><th>How to price it</th></tr></thead>
<tbody>
<tr><td>Traffic control (closures, cones, signs, arrow boards)</td><td>Usually a separate bid item or a traffic control sub. On 11-428704 it was item 4, Traffic Control System. Don't bury it in your planting rates.</td></tr>
<tr><td>Lost productive hours per shift</td><td>Window minus setup and pickup, divided by paid hours (previous slide)</td></tr>
<tr><td>Night shift pay</td><td>Private: your company policy. Public: the craft's shift rules on the DIR determination (Module 11).</td></tr>
<tr><td>Light towers and fuel</td><td>Rental per night plus fuel</td></tr>
<tr><td>Safety gear and training</td><td>High-visibility gear, worker training, a safety person if the specs require one</td></tr>
<tr><td>Minimum shift</td><td>If a closure gets canceled after the crew shows up, you still pay the crew. Add an allowance.</td></tr>
<tr><td>Material staging</td><td>Smaller loads, more trips; can't leave material on the shoulder</td></tr>
</tbody></table></div>`,
  watch: `<p>Night work hurts output more than the clock shows: harder to see layout, harder to check work, tired crews the next day. Many estimators cut night production further than the window alone. Build your factor from your own night jobs.</p>`,
  src: "Caltrans Bid Summary, 11-428704 item 4 (Traffic Control System); 11-428704 Special Provisions 12-4.02C."
},

{ h: "Worked example · Planting on a freeway shoulder",
  lead: "1,460 one-gallon plants, the same count as 11-428704 item 27, planted in a 9 AM to 3 PM shoulder window. Real 2026 DIR laborer rate; production and burden are practice examples.",
  body: `<ol class="steps">
<li><div><b>Normal labor hours</b>1,460 × 0.12 LH (example) = 175.2 LH</div></li>
<li><div><b>Window factor</b>5 productive hours of 8 paid = 0.625</div></li>
<li class="hl"><div><b>Real paid hours</b>175.2 ÷ 0.625 = 280.32 LH</div></li>
<li><div><b>Rate per LH (2026 Landscape/Irrigation Laborer)</b>$76.67 total hourly + burden on the basic rate ($47.57 × 25.15% = $11.96) = $88.63</div></li>
<li><div><b>Labor at the window</b>280.32 × $88.63 = <strong>$24,844.76</strong></div></li>
<li><div><b>Labor if it were an open site</b>175.2 × $88.63 = $15,527.98</div></li>
<li class="hl"><div><b>Cost of the window</b>$24,844.76 − $15,527.98 = <strong>$9,316.78</strong>, or $6.38 more per plant</div></li>
</ol>`,
  ex: `<p>Labor alone comes to $24,844.76 ÷ 1,460 = <strong>$17.02 per plant</strong> before the plant, fertilizer packet, traffic control, overhead and profit. In 2021, the five counted bids on 11-428704 item 27 ran $8.00 to $85.00 all-in, median $18.00, winner $25.00. Wages have risen since 2021; compare carefully across years.</p>`,
  watch: `<p>Tenders could cut this cost on a state-funded job (Module 11). On a federal-aid job like 11-428704, the 2021 federal decision had no landscape tender, so tenders had to be paid at least the federal laborer rate.</p>`,
  src: "Caltrans Bid Summary 11-428704 item 27, Plant (Group A); DIR SD-102-X-14-2026-1; Module 11."
},

{ h: "Real benchmarks from Caltrans bids",
  lead: "The Real Bid Lab has every bidder's unit prices on five San Diego Caltrans jobs. Use them to check your all-in prices.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item and contract</th><th class="num">Qty</th><th class="num">Winner</th><th class="num">Median</th><th class="num">Range</th></tr></thead>
<tbody>
<tr><td colspan="5"><strong>1" Sch 40 (Schedule 40) plastic pipe (supply line), per LF</strong></td></tr>
<tr><td>11-422004 Carmel Valley (item 35)</td><td class="num">330</td><td class="num">$5.55</td><td class="num">$11.71</td><td class="num">$5.55–$20.00</td></tr>
<tr><td>11-428704 Chula Vista (item 57)</td><td class="num">1,390</td><td class="num">$7.00</td><td class="num">$7.00</td><td class="num">$4.30–$50.00</td></tr>
<tr><td>11-428804 San Ysidro (item 61)</td><td class="num">21,198</td><td class="num">$6.00</td><td class="num">$4.80</td><td class="num">$4.00–$6.00</td></tr>
<tr><td>11-431064 Otay Mesa (item 55)</td><td class="num">40,785</td><td class="num">$4.60</td><td class="num">$4.70</td><td class="num">$4.60–$7.20</td></tr>
<tr><td>11-430674 South County (item 82)</td><td class="num">57,127</td><td class="num">$4.50</td><td class="num">$4.95</td><td class="num">$4.50–$5.62</td></tr>
<tr><td colspan="5"><strong>Plant (Group A), 1-gallon, each</strong></td></tr>
<tr><td>11-422004 (item 22)</td><td class="num">440</td><td class="num">$8.30</td><td class="num">$10.15</td><td class="num">$5.00–$13.00</td></tr>
<tr><td>11-428704 (item 27)</td><td class="num">1,460</td><td class="num">$25.00</td><td class="num">$18.00</td><td class="num">$8.00–$85.00</td></tr>
<tr><td>11-428804 (item 36)</td><td class="num">5,220</td><td class="num">$10.00</td><td class="num">$10.00</td><td class="num">$6.00–$13.20</td></tr>
<tr><td>11-431064 (item 28)</td><td class="num">6,880</td><td class="num">$6.90</td><td class="num">$7.00</td><td class="num">$6.90–$11.90</td></tr>
<tr><td>11-430674 (item 37)</td><td class="num">31,900</td><td class="num">$8.30</td><td class="num">$7.45</td><td class="num">$6.00–$14.00</td></tr>
<tr><td colspan="5"><strong>Tree well sprinkler assembly, each</strong></td></tr>
<tr><td>11-428704 (item 51)</td><td class="num">180</td><td class="num">$90.00</td><td class="num">$60.00</td><td class="num">$20.30–$400.00</td></tr>
<tr><td>11-428804 (item 55)</td><td class="num">480</td><td class="num">$35.00</td><td class="num">$40.00</td><td class="num">$28.80–$78.00</td></tr>
<tr><td>11-431064 (item 48)</td><td class="num">1,900</td><td class="num">$58.00</td><td class="num">$48.00</td><td class="num">$45.00–$58.00</td></tr>
<tr><td>11-430674 (item 74)</td><td class="num">2,560</td><td class="num">$28.30</td><td class="num">$55.00</td><td class="num">$28.30–$70.00</td></tr>
</tbody></table></div>
<p>Medians use every bid on the Bid Summary except bids marked non-responsive or otherwise flagged. 11-422004 had no tree well item.</p>`,
  ex: `<p>What this shows:</p>
<ul>
<li><strong>Quantity drives unit price.</strong> 1" pipe ran about $12 per LF (median) on a 330 LF job and about $5 on jobs with 20,000+ LF. Setup and small-job time get spread over more feet.</li>
<li><strong>Across all 26 counted bids, 1" pipe had a median of $5.25 per LF.</strong> The 1-gallon plant median across 26 bids was $9.50. These are all-in prices: material, labor, equipment, overhead and profit, from 2021–2022.</li>
<li><strong>Outliers exist on every item.</strong> $50 per LF of pipe and $400 per tree well came from one bidder on 11-428704 that finished far behind. Use the middle of the pack.</li>
</ul>`,
  watch: `<p>Bidders shift money between items (Module 15), so one item's price can be high or low on purpose. Compare whole groups of items, and use these as a sanity check on your all-in price, not as a production rate.</p>`,
  src: "Caltrans Bid Summaries for 11-422004, 11-428704, 11-428804, 11-431064 and 11-430674 (Real Bid Lab data). Medians computed from each bidder's unit price."
},

{ h: "Real benchmarks · sprinklers, valves and devices",
  lead: "More all-in unit prices from the same five Caltrans jobs (bids from 2021–2022). Median across every counted bid on every job that had the item.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item (Caltrans item code)</th><th>Unit</th><th class="num">Jobs</th><th class="num">Bids</th><th class="num">Median, all bids</th><th class="num">Job medians, low to high</th></tr></thead>
<tbody>
<tr><td>Pop-up sprinkler assembly, gear driven (208447)</td><td>EA</td><td class="num">5</td><td class="num">26</td><td class="num">$94.50</td><td class="num">$80.00–$120.00</td></tr>
<tr><td>Riser sprinkler assembly, gear driven (208446)</td><td>EA</td><td class="num">4</td><td class="num">22</td><td class="num">$53.20</td><td class="num">$42.92–$64.50</td></tr>
<tr><td>Tree well sprinkler assembly (208445)</td><td>EA</td><td class="num">4</td><td class="num">22</td><td class="num">$54.00</td><td class="num">$40.00–$60.00</td></tr>
<tr><td>1" remote control valve (206562)</td><td>EA</td><td class="num">2</td><td class="num">8</td><td class="num">$449.00</td><td class="num">$385.00–$480.34</td></tr>
<tr><td>1½" remote control valve (206564)</td><td>EA</td><td class="num">4</td><td class="num">17</td><td class="num">$550.00</td><td class="num">$490.00–$614.50</td></tr>
<tr><td>2" remote control valve (206565)</td><td>EA</td><td class="num">2</td><td class="num">8</td><td class="num">$577.50</td><td class="num">$540.00–$590.00</td></tr>
<tr><td>2" gate valve (208575)</td><td>EA</td><td class="num">5</td><td class="num">26</td><td class="num">$583.00</td><td class="num">$500.00–$812.50</td></tr>
<tr><td>Flow sensor (208442)</td><td>EA</td><td class="num">4</td><td class="num">22</td><td class="num">$1,516.50</td><td class="num">$1,305.00–$2,530.00</td></tr>
<tr><td>2" backflow preventer assembly (208426)</td><td>EA</td><td class="num">2</td><td class="num">8</td><td class="num">$7,625.00</td><td class="num">$7,250.00–$8,100.00</td></tr>
<tr><td>3" plastic pipe, Class 315 (208607)</td><td>LF</td><td class="num">5</td><td class="num">26</td><td class="num">$12.60</td><td class="num">$10.60–$19.84</td></tr>
<tr><td>4" plastic pipe, Class 315 (208608)</td><td>LF</td><td class="num">2</td><td class="num">10</td><td class="num">$17.00</td><td class="num">$16.00–$18.00</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Controller check, 11-428704:</strong> the specs printed the Calsense '97B' 40-station controller at $9,743.66 before tax and delivery. On bid item 41 ('97B' controller and enclosure), the winner bid $15,000 and the median was $17,000. The gap pays for tax, delivery, the enclosure foundation, wiring, the vendor setup, overhead and profit. But on item 40 (modify controller '97A'), where the specs quoted $6,708.64 for the kit, the median bid was only $2,000, below the material alone. That's money shifted to other items, not a real cost (Module 10 and Module 15).</p>`,
  watch: `<p>Few bids sit behind some lines (8 bids for the 1" valve). Treat thin data as a hint, not a standard.</p>`,
  src: "Caltrans Bid Summaries for the five Real Bid Lab jobs (items by code as listed); 11-428704 Special Provisions 20-2.06B(2)(a) and 20-10.02B(1). Medians exclude bids flagged non-responsive or declined."
},

{ h: "Real benchmarks · plants, mulch, compost and establishment",
  lead: "Planting items from the same five jobs. The plant group letters come from each job's planting legend; check the legend before you compare.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item (code) and what it was on these jobs</th><th>Unit</th><th class="num">Bids</th><th class="num">Median, all bids</th><th class="num">Job medians, low to high</th></tr></thead>
<tbody>
<tr><td>Plant (Group H) (204008): iceplant cuttings</td><td>EA</td><td class="num">19</td><td class="num">$0.75</td><td class="num">$0.50–$0.80</td></tr>
<tr><td>Plant (Group A) (204035): No. 1 (1-gallon) container</td><td>EA</td><td class="num">26</td><td class="num">$9.50</td><td class="num">$7.00–$18.00</td></tr>
<tr><td>Plant (Group B) (204036): No. 5 (5-gallon) container</td><td>EA</td><td class="num">13</td><td class="num">$26.20</td><td class="num">$20.44–$40.00</td></tr>
<tr><td>Plant (Group U) (204038): No. 15 (15-gallon) trees</td><td>EA</td><td class="num">17</td><td class="num">$170.00</td><td class="num">$160.00–$185.00</td></tr>
<tr><td>Plant (Group K) (204011): 24" box trees</td><td>EA</td><td class="num">13</td><td class="num">$480.00</td><td class="num">$459.90–$600.00</td></tr>
<tr><td>Wood mulch (205035)</td><td>CY</td><td class="num">26</td><td class="num">$56.15</td><td class="num">$40.00–$145.00</td></tr>
<tr><td>Compost (210610)</td><td>CY</td><td class="num">22</td><td class="num">$56.50</td><td class="num">$45.70–$80.00</td></tr>
<tr><td>Hydroseed (210430)</td><td>SF</td><td class="num">12</td><td class="num">$0.105</td><td class="num">$0.10–$0.20</td></tr>
</tbody></table></div>
<p><strong>Plant establishment work (204099), lump sum:</strong> medians from $48,100 (11-428704, 250 working days) to $292,200 (11-430674, 750 working days). The 11-428704 winner bid $35,000 for 250 working days, about $140 a working day.</p>`,
  ex: `<p><strong>Size and quantity both matter.</strong> Wood mulch had a median of $145 per CY on 11-422004 (55 CY) and $40 per CY on 11-430674 (8,040 CY). Same item, same district, a 3.6 times difference, mostly from job size.</p>`,
  watch: `<p>Group letters aren't the same thing on every Caltrans job. On these jobs the legends showed A = No. 1, B = No. 5, U = No. 15 and K = 24" box trees, but always read the legend on the job you're bidding. Plant establishment prices swing widely because bidders move money in and out of it (Module 10).</p>`,
  src: "Caltrans Bid Summaries for the five Real Bid Lab jobs; planting legends in the 11-428804 and 11-431064 plans and 11-428704 plans PL-1 (plant groups). Medians exclude flagged bids."
},

{ h: "How to use benchmarks without fooling yourself",
  lead: "Benchmarks are a smoke alarm, not a price. Use them to find mistakes in your own numbers.",
  body: `<ol class="steps">
<li><div><b>1 · Price the item yourself first</b>Material + labor + equipment + overhead + profit. Don't look at the benchmark until you have your number.</div></li>
<li><div><b>2 · Find the closest match</b>Same item, similar quantity, similar site (freeway or not), similar year.</div></li>
<li class="hl"><div><b>3 · Compare to the median, not the winner</b>The winner may have moved money between items on purpose.</div></li>
<li><div><b>4 · Investigate gaps over about 25%</b>(Your choice of trigger.) Recheck quantity, production rate, crew rate and material price.</div></li>
<li><div><b>5 · Adjust for time</b>2021–2022 bids used 2021–2022 wages and prices. Prevailing wages have risen since.</div></li>
<li><div><b>6 · Write down what you found</b>“Our 1-gallon price is $11.20; median of similar jobs $9.50; difference is the shoulder window.” Then decide.</div></li>
</ol>`,
  watch: `<p>Never lower your price to match a benchmark without finding the reason. If your costs are real and the market is lower, the job may not be for you (Module 3 go/no-go).</p>`
},

{ h: "Worked example · 1,000 LF of 4\" mainline",
  lead: "Labor and equipment to install 1,000 LF of 4\" Class 315 PVC mainline on an open, flat site with normal soil. Production rates and costs are practice examples.",
  body: `<p><strong>Plan:</strong> the 4-person private crew from earlier, with a rented ride-on trencher and a plate compactor. Example production: 250 LF per crew-day for trench, lay, glue, thrust blocks, warning tape, backfill and compaction.</p>
<div class="tablewrap"><table>
<thead><tr><th>Step</th><th>Math</th><th class="num">Result</th></tr></thead>
<tbody>
<tr><td>Install days</td><td>1,000 LF ÷ 250 LF per day</td><td class="num">4.0 days</td></tr>
<tr><td>Pressure test, inspection, punch</td><td>Example</td><td class="num">0.5 day</td></tr>
<tr><td>Crew hours</td><td>4.5 days × 8 hours</td><td class="num">36 crew-hours</td></tr>
<tr><td>Labor hours (check)</td><td>36 × 4 people = 144 LH, or 0.144 LH per LF</td><td class="num">144 LH</td></tr>
<tr><td><strong>Labor</strong></td><td>36 × $144.16</td><td class="num"><strong>$5,189.76</strong></td></tr>
<tr><td>Trencher</td><td>Week rate</td><td class="num">$1,300.00</td></tr>
<tr><td>Trencher delivery and pickup</td><td>2 × $150</td><td class="num">$300.00</td></tr>
<tr><td>Trencher fuel</td><td>4 days × $45</td><td class="num">$180.00</td></tr>
<tr><td>Plate compactor</td><td>2 days × $95</td><td class="num">$190.00</td></tr>
<tr><td>Crew truck</td><td>4.5 days × $95</td><td class="num">$427.50</td></tr>
<tr><td><strong>Equipment</strong></td><td></td><td class="num"><strong>$2,397.50</strong></td></tr>
<tr><td>Small tools</td><td>3% × $5,189.76</td><td class="num">$155.69</td></tr>
<tr><td><strong>Labor, equipment and tools</strong></td><td>$5,189.76 + $2,397.50 + $155.69</td><td class="num"><strong>$7,742.95</strong></td></tr>
<tr><td><strong>Per LF</strong></td><td>$7,742.95 ÷ 1,000</td><td class="num"><strong>$7.74</strong></td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Same work at the 2021 prevailing wage crew rate ($289.53):</strong> labor 36 × $289.53 = $10,423.08, tools 3% = $312.69, equipment $2,397.50. Total $13,133.27, or <strong>$13.13 per LF</strong> before pipe, fittings, tax, overhead and profit.</p>
<p><strong>Compare to the real bids:</strong> on 11-428704 (7,493 LF of 4" main), bids ran $12.00 to $35.00 per LF all-in, median $16.00, and the winner bid $12.00. On 11-430674 (33,604 LF), the winner bid $18.00 and the median was $18.00. A $12.00 all-in price means the winner produced far more than 250 LF a day on long, straight shoulder runs. On long runs, production rate is the whole game.</p>`,
  watch: `<p>If this main were on a freeway shoulder with a 9 AM to 3 PM window, production would drop to about 156 LF per day (productivity slide) and labor would rise by about 60%. Always set production for the actual work window.</p>`,
  src: "Caltrans Bid Summaries 11-428704 item 63 and 11-430674 item 88."
},

{ h: "Check estimates against finished jobs",
  lead: "Every job is a test of your production rates. Compare what you estimated to what actually happened, and update your rates.",
  exLabel: "Practice example: estimated vs. actual hours log",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Cost code</th><th class="num">Qty</th><th class="num">Est. LH/unit</th><th class="num">Est. hours</th><th class="num">Actual hours</th><th class="num">Actual LH/unit</th><th class="num">Difference</th></tr></thead>
<tbody>
<tr><td>02 Laterals</td><td class="num">2,400 LF</td><td class="num">0.04</td><td class="num">96</td><td class="num">88</td><td class="num">0.037</td><td class="num">−8%</td></tr>
<tr><td>03 Spray heads</td><td class="num">310 EA</td><td class="num">0.30</td><td class="num">93</td><td class="num">109</td><td class="num">0.35</td><td class="num">+17%</td></tr>
<tr><td>04 Valves and wire</td><td class="num">14 EA</td><td class="num">1.5</td><td class="num">21</td><td class="num">26</td><td class="num">1.86</td><td class="num">+24%</td></tr>
<tr><td>11 1-gallon plants</td><td class="num">600 EA</td><td class="num">0.12</td><td class="num">72</td><td class="num">66</td><td class="num">0.11</td><td class="num">−8%</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td class="num"><strong>282</strong></td><td class="num"><strong>289</strong></td><td></td><td class="num"><strong>+2%</strong></td></tr>
</tbody></table></div>`,
  body: `<ul>
<li>The total looks fine, but heads and valves ran 17% to 24% over. On a heads-heavy job, that would hurt.</li>
<li>Ask the foreman why: different head type, rocky area, missing parts, rework?</li>
<li>Update the rate only after you see the same result on two or three jobs, or when the reason is clear.</li>
<li>Write the reason next to the number in your rate table.</li>
</ul>`,
  watch: `<p>This only works if foremen record hours by cost code every day. Make it simple: a short daily form or a phone app with the job's cost codes. Hours written up at the end of the week are guesses.</p>`
},

{ h: "Worked example · The job-cost feedback loop",
  lead: "Three finished jobs give you three rates for spray heads. Combine them the right way, then see what the change does to your next bid. Practice numbers.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Job</th><th class="num">Heads</th><th class="num">Actual LH</th><th class="num">LH per head</th></tr></thead>
<tbody>
<tr><td>2311 (retail pad)</td><td class="num">310</td><td class="num">109</td><td class="num">0.352</td></tr>
<tr><td>2402 (small office)</td><td class="num">180</td><td class="num">50</td><td class="num">0.278</td></tr>
<tr><td>2418 (apartment complex)</td><td class="num">420</td><td class="num">134</td><td class="num">0.319</td></tr>
<tr><td><strong>All three</strong></td><td class="num"><strong>910</strong></td><td class="num"><strong>293</strong></td><td class="num"><strong>293 ÷ 910 = 0.322</strong></td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Use the weighted rate</b>Total hours ÷ total heads = 0.322. Averaging the three rates ((0.352 + 0.278 + 0.319) ÷ 3 = 0.316) gives the small job too much say.</div></li>
<li><div><b>Round and update the rate card</b>New standard 0.32 (was 0.30). Note the three source jobs and the date.</div></li>
<li class="hl"><div><b>See what it changes</b>Next bid has 600 heads. Extra hours: 600 × 0.02 = 12 LH. At $36.04: 12 × $36.04 = <strong>$432.48</strong> more labor cost.</div></li>
<li><div><b>Tell the team</b>Foremen see their numbers used. They'll record hours more carefully.</div></li>
</ol>`,
  watch: `<p>If one job had a clear one-time cause (rework after vandalism, a wrong part), leave it out of the average and note why. Don't let one bad job set your standard.</p>`
},

{ h: "Common labor and equipment mistakes",
  lead: "These mistakes cost new commercial estimators more than any other part of the bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>What it costs</th><th>How to avoid it</th></tr></thead>
<tbody>
<tr><td>Using wages without burden</td><td>About 20%–30% low on labor (example range; yours depends on your rates)</td><td>Build crew rates in the spreadsheet</td></tr>
<tr><td>Residential crew rate on a public job</td><td>About half the real labor cost</td><td>Rebuild the crew from the DIR determination</td></tr>
<tr><td>Book rates instead of your own</td><td>Unknown, either way</td><td>Rate cards from your timecards</td></tr>
<tr><td>One rate for the whole site</td><td>Slopes, rock and tight areas underpriced</td><td>Split the takeoff by condition</td></tr>
<tr><td>Ignoring the work window</td><td>Up to 60% more labor on shoulder work (see examples)</td><td>Productive hours ÷ paid hours</td></tr>
<tr><td>Counting travel twice, or not at all</td><td>Too high or too low every day</td><td>Decide: in the rates or its own line</td></tr>
<tr><td>Operator in the machine rate and the crew rate</td><td>Double charge</td><td>Operator is labor only</td></tr>
<tr><td>Forgetting rental delivery and fuel</td><td>Hundreds per machine</td><td>Price the whole trip</td></tr>
<tr><td>Not tracking actual hours</td><td>Same mistake on every bid</td><td>Daily report by cost code</td></tr>
</tbody></table></div>`
},

{ h: "Scenarios · Labor decisions",
  lead: "Short situations you'll meet. Decide what you'd do, then read the right move.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>The right move</th><th>Why</th></tr></thead>
<tbody>
<tr><td>The GC's schedule gives you 10 working days for work your crew needs 14 days to do.</td><td>Price a second crew or overtime for the gap, and state the schedule assumption in your proposal.</td><td>The work hours don't shrink because the calendar did.</td></tr>
<tr><td>The foreman says your head rate is “way too fast.”</td><td>Ask what's different, pull the last three jobs' hours, and compare.</td><td>Field knowledge plus timecards beats either alone.</td></tr>
<tr><td>A job has 400 LF of lateral on a 2:1 slope and the rest is flat.</td><td>Split the takeoff and apply the slope factor only to the 400 LF.</td><td>One blended rate hides the cost.</td></tr>
<tr><td>You need a mini excavator for 5 days on one job and own none.</td><td>Rent it at the week rate plus delivery.</td><td>Far below the break-even days for owning.</td></tr>
<tr><td>A state-funded public job allows tenders, and you price all laborers.</td><td>Price the crew mix the ratio rules allow (Module 11).</td><td>Your competitors will.</td></tr>
</tbody></table></div>`
},

{ t: "scorer", id: "laborcheck", h: "Ask yourself · labor and equipment self-check",
  lead: "Score your labor pricing before it goes into the bid. 2 = done, 1 = partly, 0 = not done. Saved in this browser.",
  items: [
    ["Right wage type", "Private wages, or current DIR rates with increases, for every craft"],
    ["Burden from real numbers", "FICA, unemployment, workers' comp and liability from your CPA and agent"],
    ["Every takeoff line has a rate", "LH per unit from your library, with its source"],
    ["Site conditions split out", "Slope, rock, access and utilities priced where they apply"],
    ["Work window applied", "Productive hours ÷ paid hours for closures, night work and restricted hours"],
    ["Travel counted once", "In the rates or as a line, not both"],
    ["Crew-days make sense", "Total LH ÷ crew size ÷ 8 fits the schedule"],
    ["Equipment fully priced", "Owned rates, rentals, delivery, fuel and every move"],
    ["Benchmarked", "All-in prices compared to past jobs and Caltrans medians; gaps explained"],
    ["Ready for the feedback loop", "Cost codes in the estimate match the foreman's daily report"]
  ],
  bands: [
    [18, "Ready", "Labor and equipment are solid. Move on to overhead and markup (Module 10)."],
    [13, "Almost", "Fix the items you scored 0 or 1 before bid day."],
    [0, "Not ready", "Go back to the labor pricing steps at the start of this module."]
  ]
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook. Abbreviations are spelled out.",
  terms: [
    ["Labor burden", "Payroll taxes, insurance and benefits added on top of wages."],
    ["Burdened labor rate", "Wage plus burden: the true cost of one hour of a worker."],
    ["Crew rate", "The combined hourly cost of everyone on a crew."],
    ["FICA", "Federal Insurance Contributions Act: Social Security and Medicare taxes; the employer pays 7.65% of wages."],
    ["FUTA, UI, ETT", "Federal unemployment tax; California unemployment insurance; California employment training tax."],
    ["Workers' comp class code", "The category that sets your workers' comp rate (landscape is usually 0042)."],
    ["Experience mod", "A multiplier on workers' comp based on your claims history."],
    ["WCIRB", "Workers' Compensation Insurance Rating Bureau of California, which sets the class codes."],
    ["Prevailing wage", "The minimum wage and fringe set by the state for public work."],
    ["DIR", "California Department of Industrial Relations, which publishes prevailing wage rates."],
    ["Fringe", "Benefit payments that are part of prevailing wage."],
    ["Tender", "A lower-paid helper classification on prevailing wage jobs, allowed only in set ratios."],
    ["Overtime (OT)", "Hours over 8 a day or 40 a week, paid at 1½ times (double after 12 hours a day in California)."],
    ["Production rate", "How fast work gets done, as labor hours per unit or units per crew-hour."],
    ["Labor hour (LH)", "One worker working one hour."],
    ["Crew-day / crew-hour", "One full crew working one day / one hour."],
    ["Paid vs. productive hours", "All hours on the timecard vs. the hours actually installing work."],
    ["Work face", "How much work is open and ready at one time; it limits useful crew size."],
    ["Cost code", "A label for each task so hours can be tracked by task."],
    ["Rate card", "One row in your rate library: the rate, its unit, conditions, source jobs and what it includes."],
    ["Daily report", "The foreman's daily form with hours and quantities by cost code, delays and extra work."],
    ["Weighted average", "Total hours ÷ total units across jobs, so bigger jobs count more."],
    ["Adjustment factor", "A multiplier on a production rate for harder site conditions."],
    ["Ownership cost", "Equipment cost that happens whether it runs or not: depreciation, interest, insurance, storage."],
    ["Operating cost", "Equipment cost per running hour: fuel, maintenance, wear parts."],
    ["Break-even (own or rent)", "Days of use per year where owning a machine costs the same as renting it."],
    ["Mobilization / demobilization", "Moving crews and equipment to the job and setting up / moving out at the end."],
    ["Small tools", "Hand tools and consumables, often priced as a percent of labor."],
    ["Work window", "The hours you're allowed to work, such as a lane closure period."],
    ["Productivity loss", "Paid hours that don't produce work, from weather, windows or delays."],
    ["Estimated vs. actual", "Comparing estimated hours to real hours to improve your rates."],
    ["Benchmark", "A real price from other jobs used to check your own number, not to set it."],
    ["LF, EA, CY, SF, LS", "Linear feet, each, cubic yards, square feet, lump sum."],
    ["PM / GC", "Project manager / general contractor."],
    ["Force account", "Extra work paid by actual labor, equipment and material used, plus set markups."]
  ]
},

{ t: "quiz", id: "m9", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "What does labor burden include?", a: ["Only the wage", "Payroll taxes, workers' comp, insurance and benefits added to wages", "Material and equipment"], c: 1, why: "Burden is everything an hour of pay costs beyond the wage itself." },
    { q: "Where should your workers' comp rate come from?", a: ["Another company's estimate", "Your own insurance agent, for your class codes and experience mod", "The course examples"], c: 1, why: "Comp rates depend on your class codes and claims history." },
    { q: "Why write production rates as labor hours per unit?", a: ["It works for any crew size", "It's required by law", "It makes numbers smaller"], c: 0, why: "LH per unit converts to any crew: crew size ÷ LH per unit = units per crew-hour." },
    { q: "A past job had 2,400 LF of lateral and 88 labor hours. What's the rate?", a: ["0.037 LH per LF", "27 LH per LF", "0.37 LH per LF"], c: 0, why: "88 ÷ 2,400 = 0.037 labor hours per LF." },
    { q: "A mini excavator costs $13,140 a year to own. It works 400 hours a year instead of 800. What happens to its ownership cost per hour?", a: ["It stays the same", "It doubles", "It halves"], c: 1, why: "The same yearly cost spread over half the hours doubles the hourly cost." },
    { q: "On a shoulder closure from 9 AM to 3 PM, with about 5 productive hours of 8 paid, what share of a normal day's production should you expect?", a: ["About 100%", "About 62%", "About 25%"], c: 1, why: "5 ÷ 8 = 62.5%. Price the job with the reduced production." },
    { q: "On the 5 Caltrans jobs, why was 1\" pipe about $12/LF on one job and about $5/LF on others?", a: ["Different pipe brands", "The small job had only 330 LF, so fixed costs spread over fewer feet", "Prices were wrong"], c: 1, why: "Big quantities spread setup and small-job time over more units." },
    { q: "Your log shows spray heads took 17% more hours than estimated on one job. What should you do?", a: ["Change the rate right away", "Find out why, and change the rate if it repeats or the reason is clear", "Ignore it, the total was close"], c: 1, why: "Learn the reason first. One job can be unusual; a pattern means the rate is wrong." },
    { q: "Your rates come from full-day timecards. Should you also add a travel line for the normal drive?", a: ["Yes, always", "No, the drive is already inside the rates", "Only on public jobs"], c: 1, why: "Rates from full paid days already include travel; adding it again counts it twice." },
    { q: "Crew A costs $108.12 an hour and sets 9 heads an hour. Crew B costs $175.19 and sets 17. Which is cheaper per head?", a: ["Crew A", "Crew B", "They're the same"], c: 1, why: "A: $108.12 ÷ 9 = $12.01. B: $175.19 ÷ 17 = $10.31." },
    { q: "Owning saves $278 a day of use, and ownership costs $13,140 a year. About how many days a year must you use it for owning to pay?", a: ["About 47", "About 278", "About 13"], c: 0, why: "$13,140 ÷ $278 = 47.3 days." },
    { q: "Three jobs: 310 heads in 109 LH, 180 in 50 LH, 420 in 134 LH. What's the weighted rate?", a: ["0.316 LH per head", "0.322 LH per head", "0.352 LH per head"], c: 1, why: "293 total hours ÷ 910 total heads = 0.322." },
    { q: "In California private work, a laborer works 10 hours in a day. How are hours 9 and 10 paid?", a: ["Straight time", "1½ times the regular rate", "Double time"], c: 1, why: "Hours over 8 up to 12 in a workday are paid at 1½ times (Labor Code §510)." },
    { q: "Your 1-gallon all-in price is 30% above the Caltrans median. What first?", a: ["Cut it to the median", "Find the reason: quantity, rate, crew cost, material or work window", "Ignore the benchmark"], c: 1, why: "Benchmarks point to possible mistakes; fix the cause, not the number." }
  ]
},

{ t: "practice", id: "m9", h: "Practice assignments",
  lead: "By the end, you'll have your company's real crew rates, a starter production rate library and an equipment cost sheet.",
  items: [
    { h: "Get the real burden numbers", hrs: 0.75, d: "<p>Ask the company's CPA or payroll service for this year's employer tax rates (FICA, FUTA, California UI and ETT, and the wage limits). Ask the insurance agent for workers' comp rates per $100 of payroll by class code, the experience mod, and how general liability is priced. Write the total burden percent.</p>" },
    { h: "Build two crew rates", hrs: 1, d: "<p>Using real wages, build the hourly and daily cost of your normal irrigation crew and planting crew for private work in a spreadsheet, following the step-by-step slide. Then build the same crews at current prevailing wage: look up the San Diego County landscape and irrigation laborer, tender, landscape/irrigation fitter and operator rates on <a href=\"https://www.dir.ca.gov/oprl/DPreWageDetermination.htm\" target=\"_blank\" rel=\"noopener\">DIR's prevailing wage page</a>. Note the date of each rate.</p>" },
    { h: "Mine your past jobs for production rates", hrs: 1, d: "<p>Pick 3 finished jobs. With the foreman's help, pull installed quantities and hours for at least 6 tasks (laterals, mainline, heads, valves, 1-gallon plants, 5-gallon plants). Compute weighted LH per unit and write down the site conditions. Fill in a rate card for each task.</p>" },
    { h: "Build an equipment cost sheet", hrs: 0.75, d: "<p>List the company's owned equipment and trucks. For each, estimate ownership cost per year and operating cost per hour with the owner, then compute hourly and daily rates. Call two San Diego rental yards for day, week and month rates plus delivery on a ride-on trencher, mini excavator and plate compactor. Run the own-or-rent break-even for one machine.</p>" },
    { h: "Compare to real Caltrans prices", hrs: 0.5, d: "<p>Open the <a href=\"#lab\">Real Bid Lab</a>. For 5 items (1\" pipe, 4\" main, 1-gallon plants, tree well sprinklers, gear-drive pop-ups), note the winner and the middle of the pack on each job. Using your crew rate and production rates plus Module 8 material prices, see how close your all-in price would be, and write the reason for any gap over 25%.</p>" },
    { h: "Rework the 1,000 LF mainline example", hrs: 0.5, d: "<p>Redo the worked mainline example with your own crew rate, your own production rate and real rental quotes. Then do it again for a shoulder-only window of 9 AM to 3 PM. Write the cost per LF for both.</p>" },
    { h: "Start an estimated vs. actual log", hrs: 0.5, d: "<p>Pick a job the company is building now. Set up 8 to 15 cost codes with the foreman and the daily report template. At the end of the job, fill in the log like the example and bring it to a bid review meeting.</p>" },
    { h: "Time a crew and find productive hours", hrs: 0.5, d: "<p>Spend one morning with a crew, or ask the foreman to log one full day. Write down loading, drive, meeting, install and cleanup time. Calculate the productive share of the paid day, like the paid vs. productive slide.</p>" },
    { h: "Price a freeway shoulder planting item", hrs: 1, d: "<p>Use 11-428704 item 27 (1,460 one-gallon plants) in the <a href=\"#lab-11-428704\">Real Bid Lab</a>. Price labor at today's DIR laborer rate with your burden and a 9 AM to 3 PM window, add plant and fertilizer material from your quotes, and compare your price per plant to the bids. List what you'd still need to add for overhead, profit and traffic control.</p>" }
  ]
},

{ h: "Module 9 summary",
  lead: "You can now price labor and equipment from your own numbers and check them against the market.",
  body: `<ul>
<li>Labor cost = quantity × LH per unit × burdened rate. Get each piece right, in order.</li>
<li>Build crew rates in a spreadsheet: wages, burden from your CPA and agent, benefits, per hour, per day and per LH. Know your paid vs. productive hours.</li>
<li>Prevailing wage crews can cost about twice as much per hour as private crews. Use current DIR rates on every public bid. Price overtime only when the schedule forces it.</li>
<li>Pick crews by cost per unit installed, not cost per hour.</li>
<li>Build a production rate library from your own timecards, with a rate card for each task, and adjust for slope, rock, access, work windows, night work and recycled water rules.</li>
<li>Owned equipment has ownership and operating costs; find the own-or-rent break-even. Rentals cost more than the day rate. Count travel and every move.</li>
<li>Use the Caltrans bid data to check your all-in prices, compare estimated to actual hours on every job, and update rates with weighted averages.</li>
</ul>
<p><strong>Next: Module 10 · Overhead, Markup and Your Final Number</strong></p>`
}
]
});
