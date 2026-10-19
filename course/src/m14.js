(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 14, hours: 6, title: "Submitting Public Bids and Bid Day",
slides: [

{ t: "cover",
  h: "Submitting Public Bids and Bid Day",
  lead: "A public bid is a legal offer under strict rules: the right price still loses on a missing form, an unlisted sub, a wrong bond or a late upload.",
  objectives: [
    "Read the cover and NIB for eligibility, goals and award basis",
    "Set up accounts, prequalification, Digital IDs and bonds before bid week",
    "Submit through PlanetBids and Bid Express, applying the unit-price and alternate rules",
    "Know every form and certification in a City of San Diego package and a Caltrans bid book",
    "Get the bid bond right and compute bid and contract bond amounts",
    "List subs under the Fair Practices Act, including threshold, self-performance and SLBE math",
    "Run bid day, level late quotes, catch math errors, and meet every post-bid deadline, mistake and protest rule"
  ],
  time: [["Reading and slides", "1.75 h"], ["Practice assignments", "4.25 h"], ["Module total", "6 h"]],
  body: `<p>Three real packages: City of San Diego <strong>EMTS Boat Dock Esplanade</strong> (K-24-1952-DBB-3-A, bid Dec 6, 2023), Caltrans <strong>11-428704</strong> (<a href="#m15-1">Module 15</a>) and Caltrans <strong>11-431064</strong>, SR-905 Otay Mesa landscaping (bid May 17, 2022). Agencies revise forms; follow the package in front of you.</p>`,
  src: "City of San Diego bidding documents K-24-1952-DBB-3-A (2023) and K-26-2396-DBB-3-A (2026); Caltrans 11-428704 Special Provisions and ACCU Construction bid book; Caltrans 11-431064 Special Provisions and Bid Summary."
},

{ h: "How public bids are submitted",
  lead: "The deadline is absolute; before it you can revise or withdraw, after it your bid is a firm offer.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>PlanetBids (City of San Diego, many cities and districts)</th><th>Bid Express (Caltrans)</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>Vendor account on each agency's portal; system-assigned Digital ID; register as prospective bidder for addendum notices</td><td>Caltrans Bidder ID (ACCU's: VC0000010281); Bid Express account and Digital ID (allow 7+ days, identity paperwork, service fees); AASHTOWare Project Bids software</td></tr>
<tr><td>Fill in</td><td>Company data, addenda acknowledgments, line item prices, subcontractor and supplier lists, uploads (bond PDF and four forms). Save as you go.</td><td>Bid book: Bid to the Department, Bid Item List, Subcontractor List, Small Business Status, certifications, electronic bond ID and registry</td></tr>
<tr><td>Submit</td><td>Rejects a bid missing any required field; save the confirmation and a status screenshot. Needs cookies on; logins are tracked.</td><td>Sign with Digital ID; wait for the Bid Submittal Receipt email; confirm a receipt for every resubmittal</td></tr>
<tr><td>Opening</td><td>Results visible online after the deadline</td><td>Read by webcast right after the deadline; Bid Summary posted later</td></tr>
</tbody></table></div>
<p>Sealed paper bids (some small agencies): signed forms in a marked envelope, delivered before the time on the agency's clock; get a time stamp.</p>`,
  ex: `<p>The City warns uploads “may not be instantaneous” and “it is the bidder's sole responsibility to ensure their bids are received on time.” 11-428704: “Bids received after this time will not be accepted.”</p>`,
  deeper: `<p>City e-bids certify every form “under penalty of perjury” with the effect of a wet signature; the price is guaranteed 120 days from opening. Caltrans 2018 Standard Specifications 2-1.33A: “Your authorized digital signature is your confirmation of and agreement to all certifications and statements contained in the Bid book”; a signer other than the authorized officer or partner needs a Power of Attorney filed before opening or with the bid. 2-1.40: electronic bids may be withdrawn or revised before the opening date and time.</p>`,
  src: "City of San Diego K-24-1952 Instructions to Bidders §§2–3 (2.1–2.7); Caltrans 11-428704 Notice to Bidders; Caltrans 2018 Standard Specifications 2-1.33A, 2-1.40; Caltrans Electronic Bidding Guide; ACCU Construction bid book (11-428704)."
},

{ h: "Reading the cover and the NIB · K-24-1952",
  lead: "Read the cover and the two-page NIB (Notice Inviting Bids) before the plans; they decide whether you can bid at all.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>K-24-1952 says</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Bid no.</td><td>K-24-1952-DBB-3-A; DBB = design-bid-build. SAP no. S-00319 is City accounting.</td><td>Use on bond and every email</td></tr>
<tr><td>Program and wages</td><td>Subject to SLBE program; state prevailing wage and apprenticeship</td><td>Goals apply; wage basis per <a href="#m11-1">Module 11</a></td></tr>
<tr><td>2. Competition</td><td>City Prequalified Contractors List only</td><td>Check prequalification and its limit</td></tr>
<tr><td>3. Estimated cost</td><td>$1,600,000</td><td>Size vs. bonding and crews</td></tr>
<tr><td>4. Due</td><td>2:00 PM Dec 6, 2023, PlanetBids only</td><td>Set a 1:15 PM submit target</td></tr>
<tr class="hl"><td>6. License</td><td>Prime must hold Class A (General Engineering)</td><td>C-27 alone can't be prime: quote the primes (<a href="#m3-1">Module 3</a> go/no-go)</td></tr>
<tr><td>7. Participation</td><td>Mandatory 20% SLBE-ELBE (Small Local / Emerging Local Business Enterprise): 9.4% + 10.6% recommended</td><td>Outreach or a Good Faith Effort file</td></tr>
<tr><td>8.4 Award</td><td>“The low Bid will be determined by the Base Bid”</td><td>Alternates don't decide low</td></tr>
<tr><td>9.2 / 9.4</td><td>Questions under 14 days before opening may not be considered; only written addenda bind</td><td>RFIs early (<a href="#m12-1">Module 12</a>)</td></tr>
</tbody></table></div>`,
  ex: `<p>Questions and protests go to the Senior Contract Specialist named on the cover, not the designer whose seals appear there.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, cover and Notice Inviting Bids §§2–9."
},

{ h: "Setup and the two weeks before bid day",
  lead: "Accounts and approvals take days to weeks; bid day is only for sub numbers and checking.",
  body: `<ol class="steps">
<li><div><b>DIR registration</b>Department of Industrial Relations public works registration, current for bid and job (<a href="#m2-1">Module 2</a>).</div></li>
<li class="hl"><div><b>City prequalification</b>Required to bid as prime, for the total bid including alternates. The City sets MBC (maximum bidding capacity) from your bond letter and financials. Documents say apply 2 weeks before opening; the City page says 10 City working days. Use the earlier date.</div></li>
<li><div><b>Portals and IDs</b>PlanetBids vendor account per agency (your subs and suppliers must also register as City vendors before award); Caltrans Bidder ID, Bid Express and Digital ID (7+ days).</div></li>
<li><div><b>Surety</b>How they issue PlanetBids bonds (PDF plus original) and Caltrans electronic bonds (11-428704's winner used Surety2000). Request the bond several business days ahead with agency, bid no., date, amount and alternates.</div></li>
<li><div><b>Two weeks out</b>Questions in (City 14-day cutoff); daily addendum checks; sub and supplier outreach with SLBE/DBE contact log; pre-fill every non-price form, license and DIR numbers; finish your own takeoff and labor.</div></li>
<li><div><b>Roles</b>Estimator levels and totals; checker compares every unit price and extension to the estimate and the sub list to quotes; submitter enters and saves proof; signer is the authorized officer; one person phones for missing quotes. Never price and check the same numbers. Backup laptop and hotspot.</div></li>
</ol>`,
  watch: `<p>SLBE-certified firms with no prior public works prime job must finish City training before bidding as prime, and their capacity is capped at the lesser of their single-job bond limit or $1 million.</p>`,
  src: "City of San Diego Prequalification Program page; K-24-1952 Instructions to Bidders §§1–2, 5; Caltrans Electronic Bidding Guide; ACCU Construction bid book (11-428704)."
},

{ h: "The bid schedule and Caltrans pricing rules",
  lead: "On Caltrans bids the unit price prevails, so a typo in a unit price is a binding price.",
  body: `<ul>
<li><strong>Unit price item:</strong> unit price × quantity = item total; paid on installed quantity unless marked final pay (paid at bid quantity).</li>
<li><strong>Lump sum item:</strong> one price (mobilization, establishment). Allowance or contingency items: carry as printed.</li>
<li><strong>Basis:</strong> K-24-1952 was a “Lump Sum contract with Unit Price provisions,” low by Base Bid. 11-428704 was “on a unit price basis”: low = sum of 70 item totals.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Bid to the Department (DES-OE-0102.1) rule</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>1. You'll sign at your prices and finish in the working days stated</td><td>A promise, not an estimate</td></tr>
<tr class="hl"><td>2.1 Unit price prevails if it and the item total disagree</td><td>Your unit price binds you</td></tr>
<tr><td>2.1.1 Unit price missing or equal to the item total → item total prevails</td><td>Caltrans divides by quantity</td></tr>
<tr><td>2.1.2 Apparent decimal error → Caltrans uses whichever of your two numbers is closest by percentage to its final estimate</td><td>You don't choose</td></tr>
<tr><td>2.2 Both blank, or LS total blank</td><td>May be nonresponsive</td></tr>
<tr><td>2.3 LS items: the item total is the bid</td><td>A differing unit price is ignored</td></tr>
<tr><td>2.4–2.5 Commas and $ ignored; read by digits and decimal; do not round</td><td>Exact cents</td></tr>
<tr><td>2.7 Department's decision on the amount is final</td><td>No argument after opening</td></tr>
<tr><td>3. Addenda acknowledged; 4. security ≥ 10% including additive items</td><td>ACCU listed “1”; electronic bond</td></tr>
</tbody></table></div>`,
  watch: `<p>61,975 iceplant cuttings at $0.80 = $49,580. Type $0.08 and the item is $4,958, and you're held to it: a $44,622 hole.</p>`,
  src: "Caltrans Bid to the Department DES-OE-0102.1 (Rev 1/13/2017), ACCU bid book, 11-428704; City of San Diego K-24-1952 Notice Inviting Bids §8.4, Instructions §11."
},

{ h: "Alternates and basis of award",
  lead: "Read how low bidder is determined before pricing alternates; a careless alternate can become your contract.",
  body: `<ul>
<li><strong>Additive:</strong> work the agency may add (second planting area, upgraded controller). <strong>Deductive:</strong> work it may remove, priced as a credit.</li>
<li><strong>Basis of award:</strong> base alone, or base plus selected alternates. The City reserves the right to evaluate “the base bid and any proposed alternates or options as detailed herein.”</li>
<li><strong>Subs on alternates:</strong> City “Subcontractors For Alternates” form, marked additive or deductive, with license, DIR number and dollar value.</li>
<li><strong>Capacity:</strong> City prequalification must cover base plus alternates; Caltrans bid security includes additive items.</li>
</ul>`,
  deeper: `<p>For SLBE/ELBE percentages the City excludes alternate items, field orders and City contingency items. Allowance items marked “EOC Type I” count; “EOC Type II” don't (EOC: the City's Equal Opportunity Contracting program).</p>`,
  src: "City of San Diego K-24-1952 Instructions to Bidders §§12.3, 20.8; Attachment C, Equal Opportunity Contracting, section F."
},

{ h: "City package: required uploads and lists",
  lead: "PlanetBids won't accept a bid missing a required upload, and the City treats a missing one as non-responsive.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Content</th><th>Due</th></tr></thead>
<tbody>
<tr class="hl"><td>A. Bid bond PDF</td><td>Surety bond, cashier's or certified check, payable to the City, ≥ 10% of total bid; paper original to Purchasing &amp; Contracting</td><td>PDF at bid; original 5 PM, 1 working day after opening</td></tr>
<tr><td>B. Certification of Pending Actions</td><td>Pending lawsuits, claims, government actions. “None” is an answer; blank isn't.</td><td>At bid</td></tr>
<tr><td>C. Mandatory Disclosure of Business Interests</td><td>Relationships with City officials or employees; owner fills it in</td><td>At bid</td></tr>
<tr><td>D. Debarment and Suspension, prime</td><td>Company and principals not debarred, suspended or excluded</td><td>At bid</td></tr>
<tr><td>E. Debarment and Suspension, subs/suppliers/manufacturers</td><td>Check each on SAM.gov (System for Award Management) and the DIR debarment list first</td><td>At bid</td></tr>
<tr><td>List of Subcontractors and Named Equipment/Material Supplier List (in PlanetBids)</td><td>Name, address, phone, email as on the CSLB (Contractors State License Board) license; constructor or designer; license # (verify on CSLB); DIR # (verify); type of work in words; dollar value; certification (SLBE, ELBE, DBE, DVBE…) and certifying agency, proof attached except OBE, SLBE, ELBE; joint venture flag</td><td>At bid</td></tr>
<tr><td>SLBE Good Faith Effort file and Form AA60 (List of Work Made Available)</td><td>Only if short of the goal; searchable PDF</td><td>5 PM, 3 working days after opening</td></tr>
<tr><td>Bonds, insurance, signed contract, Other Than First Tier sub list (N/A if none)</td><td>Awarded bidder</td><td>10 working days after contract forms (14 days in the Instructions)</td></tr>
<tr><td>Vendor registration of subs and suppliers; Business Tax Certificate; Affidavit of Disposal (notarized, at completion)</td><td>Low bidder / contractor and subs</td><td>Per Notice of Intent to Award / on request / completion</td></tr>
</tbody></table></div>`,
  watch: `<p>Fill and sign B–E the week before and save as clearly named PDFs; on bid day you only attach. If the low bidder's subs aren't City vendors in time, the City can rescind and go to the next bidder; as a sub, register the day you quote a City job.</p>`,
  deeper: `<p>PCC (Public Contract Code) §6109: a contractor or sub debarred under Labor Code §1777.1 or §1777.7 may not bid, be awarded or work on public works; a contract with a debarred sub is void, and the prime pays the wages of that sub's workers who were allowed on the job. SDMC (San Diego Municipal Code) §22.0807 lists failure to submit required documents as a debarment ground. The 2026 package (K-26-2396) keeps this schedule and adds an off-road diesel fleet compliance form from the awarded bidder. HSCC, Inc.'s real EMTS Other Than First Tier form was marked “N/A.”</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Required Documents Schedule, Electronically Submitted Forms (p. 225), List of Subcontractors forms (pp. 223–224), Instructions to Bidders §§5, 7, 12, 18, 22; K-26-2396-DBB-3-A; Cal. Public Contract Code §6109 (via california.public.law, verified Oct. 2026)."
},

{ h: "What you certify by submitting",
  lead: "Submitting a City e-bid or signing a Caltrans bid book certifies all of these; a “yes” answer isn't automatically fatal, a false one is.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Certification</th><th>You affirm</th></tr></thead>
<tbody>
<tr><td>Non-collusion (PCC §7106, 23 U.S.C. 112); City Bidder's General Information</td><td>Genuine bid, no sham bidder, no price agreements or agreements to stay out; documents and addenda accepted</td></tr>
<tr><td>Debarment and Suspension (49 CFR Part 29)</td><td>No owner or officer debarred, suspended or recently convicted of public-contract fraud</td></tr>
<tr><td>City: Drug-Free Workplace (CP 100-17), ADA (CP 100-4), Contractor Standards Pledge (SDMC §22.3004), Equal Benefits (§22.4300), Equal Pay (§§22.4801–22.4809), Product Endorsement (A.R. 95.65)</td><td>Programs in place; flowed into every subcontract; subs sign their own pledge; equal pay notice posted; no advertising City use without approval</td></tr>
<tr><td>Caltrans federal: Lobbying (SF-LLL on federal-aid jobs), EEO (41 CFR 60-1.7)</td><td>No paid federal lobbying or disclosed; prior EEO reports filed</td></tr>
<tr><td>Caltrans state: PCC §6101, §7110, §10232, §10162, §10285.1</td><td>Employment eligibility; child support orders honored; ≤ 1 NLRB contempt finding in 2 years; disqualification for law or safety violations (yes/no); no bid-rigging or fraud conviction in 3 years</td></tr>
<tr><td>Bidder Responsibility Questionnaire</td><td>Any “nonresponsible” finding against you or owners in 10 years; untruthful answers make the bid nonresponsive</td></tr>
</tbody></table></div>`,
  watch: `<p>A false certification can mean “criminal prosecution, rejection of the bid, rescission of the award” or termination. If any answer could be yes, involve the owner and an attorney before bid week; exceptions written in the space provided “will not necessarily result in denial of award.” Add the City's drug-free, ADA, standards and equal pay language to every subcontract on a City job.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Certifications and Forms (pp. 213–221); ACCU Construction bid book, 11-428704, Certifications pages 21–31."
},

{ h: "Caltrans bid book and its form deadlines",
  lead: "Part of the Caltrans book is due at bid time and part days later; the schedule is in SP 2-1.33B.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Form</th><th>Purpose</th><th>Due (11-431064, federal-aid, DBE goal)</th></tr></thead>
<tbody>
<tr><td>Bid to the Department (DES-OE-0102.1)</td><td>Company, license and DIR numbers, addenda, security; signature affirms every certification</td><td>Bid time</td></tr>
<tr><td>Bid Item List</td><td>Unit price and item total per item</td><td>Bid time</td></tr>
<tr><td>Subcontractor List (DES-OE-0102.2C)</td><td>Name, city, license, DIR, items and percent of each</td><td>Bid time; copies showing DIR numbers within 10 days</td></tr>
<tr><td>Small Business Status (0102.4); Opt-out of price index adjustments (01012.a)</td><td>Statistics; opt-out only if chosen</td><td>Bid time</td></tr>
<tr><td>Certified Small Business Listing (non-small business preference)</td><td>Only if requesting the preference</td><td>4 PM, 2nd business day</td></tr>
<tr><td>DVBE (Disabled Veteran Business Enterprise) quotes</td><td></td><td>4 PM, 4th business day</td></tr>
<tr class="hl"><td>DBE (Disadvantaged Business Enterprise) Commitment, Confirmations, Good Faith Efforts</td><td>Each DBE certified for the work it will do</td><td>4 PM, 5th day</td></tr>
<tr><td>Bidder's Bond (0102.3)</td><td>Electronic bond ID, registry, 10%</td><td>Bid time</td></tr>
</tbody></table></div>`,
  ex: `<p>DBE goals: 14% on 11-428704, 26% on 11-431064, a heavy goal for a $4.25 million landscape job, so a DBE-certified landscape sub got a call from every prime. After-bid forms may be turned in at bid time; if ready, do it. 11-428704's lowest bidder lost on a late DBE package.</p>`,
  src: "ACCU Construction bid book, Caltrans 11-428704; Caltrans 11-431064 Special Provisions, Notice to Bidders and section 2-1.33B (Bid Form Submittal Schedule), sections 2-1.15C and 2-1.18C."
},

{ h: "The bid bond",
  lead: "The bid bond guarantees you'll sign and furnish contract bonds if you win; walk away and the surety pays the agency's loss up to the bond amount.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Party</th><th>Who</th><th>ACCU's 11-428704 bond</th></tr></thead>
<tbody>
<tr><td>Principal</td><td>The bidder, exactly as on its CSLB license</td><td>ACCU Construction, Inc., Santa Ana</td></tr>
<tr><td>Surety</td><td>An admitted surety insurer (licensed in California; verify at insurance.ca.gov)</td><td>Travelers Casualty and Surety Company of America</td></tr>
<tr><td>Obligee</td><td>The agency, exactly as in the documents</td><td>State of California, Department of Transportation</td></tr>
<tr><td>Attorney-in-fact</td><td>Signs for the surety under a power of attorney, which must be attached, signed, current and name the signer</td><td>Signature line on paper form</td></tr>
<tr><td>Electronic record</td><td>Bond ID and registry</td><td>SCA21939599, Surety2000, 10%</td></tr>
</tbody></table></div>
<ul>
<li><strong>Amount:</strong> usually ≥ 10% of total bid including additive items; City requires bid security on bids of $250,000 and up. Sureties often write “10% of the amount bid” so a late price change can't leave it short.</li>
<li><strong>Forms:</strong> surety bond, cashier's check, certified check (Caltrans also cash or a registry bond). City: PDF at bid, original by 5 PM next working day; either missing = rejected.</li>
<li><strong>Check:</strong> obligee, project and bid number, legal name, amount, signatures and seal, power of attorney.</li>
</ul>`,
  exLabel: "Bond amounts",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Case</th><th>Math</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>City park bid, base only (made-up)</td><td>$412,500 × 10%</td><td class="num">$41,250.00</td></tr>
<tr><td>Same with $36,000 additive alternate (security includes additive items)</td><td>$448,500 × 10%</td><td class="num">$44,850.00</td></tr>
<tr><td>Cashier's check instead</td><td>Your cash tied up until returned after award</td><td class="num">$44,850.00</td></tr>
<tr><td>ACCU, 11-428704</td><td>$1,176,120 × 10%</td><td class="num">$117,612.00</td></tr>
<tr><td>Griffith, 11-431064 bid bond</td><td>$4,247,463.10 × 10%</td><td class="num">$424,746.31</td></tr>
<tr><td>11-431064 payment bond (100%)</td><td>$4,247,463.10 × 100%</td><td class="num">$4,247,463.10</td></tr>
<tr><td>11-431064 performance bond (50%)</td><td>$4,247,463.10 × 50%</td><td class="num">$2,123,731.55</td></tr>
</tbody></table></div>
<p>Bid bonds cost little or nothing; the surety earns on contract bonds, whose premium is a job cost (<a href="#m10-1">Module 10</a>). A bid beyond your single-job limit means no bid bond: quote the primes instead.</p>`,
  deeper: `<p>City wording: the surety “will pay to the City the damages, not exceeding the sum of 10% of the amount of the Bid” if the winner fails to sign and furnish bonds; the winner signs and gives bonds and insurance within 14 days of receiving the contract (the 2023 schedule says 10 working days). Caltrans 2018 Std. Specs 2-1.34: cash, cashier's check, certified check, a signed bidder's bond by an admitted surety insurer, or an electronic bond through an approved registry; 3-1.05: payment bond ≥ 100%, performance bond ≥ 50% of total bid. CCP (Code of Civil Procedure) §995.630: an admitted surety's bond is accepted without further acknowledgment if executed under penalty of perjury or notarized, and the signer's power of attorney is attached or a certified copy is on file with the county clerk. Bond basics: <a href="#m2-1">Module 2</a>.</p>`,
  src: "City of San Diego K-24-1952 Instructions to Bidders §§19, 22; Caltrans 11-428704 Notice to Bidders and ACCU Bidder's Bond pages and Surety2000 record; Caltrans 2018 Standard Specifications 2-1.34, 3-1.05; Caltrans 11-431064 Bid Summary; Cal. Code of Civil Procedure §995.630 (via california.public.law, verified Oct. 2026). Park cases are made-up numbers."
},

{ h: "Listing subcontractors: the Fair Practices Act",
  lead: "The Subletting and Subcontracting Fair Practices Act makes the prime list its subs with the bid, so subs can't be shopped after award.",
  body: `<ul>
<li><strong>Threshold:</strong> list every sub performing more than ½ of 1% of the prime's total bid; on streets and highways (including bridges), more than ½ of 1% or <strong>$10,000, whichever is greater</strong>.</li>
<li><strong>Content:</strong> name, location, CSLB license #, DIR registration #, portion of work. Agencies add dollar value and certification; Caltrans adds items and percents.</li>
<li><strong>One sub per portion.</strong> No sub listed, or two for the same portion, means the prime performs that portion itself.</li>
<li><strong>Substitution</strong> only with agency consent, for reasons in the statute.</li>
<li><strong>Penalty:</strong> cancellation of the contract or a penalty up to 10% of the subcontract; CSLB discipline.</li>
</ul>`,
  ex: `<p><strong>Threshold math:</strong> ACCU's 11-428704 bid $1,176,120.00 × 0.005 = $5,880.60; highway job, so <strong>$10,000</strong> governs. City EMTS (estimate $1,600,000): 0.5% = $8,000. The City's Instructions say over 0.5%; its general provisions say over 0.5% or $10,000, whichever is greater. When a package is inconsistent, list every sub over the lower number.</p>`,
  watch: `<p>The City also required the EMTS prime to self-perform at least 50% of the base bid. Check the self-performance rule before planning to sub out large parts of a prime bid.</p>`,
  deeper: `<ul>
<li>PCC §4104: listing requirements; a wrong license or DIR number may be corrected within 24 hours after opening if the listed name matches.</li>
<li>§4106: failure to list = prime performs. §4107: substitution. §4107.5: clerical listing error. §4110: penalties. §4111: CSLB discipline.</li>
<li>Labor Code §1771.1(c): a listed sub not DIR-registered may register and pay the penalty within 24 hours after opening, or be replaced under §4107.</li>
</ul>`,
  src: "Cal. Public Contract Code §§4100–4114 (esp. 4104, 4106, 4107, 4107.5, 4110, 4111); Labor Code §1771.1; City of San Diego K-24-1952 Instructions §12, Attachment C §G, SSP 3-2, Attachment D §1.9.1."
},

{ h: "Listing worked example · Griffith on 11-431064",
  lead: "What the winning prime actually listed on the SR-905 landscaping job, tested against the threshold.",
  body: `<p><strong>Threshold:</strong> $4,247,463.10 × 0.005 = <strong>$21,237.32</strong>, which exceeds $10,000, so it governs.</p>
<div class="tablewrap"><table>
<thead><tr><th>Listed sub (city)</th><th>Items</th><th class="num">Value at Griffith's prices</th><th>Over?</th></tr></thead>
<tbody>
<tr><td>Perry Electric (Santee)</td><td>65 subsurface locator (100%), 66 electric service for irrigation (100%)</td><td class="num">$9,400 + $50,000 = $59,400</td><td>Yes</td></tr>
<tr><td>Quality Hydroseeding &amp; Restoration (Ramona)</td><td>63 hydroseed (100%): 797,000 SQFT × $0.10</td><td class="num">$79,700</td><td>Yes</td></tr>
<tr><td>SWPPQUEEN (Sacramento)</td><td>10 job site management, 11 SWPPP (storm water pollution prevention plan), 13 sampling days (100% each)</td><td class="num">$8,550 + $3,000 + $1,440 = $12,990</td><td>No, listed anyway</td></tr>
<tr><td>Synergy Traffic Control (Escondido)</td><td>6 traffic control (64%), 7, 8, 9 (100%), plus “ramp closures and attenuator truck”</td><td class="num">$57,600 + $7,500 + $6,600 + $26,400 = $98,100</td><td>Yes</td></tr>
<tr><td>United General Construction (Poway)</td><td>20 manage solid waste (100%), 21 roadside clearing (100%)</td><td class="num">$68,250 + $55,000 = $123,250</td><td>Yes</td></tr>
</tbody></table></div>`,
  ex: `<p>No landscape sub listed: by law Griffith self-performs all planting and irrigation (items 22–62 and 64). Item 6 at 64% shows a partial-item listing (Griffith kept 36%). SWPPQUEEN shows you may list below the threshold.</p>`,
  watch: `<p>Values use Griffith's bid prices as a stand-in; subcontract amounts weren't published. The Bid Summary shows items and percents only.</p>`,
  src: "Caltrans 11-431064 Bid Summary, List of Subcontractors (bidder 03, Griffith Company) and Contract Proposal of Low Bidder, bid opening 05/17/2022."
},

{ h: "Listing worked example · City park bid as prime",
  lead: "Every City prime bid needs three checks: listing line, self-performance and the SLBE goal (made-up numbers).",
  body: `<p>Base bid <strong>$412,500</strong>. Listing line: $412,500 × 0.005 = <strong>$2,062.50</strong>.</p>
<div class="tablewrap"><table>
<thead><tr><th>Who</th><th>Type</th><th class="num">Value</th><th>List?</th><th class="num">SLBE credit</th></tr></thead>
<tbody>
<tr><td>Site electrical (SLBE)</td><td>Constructor</td><td class="num">$38,000</td><td>Yes</td><td class="num">$38,000</td></tr>
<tr><td>Concrete flatwork</td><td>Constructor</td><td class="num">$61,500</td><td>Yes</td><td class="num">$0</td></tr>
<tr><td>Striping and signs</td><td>Constructor</td><td class="num">$1,800</td><td>Not required</td><td class="num">$0</td></tr>
<tr><td>Soil testing lab</td><td>Consultant</td><td class="num">$1,200</td><td>Not required</td><td class="num">$0</td></tr>
<tr><td>Boulders and DG supplier (SLBE, not manufacturer)</td><td>Supplier</td><td class="num">$9,800</td><td>Supplier list, for credit</td><td class="num">× 60% = $5,880</td></tr>
</tbody></table></div>
<ul>
<li><strong>Self-performance:</strong> subs $102,500; own forces $310,000 ÷ $412,500 = <strong>75.2%</strong> ≥ 50%.</li>
<li><strong>SLBE at a 20% goal:</strong> need $82,500; have $38,000 + $5,880 = $43,880 = 10.6%. Short: GFE (Good Faith Effort) file and AA60 due 5 PM, 3 working days after opening.</li>
<li>Suppliers credit at 60% unless they manufacture or substantially alter the material; unmarked = 60%. Firms must be certified by the bid due date.</li>
</ul>`,
  watch: `<p>Self-performance definitions vary (labor and equipment only, or materials too): read SSP section 3-2. Start outreach the week you decide to bid; a GFE file built on bid day looks like one. As a sub, put your SLBE/ELBE status on every quote to a City prime (EMTS prime HSCC listed Coast Landscaping).</p>`,
  src: "City of San Diego K-24-1952 Notice Inviting Bids §7, Instructions §§12.1–12.2, Required Documents Schedule, SSP 3-2; K-26-2396."
},

{ h: "Substitutions and listing errors",
  lead: "A listed sub can be replaced only for a statutory reason, with agency consent, on short deadlines.",
  body: `<div class="twocol">
<div><h3>Grounds (PCC §4107)</h3><ul>
<li>Listed sub won't sign at its bid price and scope</li>
<li>Bankruptcy or insolvency</li>
<li>Fails or refuses to perform</li>
<li>Can't furnish bonds the prime required in its request (PCC §4108)</li>
<li>Inadvertent clerical listing error (§4107.5)</li>
<li>Unlicensed or barred from public works</li>
<li>Agency finds the work substantially unsatisfactory, delays disruptive, or the sub not responsible</li>
</ul></div>
<div><h3>Clerical error clock (§4107.5)</h3><ul>
<li><strong>2 working days</strong> after opening: prime's written notice to agency, wrongly listed sub and intended sub</li>
<li><strong>6 working days:</strong> listed sub may object in writing; silence = consent</li>
<li><strong>8 working days:</strong> affidavits due</li>
<li>Hearing if there's an objection</li>
</ul></div>
</div>`,
  ex: `<p><strong>As a sub:</strong> if the prime asks you to drop your price or step aside, the agency must notify you in writing before approving a substitution, and you get 5 working days to object (§4107). Keep your quote and the prime's sub list.</p>`,
  watch: `<p>“A cheaper sub called after the bid” is not a ground. That is the bid shopping the Act forbids.</p>`,
  src: "Cal. Public Contract Code §§4107, 4107.5, 4108 (via california.public.law, verified Oct. 2026)."
},

{ h: "Bid day, hour by hour",
  lead: "For a 2:00 PM bid: own pricing done the day before, submit by 1:15 PM, and change nothing after unless a real error turns up.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>When</th><th>What</th></tr></thead>
<tbody>
<tr><td>Day before, 3 PM</td><td>Own pricing done; bond in hand or confirmed; forms pre-filled; addenda check</td></tr>
<tr><td>Day before, 5 PM</td><td>Call every sub and supplier: “Are we getting your number, by what time?”</td></tr>
<tr><td>7:00 AM</td><td>Late-addendum check; log in and test the Digital ID</td></tr>
<tr><td>8:00–11:00</td><td>Quotes arrive; level each; enter in estimate; write arrival times</td></tr>
<tr><td>11:00</td><td>Missing quotes: plug or self-perform; run markup and total</td></tr>
<tr><td>11:30–12:15</td><td>Late quotes; final sub choices; sub list with license and DIR numbers; SLBE/DBE totals</td></tr>
<tr><td>12:15–12:45</td><td>Enter prices; checker verifies every unit price and extension</td></tr>
<tr><td>12:45–1:00</td><td>Signer's final review; sign</td></tr>
<tr class="hl"><td>1:00–1:15</td><td><strong>Submit;</strong> save confirmation and screenshots</td></tr>
<tr><td>1:15–1:55</td><td>Resubmit only for a real error; confirm again</td></tr>
<tr><td>2:00–5:00</td><td>Watch opening; download results; recheck math; start post-bid calendar; thank everyone who quoted</td></tr>
</tbody></table></div>`,
  watch: `<p>Slow uploads, a required field the system won't skip, or an expired login can each eat 20 minutes. Silence all notifications except quotes; errors happen mid-column.</p>`
},

{ h: "Leveling last-minute quotes",
  lead: "Bring every quote to the same scope before comparing; the cheapest on paper often isn't.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Traffic control quotes (made-up)</th><th class="num">Sub A</th><th class="num">Sub B</th><th class="num">Sub C</th></tr></thead>
<tbody>
<tr><td>Quoted</td><td class="num">$38,000</td><td class="num">$47,000</td><td class="num">$44,500</td></tr>
<tr><td>Attenuator truck, 12 closure days × $1,100 (A excluded)</td><td class="num">+$13,200</td><td class="num">incl.</td><td class="num">incl.</td></tr>
<tr><td>Arrow board, 20 days × $85 (C excluded)</td><td class="num">incl.</td><td class="num">incl.</td><td class="num">+$1,700</td></tr>
<tr><td>Prevailing wage, DIR registered, license checked</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td><strong>Leveled</strong></td><td class="num"><strong>$51,200</strong></td><td class="num"><strong>$47,000</strong></td><td class="num"><strong>$46,200</strong></td></tr>
</tbody></table></div>
<p>List C and carry $46,200, not $44,500, unless C confirms the arrow board in writing. A, “$9,000 cheaper,” is $5,000 higher than C.</p>
<ul>
<li>Check every quote for backflow, pads, tax, freight, bonds, prevailing wage, traffic control.</li>
<li>No quote: carry a marked plug from your own pricing or history. A plug over the threshold with no sub listed declares you'll self-perform (PCC §4106); after award you can't swap in a cheaper sub just because one calls.</li>
<li>As a sub, you may quote every prime on the planholders list.</li>
</ul>`,
  watch: `<p>Log each quote's arrival time and who you spoke with; with the written quote, it's your proof if a sub says “that wasn't my price.”</p>`,
  src: "Cal. Public Contract Code §4106; City of San Diego K-24-1952 Instructions §17."
},

{ h: "Math checks before submit",
  lead: "Two people, two methods: recompute every extension and compare every unit price to the estimate and history.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Error (11-431064 items, Griffith's prices)</th><th>Math</th><th>Result</th><th>Caught by</th></tr></thead>
<tbody>
<tr><td>1. Decimal slip in unit price, item 55 (1" pipe, 40,785 LF)</td><td>Meant $4.60 × 40,785 = $187,611.00; typed $0.46 → $18,761.10</td><td>Numbers agree, nothing to correct: held to $0.46, a $168,849.90 loss</td><td>Unit price vs. estimate and history (other bidders: $4.70, $7.20)</td></tr>
<tr><td>2. Decimal slip in item total only</td><td>$4.60 unit, $18,761.10 total</td><td>Rule 2.1.2: Caltrans picks the number closest to its estimate</td><td>Recomputing extensions</td></tr>
<tr><td>3. Wrong quantity, item 28 (Group A)</td><td>6,800 vs. 6,880 × $6.90: $46,920 vs. $47,472</td><td>Total $552 low; the winning margin was $6,973.00</td><td>Quantity check against Bid Item List and addenda</td></tr>
<tr><td>4. Rounding, item 56</td><td>26,844 × $5.10 = $136,904.40 → $136,904</td><td>Violates “do not round”; totals no longer match prices</td><td>Recomputing extensions</td></tr>
</tbody></table></div>
<ul>
<li>Use addendum quantities (11-428704 Addendum 1 changed three items).</li>
<li>Bid form total and estimate summary must match exactly; every line priced.</li>
<li>Sort by item total to spot outliers; compare the total to the engineer's estimate and past results (<a href="#m15-1">Module 15</a>).</li>
</ul>`,
  watch: `<p>E-forms do the arithmetic, so the risk moves to the unit price and quantity you type. Some agencies reserve the right to reject unbalanced bids; know the risk before loading markup into one item.</p>`,
  src: "Caltrans 11-431064 Bid Summary (unit prices of all three bidders); Bid to the Department DES-OE-0102.1, rules 2.1–2.5."
},

{ h: "Submitting and confirming receipt",
  lead: "A bid isn't in until the agency's system says so; get proof, and submit early enough to fix a rejection.",
  body: `<ul>
<li>PlanetBids: save the confirmation and status. Bid Express: save the Bid Submittal Receipt. Paper: clerk's time stamp; the agency's clock rules.</li>
<li>Every revision before the deadline: confirm the new version is the one received.</li>
<li>Bid-day file: final estimate, quotes with arrival times, screenshots, confirmation, bond.</li>
</ul>`,
  exLabel: "1:40 PM, the City upload won't submit",
  ex: `<ol class="steps">
<li class="hl"><div><b>1:40 Read the error</b>Usually a missing required field: an unacknowledged addendum, a blank sub list column, a missing upload.</div></li>
<li><div><b>1:42 Fix it tab by tab</b>Look for red fields.</div></li>
<li><div><b>1:45 Help desk and backup at once</b>Bid number ready; note time and name. Second computer, browser, hotspot; cookies on.</div></li>
<li><div><b>1:55 Email the Contract Specialist</b>Screenshots and times; it records what happened.</div></li>
<li><div><b>2:00 Deadline holds</b>The City isn't responsible for bids that don't arrive. A 1:15 submit leaves 45 minutes for all of this.</div></li>
</ol>`,
  src: "City of San Diego K-24-1952 Instructions §§2.3–2.7; Caltrans Electronic Bidding Guide."
},

{ h: "Opening, results and bid tabs",
  lead: "The lowest number at opening is only the apparent low bidder; award goes to the lowest responsive, responsible bidder.",
  body: `<ul>
<li><strong>City:</strong> results post in PlanetBids after the deadline (that posting announces the apparent low bidder); no results by phone, but you can request them by mail.</li>
<li><strong>Caltrans:</strong> read by webcast; the Bid Summary later lists every total, unit price and listed sub (the <a href="#lab">Real Bid Lab</a> is built from these).</li>
<li><strong>Agency review:</strong> responsive (every rule and form) and responsible (licensed, qualified, able).</li>
<li><strong>Apparent low:</strong> recheck math today; get post-bid items in early; call the surety about contract bonds; confirm subs' DIR registration. <strong>2nd or 3rd:</strong> stay ready, keep bond and quotes alive, watch notices.</li>
<li><strong>Record:</strong> every bidder's total, your rank and gap, engineer's estimate, landscape and irrigation items line by line; as a sub, ask the primes the result and whether you were listed. Write lessons the same week.</li>
</ul>`,
  ex: `<p>11-428704: top three within 5% and 22% under the engineer's estimate. 11-431064: winner $3,135.90 under the $4,250,599 engineer's estimate and $6,973 under second place.</p>`,
  src: "City of San Diego K-24-1952 Instructions §§2.5, 21, 21.2; Caltrans 11-428704 Notice to Bidders and Bid Summaries for 11-428704 and 11-431064."
},

{ h: "Post-bid deadlines on real dates",
  lead: "Convert every rule to a calendar date before bid day; working days skip weekends and holidays, calendar days don't.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rule</th><th>City EMTS · opened Wed Dec 6, 2023, 2 PM</th><th>Caltrans 11-431064 · opened Tue May 17, 2022</th></tr></thead>
<tbody>
<tr><td>24 hours: fix a listed sub's license or DIR number (PCC §4104); unregistered sub registers and pays penalty</td><td>Thu Dec 7, 2 PM</td><td>Wed May 18</td></tr>
<tr><td>City original bid bond: 5 PM, 1 working day</td><td>Thu Dec 7, 5 PM</td><td></td></tr>
<tr><td>Clerical listing error notice: 2 working days (§4107.5)</td><td>Fri Dec 8</td><td>Thu May 19</td></tr>
<tr><td>Non-small business preference listing: 4 PM, 2nd business day (if claimed)</td><td></td><td>Thu May 19, 4 PM</td></tr>
<tr><td>City SLBE GFE and AA60; City bid mistake notice: 3 working days, 5 PM</td><td>Mon Dec 11, 5 PM</td><td></td></tr>
<tr><td>DVBE quotes: 4 PM, 4th business day</td><td></td><td>Mon May 23, 4 PM</td></tr>
<tr class="hl"><td>DBE Commitment, Confirmations, GFE: 4 PM, 5th day</td><td></td><td>Sun May 22: the spec moves Saturday or holiday deadlines but doesn't mention Sunday; submit by Fri May 20 or confirm with the Office Engineer</td></tr>
<tr><td>State bid mistake notice: 5 working days (PCC §5103)</td><td>Wed Dec 13 (City's 3-day rule is shorter: use Dec 11)</td><td>Tue May 24</td></tr>
<tr><td>10 days</td><td>Bid protest by 5 PM, 10th calendar day (SDMC §22.3017); day 10 is Sat Dec 16, so <strong>Mon Dec 18</strong></td><td>Fri May 27: copies of bid and sub list with DIR numbers</td></tr>
<tr><td>Contract stage</td><td>City prepares contract documents ≈ Wed Dec 27 (≈21 days); then bonds, insurance, signed contract, other-tier list in 10 working days</td><td>Thu Jun 16: end of 30-day award period unless extended with the bidder's agreement; actual award July 11, 2022</td></tr>
</tbody></table></div>`,
  watch: `<p>11-428704's lowest bid, Marina Landscape at $1,106,287.75, was rated non-responsive for “LATE DBE/DVBE SUBMITTAL”; ACCU won at $1,176,120.00. Mark holidays, set reminders a day early, and get unclear deadlines answered in writing.</p>`,
  src: "City of San Diego K-24-1952 Required Documents Schedule, Notice Inviting Bids §8.2, Instructions §20.4, Attachment D §1.9.1; San Diego Municipal Code §22.3017(a)(1), (a)(5); Caltrans 11-431064 Special Provisions 2-1.33B, sections 2-1.15C, 2-1.18C; Caltrans 2018 Standard Specifications 3-1.04; Cal. Public Contract Code §§4104, 4107.5, 5103; Caltrans Bid Summaries and award data for 11-428704 and 11-431064."
},

{ h: "Bid mistakes: relief",
  lead: "Relief covers only clerical mistakes in filling out the bid, proven in writing within days; judgment errors are yours.",
  body: `<p>PCC §§5100–5110 release a bidder only if:</p>
<ul>
<li>Written notice reaches the agency within <strong>5 working days</strong> after opening (excluding Saturdays, Sundays, state holidays), detailing how the mistake happened;</li>
<li>The mistake made the bid <strong>materially different</strong> from what was intended; and</li>
<li>It was made <strong>filling out the bid</strong>, not an error of judgment or carelessness in inspecting the site or reading plans or specs.</li>
</ul>
<p>Refused: the bid stands, or you forfeit the bond (and may sue to recover it). Relieved: you can't bid that project again (§5105). City 2023 and 2026 Instructions: notice within <strong>3 working days</strong>, proving an “honest, credible, clerical error of a material nature” and “reasonable care.” Use the shorter deadline. Caltrans: Relief of Bid Request to the Office Engineer (Std. Specs 2-1.47).</p>
<p><strong>Steps:</strong> freeze and copy the estimate, recap, quotes and submitted bid; classify clerical vs. judgment; send the notice (bid no., amount, exact error, how it happened, intended amount, worksheets); call the surety the same day.</p>`,
  ex: `<p>Recap total $462,500; typed $412,500 into PlanetBids. A $50,000 clerical error, provable by the worksheet: notice the next morning with the recap attached. Forgetting to price the irrigation sleeves or traffic control is judgment: no relief.</p>`,
  src: "Cal. Public Contract Code §§5101, 5103, 5105 (via california.public.law, verified Oct. 2026); Caltrans 2018 Standard Specifications 2-1.47; City of San Diego K-24-1952 Instructions §20.4; K-26-2396 Instructions."
},

{ h: "Protests and non-responsive bids",
  lead: "Protest real rule violations, on time, stating every ground; when your bid broke a rule, expect a protest.",
  body: `<ul>
<li><strong>Non-responsive:</strong> missing form, bond, sub list or late DBE file; rejected, next bidder moves up. <strong>Waivable irregularity:</strong> a minor technical defect giving no advantage.</li>
<li><strong>Common grounds:</strong> missing sub numbers, wrong license class, unacknowledged addendum, late post-bid documents, self-performance below minimum.</li>
</ul>
<div class="twocol">
<div><h3>City (SDMC §22.3017)</h3><ul>
<li>Written protest received by 5:00 PM on the 10th calendar day after opening; weekend or City holiday → 5 PM next business day</li>
<li>Your own bid rejected: 10 calendar days after City notice</li>
<li>Subject line must say “bid protest”; every legal and factual ground stated, omitted grounds waived</li>
<li>No award until a written decision, which is final</li>
</ul></div>
<div><h3>Caltrans</h3><ul>
<li>Protests to the Office Engineer (Std. Specs 3-1.04)</li>
<li>Ambiguity questions must come before opening; not treated as protests after</li>
<li>Award within 30 days of opening for projects under $200 million unless extended with the bidder's agreement</li>
</ul></div>
</div>
<p><strong>Not protestable:</strong> a listed sub's license or DIR number corrected within 24 hours (PCC §4104), or an unregistered listed sub who registers within 24 hours or is replaced (Labor Code §1771.1(c)).</p>`,
  ex: `<p>11-428704: Marina's late DBE package made it non-responsive; ACCU, second on price, became low responsive bidder and was awarded Oct 1, 2021.</p>`,
  watch: `<p>The City's code says protests aren't for losing bidders to “evaluate the bid… of the winning bidder to have the award overturned.” Read each package's protest section before bid day.</p>`,
  src: "San Diego Municipal Code §22.3017 (docs.sandiego.gov, verified Oct. 2026); City of San Diego K-24-1952 Instructions §§20.3, 20.5, 21.1; Caltrans 2018 Standard Specifications 3-1.04; Caltrans 11-428704 and 11-431064 Notice to Bidders and Bid Summary; Cal. Public Contract Code §4104; Labor Code §1771.1(c)."
},

{ h: "Mistakes that cost the bid",
  lead: "Each of these has thrown out a real low bid; most cost nothing to prevent.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Result</th><th>Prevention</th></tr></thead>
<tbody>
<tr><td>Addendum not acknowledged</td><td>May be non-responsive</td><td>Addenda log; morning check</td></tr>
<tr><td>Bond PDF missing or City original late</td><td>Rejected (City §19.5)</td><td>Request early; courier booked</td></tr>
<tr><td>Wrong obligee or bid number on bond</td><td>Bond may not secure the bid</td><td>Two-minute bond check</td></tr>
<tr><td>Unit price typo</td><td>Held to typed price</td><td>Checker compares every unit price</td></tr>
<tr><td>Sub over threshold not listed, or two subs for one portion</td><td>You self-perform it</td><td>Compute threshold first; one sub per portion</td></tr>
<tr><td>DBE or GFE file late</td><td>Non-responsive (Marina, 11-428704)</td><td>Prepare before bid day; send at bid</td></tr>
<tr><td>Exclusions or notes on the bid form</td><td>Conditional bid, may be rejected</td><td>Ask before bid day</td></tr>
<tr><td>Submitting at 1:55 PM</td><td>No time to fix a rejection</td><td>Submit by 1:15 PM</td></tr>
</tbody></table></div>`
},

{ t: "scorer", id: "mockbid", h: "Mock bid package checklist",
  lead: "Score a practice package before you'd ever submit it for real. 2 = done and checked, 1 = started, 0 = missing. Choices are saved in this browser.",
  items: [
    ["Eligibility", "License class matches the notice; DIR registration current; prequalified for the full amount (City)"],
    ["Documents and addenda", "Every addendum downloaded, logged and acknowledged on the bid form"],
    ["Bid schedule", "Every item priced; unit prices checked against the estimate; extensions and total checked by a second person"],
    ["Bid bond", "Right obligee, bid number, legal name, 10% (including additive items), power of attorney attached"],
    ["Subcontractor list", "Threshold figured; one sub per portion; names, cities, license and DIR numbers checked; items and percents or dollar values"],
    ["Self-performance", "Your own forces meet the package minimum"],
    ["Participation goals", "SLBE/ELBE or DBE totals figured; outreach log or GFE file ready"],
    ["Certifications and uploads", "Every certification read by the signer; required uploads filled in and saved as PDFs"],
    ["Post-bid calendar", "Every after-bid deadline on a real calendar with reminders"],
    ["Submission plan", "Roles assigned; backup computer and internet; submit time set at least 45 minutes before the deadline"]
  ],
  bands: [
    [18, "Ready to bid", "This package could go in."],
    [14, "Close", "Fix every 0 and 1 before a real bid."],
    [0, "Not ready", "Work through the module checklists again."]
  ]
},

{ t: "terms", h: "Words to know",
  lead: "Module-specific terms. The full list is in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Bid Item List / bid schedule", "Items, units and quantities you price."],
    ["Final pay item", "Unit price item paid at bid quantity, not measured quantity."],
    ["Base bid", "The bid without alternates."],
    ["Additive / deductive alternate", "Optional work the agency may add / remove, priced separately or as a credit."],
    ["Bid security", "Bid bond or check guaranteeing you'll sign if you win, usually 10%."],
    ["Principal / surety / obligee", "The bidder / the insurer backing the bond / the agency it protects."],
    ["Attorney-in-fact / power of attorney", "The person signing bonds for the surety / the document authorizing them."],
    ["Admitted surety insurer", "Surety licensed by the California Department of Insurance."],
    ["Payment / performance bond", "Contract bonds after award: workers and suppliers get paid / the work gets done."],
    ["Digital ID", "Electronic signature for submitting online bids."],
    ["Prequalification / MBC", "City approval to bid as prime, up to a maximum bidding capacity."],
    ["Listing threshold", "Over 0.5% of the bid, or $10,000 if greater on streets and highways."],
    ["Substitution", "Replacing a listed sub; only for PCC §4107 grounds with agency consent."],
    ["First-tier / other-than-first-tier sub", "Hired by the prime / hired by another sub."],
    ["Bid shopping", "Pressuring subs for lower prices after the bid; listing law limits it."],
    ["Self-performance", "Share of work the prime must do with its own forces."],
    ["SLBE / ELBE", "City of San Diego Small Local / Emerging Local Business Enterprise."],
    ["DBE / DVBE", "Disadvantaged / Disabled Veteran Business Enterprise (Caltrans and state)."],
    ["GFE / Form AA60", "Good Faith Effort proof when a goal is missed / the City's List of Work Made Available."],
    ["Debarment", "A ban from bidding or working on public contracts."],
    ["Apparent low bidder", "Lowest price at opening, before the agency's review."],
    ["Responsive / responsible", "Followed every bid rule / qualified and able to perform."],
    ["Bid relief", "Release from a bid for a clerical mistake under PCC §§5100–5110."],
    ["Bid protest", "Written challenge to another bid or the award."],
    ["Working day / calendar day", "Agency business day / every day."]
  ]
},

{ t: "quiz", id: "m14", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "On a Caltrans bid your unit price and item total disagree (no decimal-error pattern). Which counts?", a: ["The item total", "The unit price", "Whichever is lower"], c: 1, why: "Rule 2.1 of the Bid to the Department: the unit price prevails." },
    { q: "Your highway bid is $1,176,120. Above what value must a sub be listed?", a: ["$5,880.60", "$10,000", "$117,612"], c: 1, why: "Streets and highways: 0.5% or $10,000, whichever is greater; 0.5% is only $5,880.60." },
    { q: "You list no one for a $40,000 irrigation portion of your prime bid. Legally:", a: ["You can pick a sub after award", "You've agreed to perform it yourself", "The bid is automatically rejected"], c: 1, why: "PCC §4106: failing to list a sub for a portion means the prime performs it." },
    { q: "You typed $0.46 instead of $4.60 for 40,785 LF of pipe, and your item total matches $0.46. Result?", a: ["Caltrans corrects it to $4.60", "You're held to $0.46, about a $168,850 loss", "The bid is rejected"], c: 1, why: "No discrepancy exists to correct, so the typed unit price stands." },
    { q: "Base bid $412,500 plus a $36,000 additive alternate; security must include additive items. Minimum bid bond?", a: ["$41,250", "$44,850", "$448,500"], c: 1, why: "($412,500 + $36,000) × 10% = $44,850." },
    { q: "A City bid opened Wed Dec 6, 2023. The 10th calendar day is Sat Dec 16. Protest deadline?", a: ["Sat Dec 16, 5 PM", "Mon Dec 18, 5 PM", "Wed Dec 20, 5 PM"], c: 1, why: "SDMC §22.3017 moves a weekend deadline to 5 PM the next business day." },
    { q: "Your recap says $462,500; you typed $412,500 into a City PlanetBids bid. What applies?", a: ["Clerical error: written notice with worksheets within 3 working days (City), inside the 5-day state limit", "Judgment error: no relief available", "Resubmit the corrected price after opening"], c: 0, why: "A transcription error provable by worksheets is clerical; the City's 3-working-day rule is the shorter deadline." },
    { q: "City park prime bid $412,500 with a 20% SLBE goal: an SLBE electrical sub at $38,000 and an SLBE non-manufacturer supplier at $9,800. Status?", a: ["Goal met at 11.6%", "Short at 10.6%; GFE and AA60 due 5 PM, 3 working days after opening", "Short; GFE due with the bid"], c: 1, why: "$38,000 + 60% × $9,800 = $43,880 = 10.6% of $412,500, below the $82,500 needed." },
    { q: "Traffic control quotes level to $51,200 (A), $47,000 (B) and $46,200 (C, before confirming its arrow board). What do you list and carry?", a: ["A at $38,000, its quoted price", "C, carrying $46,200 unless it confirms the arrow board in writing", "B, since it's all-inclusive"], c: 1, why: "Compare leveled prices and carry the leveled number until the exclusion is resolved." },
    { q: "A listed sub refuses to sign at its quoted price. Can the prime substitute?", a: ["Yes, freely", "Yes, with agency consent under PCC §4107", "Never"], c: 1, why: "Refusal to sign at the bid price is a statutory ground, but the agency must consent." }
  ]
},

{ t: "practice", id: "m14", h: "Practice assignments",
  lead: "Build a real package and run a real bid day without submitting.",
  items: [
    { h: "Read a real package and build its calendar", hrs: 1, d: "<p>Download an open or recent City landscape job from PlanetBids (via <a href=\"https://www.sandiego.gov/cip/bid-contracting\" target=\"_blank\" rel=\"noopener\">Bid &amp; Contracting Opportunities</a>), or use the <a href=\"https://www.sandiego.gov/sites/default/files/2024-02/k-24-1952-dbb-3-a.pdf\" target=\"_blank\" rel=\"noopener\">EMTS package</a> or <a href=\"#lab-11-431064\">11-431064</a>. Summarize the cover and NIB like the K-24-1952 table, list every form with signer, certification and due date, and put every post-bid deadline (including protest) on a real calendar assuming opening next Wednesday.</p>" },
    { h: "Walk through PlanetBids without submitting", hrs: 0.5, d: "<p>Register or log in on the City portal, become a prospective bidder on a current job, and open the eBid screens. List every required field and which can be filled a week early. If you'll bid Caltrans, list what the Electronic Bidding Guide requires for a Bidder ID and Digital ID.</p>" },
    { h: "Build a sub list with real subs", hrs: 0.5, d: "<p>For a made-up total bid, compute the threshold. Pick real local traffic control, electrical and concrete subs, verify each CSLB license and DIR registration, and fill in the sub list. Run the self-performance and SLBE math as in the City park example.</p>" },
    { h: "Ask your surety for a sample bid bond", hrs: 0.25, d: "<p>Ask how they issue PlanetBids and Caltrans electronic bonds and how much notice they need; get a sample with power of attorney and check principal, surety, obligee, amount and admitted status on insurance.ca.gov.</p>" },
    { h: "Math error drill", hrs: 0.5, d: "<p>Have a coworker take 15 items from the <a href=\"#lab-11-431064\">11-431064 lab</a> with your prices and plant four errors: decimal slip, wrong quantity, rounded total, wrong addition. Find them with the two-method check and note which check caught each.</p>" },
    { h: "Timed bid-day drill", hrs: 1, d: "<p>Starting at 10:00 AM with a priced estimate (your Module 15 lab prices), have a coworker send three made-up sub quotes at 11:00, 12:00 and 12:30, one with a hidden exclusion. Level them, finish the sub list, enter prices, have every extension checked, and be ready to submit by 1:15 PM. Record where you lost time.</p>" },
    { h: "Read a real bid tab", hrs: 0.5, d: "<p>Open a closed City landscape job on PlanetBids or the 11-431064 Bid Summary. Record every total, the first-to-third gap, each bidder's listed subs with items and percents, and any non-responsive bid and why. Write three lessons.</p>" }
  ]
},

{ h: "Module 14 summary",
  lead: "Public bids are won on price and lost on paperwork.",
  body: `<ul>
<li>Read the cover and NIB first: license class, prequalification, goals, award basis, question deadline.</li>
<li>Set up DIR, prequalification, portals, Digital IDs and surety weeks ahead; pre-fill every non-price form.</li>
<li>Caltrans: unit price prevails; don't round; every line priced. Check alternates against the basis of award.</li>
<li>Bid bond ≥ 10% including additive items; correct principal, obligee and project; power of attorney attached; City original next working day.</li>
<li>List every sub over 0.5% of the bid ($10,000 floor on highways), one per portion; substitution only under PCC §4107 with consent; clerical listing errors on the §4107.5 clock.</li>
<li>Level every quote, run two-method math checks, submit by 1:15 PM, save proof.</li>
<li>Calendar every post-bid deadline; relief only for clerical errors within 3–5 working days; City protests by 5 PM on the 10th calendar day.</li>
</ul>
<p><strong>Next: <a href="#m15-1">Module 15 · Real Bid Practice</a></strong></p>`
}
]
});
