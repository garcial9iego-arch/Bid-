(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 1, hours: 4, title: "How Construction Bidding Works",
slides: [

{ t: "cover",
  h: "How Construction Bidding Works",
  lead: "Who buys commercial landscape work, how contracts and money move, and how bids are won, lost and protected.",
  objectives: [
    "Know what a bid binds you to, private and public",
    "Map every player and how contracts, bills, payments and retention move between them",
    "Distinguish private from public work, delivery methods and contract types, and price the quantity risk in each",
    "Survive bid leveling, the scope review call and bid shopping",
    "Read a real public bid tab: totals, line items and sub lists",
    "Avoid the mistakes that cost new commercial bidders the most"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "2.5 h"], ["Module total", "4 h"]],
  body: "<p>Real examples: City of San Diego park job K-24-1952 and Caltrans (California Department of Transportation) freeway landscape jobs. Laws and numbers were checked in 2026; confirm at the cited source before relying on one. This is training, not legal advice.</p>"
},

{ h: "What a bid binds you to",
  lead: "A bid is a written promise of scope, price and terms, and both public law and private case law can hold you to it.",
  body: `<ul>
<li><strong>Scope</strong> comes from the plans and specs, not a conversation. <strong>Price</strong> is a total, often itemized. <strong>Terms</strong> are exclusions, assumptions and how long the price holds.</li>
<li><strong>Public bids</strong> generally can't be withdrawn after opening. Relief covers only certain clerical mistakes, not judgment, with written notice within 5 working days of opening (Public Contract Code, PCC, §§5100–5110).</li>
<li><strong>Private sub bids to a GC (general contractor)</strong> can bind you by promissory estoppel: in <em>Drennan v. Star Paving</em> (1958) the sub was held to a price the GC relied on in its own bid.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th></th><th>Residential</th><th>Commercial</th></tr></thead>
<tbody>
<tr><td>Customer</td><td>Homeowner</td><td>GC, or a public agency directly</td></tr>
<tr><td>Design</td><td>Often you</td><td>Landscape architect (LA); you build what is drawn</td></tr>
<tr><td>Price set by</td><td>Your quote</td><td>Several bidders on the same documents</td></tr>
<tr><td>Payment</td><td>Deposit capped at 10% or $1,000 (Business and Professions Code, B&amp;P, §7159)</td><td>Monthly pay application, paid 30–60+ days later, less retention</td></tr>
<tr><td>Changes</td><td>Talk it over</td><td>Only by signed change order</td></tr>
</tbody></table></div>`,
  ex: `<p>Scope line: “Landscape and irrigation per sheets L-1.0 to L-4.2 and spec sections 32 84 00 and 32 93 00, including 90-day plant establishment. Excludes permits, bonds and water meter fees. $186,400. Valid 60 days.”</p>`,
  watch: `<p>Never send a number you won't build for. A low number you can't live with is worse than losing.</p>`,
  src: "Cal. Public Contract Code §§5100–5110; Drennan v. Star Paving Co., 51 Cal.2d 409 (1958); Cal. B&P Code §7159."
},

{ h: "Owner side, designers and inspectors",
  lead: "Know who approves your products, measures your quantities and signs off payment on each job, and how much notice they need.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Role</th><th>What they do that affects your price</th></tr></thead>
<tbody>
<tr><td><strong>Owner</strong> (developer, HOA (homeowners association), city, school district, Caltrans)</td><td>Budget, main contract, payment, approves changes</td></tr>
<tr><td><strong>Owner's rep / CM (construction manager)</strong></td><td>Reviews bills and change orders; some CMs bid trade packages directly, so you bid to the CM</td></tr>
<tr><td><strong>RE (resident engineer)</strong></td><td>Agency field lead on public jobs: measures quantities for payment, approves work</td></tr>
<tr><td><strong>LA</strong></td><td>Designs and writes landscape specs; answers RFIs (requests for information) via addenda; reviews submittals; observes coverage tests, layout and staking; punch list; signs off plant establishment</td></tr>
<tr><td><strong>Civil / electrical engineers</strong></td><td>Water meter and POC (point of connection) on civil sheets; controller power on electrical sheets</td></tr>
<tr><td><strong>Inspectors and testers</strong></td><td>Permit work (backflow, sleeves in the public right-of-way), mainline pressure tests, compaction, certified backflow testing, recycled-water conversions</td></tr>
<tr><td><strong>Property manager</strong></td><td>Takes over at acceptance; gets controller charts, as-builts, warranty calls</td></tr>
</tbody></table></div>`,
  ex: `<p>Real, City K-24-1952: final grades “shall be acceptable to the Resident Engineer before planting”; palm photos go to the Project Landscape Architect “for approval for a minimum of 15 days prior to delivery”; the LA “is the sole judge as to acceptability of each plant”; rejected plants replaced “within one week of written notice” at contractor cost; mandatory observations requested “in writing, at least one (1) week in advance.” Caltrans 11-422004 had a bid item just to certify existing backflow preventers (item 32).</p>`,
  watch: `<p>An owner's rep or superintendent can't change your contract; only a signed change order from the party you contract with can. Backfilling before inspection means digging up at your cost.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A (2023) Supplementary Special Provisions §§200-5.1, 801 (items 9–11); Caltrans 11-422004 bid item 32."
},

{ h: "The GC's team, suppliers and your own subs",
  lead: "Talk to the right GC person at the right stage, and price the other trades your scope depends on.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>GC role</th><th>Your contact for</th></tr></thead>
<tbody>
<tr><td>Chief estimator / precon (preconstruction) manager</td><td>Bid lists, invitations, sub selection</td></tr>
<tr><td>Estimator</td><td>One project's bidding and leveling</td></tr>
<tr><td>PM (project manager) / PE (project engineer)</td><td>After award: subcontract, submittals, RFIs, change orders, billing</td></tr>
<tr><td>Superintendent</td><td>Site schedule, inspections, safety; can direct work but rarely approve money</td></tr>
<tr><td>Accounts payable</td><td>Pay applications, lien releases</td></tr>
</tbody></table></div>
<p><strong>Suppliers:</strong> irrigation supply house, wholesale nurseries, soil and mulch yards, rental yards. <strong>Subs a landscape company hires:</strong> electrician, directional boring, traffic control, hydroseed/erosion control, concrete.</p>`,
  ex: `<p>Real, Caltrans 11-428704 (I-805 Chula Vista): the winner listed Golden State Boring &amp; Pipe Jacking (boring), Perry Electric (electric service, item 69), Synergy Traffic Control (items 3–6, 8), Hi-Way Safety Rentals (temporary railing, item 7) and Turboscape (wood mulch, item 31).</p>`,
  deeper: `<p>When you hire a sub you take the GC's role: check their license and DIR (Department of Industrial Relations) registration, collect insurance, pay on time. Other scopes landscape subs get handed: <a href="#m17-1">Module 17</a>.</p>`,
  src: "Caltrans Bid Summary 11-428704 (opened Sept. 8, 2021), List of Subcontractors, bidder 04."
},

{ h: "Money flow and California payment clocks",
  lead: "Contracts flow down, bills flow up, money flows back down 30–60+ days later minus retention, and state law sets the clocks.",
  body: `<p>Owner ↔ GC contract → GC ↔ you subcontract → your purchase orders. Each month: your pay application → inside the GC's → owner pays GC → GC pays you, less retention, against a lien release.</p>
<div class="tablewrap"><table>
<thead><tr><th>Rule</th><th>Private</th><th>Public</th></tr></thead>
<tbody>
<tr><td>GC pays you after being paid for your work</td><td>7 days unless otherwise agreed in writing (B&amp;P §7108.5)</td><td>7 days (B&amp;P §7108.5)</td></tr>
<tr><td>Retention cap</td><td>5% of each payment and the contract, for contracts signed on or after Jan 1, 2026, with exceptions (Civil Code §8811)</td><td>Generally 5% (PCC §7201)</td></tr>
<tr><td>Owner releases retention</td><td>45 days after completion (Civil Code §8812)</td><td>60 days after completion (PCC §7107)</td></tr>
<tr><td>GC passes your retention down</td><td>10 days after receipt (Civil Code §8814)</td><td>7 days after receipt (PCC §7107)</td></tr>
<tr><td>Late payment penalty</td><td>2% per month (B&amp;P §7108.5)</td><td>2% per month (B&amp;P §7108.5, PCC §7107)</td></tr>
</tbody></table></div>`,
  watch: `<p>Pay-when-paid clauses and good-faith disputes move these dates; a GC may withhold up to 150% of an amount truly in dispute. Never sign an unconditional lien release before funds clear (statutory forms, Civil Code §§8132–8138).</p>`,
  deeper: `<p>§8811 exceptions include a sub who was told at bid time that bonds were required and didn't provide them, and residential projects of four stories or less that aren't mixed-use. Public works rules in PCC §7107 can't be waived by contract. Billing and retention release: <a href="#m16-1">Module 16</a>.</p>`,
  src: "Cal. B&P Code §7108.5; Civil Code §§8132–8138, 8811, 8812, 8814; Public Contract Code §§7107, 7201."
},

{ h: "Worked example: retention on a $200,000 subcontract",
  lead: "Retention typically holds half your profit for about six months after you leave the site.",
  exLabel: "Made-up private job signed in 2026, 5% retention",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Bill</th><th class="num">Billed</th><th class="num">Held</th><th class="num">Paid</th></tr></thead>
<tbody>
<tr><td>#1 Sleeves, mainline</td><td class="num">$40,000</td><td class="num">$2,000</td><td class="num">$38,000</td></tr>
<tr><td>#2 Laterals, heads, valves</td><td class="num">$80,000</td><td class="num">$4,000</td><td class="num">$76,000</td></tr>
<tr><td>#3 Soil prep, planting, mulch</td><td class="num">$60,000</td><td class="num">$3,000</td><td class="num">$57,000</td></tr>
<tr><td>#4 90-day establishment</td><td class="num">$20,000</td><td class="num">$1,000</td><td class="num">$19,000</td></tr>
<tr><td><strong>Total</strong></td><td class="num"><strong>$200,000</strong></td><td class="num"><strong>$10,000</strong></td><td class="num"><strong>$190,000</strong></td></tr>
</tbody></table></div>
<p>Building completes 4 months after your last day + 45 days owner release + 10 days GC pass-through ≈ <strong>6 months</strong>. At 10% profit ($20,000), retention is half of it.</p>`,
  body: `<p>Plan retention into cash flow on bid day: <a href="#m3-1">Module 3</a>.</p>`,
  src: "Cal. Civil Code §§8811, 8812, 8814."
},

{ h: "Project life cycle and when you install",
  lead: "Landscape is bid early and installed last, so price escalation and the establishment period are real costs in your number.",
  body: `<ol class="steps">
<li><div><b>Design</b>LA, civil and electrical drawings and specs.</div></li>
<li class="hl"><div><b>Bidding</b>GC and subs price the documents.</div></li>
<li><div><b>Award and subcontract</b>Then NTP (notice to proceed).</div></li>
<li class="hl"><div><b>Submittals</b>Products, plant sources, soil tests before ordering.</div></li>
<li><div><b>Early work</b>Sleeves before paving, often months ahead of the rest.</div></li>
<li class="hl"><div><b>Install</b>Irrigation, soil prep, planting, mulch, programming.</div></li>
<li><div><b>Punch list</b>LA and inspector walk.</div></li>
<li class="hl"><div><b>Plant establishment</b>Watering, weeding, replacement for a spec'd period.</div></li>
<li><div><b>Acceptance</b>Retention release; warranty (often 1 year) starts.</div></li>
</ol>`,
  ex: `<p>Made-up: bid in March, building takes 14 months, install the next May. An 8% rise in plant and PVC (polyvinyl chloride) pipe prices comes out of your profit unless the bid carried it.</p>`,
  deeper: `<p>Establishment periods run 90 days to years: Caltrans 11-422004 required 750 working days, about three years. Finding it in the specs: <a href="#m5-1">Module 5</a>.</p>`,
  src: "Caltrans 11-422004 Notice to Bidders (plant establishment 750 working days)."
},

{ h: "Markets, delivery methods and where you fit",
  lead: "Private work is won on leveled price and relationships; public work goes by strict rules to the lowest responsive, responsible bidder.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>Private</th><th>Public</th></tr></thead>
<tbody>
<tr><td>Owner</td><td>Business, developer, HOA</td><td>City, county, school or water district, state</td></tr>
<tr><td>You bid to</td><td>Usually a GC, who can pick any sub</td><td>The agency as prime, or the primes as sub</td></tr>
<tr><td>Award</td><td>GC's choice after leveling</td><td>Lowest responsive, responsible bidder</td></tr>
<tr><td>Prices after bid</td><td>Private, negotiable</td><td>Public bid tab</td></tr>
<tr><td>Rules</td><td>Contract terms</td><td>Prevailing wage, DIR registration, certified payroll, bonds, sub listing</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Delivery method</th><th>Effect on you</th></tr></thead>
<tbody>
<tr><td>DBB (design-bid-build), hard bid</td><td>Bid finished plans; sharpest price competition. K-24-1952's number ends in “DBB.”</td></tr>
<tr><td>Negotiated</td><td>GC still collects sub prices but weighs relationships and quality</td></tr>
<tr><td>DB (design-build)</td><td>You may design irrigation and give early budgets</td></tr>
<tr><td>CMAR (construction manager at risk)</td><td>Budget numbers during design, formal bid on final plans later</td></tr>
</tbody></table></div>
<p><strong>Sub or prime:</strong> sub on buildings and on civil jobs under a Class A prime; prime on landscape-only public work when the notice allows your license. K-24-1952 required Class A, so landscape could only sub; 11-428704 allowed “Class A … or C-27,” so a landscape company could prime. Licenses: <a href="#m2-1">Module 2</a>.</p>`,
  watch: `<p>Privately owned work paid “in whole or in part out of public funds” (for example affordable housing) can be public works for prevailing wage (Labor Code §1720(a)(1)). Check every bid package for wage language.</p>`,
  src: "Cal. Labor Code §1720; City K-24-1952 bid documents; Caltrans 11-428704 Notice to Bidders."
},

{ h: "Contract types and quantity risk",
  lead: "Lump sum puts all quantity risk on your takeoff; unit price pays the measured quantity, so check how each item is measured.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Type</th><th>Paid on</th><th>Quantity risk</th><th>Example</th></tr></thead>
<tbody>
<tr><td>LS (lump sum)</td><td>Fixed price</td><td>You</td><td>Most private subcontracts</td></tr>
<tr><td>Unit price</td><td>Price per LF (linear foot), EA (each), CY (cubic yard), SF (square foot) × measured quantity</td><td>Shared</td><td>Caltrans: “Bids must be on a unit price basis.”</td></tr>
<tr><td>LS with unit prices</td><td>Mostly LS, some unit items</td><td>Mixed</td><td>K-24-1952: “a Lump Sum contract with Unit Price provisions”</td></tr>
<tr><td>T&amp;M (time and materials)</td><td>Hours + materials + markup</td><td>Owner</td><td>Extra work, repairs</td></tr>
<tr><td>Cost-plus / GMP (guaranteed maximum price)</td><td>Cost + fee to a cap</td><td>Shared; overruns above cap yours</td><td>Owner–GC on negotiated or CMAR; subs still mostly LS</td></tr>
</tbody></table></div>`,
  exLabel: "Real bid quantity and price (11-428704 item 63); field quantity made up",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>4" Class 315 supply line, 7,493 LF × $12.00 = $89,916</th><th>Unit price</th><th>Lump sum</th></tr></thead>
<tbody>
<tr><td>RE measures 7,900 LF</td><td>7,900 × $12 = $94,800 (+$4,884)</td><td>$89,916; 407 LF free unless change order</td></tr>
<tr><td>RE measures 7,000 LF</td><td>$84,000; fixed costs buried in the unit price shrink too</td><td>$89,916</td></tr>
</tbody></table></div>`,
  deeper: `<p>Public specs allow price adjustment on large quantity changes to unit items (Caltrans Standard Specifications; Greenbook and Whitebook on City jobs). Where to find them: <a href="#m5-1">Module 5</a>.</p>`,
  src: "Caltrans 11-428704 Notice to Bidders, Bid Item List and Bid Summary (item 63, ACCU $12.00/LF); City K-24-1952 Instructions to Bidders §11."
},

{ h: "Two timelines: a private job and 11-428704",
  lead: "Private bid-to-last-dollar runs over a year; public work fixes every date, form and price in writing.",
  body: `<div class="twocol">
<div><h3>Private (made-up medical office)</h3><ul>
<li>Wk 0: BuildingConnected invite, 12 days to bid; go/no-go</li>
<li>Wk 1: take off L-1 to L-5 plus civil (meter) and electrical (controller power) sheets; RFI on missing backflow enclosure → Addendum 1</li>
<li>Wk 2: quotes, labor, markup; proposal the day before</li>
<li>Bid day: leveling call; you're leveled low</li>
<li>Mo 1–2: subcontract, submittals, sleeves before paving</li>
<li>Mo 9–13: install, punch list (22 items), establishment</li>
<li>About mo 16: retention</li>
</ul></div>
<div><h3>Public, Caltrans 11-428704 (real)</h3><ul>
<li>Aug 2, 2021: advertised; Class A or C-27; DBE (Disadvantaged Business Enterprise) goal 14%; unit price; 10% bid security; estimate $1,510,000</li>
<li>Aug 27: Addendum 1 (sheets, items, wage rates)</li>
<li>Sept 8, 2:00 PM: six bids on Bid Express, opened by webcast</li>
<li>After opening: DBE forms due; apparent low marked “NR LATE DBE/DVBE SUBMITTAL” (non-responsive)</li>
<li>Oct 1: awarded to ACCU Construction, $1,176,120.00</li>
<li>120 working days build + 250 establishment = 370</li>
</ul></div>
</div>`,
  watch: `<p>The lowest number, $1,106,287.75, lost on a form deadline after bid day. On public work, the forms are part of the price. Full walkthrough: <a href="#m15-1">Module 15</a>.</p>`,
  src: "Caltrans 11-428704 Notice to Bidders (Aug. 2, 2021), Addendum 1 (Aug. 27, 2021), Bid Summary; award date from Caltrans contract page."
},

{ h: "Responsive, responsible, and what's in the package",
  lead: "Read every document in the package, because a missed addendum or form makes the cheapest bid non-responsive.",
  body: `<ul>
<li><strong>Responsive:</strong> followed the instructions exactly: forms signed, all addenda acknowledged, bid bond, sub list, on time.</li>
<li><strong>Responsible:</strong> able to perform: license, DIR registration, experience, record, finances.</li>
<li>Agencies may waive a truly minor irregularity; anything touching price (addendum, bond) usually can't be waived.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Package document</th><th>Read it for</th></tr></thead>
<tbody>
<tr><td>Notice inviting bids</td><td>Due date/time/place, job walk, license class, bond, goals</td></tr>
<tr><td>Instructions to bidders, bid form</td><td>Submission rules; line items and quantities</td></tr>
<tr><td>Plans and specs (project manual)</td><td>Scope, products, testing, establishment, warranty. Search civil and electrical sheets too.</td></tr>
<tr><td>Addenda</td><td>Every one changes the job</td></tr>
<tr><td>Contract, bond and wage sections</td><td>What you sign; prevailing wage</td></tr>
<tr><td>Reports</td><td>Geotechnical, agronomic soil tests</td></tr>
</tbody></table></div>
<p><strong>Typical landscape scope:</strong> POC, backflow and enclosure, master valve and flow sensor, controller and sensors, mainline and laterals by size, valves and boxes, heads and drip, wire, sleeves, testing and as-builts; weed removal, fine grading, soil tests and amendments, trees with staking and root barrier, shrubs and groundcover by size, turf, mulch, DG (decomposed granite), boulders, establishment, warranty replacement.</p>`,
  ex: `<p>Real: K-24-1952's book holds a Required Documents Schedule, notice, instructions, bond forms, scope, Equal Opportunity Contracting Program, prevailing wage, Supplementary Special Provisions with ten appendices (including an environmental document and a Coastal Commission permit), the agreement and certifications. Plans were a separate 32-sheet set.</p>`,
  watch: `<p>Sleeves under paving are drawn on landscape sheets but go in months before you mobilize. Settle who installs them at bid time.</p>`,
  src: "City of San Diego K-24-1952 bidding documents, table of contents and Scope of Work §1.1.1 (plans 41608-1-D through 41608-32-D)."
},

{ h: "Bid leveling and how GCs pick subs",
  lead: "GCs fill every gap in your scope with a high plug, then weigh completeness, track record and paperwork alongside price.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Sub A</th><th class="num">Sub B</th><th class="num">Sub C</th></tr></thead>
<tbody>
<tr><td>Base bid</td><td class="num">$182,000</td><td class="num">$164,000</td><td class="num">$176,000</td></tr>
<tr><td>90-day establishment</td><td class="num">Incl.</td><td class="num">Excl. → plug $14,000</td><td class="num">Incl.</td></tr>
<tr><td>Backflow and enclosure</td><td class="num">Incl.</td><td class="num">Excl. → plug $6,000</td><td class="num">Incl.</td></tr>
<tr><td><strong>Leveled</strong></td><td class="num"><strong>$182,000</strong></td><td class="num"><strong>$184,000</strong></td><td class="num"><strong>$176,000</strong></td></tr>
</tbody></table></div>
<p><strong>Beyond price, GCs check:</strong> complete scope; similar jobs and references; manpower and a plan-reading foreman; insurance limits, fast submittals, clean pay apps; written safety program and EMR (experience modification rate) about 1.0 or lower; bonding ability; SLBE/ELBE or DBE status when the job has a goal; bid-day responsiveness; change-order history.</p>`,
  ex: `<p>Made-up: two subs $3,000 apart on $250,000. The low one is new to the GC and sent an incomplete prequal; the other finished two jobs for them cleanly. Many GCs take the second or ask them to match.</p>`,
  deeper: `<p>Writing inclusions and exclusions that level cleanly: <a href="#m13-1">Module 13</a>. Certifications: <a href="#m2-1">Module 2</a>.</p>`
},

{ h: "The scope review call",
  lead: "If you're low or close, the GC calls to confirm scope before carrying your number; answer only what you priced and confirm in writing.",
  body: `<ul>
<li>Addenda included? (“1 through 3.”)</li>
<li>Establishment period in the number, and how long?</li>
<li>Who has sleeves, backflow, controller power?</li>
<li>Soil testing and amendments per the soil report?</li>
<li>Crew size and weeks on site?</li>
<li>Insurance and bond requirements met?</li>
<li>Exclusions?</li>
</ul>`,
  exLabel: "Follow-up email",
  ex: `<p>“Thanks for the call on [project]. Our price of $[amount] includes Addenda 1–[n], [90]-day establishment, backflow and enclosure, and sleeves per sheet [L-x]. It excludes [permits, meter fees, electrical to the controller]. Crew of [5], about [6] weeks on site. [Name, phone]”</p>`,
  watch: `<p>“Yes, that's included” said to be agreeable becomes subcontract scope you build for free.</p>`
},

{ h: "Bid shopping, bid peddling and listing law",
  lead: "Public sub listing protects you after award; on private work your only protection is how and when you release your number.",
  body: `<ul>
<li><strong>Bid shopping:</strong> the GC uses your price to push others lower, often after award (“beat $180,000 and it's yours,” or “everyone cut 5%”).</li>
<li><strong>Bid peddling:</strong> a losing sub offers to beat the winner after bid day. Never do it; GCs talk.</li>
<li><strong>Public listing:</strong> the prime must list every sub over one-half of 1% of its bid (streets and highways: over one-half of 1% or $10,000, whichever is greater). A listed sub can be replaced only for statutory reasons.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Private-work defense</th><th>How</th></tr></thead>
<tbody>
<tr><td>Know who shops</td><td>Ask suppliers and subs; log GCs who ask you to “sharpen” after award</td></tr>
<tr><td>Scope early, price late</td><td>Scope letter 1–2 days ahead; price in the last hours before the GC's cutoff</td></tr>
<tr><td>Complete scope</td><td>Cheaper partial bids get plugged up</td></tr>
<tr><td>Price validity</td><td>“Good for 60 days”</td></tr>
<tr><td>Floor set before bid day</td><td>Cut scope, not just price: “$4,000 off if you supply the amendment”</td></tr>
<tr><td>No price sharing</td><td>Never ask for or target a competitor's number; recheck your own estimate</td></tr>
</tbody></table></div>`,
  ex: `<p>A GC calls a week after winning: “You're $9,000 high, can you match?” Ask what scope the other number covers, recheck your estimate, lower only for a real reason, otherwise decline politely and stay on the list.</p>`,
  deeper: `<p>Subletting and Subcontracting Fair Practices Act, PCC §§4100–4114: §4104 listing threshold; §4107 the only substitution grounds (sub refuses to sign, bankruptcy, unlicensed, etc.; the sub gets notice and 5 working days to object); §4110 agency may cancel or charge the prime up to 10% of the subcontract; §4111 grounds for CSLB (Contractors State License Board) discipline. Listing on bid day: <a href="#m14-1">Module 14</a>.</p>`,
  src: "Cal. Public Contract Code §§4100, 4104, 4107, 4110, 4111."
},

{ h: "Ethics: the lines you never cross",
  lead: "Collusion, false certifications and front companies end licenses and bring criminal charges.",
  body: `<ul>
<li><strong>No collusion</strong> on prices, who bids or “taking turns.” Every California public bid carries a noncollusion declaration under penalty of perjury.</li>
<li><strong>True forms:</strong> prequal answers, DBE/SLBE use, certified payroll and certifications are signed statements; false ones mean debarment and prosecution.</li>
<li><strong>Certified subs do the work</strong> they're listed for; pass-through “fronts” break program rules.</li>
<li><strong>No sharing or soliciting</strong> competitors' numbers. <strong>No gifts</strong> to inspectors or agency staff.</li>
<li><strong>Bid what you'll build;</strong> don't bid low planning to recover on change orders.</li>
</ul>`,
  watch: `<p>“You take this one, we'll take the next” is bid rigging. End the call and tell your company's owner.</p>`,
  deeper: `<p>Noncollusion declaration: PCC §7106. Bid rigging: Cartwright Act (B&amp;P §16720 and following) and the federal Sherman Act. K-24-1952 also required certifications of pending actions, business interests and debarment status for the prime and its subs.</p>`,
  src: "Cal. Public Contract Code §7106; Cal. B&P Code §16720; City of San Diego K-24-1952 Required Documents Schedule."
},

{ h: "Bid schedule and bid day",
  lead: "A bid runs 2–4 weeks; on bid day, get scope in early, price in on time and stay reachable.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Day (typical)</th><th>Task</th></tr></thead>
<tbody>
<tr><td>1</td><td>Download all, calendar due date and job walk, go/no-go</td></tr>
<tr><td>3</td><td>Job walk: access, existing conditions, water source</td></tr>
<tr><td>3–12</td><td>Read plans and specs, take off</td></tr>
<tr><td>10</td><td>RFI deadline (the City may disregard questions received less than 14 days before opening)</td></tr>
<tr><td>13</td><td>Last addendum; update takeoff</td></tr>
<tr><td>12–16</td><td>Quotes, labor, equipment, overhead, markup</td></tr>
<tr><td>17</td><td>Sub bids to GCs: scope 1–2 days earlier, price the morning of or before each GC's cutoff</td></tr>
<tr><td>18, 2:00 PM</td><td>Prime bids due; public bids opened and read</td></tr>
</tbody></table></div>
<ul>
<li>Send to every GC bidding the job; use their bid form if they have one; confirm receipt by call or email.</li>
<li>Bids are lost on price, scope gaps, lateness (one minute), missing forms, bond or addenda, wrong license or no DIR registration, and no relationship.</li>
</ul>`,
  watch: `<p>A last-hour price that lands after the GC closed its spreadsheet is a lost bid. Know each GC's cutoff.</p>`,
  src: "City of San Diego K-24-1952 Notice Inviting Bids §9.2."
},

{ h: "Reading a real bid tab: totals and sub lists",
  lead: "Bid tabs are free market data: spread to low, distance from the engineer's estimate, and who subs to whom.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rank</th><th>Bidder, 11-428704</th><th class="num">Total</th><th class="num">Over low</th></tr></thead>
<tbody>
<tr><td>1</td><td>ACCU Construction, Inc. (awarded)</td><td class="num">$1,176,120.00</td><td class="num">n/a</td></tr>
<tr><td>2</td><td>Diversified Landscape Co.</td><td class="num">$1,179,705.30</td><td class="num">+0.3%</td></tr>
<tr><td>3</td><td>Griffith Company</td><td class="num">$1,234,875.85</td><td class="num">+5.0%</td></tr>
<tr><td>4</td><td>Blue Pacific Engineering &amp; Construction</td><td class="num">$1,592,126.21</td><td class="num">+35.4%</td></tr>
<tr><td>5</td><td>Mercer-Fraser Company</td><td class="num">$3,311,895.00</td><td class="num">+181.6%</td></tr>
<tr><td>NR</td><td>Marina Landscape, Inc. “NR LATE DBE/DVBE SUBMITTAL”</td><td class="num">$1,106,287.75</td><td class="num">not counted</td></tr>
<tr><td></td><td>EE (engineer's estimate)</td><td class="num">$1,516,176.50</td><td class="num">+28.9%</td></tr>
</tbody></table></div>
<p>Low was $340,056.50 (22.43%) under the EE, as Caltrans reports it. Top two: $3,585.30 apart.</p>
<p><strong>Sub lists:</strong> Griffith listed D.B. Electric (electric service), Maneri and Synergy (traffic, railing), RTC Inc. (storm water plans, sampling, job site management). Blue Pacific listed <strong>Diversified Landscape</strong> for the irrigation items, while Diversified also bid as prime and placed 2nd.</p>`,
  ex: `<p>Two chances on every prime-eligible job: bid it as prime if license and bonding allow, and send your landscape and irrigation price to the engineering contractors bidding it. Mine sub lists for your target GC list (<a href="#m3-1">Module 3</a>).</p>`,
  deeper: `<p>The sub list shows each sub's city, license number and the item numbers (with percent) it was listed for.</p>`,
  src: "Caltrans Bid Summary 11-428704, bid opening 09/08/21, totals and List of Subcontractors, bidders 04, 05 and 06."
},

{ h: "Reading a real bid tab: line items",
  lead: "Large-quantity items show the true market price; lump sums and odd unit prices show where bidders hid overhead or unbalanced.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item (qty)</th><th class="num">ACCU</th><th class="num">Diversified</th><th class="num">Griffith</th><th class="num">Blue Pacific</th><th class="num">Mercer-Fraser</th></tr></thead>
<tbody>
<tr><td>63 · 4″ pipe, LF (7,493)</td><td class="num">$12.00</td><td class="num">$13.70</td><td class="num">$16.00</td><td class="num">$20.63</td><td class="num">$35.00</td></tr>
<tr><td>27 · Group A 1-gal, EA (1,460)</td><td class="num">$25.00</td><td class="num">$11.80</td><td class="num">$8.00</td><td class="num">$18.00</td><td class="num">$85.00</td></tr>
<tr><td>26 · Group K 24″ box, EA (43)</td><td class="num">$700</td><td class="num">$480</td><td class="num">$5.50</td><td class="num">$600</td><td class="num">$700</td></tr>
<tr><td>41 · 40-station controller, EA (1)</td><td class="num">$15,000</td><td class="num">$17,000</td><td class="num">$13,000</td><td class="num">$25,625</td><td class="num">$25,000</td></tr>
<tr><td>30 · Plant establishment, LS</td><td class="num">$35,000</td><td class="num">$48,100</td><td class="num">$50,000</td><td class="num">$30,000</td><td class="num">$300,000</td></tr>
<tr><td>9 · Job site management, LS</td><td class="num">$5,000</td><td class="num">$42,500</td><td class="num">$6,000</td><td class="num">$40,000</td><td class="num">$125,000</td></tr>
<tr><td>70 · Mobilization, LS</td><td class="num">$20,000</td><td class="num">$99,100</td><td class="num">$58,000</td><td class="num">$120,000</td><td class="num">$330,000</td></tr>
</tbody></table></div>
<ul>
<li>The winner was highest of the top three on 1-gallon plants but lowest on pipe, mobilization and job site management.</li>
<li>Griffith's $5.50 box tree is far below cost: money moved between items. Don't treat it as market.</li>
<li>Pipe, the biggest quantity, had the tightest spread.</li>
</ul>`,
  watch: `<p>Deliberate unbalancing can get a public bid rejected and backfires when quantities change (<a href="#m14-1">Module 14</a>).</p>`,
  src: "Caltrans Bid Summary 11-428704, items 9, 26, 27, 30, 41, 63, 70; see Real Bid Lab, <a href=\"#lab-11-428704\">11-428704</a>."
},

{ h: "Mistakes that cost money",
  lead: "Most new commercial bidders lose money the same dozen ways; each has a habit that prevents it.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Cost</th><th>Habit</th></tr></thead>
<tbody>
<tr><td>Pricing only the L sheets</td><td>Unpaid meter, POC, controller power, sleeves</td><td>Search civil and electrical sheets (<a href="#m4-1">Module 4</a>)</td></tr>
<tr><td>Missed addendum</td><td>Public: rejected. Private: built free.</td><td>Addenda log; recheck portal the day before</td></tr>
<tr><td>Missed establishment period</td><td>Up to 750 working days unpaid (11-422004)</td><td>Find it in the specs on day one</td></tr>
<tr><td>Open-ended price</td><td>Escalation eats profit</td><td>Validity period plus escalation clause</td></tr>
<tr><td>Vague exclusions</td><td>High plugs or free work</td><td>Explicit inclusions/exclusions</td></tr>
<tr><td>One GC only</td><td>Their loss is yours</td><td>Send to every GC bidding</td></tr>
<tr><td>Late, even by a minute</td><td>Rejected</td><td>Submit hours early</td></tr>
<tr><td>After-bid form missed</td><td>Lost $1.1M low bid on 11-428704</td><td>Calendar post-bid deadlines before submitting</td></tr>
<tr><td>Unread subcontract</td><td>Pay-if-paid, retention, back-charges</td><td>Read payment, retention, insurance, indemnity</td></tr>
<tr><td>No cash plan</td><td>Profitable job, empty bank</td><td>Cash flow every job over a set size</td></tr>
<tr><td>Handshake extras</td><td>Never paid</td><td>Signed change order or T&amp;M ticket first</td></tr>
<tr><td>Unpriced office time</td><td>Payroll reports, submittals, safety plans eat margin</td><td>Price supervision and office (<a href="#m9-1">Module 9</a>, <a href="#m10-1">Module 10</a>)</td></tr>
</tbody></table></div>`,
  src: "Caltrans 11-422004 Notice to Bidders; Caltrans Bid Summary 11-428704 (bidder marked NR LATE DBE/DVBE SUBMITTAL)."
},

{ h: "Scenarios: what would you do?",
  lead: "Decide first, then read the move.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>Move</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Day before bids, you find Addendum 3 adding one year of maintenance.</td><td>Price it; tell every GC your number includes Addendum 3.</td><td>GCs level on it; a number without it gets plugged or rejected.</td></tr>
<tr><td>Superintendent: “Add 12 trees, we'll take care of you.”</td><td>Written price; wait for a signed change order or T&amp;M ticket.</td><td>Supers rarely approve money.</td></tr>
<tr><td>After a public opening you find a missing $40,000 item.</td><td>Owner and attorney the same day; written notice within 5 working days if it's a clerical error.</td><td>Judgment errors can't be withdrawn (PCC §§5100–5110; <a href="#m14-1">Module 14</a>).</td></tr>
<tr><td>Competitor: “Let's not both chase the school job.”</td><td>Decline, end the call, tell your owner.</td><td>Bid rigging.</td></tr>
<tr><td>GC requires $5M per occurrence; you carry $1M plus $1M umbrella.</td><td>Price the increase with your agent before bid day, or state the exception.</td><td>Insurance you can't provide means no subcontract.</td></tr>
</tbody></table></div>`,
  src: "Cal. Public Contract Code §§5100–5110; Cal. B&P Code §16720."
},

{ t: "terms", h: "Words to know",
  lead: "Module 1 terms. Look up any other word or abbreviation in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["GC / sub / prime", "General contractor / subcontractor / contractor hired directly by the owner."],
    ["LF / SF / CY / EA / LS", "Linear foot / square foot / cubic yard / each / lump sum."],
    ["RFI", "Request for information: a written question about the documents."],
    ["RE", "Resident engineer: the agency's field lead who measures and approves work."],
    ["Owner's rep / CM / CMAR", "Owner's representative / construction manager / CM at risk, who guarantees a price."],
    ["Submittal", "Product data, samples or photos sent for approval before buying or installing."],
    ["Pay application", "Monthly bill for work completed."],
    ["Retention", "Part of each payment held to completion; generally capped at 5% in California."],
    ["Pay-when-paid", "Subcontract clause tying your payment timing to the GC being paid."],
    ["Lien release", "Statutory form signed with each payment; conditional until funds clear."],
    ["Promissory estoppel", "Doctrine holding a sub to a bid the GC relied on (Drennan v. Star Paving)."],
    ["DBB / DB / GMP", "Design-bid-build / design-build / guaranteed maximum price."],
    ["Unit price contract", "Paid on measured quantity × unit price."],
    ["T&M", "Time and materials: hours plus materials plus markup."],
    ["Responsive / responsible", "Followed every instruction / able to perform the work."],
    ["Bid leveling / plug", "GC's side-by-side comparison of sub bids / the GC's estimate filling a sub's gap."],
    ["Bid shopping / bid peddling", "GC using your price to push others down / a sub offering to beat a winner after bid day."],
    ["Sub listing", "Public prime's required list of subs over one-half of 1% of the bid (PCC §4104)."],
    ["Substitution", "Replacing a listed sub, allowed only on PCC §4107 grounds."],
    ["Noncollusion declaration", "Sworn statement in every California public bid that it isn't rigged."],
    ["Bid tab / EE / NR", "Posted bid results / engineer's estimate / non-responsive."],
    ["Unbalanced bid", "Moving money between unit items so some are far above or below cost."],
    ["Mobilization", "Lump sum item for setting up people, equipment and site."],
    ["Plant establishment period", "Spec'd maintenance and replacement period after planting."],
    ["NTP", "Notice to proceed: the official start."]
  ]
},

{ t: "quiz", id: "m1", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "Your $164,000 bid excludes the 90-day establishment and the backflow enclosure; the GC plugs $14,000 and $6,000. A competitor bid $176,000 complete. Who is leveled low?", a: ["You, at $164,000", "The competitor, at $176,000 vs. your $184,000", "Tied"], c: 1, why: "164,000 + 14,000 + 6,000 = $184,000 leveled, $8,000 above the complete bid." },
    { q: "Unit price item: 7,493 LF at $12.00. The RE measures 7,000 LF installed. What are you paid, and what's the hidden risk?", a: ["$89,916; none", "$84,000; fixed costs you buried in the unit price shrink with the quantity", "$84,000 plus a change order for the difference"], c: 1, why: "Unit price work pays measured quantity: 7,000 × $12 = $84,000. Mobilization or overhead spread into the unit price is lost on the underrun." },
    { q: "Private subcontract signed March 2026 calls for 10% retention. You don't fall within any §8811 exception. What applies?", a: ["10%, the contract governs", "Retention is capped at 5% of each payment and the contract", "No retention is allowed"], c: 1, why: "Civil Code §8811 caps private retention at 5% for contracts entered on or after Jan 1, 2026, with listed exceptions." },
    { q: "Public job: the agency releases retention to the GC on June 1. By when must the GC pay your share?", a: ["June 8", "June 11", "July 1"], c: 0, why: "PCC §7107 gives the prime 7 days after receipt on public works; late payment carries 2% per month." },
    { q: "The morning after a public bid opening you find you omitted the $40,000 controller line by a spreadsheet error. Best move?", a: ["Ask the agency to let you add it", "Give written notice within 5 working days seeking relief for a clerical error, with counsel", "Do nothing; make it up on change orders"], c: 1, why: "PCC §§5100–5110 allow relief only for clerical mistakes with written notice within 5 working days; you can't raise your price." },
    { q: "A public prime listed you for irrigation. After award it wants a cheaper sub because you 'cost too much.' What governs?", a: ["The prime can substitute freely", "PCC §4107 limits substitution to statutory grounds and gives you 5 working days to object", "Only the bid bond surety can decide"], c: 1, why: "Price is not a §4107 ground. Violations expose the prime to cancellation or a penalty of up to 10% of the subcontract (§4110)." },
    { q: "Caltrans streets job, prime bid $1,500,000. Your subcontract is $9,000. Must you be listed?", a: ["Yes, it's over one-half of 1%", "No, on streets and highways the threshold is the greater of one-half of 1% ($7,500) or $10,000", "Only if you're a DBE"], c: 1, why: "For streets and highways, listing applies above one-half of 1% or $10,000, whichever is greater; $9,000 is under $10,000." },
    { q: "On the 11-428704 tab, Griffith bid $5.50 each for 24″ box trees. How should you use that price?", a: ["As the market low for box trees", "Ignore it as market data; it's money moved between items", "Average it with the others"], c: 1, why: "No 24″ box tree costs $5.50. Use tight, big-quantity items like the pipe line for market pricing." },
    { q: "An affordable housing project is privately owned but partly funded by a city loan. What should you check first?", a: ["Whether the GC is union", "Whether prevailing wage applies under Labor Code §1720", "Whether retention is allowed"], c: 1, why: "Work paid in whole or part from public funds can be public works under §1720(a)(1), changing labor cost." },
    { q: "Low bidder on 11-428704 ($1,106,287.75) did not get the job. Why?", a: ["Too low to be believed", "Its DBE/DVBE forms were late and it was marked non-responsive", "Wrong license class"], c: 1, why: "The bid tab marks it NR LATE DBE/DVBE SUBMITTAL; ACCU was awarded at $1,176,120.00." }
  ]
},

{ t: "practice", id: "m1", h: "Practice assignments",
  lead: "Real documents and real people. Check each one off when done.",
  items: [
    { h: "Read a real bid tab", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-422004\">Real Bid Lab · 11-422004</a> (I-5 Carmel Valley). Record each bidder's total and percent over low, compare low to the engineer's estimate, and for three line items note the high and low unit price and which look unbalanced. List the subs each prime named.</p>" },
    { h: "Open one real City bid package", hrs: 1, d: "<p>On the City's PlanetBids portal (free vendor account), find a closed project with landscape or irrigation. List every document in the package, find the license class, bond, goals and establishment period, then pull the bid results: low bid, number of bidders, spread to second.</p>" },
    { h: "Interview your company's owner", hrs: 0.5, d: "<p>Record: the three largest jobs and their size; crews and equipment; main suppliers and nurseries; any HOA, commercial or public work; and the commercial job size the owner is willing to start with.</p>" },
    { h: "Write the company's bid-release policy", hrs: 0.25, d: "<p>Half a page for the owner to approve: when scope and price go out, price validity, how to answer a request to “sharpen,” minimum acceptable margin, and that we never share or solicit a competitor's number.</p>" },
    { h: "Retention on a real past job", hrs: 0.25, d: "<p>Take a past company job (or a $150,000 example). Split it into monthly bills at 5% retention, total the held amount, and date its earliest release under the private and the public clocks if the whole project finished 4 months after your work.</p>" }
  ]
},

{ h: "Module 1 summary",
  lead: "Commercial bidding is a promise priced against competitors under rules you must know cold.",
  body: `<ul>
<li>Bids bind: PCC §§5100–5110 on public work, <em>Drennan</em> on private sub bids.</li>
<li>Know who approves, measures and pays: owner's rep, CM, RE, LA, inspectors, the GC's estimator, PM and superintendent.</li>
<li>Money: 7-day pass-through, 5% retention cap (public PCC §7201; private Civil Code §8811 from 2026), 45/60-day release, 10/7-day pass-down, 2% per month late.</li>
<li>LS puts quantity risk on your takeoff; unit price pays measured quantity.</li>
<li>Public: lowest responsive, responsible bidder; forms after bid day count. Private: leveling and relationships.</li>
<li>Release scope early and price late; listing law protects public subs; never collude or peddle.</li>
<li>Bid tabs show market prices on big-quantity items and unbalancing on odd ones.</li>
</ul>
<p><strong>Next:</strong> <a href="#m2-1">Module 2 · Your License, Your Company and Getting Bid-Ready</a>.</p>`
}
]
});
