(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 11, hours: 6, title: "Prevailing Wage and Public Works Compliance",
slides: [

{ t: "cover",
  h: "Prevailing Wage and Public Works Compliance",
  lead: "On public work, the state tells you the minimum you must pay every worker, by trade, and checks that you did. Get the rate wrong in the bid and you lose money. Get it wrong on the job and you pay back wages plus penalties.",
  objectives: [
    "Tell when a job is “public works” and prevailing wage applies",
    "Find the right DIR wage determination for a San Diego County job and read it",
    "Pick the right craft for landscape, irrigation, equipment and plant establishment work",
    "Explain basic rate, employer payments (fringe), overtime, holidays and predetermined increases",
    "Meet the apprenticeship, certified payroll, posting and recordkeeping rules",
    "Apply the “pay the higher rate” rule on federally funded jobs",
    "Build a prevailing wage crew cost into a bid, with the math shown"
  ],
  time: [["Reading and slides", "2 h"], ["Practice assignments", "4 h"], ["Module total", "6 h"]],
  body: `<p>Prevailing wage is the biggest difference between pricing a residential job and pricing a public one. The rates in this module are real, from the California Department of Industrial Relations (DIR) and the federal wage decision for Caltrans job 11-428704 (<a href="#m15-17">Module 15</a>). Rates change every year. Always pull the current ones for your bid.</p>`,
  src: "California Labor Code §§1720–1861; DIR Office of the Director – Research, General Prevailing Wage Determinations (dir.ca.gov/oprl/DPreWageDetermination.htm)."
},

{ h: "When is a job “public works”?",
  lead: "If public money pays for any part of the construction, it is almost always public works, and every worker on it must get at least the prevailing wage.",
  body: `<ul>
<li><strong>Public works</strong> means construction, alteration, demolition, installation or repair done under contract and paid for in whole or in part with public funds. Street work and improvement work done for a city or district counts too.</li>
<li><strong>Prevailing wage</strong> is the minimum hourly pay (wages plus benefits) the state sets for each trade in each county.</li>
<li>It applies to public works <strong>over $1,000</strong>. That includes maintenance work, like landscape maintenance on a city contract.</li>
<li>It applies to <strong>everyone who does the work</strong>: your crew, your subs' crews, and you, if the owner works on the job.</li>
<li>It applies whether you are the prime or a sub. A GC's school or park job is public works for you too.</li>
</ul>`,
  ex: `<p>A private developer builds an affordable housing project with City housing money and asks you to price the landscape. It feels private, but public funds pay part of it. Read the bid documents for prevailing wage language before you price. Module 1 covers this trap.</p>`,
  watch: `<p>Agencies can't split a job into small pieces to stay under the limits. If the bid documents say prevailing wage applies, it applies, even to your small scope.</p>`,
  deeper: `<ul>
<li>Labor Code §1720(a)(1) defines public works; §1771 requires prevailing wage on public works over $1,000, including maintenance.</li>
<li><strong>Small project exemption:</strong> DIR registration and electronic certified payroll aren't required on projects of $25,000 or less (new construction, alteration, installation, demolition or repair) or $15,000 or less (maintenance). The limit is the whole prime contract, not your subcontract. Prevailing wage still applies over $1,000.</li>
<li>If you aren't sure, anyone can ask DIR for a coverage determination (pwcoverage@dir.ca.gov).</li>
</ul>`,
  src: "Cal. Labor Code §§1720, 1771; DIR Public Works FAQ (dir.ca.gov/Public-Works/PublicWorksSB854FAQ.html)."
},

{ h: "The wage determination, in plain words",
  lead: "DIR publishes the rates as “general prevailing wage determinations,” one for each craft and area. The one that applies to your job is the one in effect on the date the job was advertised for bids.",
  body: `<ul>
<li><strong>Issued twice a year:</strong> February 22 and August 22. Each goes into effect 10 days later.</li>
<li><strong>By craft and county:</strong> one document for Landscape/Irrigation Laborer in San Diego County, another for Operating Engineer, and so on.</li>
<li><strong>Locked to the bid advertisement date:</strong> all bidders use the same rates, so nobody wins by paying less.</li>
<li><strong>Expiration date with one asterisk (*):</strong> the rate stays good for the life of the project.</li>
<li><strong>Expiration date with two asterisks (**):</strong> a raise is already scheduled. If work goes past that date, you must pay the new rate. This is called a <strong>predetermined increase</strong>, and you must price it in your bid.</li>
</ul>`,
  ex: `<p><strong>Real example:</strong> Caltrans advertised job 11-428704 on Aug 2, 2021. The San Diego Landscape/Irrigation Laborer determination in effect that day (SD-102-X-14-2021-1) expired “July 31, 2021**”. DIR's predetermined increase notice said: “Effective August 1, 2021, there will be an increase of $2.15 allocated as follows: $1.04 Basic Hourly Rate, $0.10 to Health &amp; Welfare and $1.01 to Pension.” So every laborer hour on that job cost at least $57.66 + $2.15 = <strong>$59.81</strong>, not the $57.66 printed on the determination.</p>`,
  watch: `<p>Two asterisks mean the printed rate is already out of date for most of your job. Open the “Increase” link next to the craft every time.</p>`,
  deeper: `<p>The effective date is 10 days after issue (8 CCR §16000). If a craft you need isn't covered, the agency can ask DIR for a special determination at least 45 days before the bid advertisement date. The awarding body must state the rates, or that they are on file, in the call for bids (Labor Code §1773.2).</p>`,
  src: "DIR Prevailing Wage FAQ (dir.ca.gov/oprl/FAQ_PrevailingWage.html); DIR SD-102-X-14-2021-1 and its Predetermined Increase notice; Cal. Labor Code §1773.2."
},

{ h: "How to find the right rate",
  lead: "DIR's site walks you through six steps. For San Diego County landscape work you will use steps 2B, 3 and 4 most.",
  body: `<ol class="steps">
<li><div><b>Open the determinations page</b>Go to <a href="https://www.dir.ca.gov/oprl/DPreWageDetermination.htm" target="_blank" rel="noopener">DIR General Prevailing Wage Determinations</a> and pick the period that was current on the bid advertisement date (for example “2026-2”).</div></li>
<li><div><b>Step 1 · Statewide</b>Trades that apply in most counties.</div></li>
<li><div><b>Step 2B · Southern California</b>Includes Laborer, Operating Engineer, Landscape Maintenance Laborer and Tree Maintenance (Laborer) when marked “Includes San Diego County.”</div></li>
<li class="hl"><div><b>Step 3 · San Diego</b>Landscape Irrigation Laborer, Laborer (Engineering Construction), Operating Engineer, Teamster.</div></li>
<li class="hl"><div><b>Step 4 · County subtrades</b>Choose San Diego. This is where the Plumber crafts live, including Landscape/Irrigation Fitter and Landscape/Irrigation Tradesman.</div></li>
<li><div><b>Step 6 · Important notices</b>Check for corrections that change a rate.</div></li>
</ol>
<p>For each craft, also open the <strong>Increase</strong>, <strong>Holidays</strong>, <strong>Scope</strong> (what work the craft covers) and <strong>Travel</strong> links. Apprentice rates are on a separate DIR page.</p>`,
  ex: `<p>Save a PDF of every determination you used, with the date you downloaded it, in the bid folder. If a question comes up during the job, you can prove which rate you bid.</p>`,
  src: "DIR Index 2026-2 general prevailing wage journeyman determinations (dir.ca.gov/oprl/2026-2/PWD/index.htm)."
},

{ h: "The crafts landscape work uses",
  lead: "You pay by the work each person actually does, not by their job title at your company. These are the DIR crafts a San Diego landscape crew uses most.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>DIR craft (San Diego County, 2026-2)</th><th>Where on DIR's site</th><th>Typical work</th></tr></thead>
<tbody>
<tr><td><strong>Landscape/Irrigation Laborer</strong> (also Landscape Hydro Seeder)</td><td>San Diego · SD-102-X-14</td><td>Planting, soil prep, trenching and installing irrigation as a laborer</td></tr>
<tr><td><strong>Landscape/Irrigation Tender</strong></td><td>Same determination</td><td>Helper work under the ratio rules; plant establishment</td></tr>
<tr><td><strong>Plumber: Landscape/Irrigation Fitter</strong> and <strong>Landscape/Irrigation Tradesman</strong></td><td>County subtrades · San Diego</td><td>Irrigation pipefitting when the fitter scope applies</td></tr>
<tr><td><strong>Operating Engineer</strong></td><td>San Diego · SD-23-63-3</td><td>Skid steer (Group 3), mini backhoe and boring machine (Group 4)</td></tr>
<tr><td><strong>Teamster</strong></td><td>San Diego · SD-023-261-3</td><td>Dump truck and water truck driving on site</td></tr>
<tr><td><strong>Laborer (Engineering Construction)</strong></td><td>San Diego</td><td>General construction labor, demolition, flagging</td></tr>
<tr><td><strong>Tree Maintenance (Laborer)</strong></td><td>Southern California</td><td>Tree trimming and removal</td></tr>
<tr><td><strong>Landscape Maintenance Laborer</strong></td><td>Southern California</td><td>Maintenance contracts (not new construction)</td></tr>
</tbody></table></div>`,
  watch: `<p>A worker who spends the morning running the skid steer and the afternoon planting gets the Operating Engineer rate for the morning hours and the laborer rate for the afternoon. Track hours by craft on the time card, or pay the higher rate for the whole day.</p>`,
  deeper: `<p>Read the <strong>Scope</strong> PDF for each craft. It is labeled advisory, but it's the best guide to which craft covers which task. If two crafts could fit, many contractors pay the higher one to stay safe. When in doubt, ask DIR's Research Unit at (415) 703-4774 before bid day.</p>`,
  src: "DIR 2026-2 San Diego basic trades index, Southern California index, and San Diego County subtrades (SDI-2026-2)."
},

{ h: "Reading one line of a determination",
  lead: "Each line gives a basic hourly rate plus employer payments. Together they are the total hourly rate, the real minimum cost of one hour.",
  body: `<p><strong>Landscape/Irrigation Laborer, San Diego County, determination SD-102-X-14-2026-1</strong> (issued Aug 22, 2026; expires July 31, 2027**):</p>
<div class="tablewrap"><table>
<thead><tr><th>Part</th><th class="num">Per hour</th><th>What it is</th></tr></thead>
<tbody>
<tr><td>Basic hourly rate</td><td class="num">$47.57</td><td>Taxable wage on the paycheck</td></tr>
<tr><td>Health and welfare</td><td class="num">$9.85</td><td>Medical and similar benefits</td></tr>
<tr><td>Pension</td><td class="num">$12.92</td><td>Retirement</td></tr>
<tr><td>Vacation and holiday</td><td class="num">$5.02</td><td>Includes supplemental dues</td></tr>
<tr><td>Training</td><td class="num">$0.80</td><td>Apprenticeship training fund</td></tr>
<tr><td>Other</td><td class="num">$0.51</td><td>Other funds named by the craft</td></tr>
<tr><td><strong>Total hourly rate</strong></td><td class="num"><strong>$76.67</strong></td><td>Straight time, 8-hour day</td></tr>
<tr><td>Daily and Saturday overtime (1½×)</td><td class="num">$100.455</td><td>Footnote b</td></tr>
<tr><td>Sunday and holiday (2×)</td><td class="num">$124.24</td><td></td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Check the math yourself:</strong> $47.57 + $9.85 + $12.92 + $5.02 + $0.80 + $0.51 = $76.67. Overtime: $47.57 × 1.5 = $71.355, plus the $29.10 of employer payments = $100.455. Overtime multiplies the basic rate, not the benefits.</p>`,
  watch: `<p>Read the footnotes. Here footnote b says the 1½× rate covers only the first 4 daily overtime hours and the first 12 hours on Saturday; after that, double time. Footnote c lets Saturday be worked at straight time only as a weather make-up day.</p>`,
  src: "DIR determination SD-102-X-14-2026-1, Landscape/Irrigation Laborer/Tender, San Diego County."
},

{ h: "Tenders, tradesmen and the ratio rules",
  lead: "The lower-paid helper classifications can only be used in a set mix with journeymen. Price the mix the rules allow, not the mix you wish you had.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>2026-2 San Diego rates</th><th class="num">Basic</th><th class="num">Total hourly</th></tr></thead>
<tbody>
<tr><td>Landscape/Irrigation Laborer</td><td class="num">$47.57</td><td class="num">$76.67</td></tr>
<tr><td>Landscape/Irrigation Tender</td><td class="num">$21.97</td><td class="num">$30.19</td></tr>
<tr><td>Landscape/Irrigation Fitter (Plumber)</td><td class="num">$47.85</td><td class="num">$76.40</td></tr>
<tr><td>Landscape/Irrigation Tradesman (Plumber)</td><td class="num">$21.98</td><td class="num">$27.54</td></tr>
</tbody></table></div>
<p><strong>Laborer/Tender rule (footnote d):</strong> 1st worker on site is a Laborer; 2nd is an Apprentice or Laborer; 3rd and 4th may be Tenders; 5th is a Laborer; 6th an Apprentice or Laborer; 7th and 8th may be Tenders; after that 50/50.</p>
<p><strong>Plant establishment may be done entirely by Tenders</strong>, without a journeyman on site.</p>
<p><strong>Fitter/Tradesman rule:</strong> 1st worker a Fitter, 2nd a Fitter or apprentice Fitter, 3rd and 4th may be Tradesmen, 5th a Fitter, then 50/50.</p>`,
  watch: `<p>On a federally funded Caltrans job, Caltrans “does not accept lower State wage rates not specifically included in the federal minimum wage determinations,” including helper classifications. The 2021 federal decision for 11-428704 had no landscape tender, so a tender there had to be paid at least the federal laborer rate.</p>`,
  ex: `<p>A year of plant establishment priced with two Tenders instead of two Laborers: 2 × $30.19 × 8 = $483.04 per day, compared with 2 × $76.67 × 8 = $1,226.72. That difference decides who wins establishment-heavy jobs, as long as the job allows it.</p>`,
  src: "DIR SD-102-X-14-2026-1 footnote d; DIR SDI-2026-2 (Landscape/Irrigation Fitter and Tradesman, footnote AV); Caltrans 11-428704 Special Provisions, Notice to Bidders."
},

{ h: "Fringe benefits (employer payments)",
  lead: "You must spend at least the full total hourly rate on each worker. The benefit part can go into real plans, or to the worker as extra wages.",
  body: `<ul>
<li><strong>Paid into plans:</strong> health insurance, pension or 401(k), vacation fund, and training contributions count as credit toward the total, if the plan is real and the payments are irrevocable.</li>
<li><strong>Not paid into a plan:</strong> pay the difference to the worker on the check as wages. Then payroll taxes apply to it, which raises your cost.</li>
<li><strong>Training</strong> is separate: it goes to an apprenticeship committee or to the California Apprenticeship Council (next slide).</li>
<li><strong>Union or not:</strong> you don't have to be union to bid or work public works. You do have to meet the total rate.</li>
</ul>`,
  ex: `<p>Your company pays $3.00 an hour toward health insurance for a Landscape/Irrigation Laborer and has no pension plan. The determination's employer payments add up to $29.10. After the $0.80 training payment and your $3.00 health payment, $25.30 an hour is left, and it goes on the paycheck as extra taxable wages.</p>`,
  watch: `<p>A residential company's benefits are usually spread over every hour worked all year. Labor Code §1773.1 says that when you pay more benefits per hour on public jobs than on private ones, credit is figured on an annual basis. You can't count a whole year's health premium against one month of public work. Have your payroll provider or CPA set this up before your first public job.</p>`,
  deeper: `<p>Labor Code §1773.1 lists which employer payments count (health and welfare, pension, vacation and holiday, apprenticeship training and others) and says credit can't reduce the straight-time or overtime wage below the prevailing amount, and isn't given for benefits other laws already require.</p>`,
  src: "Cal. Labor Code §1773.1; DIR SD-102-X-14-2026-1."
},

{ h: "Overtime, holidays, travel and shifts",
  lead: "Public works has its own overtime rule, and each craft adds its own holiday, travel and shift rules on top.",
  body: `<ul>
<li><strong>Overtime:</strong> hours over 8 in a day or 40 in a week must be paid at least 1½ times the basic rate. Check each craft's footnotes for double time.</li>
<li><strong>Holidays:</strong> the craft's holidays come from its union agreement on file with DIR, or Government Code §6700 if it isn't union-based. Download the “Holidays” PDF for each craft.</li>
<li><strong>Travel and subsistence:</strong> some crafts require travel pay or per-diem depending on distance. Download the “Travel” PDF.</li>
<li><strong>Shift work:</strong> night work for crafts marked “+” (like Operating Engineer) has its own shift rates. Night freeway closures (Module 15) trigger them.</li>
<li><strong>Agency work hours:</strong> the City of San Diego's normal working hours are 7:00 AM to 5:00 PM, Monday through Friday, unless the permit says otherwise.</li>
</ul>`,
  watch: `<p>Each worker who works over 8 hours a day and 40 a week without overtime pay costs a $25 penalty per worker per day under Labor Code §1813, on top of the back pay.</p>`,
  ex: `<p>A crew works a 10-hour Monday to finish a valve manifold. For each Landscape/Irrigation Laborer, the 2 extra hours cost 2 × $100.455 = $200.91, not 2 × $76.67 = $153.34.</p>`,
  src: "Cal. Labor Code §§1810–1815; DIR Prevailing Wage FAQ Q14; City of San Diego K-24-1952 Supplementary Special Provisions 1-2."
},

{ h: "Apprenticeship rules",
  lead: "On public works contracts of $30,000 or more, every contractor in an apprenticeable craft must notify, request and use apprentices, and pay training funds.",
  body: `<ol class="steps">
<li><div><b>DAS 140 · Notice of contract award</b>Send within 10 days of signing your contract or subcontract, and no later than the first day you have workers on the job. Send it to your own apprenticeship committee if you're approved to train, or to every committee that can supply apprentices to the site.</div></li>
<li><div><b>DAS 142 · Request for dispatch</b>If you don't already have enough apprentices, request them in writing at least 3 business days before you need them.</div></li>
<li class="hl"><div><b>Ratio</b>At least 1 hour of apprentice work for every 5 hours of journeyman work, per craft.</div></li>
<li><div><b>Training fund</b>Pay the training amount from the determination for every hour, overtime included, of every journeyman and apprentice. Pay it to your apprenticeship program, or to the California Apprenticeship Council with an online CAC-2 form, by the 15th of the following month.</div></li>
</ol>
<p>Crafts marked “#” on DIR's determinations are apprenticeable. Landscape/Irrigation Laborer, Landscape/Irrigation Fitter and Operating Engineer are all marked #.</p>`,
  ex: `<p><strong>Ratio math:</strong> your two Landscape/Irrigation Laborers will work 8 hours a day for 40 days: 2 × 8 × 40 = 640 journeyman hours. Minimum apprentice hours: 640 ÷ 5 = <strong>128</strong>. Training fund on the journeyman hours at the 2026-2 rate: 640 × $0.80 = <strong>$512</strong>, plus the apprentice training amount on the apprentices' hours.</p>`,
  watch: `<p>The duty applies to subs too, even if your subcontract is under $30,000, when the prime contract is $30,000 or more. Send the DAS 140 even on a short job.</p>`,
  deeper: `<p>Labor Code §1777.5 sets the 1:5 ratio and the $30,000 threshold. Knowing violations cost up to $100 per day of noncompliance, and up to $300 per day for a repeat within 3 years (§1777.7). If a committee won't dispatch apprentices after you asked all programs in the area, you have met the duty. Keep copies of every DAS 140, DAS 142 and CAC-2 receipt.</p>`,
  src: "DIR Division of Apprenticeship Standards, Public Works requirements and “More Information” page (dir.ca.gov/das/publicworks.html); Cal. Labor Code §§1777.5, 1777.7."
},

{ h: "Certified payroll",
  lead: "Every week you pay workers on a public job, you produce a certified payroll record: who worked, which craft, how many hours, what you paid, signed under penalty of perjury.",
  body: `<ul>
<li><strong>What it shows:</strong> each worker's name, address, last 4 of the social security number, craft, hours each day, rate paid, gross pay, deductions and benefits paid.</li>
<li><strong>Most jobs: eCPR to DIR.</strong> Each contractor and sub uploads its own certified payroll to DIR's online system, at least every 30 days while working and within 30 days after the last day of work. Weekly is best practice.</li>
<li><strong>Caltrans:</strong> exempt from DIR's eCPR. Caltrans jobs use <strong>LCPtracker Pro</strong> (the 11-428704 specs said so in section 7-1.02K(3)).</li>
<li><strong>City of San Diego:</strong> weekly certified payroll through the City's own Labor Compliance Program system <strong>and</strong> to DIR. The City withholds payments when payroll is late or incomplete.</li>
<li><strong>No work this week?</strong> File a Statement of Non-Performance so the record has no gaps.</li>
</ul>`,
  watch: `<p>If you're the owner and work on the job yourself, you still report your hours, craft and pay. Your pay for that work must equal at least the prevailing rate.</p>`,
  deeper: `<ul>
<li>Labor Code §1771.4: missing eCPR uploads cost $100 per day, up to $5,000 per project (starting 14 days after the deadline).</li>
<li>Labor Code §1776: when an agency or DIR asks in writing for payroll records, you have 10 days; after that, $100 per calendar day per worker until you comply.</li>
<li>Small projects ($25,000 / $15,000 or less): no DIR upload, but keep the records 3 years and produce them on request.</li>
</ul>`,
  src: "Cal. Labor Code §§1771.4, 1776; DIR Public Works FAQ, Certified Payroll Reporting; Caltrans 11-428704 Special Provisions 7-1.02K(3); City of San Diego K-24-1952 Attachment D."
},

{ h: "DIR registration, job site posting and records",
  lead: "You must be registered before you bid. Once you're working, the wage rates and DIR's notice go up on site, and your records must be ready to show.",
  body: `<div class="twocol">
<div><h3>Registration (recap)</h3><ul>
<li>Every contractor and sub on a public works job must be DIR-registered to bid, be listed or work. See <a href="#m2-10">Module 2</a>.</li>
<li>$400 per fiscal year (July 1 to June 30). Late registration: $2,000 penalty, once in 12 months.</li>
<li>The agency registers the project with DIR and gets a DIR project ID. You use it on eCPR.</li>
<li>Unregistered contractors on a job can be removed by a stop order.</li>
</ul></div>
<div><h3>On site and in the office</h3><ul>
<li>Post the wage determinations at each job site.</li>
<li>Post DIR's job site notice telling workers how to report wage problems.</li>
<li>Keep time cards by craft, payroll, benefit payment proof, DAS 140/142, CAC-2 receipts and the determinations you used.</li>
<li>Keep records at least 3 years after the work.</li>
</ul></div>
</div>`,
  ex: `<p>The City of San Diego's EMTS Boat Dock Esplanade contract (K-24-1952) required the contractor and subs to “post a copy of the prevailing rate of per diem wages determination at each job site,” and to give the City a list of all subcontractors, at any tier, with DIR numbers, before work starts and with every invoice.</p>`,
  deeper: `<p>Labor Code §1773.2 has the agency post the determination at each job site; most contracts pass that duty to the contractor. Labor Code §1771.4(a)(2) has the agency post, or require the prime to post, DIR's job site notice. Labor Code §1725.5 sets registration; §1771.1 bars unregistered contractors from bidding or working.</p>`,
  src: "DIR Public Works FAQ; Cal. Labor Code §§1725.5, 1771.1, 1771.4, 1773.2; City of San Diego K-24-1952 Attachment D, §§1.1.1, 1.11."
},

{ h: "Penalties: what mistakes cost",
  lead: "Underpaying is never cheaper. You owe the back wages to the worker plus a penalty for every worker, every day.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Violation</th><th>Penalty</th><th>Law</th></tr></thead>
<tbody>
<tr><td>Paying less than prevailing wage</td><td>Back wages, plus up to $200 per worker per day. Minimum $40 (unless a good faith mistake promptly fixed), $80 with a prior violation in 3 years, $120 if willful.</td><td>LC §1775</td></tr>
<tr><td>No overtime on public works</td><td>$25 per worker per day</td><td>LC §1813</td></tr>
<tr><td>Payroll records not given within 10 days of a written request</td><td>$100 per worker per day</td><td>LC §1776</td></tr>
<tr><td>eCPR not uploaded to DIR</td><td>$100 per day, up to $5,000 per project</td><td>LC §1771.4</td></tr>
<tr><td>Knowing apprenticeship violation</td><td>Up to $100 per day; $300 per day for a repeat</td><td>LC §1777.7</td></tr>
<tr><td>Working without DIR registration</td><td>Removal by stop order; $2,000 to register late</td><td>LC §§1725.5, 1771.1</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Worked example:</strong> three Tenders were paid as Tenders on a federal-aid job where the federal laborer rate was required, for 15 days. Penalty alone: 3 workers × 15 days × $40 = $1,800 at the minimum, up to 3 × 15 × $200 = $9,000. Back wages are on top, and the agency withholds the money from your progress payments.</p>`,
  watch: `<p>The prime is also on the hook for a sub's underpayment if it didn't flow down the Labor Code sections in the subcontract, review the sub's certified payroll, act when it found a problem, and get a signed affidavit before final payment. Expect GCs to check your payroll closely.</p>`,
  src: "Cal. Labor Code §§1775, 1776, 1771.4, 1777.7, 1813; DIR Public Works FAQ (registration penalties)."
},

{ h: "Federal jobs: Davis-Bacon and “pay the higher”",
  lead: "When federal money is in the job, a federal wage decision applies too. On a state or local agency job with federal money, you pay whichever rate is higher for each classification.",
  body: `<ul>
<li><strong>Davis-Bacon</strong> is the federal prevailing wage law for federal construction contracts over $2,000. Its wage decisions are on SAM.gov and are bound into the bid documents.</li>
<li><strong>Federal-aid jobs run by California agencies</strong> (most Caltrans highway work, some City jobs) must follow <strong>both</strong> state and federal rules, including DIR registration.</li>
<li>Caltrans's rule on 11-428704: “the Contractor and subcontractors must not pay less than the higher wage rate.”</li>
<li>Jobs fully controlled by a federal agency (for example, on a military base) follow only the federal rules.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>11-428704 (advertised Aug 2, 2021)</th><th class="num">State (DIR) total</th><th class="num">Federal total</th><th class="num">Pay at least</th></tr></thead>
<tbody>
<tr><td>Landscape laborer (federal Laborer Group 1)</td><td class="num">$59.81</td><td class="num">$55.78</td><td class="num">$59.81</td></tr>
<tr><td>Irrigation laborer (federal Laborer Group 2)</td><td class="num">$59.81</td><td class="num">$56.24</td><td class="num">$59.81</td></tr>
<tr><td>Landscape/Irrigation Fitter</td><td class="num">$60.53</td><td class="num">$59.40</td><td class="num">$60.53</td></tr>
<tr><td>Skid steer (Operating Engineer Group 3)</td><td class="num">$78.31*</td><td class="num">$76.52</td><td class="num">$78.31*</td></tr>
</tbody></table></div>
<p>*State 2021-1 rate before its July 1, 2021 predetermined increase. The real minimum was higher.</p>`,
  watch: `<p>Module 15 lists the federal rates for this job. On its own, the federal table would have priced every classification here too low. Always pull the DIR rates too and compare line by line.</p>`,
  deeper: `<p>State rates: Landscape/Irrigation Laborer SD-102-X-14-2021-1 ($57.66) plus the Aug 1, 2021 increase ($2.15); Landscape/Irrigation Fitter, San Diego County subtrades 2021-1 ($35.30 + $8.91 + $13.30 + $1.89 + $1.13 = $60.53); Operating Engineer SD-23-63-3-2021-1 Group 3 ($78.31). Federal rates: General Decision CA20210001, Mod. 12 (LABO0089-004, PLUM0345-001, ENGI0012-003). Federal certified payroll rules also apply on federal-aid jobs.</p>`,
  src: "40 U.S.C. §3142; Caltrans 11-428704 Notice to Bidders and Addendum 1 federal wage rates; DIR 2021-1 determinations; DIR Public Works FAQ."
},

{ h: "Building prevailing wage into a bid",
  lead: "Labor on a public job is priced the same way as any job (Module 9), but every rate comes from the determination, and several costs are added.",
  body: `<ol class="steps">
<li><div><b>Find the advertisement date</b>It sets which determinations apply.</div></li>
<li><div><b>List the tasks and pick the craft for each</b>Planting, irrigation install, fitting, equipment, trucking, establishment.</div></li>
<li class="hl"><div><b>Pull each craft's total hourly rate and its increases</b>Spread the job over your schedule and use the rate in effect when each part of the work happens.</div></li>
<li><div><b>Build the crew mix the ratio rules allow</b>Laborer/Tender and Fitter/Tradesman rules, plus apprentices at 1 hour per 5.</div></li>
<li><div><b>Add burden on the wages you pay on the check</b>Payroll taxes, workers' comp and liability insurance. Ask your agent which pay your comp rate is charged on.</div></li>
<li><div><b>Add overtime, shift and travel</b>Night closures, weekend make-up days, travel and subsistence.</div></li>
<li><div><b>Add the compliance cost</b>Office time for certified payroll every week, LCPtracker or eCPR setup, DAS forms, training fund remittances.</div></li>
</ol>`,
  watch: `<p>Don't take your residential crew cost and add a percentage. Rebuild the crew day from the determination. The difference is too big to guess.</p>`
},

{ h: "Worked example: a planting crew day, 2026",
  lead: "The same four-person planting crew costs more than twice as much on a public job. Here's the math.",
  body: `<p><strong>Crew:</strong> 2 Landscape/Irrigation Laborers + 2 Landscape/Irrigation Tenders (allowed by footnote d). 8-hour day. 2026-2 San Diego rates.</p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">Public works</th><th class="num">Private (made-up)</th></tr></thead>
<tbody>
<tr><td>Laborers: 2 × rate × 8 h</td><td class="num">2 × $76.67 × 8 = $1,226.72</td><td class="num">2 × $25.00 × 8 = $400.00</td></tr>
<tr><td>Tenders / helpers: 2 × rate × 8 h</td><td class="num">2 × $30.19 × 8 = $483.04</td><td class="num">2 × $21.00 × 8 = $336.00</td></tr>
<tr><td>Wages and benefits</td><td class="num">$1,709.76</td><td class="num">$736.00</td></tr>
<tr><td>Wages on the check (basic rates)</td><td class="num">(2 × $47.57 + 2 × $21.97) × 8 = $1,112.64</td><td class="num">$736.00</td></tr>
<tr><td>Burden at 20% of check wages (example)</td><td class="num">$222.53</td><td class="num">$147.20</td></tr>
<tr><td><strong>Crew day</strong></td><td class="num"><strong>$1,932.29</strong></td><td class="num"><strong>$883.20</strong></td></tr>
</tbody></table></div>
<p>Public ÷ private = $1,932.29 ÷ $883.20 = <strong>2.19 times</strong>.</p>
<p><strong>Effect on a unit price:</strong> if the crew plants 60 one-gallon shrubs a day (example rate), labor per plant is $1,932.29 ÷ 60 = <strong>$32.20</strong> on the public job, compared with $883.20 ÷ 60 = $14.72 privately.</p>`,
  ex: `<p>If the job won't let you use Tenders (federal-aid Caltrans work, or crew size too small), four Laborers cost 4 × $76.67 × 8 = $2,453.44, plus 20% burden on $1,522.24 of check wages ($304.45) = <strong>$2,757.89</strong> a day.</p>`,
  watch: `<p>The private wages and the 20% burden are example numbers for practice. Use your own payroll costs and your insurance agent's rates. The public rates are real 2026-2 DIR rates; pull current ones for every bid.</p>`,
  src: "DIR SD-102-X-14-2026-1."
},

{ h: "Worked example: a 2021 federal-aid irrigation crew",
  lead: "Using the higher rate for each worker, here is the minimum hourly cost of an irrigation crew on Caltrans 11-428704.",
  body: `<p><strong>Crew:</strong> 1 Landscape/Irrigation Fitter, 2 irrigation laborers, 1 skid steer operator. No tenders (not in the federal decision).</p>
<div class="tablewrap"><table>
<thead><tr><th>Worker</th><th class="num">Higher rate (state)</th><th class="num">Federal only</th></tr></thead>
<tbody>
<tr><td>Fitter</td><td class="num">$60.53</td><td class="num">$59.40</td></tr>
<tr><td>2 irrigation laborers</td><td class="num">2 × $59.81 = $119.62</td><td class="num">2 × $56.24 = $112.48</td></tr>
<tr><td>Skid steer operator</td><td class="num">$78.31</td><td class="num">$76.52</td></tr>
<tr><td><strong>Crew per hour</strong></td><td class="num"><strong>$258.46</strong></td><td class="num">$248.40</td></tr>
<tr><td><strong>Crew per 8-hour day</strong></td><td class="num"><strong>$2,067.68</strong></td><td class="num">$1,987.20</td></tr>
</tbody></table></div>
<p>Pricing from the federal table alone would be $80.48 a day short, before burden. Over 100 crew-days that's about <strong>$8,048</strong> of wages you'd owe but never priced, plus penalties if you paid only the federal rate.</p>`,
  watch: `<p>This is still low. The skid steer rate is before the July 1, 2021 increase, the fitter determination expired Aug 31, 2021**, and the job ran into 2022. Price each predetermined increase for the months the work will happen.</p>`,
  src: "DIR 2021-1 determinations (SD-102-X-14 with Aug 1, 2021 increase; SDI 2021-1 Landscape/Irrigation Fitter; SD-23-63-3 Group 3); U.S. DOL CA20210001 Mod. 12."
},

{ h: "Paying subs and getting paid",
  lead: "California sets deadlines for passing payments down the chain. They protect you as a sub and bind you as a prime.",
  body: `<ul>
<li><strong>Progress payments:</strong> a prime or sub must pay its subs within 7 days of receiving each progress payment, unless agreed otherwise in writing. Late payment costs 2% per month.</li>
<li><strong>Retention:</strong> on public works, the agency must release retention within 60 days after completion, and the prime must pay each sub its share within 7 days of receiving it.</li>
<li><strong>Disputes:</strong> in a good faith dispute, no more than 150% of the disputed amount can be held back.</li>
<li><strong>Flow-down:</strong> your subcontracts must include the prevailing wage Labor Code sections (1771, 1775, 1776, 1777.5, 1813, 1815). Before final payment, get each sub's signed affidavit that it paid prevailing wages.</li>
</ul>`,
  ex: `<p>As a landscape sub, you'll see this from the other side: GCs hold your payment until your certified payroll is in, and the City of San Diego withholds payments when payroll records are late. Send payroll on time and your money moves on time.</p>`,
  deeper: `<p>Business and Professions Code §7108.5 (progress payments); Public Contract Code §7107 (retention); Public Contract Code §10262 has its own 7-day rule on state contracts like Caltrans. Module 16 covers billing and retention in detail.</p>`,
  src: "Cal. Bus. &amp; Prof. Code §7108.5; Cal. Public Contract Code §§7107, 10262; Cal. Labor Code §1775(b)."
},

{ h: "Pitfalls for residential landscape companies",
  lead: "These are the mistakes companies make on their first public jobs. Every one costs real money.",
  body: `<ul>
<li><strong>Bidding your residential crew rate.</strong> Public labor can cost twice as much. Rebuild the crew day from the determination.</li>
<li><strong>Using the printed rate when it has **.</strong> The scheduled raise is part of the minimum.</li>
<li><strong>Wrong craft.</strong> Paying a fitter's work at a tender rate, or forgetting the operator rate for equipment hours.</li>
<li><strong>Too many tenders.</strong> Breaking the ratio means paying journeyman rates for those hours, plus penalties.</li>
<li><strong>No DAS 140.</strong> Even short jobs over the $30,000 contract threshold need it.</li>
<li><strong>Late certified payroll.</strong> Payments stop and penalties start.</li>
<li><strong>Benefits not annualized.</strong> Claiming a full year's benefit cost against public hours only.</li>
<li><strong>Owner working without reporting.</strong> Owner hours still go on certified payroll.</li>
<li><strong>Using an unregistered sub or trucker.</strong> Check DIR registration for every sub before you list them.</li>
<li><strong>No time cards by craft.</strong> Without them you can't prove which rate applied.</li>
</ul>`,
  watch: `<p>Set up prevailing wage payroll with your payroll provider before you bid your first public job. Ask them if they can produce certified payroll and the DIR eCPR upload file (XML).</p>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Public works", "Construction, alteration, installation, demolition, repair or maintenance paid for in whole or in part with public funds."],
    ["Prevailing wage", "The minimum hourly pay, wages plus benefits, the state sets for each craft in each county."],
    ["DIR", "California Department of Industrial Relations. Sets rates, registers contractors and enforces public works law."],
    ["General prevailing wage determination", "DIR's published rates for one craft and area, issued Feb 22 and Aug 22."],
    ["Bid advertisement date", "The date the job was advertised. It fixes which determination applies."],
    ["Predetermined increase", "A raise already scheduled in the determination (marked **). You must pay it when it takes effect."],
    ["Basic hourly rate", "The taxable wage part of the prevailing rate."],
    ["Employer payments (fringe)", "Health, pension, vacation, training and other amounts paid on top of the basic rate."],
    ["Total hourly rate", "Basic rate plus employer payments. The real minimum cost per hour."],
    ["Craft / classification", "The trade category a worker is paid under, like Landscape/Irrigation Laborer."],
    ["Tender / Tradesman", "Lower-paid helper classifications allowed only in set ratios with journeymen."],
    ["Journeyman", "A fully qualified worker in a craft."],
    ["Apprentice", "A registered trainee in a state-approved program, paid apprentice rates."],
    ["DAS 140", "Form notifying apprenticeship committees of your contract award."],
    ["DAS 142", "Form requesting dispatch of apprentices."],
    ["CAC-2", "Form sent with training fund payments to the California Apprenticeship Council."],
    ["Certified payroll (CPR)", "Weekly payroll record by worker and craft, signed under penalty of perjury."],
    ["eCPR", "Electronic certified payroll uploaded to DIR."],
    ["LCPtracker", "The certified payroll system Caltrans uses."],
    ["Davis-Bacon", "Federal prevailing wage law for federal and federally funded construction."],
    ["Annualization", "Spreading benefit credit over all hours worked in the year, public and private."]
  ]
},

{ t: "quiz", id: "m11", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "Which wage determination applies to a public job?", a: ["The one in effect on the day you start work", "The one in effect on the bid advertisement date", "The newest one when you sign the contract"], c: 1, why: "Rates are locked to the bid advertisement date so every bidder prices the same rates, plus any predetermined increases." },
    { q: "A determination's expiration date shows two asterisks (**). What does that mean?", a: ["The rate is good for the whole project", "A raise is already scheduled and must be paid after that date", "The determination was cancelled"], c: 1, why: "Double asterisks mean a predetermined increase. Price it for work after that date." },
    { q: "The 2026-2 Landscape/Irrigation Laborer total is $76.67 and the basic rate is $47.57. What is the daily overtime rate?", a: ["$115.01 (1.5 × $76.67)", "$100.455 ($47.57 × 1.5 + $29.10)", "$76.67, overtime isn't extra"], c: 1, why: "Overtime multiplies the basic rate, then the employer payments are added once." },
    { q: "Can a crew of four on a City landscape job include two Landscape/Irrigation Tenders?", a: ["No, tenders are never allowed", "Yes, the 3rd and 4th workers may be tenders if the 1st and 2nd are laborers (or an apprentice as 2nd)", "Yes, all four can be tenders"], c: 1, why: "Footnote d sets the laborer/tender order. Only plant establishment may be done entirely by tenders." },
    { q: "Your two laborers will work 640 journeyman hours. How many apprentice hours does the 1:5 ratio require?", a: ["128", "64", "320"], c: 0, why: "640 ÷ 5 = 128 apprentice hours." },
    { q: "Where do you submit certified payroll on a Caltrans job?", a: ["Only to DIR's eCPR system", "LCPtracker Pro, as the Caltrans specs require", "Nowhere, Caltrans doesn't require it"], c: 1, why: "Caltrans is exempt from DIR's eCPR and uses LCPtracker Pro." },
    { q: "On a federal-aid Caltrans job, the state rate is $59.81 and the federal rate is $55.78 for the same work. What do you pay?", a: ["$55.78", "The average", "At least $59.81"], c: 2, why: "You must not pay less than the higher of the state and federal rates." },
    { q: "What is the maximum penalty for underpaying prevailing wage, per worker per day, on top of back wages?", a: ["$25", "$200", "$1,000"], c: 1, why: "Labor Code §1775 allows up to $200 per worker per day, with minimums of $40, $80 or $120 depending on the case." }
  ]
},

{ t: "practice", id: "m11", h: "Practice assignments",
  lead: "These build the tools you'll use on every public bid. Save them in the bid-ready folder.",
  items: [
    { h: "Download today's San Diego determinations", hrs: 0.5, d: "<p>On <a href=\"https://www.dir.ca.gov/oprl/DPreWageDetermination.htm\" target=\"_blank\" rel=\"noopener\">DIR's determinations page</a>, open the current period. Save the PDFs for Landscape/Irrigation Laborer/Tender, Operating Engineer, Teamster and Laborer (Engineering Construction), plus the San Diego County subtrades page for Landscape/Irrigation Fitter and Tradesman. Save each craft's Increase, Holidays and Scope PDFs too. Write the issue and expiration dates (with asterisks) on a cover sheet.</p>" },
    { h: "Build a rate table", hrs: 0.75, d: "<p>In a spreadsheet, list each craft and group you'd use: basic rate, each employer payment, total, 1½× and 2× rates, training amount and the date of the next increase. Add a column for which tasks each craft covers, from the Scope PDFs. Check that your totals match DIR's to the cent.</p>" },
    { h: "Price two crew days", hrs: 0.75, d: "<p>Using your rate table, build an 8-hour cost for (1) a 4-person planting crew with the tender mix allowed and (2) a 4-person irrigation crew with a fitter and a skid steer operator. Add burden using your company's real payroll tax, workers' comp and insurance rates. Compare both to your current residential crew day.</p>" },
    { h: "Redo the 11-428704 crew with the higher rates", hrs: 0.5, d: "<p>Open the federal wage rates for <a href=\"#lab-11-428704\">11-428704</a> and DIR's superseded 2021-1 San Diego determinations. For each worker in the crew you built in Module 15, find both rates and use the higher. Look up the July 1, 2021 Operating Engineer increase and add it.</p>" },
    { h: "Map out the apprenticeship steps", hrs: 0.5, d: "<p>Download the <a href=\"https://www.dir.ca.gov/DAS/DASForm140.pdf\" target=\"_blank\" rel=\"noopener\">DAS 140</a> and <a href=\"https://www.dir.ca.gov/DAS/DASForm142.pdf\" target=\"_blank\" rel=\"noopener\">DAS 142</a>. Use DIR's apprenticeship search to find the committees that serve San Diego County for Landscape/Irrigation Laborer and Fitter. Fill in a sample DAS 140 for a made-up $250,000 City park job and write a one-page checklist with dates.</p>" },
    { h: "Talk to your payroll provider", hrs: 0.5, d: "<p>Ask: Can you run prevailing wage payroll by craft? Produce certified payroll and DIR eCPR XML files? Handle cash fringe and annualization? Upload to LCPtracker? What does it cost? Write down the answers and what you need to set up before your first public job.</p>" },
    { h: "Look at real certified payroll", hrs: 0.5, d: "<p>Use DIR's public <a href=\"https://services.dir.ca.gov/pw?id=ecpr_public_search\" target=\"_blank\" rel=\"noopener\">certified payroll search</a> to find a recent San Diego County park or landscape project. Open one redacted payroll. Note the crafts used, hours per day and rates paid. Compare them to your rate table.</p>" }
  ]
},

{ h: "Module 11 summary",
  lead: "Public work pays by the state's rates, and the state checks. Price it right and keep the paperwork clean.",
  body: `<ul>
<li>Public money in the job means prevailing wage for every worker over $1,000.</li>
<li>Use the DIR determinations in effect on the bid advertisement date, plus every predetermined increase (**) during the job.</li>
<li>Pick the craft by the work done. Landscape/Irrigation Laborer, Tender, Fitter, Operating Engineer and Teamster cover most landscape jobs. Follow the tender and tradesman ratios.</li>
<li>Pay at least the total hourly rate. Overtime multiplies the basic rate. Benefits not paid into plans go on the check.</li>
<li>On contracts of $30,000 or more: DAS 140, DAS 142, 1:5 apprentice hours and training fund payments.</li>
<li>Certified payroll weekly: DIR eCPR on most jobs, LCPtracker on Caltrans, plus the City's system on City jobs.</li>
<li>On federal-aid jobs, pay the higher of state and federal for each worker.</li>
<li>Rebuild the crew day from the rates. It can cost twice the residential number.</li>
</ul>
<p><strong>Next: Module 12 · Pre-Bid Meetings, RFIs, Addenda and Communication.</strong></p>`
}
]
});
