(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 14, hours: 6, title: "Submitting Public Bids and Bid Day",
slides: [

{ t: "cover",
  h: "Submitting Public Bids and Bid Day",
  lead: "A public bid is a legal offer with strict rules. The right price can still lose if one form is missing, one sub isn't listed, the bond is wrong or the upload finishes a minute late. This module turns bid day into a checklist.",
  objectives: [
    "Explain how paper and electronic public bids are submitted (PlanetBids, Bid Express)",
    "Fill out a bid schedule with unit prices, lump sums and alternates without math errors",
    "Name the required forms in real City of San Diego and Caltrans bid packages and what each certifies",
    "Get the bid bond right and list subcontractors the way the law requires",
    "Run bid day hour by hour, including last-minute quotes and math checks",
    "Meet the post-bid deadlines and know what to do about mistakes and protests",
    "Get the bid results and use them"
  ],
  time: [["Reading and slides", "2 h"], ["Practice assignments", "4 h"], ["Module total", "6 h"]],
  body: `<p>This module uses two real packages: the City of San Diego's <strong>EMTS Boat Dock Esplanade</strong> park job (K-24-1952-DBB-3-A, bid Dec 6, 2023), and Caltrans <strong>11-428704</strong> (<a href="#m15-1">Module 15</a>). Agencies change their forms. Always follow the package in front of you.</p>`,
  src: "City of San Diego bidding documents K-24-1952-DBB-3-A (2023) and K-26-2396-DBB-3-A (2026); Caltrans 11-428704 Special Provisions and ACCU Construction bid book."
},

{ h: "How public bids are turned in",
  lead: "Most San Diego agencies now take bids online. A few still take sealed paper bids. Either way, the deadline is absolute.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Method</th><th>Who uses it</th><th>How it works</th></tr></thead>
<tbody>
<tr><td><strong>PlanetBids</strong></td><td>City of San Diego and many local cities, school and water districts</td><td>Enter prices into the online bid form, fill in the subcontractor list, upload the bond and forms, then submit. Each agency has its own portal and login.</td></tr>
<tr><td><strong>Bid Express</strong></td><td>Caltrans</td><td>Caltrans posts the bid book; you fill it in and submit it through Bid Express with a digital ID. You get a Bid Submittal Receipt by email.</td></tr>
<tr><td><strong>Sealed paper bid</strong></td><td>Some smaller agencies and districts</td><td>Signed forms in a sealed envelope, marked as the package says, delivered to the named office before the time on its clock.</td></tr>
</tbody></table></div>
<p><strong>Rules that are the same everywhere:</strong> late bids are not accepted. Bids stay sealed until the deadline. You can change or withdraw your bid only until the deadline. After that, your bid is a firm offer.</p>`,
  ex: `<p>The City's instructions warn that uploading “may not be instantaneous” and that “it is the bidder's sole responsibility to ensure their bids are received on time.” Caltrans's Notice to Bidders for 11-428704 said: “Bids received after this time will not be accepted.”</p>`,
  deeper: `<p>By submitting an electronic bid to the City, the bidder certifies “under penalty of perjury” that every form is true, and the e-bid has the same legal effect as a wet signature. The City's bid price is guaranteed for 120 days from bid opening.</p>`,
  src: "City of San Diego K-24-1952 Instructions to Bidders §§2–3; Caltrans 11-428704 Notice to Bidders; Caltrans Electronic Bidding Guide."
},

{ h: "Set up weeks before, not on bid day",
  lead: "Several accounts take days or weeks to approve. Set them up as soon as you decide to bid.",
  body: `<ol class="steps">
<li><div><b>DIR registration</b>Current for the whole bid and job. See <a href="#m2-10">Module 2</a>.</div></li>
<li class="hl"><div><b>City of San Diego prequalification</b>To bid as a prime, you must be prequalified for the total amount of your bid, alternates included. The City sets your maximum bidding capacity from your bond letter and financial statement. Bid documents say to apply at least 2 weeks before bid opening; the City's page says 10 City working days. Use the earlier date.</div></li>
<li><div><b>PlanetBids vendor account</b>Register on each agency's portal and get its digital ID. The City also requires your subs and suppliers to register before award.</div></li>
<li><div><b>Caltrans Bidder ID and Bid Express</b>Request a Bidder ID from the Caltrans Office Engineer, then set up Bid Express and a digital ID. Caltrans says it can take 7 days or longer.</div></li>
<li><div><b>Surety and bond setup</b>Ask your surety agent how they issue bid bonds for PlanetBids (PDF plus original) and for Caltrans (electronic bond registry). On 11-428704 the winner's bond came through the Surety2000 registry.</div></li>
</ol>`,
  watch: `<p>SLBE-certified firms that have never done a public works job as prime must finish City training before bidding as a prime, and their capacity is capped at their single-job bond limit or $1 million, whichever is less.</p>`,
  src: "City of San Diego Prequalification Program page; K-24-1952 Instructions to Bidders §§1–2, 5; Caltrans Electronic Bidding Guide; ACCU Construction bid book (11-428704)."
},

{ h: "The bid schedule: unit prices and lump sums",
  lead: "The bid schedule (Caltrans calls it the Bid Item List) is where your price goes. Each line has an item number, description, unit, quantity and your price.",
  body: `<ul>
<li><strong>Unit price item:</strong> you enter a price per unit (LF, SF, EA, CY). The item total is unit price × quantity. You're paid for the units actually installed, unless the item is marked “final pay.”</li>
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
<li><strong>Deductive alternate:</strong> work the agency may take out, like deleting decomposed granite paving. You price the credit.</li>
<li><strong>Basis of award:</strong> the package says whether the low bidder is decided on the base bid alone or base plus some alternates. The City reserves the right to evaluate “the base bid and any proposed alternates or options as detailed herein.”</li>
<li><strong>Subs on alternates:</strong> the City uses a separate “Subcontractors For Alternates” form, marked additive or deductive, with each sub's license and DIR number and dollar value.</li>
</ul>`,
  watch: `<p>Price alternates honestly. If the agency awards base plus alternates, a cheap alternate you never meant to win can become your contract. And remember the prequalification limit covers your total including alternates.</p>`,
  deeper: `<p>For SLBE/ELBE percentages, the City doesn't count alternate items, field orders or City contingency items. Allowance items marked “EOC Type I” count; “EOC Type II” don't.</p>`,
  src: "City of San Diego K-24-1952 Instructions to Bidders §§12.3, 20.8; Attachment C, Equal Opportunity Contracting, section F."
},

{ h: "City of San Diego: forms in a real bid package",
  lead: "In the 2023 EMTS package, the City listed every form and when it was due. PlanetBids won't accept a bid without the required uploads.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Form</th><th>What you're certifying or giving</th><th>When</th></tr></thead>
<tbody>
<tr><td>Bid Bond (PDF via PlanetBids)</td><td>10% bid security (next slides)</td><td>At bid</td></tr>
<tr><td>Contractor's Certification of Pending Actions</td><td>Lawsuits and actions pending against the company</td><td>At bid</td></tr>
<tr><td>Mandatory Disclosure of Business Interests</td><td>Business relationships with City officials</td><td>At bid</td></tr>
<tr><td>Debarment and Suspension Certification (prime, and subs/suppliers)</td><td>No one on the team is debarred or suspended</td><td>At bid</td></tr>
<tr><td>List of Subcontractors and Named Equipment/Material Supplier List</td><td>Entered in PlanetBids: names, license and DIR numbers, work, dollar value, certification</td><td>At bid</td></tr>
<tr><td>Bid Bond (original)</td><td>Paper original to the Purchasing &amp; Contracting office</td><td>5 PM, 1 working day after opening</td></tr>
<tr><td>SLBE Good Faith Effort and Form AA60 (List of Work Made Available)</td><td>Only if you didn't meet the SLBE/ELBE percentage</td><td>5 PM, 3 working days after opening</td></tr>
<tr><td>Bonds, insurance, signed contract, other-than-first-tier sub list</td><td>From the awarded bidder</td><td>10 working days after contract forms</td></tr>
</tbody></table></div>`,
  deeper: `<p>Certifications the bidder agrees to by submitting: Bidder's General Information (genuine, non-collusive bid), Non-Collusion Affidavit (23 U.S.C. 112 and Public Contract Code §7106), Drug-Free Workplace, ADA compliance, Contractor Standards Pledge of Compliance, Equal Benefits Ordinance, Equal Pay Ordinance and Product Endorsement. The same schedule appears in the City's January 2026 package (K-26-2396), which adds an off-road diesel fleet compliance form from the awarded bidder.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Required Documents Schedule and Certifications and Forms; K-26-2396-DBB-3-A, Required Documents Schedule."
},

{ h: "Caltrans: the bid book you submit",
  lead: "The Caltrans bid book is one electronic file with the bid, prices, sub list, bond and certifications. Module 15 walks through the winner's 37 pages.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Form (11-428704)</th><th>What it does</th></tr></thead>
<tbody>
<tr><td>Bid to the Department (DES-OE-0102.1)</td><td>Company, license and DIR numbers, addenda acknowledged, form of bid security. Your signature affirms every certification in the book.</td></tr>
<tr><td>Bid Item List</td><td>Unit price and item total for each item</td></tr>
<tr><td>Subcontractor List (DES-OE-0102.2C)</td><td>Each sub's name, city, license and DIR numbers, item numbers and percent of each item</td></tr>
<tr><td>Opt out of price index adjustments</td><td>Only if you choose to opt out</td></tr>
<tr><td>Small Business status</td><td>For statistics</td></tr>
<tr><td>Federal certifications</td><td>Lobbying, equal employment opportunity, debarment and suspension</td></tr>
<tr><td>State certifications</td><td>Noncollusion affidavit, child support, safety violations, antitrust, bidder responsibility questionnaire</td></tr>
<tr><td>Bidder's Bond (DES-OE-0102.3)</td><td>Electronic bond ID, registry and 10%</td></tr>
</tbody></table></div>`,
  watch: `<p>A false certification can mean “criminal prosecution, rejection of the bid, rescission of the award” or termination of the contract, as the bid form itself warns. Have the person who signs read every certification.</p>`,
  src: "ACCU Construction, Inc. bid book, Caltrans 11-428704 (see Module 15, Step 9)."
},

{ h: "The bid bond",
  lead: "The bid bond promises the agency that if you win, you'll sign the contract and give performance and payment bonds. If you walk away, the surety pays the agency's loss, up to the bond amount.",
  body: `<ul>
<li><strong>Amount:</strong> usually at least 10% of the total bid, including additive items. The City requires bid security on bids of $250,000 and up.</li>
<li><strong>Forms allowed:</strong> a surety bond (most common), a cashier's check or a certified check.</li>
<li><strong>Electronic:</strong> Caltrans takes electronic bonds through a bond registry; you enter the bond ID. The City takes a PDF upload at bid time, then the paper original by 5 PM the next working day.</li>
<li><strong>Power of attorney:</strong> a surety bond is signed by the surety's attorney-in-fact, with the power of attorney attached. Check that it's included and current.</li>
</ul>`,
  ex: `<p><strong>Math:</strong> your bid on a City park job is $412,500. Bond at 10%: $412,500 × 0.10 = <strong>$41,250</strong>. Many sureties write the bid bond as “10% of the amount bid” so a late price change doesn't make it too small. ACCU's 11-428704 bond was for 10% of a $1,176,120 bid, or $117,612.</p>`,
  watch: `<p>Check the bond against the bid package: agency's exact name as obligee, project name and bid number, your exact legal name as on your CSLB license, the percent or amount, signatures and seal. The City rejects a bid if the PDF is missing at bid time or the original misses the next-day deadline.</p>`,
  deeper: `<p>City wording: the surety “will pay to the City the damages, not exceeding the sum of 10% of the amount of the Bid,” if the winner fails to sign and give final bonds. The winner must sign and give bonds and insurance within 14 days of getting the contract (the 2023 package; the required documents table said 10 working days). Bonds basics are in <a href="#m2-8">Module 2</a>.</p>`,
  src: "City of San Diego K-24-1952 Instructions to Bidders §§19, 22; Caltrans 11-428704 Notice to Bidders and ACCU Bidder's Bond page."
},

{ h: "Listing subcontractors: the Fair Practices Act",
  lead: "California's Subletting and Subcontracting Fair Practices Act makes a prime list its subs with the bid. It protects subs from bid shopping after award.",
  body: `<ul>
<li><strong>Who must be listed:</strong> every sub doing work over <strong>one-half of 1%</strong> of the prime's total bid. On streets and highways (including bridges), over one-half of 1% or <strong>$10,000, whichever is greater</strong>.</li>
<li><strong>What to list:</strong> name, location, CSLB license number, DIR registration number, and the portion of work. Many agencies also ask for the dollar value and certification (SLBE, DBE).</li>
<li><strong>One sub per portion.</strong> Two subs listed for the same work, or none, means the prime must do that work itself.</li>
<li><strong>Substitution after award</strong> only with the agency's consent and for reasons in the law, like the listed sub refusing to sign.</li>
<li>Breaking the Act can cost the prime the contract or a penalty up to 10% of the subcontract.</li>
</ul>`,
  ex: `<p><strong>Worked threshold math:</strong> ACCU's 11-428704 bid was $1,176,120.00. One-half of 1% = $1,176,120 × 0.005 = $5,880.60. It's a highway job, so the greater number, <strong>$10,000</strong>, sets the line. On the City EMTS job (estimate $1,600,000), 0.5% is $8,000. The City's instructions say list over 0.5%; its general provisions say over 0.5% or $10,000, whichever is greater. When the package isn't consistent, list every sub over the lower number.</p>`,
  watch: `<p>The City also requires the prime to self-perform at least 50% of the base bid (EMTS job). Check the self-performance rule before you plan to sub out large parts of a prime bid.</p>`,
  deeper: `<ul>
<li>PCC §4104: listing rule. A wrong license or DIR number can be corrected within 24 hours after opening if it matches the listed name.</li>
<li>PCC §4106: not listing means you do the work. §4107: substitution. §4107.5: claimed clerical error in listing, written notice within 2 working days. §4110: penalties. §4111: CSLB discipline.</li>
<li>A sub listed while not DIR-registered can be fixed if it registers (and pays the penalty) within 24 hours after opening, or is replaced under §4107.</li>
</ul>`,
  src: "Cal. Public Contract Code §§4100–4114 (esp. 4104, 4106, 4107, 4107.5, 4110, 4111); City of San Diego K-24-1952 Instructions §12, Attachment C §G, SSP 3-2, Attachment D §1.9.1."
},

{ h: "SLBE, ELBE and DBE: what's due when",
  lead: "Participation goals are judged partly at bid time and partly in the days after. Miss a deadline and the bid can be thrown out.",
  body: `<div class="twocol">
<div><h3>City of San Diego · SLBE/ELBE</h3><ul>
<li>EMTS job: mandatory 20% total (9.4% SLBE + 10.6% ELBE recommended).</li>
<li>List certified subs and suppliers at bid time. Firms must be certified by the bid due date.</li>
<li>Suppliers count at 60% of their dollar value unless they manufacture; mark which.</li>
<li>Short of the goal: Good Faith Effort file and Form AA60, searchable PDF, by 5 PM, 3 working days after opening.</li>
</ul></div>
<div><h3>Caltrans · DBE (federal-aid)</h3><ul>
<li>11-428704: 14% DBE goal.</li>
<li>DBE Commitment, Confirmations, quotes and any Good Faith Efforts file due by 4:00 PM on the 5th day after opening.</li>
<li>Check that each DBE is certified for the work it will do.</li>
<li>Late = non-responsive. It happened to the low bidder on 11-428704.</li>
</ul></div>
</div>`,
  ex: `<p>As a landscape sub, your certification status is part of your price. On the EMTS job the prime, HSCC, listed a landscape company, Coast Landscaping, among its subs. If your company is SLBE or ELBE certified, say so on every quote to a City prime.</p>`,
  watch: `<p>Start outreach the week you decide to bid. A Good Faith Effort file built on bid day looks like what it is.</p>`,
  src: "City of San Diego K-24-1952 Notice Inviting Bids §7, Instructions §12.2, Required Documents Schedule; K-26-2396; Caltrans 11-428704 Notice to Bidders and Bid Summary (see Module 15, Step 8)."
},

{ h: "The two weeks before bid day",
  lead: "Bid day goes smoothly only if the slow work is done by the day before.",
  body: `<ol class="steps">
<li><div><b>Questions in early</b>The City may not consider questions received less than 14 days before bid opening. Caltrans requires questions about unclear plans before opening. Module 12 covers RFIs.</div></li>
<li><div><b>Addenda log</b>Check the portal every day. Note each addendum number and what it changed.</div></li>
<li class="hl"><div><b>Request the bid bond</b>Send the surety the bid date, agency, project and your expected amount, at least several business days ahead.</div></li>
<li><div><b>Sub and supplier outreach</b>Send scope sheets, collect written quotes, and log SLBE/DBE contacts.</div></li>
<li><div><b>Pre-fill everything that isn't price</b>Company info, license and DIR numbers, certifications, sub list names and numbers.</div></li>
<li><div><b>Finish your own takeoff and labor</b>So bid day is for sub numbers and checking, not counting heads.</div></li>
<li><div><b>Book the people</b>Who prices, who checks, who submits, who signs. Have a backup computer and internet connection.</div></li>
</ol>`
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
  ex: `<p>At 12:20 PM a traffic control sub quotes $38,000, $9,000 under the one you planned to use. Their quote excludes the attenuator truck the specs require every closure. Add it back and compare again before you change the sub list.</p>`,
  watch: `<p>A plug over the listing threshold, with no sub listed, means you're telling the agency you'll do that work with your own forces.</p>`,
  src: "Cal. Public Contract Code §4106; City of San Diego K-24-1952 Instructions §17."
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
  ex: `<p><strong>Worked check:</strong> 4" main, 7,493 LF at $12.00 = $89,916.00. If the form shows $8,991.60, the decimal moved, and under Caltrans's rule the unit price you typed is what counts. Fix the unit price as well as the total.</p>`,
  watch: `<p>Don't build a big markup into one item and almost none into others unless you understand the risk. Read what the package says about unbalanced bids; some agencies reserve the right to reject them. Module 15 shows how real bidders moved money between items.</p>`
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
<li>Confirm subs and their DIR registration</li>
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
<tr><td>10 days</td><td></td><td>Copies of the bid and sub list showing DIR numbers</td></tr>
<tr><td>After contract forms arrive</td><td>Bonds, insurance, signed contract, other-tier sub list (10 working days in the schedule)</td><td>Bonds and insurance before approval</td></tr>
</tbody></table></div>`,
  watch: `<p>On 11-428704 the lowest bid, Marina Landscape at $1,106,287.75, was rated non-responsive: “LATE DBE/DVBE SUBMITTAL.” The job went to ACCU at $1,176,120.00. A missed post-bid deadline cost the low bidder the job.</p>`,
  src: "City of San Diego K-24-1952 Required Documents Schedule and Attachment D §1.9.1; Cal. Public Contract Code §§4104, 4107.5, 5103; Caltrans 11-428704 Bid Summary (Module 15)."
},

{ h: "Bid mistakes: can you get out?",
  lead: "Only for a clerical mistake, proven fast. A bad judgment call or a missed spec is yours to keep.",
  body: `<p>California's relief rules (Public Contract Code §§5100–5110) let a bidder be released only if:</p>
<ul>
<li>It gives the agency <strong>written notice within 5 working days</strong> after opening, explaining in detail how the mistake happened.</li>
<li>The mistake made the bid <strong>materially different</strong> from what it meant to bid.</li>
<li>The mistake was in <strong>filling out the bid</strong>, not an error in judgment or carelessness in reading the plans, specs or site.</li>
</ul>
<p>If the agency won't release you, the bid stands, or you forfeit the bid bond and can sue to recover it. A bidder who claims a mistake can't bid that project again.</p>`,
  ex: `<p>The City's 2023 and 2026 instructions are tighter: written notice within <strong>3 working days</strong> of opening, with proof of “honest, credible, clerical error of a material nature” and of “reasonable care” in preparing the bid. Follow the shorter deadline in the package.</p>`,
  watch: `<p>“We forgot the traffic control” is a judgment error, not a clerical one. Relief is for things like a total copied wrong from your own worksheet. Keep your worksheets: they're your proof.</p>`,
  src: "Cal. Public Contract Code §§5101, 5103, 5105; City of San Diego K-24-1952 Instructions §20.4; K-26-2396 Instructions."
},

{ h: "Protests and non-responsive bids",
  lead: "When the apparent low bidder broke a rule, the next bidder can protest. When yours did, someone may protest you.",
  body: `<ul>
<li><strong>Non-responsive:</strong> the bid didn't follow the package (missing form, bond, sub list, late DBE file). The agency rejects it and moves to the next bidder.</li>
<li><strong>Waivable irregularity:</strong> agencies can waive small technical defects that give no advantage. They can't waive big ones.</li>
<li><strong>Protest:</strong> a written challenge to another bidder's bid, filed on the agency's schedule. The City follows the San Diego Municipal Code. Caltrans says questions about unclear plans must come before opening, not as protests after.</li>
<li><strong>What gets protested:</strong> missing listed sub numbers, wrong license class, missing acknowledgement of an addendum, late post-bid documents, self-performance short of the minimum.</li>
</ul>`,
  ex: `<p><strong>Marina example:</strong> on 11-428704, ACCU was second on price. Because Marina's DBE package was late, Caltrans found Marina non-responsive, ACCU became the low responsive bidder, and Caltrans awarded ACCU the contract on Oct 1, 2021.</p>`,
  watch: `<p>Protest deadlines are short, often a few working days after opening or after the notice of intent to award. Read the protest section of every package before bid day, so you know your window if you need it.</p>`,
  src: "City of San Diego K-24-1952 Instructions §§20.3, 20.5, 21.1; Caltrans 11-428704 Notice to Bidders and Bid Summary."
},

{ h: "Get the bid tab and use it",
  lead: "Every public bid result is free market data. Collect it whether you won, lost or only quoted as a sub.",
  body: `<ul>
<li><strong>City of San Diego:</strong> results show in PlanetBids after the deadline. The City won't give results by phone; you can request them by mail.</li>
<li><strong>Caltrans:</strong> the Bid Summary lists every bidder's total, every unit price and every listed sub. The <a href="#lab">Real Bid Lab</a> is built from these.</li>
<li><strong>As a sub:</strong> ask the primes you quoted for the result, and whether you were listed.</li>
<li><strong>What to record:</strong> every bidder's total, your rank, the gap to the winner, the engineer's estimate, and the landscape and irrigation items line by line.</li>
</ul>`,
  ex: `<p>On 11-428704 the top three bidders were within 5% of each other and 22% under the engineer's estimate. If you were 10% high, the line items tell you where.</p>`,
  watch: `<p>Write your lessons the same week. A month later you won't remember why you carried $16 a foot for pipe.</p>`,
  src: "City of San Diego K-24-1952 Instructions §21.2; Caltrans 11-428704 Bid Summary."
},

{ h: "Checklists",
  lead: "Print these and use them on every public bid until they're habit.",
  body: `<div class="twocol">
<div><h3>Before bid day</h3><ul>
<li>License class allowed; DIR registration current</li>
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

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Bid schedule / Bid Item List", "The list of items, units and quantities you price."],
    ["Unit price", "Price per unit of work, like per LF or EA."],
    ["Lump sum (LS)", "One price for a whole item."],
    ["Extension / item total", "Unit price × quantity."],
    ["Base bid", "The main bid, without alternates."],
    ["Additive alternate", "Optional extra work priced separately that the agency may add."],
    ["Deductive alternate", "Work the agency may remove, priced as a credit."],
    ["Bid security", "The bid bond or check guaranteeing you'll sign if you win, usually 10%."],
    ["Power of attorney", "The surety's document showing who may sign bonds for it."],
    ["Obligee", "The agency the bond protects."],
    ["PlanetBids", "Online bidding system used by the City of San Diego and many local agencies."],
    ["Bid Express", "Online system Caltrans uses to receive bids."],
    ["Prequalification / MBC", "City approval to bid as prime, up to a maximum bidding capacity."],
    ["Subcontractor listing", "Naming subs with your bid, required by the Fair Practices Act."],
    ["Bid shopping", "Pressuring subs for lower prices after the bid. Listing laws limit it."],
    ["Plug", "A number you carry for work with no quote."],
    ["Self-performance", "The share of work the prime must do with its own forces."],
    ["Good Faith Effort (GFE)", "Proof you tried to meet SLBE or DBE goals."],
    ["Apparent low bidder", "Lowest price at opening, before the agency checks it."],
    ["Responsive / responsible", "Followed all bid rules / able and qualified to do the work."],
    ["Bid protest", "Written challenge to another bidder's bid or the award."],
    ["Bid tab", "The table of every bidder's prices after opening."]
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
    { q: "When is the best time to submit an electronic bid due at 2:00 PM?", a: ["1:55 PM", "About 1:00–1:15 PM, then confirm receipt", "The night before, before quotes arrive"], c: 1, why: "Submit early enough to fix upload problems and still include the bid-day quotes. You can resubmit before the deadline." }
  ]
},

{ t: "practice", id: "m14", h: "Practice assignments",
  lead: "Build a real bid package and run a real bid day, without actually submitting.",
  items: [
    { h: "Pick a real job and download it", hrs: 0.5, d: "<p>On the City of San Diego's PlanetBids portal (from <a href=\"https://www.sandiego.gov/cip/bid-contracting\" target=\"_blank\" rel=\"noopener\">Bid &amp; Contracting Opportunities</a>), find an open or recent job with landscape or irrigation. Download the full package and all addenda. If nothing fits, use the City's <a href=\"https://www.sandiego.gov/sites/default/files/2024-02/k-24-1952-dbb-3-a.pdf\" target=\"_blank\" rel=\"noopener\">EMTS Boat Dock Esplanade package</a> or Caltrans <a href=\"#lab-11-428704\">11-428704</a>.</p>" },
    { h: "Make the required-documents calendar", hrs: 0.5, d: "<p>From the package, list every form, who signs it, what it certifies and when it's due (at bid, 24 hours, 1, 3, 5, 10 days). Put the dates on a real calendar as if the bid were next week.</p>" },
    { h: "Fill in every non-price form", hrs: 0.75, d: "<p>Fill in the forms for your company (or the bidding entity being set up): pending actions, disclosure, debarment, certifications. Mark anything you can't answer and who in the company can. Don't sign or submit anything.</p>" },
    { h: "Build the sub list and check the threshold", hrs: 0.5, d: "<p>Using a made-up total bid, figure the listing threshold. Pick real local subs for traffic control, electrical and concrete. Look up each one's CSLB license and DIR registration and fill in the sub list as the package requires.</p>" },
    { h: "Ask your surety for a sample bid bond", hrs: 0.25, d: "<p>Ask your surety agent how they issue bonds for PlanetBids and for Caltrans electronic bids, how much notice they need, and for a sample bond with power of attorney. Check it against the bond checklist from the bid bond slide.</p>" },
    { h: "Run a timed bid-day drill", hrs: 1, d: "<p>With a coworker, take a priced estimate (your Module 15 lab prices work). Starting at 10:00 AM, have them send you three made-up sub quotes at 11:00, 12:00 and 12:30, one with a hidden exclusion. Level them, finish the sub list, enter prices in the bid form, have them check every extension, and be ready to submit by 1:15 PM. Write down where you lost time.</p>" },
    { h: "Read a real bid tab", hrs: 0.5, d: "<p>Find the results for a closed City landscape job on PlanetBids, or open the 11-428704 Bid Summary. Record every bidder's total, the gap from first to third, and any bid marked non-responsive and why. Write three lessons.</p>" }
  ]
},

{ h: "Module 14 summary",
  lead: "Public bids are won on price and lost on paperwork. A checklist and an early submit protect both.",
  body: `<ul>
<li>City of San Diego bids go through PlanetBids; Caltrans bids go through Bid Express. Set up accounts, prequalification and bonds weeks ahead.</li>
<li>Read how the low bid is decided. On Caltrans, the unit price you type is the price you're held to.</li>
<li>Know every required form and when it's due: at bid, 24 hours, 1, 3, 5 and 10 days after.</li>
<li>Bid bond: usually 10%, right obligee, right project, power of attorney attached; City original the next working day.</li>
<li>List every sub over one-half of 1% of the bid (or $10,000 on highways, whichever is greater). One sub per portion.</li>
<li>Plan bid day hour by hour, level every quote, check every extension, submit by about 1:15 PM and save proof.</li>
<li>Mistake relief covers only clerical errors, with written notice in 3 to 5 working days. Get and study every bid tab.</li>
</ul>
<p><strong>Next: Module 15 · Real Bid Practice: Price It, Then Compare to the Winner.</strong></p>`
}
]
});
