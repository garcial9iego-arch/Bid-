(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 16, hours: 6, title: "After the Bid: Contracts, Billing and Growing the Division",
slides: [

{ t: "cover",
  h: "After the Bid: Contracts, Billing and Growing the Division",
  lead: "Winning the bid is the start. This module walks you from the award letter to the final retention check, then shows how to use every finished job to bid the next one better and grow the commercial division.",
  objectives: [
    "Read a subcontract and spot the clauses that move money and risk",
    "Know the California rules on pay-if-paid, retention and indemnity, and where to check them",
    "Prepare submittals, a schedule of values and a monthly pay application with retention",
    "Protect your payment with preliminary notices and the right lien releases",
    "Run change orders, inspections, plant establishment and closeout without losing money",
    "Track job cost against the estimate and feed it back into pricing",
    "Run a biweekly bid review, track KPIs and follow a 12-month growth roadmap"
  ],
  time: [["Reading and slides", "2 h"], ["Practice assignments", "4 h"], ["Module total", "6 h"]],
  body: "<p>The legal points here are a starting map. They are not legal advice. Before you sign your first commercial subcontract, have a construction attorney review your standard markups once.</p>"
},

{ h: "You're low. Now what?",
  lead: "Being low isn't the same as having a contract. Know the steps between bid day and the first day of work.",
  body: `<ol class="steps">
<li><div><b>Verbal or email “you're low”</b>Nice to hear, but not a contract. Don't order anything.</div></li>
<li><div><b>Letter of intent (LOI)</b>A GC's written notice that it plans to subcontract with you. It may allow limited work, like submittals. Read what it authorizes, and what it doesn't.</div></li>
<li><div><b>Notice of award (public)</b>The agency awards the prime contract. On the City's K-24-1952, the City prepared contract documents about 21 days after bid opening, then awarded once the signed contract, bonds and insurance were received.</div></li>
<li class="hl"><div><b>Subcontract signed</b>Now you have a deal. Read it before you sign (next slides).</div></li>
<li><div><b>Bonds and insurance certificates</b>Sent to the GC before you go on site.</div></li>
<li><div><b>Submittals, preconstruction meeting, then work</b></div></li>
</ol>`,
  watch: `<p>If a GC asks you to start before the subcontract is signed, get a written authorization that says what work, what price and that the subcontract terms will follow. Otherwise you could be working under terms you never saw.</p>`,
  src: "City of San Diego Bidding Documents K-24-1952-DBB-3-A, Instructions to Bidders item 8."
},

{ h: "The subcontract: clauses to read every time",
  lead: "GC subcontracts are written to protect the GC. You can ask for changes, but only if you read it first.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Clause</th><th>What to check</th></tr></thead>
<tbody>
<tr><td><strong>Scope</strong></td><td>Matches your proposal: same sheets, spec sections, addenda, inclusions and exclusions. Attach your proposal as an exhibit.</td></tr>
<tr><td><strong>Price and payment</strong></td><td>Amount, billing date, when you get paid, pay-when-paid or pay-if-paid language</td></tr>
<tr><td><strong>Retention</strong></td><td>Percent held and when it's released (after your work, after the whole project, after plant establishment?)</td></tr>
<tr><td><strong>Changes</strong></td><td>Who can approve extra work, how fast you must give notice, allowed markup</td></tr>
<tr><td><strong>Schedule</strong></td><td>Start, finish, liquidated damages passed down to you, delays you're responsible for</td></tr>
<tr><td><strong>Indemnity</strong></td><td>Whose mistakes you're asked to pay for</td></tr>
<tr><td><strong>Insurance and bonds</strong></td><td>Limits, endorsements, bonds required from you</td></tr>
<tr><td><strong>Warranty</strong></td><td>How long, and whether it starts at your completion or the owner's acceptance</td></tr>
<tr><td><strong>Plant establishment</strong></td><td>Length, start date, and what “acceptance” means</td></tr>
<tr><td><strong>Disputes</strong></td><td>Notice, mediation, arbitration or court, and where</td></tr>
<tr><td><strong>Flow-down</strong></td><td>“Sub is bound to GC as GC is bound to owner” brings the whole prime contract in. Ask for a copy of it.</td></tr>
</tbody></table></div>`,
  ex: `<p>Make a one-page subcontract checklist with these rows. For each new GC, mark what's acceptable, what to ask to change, and what's a deal-breaker. After a few GCs, you'll know their forms by heart.</p>`
},

{ h: "Payment clauses: pay-when-paid vs. pay-if-paid",
  lead: "These two phrases sound alike but are very different. In California, the second kind is generally not enforceable.",
  body: `<div class="twocol">
<div><h3>Pay-when-paid</h3><ul>
<li>Sets the <strong>timing</strong>: the GC pays you within a set time after it gets paid</li>
<li>Common and generally allowed</li>
<li>Still means waiting on the owner</li>
</ul></div>
<div><h3>Pay-if-paid</h3><ul>
<li>Makes the owner paying the GC a <strong>condition</strong>: if the owner never pays, you never get paid</li>
<li>The California Supreme Court held these clauses unenforceable in <em>Wm. R. Clarke Corp. v. Safeco Ins. Co.</em> (1997)</li>
<li>Still shows up in subcontracts; ask to change it to pay-when-paid with a time limit</li>
</ul></div>
</div>
<p><strong>Prompt payment:</strong> California law requires a prime contractor to pay a sub its share of a progress payment within 7 days of receiving it, unless otherwise agreed in writing. A good-faith dispute lets the GC hold up to 150% of the disputed amount.</p>`,
  watch: `<p>“Unless otherwise agreed in writing” matters: some subcontracts set longer terms. Read the payment clause and push for the shortest terms you can get.</p>`,
  deeper: `<p><em>Clarke</em> reasoned that a true pay-if-paid clause works as an indirect waiver of the sub's mechanics lien rights, which the California Constitution protects. A later appellate case applied the rule to public works. The prompt payment rule is Business and Professions Code 7108.5; violations can mean license discipline and a penalty of 2% per month on the late amount. Check the current text before relying on it.</p>`,
  src: "Wm. R. Clarke Corp. v. Safeco Ins. Co. (1997) 15 Cal.4th 882; Cal. Business and Professions Code 7108.5."
},

{ h: "Retention: how much and when it comes back",
  lead: "Retention is money held back from each payment until the work is finished. In California, it's usually capped at 5%.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Job type</th><th>Cap</th><th>Release to the GC</th><th>GC pays your share</th></tr></thead>
<tbody>
<tr><td><strong>Public (city, school, water district)</strong></td><td>5% of each payment and of the contract, with limited exceptions</td><td>Within 60 days after completion</td><td>Within 7 days of receiving it</td></tr>
<tr><td><strong>Private, contracts signed on or after Jan 1, 2026</strong></td><td>5% (new law, SB 61), with exceptions such as some small residential jobs</td><td>Within 45 days after completion of the work of improvement</td><td>Within 10 days of receiving it</td></tr>
<tr><td><strong>Caltrans prime</strong></td><td>Caltrans holds no retention from progress payments (see Module 15)</td><td>Not applicable</td><td>Read your subcontract</td></tr>
</tbody></table></div>`,
  ex: `<p>On the City's K-24-1952, the City's pay estimate form calculated retention as 5% of the total billed to date, and the contract required primes to return retention to subs within 30 calendar days after the sub's work was satisfactorily completed and accepted, including partial acceptances.</p>`,
  watch: `<p>“Completion” often means the whole project, not your scope. Landscape finishes last and then has a plant establishment period, so your retention can sit for months. Ask the GC to release your retention when your work is accepted, and write it into the subcontract.</p>`,
  deeper: `<p><strong>Public:</strong> Public Contract Code 7201 caps retention at 5% for the agency, the prime and every sub tier; an agency can go higher only by finding, before bidding, that a project is substantially complex. A prime may also hold more than 5% from a sub who fails to provide bonds the prime required in writing before bid. AB 2173 made the 5% cap permanent from Jan 1, 2023. Release timing is Public Contract Code 7107 (60 days; sub's share within 7 days; 2% per month penalty).</p>
<p><strong>Private:</strong> SB 61 (2025) added Civil Code 8811, a 5% cap on private works contracts entered on or after Jan 1, 2026. Release timing is Civil Code 8812 (owner, 45 days after completion) and 8814 (direct contractor to sub, 10 days). Commentators disagree on the residential and mixed-use edges of SB 61, so check with an attorney on those jobs.</p>`,
  src: "Cal. Public Contract Code 7107, 7201; AB 2173 (2022); SB 61 (2025), Civil Code 8811; Civil Code 8812, 8814; City of San Diego K-24-1952 pay estimate form and EOCP Section J."
},

{ h: "Indemnity, insurance and bonds",
  lead: "Indemnity says who pays when something goes wrong. Insurance and bonds are how you prove you can pay.",
  body: `<ul>
<li><strong>Indemnity:</strong> you agree to defend and pay for claims arising from your work. California law limits how far a GC can push this onto you. On most commercial jobs, a sub can't be made to pay for the GC's or owner's own active negligence or willful misconduct, or for claims outside the sub's scope of work.</li>
<li><strong>Certificate of insurance (COI):</strong> proof of your general liability, auto, workers' comp and umbrella. The GC will list required limits.</li>
<li><strong>Endorsements:</strong> GCs usually require additional insured status, primary and non-contributory wording, and a waiver of subrogation. These are policy changes your agent issues; a COI alone isn't enough.</li>
<li><strong>Sub bonds:</strong> some GCs require performance and payment bonds from subs on larger scopes. Price the bond in your bid if the invitation asks for it (Module 2).</li>
</ul>`,
  watch: `<p>Send the subcontract's insurance page to your insurance agent the day you get it. Missing endorsements are the most common reason a sub can't start on time.</p>`,
  deeper: `<p>Civil Code 2782 voids indemnity for a party's sole negligence or willful misconduct and, on public agency contracts, for the agency's active negligence. Civil Code 2782.05 (contracts on or after Jan 1, 2013) applies similar limits to subs on most non-residential private work and lets a sub defend with its own counsel or pay a reasonable share of defense costs. There are exceptions (for example wrap-up insurance programs). Have an attorney review your standard indemnity markup once.</p>`,
  src: "Cal. Civil Code 2782, 2782.05 (SB 474, 2011)."
},

{ h: "Submittals",
  lead: "Submittals prove you'll install what was specified. Nothing gets ordered until they're approved.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Submittal</th><th>Typical contents</th></tr></thead>
<tbody>
<tr><td>Irrigation product data</td><td>Cut sheets for every head, nozzle, valve, backflow, controller, sensor, pipe and wire, marked with the exact model</td></tr>
<tr><td>Plant material</td><td>Nursery sources, sizes, quantities; photos or tagging for specimen trees and 24" box and larger</td></tr>
<tr><td>Soil</td><td>Agronomic soil test from an approved lab, with amendment recommendations</td></tr>
<tr><td>Soil amendments, compost and mulch</td><td>Product data, test results, samples</td></tr>
<tr><td>Recycled water items</td><td>Purple pipe, tags, signs per the local water agency and county rules</td></tr>
<tr><td>Schedule and work plans</td><td>Your installation schedule; plant establishment plan if required</td></tr>
</tbody></table></div>
<ol class="steps">
<li><div><b>Make a submittal log</b>Every spec section's submittal list, with due date, sent date, status.</div></li>
<li class="hl"><div><b>Submit early and complete</b>Partial packages get rejected and lose weeks.</div></li>
<li><div><b>Order long-lead items right after approval</b>Box trees, controllers and backflow enclosures can take weeks.</div></li>
</ol>`,
  ex: `<p>On Caltrans 11-428704, the specs named the controller supplier and quoted prices (see Module 15), and Caltrans could withhold payment when required start-of-work submittals were late. Submittals are money.</p>`
},

{ h: "The preconstruction meeting",
  lead: "The precon meeting sets the rules for the job. Bring questions, leave with names and dates.",
  body: `<p><strong>Bring:</strong> your schedule, submittal log, insurance, list of questions, emergency contact and the name of your foreman.</p>
<p><strong>Leave knowing:</strong></p>
<ul>
<li>Who approves changes, signs T&amp;M tickets and schedules inspections</li>
<li>Pay application due date, format and who to send it to</li>
<li>Where you can stage, park and get water</li>
<li>When sleeves must be in, and when paving, curbs and walls are scheduled</li>
<li>Inspection hold points and how much notice each needs</li>
<li>When plant establishment starts and who must accept the planting</li>
</ul>`,
  exLabel: "Real example: City inspection hold points",
  ex: `<p>The City's K-24-1952 landscape specs required the Resident Engineer to observe these steps, requested 3 working days ahead: preconstruction meeting, protection of existing plants, rough grade and soil tests, plant material, soil prep and finish grade, plant layout and installation, the substantial completion punch list, punch list completion (which authorizes the start of the maintenance period), maintenance completion, sleeve locations at hardscape layout, mainline and lateral pressure tests before backfill, a coverage check, and a final walk-through at the end of the 90-day maintenance period.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, landscape Special Provisions (site observations)."
},

{ h: "Schedule of values",
  lead: "The schedule of values (SOV) breaks your contract price into lines you bill against each month. Build it the way the work happens.",
  exLabel: "Example numbers for practice: a $186,400 landscape subcontract",
  body: `<p>Scope from Module 1: landscape and irrigation per sheets L-1.0 to L-4.2, spec sections 32 84 00 and 32 93 00, with 90-day plant establishment.</p>
<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Line</th><th class="num">Scheduled value</th></tr></thead>
<tbody>
<tr><td>1</td><td>Mobilization, bonds, submittals</td><td class="num">$7,500</td></tr>
<tr><td>2</td><td>Irrigation POC, backflow, controller</td><td class="num">$14,200</td></tr>
<tr><td>3</td><td>Irrigation mainline, sleeves, wire</td><td class="num">$22,600</td></tr>
<tr><td>4</td><td>Irrigation laterals, heads, drip</td><td class="num">$38,400</td></tr>
<tr><td>5</td><td>Soil prep and fine grade</td><td class="num">$16,300</td></tr>
<tr><td>6</td><td>Trees, 24" box</td><td class="num">$27,600</td></tr>
<tr><td>7</td><td>Shrubs and groundcover</td><td class="num">$34,800</td></tr>
<tr><td>8</td><td>Mulch</td><td class="num">$9,700</td></tr>
<tr><td>9</td><td>90-day plant establishment</td><td class="num">$12,000</td></tr>
<tr><td>10</td><td>Closeout: as-builts, controller charts, training</td><td class="num">$3,300</td></tr>
<tr><td></td><td><strong>Total</strong></td><td class="num"><strong>$186,400</strong></td></tr>
</tbody></table></div>`,
  watch: `<p>Don't load too much into early lines (front-loading). GCs and owners check it, and an SOV that bills 40% in month one gets rejected. Give plant establishment and closeout real values, so you get paid for them and so the GC has a reason to sign them off.</p>`
},

{ h: "Worked example: pay application #2 with retention",
  lead: "Each month you report percent complete by line. The math gives your payment after retention.",
  exLabel: "Example numbers for practice (continues the $186,400 subcontract)",
  body: `<p>Change order #1 (add two valves and a sleeve) was approved for <strong>$2,850</strong>. Pay app #1 billed $21,060 (line 1 at 100%, line 3 at 60%). Now it's the end of month 2:</p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">Value</th><th class="num">% done</th><th class="num">To date</th><th class="num">Previous</th><th class="num">This period</th></tr></thead>
<tbody>
<tr><td>1 Mobilization</td><td class="num">7,500</td><td class="num">100%</td><td class="num">7,500</td><td class="num">7,500</td><td class="num">0</td></tr>
<tr><td>2 POC, backflow, controller</td><td class="num">14,200</td><td class="num">60%</td><td class="num">8,520</td><td class="num">0</td><td class="num">8,520</td></tr>
<tr><td>3 Mainline</td><td class="num">22,600</td><td class="num">100%</td><td class="num">22,600</td><td class="num">13,560</td><td class="num">9,040</td></tr>
<tr><td>4 Laterals</td><td class="num">38,400</td><td class="num">75%</td><td class="num">28,800</td><td class="num">0</td><td class="num">28,800</td></tr>
<tr><td>5 Soil prep</td><td class="num">16,300</td><td class="num">50%</td><td class="num">8,150</td><td class="num">0</td><td class="num">8,150</td></tr>
<tr><td>6–10</td><td class="num">87,400</td><td class="num">0%</td><td class="num">0</td><td class="num">0</td><td class="num">0</td></tr>
<tr><td>CO #1</td><td class="num">2,850</td><td class="num">100%</td><td class="num">2,850</td><td class="num">0</td><td class="num">2,850</td></tr>
<tr><td><strong>Total</strong></td><td class="num"><strong>189,250</strong></td><td class="num">41.4%</td><td class="num"><strong>78,420</strong></td><td class="num">21,060</td><td class="num"><strong>57,360</strong></td></tr>
</tbody></table></div>
<div class="tablewrap"><table><tbody>
<tr><td>A. Original contract</td><td class="num">$186,400.00</td></tr>
<tr><td>B. Approved change orders</td><td class="num">$2,850.00</td></tr>
<tr><td>C. Contract to date (A + B)</td><td class="num">$189,250.00</td></tr>
<tr><td>D. Completed to date</td><td class="num">$78,420.00</td></tr>
<tr><td>E. Retention, 5% of D (78,420 × 0.05)</td><td class="num">$3,921.00</td></tr>
<tr><td>F. Previous payments (21,060 − 5% = 21,060 − 1,053)</td><td class="num">$20,007.00</td></tr>
<tr><td><strong>G. Payment due now (D − E − F)</strong></td><td class="num"><strong>$54,492.00</strong></td></tr>
<tr><td>H. Balance to finish (C − D)</td><td class="num">$110,830.00</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Check it:</strong> this period's work is $57,360. Minus 5% retention ($2,868) = $54,492. Same answer. Still to collect: $110,830 of unbilled work + $3,921 retention held = $114,751.</p>`,
  deeper: `<p>The A–H summary follows the layout of the City of San Diego's pay estimate form (original amount, change orders, total authorized, billed to date, 5% retention, previous payments, payment due, remaining). Private GCs often use the AIA-style G702/G703 format with the same math. At 100% complete, total retention on this job would be 5% × $189,250 = $9,462.50, paid after completion under the rules on the retention slide.</p>`,
  watch: `<p><strong>Send a complete package every month, by the GC's cutoff</strong> (often the 20th–25th; ask at precon): the signed pay app and SOV sheet, a conditional progress release for this bill, an unconditional release for last month's payment only if that check has cleared, certified payroll on prevailing wage jobs (Module 11), and only change orders already approved in writing. Log each pay app: date sent, amount, date paid, days to pay. A GC who always pays slowly should affect whether you bid its next job (Module 3).</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A pay estimate form (Appendix). Contract amounts are made up for practice."
},

{ h: "Lien rights and preliminary notices",
  lead: "California gives unpaid contractors strong payment rights, but only if you send the right notices on time.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>Private job</th><th>Public job</th></tr></thead>
<tbody>
<tr><td><strong>Your payment tools</strong></td><td>Mechanics lien on the property, stop payment notice, payment bond claim (if there's a bond)</td><td>No lien on public property. Stop payment notice to the agency and claim on the prime's payment bond.</td></tr>
<tr><td><strong>Preliminary notice</strong></td><td>As a sub, serve a 20-day preliminary notice on the owner, the GC and any construction lender</td><td>Required for claimants without a direct contract with the prime. A sub hired directly by the prime is generally exempt for stop payment notices; your own suppliers and sub-subs are not.</td></tr>
<tr><td><strong>Timing</strong></td><td>Within 20 days of first furnishing work. Late notice covers only work from 20 days before you served it.</td><td>Same 20-day rule where a notice is required</td></tr>
<tr><td><strong>Deadline to act</strong></td><td>Record a lien within 90 days after completion, or 30 days after a recorded notice of completion. Sue to enforce within 90 days after recording.</td><td>Stop payment notice within 30 days after a recorded notice of completion or acceptance, or 90 days after completion if none was recorded</td></tr>
</tbody></table></div>`,
  watch: `<p>Send a preliminary notice on every private job, as standard practice, right after you start. It's routine, and it protects you. Calendar the lien and stop payment deadlines the day a notice of completion is recorded.</p>`,
  deeper: `<p>Private works: Civil Code 8200 and 8204 (preliminary notice), 8412 and 8414 (lien recording deadlines), 8460 (enforcement). Public works: Civil Code 9300 to 9304 (preliminary notice), 9356 (stop payment notice timing), 9550 (payment bond on public works over $25,000). Many sources summarize these rules differently; check the current code and talk to an attorney before relying on a deadline for a real claim.</p>`,
  src: "Cal. Civil Code 8200, 8204, 8412, 8414, 8460, 9300–9304, 9356, 9550."
},

{ h: "Lien releases: conditional and unconditional",
  lead: "California uses four statutory release forms. Sign the right one at the right time.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Form</th><th>Civil Code</th><th>When to sign</th></tr></thead>
<tbody>
<tr><td>Conditional waiver and release on <strong>progress</strong> payment</td><td>8132</td><td>With each pay app. Only takes effect when you're actually paid.</td></tr>
<tr><td>Unconditional waiver and release on <strong>progress</strong> payment</td><td>8134</td><td>Only after the progress check has cleared your bank</td></tr>
<tr><td>Conditional waiver and release on <strong>final</strong> payment</td><td>8136</td><td>With your final bill, including retention</td></tr>
<tr><td>Unconditional waiver and release on <strong>final</strong> payment</td><td>8138</td><td>Only after final payment has cleared</td></tr>
</tbody></table></div>`,
  watch: `<p><strong>Never sign an unconditional release before the money is in your account.</strong> An unconditional release works the moment you sign it, even if the check never comes. GCs sometimes ask for unconditional releases with the pay app. Send a conditional one instead.</p>`,
  deeper: `<p>A waiver is effective only if it is substantially in the statutory form and signed. The CSLB posts the forms and explains them. Progress releases cover work through a stated date and leave retention and disputed extras unpaid; list any exceptions on the form.</p>`,
  src: "Cal. Civil Code 8132, 8134, 8136, 8138; CSLB, Conditional and Unconditional Waiver and Release Forms (cslb.ca.gov)."
},

{ h: "Change orders and T&M tickets",
  lead: "Extra work without written approval is often free work. Document everything, the same day.",
  body: `<ol class="steps">
<li><div><b>Spot the change</b>Different from the plans, specs or your scope letter: an added bed, a relocated controller, rock where the soil report said none.</div></li>
<li class="hl"><div><b>Give written notice fast</b>Subcontracts often set short notice deadlines. Email the same day: what, where, why it's extra.</div></li>
<li><div><b>Price it, or work T&amp;M</b>Send a change order request with labor, material, equipment and markup per the subcontract. If there's no time, get written direction to proceed on time and materials.</div></li>
<li class="hl"><div><b>Daily T&amp;M tickets</b>Date, location, names and hours of each worker, equipment hours, materials with quantities. Signed by the GC's superintendent that day.</div></li>
<li><div><b>Bill only approved changes</b>Track pending changes in a log until they're signed.</div></li>
</ol>`,
  ex: `<p>Photo before, photo during, photo after, with a date stamp. When the superintendent who signed the ticket leaves the job, your photos and tickets still tell the story.</p>`,
  watch: `<p>On public prevailing wage jobs, T&amp;M labor must be at the correct classifications and appear on certified payroll. A ticket with hours that don't match payroll is a red flag to the agency.</p>`
},

{ h: "Coordinating with other trades",
  lead: "Landscape goes in last, but several pieces must happen early. Miss them and you'll be sawcutting and boring.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Before…</th><th>You must…</th></tr></thead>
<tbody>
<tr><td>Paving, curbs, sidewalks and walls</td><td>Install irrigation sleeves for pipe and wire, sized and located per plan, marked at both ends</td></tr>
<tr><td>Building and site electrical rough-in</td><td>Confirm controller power and conduit are in the electrician's scope and location</td></tr>
<tr><td>Fine grading by the grading sub</td><td>Check the grade is within tolerance before you accept the area</td></tr>
<tr><td>Hardscape layout</td><td>Verify sleeve locations with the inspector (a City hold point on K-24-1952)</td></tr>
<tr><td>Backfilling trenches</td><td>Pass the pressure test with the inspector present</td></tr>
<tr><td>Planting</td><td>Finish irrigation, test coverage, complete weed control cycles</td></tr>
</tbody></table></div>`,
  watch: `<p>Before you accept an area from the GC, walk it and note in writing: grade, debris, compacted soil, damaged sleeves, concrete washout. Once you start, you've accepted it. The City's K-24-1952 specs say exactly that: start of work “constitutes acceptance of the conditions.”</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, landscape Special Provisions."
},

{ h: "Inspections and the punch list",
  lead: "A punch list is the list of items to fix before your work is accepted. Get to it fast and close it in one round.",
  body: `<ol class="steps">
<li><div><b>Self-punch first</b>Walk the job with your foreman before the GC or inspector does. Fix heads, tilt, coverage, missing mulch, dead plants, debris.</div></li>
<li><div><b>Request the inspection</b>With the notice the specs require (the City's K-24-1952 required 3 working days).</div></li>
<li class="hl"><div><b>Get the punch list in writing</b>Number each item, assign it, set a date.</div></li>
<li><div><b>Close it and document it</b>Photo of each completed item; send the closed list back.</div></li>
<li class="hl"><div><b>Get acceptance in writing</b>The date your planting is accepted usually starts the plant establishment period.</div></li>
</ol>`,
  ex: `<p>On K-24-1952, the substantial completion punch list and the punch list completion each had 7 days in the City's inspection table, and punch list completion authorized the start of the maintenance period. A slow punch list delays your establishment start, your completion and your retention.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, landscape Special Provisions (site observations)."
},

{ h: "Managing plant establishment",
  lead: "The establishment period is a small job of its own. Manage it with a schedule, a log and photos.",
  body: `<ul>
<li><strong>Know the start date in writing.</strong> On the City's K-24-1952, the 90-calendar-day plant establishment period began with acceptance of the planting installation.</li>
<li><strong>Visit on a schedule.</strong> Weekly is common. Log each visit: date, crew, hours, watering changes, weeds, pests, replacements.</li>
<li><strong>Adjust the controller for the season.</strong> Record every schedule change.</li>
<li><strong>Replace dead plants fast,</strong> with the same species and size.</li>
<li><strong>Photograph the same spots every month.</strong> It proves the site was kept up.</li>
<li><strong>Request the final walk-through</strong> before the period ends, so it doesn't drag on.</li>
</ul>`,
  exLabel: "Real requirements from Caltrans 11-428704 (see Module 15)",
  ex: `<p>A 250-working-day Type 1 establishment period. Four seasonal watering schedules built in the Calsense software. Fertilize the first week of April, July and September. A functional irrigation test with the Engineer every year. Keep the site “neat and presentable… including areas not visible to the public,” plus about 717,000 SF of existing planting. Bidders priced it from $10,000 to $300,000.</p>`,
  watch: `<p>Track your actual establishment hours and costs against what you bid. Establishment is where many landscape bids lose money quietly, one weekly visit at a time.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Special Provisions 6-1.1; Caltrans 11-428704 Special Provisions 20-4."
},

{ h: "Closeout, retention and warranty callbacks",
  lead: "Closeout is paperwork that releases your last dollars. Start it the day you start planting.",
  body: `<div class="twocol">
<div><h3>Closeout package</h3><ul>
<li><strong>As-builts</strong> (record drawings): mark changes daily on a field set; draft clean ones at the end</li>
<li><strong>Controller charts:</strong> reduced, color-coded zone maps, sealed or laminated, in each controller, when the specs require them</li>
<li>Product warranties and O&amp;M manuals</li>
<li>Spare parts or extra stock if specified (heads, nozzles, keys)</li>
<li>Owner training on the controller</li>
<li>Final punch list signed off</li>
</ul></div>
<div><h3>Then get paid</h3><ul>
<li>Bill retention with a conditional final release (8136)</li>
<li>Watch for the notice of completion; calendar your lien or stop payment notice deadline</li>
<li>Follow up weekly until retention is paid</li>
<li>Sign the unconditional final release (8138) only after it clears</li>
</ul></div>
</div>`,
  watch: `<p><strong>Warranty callbacks:</strong> answer every call within a day, fix it, and log it with the cost. A sub who comes back quickly gets invited again. Track callback cost per job: if one GC's jobs always generate callbacks, look for the cause (their maintenance crew? your installation?).</p>`
},

{ h: "Job cost: estimate vs. actual",
  lead: "Every job tests your estimate. Track hours and costs by the same lines you estimated, then compare.",
  exLabel: "Example numbers for practice",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Activity</th><th class="num">Est. hours</th><th class="num">Actual hours</th><th class="num">Difference</th></tr></thead>
<tbody>
<tr><td>Mainline trench and pipe</td><td class="num">120</td><td class="num">104</td><td class="num">−13%</td></tr>
<tr><td>Laterals and heads</td><td class="num">210</td><td class="num">248</td><td class="num">+18%</td></tr>
<tr><td>Planting, 1-gal and 5-gal (600 plants)</td><td class="num">150</td><td class="num">186</td><td class="num">+24%</td></tr>
<tr><td>24" box trees (24)</td><td class="num">48</td><td class="num">46</td><td class="num">−4%</td></tr>
<tr><td><strong>Total</strong></td><td class="num"><strong>528</strong></td><td class="num"><strong>584</strong></td><td class="num"><strong>+10.6%</strong></td></tr>
</tbody></table></div>
<p><strong>The math:</strong> 584 − 528 = 56 extra hours. 56 ÷ 528 = 10.6% over. At an example crew cost of $58 per hour, that's 56 × $58 = <strong>$3,248</strong> of profit lost.</p>
<p><strong>Production rate:</strong> planting was estimated at 600 ÷ 150 = 4.0 plants per hour. Actual: 600 ÷ 186 = 3.2 plants per hour.</p>`,
  ex: `<p><strong>Feed it back:</strong> the foreman's notes say the beds were hard clay and the crew had no auger. Next time: price clay sites at about 3.2 plants per hour, or add an auger rental and keep 4.0. Update your production rate table (Module 9) after every job, and note the conditions that caused the change.</p>`,
  watch: `<p>Job cost only works if crews log hours to the right activity every day. Keep it to 5–10 activity codes that match your estimate lines. Too many codes and the foreman guesses.</p>`
},

{ h: "The biweekly bid review meeting",
  lead: "The company's growth plan calls for a bid review meeting every two weeks. Keep it short, the same agenda every time, and decide things.",
  body: `<p><strong>Who:</strong> owner, estimator, field lead. <strong>How long:</strong> 45–60 minutes. <strong>Bring:</strong> the bid tracker and job cost reports.</p>
<ol class="steps">
<li><div><b>Open bids</b>What's due in the next two weeks, who's doing what, questions and addenda pending.</div></li>
<li class="hl"><div><b>Go / no-go on new invitations</b>Score them with the Module 3 scorecard and decide.</div></li>
<li><div><b>Results since last meeting</b>Won, lost, gap to low, feedback from GCs.</div></li>
<li class="hl"><div><b>Job cost check</b>Active jobs: hours and costs vs. estimate, change orders pending, pay apps outstanding.</div></li>
<li><div><b>One pricing lesson</b>Change one production rate, unit price or markup based on real results. Write it down.</div></li>
<li><div><b>Relationships</b>Which GCs to call, thank or follow up with before next meeting.</div></li>
</ol>`,
  ex: `<p>End every meeting with a short action list: who, what, by when. Start the next meeting by checking it.</p>`
},

{ h: "KPIs: measure the division",
  lead: "Key performance indicators (KPIs) are a few numbers that tell you if bidding is working. Track them monthly.",
  exLabel: "Example numbers for practice: first 6 months",
  body: `<div class="tablewrap"><table>
<thead><tr><th>KPI</th><th>How to calculate</th><th class="num">Example</th></tr></thead>
<tbody>
<tr><td><strong>Bid volume</strong></td><td>Bids submitted per month</td><td class="num">28 ÷ 6 = 4.7</td></tr>
<tr><td><strong>Win rate (count)</strong></td><td>Jobs won ÷ bids submitted</td><td class="num">4 ÷ 28 = 14.3%</td></tr>
<tr><td><strong>Win rate (dollars)</strong></td><td>$ won ÷ $ bid</td><td class="num">$510,000 ÷ $3,920,000 = 13.0%</td></tr>
<tr><td><strong>Gap to low bid</strong></td><td>(Your bid − low bid) ÷ low bid, on lost bids</td><td class="num">($212,000 − $193,500) ÷ $193,500 = 9.6%</td></tr>
<tr><td><strong>Margin on won jobs</strong></td><td>Bid margin vs. actual margin after job cost</td><td class="num">Bid 18%, actual 14%</td></tr>
<tr><td><strong>Repeat GCs</strong></td><td>Wins from GCs who invited you before</td><td class="num">3 of 4</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Reading these:</strong> a gap to low around 10% means you're close. Look at which lines differ (Module 15 shows how). Actual margin below bid margin means the estimate, not the market, needs work: fix production rates first. A low win rate with a small gap means keep bidding; a low win rate with a large gap means re-check your costs and markup (Module 10).</p>`
},

{ h: "Growing the division",
  lead: "Grow in steps you can survive: relationships, bonding, people, then bigger and public work.",
  body: `<ul>
<li><strong>GC relationships:</strong> aim for a handful of GCs who invite you to everything and give feedback. Perform on their jobs, bill cleanly, come back for warranty calls. Ask for a meeting once a year: “How can we be easier to work with?”</li>
<li><strong>Bonding capacity:</strong> a surety sets a single-job limit and a total (aggregate) limit based on your financial statements, working capital, experience and completed jobs. Clean, timely financials and finished jobs are what raise it. Ask your agent what would raise your limits and work toward it.</li>
<li><strong>Estimating capacity:</strong> one estimator can only do so many full takeoffs. When good invitations are being declined for lack of time, or bid volume stalls while win rate is healthy, it's time for an estimating assistant or takeoff help.</li>
<li><strong>Field capacity:</strong> don't win more than your foremen can run. Add a crew before you need it, not after a job slips.</li>
</ul>`,
  deeper: `<p><strong>When to add public work and Caltrans primes.</strong> A reasonable checklist before your first public prime: DIR registration and certified payroll working (Module 11); bonding for performance and payment bonds at the job size; cash to carry 60–90 days of costs; a traffic control sub relationship for street work; a few City or agency jobs done as a sub first. Module 15 shows that a job like 11-428704 (about $1.2M, C-27 allowed as prime) is a realistic first Caltrans prime for a company with bonding in place.</p>`
},

{ h: "A 12-month roadmap",
  lead: "A simple plan for the first year of the commercial division. Adjust the targets in your bid review meetings.",
  exLabel: "Example targets: adjust to your company",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Months</th><th>Focus</th><th>Targets</th></tr></thead>
<tbody>
<tr><td><strong>1–3</strong></td><td>Systems and relationships</td><td>Bid tracker, templates, subcontract checklist ready · 20 GCs contacted, 10 prequalified · public portals registered · 3–5 private sub bids a month · biweekly bid reviews started</td></tr>
<tr><td><strong>4–6</strong></td><td>First wins, done right</td><td>First 1–3 jobs won and built · job cost tracked on every job · clean pay apps and releases · production rates updated · sub prices sent to primes on City and agency jobs</td></tr>
<tr><td><strong>7–9</strong></td><td>Public work as a sub</td><td>First prevailing wage job with certified payroll · surety meeting to review limits · KPIs reviewed monthly · 5+ repeat GC invitations</td></tr>
<tr><td><strong>10–12</strong></td><td>Step up</td><td>First small public prime (City, school or water district landscape) if bonding allows · price at least one Caltrans job in full, prime or sub · year review: win rate, margin, gap to low · plan year 2 staffing</td></tr>
</tbody></table></div>`,
  ex: `<p>Every quarter, compare the plan to what happened. If win rate is good but margin is low, slow down and fix estimating before chasing volume. If margin is good but volume is low, spend more time on GC relationships and public portals.</p>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Letter of intent (LOI)", "A GC's written notice that it plans to subcontract with you; not a full contract."],
    ["Notice of award", "The owner's notice that it has awarded the prime contract."],
    ["Subcontract", "Your contract with the GC: scope, price, payment and risk terms."],
    ["Flow-down clause", "Makes you bound to the GC the way the GC is bound to the owner."],
    ["Pay-when-paid", "A clause setting when you're paid after the GC is paid."],
    ["Pay-if-paid", "A clause making the owner's payment a condition of yours; generally unenforceable in California."],
    ["Retention", "Money held back from each payment until the work is complete; usually capped at 5% in California."],
    ["Indemnity", "A promise to defend and pay for certain claims."],
    ["Additional insured", "A policy endorsement that extends your insurance to the GC or owner."],
    ["Submittal", "Product data, samples or tests sent for approval before ordering."],
    ["Schedule of values (SOV)", "Your contract price split into lines for billing."],
    ["Pay application", "Your monthly bill showing percent complete by SOV line."],
    ["Preliminary notice", "The 20-day notice that preserves lien, stop payment and bond rights."],
    ["Mechanics lien", "A claim against private property for unpaid work."],
    ["Stop payment notice", "A notice that makes the owner or agency hold funds for an unpaid claimant."],
    ["Conditional release", "A lien release that takes effect only when you're paid."],
    ["Unconditional release", "A lien release that takes effect when signed, paid or not."],
    ["T&amp;M ticket", "A daily record of time and materials for extra work, signed by the GC."],
    ["Punch list", "The list of items to fix before work is accepted."],
    ["As-builts", "Drawings showing what was actually installed."],
    ["Job cost", "Tracking actual hours and costs against the estimate."],
    ["KPI", "Key performance indicator: a number that measures how the division is doing."]
  ]
},

{ t: "quiz", id: "m16", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "A GC emails “you're low, we'll send a subcontract.” Should you order the box trees?", a: ["Yes, to lock in the price", "Not until you have a signed subcontract or written authorization", "Only if the nursery is offering a discount"], c: 1, why: "An email saying you're low isn't a contract; order only with written authority." },
    { q: "Your subcontract says you're paid only if the owner pays the GC. In California this is generally:", a: ["Fully enforceable", "Unenforceable under Clarke v. Safeco (1997)", "Required by law"], c: 1, why: "The California Supreme Court held pay-if-paid clauses unenforceable." },
    { q: "On a public works job, what's the normal cap on retention?", a: ["5%", "10%", "No limit"], c: 0, why: "Public Contract Code 7201 caps retention at 5%, with limited exceptions." },
    { q: "In the pay app example, work completed to date is $78,420 and previous payments are $20,007. What's due with 5% retention?", a: ["$58,413.00", "$54,492.00", "$57,360.00"], c: 1, why: "$78,420 − $3,921 retention − $20,007 previous = $54,492." },
    { q: "When should you sign an unconditional waiver and release on progress payment?", a: ["With the pay app", "After the payment has cleared your bank", "At the precon meeting"], c: 1, why: "An unconditional release is effective when signed, even if you're never paid." },
    { q: "On a private job, how soon must a sub serve a preliminary notice to fully protect its lien rights?", a: ["Within 20 days of first furnishing work", "Within 90 days after completion", "Only if the GC stops paying"], c: 0, why: "A late notice only covers work from 20 days before it was served." },
    { q: "Why do irrigation sleeves need to go in early?", a: ["The specs say so for no reason", "They must be in before paving, curbs and walls", "So the inspector can count them at the end"], c: 1, why: "After paving, sleeves mean sawcutting or boring at your cost." },
    { q: "You estimated 150 planting hours and used 186. What's the best next step?", a: ["Ignore it, it's one job", "Record why and update your production rate for similar conditions", "Raise every price 24%"], c: 1, why: "Job cost results should change your production rates, tied to the site conditions that caused them." }
  ]
},

{ t: "practice", id: "m16", h: "Practice assignments",
  lead: "Build the tools you'll use on the first job you win.",
  items: [
    { h: "Mark up a real subcontract", hrs: 0.75, d: "<p>Ask one GC you're prequalifying with for their standard subcontract form. Using the clause table from this module, mark each clause: OK, ask to change, or deal-breaker. Note any pay-if-paid, retention over 5%, broad indemnity or short notice deadlines. Make a one-page checklist and a list of questions for the owner or an attorney.</p>" },
    { h: "Rebuild the pay application", hrs: 0.75, d: "<p>In a spreadsheet, rebuild the $186,400 schedule of values and pay app #2 so your formulas give $54,492.00 due. Then make pay app #3: lines 2, 4 and 5 at 100%, line 6 at 50%, line 7 at 25%. Calculate retention, previous payments and payment due.</p>" },
    { h: "Get the lien forms", hrs: 0.5, d: "<p>Download the four statutory release forms from the <a href=\"https://cslb.ca.gov/consumers/legal_issues_for_consumers/Mechanics_Lien/Conditional_And_Unconditional_Waiver_Release_Form.aspx\" target=\"_blank\" rel=\"noopener\">CSLB waiver and release page</a>. Fill in a conditional progress release for pay app #2. Find out how the company will send 20-day preliminary notices (in-house or a notice service) and write the steps.</p>" },
    { h: "Build a submittal log", hrs: 0.5, d: "<p>From a landscape spec you have (Division 32, or Caltrans 11-428704 Special Provisions section 20 in the <a href=\"#lab-11-428704\">Real Bid Lab</a>), list every required submittal with its spec section, contents and when it's due. Mark the long-lead items.</p>" },
    { h: "Set up job cost tracking", hrs: 0.5, d: "<p>Make a job cost sheet with 5–10 activity codes that match your estimate lines. Make a one-page daily time card your foreman can fill in. If the company has a recent landscape job, fill in estimated vs. actual hours for it.</p>" },
    { h: "Build your KPI page", hrs: 0.5, d: "<p>From the <a href=\"https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP\" target=\"_blank\" rel=\"noopener\">Commercial Bid Tracker</a>, calculate bid volume, win rate by count and dollars, average gap to low and repeat GCs for all bids so far. If there are too few, use your Real Bid Lab results as practice data.</p>" },
    { h: "Draft the 12-month roadmap and first meeting", hrs: 0.5, d: "<p>Adapt the 12-month roadmap to the company: real targets for each quarter. Write the agenda for the next biweekly bid review meeting and bring both to the owner.</p>" }
  ]
},

{ h: "Module 16 summary",
  lead: "You can now carry a job from award to final payment, and use each job to make the next bid better.",
  body: `<ul>
<li>Being low isn't a contract. Read the subcontract: scope, payment, retention, changes, indemnity, insurance, warranty, disputes.</li>
<li>In California, pay-if-paid is generally unenforceable, primes must pay subs promptly, and retention is usually capped at 5%.</li>
<li>Submit early and completely; hold the precon to get names, dates and hold points.</li>
<li>Bill monthly from a fair schedule of values; know the retention math.</li>
<li>Send preliminary notices, use conditional releases, and never sign unconditional before you're paid.</li>
<li>Document changes the same day; put sleeves in before paving; close punch lists fast.</li>
<li>Manage plant establishment and closeout like their own jobs.</li>
<li>Track job cost, review bids every two weeks, watch your KPIs and grow in steps.</li>
</ul>
<p><strong>You've finished the course.</strong> Keep pricing real jobs in the <a href="#lab">Real Bid Lab</a> and bring every result to your bid review meeting.</p>`
}
]
});
