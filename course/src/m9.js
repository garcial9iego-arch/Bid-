(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 9, hours: 7, title: "Labor, Production Rates and Equipment",
slides: [

{ t: "cover",
  h: "Labor, Production Rates and Equipment",
  lead: "Labor is where landscape bids are won and lost. Two companies can buy the same pipe for the same price. The one that knows how fast its crews really work, and what an hour of that crew really costs, prices the job right.",
  objectives: [
    "Build the true hourly and daily cost of a crew, including labor burden",
    "Build production rates from your own past jobs and adjust them for site conditions",
    "Convert a takeoff into labor hours, item by item",
    "Figure the hourly cost of owned equipment and compare it to renting",
    "Price supervision, small tools, trucks and mobilization",
    "Account for lost productivity from weather, short work windows and traffic closures",
    "Check your numbers against real Caltrans bids and against your own finished jobs"
  ],
  time: [["Reading and slides", "2 h"], ["Practice assignments", "5 h"], ["Module total", "7 h"]],
  body: "<p>You already know how the work gets done in the field. This module turns that knowledge into numbers. All production rates and percentages in this module are practice examples unless a real source is named. Replace them with your company's own numbers.</p>"
},

{ h: "The labor formula",
  lead: "Every labor price comes from two numbers: how many hours the work takes, and what each hour costs.",
  body: `<div class="tablewrap"><table><tbody>
<tr><td><strong>Labor hours</strong></td><td>= quantity × labor hours per unit (production rate)</td></tr>
<tr><td><strong>Labor cost</strong></td><td>= labor hours × burdened cost per hour</td></tr>
<tr><td><strong>Equipment cost</strong></td><td>= equipment hours or days × equipment rate, plus moving it to the job</td></tr>
</tbody></table></div>
<p>The rest of this module is about getting each of those numbers right.</p>`,
  ex: `<p>22 spray heads × 0.30 labor hours each = 6.6 labor hours. At $36.04 per burdened labor hour, that's $237.86. If your real rate is 0.40 hours per head, you're 33% low on every head in the bid.</p>`,
  watch: `<p>A small error in the production rate multiplies across thousands of units. On 11-428704, one bidder priced iceplant cuttings at $6.00 each instead of about $0.80, adding about $322,000 to its bid (Module 15).</p>`
},

{ h: "What a crew hour really costs",
  lead: "The wage is only the start. Every hour of pay carries taxes, insurance and benefits. Together these are called labor burden.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>What it is</th><th>Where the real number comes from</th></tr></thead>
<tbody>
<tr><td><strong>Wage</strong></td><td>Hourly pay for each worker</td><td>Your payroll; on public work, the prevailing wage determination</td></tr>
<tr><td><strong>Social Security and Medicare (FICA)</strong></td><td>Employer share: 6.2% + 1.45% = 7.65% of wages (Social Security stops at a yearly wage cap)</td><td>IRS</td></tr>
<tr><td><strong>Unemployment taxes</strong></td><td>Federal (FUTA) and California (UI and ETT), on the first part of each worker's yearly wages</td><td>Your CPA or payroll service (rates change yearly)</td></tr>
<tr><td><strong>Workers' compensation</strong></td><td>Insurance for job injuries, priced per $100 of payroll by job class. Landscape work is usually class 0042, Landscape Gardening.</td><td>Your insurance agent</td></tr>
<tr><td><strong>General liability</strong></td><td>Often priced on payroll or sales</td><td>Your insurance agent</td></tr>
<tr><td><strong>Benefits (fringe)</strong></td><td>Health insurance, paid time off, retirement, union or prevailing wage fringe</td><td>Your company's benefit costs; the wage determination on public work</td></tr>
</tbody></table></div>`,
  watch: `<p>Workers' comp is often the biggest piece of burden for landscape crews, and it depends on your class codes and your experience modification (your claims history). Don't copy another company's percentage. Ask your agent for your real rate per $100 of payroll for each class you use.</p>`,
  deeper: `<p>The employer share of FICA is set by federal law: 6.2% Social Security and 1.45% Medicare (IRS Topic 751). California employers pay FUTA, state UI and ETT on a limited wage base each year; California has had a FUTA credit reduction in recent years, which raises the federal rate. These change every year, so get the current numbers from your CPA. The WCIRB's class 0042 includes sprinkler and drainage work when the employer is mainly doing landscape work at that job; irrigation-only work can fall in another class. Your agent will tell you which classes apply.</p>`,
  src: "IRS Tax Topic 751 (Social Security and Medicare withholding rates); EDD, Federal Unemployment Tax Act page; WCIRB classification 0042, Landscape Gardening."
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
  body: `<p>Module 11 covers prevailing wage rules in detail: which rate applies, apprentices, certified payroll and how fringe can be paid.</p>`,
  watch: `<p>These are 2021 rates, used here only because they're from a real job. Rates go up every year. For a real bid, get the current state determination from <a href="https://www.dir.ca.gov/oprl/DPreWageDetermination.htm" target="_blank" rel="noopener">DIR</a> (and the federal decision bound into the specs on federal-aid jobs), and pay the higher of the two. Ask your CPA how taxes and insurance apply to the fringe part on your payroll.</p>`,
  src: "U.S. DOL General Decision CA20210001, Mod. 12 (bound into 11-428704 Addendum 1); DIR prevailing wage determinations."
},

{ h: "Production rates",
  lead: "A production rate says how fast work gets done. Write it as labor hours per unit, so it works for any crew size.",
  body: `<div class="twocol">
<div><h3>Labor hours per unit (LH/unit)</h3><ul>
<li>0.30 LH per spray head</li>
<li>0.04 LH per LF of lateral</li>
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
<li class="hl"><div><b>Get the installed quantities</b>From the plans, as-builts or invoices: LF of pipe by size, heads, valves, plants by size.</div></li>
<li class="hl"><div><b>Get the hours by task</b>From timecards or daily reports. If hours weren't split by task, ask the foreman to help divide them.</div></li>
<li><div><b>Divide</b>Hours ÷ quantity = LH per unit.</div></li>
<li><div><b>Write down the conditions</b>Soil, slope, access, crew size, season. A rate means little without them.</div></li>
<li><div><b>Compare across jobs</b>Use the middle value as your standard rate, and note why the high and low jobs were different.</div></li>
</ol>`,
  ex: `<p>Practice example: a past job had 2,400 LF of 1" and ¾" lateral, and timecards show 88 labor hours of trenching, pipe and backfill. 88 ÷ 2,400 = 0.037 LH per LF. Two other jobs came out at 0.041 and 0.052 (rocky site). Standard rate: about 0.04, with a rock adjustment.</p>`,
  deeper: `<p>From now on, set up cost codes on every job (for example: 01 mainline, 02 laterals, 03 heads, 04 valves and wire, 05 controller, 10 soil prep, 11 plants by size, 12 mulch, 20 establishment) and have foremen record hours by code every day. In a year you'll have far better rates than any book.</p>`
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
<tr><td>Wood mulch, 3" deep, by wheelbarrow</td><td>CY</td><td class="num">0.6–1.0</td><td class="num">4–7 CY</td></tr>
</tbody></table></div>`,
  watch: `<p>Never put a number from this table into a real bid without checking it against your own jobs. The purpose here is to practice the math, not to price work.</p>`
},

{ h: "Adjusting for site conditions",
  lead: "Your standard rates assume a normal site. Most commercial sites aren't normal somewhere. Adjust the rate for the part of the job where conditions change.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Condition</th><th>What it does</th><th>Example adjustment (practice)</th></tr></thead>
<tbody>
<tr><td>Slopes</td><td>Slower walking, hand carrying, safety lines on steep slopes</td><td>3:1 slope ×1.15–1.3; 2:1 slope ×1.3–1.6</td></tr>
<tr><td>Rock, hardpan, caliche</td><td>Trencher can't cut, or wears out fast</td><td>×1.5–3, or change the method (rock trencher, breaker)</td></tr>
<tr><td>Tight access</td><td>No machines, hand digging, long carries</td><td>×1.2–1.5</td></tr>
<tr><td>Existing utilities</td><td>Potholing, hand digging near lines</td><td>Add hours per crossing</td></tr>
<tr><td>Freeway or night work</td><td>Short windows, setup and teardown of closures, lighting</td><td>Figure productive hours per shift (later slide)</td></tr>
<tr><td>Recycled water</td><td>Purple materials, warning tape along the main, signs, separation from drinking water lines, inspections, 150 psi tests on 11-428704</td><td>Add the extra tasks as their own hours</td></tr>
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
<tr><td>Flush, test and adjust</td><td class="num">1 LS</td><td class="num">2.0</td><td class="num">2.0</td></tr>
<tr><td colspan="3"><strong>Total labor hours</strong></td><td class="num"><strong>27.6</strong></td></tr>
</tbody></table></div>
<p><strong>Labor cost:</strong> 27.6 LH × $36.04 = <strong>$994.70</strong>, or $994.70 ÷ 22 = $45.21 per head.</p>
<p><strong>With material from Module 8</strong> ($43.87 per head), the zone costs about $89.08 per head before equipment, overhead and profit.</p>`,
  body: `<p>Check the result in crew-days: 27.6 LH ÷ 4 people ÷ 8 hours = 0.86 crew-days. Ask yourself: “Could my crew finish this zone in a day?” If your gut says no, find out which rate is off.</p>`
},

{ h: "Supervision, small tools and trucks",
  lead: "Some costs don't belong to any one item but grow with the job's length. Price them per day or as a percent of labor.",
  body: `<ul>
<li><strong>Supervision above the foreman:</strong> superintendent or PM site visits, meetings, inspections. Price as days or hours per week for the length of the job. Module 10 decides what's job cost and what's overhead.</li>
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
  deeper: `<p>Caltrans publishes <a href="https://dot.ca.gov/programs/construction/equipment-rental-rates-and-labor-surcharge" target="_blank" rel="noopener">Labor Surcharge and Equipment Rental Rates</a>, used to pay for extra work done at force account. Its equipment rates show how ownership and operating costs are built for many machine types. They're a useful check on your own rates and the basis for pricing change order work on Caltrans jobs.</p>`
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

{ h: "Real benchmarks from Caltrans bids",
  lead: "The Real Bid Lab has every bidder's unit prices on five San Diego Caltrans jobs. Use them to check your all-in prices.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item and contract</th><th class="num">Qty</th><th class="num">Winner</th><th class="num">Median</th><th class="num">Range</th></tr></thead>
<tbody>
<tr><td colspan="5"><strong>1" Sch 40 plastic pipe (supply line), per LF</strong></td></tr>
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
  watch: `<p>If this main were on a freeway shoulder with a 9 AM to 3 PM window, production would drop to about 156 LF per day (previous slide) and labor would rise by about 60%. Always set production for the actual work window.</p>`,
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

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Labor burden", "Payroll taxes, insurance and benefits added on top of wages."],
    ["Burdened labor rate", "Wage plus burden: the true cost of one hour of a worker."],
    ["Crew rate", "The combined hourly cost of everyone on a crew."],
    ["FICA", "Social Security and Medicare taxes; the employer pays 7.65% of wages."],
    ["Workers' comp class code", "The category that sets your workers' comp rate (landscape is usually 0042)."],
    ["Experience mod", "A multiplier on workers' comp based on your claims history."],
    ["Prevailing wage", "The minimum wage and fringe set by the state for public work."],
    ["Fringe", "Benefit payments that are part of prevailing wage."],
    ["Production rate", "How fast work gets done, as labor hours per unit or units per crew-hour."],
    ["Labor hour (LH)", "One worker working one hour."],
    ["Crew-day", "One full crew working one day."],
    ["Cost code", "A label for each task so hours can be tracked by task."],
    ["Adjustment factor", "A multiplier on a production rate for harder site conditions."],
    ["Ownership cost", "Equipment cost that happens whether it runs or not: depreciation, interest, insurance, storage."],
    ["Operating cost", "Equipment cost per running hour: fuel, maintenance, wear parts."],
    ["Mobilization", "Moving crews and equipment to the job and setting up."],
    ["Small tools", "Hand tools and consumables, often priced as a percent of labor."],
    ["Work window", "The hours you're allowed to work, such as a lane closure period."],
    ["Productivity loss", "Paid hours that don't produce work, from weather, windows or delays."],
    ["Estimated vs. actual", "Comparing estimated hours to real hours to improve your rates."]
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
    { q: "Your log shows spray heads took 17% more hours than estimated on one job. What should you do?", a: ["Change the rate right away", "Find out why, and change the rate if it repeats or the reason is clear", "Ignore it, the total was close"], c: 1, why: "Learn the reason first. One job can be unusual; a pattern means the rate is wrong." }
  ]
},

{ t: "practice", id: "m9", h: "Practice assignments",
  lead: "By the end, you'll have your company's real crew rates, starter production rates and an equipment cost sheet.",
  items: [
    { h: "Get the real burden numbers", hrs: 0.75, d: "<p>Ask the company's CPA or payroll service for this year's employer tax rates (FICA, FUTA, California UI and ETT, and the wage limits). Ask the insurance agent for workers' comp rates per $100 of payroll by class code, the experience mod, and how general liability is priced. Write the total burden percent.</p>" },
    { h: "Build two crew rates", hrs: 1, d: "<p>Using real wages, build the hourly and daily cost of your normal irrigation crew and planting crew for private work, like the worked example. Then build the same crews at current prevailing wage: look up the San Diego County landscape and irrigation laborer, landscape/irrigation fitter and operator rates on <a href=\"https://www.dir.ca.gov/oprl/DPreWageDetermination.htm\" target=\"_blank\" rel=\"noopener\">DIR's prevailing wage page</a>. Note the date of each rate.</p>" },
    { h: "Mine your past jobs for production rates", hrs: 1, d: "<p>Pick 3 finished jobs. With the foreman's help, pull installed quantities and hours for at least 6 tasks (laterals, mainline, heads, valves, 1-gallon plants, 5-gallon plants). Compute LH per unit and write down the site conditions. Build your first rate table.</p>" },
    { h: "Build an equipment cost sheet", hrs: 0.75, d: "<p>List the company's owned equipment and trucks. For each, estimate ownership cost per year and operating cost per hour with the owner, then compute hourly and daily rates. Call two San Diego rental yards for day, week and month rates plus delivery on a ride-on trencher, mini excavator and plate compactor.</p>" },
    { h: "Compare to real Caltrans prices", hrs: 0.5, d: "<p>Open the <a href=\"#lab\">Real Bid Lab</a>. For 5 items (1\" pipe, 4\" main, 1-gallon plants, tree well sprinklers, gear-drive pop-ups), note the winner and the middle of the pack on each job. Using your crew rate and production rates plus Module 8 material prices, see how close your all-in price would be.</p>" },
    { h: "Rework the 1,000 LF mainline example", hrs: 0.5, d: "<p>Redo the worked mainline example with your own crew rate, your own production rate and real rental quotes. Then do it again for a shoulder-only window of 9 AM to 3 PM. Write the cost per LF for both.</p>" },
    { h: "Start an estimated vs. actual log", hrs: 0.5, d: "<p>Pick a job the company is building now. Set up 5 to 8 cost codes with the foreman and a simple daily hours sheet. At the end of the job, fill in the log like the example and bring it to a bid review meeting.</p>" }
  ]
},

{ h: "Module 9 summary",
  lead: "You can now price labor and equipment from your own numbers and check them against the market.",
  body: `<ul>
<li>Labor cost = quantity × LH per unit × burdened rate. Get each piece right.</li>
<li>Burden adds payroll taxes, workers' comp, insurance and benefits to every hour. Get the real rates from your CPA and agent.</li>
<li>Prevailing wage crews can cost about twice as much per hour as private crews. Use current DIR rates on every public bid.</li>
<li>Build production rates from your own timecards, and adjust them for slope, rock, access, work windows and recycled water rules.</li>
<li>Owned equipment has ownership and operating costs; the fewer hours it works, the more each hour costs. Rentals cost more than the day rate.</li>
<li>Use the Caltrans bid data to check your all-in prices, and compare estimated to actual hours on every job.</li>
</ul>
<p><strong>Next: Module 10 · Overhead, Markup and Your Final Number</strong></p>`
}
]
});
