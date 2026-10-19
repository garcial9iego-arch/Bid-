(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 5, hours: 8, title: "Reading Specifications",
slides: [

{ t: "cover",
  h: "Reading Specifications",
  lead: "Plans show where and how much; specifications set the products, quality, tests, paperwork, time and payment rules, and most hidden costs in a commercial landscape bid live there.",
  objectives: [
    "Apply the order of precedence for Caltrans, City of San Diego and private contracts to real conflicts",
    "Navigate and cite Caltrans, Greenbook/Whitebook and CSI project manual specs, and resolve Caltrans Special Provision layering",
    "Find and price the spec items that move a landscape number: brands and substitutions, soil, plant inspection, submittals, tests and holds",
    "Compare Caltrans Type 1/Type 2 establishment with City 90- and 120-day periods, replacement rules and warranty",
    "Extract front-end costs: contract time, liquidated damages, bid security, participation goals, partnering, insurance, retention",
    "Run an AI-assisted spec review and verify every row against the page"
  ],
  time: [["Reading and slides", "2.25 h"], ["Practice assignments", "5.75 h"], ["Module total", "8 h"]],
  body: `<p>Sources: Special Provisions of Caltrans 11-428704 (<a href="#lab-11-428704">Real Bid Lab · 11-428704</a>), the 2018 Caltrans Standard Specifications, the City of San Diego Whitebook (2024 edition), and City contract K-24-1952 (EMTS Boat Dock Esplanade) with its landscape special provisions. Terms: <a href="#dict">Bid Dictionary</a>.</p>`,
  src: "Caltrans 11-428704 Notice to Bidders and Special Provisions; Caltrans 2018 Standard Specifications; City of San Diego Whitebook, 2024 edition; City of San Diego bid documents K-24-1952-DBB-3-A."
},

{ h: "Order of precedence",
  lead: "Every contract ranks its documents; find both conflicting documents on the list and the higher one wins, but ask before bid day because precedence settles disputes, not your price.",
  body: `<div class="twocol">
<div><h3>Caltrans (2018 Standard Specifications, SS, 5-1.02)</h3><ol>
<li>Special provisions</li>
<li>Project plans</li>
<li>Revised standard specifications</li>
<li>Standard specifications</li>
<li>Revised standard plans</li>
<li>Standard plans</li>
<li>Supplemental project information</li>
</ol></div>
<div><h3>City of San Diego (Whitebook 2024, 3-7.2)</h3><ol>
<li>Permits</li>
<li>Change orders and supplemental agreements</li>
<li>Signed agreement</li>
<li>Addenda</li>
<li>Bid / proposal</li>
<li>Supplemental special provisions</li>
<li>Project plans</li>
<li>Standard drawings</li>
<li>Whitebook</li>
<li>Greenbook</li>
<li>Reference specifications</li>
</ol></div>
</div>
<p>Both: <strong>written numbers govern over scaled graphics</strong>; <strong>detail drawings govern over general drawings</strong>. Caltrans: specific governs over general. Many private contracts: the better quality or greater quantity governs.</p>`,
  ex: `<p>11-428704: plans show 7,493 LF of 4" Class 315 recycled-water main. The Special Provisions (SP) add a pressure test “by method A with the testing pressure modified to 150 psi” and purple warning tape, at least 5 mil, with metallic strip, marked “Caution Reclaimed Water Line Buried Below,” along the whole trench. None of it is on the plan view.</p>`,
  deeper: `<p>Caltrans 5-1.02: “A component in one Contract part applies as if appearing in each.” A spec requirement applies even if the plans never mention it. The Whitebook adds that where documents conflict with the Municipal Code, the most stringent requirement controls. The 2024 Whitebook replaces Greenbook 3-7.2 with the list above; older contracts cite precedence as 2-5.2. Private contracts set their own order: read the subcontract and the prime contract it incorporates.</p>`,
  watch: `<p>On private work the project manual is a separate book the GC often doesn't send. Ask for the landscape and irrigation sections and Division 01; pricing from plans alone is guessing.</p>`,
  src: "Caltrans 2018 Standard Specifications 5-1.02; City of San Diego Whitebook 2024 edition, Part 1(A), 3-7.2; Special Provisions 20-2.01A(4)(b)(i), 20-2.01B(3), contract 11-428704."
},

{ h: "Precedence applied: five conflicts",
  lead: "Rank both documents, price the governing one, and still send the question.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Conflict</th><th>Ranking</th><th>Price</th></tr></thead>
<tbody>
<tr><td>Caltrans: plan note “test main per Standard Specifications” (125 psi) vs. SP recycled-water main 150 psi (real 11-428704 rule)</td><td>SP #1, plans #2</td><td>150 psi test</td></tr>
<tr><td>City: plan note “60-day maintenance period” vs. Whitebook 801-6, 90 calendar days “unless otherwise specified in the Contract Documents”</td><td>Plans #7 over Whitebook #9, and the Whitebook allows a different period</td><td>Plan note probably governs; ask; if no answer price 90 days and state it</td></tr>
<tr><td>Private: plan shows 15 trees, schedule says 12; spec says furnish quantities “as needed to complete work as shown on the Drawings” (K-24-1952 wording)</td><td>Drawings govern count</td><td>15, and ask</td></tr>
<tr><td>Plan view shows 10" round valve box; detail shows standard rectangular</td><td>Detail over general</td><td>Detail's box</td></tr>
<tr><td>Bed scales 41 ft, dimensioned 38'-0"</td><td>Written over scaled</td><td>38 ft; check whether the sheet is to scale</td></tr>
</tbody></table></div>`,
  watch: `<p>Read each contract's actual clause: “the more stringent requirement governs” overrides any ladder. If unresolved, state in the proposal which version you priced.</p>`,
  src: "Caltrans 2018 SS 5-1.02; Whitebook 2024 3-7.2 and 801-6; SP 11-428704 20-2.01A(4)(b)(i); City K-24-1952 landscape special provisions (plants, item 10)."
},

{ h: "Spec families and how to cite them",
  lead: "Identify the spec family and edition before reading, and cite every requirement by its full address so anyone can find it.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Family</th><th>Used on</th><th>Structure</th><th>Citation example</th></tr></thead>
<tbody>
<tr><td>Caltrans</td><td>State highway; some local road jobs</td><td>2018 Standard Specifications (SS) + Revised Standard Specifications (RSS) + job SP + Standard Plans. Landscape = Section 20</td><td>20-2.01A(4)(b)(ii): Sec 20 · 20-2 irrigation · .01 general · A general part · (4) quality assurance · (b) pressure testing · (ii) Method A. Parts: A General, B Materials, C Construction, D Payment</td></tr>
<tr><td>Greenbook + agency supplement</td><td>City of San Diego (Whitebook) and many Southern California agencies</td><td>Greenbook (Standard Specifications for Public Works Construction) + supplement + project special provisions. Landscape = Part 8</td><td>801-5.7.2.2: Part 8 · 801 installation · 801-5 irrigation · .7 testing · .2 pressure tests · .2 method</td></tr>
<tr><td>Project manual (CSI)</td><td>Private, schools, colleges, public buildings</td><td>Front end (Div 00, 01) + technical sections by CSI (Construction Specifications Institute) MasterFormat. Landscape = Div 32</td><td>32 84 00, 1.6 B.2: section · Part 1 · Article 1.6 · Paragraph B · Subparagraph 2</td></tr>
</tbody></table></div>`,
  ex: `<p>Good bidder question: “SP 20-2.01A(4)(b)(i), page 33 of the 11-428704 Special Provisions, adds a 150 psi test for recycled-water mains. Does this apply to the 2" main on IP-7?” A question without a section number gets a slow or vague answer and proves nothing later.</p>`,
  watch: `<p>Edition matters: the City lists Whitebook 2024 as effective April 1, 2026, with the 2021 edition before it. A job advertised under one edition stays under it.</p>`,
  src: "City of San Diego, “The WHITEBOOK: San Diego Supplement to the GREENBOOK” page; Caltrans 2018 CCS Standard Plans and Standard Specifications page; SP 11-428704 page 33."
},

{ h: "Caltrans layering: base + RSS + SP = the rule you price",
  lead: "A Caltrans SP book is mostly edits to the Standard Specifications, so never read the SP alone: open the base text, apply each edit, write out the final rule.",
  body: `<p><strong>Edit phrases:</strong> “Add to section…,” “Replace … with…,” “Delete…,” “Replace Reserved in section….” RSS are bound into the job book (04-16-21 here), same numbering.</p>
<p><strong>Base, 2018 SS 20-2.01A(4)(b)(i) and (ii), each line a cost:</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>Base text</th><th>Cost</th></tr></thead>
<tbody>
<tr><td>“In the Engineer's presence”; business days 8 a.m. to 5 p.m. unless authorized</td><td>Crew waits for inspector; tests fit the workday</td></tr>
<tr><td>“Before backfilling supply line trenches”</td><td>Open-trench protection; second trip to backfill</td></tr>
<tr><td>Gate valves open; open ends plugged or capped</td><td>Caps, plugs, setup</td></tr>
<tr><td>Notify the Engineer 48 hours before</td><td>Sequencing</td></tr>
<tr><td>Supply line in conduit: Method A, 0.5 hour, no allowable drop</td><td>Zero-drop fails more; allow a retest</td></tr>
<tr><td>Method A: gauge 0 to 200 psi in 5 psi increments, ±2 psi; 125 psi, 1 hour, max 5 psi drop; repeat until it passes; new line tied to existing tested in isolation</td><td>Gauge, repeat tests</td></tr>
</tbody></table></div>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>SP 11-428704 edit</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>“Replace the 3rd paragraph of section 20-2.01A(4)(b)(i) with: Perform pressure testing using Method B to test supply lines (1) located on the discharge side of the valve, (2) installed by trenching and backfilling, or (3) completely visible after installation.”</td><td>Those lines: Method B (full source pressure, at least 8 h upstream of a valve, 1 h downstream). Others stay Method A</td></tr>
<tr><td>“Add to the end of section 20-2.01A(4)(b)(i): Test plastic pipe supply line mains used for recycled water by method A with the testing pressure modified to 150 psi.”</td><td>Recycled main: 150 psi, 1 h, 5 psi max drop</td></tr>
<tr><td>(No change)</td><td>Main in conduit: Method A, 0.5 h, zero drop</td></tr>
</tbody></table></div>
<p><strong>Final rule:</strong> recycled plastic main Method A 150 psi 1 h · conduit Method A 0.5 h zero drop · discharge-side, trenched or visible lines Method B · all else Method A · Engineer present, 48 h notice, before backfill, business hours. Where rules overlap (a trenched recycled main), follow the more specific added sentence and confirm with a bidder question.</p>`,
  deeper: `<p>Caltrans sections run A General (summary, definitions, submittals, quality assurance), B Materials, C Construction, D Payment, as in SP 16-2.06A to 16-2.06D (temporary protection fence). Payment clauses decide where cost goes: SP 20-3.02D, “Payment for tree hole and basin work is included in the payment for plant (group K).” “Replace the 3rd paragraph” only makes sense after you count the base paragraphs yourself.</p>`,
  src: "Caltrans 2018 Standard Specifications 20-2.01A(4)(b)(i)–(iii); Special Provisions 11-428704 page 33, 20-2.01A(4)(b)(i), 20-3.02D, 16-2.06."
},

{ h: "Greenbook and the City of San Diego Whitebook",
  lead: "On City jobs the Whitebook rewrites the Greenbook and wins any conflict, and its numbers differ from Caltrans: never carry a test or period from the last job's spec.",
  body: `<ul>
<li>Greenbook is purchased; Whitebook is a free City download. Edits read “DELETE in its entirety and SUBSTITUTE with the following” and “ADD the following.”</li>
<li>Part 8: 800 Materials (topsoil, amendments, mulch, plants, pipe, valves, controllers), 801 Installation (soil prep, planting, irrigation, testing, plant establishment), 802 Native habitat.</li>
<li>Each City project adds Supplemental Special Provisions (SSP).</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Main pressure test</th><th class="num">Pressure</th><th class="num">Duration</th></tr></thead>
<tbody>
<tr><td>Caltrans 2018 SS, Method A</td><td class="num">125 psi</td><td class="num">1 h</td></tr>
<tr><td>11-428704 SP, recycled-water main</td><td class="num">150 psi</td><td class="num">1 h</td></tr>
<tr><td>Whitebook 801-5.7.2.2, pressurized mains</td><td class="num">125 psi</td><td class="num">4 h</td></tr>
<tr><td>Whitebook 801-5.7.2.2, non-pressurized laterals</td><td class="num">100 psi</td><td class="num">2 h</td></tr>
</tbody></table></div>`,
  src: "City of San Diego Whitebook 2024, Part 8, 801-5.7.2.2; Caltrans 2018 SS 20-2.01A(4)(b)(ii); SP 11-428704."
},

{ h: "CSI MasterFormat and the three-part section",
  lead: "Learn the Division 32 numbers and read Part 1 of every section in full: that's where submittals, warranty and maintenance costs sit.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Number</th><th>Section</th><th>Read for</th></tr></thead>
<tbody>
<tr><td>Div 00</td><td>Procurement and contracting</td><td>Bid forms, instructions, contract, bonds, insurance</td></tr>
<tr><td>Div 01</td><td>General requirements</td><td>Submittals 01 33 00, substitutions 01 25 00, quality, temporary facilities, closeout 01 77 00 / 01 78 00</td></tr>
<tr><td>32 80 00 / 32 84 00</td><td>Irrigation / planting irrigation</td><td>Pipe, valves, heads, controllers, testing</td></tr>
<tr><td>32 90 00</td><td>Planting</td><td>Planting general (small jobs put everything here)</td></tr>
<tr><td>32 91 13</td><td>Soil preparation</td><td>Soil tests, amendments, fine grading</td></tr>
<tr><td>32 92 00</td><td>Turf and grasses</td><td>Sod, seed, hydroseed</td></tr>
<tr><td>32 93 00</td><td>Plants</td><td>Quality, warranty</td></tr>
<tr><td>31 / 33 / 26</td><td>Earthwork / utilities / electrical</td><td>Rough grade, water service, controller power</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>Contents</th><th>Cost to find</th></tr></thead>
<tbody>
<tr><td>1 General: read fully</td><td>Summary, related sections, references, submittals, QA (quality assurance), delivery, warranty, maintenance</td><td>Submittal prep, samples, mockups, nursery inspections, warranty and maintenance length</td></tr>
<tr><td>2 Products: skim</td><td>Manufacturers, materials, “or equal,” mixes</td><td>Named brands, models, amendments, plant standards</td></tr>
<tr><td>3 Execution: read for tests and production</td><td>Preparation, installation, field quality control, cleaning, protection</td><td>Slow methods, tests, inspections, cleanup</td></tr>
</tbody></table></div>`,
  watch: `<p>“Related sections” in Part 1 pull other scope onto you: a 32 84 00 reference to 26 05 00 Common Work Results for Electrical may make controller wiring yours. Search the whole manual for “landscape,” “irrigation,” “planting,” “maintenance.”</p>`,
  src: "CSI MasterFormat (Construction Specifications Institute), csiresources.org."
},

{ h: "Spec words that move money",
  lead: "A handful of defined words decide whether you buy, install, both, or leave a cost out of the bid; check each contract's definitions section.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Word</th><th>Meaning</th><th>Price effect</th></tr></thead>
<tbody>
<tr><td>Shall / must</td><td>Required</td><td>Price it</td></tr>
<tr><td>May</td><td>Allowed</td><td>Option to save money</td></tr>
<tr><td>Furnish / install / provide</td><td>Supply / place / both</td><td>Material, labor, or both</td></tr>
<tr><td>As directed / as ordered</td><td>When the Engineer says</td><td>Often extra work; read the payment clause</td></tr>
<tr><td>Approved / accepted</td><td>After written yes</td><td>Review time, rejection risk</td></tr>
<tr><td>Included in (item)</td><td>Not paid separately</td><td>Put the cost inside that item</td></tr>
<tr><td>Change order work</td><td>Paid as a change</td><td>Leave out of the bid</td></tr>
<tr><td>Informational submittal</td><td>For the record</td><td>Paperwork, no wait</td></tr>
</tbody></table></div>`,
  ex: `<p>SP 20-3.02D: tree hole and basin “included in the payment for plant (group K)” goes inside the tree price. SP 20-10.02C(1): replacing an unsuitable existing facility to be modified “is change order work” and stays out of the bid.</p>`,
  watch: `<p>Definitions live in Division 01 or the general conditions on project manuals, and in Section 1 for Caltrans and the Whitebook.</p>`,
  src: "SP 11-428704 20-3.02D, 20-10.02C(1)."
},

{ h: "Front end: time, damages, security, goals, insurance",
  lead: "Divisions 00 and 01 and a public Notice to Bidders set contract time, liquidated damages (LD), bid security, participation goals, insurance and retention; primes pass most of it to subs.",
  body: `<p>Read: instructions to bidders and bid form, agreement and general conditions (AIA, American Institute of Architects, or ConsensusDocs on private jobs), supplementary conditions (often change retention, insurance, schedule), insurance and bonds (<a href="#m2-1">Module 2</a>), submittal and substitution procedures, temporary facilities (“provide water for construction” = your water and meter or hydrant permit), closeout. As a sub, ask for at least supplementary conditions, insurance requirements, Division 01 and the subcontract form.</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Caltrans 11-428704</th><th>City K-24-1952</th></tr></thead>
<tbody>
<tr><td>Contract time</td><td>120 working days + 250 working days plant establishment = 370</td><td>270 working days including a 90 calendar day plant establishment period (PEP)</td></tr>
<tr><td>LD</td><td>2018 SS 8-1.10: $4,000/day for total bid $1M to $2M; $950/day when only plant establishment remains</td><td>By contract value: $1,000/day under $200,001 up to $2,500/day for $1,000,001 to $2,000,000</td></tr>
<tr><td>Bid security</td><td>At least 10% of bid</td><td>Bid bond uploaded to PlanetBids; original by 5 PM one working day later (<a href="#m14-1">Module 14</a>)</td></tr>
<tr><td>Participation</td><td>DBE (disadvantaged business enterprise) goal 14%</td><td>Mandatory SLBE-ELBE (small local / emerging local business enterprise) 20.0%: 9.4% SLBE + 10.6% ELBE</td></tr>
<tr><td>Wages</td><td>State prevailing and federal rates; pay the higher</td><td>State prevailing wage (<a href="#m11-1">Module 11</a>)</td></tr>
<tr><td>Partnering</td><td>Facilitated partnering and training for total bid over $1M and 100+ working days</td><td>Not listed</td></tr>
<tr><td>Retention to subs</td><td>Per Standard Specifications</td><td>Return within 30 calendar days after you are paid for accepted work</td></tr>
</tbody></table></div>`,
  ex: `<p>11-428704 engineer's estimate $1,510,000. At a $1.2M total bid: 10 working days late × $4,000 = <strong>$40,000</strong>; 20 days late with only establishment left × $950 = <strong>$19,000</strong>. City, $750,000 contract ($500,001 to $1,000,000 band, $2,000/day): 15 days × $2,000 = <strong>$30,000</strong>. Many subs' whole profit on a job that size. GCs pass LD to the sub that caused the delay; ask how the GC counts plant establishment.</p>`,
  deeper: `<p>Caltrans 7-1.06D(2) liability, by total bid: up to $1,000,000, $1M per occurrence, $2M aggregates, $5M umbrella; over $1M to $10M, umbrella $10M. A prime may not require a small business sub to carry more than the table shows for the sub's own dollar amount. Whitebook 3-13.1: retention release 35 calendar days after the notice of completion (NOC), on request.</p>`,
  src: "SP 11-428704 Notice to Bidders (time, estimate, bid security, DBE goal, wages), 5-1.09A and 5-1.09C (partnering), 7-1.06D(2); Caltrans 2018 SS 8-1.10A; City K-24-1952 bid checklist (bid bond), SLBE-ELBE participation 7.1, contract time, 6-9 liquidated damages, prompt payment of retention; Whitebook 2024 3-13.1. Bid amounts in the LD example are made up."
},

{ h: "Named products and quoted prices",
  lead: "Sole source locks your cost, “or equal” still means price the named product until approved, and agency-quoted prices are a material starting point, not a total.",
  body: `<p>SP 20-2.06B(2)(a): controllers “must be Calsense and must have 2-way communication.” SP 20-2.06B(2)(a) and 20-2.05B list supplier quotes, before tax and delivery, “good until April 14, 2022”:</p>
<div class="tablewrap"><table>
<thead><tr><th>Equipment</th><th class="num">Qty</th><th class="num">Extended</th></tr></thead>
<tbody>
<tr><td>40-station controller package, '97B'</td><td class="num">1</td><td class="num">$9,743.66</td></tr>
<tr><td>40-station controller package, '97C', '97E', '97F'</td><td class="num">3</td><td class="num">$27,103.05</td></tr>
<tr><td>32-station controller package, '97D'</td><td class="num">1</td><td class="num">$8,496.23</td></tr>
<tr><td>40-station with Yagi antenna, '97G'</td><td class="num">1</td><td class="num">$9,692.41</td></tr>
<tr><td>Calsense FM-2 2" flow sensor, $543.25 each</td><td class="num">4</td><td class="num">$2,173.00</td></tr>
<tr><td colspan="2"><strong>Total quoted</strong> (controllers $55,035.35)</td><td class="num"><strong>$57,208.35</strong></td></tr>
</tbody></table></div>`,
  ex: `<p>Example 8% tax: $4,576.67; delivery $400; material subtotal <strong>$62,185.02</strong>, before labor, pads, conduit, antenna masts and programming. Use the real CDTFA (California Department of Tax and Fee Administration) rate for the delivery address and written delivery cost. If purchase falls after the quote date, get a current quote and escalation note (<a href="#m8-1">Module 8</a>).</p>`,
  deeper: `<p>Public Contract Code §3400 generally bars public agencies from brand-limited specs unless “or equal” follows, but allows brand-only when the agency makes a finding described in the bid documents: field test, matching others in use on a public improvement, sole availability, or emergency. Check current text on leginfo.legislature.ca.gov.</p>`,
  src: "SP 11-428704 20-2.05B and 20-2.06B(2)(a), quoted price tables; Cal. Public Contract Code §3400. Tax rate and delivery cost in the example are made up."
},

{ h: "“Or equal” and substitutions",
  lead: "Bid the specified product; a substitute enters your price only after written approval, and on City work a pre-bid request not answered 3 working days before bid is denied.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>Caltrans 2018 SS 6-1.05</th><th>Whitebook 2024 4-6</th><th>Private (Div 01, often 01 25 00)</th></tr></thead>
<tbody>
<tr><td>Brand name means</td><td>“Establishes a quality standard and is not intended to limit competition”</td><td>“Intended to establish the type, function, and quality required”</td><td>Basis of design; read substitution section</td></tr>
<tr><td>When</td><td>After award; allow 30 days review; no delay</td><td>Before bid (answer by 3 working days before due date or deemed denied) or after award</td><td>Short window before bid or right after award</td></tr>
<tr><td>Send</td><td>Proof of no delay, equal or better quality and suitability</td><td>Design changes, license fees, every variation, local service within 50 miles with 24-hour repair, performance certifications</td><td>Substitution form, data, comparison</td></tr>
<tr><td>You bid</td><td>Specified unless authorized</td><td>“The Bid submittal shall be based on the material and equipment specified by name”</td><td>Specified unless approved by addendum</td></tr>
<tr><td>If rejected</td><td>Use specified</td><td>No extra time or money</td><td>Use specified</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Request template:</strong> project, number, spec section and paragraph · specified make, model · proposed make, model, supplier, lead time · every difference in a two-column table (size, material, flow, pressure rating, warranty, service, price) · effect on design and other trades · local service and warranty · reason · cut sheets of both, samples if asked. Send through the required channel (bidder inquiry, RFI or substitution form) to the named contact. Use the agency form if one exists.</p>`,
  deeper: `<p>Whitebook 4-6: no guaranteed review time after award, no action is not acceptance, burden of proof is yours, and the Engineer may request more data at your expense. Whitebook 3-8.1: where the City has an Approved Materials List (AML), use products on it.</p>`,
  watch: `<p>“Equal” is decided by the reviewer, not you or your supplier. An unapproved substitute in your price means buying the specified product at your cost after award.</p>`,
  src: "Caltrans 2018 Standard Specifications 6-1.05; City of San Diego Whitebook 2024, 3-8.1 and 4-6."
},

{ h: "Soil tests and amendments",
  lead: "Amendment rates often depend on a lab test you won't have at bid time, so price a stated rate and say so in the proposal.",
  body: `<ul>
<li><strong>Agronomic soil test:</strong> independent lab, amendment recommendations (organic matter, gypsum, fertilizer, pH). Check who pays for the first and later tests.</li>
<li><strong>Rates:</strong> in the spec (CY per 1,000 SF) or “per the soils report.”</li>
<li><strong>Imported topsoil:</strong> class or test before shipping and after placement.</li>
</ul>`,
  ex: `<p><strong>Whitebook 800-1.1.2, Class “A” topsoil:</strong> source, sample and current lab results within 15 working days of the notice to proceed (NTP); second test series 15 working days before placement; tests after placement; failing topsoil “shall not be shipped to the project site.” <strong>11-428704:</strong> compost at 200 CY per acre (PL-1 sequence of work); SP 21-2.02K sets compost limits by lab method (pH 6 to 8.5, soluble salts, organic matter, maturity, pathogens, contaminants), so your supplier must furnish passing results.</p>`,
  watch: `<p>“Per soils report” with no report: state the rate you priced and that report-driven changes are a change (<a href="#m13-1">Module 13</a>).</p>`,
  src: "City of San Diego Whitebook 2024, 800-1.1.2; Plans PL-1 and SP 21-2.02K, contract 11-428704."
},

{ h: "Plant quality and inspection",
  lead: "Inspectors can destroy sample plants and reject whole lots, so order extras and lock the nursery in writing early.",
  body: `<ul>
<li>True to name, healthy, not root-bound, inspected nurseries; ANSI Z60.1 (American Standard for Nursery Stock) is common in private specs.</li>
<li>Nursery inspection (specimen trees, private) or site inspection; root checks; tags; delivery notice; nursery invoices as submittals.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Spec</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>Caltrans SS 20-3.01A(4)</td><td>Root inspection of “not less than 2 plants, nor more than 2 percent of the total number of plants of each species or variety”; a failing sample rejects “the entire lot represented”</td></tr>
<tr><td>Caltrans SS 20-3.01B(1); 20-3.01A(3)(b)</td><td>Notify 10 days before shipping; vendor statement (order accepted) 60 days before planting</td></tr>
<tr><td>City K-24-1952</td><td>Grown in container 6 months to 2 years; color photos of all palms 15 days before delivery; larger plants only with approval and “no change in Contract Price”; rejected plants replaced within one week of written notice</td></tr>
</tbody></table></div>`,
  ex: `<p>450 plants of one species: max inspected 2% × 450 = 9, min 2. Order about 9 extra so 450 still go in the ground.</p>`,
  watch: `<p>Market-short plants at planting time can only be substituted with approval, which takes weeks.</p>`,
  src: "Caltrans 2018 Standard Specifications 20-3.01A(3)(b), 20-3.01A(4), 20-3.01B(1); City K-24-1952 special provisions 800-1.4.1 items 8–11."
},

{ h: "Submittals and the submittal register",
  lead: "Build the submittal register while you bid: it shows the office time, fees and early ordering you must price.",
  body: `<p>Kinds: product data (cut sheets) · shop drawings (controller wiring diagrams) · samples (mulch, decomposed granite, rock, topsoil, wire and splices) · test reports and certificates (soil, compost, sod) · vendor statements and invoices · schedules and plans (watering, pest control) · closeout (as-builts, O&amp;M, operation and maintenance, manuals, warranties).</p>
<div class="tablewrap"><table>
<thead><tr><th>Submittal</th><th>Section</th><th>Deadline</th><th>Type</th></tr></thead>
<tbody>
<tr><td>PCA (licensed pest control adviser) recommendation</td><td>SS 20-1.01C</td><td>15 days before any pesticide</td><td>Review</td></tr>
<tr><td>Report of Chemical Spray Operations; pesticide label</td><td>SS 20-1.01C</td><td>Weekly; before mixing</td><td>Informational</td></tr>
<tr><td>Electrical shop drawings, irrigation</td><td>SS 20-2.01A(3)(a)</td><td>30 days before installation</td><td>Review</td></tr>
<tr><td>Manufacturer's instructions (pipe, heads, valves, backflow, sensors)</td><td>SS 20-2.01A(3)(b)</td><td>15 days before installing</td><td>Informational</td></tr>
<tr><td>Controller modification instructions</td><td>SP 20-10.02A(3)</td><td>15 days before installing</td><td>Informational</td></tr>
<tr><td>Vendor statement, plant order accepted</td><td>SS 20-3.01A(3)(b)</td><td>60 days before planting</td><td>Review</td></tr>
<tr><td>Notice of plant shipment</td><td>SS 20-3.01B(1)</td><td>10 days before shipping</td><td>Notice</td></tr>
<tr><td>Seasonal watering schedules (4)</td><td>SP 20-4.01C(1)</td><td>First within 10 days after PEP starts; then 5 days before each season</td><td>Review</td></tr>
<tr><td>Landscape and irrigation samples, tests</td><td>Whitebook (WB) 3-8.4</td><td>15 working days after NTP</td><td>Review</td></tr>
</tbody></table></div>
<p class="small">Register template: add date sent, date returned, status (approved, approved as noted, revise and resubmit, rejected), responsible person. Hand it to the project manager at award (<a href="#m16-1">Module 16</a>).</p>`,
  watch: `<p>“Revise and resubmit” restarts the review clock; schedule one resubmittal for anything unusual. Copy counts are real cost: WB 3-8.2 wants six copies plus one reproducible of working drawings; 3-8.6 wants one electronic and three bound copies of warranty and O&amp;M instructions.</p>`,
  src: "Caltrans 2018 SS 20-1.01C, 20-2.01A(3), 20-3.01A(3)(b), 20-3.01B(1); SP 11-428704 20-4.01C(1), 20-10.02A(3); Whitebook 2024 3-8.2, 3-8.4, 3-8.6."
},

{ h: "Schedule rules: counting back from planting",
  lead: "Spec deadlines run backward from events, and one sentence like the 21-day weed germination rule can move your schedule three weeks.",
  body: `<p><strong>SP 20-1.03E (11-428704):</strong> “Do not perform planting work in weed germination areas for a period of 21 days after irrigation systems have been installed. For weed germination areas, keep the soil sufficiently moist to germinate weeds. Weeds that germinate must be controlled by the use of pesticides.” Herbicides from the approved list in SP 20-1.02C. PL-1 sequence: irrigation → weed germination → compost → planting → wood mulch.</p>
<div class="tablewrap"><table>
<thead><tr><th>Deadline (planting June 1, example)</th><th>Rule</th><th class="num">Date</th></tr></thead>
<tbody>
<tr><td>Vendor statement, including extra sample plants</td><td>60 days before planting</td><td class="num">April 2</td></tr>
<tr><td>Irrigation done in germination areas</td><td>21 days before planting</td><td class="num">May 11</td></tr>
<tr><td>PCA recommendation, spray May 25</td><td>15 days before spraying</td><td class="num">May 10</td></tr>
<tr><td>Shipping notice, ship May 29</td><td>10 days before shipping</td><td class="num">May 19</td></tr>
</tbody></table></div>`,
  ex: `<p>Germination cost (practice rates): 2-person spray crew $120/h × 2 days × 8 h = <strong>$1,920</strong>, plus herbicide, water for 21 days with nothing planted, and moisture-check visits.</p>`,
  watch: `<p>A late award can make the 60-day vendor statement impossible; raise it early and document delay. Search every spec for “days,” “before,” “after,” “not until,” “notify”: each hit is a schedule rule.</p>`,
  src: "Caltrans 2018 SS 20-1.01C, 20-3.01A(3)(b), 20-3.01B(1); SP 11-428704 20-1.02C, 20-1.03E; Plans PL-1. Dates and rates are an example."
},

{ h: "Tests and inspection holds",
  lead: "Every hold point is crew time: price the wait, the trip and a retest, using the test rules of this job's spec family.",
  body: `<p><strong>Caltrans SS 20-1.01D(2) progress inspections:</strong> after marking plant locations · before cultivating · before pressure testing supply-side pipe · before testing low-voltage control and neutral conductors · during functional tests (before planting, after planting, before establishment, 20-2.01A(4)(d)) · before planting · before planting completion · before establishment starts · monthly during establishment. Plus final irrigation check and final establishment inspection 20 to 30 days before acceptance (20-2.01A(4)(e), 20-4.01D).</p>
<p><strong>Whitebook:</strong> 24 hours' notice before pressure tests (801-5.7.2.2); coverage test (801-5.7.3); pre-maintenance inspection before the PEP (801-6).</p>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>City job, practice numbers</th><th>Math</th><th class="num">Hours</th></tr></thead>
<tbody>
<tr><td>Main tests, 4 sections (1 h setup + 4 h test)</td><td>4 × 5</td><td class="num">20</td></tr>
<tr><td>Lateral tests, 6 sections (0.5 h + 2 h)</td><td>6 × 2.5</td><td class="num">15</td></tr>
<tr><td>One main retest</td><td>1 × 5</td><td class="num">5</td></tr>
<tr><td>Coverage test and adjustments</td><td>allowance</td><td class="num">8</td></tr>
<tr><td colspan="2"><strong>Total × $75/h = $3,600</strong></td><td class="num"><strong>48</strong></td></tr>
</tbody></table></div>`,
  watch: `<p>If the crew can't move to other work while the gauge sits, the hold costs the whole crew rate. Use your own job history (<a href="#m9-1">Module 9</a>).</p>`,
  src: "Caltrans 2018 SS 20-1.01D(2), 20-2.01A(4)(d)–(e), 20-4.01D; Whitebook 2024 801-5.7.2.2, 801-5.7.3, 801-6. Section counts, hours and rates in the example are made up."
},

{ h: "Caltrans plant establishment: Type 1 vs. Type 2",
  lead: "Type 1 starts after all other work, Type 2 after planting; both count working days, and uncredited days extend your maintenance at your cost.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>Type 1</th><th>Type 2</th></tr></thead>
<tbody>
<tr><td>Clock starts</td><td>All work complete except establishment (and items running to acceptance)</td><td>Planting complete, even if other work continues</td></tr>
<tr><td>Effect</td><td>Plants may wait weeks before the clock; you maintain anyway</td><td>Overlaps construction; acceptance waits for the required days</td></tr>
<tr><td>11-428704</td><td>Type 1: 120 working days of work, then 250 working days</td><td></td></tr>
</tbody></table></div>
<ul>
<li><strong>Working day</strong> (2018 SS Section 1): any day except Saturdays and holidays (every Sunday is a holiday) and days weather or listed events stop the controlling work. 250 ≈ one calendar year (260 weekdays less about a dozen holidays).</li>
<li><strong>Credit (20-4.01A):</strong> days with no work required count; days without adequate establishment work don't; days of unauthorized manual irrigation don't.</li>
<li><strong>11-428704 SP:</strong> neat site “including areas not visible to the public”; four seasonal watering schedules; controllers in automatic mode using “external weather, learned flow, and other system data inputs”; fertilizer first week of April, July and September.</li>
</ul>`,
  ex: `<p>The six bidders on 11-428704 priced plant establishment from $10,000 to $300,000 for the same 250 working days (<a href="#m15-1">Module 15</a>). The spread is how each read this section.</p>`,
  src: "Caltrans 2018 SS Section 1 (working day, holiday), 20-4.01A, 20-4.01B; SP 11-428704 Notice to Bidders, 20-4.01A, 20-4.01C(1), 20-4.03A, 20-4.03C, 20-4.03G."
},

{ h: "City establishment and native habitat",
  lead: "City periods are short and in calendar days, but survival is 100%, weeds 0%, and maintenance continues to Final Acceptance however late that is.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Whitebook work type</th><th>PEP</th><th>After</th></tr></thead>
<tbody>
<tr><td>Permanently irrigated plants, sod (801-6)</td><td>90 calendar days</td><td>Maintain until Final Acceptance if other work isn't done</td></tr>
<tr><td>Seed or stolonized lawn (801-6)</td><td>120 calendar days</td><td>Same</td></tr>
<tr><td>Erosion control, re-vegetation, restoration (802)</td><td>120 calendar days</td><td>M&amp;M (maintenance and monitoring): 25 months re-vegetation or erosion control, 60 months mitigation, unless specified</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>801-6 item</th><th>Rule</th><th>Cost</th></tr></thead>
<tbody>
<tr><td>1</td><td>Maintain areas as completed and during PEP</td><td>Maintenance starts before the PEP</td></tr>
<tr><td>3</td><td>Pruning designated at PEP start</td><td>Allowance</td></tr>
<tr><td>4</td><td>Pre-maintenance inspection; punchlist done before PEP starts</td><td>Punchlist labor before the clock</td></tr>
<tr><td>7</td><td>Erosion free, 100% container plant survival, 0% weed and invasive cover, BMPs (best management practices) in good condition</td><td>Replacement allowance; weeding to zero</td></tr>
<tr><td>8</td><td>PEP extended for added or corrective work</td><td>Unpaid extra weeks</td></tr>
<tr><td>9</td><td>Replace unhealthy plants within 2 weeks of notice</td><td>Fast-delivering nursery</td></tr>
<tr><td>10, 13</td><td>Keep maintaining to Final Acceptance</td><td>Open-ended if the GC runs late</td></tr>
<tr><td>12</td><td>Weekly: irrigation repair, cleanup, pruning, mowing, weeds, pests, replacement, mulch; fertilize every 4 weeks</td><td>Crew hours per visit, materials</td></tr>
</tbody></table></div>`,
  ex: `<p>K-24-1952: “The 90 Calendar Day Plant Establishment Period is included in the stipulated Contract Time.” 90-day PEP ≈ 13 weekly visits; practice rate 6 crew-h × $70 = $420/visit; 13 × $420 = <strong>$5,460</strong>, plus 3 fertilizer applications, replacements and water if yours.</p>`,
  watch: `<p>Price 90 days and add a monthly rate for maintenance beyond it that isn't your delay. Native habitat (802) adds a project biologist, re-vegetation success criteria and 25 to 60 months of monitoring: a separate estimate.</p>`,
  src: "City of San Diego Whitebook 2024, 801-6 items 1–13 and 802 definitions (PEP, M&M period); City K-24-1952 section 6-1.1 item 4 and contract time. Hours and rates in the example are made up."
},

{ h: "Plant replacement and warranty",
  lead: "Late Caltrans replacements upsize, the City warranty runs a year past acceptance with long latent-defect exposure, and both belong in the bid as priced reserves.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Caltrans SS 20-4.03F</th><th>Through day 125</th><th>Day 126 to 190</th><th>After 190</th></tr></thead>
<tbody>
<tr><td>Pot, liner, plug, seedling</td><td>Same size</td><td colspan="2">No. 1</td></tr>
<tr><td>No. 1</td><td>Same size</td><td colspan="2">No. 5</td></tr>
<tr><td>No. 5</td><td>Same size</td><td colspan="2">No. 15</td></tr>
<tr><td>Groundcover at 12" / 36"</td><td>Same spacing</td><td>9" / 24"</td><td>6" / 18"</td></tr>
</tbody></table></div>
<ul>
<li>Caltrans 5-1.39C(1): replacing plants damaged below 32°F, or by the Department or its supplier cutting water, is change order work.</li>
<li>Whitebook 801-6: within 2 weeks; K-24-1952: rejected plants within one week.</li>
<li><strong>Whitebook 3-13.3 warranty:</strong> 1 year from acceptance (or earlier beneficial use); latent defects 10 years, patent 4; manufacturer warranties start at in-service on written direction; all warranties assigned to the City before acceptance; unrepaired defects fixed by the City at your cost, surety liable.</li>
<li><strong>Private:</strong> 32 93 00 and 32 84 00 Part 1; plant and irrigation warranties often differ; check whether replacements restart their own warranty.</li>
</ul>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Practice case</th><th>Math</th><th class="num">Cost</th></tr></thead>
<tbody>
<tr><td>30 #1 die after day 125 (#5 $28 + $12 labor)</td><td>30 × 40</td><td class="num">$1,200 (vs. $630 early)</td></tr>
<tr><td>Warranty: 2% of 600 shrubs at $45, plus 2 trips at $250</td><td>12 × 45 + 2 × 250</td><td class="num">$1,040 reserve</td></tr>
</tbody></table></div>`,
  watch: `<p>Exclusions for vandalism, other trades, owner neglect and no water after turnover apply only if written; if the contract is silent, put them in your proposal (<a href="#m13-1">Module 13</a>).</p>`,
  src: "Caltrans 2018 SS 20-4.03F, 5-1.39C(1); Whitebook 2024 801-6, 3-13.3; City K-24-1952 special provisions 800-1.4.1 item 11. Prices and failure rate in the examples are made up."
},

{ h: "Closeout, MWELO and recycled water",
  lead: "The last 5% of the job is tests, records, training, spare parts and water-rule paperwork, each listed in the spec and each a cost.",
  body: `<ul>
<li><strong>Tests:</strong> pressure, coverage, backflow certification, pre-maintenance and final inspections.</li>
<li><strong>Record drawings:</strong> Whitebook 3-7.3, red-lines kept current on a full-size set; sometimes a CAD (computer-aided design) redraw.</li>
<li><strong>Programming and training:</strong> watering schedules, laminated zone charts, central control; Caltrans 20-4.01D training “no more than 30 days before completion of the plant establishment period.”</li>
<li><strong>Extra stock, Whitebook 800-2.5:</strong> “Five (5) irrigation heads with nozzles of each type used for every 100 irrigation heads or portions thereof,” plus 2 sets of special tools per head and valve type, valve keys, 2 key sets per controller.</li>
<li><strong>MWELO</strong> (Model Water Efficient Landscape Ordinance, California Code of Regulations Title 23): new landscapes ≥500 SF and rehabilitated ≥2,500 SF needing permit, plan check or design review; local ordinances must be at least as effective. Non-residential ETAF (evapotranspiration adjustment factor) ≤0.45 (residential 0.55). Certificate of Completion includes an irrigation audit and proof soil report recommendations were done; the spec may assign either to you.</li>
<li><strong>Recycled water:</strong> purple parts, signs and tape, cross-connection testing, no overspray or runoff; enforced by San Diego County DEH (Department of Environmental Health) and the water agency. 11-428704: ISS-1 note 3, ID-6 bilingual sign and tape, 150 psi main test.</li>
</ul>`,
  ex: `<p>Extra stock on 340 sprays and 85 rotors: 340 ÷ 100 = 3.4 → 4 portions × 5 = <strong>20 sprays</strong>; 85 = 1 portion × 5 = <strong>5 rotors</strong>.</p>`,
  watch: `<p>MWELO was amended in 2025 and section numbers changed. Check current state text and the local ordinance on each job.</p>`,
  src: "City of San Diego Whitebook 2024, 800-2.5, 3-7.3; Caltrans 2018 SS 20-4.01D; California Code of Regulations, Title 23, Division 2, Chapter 2.7 (MWELO), Department of Water Resources; ISS-1 and ID-6, contract 11-428704."
},

{ h: "AI-assisted spec review",
  lead: "AI does a fast first pass and also misses and invents requirements; run it in narrow passes and verify every row on the page in a check log.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Pass</th><th>Ask for</th></tr></thead>
<tbody>
<tr><td>1 Map</td><td>Every section on landscape, irrigation, planting, establishment, erosion control, water, irrigation electrical, with pages; check against the table of contents</td></tr>
<tr><td>2 Requirements</td><td>One section at a time: requirement, section, exact quote, cost type (material, labor, test, submittal, schedule); flag SP edits to SS</td></tr>
<tr><td>3 Days</td><td>Every sentence with days, hours or a deadline (feeds the register)</td></tr>
<tr><td>4 Money words</td><td>“Included in,” “no additional payment,” “change order work,” “at your expense,” “not paid separately”</td></tr>
<tr><td>5 Layers (Caltrans)</td><td>For each Add/Replace/Delete: base text and combined rule; compare to the books yourself</td></tr>
</tbody></table></div>
<p>Pass 3 on 11-428704 must find at least: 21 days (20-1.03E), 10 and 5 days (20-4.01C(1)), 15 days (20-10.02A(3)), 15 working days' notice before vegetation-disturbing work for bird protection (SP 14-6.03A). Missing any means it missed others.</p>`,
  exLabel: "Check log (typical errors, not quotes from a specific tool)",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>AI said</th><th>Checked</th><th>Result</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Recycled main 125 psi, 1 h</td><td>SP 20-2.01A(4)(b)(i), p. 33</td><td>Wrong</td><td>150 psi</td></tr>
<tr><td>Engineer inspects 2 plants per species</td><td>SS 20-3.01A(4)</td><td>Partly</td><td>Min 2, max 2% of each species</td></tr>
<tr><td>Establishment 250 working days, Type 2</td><td>SP 20-4.01A</td><td>Wrong</td><td>Type 1</td></tr>
<tr><td>Controllers: Calsense or equal</td><td>SP 20-2.06B(2)(a)</td><td>Wrong</td><td>“Must be Calsense”</td></tr>
<tr><td>Weed germination 21 days after irrigation</td><td>SP 20-1.03E</td><td>Right</td><td></td></tr>
<tr><td>(nothing on PCA)</td><td>SS 20-1.01C</td><td>Missing</td><td>Recommendation 15 days before pesticide</td></tr>
</tbody></table></div>`,
  watch: `<p>The dangerous errors sound right: base SS number instead of the SP's, “or equal” added to a sole-source item, Type or class swapped. Don't load confidential private project manuals into a tool your company and the GC or owner haven't approved; public agency specs are public.</p>`,
  src: "SP 11-428704 14-6.03A, 20-1.03E, 20-2.01A(4)(b)(i), 20-2.06B(2)(a), 20-4.01A, 20-4.01C(1), 20-10.02A(3); Caltrans 2018 SS 20-1.01C, 20-3.01A(4)."
},

{ h: "Spec cost log template",
  lead: "Reduce the spec book to one row per priced requirement, quoted by section; a row you can't complete is an RFI or a proposal clarification.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Topic</th><th>Section</th><th>Requirement (short quote)</th><th>Cost type</th><th>Priced how</th><th>Question</th></tr></thead>
<tbody>
<tr><td>Pressure test</td><td>SP 20-2.01A(4)(b)(i)</td><td>Recycled main, Method A, 150 psi</td><td>Labor, test</td><td>Hours per section + retest</td><td></td></tr>
<tr><td>Controllers</td><td>SP 20-2.06B(2)(a)</td><td>“Must be Calsense,” quoted prices</td><td>Material</td><td>Quote + tax + delivery</td><td>Quote valid after April 14, 2022?</td></tr>
<tr><td>Valve tags</td><td>SP 20-2.01B(7)</td><td>Polyurethane tag, stamped both sides, 1" letters</td><td>Material, labor</td><td>Per valve</td><td></td></tr>
<tr><td>Weed germination</td><td>SP 20-1.03E</td><td>No planting for 21 days after irrigation</td><td>Schedule, labor</td><td>Water, spray, 3-week gap</td><td></td></tr>
<tr><td>Plant establishment</td><td>SP 20-4.01A</td><td>Type 1, 250 working days</td><td>Labor, material</td><td>Visits × cost, fertilizer 3×/yr</td><td>Water cost by whom?</td></tr>
<tr><td>Tree holes</td><td>SP 20-3.02D</td><td>Included in plant (group K)</td><td>Payment</td><td>Inside tree price</td><td></td></tr>
</tbody></table></div>`,
  watch: `<p>“Testing: normal” is useless when the GC asks why you're higher than the next bid. Quote the section.</p>`,
  src: "SP 11-428704 20-1.03E, 20-2.01A(4)(b)(i), 20-2.01B(7), 20-2.06B(2)(a), 20-3.02D, 20-4.01A."
},

{ h: "Mistakes that cost money",
  lead: "Spec losses come from reading one layer, reading from memory, or staying silent about an assumption.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake or situation</th><th>Cost</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>SP read without the SS</td><td>Base rule missed</td><td>Both open side by side</td></tr>
<tr><td>Last job's spec from memory</td><td>Wrong pressure, period, warranty</td><td>Read each job fresh</td></tr>
<tr><td>Division 00/01 skipped</td><td>Insurance, retention, LD, water missed</td><td>Front-end check every bid</td></tr>
<tr><td>Unapproved “equal” priced</td><td>Buy specified product after award</td><td>Named product until written approval</td></tr>
<tr><td>“Included in” ignored</td><td>Free work or double price</td><td>Search payment words</td></tr>
<tr><td>Holds and retests unpriced</td><td>Crew hours lost</td><td>Hold time per inspection</td></tr>
<tr><td>Establishment assumed to end on time</td><td>Unpaid weeks</td><td>Read extension and “until Final Acceptance”; add monthly rate</td></tr>
<tr><td>AI output unchecked</td><td>Wrong numbers</td><td>Check log every row</td></tr>
<tr><td>Specified controller 16-week lead time</td><td>Delay, LD</td><td>Written lead time; pre-bid substitution if allowed; else order at award and state it</td></tr>
<tr><td>No warranty article in 32 93 00</td><td>Unbounded warranty</td><td>Search Div 01 and general conditions; else state your warranty</td></tr>
</tbody></table></div>`,
  watch: `<p>Spec review takes hours on a big job; put it on the bid calendar the day you decide to bid (<a href="#m3-1">Module 3</a>).</p>`
},

{ t: "scorer", id: "speccheck", h: "Reusable spec checklist",
  lead: "Run on every bid. 2 = found and priced, 1 = found but unclear (write an RFI or clarification), 0 = not checked. Saved in this browser.",
  items: [
    ["Spec family and edition", "Caltrans, Greenbook and supplement, or project manual; which edition and date"],
    ["Order of precedence", "Which document governs; any “better quality governs” clause"],
    ["Products and brands", "Sole-source items, “or equal” rules, substitution deadlines, quoted prices"],
    ["Submittals", "What, how many, how early; plant lists and vendor statements"],
    ["Soil testing and amendments", "Who tests, when, rates, imported soil, compost quality"],
    ["Plant quality and inspection", "Nursery or site inspection, root checks, tags, notice before delivery"],
    ["Testing and inspections", "Pressure test pressure and duration, coverage tests, backflow certification"],
    ["Establishment and warranty", "Length, start rule, success criteria, replacement time, extension risk"],
    ["Closeout", "As-builts, controller charts and programming, training, extra stock, MWELO paperwork"],
    ["Payment rules", "What's included in other items, what's not paid separately, lump sum vs unit"]
  ],
  bands: [
    [17, "Ready to price", "You've found and priced the spec costs. Keep the notes with the estimate."],
    [11, "Gaps to close", "Write RFIs or proposal clarifications for every line scored 1."],
    [0, "Keep reading", "Too many unknowns. Finish the spec review before pricing."]
  ]
},

{ t: "terms", h: "Words to know",
  lead: "Module-specific terms. Everything else: <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Project manual", "Bid forms, contract terms and technical specs for a private or building project."],
    ["Order of precedence", "Contract rule for which document wins a conflict."],
    ["Standard Specifications (SS)", "Agency base spec book (Caltrans 2018 edition)."],
    ["Revised Standard Specifications (RSS)", "Caltrans statewide updates to the SS."],
    ["Special Provisions (SP)", "Job rules written as edits to the SS."],
    ["Greenbook / Whitebook", "Southern California public works standard / City of San Diego supplement that governs over it."],
    ["SSP", "Supplemental Special Provisions on a City contract."],
    ["Three-part format", "CSI section: Part 1 General, 2 Products, 3 Execution."],
    ["Front end", "Divisions 00 and 01: bid forms, contract, conditions, general requirements."],
    ["Supplementary conditions", "Project changes to the general conditions."],
    ["Furnish / install / provide", "Supply / place / both."],
    ["Included in", "Paid inside another item."],
    ["Change order work", "Paid by change, not in your bid."],
    ["Sole source / or equal", "One product only / approved equal allowed."],
    ["AML", "City of San Diego Approved Materials List."],
    ["Submittal register", "Table of every submittal, deadline and status."],
    ["Vendor statement", "Nursery confirmation that your plant order was accepted."],
    ["Hold point", "Step where work stops until inspected."],
    ["PCA", "Licensed pest control adviser who writes pesticide recommendations."],
    ["PEP", "Plant establishment period."],
    ["Type 1 / Type 2", "Caltrans establishment starting after all work / after planting."],
    ["Working day", "Caltrans: not Saturday, holiday (incl. Sunday) or a day controlling work is stopped by listed causes."],
    ["M&M period", "City native habitat maintenance and monitoring, 25 or 60 months."],
    ["Latent / patent defect", "Hidden (10-year City exposure) / visible (4-year)."],
    ["Liquidated damages (LD)", "Set daily charge for finishing late."]
  ]
},

{ t: "quiz", id: "m5", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "On 11-428704 a plan note says “test main per Standard Specifications.” The SP sets 150 psi for recycled-water mains. What test do you price for a trenched plastic recycled-water main?", a: ["125 psi, 1 hour", "150 psi, 1 hour, and confirm by bidder question", "Method B only"], c: 1, why: "SP ranks above plans (5-1.02), and the added sentence specifically covers recycled-water mains. Overlap with the Method B paragraph is worth a short question." },
    { q: "City job: plan note says 60-day maintenance; Whitebook 801-6 says 90 days unless the Contract Documents specify otherwise. No answer to your RFI by bid day. Best move?", a: ["Price 60 days silently", "Price 90 days and state the assumption in the proposal", "Price 120 days"], c: 1, why: "Plans rank above the Whitebook, but the cost gap is large. Without an answer, price the longer period and state it." },
    { q: "A Caltrans job with a $1.2M total bid finishes 10 working days late on the main work, then 20 days late during plant establishment only. Total LD?", a: ["$59,000", "$120,000", "$40,000"], c: 0, why: "10 × $4,000 = $40,000 plus 20 × $950 = $19,000 = $59,000 (2018 SS 8-1.10A)." },
    { q: "The SP lists Calsense quotes totaling $57,208.35 before tax and delivery. At an 8% example tax and $400 delivery, what is the material subtotal?", a: ["$57,608.35", "$61,785.02", "$62,185.02"], c: 2, why: "57,208.35 × 1.08 = 61,785.02, plus 400 = 62,185.02." },
    { q: "Under Caltrans 20-3.01A(4), how many of 600 plants of one species may be root-inspected at most?", a: ["2", "12", "60"], c: 1, why: "Not more than 2% of each species: 600 × 0.02 = 12." },
    { q: "A Whitebook job has 230 spray heads of one type and 60 rotors. Extra heads to turn over?", a: ["15 sprays, 5 rotors", "10 sprays, 0 rotors", "12 sprays, 3 rotors"], c: 0, why: "5 per 100 or portion: 230 = 3 portions → 15; 60 = 1 portion → 5." },
    { q: "On a Caltrans job a #5 plant dies on establishment working day 140. Replacement size?", a: ["#5", "#15", "#1"], c: 1, why: "20-4.03F: after day 125, No. 5 is replaced with No. 15." },
    { q: "Planting is set for June 1 on a Caltrans job with weed germination areas. Latest date irrigation must be complete in those areas, and the vendor statement due date?", a: ["May 11 and April 2", "May 21 and May 1", "May 11 and May 1"], c: 0, why: "SP 20-1.03E: 21 days before June 1 = May 11. SS 20-3.01A(3)(b): 60 days before = April 2." },
    { q: "On a City job you request a different valve brand before bid. The Engineer doesn't answer. What do you bid?", a: ["Either brand", "The named brand: the request is deemed denied", "The cheaper brand with a note"], c: 1, why: "Whitebook 4-6: no response at least 3 working days before bid = denied; bid what's specified by name." },
    { q: "SP 20-10.02C(1) says replacing an unsuitable existing facility to be modified “is change order work.” How do you treat it?", a: ["Include an allowance in the bid", "Leave it out of the bid; it's paid as a change", "Include it in the controller item"], c: 1, why: "Change order work is paid by change, not in your bid price." }
  ]
},

{ t: "practice", id: "m5", h: "Practice assignments",
  lead: "Real spec books. Keep your notes for Modules 6, 7 and 15.",
  items: [
    { h: "Read Caltrans Section 20", hrs: 0.75, d: "<p>Download the 2018 Standard Specifications from <a href=\"https://dot.ca.gov/programs/design/2018-ccs-standard-plans-and-standard-specifications\" target=\"_blank\" rel=\"noopener\">Caltrans</a>. Read 5-1.02, 20-2.01A, 20-3.01A, 20-4.01 and 20-4.03F. Log five cost requirements with section numbers.</p>" },
    { h: "Map the SP layers on 11-428704", hrs: 0.75, d: "<p>From <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>, for pressure testing, flow sensors, controllers, plant establishment and compost: SS section, SP action (add, replace, delete), final rule.</p>" },
    { h: "Whitebook navigation", hrs: 0.75, d: "<p>Download the current <a href=\"https://www.sandiego.gov/ecp/edocref/whitebook-san-diego-supplement-greenbook\" target=\"_blank\" rel=\"noopener\">Whitebook</a>. Summarize 3-7.2, 4-6, 800-1.1.2, 800-2.5, 801-5.7.2.2, 801-5.7.3 and 801-6, each with its cost effect.</p>" },
    { h: "Private Division 32 section and checklist", hrs: 1, d: "<p>From a GC invitation or school or college bid, read 32 84 00 or 32 93 00 fully. Mark every price item in Parts 1 to 3 (warranty, maintenance, brands, tests), score it on the spec checklist, and write the RFI or clarification for every line scored 1.</p>" },
    { h: "AI pass and check log", hrs: 0.5, d: "<p>Run passes 2 and 3 on the 11-428704 SP Section 20. Verify every row on the page in a check log; count right, wrong and missing.</p>" },
    { h: "Submittal register and count-back", hrs: 0.75, d: "<p>From the 11-428704 SP and 2018 SS Section 20, build a register of at least 12 rows (submittal, section, deadline, type, responsible). Pick a planting date and put every deadline on a calendar.</p>" },
    { h: "Front-end cost list", hrs: 0.5, d: "<p>From the 11-428704 Notice to Bidders and SP, list working days, LD for a bid amount you choose, bid security, DBE goal, wages, partnering and insurance limits. Repeat for a City package from <a href=\"https://www.sandiego.gov/purchasing/bids-contracts\" target=\"_blank\" rel=\"noopener\">the City's bid page</a>.</p>" },
    { h: "Establishment and warranty comparison", hrs: 0.75, d: "<p>Compare 11-428704 (Type 1, 250 working days), a Whitebook 801-6 job and, if available, a private 32 93 00: start rule, length, success criteria, replacement rules, extension risk, warranty, visit count and cost with your own crew rates.</p>" }
  ]
},

{ h: "Module 5 summary",
  lead: "Identify the spec family and edition, resolve conflicts by precedence and a pre-bid question, and turn every requirement into a quoted, priced row.",
  body: `<ul>
<li>Precedence: Caltrans SP over plans over SS; City permits down to Greenbook; details over general, written over scaled.</li>
<li>Caltrans SP edits the SS: read both and write the final rule. Cite every requirement by section.</li>
<li>Whitebook rules differ from Caltrans (mains 125 psi for 4 h vs. 1 h); never copy the last job.</li>
<li>Read Part 1 of every Division 32 section and the front end: time, LD, bid security, goals, insurance, retention.</li>
<li>Price changers: sole source and substitution rules, soil tests, plant inspection, submittals and count-back dates, holds and retests, establishment type and length, replacement upsizing, warranty, closeout and MWELO.</li>
<li>AI in narrow passes, verified in a check log; run the checklist on every bid.</li>
</ul>
<p><strong>Next: <a href="#m6-1">Module 6 · Irrigation Takeoff</a></strong></p>`
}
]
});
