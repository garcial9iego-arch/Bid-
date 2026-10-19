(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 2, hours: 6.25, title: "Your License, Your Company and Getting Bid-Ready",
slides: [

{ t: "cover",
  h: "Your License, Your Company and Getting Bid-Ready",
  lead: "A bid from a company that isn't licensed, registered, insured and bondable for that job is thrown out before price is read; set it up once and keep it current.",
  objectives: [
    "Read any California license and know what B, C-27 and adjacent classes let you bid",
    "Decide existing company vs. new entity, knowing what restarts",
    "Read insurance requirements: occurrence vs. claims-made, limits, aggregates, endorsements",
    "Price bonds correctly and understand indemnity and capacity",
    "Register with DIR, certify SLBE/ELBE and prequalify with the City",
    "Meet the IIPP and heat rules GCs check",
    "Keep a bid-ready folder, capabilities statement and master prequal answers"
  ],
  time: [["Reading and slides", "1.75 h"], ["Practice assignments", "4.5 h"], ["Module total", "6.25 h"]],
  body: "<p>Most practice here produces real company documents. Fees and limits were checked in 2026; confirm at the cited source before relying on one.</p>"
},

{ h: "License classes and what they let you bid",
  lead: "The license belongs to the business entity, and the C-27 (not the B) is what lets the company take landscape and irrigation work.",
  body: `<ul>
<li><strong>CSLB</strong> (Contractors State License Board) licenses the entity (sole owner, partnership, corporation or LLC (limited liability company)). A <strong>qualifier</strong> is responsible for its work: an <strong>RMO</strong> (responsible managing officer, an owner/officer) or <strong>RME</strong> (responsible managing employee).</li>
<li>License required for any job of $1,000 or more in labor and materials, or needing a permit (B&amp;P (Business and Professions) Code §7048; $500 before 2025).</li>
<li><strong>B alone</strong> can't take a single-specialty contract (other than framing or carpentry) unless it holds that specialty or subs it out (§7057). So B can't bid a landscape-only subcontract; B + C-27 can do both.</li>
<li><strong>C-27</strong>: landscape systems for public and private property; grading and preparing land for landscape; irrigation; planting, soil prep, mulch; landscape walks, low garden walls, patios and landscape drainage.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Class</th><th>Shows up on a landscape job as</th></tr></thead>
<tbody>
<tr><td>C-10 Electrical</td><td>Controller and booster pump power, site lighting</td></tr>
<tr><td>C-8 Concrete</td><td>Mow curbs, bands, backflow pads</td></tr>
<tr><td>C-12 Earthwork and Paving</td><td>Mass grading, trench paving repair</td></tr>
<tr><td>C-34 Pipeline / C-36 Plumbing</td><td>Large recycled-water mains / building-side plumbing at the POC (point of connection)</td></tr>
<tr><td>C-53 Swimming Pool</td><td>Pools, some water features</td></tr>
<tr><td>A General Engineering</td><td>Required prime on many street and park jobs</td></tr>
</tbody></table></div>
<p><strong>Prime eligibility</strong> is set in each public notice (B&amp;P §7059; PCC (Public Contract Code) §3300). Caltrans 11-428704: “a Class A license or the following Class C license which constitutes a majority of the work: C-27” → C-27 prime. City K-24-1952: prime “must possess … A” → landscape subs only. Building jobs usually need a B prime.</p>`,
  ex: `<p>CSLB C-27 wording: a landscape contractor “constructs, maintains, repairs, installs, or subcontracts the development of landscape systems and facilities for public and private gardens and other areas…” and “prepares and grades plots and areas of land for the installation of any architectural, horticultural and decorative treatment or arrangement.”</p>`,
  watch: `<p>Large retaining walls, pools, fountains, site lighting electrical and major grading may need another class. Sub it to a licensed contractor or exclude it. Other scopes: <a href="#m17-1">Module 17</a>.</p>`,
  src: "Cal. B&P Code §§7048, 7055–7059, 7068; 16 CCR §832.27; PCC §3300; CSLB Licensing Classifications; Caltrans 11-428704 Notice to Bidders; City K-24-1952 Notice Inviting Bids §6."
},

{ h: "Look up and read a license",
  lead: "Check your own license monthly and every GC's and sub's before you rely on them; save a dated PDF.",
  body: `<p><a href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx" target="_blank" rel="noopener">CSLB · Check a Contractor License</a>: search by number (fastest), business name (first 10–15 letters, no leading “The,” no punctuation, last name first for personal names) or personnel name.</p>
<div class="tablewrap"><table>
<thead><tr><th>Section</th><th>Check</th></tr></thead>
<tbody>
<tr><td>Business information</td><td>Legal name matches bids, W-9 and DIR exactly; expiration far off</td></tr>
<tr><td>Status</td><td>“Current and active”; any suspension note is a red flag</td></tr>
<tr><td>Classifications</td><td>Holds the class the notice requires</td></tr>
<tr><td>Bonding</td><td>License bond current; LLCs also show the employee/worker bond</td></tr>
<tr><td>Workers' compensation</td><td>Policy current; a firm with employees can't be “exempt”</td></tr>
<tr><td>Personnel</td><td>Qualifier is who you think</td></tr>
<tr><td>Complaint disclosure</td><td>On GCs: slow-pay warning. On you: be ready to explain.</td></tr>
</tbody></table></div>`,
  ex: `<p>Your electrician shows workers' comp expired 3 weeks ago. They renew; you recheck before bid day. Unchecked, your listed sub could have been ineligible.</p>`,
  watch: `<p>An “active” license on the wrong entity is no license: a bid signed by a new LLC on the old corporation's license is an unlicensed bid. Hiring an unlicensed sub exposes your license, and the sub can't legally collect. On public work, “not licensed” is a substitution ground under PCC §4107.</p>`,
  src: "CSLB Check a Contractor License page and license detail page (checked 2026); Cal. Public Contract Code §4107."
},

{ h: "The new-entity question",
  lead: "A license can't transfer, so decide which entity bids before registering anything; a new entity restarts every record.",
  body: `<ul>
<li>A new LLC or corporation applies for its own license and usually gets a new number with no history; an existing qualifier may get an exam waiver. No license, no bids.</li>
<li><strong>RMO</strong> can qualify more than one firm only with at least 20% common ownership, and no more than three firms in a year. <strong>RME</strong> can qualify one active license and must work at least 32 hours a week (or 80% of operating hours).</li>
<li>A license whose qualifier leaves has 90 days to replace them or is suspended.</li>
<li>LLC licenses need a $100,000 employee/worker bond on top of the $25,000 contractor bond, and at least $1M liability insurance (more with more than five members). Corporations need only the $25,000 bond.</li>
</ul>
<ol class="steps">
<li><div><b>Keep commercial legally separate?</b>No → existing company. Yes → next.</div></li>
<li><div><b>Attorney and CPA (certified public accountant) confirm the liability or tax benefit?</b>No → get advice first.</div></li>
<li><div><b>Can the qualifier qualify both?</b>RMO with 20% common ownership yes; RME no → need a second qualifier.</div></li>
<li class="hl"><div><b>Can the company wait out the restarts?</b>License, DIR, insurance, bonding history, 12 months before SLBE/ELBE. No → existing company for now.</div></li>
<li><div><b>Surety's answer on the new entity's capacity, in writing.</b></div></li>
<li class="hl"><div><b>Decide and date it; then register.</b></div></li>
</ol>`,
  deeper: `<p>CSLB reissues an existing number only in limited cases; ask CSLB directly.</p>`,
  src: "CSLB: Change in Business Entity; CSLB: Licenses for LLCs; Cal. B&P Code §§7068.1, 7071.6, 7071.6.5, 7071.19."
},

{ h: "What restarts with a new entity",
  lead: "The people keep their skills; the company starts over on license, registrations, bonding and certification clocks.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>New entity</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>CSLB license</td><td>New application and number</td><td>No bids until issued</td></tr>
<tr><td>Insurance</td><td>New policies</td><td>LLC needs at least $1M liability for the license</td></tr>
<tr><td>DIR (Department of Industrial Relations) registration</td><td>New registration and fee</td><td>Required before any public bid or listing</td></tr>
<tr><td>Bonding</td><td>New surety file</td><td>Little financial history: smaller limits, personal indemnity</td></tr>
<tr><td>SLBE/ELBE</td><td>New application</td><td>12 consecutive months in operation first</td></tr>
<tr><td>City prequalification</td><td>New application</td><td>Financial statement and bond letter for the new entity</td></tr>
<tr><td>EMR (experience modification rate)</td><td>Ask your agent</td><td>Carryover depends on ownership; get it in writing</td></tr>
<tr><td>References</td><td>Mixed</td><td>Forms often ask for the company's own completed jobs</td></tr>
</tbody></table></div>`,
  ex: `<p>An LLC formed in January can't certify SLBE/ELBE before the next January. If City small-business status matters sooner, that favors the existing company.</p>`,
  watch: `<p>Registering DIR, PlanetBids or SLBE/ELBE under the wrong entity means redoing all of it, and bids in the wrong name can be rejected.</p>`,
  src: "City of San Diego SLBE Program Requirements; CSLB Licenses for LLCs; DIR Contractor Registration; City Prequalification Program page."
},

{ h: "Insurance requirements and the words on a COI",
  lead: "Compare every contract's limits and endorsements against your COI (certificate of insurance) before bid day, and price any gap.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Coverage</th><th>Typical requirement</th></tr></thead>
<tbody>
<tr><td>GL (general liability)</td><td>$1M per occurrence / $2M aggregate</td></tr>
<tr><td>Auto</td><td>$1M CSL (combined single limit: injury and damage together)</td></tr>
<tr><td>Workers' comp</td><td>Statutory + $1M employer's liability</td></tr>
<tr><td>Umbrella / excess</td><td>$1M–$5M on larger jobs; must “follow form”</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Term</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Named insured</td><td>Policy owner; must match your legal name</td></tr>
<tr><td>AI (additional insured)</td><td>GC, owner or City covered by your policy for your work</td></tr>
<tr><td>Certificate holder</td><td>Who receives the COI; not insured by being named</td></tr>
<tr><td>Per occurrence / general aggregate</td><td>Cap per event / cap for all claims in the policy year</td></tr>
<tr><td>Products-completed operations aggregate</td><td>Yearly cap for claims from finished work</td></tr>
<tr><td>Deductible / SIR (self-insured retention)</td><td>The part you pay yourself</td></tr>
<tr><td>Statutory</td><td>As required by state law (workers' comp)</td></tr>
</tbody></table></div>`,
  watch: `<p>The ACORD 25 certificate is only a summary; GCs usually want the endorsement pages themselves.</p>`,
  deeper: `<p>On wrap-ups, OCIP (owner-controlled insurance program) or CCIP (contractor-controlled), the owner or GC provides some coverage and you may have to deduct your own insurance cost from your bid. The bid documents say how.</p>`
},

{ h: "Occurrence vs. claims-made",
  lead: "Contractor GL should be occurrence form: it pays for damage that happened in the policy year whenever the claim arrives.",
  body: `<div class="twocol">
<div><h3>Occurrence</h3><ul>
<li>Pays for injury or damage that happens during the policy period</li>
<li>Claim can come years later, after you change carriers</li>
<li>Standard for contractor GL; agencies often require it</li>
</ul></div>
<div><h3>Claims-made</h3><ul>
<li>Pays claims made while active, for events after the retroactive date</li>
<li>Lapse or switch: later claims uncovered unless you buy tail (extended reporting)</li>
<li>Normal for designers' professional liability; risky for contractor GL</li>
</ul></div>
</div>`,
  exLabel: "Made-up example",
  ex: `<p>2026 install; a glued fitting fails December 2027 and floods a basement; claim arrives March 2028; you changed carriers Jan 1, 2028. <strong>Occurrence 2027 policy:</strong> pays. <strong>Claims-made 2027 policy:</strong> doesn't pay without tail, and the new 2028 occurrence policy doesn't either (damage predates it). You pay.</p>`,
  watch: `<p>Real: K-24-1952 requires GL “written on the current version of the ISO Occurrence form CG 00 01 07 98 or an equivalent form.” A claims-made GL fails it.</p>`,
  src: "City of San Diego K-24-1952 Supplementary Special Provisions §5-4.2.1."
},

{ h: "Aggregates and endorsements",
  lead: "Every claim on every job drains one yearly aggregate unless a per-project aggregate gives each job its own.",
  exLabel: "$1M per occurrence / $2M aggregate, made-up claims",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Claim</th><th class="num">Amount</th><th class="num">Policy pays</th><th class="num">Aggregate left</th></tr></thead>
<tbody>
<tr><td>#1 Job A, trencher hits gas line</td><td class="num">$800,000</td><td class="num">$800,000</td><td class="num">$1,200,000</td></tr>
<tr><td>#2 Job B, tree falls on car</td><td class="num">$1,300,000</td><td class="num">$1,000,000 (occurrence cap)</td><td class="num">$200,000</td></tr>
<tr><td>#3 Job C, slip and fall</td><td class="num">$500,000</td><td class="num">$200,000</td><td class="num">$0</td></tr>
</tbody></table></div>
<p>You pay $300,000 on #2 and $300,000 on #3 unless a follow-form umbrella responds.</p>`,
  body: `<div class="tablewrap"><table>
<thead><tr><th>Endorsement (common ISO (Insurance Services Office) form)</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>AI, ongoing operations (CG 20 10)</td><td>Your policy defends GC/owner for claims during your work</td></tr>
<tr><td>AI, completed operations (CG 20 37)</td><td>Same, after completion (tree you planted falls in year 2)</td></tr>
<tr><td>Primary and non-contributory</td><td>Your policy pays first, without sharing with the GC's</td></tr>
<tr><td>Waiver of subrogation (CG 24 04 on GL)</td><td>Your insurer can't sue GC/owner to recover</td></tr>
<tr><td>Per-project aggregate (CG 25 03)</td><td>Each job gets its own aggregate</td></tr>
<tr><td>Notice of cancellation</td><td>Holder warned first; K-24-1952: 30 days (10 for non-payment)</td></tr>
</tbody></table></div>`,
  watch: `<p>Blanket endorsements (anyone your contract requires) save weeks over scheduled names. Ask which you have.</p>`,
  src: "City of San Diego K-24-1952 SSP §§5-4.1, 5-4.5.1.1, 5-4.5.1.2, 5-4.5.2.1, 5-4.9 (excess follows form of primary)."
},

{ h: "Real requirements: City K-24-1952",
  lead: "A $1.6 million City park job required $5M per occurrence GL and 10 years of completed-operations coverage, all inside the bid price.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Coverage</th><th>Required</th></tr></thead>
<tbody>
<tr><td>GL, occurrence form</td><td>$5M each occurrence · $10M general aggregate · $10M products/completed operations · $5M personal injury</td></tr>
<tr><td>Auto (“any auto”)</td><td>$1M CSL per accident</td></tr>
<tr><td>Workers' comp and employer's liability</td><td>Statutory + $1M per accident, bodily injury or disease</td></tr>
<tr><td>Endorsements</td><td>AI (City and officials), primary and non-contributory, waiver of subrogation</td></tr>
<tr><td>Other</td><td>Defense costs outside limits · same or equivalent coverage 10 years after completion · cost included in bid · no work until City approves insurance</td></tr>
</tbody></table></div>`,
  ex: `<p>Meeting $5M per occurrence: $1M/$2M GL plus a $4M follow-form umbrella. Get the annual premium and per-project aggregate availability from your agent before bid day; a needed premium increase goes in your price.</p>`,
  src: "City of San Diego K-24-1952 (bid due Dec. 6, 2023), Supplementary Special Provisions §§5-4.1 through 5-4.9; Notice Inviting Bids §3 (estimated construction cost $1,600,000)."
},

{ h: "Bonds and what they cost",
  lead: "Add only the premium to your bid; the 10% bid bond is a penal sum, not a cost.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Bond</th><th>Guarantees</th><th>Usual amount</th></tr></thead>
<tbody>
<tr><td>Bid</td><td>You sign at your price if you win</td><td>10% of bid</td></tr>
<tr><td>Performance</td><td>You finish the work</td><td>100% of contract</td></tr>
<tr><td>Payment</td><td>You pay workers, subs, suppliers</td><td>100% of contract</td></tr>
<tr><td>Maintenance/warranty</td><td>You fix warranty problems</td><td>Varies</td></tr>
</tbody></table></div>
<p>California public works over $25,000 require a payment bond (Civil Code §9550); most agencies add performance. Small-contractor premiums run about 1%–3%; bid bonds are often free or cheap once you have a surety. Premium is on the final contract, so change orders raise it. K-24-1952: bid security of at least 10% “for bids $250,000 and above” (bond, cashier's or certified check).</p>`,
  exLabel: "Example sliding scale (yours will differ): 2.5% first $100K · 1.5% next $400K · 1.0% next $2M",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Job</th><th>Math</th><th class="num">Premium</th></tr></thead>
<tbody>
<tr><td>$480,000 City park irrigation, prime</td><td>100,000 × 2.5% + 380,000 × 1.5%</td><td class="num">$8,200 (1.7%)</td></tr>
<tr><td>Bid bond on it</td><td>Penal sum 10% = $48,000; cost only what the surety charges</td><td class="num">≈ $0</td></tr>
<tr><td>GC asks you to bond a $150,000 subcontract</td><td>100,000 × 2.5% + 50,000 × 1.5%</td><td class="num">$3,250: include, or “add $3,250 if bonds required”</td></tr>
</tbody></table></div>`,
  src: "Cal. Civil Code §9550; City of San Diego K-24-1952 Instructions to Bidders §19.1."
},

{ h: "Indemnity and bonding capacity",
  lead: "A bond is credit, not insurance: under the GIA (general indemnity agreement) the company and usually its owners repay every claim, and capacity sets your largest job.",
  body: `<ol class="steps">
<li><div><b>Claim</b>Unpaid supplier on the payment bond, or owner alleges default.</div></li>
<li><div><b>Surety asks you to resolve it</b>Settle valid claims fast.</div></li>
<li class="hl"><div><b>Surety pays or completes</b>If you can't or won't.</div></li>
<li><div><b>Surety bills you</b>Company and signers (owners, sometimes spouses) repay all plus costs.</div></li>
<li><div><b>Capacity shrinks</b>Or the surety drops you.</div></li>
</ol>
<p><strong>Capacity:</strong> single-job limit and aggregate limit, set from CPA-prepared construction financials, working capital, net worth, owners' personal credit, largest jobs completed, years in business, backlog and job history.</p>`,
  ex: `<p>Made-up: you stop paying a nursery $42,000 on a bonded job. The surety pays it plus $6,000 legal costs and demands $48,000 from the company and the owners who signed the GIA.</p>`,
  watch: `<p>Use a construction-specialist surety agent and read the GIA with an attorney. First-call questions: capacity today, financials needed, what raises it in a year, rate, bid bond turnaround, a bond letter addressed to the City for prequalification.</p>`
},

{ h: "DIR registration",
  lead: "No DIR registration, no public bid and no sub listing; renew every June by card.",
  body: `<ul>
<li><strong>Fee:</strong> $400 per fiscal year, or $800 / $1,200 for two / three years (2026). Year runs July 1–June 30.</li>
<li><strong>Requires:</strong> workers' comp for any employees, CSLB license where required, no unpaid wage or penalty assessments, not debarred, only registered subs.</li>
<li><strong>Exemption:</strong> not required on public works of $25,000 or less (construction, alteration, installation, demolition, repair) or $15,000 or less (maintenance), measured on the whole prime contract. Prevailing wage still applies over $1,000.</li>
</ul>
<ol class="steps">
<li><div><b>Have ready</b>Exact legal name, CSLB number, FEIN (federal employer identification number), address, owners and officers, workers' comp carrier and policy, credit card.</div></li>
<li><div><b>Go to <a href="https://services.dir.ca.gov/pw" target="_blank" rel="noopener">services.dir.ca.gov/pw</a></b>System replaced PWCR (Public Works Contractor Registration) in 2024; old logins don't work.</div></li>
<li><div><b>Create user account, then create or link the contractor</b>Enter any old PWCR number so history carries.</div></li>
<li class="hl"><div><b>Register or renew, pay by card</b>Card can process within 24 hours; other payment up to 8 weeks.</div></li>
<li><div><b>Save the number and proof; calendar June 1 renewal</b></div></li>
</ol>
<div class="tablewrap"><table>
<thead><tr><th>Violation (2026)</th><th>Penalty</th></tr></thead>
<tbody>
<tr><td>First registration after bidding, award or work on public works in the past 12 months</td><td>$2,000</td></tr>
<tr><td>Late renewal July 1–Sept 30, inadvertent / not inadvertent</td><td>$400 / $2,000</td></tr>
<tr><td>Renewal after Sept 30 or reactivation after unregistered public work</td><td>$2,000</td></tr>
<tr><td>Two violations in 12 months</td><td>Up to 12 months' disqualification</td></tr>
</tbody></table></div>`,
  watch: `<p>Search and screenshot (dated) each sub's DIR registration before listing them. The same system later handles project joins and eCPR (electronic certified payroll records): <a href="#m11-1">Module 11</a>.</p>`,
  src: "DIR Public Works Contractor Registration page, Consequences of Failing to Register, Public Works FAQ and Support Center guides (dir.ca.gov, April 2026); Cal. Labor Code §§1725.5, 1771, 1771.1."
},

{ h: "SLBE/ELBE: program and eligibility",
  lead: "City SLBE (Small Local Business Enterprise) and ELBE (Emerging Local Business Enterprise) status opens restricted jobs and makes you valuable to primes chasing participation goals.",
  body: `<ul>
<li><strong>Revenue limits:</strong> 3-year average gross revenue; 2026 City bid documents list $6.5M SLBE and $3.5M ELBE for specialty construction. Older copies show lower limits; confirm with EOC (Equal Opportunity Contracting).</li>
<li>Independent, for-profit; not a subsidiary or franchise.</li>
<li>Principal place of business in San Diego County, with at least half of customers or sales dollars through it; keep it there while certified.</li>
<li>At least 25% of employees live in the City or County; officers, managers or owners live in the County.</li>
<li>12 consecutive months in operation.</li>
<li>Active (not pending) City of San Diego business tax certificate; other cities' don't count.</li>
<li>Owned by CSLB-licensed professionals where a license applies; good standing with the City and Secretary of State.</li>
</ul>`,
  ex: `<p>Real: K-24-1952 ($1.6M estimate) required <strong>9.4% SLBE + 10.6% ELBE = 20.0%</strong>. A prime short of 20% had to file good faith effort documents by 5 PM three working days after opening or risk non-responsiveness.</p>`,
  watch: `<p>An owner's interest in another business brings that business's returns into the file, and its revenue can count toward the average. Disclose it up front.</p>`,
  deeper: `<p>Other certifications: California SB (Small Business, Department of General Services) for state contracts; DBE (Disadvantaged Business Enterprise, California Unified Certification Program) for federally funded transportation work, 51% owned by socially and economically disadvantaged individuals; DVBE (Disabled Veteran Business Enterprise). All attach to the entity.</p>`,
  src: "City of San Diego EOC: SLBE Program page and Program Requirements (criteria A–J); City bidding documents (2026); K-24-1952 Notice Inviting Bids §7."
},

{ h: "Applying for SLBE/ELBE",
  lead: "The application is online and timed; have every document scanned before you start.",
  body: `<ol class="steps">
<li><div><b>Register as a City vendor on PlanetBids</b>The application runs there.</div></li>
<li><div><b>Read the City's guidance</b><a href="https://www.sandiego.gov/eoc/programs/slbe" target="_blank" rel="noopener">SLBE Program page</a>: access instructions, application tips, checklist.</div></li>
<li><div><b>Start; email yourself the application ID</b>Form is timed. Click “Add” after each entry. Owners total 100%. At least one 6-digit NAICS (North American Industry Classification System) code.</div></li>
<li class="hl"><div><b>Sign the page-4 affidavit, upload all on page 5 (affidavit last)</b>Done only at page 6 of 6, “Thank you for submitting your application!” No email follows: screenshot it.</div></li>
<li><div><b>Questions</b>(619) 236-6000, ContactEOC@sandiego.gov.</div></li>
</ol>
<div class="tablewrap"><table>
<thead><tr><th>Checklist</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Lease (cover and signature pages) + recent rent receipt, or property tax bill/deed</td><td>Local place of business</td></tr>
<tr><td>City business tax certificate</td><td>Active; receipt not accepted</td></tr>
<tr><td>Owner resumes; CSLB number and class; EIN letter</td><td></td></tr>
<tr><td>Recent payroll for all offices with employee addresses (or IRS 941); latest DE-9</td><td>Proves local workforce</td></tr>
<tr><td>Corporate license with Secretary of State date</td><td>Corporations and LLCs</td></tr>
<tr><td>3 local recent contracts, quotes or proposals</td><td>Need not be public</td></tr>
<tr><td>Existing certifications (DBE, DVBE, MBE, WBE, Micro)</td><td>If any</td></tr>
<tr><td>ID per owner; 3 years' federal returns (1040 with C and SE, 1065 with K-1s, or 1120); signed 4506-T</td><td>Plus returns for any other business an owner or spouse has an interest in</td></tr>
</tbody></table></div>`,
  deeper: `<p>A DGS Micro-Business or DVBE certification satisfies the income requirement (no returns). No returns filed yet: a profit and loss statement is accepted. MBE / WBE: Minority / Women Business Enterprise.</p>`,
  src: "City of San Diego SLBE Program page (How to Apply), “Tips for Completing the Online Application” (Rev 04-27-20), New Application Checklist."
},

{ h: "What certification gets you on City work",
  lead: "City public works under $1M are restricted to certified firms, and $1M–$1.5M jobs give certified bidders a 5% evaluation discount.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>City public works contract size</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>$1,500,000 and up</td><td>Mandatory SLBE/ELBE subcontracting goals per job; certified prime can meet it by self-performing at least 51%; otherwise good faith effort</td></tr>
<tr><td>Over $1,000,000 to under $1,500,000</td><td>5% bid discount for certified bidders (max $50,000 above low) and/or goals; ties go to certified firms</td></tr>
<tr><td>Over $500,000 to $1,000,000</td><td>Restricted to SLBE/ELBE (opened to all if none available)</td></tr>
<tr><td>$500,000 and below</td><td>Restricted to ELBE (then SLBE, then all)</td></tr>
</tbody></table></div>`,
  exLabel: "5% discount, example numbers",
  ex: `<p>$1.2M job. Uncertified X: $1,200,000. SLBE Y: $1,240,000. Evaluated: $1,240,000 × 0.95 = $1,178,000 < $1,200,000, and Y is only $40,000 above X (under $50,000), so Y is low. Y is paid $1,240,000.</p>`,
  watch: `<p>Restricted jobs under $1M are the best first prime jobs for a small landscape company, but only if certified. Certify as soon as you qualify.</p>`,
  src: "City of San Diego ELBE/SLBE Program Description Chart, Public Works Construction (Rev 6.26.23); SLBE Program page."
},

{ h: "City prequalification and other registrations",
  lead: "To bid City work as prime you need prequalification at least 10 City working days before opening; subs don't.",
  body: `<ul>
<li><strong>Rated on:</strong> financial strength, technical expertise, experience, past performance, legal compliance.</li>
<li><strong>Submit online:</strong> independent accountant's compiled, reviewed or audited statement; current bond letter addressed to the City of San Diego; three client references.</li>
<li><strong>Result:</strong> MBC (maximum bidding capacity), valid two years. Your bid including alternates can't exceed it.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Financials submitted</th><th>MBC</th></tr></thead>
<tbody>
<tr><td>Bond letter + compiled (SLBE/ELBE only)</td><td>Lesser of single-project bond limit or $1M</td></tr>
<tr><td>Bond letter + reviewed</td><td>Lesser of single-project bond limit or $30M</td></tr>
<tr><td>Bond letter + audited</td><td>Single-project bond limit</td></tr>
</tbody></table></div>
<p><strong>Other accounts, all in the exact CSLB legal name:</strong> City business tax certificate; PlanetBids vendor account per agency; County BuyNet; Cal eProcure (state); Bid Express with digital ID for Caltrans (<a href="#m14-1">Module 14</a>); GC platforms such as BuildingConnected and PlanHub (<a href="#m3-1">Module 3</a>); SAM.gov (System for Award Management) only for federal work under Davis-Bacon wages.</p>`,
  watch: `<p>SLBE firms that have never completed a public works prime contract must finish City training on project administration before bidding. Staff won't confirm prequal status by phone; check your vendor profile.</p>`,
  deeper: `<p>Program authority: San Diego Municipal Code §22.3004(a). Exceeding MBC risks a non-responsive finding (K-24-1952 Instructions to Bidders §1.1).</p>`,
  src: "City of San Diego Prequalification Program page (checked 2026); K-24-1952 Instructions to Bidders §1; City Vendor Registration; County BuyNet; Caltrans 11-428704 Notice to Bidders (Bid Express)."
},

{ h: "Safety programs GCs check",
  lead: "A written IIPP (Injury and Illness Prevention Program), a Code of Safe Practices, tailgate records and an EMR of 1.0 or lower are what GCs ask for.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>IIPP element (8 CCR §3203)</th><th>Must cover</th></tr></thead>
<tbody>
<tr><td>1. Responsibility</td><td>Named person with authority</td></tr>
<tr><td>2. Compliance</td><td>Training, recognition, discipline</td></tr>
<tr><td>3. Communication</td><td>Understandable to all; hazard reporting without fear</td></tr>
<tr><td>4. Hazard assessment</td><td>Scheduled site and equipment inspections, and on anything new</td></tr>
<tr><td>5. Investigation</td><td>Every injury or illness</td></tr>
<tr><td>6. Correction</td><td>How and how fast</td></tr>
<tr><td>7. Training</td><td>At start, new hires, new tasks, new hazards; supervisors on crew hazards</td></tr>
<tr><td>8. Access</td><td>Employees can see it</td></tr>
</tbody></table></div>
<ul>
<li>Keep inspection and training records (who, when, what, trainer) at least one year.</li>
<li>Construction also needs a posted <strong>Code of Safe Practices</strong> and tailgate meetings at least every 10 working days, with sign-in sheets (8 CCR §1509).</li>
<li><strong>EMR:</strong> 1.0 average, lower better; get the letter from your carrier. Cal/OSHA (Division of Occupational Safety and Health) Form 300 logs if required. OSHA 10 for workers and 30 for supervisors is common on commercial sites.</li>
</ul>`,
  deeper: `<p>A new company without claims history may lack its own EMR; ask your agent how it will be shown.</p>`,
  src: "8 CCR §§1509(a)–(e), 3203(a)–(b)."
},

{ h: "Heat illness rules for landscape crews",
  lead: "Landscaping is a listed industry under 8 CCR §3395, so the 95°F high-heat procedures apply and cost production you must price.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rule</th><th>Requirement</th></tr></thead>
<tbody>
<tr><td>Water</td><td>Fresh, cool, free, close; at least 1 quart per worker per hour for the shift, or a refill plan</td></tr>
<tr><td>Shade</td><td>Over 80°F: up at all times, room for everyone on break. At or below 80°F: on request.</td></tr>
<tr><td>Cool-down rest</td><td>On request, at least 5 minutes, monitored, not back until symptoms clear</td></tr>
<tr><td>95°F and up</td><td>Supervisor communication, observation, drink reminders, 10-minute cool-down every 2 hours</td></tr>
<tr><td>Acclimatization</td><td>Close watch on new workers for 14 days in high heat, everyone in heat waves</td></tr>
<tr><td>Emergency plan</td><td>How to reach EMS and direct them to the site</td></tr>
<tr><td>Training and written plan</td><td>Before heat exposure; plan in English and the crew's language, on site (can sit in the IIPP)</td></tr>
</tbody></table></div>`,
  watch: `<p>Summer freeway shoulder and median work in East and South County often exceeds 95°F. Count the 10 minutes per 2 hours as lost production in labor rates (<a href="#m9-1">Module 9</a>).</p>`,
  src: "8 CCR §3395 (Maria Isabel Vasquez Jimenez heat illness standard), subsections (a)(2), (c), (d), (e), (g), (i)."
},

{ h: "The bid-ready folder",
  lead: "One folder, fixed file names and an expiration index, checked on the first of every month.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>File</th><th>Source</th><th>Update</th></tr></thead>
<tbody>
<tr><td>01_CSLB_License_2026-10.pdf</td><td>CSLB lookup</td><td>Monthly</td></tr>
<tr><td>02_COI_Sample / 03_Endorsements (AI, primary/non-contributory, waiver)</td><td>Insurance agent</td><td>Each renewal</td></tr>
<tr><td>04_W9</td><td>IRS form, signed</td><td>On name/address change</td></tr>
<tr><td>05_DIR_Registration_FY2026-27</td><td>DIR</td><td>Every June</td></tr>
<tr><td>06_SD_BusinessTax / 07_SLBE_Cert</td><td>City Treasurer / EOC</td><td>Yearly / at renewal</td></tr>
<tr><td>08_Bond_Letter</td><td>Surety agent</td><td>Yearly or on request</td></tr>
<tr><td>09_Capabilities / 10_Project_List (size, GC or owner, reference)</td><td>You</td><td>6 months / each finished job</td></tr>
<tr><td>11_Equipment_List / 12_Resumes</td><td>You</td><td>Yearly</td></tr>
<tr><td>13_IIPP_HeatPlan_CSP / 14_EMR_Letter</td><td>You / carrier</td><td>Yearly</td></tr>
<tr><td>15_Prequal_Master / 16_Proposal_Template</td><td>You (<a href="#m13-1">Module 13</a>)</td><td>After each form / lesson</td></tr>
</tbody></table></div>`,
  watch: `<p>Index each file with expiry and owner; fix anything within 30 days of expiring. An expired COI sent to a GC looks careless. Send financial statements only when required.</p>`
},

{ h: "Capabilities statement and master prequal answers",
  lead: "Write the one-page statement and every prequal answer once, truthfully, then paste from them.",
  exLabel: "Made-up company, layout only",
  ex: `<div class="tablewrap"><table><tbody>
<tr><td><strong>Header</strong></td><td>EXAMPLE LANDSCAPE CO., INC. · CSLB #000000 (B, C-27) · DIR #0000000000 · SLBE (pending) · Est. 2008</td></tr>
<tr><td><strong>Services</strong></td><td>Irrigation (spray, rotor, drip, two-wire, backflow, recycled water) · planting and soil prep · trees to 48″ box · mulch, DG (decomposed granite), boulders · establishment and maintenance · water-efficient retrofits</td></tr>
<tr><td><strong>Types / size / area</strong></td><td>Retail, office, multifamily, medical, schools, parks, HOA renovations · $25,000–$500,000 · San Diego County</td></tr>
<tr><td><strong>Crews and equipment</strong></td><td>4 install, 2 maintenance · mini excavator, 2 trenchers, skid steer, 6 trucks</td></tr>
<tr><td><strong>Projects</strong></td><td>3–5: name, city, year, $, role, photo</td></tr>
<tr><td><strong>Insurance and bonding</strong></td><td>GL $1M/$2M occurrence, umbrella $4M, blanket AI / primary / waiver · single job $750,000, aggregate $1.5M, surety [name]</td></tr>
<tr><td><strong>Safety</strong></td><td>IIPP and heat plan · EMR 2024 0.92, 2025 0.88, 2026 0.85 · OSHA 30 foremen</td></tr>
<tr><td><strong>Prequal-only lines</strong></td><td>Revenue 2023 $2.1M · 2024 $2.4M · 2025 $2.6M (CPA-reviewed) · largest job $412,000 (2025, reference) · backlog $640,000 on 5 jobs · Form 300 recordables per year · lawsuits, defaults, terminations: none in 5 years · self-performed: irrigation, planting, soil, mulch, establishment; subbed: electrical, boring, traffic control, concrete</td></tr>
<tr><td><strong>Contact</strong></td><td>Estimator, phone, bids@company.com</td></tr>
</tbody></table></div>`,
  watch: `<p>List only what is true today: “SLBE pending” after applying, never “certified” before. Disclose and briefly explain any lawsuit, default or termination; omission found later is worse and can disqualify you from that agency.</p>`,
  deeper: `<p>School districts and other agencies often require formal, point-scored prequalification for larger projects, with deadlines well before bid date.</p>`
},

{ h: "Mistakes that cost money",
  lead: "Each of these has stalled new commercial divisions; each has a one-line fix.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Cost</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Registering before choosing the entity</td><td>Redo DIR, PlanetBids, SLBE, insurance</td><td>Decision tree first</td></tr>
<tr><td>Bid name ≠ license name</td><td>Rejection, payment delays</td><td>Copy the CSLB legal name everywhere</td></tr>
<tr><td>DIR lapses July 1</td><td>$400–$2,000; can't bid or be listed</td><td>Renew early June by card</td></tr>
<tr><td>Assuming insurance fits</td><td>Can't sign the job you won</td><td>Compare requirements to COI on bid day</td></tr>
<tr><td>Adding the 10% penal sum</td><td>Priced out</td><td>Add only the premium</td></tr>
<tr><td>Safety program in a drawer</td><td>Citations; GCs drop you after an incident</td><td>Tailgates every 10 working days, heat plan on site, records 1 year</td></tr>
<tr><td>Prequal answered from memory</td><td>Hours lost, inconsistent answers</td><td>Master answers file</td></tr>
<tr><td>Late City prequalification</td><td>Can't prime that job</td><td>Complete application 10 City working days before opening</td></tr>
</tbody></table></div>`,
  src: "DIR Contractor Registration page; City of San Diego Prequalification Program page; 8 CCR §§1509, 3203, 3395."
},

{ h: "Scenarios: what would you do?",
  lead: "Decide first, then read the move.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>Move</th><th>Why</th></tr></thead>
<tbody>
<tr><td>June 28; DIR expires June 30; City bid due July 8.</td><td>Renew today by card; save confirmation.</td><td>Card processes within 24 hours; lapse penalties.</td></tr>
<tr><td>Subcontract needs $5M per occurrence; you carry $1M GL + $2M umbrella.</td><td>Price $2M–$3M more umbrella; ask if the GC accepts less. Decide before bid day.</td><td>Can't sign without it; premium goes in price.</td></tr>
<tr><td>You owe a nursery $18,000 on a finished bonded job and cash is short.</td><td>Call the nursery and surety agent now; set a payment plan.</td><td>A bond claim comes back to the company and owners plus costs.</td></tr>
<tr><td>Owner formed an LLC last month and wants SLBE for next month's City job.</td><td>Bid under the existing company if it qualifies, or as a sub.</td><td>12-month rule; false certification claims are worse.</td></tr>
<tr><td>Foreman questions the 10-minute break every 2 hours in August.</td><td>Show the heat plan and the 95°F rule.</td><td>Required for landscaping under §3395(e).</td></tr>
</tbody></table></div>`,
  src: "DIR Contractor Registration page; City of San Diego SLBE Program Requirements; 8 CCR §3395(e)."
},

{ t: "scorer", id: "bidready", h: "Are we bid-ready? Self-check",
  lead: "Score in order, since each step depends on the one before. 2 = done and current, 1 = started, 0 = not yet. Your choices are saved in this browser.",
  items: [
    ["Entity decided", "Owner, attorney and CPA agree which company bids"],
    ["License checked", "C-27 active, right entity, bond and workers' comp current"],
    ["Insurance confirmed", "Limits known, endorsements available, sample COI on file"],
    ["Bonding lined up", "Surety agent, capacity known, bond letter in hand"],
    ["DIR registered", "Current through June 30, number saved"],
    ["City tax certificate", "Active City of San Diego business tax certificate"],
    ["SLBE/ELBE", "Applied or certified, or confirmed we don't qualify yet"],
    ["Safety program", "Written IIPP, heat plan, Code of Safe Practices, tailgate records"],
    ["Capabilities and project list", "One-page statement and project list current"],
    ["Master prequal answers", "Every common question answered and saved"]
  ],
  bands: [
    [16, "Ready to bid", "Start finding work (Module 3). Keep the monthly folder check."],
    [10, "Almost there", "Finish the items you scored 0 or 1 before bidding as a prime."],
    [0, "Not yet", "Work the list in order before bidding."]
  ]
},

{ t: "terms", h: "Words to know",
  lead: "Module 2 terms. Everything else is in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["CSLB", "Contractors State License Board."],
    ["Qualifier: RMO / RME", "Person whose experience qualifies the license: responsible managing officer / responsible managing employee."],
    ["C-27 / A / B", "Landscaping / general engineering / general building licenses."],
    ["COI", "Certificate of insurance."],
    ["Additional insured (AI)", "GC, owner or agency covered by your policy for your work."],
    ["Primary and non-contributory", "Your policy pays first without sharing."],
    ["Waiver of subrogation", "Your insurer can't sue the GC or owner to recover."],
    ["Per occurrence / aggregate", "Cap per event / cap per policy year."],
    ["Per-project aggregate", "Endorsement giving each job its own aggregate."],
    ["Occurrence / claims-made", "Covers events in the policy period / claims made while active."],
    ["Umbrella (follow form)", "Excess limits covering the same risks as the underlying policy."],
    ["Penal sum", "Most a surety could owe on a bond; not its cost."],
    ["Bid / performance / payment bond", "Guarantees signing / completion / paying workers, subs and suppliers."],
    ["GIA", "General indemnity agreement: company and owners repay the surety."],
    ["Bonding capacity", "Single-job and aggregate limits a surety will back."],
    ["DIR registration", "Annual public works contractor registration required to bid or be listed."],
    ["eCPR", "Electronic certified payroll records filed with DIR."],
    ["SLBE / ELBE", "City of San Diego Small / Emerging Local Business Enterprise."],
    ["Bid discount", "5% evaluation reduction for certified bidders on $1M–$1.5M City jobs, capped at $50,000."],
    ["MBC", "Maximum bidding capacity from City prequalification."],
    ["IIPP", "Injury and Illness Prevention Program (8 CCR §3203)."],
    ["Tailgate meeting", "Crew safety meeting at least every 10 working days (8 CCR §1509)."],
    ["EMR", "Experience modification rate; 1.0 average, lower better."],
    ["High-heat procedures", "§3395 steps at 95°F and up, including 10 minutes' rest every 2 hours."]
  ]
},

{ t: "quiz", id: "m2", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "The company holds only a B license. A GC offers a landscape-and-irrigation-only subcontract. Can you sign it?", a: ["Yes, B covers all building work", "No, B&P §7057 bars a B from a single-specialty contract unless it holds that specialty or subs it out", "Yes, on private work only"], c: 1, why: "A B can't take single-trade work other than framing or carpentry without the specialty license. That's why the C-27 matters." },
    { q: "A Caltrans notice says “Class A or C-27, which constitutes a majority of the work.” A City park notice says “A.” Where can a C-27-only company prime?", a: ["Both", "Caltrans only; on the City job it subs to A primes", "Neither"], c: 1, why: "The notice sets prime eligibility (PCC §3300). C-27 is named on the Caltrans job but not the City job." },
    { q: "The owner formed a new LLC in March 2026 with the same RMO. What is true?", a: ["It can bid on the old license until renewal", "It needs its own license, DIR registration, insurance and bonding file, and can't certify SLBE before March 2027", "Only the license changes"], c: 1, why: "Licenses don't transfer, and SLBE requires 12 consecutive months in operation." },
    { q: "Your GL is $1M per occurrence / $2M aggregate. Claims this year have paid $1.8M. A new $500,000 claim arrives. What does the GL pay?", a: ["$500,000", "$200,000", "$1,000,000"], c: 1, why: "Only $200,000 remains in the aggregate. A per-project aggregate or umbrella would protect you." },
    { q: "Damage occurred in 2027 under a claims-made policy; the claim arrives in 2028 after you switched carriers without tail. Who pays?", a: ["The 2027 carrier", "The 2028 carrier", "Likely you"], c: 2, why: "Claims-made pays claims made while active; the 2028 occurrence policy doesn't cover pre-inception damage." },
    { q: "Using the example scale (2.5% first $100K, 1.5% next $400K), what is the performance/payment bond premium on a $300,000 job?", a: ["$4,500", "$5,500", "$30,000"], c: 1, why: "100,000 × 2.5% = $2,500; 200,000 × 1.5% = $3,000; total $5,500. $30,000 is the 10% penal-sum mistake." },
    { q: "A $22,000 City irrigation repair (maintenance) is public works. Do you need DIR registration?", a: ["No, the maintenance exemption covers it", "Yes: the maintenance exemption is $15,000 or less, and $22,000 exceeds it", "No, anything under $25,000 is exempt"], c: 1, why: "The exemption is $25,000 for construction and $15,000 for maintenance. $22,000 maintenance needs registration." },
    { q: "$1.3M City job. Uncertified bid $1,250,000; SLBE bid $1,295,000. Who is low on evaluation?", a: ["Uncertified", "SLBE: $1,230,250 evaluated, and only $45,000 above", "Tie"], c: 1, why: "1,295,000 × 0.95 = $1,230,250 < $1,250,000, and the difference ($45,000) is within the $50,000 cap." },
    { q: "A prequalified SLBE prime submitted a bond letter with a compiled statement; its single-project bond limit is $1.4M. What is its MBC?", a: ["$1.4M", "$1M", "$30M"], c: 1, why: "Compiled statements (SLBE/ELBE only) cap MBC at the lesser of the bond limit or $1M." },
    { q: "It's 97°F on a median job. What must the crew get beyond water and shade?", a: ["Nothing until 100°F", "High-heat procedures including a 10-minute cool-down every 2 hours, which you should price as lost production", "Work must stop"], c: 1, why: "Landscaping is a listed industry under 8 CCR §3395(e)." }
  ]
},

{ t: "practice", id: "m2", h: "Practice assignments",
  lead: "Each one produces a real company document. Save everything in the bid-ready folder.",
  items: [
    { h: "Look up the license and six others", hrs: 0.25, d: "<p>On CSLB, record the company's entity name, number, classes, qualifier, bond, workers' comp and expiration. Do the same for 3 landscape competitors and 3 target GCs; flag complaints.</p>" },
    { h: "New-entity decision memo", hrs: 0.5, d: "<p>One page for the owner: existing company vs. new entity, what each needs, how long each takes, questions for attorney, CPA and surety. Walk the decision tree together and calendar a decision date.</p>" },
    { h: "Insurance agent call and K-24-1952 gap check", hrs: 0.75, d: "<p>Get current GL, auto, workers' comp and umbrella limits; occurrence or claims-made; availability of AI ongoing and completed, primary/non-contributory, waiver and per-project aggregate (blanket or scheduled); and the cost to reach $5M per occurrence. Get a sample COI. Then mark each K-24-1952 requirement met or not, with the cost to close each gap.</p>" },
    { h: "Surety agent call", hrs: 0.5, d: "<p>Ask the capacity questions from the indemnity slide. Record the rate schedule in writing, documents required, and the one thing that would raise capacity most in a year. Have an attorney review the GIA before signing.</p>" },
    { h: "DIR registration and SLBE checklist", hrs: 0.5, d: "<p>If the entity is decided, register or renew with DIR and save proof. Build the SLBE/ELBE document checklist against what the company has, noting anything that depends on the entity decision.</p>" },
    { h: "Capabilities statement and master prequal answers", hrs: 1, d: "<p>Write the one-page statement and the master answers file from the template slide using real company data. Mark what you still need from the owner or CPA. Have the owner approve both.</p>" },
    { h: "Build the bid-ready folder", hrs: 0.5, d: "<p>Create the folder with the file names from the slide, add an expiration index, and list each missing document with owner and due date.</p>" },
    { h: "Safety program gap check", hrs: 0.5, d: "<p>Compare the company's IIPP and heat plan to <a href=\"https://www.dir.ca.gov/title8/3203.html\" target=\"_blank\" rel=\"noopener\">8 CCR §3203</a> and <a href=\"https://www.dir.ca.gov/title8/3395.html\" target=\"_blank\" rel=\"noopener\">§3395</a>. List every gap and draft the missing pieces, including a Code of Safe Practices and a tailgate sign-in sheet.</p>" }
  ]
},

{ h: "Module 2 summary",
  lead: "Qualify first: right license on the right entity, insurance and bonds that fit, registrations current, safety on paper and in practice.",
  body: `<ul>
<li>C-27 lets you bid landscape; a B alone can't take single-trade work. Each notice names who can prime.</li>
<li>Licenses don't transfer; a new entity restarts license, DIR, bonding and the 12-month SLBE clock. Decide before registering.</li>
<li>Occurrence-form GL, the right limits and aggregates, and AI / primary / waiver / per-project endorsements; price any gap before bid day.</li>
<li>Bonds are credit backed by a GIA; add only the premium.</li>
<li>DIR before any public bid, renewed each June; SLBE/ELBE as soon as eligible; City prequalification 10 working days ahead to prime.</li>
<li>IIPP, Code of Safe Practices, tailgates, heat plan and EMR are checked by GCs.</li>
<li>Bid-ready folder with expirations, plus a capabilities statement and master prequal answers.</li>
</ul>
<p><strong>Next:</strong> <a href="#m3-1">Module 3 · Finding Work and Deciding What to Bid</a>.</p>`
}
]
});
