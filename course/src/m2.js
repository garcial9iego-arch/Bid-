(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 2, hours: 6, title: "Your License, Your Company and Getting Bid-Ready",
slides: [

{ t: "cover",
  h: "Your License, Your Company and Getting Bid-Ready",
  lead: "A bid from a company that isn't licensed, registered, insured and bondable for that job gets thrown out, no matter how good the price is. This module gets the company ready before you bid.",
  objectives: [
    "Explain what the B and C-27 licenses allow on commercial and public work",
    "Understand why a license can't move to a new company, and what that means",
    "Describe the insurance GCs and agencies require, and what a COI is",
    "Explain bid bonds, performance bonds and payment bonds",
    "Register with DIR and know when registration is required",
    "Understand SLBE/ELBE certification and why it helps",
    "Build the company's bid-ready folder"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "4.5 h"], ["Module total", "6 h"]],
  body: "<p>Most of this module is set up once, then kept current. Doing it well now saves you from scrambling on every bid.</p>"
},

{ h: "Why paperwork comes before pricing",
  lead: "On commercial and public jobs, your company has to qualify before your price is even looked at.",
  body: `<p>Before a GC or agency compares prices, they check:</p>
<ul>
<li>Is the license active, and is it the right class for this work?</li>
<li>Is the company registered with the state for public work (DIR)?</li>
<li>Does the insurance meet their limits?</li>
<li>Can the company get the bonds the job requires?</li>
<li>Does the company have experience and a safety record?</li>
</ul>
<p>Any “no” can end your chances. The good news: once this is set up, it carries over to every bid.</p>`,
  ex: `<p>A GC's estimator likes your number but their prequalification form shows no bonding letter and an expired insurance certificate. They give the job to the next sub on the list, who sent everything the first time.</p>`
},

{ h: "California contractor licenses, the basics",
  lead: "In California the Contractors State License Board (CSLB) licenses contractors. A license belongs to a business, not a person.",
  body: `<ul>
<li><strong>The license belongs to the business entity</strong>: a sole owner, partnership, corporation or LLC.</li>
<li><strong>A qualifying individual (the “qualifier”)</strong> passed the exams or was waived and is responsible for the company's construction work. A qualifier is either an <strong>RMO</strong> (responsible managing officer, an owner or officer) or an <strong>RME</strong> (responsible managing employee).</li>
<li><strong>Classifications</strong> say what work the company can do:
  <ul>
  <li><strong>A:</strong> general engineering (streets, utilities, large civil work)</li>
  <li><strong>B:</strong> general building (structures)</li>
  <li><strong>C-xx:</strong> specialty trades. <strong>C-27 is Landscaping.</strong></li>
  </ul></li>
</ul>`,
  deeper: `<p>California requires a license for any job of $1,000 or more in labor and materials combined, or any job that needs a building permit (B&P Code §7048; the limit was $500 before 2025). On commercial and public work you'll always be over that.</p>
<p>Look up any company's license, including competitors and GCs, with CSLB's free Instant License Check. It shows classifications, bond, workers' comp, and any complaints or discipline.</p>`,
  src: "CSLB, cslb.ca.gov; Cal. B&P Code §§7048, 7055–7059, 7068."
},

{ h: "What your B and C-27 licenses allow",
  lead: "For commercial landscape and irrigation bids, the C-27 is the license that matters. The B alone isn't enough.",
  body: `<div class="twocol">
<div><h3>C-27 Landscaping</h3><ul>
<li>Landscape systems for public and private property</li>
<li>Grading and preparing land for landscape</li>
<li>Irrigation systems</li>
<li>Planting, soil prep, mulch</li>
<li>Landscape hardscape such as walks, low garden walls, patios and drainage tied to the landscape</li>
<li>Lets you bid landscape as a sub, or as prime on landscape-only jobs</li>
</ul></div>
<div><h3>B General Building</h3><ul>
<li>Lets you be the GC on buildings</li>
<li><strong>Can't</strong> take a contract for one specialty trade (like landscape only) unless it also includes framing or carpentry, or you hold that specialty license</li>
<li>So a B alone can't bid a landscape-only subcontract</li>
<li>With the C-27 too, the company can do both</li>
</ul></div>
</div>`,
  watch: `<p>Read the official CSLB wording for C-27 before bidding anything unusual, like large retaining walls, pools, fountains, electrical for site lighting, or major grading. Those may need another classification.</p>`,
  deeper: `<p>B&P Code §7057 limits a B contractor from taking a contract for a single specialty trade other than framing or carpentry, unless the B contractor also holds that specialty license or subcontracts the work to someone who does. The C-27 description comes from CSLB's classification regulations (California Code of Regulations, Title 16, §832.27).</p>`,
  src: "Cal. B&P Code §7057; 16 CCR §832.27; CSLB classification pages."
},

{ h: "Who can bid what on public work",
  lead: "Each public bid notice says which license class can bid as the prime. Check it before you spend any time.",
  body: `<ul>
<li><strong>Landscape-only jobs</strong> (median planting, park irrigation retrofits, turf conversions) often allow a C-27 prime. You bid directly to the agency.</li>
<li><strong>Mixed civil jobs</strong> (streets, parks with grading, concrete and utilities) often require an <strong>A</strong> license to be prime. You bid your landscape scope to the A contractors as a sub.</li>
<li><strong>Building jobs</strong> (schools, libraries, fire stations) usually require a <strong>B</strong> prime. Your company's B could let it bid as GC, but that's a different business. For this division you'd normally bid landscape to the B contractors.</li>
</ul>`,
  ex: `<p>Notice says: “Bidders must possess a valid Class A or C-27 license at the time of bid.” → Your company can bid as prime.</p>
<p>Notice says: “Class A license required.” → You can't be prime. Find out which A contractors are bidding (often listed on the planholders list) and send them your landscape price.</p>`,
  deeper: `<p>B&P Code §7059 lets the awarding agency decide which classifications can bid, and allows a specialty contractor to bid when the work is in its specialty. Public Contract Code §3300 requires agencies to state the license class in the bid documents.</p>`,
  src: "Cal. B&P Code §7059; Public Contract Code §3300."
},

{ h: "The new company question",
  lead: "If the company forms a new business to bid commercial work, that new business needs its own license. Licenses can't be transferred.",
  body: `<ul>
<li>CSLB ties the license to the business entity. A new LLC or corporation must apply for its own license, even with the same qualifier.</li>
<li>An existing qualifier can often skip the exams by applying with an exam waiver.</li>
<li>The new entity will usually get a <strong>new license number</strong>, with no work history attached.</li>
<li>Until that license is issued, the new company can't bid.</li>
</ul>
<p><strong>The qualifier rules decide what's possible:</strong></p>
<ul>
<li>An <strong>RMO</strong> can qualify more than one company only if there's at least 20% common ownership, and no more than three firms in one year.</li>
<li>An <strong>RME</strong> can qualify only one active license and must work at least 32 hours a week (or 80% of operating hours) for it.</li>
<li>If a qualifier leaves a license, that company has 90 days to replace them or the license is suspended.</li>
</ul>`,
  watch: `<p>A new company starts with no track record. Sureties set bonding from financial history, and prequalification forms ask for years in business and completed projects. The new company will qualify for smaller jobs at first, even with the same people.</p>`,
  ex: `<p><strong>Decision for the owner:</strong> bid under the existing company (license, history and financials already in place), or start the new company (cleaner separation, but slower start)? There can be good liability or tax reasons for a new company. This is a question for a construction attorney, a CPA and a surety agent together, and it should be settled before any registrations are done, because they all attach to one entity.</p>`,
  deeper: `<p>An LLC license requires a $100,000 employee/worker bond in addition to the standard $25,000 contractor bond, and liability insurance of at least $1 million (more with more than five listed members). A corporation needs only the $25,000 contractor bond.</p>
<p>CSLB reissues an existing license number only in limited cases. Ask CSLB directly if you think yours qualifies.</p>`,
  src: "CSLB: Change in Business Entity; CSLB: Licenses for LLCs; Cal. B&P Code §§7068.1, 7071.6, 7071.6.5, 7071.19."
},

{ h: "Insurance: what GCs and agencies ask for",
  lead: "Every commercial job requires proof of insurance, called a certificate of insurance (COI). The contract sets the limits and wording.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Coverage</th><th>What it covers</th><th>Commonly required</th></tr></thead>
<tbody>
<tr><td><strong>General liability (GL)</strong></td><td>Injury or damage you cause to others</td><td>$1M per occurrence / $2M aggregate</td></tr>
<tr><td><strong>Auto liability</strong></td><td>Your trucks and vehicles</td><td>$1M combined single limit</td></tr>
<tr><td><strong>Workers' compensation</strong></td><td>Your employees' injuries. Required by law if you have employees.</td><td>Statutory, plus $1M employer's liability</td></tr>
<tr><td><strong>Umbrella / excess</strong></td><td>Extra coverage above the others</td><td>$1M–$5M on larger jobs</td></tr>
</tbody></table></div>
<p>Those are typical amounts, not rules. Each contract lists its own.</p>`,
  watch: `<p>Commercial contracts also ask for special <strong>endorsements</strong>, wording added to your policy. If your agent can't add them, you can't sign the contract. Ask your agent about them now:</p>
<ul>
<li><strong>Additional insured</strong>: the GC and owner are covered by your policy (forms often called CG 20 10 for ongoing work and CG 20 37 for completed work).</li>
<li><strong>Primary and non-contributory</strong>: your policy pays first.</li>
<li><strong>Waiver of subrogation</strong>: your insurer won't sue the GC to recover a claim.</li>
</ul>`,
  deeper: `<p>Raising your limits and adding endorsements costs money. Find out the cost before you bid, so it's in your overhead or job cost. If a project has a wrap-up insurance program (OCIP or CCIP), the owner or GC provides some coverage and you may have to deduct your own insurance cost from your bid. The bid documents will say.</p>`
},

{ h: "Bonds, in plain words",
  lead: "A bond is a guarantee from a surety company that you'll do what you promised. If you don't, the surety pays, and then you pay the surety back.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Bond</th><th>What it guarantees</th><th>Usual amount</th></tr></thead>
<tbody>
<tr><td><strong>Bid bond</strong></td><td>If you win, you'll sign the contract at your bid price</td><td>Usually 10% of your bid</td></tr>
<tr><td><strong>Performance bond</strong></td><td>You'll finish the work as the contract requires</td><td>Usually 100% of the contract</td></tr>
<tr><td><strong>Payment bond</strong></td><td>You'll pay your workers, subs and suppliers</td><td>Usually 100% of the contract</td></tr>
<tr><td><strong>Maintenance / warranty bond</strong></td><td>You'll fix problems during the warranty period</td><td>Varies</td></tr>
</tbody></table></div>
<p>A bond is <strong>not insurance for you</strong>. It protects the owner. If the surety pays a claim, your company and usually its owners personally must pay it back.</p>`,
  ex: `<p>You win a $300,000 park irrigation job. The City requires a 10% bid bond at bid time, then 100% performance and payment bonds before the contract is signed. If the bond premium is around 2%, that's about $6,000, and it belongs in your bid price.</p>`,
  deeper: `<ul>
<li>California public works contracts over $25,000 require a payment bond (Civil Code §9550). Most agencies also require a performance bond.</li>
<li>Premiums for smaller contractors often run about 1%–3% of the contract. Strong financials earn lower rates. Bid bonds are often free or cheap once you have a surety.</li>
<li>Some GCs require subs to provide bonds on larger subcontracts. Many will ask in their prequalification form whether you <em>can</em>.</li>
</ul>`,
  src: "Cal. Civil Code §9550."
},

{ h: "Bonding capacity",
  lead: "A surety decides how much work your company can bond. That number sets the biggest job you can take as a bonded contractor.",
  body: `<p>Sureties set two limits:</p>
<ul>
<li><strong>Single-job limit:</strong> the largest one contract they'll bond.</li>
<li><strong>Aggregate limit:</strong> the total of all bonded work you can have going at once.</li>
</ul>
<p>To set those, they look at:</p>
<ul>
<li>Financial statements, ideally prepared by a CPA who knows construction</li>
<li>Working capital (cash and receivables minus short-term bills)</li>
<li>Net worth (equity) of the company</li>
<li>The owners' personal credit and finances</li>
<li>Experience: largest jobs completed, years in business</li>
<li>Backlog and how past jobs turned out</li>
</ul>`,
  ex: `<p><strong>Questions to ask a surety agent on your first call:</strong> What bonding capacity can we qualify for today? What financial statements do you need? What would raise our limit in a year? What's your rate? Can you issue bid bonds quickly when we need them?</p>`,
  watch: `<p>Use a <strong>surety agent who specializes in construction</strong>, not just your regular insurance agent. Specialists know the sureties that work with small and growing contractors.</p>`
},

{ h: "DIR registration for public works",
  lead: "Before your company can bid public work, or even be listed as a sub on someone else's public bid, it must be registered with the California Department of Industrial Relations (DIR).",
  body: `<ul>
<li><strong>Cost:</strong> $400 per year (check DIR for the current fee). You can pay for up to three years at once.</li>
<li><strong>Year:</strong> registration runs July 1 to June 30. Renew before it expires.</li>
<li><strong>Requirements include:</strong> an active CSLB license, workers' compensation coverage, and no unpaid wage judgments or debarment.</li>
<li><strong>Where:</strong> online at the DIR public works contractor registration page.</li>
</ul>`,
  watch: `<p>Bidding without registration can disqualify the bid. DIR allows late registration in limited cases only with a $2,000 penalty. Register first, then bid.</p>`,
  deeper: `<ul>
<li><strong>Small project exemption:</strong> registration isn't required on public works of $25,000 or less for new construction, or $15,000 or less for alteration, demolition, repair or maintenance. But prevailing wage still applies to public works over $1,000.</li>
<li>Registered contractors must submit certified payroll records electronically to DIR (eCPR) on most projects and follow apprenticeship rules. Module 11 covers this in detail.</li>
<li>You can look up any contractor's DIR registration on DIR's public search.</li>
</ul>`,
  src: "DIR Public Works Contractor Registration; Cal. Labor Code §§1725.5, 1771, 1771.1."
},

{ h: "SLBE/ELBE: the City of San Diego's small business program",
  lead: "The City certifies small, local construction firms. Certified firms get access to jobs and to primes who need them.",
  body: `<ul>
<li><strong>SLBE:</strong> Small Local Business Enterprise. <strong>ELBE:</strong> Emerging Local Business Enterprise (smaller).</li>
<li>To qualify, the firm must be based in San Diego County and stay under revenue limits. City bid documents in 2026 listed limits of $6.5M for SLBE and $3.5M for ELBE for specialty construction. Check the current figures.</li>
<li>Some City jobs are <strong>reserved</strong> for SLBE/ELBE firms only.</li>
<li>Larger City jobs set <strong>required SLBE/ELBE participation percentages</strong>. Prime contractors must find certified subs, and they come looking for them.</li>
<li>Certification is done through the City's Equal Opportunity Contracting program.</li>
</ul>`,
  ex: `<p>A $2.4M City street project requires 20% SLBE/ELBE participation. The A-licensed prime needs certified subs to hit that number. A certified landscape sub with a fair price becomes very valuable to that prime, often more valuable than a cheaper sub without certification.</p>`,
  deeper: `<p>Other certifications to know about:</p>
<ul>
<li><strong>California Small Business (SB)</strong> through the Department of General Services, used on state contracts.</li>
<li><strong>DBE</strong> (Disadvantaged Business Enterprise) through the California Unified Certification Program, used on federally funded transportation work. Requires 51% ownership by socially and economically disadvantaged individuals.</li>
<li><strong>DVBE</strong> (Disabled Veteran Business Enterprise), if an owner qualifies.</li>
</ul>
<p>Certifications attach to the business entity. Settle the new-company question first.</p>`,
  src: "City of San Diego, Equal Opportunity Contracting: SLBE program; City of San Diego bidding documents (2026)."
},

{ h: "Other registrations",
  lead: "A few more accounts and documents make the company ready to bid anywhere in the county.",
  body: `<ul>
<li><strong>City of San Diego business tax certificate</strong>, if the company does business in the City.</li>
<li><strong>PlanetBids vendor accounts</strong>: the City of San Diego and many other local agencies use PlanetBids. Each agency has its own portal and its own free registration.</li>
<li><strong>Cal eProcure</strong>: the State of California's bidding site.</li>
<li><strong>Bid platforms</strong> where GCs invite subs: BuildingConnected, PlanHub and others (Module 3).</li>
<li><strong>SAM.gov</strong>: only needed for federal jobs (military bases, federal buildings). Federal jobs have their own wage rules (Davis-Bacon).</li>
</ul>`,
  watch: `<p>Every registration should be in the exact legal name of the bidding entity, matching the CSLB license. Mismatched names cause rejected bids and payment delays.</p>`
},

{ h: "Safety: required and checked",
  lead: "GCs check your safety record before they let you on their site. Some won't invite you to bid without it.",
  body: `<ul>
<li><strong>IIPP:</strong> every California employer must have a written Injury and Illness Prevention Program. GCs ask for a copy.</li>
<li><strong>EMR</strong> (experience modification rate): a number from your workers' comp history. 1.0 is average; under 1.0 is better; over 1.0 is worse. Many GCs prefer 1.0 or lower. Ask your workers' comp carrier or agent for your EMR letter.</li>
<li><strong>Injury logs:</strong> Cal/OSHA Form 300 logs, if your company is required to keep them.</li>
<li><strong>Training:</strong> OSHA 10-hour for workers and 30-hour for supervisors is common on commercial sites.</li>
<li><strong>Site-specific needs:</strong> heat illness prevention (important in landscape work), trenching and excavation safety, equipment training.</li>
</ul>`,
  deeper: `<p>The IIPP requirement is in Title 8 of the California Code of Regulations, §3203. Cal/OSHA's heat illness standard (§3395) applies to all outdoor work and is checked on landscape crews. A new company without enough claims history may not have its own EMR yet; ask your agent how that will be shown.</p>`,
  src: "8 CCR §3203; 8 CCR §3395."
},

{ h: "The bid-ready folder",
  lead: "Keep one folder with everything GCs and agencies ask for, current and ready to send the same day.",
  body: `<div class="twocol">
<div><h3>Company documents</h3><ul>
<li>CSLB license printout</li>
<li>Sample certificate of insurance (COI)</li>
<li>W-9</li>
<li>DIR registration printout</li>
<li>Business tax certificate</li>
<li>SLBE/ELBE or other certification letters</li>
<li>Bonding capacity letter from your surety</li>
</ul></div>
<div><h3>Qualifications</h3><ul>
<li>One-page capabilities statement</li>
<li>Project list with dollar sizes and references</li>
<li>Equipment list</li>
<li>Key staff resumes</li>
<li>IIPP and safety program, EMR letter</li>
<li>Financial statements (send only when needed)</li>
<li>Standard exclusions and proposal template</li>
</ul></div>
</div>`,
  watch: `<p>Put an expiration date next to every document that expires: insurance, DIR, certifications. Check the folder on the first of each month. Sending an expired COI looks careless.</p>`
},

{ h: "Your capabilities statement",
  lead: "A one-page summary of what the company does. You'll attach it to every introduction email and prequalification form.",
  body: `<p><strong>What goes on it:</strong></p>
<ul>
<li>Company name, license number and classes, DIR number</li>
<li>Services: irrigation, planting, soil prep, establishment and maintenance, landscape renovation</li>
<li>Project types and size range you want</li>
<li>Service area: for example, San Diego County</li>
<li>3–5 representative projects, with photos if possible</li>
<li>Certifications (SLBE/ELBE when you have it)</li>
<li>Contact: estimator name, phone and email</li>
</ul>`,
  exLabel: "Example opening (edit to fit)",
  ex: `<p>“[Company] is a San Diego landscape and irrigation contractor (CSLB #XXXXXX, B and C-27) with [X] years of installation experience. We build commercial planting and irrigation systems, landscape renovations and water-efficient retrofits from $25,000 to $500,000 across San Diego County, and provide plant establishment and maintenance. DIR #XXXXXXX.”</p>`
},

{ h: "Prequalification forms",
  lead: "Many GCs and some agencies make you fill out a prequalification form before you can bid. Fill it out once, completely, and save the answers.",
  body: `<p><strong>Common questions:</strong></p>
<ul>
<li>Years in business and legal structure</li>
<li>Annual revenue for the last 3 years</li>
<li>Largest completed job and current backlog</li>
<li>Bonding capacity and surety contact</li>
<li>EMR and safety program</li>
<li>Insurance limits and carrier</li>
<li>References: GCs, owners, suppliers</li>
<li>Any lawsuits, claims, or contracts you didn't finish</li>
<li>Financial statements (often kept confidential)</li>
</ul>`,
  ex: `<p>Keep a “master prequal answers” document. When a new form arrives, copy and paste from it. A form that took four hours the first time then takes thirty minutes.</p>`,
  watch: `<p>Answer every question truthfully. A false statement on a public prequalification can disqualify you from future work with that agency.</p>`,
  deeper: `<p>Some California school districts and other agencies require formal prequalification for larger projects, often using a standard questionnaire scored on points. Check each agency's bid documents. Prequalification deadlines are often well before the bid date.</p>`
},

{ h: "Getting ready: the order of operations",
  lead: "Do these in order. Each step depends on the one before it.",
  body: `<ol class="steps">
<li class="hl"><div><b>Decide which company will bid</b>Existing company or new entity. Settle this with the owner, attorney and CPA.</div></li>
<li><div><b>Confirm the license</b>Look it up on CSLB. C-27 active? Right entity? Bonds and workers' comp current?</div></li>
<li><div><b>Call your insurance agent</b>Get current limits, ask about endorsements, get a sample COI.</div></li>
<li><div><b>Call a construction surety agent</b>Find out bonding capacity and what financials they need.</div></li>
<li class="hl"><div><b>Register with DIR</b>Required before any public bid.</div></li>
<li><div><b>Apply for SLBE/ELBE</b>If the company qualifies.</div></li>
<li><div><b>Register on PlanetBids and bid platforms</b>Module 3 covers this.</div></li>
<li class="hl"><div><b>Build the bid-ready folder</b>Capabilities statement, project list, safety documents.</div></li>
</ol>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["CSLB", "Contractors State License Board, which licenses California contractors."],
    ["Qualifier", "The person whose experience qualifies the company's license."],
    ["RMO", "Responsible managing officer: a qualifier who is an owner or officer."],
    ["RME", "Responsible managing employee: a qualifier who is an employee."],
    ["C-27", "California landscaping contractor license."],
    ["Class A / Class B", "General engineering / general building licenses."],
    ["Prime contractor", "The contractor with the contract directly from the owner or agency."],
    ["COI", "Certificate of insurance: proof of your coverage and limits."],
    ["Additional insured", "Adding the GC and owner to your liability policy."],
    ["Waiver of subrogation", "Your insurer agrees not to sue the GC or owner to recover a claim."],
    ["Surety", "The company that issues bonds."],
    ["Bid bond", "Guarantees you'll sign the contract if you win. Usually 10%."],
    ["Performance bond", "Guarantees you'll finish the work."],
    ["Payment bond", "Guarantees you'll pay workers, subs and suppliers."],
    ["Bonding capacity", "How much bonded work a surety will back."],
    ["DIR", "California Department of Industrial Relations. Registers public works contractors and enforces prevailing wage."],
    ["SLBE / ELBE", "City of San Diego small and emerging local business certifications."],
    ["IIPP", "Injury and Illness Prevention Program, required for every California employer."],
    ["EMR", "Experience modification rate. 1.0 is average safety; lower is better."],
    ["Prequalification", "A form or process that approves you to bid before bidding."],
    ["Capabilities statement", "A one-page summary of your company for GCs and agencies."]
  ]
},

{ t: "quiz", id: "m2", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "Your company holds a B license only. Can it take a landscape-only subcontract?", a: ["Yes, B covers everything", "No, a B can't take a single specialty trade contract unless it holds that specialty", "Only on private jobs"], c: 1, why: "B&P Code §7057 limits B contractors on single-trade contracts. That's why the C-27 matters." },
    { q: "The company forms a new LLC. Can it use the existing company's C-27 license?", a: ["Yes, the license transfers", "No, the new entity must apply for its own license", "Yes, if the qualifier is the same person"], c: 1, why: "A California license belongs to the business entity and can't be transferred, even with the same qualifier." },
    { q: "A City bid notice says “Class A license required.” What do you do?", a: ["Bid as prime anyway", "Skip it completely", "Bid your landscape scope to the A contractors who are bidding as prime"], c: 2, why: "You can't be prime, but the A contractors still need a landscape sub." },
    { q: "What does a bid bond guarantee?", a: ["That you'll pay your suppliers", "That you'll sign the contract at your price if you win", "That the plants will live"], c: 1, why: "A bid bond (usually 10%) protects the agency if the low bidder refuses to sign." },
    { q: "If a surety pays a claim on your bond, who pays the surety back?", a: ["Nobody, that's what the premium is for", "The GC", "Your company, and usually its owners personally"], c: 2, why: "A bond is a guarantee, not insurance for you. You sign an indemnity agreement promising to repay." },
    { q: "When must you be registered with DIR?", a: ["Before you bid or are listed on a public works bid", "Only after you win", "Only for jobs over $1 million"], c: 0, why: "Registration is required to bid, to be listed as a sub, and to work on public works (with a small-project exemption)." },
    { q: "Why do primes look for SLBE/ELBE-certified subs on big City jobs?", a: ["Certified subs are always cheaper", "The City requires a set percentage of certified participation", "Certified subs don't need insurance"], c: 1, why: "Required participation percentages make certified subs valuable to primes." },
    { q: "Your EMR is 0.85. Is that good or bad?", a: ["Good, better than average", "Bad, worse than average", "It doesn't matter"], c: 0, why: "1.0 is average. Below 1.0 means a better-than-average safety record." }
  ]
},

{ t: "practice", id: "m2", h: "Practice assignments",
  lead: "These produce real things the company needs. Save everything in the bid-ready folder.",
  items: [
    { h: "Look up the license", hrs: 0.5, d: "<p>On CSLB's Instant License Check, look up the company's license. Write down: entity name, license number, classes, qualifier, bond, workers' comp and expiration date. Then look up 3 landscape competitors and 3 GCs you'd like to work for, and compare.</p>" },
    { h: "Write up the new-company decision", hrs: 0.75, d: "<p>Write one page for the owner: the two options (existing company vs. new entity), what each needs, how long each takes, and the questions for the attorney, CPA and surety agent. Get a decision date on the calendar.</p>" },
    { h: "Call the insurance agent", hrs: 0.5, d: "<p>Ask for current GL, auto, workers' comp and umbrella limits; whether they can add additional insured (ongoing and completed operations), primary and non-contributory, and waiver of subrogation; and what it costs to raise GL to $2M aggregate and add a $2M umbrella. Get a sample COI.</p>" },
    { h: "Call a construction surety agent", hrs: 0.75, d: "<p>Use the surety questions from the Bonding capacity slide. Write down the answers and what documents they need. Ask what one thing would raise the company's bonding limit most in the next year.</p>" },
    { h: "Read the DIR and SLBE requirements", hrs: 0.5, d: "<p>Read the DIR registration page and the City's SLBE program requirements. Make a checklist of what each one needs, and note anything that depends on the new-company decision.</p>" },
    { h: "Draft the capabilities statement", hrs: 1, d: "<p>Write the one-page capabilities statement using the slide as a guide. Choose 3–5 of the company's best projects. Take or find photos. Have the owner review it.</p>" },
    { h: "Start the master prequal answers", hrs: 0.5, d: "<p>Make a document with every common prequalification question from this module. Fill in what you know now and mark what you still need from the owner or CPA.</p>" }
  ]
},

{ h: "Module 2 summary",
  lead: "The company now knows what it needs to qualify for commercial and public bids. Next, you'll find the work.",
  body: `<ul>
<li>The C-27 is what lets the company bid landscape and irrigation packages. The B alone can't.</li>
<li>Each public bid names the license class allowed to be prime. Check it first.</li>
<li>Licenses can't move to a new company. Decide which company bids before registering anything.</li>
<li>Insurance needs the right limits and endorsements. Bonds are guarantees you must repay.</li>
<li>Register with DIR before any public bid. Apply for SLBE/ELBE if you qualify.</li>
<li>Keep a bid-ready folder current, with expiration dates.</li>
</ul>
<p><strong>Next: Module 3 · Finding Work and Deciding What to Bid.</strong></p>`
}
]
});
