(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 16, hours: 10, title: "After the Bid: Contracts, Billing and Growing the Division",
slides: [

{ t: "cover",
  h: "After the Bid: Contracts, Billing and Growing the Division",
  lead: "Winning the bid is the start. This module walks you from the award letter to the final retention check, then shows how to use every finished job to bid the next one better and grow the commercial division.",
  objectives: [
    "Read a subcontract clause by clause, translate it to plain words, and ask for the right changes",
    "Know the California rules on pay-if-paid, prompt payment, retention and indemnity, and where to check them",
    "Prepare submittals, a schedule of values and monthly pay applications with change orders and retention release",
    "Protect your payment with preliminary notices, lien and stop payment deadlines, and the right lien releases",
    "Run change orders with T&M tickets, inspections, plant establishment and closeout without losing money",
    "Review job cost against the estimate and feed it back into pricing",
    "Run a bid review, track KPIs, plan hiring and bonding, and follow 12-month and 3-year growth roadmaps"
  ],
  time: [["Reading and slides", "4.5 h"], ["Practice assignments", "5.5 h"], ["Module total", "10 h"]],
  body: "<p>The legal points here are a starting map. They are not legal advice. Before you sign your first commercial subcontract, have a construction attorney review your standard markups once. Sample clauses in this module are made up for teaching; real subcontracts vary.</p>"
},

{ h: "You're low. Now what?",
  lead: "Being low isn't the same as having a contract. Know the steps between bid day and the first day of work.",
  body: `<ol class="steps">
<li><div><b>Verbal or email “you're low”</b>Nice to hear, but not a contract. Don't order anything.</div></li>
<li><div><b>LOI (letter of intent)</b>A GC's (general contractor's) written notice that it plans to subcontract with you. It may allow limited work, like submittals. Read what it authorizes, and what it doesn't.</div></li>
<li><div><b>Notice of award (public)</b>The agency awards the prime contract. On the City's K-24-1952, the City prepared contract documents about 21 days after bid opening, then awarded once the signed contract, bonds and insurance were received.</div></li>
<li class="hl"><div><b>Subcontract signed</b>Now you have a deal. Read it before you sign (next slides).</div></li>
<li><div><b>Bonds and insurance certificates</b>Sent to the GC before you go on site.</div></li>
<li><div><b>Submittals, preconstruction meeting, then work</b></div></li>
</ol>`,
  watch: `<p>If a GC asks you to start before the subcontract is signed, get a written authorization that says what work, what price and that the subcontract terms will follow. Otherwise you could be working under terms you never saw.</p>`,
  src: "City of San Diego Bidding Documents K-24-1952-DBB-3-A, Instructions to Bidders item 8."
},

{ h: "The subcontract: clauses to read every time",
  lead: "GC (general contractor) subcontracts are written to protect the GC. You can ask for changes, but only if you read it first.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Clause</th><th>What to check</th></tr></thead>
<tbody>
<tr><td><strong>Scope</strong></td><td>Matches your proposal: same sheets, spec sections, addenda, inclusions and exclusions. Attach your proposal as an exhibit (an attachment that's part of the contract).</td></tr>
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
  ex: `<p>Make a one-page subcontract checklist with these rows. For each new GC, mark what's acceptable, what to ask to change, and what's a deal-breaker. After a few GCs, you'll know their forms by heart. The next five slides go through each clause with a sample.</p>`
},

{ h: "Clause by clause · scope, documents and flow-down",
  lead: "The scope clause decides what you must build. It should point to your proposal. “The plans and specs” alone leaves your exclusions out.",
  exLabel: "Sample clause (made up for teaching)",
  ex: `<p>“Subcontractor shall furnish all labor, materials, equipment and services necessary for the complete landscape and irrigation work, as shown or reasonably inferable from the Contract Documents, including all work customarily performed by the landscape trade. Subcontractor is bound to Contractor by the terms of the Prime Contract to the same extent Contractor is bound to Owner.”</p>`,
  body: `<div class="tablewrap"><table>
<thead><tr><th>Phrase</th><th>Plain words</th><th>What to ask for</th></tr></thead>
<tbody>
<tr><td>“complete landscape and irrigation work”</td><td>Everything, even items you excluded</td><td>“Work per Subcontractor's Proposal #26-041 Rev. 1, attached as Exhibit B, including its exclusions and clarifications.”</td></tr>
<tr><td>“reasonably inferable” and “customarily performed by the trade”</td><td>Work not shown but arguably expected</td><td>Delete, or limit to items needed for your listed scope</td></tr>
<tr><td>Contract Documents</td><td>Which plans and specs?</td><td>A list of sheets, dates and addenda, matching your proposal</td></tr>
<tr><td>“bound… to the same extent” (flow-down)</td><td>The owner's contract terms apply to you too</td><td>A copy of the prime contract before you sign, and that your proposal controls if they conflict</td></tr>
</tbody></table></div>`,
  watch: `<p>If the GC won't attach your proposal, at least attach the exclusions and clarifications page. Without it, your exclusions may not be part of the deal.</p>`
},

{ h: "Clause by clause · payment, retention and lien waivers",
  lead: "These clauses decide when your money comes and what you give up to get it. California law overrides some of them.",
  exLabel: "Sample clause (made up for teaching)",
  ex: `<p>“Payment to Subcontractor is expressly conditioned on Contractor's receipt of payment from Owner. Contractor shall retain 10% of each progress payment until final completion and acceptance of the Project. With each payment application, Subcontractor shall deliver an unconditional waiver and release covering all work through the billing date.”</p>`,
  body: `<div class="tablewrap"><table>
<thead><tr><th>Phrase</th><th>Plain words</th><th>What the law says / what to ask</th></tr></thead>
<tbody>
<tr><td>“expressly conditioned on… receipt of payment”</td><td>Pay-if-paid: if the owner never pays, you never get paid</td><td>Generally unenforceable in California (<em>Clarke v. Safeco</em>, 1997). Ask for pay-when-paid with a time limit: “within 7 days after Contractor receives payment, and in no event later than 45 days after billing.”</td></tr>
<tr><td>“retain 10%”</td><td>Ten percent held back</td><td>Public work and private contracts from Jan 1, 2026: generally capped at 5% (next slides). Ask for 5% and release when your scope is accepted.</td></tr>
<tr><td>“until final completion… of the Project”</td><td>Your retention waits for the whole building</td><td>“Released within 30 days after acceptance of Subcontractor's work” or after plant establishment</td></tr>
<tr><td>“unconditional waiver… with each payment application”</td><td>You give up lien rights before you're paid</td><td>Change to conditional waivers with the bill; unconditional only after payment clears</td></tr>
</tbody></table></div>`,
  deeper: `<p>Civil Code §8122: an owner, direct contractor or subcontractor can't, by contract or otherwise, waive or impair another claimant's lien and payment rights; such a term is void unless the claimant signs a statutory waiver and release. That's why the release forms matter more than the contract wording. Business and Professions Code §7108.5 sets the 7-day prompt payment rule for progress payments unless otherwise agreed in writing.</p>`,
  src: "Wm. R. Clarke Corp. v. Safeco Ins. Co. (1997) 15 Cal.4th 882; Cal. Civil Code §§8122, 8811; Public Contract Code §7201; Business and Professions Code §7108.5 (via california.public.law, verified Oct. 2026)."
},

{ h: "Clause by clause · changes, notice and claims",
  lead: "Change clauses decide whether extra work gets paid. The danger is a short notice deadline you don't know about.",
  exLabel: "Sample clause (made up for teaching)",
  ex: `<p>“No extra work shall be paid unless authorized in advance by a written Change Order signed by Contractor's Project Manager. Subcontractor shall give written notice of any claim within 48 hours of the event giving rise to it, or the claim is waived. Markup on changes shall not exceed 10% for overhead and profit combined.”</p>`,
  body: `<div class="tablewrap"><table>
<thead><tr><th>Phrase</th><th>Plain words</th><th>What to ask for</th></tr></thead>
<tbody>
<tr><td>“authorized in advance by a written Change Order signed by… Project Manager”</td><td>Only the PM (project manager) can approve; the superintendent's word isn't enough</td><td>Add “or written direction from Contractor's superintendent, including signed T&amp;M (time and materials) tickets”</td></tr>
<tr><td>“within 48 hours… or the claim is waived”</td><td>Miss the clock, lose the money</td><td>Ask for 7 days; then calendar whatever you agree to</td></tr>
<tr><td>“markup… not exceed 10%”</td><td>Your overhead and profit on changes are capped</td><td>Match your real markup (Module 10), or separate overhead and profit, and a minimum change order amount</td></tr>
<tr><td>Missing: unit prices</td><td>Your proposal's unit prices may not apply</td><td>“Unit prices in Exhibit B apply to added or deleted work”</td></tr>
</tbody></table></div>`,
  watch: `<p>On a public job, the GC's own claim deadlines with the agency are often short too. Ask the GC what notice period the prime contract gives it, so your notice reaches them in time.</p>`
},

{ h: "Clause by clause · schedule, delay and liquidated damages",
  lead: "Schedule clauses decide who pays when the job runs late. Landscape is last, so delays by others land on you.",
  exLabel: "Sample clause (made up for teaching)",
  ex: `<p>“Subcontractor shall perform its Work in accordance with Contractor's schedule as revised from time to time. Subcontractor shall be liable for liquidated damages assessed by Owner to the extent caused by Subcontractor. Subcontractor's sole remedy for delay of any kind shall be an extension of time.”</p>`,
  body: `<div class="tablewrap"><table>
<thead><tr><th>Phrase</th><th>Plain words</th><th>What to ask for</th></tr></thead>
<tbody>
<tr><td>“as revised from time to time”</td><td>The GC can squeeze your time</td><td>Your duration from your proposal, counted from turnover of ready work areas</td></tr>
<tr><td>“liquidated damages… to the extent caused by Subcontractor”</td><td>LDs (liquidated damages, a set dollar amount per late day) pass to you only for delay you caused</td><td>Keep “to the extent caused by”; ask for a cap at a percent of your subcontract</td></tr>
<tr><td>“sole remedy… extension of time” (no damages for delay)</td><td>More time, but no money for standby or extra trips</td><td>Delete, or add “except for delays caused by Contractor or Owner”</td></tr>
</tbody></table></div>`,
  deeper: `<p>Public Contract Code §7102: on public agency construction contracts and their subcontracts, a clause limiting the contractee to a time extension for a delay it caused can't bar damages when the delay is unreasonable and wasn't contemplated by the parties. It doesn't void notice requirements, dispute procedures or liquidated damages. On private jobs there's no such statute, so negotiate it.</p>`,
  src: "Cal. Public Contract Code §7102 (via california.public.law, verified Oct. 2026)."
},

{ h: "Clause by clause · indemnity, insurance, warranty, termination and disputes",
  lead: "The back half of the subcontract is where the expensive surprises hide.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Clause (typical wording)</th><th>Plain words</th><th>What to ask for</th></tr></thead>
<tbody>
<tr><td>Indemnity: “defend, indemnify and hold harmless… from all claims arising out of the Work, regardless of fault”</td><td>You pay even when someone else caused it</td><td>“To the extent caused by Subcontractor's negligence”; California limits these clauses (Civil Code §§2782, 2782.05)</td></tr>
<tr><td>Insurance: additional insured, primary and non-contributory, waiver of subrogation</td><td>Your policy covers the GC first, and your insurer can't sue them</td><td>Send to your agent the same day; price any extra endorsement cost</td></tr>
<tr><td>Warranty: “one year from final completion of the Project”</td><td>Your plant warranty may start months after you finish</td><td>“From acceptance of Subcontractor's work” and exclusions for vandalism, water loss and owner neglect</td></tr>
<tr><td>Termination for convenience</td><td>The GC can end your contract for no reason</td><td>Payment for work done, materials ordered, demobilization and reasonable profit on completed work</td></tr>
<tr><td>Disputes: “arbitration in Orange County”</td><td>Your fight happens far away, at your cost</td><td>San Diego County venue; mediation first</td></tr>
</tbody></table></div>`,
  watch: `<p>Don't try to change everything. Pick your top five (scope exhibit, pay-if-paid, retention, unconditional waivers, notice deadlines) and ask for those every time.</p>`,
  src: "Cal. Civil Code §§2782, 2782.05."
},

{ h: "Your subcontract rider · a one-page change list",
  lead: "A rider is a one-page list of changes you send back with the GC's (general contractor's) subcontract. The same page works for most GCs.",
  exLabel: "Template (adjust with your attorney)",
  body: `<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Section</th><th>Requested change</th></tr></thead>
<tbody>
<tr><td>1</td><td>Scope</td><td>Add: “Subcontractor's Proposal #[ ] dated [ ], including exclusions and clarifications, is Exhibit B and controls scope.”</td></tr>
<tr><td>2</td><td>Payment</td><td>Replace pay-if-paid with: “within 7 days after Contractor receives payment for Subcontractor's work.”</td></tr>
<tr><td>3</td><td>Retention</td><td>“Retention not to exceed 5%, released within 30 days after acceptance of Subcontractor's work.”</td></tr>
<tr><td>4</td><td>Lien releases</td><td>“Conditional statutory releases with each billing; unconditional only after payment clears.”</td></tr>
<tr><td>5</td><td>Notice</td><td>Change claim notice from 48 hours to 7 calendar days.</td></tr>
<tr><td>6</td><td>Changes</td><td>“Signed T&amp;M tickets are written authorization; unit prices in Exhibit B apply.”</td></tr>
<tr><td>7</td><td>Warranty</td><td>“Warranty and plant establishment start at acceptance of Subcontractor's work.”</td></tr>
<tr><td>8</td><td>Indemnity</td><td>Add “to the extent caused by Subcontractor's negligence or willful misconduct.”</td></tr>
</tbody></table></div>`,
  ex: `<p>Most GCs accept some items and refuse others. Log what each GC agreed to. Next time you bid their job, the remaining risk goes into your price or your go/no-go decision (Module 3).</p>`
},

{ h: "Payment clauses: pay-when-paid vs. pay-if-paid",
  lead: "These two phrases sound alike but are very different. In California, the second kind is generally not enforceable.",
  body: `<div class="twocol">
<div><h3>Pay-when-paid</h3><ul>
<li>Sets the <strong>timing</strong>: the GC (general contractor) pays you within a set time after it gets paid</li>
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

{ h: "Prompt payment rules at a glance",
  lead: "Several California laws set deadlines for paying contractors and subs. Know which one applies to each payment you're waiting on.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Payment</th><th>Rule</th><th>Deadline</th><th>Late penalty</th></tr></thead>
<tbody>
<tr><td>Local agency (city, county, district) pays the prime a progress payment</td><td>PCC §20104.50</td><td>30 days after an undisputed, proper payment request; an improper request must be returned within 7 days with reasons</td><td>Interest at the legal rate</td></tr>
<tr><td>Private owner pays the direct contractor (GC) a progress payment</td><td>Civil Code §8800</td><td>30 days after notice demanding payment, unless otherwise agreed in writing; may hold 150% of a good-faith dispute</td><td>2% per month</td></tr>
<tr><td>Prime or GC pays the sub its share of a progress payment</td><td>B&amp;P Code §7108.5</td><td>7 days after receiving it, unless otherwise agreed in writing</td><td>2% per month; possible license discipline</td></tr>
<tr><td>Public agency releases retention</td><td>PCC §7107</td><td>60 days after completion</td><td>2% per month</td></tr>
<tr><td>Prime pays the sub's share of public retention</td><td>PCC §7107</td><td>7 days after receiving it</td><td>2% per month</td></tr>
<tr><td>Private owner releases retention</td><td>Civil Code §8812</td><td>45 days after completion</td><td>2% per month</td></tr>
<tr><td>Private GC pays the sub's share of retention</td><td>Civil Code §8814</td><td>10 days after receiving it; may hold 150% of a good-faith dispute</td><td>2% per month</td></tr>
</tbody></table></div>`,
  watch: `<p>PCC means Public Contract Code; B&amp;P means Business and Professions Code. These rules have exceptions and conditions. Before you demand a penalty, read the current section and talk to an attorney. Caltrans and other state agencies follow their own state payment rules.</p>`,
  src: "Cal. Public Contract Code §§7107, 20104.50; Civil Code §§8800, 8812, 8814; Business and Professions Code §7108.5 (via california.public.law, verified Oct. 2026)."
},

{ h: "Retention: how much and when it comes back",
  lead: "Retention is money held back from each payment until the work is finished. In California, it's usually capped at 5%.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Job type</th><th>Cap</th><th>Release to the GC</th><th>GC pays your share</th></tr></thead>
<tbody>
<tr><td><strong>Public (city, school, water district)</strong></td><td>5% of each payment and of the contract, with limited exceptions</td><td>Within 60 days after completion</td><td>Within 7 days of receiving it</td></tr>
<tr><td><strong>Private, contracts signed on or after Jan 1, 2026</strong></td><td>5% (new law, SB 61), with exceptions such as residential projects that aren't mixed-use and are four stories or less</td><td>Within 45 days after completion of the work of improvement</td><td>Within 10 days of receiving it</td></tr>
<tr><td><strong>Caltrans prime</strong></td><td>Caltrans holds no retention from progress payments (see Module 15)</td><td>Not applicable</td><td>Read your subcontract</td></tr>
</tbody></table></div>`,
  ex: `<p>On the City's K-24-1952, the City's pay estimate form calculated retention as 5% of the total billed to date, and the contract required primes to return retention to subs within 30 calendar days after the sub's work was satisfactorily completed and accepted, including partial acceptances.</p>`,
  watch: `<p>“Completion” often means the whole project, not your scope. Landscape finishes last and then has a plant establishment period, so your retention can sit for months. Ask the GC (general contractor) to release your retention when your work is accepted, and write it into the subcontract.</p>`,
  deeper: `<p><strong>Public:</strong> Public Contract Code 7201 caps retention at 5% for the agency, the prime and every sub tier; an agency can go higher only by finding, before bidding, that a project is substantially complex. A prime may also hold more than 5% from a sub who fails to provide bonds the prime required in writing before bid. AB 2173 made the 5% cap permanent from Jan 1, 2023. Release timing is Public Contract Code 7107 (60 days; sub's share within 7 days; 2% per month penalty). Public Contract Code 22300 lets the contractor substitute securities or use an escrow account for retention and earn the interest; subs doing more than 5% of the bid can ask for the same.</p>
<p><strong>Private:</strong> SB 61 (2025) added Civil Code 8811, a 5% cap on private works contracts entered on or after Jan 1, 2026. It doesn't apply to a sub who fails to give bonds the contractor required in writing at or before bid request, or to residential projects that aren't mixed-use and don't exceed four stories. Release timing is Civil Code 8812 (owner, 45 days after completion) and 8814 (direct contractor to sub, 10 days). Check with an attorney on mixed-use jobs.</p>`,
  src: "Cal. Public Contract Code 7107, 7201, 22300; AB 2173 (2022); SB 61 (2025), Civil Code 8811; Civil Code 8812, 8814; City of San Diego K-24-1952 pay estimate form and EOCP Section J."
},

{ h: "Indemnity, insurance and bonds",
  lead: "Indemnity says who pays when something goes wrong. Insurance and bonds are how you prove you can pay.",
  body: `<ul>
<li><strong>Indemnity:</strong> you agree to defend and pay for claims arising from your work. California law limits how far a GC (general contractor) can push this onto you. On most commercial jobs, a sub can't be made to pay for the GC's or owner's own active negligence or willful misconduct, or for claims outside the sub's scope of work.</li>
<li><strong>COI (certificate of insurance):</strong> proof of your general liability, auto, workers' comp and umbrella. The GC will list required limits.</li>
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
<tr><td>Irrigation product data</td><td>Cut sheets (manufacturer product pages) for every head, nozzle, valve, backflow, controller, sensor, pipe and wire, marked with the exact model</td></tr>
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

{ h: "Building a submittal package, step by step",
  lead: "One clean package per spec section, sent once, gets approved fastest.",
  body: `<ol class="steps">
<li><div><b>1. List what the spec asks for</b>Open each Division 32 section (or Caltrans Special Provisions section 20) and copy its submittal list into your log.</div></li>
<li><div><b>2. Get the right cut sheets</b>From the manufacturer's website or your supplier. One product per page where you can.</div></li>
<li class="hl"><div><b>3. Mark the exact model</b>Circle or highlight the model number, size, nozzle and options you'll install. Cross out models you won't use.</div></li>
<li><div><b>4. Add a cover sheet</b>Project, spec section, submittal number, list of items, any deviation from the spec, your signature (next slide).</div></li>
<li><div><b>5. Check it against the plans</b>Plan legend models, quantities and sizes match the cut sheets.</div></li>
<li><div><b>6. Send it the way the GC wants</b>Usually a single PDF through the GC's (general contractor's) project software or email, by the due date from precon.</div></li>
<li class="hl"><div><b>7. Track the answer</b>Approved, approved as noted, revise and resubmit, or rejected. Order only on “approved” or “approved as noted,” and follow the notes.</div></li>
</ol>`,
  ex: `<p>Caltrans 11-431064's Special Provisions said to allow 5 working days for each submittal review, and required a statement from the plant vendor listing plant names, sizes, quantities and the expected delivery date. Build those review days into your schedule.</p>`,
  watch: `<p>“Or equal” products need their own approval. Never install a substitute because the supplier was out of the specified one. Submit it first.</p>`,
  src: "Caltrans 11-431064 Special Provisions (submittal review time; plant vendor statement)."
},

{ h: "Submittal cover sheet and log · templates",
  lead: "Two simple forms keep submittals moving: a cover sheet for each package and a log for the whole job.",
  exLabel: "Templates (fill in for your job)",
  body: `<div class="tablewrap"><table>
<thead><tr><th colspan="2">Submittal cover sheet</th></tr></thead>
<tbody>
<tr><td>Project / GC</td><td>[Name] / [GC]</td></tr>
<tr><td>Submittal #</td><td>32 84 00-01 (spec section, then sequence number)</td></tr>
<tr><td>Spec section and title</td><td>32 84 00 Planting Irrigation</td></tr>
<tr><td>Items included</td><td>Controller, flow sensor, master valve, remote control valves, rotors, spray bodies, nozzles, drip kits</td></tr>
<tr><td>Deviations from spec</td><td>None / [describe]</td></tr>
<tr><td>Date sent / response needed by</td><td>[ ] / [ ]</td></tr>
<tr><td>Submitted by</td><td>[Name, signature]</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Section</th><th>Item</th><th>Due</th><th>Sent</th><th>Status</th><th>Long lead?</th></tr></thead>
<tbody>
<tr><td>01</td><td>32 84 00</td><td>Irrigation products</td><td>03/02</td><td>02/26</td><td>Approved as noted</td><td>Controller, 3 weeks</td></tr>
<tr><td>02</td><td>32 91 13</td><td>Soil test and amendments</td><td>03/09</td><td>03/05</td><td>Pending</td><td>No</td></tr>
<tr><td>03</td><td>32 93 00</td><td>Plant sources and tree photos</td><td>03/16</td><td></td><td>Not sent</td><td>36" box trees, 6 weeks</td></tr>
</tbody></table></div>`,
  watch: `<p>Review the log every week. A “not sent” line next to a long-lead item is a schedule delay waiting to happen.</p>`
},

{ h: "The preconstruction meeting",
  lead: "The precon (preconstruction) meeting sets the rules for the job. Bring questions, leave with names and dates.",
  body: `<p><strong>Bring:</strong> your schedule, submittal log, insurance, list of questions, emergency contact and the name of your foreman.</p>
<p><strong>Leave knowing:</strong></p>
<ul>
<li>Who approves changes, signs T&amp;M (time and materials) tickets and schedules inspections</li>
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
  lead: "The SOV (schedule of values) breaks your contract price into lines you bill against each month. Build it the way the work happens.",
  exLabel: "Example numbers for practice: a $186,400 landscape subcontract",
  body: `<p>Scope from Module 1: landscape and irrigation per sheets L-1.0 to L-4.2, spec sections 32 84 00 and 32 93 00, with 90-day plant establishment.</p>
<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Line</th><th class="num">Scheduled value</th></tr></thead>
<tbody>
<tr><td>1</td><td>Mobilization, bonds, submittals</td><td class="num">$7,500</td></tr>
<tr><td>2</td><td>Irrigation POC (point of connection), backflow, controller</td><td class="num">$14,200</td></tr>
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
  watch: `<p>Don't load too much into early lines (front-loading). GCs (general contractors) and owners check it, and an SOV that bills 40% in month one gets rejected. Give plant establishment and closeout real values, so you get paid for them and so the GC has a reason to sign them off.</p>`
},

{ h: "Worked example: pay application #2 with retention",
  lead: "Each month you report percent complete by line. The math gives your payment after retention.",
  exLabel: "Example numbers for practice (continues the $186,400 subcontract)",
  body: `<p>CO (change order) #1 (add two valves and a sleeve) was approved for <strong>$2,850</strong>. Pay app #1 billed $21,060 (line 1 at 100%, line 3 at 60%). Now it's the end of month 2:</p>
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
  deeper: `<p>The A–H summary follows the layout of the City of San Diego's pay estimate form (original amount, change orders, total authorized, billed to date, 5% retention, previous payments, payment due, remaining). Private GCs often use the AIA-style G702/G703 format (forms from the American Institute of Architects) with the same math. At 100% complete, total retention on this job would be 5% × $189,250 = $9,462.50, paid after completion under the rules on the retention slide.</p>`,
  watch: `<p><strong>Send a complete package every month, by the GC's cutoff</strong> (often the 20th–25th; ask at precon): the signed pay app and SOV sheet, a conditional progress release for this bill, an unconditional release for last month's payment only if that check has cleared, certified payroll on prevailing wage jobs (Module 11), and only change orders already approved in writing. Log each pay app: date sent, amount, date paid, days to pay. A GC who always pays slowly should affect whether you bid its next job (Module 3).</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A pay estimate form (Appendix). Contract amounts are made up for practice."
},

{ h: "Pay app worked example 2 · an add and a deduct change order",
  lead: "A deduct change order is billed as a negative line. Retention applies to the net amount.",
  exLabel: "Example numbers for practice: a $96,500 park subcontract",
  body: `<p>SOV (schedule of values): 1 Mobilization and submittals $4,000 · 2 Irrigation $38,500 · 3 Soil prep $9,000 · 4 Planting $33,000 · 5 Mulch $6,000 · 6 Plant establishment $6,000 = <strong>$96,500</strong>. CO #1 add, relocate controller: <strong>+$1,850</strong>. CO #2 deduct, delete (40) #5 shrubs at the $50 deduct unit price: 40 × $50 = <strong>−$2,000</strong>. Pay app #1 billed $19,400 (line 1 at 100%, line 2 at 40%) and was paid $18,430 after 5% retention.</p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">Value</th><th class="num">% done</th><th class="num">To date</th></tr></thead>
<tbody>
<tr><td>1 Mobilization</td><td class="num">4,000</td><td class="num">100%</td><td class="num">4,000</td></tr>
<tr><td>2 Irrigation</td><td class="num">38,500</td><td class="num">100%</td><td class="num">38,500</td></tr>
<tr><td>3 Soil prep</td><td class="num">9,000</td><td class="num">100%</td><td class="num">9,000</td></tr>
<tr><td>4 Planting</td><td class="num">33,000</td><td class="num">60%</td><td class="num">19,800</td></tr>
<tr><td>5–6 Mulch, establishment</td><td class="num">12,000</td><td class="num">0%</td><td class="num">0</td></tr>
<tr><td>CO #1 (add)</td><td class="num">1,850</td><td class="num">100%</td><td class="num">1,850</td></tr>
<tr><td>CO #2 (deduct)</td><td class="num">−2,000</td><td class="num">100%</td><td class="num">−2,000</td></tr>
<tr><td><strong>Total</strong></td><td class="num"><strong>96,350</strong></td><td class="num"></td><td class="num"><strong>71,150</strong></td></tr>
</tbody></table></div>
<p><strong>Math:</strong> contract to date = 96,500 + 1,850 − 2,000 = $96,350. Completed to date = $71,150. Retention 5% = $3,557.50. Previous payments = $18,430.00. <strong>Due now = 71,150 − 3,557.50 − 18,430 = $49,162.50.</strong></p>`,
  ex: `<p><strong>Check it:</strong> work this period = 71,150 − 19,400 = $51,750. Minus 5% ($2,587.50) = $49,162.50. Same answer.</p>`,
  watch: `<p>Take the deduct when it's approved, even if it lowers this month's check. A GC (general contractor) who finds an unclaimed deduct later stops trusting all your billing.</p>`
},

{ h: "Pay app worked example 3 · final bill and retention release",
  lead: "Finishing the job takes three more bills: the last of the work, the establishment period, and the retention itself.",
  exLabel: "Example numbers for practice (continues the $96,350 contract)",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Bill</th><th>What's complete</th><th>Math</th><th class="num">Due</th></tr></thead>
<tbody>
<tr><td>Pay app #3</td><td>Planting and mulch 100%; establishment 0%</td><td>Completed = 71,150 + 13,200 + 6,000 = 90,350. Retention 5% = 4,517.50. Previous = 18,430 + 49,162.50 = 67,592.50. Due = 90,350 − 4,517.50 − 67,592.50</td><td class="num">$18,240.00</td></tr>
<tr><td>Pay app #4 (final work)</td><td>Establishment 100%</td><td>Completed = 96,350. Retention = 4,817.50. Previous = 67,592.50 + 18,240 = 85,832.50. Due = 96,350 − 4,817.50 − 85,832.50</td><td class="num">$5,700.00</td></tr>
<tr><td>Retention bill</td><td>All work accepted</td><td>Retention held = 5% × 96,350</td><td class="num">$4,817.50</td></tr>
</tbody></table></div>
<p><strong>Total paid over the job:</strong> 18,430 + 49,162.50 + 18,240 + 5,700 + 4,817.50 = <strong>$96,350.00</strong>, the full contract to date.</p>
<p><strong>Release timeline, public job (example dates):</strong> acceptance Mar 2, 2027 → agency releases retention within 60 days, by May 1, 2027 (PCC §7107) → if the prime receives it Apr 23, it pays your share within 7 days, by Apr 30. <strong>Private job:</strong> owner within 45 days of completion (Civil Code §8812); GC pays your share within 10 days of receiving it (Civil Code §8814).</p>`,
  watch: `<p>Send the retention bill with a conditional waiver and release on final payment (Civil Code §8136). Sign the unconditional final release (§8138) only after the retention check clears.</p>`,
  src: "Cal. Public Contract Code §7107; Civil Code §§8136, 8138, 8812, 8814. Contract amounts are made up."
},

{ h: "Lien rights and preliminary notices",
  lead: "California gives unpaid contractors strong payment rights, but only if you send the right notices on time.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>Private job</th><th>Public job</th></tr></thead>
<tbody>
<tr><td><strong>Your payment tools</strong></td><td>Mechanics lien on the property, stop payment notice, payment bond claim (if there's a bond)</td><td>No lien on public property. Stop payment notice to the agency and claim on the prime's payment bond.</td></tr>
<tr><td><strong>Preliminary notice</strong></td><td>As a sub, serve a 20-day preliminary notice on the owner, the GC (general contractor) and any construction lender</td><td>Required for claimants without a direct contract with the prime. A sub hired directly by the prime is generally exempt for stop payment notices; your own suppliers and sub-subs are not.</td></tr>
<tr><td><strong>Timing</strong></td><td>Within 20 days of first furnishing work. Late notice covers only work from 20 days before you served it.</td><td>Same 20-day rule where a notice is required</td></tr>
<tr><td><strong>Deadline to act</strong></td><td>Record a lien within 90 days after completion, or 30 days after a recorded NOC (notice of completion). Sue to enforce within 90 days after recording.</td><td>Stop payment notice within 30 days after a recorded notice of completion or acceptance, or 90 days after completion if none was recorded</td></tr>
</tbody></table></div>`,
  watch: `<p>Send a preliminary notice on every private job, as standard practice, right after you start. It's routine, and it protects you. Calendar the lien and stop payment deadlines the day a notice of completion is recorded.</p>`,
  deeper: `<p>Private works: Civil Code 8200 and 8204 (preliminary notice), 8412 and 8414 (lien recording deadlines), 8460 (enforcement). Public works: Civil Code 9300 to 9304 (preliminary notice), 9356 (stop payment notice timing), 9550 (payment bond on public works over $25,000). Many sources summarize these rules differently; check the current code and talk to an attorney before relying on a deadline for a real claim.</p>`,
  src: "Cal. Civil Code 8200, 8204, 8412, 8414, 8460, 9300–9304, 9356, 9550."
},

{ h: "Worked example · lien deadlines on a private job",
  lead: "Turn the lien rules into real dates the day each event happens. These dates are examples; the day counts come from the Civil Code.",
  exLabel: "Example dates for practice (2026)",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Event</th><th>Rule</th><th>Date</th></tr></thead>
<tbody>
<tr><td>You first furnish work (deliver pipe, start trenching)</td><td></td><td>Mon, Mar 2</td></tr>
<tr><td>Serve the 20-day preliminary notice</td><td>Within 20 days (Civil Code §8204)</td><td>By Sun, Mar 22 (serve it the first week)</td></tr>
<tr><td>Work of improvement actually completed</td><td>Completion (§8180)</td><td>Fri, Aug 14</td></tr>
<tr><td>Owner records a notice of completion</td><td></td><td>Tue, Aug 18</td></tr>
<tr><td><strong>Last day to record your lien as a sub</strong></td><td>30 days after the NOC is recorded (§8414)</td><td><strong>Thu, Sep 17</strong></td></tr>
<tr><td>If no NOC had been recorded</td><td>90 days after completion (§8414)</td><td>Thu, Nov 12</td></tr>
<tr><td>You record the lien</td><td></td><td>Thu, Sep 10</td></tr>
<tr><td><strong>Last day to file suit to enforce it</strong></td><td>90 days after recording (§8460)</td><td><strong>Wed, Dec 9</strong></td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Late notice example:</strong> if you forgot and served the preliminary notice on Mon, Apr 6, your lien rights would cover only work from Tue, Mar 17 on (20 days before service). Work from Mar 2–16 would be unprotected.</p>`,
  watch: `<p>A GC (general contractor), as a direct contractor, gets 60 days after a recorded NOC (§8412). You, as a sub, get only 30. Don't assume the GC's deadline is yours.</p>`,
  deeper: `<p>Completion under Civil Code §8180 can also happen by occupation or use with cessation of labor, by 60 days of continuous cessation of labor, or by recording a notice of cessation after 30 days. On a work of improvement subject to acceptance by a public entity, completion occurs on acceptance.</p>`,
  src: "Cal. Civil Code §§8180, 8204, 8412, 8414, 8460 (via california.public.law, verified Oct. 2026)."
},

{ h: "Worked example · stop payment notice and bond claim on a public job",
  lead: "On public work you can't lien the property. Your tools are a stop payment notice to the agency and a claim on the prime's payment bond.",
  exLabel: "Example dates for practice (2026–2027)",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Event</th><th>Rule</th><th>Date</th></tr></thead>
<tbody>
<tr><td>Agency accepts the project (completion on acceptance)</td><td>§8180(b)</td><td>Thu, Oct 1, 2026</td></tr>
<tr><td>Agency records a notice of completion</td><td></td><td>Mon, Oct 5</td></tr>
<tr><td><strong>Last day to give a stop payment notice</strong></td><td>30 days after recording (§9356)</td><td><strong>Wed, Nov 4</strong></td></tr>
<tr><td>You give the stop payment notice</td><td></td><td>Tue, Oct 20</td></tr>
<tr><td>Earliest day to sue on the notice</td><td>10 days after giving it (§9502)</td><td>Fri, Oct 30</td></tr>
<tr><td><strong>Last day to sue on the stop payment notice</strong></td><td>90 days after the notice period ends (§9502)</td><td><strong>Tue, Feb 2, 2027</strong></td></tr>
<tr><td><strong>Last day to sue on the payment bond</strong></td><td>6 months after the notice period ends (§9558)</td><td><strong>Tue, May 4, 2027</strong></td></tr>
</tbody></table></div>`,
  ex: `<p>Most payment problems end with a phone call and a demand letter long before these dates. The dates are your backstop. Put them on the calendar the day the notice of completion is recorded, and talk to an attorney well before the last day.</p>`,
  watch: `<p>If no notice of completion is recorded, the stop payment notice deadline is 90 days after cessation or completion (§9356). Ask the agency whether and when it recorded one.</p>`,
  src: "Cal. Civil Code §§8180, 9356, 9502, 9558 (via california.public.law, verified Oct. 2026)."
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
  watch: `<p><strong>Never sign an unconditional release before the money is in your account.</strong> An unconditional release works the moment you sign it, even if the check never comes. GCs (general contractors) sometimes ask for unconditional releases with the pay app. Send a conditional one instead.</p>`,
  deeper: `<p>A waiver is effective only if it is substantially in the statutory form and signed. The CSLB (Contractors State License Board) posts the forms and explains them. Progress releases cover work through a stated date and leave retention and disputed extras unpaid; list any exceptions on the form.</p>`,
  src: "Cal. Civil Code 8132, 8134, 8136, 8138; CSLB, Conditional and Unconditional Waiver and Release Forms (cslb.ca.gov)."
},

{ h: "Scenario · “sign the unconditional and we'll cut the check”",
  lead: "The GC's (general contractor's) accountant emails: “We can't release your $54,492 until we get an unconditional progress release.” Here's the right move.",
  body: `<ol class="steps">
<li><div><b>Don't sign it</b>An unconditional release (Civil Code §8134) works the moment you sign, paid or not.</div></li>
<li class="hl"><div><b>Send the conditional form instead</b>The conditional progress release (§8132) for the same amount and through-date. It becomes effective when you're paid.</div></li>
<li><div><b>Offer the swap</b>“We'll send the unconditional release the day the check clears, or hand it over at pickup in exchange for a cashier's check.”</div></li>
<li><div><b>Write down the exceptions</b>List unpaid change orders and retention on the form so they aren't released.</div></li>
<li><div><b>Escalate politely</b>If the accountant insists, call your PM (project manager) contact at the GC. Most GCs accept conditional releases once asked.</div></li>
</ol>`,
  watch: `<p>Signing an unconditional release for this month's bill means you can lose $54,492 of lien rights if the check bounces or never comes. It's the most expensive signature in the job.</p>`,
  src: "Cal. Civil Code §§8132, 8134."
},

{ h: "Change orders and T&M tickets",
  lead: "Extra work without written approval is often free work. Document everything, the same day.",
  body: `<ol class="steps">
<li><div><b>Spot the change</b>Different from the plans, specs or your scope letter: an added bed, a relocated controller, rock where the soil report said none.</div></li>
<li class="hl"><div><b>Give written notice fast</b>Subcontracts often set short notice deadlines. Email the same day: what, where, why it's extra.</div></li>
<li><div><b>Price it, or work T&amp;M</b>Send a COR (change order request) with labor, material, equipment and markup per the subcontract. If there's no time, get written direction to proceed on T&amp;M (time and materials).</div></li>
<li class="hl"><div><b>Daily T&amp;M tickets</b>Date, location, names and hours of each worker, equipment hours, materials with quantities. Signed by the GC's superintendent that day.</div></li>
<li><div><b>Bill only approved changes</b>Track pending changes in a log until they're signed.</div></li>
</ol>`,
  ex: `<p>Photo before, photo during, photo after, with a date stamp. When the superintendent who signed the ticket leaves the job, your photos and tickets still tell the story.</p>`,
  watch: `<p>On public prevailing wage jobs, T&amp;M labor must be at the correct classifications and appear on certified payroll. A ticket with hours that don't match payroll is a red flag to the agency.</p>`
},

{ h: "Worked example · pricing a change order request",
  lead: "The GC (general contractor) adds a small drip zone for a new planter. Price it the same way you priced the bid, line by line.",
  exLabel: "Example numbers for practice (use your own rates and the subcontract's markup)",
  body: `<p><strong>Change:</strong> add 1 drip zone (180 LF, linear feet, of drip tubing), 1 remote control valve and (24) #5 shrubs at the new planter. Work: 2 workers, 7 hours each.</p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Math</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>Labor</td><td>2 workers × 7 h = 14 h × $62/h</td><td class="num">$868.00</td></tr>
<tr><td>Valve with box and kit</td><td>1 × $185</td><td class="num">$185.00</td></tr>
<tr><td>Drip tubing</td><td>180 LF × $0.45</td><td class="num">$81.00</td></tr>
<tr><td>Filter, pressure regulator and fittings</td><td>Lump sum</td><td class="num">$95.00</td></tr>
<tr><td>Valve wire</td><td>120 LF × $0.30</td><td class="num">$36.00</td></tr>
<tr><td>#5 shrubs</td><td>24 × $14</td><td class="num">$336.00</td></tr>
<tr><td>Sales tax on material</td><td>$733.00 × 7.75% (example rate)</td><td class="num">$56.81</td></tr>
<tr><td>Trencher, half day</td><td>Rental</td><td class="num">$150.00</td></tr>
<tr><td><strong>Subtotal</strong></td><td>868 + 733 + 56.81 + 150</td><td class="num"><strong>$1,807.81</strong></td></tr>
<tr><td>Markup</td><td>15% (or what the subcontract allows) × $1,807.81</td><td class="num">$271.17</td></tr>
<tr><td><strong>COR (change order request) total</strong></td><td></td><td class="num"><strong>$2,078.98</strong></td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Check with unit prices:</strong> your proposal's #5 shrub add price was $78. 24 × $78 = $1,872 for the shrubs alone if you used unit prices; this COR prices the whole change from cost instead. Use whichever method the subcontract says, and don't mix them on the same items.</p>`,
  watch: `<p>Attach a sketch, photos and the GC's written direction to every COR. A number with no backup gets cut.</p>`
},

{ h: "T&M ticket template",
  lead: "A T&M (time and materials) ticket is a daily record of extra work, signed the same day. Fill in every box; blanks get argued later.",
  exLabel: "Template (made-up example entries)",
  body: `<div class="tablewrap"><table>
<thead><tr><th colspan="4">T&amp;M ticket #014 · Project: [name] · Date: 04/16/2026 · GC direction: email from superintendent 04/15, 4:10 PM</th></tr></thead>
<tbody>
<tr><td><strong>Description</strong></td><td colspan="3">Remove buried concrete footing found in planting area B (not shown on plans or soil report), haul off</td></tr>
<tr><td><strong>Worker</strong></td><td><strong>Classification</strong></td><td><strong>Hours (ST/OT)</strong></td><td><strong>Notes</strong></td></tr>
<tr><td>J. Ramirez</td><td>Laborer (landscape/irrigation)</td><td>6.0 / 0</td><td>Prevailing wage job: same class as payroll</td></tr>
<tr><td>M. Soto</td><td>Laborer (landscape/irrigation)</td><td>6.0 / 0</td><td></td></tr>
<tr><td><strong>Equipment</strong></td><td colspan="2">Mini-excavator with breaker, 5.5 h · Dump truck, 2 loads</td><td></td></tr>
<tr><td><strong>Materials</strong></td><td colspan="2">Dump fees, 2 loads (receipts attached)</td><td></td></tr>
<tr><td><strong>Photos</strong></td><td colspan="3">#1–6, before, during, after (in job folder)</td></tr>
<tr><td><strong>GC signature</strong></td><td colspan="3">Name, title, date, signed on site the same day</td></tr>
</tbody></table></div>`,
  watch: `<p>The GC (general contractor) signs that the hours and equipment happened, not that the work is extra. Price and entitlement get settled in the COR (change order request). Still, without the signature, you have nothing. ST means straight time; OT means overtime.</p>`
},

{ h: "The change order log",
  lead: "One list for every change, from first notice to payment. Review it at every bid review meeting.",
  exLabel: "Example log (made-up entries)",
  body: `<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Description</th><th>Notice sent</th><th>COR sent</th><th class="num">Requested</th><th>Status</th><th class="num">Approved</th><th>Billed</th></tr></thead>
<tbody>
<tr><td>1</td><td>Relocate controller</td><td>03/10</td><td>03/11</td><td class="num">$1,850</td><td>Approved CO #1</td><td class="num">$1,850</td><td>Pay app #2</td></tr>
<tr><td>2</td><td>Delete (40) #5 shrubs</td><td>(GC)</td><td>03/20</td><td class="num">−$2,000</td><td>Approved CO #2</td><td class="num">−$2,000</td><td>Pay app #2</td></tr>
<tr><td>3</td><td>Remove buried footing, T&amp;M #014</td><td>04/15</td><td>04/17</td><td class="num">$2,960</td><td>Pending</td><td class="num"></td><td></td></tr>
<tr><td>4</td><td>Added drip zone, new planter</td><td>04/20</td><td>04/21</td><td class="num">$2,078.98</td><td>Pending</td><td class="num"></td><td></td></tr>
</tbody></table></div>
<p><strong>Totals:</strong> approved net $1,850 − $2,000 = −$150. Pending $2,960 + $2,078.98 = <strong>$5,038.98</strong> at risk until signed.</p>`,
  watch: `<p>Pending changes older than 30 days need a phone call and a follow-up email. The longer a change sits, the harder it is to get paid. COR means change order request; CO means approved change order.</p>`
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
  watch: `<p>Before you accept an area from the GC (general contractor), walk it and note in writing: grade, debris, compacted soil, damaged sleeves, concrete washout. Once you start, you've accepted it. The City's K-24-1952 specs say exactly that: start of work “constitutes acceptance of the conditions.” If the GC hands you grading, drainage or hardscape work too, see <a href="#m17-1">Module 17</a>.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, landscape Special Provisions."
},

{ h: "Inspections and the punch list",
  lead: "A punch list is the list of items to fix before your work is accepted. Get to it fast and close it in one round.",
  body: `<ol class="steps">
<li><div><b>Self-punch first</b>Walk the job with your foreman before the GC (general contractor) or inspector does. Fix heads, tilt, coverage, missing mulch, dead plants, debris.</div></li>
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
  ex: `<p>A 250-working-day Type 1 establishment period. Four seasonal watering schedules built in the Calsense software. Fertilize the first week of April, July and September. A functional irrigation test with the Engineer every year. Keep the site “neat and presentable… including areas not visible to the public,” plus about 717,000 SF (square feet) of existing planting. Bidders priced it from $10,000 to $300,000.</p>`,
  watch: `<p>Track your actual establishment hours and costs against what you bid. Establishment is where many landscape bids lose money quietly, one weekly visit at a time.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Special Provisions 6-1.1; Caltrans 11-428704 Special Provisions 20-4."
},

{ h: "Plant establishment · the weekly visit checklist",
  lead: "The same checklist every visit makes the work faster and the records stronger. Print it on one page for the crew lead.",
  exLabel: "Weekly checklist (adapt to your specs)",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Check</th><th>What to look for</th><th>Record</th></tr></thead>
<tbody>
<tr><td>Controller</td><td>Running the current seasonal schedule; no alarms; flow sensor normal</td><td>Program and any changes</td></tr>
<tr><td>Irrigation walk</td><td>Run each zone briefly: broken heads, leaks, clogged drip, coverage gaps</td><td>Zones repaired, parts used</td></tr>
<tr><td>Plant health</td><td>Wilting, yellowing, pests, disease, dead or missing plants</td><td>Count by species and size</td></tr>
<tr><td>Weeds</td><td>Hand pull or treat per spec; dispose of weeds properly</td><td>Areas done, products used</td></tr>
<tr><td>Mulch and DG (decomposed granite)</td><td>Depth, bare spots, erosion</td><td>Areas topped off</td></tr>
<tr><td>Trees</td><td>Stakes and ties loose or tight, basins holding water</td><td>Trees adjusted</td></tr>
<tr><td>Site</td><td>Trash and debris, “neat and presentable” per spec</td><td>Bags removed</td></tr>
<tr><td>Damage by others</td><td>Vandalism, vehicle damage, other trades</td><td>Photos and a same-day email to the GC (general contractor)</td></tr>
<tr><td>Photos</td><td>Same fixed spots every month</td><td>Photo numbers</td></tr>
<tr><td>Time</td><td>Crew names and hours</td><td>Job cost code for establishment</td></tr>
</tbody></table></div>`,
  watch: `<p>On a Caltrans job with a fertilizer schedule (11-428704: first week of April, July and September), put those dates on the checklist calendar the day establishment starts.</p>`
},

{ h: "Plant establishment · the monthly report",
  lead: "A one-page monthly report to the GC (general contractor) or inspector turns your visits into proof.",
  exLabel: "Report template (made-up example entries)",
  body: `<div class="tablewrap"><table>
<thead><tr><th colspan="2">Plant Establishment Report · Month 1 of 3 (May) · Period start (acceptance): 05/04/2026</th></tr></thead>
<tbody>
<tr><td>Visits this month</td><td>4 (05/04, 05/11, 05/18, 05/25) · 46 crew hours</td></tr>
<tr><td>Watering schedule</td><td>Spring program; run times raised 15% on 05/18 for heat</td></tr>
<tr><td>Irrigation repairs</td><td>3 spray heads (vehicle damage, zone 6, photos 112–114; GC notified 05/18)</td></tr>
<tr><td>Plant replacements</td><td>(6) #1 Salvia, (2) #5 Westringia, same species and size</td></tr>
<tr><td>Weed control and fertilizer</td><td>Hand weeding all beds; fertilizer applied 05/04 per spec</td></tr>
<tr><td>Open issues</td><td>Dog damage in bed C; recommend owner fencing</td></tr>
<tr><td>Next steps</td><td>Request final walk-through for week of 07/27 (period ends 08/02)</td></tr>
<tr><td>Attached</td><td>Visit logs, photo sheet, controller printout</td></tr>
</tbody></table></div>`,
  watch: `<p>Report damage by others the day you find it. A replacement you don't report is a replacement you pay for.</p>`
},

{ h: "Scenario · the inspector rejects 30 plants during establishment",
  lead: "Month 2 of a 3-month establishment period. The inspector flags (30) #1 groundcover plants as dead or declining. Here's how to handle it.",
  body: `<ol class="steps">
<li><div><b>Walk it with the inspector</b>Agree on the exact count and locations. Mark them with flags and photos.</div></li>
<li class="hl"><div><b>Find the cause</b>Check your logs: was a zone off? Did the controller lose power? Was there vehicle or dog damage? Gophers?</div></li>
<li><div><b>If it's your care, replace them</b>Same species and size, within the time the spec allows. That's what your establishment price covers.</div></li>
<li><div><b>If it's damage by others or water or power loss</b>Show your logs and photos, notify the GC (general contractor) in writing, replace them, and submit a COR (change order request) at your unit price.</div></li>
<li><div><b>Fix the cause</b>Adjust the watering, repair the zone, or ask the owner for protection.</div></li>
<li><div><b>Ask how the period is affected</b>Some specs extend establishment after replacements. Read the section and get the answer in writing.</div></li>
</ol>`,
  ex: `<p><strong>Math (example numbers):</strong> 30 plants × the $38 add unit price from Module 13 = $1,140 if the GC owes it. If it's yours, your cost is about 30 × ($4.50 plant + $0.35 tax + 0.25 h × $62 labor) = 30 × $20.35 = $610.50.</p>`,
  watch: `<p>Without weekly logs, every dead plant is presumed to be your fault. The logs are what make the second answer possible.</p>`
},

{ h: "Closeout, retention and warranty callbacks",
  lead: "Closeout is paperwork that releases your last dollars. Start it the day you start planting.",
  body: `<div class="twocol">
<div><h3>Closeout package</h3><ul>
<li><strong>As-builts</strong> (record drawings): mark changes daily on a field set; draft clean ones at the end</li>
<li><strong>Controller charts:</strong> reduced, color-coded zone maps, sealed or laminated, in each controller, when the specs require them</li>
<li>Product warranties and O&amp;M (operation and maintenance) manuals</li>
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
  watch: `<p><strong>Warranty callbacks:</strong> answer every call within a day, fix it, and log it with the cost. A sub who comes back quickly gets invited again. Track callback cost per job: if one GC's (general contractor's) jobs always generate callbacks, look for the cause (their maintenance crew? your installation?).</p>`
},

{ t: "scorer", id: "closeout", h: "Closeout package checklist",
  lead: "Score your closeout before you bill retention. 2 = delivered and accepted, 1 = delivered, waiting, 0 = not done. Your choices are saved in this browser.",
  items: [
    ["Punch list closed", "Every item signed off in writing, with photos"],
    ["Acceptance in writing", "Date your work (and establishment) was accepted"],
    ["As-builts", "Clean record drawings showing mainline, valves, wire splices, sleeves and changes"],
    ["Controller charts", "Color-coded zone maps, sealed or laminated, in each controller if specified"],
    ["Warranties and O&M manuals", "Product warranties, operation and maintenance manuals, controller manual"],
    ["Spare parts and keys", "Extra heads, nozzles, valve keys, controller keys as specified"],
    ["Owner training", "Controller and irrigation training done and signed"],
    ["Change orders", "Every change approved and billed; nothing left pending"],
    ["Final releases ready", "Conditional final release (8136) with the retention bill; unconditional (8138) held until paid"],
    ["Deadlines on calendar", "Notice of completion checked; lien or stop payment deadline calendared"]
  ],
  bands: [
    [18, "Bill retention", "Send the retention bill today."],
    [14, "Almost", "Finish the 0s and 1s first, or the retention will wait."],
    [0, "Not ready", "Work through the closeout list with the GC."]
  ]
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

{ h: "Job cost review · a full worked example",
  lead: "After each job, compare hours, materials and money, then decide what changes in the next estimate. One table, one meeting, written decisions.",
  exLabel: "Example numbers for practice: the $96,350 park subcontract",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Activity</th><th class="num">Qty</th><th class="num">Est. rate</th><th class="num">Est. h</th><th class="num">Actual h</th><th class="num">Actual rate</th></tr></thead>
<tbody>
<tr><td>Laterals, trench and pipe</td><td class="num">3,600 LF</td><td class="num">0.040 h/LF</td><td class="num">144</td><td class="num">126</td><td class="num">0.035 h/LF</td></tr>
<tr><td>Spray heads</td><td class="num">140 EA</td><td class="num">0.30 h/EA</td><td class="num">42</td><td class="num">49</td><td class="num">0.35 h/EA</td></tr>
<tr><td>#5 shrubs</td><td class="num">640 EA</td><td class="num">0.25 h/EA</td><td class="num">160</td><td class="num">192</td><td class="num">0.30 h/EA</td></tr>
<tr><td>Mulch</td><td class="num">85 CY</td><td class="num">0.80 h/CY</td><td class="num">68</td><td class="num">60</td><td class="num">0.71 h/CY</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td class="num"><strong>414</strong></td><td class="num"><strong>427</strong></td><td></td></tr>
</tbody></table></div>
<p><strong>Labor:</strong> 427 − 414 = 13 hours over, 13 ÷ 414 = 3.1%. At $62/hour, 13 × $62 = $806 over. <strong>Material:</strong> mulch quote was $34/CY, paid $37/CY: 85 × $3 = $255 over. <strong>Total cost overrun:</strong> $806 + $255 = $1,061.</p>
<p><strong>Decisions written in the review:</strong></p>
<ol class="steps">
<li><div><b>Shrubs</b>Past three jobs averaged 0.25 h/EA; this one 0.30 in hard soil. New table: 0.25 normal soil, 0.30 clay or rocky. Don't change the normal rate on one job.</div></li>
<li><div><b>Laterals</b>Faster with the new trencher. Watch two more jobs before lowering the rate.</div></li>
<li class="hl"><div><b>Mulch</b>Supplier raised prices mid-job. Shorten mulch quote validity in proposals to 30 days, or add escalation language (Module 13).</div></li>
</ol>`,
  watch: `<p>One job is a data point, not a trend. Change a rate when the same result shows up on two or three jobs, or when you can name the condition that caused it.</p>`,
  src: "Example numbers continue the made-up $96,350 park subcontract used in the pay app examples."
},

{ h: "The biweekly bid review meeting",
  lead: "The company's growth plan calls for a bid review meeting every two weeks. Keep it short, the same agenda every time, and decide things.",
  body: `<p><strong>Who:</strong> owner, estimator, field lead. <strong>How long:</strong> 45–60 minutes. <strong>Bring:</strong> the bid tracker, job cost reports and the change order logs.</p>
<ol class="steps">
<li><div><b>Open bids</b>What's due in the next two weeks, who's doing what, questions and addenda pending.</div></li>
<li class="hl"><div><b>Go / no-go on new invitations</b>Score them with the Module 3 scorecard and decide.</div></li>
<li><div><b>Results since last meeting</b>Won, lost, gap to low, feedback from GCs (general contractors).</div></li>
<li class="hl"><div><b>Job cost check</b>Active jobs: hours and costs vs. estimate, change orders pending, pay apps outstanding.</div></li>
<li><div><b>One pricing lesson</b>Change one production rate, unit price or markup based on real results. Write it down.</div></li>
<li><div><b>Relationships</b>Which GCs to call, thank or follow up with before next meeting.</div></li>
</ol>`,
  ex: `<p>End every meeting with a short action list: who, what, by when. Start the next meeting by checking it.</p>`
},

{ h: "KPIs: measure the division",
  lead: "KPIs (key performance indicators) are a few numbers that tell you if bidding is working. Track them monthly.",
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

{ h: "A KPI dashboard, month by month",
  lead: "Put the KPIs on one page with a column per month. Trends matter more than any single month.",
  exLabel: "Example numbers for practice (months 7–12)",
  body: `<div class="tablewrap"><table>
<thead><tr><th>KPI</th><th class="num">M7</th><th class="num">M8</th><th class="num">M9</th><th class="num">M10</th><th class="num">M11</th><th class="num">M12</th></tr></thead>
<tbody>
<tr><td>Bids sent</td><td class="num">5</td><td class="num">6</td><td class="num">4</td><td class="num">7</td><td class="num">6</td><td class="num">5</td></tr>
<tr><td>$ bid (thousands)</td><td class="num">640</td><td class="num">910</td><td class="num">520</td><td class="num">1,150</td><td class="num">880</td><td class="num">760</td></tr>
<tr><td>Jobs won</td><td class="num">1</td><td class="num">1</td><td class="num">0</td><td class="num">2</td><td class="num">1</td><td class="num">1</td></tr>
<tr><td>$ won (thousands)</td><td class="num">96</td><td class="num">140</td><td class="num">0</td><td class="num">265</td><td class="num">118</td><td class="num">152</td></tr>
<tr><td>Average gap to low, lost bids</td><td class="num">8.2%</td><td class="num">7.5%</td><td class="num">11.0%</td><td class="num">6.1%</td><td class="num">5.8%</td><td class="num">6.4%</td></tr>
<tr><td>Backlog (thousands, unbilled work)</td><td class="num">210</td><td class="num">265</td><td class="num">180</td><td class="num">370</td><td class="num">390</td><td class="num">410</td></tr>
<tr><td>Average days to get paid</td><td class="num">41</td><td class="num">38</td><td class="num">44</td><td class="num">36</td><td class="num">35</td><td class="num">37</td></tr>
</tbody></table></div>
<p><strong>Six-month totals:</strong> 33 bids, 6 wins = 18.2% by count. $4,860,000 bid, $771,000 won = 15.9% by dollars ($96 + $140 + $0 + $265 + $118 + $152 = $771 thousand; $640 + $910 + $520 + $1,150 + $880 + $760 = $4,860 thousand).</p>`,
  ex: `<p><strong>Reading this dashboard:</strong> win rate is up from 14.3% in months 1–6, the gap to low is shrinking, and backlog is growing. The question for the next bid review: can the field crews handle $410,000 of backlog? If not, slow bidding or add a crew.</p>`
},

{ h: "Growing the division",
  lead: "Grow in steps you can survive: relationships, bonding, people, then bigger and public work.",
  body: `<ul>
<li><strong>GC (general contractor) relationships:</strong> aim for a handful of GCs who invite you to everything and give feedback. Perform on their jobs, bill cleanly, come back for warranty calls. Ask for a meeting once a year: “How can we be easier to work with?”</li>
<li><strong>Bonding capacity:</strong> a surety sets a single-job limit and a total (aggregate) limit based on your financial statements, working capital, experience and completed jobs. Clean, timely financials and finished jobs are what raise it. Ask your agent what would raise your limits and work toward it.</li>
<li><strong>Estimating capacity:</strong> one estimator can only do so many full takeoffs. When good invitations are being declined for lack of time, or bid volume stalls while win rate is healthy, it's time for an estimating assistant or takeoff help.</li>
<li><strong>Field capacity:</strong> don't win more than your foremen can run. Add a crew before you need it, not after a job slips.</li>
</ul>`,
  deeper: `<p><strong>When to add public work and Caltrans primes.</strong> A reasonable checklist before your first public prime: DIR (Department of Industrial Relations) registration and certified payroll working (Module 11); bonding for performance and payment bonds at the job size; cash to carry 60–90 days of costs; a traffic control sub relationship for street work; a few City or agency jobs done as a sub first. Module 15 shows that a job like 11-428704 (about $1.2M, C-27 allowed as prime) is a realistic first Caltrans prime for a company with bonding in place.</p>`
},

{ h: "When to hire an estimator",
  lead: "Hire when the numbers say lost opportunities cost more than a salary. Here's how to check.",
  exLabel: "Example numbers for practice (use your own)",
  body: `<p><strong>Signs it's time:</strong></p>
<ul>
<li>You decline good invitations every month because there's no time to bid them.</li>
<li>Bids go out late or unchecked, and math errors start showing up.</li>
<li>The estimator is also running jobs, and both suffer.</li>
<li>Win rate is healthy (you're competitive), but bid volume has hit a ceiling.</li>
</ul>
<p><strong>The math:</strong> suppose an estimator costs the company $95,000 a year with taxes and benefits (example). Your average won job earns $12,000 of gross profit (example). $95,000 ÷ $12,000 = 7.9, so the hire must help win about <strong>8 more jobs a year</strong> to pay for itself. At an 18% win rate, 8 more wins means about 8 ÷ 0.18 = 44 more bids a year, or about 4 more a month.</p>`,
  ex: `<p><strong>Smaller first steps:</strong> a part-time takeoff helper, a trained office person who handles forms, sub lists and bid-day uploads, or AI tools for drafting descriptions and checking specs, with you checking every number (Module 13).</p>`,
  watch: `<p>A new estimator needs your production rates, markup rules, templates and checklists. The tools you built in this course are what make a second estimator possible.</p>`
},

{ h: "Growing your bonding capacity",
  lead: "A surety lends you its name, not its money. It sets your limits by how safe you look on paper. Make your paper look like a company that finishes jobs and pays its bills.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>What sureties look at</th><th>What you can do</th></tr></thead>
<tbody>
<tr><td>Financial statements</td><td>Year-end statements prepared by a CPA (certified public accountant) who knows construction, delivered on time every year</td></tr>
<tr><td>Working capital (current assets − current liabilities)</td><td>Keep cash in the company; collect receivables; avoid paying for equipment with short-term debt</td></tr>
<tr><td>Net worth (equity)</td><td>Leave profits in the business while you grow</td></tr>
<tr><td>WIP (work in progress) schedule</td><td>A quarterly list of every open job: contract, cost to date, billed to date, estimated profit</td></tr>
<tr><td>Track record</td><td>Completed jobs of growing size, with references from GCs and agencies</td></tr>
<tr><td>Bank line of credit</td><td>An unused credit line shows you can carry a slow-paying job</td></tr>
</tbody></table></div>`,
  exLabel: "Working capital example (made-up numbers)",
  ex: `<p>Current assets: cash $260,000 + receivables $480,000 + retention receivable $80,000 = $820,000. Current liabilities: payables $330,000 + credit card and short-term loans $180,000 = $510,000. <strong>Working capital = $820,000 − $510,000 = $310,000.</strong> Ask your surety how it turns working capital and equity into a single-job and aggregate limit; each surety has its own method.</p>`,
  watch: `<p>Late or messy financials can freeze your bonding at the worst moment, like a month before the big public bid you've been waiting for.</p>`
},

{ h: "A 12-month roadmap",
  lead: "A simple plan for the first year of the commercial division. Adjust the targets in your bid review meetings.",
  exLabel: "Example targets: adjust to your company",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Months</th><th>Focus</th><th>Targets</th></tr></thead>
<tbody>
<tr><td><strong>1–3</strong></td><td>Systems and relationships</td><td>Bid tracker, templates, subcontract checklist ready · 20 GCs contacted, 10 prequalified · public portals registered · 3–5 private sub bids a month · biweekly bid reviews started</td></tr>
<tr><td><strong>4–6</strong></td><td>First wins, done right</td><td>First 1–3 jobs won and built · job cost tracked on every job · clean pay apps and releases · production rates updated · sub prices sent to primes on City and agency jobs</td></tr>
<tr><td><strong>7–9</strong></td><td>Public work as a sub</td><td>First prevailing wage job with certified payroll · surety meeting to review limits · KPIs (key performance indicators) reviewed monthly · 5+ repeat GC invitations</td></tr>
<tr><td><strong>10–12</strong></td><td>Step up</td><td>First small public prime (City, school or water district landscape) if bonding allows · price at least one Caltrans job in full, prime or sub · year review: win rate, margin, gap to low · plan year 2 staffing</td></tr>
</tbody></table></div>`,
  ex: `<p>Every quarter, compare the plan to what happened. If win rate is good but margin is low, slow down and fix estimating before chasing volume. If margin is good but volume is low, spend more time on GC (general contractor) relationships and public portals.</p>`
},

{ h: "A 3-year roadmap",
  lead: "After year one, grow in yearly steps: more of what works, one new market at a time, and the people and bonding to support it.",
  exLabel: "Example targets: set your own in the year-end review",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Year</th><th>Focus</th><th>Example targets</th></tr></thead>
<tbody>
<tr><td><strong>Year 1</strong></td><td>Build the system</td><td>The 12-month roadmap · 50–70 bids · first wins · first public job as sub · production rate table from real jobs</td></tr>
<tr><td><strong>Year 2</strong></td><td>Repeat and prove</td><td>5–8 GCs who invite you to everything · 2–4 public jobs as sub · first 1–2 small public primes · second crew foreman trained · estimating helper part-time · surety limits reviewed twice</td></tr>
<tr><td><strong>Year 3</strong></td><td>Step up in size</td><td>First Caltrans or larger agency prime in the size range your bonding allows · full-time second estimator if the hiring math works · DBE/SLBE certification decisions made · plant establishment and maintenance contracts as steady income</td></tr>
</tbody></table></div>
<p><strong>Guardrails every year:</strong> actual margin within a few points of bid margin; days to get paid not rising; backlog the crews can handle; no job bigger than about twice your largest finished job without the owner's sign-off.</p>`,
  ex: `<p>Write the year's three biggest goals on one page, and review them at the first bid review meeting of every quarter. Change them when the KPIs say so, not when a big invitation looks exciting.</p>`,
  watch: `<p>The “twice your largest job” guardrail is a rule of thumb for this course, not a law or a surety rule (Module 3 covers job size). DBE means Disadvantaged Business Enterprise; SLBE means Small Local Business Enterprise.</p>`
},

{ h: "Common mistakes after award",
  lead: "Most money is lost after the bid, in small, avoidable ways.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>What it costs</th><th>Prevention</th></tr></thead>
<tbody>
<tr><td>Ordering before a signed subcontract</td><td>Stuck with box trees if the deal falls through</td><td>Written authorization first</td></tr>
<tr><td>Signing without reading the scope clause</td><td>Your exclusions disappear</td><td>Proposal attached as an exhibit</td></tr>
<tr><td>Missing a 48-hour notice clause</td><td>Extra work becomes free work</td><td>Same-day written notice, every time</td></tr>
<tr><td>Unsigned T&amp;M tickets</td><td>No proof the work happened</td><td>GC signature the same day</td></tr>
<tr><td>Unconditional release before payment</td><td>Lien rights gone</td><td>Conditional releases with every bill</td></tr>
<tr><td>No preliminary notice on a private job</td><td>Early work unprotected</td><td>Serve it the first week</td></tr>
<tr><td>Sleeves not in before paving</td><td>Sawcutting or boring at your cost</td><td>Sleeve dates from precon on the schedule</td></tr>
<tr><td>No establishment logs</td><td>Every dead plant is your fault</td><td>Weekly checklist and monthly report</td></tr>
<tr><td>Closeout started at the end</td><td>Retention waits months</td><td>As-builts marked daily; closeout list from day one</td></tr>
<tr><td>No job cost review</td><td>The same mistake priced into the next bid</td><td>Review every job; update rates in writing</td></tr>
</tbody></table></div>`,
  watch: `<p>T&amp;M means time and materials. GC means general contractor.</p>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook. The full list of bid words is in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["LOI (letter of intent)", "A GC's written notice that it plans to subcontract with you; not a full contract."],
    ["Notice of award", "The owner's notice that it has awarded the prime contract."],
    ["Subcontract", "Your contract with the GC: scope, price, payment and risk terms."],
    ["Exhibit", "A document attached to a contract that becomes part of it, like your proposal."],
    ["Flow-down clause", "Makes you bound to the GC the way the GC is bound to the owner."],
    ["Rider", "A one-page list of changes you request to a subcontract."],
    ["Pay-when-paid", "A clause setting when you're paid after the GC is paid."],
    ["Pay-if-paid", "A clause making the owner's payment a condition of yours; generally unenforceable in California."],
    ["Prompt payment", "Laws setting how fast owners, agencies and GCs must pay, with penalties for late payment."],
    ["Retention", "Money held back from each payment until the work is complete; usually capped at 5% in California."],
    ["No damages for delay", "A clause limiting you to more time, with no money, when the job is delayed."],
    ["LDs (liquidated damages)", "A set dollar amount per day the job finishes late."],
    ["Indemnity", "A promise to defend and pay for certain claims."],
    ["Additional insured", "A policy endorsement that extends your insurance to the GC or owner."],
    ["COI (certificate of insurance)", "A one-page proof of your insurance coverage and limits."],
    ["Termination for convenience", "A clause letting the GC end your contract without a reason."],
    ["Submittal", "Product data, samples or tests sent for approval before ordering."],
    ["Cut sheet", "A manufacturer's product page, marked with the exact model you'll install."],
    ["Precon (preconstruction meeting)", "The meeting before work starts that sets contacts, dates and rules."],
    ["SOV (schedule of values)", "Your contract price split into lines for billing."],
    ["Pay application", "Your monthly bill showing percent complete by SOV line."],
    ["AIA G702/G703", "Common pay application forms from the American Institute of Architects."],
    ["Preliminary notice", "The 20-day notice that preserves lien, stop payment and bond rights."],
    ["Mechanics lien", "A claim against private property for unpaid work."],
    ["NOC (notice of completion)", "A recorded notice that starts shorter lien and stop payment deadlines."],
    ["Stop payment notice", "A notice that makes the owner or agency hold funds for an unpaid claimant."],
    ["Payment bond claim", "A claim against the surety bond that guarantees payment to subs and suppliers."],
    ["Conditional release", "A lien release that takes effect only when you're paid."],
    ["Unconditional release", "A lien release that takes effect when signed, paid or not."],
    ["CO / COR", "Change order (approved change) / change order request (your priced request)."],
    ["T&amp;M ticket", "A daily record of time and materials for extra work, signed by the GC."],
    ["Punch list", "The list of items to fix before work is accepted."],
    ["As-builts", "Drawings showing what was actually installed."],
    ["Controller chart", "A color-coded zone map kept in the irrigation controller."],
    ["Job cost", "Tracking actual hours and costs against the estimate."],
    ["Production rate", "How much work a crew does per hour, like plants per hour or hours per LF."],
    ["KPI", "Key performance indicator: a number that measures how the division is doing."],
    ["Backlog", "Work you've won but haven't billed yet."],
    ["Working capital", "Current assets minus current liabilities; a number sureties study."],
    ["WIP schedule", "Work-in-progress report listing every open job's contract, costs and billings."]
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
    { q: "You estimated 150 planting hours and used 186. What's the best next step?", a: ["Ignore it, it's one job", "Record why and update your production rate for similar conditions", "Raise every price 24%"], c: 1, why: "Job cost results should change your production rates, tied to the site conditions that caused them." },
    { q: "The owner records a notice of completion on Aug 18. You're a sub on a private job. What's your last day to record a lien?", a: ["Sep 17 (30 days)", "Oct 17 (60 days)", "Nov 16 (90 days)"], c: 0, why: "Civil Code §8414 gives a claimant other than the direct contractor 30 days after a recorded notice of completion." },
    { q: "On a public job, you can't lien the property. What are your payment tools?", a: ["A mechanics lien anyway", "A stop payment notice to the agency and a claim on the prime's payment bond", "Only a phone call"], c: 1, why: "Public property can't be liened; the stop payment notice and payment bond take its place." },
    { q: "A subcontract says claims must be noticed within 48 hours. What should you do?", a: ["Ignore it, courts never enforce it", "Ask for 7 days, then calendar whatever is agreed and send same-day notices", "Wait until the end of the job to submit all claims"], c: 1, why: "Short notice clauses can waive your claim; negotiate them and always notice fast." },
    { q: "Contract $96,500, CO #1 +$1,850, CO #2 −$2,000. What's the contract to date?", a: ["$96,500", "$96,350", "$100,350"], c: 1, why: "96,500 + 1,850 − 2,000 = $96,350." },
    { q: "Private GC receives your share of retention from the owner. How fast must it pay you under Civil Code §8814?", a: ["7 days", "10 days", "45 days"], c: 1, why: "§8814 requires the direct contractor to pay the sub's share within 10 days of receiving it." },
    { q: "An estimator costs $95,000 a year and an average win earns $12,000 gross profit. About how many extra wins a year pay for the hire?", a: ["About 3", "About 8", "About 20"], c: 1, why: "$95,000 ÷ $12,000 = 7.9, so about 8 more wins." },
    { q: "An inspector rejects 30 plants and your logs show a vehicle broke the zone's heads. What do you do?", a: ["Replace them free and say nothing", "Show the logs and photos, notify the GC in writing, replace them and submit a COR", "Refuse to replace them"], c: 1, why: "Damage by others is extra work if you can prove it; the logs and same-day notice make that possible." }
  ]
},

{ t: "practice", id: "m16", h: "Practice assignments",
  lead: "Build the tools you'll use on the first job you win.",
  items: [
    { h: "Mark up a real subcontract", hrs: 0.75, d: "<p>Ask one GC you're prequalifying with for their standard subcontract form. Go clause by clause like the five sample slides: copy the real wording, translate it to plain words, and mark each one OK, ask to change, or deal-breaker. Note any pay-if-paid, retention over 5%, broad indemnity, no damages for delay or short notice deadlines. Turn your top asks into a one-page rider and bring it to the owner or an attorney.</p>" },
    { h: "Rebuild the pay applications", hrs: 0.75, d: "<p>In a spreadsheet, rebuild the $186,400 schedule of values and pay app #2 so your formulas give $54,492.00 due. Then make pay app #3: lines 2, 4 and 5 at 100%, line 6 at 50%, line 7 at 25%. Calculate retention, previous payments and payment due. Then rebuild the $96,350 example with the add and deduct change orders, through the retention bill, and check that total payments equal the contract.</p>" },
    { h: "Get the lien forms", hrs: 0.5, d: "<p>Download the four statutory release forms from the <a href=\"https://cslb.ca.gov/consumers/legal_issues_for_consumers/Mechanics_Lien/Conditional_And_Unconditional_Waiver_Release_Form.aspx\" target=\"_blank\" rel=\"noopener\">CSLB waiver and release page</a>. Fill in a conditional progress release for pay app #2. Find out how the company will send 20-day preliminary notices (in-house or a notice service) and write the steps.</p>" },
    { h: "Build a lien and stop payment deadline calendar", hrs: 0.5, d: "<p>Pick a recent or current company job (or make one up). Fill in a table like the two worked examples: first furnishing date, preliminary notice deadline, completion, notice of completion, last day to record a lien or give a stop payment notice, and the suit deadlines. Use a real calendar and mark weekends and holidays.</p>" },
    { h: "Build a submittal log and package", hrs: 0.5, d: "<p>From a landscape spec you have (Division 32, or Caltrans 11-428704 or 11-431064 Special Provisions section 20 in the <a href=\"#lab\">Real Bid Lab</a>), list every required submittal with its spec section, contents and when it's due. Mark the long-lead items. Then make one complete package for irrigation products: cover sheet plus marked cut sheets.</p>" },
    { h: "Write a change order request and T&M ticket", hrs: 0.5, d: "<p>Using the company's real labor rate and a real supplier price list, price a made-up change (for example, add 200 SF of planting with 30 #5 shrubs and one drip zone) line by line like the worked example. Fill in a T&amp;M ticket for a made-up day of extra work, and start a change order log for the job.</p>" },
    { h: "Make the plant establishment kit", hrs: 0.5, d: "<p>Adapt the weekly visit checklist and the monthly report to the company's crews and to a real spec (the City's 90-day period or Caltrans section 20-4). Print one copy for a crew lead and ask them what's missing.</p>" },
    { h: "Set up job cost tracking", hrs: 0.5, d: "<p>Make a job cost sheet with 5–10 activity codes that match your estimate lines. Make a one-page daily time card your foreman can fill in. If the company has a recent landscape job, fill in estimated vs. actual hours and rates for it, like the full job cost review example, and write down one decision.</p>" },
    { h: "Build your KPI page", hrs: 0.5, d: "<p>From the <a href=\"https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP\" target=\"_blank\" rel=\"noopener\">Commercial Bid Tracker</a>, calculate bid volume, win rate by count and dollars, average gap to low, backlog, days to get paid and repeat GCs for all bids so far, as a month-by-month dashboard. If there are too few, use your Real Bid Lab results as practice data.</p>" },
    { h: "Draft the 12-month and 3-year roadmaps and first meeting", hrs: 0.5, d: "<p>Adapt the 12-month and 3-year roadmaps to the company: real targets for each quarter and year, plus the guardrails. Ask your surety agent what would raise your bonding limits and add it. Write the agenda for the next biweekly bid review meeting and bring everything to the owner.</p>" }
  ]
},

{ h: "Module 16 summary",
  lead: "You can now carry a job from award to final payment, and use each job to make the next bid better.",
  body: `<ul>
<li>Being low isn't a contract. Read the subcontract clause by clause; attach your proposal; send a one-page rider with your top changes.</li>
<li>In California, pay-if-paid is generally unenforceable, prompt payment laws set 7-, 10-, 30-, 45- and 60-day clocks, and retention is usually capped at 5%.</li>
<li>Submit early and completely with a cover sheet and log; hold the precon to get names, dates and hold points.</li>
<li>Bill monthly from a fair schedule of values; handle add and deduct change orders and the retention bill with the same A–H math.</li>
<li>Send preliminary notices, calendar lien, stop payment and bond claim deadlines as real dates, use conditional releases, and never sign unconditional before you're paid.</li>
<li>Price change orders line by line, get T&amp;M tickets signed the same day, and keep a change order log.</li>
<li>Run plant establishment with a weekly checklist and a monthly report; close out with a checklist so retention comes back.</li>
<li>Review job cost after every job and change rates on evidence; track KPIs monthly; plan hiring and bonding; grow in yearly steps.</li>
</ul>
<p><strong>Two modules to go.</strong> Module 17 covers the other scopes that land in landscape bids (demo, grading, drainage, hardscape and more). Module 18 is the capstone, where you bid a real Caltrans job start to finish. Keep pricing real jobs in the <a href="#lab">Real Bid Lab</a> and bring every result to your bid review meeting.</p>`
}
]
});
