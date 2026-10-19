(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 11, hours: 6, title: "Prevailing Wage and Public Works Compliance",
slides: [

{ t: "cover",
  h: "Prevailing Wage and Public Works Compliance",
  lead: "On public work the state sets the minimum cost of every hour by craft and checks that you paid it. Wrong in the bid, you lose money; wrong on the job, you pay back wages plus penalties.",
  objectives: [
    "Decide whether a job is public works and which DIR determination and increases apply",
    "Read every column, symbol and footnote of the San Diego landscape-related determinations and pick craft and group by the work",
    "Price basic rate, fringe, overtime, Saturday, holiday, predetermined increases, tenders and apprentices",
    "Pay fringe correctly, into plans or as cash, with annualized credit",
    "Meet apprenticeship, certified payroll, posting and records rules; know the audit path and penalty math",
    "Apply “pay the higher” on federal-aid jobs, flow requirements down to subs, and build a prevailing wage crew day into a bid"
  ],
  time: [["Reading and slides", "2 h"], ["Practice assignments", "4 h"], ["Module total", "6 h"]],
  body: `<p>Rates are real: DIR (California Department of Industrial Relations) 2026-2 determinations for San Diego County, and the 2021 federal decision for Caltrans 11-428704 (<a href="#m15-1">Module 15</a>). Pull current rates for every bid. Numbers marked “example” are practice numbers.</p>`,
  src: "California Labor Code §§1720–1861; DIR Office of the Director – Research, General Prevailing Wage Determinations (dir.ca.gov/oprl/DPreWageDetermination.htm)."
},

{ h: "Is this job public works?",
  lead: "Construction, alteration, demolition, installation, repair or maintenance paid in whole or part with public funds is public works; over $1,000 every worker on it gets at least prevailing wage.",
  body: `<ul>
<li>Applies to every tier (prime, sub, sub-sub) and to the owner if the owner works on the job. A GC's school or park job is public works for you.</li>
<li>Includes maintenance (e.g. landscape maintenance on a city contract) and street or improvement work for a city or district.</li>
<li><strong>Small project exemption</strong> from DIR registration and electronic certified payroll: whole prime contract ≤ $25,000 (construction) or ≤ $15,000 (maintenance). Prevailing wage still applies over $1,000.</li>
<li>Agencies can't split a job to stay under limits. If the documents say prevailing wage, it applies to your scope.</li>
</ul>
<p><strong>Screen every bid:</strong> public owner (city, county, school or college district, water district, State incl. Caltrans, port, transit)? Any public money (grants, housing or bond money, fee waivers, below-market land)? Do the specs or subcontract say “prevailing wage,” “Labor Code,” “DIR,” “certified payroll”? Federal money (adds a federal decision)? If unsure, ask in writing (<a href="#m12-1">Module 12</a>) and file the answer.</p>
<div class="tablewrap"><table>
<thead><tr><th>Job</th><th>Public works?</th></tr></thead>
<tbody>
<tr><td>Caltrans freeway planting 11-428704</td><td>Yes: State owner, federal money too</td></tr>
<tr><td>City of San Diego K-24-1952</td><td>Yes: City owner, contract requires it</td></tr>
<tr><td>School playground through a GC</td><td>Yes: public owner; you're a sub</td></tr>
<tr><td>HOA renovation paid by dues</td><td>Usually no; check the contract</td></tr>
<tr><td>Private apartments with City housing funds</td><td>Likely yes; read the documents and ask</td></tr>
</tbody></table></div>`,
  watch: `<p>“The GC said it's not prevailing wage” is not proof. Get any “no” in writing. DIR issues coverage determinations on request (pwcoverage@dir.ca.gov).</p>`,
  src: "Cal. Labor Code (LC) §§1720(a)(1), 1771; DIR Public Works FAQ (dir.ca.gov/Public-Works/PublicWorksSB854FAQ.html)."
},

{ h: "Which determination applies",
  lead: "Use the determinations in effect on the bid advertisement date, then add every predetermined increase that takes effect while you work.",
  body: `<ul>
<li>Issued Feb 22 and Aug 22, effective 10 days later (Sept 1; March 3 in a leap year, March 4 otherwise). One per craft and area.</li>
<li>Expiration with <strong>*</strong>: rate good for the life of the project. With <strong>**</strong>: a predetermined increase is scheduled; open the Increase notice and price it.</li>
<li><strong>Interim determinations</strong> replace rates mid-period for bids advertised on or after a stated date. Check DIR's Important notices before every bid.</li>
<li>The advertisement date is in the Notice Inviting Bids, not the bid opening. 11-428704: Notice to Bidders Aug 2, 2021, bids opened Sept 8, 2021. Use Aug 2.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Advertised</th><th>Period</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Aug 28, 2026</td><td>2026-1</td><td>2026-2 issued Aug 22 but effective Sept 1</td></tr>
<tr><td>Sept 1, 2026</td><td>2026-2</td><td>First day in effect</td></tr>
<tr><td>Feb 25, 2027</td><td>2026-2</td><td>2027-1 effective March 4, 2027</td></tr>
<tr><td>Oct 12, 2026, Laborer (Engineering Construction)</td><td>Interim SD-23-102-3-2026-1</td><td>Issued Sept 29, 2026 for bids advertised on or after Oct 9, 2026; “supersede the rates in determination SD-23-102-3-2025-1”; Group 1 total $78.65</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>11-428704:</strong> the Landscape/Irrigation Laborer determination in effect Aug 2, 2021 (SD-102-X-14-2021-1) expired “July 31, 2021**.” Increase notice: “Effective August 1, 2021, there will be an increase of $2.15 allocated as follows: $1.04 Basic Hourly Rate, $0.10 to Health &amp; Welfare and $1.01 to Pension.” Every laborer hour cost at least $57.66 + $2.15 = <strong>$59.81</strong>, not the printed $57.66.</p>`,
  deeper: `<p>Effective date: 8 CCR (California Code of Regulations) §16000. If a needed craft isn't covered, the agency can request a special determination at least 45 days before advertisement. The awarding body must state the rates, or that they're on file, in the call for bids (LC §1773.2).</p>`,
  src: "DIR Prevailing Wage FAQ; DIR Index 2026-2; DIR SD-102-X-14-2021-1 and its Predetermined Increase notice; DIR Interim Determination SD-23-102-3-2026-1; Caltrans 11-428704 Notice to Bidders; LC §1773.2."
},

{ h: "Pulling rates from DIR",
  lead: "Allow 20 minutes the first time. Save every PDF (portable document file) you used, with the download date, in the bid folder.",
  body: `<ol class="steps">
<li><div><b>Landing page</b><a href="https://www.dir.ca.gov/oprl/DPreWageDetermination.htm" target="_blank" rel="noopener">General Prevailing Wage Determinations</a>: choose the journeyman menu for the period (e.g. 2026-2). Separate links: apprentice menu, superseded determinations, Important notices.</div></li>
<li><div><b>Index of steps</b>1 Statewide · 2 Northern / 2B Southern (Laborer, Operating Engineer, Landscape Maintenance Laborer, Tree Maintenance when marked “Includes San Diego County”) · 3 San Diego · 4 County subtrades · 5 Shift · 6 Important notices.</div></li>
<li class="hl"><div><b>Step 3 · San Diego</b>One row per craft: Landscape Irrigation Laborer (SD-102-X-14), Laborer (Engineering Construction), Operating Engineer, Teamster. “Select One” gives Holidays, Scope, Travel; separate Increase link. “+” after a craft means shift rates exist. Record determination number, issue date, expiration with asterisks.</div></li>
<li class="hl"><div><b>Step 4 · County subtrades · San Diego</b>One long web table; scroll to PLUMBER: LANDSCAPE/IRRIGATION FITTER and TRADESMAN. Footnote letters sit by numbers, text at the bottom. Subtrade increases are on a separate SDI-Pre page.</div></li>
<li><div><b>Apprentice rates</b>Apprentice menu → period and county → “View” the craft.</div></li>
<li><div><b>Important notices</b>Corrections and interim determinations for your crafts.</div></li>
</ol>`,
  watch: `<p>Links differ by one letter: SD-23-63-3 is Operating Engineer; (B) cranes and hoisting, (C) tunnel, (D) inspectors and soils testers. Read the craft name inside the PDF. Questions: DIR Research Unit (415) 703-4774, statistics@dir.ca.gov; log who and when.</p>`,
  src: "DIR Director's General Prevailing Wage Determinations page; DIR 2026-2 index (dir.ca.gov/oprl/2026-2/PWD/index.htm), San Diego page and SDI subtrades; DIR apprentice wage sheets (dir.ca.gov/OPRL/PWAppWage/PWAppWageStart.asp)."
},

{ h: "Crafts for landscape work, and the Scope PDF",
  lead: "Each hour is paid by the work done that hour, not the worker's title. Use the Scope PDF to pick the craft; when two fit, pay the higher or ask DIR.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>DIR craft (San Diego, 2026-2)</th><th>Where</th><th>Work</th></tr></thead>
<tbody>
<tr><td>Landscape/Irrigation Laborer (also Landscape Hydro Seeder, $77.77)</td><td>San Diego · SD-102-X-14</td><td>Planting, soil prep, irrigation trenching and install</td></tr>
<tr><td>Landscape/Irrigation Tender</td><td>Same</td><td>Helper work within ratio; plant establishment</td></tr>
<tr><td>Plumber: Landscape/Irrigation Fitter and Tradesman</td><td>County subtrades</td><td>Irrigation pipefitting where the fitter scope applies</td></tr>
<tr><td>Operating Engineer</td><td>San Diego · SD-23-63-3</td><td>Skid steer (G3); mini backhoe, boring, excavator under 21,000 lbs, hydroseeder machine (G4)</td></tr>
<tr><td>Teamster</td><td>San Diego · SD-23-261-3</td><td>On-site dump and water trucks</td></tr>
<tr><td>Laborer (Engineering Construction)</td><td>San Diego</td><td>General labor, demolition, flagging</td></tr>
<tr><td>Tree Maintenance (Laborer); Landscape Maintenance Laborer</td><td>Southern California</td><td>Tree trimming and removal; maintenance contracts</td></tr>
</tbody></table></div>
<div class="twocol">
<div><h3>Landscape/Irrigation Laborer scope (quoted)</h3><ul>
<li>“handgrade landscaped areas, tractor grade landscaped areas, finish rake landscape areas, spread top soil, build mounds”</li>
<li>“trench for irrigation manual or power, layout for irrigation, backfill trenches”</li>
<li>“plant shrubs, trees (including removal, relocation and trimming of trees on construction projects)… set boulders, seed lawns, lay sod; hydro seed”</li>
<li>Low-voltage irrigation: “controllers, valves, sensors… junction boxes and conductors”; “Start-up testing, flushing, purging, water balancing”; “All temporary irrigation”</li>
<li>Plant establishment during warranty or the DIR-set period</li>
</ul></div>
<div><h3>Tenders may only (item 62)</h3><ul>
<li>Assist with wire installation</li>
<li>Unload materials, distribute pipe, stack heads and risers</li>
<li>Set valve boxes and thrust blocks</li>
<li>Clean and backfill trenches with a shovel</li>
<li>Clean up and water during construction</li>
<li>Other landscape, planting and irrigation work as helpers</li>
</ul></div>
</div>`,
  watch: `<p>Traffic control incidental to landscape work is covered “except on freeways, highways, and high traffic areas where safety is of paramount concern.” There, flagging and traffic control are Laborer (Engineering Construction) Group 1 or your traffic control sub. Hand hydroseeding is Landscape Hydro Seeder; running a hydroseeder machine is Operating Engineer Group 4.</p>`,
  deeper: `<p>The Scope PDF is advisory and partly redacted. Split time cards by craft, or pay the higher rate all day.</p>`,
  src: "DIR Scope of Work Provisions ID 102-X-14, San Diego County (2026-2); DIR 2026-2 San Diego, Southern California and SDI-2026-2 indexes; SD-23-102-3-2026-1 and SD-23-63-3-2026-2 classifications."
},

{ h: "Reading a determination line and its footnotes",
  lead: "Total hourly rate = basic rate + employer payments. Overtime multiplies only the basic rate; footnotes decide when 1½× becomes 2×.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Landscape/Irrigation Laborer, SD-102-X-14-2026-1 (issued Aug 22, 2026; expires July 31, 2027**)</th><th class="num">Per hour</th></tr></thead>
<tbody>
<tr><td>Basic hourly rate (taxable wage)</td><td class="num">$47.57</td></tr>
<tr><td>Health and welfare $9.85 · pension $12.92 · vacation and holiday $5.02 (a) · training $0.80 · other $0.51</td><td class="num">$29.10</td></tr>
<tr><td><strong>Total hourly rate</strong> (straight time, 8-hour day)</td><td class="num"><strong>$76.67</strong></td></tr>
<tr><td>Daily and Saturday overtime 1½× (b): $47.57 × 1.5 + $29.10</td><td class="num">$100.455</td></tr>
<tr><td>Sunday and holiday 2×</td><td class="num">$124.24</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Mark</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>#</td><td>Apprenticeable craft. Teamster has no # in 2026-2; training $0.00.</td></tr>
<tr><td>* / **</td><td>Good for project life / scheduled increase</td></tr>
<tr><td>+</td><td>Shift rates exist (Operating Engineer)</td></tr>
<tr><td>a (landscape)</td><td>Vacation and holiday includes supplemental (union) dues</td></tr>
<tr><td>b (landscape)</td><td>1½× only for the first 4 daily OT hours and first 12 Saturday hours; then 2×</td></tr>
<tr><td>c (landscape)</td><td>Saturday at straight time only if weather or ground conditions shut the job that week</td></tr>
<tr><td>d (landscape)</td><td>Laborer/tender order on site; plant establishment may be all tenders</td></tr>
<tr><td>AO (Fitter)</td><td>Vacation and holiday $0.000: “Amount included in basic hourly rate and factored at 1.5 times for all overtime”</td></tr>
<tr><td>AR (Fitter)</td><td>Saturday straight time if shut down that week for weather</td></tr>
<tr><td>Y / AV (Tradesman)</td><td>Fitter/tradesman order on the job</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Travel and subsistence (Landscape/Irrigation Laborer):</strong> workers reach their daily reporting place on their own time; you pay from a reporting point you order them to. No free parking within 350 yards: provide or reimburse it. Workers more than 70 road miles from your shop get <strong>$100 per scheduled workday</strong> subsistence, unless dispatched directly and living within 70 miles. Borrego Springs or Imperial County jobs may trigger it.</p>`,
  watch: `<p>Teamster rates “Applies only to work on the construction site.” Yard-to-job driving is treated differently; ask DIR before assuming either way.</p>`,
  src: "DIR SD-102-X-14-2026-1 and footnotes a–d; DIR Travel and Subsistence Provisions ID 102-X-14; DIR SDI-2026-2 footnotes AO, AR, AV and SDI-Pre footnote Y; DIR SD-23-261-3-2026-1."
},

{ h: "Tenders, tradesmen and the ratio rules",
  lead: "Helper classifications cost less than half a journeyman, but only in the mix the footnotes allow.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>2026-2 San Diego</th><th class="num">Basic</th><th class="num">Total</th></tr></thead>
<tbody>
<tr><td>Landscape/Irrigation Laborer</td><td class="num">$47.57</td><td class="num">$76.67</td></tr>
<tr><td>Landscape/Irrigation Tender</td><td class="num">$21.97</td><td class="num">$30.19</td></tr>
<tr><td>Landscape/Irrigation Fitter (Plumber)</td><td class="num">$47.85</td><td class="num">$76.40</td></tr>
<tr><td>Landscape/Irrigation Tradesman (Plumber)</td><td class="num">$21.98</td><td class="num">$27.54</td></tr>
</tbody></table></div>
<ul>
<li><strong>Laborer/Tender (d):</strong> 1st Laborer · 2nd Apprentice or Laborer · 3rd and 4th may be Tenders · 5th Laborer · 6th Apprentice or Laborer · 7th and 8th may be Tenders · then 50/50.</li>
<li><strong>Plant establishment may be done entirely by Tenders</strong>, no journeyman on site.</li>
<li><strong>Fitter/Tradesman (AV):</strong> 1st Fitter · 2nd Fitter or apprentice Fitter · 3rd and 4th may be Tradesmen · 5th Fitter · then 50/50.</li>
</ul>`,
  ex: `<p>Two-person establishment day: 2 Tenders × $30.19 × 8 = $483.04 vs. 2 Laborers × $76.67 × 8 = $1,226.72. That gap decides establishment-heavy bids.</p>`,
  watch: `<p>Federal-aid Caltrans: Caltrans “does not accept lower State wage rates not specifically included in the federal minimum wage determinations,” including helpers. The 2021 federal decision for 11-428704 had no landscape tender, so tenders got at least the federal laborer rate.</p>`,
  src: "DIR SD-102-X-14-2026-1 footnote d; DIR SDI-2026-2 (Fitter and Tradesman, footnote AV); Caltrans 11-428704 Special Provisions, Notice to Bidders."
},

{ h: "Operating Engineers, Teamsters and construction Laborers",
  lead: "Machine and truck hours are paid by the group the machine falls in. Operators cost about $30/h more than a landscape laborer, so get the group right.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Craft · group · machine or work (as DIR lists it)</th><th class="num">Basic</th><th class="num">Total</th><th class="num">1½×</th><th class="num">2×</th></tr></thead>
<tbody>
<tr><td>OE (Operating Engineer) G1 · “Ditch Witch, With Seat Or Similar Type Equipment”; generator, pump, compressor</td><td class="num">$62.40</td><td class="num">$103.71</td><td class="num">$134.91</td><td class="num">$166.11</td></tr>
<tr><td>OE G2 · skiploader, wheel type up to ¾ yd</td><td class="num">$63.18</td><td class="num">$104.49</td><td class="num">$136.08</td><td class="num">$167.67</td></tr>
<tr><td>OE G3 · “Skid Steer (Loader, with all attachment)”</td><td class="num">$63.47</td><td class="num">$104.78</td><td class="num">$136.515</td><td class="num">$168.25</td></tr>
<tr><td>OE G4 · mini backhoe (“Mini-Max Or Similar Type”), boring machine, HDD (horizontal directional drill), excavator under 21,000 lbs, trencher up to 6 ft, compacting roller, hydroseeder machine, skiploader over ¾ to 1½ yd, dozer to D-5</td><td class="num">$64.96</td><td class="num">$106.27</td><td class="num">$138.75</td><td class="num">$171.23</td></tr>
<tr><td>OE G8 · backhoe up to ¾ yd (small Ford, Case), excavator 21,000–100,000 lbs</td><td class="num">$65.29</td><td class="num">$106.60</td><td class="num">$139.245</td><td class="num">$171.89</td></tr>
<tr><td>Teamster G1 · “delivery by pickup trucks,” swampers, helpers</td><td class="num">$33.12</td><td class="num">$62.69</td><td class="num">$79.25</td><td class="num"></td></tr>
<tr><td>Teamster G2 · 2-axle dump, 2-axle flatbed, forklift under 15,000 lbs</td><td class="num">$43.71</td><td class="num">$73.28</td><td class="num">$95.135</td><td class="num">$116.99</td></tr>
<tr><td>Teamster G3 · 2-axle water truck, 3-axle dump</td><td class="num">$43.91</td><td class="num">$73.48</td><td class="num">$95.435</td><td class="num"></td></tr>
<tr><td>Teamster G4 · 3-axle water truck, dumpster trucks, low-bed and trailer</td><td class="num">$44.11</td><td class="num">$73.68</td><td class="num">$95.735</td><td class="num"></td></tr>
<tr><td>Laborer (Eng. Constr.) G1 · flagman, traffic control, general laborer, manual post hole digger</td><td class="num">$49.20</td><td class="num">$78.65</td><td class="num">$103.25</td><td class="num">$127.85</td></tr>
<tr><td>Laborer (Eng. Constr.) G2 · tree climber, faller, chain saw, chipper</td><td class="num">$49.75</td><td class="num">$79.20</td><td class="num">$104.075</td><td class="num"></td></tr>
<tr><td>Laborer (Eng. Constr.) G3 · tamper/Wacker compactor, power post hole digger, hand-propelled trencher</td><td class="num">$50.30</td><td class="num">$79.75</td><td class="num">$104.90</td><td class="num"></td></tr>
</tbody></table></div>
<p>Employer payments: OE every group $17.45 + $18.40 + $3.95 + $1.10 training + $0.41 = <strong>$41.31</strong>; Teamster $12.82 + $12.75 + $3.50 + $0.00 + $0.50 = $29.57; Laborer (Eng. Constr.) $9.85 + $12.92 + $5.20 + $0.80 + $0.68 = $29.45.</p>`,
  ex: `<p>Operator: 6 h on a 13,000-lb mini excavator (G4) + 2 h skid steer (G3) = 6 × $106.27 + 2 × $104.78 = <strong>$847.18</strong>; unsplit time card = 8 × $106.27 = $850.16. A worker driving a 2-axle dump 3 h on site and planting 5 h: 3 × $73.28 + 5 × $76.67 = $219.84 + $383.35.</p>`,
  watch: `<p>Teamster July 1, 2027 notice: “a decrease of $4.00 from Pension and an increase of $4.00 to be allocated to wages and/or employer payments.” The total may hold while the wage part, and so overtime, moves.</p>`,
  deeper: `<ul>
<li>OE SD-23-63-3-2026-2 expires June 30, 2027**: “Effective on July 1, 2027, there will be an increase of $4.50 to be allocated to wages and/or fringes.” Footnote b: 1½× for the first 4 OT hours, other daily OT at the Sunday rate; c: Saturday 1½× for the first 12 hours. Holidays add “the first (1st) Saturday following the first (1st) Friday in the months of June and December,” at 2×. Shift tables pay $1.00 more basic on most groups.</li>
<li>Teamster SD-23-261-3-2026-1 expires June 30, 2027**; Saturday make-up for weather, power problems, breakdowns or suspensions beyond your control. Laborer (Eng. Constr.) interim SD-23-102-3-2026-1 expires June 30, 2027**; Saturday make-up for inclement weather, first 8 hours only.</li>
</ul>`,
  src: "DIR SD-23-63-3-2026-2 classifications pp. 7–8, footnotes, Predetermined Increase and Holiday Provisions; DIR SD-23-261-3-2026-1 and its Predetermined Increase; DIR Interim SD-23-102-3-2026-1."
},

{ h: "Your 2026-2 San Diego rate card",
  lead: "Keep one table like this in every public bid, rebuilt for that bid's advertisement date. These are minimums before burden.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Craft</th><th class="num">Total ST (straight time)</th><th class="num">OT 1½×</th><th class="num">2×</th><th>Training</th><th>Next change</th></tr></thead>
<tbody>
<tr><td>Landscape/Irrigation Laborer</td><td class="num">$76.67</td><td class="num">$100.455</td><td class="num">$124.24</td><td>$0.80</td><td>+$3.65 Aug 1, 2027 (then +$3.75 Aug 1, 2028; +$4.03 Aug 1, 2029)</td></tr>
<tr><td>Landscape/Irrigation Tender</td><td class="num">$30.19</td><td class="num">$41.175</td><td class="num">$52.16</td><td>$0.00</td><td>None scheduled</td></tr>
<tr><td>Landscape/Irrigation Fitter</td><td class="num">$76.40</td><td class="num">$100.32</td><td class="num">$122.75</td><td>$2.54</td><td>+$4.03 Sept 1, 2027</td></tr>
<tr><td>Landscape/Irrigation Tradesman</td><td class="num">$27.54</td><td class="num">$38.53</td><td class="num">$49.52</td><td>$0.10</td><td>+$2.07 Sept 1, 2027</td></tr>
<tr><td>OE G3 (skid steer)</td><td class="num">$104.78</td><td class="num">$136.515</td><td class="num">$168.25</td><td>$1.10</td><td>+$4.50 July 1, 2027</td></tr>
<tr><td>OE G4 (mini excavator)</td><td class="num">$106.27</td><td class="num">$138.75</td><td class="num">$171.23</td><td>$1.10</td><td>+$4.50 July 1, 2027</td></tr>
<tr><td>Teamster G2 (2-axle dump)</td><td class="num">$73.28</td><td class="num">$95.135</td><td class="num">$116.99</td><td>$0.00</td><td>Pension/wage shift July 1, 2027</td></tr>
<tr><td>Laborer (Eng. Constr.) G1 (flagger)</td><td class="num">$78.65</td><td class="num">$103.25</td><td class="num">$127.85</td><td>$0.80</td><td>Expires June 30, 2027**</td></tr>
</tbody></table></div>`,
  watch: `<p>Never copy a rate card from an old bid.</p>`,
  src: "DIR 2026-2: SD-102-X-14-2026-1, SDI-2026-2 and SDI-Pre, SD-23-63-3-2026-2, SD-23-261-3-2026-1, SD-23-102-3-2026-1, and their Predetermined Increase notices."
},

{ h: "Fringe: plans, cash and annualization",
  lead: "Spend at least the total hourly rate per worker-hour. Fringe not paid into a bona fide plan goes on the check as taxable wages, and plan credit is annualized over all hours worked.",
  body: `<ul>
<li>Credit: health, pension or 401(k), vacation, training, paid irrevocably into real plans. Credit can't push straight-time or OT wages below prevailing, and isn't given for benefits other laws require.</li>
<li>Training goes to your apprenticeship program or the CAC (California Apprenticeship Council).</li>
<li>Union membership isn't required; meeting the total rate is.</li>
<li>When you pay more benefits per hour on public than private work, credit is annualized (LC §1773.1): a full year's premium can't be charged against a month of public work.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Laborer, health premium $650/month (example), 2,080 h/yr</th><th>Math</th><th class="num">Per hour</th></tr></thead>
<tbody>
<tr><td>Annualized health credit</td><td>$7,800 ÷ 2,080</td><td class="num">$3.75</td></tr>
<tr><td>Training to CAC or program</td><td>Determination</td><td class="num">$0.80</td></tr>
<tr><td>Cash fringe owed</td><td>$29.10 − $3.75 − $0.80</td><td class="num">$24.55</td></tr>
<tr><td>Paycheck rate ST</td><td>$47.57 + $24.55</td><td class="num">$72.12</td></tr>
<tr><td>Paycheck rate OT</td><td>$47.57 × 1.5 + $24.55</td><td class="num">$95.905</td></tr>
<tr><td>Check: OT cost</td><td>$95.905 + $3.75 + $0.80</td><td class="num">$100.455</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Wrong way:</strong> worker has 400 public hours; company claims $7,800 ÷ 400 = $19.50/h. Underpaid ($19.50 − $3.75) × 400 = <strong>$6,300</strong> per worker, plus penalties.</p>`,
  watch: `<p>Cash fringe carries payroll tax: at 10% (example), $24.55 adds about $2.46/h. Put it in burden. Have payroll or your CPA (certified public accountant) set this up before the first public job.</p>`,
  deeper: `<ul>
<li>LC §1773.1(e), (f): annualization applies to payments not made directly to the worker. A defined contribution pension with immediate participation and vesting within the first 500 hours gets full credit without annualizing.</li>
<li>Credit is allowed even if the plan isn't paid in the same pay period, if paid regularly, at least quarterly.</li>
<li>DIR annualization exemptions issued before Jan 1, 2026 have been revoked.</li>
</ul>`,
  src: "Cal. Labor Code §1773.1 (as of Jan. 1, 2026); DIR SD-102-X-14-2026-1."
},

{ h: "Overtime, Saturdays and holidays",
  lead: "Public works overtime is daily as well as weekly: over 8 a day or 40 a week at no less than 1½× basic, plus each craft's double-time, Saturday, holiday and shift footnotes.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Landscape/Irrigation Laborer day</th><th>Math</th><th class="num">Per worker</th></tr></thead>
<tbody>
<tr><td>8-hour weekday</td><td>8 × $76.67</td><td class="num">$613.36</td></tr>
<tr><td>10-hour weekday</td><td>8 × $76.67 + 2 × $100.455</td><td class="num">$814.27</td></tr>
<tr><td>13-hour weekday (b: 4 OT hours at 1½×)</td><td>8 × $76.67 + 4 × $100.455 + 1 × $124.24</td><td class="num">$1,139.42</td></tr>
<tr><td>Saturday 8 h / weather make-up (c)</td><td>8 × $100.455 / 8 × $76.67</td><td class="num">$803.64 / $613.36</td></tr>
<tr><td>Day after Thanksgiving (Fri Nov 27, 2026)</td><td>8 × $124.24</td><td class="num">$993.92</td></tr>
<tr><td>OE G3 on Sat Dec 5, 2026 (OE holiday)</td><td>8 × $168.25</td><td class="num">$1,346.00</td></tr>
</tbody></table></div>
<p><strong>Four 10s</strong> = 40 h/week but 8 OT hours per worker: 8 × ($100.455 − $76.67) = $190.28; crew of 4 = <strong>$761.12 a week</strong>.</p>
<ul>
<li><strong>Landscape holidays:</strong> New Year's, Presidents', Memorial, Independence, Labor, Veterans, Thanksgiving, day after Thanksgiving, Christmas. “No work shall be required on Labor Day except in cases of extreme urgency.” Sunday holiday → Monday; Christmas or New Year's on Saturday → Friday before.</li>
<li><strong>Holidays</strong> come from the craft's agreement on file with DIR or Government Code §6700; <strong>shift</strong> rates apply to “+” crafts on night work (freeway closures, <a href="#m15-1">Module 15</a>).</li>
<li>City of San Diego normal hours: 7:00 AM–5:00 PM Mon–Fri unless the permit says otherwise.</li>
</ul>`,
  watch: `<p>Unpaid public works OT: $25 per worker per day (LC §1813) on top of back pay.</p>`,
  src: "Cal. Labor Code §§1810–1815; DIR SD-102-X-14-2026-1 footnotes b, c; DIR Holiday Provisions ID 102-X-14 and ID 23-63-3; DIR Prevailing Wage FAQ Q14; City of San Diego K-24-1952 Supplementary Special Provisions 1-2."
},

{ h: "Pricing predetermined increases",
  lead: "Split hours at each ** date and price each part at its rate; long establishment periods cross several dates.",
  ex: `<p>Bid advertised Sept 15, 2026; work March–October 2027; 1,200 Laborer hours (example), 700 before Aug 1, 2027.</p>
<div class="tablewrap"><table>
<thead><tr><th>Period</th><th class="num">Hours</th><th class="num">Rate</th><th class="num">Cost</th></tr></thead>
<tbody>
<tr><td>Before Aug 1, 2027</td><td class="num">700</td><td class="num">$76.67</td><td class="num">$53,669.00</td></tr>
<tr><td>From Aug 1, 2027 (+$3.65)</td><td class="num">500</td><td class="num">$80.32</td><td class="num">$40,160.00</td></tr>
<tr><td><strong>Total</strong></td><td class="num">1,200</td><td class="num">avg $78.19</td><td class="num"><strong>$93,829.00</strong></td></tr>
</tbody></table></div>
<p>All at $76.67: $92,004.00, $1,825.00 short. Also: OE +$4.50 July 1, 2027 (G4 to at least $110.77); Fitter +$4.03 Sept 1, 2027 (to at least $80.43). Caltrans 11-428704 had 250 working days of establishment; 11-431064 (SR-905) had 750.</p>`,
  watch: `<p>The 2026-2 landscape notice allocates the raise “to wages and/or fringes” without the split, so the new OT rate is unknown. Price OT as if all of it goes to basic: $3.65 × 1.5 = $5.475 more per OT hour. Confirm the split with DIR at (415) 703-4774 when it takes effect.</p>`,
  src: "DIR Predetermined Increase notices for SD-102-X-14-2026-1, SD-23-63-3-2026-2 and SDI-2026-2 (footnote B: “Please contact the Office of the Director – Research Unit… when the predetermined increase becomes due to confirm the distribution”); Caltrans 11-428704 and 11-431064 Notices to Bidders."
},

{ h: "Apprenticeship: forms, ratio, training funds",
  lead: "On public works contracts of $30,000 or more, every contractor in an apprenticeable (#) craft notifies, requests, employs 1 apprentice hour per 5 journeyman hours, and pays training funds.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Duty</th><th>Rule</th><th>Example: sub signed Tue Mar 2, 2027, work starts Mon Mar 8</th></tr></thead>
<tbody>
<tr><td>DAS (Division of Apprenticeship Standards) 140, notice of award</td><td>Within 10 days of signing and no later than first day of work; to your own committee or every committee that can supply the site. Include journeyman hours and planned apprentices.</td><td>Due Mon Mar 8 (not Mar 12). Find committees in DAS's <a href="http://www.dir.ca.gov/databases/das/pwaddrstart.asp" target="_blank" rel="noopener">committee search</a> for each craft. Keep proof of sending.</td></tr>
<tr><td>DAS 142, request for dispatch</td><td>At least 3 business days before needed</td><td>Apprentice needed Mon Mar 15 → send by Wed Mar 10</td></tr>
<tr><td>No dispatch</td><td>Request once from all other committees in the area; duty met</td><td>Keep the emails</td></tr>
<tr><td>Ratio 1:5</td><td>Journeyman straight-time hours ÷ 5, per craft, by end of your subcontract. OT hours (over 8/day or 40/week) excluded.</td><td>2 laborers × 8 × 40 days = 640 → 128 apprentice hours</td></tr>
<tr><td>Training funds</td><td>Determination amount on every hour, OT included, of journeymen and apprentices; to your program or CAC via online CAC-2 by the 15th of next month</td><td>March funds by Thu Apr 15, 2027; save the CAC-2 Transaction ID</td></tr>
</tbody></table></div>
<p>Landscape/Irrigation Laborer, Fitter and Operating Engineer are #. Subs owe the duty when the prime contract is $30,000 or more, even if the subcontract is less. DAS: “Even if a job will take less than 40 hours, the contractor must submit a DAS 140 and DAS 142.”</p>`,
  deeper: `<p>LC §1777.5 sets the ratio and threshold: “Any work performed by a journeyman in excess of eight hours per day or 40 hours per week shall not be used to calculate the ratio.” Knowing violations: up to $100 per day, $300 per day for a repeat within 3 years (§1777.7). You need not sign a DAS 7 or accept other program conditions. The duty stays with you if you use a temp agency. Training funds may be paid to workers only in a non-apprenticeable craft.</p>`,
  src: "DIR DAS Public Works requirements and “More Information” page (dir.ca.gov/das/publicworks.html); 8 CCR §230.1; Cal. Labor Code §§1777.5, 1777.7."
},

{ h: "Worked example · Apprentice hours and cost",
  lead: "Apprentices cost less than journeymen, so meeting the ratio usually lowers labor cost.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>2026-2 Landscape/Irrigation Laborer apprentice</th><th class="num">Basic</th><th class="num">Training</th><th class="num">Total</th></tr></thead>
<tbody>
<tr><td>Period 1 (first 12 months)</td><td class="num">$22.64</td><td class="num">$2.19</td><td class="num">$36.57</td></tr>
<tr><td>Period 2</td><td class="num">$27.05</td><td class="num">$2.26</td><td class="num">$41.05</td></tr>
<tr><td>Period 3</td><td class="num">$31.47</td><td class="num">$2.27</td><td class="num">$54.62</td></tr>
<tr><td>Period 4</td><td class="num">$35.89</td><td class="num">$2.32</td><td class="num">$59.09</td></tr>
<tr><td>Period 5</td><td class="num">$40.32</td><td class="num">$2.35</td><td class="num">$64.37</td></tr>
</tbody></table></div>
<p>768 ST laborer hours: 640 journeyman × $76.67 = $49,068.80 + 128 period-1 apprentice × $36.57 = $4,680.96 = <strong>$53,749.76</strong>, vs. $58,882.56 all journeymen (saves $5,132.80). Training inside: 640 × $0.80 + 128 × $2.19 = $792.32, sent to CAC or the program. If journeymen worked 680 h with 40 OT, you still need 640 ÷ 5 = 128.</p>`,
  watch: `<p>Only registered apprentices get apprentice rates; a new hire called an apprentice is a journeyman for pay. Price slower apprentice production from your own data.</p>`,
  src: "DIR Apprentice Rates, Landscape/Irrigation Laborer, 2026-2 (issued 08-22-2026, expires 07-31-2027**); Cal. Labor Code §1777.5."
},

{ h: "Certified payroll",
  lead: "Every week you pay workers on a public job you produce a CPR (certified payroll record), signed under penalty of perjury, and file it where the job requires, on time.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Job</th><th>Where to file</th></tr></thead>
<tbody>
<tr><td>Most public works</td><td>eCPR (electronic certified payroll) to DIR, at least monthly (within a month after the period ends); weekly is best practice. Each tier files its own.</td></tr>
<tr><td>Caltrans</td><td>Exempt from DIR eCPR; LCPtracker Pro (11-428704 specs 7-1.02K(3)). Resident engineer's office sets access.</td></tr>
<tr><td>City of San Diego</td><td>Weekly through the City's Labor Compliance Program system <strong>and</strong> DIR. City withholds payments for late or incomplete payroll. Prevailing Wage Unit 858-627-3200.</td></tr>
<tr><td>GC</td><td>Copy weekly per most subcontracts. Sending to the GC, a union or the City never replaces DIR.</td></tr>
</tbody></table></div>
<p><strong>DIR setup:</strong> get the DIR Project ID from the GC or agency (unregistered project: agency registers; publicworks@dir.ca.gov). Create a user, link to the company account, request to join the project (old PWCR and eCPR logins no longer work). Enter online or upload XML (extensible markup language) from payroll software; signed records can't be edited, so fix errors with an amended record, which takes precedence. No work in a period: Statement of Non-Performance.</p>
<div class="tablewrap"><table>
<thead><tr><th>One CPR line, 2026-2, fringe paid to plans</th><th>Entry</th></tr></thead>
<tbody>
<tr><td>Header</td><td>Contractor, license no., workers' comp policy no., project and DIR Project ID, payroll no., week ending</td></tr>
<tr><td>Worker</td><td>Name, address, last 4 of SSN (social security number); Landscape/Irrigation Laborer, journeyman</td></tr>
<tr><td>Hours Mon–Fri</td><td>8 · 8 · 10 · 8 · 6 = 40 (38 ST, 2 OT: Wednesday's 10 h)</td></tr>
<tr><td>Gross wages</td><td>38 × $47.57 + 2 × $71.355 = <strong>$1,950.37</strong></td></tr>
<tr><td>Fringe to plans</td><td>40 × $29.10 = <strong>$1,164.00</strong></td></tr>
<tr><td>Check</td><td>38 × $76.67 + 2 × $100.455 = $3,114.37 = wages + fringe</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Owner-operator:</strong> report name, address, SSN (or FEIN, federal employer identification number), classification, hourly rate, hours, and an estimate of labor pay, which must be at least prevailing. <strong>Mixed weeks:</strong> one time card line per job and craft; the CPR shows only public hours, but keep private time cards for annualization and weekly totals. Avoid splitting a day between public and private (both public works and general wage law apply to OT); never move hours on paper. Maria: Mon–Wed City park 24 × $76.67 = $1,840.08; Thu–Fri private 16 × $25.00 = $400.00; no OT.</p>`,
  deeper: `<p>LC §1776(a): “the name, address, social security number, work classification, straight time and overtime hours worked each day and week, and the actual per diem wages paid.” Public copies are redacted. Paper form A-1-131. Penalties: missing eCPR $100/day to $5,000 per project, starting 14 days after the deadline (§1771.4); records not produced within 10 days of a written request, $100 per calendar day per worker (§1776). Small exempt projects: no DIR upload, keep records 3 years and produce on request.</p>`,
  src: "Cal. Labor Code §§1771.4, 1776; DIR Public Works FAQ (eCPR, owner/operator, amended records); DIR form A-1-131; Caltrans 11-428704 Special Provisions 7-1.02K(3); City of San Diego K-24-1952 Attachment D §§1.3, 1.8."
},

{ h: "Registration, posting and records",
  lead: "Register before you bid, post rates and DIR's notice on site, and keep one compliance folder per job for at least 3 years (5 on City of San Diego jobs).",
  body: `<ul>
<li><strong>Registration:</strong> every contractor and sub must be DIR-registered to bid, be listed or work (<a href="#m2-1">Module 2</a>). $400 per fiscal year (July 1–June 30). Late registration $2,000 penalty, once in 12 months; missed June 30 renewal: 90-day grace with $400 penalty plus fee. Unregistered contractors can be removed by stop order.</li>
<li><strong>Posting:</strong> the determinations and DIR's job site notice at each site.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Record</th><th>Proves</th></tr></thead>
<tbody>
<tr><td>Determinations with Increase, Holiday, Scope, Travel PDFs and download date</td><td>Which rates applied</td></tr>
<tr><td>Daily signed time cards split by job, craft and group</td><td>Which rate each hour earned</td></tr>
<tr><td>CPRs, eCPR or LCPtracker receipts, Statements of Non-Performance</td><td>Timely filing</td></tr>
<tr><td>Plan invoices, remittance reports, annualization worksheet</td><td>Fringe credit</td></tr>
<tr><td>DAS 140/142 with proof of sending, apprentice agreements, CAC-2 Transaction IDs</td><td>Apprenticeship duty</td></tr>
<tr><td>Dated photo of the posting board</td><td>Posting</td></tr>
<tr><td>Subs' DIR registration printouts, CPRs, final affidavits</td><td>Upper-tier protection</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>K-24-1952 (EMTS Boat Dock Esplanade):</strong> “post a copy of the prevailing rate of per diem wages determination at each job site”; list every sub at any tier with DIR numbers before work and with every invoice; “retain all records, books, papers, and documents pertinent to the Contract for a period of not less than 5 years after Notice of Completion.” On exempt small projects, certified payroll kept “for at least three years following the completion of the Contract.”</p>`,
  watch: `<p>Assessments can come 18 months after completion. Time cards tossed at job end leave you no defense.</p>`,
  deeper: `<p>LC §1773.2 (agency posts the determination, usually passed to the contractor); §1771.4(a)(2) (job site notice); §1725.5 (registration); §1771.1 (unregistered contractors barred).</p>`,
  src: "DIR Public Works FAQ; Cal. Labor Code §§1725.5, 1741, 1771.1, 1771.4, 1773.2, 1776; City of San Diego K-24-1952-DBB-3-A, Attachment D §§1.1.1, 1.11, 1.12.2 and Equal Opportunity Contracting records requirements."
},

{ h: "Audits and penalties",
  lead: "Underpaying is never cheaper: back wages, per-worker-per-day penalties, and liquidated damages equal to the wages if unpaid after 60 days.",
  body: `<ol class="steps">
<li><div><b>Trigger</b>Worker complaint, union payroll comparison, agency compliance staff, or eCPR uploads stop.</div></li>
<li><div><b>Records request</b>Agency or DLSE (Division of Labor Standards Enforcement, the Labor Commissioner): 10 days to produce (§1776).</div></li>
<li><div><b>Audit</b>Payroll vs. determinations: craft, group, hours, OT, fringe, apprentice hours, training funds; worker interviews.</div></li>
<li class="hl"><div><b>Assessment or withholding</b>CWPA (Civil Wage and Penalty Assessment) within 18 months after notice of completion or acceptance, whichever is later; or an agency Notice of Withholding (§1771.6).</div></li>
<li><div><b>Response</b>Settlement meeting request within 30 days; formal review within 60; deposit the full amount with DIR within 60 days to avoid liquidated damages while contesting.</div></li>
<li><div><b>Worst cases</b>Public list of willful violators (3 years); debarment 1–3 years for intent to defraud, up to 3 years for two or more willful violations in 3 years, or for not producing payroll within 30 days of notice (§1777.1). Your surety gets a copy of the assessment.</div></li>
</ol>
<div class="tablewrap"><table>
<thead><tr><th>Violation</th><th>Penalty</th><th>LC</th></tr></thead>
<tbody>
<tr><td>Underpaying prevailing wage</td><td>Back wages + up to $200/worker/day; minimum $40 (waivable for a good faith mistake promptly fixed), $80 with a prior violation in 3 years, $120 if willful</td><td>§1775</td></tr>
<tr><td>Unpaid wages 60 days after assessment</td><td>Liquidated damages equal to them, plus interest</td><td>§1742.1</td></tr>
<tr><td>No public works OT</td><td>$25/worker/day</td><td>§1813</td></tr>
<tr><td>Records late after written request</td><td>$100/worker/day</td><td>§1776</td></tr>
<tr><td>eCPR not uploaded</td><td>$100/day, max $5,000/project</td><td>§1771.4</td></tr>
<tr><td>Knowing apprenticeship violation</td><td>Up to $100/day; $300 repeat</td><td>§1777.7</td></tr>
<tr><td>No DIR registration</td><td>Stop order; $2,000 late registration</td><td>§§1725.5, 1771.1</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Two “Tenders,” no Laborer, irrigation install 20 days</strong> (not establishment, so both owed Laborer): back wages ($76.67 − $30.19) × 8 × 20 × 2 = <strong>$14,873.60</strong>; §1775 $1,600–$8,000; liquidated damages $14,873.60; worst case <strong>$37,747.20</strong> to “save” $14,873.60. <strong>Four 10s at straight time</strong>, 3 laborers, 24 days: 2 × $23.785 × 24 × 3 = $3,425.04 + §1813 $1,800 = <strong>$5,225.04</strong>, plus possible §1775. <strong>Records 16 days late</strong>, 5 workers: 5 × 16 × $100 = <strong>$8,000</strong>. <strong>Tenders on a federal-aid job</strong> needing the federal laborer rate, 3 workers, 15 days: §1775 $1,800–$9,000 plus back wages, withheld from progress payments.</p>`,
  watch: `<p>Found a small underpayment (say $0.40/h)? Pay the difference now, file an amended CPR, keep proof: prompt correction can avoid the $40 minimum.</p>`,
  src: "Cal. Labor Code §§1741, 1742.1, 1771.4, 1771.6, 1775, 1776, 1777.1, 1777.7, 1813; DIR SD-102-X-14-2026-1 footnote d; DIR Public Works FAQ (registration penalties)."
},

{ h: "Federal-aid jobs: pay the higher",
  lead: "With federal money in a state or local job, both state and federal rules apply, and each classification gets the higher of the two rates.",
  body: `<ul>
<li>Davis-Bacon covers federal construction contracts over $2,000; decisions are on SAM.gov (System for Award Management) and bound into the bid documents.</li>
<li>Federal-aid jobs run by California agencies (most Caltrans highway work, some City jobs) follow both, including DIR registration and federal payroll rules. Jobs wholly under a federal agency (e.g. a military base) follow federal rules only.</li>
<li>Caltrans on 11-428704: “the Contractor and subcontractors must not pay less than the higher wage rate.”</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>11-428704 (advertised Aug 2, 2021)</th><th class="num">State (DIR)</th><th class="num">Federal</th><th class="num">Pay at least</th></tr></thead>
<tbody>
<tr><td>Landscape laborer (federal Laborer G1)</td><td class="num">$59.81</td><td class="num">$55.78</td><td class="num">$59.81</td></tr>
<tr><td>Irrigation laborer (federal Laborer G2)</td><td class="num">$59.81</td><td class="num">$56.24</td><td class="num">$59.81</td></tr>
<tr><td>Landscape/Irrigation Fitter</td><td class="num">$60.53</td><td class="num">$59.40</td><td class="num">$60.53</td></tr>
<tr><td>Skid steer (OE G3)</td><td class="num">$78.31*</td><td class="num">$76.52</td><td class="num">$78.31*</td></tr>
<tr><td><strong>Crew: fitter + 2 laborers + skid steer, per hour / 8-h day</strong></td><td class="num"><strong>$258.46 / $2,067.68</strong></td><td class="num">$248.40 / $1,987.20</td><td class="num"></td></tr>
</tbody></table></div>
<p>*Before the July 1, 2021 OE increase; real minimum higher. No tenders (not in the federal decision). Federal table alone: $80.48/day short before burden, about <strong>$8,048</strong> over 100 crew-days, plus penalties.</p>`,
  watch: `<p>Still low: the fitter determination expired Aug 31, 2021** and the job ran into 2022. Price every increase for the months worked. Module 15 lists the federal rates.</p>`,
  deeper: `<p>State: SD-102-X-14-2021-1 ($57.66 + $2.15 Aug 1, 2021); Fitter, San Diego subtrades 2021-1 ($35.30 + $8.91 + $13.30 + $1.89 + $1.13 = $60.53); OE SD-23-63-3-2021-1 G3 ($78.31). Federal: General Decision CA20210001 Mod. 12 (LABO0089-004, PLUM0345-001, ENGI0012-003).</p>`,
  src: "40 U.S.C. §3142; Caltrans 11-428704 Notice to Bidders and Addendum 1 federal wage rates; DIR 2021-1 determinations; U.S. DOL CA20210001 Mod. 12; DIR Public Works FAQ."
},

{ h: "Building prevailing wage into a bid",
  lead: "Rebuild every crew day from the determination; never add a percent to a residential crew rate. The same crew costs about 2.2× on public work.",
  body: `<ol class="steps">
<li><div><b>Advertisement date</b>Sets the determinations.</div></li>
<li><div><b>Task → craft and group</b>Planting, install, fitting, equipment, trucking, establishment, from the Scope PDFs.</div></li>
<li class="hl"><div><b>Rates by schedule</b>Total hourly rate in effect when each part of the work happens.</div></li>
<li><div><b>Allowed crew mix</b>Tender and tradesman ratios; apprentices at 1:5.</div></li>
<li><div><b>Burden on check wages</b>Payroll tax, comp, liability; ask your agent which pay comp is charged on (<a href="#m9-1">Module 9</a>).</div></li>
<li><div><b>OT, shift, travel, subsistence</b>Night closures, make-up days, distance.</div></li>
<li><div><b>Compliance cost</b>Weekly payroll office time, LCPtracker or eCPR setup, DAS forms, training remittances.</div></li>
</ol>
<div class="tablewrap"><table>
<thead><tr><th>Planting crew day (2 Laborers + 2 Tenders), 20% example burden on check wages</th><th class="num">Public</th><th class="num">Private (example)</th></tr></thead>
<tbody>
<tr><td>Laborers 2 × 8 h</td><td class="num">$1,226.72</td><td class="num">2 × $25 × 8 = $400.00</td></tr>
<tr><td>Tenders / helpers 2 × 8 h</td><td class="num">$483.04</td><td class="num">2 × $21 × 8 = $336.00</td></tr>
<tr><td>Burden on check wages ($1,112.64 / $736.00)</td><td class="num">$222.53</td><td class="num">$147.20</td></tr>
<tr><td><strong>Crew day</strong></td><td class="num"><strong>$1,932.29</strong></td><td class="num"><strong>$883.20</strong> (2.19×)</td></tr>
<tr><td>Labor per 1-gallon at 60/day (example)</td><td class="num">$32.20</td><td class="num">$14.72</td></tr>
<tr><td>Four Laborers, no tenders allowed</td><td class="num">$2,453.44 + $304.45 = $2,757.89</td><td class="num"></td></tr>
</tbody></table></div>`,
  watch: `<p>Price the craft from the scope, not the price: the Laborer scope includes “trench for irrigation manual or power,” so a walk-behind trencher doesn't automatically need an operator.</p>`,
  src: "DIR SD-102-X-14-2026-1; DIR Scope of Work Provisions ID 102-X-14."
},

{ h: "Worked examples · Mainline crew and a year of establishment",
  lead: "Price each person at the craft of the work; use tenders for establishment where the job allows.",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Mainline crew, 2026-2</th><th class="num">Total × hours</th><th class="num">Wages + benefits</th><th class="num">Check wages</th></tr></thead>
<tbody>
<tr><td>Operator, mini excavator under 21,000 lbs (OE G4)</td><td class="num">$106.27 × 8</td><td class="num">$850.16</td><td class="num">$519.68</td></tr>
<tr><td>2 Landscape/Irrigation Laborers</td><td class="num">$76.67 × 16</td><td class="num">$1,226.72</td><td class="num">$761.12</td></tr>
<tr><td>Teamster G2, 2-axle dump on site</td><td class="num">$73.28 × 4</td><td class="num">$293.12</td><td class="num">$174.84</td></tr>
<tr><td>Burden 20% of $1,455.64 (example)</td><td class="num"></td><td class="num">$291.13</td><td class="num"></td></tr>
<tr><td><strong>Crew day, labor only</strong></td><td class="num"></td><td class="num"><strong>$2,661.13</strong></td><td class="num"></td></tr>
</tbody></table></div>
<p>At 400 LF/day of 4" main (example): <strong>$6.65/LF</strong> labor, before machines, pipe and markup. Most of the premium is the operator.</p>
<div class="tablewrap"><table>
<thead><tr><th>52 weeks establishment, 2 workers × 1 day/week (832 h)</th><th class="num">2 Tenders</th><th class="num">2 Laborers</th></tr></thead>
<tbody>
<tr><td>Wages + benefits</td><td class="num">$25,118.08</td><td class="num">$63,789.44</td></tr>
<tr><td>Burden 20% of check wages ($18,279.04 / $39,578.24)</td><td class="num">$3,655.81</td><td class="num">$7,915.65</td></tr>
<tr><td><strong>Labor for the year</strong></td><td class="num"><strong>$28,773.89</strong></td><td class="num"><strong>$71,705.09</strong></td></tr>
</tbody></table></div>
<p>Difference <strong>$42,931.20</strong>. Tenders have no scheduled increases; laborers rise every Aug 1 (2027–2029), so price $80.32 or more after Aug 1, 2027.</p>`,
  src: "DIR SD-23-63-3-2026-2 (G4); SD-102-X-14-2026-1 footnote d and Predetermined Increase; SD-23-261-3-2026-1 (G2)."
},

{ h: "Subs: payment timing and flow-down",
  lead: "As a prime you inherit your subs' wage risk unless you flow down the Labor Code and police it; as a sub, expect the same from your GC.",
  body: `<ol class="steps">
<li><div><b>Verify DIR registration</b>Before listing or hiring any sub or trucker; print it to the bid folder.</div></li>
<li><div><b>Attach the Labor Code sections</b>Copies, not just numbers. K-24-1952 listed §§1771, 1771.1, 1775, 1776, 1777.5, 1810, 1813, 1815, 1860, 1861.</div></li>
<li class="hl"><div><b>Review subs' CPRs weekly</b>Against your rate card: craft, group, rates, OT, apprentices.</div></li>
<li><div><b>Act on problems</b>Withhold enough to cover an underpayment and notify in writing.</div></li>
<li><div><b>Final affidavit</b>Signed before final payment: prevailing wages and employer payments paid.</div></li>
</ol>
<ul>
<li><strong>Progress payments:</strong> pay subs within 7 days of receipt unless otherwise agreed in writing; late = 2% per month (Bus. &amp; Prof. Code §7108.5; Public Contract Code §10262 on state contracts like Caltrans).</li>
<li><strong>Retention:</strong> agency releases within 60 days after completion; prime pays subs' share within 7 days of receipt (Public Contract Code §7107). Good faith dispute: hold no more than 150% of the disputed amount.</li>
</ul>`,
  ex: `<p>As a sub, have ready with your quote and on the job: DIR number, weekly CPRs, DAS 140, final affidavit. On K-24-1952 the prime listed every sub “regardless of tier,” including hydroseed or trucking subs. GCs and the City hold your payment until payroll is in; billing and retention detail in <a href="#m16-1">Module 16</a>.</p>`,
  watch: `<p>LC §1775(b): the prime escapes a sub's penalties only if it did every step above and didn't know of the failure.</p>`,
  src: "Cal. Labor Code §§1771.1, 1775(b); Cal. Bus. &amp; Prof. Code §7108.5; Cal. Public Contract Code §§7107, 10262; City of San Diego K-24-1952 Attachment D §§1.6, 1.9, 1.11."
},

{ h: "Mistakes that cost money",
  lead: "The errors residential companies make on their first public jobs, and the right move for each.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Right move</th></tr></thead>
<tbody>
<tr><td>Residential crew rate, or “normal rates, it's small” on a GC's school job</td><td>Rebuild from the determination; state prevailing wage in the proposal</td></tr>
<tr><td>Printed rate used when it shows **</td><td>Add the increase for hours after the date; confirm the split with DIR</td></tr>
<tr><td>Wrong craft: fitter work at tender rate; machine hours at laborer rate</td><td>Split time cards by craft and group, or pay the higher all day</td></tr>
<tr><td>Too many tenders, or tenders on federal-aid jobs</td><td>Follow footnote d; federal decision governs helpers</td></tr>
<tr><td>Four 10s at straight time</td><td>Daily OT over 8 on public works</td></tr>
<tr><td>Regular Saturday paid at straight time</td><td>Only a weather make-up week qualifies (c); document the rain days</td></tr>
<tr><td>No DAS 140 on a short job</td><td>Required on any job under a $30,000+ prime contract</td></tr>
<tr><td>Late or missing CPRs; owner hours unreported</td><td>File weekly; owner hours go on the CPR</td></tr>
<tr><td>Benefits not annualized</td><td>Credit over all hours worked</td></tr>
<tr><td>Unregistered sub or trucker</td><td>Check DIR before listing</td></tr>
<tr><td>No time cards by craft</td><td>Daily, signed, by job, craft and group</td></tr>
</tbody></table></div>`,
  watch: `<p>Before the first public bid, confirm your payroll provider can run payroll by craft, produce CPRs and DIR eCPR XML, handle cash fringe and annualization, and upload to LCPtracker.</p>`
},

{ t: "scorer", id: "pwready", h: "Are we prevailing-wage ready?",
  lead: "Score the company before the first public bid. 2 = done, 1 = started, 0 = not yet. Saved in this browser.",
  items: [
    ["DIR registration", "Current for this fiscal year, number on file for bids"],
    ["Rate card habit", "We pull determinations, increases, holidays, scope and travel for every bid date"],
    ["Crew mix", "We know the tender, tradesman and apprentice ratios and price them"],
    ["Payroll provider", "Can run payroll by craft, produce CPRs and DIR XML files, and handle cash fringe"],
    ["Annualization", "Our CPA has figured our per-hour benefit credit on all hours worked"],
    ["Time cards", "Daily, signed, split by job, craft and group"],
    ["Apprenticeship", "We know the committees for our crafts and have DAS 140, DAS 142 and CAC-2 ready"],
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
  lead: "Module 11 terms. Full list: <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Public works", "Construction, alteration, installation, demolition, repair or maintenance paid in whole or part with public funds."],
    ["Prevailing wage", "Minimum hourly pay, wages plus benefits, set by DIR per craft and county."],
    ["General prevailing wage determination", "DIR's rates for one craft and area, issued Feb 22 and Aug 22."],
    ["Interim determination", "A mid-period determination for bids advertised on or after a stated date."],
    ["Bid advertisement date", "Date the job was advertised; fixes which determination applies."],
    ["Predetermined increase (**)", "A scheduled raise you must pay when it takes effect."],
    ["Basic hourly rate", "Taxable wage part of the rate; the only part overtime multiplies."],
    ["Employer payments (fringe)", "Health, pension, vacation, training and other amounts on top of basic."],
    ["Total hourly rate", "Basic plus employer payments: the minimum cost per hour."],
    ["Cash fringe", "Employer payments not put into a plan, paid as taxable wages."],
    ["Annualization", "Spreading benefit credit over all hours worked in the year."],
    ["Group", "Pay level within a craft set by machine or task (OE Group 3 = skid steer)."],
    ["Scope of work provisions", "DIR's advisory PDF of the work a craft covers."],
    ["Tender / Tradesman", "Helper classifications allowed only in set ratios with journeymen."],
    ["Apprentice", "Registered trainee paid apprentice rates by period."],
    ["DAS 140 / DAS 142", "Notice of contract award / request for apprentice dispatch."],
    ["CAC-2", "Online form sent with training fund payments to the California Apprenticeship Council."],
    ["Certified payroll record (CPR)", "Weekly payroll by worker and craft, signed under penalty of perjury."],
    ["eCPR", "Electronic certified payroll uploaded to DIR."],
    ["LCPtracker", "Certified payroll system Caltrans uses."],
    ["Statement of Non-Performance", "Filing stating no work in a payroll period."],
    ["CWPA", "Civil Wage and Penalty Assessment issued by the Labor Commissioner."],
    ["Debarment", "Ban from public works for a set period."],
    ["Flow-down", "Passing Labor Code requirements into subcontracts and policing them."],
    ["Davis-Bacon", "Federal prevailing wage law; on federal-aid jobs pay the higher of state and federal."]
  ]
},

{ t: "quiz", id: "m11", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "A City job's Notice Inviting Bids is dated Aug 28, 2026; bids open Sept 20, 2026. Which San Diego period applies?", a: ["2026-2, in effect on bid opening", "2026-1, in effect on the advertisement date", "2026-2, issued Aug 22"], c: 1, why: "Rates lock to the advertisement date. 2026-2 was issued Aug 22 but effective Sept 1." },
    { q: "Landscape/Irrigation Laborer: basic $47.57, total $76.67. Cost of 2 daily overtime hours?", a: ["$230.01", "$200.91", "$153.34"], c: 1, why: "($47.57 × 1.5 + $29.10) × 2 = $100.455 × 2. Multiplying the total by 1.5 overstates it; $153.34 is straight time." },
    { q: "A Laborer works a 13-hour weekday. Cost for the day?", a: ["$1,139.42", "$1,115.64", "$1,234.56"], c: 0, why: "Footnote b: 8 × $76.67 + 4 × $100.455 + 1 × $124.24. $1,115.64 prices all 5 OT hours at 1½×; $1,234.56 prices them all at 2×." },
    { q: "Crew of four on a City irrigation install (not establishment). Which mix is allowed?", a: ["2 Tenders + 2 Laborers, Tenders as 1st and 2nd", "Laborer, Laborer or Apprentice, then 2 Tenders", "4 Tenders"], c: 1, why: "Footnote d: 1st Laborer, 2nd Laborer or Apprentice, 3rd and 4th may be Tenders. All-tender crews are allowed only for plant establishment." },
    { q: "Health premium $7,800/yr; the worker logs 2,080 hours, 400 of them public. Credit per public hour?", a: ["$19.50", "$3.75", "$7.80"], c: 1, why: "Annualized over all hours: $7,800 ÷ 2,080. $19.50 is the prohibited public-hours-only method." },
    { q: "Journeymen work 700 hours on a craft, 60 of them overtime. Apprentice hours required?", a: ["140", "128", "120"], c: 1, why: "OT is excluded: (700 − 60) ÷ 5 = 128." },
    { q: "You need an apprentice on Monday. Latest day to send the DAS 142?", a: ["Friday before", "Wednesday before", "Monday morning"], c: 1, why: "At least 3 business days before: Wednesday, Thursday, Friday." },
    { q: "Federal-aid Caltrans job: state laborer $59.81, federal $55.78; federal decision has no tender. A helper doing laborer work is paid at least?", a: ["The state tender rate", "$55.78", "$59.81"], c: 2, why: "Helpers not in the federal decision aren't accepted, and you pay the higher of state and federal for the laborer classification." },
    { q: "Two workers paid as Tenders install irrigation 20 days with no Laborer. Worst-case exposure including back wages, maximum §1775 penalty and liquidated damages?", a: ["$14,873.60", "$22,873.60", "$37,747.20"], c: 2, why: "Back wages $14,873.60 + $8,000 penalty + liquidated damages $14,873.60." },
    { q: "Work runs 700 Laborer hours before Aug 1, 2027 and 500 after. Labor cost?", a: ["$92,004.00", "$93,829.00", "$96,384.00"], c: 1, why: "700 × $76.67 + 500 × $80.32. $92,004 ignores the increase." }
  ]
},

{ t: "practice", id: "m11", h: "Practice assignments",
  lead: "Build the tools you'll use on every public bid. Save them in the bid-ready folder.",
  items: [
    { h: "Download determinations and build a rate table", hrs: 1, d: "<p>From <a href=\"https://www.dir.ca.gov/oprl/DPreWageDetermination.htm\" target=\"_blank\" rel=\"noopener\">DIR</a>, save the current Landscape/Irrigation Laborer/Tender, Operating Engineer, Teamster and Laborer (Engineering Construction) determinations, the San Diego subtrades page (Fitter, Tradesman), and each craft's Increase, Holidays, Scope and Travel PDFs. Check Important notices. Build a spreadsheet by craft and group: basic, each employer payment, total, 1½×, 2×, training, next increase, tasks from Scope. Match DIR to the cent.</p>" },
    { h: "Price two crew days", hrs: 0.75, d: "<p>With your rate table and real burden, cost (1) a 4-person planting crew with the allowed tender mix and (2) a 4-person irrigation crew with a fitter and a skid steer operator. Compare to your residential crew day.</p>" },
    { h: "Redo the 11-428704 crew at the higher rates", hrs: 0.5, d: "<p>Open the federal rates for <a href=\"#lab-11-428704\">11-428704</a> and DIR's superseded 2021-1 San Diego determinations. For each worker in your Module 15 crew, use the higher rate and add the July 1, 2021 Operating Engineer increase.</p>" },
    { h: "Map the apprenticeship steps", hrs: 0.5, d: "<p>Download the <a href=\"https://www.dir.ca.gov/DAS/DASForm140.pdf\" target=\"_blank\" rel=\"noopener\">DAS 140</a> and <a href=\"https://www.dir.ca.gov/DAS/DASForm142.pdf\" target=\"_blank\" rel=\"noopener\">DAS 142</a>, find the San Diego committees for Landscape/Irrigation Laborer and Fitter, fill a DAS 140 for a $250,000 City park job, and write a dated checklist.</p>" },
    { h: "Set up payroll and annualization", hrs: 0.75, d: "<p>Ask your payroll provider whether it can run payroll by craft, produce CPRs and eCPR XML, handle cash fringe and annualization, and upload to LCPtracker, and at what cost. With your bookkeeper, compute last year's annualized benefit credit per hour per field worker, then the Laborer cash fringe and ST and OT paycheck rates.</p>" },
    { h: "Read real certified payroll", hrs: 0.5, d: "<p>In DIR's public <a href=\"https://services.dir.ca.gov/pw?id=ecpr_public_search\" target=\"_blank\" rel=\"noopener\">certified payroll search</a>, open a redacted payroll from a recent San Diego County park or landscape project. Note crafts, daily hours and rates, and compare to your rate table.</p>" }
  ]
},

{ h: "Module 11 summary",
  lead: "Price public labor from the state's rates by craft, date and ratio, and keep the paperwork that proves you paid it.",
  body: `<ul>
<li>Public money over $1,000 means prevailing wage for every worker at every tier; registration and eCPR above $25,000 ($15,000 maintenance).</li>
<li>Determinations in effect on the advertisement date, including interim ones, plus every ** increase during the work.</li>
<li>Craft and group by the work done that hour; follow footnote d and AV ratios; plant establishment may be all tenders.</li>
<li>OT multiplies basic only; daily OT over 8; read b and c for double time and Saturdays. Cash fringe is taxable; plan credit is annualized.</li>
<li>Contracts $30,000+: DAS 140, DAS 142, 1:5 straight-time ratio, training funds by the 15th.</li>
<li>CPRs weekly: DIR eCPR, LCPtracker on Caltrans, City system plus DIR on City jobs. Records 3 years, 5 on City jobs.</li>
<li>Penalties stack: back wages, up to $200/worker/day, liquidated damages, debarment. Flow down and police subs.</li>
<li>Federal-aid: higher of state and federal per classification.</li>
</ul>
<p><strong>Next: <a href="#m12-1">Module 12 · Pre-Bid Meetings, RFIs, Addenda and Communication</a></strong></p>`
}
]
});
