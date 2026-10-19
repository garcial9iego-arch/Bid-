(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 11, hours: 9, title: "Prevailing Wage and Public Works Compliance",
slides: [

{ t: "cover",
  h: "Prevailing Wage and Public Works Compliance",
  lead: "On public work, the state tells you the minimum you must pay every worker, by trade, and checks that you did. Get the rate wrong in the bid and you lose money. Get it wrong on the job and you pay back wages plus penalties.",
  objectives: [
    "Tell when a job is “public works” and prevailing wage applies",
    "Find the right DIR (Department of Industrial Relations) wage determination for a San Diego County job, screen by screen, and read every column and footnote",
    "Pick the right craft and group for landscape, irrigation, equipment, trucking and plant establishment work",
    "Work out basic rate, employer payments (fringe), overtime, Saturday, holiday and predetermined increase costs, with the math shown",
    "Pay fringe benefits correctly, into plans or as cash, and annualize them",
    "Meet the apprenticeship, certified payroll, posting and recordkeeping rules, step by step",
    "Know what an audit looks like, what penalties cost, and what to flow down to your subs",
    "Apply the “pay the higher rate” rule on federally funded jobs",
    "Build a prevailing wage crew cost into a bid"
  ],
  time: [["Reading and slides", "4 h"], ["Practice assignments", "5 h"], ["Module total", "9 h"]],
  body: `<p>Prevailing wage is the biggest difference between pricing a residential job and pricing a public one. The rates in this module are real, from the California Department of Industrial Relations (DIR) 2026-2 determinations for San Diego County, and from the federal wage decision for Caltrans job 11-428704 (<a href="#m15-16">Module 15</a>). Rates change every year. Always pull the current ones for your bid. Numbers marked “example” are made up for practice.</p>`,
  src: "California Labor Code §§1720–1861; DIR Office of the Director – Research, General Prevailing Wage Determinations (dir.ca.gov/oprl/DPreWageDetermination.htm)."
},

{ h: "When is a job “public works”?",
  lead: "If public money pays for any part of the construction, it is almost always public works, and every worker on it must get at least the prevailing wage.",
  body: `<ul>
<li><strong>Public works</strong> means construction, alteration, demolition, installation or repair done under contract and paid for in whole or in part with public funds. Street work and improvement work done for a city or district counts too.</li>
<li><strong>Prevailing wage</strong> is the minimum hourly pay (wages plus benefits) the state sets for each trade in each county.</li>
<li>It applies to public works <strong>over $1,000</strong>. That includes maintenance work, like landscape maintenance on a city contract.</li>
<li>It applies to <strong>everyone who does the work</strong>: your crew, your subs' crews, and you, if the owner works on the job.</li>
<li>It applies whether you are the prime (the contractor who signs with the owner) or a sub. A GC's (general contractor's) school or park job is public works for you too.</li>
</ul>`,
  ex: `<p>A private developer builds an affordable housing project with City housing money and asks you to price the landscape. It feels private, but public funds pay part of it. Read the bid documents for prevailing wage language before you price. Module 1 covers this trap.</p>`,
  watch: `<p>Agencies can't split a job into small pieces to stay under the limits. If the bid documents say prevailing wage applies, it applies, even to your small scope.</p>`,
  deeper: `<ul>
<li>Labor Code (LC) §1720(a)(1) defines public works; §1771 requires prevailing wage on public works over $1,000, including maintenance.</li>
<li><strong>Small project exemption:</strong> DIR (Department of Industrial Relations) registration and electronic certified payroll aren't required on projects of $25,000 or less (new construction, alteration, installation, demolition or repair) or $15,000 or less (maintenance). The limit is the whole prime contract, not your subcontract. Prevailing wage still applies over $1,000.</li>
<li>If you aren't sure, anyone can ask DIR for a coverage determination (pwcoverage@dir.ca.gov).</li>
</ul>`,
  src: "Cal. Labor Code §§1720, 1771; DIR Public Works FAQ (dir.ca.gov/Public-Works/PublicWorksSB854FAQ.html)."
},

{ h: "Ask yourself: is this job prevailing wage?",
  lead: "Run every new bid through these questions before you price a single hour of labor.",
  body: `<ol class="steps">
<li><div><b>Who is the owner?</b>A city, county, school or college district, water district, the State (including Caltrans), a port or a transit agency? If yes, it is almost certainly public works.</div></li>
<li><div><b>Is any public money in it?</b>Grants, housing money, bond money, fee waivers or below-market land from an agency can make a private-looking job public works. Ask the GC (general contractor).</div></li>
<li class="hl"><div><b>What do the bid documents say?</b>Search the specs and the subcontract for “prevailing wage,” “Labor Code,” “DIR” (Department of Industrial Relations) and “certified payroll.” If they're there, price it as public works.</div></li>
<li><div><b>Is it over $1,000?</b>Then prevailing wage applies. Over $25,000 for construction ($15,000 for maintenance) also means DIR registration and electronic payroll.</div></li>
<li><div><b>Is federal money in it?</b>Then a federal wage decision applies too (later in this module).</div></li>
<li><div><b>Still not sure?</b>Ask the GC or agency in writing (Module 12), and keep the answer in the bid folder.</div></li>
</ol>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Job</th><th>Public works?</th></tr></thead>
<tbody>
<tr><td>Caltrans freeway planting, 11-428704</td><td>Yes: State owner, federal money too</td></tr>
<tr><td>City of San Diego park, K-24-1952</td><td>Yes: City owner, City contract requires prevailing wage</td></tr>
<tr><td>School district playground renovation, through a GC</td><td>Yes: public owner, you're a sub</td></tr>
<tr><td>HOA common-area renovation paid by HOA dues</td><td>Usually no: private owner, private money. Check the contract.</td></tr>
<tr><td>Private apartment job with City housing funds</td><td>Likely yes: read the documents and ask</td></tr>
</tbody></table></div>`,
  watch: `<p>“The GC said it's not prevailing wage” is not proof. If the documents say it is, you owe prevailing wage. Get any “no” in writing.</p>`,
  src: "Cal. Labor Code §§1720, 1771; DIR Public Works FAQ."
},

{ h: "The wage determination, in plain words",
  lead: "DIR (Department of Industrial Relations) publishes the rates as “general prevailing wage determinations,” one for each craft and area. The one that applies to your job is the one in effect on the date the job was advertised for bids.",
  body: `<ul>
<li><strong>Issued twice a year:</strong> February 22 and August 22. Each goes into effect 10 days later.</li>
<li><strong>By craft and county:</strong> one document for Landscape/Irrigation Laborer in San Diego County, another for Operating Engineer, and so on.</li>
<li><strong>Locked to the bid advertisement date:</strong> all bidders use the same rates, so nobody wins by paying less.</li>
<li><strong>Expiration date with one asterisk (*):</strong> the rate stays good for the life of the project.</li>
<li><strong>Expiration date with two asterisks (**):</strong> a raise is already scheduled. If work goes past that date, you must pay the new rate. This is called a <strong>predetermined increase</strong>, and you must price it in your bid.</li>
</ul>`,
  ex: `<p><strong>Real example:</strong> Caltrans advertised job 11-428704 on Aug 2, 2021. The San Diego Landscape/Irrigation Laborer determination in effect that day (SD-102-X-14-2021-1) expired “July 31, 2021**”. DIR's predetermined increase notice said: “Effective August 1, 2021, there will be an increase of $2.15 allocated as follows: $1.04 Basic Hourly Rate, $0.10 to Health &amp; Welfare and $1.01 to Pension.” So every laborer hour on that job cost at least $57.66 + $2.15 = <strong>$59.81</strong>, not the $57.66 printed on the determination.</p>`,
  watch: `<p>Two asterisks mean the printed rate is already out of date for most of your job. Open the “Increase” link next to the craft every time.</p>`,
  deeper: `<p>The effective date is 10 days after issue (8 CCR §16000, Title 8 of the California Code of Regulations). If a craft you need isn't covered, the agency can ask DIR for a special determination at least 45 days before the bid advertisement date. The awarding body (the agency that awards the contract) must state the rates, or that they are on file, in the call for bids (Labor Code §1773.2).</p>`,
  src: "DIR Prevailing Wage FAQ (dir.ca.gov/oprl/FAQ_PrevailingWage.html); DIR SD-102-X-14-2021-1 and its Predetermined Increase notice; Cal. Labor Code §1773.2."
},

{ h: "Which rate period applies? Date examples",
  lead: "Find the bid advertisement date, then find which period was in effect that day. One day can change the rates.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Bid advertised on</th><th>Period that applies</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Aug 28, 2026</td><td>2026-1</td><td>2026-2 was issued Aug 22, 2026 but didn't take effect until Sept 1, 2026 (10 days later)</td></tr>
<tr><td>Sept 1, 2026</td><td>2026-2</td><td>First day 2026-2 is in effect</td></tr>
<tr><td>Feb 25, 2027</td><td>2026-2</td><td>2027-1 is issued Feb 22, 2027 but takes effect March 4, 2027 (non-leap year)</td></tr>
<tr><td>Oct 12, 2026, Laborer (Engineering Construction) only</td><td>Interim SD-23-102-3-2026-1</td><td>DIR (Department of Industrial Relations) issued an interim determination Sept 29, 2026 for projects advertised on or after Oct 9, 2026</td></tr>
</tbody></table></div>
<p>Then add any predetermined increases that take effect while your crew is working.</p>`,
  ex: `<p><strong>Interim determinations happen.</strong> DIR's notice for Laborer (Engineering Construction) in San Diego County says: “This determination applies to projects advertised for bids on or after October 9, 2026. These rates supersede the rates in determination SD-23-102-3-2025-1.” Its Group 1 total jumped to $78.65. A bid advertised Oct 8 and one advertised Oct 9 use different rates.</p>`,
  watch: `<p>The advertisement date is in the Notice Inviting Bids, not the bid date. On 11-428704 the Notice to Bidders was dated Aug 2, 2021 and bids opened Sept 8, 2021. Use Aug 2.</p>`,
  deeper: `<p>DIR's 2026-2 index page: “The general determinations are issued twice a year (February 22nd and August 22nd) and go into effect ten days thereafter (March 3rd in a leap year and March 4th in a non-leap year for determinations issued on February 22nd, and September 1st for determinations issued on August 22nd).” Check DIR's “Important notices” page for interim determinations and corrections before every bid.</p>`,
  src: "DIR Index 2026-2 general prevailing wage journeyman determinations; DIR Interim Determination SD-23-102-3-2026-1 (issued Sept 29, 2026); Caltrans 11-428704 Notice to Bidders."
},

{ h: "How to find the right rate",
  lead: "DIR's (Department of Industrial Relations) site walks you through six steps. For San Diego County landscape work you will use steps 2B, 3 and 4 most.",
  body: `<ol class="steps">
<li><div><b>Open the determinations page</b>Go to <a href="https://www.dir.ca.gov/oprl/DPreWageDetermination.htm" target="_blank" rel="noopener">DIR General Prevailing Wage Determinations</a> and pick the period that was current on the bid advertisement date (for example “2026-2”).</div></li>
<li><div><b>Step 1 · Statewide</b>Trades that apply in most counties.</div></li>
<li><div><b>Step 2B · Southern California</b>Includes Laborer, Operating Engineer, Landscape Maintenance Laborer and Tree Maintenance (Laborer) when marked “Includes San Diego County.”</div></li>
<li class="hl"><div><b>Step 3 · San Diego</b>Landscape Irrigation Laborer, Laborer (Engineering Construction), Operating Engineer, Teamster.</div></li>
<li class="hl"><div><b>Step 4 · County subtrades</b>Choose San Diego. This is where the Plumber crafts live, including Landscape/Irrigation Fitter and Landscape/Irrigation Tradesman.</div></li>
<li><div><b>Step 6 · Important notices</b>Check for corrections that change a rate.</div></li>
</ol>
<p>For each craft, also open the <strong>Increase</strong>, <strong>Holidays</strong>, <strong>Scope</strong> (what work the craft covers) and <strong>Travel</strong> links. Apprentice rates are on a separate DIR page.</p>`,
  ex: `<p>Save a PDF (portable document file) of every determination you used, with the date you downloaded it, in the bid folder. If a question comes up during the job, you can prove which rate you bid.</p>`,
  src: "DIR Index 2026-2 general prevailing wage journeyman determinations (dir.ca.gov/oprl/2026-2/PWD/index.htm)."
},

{ h: "Screen by screen on DIR's website",
  lead: "Here is exactly what you'll see and click to pull the San Diego landscape rates. Allow 20 minutes the first time.",
  body: `<ol class="steps">
<li><div><b>Landing page</b>On “Director's General Prevailing Wage Determinations” you'll see links like “2026-2 General prevailing wage determinations menu (journeyman),” “2026-2 General prevailing wage apprentice determinations menu,” “Superseded prevailing wage determinations” (older periods) and “Important notices.” Click the journeyman menu.</div></li>
<li><div><b>The index page</b>A table of six steps with links: Statewide, Northern, Southern, San Diego, County subtrades (a list of counties), and Shift. Click <b>San Diego</b>.</div></li>
<li class="hl"><div><b>The San Diego page</b>Each craft is one row with a link to its determination PDF (portable document file) and a “Select One” drop-down with <b>Holidays</b>, <b>Scope</b>, <b>Travel</b>, plus an <b>Increase</b> link. A “+” after a craft name (Operating Engineer +) means shift rates exist.</div></li>
<li><div><b>Open the PDF</b>For Landscape Irrigation Laborer it's SD-102-X-14. Write down the determination number, issue date and expiration date with its asterisks.</div></li>
<li><div><b>Open Increase, Holidays, Scope and Travel</b>Each is a short PDF. Save all four with the determination.</div></li>
<li><div><b>Back to the index · County subtrades · San Diego</b>This is one long web table. Scroll to “PLUMBER: LANDSCAPE/IRRIGATION FITTER” and “TRADESMAN.” Footnote letters sit next to numbers; the footnote text is at the bottom of the page. The predetermined increases for subtrades are on a separate “SDI-Pre” page.</div></li>
<li><div><b>Apprentice rates</b>From the landing page, open the apprentice menu, pick the period and county, then “View” the craft.</div></li>
<li><div><b>Important notices</b>Open the notice index for the period. Look for your crafts.</div></li>
</ol>`,
  watch: `<p>Some links on DIR's (Department of Industrial Relations) pages differ only by a letter: SD-23-63-3 is Operating Engineer, SD-23-63-3(B) is cranes and hoisting, (C) is tunnel and (D) is inspectors and soils testers. Read the craft name inside the PDF before you copy numbers.</p>`,
  deeper: `<p>If a page won't load or a rate looks wrong, call DIR's Office of the Director – Research Unit at (415) 703-4774 or email statistics@dir.ca.gov. Write down who you talked to and when.</p>`,
  src: "DIR Director's General Prevailing Wage Determinations page; DIR 2026-2 San Diego page and San Diego County subtrades page (SDI); DIR apprentice wage sheets (dir.ca.gov/OPRL/PWAppWage/PWAppWageStart.asp)."
},

{ h: "The crafts landscape work uses",
  lead: "Each hour is paid by the work the person actually does that hour, whatever their job title at your company. These are the DIR (Department of Industrial Relations) crafts a San Diego landscape crew uses most.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>DIR craft (San Diego County, 2026-2)</th><th>Where on DIR's site</th><th>Typical work</th></tr></thead>
<tbody>
<tr><td><strong>Landscape/Irrigation Laborer</strong> (also Landscape Hydro Seeder)</td><td>San Diego · SD-102-X-14</td><td>Planting, soil prep, trenching and installing irrigation as a laborer</td></tr>
<tr><td><strong>Landscape/Irrigation Tender</strong></td><td>Same determination</td><td>Helper work under the ratio rules; plant establishment</td></tr>
<tr><td><strong>Plumber: Landscape/Irrigation Fitter</strong> and <strong>Landscape/Irrigation Tradesman</strong></td><td>County subtrades · San Diego</td><td>Irrigation pipefitting when the fitter scope applies</td></tr>
<tr><td><strong>Operating Engineer</strong></td><td>San Diego · SD-23-63-3</td><td>Skid steer (Group 3), mini backhoe, boring machine and small excavator (Group 4)</td></tr>
<tr><td><strong>Teamster</strong></td><td>San Diego · SD-23-261-3</td><td>Dump truck and water truck driving on site</td></tr>
<tr><td><strong>Laborer (Engineering Construction)</strong></td><td>San Diego</td><td>General construction labor, demolition, flagging</td></tr>
<tr><td><strong>Tree Maintenance (Laborer)</strong></td><td>Southern California</td><td>Tree trimming and removal</td></tr>
<tr><td><strong>Landscape Maintenance Laborer</strong></td><td>Southern California</td><td>Maintenance contracts (not new construction)</td></tr>
</tbody></table></div>`,
  watch: `<p>A worker who spends the morning running the skid steer and the afternoon planting gets the Operating Engineer rate for the morning hours and the laborer rate for the afternoon. Track hours by craft on the time card, or pay the higher rate for the whole day.</p>`,
  deeper: `<p>Read the <strong>Scope</strong> PDF (portable document file) for each craft. It is labeled advisory, but it's the best guide to which craft covers which task. If two crafts could fit, many contractors pay the higher one to stay safe. When in doubt, ask DIR's Research Unit at (415) 703-4774 before bid day.</p>`,
  src: "DIR 2026-2 San Diego basic trades index, Southern California index, and San Diego County subtrades (SDI-2026-2)."
},

{ h: "Reading the Scope PDF: what the landscape craft covers",
  lead: "The Scope of Work Provisions tell you which tasks belong to the Landscape/Irrigation Laborer craft, and which few tasks a Tender may do.",
  body: `<div class="twocol">
<div><h3>Landscape/Irrigation Laborer covers (quoted from the scope)</h3><ul>
<li>“handgrade landscaped areas, tractor grade landscaped areas, finish rake landscape areas, spread top soil, build mounds”</li>
<li>“trench for irrigation manual or power, layout for irrigation, backfill trenches”</li>
<li>“plant shrubs, trees (including removal, relocation and trimming of trees on construction projects)… set boulders, seed lawns, lay sod; hydro seed”</li>
<li>installing low-voltage irrigation: “controllers, valves, sensors… junction boxes and conductors”</li>
<li>“Start-up testing, flushing, purging, water balancing”</li>
<li>“All temporary irrigation”</li>
<li>Plant establishment work during the warranty or the period DIR (Department of Industrial Relations) sets</li>
</ul></div>
<div><h3>Tenders may only (item 62)</h3><ul>
<li>Assist the Landscape Laborer with wire installation</li>
<li>Unload materials, distribute pipe, stack heads and risers</li>
<li>Set valve boxes and thrust blocks</li>
<li>Clean and backfill trenches with a shovel</li>
<li>Clean up and water during construction</li>
<li>Other landscaping, planting and irrigation work, as helpers</li>
</ul></div>
</div>`,
  watch: `<p>The scope says traffic control incidental to landscape work is covered “except on freeways, highways, and high traffic areas where safety is of paramount concern.” On a freeway or busy street, flagging and traffic control belong to Laborer (Engineering Construction) Group 1 (“Flagman,” “Traffic Control by any method”) or to your traffic control sub.</p>`,
  deeper: `<p>The scope PDF (portable document file) has redacted parts and is labeled advisory. Use it to choose the craft, and ask DIR when a task could fit two crafts. Hydroseeding by hand is the Landscape Hydro Seeder classification ($77.77 total in 2026-2); running a hydroseeder machine is listed under Operating Engineer Group 4 (“Hydro Seeder Machine Operator”).</p>`,
  src: "DIR Scope of Work Provisions, Landscape/Irrigation Laborer/Tender, ID 102-X-14, San Diego County (2026-2); DIR SD-23-102-3-2026-1 classifications; DIR SD-23-63-3-2026-2 classifications."
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
  ex: `<p><strong>Check the math yourself:</strong> $47.57 + $9.85 + $12.92 + $5.02 + $0.80 + $0.51 = $76.67. Overtime: $47.57 × 1.5 = $71.355, plus the $29.10 of employer payments = $100.455. Overtime multiplies only the basic rate.</p>`,
  watch: `<p>Read the footnotes. Here footnote b says the 1½× rate covers only the first 4 daily overtime hours and the first 12 hours on Saturday; after that, double time. Footnote c lets Saturday be worked at straight time only as a weather make-up day.</p>`,
  src: "DIR determination SD-102-X-14-2026-1, Landscape/Irrigation Laborer/Tender, San Diego County."
},

{ h: "Every symbol and footnote, decoded",
  lead: "The small marks on a determination change your cost. Here is what each one means on the San Diego landscape-related crafts.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mark</th><th>Where you see it</th><th>What it means for your bid</th></tr></thead>
<tbody>
<tr><td><strong>#</strong></td><td>After the craft name</td><td>Apprenticeable craft: apprentice and training fund rules apply. Teamster has no # in 2026-2 and its training amount is $0.00.</td></tr>
<tr><td><strong>*</strong> / <strong>**</strong></td><td>After the expiration date</td><td>* rate good for the whole job; ** a raise is scheduled, open the Increase PDF (portable document file)</td></tr>
<tr><td><strong>+</strong></td><td>After Operating Engineer on DIR's (Department of Industrial Relations) list</td><td>Shift rates exist (night and multi-shift work)</td></tr>
<tr><td><strong>a</strong> (landscape)</td><td>Vacation and holiday</td><td>Includes supplemental dues (an amount withheld for the union)</td></tr>
<tr><td><strong>b</strong> (landscape)</td><td>Overtime columns</td><td>1½× only for the first 4 daily overtime hours and first 12 Saturday hours; then 2×</td></tr>
<tr><td><strong>c</strong> (landscape)</td><td>Saturday column</td><td>Saturday at straight time only if weather or ground conditions shut the job down that week</td></tr>
<tr><td><strong>d</strong> (landscape)</td><td>Tender line</td><td>The laborer/tender order on the jobsite; plant establishment may be all tenders</td></tr>
<tr><td><strong>AO</strong> (Fitter)</td><td>Vacation and holiday $0.000</td><td>“Amount included in basic hourly rate and factored at 1.5 times for all overtime”</td></tr>
<tr><td><strong>AR</strong> (Fitter)</td><td>Saturday column</td><td>Saturday at straight time if the job was shut down that week for weather</td></tr>
<tr><td><strong>Y / AV</strong> (Tradesman)</td><td>Tradesman line</td><td>The fitter/tradesman order on the job</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Travel and subsistence (Landscape/Irrigation Laborer):</strong> workers get to their daily reporting place on their own time, but you pay from a reporting point you order them to, to the job. If free parking isn't available within 350 yards of the jobsite you must provide parking or reimburse it. Workers more than 70 road miles from your shop get <strong>$100 per scheduled workday</strong> subsistence, unless they were dispatched directly and live within 70 miles. A San Diego shop working in San Diego County rarely hits 70 miles; a job in Borrego Springs or Imperial County might.</p>`,
  watch: `<p>Teamster rates say “Applies only to work on the construction site.” Driving a truck between your yard and the job is handled differently. Ask DIR before you assume either way.</p>`,
  src: "DIR SD-102-X-14-2026-1 footnotes a–d; DIR Travel and Subsistence Provisions ID 102-X-14; DIR SDI-2026-2 footnotes AO, AR, AV and SDI-Pre footnote Y; DIR SD-23-261-3-2026-1."
},

{ h: "Tenders, tradesmen and the ratio rules",
  lead: "The lower-paid helper classifications can only be used in a set mix with journeymen. Price only the mix the rules allow.",
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

{ h: "Operating Engineer groups for landscape equipment",
  lead: "Operators are paid by the group their machine falls in. Find your machine in the classification list, then use that group's rate.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Machine (as DIR (Department of Industrial Relations) lists it)</th><th>Group</th><th class="num">Basic</th><th class="num">Total</th><th class="num">1½×</th><th class="num">2×</th></tr></thead>
<tbody>
<tr><td>“Ditch Witch, With Seat Or Similar Type Equipment”; generator, pump, compressor</td><td>1</td><td class="num">$62.40</td><td class="num">$103.71</td><td class="num">$134.91</td><td class="num">$166.11</td></tr>
<tr><td>Skiploader (wheel type up to ¾ yard)</td><td>2</td><td class="num">$63.18</td><td class="num">$104.49</td><td class="num">$136.08</td><td class="num">$167.67</td></tr>
<tr><td>“Skid Steer (Loader, with all attachment)”</td><td>3</td><td class="num">$63.47</td><td class="num">$104.78</td><td class="num">$136.515</td><td class="num">$168.25</td></tr>
<tr><td>Mini backhoe (“Mini-Max Or Similar Type”), boring machine, horizontal directional drilling machine, excavator under 21,000 lbs, trenching machine up to 6 ft, compacting roller, hydroseeder machine, skiploader over ¾ to 1½ yd, bulldozer up to D-5 size</td><td>4</td><td class="num">$64.96</td><td class="num">$106.27</td><td class="num">$138.75</td><td class="num">$171.23</td></tr>
<tr><td>Backhoe up to ¾ yd (small Ford, Case), excavator 21,000 to 100,000 lbs</td><td>8</td><td class="num">$65.29</td><td class="num">$106.60</td><td class="num">$139.245</td><td class="num">$171.89</td></tr>
</tbody></table></div>
<p>Every group gets the same employer payments: $17.45 health and welfare + $18.40 pension + $3.95 vacation and holiday + $1.10 training + $0.41 other = <strong>$41.31</strong>. Check: Group 3, $63.47 + $41.31 = $104.78.</p>`,
  ex: `<p>A one-day mainline job: the operator runs a 13,000-lb mini excavator (Group 4) for 6 hours and a skid steer (Group 3) for 2 hours. Pay by the hour of each: 6 × $106.27 + 2 × $104.78 = $637.62 + $209.56 = <strong>$847.18</strong>. If the time card doesn't split the hours, pay all 8 at Group 4: 8 × $106.27 = $850.16.</p>`,
  watch: `<p>Operating Engineer is an expensive craft: Group 4 costs $106.27 an hour, $29.60 more than a Landscape/Irrigation Laborer. A laborer pushing a walk-behind trencher is a different story: Laborer (Engineering Construction) lists “Trenching Machine (Hand propelled)” in Group 3. Read the list and price the right one.</p>`,
  deeper: `<ul>
<li>Determination SD-23-63-3-2026-2, issued Aug 22, 2026, expires June 30, 2027**. Predetermined increase: “Effective on July 1, 2027, there will be an increase of $4.50 to be allocated to wages and/or fringes.”</li>
<li>Footnote b: 1½× applies to the first 4 overtime hours; all other daily overtime at the Sunday rate. Footnote c: Saturday 1½× for the first 12 hours.</li>
<li>Operating Engineer holidays include the nine usual holidays plus “the first (1st) Saturday following the first (1st) Friday in the months of June and December,” all at double time.</li>
<li>Special shift and multi-shift tables are separate and pay $1.00 more basic on most groups.</li>
</ul>`,
  src: "DIR SD-23-63-3-2026-2, Operating Engineer, San Diego County, classifications pages 7–8 and footnotes; DIR SD-23-63-3 Predetermined Increase and Holiday Provisions (2026-2)."
},

{ h: "Teamsters and construction laborers",
  lead: "Truck drivers on the site and general construction laborers have their own crafts and groups. Landscape jobs use a few of each.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Craft · group · example work</th><th class="num">Basic</th><th class="num">Total</th><th class="num">1½×</th></tr></thead>
<tbody>
<tr><td>Teamster G1 · “delivery by pickup trucks,” swampers, helpers</td><td class="num">$33.12</td><td class="num">$62.69</td><td class="num">$79.25</td></tr>
<tr><td>Teamster G2 · 2-axle dump truck, 2-axle flatbed, forklift under 15,000 lbs</td><td class="num">$43.71</td><td class="num">$73.28</td><td class="num">$95.135</td></tr>
<tr><td>Teamster G3 · 2-axle water truck, 3-axle dump truck</td><td class="num">$43.91</td><td class="num">$73.48</td><td class="num">$95.435</td></tr>
<tr><td>Teamster G4 · 3-axle water truck, dumpster trucks, low-bed truck and trailer</td><td class="num">$44.11</td><td class="num">$73.68</td><td class="num">$95.735</td></tr>
<tr><td>Laborer (Eng. Constr.) G1 · flagman, traffic control, general laborer, manual post hole digger</td><td class="num">$49.20</td><td class="num">$78.65</td><td class="num">$103.25</td></tr>
<tr><td>Laborer (Eng. Constr.) G2 · tree climber, faller, chain saw operator, chipper</td><td class="num">$49.75</td><td class="num">$79.20</td><td class="num">$104.075</td></tr>
<tr><td>Laborer (Eng. Constr.) G3 · compactor (tamper, Wacker), power post hole digger, hand-propelled trencher</td><td class="num">$50.30</td><td class="num">$79.75</td><td class="num">$104.90</td></tr>
</tbody></table></div>
<p>Teamster employer payments: $12.82 + $12.75 + $3.50 + $0.00 training + $0.50 = $29.57. Laborer (Engineering Construction) employer payments: $9.85 + $12.92 + $5.20 + $0.80 + $0.68 = $29.45.</p>`,
  ex: `<p>Your crew runs a 2-axle dump truck around the site 3 hours a day hauling spoils to the stockpile: 3 × $73.28 = <strong>$219.84</strong> a day for those hours. The same worker planting the other 5 hours is paid as a Landscape/Irrigation Laborer: 5 × $76.67 = $383.35.</p>`,
  watch: `<p>Teamster increase notice for July 1, 2027: “a decrease of $4.00 from Pension and an increase of $4.00 to be allocated to wages and/or employer payments.” The total may stay the same while the wage part moves. Check the new breakdown when it's posted.</p>`,
  deeper: `<p>Teamster: SD-23-261-3-2026-1, expires June 30, 2027**, “Applies only to work on the construction site.” Laborer (Engineering Construction): interim SD-23-102-3-2026-1, for bids advertised on or after Oct 9, 2026, expires June 30, 2027**. Both have Saturday make-up footnotes: Teamster for weather, power problems, breakdowns or suspensions beyond your control; Laborer for inclement weather, first 8 hours only.</p>`,
  src: "DIR SD-23-261-3-2026-1 Teamster and its Predetermined Increase; DIR Interim Determination SD-23-102-3-2026-1, Laborer (Engineering Construction), San Diego County."
},

{ h: "Your 2026-2 San Diego rate card",
  lead: "Keep one table like this in every public bid. These are real 2026-2 numbers; pull new ones for each bid date.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Craft</th><th class="num">Total ST</th><th class="num">OT 1½×</th><th class="num">2×</th><th>Training</th><th>Next change</th></tr></thead>
<tbody>
<tr><td>Landscape/Irrigation Laborer</td><td class="num">$76.67</td><td class="num">$100.455</td><td class="num">$124.24</td><td>$0.80</td><td>+$3.65 Aug 1, 2027</td></tr>
<tr><td>Landscape/Irrigation Tender</td><td class="num">$30.19</td><td class="num">$41.175</td><td class="num">$52.16</td><td>$0.00</td><td>No increases scheduled</td></tr>
<tr><td>Landscape/Irrigation Fitter</td><td class="num">$76.40</td><td class="num">$100.32</td><td class="num">$122.75</td><td>$2.54</td><td>+$4.03 Sept 1, 2027</td></tr>
<tr><td>Landscape/Irrigation Tradesman</td><td class="num">$27.54</td><td class="num">$38.53</td><td class="num">$49.52</td><td>$0.10</td><td>+$2.07 Sept 1, 2027</td></tr>
<tr><td>Operating Engineer G3 (skid steer)</td><td class="num">$104.78</td><td class="num">$136.515</td><td class="num">$168.25</td><td>$1.10</td><td>+$4.50 July 1, 2027</td></tr>
<tr><td>Operating Engineer G4 (mini excavator)</td><td class="num">$106.27</td><td class="num">$138.75</td><td class="num">$171.23</td><td>$1.10</td><td>+$4.50 July 1, 2027</td></tr>
<tr><td>Teamster G2 (2-axle dump)</td><td class="num">$73.28</td><td class="num">$95.135</td><td class="num">$116.99</td><td>$0.00</td><td>Pension/wage shift July 1, 2027</td></tr>
<tr><td>Laborer (Eng. Constr.) G1 (flagger)</td><td class="num">$78.65</td><td class="num">$103.25</td><td class="num">$127.85</td><td>$0.80</td><td>Expires June 30, 2027**</td></tr>
</tbody></table></div>
<p>ST = straight time. OT = overtime. These are minimums. They don't include payroll taxes, workers' comp or insurance (burden).</p>`,
  watch: `<p>Never copy a rate card from an old bid. Each bid has its own advertisement date and its own increases.</p>`,
  src: "DIR 2026-2 determinations: SD-102-X-14-2026-1, SDI-2026-2 and SDI-Pre, SD-23-63-3-2026-2, SD-23-261-3-2026-1, SD-23-102-3-2026-1, and their Predetermined Increase notices."
},

{ h: "Fringe benefits (employer payments)",
  lead: "You must spend at least the full total hourly rate on each worker. The benefit part can go into real plans, or to the worker as extra wages.",
  body: `<ul>
<li><strong>Paid into plans:</strong> health insurance, pension or 401(k), vacation fund, and training contributions count as credit toward the total, if the plan is real and the payments are irrevocable.</li>
<li><strong>Not paid into a plan:</strong> pay the difference to the worker on the check as wages. Then payroll taxes apply to it, which raises your cost.</li>
<li><strong>Training</strong> is separate: it goes to an apprenticeship committee or to the California Apprenticeship Council (CAC) (apprenticeship slides).</li>
<li><strong>Union or not:</strong> you don't have to be union to bid or work public works. You do have to meet the total rate.</li>
</ul>`,
  ex: `<p>Your company pays $3.00 an hour toward health insurance for a Landscape/Irrigation Laborer and has no pension plan. The determination's employer payments add up to $29.10. After the $0.80 training payment and your $3.00 health payment, $25.30 an hour is left, and it goes on the paycheck as extra taxable wages.</p>`,
  watch: `<p>A residential company's benefits are usually spread over every hour worked all year. Labor Code §1773.1 says that when you pay more benefits per hour on public jobs than on private ones, credit is figured on an annual basis. You can't count a whole year's health premium against one month of public work. Have your payroll provider or CPA (certified public accountant) set this up before your first public job.</p>`,
  deeper: `<p>Labor Code §1773.1 lists which employer payments count (health and welfare, pension, vacation and holiday, apprenticeship training and others) and says credit can't reduce the straight-time or overtime wage below the prevailing amount, and isn't given for benefits other laws already require.</p>`,
  src: "Cal. Labor Code §1773.1; DIR SD-102-X-14-2026-1."
},

{ h: "Worked example: cash fringe and annualizing",
  lead: "Here is the math for a company that pays health insurance all year and pays the rest of the fringe as cash. Example numbers for the benefit costs.",
  body: `<p><strong>Worker:</strong> Landscape/Irrigation Laborer, 2026-2. Employer payments required: <strong>$29.10</strong> an hour.</p>
<p><strong>Company benefit (example):</strong> $650 a month health premium = $7,800 a year. The worker works 2,080 hours a year, public and private.</p>
<div class="tablewrap"><table>
<thead><tr><th>Step</th><th class="num">Math</th><th class="num">Per hour</th></tr></thead>
<tbody>
<tr><td>1 · Annualized health credit</td><td class="num">$7,800 ÷ 2,080 h</td><td class="num">$3.75</td></tr>
<tr><td>2 · Training paid to CAC (California Apprenticeship Council) or a program</td><td class="num">from the determination</td><td class="num">$0.80</td></tr>
<tr><td>3 · Fringe still owed as cash</td><td class="num">$29.10 − $3.75 − $0.80</td><td class="num">$24.55</td></tr>
<tr><td>4 · Paycheck rate, straight time</td><td class="num">$47.57 + $24.55</td><td class="num">$72.12</td></tr>
<tr><td>5 · Paycheck rate, overtime</td><td class="num">$47.57 × 1.5 + $24.55</td><td class="num">$95.905</td></tr>
<tr><td>Check: total cost per OT hour</td><td class="num">$95.905 + $3.75 + $0.80</td><td class="num">$100.455</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>The wrong way:</strong> the worker only works 400 public hours this year, so the company divides $7,800 by 400 and claims $19.50 an hour of health credit. That's not allowed when the company pays less per hour on private work. Underpaid by $19.50 − $3.75 = $15.75 an hour × 400 hours = <strong>$6,300</strong> per worker, plus penalties.</p>`,
  watch: `<p>Cash fringe is taxable wages. If payroll taxes run 10% (example), $24.55 of cash fringe adds about $2.46 an hour to your cost. Put that in your burden.</p>`,
  deeper: `<ul>
<li>Labor Code §1773.1(e) and (f): annualization applies to payments not made directly to the worker. A defined contribution pension plan with immediate participation and vesting within the first 500 hours worked can get full credit on public hours without annualizing.</li>
<li>Credit may be taken even if the payment isn't made in the same pay period, if the employer pays the plan regularly, at least quarterly.</li>
<li>Exemptions to annualization issued by DIR (Department of Industrial Relations) before January 1, 2026 have been revoked.</li>
</ul>`,
  src: "Cal. Labor Code §1773.1 (as of Jan. 1, 2026); DIR SD-102-X-14-2026-1."
},

{ h: "Overtime, holidays, travel and shifts",
  lead: "Public works has its own overtime rule, and each craft adds its own holiday, travel and shift rules on top.",
  body: `<ul>
<li><strong>Overtime:</strong> hours over 8 in a day or 40 in a week must be paid at least 1½ times the basic rate. Check each craft's footnotes for double time.</li>
<li><strong>Holidays:</strong> the craft's holidays come from its union agreement on file with DIR (Department of Industrial Relations), or Government Code §6700 if it isn't union-based. Download the “Holidays” PDF (portable document file) for each craft.</li>
<li><strong>Travel and subsistence:</strong> some crafts require travel pay or per-diem depending on distance. Download the “Travel” PDF.</li>
<li><strong>Shift work:</strong> night work for crafts marked “+” (like Operating Engineer) has its own shift rates. Night freeway closures (Module 15) trigger them.</li>
<li><strong>Agency work hours:</strong> the City of San Diego's normal working hours are 7:00 AM to 5:00 PM, Monday through Friday, unless the permit says otherwise.</li>
</ul>`,
  watch: `<p>Each worker who works over 8 hours a day and 40 a week without overtime pay costs a $25 penalty per worker per day under Labor Code §1813, on top of the back pay.</p>`,
  ex: `<p>A crew works a 10-hour Monday to finish a valve manifold. For each Landscape/Irrigation Laborer, the 2 extra hours cost 2 × $100.455 = $200.91, not 2 × $76.67 = $153.34.</p>`,
  src: "Cal. Labor Code §§1810–1815; DIR Prevailing Wage FAQ Q14; City of San Diego K-24-1952 Supplementary Special Provisions 1-2."
},

{ h: "Worked examples: overtime, Saturday and holidays",
  lead: "Same Landscape/Irrigation Laborer, 2026-2 rates, five different days. Watch how fast the cost climbs.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Day</th><th>Math</th><th class="num">Cost per worker</th></tr></thead>
<tbody>
<tr><td>Normal 8-hour weekday</td><td>8 × $76.67</td><td class="num">$613.36</td></tr>
<tr><td>10-hour weekday</td><td>8 × $76.67 + 2 × $100.455</td><td class="num">$814.27</td></tr>
<tr><td>13-hour weekday (footnote b: only 4 OT hours at 1½×)</td><td>8 × $76.67 + 4 × $100.455 + 1 × $124.24</td><td class="num">$1,139.42</td></tr>
<tr><td>Saturday, 8 hours, regular</td><td>8 × $100.455</td><td class="num">$803.64</td></tr>
<tr><td>Saturday, 8 hours, weather make-up (footnote c)</td><td>8 × $76.67</td><td class="num">$613.36</td></tr>
<tr><td>Day after Thanksgiving (Fri Nov 27, 2026), 8 hours</td><td>8 × $124.24</td><td class="num">$993.92</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Four 10s:</strong> a crew of 4 laborers works Monday to Thursday, 10 hours a day. That's only 40 hours a week, but public works overtime counts hours over 8 in a day. Each worker has 2 overtime hours a day × 4 days = 8 overtime hours a week. Extra cost: 8 × ($100.455 − $76.67) = 8 × $23.785 = $190.28 per worker, × 4 workers = <strong>$761.12 a week</strong>.</p>`,
  watch: `<p>Recognized holidays for the landscape craft: New Year's Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Veterans Day, Thanksgiving, the day after Thanksgiving, and Christmas. “No work shall be required on Labor Day except in cases of extreme urgency.” Look at your schedule for these days before you promise a finish date.</p>`,
  deeper: `<p>A Sunday holiday moves to Monday. Christmas or New Year's Day on a Saturday moves to the Friday before. Operating Engineer holidays add the first Saturday after the first Friday in June and in December (for 2026, Saturday Dec 5). An operator in Group 3 working that day costs 8 × $168.25 = $1,346.00.</p>`,
  src: "DIR SD-102-X-14-2026-1 footnotes b and c; DIR Holiday Provisions ID 102-X-14 and ID 23-63-3; Cal. Labor Code §1815."
},

{ h: "Predetermined increases: pricing work after the raise",
  lead: "If your work runs past a ** date, split the hours before and after the raise and price each part at its own rate.",
  body: `<p><strong>Example job (hours are example numbers):</strong> bid advertised Sept 15, 2026. Planting and irrigation start March 2027 and run to October 2027. You estimate 1,200 Landscape/Irrigation Laborer hours: 700 before Aug 1, 2027 and 500 after.</p>
<div class="tablewrap"><table>
<thead><tr><th>Period</th><th class="num">Hours</th><th class="num">Rate</th><th class="num">Cost</th></tr></thead>
<tbody>
<tr><td>Before Aug 1, 2027</td><td class="num">700</td><td class="num">$76.67</td><td class="num">$53,669.00</td></tr>
<tr><td>On or after Aug 1, 2027 (+$3.65)</td><td class="num">500</td><td class="num">$80.32</td><td class="num">$40,160.00</td></tr>
<tr><td><strong>Total</strong></td><td class="num">1,200</td><td class="num">avg $78.19</td><td class="num"><strong>$93,829.00</strong></td></tr>
</tbody></table></div>
<p>Using $76.67 for all 1,200 hours would be $92,004.00, which is $1,825.00 short.</p>`,
  ex: `<p><strong>Other 2026-2 increases to plan for:</strong> Operating Engineer +$4.50 on July 1, 2027 (Group 4 goes from $106.27 to at least $110.77). Landscape/Irrigation Fitter +$4.03 on Sept 1, 2027 ($76.40 to at least $80.43). Laborer increases continue Aug 1, 2028 (+$3.75) and Aug 1, 2029 (+$4.03) for multi-year jobs like long plant establishment.</p>`,
  watch: `<p>The 2026-2 landscape notice says the raise is “allocated to wages and/or fringes” without saying how. Overtime multiplies only the wage part, so you don't know the new overtime rate yet. To be safe, price overtime as if the whole raise goes to the basic rate: $3.65 × 1.5 = $5.475 more per overtime hour. Call DIR (Department of Industrial Relations) at (415) 703-4774 when the raise takes effect to confirm the split.</p>`,
  src: "DIR Predetermined Increase notices for SD-102-X-14-2026-1, SD-23-63-3-2026-2 and SDI-2026-2 (footnote B: “Please contact the Office of the Director – Research Unit… when the predetermined increase becomes due to confirm the distribution”)."
},

{ h: "Apprenticeship rules",
  lead: "On public works contracts of $30,000 or more, every contractor in an apprenticeable craft must notify, request and use apprentices, and pay training funds.",
  body: `<ol class="steps">
<li><div><b>DAS 140 · Notice of contract award</b>DAS is the Division of Apprenticeship Standards. Send this form within 10 days of signing your contract or subcontract, and no later than the first day you have workers on the job. Send it to your own apprenticeship committee if you're approved to train, or to every committee that can supply apprentices to the site.</div></li>
<li><div><b>DAS 142 · Request for dispatch</b>If you don't already have enough apprentices, request them in writing at least 3 business days before you need them.</div></li>
<li class="hl"><div><b>Ratio</b>At least 1 hour of apprentice work for every 5 hours of journeyman work, per craft.</div></li>
<li><div><b>Training fund</b>Pay the training amount from the determination for every hour, overtime included, of every journeyman and apprentice. Pay it to your apprenticeship program, or to the California Apprenticeship Council (CAC) with an online CAC-2 form, by the 15th of the following month.</div></li>
</ol>
<p>Crafts marked “#” on DIR's (Department of Industrial Relations) determinations are apprenticeable. Landscape/Irrigation Laborer, Landscape/Irrigation Fitter and Operating Engineer are all marked #.</p>`,
  ex: `<p><strong>Ratio math:</strong> your two Landscape/Irrigation Laborers will work 8 hours a day for 40 days: 2 × 8 × 40 = 640 journeyman hours. Minimum apprentice hours: 640 ÷ 5 = <strong>128</strong>. Training fund on the journeyman hours at the 2026-2 rate: 640 × $0.80 = <strong>$512</strong>, plus the apprentice training amount on the apprentices' hours.</p>`,
  watch: `<p>The duty applies to subs too, even if your subcontract is under $30,000, when the prime contract is $30,000 or more. Send the DAS 140 even on a short job.</p>`,
  deeper: `<p>Labor Code §1777.5 sets the 1:5 ratio and the $30,000 threshold. Knowing violations cost up to $100 per day of noncompliance, and up to $300 per day for a repeat within 3 years (§1777.7). If a committee won't dispatch apprentices after you asked all programs in the area, you have met the duty. Keep copies of every DAS 140, DAS 142 and CAC-2 receipt.</p>`,
  src: "DIR Division of Apprenticeship Standards, Public Works requirements and “More Information” page (dir.ca.gov/das/publicworks.html); Cal. Labor Code §§1777.5, 1777.7."
},

{ h: "Apprenticeship step by step, with real dates",
  lead: "Here is the calendar for a made-up landscape subcontract on a City park job. Put every date in your calendar the day you sign.",
  body: `<ol class="steps">
<li><div><b>Tue Mar 2, 2027 · Subcontract signed</b>Start the clock: the DAS (Division of Apprenticeship Standards) 140 is due within 10 days (by Fri Mar 12), but no later than the first day of work.</div></li>
<li><div><b>Same day · Find the committees</b>Use DAS's <a href="http://www.dir.ca.gov/databases/das/pwaddrstart.asp" target="_blank" rel="noopener">public works apprenticeship committee search</a> for San Diego County and each craft you'll use (Landscape/Irrigation Laborer, Operating Engineer, Fitter).</div></li>
<li class="hl"><div><b>By Mon Mar 8 · DAS 140 sent</b>Work starts Mar 8, so that's the real deadline. Include your estimate of journeyman hours, how many apprentices you plan to use, and when. Email, fax or mail, and keep proof.</div></li>
<li class="hl"><div><b>By Wed Mar 10 · DAS 142 sent</b>You need an apprentice on Mon Mar 15. Three business days before is Wed Mar 10 (Wed, Thu, Fri).</div></li>
<li><div><b>No apprentice sent?</b>Request from all other committees in the area once. If none will dispatch, you have met the duty. Keep the emails.</div></li>
<li><div><b>Every week · Track the ratio</b>Journeyman straight-time hours ÷ 5 = apprentice hours needed by the end of your subcontract.</div></li>
<li><div><b>By Thu Apr 15, 2027 · Training funds for March</b>Pay your program, or pay CAC (California Apprenticeship Council) with the online CAC-2 form (it gives a Transaction ID; save it).</div></li>
</ol>`,
  watch: `<p>“Even if a job will take less than 40 hours, the contractor must submit a DAS 140 and DAS 142,” says DAS. A two-week irrigation repair still needs the forms.</p>`,
  deeper: `<p>You don't have to sign a DAS 7 or agree to other conditions a program asks for. Apprenticeship requirements are the contractor's responsibility even if you use a temp agency. Training funds can only be paid directly to workers in a non-apprenticeable craft.</p>`,
  src: "DIR DAS “More Information on Public Works Apprenticeship Requirements” (DAS 140, DAS 142, training funds, CAC-2); 8 CCR §230.1; Cal. Labor Code §1777.5."
},

{ h: "Worked example: apprentice hours and cost",
  lead: "Apprentices are paid less than journeymen, so meeting the ratio often lowers labor cost. Here's the math.",
  body: `<p><strong>2026-2 Landscape/Irrigation Laborer apprentice rates (San Diego is on this sheet):</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>Period</th><th class="num">Basic</th><th class="num">Training</th><th class="num">Total hourly</th></tr></thead>
<tbody>
<tr><td>1 (first 12 months)</td><td class="num">$22.64</td><td class="num">$2.19</td><td class="num">$36.57</td></tr>
<tr><td>2</td><td class="num">$27.05</td><td class="num">$2.26</td><td class="num">$41.05</td></tr>
<tr><td>3</td><td class="num">$31.47</td><td class="num">$2.27</td><td class="num">$54.62</td></tr>
<tr><td>4</td><td class="num">$35.89</td><td class="num">$2.32</td><td class="num">$59.09</td></tr>
<tr><td>5</td><td class="num">$40.32</td><td class="num">$2.35</td><td class="num">$64.37</td></tr>
</tbody></table></div>
<p><strong>Job (example):</strong> 768 straight-time laborer hours needed. Meet the 1:5 ratio: 640 journeyman + 128 apprentice (period 1).</p>
<ul>
<li>Journeymen: 640 × $76.67 = $49,068.80</li>
<li>Apprentice: 128 × $36.57 = $4,680.96</li>
<li>Total: <strong>$53,749.76</strong>, compared with 768 × $76.67 = $58,882.56 all journeymen. Difference: $5,132.80.</li>
<li>Training funds inside those totals: 640 × $0.80 + 128 × $2.19 = $512.00 + $280.32 = $792.32 (sent to CAC (California Apprenticeship Council) or your program, not the worker).</li>
</ul>`,
  watch: `<p>A first-year apprentice may be slower. If you price the apprentice hours at lower production, use your own numbers. And only registered apprentices may be paid apprentice rates; a new hire you call an apprentice is a journeyman for pay.</p>`,
  deeper: `<p>Overtime doesn't count toward the ratio. Labor Code §1777.5: “Any work performed by a journeyman in excess of eight hours per day or 40 hours per week shall not be used to calculate the ratio.” If the journeymen above worked 680 hours, 40 of them overtime, you still need 640 ÷ 5 = 128 apprentice hours.</p>`,
  src: "DIR General Prevailing Wage Apprentice Rates, Landscape/Irrigation Laborer, 2026-2 (issued 08-22-2026, expires 07-31-2027**); Cal. Labor Code §1777.5."
},

{ h: "Certified payroll",
  lead: "Every week you pay workers on a public job, you produce a certified payroll record (CPR): who worked, which craft, how many hours, what you paid, signed under penalty of perjury.",
  body: `<ul>
<li><strong>What it shows:</strong> each worker's name, address, last 4 of the social security number, craft, hours each day, rate paid, gross pay, deductions and benefits paid.</li>
<li><strong>Most jobs: eCPR to DIR (Department of Industrial Relations).</strong> eCPR means electronic certified payroll. Each contractor and sub uploads its own certified payroll to DIR's online system, at least monthly while working (within a month after the end of the payroll period). Weekly is best practice.</li>
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

{ h: "One worker's week on a certified payroll",
  lead: "This is what one line of a CPR (certified payroll record) looks like, filled in. The numbers must tie back to the determination to the cent.",
  body: `<p><strong>Header (top of the form):</strong> contractor name, contractor license number, workers' comp policy number, project name and DIR (Department of Industrial Relations) Project ID, payroll number (1, 2, 3…), week ending date.</p>
<p><strong>Worker line (example worker, 2026-2 rates, all fringe paid into plans):</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>Field</th><th>Entry</th></tr></thead>
<tbody>
<tr><td>Name, address, last 4 of SSN (social security number)</td><td>Worker A, [address], xxx-xx-1234</td></tr>
<tr><td>Craft / classification</td><td>Landscape/Irrigation Laborer, journeyman</td></tr>
<tr><td>Hours Mon–Fri</td><td>8 · 8 · 10 · 8 · 6 = 40 (38 straight time, 2 overtime)</td></tr>
<tr><td>Rates paid</td><td>ST $47.57 · OT $71.355</td></tr>
<tr><td>Gross wages</td><td>38 × $47.57 + 2 × $71.355 = $1,807.66 + $142.71 = <strong>$1,950.37</strong></td></tr>
<tr><td>Fringe paid to plans</td><td>40 h × $29.10 = <strong>$1,164.00</strong> (health and welfare $9.85, pension $12.92, vacation $5.02, training $0.80, other $0.51)</td></tr>
<tr><td>Deductions</td><td>Taxes, any union dues, garnishments</td></tr>
<tr><td>Net pay and check number</td><td>From your payroll system</td></tr>
</tbody></table></div>
<p><strong>Check it:</strong> 38 × $76.67 + 2 × $100.455 = $2,913.46 + $200.91 = $3,114.37. Wages + fringe = $1,950.37 + $1,164.00 = $3,114.37. They match.</p>`,
  watch: `<p>Wednesday has 10 hours, so 2 are overtime even though the week totals 40. A CPR that shows 40 straight-time hours is underpaying.</p>`,
  deeper: `<p>Labor Code §1776(a) requires “the name, address, social security number, work classification, straight time and overtime hours worked each day and week, and the actual per diem wages paid.” Public copies are redacted: name, address and social security number are removed. DIR's paper form is A-1-131; the eCPR (electronic certified payroll) system asks for the same information.</p>`,
  src: "Cal. Labor Code §1776; DIR SD-102-X-14-2026-1; DIR certified payroll form A-1-131."
},

{ h: "Submitting payroll: DIR, LCPtracker and the City",
  lead: "Each system has a setup step you must finish before your first payroll is due. Do it the week you sign the subcontract.",
  body: `<ol class="steps">
<li><div><b>Get the DIR (Department of Industrial Relations) Project ID</b>The awarding body registers the project with DIR and gets an ID. Ask the GC (general contractor) for it. If the project isn't registered, ask the agency to do it; DIR can help at publicworks@dir.ca.gov.</div></li>
<li><div><b>DIR Public Works website services</b>Create a user account, link it to your company's account, then request to join the project. Older logins from the old PWCR (contractor registration) and eCPR (electronic certified payroll) systems no longer work in the modernized system.</div></li>
<li class="hl"><div><b>Enter or upload</b>Type the payroll into the online form, or upload an XML (extensible markup language) file from your payroll software. Review it, then sign. After you sign you can't change it.</div></li>
<li><div><b>Fix mistakes with an amended record</b>Submit a new record for the same pay period. The amendment takes precedence; the original stays on file.</div></li>
<li><div><b>Caltrans jobs</b>Use LCPtracker as the special provisions say. The resident engineer's office sets up access.</div></li>
<li><div><b>City of San Diego jobs</b>Weekly through the City's web-based Labor Compliance Program, plus DIR. City Prevailing Wage Unit: 858-627-3200.</div></li>
<li><div><b>Send a copy to the GC</b>Most subcontracts require it weekly. GCs must review subs' payroll to protect themselves.</div></li>
</ol>`,
  ex: `<p><strong>Owner-operator?</strong> DIR says even if you're paid by draw, you report your name, address and SSN (social security number), or FEIN (federal employer identification number) if you have no SSN, your classification, the hourly rate for it, the hours you worked, and an estimate of what you were paid for your labor. That labor pay must be at least the prevailing rate.</p>`,
  watch: `<p>Sending payroll to the GC, a union or the City does not replace sending it to DIR. Each one is a separate duty.</p>`,
  src: "DIR Public Works FAQ (Electronic Certified Payroll Reporting, owner/operator, amended records); City of San Diego K-24-1952 Attachment D §§1.3, 1.8; Caltrans 11-428704 Special Provisions 7-1.02K(3)."
},

{ h: "DIR registration, job site posting and records",
  lead: "You must be registered before you bid. Once you're working, the wage rates and DIR's (Department of Industrial Relations) notice go up on site, and your records must be ready to show.",
  body: `<div class="twocol">
<div><h3>Registration (recap)</h3><ul>
<li>Every contractor and sub on a public works job must be DIR-registered to bid, be listed or work. See <a href="#m2-23">Module 2</a>.</li>
<li>$400 per fiscal year (July 1 to June 30). Late registration: $2,000 penalty, once in 12 months.</li>
<li>The agency registers the project with DIR and gets a DIR project ID. You use it on eCPR (electronic certified payroll).</li>
<li>Unregistered contractors on a job can be removed by a stop order.</li>
</ul></div>
<div><h3>On site and in the office</h3><ul>
<li>Post the wage determinations at each job site.</li>
<li>Post DIR's job site notice telling workers how to report wage problems.</li>
<li>Keep time cards by craft, payroll, benefit payment proof, DAS (Division of Apprenticeship Standards) 140/142, CAC-2 (California Apprenticeship Council training fund form) receipts and the determinations you used.</li>
<li>Keep records at least 3 years after the work.</li>
</ul></div>
</div>`,
  ex: `<p>The City of San Diego's EMTS Boat Dock Esplanade contract (K-24-1952) required the contractor and subs to “post a copy of the prevailing rate of per diem wages determination at each job site,” and to give the City a list of all subcontractors, at any tier, with DIR numbers, before work starts and with every invoice.</p>`,
  deeper: `<p>Labor Code §1773.2 has the agency post the determination at each job site; most contracts pass that duty to the contractor. Labor Code §1771.4(a)(2) has the agency post, or require the prime to post, DIR's job site notice. Labor Code §1725.5 sets registration; §1771.1 bars unregistered contractors from bidding or working. Registered contractors who miss the June 30 renewal get a 90-day grace period to renew by paying a $400 penalty plus the fee.</p>`,
  src: "DIR Public Works FAQ; Cal. Labor Code §§1725.5, 1771.1, 1771.4, 1773.2; City of San Diego K-24-1952 Attachment D, §§1.1.1, 1.11."
},

{ h: "Records checklist: what to keep and for how long",
  lead: "If the Labor Commissioner audits a job two years from now, these files are your defense. Keep one compliance folder per job.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Record</th><th>Why</th><th>Keep at least</th></tr></thead>
<tbody>
<tr><td>Wage determinations, Increase, Holiday, Scope and Travel PDFs, with download date</td><td>Proves which rates applied</td><td>Life of job + retention period</td></tr>
<tr><td>Daily time cards signed by the worker, hours split by craft and group</td><td>Proves which rate each hour earned</td><td>3 years after completion (5 on City jobs, see below)</td></tr>
<tr><td>Certified payroll, eCPR (electronic certified payroll) or LCPtracker receipts, Statements of Non-Performance</td><td>Shows you filed on time</td><td>Same</td></tr>
<tr><td>Proof of fringe payments: plan invoices, remittance reports, annualization worksheet</td><td>Proves benefit credit</td><td>Same</td></tr>
<tr><td>DAS (Division of Apprenticeship Standards) 140, DAS 142 with proof of sending; apprentice agreements; CAC-2 (California Apprenticeship Council training fund form) Transaction IDs</td><td>Proves the apprenticeship duty</td><td>Same</td></tr>
<tr><td>Job site posting photo (determinations and DIR (Department of Industrial Relations) notice on the board, date-stamped)</td><td>Proves posting</td><td>Same</td></tr>
<tr><td>Subs' DIR registration printouts, their CPRs and final affidavits</td><td>Protects you as the upper tier</td><td>Same</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Real retention rules:</strong> on City of San Diego job K-24-1952, the contractor had to “retain all records, books, papers, and documents pertinent to the Contract for a period of not less than 5 years after Notice of Completion.” On small projects under the exemption, the same contract says certified payroll must be kept “for at least three years following the completion of the Contract.”</p>`,
  watch: `<p>The Labor Commissioner can serve an assessment up to 18 months after the notice of completion or acceptance (next slide). If you toss the time cards at the end of the job, you can't defend yourself.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Equal Opportunity Contracting records requirements and Attachment D §1.12.2; Cal. Labor Code §§1741, 1776."
},

{ h: "What an audit or investigation looks like",
  lead: "Most problems start with a worker complaint, a missing payroll or a GC's (general contractor's) review. Here is the path, step by step.",
  body: `<ol class="steps">
<li><div><b>A trigger</b>A worker calls the Labor Commissioner, a union compares payroll, the awarding body's labor compliance staff spot a gap, or eCPR (electronic certified payroll) uploads stop.</div></li>
<li><div><b>A written request for records</b>The agency or the Labor Commissioner's Office (DLSE, Division of Labor Standards Enforcement) asks for certified payroll. You have <strong>10 days</strong> (§1776).</div></li>
<li><div><b>The audit</b>An investigator compares your payroll to the determinations: craft, group, hours, overtime, fringe, apprentice hours, training funds. They may interview workers.</div></li>
<li class="hl"><div><b>Assessment or withholding</b>DLSE issues a Civil Wage and Penalty Assessment (CWPA) within 18 months after the notice of completion or acceptance, whichever is later. An agency with a labor compliance program can issue a Notice of Withholding and hold your payments.</div></li>
<li><div><b>Your options</b>Ask for a settlement meeting within 30 days. Request formal review within 60 days. Or pay. Deposit the full amount with DIR (Department of Industrial Relations) within 60 days to avoid liquidated damages while you contest it.</div></li>
<li><div><b>After 60 days</b>Wages still unpaid bring liquidated damages equal to those unpaid wages (§1742.1), plus interest.</div></li>
<li><div><b>Worst cases</b>Willful violators go on a public list. Debarment (banned from public work) for 1 to 3 years for intent to defraud or repeated willful violations.</div></li>
</ol>`,
  watch: `<p>The bonding company that wrote your bonds gets a copy of the assessment. A wage case can hurt your bonding capacity, which limits the jobs you can bid.</p>`,
  deeper: `<p>Labor Code §1741 (assessment, 18 months, public list for 3 years); §1742.1 (liquidated damages, settlement meeting, escrow deposit); §1771.6 (notice of withholding by the awarding body); §1777.1 (debarment: 1 to 3 years for intent to defraud; up to 3 years for two or more willful violations in 3 years; also possible for failing to produce payroll within 30 days of notice).</p>`,
  src: "Cal. Labor Code §§1741, 1742.1, 1771.6, 1776, 1777.1."
},

{ h: "Penalties: what mistakes cost",
  lead: "Underpaying is never cheaper. You owe the back wages to the worker plus a penalty for every worker, every day.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Violation</th><th>Penalty</th><th>Law</th></tr></thead>
<tbody>
<tr><td>Paying less than prevailing wage</td><td>Back wages, plus up to $200 per worker per day. Minimum $40 (unless a good faith mistake promptly fixed), $80 with a prior violation in 3 years, $120 if willful.</td><td>LC §1775</td></tr>
<tr><td>No overtime on public works</td><td>$25 per worker per day</td><td>LC §1813</td></tr>
<tr><td>Payroll records not given within 10 days of a written request</td><td>$100 per worker per day</td><td>LC §1776</td></tr>
<tr><td>eCPR (electronic certified payroll) not uploaded to DIR (Department of Industrial Relations)</td><td>$100 per day, up to $5,000 per project</td><td>LC §1771.4</td></tr>
<tr><td>Knowing apprenticeship violation</td><td>Up to $100 per day; $300 per day for a repeat</td><td>LC §1777.7</td></tr>
<tr><td>Working without DIR registration</td><td>Removal by stop order; $2,000 to register late</td><td>LC §§1725.5, 1771.1</td></tr>
</tbody></table></div>
<p>LC = California Labor Code.</p>`,
  ex: `<p><strong>Worked example:</strong> three Tenders were paid as Tenders on a federal-aid job where the federal laborer rate was required, for 15 days. Penalty alone: 3 workers × 15 days × $40 = $1,800 at the minimum, up to 3 × 15 × $200 = $9,000. Back wages are on top, and the agency withholds the money from your progress payments.</p>`,
  watch: `<p>The prime is also on the hook for a sub's underpayment if it didn't flow down the Labor Code sections in the subcontract, review the sub's certified payroll, act when it found a problem, and get a signed affidavit before final payment. Expect GCs to check your payroll closely.</p>`,
  src: "Cal. Labor Code §§1775, 1776, 1771.4, 1777.7, 1813; DIR Public Works FAQ (registration penalties)."
},

{ h: "Penalty math: three worked examples",
  lead: "Real rates, made-up mistakes. Work each one so you feel what a shortcut costs.",
  body: `<p><strong>1 · Tenders with no Laborer.</strong> Two workers, both paid as Tenders, install irrigation for 20 days with no Laborer on site. Footnote d says the 1st worker must be a Laborer and the 2nd a Laborer or Apprentice, and this isn't plant establishment, so both are owed the Laborer rate. Back wages: ($76.67 − $30.19) × 8 h × 20 days × 2 workers = $46.48 × 320 = <strong>$14,873.60</strong>.</p>
<ul>
<li>§1775 penalty: 2 × 20 × $40 = $1,600 minimum, up to 2 × 20 × $200 = $8,000</li>
<li>Not paid within 60 days of the assessment: liquidated damages equal to the unpaid wages, another $14,873.60</li>
<li>Worst case: $14,873.60 + $8,000 + $14,873.60 = <strong>$37,747.20</strong></li>
</ul>
<p><strong>2 · Four 10s with no overtime.</strong> Three laborers work 10-hour days for 6 weeks (24 days) at straight time. Owed: 2 h × $23.785 × 24 days × 3 workers = <strong>$3,425.04</strong>. §1813 penalty: $25 × 3 × 24 = $1,800. Total <strong>$5,225.04</strong>, and §1775 penalties may be added too.</p>
<p><strong>3 · Slow on a records request.</strong> The City asks in writing for payroll on a 5-worker crew. You send it 16 days after the 10-day deadline: 5 × 16 × $100 = <strong>$8,000</strong>.</p>`,
  watch: `<p>The labor you “saved” in example 1 was $14,873.60. The risk was more than twice that. There's no shortcut that pays.</p>`,
  src: "Cal. Labor Code §§1742.1, 1775, 1776, 1813; DIR SD-102-X-14-2026-1 footnote d."
},

{ h: "Federal jobs: Davis-Bacon and “pay the higher”",
  lead: "When federal money is in the job, a federal wage decision applies too. On a state or local agency job with federal money, you pay whichever rate is higher for each classification.",
  body: `<ul>
<li><strong>Davis-Bacon</strong> is the federal prevailing wage law for federal construction contracts over $2,000. Its wage decisions are on SAM.gov (System for Award Management) and are bound into the bid documents.</li>
<li><strong>Federal-aid jobs run by California agencies</strong> (most Caltrans highway work, some City jobs) must follow <strong>both</strong> state and federal rules, including DIR (Department of Industrial Relations) registration.</li>
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
<li><div><b>Add the compliance cost</b>Office time for certified payroll every week, LCPtracker or eCPR (electronic certified payroll) setup, DAS (Division of Apprenticeship Standards) forms, training fund remittances.</div></li>
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
  watch: `<p>The private wages and the 20% burden are example numbers for practice. Use your own payroll costs and your insurance agent's rates. The public rates are real 2026-2 DIR (Department of Industrial Relations) rates; pull current ones for every bid.</p>`,
  src: "DIR SD-102-X-14-2026-1."
},

{ h: "Worked example: a mainline crew day, 2026",
  lead: "An irrigation mainline crew mixes three crafts. Price each person at the craft and group of the work they do.",
  body: `<p><strong>Crew:</strong> 1 operator on a mini excavator under 21,000 lbs (Operating Engineer Group 4), 2 Landscape/Irrigation Laborers laying pipe and backfilling, and a 2-axle dump truck driver on site 4 hours (Teamster Group 2). 2026-2 rates.</p>
<div class="tablewrap"><table>
<thead><tr><th>Worker</th><th class="num">Total rate × hours</th><th class="num">Wages + benefits</th><th class="num">Check wages (basic × hours)</th></tr></thead>
<tbody>
<tr><td>Operator, Group 4</td><td class="num">$106.27 × 8</td><td class="num">$850.16</td><td class="num">$64.96 × 8 = $519.68</td></tr>
<tr><td>2 Laborers</td><td class="num">$76.67 × 16</td><td class="num">$1,226.72</td><td class="num">$47.57 × 16 = $761.12</td></tr>
<tr><td>Teamster, Group 2</td><td class="num">$73.28 × 4</td><td class="num">$293.12</td><td class="num">$43.71 × 4 = $174.84</td></tr>
<tr><td><strong>Subtotal</strong></td><td></td><td class="num"><strong>$2,370.00</strong></td><td class="num">$1,455.64</td></tr>
<tr><td>Burden at 20% of check wages (example)</td><td></td><td class="num">$291.13</td><td></td></tr>
<tr><td><strong>Crew day, labor only</strong></td><td></td><td class="num"><strong>$2,661.13</strong></td><td></td></tr>
</tbody></table></div>
<p>If the crew lays 400 LF (linear feet) of 4" mainline a day (example production rate), labor is $2,661.13 ÷ 400 = <strong>$6.65 per LF</strong>, before the excavator and truck rental, pipe, fittings and markup.</p>`,
  watch: `<p>Most of the cost increase on this crew is the operator. If a laborer can do the trenching with a walk-behind trencher, check the scope: the Landscape/Irrigation Laborer scope includes “trench for irrigation manual or power.” Pick the craft from the scope, not from the price.</p>`,
  src: "DIR SD-23-63-3-2026-2 (Group 4); SD-102-X-14-2026-1; SD-23-261-3-2026-1 (Group 2); DIR Scope of Work Provisions ID 102-X-14."
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

{ h: "Worked example: a year of plant establishment",
  lead: "Plant establishment is where tenders save the most money, on jobs that allow them.",
  body: `<p><strong>Job (example):</strong> City park, 52 weeks of establishment after planting. Two Landscape/Irrigation Tenders visit one 8-hour day a week. 2026-2 rates. Tenders have no predetermined increases on this determination.</p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">2 Tenders</th><th class="num">2 Laborers</th></tr></thead>
<tbody>
<tr><td>Hours: 2 × 8 × 52</td><td class="num">832</td><td class="num">832</td></tr>
<tr><td>Wages + benefits</td><td class="num">832 × $30.19 = $25,118.08</td><td class="num">832 × $76.67 = $63,789.44</td></tr>
<tr><td>Check wages</td><td class="num">832 × $21.97 = $18,279.04</td><td class="num">832 × $47.57 = $39,578.24</td></tr>
<tr><td>Burden 20% of check wages (example)</td><td class="num">$3,655.81</td><td class="num">$7,915.65</td></tr>
<tr><td><strong>Labor for the year</strong></td><td class="num"><strong>$28,773.89</strong></td><td class="num"><strong>$71,705.09</strong></td></tr>
</tbody></table></div>
<p>Difference: <strong>$42,931.20</strong>. On an establishment-heavy bid, the contractor who knows footnote d wins.</p>`,
  watch: `<p>Laborers on the same job get raises on Aug 1 each year (2027, 2028, 2029). If a laborer does establishment work after Aug 1, 2027, price $80.32 or more. And on federal-aid Caltrans jobs, tenders weren't accepted unless the federal decision listed them.</p>`,
  deeper: `<p>Caltrans 11-428704 had 250 working days of plant establishment; Caltrans 11-431064 (SR-905) had 750 working days. Long establishment periods cross several predetermined increase dates. Spread the hours across each period.</p>`,
  src: "DIR SD-102-X-14-2026-1 footnote d and Predetermined Increase notice; Caltrans 11-428704 and 11-431064 Notices to Bidders."
},

{ h: "Mixing private and public work in one week",
  lead: "Your crews will move between a City job and a private job in the same week. The time card has to show exactly which hours were where.",
  body: `<ol class="steps">
<li><div><b>One time card line per job, per craft</b>Date, job name, start and stop times, craft and group. “Mon: City park, 7:00–3:30, Landscape/Irrigation Laborer; Tue: HOA job, 7:00–3:30, private.”</div></li>
<li><div><b>Public hours at public rates</b>Every hour on the public job gets at least the prevailing rate for that craft. Private hours get your normal pay.</div></li>
<li class="hl"><div><b>Don't split a worker's day if you can help it</b>A day with 6 public hours and 4 private hours goes over 8. Overtime gets complicated, because both public works law and regular California wage law apply. If it can't be avoided, have your payroll provider set the rule and confirm it with the Labor Commissioner's Office.</div></li>
<li><div><b>Benefits must be annualized</b>Higher fringe credit on public hours than private hours is figured on all hours worked in the year (fringe slides).</div></li>
<li><div><b>Certified payroll shows only the public job</b>But keep the private time cards. An auditor may ask for them to check annualization and the week's total hours.</div></li>
</ol>`,
  ex: `<p><strong>Scenario:</strong> Maria works Monday to Wednesday on a City park (24 hours as a Landscape/Irrigation Laborer) and Thursday to Friday on a private retail job (16 hours at $25 an hour, example). Her week: 24 × $76.67 = $1,840.08 of prevailing wage cost (wages plus benefits), plus 16 × $25.00 = $400.00 private. No day over 8 hours, no week over 40, so no overtime. The CPR (certified payroll record) for the park shows Monday to Wednesday only.</p>`,
  watch: `<p>Don't move a worker's hours from a public day to a private day on paper. Time cards, GPS (global positioning system) logs from trucks and phone photos tell the real story in an audit.</p>`,
  src: "Cal. Labor Code §§1773.1, 1774, 1776, 1815; DIR Public Works FAQ."
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

{ h: "Flow-down: what you pass to your subs",
  lead: "When you hire a sub or trucker on a public job, you take on part of their risk. Protect yourself with five steps.",
  body: `<ol class="steps">
<li><div><b>Check DIR (Department of Industrial Relations) registration before you list or hire</b>Look up the sub's registration on DIR's Public Works site and print it to the bid folder. An unregistered sub can stop work under a stop order.</div></li>
<li><div><b>Put the Labor Code sections in the subcontract</b>Attach copies, not just numbers. On City job K-24-1952 the list was §§1771, 1771.1, 1775, 1776, 1777.5, 1810, 1813, 1815, 1860 and 1861.</div></li>
<li class="hl"><div><b>Collect their certified payroll every week</b>Review it against the rate card: craft, group, rates, overtime, apprentices.</div></li>
<li><div><b>Act on problems right away</b>If a sub underpays, hold enough of their payment to cover it and tell them in writing.</div></li>
<li><div><b>Get a signed affidavit before final payment</b>The sub swears it paid its workers prevailing wages and employer payments.</div></li>
</ol>`,
  ex: `<p><strong>When you're the sub:</strong> expect the GC (general contractor) to ask for your DIR registration number with your quote, your weekly CPRs, your DAS (Division of Apprenticeship Standards) 140, and a final affidavit. Have them ready. On K-24-1952 the prime also had to give the City a list of every sub, “regardless of tier,” with DIR numbers, before work and with each invoice. That includes your hydroseed or trucking sub.</p>`,
  watch: `<p>Labor Code §1775(b): the prime avoids penalties for a sub's underpayment only if it did all of these steps and didn't know about the failure. Skip one and the sub's penalties can become yours.</p>`,
  src: "Cal. Labor Code §§1771.1, 1775(b); City of San Diego K-24-1952 Attachment D §§1.6, 1.9, 1.11."
},

{ h: "Pitfalls for residential landscape companies",
  lead: "These are the mistakes companies make on their first public jobs. Every one costs real money.",
  body: `<ul>
<li><strong>Bidding your residential crew rate.</strong> Public labor can cost twice as much. Rebuild the crew day from the determination.</li>
<li><strong>Using the printed rate when it has **.</strong> The scheduled raise is part of the minimum.</li>
<li><strong>Wrong craft.</strong> Paying a fitter's work at a tender rate, or forgetting the operator rate for equipment hours.</li>
<li><strong>Too many tenders.</strong> Breaking the ratio means paying journeyman rates for those hours, plus penalties.</li>
<li><strong>No DAS (Division of Apprenticeship Standards) 140.</strong> Even short jobs over the $30,000 contract threshold need it.</li>
<li><strong>Late certified payroll.</strong> Payments stop and penalties start.</li>
<li><strong>Benefits not annualized.</strong> Claiming a full year's benefit cost against public hours only.</li>
<li><strong>Owner working without reporting.</strong> Owner hours still go on certified payroll.</li>
<li><strong>Using an unregistered sub or trucker.</strong> Check DIR (Department of Industrial Relations) registration for every sub before you list them.</li>
<li><strong>No time cards by craft.</strong> Without them you can't prove which rate applied.</li>
</ul>`,
  watch: `<p>Set up prevailing wage payroll with your payroll provider before you bid your first public job. Ask them if they can produce certified payroll and the DIR eCPR (electronic certified payroll) upload file in XML (extensible markup language).</p>`
},

{ h: "Scenarios: what would you do?",
  lead: "Short real-world situations. Decide first, then read the right move.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>Right move</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Rain shuts the City job Tuesday and Wednesday. The foreman wants to work Saturday.</td><td>Work Saturday at straight time for Landscape/Irrigation Laborers, and note the weather days on the daily report.</td><td>Footnote c allows straight-time Saturday when weather shut the job that week. Keep proof.</td></tr>
<tr><td>A GC (general contractor) asks you to bid a school job “at your normal rates, it's a small job.”</td><td>Price at prevailing wage and say so in your proposal.</td><td>A public owner means public works for every tier.</td></tr>
<tr><td>Your best laborer runs the skid steer half of every day.</td><td>Split his time card by craft, or pay Operating Engineer Group 3 all day.</td><td>Each hour is paid by the work done that hour.</td></tr>
<tr><td>No apprentice shows up after your DAS (Division of Apprenticeship Standards) 142.</td><td>Request from every other committee in the area once, keep the emails, keep working.</td><td>Asking all programs meets your duty.</td></tr>
<tr><td>You find a $0.40 underpayment on last month's CPR (certified payroll record).</td><td>Pay the workers the difference now, file an amended CPR, keep the proof.</td><td>A good faith mistake promptly fixed can avoid the $40 minimum penalty.</td></tr>
<tr><td>The job runs past July 31, 2027.</td><td>Pay the Aug 1, 2027 increase and confirm the split with DIR (Department of Industrial Relations).</td><td>Two asterisks mean the raise is owed.</td></tr>
</tbody></table></div>`,
  src: "DIR SD-102-X-14-2026-1 footnotes c and d and Predetermined Increase; Cal. Labor Code §§1775, 1777.5; DIR DAS public works pages."
},

{ t: "scorer", id: "pwready", h: "Are we prevailing-wage ready?",
  lead: "Score your company before your first public bid. 2 = done, 1 = started, 0 = not yet. Your choices are saved in this browser.",
  items: [
    ["DIR (Department of Industrial Relations) registration", "Current for this fiscal year, number on file for bids"],
    ["Rate card habit", "We pull determinations, increases, holidays, scope and travel for every bid date"],
    ["Crew mix", "We know the tender, tradesman and apprentice ratios and price them"],
    ["Payroll provider", "Can run payroll by craft, produce CPRs and DIR XML (extensible markup language) files, and handle cash fringe"],
    ["Annualization", "Our CPA (certified public accountant) has figured our per-hour benefit credit on all hours worked"],
    ["Time cards", "Daily, signed, split by job, craft and group"],
    ["Apprenticeship", "We know the committees for our crafts and have DAS (Division of Apprenticeship Standards) 140, DAS 142 and CAC-2 (California Apprenticeship Council) forms ready"],
    ["Posting kit", "Determinations and DIR's job site notice ready for the job board"],
    ["Sub checks", "We verify subs' DIR registration and collect their CPRs and affidavits"],
    ["Compliance folder", "One folder per job, kept at least 3 years (5 on City jobs)"]
  ],
  bands: [
    [16, "Ready", "Bid public work, and keep checking every new determination."],
    [11, "Almost", "Fix the zeros before you sign your first public subcontract."],
    [0, "Not yet", "Set up payroll and compliance first. Bid private work in the meantime."]
  ]
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Public works", "Construction, alteration, installation, demolition, repair or maintenance paid for in whole or in part with public funds."],
    ["Prevailing wage", "The minimum hourly pay, wages plus benefits, the state sets for each craft in each county."],
    ["DIR", "California Department of Industrial Relations. Sets rates, registers contractors and enforces public works law."],
    ["General prevailing wage determination", "DIR's published rates for one craft and area, issued Feb 22 and Aug 22."],
    ["Interim determination", "A new determination DIR issues between the two regular dates, for bids advertised on or after a stated date."],
    ["Bid advertisement date", "The date the job was advertised. It fixes which determination applies."],
    ["Predetermined increase", "A raise already scheduled in the determination (marked **). You must pay it when it takes effect."],
    ["* and ** (asterisks)", "One asterisk: rate good for the life of the project. Two: a scheduled raise must be paid."],
    ["# (pound sign)", "Marks an apprenticeable craft on a determination."],
    ["Basic hourly rate", "The taxable wage part of the prevailing rate."],
    ["Employer payments (fringe)", "Health, pension, vacation, training and other amounts paid on top of the basic rate."],
    ["Total hourly rate", "Basic rate plus employer payments. The real minimum cost per hour."],
    ["Cash fringe", "Employer payments not put into a plan, paid to the worker as extra taxable wages."],
    ["Annualization", "Spreading benefit credit over all hours worked in the year, public and private."],
    ["ST / OT / DT", "Straight time, overtime (1½×) and double time (2×)."],
    ["Craft / classification", "The trade category a worker is paid under, like Landscape/Irrigation Laborer."],
    ["Group", "A pay level inside a craft, set by the machine or task (Operating Engineer Group 3 = skid steer)."],
    ["Scope of work provisions", "DIR's advisory PDF describing what work a craft covers."],
    ["Travel and subsistence", "Pay for travel or a daily amount for distant jobs, set per craft."],
    ["Tender / Tradesman", "Lower-paid helper classifications allowed only in set ratios with journeymen."],
    ["Journeyman", "A fully qualified worker in a craft."],
    ["Apprentice", "A registered trainee in a state-approved program, paid apprentice rates by period."],
    ["DAS", "Division of Apprenticeship Standards, part of DIR."],
    ["DAS 140", "Form notifying apprenticeship committees of your contract award."],
    ["DAS 142", "Form requesting dispatch of apprentices, at least 3 business days ahead."],
    ["CAC / CAC-2", "California Apprenticeship Council, and the online form sent with training fund payments to it."],
    ["Certified payroll (CPR)", "Weekly payroll record by worker and craft, signed under penalty of perjury."],
    ["eCPR", "Electronic certified payroll uploaded to DIR."],
    ["Statement of Non-Performance", "A filing that says no work was done in a payroll period."],
    ["DIR Project ID", "The number DIR gives a registered public works project; used on eCPR."],
    ["LCPtracker", "The certified payroll system Caltrans uses."],
    ["Labor Compliance Program (LCP)", "An agency's own payroll monitoring program, like the City of San Diego's."],
    ["DLSE / Labor Commissioner", "The Division of Labor Standards Enforcement, DIR's enforcement office."],
    ["CWPA", "Civil Wage and Penalty Assessment: the Labor Commissioner's written finding of wages and penalties owed."],
    ["Liquidated damages (wages)", "An extra amount equal to wages still unpaid 60 days after an assessment."],
    ["Debarment", "A ban from bidding or working on public works for a set time."],
    ["Flow-down", "Passing contract requirements, like Labor Code sections, into your subcontracts."],
    ["Davis-Bacon", "Federal prevailing wage law for federal and federally funded construction."]
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
    { q: "What is the maximum penalty for underpaying prevailing wage, per worker per day, on top of back wages?", a: ["$25", "$200", "$1,000"], c: 1, why: "Labor Code §1775 allows up to $200 per worker per day, with minimums of $40, $80 or $120 depending on the case." },
    { q: "Which Operating Engineer group covers a skid steer in San Diego County (2026-2)?", a: ["Group 1", "Group 3", "Group 8"], c: 1, why: "DIR lists “Skid Steer (Loader, with all attachment)” in Group 3, total $104.78." },
    { q: "A Landscape/Irrigation Laborer works a 13-hour weekday. How many of those hours are paid at double time?", a: ["None", "1", "5"], c: 1, why: "Footnote b: only the first 4 daily overtime hours are 1½×. Hour 13 is double time." },
    { q: "Your company pays $7,800 a year in health premiums for a worker who works 2,080 hours a year. What is the annualized credit per hour?", a: ["$3.75", "$19.50", "$7.80"], c: 0, why: "$7,800 ÷ 2,080 = $3.75 an hour, whether the hours are public or private." },
    { q: "Do a journeyman's overtime hours count toward the apprentice ratio?", a: ["Yes, all hours count", "No, hours over 8 a day or 40 a week are left out", "Only Saturday hours count"], c: 1, why: "Labor Code §1777.5 excludes journeyman hours over 8 per day or 40 per week from the ratio." },
    { q: "You need an apprentice on Monday. When must the DAS 142 go out?", a: ["The Friday before", "At least 3 business days before, so by Wednesday", "Any time that week"], c: 1, why: "DAS says the request must be submitted at least three business days before apprentices are required." },
    { q: "How long after the notice of completion can the Labor Commissioner serve a wage and penalty assessment?", a: ["30 days", "6 months", "18 months, or 18 months after acceptance if later"], c: 2, why: "Labor Code §1741 allows service up to 18 months after the notice of completion or acceptance, whichever occurs last." }
  ]
},

{ t: "practice", id: "m11", h: "Practice assignments",
  lead: "These build the tools you'll use on every public bid. Save them in the bid-ready folder.",
  items: [
    { h: "Download today's San Diego determinations", hrs: 0.5, d: "<p>On <a href=\"https://www.dir.ca.gov/oprl/DPreWageDetermination.htm\" target=\"_blank\" rel=\"noopener\">DIR's determinations page</a>, open the current period. Save the PDFs for Landscape/Irrigation Laborer/Tender, Operating Engineer, Teamster and Laborer (Engineering Construction), plus the San Diego County subtrades page for Landscape/Irrigation Fitter and Tradesman. Save each craft's Increase, Holidays and Scope PDFs too. Write the issue and expiration dates (with asterisks) on a cover sheet. Check the Important notices for interim determinations.</p>" },
    { h: "Build a rate table", hrs: 0.75, d: "<p>In a spreadsheet, list each craft and group you'd use: basic rate, each employer payment, total, 1½× and 2× rates, training amount and the date of the next increase. Add a column for which tasks each craft covers, from the Scope PDFs. Check that your totals match DIR's to the cent.</p>" },
    { h: "Price two crew days", hrs: 0.75, d: "<p>Using your rate table, build an 8-hour cost for (1) a 4-person planting crew with the tender mix allowed and (2) a 4-person irrigation crew with a fitter and a skid steer operator. Add burden using your company's real payroll tax, workers' comp and insurance rates. Compare both to your current residential crew day.</p>" },
    { h: "Redo the 11-428704 crew with the higher rates", hrs: 0.5, d: "<p>Open the federal wage rates for <a href=\"#lab-11-428704\">11-428704</a> and DIR's superseded 2021-1 San Diego determinations. For each worker in the crew you built in Module 15, find both rates and use the higher. Look up the July 1, 2021 Operating Engineer increase and add it.</p>" },
    { h: "Map out the apprenticeship steps", hrs: 0.5, d: "<p>Download the <a href=\"https://www.dir.ca.gov/DAS/DASForm140.pdf\" target=\"_blank\" rel=\"noopener\">DAS 140</a> and <a href=\"https://www.dir.ca.gov/DAS/DASForm142.pdf\" target=\"_blank\" rel=\"noopener\">DAS 142</a>. Use DIR's apprenticeship search to find the committees that serve San Diego County for Landscape/Irrigation Laborer and Fitter. Fill in a sample DAS 140 for a made-up $250,000 City park job and write a one-page checklist with dates.</p>" },
    { h: "Talk to your payroll provider", hrs: 0.5, d: "<p>Ask: Can you run prevailing wage payroll by craft? Produce certified payroll and DIR eCPR XML files? Handle cash fringe and annualization? Upload to LCPtracker? What does it cost? Write down the answers and what you need to set up before your first public job.</p>" },
    { h: "Look at real certified payroll", hrs: 0.5, d: "<p>Use DIR's public <a href=\"https://services.dir.ca.gov/pw?id=ecpr_public_search\" target=\"_blank\" rel=\"noopener\">certified payroll search</a> to find a recent San Diego County park or landscape project. Open one redacted payroll. Note the crafts used, hours per day and rates paid. Compare them to your rate table.</p>" },
    { h: "Annualize your benefits and build a cash-fringe worksheet", hrs: 0.5, d: "<p>With your bookkeeper, total last year's health, retirement and other benefit costs per field worker and their total hours worked. Divide to get the annualized credit per hour. Then, for the Landscape/Irrigation Laborer rate, work out the cash fringe and the paycheck rate for straight time and overtime, like the worked example in this module.</p>" },
    { h: "Penalty and overtime drill", hrs: 0.5, d: "<p>Using your rate table, work these out on paper: (1) a 4-person crew on four 10s for 3 weeks; (2) a 12-hour Saturday; (3) the Day after Thanksgiving; (4) the back wages and minimum and maximum §1775 penalties if two workers were paid as Tenders for 10 days while doing Laborer work. Check your answers against the worked examples.</p>" }
  ]
},

{ h: "Module 11 summary",
  lead: "Public work pays by the state's rates, and the state checks. Price it right and keep the paperwork clean.",
  body: `<ul>
<li>Public money in the job means prevailing wage for every worker over $1,000.</li>
<li>Use the DIR (Department of Industrial Relations) determinations in effect on the bid advertisement date, including interim ones, plus every predetermined increase (**) during the job.</li>
<li>Pick the craft and group by the work done. Landscape/Irrigation Laborer, Tender, Fitter, Operating Engineer, Teamster and Laborer (Engineering Construction) cover most landscape jobs. Follow the tender and tradesman ratios.</li>
<li>Pay at least the total hourly rate. Overtime multiplies the basic rate. Watch the double-time and Saturday footnotes. Benefits not paid into plans go on the check, and benefit credit is annualized.</li>
<li>On contracts of $30,000 or more: DAS (Division of Apprenticeship Standards) 140, DAS 142, 1:5 apprentice hours and training fund payments by the 15th.</li>
<li>Certified payroll weekly: DIR eCPR (electronic certified payroll) on most jobs, LCPtracker on Caltrans, plus the City's system on City jobs. Keep records at least 3 years, 5 on City jobs.</li>
<li>Audits end in assessments, liquidated damages and possible debarment. Flow the Labor Code down to your subs and check their payroll.</li>
<li>On federal-aid jobs, pay the higher of state and federal for each worker.</li>
<li>Rebuild the crew day from the rates. It can cost twice the residential number.</li>
</ul>
<p><strong>Next: Module 12 · Pre-Bid Meetings, RFIs, Addenda and Communication.</strong></p>`
}
]
});
