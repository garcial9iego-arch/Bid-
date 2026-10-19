(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 14, hours: 9, title: "Submitting Public Bids and Bid Day",
slides: [

{ t: "cover",
  h: "Submitting Public Bids and Bid Day",
  lead: "A public bid is a legal offer with strict rules. The right price can still lose if one form is missing, one sub isn't listed, the bond is wrong or the upload finishes a minute late. This module turns bid day into a checklist.",
  objectives: [
    "Submit paper and electronic public bids step by step (PlanetBids, Bid Express)",
    "Fill out a bid schedule with unit prices, lump sums and alternates, and catch math errors before they cost you",
    "Explain every form in a real City of San Diego package and a real Caltrans bid book, and what each certifies",
    "Get the bid bond right, including the power of attorney, and figure bid and contract bond amounts",
    "List subcontractors the way the law requires, with worked threshold examples from real bids",
    "Run bid day hour by hour, level last-minute quotes, and build the post-bid deadline calendar",
    "Know what to do about a bid mistake or a protest, and get and use the bid results"
  ],
  time: [["Reading and slides", "4 h"], ["Practice assignments", "5 h"], ["Module total", "9 h"]],
  body: `<p>This module uses three real packages: the City of San Diego's <strong>EMTS (Embarcadero) Boat Dock Esplanade</strong> park job (K-24-1952-DBB-3-A, bid Dec 6, 2023), Caltrans <strong>11-428704</strong> (<a href="#m15-1">Module 15</a>), and Caltrans <strong>11-431064</strong>, the SR-905 Otay Mesa landscaping job (bid May 17, 2022). Agencies change their forms. Always follow the package in front of you.</p>`,
  src: "City of San Diego bidding documents K-24-1952-DBB-3-A (2023) and K-26-2396-DBB-3-A (2026); Caltrans 11-428704 Special Provisions and ACCU Construction bid book; Caltrans 11-431064 Special Provisions and Bid Summary."
},

{ h: "How public bids are turned in",
  lead: "Most San Diego agencies now take bids online. A few still take sealed paper bids. Either way, the deadline is absolute.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Method</th><th>Who uses it</th><th>How it works</th></tr></thead>
<tbody>
<tr><td><strong>PlanetBids</strong></td><td>City of San Diego and many local cities, school and water districts</td><td>Enter prices into the online bid form, fill in the subcontractor list, upload the bond and forms, then submit. Each agency has its own portal and login.</td></tr>
<tr><td><strong>Bid Express</strong></td><td>Caltrans</td><td>Caltrans posts the bid book; you fill it in and submit it through Bid Express with a digital ID (an electronic signature). You get a Bid Submittal Receipt by email.</td></tr>
<tr><td><strong>Sealed paper bid</strong></td><td>Some smaller agencies and districts</td><td>Signed forms in a sealed envelope, marked as the package says, delivered to the named office before the time on its clock.</td></tr>
</tbody></table></div>
<p><strong>Rules that are the same everywhere:</strong> late bids are not accepted. Bids stay sealed until the deadline. You can change or withdraw your bid only until the deadline. After that, your bid is a firm offer.</p>`,
  ex: `<p>The City's instructions warn that uploading “may not be instantaneous” and that “it is the bidder's sole responsibility to ensure their bids are received on time.” Caltrans's Notice to Bidders for 11-428704 said: “Bids received after this time will not be accepted.”</p>`,
  deeper: `<p>By submitting an electronic bid to the City, the bidder certifies “under penalty of perjury” that every form is true, and the e-bid has the same legal effect as a wet (handwritten) signature. The City's bid price is guaranteed for 120 days from bid opening. Caltrans 2018 Standard Specifications 2-1.40: a bidder may withdraw or revise an electronic bid before the bid opening date and time.</p>`,
  src: "City of San Diego K-24-1952 Instructions to Bidders §§2–3; Caltrans 11-428704 Notice to Bidders; Caltrans 2018 Standard Specifications 2-1.40; Caltrans Electronic Bidding Guide."
},

{ h: "Reading the cover of a bid package",
  lead: "The cover page tells you what kind of job it is and which rules apply. Learn to read it in one minute.",
  exLabel: "Real cover: City of San Diego K-24-1952-DBB-3-A",
  body: `<div class="tablewrap"><table>
<thead><tr><th>On the cover</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>BID NO. K-24-1952-DBB-3-A</td><td>The City's bid number. Use it on your bond and every email. DBB means design-bid-build: the design is finished, then contractors bid to build it.</td></tr>
<tr><td>SAP NO. (WBS/IO/CC) S-00319</td><td>The City's internal accounting number for the project. You'll see it on invoices and forms.</td></tr>
<tr><td>Council District 2 · Project type GA</td><td>Where the job is, and the City's project category. Information only.</td></tr>
<tr><td>Subject to SLBE program</td><td>Subcontracting goals for SLBE (Small Local Business Enterprise) and ELBE (Emerging Local Business Enterprise) firms apply.</td></tr>
<tr><td>Prevailing wage rates: State / Federal · Apprenticeship</td><td>Which wage rules apply (Module 11). Here, state prevailing wage and apprenticeship rules.</td></tr>
<tr><td>Bid due 2:00 PM, December 6, 2023 · PlanetBids</td><td>The deadline and the only place to submit.</td></tr>
<tr><td>Engineer of work, landscape architect seals</td><td>Who designed it. Questions still go to the Contract Specialist named on the cover.</td></tr>
</tbody></table></div>`,
  ex: `<p>The cover names the City contact: a Senior Contract Specialist with an email address. That person, not the designer, is who you write to with questions and protests.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, cover and table of contents."
},

{ h: "Reading the Notice Inviting Bids · EMTS walk-through",
  lead: "The Notice Inviting Bids (NIB) is two pages that decide whether you can bid at all. Read it before the plans.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>NIB item (K-24-1952)</th><th>What it said</th><th>What you do with it</th></tr></thead>
<tbody>
<tr><td>2. Competition</td><td>Open to contractors on the City's Prequalified Contractors List</td><td>Check your prequalification and its dollar limit</td></tr>
<tr><td>3. Estimated cost</td><td>$1,600,000</td><td>Size check against your bonding and crew</td></tr>
<tr><td>4. Due date</td><td>December 6, 2023, 2:00 PM</td><td>Calendar it, with your 1:15 PM submit target</td></tr>
<tr><td>6. License</td><td>Prime must hold Class A (General Engineering)</td><td>A C-27-only company can't be the prime here; quote the primes instead</td></tr>
<tr><td>7. Participation</td><td>Mandatory 20% SLBE-ELBE (9.4% SLBE + 10.6% ELBE recommended)</td><td>Plan outreach, or plan the Good Faith Effort file</td></tr>
<tr><td>8.4 Award basis</td><td>“The low Bid will be determined by the Base Bid”</td><td>Alternates don't decide who's low here</td></tr>
<tr><td>9.2 Questions</td><td>Questions received less than 14 days before opening may not be considered</td><td>Send RFIs (requests for information) early</td></tr>
<tr><td>9.4 Answers</td><td>Only written addenda are binding</td><td>Ignore phone answers; log every addendum</td></tr>
</tbody></table></div>`,
  watch: `<p>The license line is a go/no-go item. If the NIB says “Class A,” your C-27 (Landscaping) license alone doesn't qualify you as prime, no matter how much landscape is in the job. Module 3 covers go/no-go decisions.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Notice Inviting Bids §§2–9."
},

{ h: "Set up weeks before, not on bid day",
  lead: "Several accounts take days or weeks to approve. Set them up as soon as you decide to bid.",
  body: `<ol class="steps">
<li><div><b>DIR registration</b>Registration with the Department of Industrial Relations, current for the whole bid and job. See <a href="#m2-10">Module 2</a>.</div></li>
<li class="hl"><div><b>City of San Diego prequalification</b>To bid as a prime, you must be prequalified for the total amount of your bid, alternates included. The City sets your MBC (maximum bidding capacity) from your bond letter and financial statement. Bid documents say to apply at least 2 weeks before bid opening; the City's page says 10 City working days. Use the earlier date.</div></li>
<li><div><b>PlanetBids vendor account</b>Register on each agency's portal and get its digital ID. The City also requires your subs and suppliers to register before award.</div></li>
<li><div><b>Caltrans Bidder ID and Bid Express</b>Request a Bidder ID from the Caltrans Office Engineer, then set up Bid Express and a digital ID. Caltrans says it can take 7 days or longer.</div></li>
<li><div><b>Surety and bond setup</b>Ask your surety agent (the bonding company's agent) how they issue bid bonds for PlanetBids (PDF plus original) and for Caltrans (electronic bond registry). On 11-428704 the winner's bond came through the Surety2000 registry.</div></li>
</ol>`,
  watch: `<p>SLBE-certified firms (Small Local Business Enterprise) that have never done a public works job as prime must finish City training before bidding as a prime, and their capacity is capped at their single-job bond limit or $1 million, whichever is less.</p>`,
  src: "City of San Diego Prequalification Program page; K-24-1952 Instructions to Bidders §§1–2, 5; Caltrans Electronic Bidding Guide; ACCU Construction bid book (11-428704)."
},

{ h: "Electronic bidding step by step · PlanetBids",
  lead: "Each agency's PlanetBids portal looks a little different, but the steps are the same. Do steps 1–3 the week you decide to bid.",
  body: `<ol class="steps">
<li><div><b>1. Register as a vendor</b>On the agency's own PlanetBids portal (the City's is linked from its <a href="https://www.sandiego.gov/cip/bidopps/" target="_blank" rel="noopener">bid opportunities page</a>). Pick your work categories. The City requires a system-assigned Digital ID to submit.</div></li>
<li><div><b>2. Become a prospective bidder</b>Open the bid and register as a prospective bidder so you get addendum notices by email.</div></li>
<li><div><b>3. Download everything</b>Plans, specs, bid documents and every addendum. Save them in the job folder with the date.</div></li>
<li class="hl"><div><b>4. Start the eBid early</b>Open the bid form days ahead. Enter company info, contacts and acknowledge each addendum. Save as you go; you can edit until the deadline.</div></li>
<li><div><b>5. Enter line item prices</b>Unit price for each item. Check the system's totals against your estimate.</div></li>
<li><div><b>6. Enter subcontractors</b>Name, address, license number, DIR (Department of Industrial Relations) number, type of work, dollar value, certification. Also the supplier list if you're counting suppliers toward SLBE goals.</div></li>
<li><div><b>7. Upload the required attachments</b>For the City: bid bond PDF, Pending Actions, Mandatory Disclosure, two Debarment and Suspension forms.</div></li>
<li class="hl"><div><b>8. Submit and save proof</b>The system won't accept a bid missing a required field. Save the confirmation and a screenshot of the bid status.</div></li>
</ol>`,
  watch: `<p>The City's system tracks every login and won't work with cookies disabled. Test your login and browser the day before, on the computer you'll use on bid day.</p>`,
  src: "City of San Diego K-24-1952 Instructions to Bidders §2 (2.1–2.7) and Electronically Submitted Forms page."
},

{ h: "Electronic bidding step by step · Bid Express (Caltrans)",
  lead: "Caltrans bids go in through Bid Express as a signed electronic bid book. The setup takes a week or more, so start long before your first Caltrans bid.",
  body: `<ol class="steps">
<li><div><b>1. Get a Caltrans Bidder ID</b>Caltrans identifies each bidder by an ID number. ACCU's bid book on 11-428704 showed “Bidder ID: VC0000010281.”</div></li>
<li><div><b>2. Open a Bid Express account and get a Digital ID</b>The Digital ID is your electronic signature. It needs identity paperwork; Caltrans says to allow at least 7 days. Bid Express charges for its service; check current fees on the site.</div></li>
<li><div><b>3. Install the bidding software</b>Bid Express uses AASHTOWare Project Bids software to open and fill in the bid book file.</div></li>
<li class="hl"><div><b>4. Download the bid book for the contract</b>And download every addendum. Addenda can replace the bid item list.</div></li>
<li><div><b>5. Fill in every form</b>Bid to the Department, Bid Item List, Subcontractor List, Small Business Status, certifications and the bond page (next slides).</div></li>
<li><div><b>6. Enter the electronic bond</b>Bond ID number and registry (for example Surety2000), from your surety.</div></li>
<li class="hl"><div><b>7. Sign with your Digital ID and submit</b>Wait for the Bid Submittal Receipt email. You may withdraw or revise and resubmit before the opening date and time (Standard Specifications 2-1.40). Confirm the receipt for each new version.</div></li>
<li><div><b>8. Watch the opening and get the Bid Summary</b>Bids are opened and read right after the deadline.</div></li>
</ol>`,
  deeper: `<p>Caltrans 2018 Standard Specifications 2-1.33A: “Your authorized digital signature is your confirmation of and agreement to all certifications and statements contained in the Bid book.” If someone other than the authorized corporate officer or a partner signs, file a Power of Attorney with Caltrans before opening or with the bid, or the bid may be nonresponsive. The Electronic Bidding Guide is on Caltrans's Bidders' Exchange site (linked from each addendum).</p>`,
  src: "Caltrans 2018 Standard Specifications 2-1.33A, 2-1.40; ACCU Construction bid book (11-428704); Caltrans 11-431064 Addendum 1 (Electronic Bidding Guide reference); Bid Express help pages."
},

{ h: "The bid schedule: unit prices and lump sums",
  lead: "The bid schedule (Caltrans calls it the Bid Item List) is where your price goes. Each line has an item number, description, unit, quantity and your price.",
  body: `<ul>
<li><strong>Unit price item:</strong> you enter a price per unit (LF linear feet, SF square feet, EA each, CY cubic yards). The item total is unit price × quantity. You're paid for the units actually installed, unless the item is marked “final pay” (paid at the bid quantity).</li>
<li><strong>Lump sum (LS) item:</strong> one price for the whole item, like mobilization or plant establishment.</li>
<li><strong>Total bid:</strong> the sum of all item totals in the base bid.</li>
<li><strong>Allowance or contingency items:</strong> amounts the agency fills in; you carry them as printed.</li>
</ul>
<p><strong>Caltrans's own rules from the 11-428704 bid form:</strong></p>
<ul>
<li>If the unit price and item total don't match, <strong>the unit price prevails</strong> (with narrow exceptions).</li>
<li>If both are left blank, the bid may be found non-responsive.</li>
<li>“Do not round item totals or the total bid.”</li>
</ul>`,
  ex: `<p>The City's EMTS job was a “Lump Sum contract with Unit Price provisions,” and “the low Bid will be determined by the Base Bid.” Caltrans 11-428704 was “on a unit price basis,” so the low bid was the sum of the 70 item totals.</p>`,
  watch: `<p>Because the unit price wins, a typo in a unit price binds you. On 11-428704, 61,975 iceplant cuttings at $0.80 is $49,580. Type $0.08 and your item total is $4,958, and you're held to it: a $44,622 hole.</p>`,
  src: "Caltrans Bid to the Department DES-OE-0102.1, items 2.1–2.7 (ACCU bid book, 11-428704); City of San Diego K-24-1952 Notice Inviting Bids §8.4, Instructions §11."
},

{ h: "Alternates: additive and deductive",
  lead: "Alternates let the agency price options. Read how the agency will pick the low bidder before you price them.",
  body: `<ul>
<li><strong>Additive alternate:</strong> extra work the agency may add, like a second planting area or an upgraded controller. You price it separately.</li>
<li><strong>Deductive alternate:</strong> work the agency may take out, like deleting DG (decomposed granite) paving. You price the credit.</li>
<li><strong>Basis of award:</strong> the package says whether the low bidder is decided on the base bid alone or base plus some alternates. The City reserves the right to evaluate “the base bid and any proposed alternates or options as detailed herein.”</li>
<li><strong>Subs on alternates:</strong> the City uses a separate “Subcontractors For Alternates” form, marked additive or deductive, with each sub's license and DIR (Department of Industrial Relations) number and dollar value.</li>
</ul>`,
  watch: `<p>Price alternates honestly. If the agency awards base plus alternates, a cheap alternate you never meant to win can become your contract. And remember the prequalification limit covers your total including alternates.</p>`,
  deeper: `<p>For SLBE/ELBE (Small Local and Emerging Local Business Enterprise) percentages, the City doesn't count alternate items, field orders or City contingency items. Allowance items marked “EOC Type I” count; “EOC Type II” don't. (EOC is the City's Equal Opportunity Contracting program.)</p>`,
  src: "City of San Diego K-24-1952 Instructions to Bidders §§12.3, 20.8; Attachment C, Equal Opportunity Contracting, section F."
},

{ h: "City of San Diego: forms in a real bid package",
  lead: "In the 2023 EMTS package, the City listed every form and when it was due. PlanetBids won't accept a bid without the required uploads.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Form</th><th>What you're certifying or giving</th><th>When</th></tr></thead>
<tbody>
<tr><td>Bid Bond (PDF via PlanetBids)</td><td>10% bid security (later slides)</td><td>At bid</td></tr>
<tr><td>Contractor's Certification of Pending Actions</td><td>Lawsuits and actions pending against the company</td><td>At bid</td></tr>
<tr><td>Mandatory Disclosure of Business Interests</td><td>Business relationships with City officials</td><td>At bid</td></tr>
<tr><td>Debarment and Suspension Certification (prime, and subs/suppliers)</td><td>No one on the team is debarred (banned) or suspended</td><td>At bid</td></tr>
<tr><td>List of Subcontractors and Named Equipment/Material Supplier List</td><td>Entered in PlanetBids: names, license and DIR numbers, work, dollar value, certification</td><td>At bid</td></tr>
<tr><td>Bid Bond (original)</td><td>Paper original to the Purchasing &amp; Contracting office</td><td>5 PM, 1 working day after opening</td></tr>
<tr><td>SLBE Good Faith Effort and Form AA60 (List of Work Made Available)</td><td>Only if you didn't meet the SLBE/ELBE percentage</td><td>5 PM, 3 working days after opening</td></tr>
<tr><td>Bonds, insurance, signed contract, other-than-first-tier sub list</td><td>From the awarded bidder</td><td>10 working days after contract forms</td></tr>
</tbody></table></div>`,
  deeper: `<p>Certifications the bidder agrees to by submitting: Bidder's General Information (genuine, non-collusive bid), Non-Collusion Affidavit (23 U.S.C. 112 and Public Contract Code §7106), Drug-Free Workplace, ADA (Americans with Disabilities Act) compliance, Contractor Standards Pledge of Compliance, Equal Benefits Ordinance, Equal Pay Ordinance and Product Endorsement. The same schedule appears in the City's January 2026 package (K-26-2396), which adds an off-road diesel fleet compliance form from the awarded bidder.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Required Documents Schedule and Certifications and Forms; K-26-2396-DBB-3-A, Required Documents Schedule."
},

{ h: "City forms explained · what you swear to by submitting",
  lead: "On a City e-bid you don't sign these one by one. Submitting the bid certifies all of them “under penalty of perjury.” Know what each one says.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Certification</th><th>In plain words, you promise…</th></tr></thead>
<tbody>
<tr><td>Bidder's General Information</td><td>Your bid is real, not made for someone hidden, and you didn't agree with anyone on prices. You read and accept all the contract documents and addenda.</td></tr>
<tr><td>Non-Collusion Affidavit (23 U.S.C. 112 and PCC §7106)</td><td>The same promise, sworn: no fake bids, no deals to stay out, no sharing your price with other bidders.</td></tr>
<tr><td>Drug-Free Workplace (Council Policy 100-17)</td><td>You have a drug-free workplace program, and your subcontracts say subs will follow it too.</td></tr>
<tr><td>ADA Compliance (Council Policy 100-4)</td><td>You have a workplace program that complies with the City's ADA (Americans with Disabilities Act) policy, and your subcontracts say so.</td></tr>
<tr><td>Contractor Standards Pledge of Compliance (SDMC §22.3004)</td><td>You meet the City's contractor standards, and each sub has signed its own pledge.</td></tr>
<tr><td>Equal Benefits Ordinance (SDMC §22.4300)</td><td>You comply with the City's equal benefits rules for employees.</td></tr>
<tr><td>Equal Pay Ordinance (SDMC §§22.4801–22.4809)</td><td>You comply, post the notice for workers, and require subs to certify it in their subcontracts.</td></tr>
<tr><td>Product Endorsement (A.R. 95.65)</td><td>You won't advertise that the City uses your product or service without written City approval.</td></tr>
</tbody></table></div>`,
  watch: `<p>“Your subcontracts say so” is a real promise. Add the City's drug-free, ADA, contractor standards and equal pay language to every subcontract you write on a City job. SDMC means San Diego Municipal Code; PCC means Public Contract Code; A.R. means the City's Administrative Regulation.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Certifications and Forms (pp. 213–221)."
},

{ h: "City forms explained · the five required uploads",
  lead: "These five files must be attached in PlanetBids. The City's package says a bid missing any of them is non-responsive.",
  body: `<ol class="steps">
<li class="hl"><div><b>A. Bid bond</b>PDF of the surety bond, cashier's check or certified check, payable to the City, for at least 10% of the total bid. Paper original due 5 PM the next working day.</div></li>
<li><div><b>B. Contractor's Certification of Pending Actions</b>List any pending lawsuits, claims or government actions against the company. “None” is an answer; a blank isn't.</div></li>
<li><div><b>C. Mandatory Disclosure of Business Interests</b>Disclose business relationships with City officials or employees. Have the owner fill it in; it's about people, not projects.</div></li>
<li><div><b>D. Debarment and Suspension Certification, prime</b>Your company and its principals aren't debarred, suspended or excluded from public contracts.</div></li>
<li><div><b>E. Debarment and Suspension Certification, subs, suppliers and manufacturers</b>The same for everyone you list. Check each one on the federal SAM.gov (System for Award Management) exclusion list and the DIR (Department of Industrial Relations) debarment list before you list them.</div></li>
</ol>`,
  watch: `<p>Fill these in the week before, signed by the right officer, and save them as PDFs named clearly (for example “B_PendingActions_K-24-1952.pdf”). On bid day you only attach them.</p>`,
  deeper: `<p>Public Contract Code §6109: a public entity may not let a contractor or subcontractor who is debarred under Labor Code §1777.1 or §1777.7 bid on, be awarded, or work on a public works project, and a contract with a debarred sub is void. The prime pays the wages of a debarred sub's workers who were allowed on the job. The City's Municipal Code §22.0807 also lists failure to submit required documents as a ground for debarment.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Electronically Submitted Forms (p. 225) and Required Documents Schedule; Cal. Public Contract Code §6109 (via california.public.law, verified Oct. 2026)."
},

{ h: "City forms explained · subcontractor and supplier lists",
  lead: "The City's sub list asks for more than state law requires. Every column matters, and suppliers count differently from subs.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Column on the City's List of Subcontractors</th><th>What to enter</th></tr></thead>
<tbody>
<tr><td>Name, address, phone, email</td><td>Exactly as on the sub's CSLB (Contractors State License Board) license</td></tr>
<tr><td>Constructor or designer</td><td>Constructor for a landscape, electrical or concrete sub</td></tr>
<tr><td>Subcontractor license number</td><td>Check it on the CSLB website the week before</td></tr>
<tr><td>DIR registration number</td><td>Required for every sub; check it on DIR's public works registration search</td></tr>
<tr><td>Type of work</td><td>The portion, in words: “irrigation and planting,” “site electrical”</td></tr>
<tr><td>Dollar value of subcontract</td><td>The amount you carried for them</td></tr>
<tr><td>Certification (SLBE, ELBE, DBE, DVBE and others) and where certified</td><td>Only certified firms count toward goals; attach proof except for OBE, SLBE and ELBE</td></tr>
</tbody></table></div>`,
  exLabel: "Worked example: supplier credit (made-up numbers)",
  ex: `<p>You buy $9,800 of boulders and DG from an SLBE-certified supplier that doesn't manufacture them. The City credits suppliers at 60% unless they manufacture or substantially alter the material: $9,800 × 0.60 = <strong>$5,880</strong> counts toward the SLBE goal. If you forget to mark supplier or manufacturer, the City uses 60%.</p>`,
  deeper: `<p>Abbreviations on the form: SLBE (Small Local Business Enterprise), ELBE (Emerging Local Business Enterprise), DBE (Disadvantaged Business Enterprise), DVBE (Disabled Veteran Business Enterprise), MBE and WBE (Minority and Women Business Enterprise), OBE (Other Business Enterprise, meaning none of these), SDB, WoSB, HUBZone and SDVOSB (federal small business categories). The City's form also asks you to mark a joint venture partnership if one applies.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Instructions to Bidders §§12.1–12.2 and List of Subcontractors / Named Equipment/Material Supplier List forms (pp. 223–224)."
},

{ h: "City forms after bid day and after award",
  lead: "More forms come after the opening. The apparent low bidder has days, not weeks, to deliver them.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Form or step</th><th>From</th><th>When (K-24-1952)</th></tr></thead>
<tbody>
<tr><td>Original bid bond</td><td>All bidders</td><td>5 PM, 1 working day after opening</td></tr>
<tr><td>SLBE Good Faith Effort file and Form AA60 (List of Work Made Available)</td><td>All bidders short of the goal</td><td>5 PM, 3 working days after opening</td></tr>
<tr><td>Vendor registration of all subs and suppliers</td><td>Apparent low bidder</td><td>Before award, by the date in the Notice of Intent to Award</td></tr>
<tr><td>Certificates of insurance and endorsements</td><td>Awarded bidder</td><td>On the Notice of Intent to Award</td></tr>
<tr><td>Performance and payment bonds, signed contract page</td><td>Awarded bidder</td><td>Within 10 working days of contract forms (14 days in the instructions)</td></tr>
<tr><td>Listing of “Other Than First Tier” subcontractors</td><td>Awarded bidder</td><td>Within 10 working days of contract forms; mark N/A if none</td></tr>
<tr><td>City Business Tax Certificate</td><td>Contractor and subs</td><td>On request</td></tr>
<tr><td>Affidavit of Disposal</td><td>Contractor</td><td>At completion: surplus materials disposed of legally, notarized</td></tr>
</tbody></table></div>`,
  ex: `<p>The real EMTS bid shows the “other than first tier” form filled in by the prime, HSCC, Inc., marked “N/A.” A first-tier sub works directly for the prime; a second-tier sub works for a sub.</p>`,
  watch: `<p>If the low bidder's subs aren't registered as City vendors in time, the City can rescind the award and go to the next bidder. As a sub, register on the City's vendor system the day you quote a City job.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Required Documents Schedule; Instructions to Bidders §§5, 7, 18, 22; Affidavit of Disposal and Subcontractor Listing (Other Than First Tier) forms."
},

{ h: "Caltrans: the bid book you submit",
  lead: "The Caltrans bid book is one electronic file with the bid, prices, sub list, bond and certifications. Module 15 walks through the winner's 37 pages.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Form (11-428704)</th><th>What it does</th></tr></thead>
<tbody>
<tr><td>Bid to the Department (DES-OE-0102.1)</td><td>Company, license and DIR (Department of Industrial Relations) numbers, addenda acknowledged, form of bid security. Your signature affirms every certification in the book.</td></tr>
<tr><td>Bid Item List</td><td>Unit price and item total for each item</td></tr>
<tr><td>Subcontractor List (DES-OE-0102.2C)</td><td>Each sub's name, city, license and DIR numbers, item numbers and percent of each item</td></tr>
<tr><td>Opt out of price index adjustments (DES-OE-01012.a)</td><td>Only if you choose to opt out</td></tr>
<tr><td>Small Business Status (DES-OE-0102.4)</td><td>For statistics</td></tr>
<tr><td>Federal certifications</td><td>Lobbying, equal employment opportunity, debarment and suspension</td></tr>
<tr><td>State certifications</td><td>Noncollusion affidavit, child support, safety violations, antitrust, bidder responsibility questionnaire</td></tr>
<tr><td>Bidder's Bond (DES-OE-0102.3)</td><td>Electronic bond ID, registry and 10%</td></tr>
</tbody></table></div>`,
  watch: `<p>A false certification can mean “criminal prosecution, rejection of the bid, rescission of the award” or termination of the contract, as the bid form itself warns. Have the person who signs read every certification.</p>`,
  src: "ACCU Construction, Inc. bid book, Caltrans 11-428704 (see Module 15, Step 9)."
},

{ h: "Caltrans bid book · the Bid to the Department, line by line",
  lead: "The first form is the offer itself. Its numbered rules decide how Caltrans reads your prices.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rule on the form</th><th>Plain meaning</th></tr></thead>
<tbody>
<tr><td>1. You agree to sign the contract at your prices and finish in the working days on the Notice to Bidders</td><td>Your bid is a promise, not a price estimate</td></tr>
<tr><td>2. Unit price bid: unit price and item total for each item, and the total</td><td>Fill in both columns on every line</td></tr>
<tr><td>2.1 Unit price prevails if the two don't match</td><td>Your unit price is the number you're held to</td></tr>
<tr><td>2.1.1 If the unit price is left out, or is the same as the item total, the item total prevails</td><td>Caltrans divides the total by the quantity</td></tr>
<tr><td>2.1.2 If a decimal error is apparent, Caltrans uses whichever of your two numbers is closest by percentage to its own final estimate</td><td>A decimal slip may be corrected either way; you don't get to pick</td></tr>
<tr><td>2.2 Both blank, or a lump sum total blank</td><td>The bid may be nonresponsive</td></tr>
<tr><td>2.3 Lump sum items: the item total is the bid</td><td>For LS (lump sum) items, a different unit price is ignored</td></tr>
<tr><td>2.4–2.5 Commas and dollar signs ignored; numbers read by digits and decimal point; do not round</td><td>Type exact cents</td></tr>
<tr><td>2.7 The Department's decision on the bid amount is final</td><td>No arguing after opening</td></tr>
<tr><td>3. Addenda acknowledged</td><td>ACCU's form listed “1”</td></tr>
<tr><td>4. Bid security of at least 10%, including any additive items</td><td>ACCU used an electronic bidder's bond</td></tr>
</tbody></table></div>`,
  src: "Caltrans Bid to the Department of Transportation, DES-OE-0102.1 (Rev 1/13/2017), ACCU Construction bid book, 11-428704."
},

{ h: "Caltrans bid book · the certifications in plain words",
  lead: "By signing the bid with your Digital ID, you sign every one of these. A “yes” answer isn't automatically fatal, but a false answer is.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Certification (11-428704 bid book)</th><th>You're saying…</th></tr></thead>
<tbody>
<tr><td>Disclosure of Lobbying Activities (federal-aid jobs)</td><td>You haven't paid anyone to lobby federal officials for this contract, or you disclose it on form SF-LLL</td></tr>
<tr><td>Equal Employment Opportunity (41 CFR 60-1.7)</td><td>You filed the required federal EEO (equal employment opportunity) reports on earlier covered contracts</td></tr>
<tr><td>Debarment and Suspension (49 CFR Part 29)</td><td>No owner or officer is debarred, suspended or recently convicted of fraud in public contracting</td></tr>
<tr><td>Undocumented aliens (PCC §6101)</td><td>You follow employment eligibility laws</td></tr>
<tr><td>Noncollusion (PCC §7106, 23 U.S.C. 112)</td><td>Your bid is genuine and not coordinated with anyone</td></tr>
<tr><td>Child Support Compliance Act (PCC §7110)</td><td>You honor wage garnishment orders and report new hires</td></tr>
<tr><td>National Labor Relations Board (PCC §10232)</td><td>No more than one federal contempt finding for NLRB orders in 2 years</td></tr>
<tr><td>Violation of law or safety regulation (PCC §10162)</td><td>Yes or no: ever disqualified from a government project for such a violation</td></tr>
<tr><td>Antitrust (PCC §10285.1)</td><td>No bid-rigging or fraud convictions in 3 years</td></tr>
<tr><td>Bidder Responsibility Questionnaire</td><td>Whether you or your owners were found “nonresponsible” by any public agency in 10 years; untruthful answers make the bid nonresponsive</td></tr>
</tbody></table></div>`,
  watch: `<p>If any answer could be “yes,” talk to the owner and an attorney before bid week. Exceptions are written in the space provided; Caltrans says they “will not necessarily result in denial of award.”</p>`,
  src: "ACCU Construction bid book, 11-428704, Certifications pages 21–31."
},

{ h: "Caltrans form deadlines after opening · 11-431064",
  lead: "Caltrans splits the bid book into what's due at bid time and what's due days later. The schedule is in the Special Provisions, section 2-1.33B.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Form (federal-aid contract with a DBE goal)</th><th>Deadline</th></tr></thead>
<tbody>
<tr><td>Bid to the Department; Subcontractor List</td><td>Time of bid (DIR numbers may come later)</td></tr>
<tr><td>Copies of the Bid and Subcontractor List showing public works contractor (DIR) registration numbers</td><td>10 days after bid opening</td></tr>
<tr><td>Small Business Status; Opt Out of price index adjustments (only if you choose it)</td><td>Time of bid</td></tr>
<tr><td>Certified Small Business Listing for the Non–Small Business Preference</td><td>4 PM on the 2nd business day after opening (only if you request the preference)</td></tr>
<tr><td>DVBE (Disabled Veteran Business Enterprise) quotes</td><td>4 PM on the 4th business day after opening</td></tr>
<tr><td>DBE (Disadvantaged Business Enterprise) Commitment, DBE Confirmations, DBE Good Faith Efforts</td><td>4 PM on the 5th day after opening</td></tr>
</tbody></table></div>`,
  ex: `<p>11-431064 had a 26% DBE goal. That's a lot of DBE outreach for a $4.25 million landscape job, so a landscape sub with DBE certification was worth a call from every prime.</p>`,
  watch: `<p>You may turn in the after-bid forms at bid time. If they're ready, do it. The lowest bidder on 11-428704 lost the job because its DBE package came in late.</p>`,
  src: "Caltrans 11-431064 Special Provisions, Notice to Bidders and section 2-1.33B (Bid Form Submittal Schedule), and sections 2-1.15C and 2-1.18C."
},

{ h: "The bid bond",
  lead: "The bid bond promises the agency that if you win, you'll sign the contract and give performance and payment bonds. If you walk away, the surety pays the agency's loss, up to the bond amount.",
  body: `<ul>
<li><strong>Amount:</strong> usually at least 10% of the total bid, including additive items. The City requires bid security on bids of $250,000 and up.</li>
<li><strong>Forms allowed:</strong> a surety bond (most common), a cashier's check or a certified check. Caltrans also accepts cash.</li>
<li><strong>Electronic:</strong> Caltrans takes electronic bonds through a bond registry; you enter the bond ID. The City takes a PDF upload at bid time, then the paper original by 5 PM the next working day.</li>
<li><strong>Power of attorney:</strong> a surety bond is signed by the surety's attorney-in-fact (an agent with written authority to sign for the surety), with the power of attorney attached. Check that it's included and current.</li>
</ul>`,
  ex: `<p><strong>Math:</strong> your bid on a City park job is $412,500. Bond at 10%: $412,500 × 0.10 = <strong>$41,250</strong>. Many sureties write the bid bond as “10% of the amount bid” so a late price change doesn't make it too small. ACCU's 11-428704 bond was for 10% of a $1,176,120 bid, or $117,612.</p>`,
  watch: `<p>Check the bond against the bid package: agency's exact name as obligee (the party the bond protects), project name and bid number, your exact legal name as on your CSLB license, the percent or amount, signatures and seal. The City rejects a bid if the PDF is missing at bid time or the original misses the next-day deadline.</p>`,
  deeper: `<p>City wording: the surety “will pay to the City the damages, not exceeding the sum of 10% of the amount of the Bid,” if the winner fails to sign and give final bonds. The winner must sign and give bonds and insurance within 14 days of getting the contract (the 2023 package; the required documents table said 10 working days). Bonds basics are in <a href="#m2-8">Module 2</a>. Caltrans 2018 Standard Specifications 2-1.34 lists cash, cashier's check, certified check, a signed bidder's bond by an admitted surety insurer, or an electronic bond through an approved registry.</p>`,
  src: "City of San Diego K-24-1952 Instructions to Bidders §§19, 22; Caltrans 11-428704 Notice to Bidders and ACCU Bidder's Bond page; Caltrans 2018 Standard Specifications 2-1.34."
},

{ h: "Bid bond mechanics · who does what",
  lead: "Three parties are on every bond. Knowing who's who makes it easy to check the bond in two minutes.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Party</th><th>Who it is</th><th>On ACCU's 11-428704 bond</th></tr></thead>
<tbody>
<tr><td><strong>Principal</strong></td><td>Your company, the bidder</td><td>ACCU Construction, Inc., Santa Ana</td></tr>
<tr><td><strong>Surety</strong></td><td>The insurance company that backs the bond. Must be an admitted surety insurer (licensed in California).</td><td>Travelers Casualty and Surety Company of America</td></tr>
<tr><td><strong>Obligee</strong></td><td>The agency the bond protects</td><td>State of California, Department of Transportation</td></tr>
<tr><td><strong>Attorney-in-fact</strong></td><td>The person at your agent's office who signs for the surety, under a power of attorney</td><td>Signature line on the paper form</td></tr>
<tr><td><strong>Bond ID and registry</strong></td><td>The electronic record that replaces the paper bond</td><td>Bond ID SCA21939599, registry Surety2000, 10%</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Ask early</b>Send your agent the agency, bid number, bid date, estimated amount and alternates at least several business days ahead.</div></li>
<li><div><b>Check the names</b>Principal exactly as on your CSLB license; obligee exactly as in the bid documents.</div></li>
<li class="hl"><div><b>Check the power of attorney</b>Attached, signed, not expired, and naming the person who signed the bond.</div></li>
<li><div><b>Check the surety is admitted</b>Look it up on the California Department of Insurance website (insurance.ca.gov).</div></li>
</ol>`,
  deeper: `<p>Code of Civil Procedure §995.630: a bond from an admitted surety insurer is accepted without further acknowledgment if it's executed under penalty of perjury or acknowledged before a notary, and either a certified copy of the signer's power of attorney is on file with the county clerk, or a copy of the power of attorney is attached to the bond. That's why the power of attorney page matters.</p>`,
  src: "ACCU Construction bid book 11-428704, Bidder's Bond pages and Surety2000 Bid Bond Manager record; Cal. Code of Civil Procedure §995.630 (via california.public.law, verified Oct. 2026)."
},

{ h: "Worked examples · bid bond and contract bond amounts",
  lead: "Bond amounts are simple percentages. The mistakes come from forgetting alternates or confusing the bid bond with the contract bonds.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Case</th><th>Math</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>1. City park bid, base only (made-up)</td><td>$412,500 × 10%</td><td class="num">$41,250.00</td></tr>
<tr><td>2. Same bid with a $36,000 additive alternate, where security must include additive items (Caltrans rule)</td><td>($412,500 + $36,000) × 10% = $448,500 × 10%</td><td class="num">$44,850.00</td></tr>
<tr><td>3. Cashier's check instead of a bond, case 2</td><td>Your own cash tied up until the agency returns it after award</td><td class="num">$44,850.00 of cash</td></tr>
<tr><td>4. Real: Griffith's 11-431064 bid</td><td>$4,247,463.10 × 10%</td><td class="num">$424,746.31</td></tr>
<tr><td>5. Real: Caltrans contract bonds on 11-431064, payment bond at 100% of total bid</td><td>$4,247,463.10 × 100%</td><td class="num">$4,247,463.10</td></tr>
<tr><td>6. Real: Caltrans performance bond at 50% of total bid</td><td>$4,247,463.10 × 50%</td><td class="num">$2,123,731.55</td></tr>
</tbody></table></div>`,
  ex: `<p>The bid bond usually costs little or nothing; the surety earns its fee on the contract bonds. The contract bond premium is a real job cost you price in Module 10. Ask your surety for its rate on your size of job.</p>`,
  watch: `<p>Bonding capacity limits both. If a $4.2 million bid is outside your surety's single-job limit, you can't get the bid bond, and you shouldn't bid as prime. Quote the primes instead.</p>`,
  src: "Caltrans 2018 Standard Specifications 3-1.05 (payment bond at least 100%, performance bond at least 50% of total bid); Caltrans 11-431064 Bid Summary. Cases 1–3 are made-up numbers."
},

{ h: "Listing subcontractors: the Fair Practices Act",
  lead: "California's Subletting and Subcontracting Fair Practices Act makes a prime list its subs with the bid. It protects subs from bid shopping after award.",
  body: `<ul>
<li><strong>Who must be listed:</strong> every sub doing work over <strong>one-half of 1%</strong> of the prime's total bid. On streets and highways (including bridges), over one-half of 1% or <strong>$10,000, whichever is greater</strong>.</li>
<li><strong>What to list:</strong> name, location, CSLB (Contractors State License Board) license number, DIR (Department of Industrial Relations) registration number, and the portion of work. Many agencies also ask for the dollar value and certification (SLBE, DBE).</li>
<li><strong>One sub per portion.</strong> Two subs listed for the same work, or none, means the prime must do that work itself.</li>
<li><strong>Substitution after award</strong> only with the agency's consent and for reasons in the law, like the listed sub refusing to sign.</li>
<li>Breaking the Act can cost the prime the contract or a penalty up to 10% of the subcontract.</li>
</ul>`,
  ex: `<p><strong>Worked threshold math:</strong> ACCU's 11-428704 bid was $1,176,120.00. One-half of 1% = $1,176,120 × 0.005 = $5,880.60. It's a highway job, so the greater number, <strong>$10,000</strong>, sets the line. On the City EMTS job (estimate $1,600,000), 0.5% is $8,000. The City's instructions say list over 0.5%; its general provisions say over 0.5% or $10,000, whichever is greater. When the package isn't consistent, list every sub over the lower number.</p>`,
  watch: `<p>The City also requires the prime to self-perform (do with its own workers) at least 50% of the base bid (EMTS job). Check the self-performance rule before you plan to sub out large parts of a prime bid.</p>`,
  deeper: `<ul>
<li>PCC (Public Contract Code) §4104: listing rule. A wrong license or DIR number can be corrected within 24 hours after opening if it matches the listed name.</li>
<li>PCC §4106: not listing means you do the work. §4107: substitution. §4107.5: claimed clerical error in listing, written notice within 2 working days. §4110: penalties. §4111: CSLB discipline.</li>
<li>A sub listed while not DIR-registered can be fixed if it registers (and pays the penalty) within 24 hours after opening, or is replaced under §4107 (Labor Code §1771.1(c)).</li>
</ul>`,
  src: "Cal. Public Contract Code §§4100–4114 (esp. 4104, 4106, 4107, 4107.5, 4110, 4111); Labor Code §1771.1; City of San Diego K-24-1952 Instructions §12, Attachment C §G, SSP 3-2, Attachment D §1.9.1."
},

{ h: "Listing worked example 1 · the winner on 11-431064",
  lead: "Real data: what the winning prime listed on the SR-905 landscaping job, and how each listing compares to the threshold.",
  body: `<p><strong>Threshold:</strong> Griffith's bid was $4,247,463.10. One-half of 1% = $4,247,463.10 × 0.005 = <strong>$21,237.32</strong>. That's more than $10,000, so $21,237.32 is the line.</p>
<div class="tablewrap"><table>
<thead><tr><th>Listed sub (city)</th><th>Items listed</th><th class="num">Value at Griffith's own prices</th><th>Over the line?</th></tr></thead>
<tbody>
<tr><td>Perry Electric (Santee)</td><td>65 subsurface locator (100%), 66 electric service for irrigation (100%)</td><td class="num">$9,400 + $50,000 = $59,400</td><td>Yes</td></tr>
<tr><td>Quality Hydroseeding &amp; Restoration (Ramona)</td><td>63 hydroseed (100%): 797,000 SQFT × $0.10</td><td class="num">$79,700</td><td>Yes</td></tr>
<tr><td>SWPPQUEEN (Sacramento)</td><td>10 job site management, 11 SWPPP (storm water pollution prevention plan), 13 sampling days (each 100%)</td><td class="num">$8,550 + $3,000 + $1,440 = $12,990</td><td>No, listed anyway</td></tr>
<tr><td>Synergy Traffic Control (Escondido)</td><td>6 traffic control (64%), 7, 8, 9 (100%), plus “ramp closures and attenuator truck”</td><td class="num">$57,600 + $7,500 + $6,600 + $26,400 = $98,100</td><td>Yes</td></tr>
<tr><td>United General Construction (Poway)</td><td>20 manage solid waste (100%), 21 roadside clearing (100%)</td><td class="num">$68,250 + $55,000 = $123,250</td><td>Yes</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>What it teaches:</strong> Griffith listed no landscape sub. By law that means it planned to self-perform all planting and irrigation, items 22–62 and 64. Item 6 at 64% shows how to list part of an item: Griffith kept 36% of traffic control. The SWPPQUEEN line shows you may list a sub under the threshold.</p>`,
  watch: `<p>Dollar values above use Griffith's bid prices as a stand-in. The real subcontract amounts weren't published. The Bid Summary shows only the items and percents.</p>`,
  src: "Caltrans 11-431064 Bid Summary, List of Subcontractors (bidder 03, Griffith Company) and Contract Proposal of Low Bidder, bid opening 05/17/2022."
},

{ h: "Listing worked example 2 · a City park job as prime",
  lead: "Made-up numbers on a City-style job show the three checks every prime bid needs: the listing line, self-performance and the SLBE goal.",
  exLabel: "Example numbers for practice",
  body: `<p>Your company is prime on a City park bid of <strong>$412,500</strong> (base bid). Listing line: $412,500 × 0.005 = <strong>$2,062.50</strong>.</p>
<div class="tablewrap"><table>
<thead><tr><th>Who</th><th>Type</th><th class="num">Value</th><th>List it?</th><th>SLBE credit</th></tr></thead>
<tbody>
<tr><td>Site electrical (SLBE certified)</td><td>Constructor</td><td class="num">$38,000</td><td>Yes</td><td class="num">$38,000</td></tr>
<tr><td>Concrete flatwork</td><td>Constructor</td><td class="num">$61,500</td><td>Yes</td><td class="num">$0</td></tr>
<tr><td>Striping and signs</td><td>Constructor</td><td class="num">$1,800</td><td>Not required (under $2,062.50)</td><td class="num">$0</td></tr>
<tr><td>Soil testing lab</td><td>Consultant</td><td class="num">$1,200</td><td>Not required</td><td class="num">$0</td></tr>
<tr><td>Boulders and DG supplier (SLBE, not manufacturer)</td><td>Supplier</td><td class="num">$9,800</td><td>On the supplier list to get credit</td><td class="num">$9,800 × 60% = $5,880</td></tr>
</tbody></table></div>
<p><strong>Self-performance:</strong> subs total $38,000 + $61,500 + $1,800 + $1,200 = $102,500. Your own forces: $412,500 − $102,500 = $310,000, or $310,000 ÷ $412,500 = <strong>75.2%</strong>, over the 50% minimum.</p>
<p><strong>SLBE goal:</strong> if the goal is 20%, you need $412,500 × 0.20 = $82,500. You have $38,000 + $5,880 = $43,880, or 10.6%. You're short, so the Good Faith Effort file is due 5 PM, 3 working days after opening.</p>`,
  watch: `<p>Check how the package defines self-performance before relying on this math. Some count only labor and equipment, some count materials you buy. Read the Supplementary Special Provisions section 3-2.</p>`
},

{ h: "After the bid · substitutions and listing errors",
  lead: "Once you list a sub, you're tied to it. The law allows a swap only for listed reasons, with the agency's consent and short deadlines.",
  body: `<div class="twocol">
<div><h3>Reasons the agency may allow a substitution (PCC §4107)</h3><ul>
<li>The listed sub won't sign a subcontract at its bid price and scope</li>
<li>The sub goes bankrupt or insolvent</li>
<li>The sub fails or refuses to perform</li>
<li>The sub can't provide bonds the prime required in its request for bids (PCC §4108)</li>
<li>An inadvertent clerical error in listing (§4107.5)</li>
<li>The sub isn't licensed, or is barred from public works</li>
<li>The agency finds the sub's work substantially unsatisfactory or its delays disruptive, or finds it not responsible</li>
</ul></div>
<div><h3>Clerical error clock (PCC §4107.5)</h3><ul>
<li><strong>2 working days</strong> after opening: prime's written notice to the agency, the sub listed by mistake and the intended sub</li>
<li><strong>6 working days:</strong> the listed sub may object in writing; silence counts as agreeing</li>
<li><strong>8 working days:</strong> affidavits from the parties are due</li>
<li>The agency holds a hearing if there's an objection</li>
</ul></div>
</div>`,
  ex: `<p><strong>As a sub:</strong> if a prime listed you and later asks you to drop your price or step aside, the agency must notify you in writing before approving any substitution, and you get 5 working days to object (PCC §4107). Keep your quote and the prime's sub list as proof.</p>`,
  watch: `<p>“A cheaper sub called after the bid” is not on the list. Shopping a listed sub's price after award is exactly what the Act forbids.</p>`,
  src: "Cal. Public Contract Code §§4107, 4107.5, 4108 (via california.public.law, verified Oct. 2026)."
},

{ h: "SLBE, ELBE and DBE: what's due when",
  lead: "Participation goals are judged partly at bid time and partly in the days after. Miss a deadline and the bid can be thrown out.",
  body: `<div class="twocol">
<div><h3>City of San Diego · SLBE/ELBE</h3><ul>
<li>EMTS job: mandatory 20% total (9.4% SLBE, Small Local Business Enterprise + 10.6% ELBE, Emerging Local Business Enterprise, recommended).</li>
<li>List certified subs and suppliers at bid time. Firms must be certified by the bid due date.</li>
<li>Suppliers count at 60% of their dollar value unless they manufacture; mark which.</li>
<li>Short of the goal: GFE (Good Faith Effort) file and Form AA60, searchable PDF, by 5 PM, 3 working days after opening.</li>
</ul></div>
<div><h3>Caltrans · DBE (federal-aid)</h3><ul>
<li>11-428704: 14% DBE (Disadvantaged Business Enterprise) goal. 11-431064: 26%.</li>
<li>DBE Commitment, Confirmations, quotes and any Good Faith Efforts file due by 4:00 PM on the 5th day after opening.</li>
<li>Check that each DBE is certified for the work it will do.</li>
<li>Late = non-responsive. It happened to the low bidder on 11-428704.</li>
</ul></div>
</div>`,
  ex: `<p>As a landscape sub, your certification status is part of your price. On the EMTS job the prime, HSCC, listed a landscape company, Coast Landscaping, among its subs. If your company is SLBE or ELBE certified, say so on every quote to a City prime.</p>`,
  watch: `<p>Start outreach the week you decide to bid. A Good Faith Effort file built on bid day looks like what it is.</p>`,
  src: "City of San Diego K-24-1952 Notice Inviting Bids §7, Instructions §12.2, Required Documents Schedule; K-26-2396; Caltrans 11-428704 and 11-431064 Notice to Bidders and Bid Summaries (see Module 15, Step 8)."
},

{ h: "The two weeks before bid day",
  lead: "Bid day goes smoothly only if the slow work is done by the day before.",
  body: `<ol class="steps">
<li><div><b>Questions in early</b>The City may not consider questions received less than 14 days before bid opening. Caltrans requires questions about unclear plans before opening. Module 12 covers RFIs (requests for information).</div></li>
<li><div><b>Addenda log</b>Check the portal every day. Note each addendum number and what it changed.</div></li>
<li class="hl"><div><b>Request the bid bond</b>Send the surety the bid date, agency, project and your expected amount, at least several business days ahead.</div></li>
<li><div><b>Sub and supplier outreach</b>Send scope sheets, collect written quotes, and log SLBE/DBE (small local and disadvantaged business) contacts.</div></li>
<li><div><b>Pre-fill everything that isn't price</b>Company info, license and DIR (Department of Industrial Relations) numbers, certifications, sub list names and numbers.</div></li>
<li><div><b>Finish your own takeoff and labor</b>So bid day is for sub numbers and checking, not counting heads.</div></li>
<li><div><b>Book the people</b>Who prices, who checks, who submits, who signs. Have a backup computer and internet connection.</div></li>
</ol>`
},

{ h: "Bid day roles and the bid room",
  lead: "Even a two-person company needs clear roles on bid day. One person can hold two roles, but never price and check the same numbers.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Role</th><th>Job on bid day</th><th>Small company example</th></tr></thead>
<tbody>
<tr><td>Estimator</td><td>Levels quotes, updates the estimate, runs the total</td><td>You</td></tr>
<tr><td>Checker</td><td>Checks every unit price and extension against the estimate; reads the sub list against the quotes</td><td>Office manager</td></tr>
<tr><td>Submitter</td><td>Enters numbers in PlanetBids or Bid Express, uploads files, saves proof</td><td>You, with the checker watching</td></tr>
<tr><td>Signer</td><td>The officer authorized to sign; does the final review</td><td>Owner</td></tr>
<tr><td>Phones</td><td>Calls subs and suppliers for missing quotes; logs times</td><td>Field lead, for an hour</td></tr>
</tbody></table></div>
<p><strong>The bid room:</strong> two screens, a printed bid form, a printed sub list, the addenda log, quotes in one folder with arrival times written on them, a backup laptop and a phone hotspot.</p>`,
  watch: `<p>Turn off email notifications from everything except quotes. Bid day mistakes happen when people get interrupted halfway through a column of numbers.</p>`
},

{ h: "Bid day, hour by hour",
  lead: "A plan for a bid due at 2:00 PM. Adjust the times to your bid, but keep the order.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>When</th><th>What</th></tr></thead>
<tbody>
<tr><td>Day before, by 3 PM</td><td>All your own pricing done. Bond in hand or confirmed. Forms pre-filled. Final check for addenda.</td></tr>
<tr><td>Day before, by 5 PM</td><td>Call every sub and supplier: “Are we getting your number? By what time?”</td></tr>
<tr><td>Bid day, 7:00 AM</td><td>Check the portal for a late addendum. Log in to PlanetBids or Bid Express and make sure the digital ID works.</td></tr>
<tr><td>8:00–11:00 AM</td><td>Quotes come in. Level each one against your scope sheet. Enter them in the estimate.</td></tr>
<tr><td>11:00 AM</td><td>Decide on any missing quotes: plug a number or self-perform. Run markup and the total.</td></tr>
<tr><td>11:30 AM–12:15 PM</td><td>Late quotes. Final sub choices. Fill in the sub list with license and DIR numbers. Check SLBE/DBE totals.</td></tr>
<tr><td>12:15–12:45 PM</td><td>Enter prices into the bid form. A second person checks every unit price and extension.</td></tr>
<tr><td>12:45–1:00 PM</td><td>Owner's final review of the total. Sign.</td></tr>
<tr><td>By 1:00–1:15 PM</td><td><strong>Submit.</strong> Save the confirmation and screenshots.</td></tr>
<tr><td>1:15–1:55 PM</td><td>Only change the bid if a real error turns up. Resubmit and confirm again.</td></tr>
<tr><td>2:00 PM</td><td>Deadline. Watch the opening.</td></tr>
<tr><td>2:00–5:00 PM</td><td>Download results. Recheck your math. Start the post-bid calendar. Send thanks to every sub and supplier who quoted.</td></tr>
</tbody></table></div>`,
  watch: `<p>Never plan to submit in the last 15 minutes. Slow uploads, a required field the system won't skip, or an expired login can each eat 20 minutes.</p>`
},

{ h: "Last-minute quotes and plugs",
  lead: "Most sub and supplier prices arrive in the last few hours. Your job is to compare them fairly and fast.",
  body: `<ul>
<li><strong>Level every quote.</strong> Use the scope sheet from Module 13. Does it include the backflow, the pad, tax, freight, bonds, prevailing wage, traffic control? Add the missing pieces to the lower quote before you compare.</li>
<li><strong>Watch exclusions.</strong> A cheap quote with “excludes recycled-water signage” isn't cheap.</li>
<li><strong>Plug when you must.</strong> If a needed quote never comes, carry a plug number based on your own pricing or past bids, and mark it in the estimate. Then you must either do the work yourself or find a sub at that price after award without breaking the listing rules.</li>
<li><strong>Listing decides who you're stuck with.</strong> Once listed, you can't swap a sub just because someone cheaper calls after the bid.</li>
<li><strong>Quoting to several primes is allowed.</strong> As a sub you may quote every prime on the planholders list.</li>
</ul>`,
  ex: `<p>At 12:20 PM a traffic control sub quotes $38,000, $9,000 under the one you planned to use. Their quote excludes the attenuator truck (a truck with a crash cushion that protects the work zone) the specs require every closure. Add it back and compare again before you change the sub list.</p>`,
  watch: `<p>A plug over the listing threshold, with no sub listed, means you're telling the agency you'll do that work with your own forces.</p>`,
  src: "Cal. Public Contract Code §4106; City of San Diego K-24-1952 Instructions §17."
},

{ h: "Worked example · leveling three traffic control quotes",
  lead: "Bring every quote to the same scope before comparing. The lowest number on paper is often not the lowest real price.",
  exLabel: "Example numbers for practice (made-up quotes)",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">Sub A</th><th class="num">Sub B</th><th class="num">Sub C</th></tr></thead>
<tbody>
<tr><td>Quoted price</td><td class="num">$38,000</td><td class="num">$47,000</td><td class="num">$44,500</td></tr>
<tr><td>Attenuator truck, 12 closure days × $1,100 (excluded by A)</td><td class="num">+$13,200</td><td class="num">included</td><td class="num">included</td></tr>
<tr><td>Arrow board, 20 days × $85 (excluded by C)</td><td class="num">included</td><td class="num">included</td><td class="num">+$1,700</td></tr>
<tr><td>Prevailing wage and certified payroll</td><td class="num">included</td><td class="num">included</td><td class="num">included</td></tr>
<tr><td>DIR registered? License checked?</td><td>Yes / yes</td><td>Yes / yes</td><td>Yes / yes</td></tr>
<tr><td><strong>Leveled price</strong></td><td class="num"><strong>$51,200</strong></td><td class="num"><strong>$47,000</strong></td><td class="num"><strong>$46,200</strong></td></tr>
</tbody></table></div>
<p><strong>Result:</strong> Sub C is lowest at $46,200 after leveling. Sub A, “$9,000 cheaper” on paper, is really $5,000 higher than C. List C, and carry $46,200, not $44,500, unless C confirms in writing that the arrow board is included.</p>`,
  watch: `<p>Write the time each quote arrived and who you talked to. If a sub later says “that wasn't my price,” your log and their written quote are your proof.</p>`
},

{ h: "Math checks before you hit submit",
  lead: "Most bid disasters are arithmetic. Two people, two methods, every time.",
  body: `<ol class="steps">
<li><div><b>Check each extension</b>Unit price × quantity = item total, to the cent.</div></li>
<li><div><b>Check the quantities</b>Did you use the addendum quantities? (11-428704's Addendum 1 changed three items.)</div></li>
<li class="hl"><div><b>Add the total two ways</b>The bid form's total and your estimate summary must match exactly.</div></li>
<li><div><b>Look for decimal slips</b>Sort items by total. A $4,958 iceplant line next to a $35,000 establishment line is a red flag.</div></li>
<li><div><b>Check against the engineer's estimate and history</b>A total far from the estimate or from past bid results means look again (Module 15).</div></li>
<li><div><b>Every line priced</b>A blank unit price can make the bid non-responsive.</div></li>
</ol>`,
  ex: `<p><strong>Worked check:</strong> 4" main, 7,493 LF (linear feet) at $12.00 = $89,916.00. If the form shows $8,991.60, the decimal moved, and under Caltrans's rule the unit price you typed is what counts. Fix the unit price as well as the total.</p>`,
  watch: `<p>Don't build a big markup into one item and almost none into others unless you understand the risk. Read what the package says about unbalanced bids; some agencies reserve the right to reject them. Module 15 shows how real bidders moved money between items.</p>`
},

{ h: "Math check · worked error examples from 11-431064",
  lead: "Four real kinds of errors, using real items and Griffith's real unit prices. See what each one would have done.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Error</th><th>The math</th><th>What happens</th></tr></thead>
<tbody>
<tr><td><strong>1. Decimal slip in the unit price</strong> (item 55, 1" pipe, 40,785 LF)</td><td>Meant $4.60 × 40,785 = $187,611.00. Typed $0.46 × 40,785 = $18,761.10</td><td>Both numbers agree, so there's no discrepancy to fix. You're held to $0.46: a $168,849.90 loss.</td></tr>
<tr><td><strong>2. Decimal slip in the item total only</strong></td><td>Unit $4.60, total typed $18,761.10</td><td>Rule 2.1.2: Caltrans uses whichever number is closest by percentage to its own final estimate. You don't get to choose.</td></tr>
<tr><td><strong>3. Wrong quantity in your spreadsheet</strong> (item 28, Plant Group A)</td><td>You used 6,800 instead of 6,880. Agency's math: 6,880 × $6.90 = $47,472. Your sheet: 6,800 × $6.90 = $46,920</td><td>Your total is $552 low. The winning margin on this job was only $6,973.00 ($4,254,436.10 − $4,247,463.10).</td></tr>
<tr><td><strong>4. Rounding</strong> (item 56, 1 1/4" pipe)</td><td>26,844 × $5.10 = $136,904.40, rounded to $136,904</td><td>The form says “do not round.” Your total no longer matches your prices.</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Which errors does a check catch?</strong> Error 1 is caught only by comparing unit prices to your estimate or to history (Griffith's 1" pipe price was $4.60; the other two bidders bid $4.70 and $7.20). Errors 2–4 are caught by recalculating every extension. You need both checks.</p>`,
  watch: `<p>Electronic bid forms usually multiply and add for you, so the risk moves to the unit price you type and the quantity you assumed. Check those two numbers on every line.</p>`,
  src: "Caltrans 11-431064 Bid Summary (unit prices of all three bidders); Bid to the Department DES-OE-0102.1, rules 2.1–2.5."
},

{ h: "Submitting early and confirming receipt",
  lead: "A bid isn't in until the agency's system says it is. Get proof.",
  body: `<ul>
<li><strong>PlanetBids:</strong> the system won't accept a bid missing any required field, price, sub list or upload. After you submit, check the bid status and save the confirmation.</li>
<li><strong>Bid Express:</strong> wait for the Bid Submittal Receipt email. Save it.</li>
<li><strong>Paper:</strong> hand-deliver early; get the clerk's time stamp. The agency's clock is the one that counts.</li>
<li><strong>Changes:</strong> before the deadline you can change, withdraw or resubmit. Each time, confirm the new version is the one received.</li>
<li><strong>Keep a bid-day file:</strong> final estimate, quotes received with times, screenshots, confirmation, bond.</li>
</ul>`,
  watch: `<p>If the system won't let you submit, don't keep retrying until 1:59 PM. Call the help desk right away (Bid Express and PlanetBids both have one) and note who you talked to and when.</p>`,
  src: "City of San Diego K-24-1952 Instructions §§2.3–2.7; Caltrans Electronic Bidding Guide."
},

{ h: "Scenario · 1:40 PM and the upload won't go through",
  lead: "Your City bid is due at 2:00 PM. PlanetBids keeps rejecting the submit button. Here's the right order of moves.",
  body: `<ol class="steps">
<li class="hl"><div><b>1:40 Read the error message</b>Most rejections are a missing required field: an addendum not acknowledged, a blank sub list column, a missing upload.</div></li>
<li><div><b>1:42 Fix what it names</b>Go tab by tab. Look for red fields.</div></li>
<li><div><b>1:45 Still stuck? Call the help desk</b>Have the bid number ready. Write down the time and the person's name.</div></li>
<li><div><b>1:45 At the same time, try the backup</b>Second computer, second browser, phone hotspot. Cookies must be on.</div></li>
<li><div><b>1:55 Email the Contract Specialist</b>A short note with screenshots and times. It may not save the bid, but it records what happened.</div></li>
<li><div><b>2:00 The deadline doesn't move</b>The City says it isn't responsible for bids that don't arrive in time.</div></li>
</ol>`,
  ex: `<p><strong>The real lesson:</strong> this scenario only happens to bidders who planned to submit at 1:40. Submitting at 1:15 PM gives you 45 minutes to fix any of these problems.</p>`
},

{ h: "The bid opening and reading results",
  lead: "Right after the deadline, prices become public. The lowest number on the screen is the apparent low bidder. The agency still has to check that bid before anyone wins.",
  body: `<ul>
<li><strong>City of San Diego:</strong> once the deadline passes, bidders and the public can see results online in PlanetBids. That posting is the public announcement of the apparent low bidder.</li>
<li><strong>Caltrans:</strong> bids are opened and read through a webcast right after the deadline. Caltrans later posts a Bid Summary with every bidder's prices and subs.</li>
<li><strong>Then the agency checks:</strong> responsive (followed every rule and form) and responsible (licensed, qualified, able to do the work). The award goes to the lowest responsive, responsible bidder.</li>
</ul>
<div class="twocol">
<div><h3>If you're apparent low</h3><ul>
<li>Recheck your math today</li>
<li>Get the post-bid items in early</li>
<li>Call your surety about final bonds</li>
<li>Confirm subs and their DIR (Department of Industrial Relations) registration</li>
</ul></div>
<div><h3>If you're 2nd or 3rd</h3><ul>
<li>Stay ready: low bidders get rejected</li>
<li>Keep your bond and quotes alive</li>
<li>Watch the agency's notices</li>
<li>Download the bid tab</li>
</ul></div>
</div>`,
  src: "City of San Diego K-24-1952 Instructions §§2.5, 21; Caltrans 11-428704 Notice to Bidders."
},

{ h: "After the bid: the deadlines that follow",
  lead: "Several requirements are due in the first days after opening. Put them on the calendar before bid day.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>When after opening</th><th>City of San Diego (EMTS)</th><th>Caltrans (11-428704)</th></tr></thead>
<tbody>
<tr><td>24 hours</td><td>Fix a listed sub's license or DIR number; an unregistered listed sub can register and pay the penalty</td><td>Same state rules</td></tr>
<tr><td>1 working day, 5 PM</td><td>Original bid bond delivered</td><td></td></tr>
<tr><td>2 working days</td><td>Notice of a clerical error in listing a sub (PCC §4107.5)</td><td>Same</td></tr>
<tr><td>3 working days, 5 PM</td><td>SLBE Good Faith Effort file and AA60; bidder's notice of a clerical mistake in the bid</td><td></td></tr>
<tr><td>5th day, 4 PM</td><td></td><td>DBE Commitment, Confirmations and Good Faith Efforts</td></tr>
<tr><td>5 working days</td><td>State law deadline for a bid mistake notice (PCC §5103)</td><td>Same</td></tr>
<tr><td>10 days</td><td>Bid protest by 5 PM on the 10th calendar day (SDMC §22.3017)</td><td>Copies of the bid and sub list showing DIR numbers</td></tr>
<tr><td>After contract forms arrive</td><td>Bonds, insurance, signed contract, other-tier sub list (10 working days in the schedule)</td><td>Bonds and insurance before approval</td></tr>
</tbody></table></div>`,
  watch: `<p>On 11-428704 the lowest bid, Marina Landscape at $1,106,287.75, was rated non-responsive: “LATE DBE/DVBE SUBMITTAL.” The job went to ACCU at $1,176,120.00. A missed post-bid deadline cost the low bidder the job.</p>`,
  src: "City of San Diego K-24-1952 Required Documents Schedule and Attachment D §1.9.1; San Diego Municipal Code §22.3017; Cal. Public Contract Code §§4104, 4107.5, 5103; Caltrans 11-428704 Bid Summary (Module 15)."
},

{ h: "Worked example · the post-bid calendar for two real jobs",
  lead: "Turn “working days” and “calendar days” into real dates. Working days skip weekends and holidays; calendar days don't.",
  body: `<div class="twocol">
<div><h3>City EMTS · opened Wed, Dec 6, 2023, 2 PM</h3><ul>
<li><strong>Thu Dec 7, 2 PM:</strong> 24-hour fixes to listed subs' license or DIR numbers</li>
<li><strong>Thu Dec 7, 5 PM:</strong> original bid bond (1 working day)</li>
<li><strong>Fri Dec 8:</strong> clerical error in sub listing notice (2 working days)</li>
<li><strong>Mon Dec 11, 5 PM:</strong> SLBE GFE file and AA60; City bid mistake notice (3 working days)</li>
<li><strong>Wed Dec 13:</strong> state-law mistake notice limit (5 working days); the City's 3-day rule is shorter, so use Dec 11</li>
<li><strong>Mon Dec 18, 5 PM:</strong> bid protest. The 10th calendar day was Sat Dec 16, so it moves to the next business day</li>
<li><strong>About Wed Dec 27:</strong> City prepares contract documents (about 21 days after opening)</li>
</ul></div>
<div><h3>Caltrans 11-431064 · opened Tue, May 17, 2022</h3><ul>
<li><strong>Wed May 18:</strong> 24-hour fixes to listed subs</li>
<li><strong>Thu May 19, 4 PM:</strong> non–small business preference listing, if claimed (2nd business day); clerical listing notice (2 working days)</li>
<li><strong>Sun May 22, 4 PM:</strong> DBE Commitment, Confirmations and GFE (5th day). The spec moves a Saturday or holiday deadline to the next business day but doesn't mention Sunday; submit by Fri May 20 or confirm with the Office Engineer</li>
<li><strong>Mon May 23, 4 PM:</strong> DVBE quotes, if listed (4th business day)</li>
<li><strong>Tue May 24:</strong> bid mistake notice (5 working days, PCC §5103)</li>
<li><strong>Fri May 27:</strong> copies of the bid and sub list with DIR numbers (10 days)</li>
<li><strong>Thu Jun 16:</strong> end of the 30-day award period unless extended with the bidder's agreement. The real award date was July 11, 2022.</li>
</ul></div>
</div>`,
  watch: `<p>Count the days on a real calendar, mark holidays, and set reminders a day early. When a deadline is unclear, ask the agency in writing and keep the answer.</p>`,
  src: "City of San Diego K-24-1952 Required Documents Schedule, Notice Inviting Bids §8.2, Instructions §20.4; San Diego Municipal Code §22.3017(a)(1), (a)(5); Caltrans 11-431064 Special Provisions 2-1.33B and sections 2-1.15C, 2-1.18C; Caltrans 2018 Standard Specifications 3-1.04; Cal. Public Contract Code §§4107.5, 5103; Caltrans Bid Summary and contract award data for 11-431064."
},

{ h: "Bid mistakes: can you get out?",
  lead: "Only for a clerical mistake, proven fast. A bad judgment call or a missed spec is yours to keep.",
  body: `<p>California's relief rules (Public Contract Code §§5100–5110) let a bidder be released only if:</p>
<ul>
<li>It gives the agency <strong>written notice within 5 working days</strong> after opening (not counting Saturdays, Sundays and state holidays), explaining in detail how the mistake happened.</li>
<li>The mistake made the bid <strong>materially different</strong> from what it meant to bid.</li>
<li>The mistake was in <strong>filling out the bid</strong>, not an error in judgment or carelessness in inspecting the site or reading the plans or specs.</li>
</ul>
<p>If the agency won't release you, the bid stands, or you forfeit the bid bond and can sue to recover it. A bidder who claims a mistake can't bid that project again.</p>`,
  ex: `<p>The City's 2023 and 2026 instructions are tighter: written notice within <strong>3 working days</strong> of opening, with proof of “honest, credible, clerical error of a material nature” and of “reasonable care” in preparing the bid. Follow the shorter deadline in the package.</p>`,
  watch: `<p>“We forgot the traffic control” is a judgment error, not a clerical one. Relief is for things like a total copied wrong from your own worksheet. Keep your worksheets: they're your proof.</p>`,
  src: "Cal. Public Contract Code §§5101, 5103, 5105; City of San Diego K-24-1952 Instructions §20.4; K-26-2396 Instructions."
},

{ h: "If you made a mistake · step by step",
  lead: "You find a real error the morning after the opening. Move fast, in writing, with proof.",
  body: `<ol class="steps">
<li><div><b>1. Stop and save everything</b>Your estimate file, recap sheet, quotes, bid form printout and the submitted bid. Don't edit them. Make copies.</div></li>
<li><div><b>2. Decide: clerical or judgment?</b>Clerical: a number copied wrong, a line skipped when typing, a decimal moved. Judgment: a missed item, a low production rate, a misread plan.</div></li>
<li class="hl"><div><b>3. Find the deadline</b>The shorter of the package rule (City: 3 working days) and state law (5 working days). For Caltrans, send a Relief of Bid Request form to the Office Engineer (Standard Specifications 2-1.47).</div></li>
<li><div><b>4. Write the notice</b>Bid number, your bid amount, the exact error, how it happened, what you meant to bid, and copies of the worksheets that prove it.</div></li>
<li><div><b>5. Call your surety</b>Your bid bond is at risk. The surety needs to know today.</div></li>
<li><div><b>6. Know the result</b>If relieved, you can't bid that project again (PCC §5105). If refused, you sign at your bid price or the bond can be forfeited.</div></li>
</ol>`,
  exLabel: "Scenario",
  ex: `<p>Your City bid was $412,500. At 8 AM the next day you see that your recap sheet total was $462,500, and you typed $412,500 into PlanetBids. That's a $50,000 clerical error: the worksheet shows the right number and the bid shows a typed slip. You send the notice that morning, with the recap sheet attached. If instead you'd simply forgotten to price the irrigation sleeves, there'd be no relief.</p>`,
  src: "Cal. Public Contract Code §§5103, 5105 (via california.public.law, verified Oct. 2026); Caltrans 2018 Standard Specifications 2-1.47; City of San Diego K-24-1952 Instructions §20.4."
},

{ h: "Protests and non-responsive bids",
  lead: "When the apparent low bidder broke a rule, the next bidder can protest. When yours did, someone may protest you.",
  body: `<ul>
<li><strong>Non-responsive:</strong> the bid didn't follow the package (missing form, bond, sub list, late DBE file). The agency rejects it and moves to the next bidder.</li>
<li><strong>Waivable irregularity:</strong> agencies can waive small technical defects that give no advantage. They can't waive big ones.</li>
<li><strong>Protest:</strong> a written challenge to another bidder's bid, filed on the agency's schedule. The City follows the San Diego Municipal Code. Caltrans says questions about unclear plans must come before opening, not as protests after.</li>
<li><strong>What gets protested:</strong> missing listed sub numbers, wrong license class, missing acknowledgement of an addendum, late post-bid documents, self-performance short of the minimum.</li>
</ul>`,
  ex: `<p><strong>Marina example:</strong> on 11-428704, ACCU was second on price. Because Marina's DBE (Disadvantaged Business Enterprise) package was late, Caltrans found Marina non-responsive, ACCU became the low responsive bidder, and Caltrans awarded ACCU the contract on Oct 1, 2021.</p>`,
  watch: `<p>Protest deadlines are short, often a few working days after opening or after the notice of intent to award. Read the protest section of every package before bid day, so you know your window if you need it.</p>`,
  src: "City of San Diego K-24-1952 Instructions §§20.3, 20.5, 21.1; Caltrans 11-428704 Notice to Bidders and Bid Summary."
},

{ h: "Bid protest basics · the City and Caltrans rules",
  lead: "A protest is a formal letter with strict timing and content rules. Miss either one and the protest is lost.",
  body: `<div class="twocol">
<div><h3>City of San Diego (SDMC §22.3017)</h3><ul>
<li>Written protest received by the City department running the award by <strong>5:00 PM on the 10th calendar day after bid opening</strong></li>
<li>If your own bid was rejected as non-responsive: 10 calendar days after the City notifies you</li>
<li>If day 10 is a weekend or City holiday: 5 PM the next business day</li>
<li>Title or subject line must say “bid protest”</li>
<li>State every legal and factual ground. Grounds you leave out are waived.</li>
<li>The City won't award until it issues a written decision, and that decision is final</li>
</ul></div>
<div><h3>Caltrans</h3><ul>
<li>Submit any bid protest to the Office Engineer (Standard Specifications 3-1.04)</li>
<li>Questions about unclear plans, specs or estimate must be asked before opening; after opening, Caltrans won't treat them as protests</li>
<li>Award within 30 days of opening for projects under $200 million, unless extended with the bidder's agreement</li>
</ul></div>
</div>
<p><strong>Not protestable:</strong> a listed sub's wrong license or DIR (Department of Industrial Relations) number fixed within 24 hours (PCC §4104), or an unregistered listed sub who registers within 24 hours or is replaced (Labor Code §1771.1(c)).</p>`,
  watch: `<p>The City's code says its protest process isn't meant to let losing bidders “evaluate the bid… of the winning bidder to have the award overturned.” Protest real rule violations, with facts, not small differences you'd like to argue about.</p>`,
  src: "San Diego Municipal Code §22.3017 (Ch. 2, Art. 2, Div. 30, docs.sandiego.gov, verified Oct. 2026); Caltrans 2018 Standard Specifications 3-1.04; Caltrans 11-431064 Notice to Bidders; Cal. Public Contract Code §4104; Labor Code §1771.1(c)."
},

{ h: "Get the bid tab and use it",
  lead: "Every public bid result is free market data. Collect it whether you won, lost or only quoted as a sub.",
  body: `<ul>
<li><strong>City of San Diego:</strong> results show in PlanetBids after the deadline. The City won't give results by phone; you can request them by mail.</li>
<li><strong>Caltrans:</strong> the Bid Summary lists every bidder's total, every unit price and every listed sub. The <a href="#lab">Real Bid Lab</a> is built from these.</li>
<li><strong>As a sub:</strong> ask the primes you quoted for the result, and whether you were listed.</li>
<li><strong>What to record:</strong> every bidder's total, your rank, the gap to the winner, the engineer's estimate, and the landscape and irrigation items line by line.</li>
</ul>`,
  ex: `<p>On 11-428704 the top three bidders were within 5% of each other and 22% under the engineer's estimate. On 11-431064, the winner was $3,135.90 under the engineer's estimate of $4,250,599 and only $6,973 under second place. If you were 10% high, the line items tell you where.</p>`,
  watch: `<p>Write your lessons the same week. A month later you won't remember why you carried $16 a foot for pipe.</p>`,
  src: "City of San Diego K-24-1952 Instructions §21.2; Caltrans 11-428704 and 11-431064 Bid Summaries."
},

{ h: "Checklists",
  lead: "Print these and use them on every public bid until they're habit.",
  body: `<div class="twocol">
<div><h3>Before bid day</h3><ul>
<li>License class allowed; DIR (Department of Industrial Relations) registration current</li>
<li>Prequalified for the total, alternates included (City)</li>
<li>Portal account and digital ID working</li>
<li>All addenda downloaded and logged</li>
<li>Bond requested, obligee and project name correct</li>
<li>Subs' license and DIR numbers verified</li>
<li>SLBE/DBE outreach log started</li>
<li>Non-price forms filled in</li>
<li>Post-bid deadlines on the calendar</li>
</ul></div>
<div><h3>Bid day and after</h3><ul>
<li>Late addendum check in the morning</li>
<li>Quotes leveled; plugs marked</li>
<li>Sub list: one sub per portion, over the threshold</li>
<li>Every line priced; extensions checked by a second person</li>
<li>Totals match two ways</li>
<li>Addenda acknowledged on the bid form</li>
<li>Bond uploaded or bond ID entered</li>
<li>Submitted by 1:15 PM; confirmation saved</li>
<li>Original bond, GFE, DBE files sent on time</li>
<li>Bid tab saved and lessons written</li>
</ul></div>
</div>`
},

{ t: "scorer", id: "mockbid", h: "Mock bid package checklist",
  lead: "Score a practice package before you'd ever submit it for real. 2 = done and checked, 1 = started, 0 = missing. Your choices are saved in this browser.",
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

{ h: "Common mistakes on public bids",
  lead: "Every one of these has thrown out a real low bid somewhere. Most cost nothing to prevent.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Result</th><th>Prevention</th></tr></thead>
<tbody>
<tr><td>Addendum not acknowledged</td><td>Bid may be non-responsive</td><td>Addenda log; morning-of check</td></tr>
<tr><td>Bond PDF missing, or City original late</td><td>Rejected (City §19.5)</td><td>Request bond early; courier booked for the next day</td></tr>
<tr><td>Wrong obligee or bid number on the bond</td><td>Bond may not secure the bid</td><td>Two-minute bond check</td></tr>
<tr><td>Unit price typo</td><td>Held to the typed price</td><td>Second person compares every unit price to the estimate</td></tr>
<tr><td>Sub over the threshold not listed</td><td>You must do that work yourself</td><td>Figure the threshold first; list every sub over it</td></tr>
<tr><td>Two subs listed for the same portion</td><td>You must do that work yourself</td><td>One sub per portion</td></tr>
<tr><td>DBE or GFE file late</td><td>Non-responsive (Marina, 11-428704)</td><td>Prepare it before bid day; send early</td></tr>
<tr><td>Exclusions or notes on the bid form</td><td>Conditional bid, may be rejected</td><td>Ask questions before bid day instead</td></tr>
<tr><td>Submitting at 1:55 PM</td><td>No time to fix a rejected upload</td><td>Submit by 1:15 PM; resubmit if needed</td></tr>
</tbody></table></div>`,
  watch: `<p>DBE means Disadvantaged Business Enterprise; GFE means Good Faith Effort. Both deadlines are days after bid opening, so they're easy to forget in the excitement of being low.</p>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook. The full list of bid words is in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Bid schedule / Bid Item List", "The list of items, units and quantities you price."],
    ["Unit price", "Price per unit of work, like per LF or EA."],
    ["Lump sum (LS)", "One price for a whole item."],
    ["Extension / item total", "Unit price × quantity."],
    ["Final pay item", "A unit price item paid at the bid quantity, not the measured quantity."],
    ["Base bid", "The main bid, without alternates."],
    ["Additive alternate", "Optional extra work priced separately that the agency may add."],
    ["Deductive alternate", "Work the agency may remove, priced as a credit."],
    ["NIB (Notice Inviting Bids)", "The City's short notice of the job, deadline, license, goals and award basis. Caltrans calls it the Notice to Bidders."],
    ["DBB (design-bid-build)", "A project delivery method: design first, then contractors bid to build it."],
    ["Bid security", "The bid bond or check guaranteeing you'll sign if you win, usually 10%."],
    ["Principal / surety / obligee", "The bidder; the insurance company backing the bond; the agency the bond protects."],
    ["Attorney-in-fact", "The person authorized by a power of attorney to sign bonds for the surety."],
    ["Power of attorney", "The surety's document showing who may sign bonds for it."],
    ["Admitted surety insurer", "A surety company licensed by the California Department of Insurance."],
    ["Bond registry (Surety2000)", "An electronic system that records a bid bond so the bidder can enter a bond ID."],
    ["Payment bond / performance bond", "Contract bonds after award: one guarantees workers and suppliers get paid, the other that the work gets done."],
    ["PlanetBids", "Online bidding system used by the City of San Diego and many local agencies."],
    ["Bid Express", "Online system Caltrans uses to receive bids."],
    ["Digital ID", "An electronic signature used to sign and submit an online bid."],
    ["Prequalification / MBC", "City approval to bid as prime, up to a maximum bidding capacity."],
    ["Subcontractor listing", "Naming subs with your bid, required by the Fair Practices Act."],
    ["Listing threshold", "The dollar line above which a sub must be listed: 0.5% of the bid, or $10,000 if greater on streets and highways."],
    ["Substitution", "Replacing a listed sub after bid; allowed only for reasons in PCC §4107 with agency consent."],
    ["First-tier / other-than-first-tier sub", "A sub hired by the prime / a sub hired by another sub."],
    ["Bid shopping", "Pressuring subs for lower prices after the bid. Listing laws limit it."],
    ["Plug", "A number you carry for work with no quote."],
    ["Self-performance", "The share of work the prime must do with its own forces."],
    ["SLBE / ELBE", "Small Local Business Enterprise / Emerging Local Business Enterprise: City of San Diego certifications."],
    ["DBE / DVBE", "Disadvantaged Business Enterprise / Disabled Veteran Business Enterprise: certifications used on Caltrans and state jobs."],
    ["Good Faith Effort (GFE)", "Proof you tried to meet SLBE or DBE goals."],
    ["Form AA60", "The City's List of Work Made Available, filed with a Good Faith Effort file."],
    ["Debarment", "A ban from bidding or working on public contracts."],
    ["Non-collusion affidavit", "A sworn promise that your bid is genuine and not coordinated with other bidders."],
    ["Apparent low bidder", "Lowest price at opening, before the agency checks it."],
    ["Responsive / responsible", "Followed all bid rules / able and qualified to do the work."],
    ["Bid relief", "Release from a bid for a clerical mistake under PCC §§5100–5110."],
    ["Bid protest", "Written challenge to another bidder's bid or the award."],
    ["Working day / calendar day", "A day the agency is open (no weekends or holidays) / every day on the calendar."],
    ["Bid tab", "The table of every bidder's prices after opening."],
    ["PCC / SDMC", "California Public Contract Code / San Diego Municipal Code."]
  ]
},

{ t: "quiz", id: "m14", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "On a Caltrans bid, your unit price and item total don't match. Which one counts?", a: ["The item total", "The unit price, with narrow exceptions", "Whichever is lower"], c: 1, why: "Caltrans's bid form says the unit price prevails, so a typo in a unit price binds you." },
    { q: "Your highway bid is $1,176,120. Over what amount must you list a subcontractor?", a: ["$5,880.60", "$10,000", "$117,612"], c: 1, why: "For streets and highways it's one-half of 1% or $10,000, whichever is greater." },
    { q: "You don't list anyone for a $40,000 irrigation portion of your prime bid. What does the law assume?", a: ["You'll pick a sub after award", "You'll do that work yourself", "The bid is automatically rejected"], c: 1, why: "PCC §4106: failing to list means the prime agrees to perform that portion itself." },
    { q: "On a City of San Diego bid, when is the original paper bid bond due?", a: ["With the PlanetBids upload", "By 5 PM, 1 working day after opening", "Within 10 days of award"], c: 1, why: "The City requires the PDF at bid time and the original by 5 PM the next working day." },
    { q: "You missed the City's SLBE goal. When is your Good Faith Effort file due?", a: ["By 5 PM, 3 working days after opening", "With the bid", "Within 30 days"], c: 0, why: "The City's schedule sets 5 PM, 3 working days after bid opening, for the GFE and Form AA60." },
    { q: "Why did the lowest bidder on Caltrans 11-428704 lose the job?", a: ["Its price was too low", "Its DBE paperwork was late", "It had the wrong license"], c: 1, why: "Caltrans found Marina Landscape non-responsive for a late DBE/DVBE submittal." },
    { q: "Which mistake can get you released from a public bid?", a: ["Forgetting to price traffic control", "Copying the wrong total from your own worksheet, reported in writing within the deadline", "Misreading the plant legend"], c: 1, why: "Relief is only for clerical errors in filling out the bid, not judgment errors, with prompt written notice." },
    { q: "When is the best time to submit an electronic bid due at 2:00 PM?", a: ["1:55 PM", "About 1:00–1:15 PM, then confirm receipt", "The night before, before quotes arrive"], c: 1, why: "Submit early enough to fix upload problems and still include the bid-day quotes. You can resubmit before the deadline." },
    { q: "Griffith's 11-431064 bid was $4,247,463.10. What was the listing threshold?", a: ["$10,000", "$21,237.32", "$424,746.31"], c: 1, why: "One-half of 1% is $21,237.32, which is greater than $10,000." },
    { q: "A City bid opened Wednesday, Dec 6, 2023. The 10th calendar day is Saturday, Dec 16. When is a bid protest due?", a: ["Sat Dec 16, 5 PM", "Mon Dec 18, 5 PM", "Wed Dec 20, 5 PM"], c: 1, why: "SDMC §22.3017 moves a weekend deadline to 5 PM on the next business day." },
    { q: "Who is the obligee on a Caltrans bid bond?", a: ["Your company", "The surety company", "The State of California, Department of Transportation"], c: 2, why: "The obligee is the party the bond protects: the agency." },
    { q: "What must be attached to a surety bond so the agency can accept it without more proof of the signer's authority?", a: ["A copy of the power of attorney", "Your financial statement", "The sub list"], c: 0, why: "CCP §995.630 accepts an admitted surety's bond with the power of attorney attached (or on file with the county clerk)." },
    { q: "You typed $0.46 instead of $4.60 for 40,785 LF of pipe, and the item total you typed matches $0.46. What happens?", a: ["Caltrans fixes it to $4.60", "You're held to $0.46, a loss of about $168,850", "The bid is thrown out"], c: 1, why: "There's no mismatch to correct, so the unit price you typed stands." },
    { q: "A listed sub refuses to sign at its quoted price. Can the prime substitute another sub?", a: ["Yes, freely", "Yes, with the agency's consent, under PCC §4107", "Never"], c: 1, why: "Refusing to sign at the bid price is one of the listed grounds, but the agency must consent." },
    { q: "Three traffic control quotes level to $51,200, $47,000 and $46,200. Which do you list?", a: ["The $38,000 quote that excluded the attenuator truck", "The one that levels to $46,200", "Whichever arrived first"], c: 1, why: "Compare leveled prices; the lowest after adding back exclusions is $46,200." }
  ]
},

{ t: "practice", id: "m14", h: "Practice assignments",
  lead: "Build a real bid package and run a real bid day, without actually submitting.",
  items: [
    { h: "Pick a real job and download it", hrs: 0.5, d: "<p>On the City of San Diego's PlanetBids portal (from <a href=\"https://www.sandiego.gov/cip/bid-contracting\" target=\"_blank\" rel=\"noopener\">Bid &amp; Contracting Opportunities</a>), find an open or recent job with landscape or irrigation. Download the full package and all addenda. If nothing fits, use the City's <a href=\"https://www.sandiego.gov/sites/default/files/2024-02/k-24-1952-dbb-3-a.pdf\" target=\"_blank\" rel=\"noopener\">EMTS Boat Dock Esplanade package</a> or Caltrans <a href=\"#lab-11-431064\">11-431064</a>. Read the cover and Notice Inviting Bids and fill in a one-page summary like the EMTS walk-through slide.</p>" },
    { h: "Make the required-documents calendar", hrs: 0.5, d: "<p>From the package, list every form, who signs it, what it certifies and when it's due (at bid, 24 hours, 1, 2, 3, 5 and 10 days). Pretend the bid opens next Wednesday and put real dates on a real calendar, the way the worked example does, including the protest deadline.</p>" },
    { h: "Fill in every non-price form", hrs: 0.75, d: "<p>Fill in the forms for your company (or the bidding entity being set up): pending actions, disclosure, debarment for the prime and for each sub, and read every certification. Mark anything you can't answer and who in the company can. Don't sign or submit anything.</p>" },
    { h: "Walk through PlanetBids without submitting", hrs: 0.5, d: "<p>Register (or log in) on the City's PlanetBids portal, become a prospective bidder on a current job, and open the eBid screens without submitting. Write down every screen and every required field, and which ones you could fill in a week early. If you plan to bid Caltrans, read the Electronic Bidding Guide and list what you need for a Bidder ID and Digital ID.</p>" },
    { h: "Build the sub list and check the threshold", hrs: 0.5, d: "<p>Using a made-up total bid, figure the listing threshold. Pick real local subs for traffic control, electrical and concrete. Look up each one's CSLB license and DIR registration and fill in the sub list as the package requires. Then do the self-performance and SLBE math like the City park example.</p>" },
    { h: "Ask your surety for a sample bid bond", hrs: 0.25, d: "<p>Ask your surety agent how they issue bonds for PlanetBids and for Caltrans electronic bids, how much notice they need, and for a sample bond with power of attorney. Check it against the bond checklist: principal, surety, obligee, amount, power of attorney, and look up the surety on the California Department of Insurance website.</p>" },
    { h: "Math error drill", hrs: 0.5, d: "<p>Have a coworker take 15 real items from the <a href=\"#lab-11-431064\">11-431064 Real Bid Lab</a> with your prices and secretly plant four errors: a decimal slip, a wrong quantity, a rounded total and a wrong addition. Find all four using the two-person check. Time yourself and write down which check caught each error.</p>" },
    { h: "Run a timed bid-day drill", hrs: 1, d: "<p>With a coworker, take a priced estimate (your Module 15 lab prices work). Starting at 10:00 AM, have them send you three made-up sub quotes at 11:00, 12:00 and 12:30, one with a hidden exclusion. Level them on a sheet like the traffic control example, finish the sub list, enter prices in the bid form, have them check every extension, and be ready to submit by 1:15 PM. Write down where you lost time.</p>" },
    { h: "Read a real bid tab", hrs: 0.5, d: "<p>Find the results for a closed City landscape job on PlanetBids, or open the 11-431064 Bid Summary. Record every bidder's total, the gap from first to third, the subs each bidder listed with items and percents, and any bid marked non-responsive and why. Write three lessons.</p>" }
  ]
},

{ h: "Module 14 summary",
  lead: "Public bids are won on price and lost on paperwork. A checklist and an early submit protect both.",
  body: `<ul>
<li>City of San Diego bids go through PlanetBids; Caltrans bids go through Bid Express. Set up accounts, prequalification, Digital IDs and bonds weeks ahead.</li>
<li>Read the cover and the Notice Inviting Bids first: license, goals, award basis and question deadline decide whether you can bid.</li>
<li>Know every form and what you swear to by submitting it. On Caltrans, the unit price you type is the price you're held to.</li>
<li>Bid bond: usually 10% including additive items, right obligee, right project, power of attorney attached; City original the next working day. Contract bonds come after award.</li>
<li>List every sub over one-half of 1% of the bid (or $10,000 on highways, whichever is greater). One sub per portion. Substitution only for legal reasons with agency consent.</li>
<li>Plan bid day with roles, level every quote, check every unit price and extension, submit by about 1:15 PM and save proof.</li>
<li>Turn every after-bid deadline into a real date. Mistake relief covers only clerical errors, with written notice in 3 to 5 working days. City protests are due by 5 PM on the 10th calendar day.</li>
<li>Get and study every bid tab.</li>
</ul>
<p><strong>Next: Module 15 · Real Bid Practice: Price It, Then Compare to the Winner.</strong></p>`
}
]
});
