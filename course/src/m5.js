(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 5, hours: 11.5, title: "Reading Specifications",
slides: [

{ t: "cover",
  h: "Reading Specifications",
  lead: "The plans show what to build and where. The specifications say what quality, which products, what tests and what paperwork. Most hidden costs in a commercial landscape bid are in the specs.",
  objectives: [
    "Explain the difference between plans and specs, and which one governs when they conflict, using worked scenarios",
    "Find your way around a project manual using CSI MasterFormat and Division 32, and read and cite any spec section line by line",
    "Understand how Caltrans, Greenbook/Whitebook and private specs are layered",
    "Find the spec requirements that change a landscape price: submittals, “or equal” rules, tests and inspection holds, establishment, plant replacement and warranty",
    "Compare Caltrans Type 1 and Type 2 plant establishment with the City of San Diego's 90- and 120-day periods",
    "Find the front-end (Division 00 and 01) items that cost money: time, liquidated damages, insurance, retention, partnering",
    "Use AI to pull spec requirements step by step, verify them against the pages, and build a reusable spec checklist"
  ],
  time: [["Reading and slides", "4 h"], ["Practice assignments", "7.5 h"], ["Module total", "11.5 h"]],
  body: `<p>Real examples come from the Special Provisions of Caltrans contract 11-428704 (download from <a href="#lab-11-428704">Real Bid Lab · 11-428704</a>), the 2018 Caltrans Standard Specifications, the City of San Diego Whitebook (2024 edition), and the City contract K-24-1952 (EMTS Boat Dock Esplanade), which has its own landscape special provisions.</p>`,
  src: "Caltrans 11-428704 Notice to Bidders and Special Provisions; Caltrans 2018 Standard Specifications; City of San Diego Whitebook, 2024 edition; City of San Diego bid documents K-24-1952-DBB-3-A."
},

{ h: "Plans vs. specifications",
  lead: "Plans answer “where and how much.” Specifications answer “what exactly, how well, and how do you prove it.” You need both to price a job.",
  body: `<div class="twocol">
<div><h3>Plans (drawings)</h3><ul>
<li>Locations, layout, sizes</li>
<li>Symbols, schedules, details</li>
<li>Quantities (by takeoff, or in tables)</li>
<li>Notes for specific items</li>
</ul></div>
<div><h3>Specifications (written)</h3><ul>
<li>Products, materials and approved brands</li>
<li>Installation methods and workmanship</li>
<li>Tests, inspections and submittals</li>
<li>Maintenance, warranty, closeout</li>
<li>How items are measured and paid</li>
</ul></div>
</div>`,
  ex: `<p>On 11-428704, the plans show a 4" Class 315 recycled-water main, 7,493 LF (linear feet). The Special Provisions add that recycled-water mains are pressure tested “by method A with the testing pressure modified to 150 psi” (pounds per square inch), that the warning tape must be purple, at least 5 mil thick, with a metallic strip, marked “Caution Reclaimed Water Line Buried Below,” and run along the whole trench. None of that is on the plan view, and all of it costs money.</p>`,
  watch: `<p>On private work, specs are often a separate book (the project manual) that the general contractor (GC) doesn't send unless you ask. Always ask for the landscape and irrigation sections and Division 01. Pricing from plans alone means guessing at the specs.</p>`,
  src: "Special Provisions 20-2.01A(4)(b)(i), 20-2.01B(3), contract 11-428704."
},

{ h: "When they conflict: order of precedence",
  lead: "Every contract says which document wins when two disagree. Learn the order for each spec family you bid.",
  body: `<div class="twocol">
<div><h3>Caltrans (2018 Standard Specifications, 5-1.02)</h3><ol>
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
<li>The signed agreement</li>
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
<p>Both also say: <strong>written numbers govern over scaled graphics</strong>, and <strong>detail drawings govern over general drawings</strong>. Caltrans adds that a specific spec governs over a general one.</p>`,
  watch: `<p>Precedence settles a conflict after the fact. It doesn't protect your price. If you find a conflict while bidding, ask before bid day (Module 12). Many private contracts say that when documents conflict, the contractor provides the better quality or greater quantity. If you can't get an answer, say in your proposal which version you priced.</p>`,
  deeper: `<p>Caltrans 5-1.02 also says the parts are complementary: “A component in one Contract part applies as if appearing in each.” A requirement in the specs applies even if the plans never mention it. The Whitebook adds that where documents conflict with the Municipal Code, the most stringent requirement controls. The 2024 Whitebook replaces Greenbook section 3-7.2 with the list above; older contracts may cite precedence as section 2-5.2. Private contracts set their own order; read the subcontract and the prime contract it points to.</p>`,
  src: "Caltrans 2018 Standard Specifications 5-1.02; City of San Diego Whitebook 2024 edition, Part 1(A), 3-7.2."
},

{ h: "Spec vs. plan conflicts: worked scenarios",
  lead: "Use the precedence list like a ladder: find both documents on it, and the higher one wins. Then ask anyway, before bid day.",
  body: `<ol class="steps">
<li><div><b>Caltrans · test pressure</b>A plan note on a Caltrans job says “test main per Standard Specifications” (125 psi). The Special Provisions (SP) say recycled-water mains test at 150 psi. SP is #1 on the 5-1.02 list, plans #2. <strong>Price the 150 psi test.</strong> (This is the real 11-428704 rule.)</div></li>
<li class="hl"><div><b>City · establishment length</b>On a City job, a planting plan note says “60-day maintenance period.” Whitebook 801-6 says 90 calendar days “unless otherwise specified in the Contract Documents.” Project plans (#7) rank above the Whitebook (#9), and the Whitebook itself allows a different period. The plan note probably governs, but it's a big cost difference. <strong>Ask which applies; if no answer, price 90 days and state it.</strong></div></li>
<li><div><b>Private · tree count</b>The planting plan shows 15 trees; the plant schedule says 12. Many private specs say to furnish quantities “as needed to complete work as shown on the Drawings” (K-24-1952 uses those words). <strong>Price 15 and ask.</strong></div></li>
<li class="hl"><div><b>Any job · detail vs. plan</b>The plan view shows a valve in a 10" round box; the valve detail shows a standard rectangular box. Details govern over general drawings. <strong>Price the detail's box.</strong></div></li>
<li><div><b>Any job · written vs. scaled</b>A bed measures 41 ft on the drawing but is dimensioned 38'-0". Written numbers govern. <strong>Use 38 ft</strong>, and check whether the drawing is to scale at all.</div></li>
</ol>`,
  watch: `<p>Precedence lists also have exceptions. Private contracts often say “the more stringent requirement governs” no matter where it appears. Read the actual clause in each contract you sign.</p>`,
  src: "Caltrans 2018 SS 5-1.02; Whitebook 2024 3-7.2 and 801-6; SP 11-428704 20-2.01A(4)(b)(i); City K-24-1952 landscape special provisions (plants, item 10)."
},

{ h: "The three spec families in San Diego",
  lead: "Almost every commercial landscape job you bid will use one of three spec systems. Know which one before you start reading.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Family</th><th>Who uses it</th><th>How it's built</th></tr></thead>
<tbody>
<tr><td><strong>Caltrans</strong></td><td>State highway jobs; some local road jobs that reference it</td><td>2018 Standard Specifications + Revised Standard Specifications + job Special Provisions + Standard Plans. Landscape is Section 20.</td></tr>
<tr><td><strong>Greenbook + agency supplement</strong></td><td>City of San Diego (with its Whitebook) and many other Southern California cities and agencies, often with their own supplement or special provisions</td><td>Greenbook (Standard Specifications for Public Works Construction) + supplement + project special provisions. Landscape is Part 8 (Sections 800, 801).</td></tr>
<tr><td><strong>Project manual (CSI)</strong></td><td>Private work, schools, colleges, many public buildings</td><td>Front end (Divisions 00, 01) + technical sections by CSI (Construction Specifications Institute) MasterFormat number. Landscape is Division 32.</td></tr>
</tbody></table></div>`,
  ex: `<p>A Chula Vista freeway job uses Caltrans. A City of San Diego median retrofit uses the Greenbook and Whitebook. A new medical office for a private developer uses a project manual with sections 32 84 00 and 32 93 00. School districts often use a project manual too, with their own Division 00 forms.</p>`,
  watch: `<p>Check which <em>edition</em> the contract names. The City lists the Whitebook 2024 edition as effective April 1, 2026, and the 2021 edition before it. A job advertised under one edition stays under it. Read the right book.</p>`,
  src: "City of San Diego, “The WHITEBOOK: San Diego Supplement to the GREENBOOK” page; Caltrans 2018 CCS Standard Plans and Standard Specifications page."
},

{ h: "Spec numbers: how to read and cite them",
  lead: "Every requirement has an address. When you quote a spec in a question, a proposal or a dispute, give the exact address so anyone can find it.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Family</th><th>Example</th><th>How to read it</th></tr></thead>
<tbody>
<tr><td>Caltrans</td><td>20-2.01A(4)(b)(ii)</td><td>Section 20 (Landscape) · 20-2 (irrigation) · .01 (general) · A (general part) · (4) quality assurance · (b) pressure testing · (ii) Method A</td></tr>
<tr><td>Caltrans parts</td><td>…A, …B, …C, …D</td><td>A General · B Materials · C Construction · D Payment</td></tr>
<tr><td>Whitebook / Greenbook</td><td>801-5.7.2.2</td><td>Part 8 · Section 801 (installation) · 801-5 irrigation · .7 testing · .2 pressure tests · .2 the method</td></tr>
<tr><td>CSI project manual</td><td>32 84 00, 1.6 B.2</td><td>Section 32 84 00 Planting Irrigation · Part 1 · Article 1.6 · Paragraph B · Subparagraph 2</td></tr>
</tbody></table></div>`,
  ex: `<p>A good citation in a bidder question: “SP 20-2.01A(4)(b)(i), page 33 of the 11-428704 Special Provisions, adds a 150 psi test for recycled-water mains. Does this apply to the 2" main on IP-7?” The reader can find it in seconds.</p>`,
  watch: `<p>Don't cite “the specs say” with no number. Questions without a section number get slow or vague answers, and you can't prove later what you relied on.</p>`,
  src: "Caltrans 2018 Standard Specifications, Section 20 numbering; Whitebook 2024 Part 8; SP 11-428704 page 33."
},

{ h: "Caltrans layering: the 11-428704 example",
  lead: "A Caltrans spec book mostly lists changes to the Standard Specifications. To know the full rule, you read the base section, then apply each change.",
  body: `<ol class="steps">
<li><div><b>Start with the 2018 Standard Specifications</b>20-2.01A(4)(b)(ii), Method A: fill the line, pressurize to 125 psi, hold 1 hour, no more than 5 psi drop.</div></li>
<li><div><b>Check the Revised Standard Specifications</b>Bound into the job's book (dated 04-16-21 here). Statewide updates, same numbering.</div></li>
<li class="hl"><div><b>Apply the Special Provisions</b>“Add to the end of section 20-2.01A(4)(b)(i): Test plastic pipe supply line mains used for recycled water by method A with the testing pressure modified to 150 psi.”</div></li>
<li><div><b>Result for your price</b>Recycled-water main is tested at 150 psi, for 1 hour, in the Engineer's presence, before backfill, with 48 hours' notice. Plan for test crews, standby time and repeat tests.</div></li>
</ol>
<p>Special Provisions use set phrases: <strong>“Add to section…”</strong>, <strong>“Replace … with…”</strong>, <strong>“Delete…”</strong>, <strong>“Replace Reserved in section…”</strong>. Each one changes the base text in a specific spot.</p>`,
  deeper: `<p>Caltrans sections follow their own pattern that works like the CSI three-part format, plus payment: <strong>A General</strong> (summary, definitions, submittals, quality assurance), <strong>B Materials</strong>, <strong>C Construction</strong>, <strong>D Payment</strong>. You can see it in Special Provisions 16-2.06A to 16-2.06D (temporary protection fence). Payment clauses matter: SP 20-3.02D says “Payment for tree hole and basin work is included in the payment for plant (group K).”</p>`,
  src: "Caltrans 2018 Standard Specifications 20-2.01A(4)(b)(i)–(ii); Special Provisions 11-428704, 20-2.01A(4)(b)(i), 20-3.02D, 16-2.06."
},

{ h: "Line by line, part 1 · a Caltrans section",
  lead: "Read a spec the way you'd read a contract: one sentence at a time, asking “what does this make me do, and what does it cost?”",
  body: `<p>Caltrans 2018 Standard Specifications 20-2.01A(4)(b)(i), pressure testing, general:</p>
<div class="tablewrap"><table>
<thead><tr><th>The spec says</th><th>In plain words</th><th>Cost to price</th></tr></thead>
<tbody>
<tr><td>“Perform pressure testing … In the Engineer's presence”</td><td>The inspector must watch</td><td>Scheduling; crew may wait for the inspector</td></tr>
<tr><td>“On business days from 8 a.m. to 5 p.m. unless authorized”</td><td>No weekend or night tests without permission</td><td>Tests must fit in the workday</td></tr>
<tr><td>“Before backfilling supply line trenches”</td><td>Trenches stay open until the test passes</td><td>Open-trench protection; a second trip to backfill</td></tr>
<tr><td>“With irrigation system gate valves open”; “open ends … plugged or capped”</td><td>Test the whole section at once</td><td>Caps and plugs; time to set up</td></tr>
<tr><td>“Notify the Engineer at least 48 hours before”</td><td>Two days' notice</td><td>Plan the sequence; you can't test on short notice</td></tr>
<tr><td>“Test irrigation supply line in conduit by Method A with the testing period modified to 0.5 hour and no allowable pressure drop”</td><td>Pipe in conduit: half-hour test, zero drop</td><td>Zero-drop tests fail more often; allow for a retest</td></tr>
</tbody></table></div>`,
  ex: `<p>Then Method A, 20-2.01A(4)(b)(ii): calibrate the gauge from 0 to 200 psi in 5 psi increments, accurate to within 2 psi; pressurize to 125 psi; hold 1 hour; if the drop is more than 5 psi, find and fix leaks and repeat the 1-hour test until the drop is 5 psi or less. A new line connected to an existing line must be isolated and tested by itself.</p>`,
  watch: `<p>A “simple” test has six cost drivers in six lines. Most estimators price only the hour of the test itself. Price the notice, the open trench, the caps, the gauge and the retest.</p>`,
  src: "Caltrans 2018 Standard Specifications 20-2.01A(4)(b)(i) and (ii)."
},

{ h: "Line by line, part 2 · what the Special Provisions change",
  lead: "Now apply the job's changes to the base text. The final rule is what you price.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>SP 11-428704 says</th><th>What it changes</th></tr></thead>
<tbody>
<tr><td>“Replace the 3rd paragraph of section 20-2.01A(4)(b)(i) with: Perform pressure testing using Method B to test supply lines (1) located on the discharge side of the valve, (2) installed by trenching and backfilling, or (3) completely visible after installation.”</td><td>Lines on the discharge side of a valve (laterals), trenched lines and visible lines are tested by Method B: line held at full source pressure, at least 8 hours upstream of a valve and 1 hour downstream (base text of Method B). All other lines stay on Method A.</td></tr>
<tr><td>“Add to the end of section 20-2.01A(4)(b)(i): Test plastic pipe supply line mains used for recycled water by method A with the testing pressure modified to 150 psi.”</td><td>Recycled-water mains: 150 psi instead of 125, still 1 hour, 5 psi max drop</td></tr>
<tr><td>(No change to the conduit sentence)</td><td>Main in conduit: Method A, 0.5 hour, no drop</td></tr>
</tbody></table></div>
<p><strong>Final rule, written out for your notes:</strong> plastic recycled-water mains: Method A at 150 psi, 1 hour, 5 psi max drop · supply line in conduit: Method A, 0.5 hour, zero drop · other discharge-side, trenched or visible lines: Method B · everything else: Method A · all tests watched by the Engineer, 48 hours' notice, before backfill, business hours. Where two rules seem to overlap (a trenched recycled-water main), follow the more specific added sentence, and let a short bidder question settle any doubt.</p>`,
  watch: `<p>“Replace the 3rd paragraph” only makes sense if you count the paragraphs of the base text yourself. Open the Standard Specifications next to the SP and mark the replaced text. Never read the SP alone.</p>`,
  src: "SP 11-428704 page 33 (20-2.01A(4)(b)(i)); Caltrans 2018 SS 20-2.01A(4)(b)(i)–(iii)."
},

{ h: "Greenbook and the City of San Diego Whitebook",
  lead: "The Greenbook is the base public works spec used across Southern California. The City of San Diego's Whitebook changes it for City jobs, and the Whitebook wins when they conflict.",
  body: `<ul>
<li>The <strong>Greenbook</strong> must be bought from its publisher. The <strong>Whitebook</strong> is a free download from the City.</li>
<li>Whitebook changes use phrases like “DELETE in its entirety and SUBSTITUTE with the following” and “ADD the following.”</li>
<li>Landscape is <strong>Part 8</strong>: 800 Materials (topsoil, amendments, mulch, plants, pipe, valves, controllers), 801 Installation (soil prep, planting, irrigation, testing, plant establishment), 802 Native habitat.</li>
<li>City projects then add <strong>Supplemental Special Provisions</strong> (SSP) for that job.</li>
</ul>`,
  ex: `<p>Same task, three specs. Pressure testing a mainline:</p>
<div class="tablewrap"><table>
<thead><tr><th>Spec</th><th class="num">Test pressure</th><th class="num">Duration</th></tr></thead>
<tbody>
<tr><td>Caltrans 2018 Standard Specifications (SS), Method A</td><td class="num">125 psi</td><td class="num">1 hour</td></tr>
<tr><td>11-428704 Special Provisions, recycled-water main</td><td class="num">150 psi</td><td class="num">1 hour</td></tr>
<tr><td>Whitebook 801-5.7.2.2, pressurized mains</td><td class="num">125 psi</td><td class="num">4 hours</td></tr>
<tr><td>Whitebook 801-5.7.2.2, non-pressurized laterals</td><td class="num">100 psi</td><td class="num">2 hours</td></tr>
</tbody></table></div>
<p>Same pipe, different rules. Never assume the last job's spec.</p>`,
  src: "City of San Diego Whitebook 2024, Part 8, 801-5.7.2.2; Caltrans 2018 SS 20-2.01A(4)(b)(ii); SP 11-428704."
},

{ h: "Line by line, part 3 · Whitebook 801-6, plant establishment",
  lead: "The City's establishment section is short, but nearly every numbered line is a cost. Read it with a pencil.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>801-6 item</th><th>What it says (short)</th><th>Cost to price</th></tr></thead>
<tbody>
<tr><td>1</td><td>Maintain planted areas continuously as they're completed, and during the PEP (plant establishment period)</td><td>Maintenance starts before the PEP does</td></tr>
<tr><td>3</td><td>Pruning designated by the Engineer at the start of the PEP is part of the work</td><td>Unknown pruning; allow some hours</td></tr>
<tr><td>4</td><td>Request a pre-maintenance inspection; all punchlist items done before the PEP starts</td><td>Punchlist labor before the clock starts</td></tr>
<tr><td>6</td><td>90 calendar days for permanently irrigated plants and sod; 120 for seed or stolonized lawns</td><td>Number of weekly visits</td></tr>
<tr><td>7</td><td>Success: erosion free, 100% container plant survival, 0% weed and invasive cover, BMPs (best management practices, like fiber rolls) in good condition</td><td>Plant replacement allowance; weeding to zero</td></tr>
<tr><td>8</td><td>PEP extended if more planting or corrective work is needed</td><td>Risk of extra weeks with no extra pay</td></tr>
<tr><td>9</td><td>Replace unhealthy plants within 2 weeks of notice</td><td>Plants on hand or a nursery that can deliver fast</td></tr>
<tr><td>10, 13</td><td>If the PEP ends before other work, keep maintaining until all work is done and Final Acceptance</td><td>Open-ended maintenance if the GC runs late</td></tr>
<tr><td>12</td><td>Weekly: irrigation inspection and repair, cleanup, pruning, mowing, weed control, fertilize every 4 weeks, pest and fungus control, plant replacement, mulch replenishment</td><td>Crew hours per visit, fertilizer, mulch</td></tr>
</tbody></table></div>`,
  watch: `<p>“100-percent container plant survival” means every dead plant is yours to replace, not an allowance of a few percent. Price a replacement allowance from your own history.</p>`,
  src: "City of San Diego Whitebook 2024, 801-6 items 1–13."
},

{ h: "CSI MasterFormat and Division 32",
  lead: "Private project manuals are organized by CSI MasterFormat: numbered divisions and sections that are the same on every job. Learn your numbers and you can find your scope in any manual.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Number</th><th>Section</th><th>Why you read it</th></tr></thead>
<tbody>
<tr><td>Division 00</td><td>Procurement and contracting requirements</td><td>Bid forms, instructions, contract, bonds, insurance</td></tr>
<tr><td>Division 01</td><td>General requirements</td><td>Submittals, quality control, temporary facilities, closeout</td></tr>
<tr><td>32 80 00</td><td>Irrigation</td><td>Irrigation general</td></tr>
<tr><td>32 84 00</td><td>Planting irrigation</td><td>Pipe, valves, heads, controllers, testing</td></tr>
<tr><td>32 90 00</td><td>Planting</td><td>Planting general</td></tr>
<tr><td>32 91 13</td><td>Soil preparation</td><td>Soil tests, amendments, fine grading</td></tr>
<tr><td>32 92 00</td><td>Turf and grasses</td><td>Sod, seed, hydroseed</td></tr>
<tr><td>32 93 00</td><td>Plants</td><td>Trees, shrubs, groundcover, quality, warranty</td></tr>
<tr><td>Also check</td><td>31 (earthwork), 33 (utilities), 26 (electrical)</td><td>Rough grading, water service, controller power</td></tr>
</tbody></table></div>`,
  ex: `<p>Every section number has three pairs of digits. The first pair is the division (32 = Exterior Improvements). The more digits that aren't zeros, the narrower the topic: 32 90 00 is all planting, 32 91 13 is just soil preparation.</p>`,
  watch: `<p>Designers don't always use every section. A small job may put soil prep, plants and maintenance all in 32 90 00. Read the table of contents and search the whole manual for words like “landscape,” “irrigation,” “planting” and “maintenance.”</p>`,
  src: "CSI MasterFormat (Construction Specifications Institute), csiresources.org."
},

{ h: "Inside a section: Part 1, Part 2, Part 3",
  lead: "Every CSI section has the same three parts. Each part hides a different kind of cost.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>What's in it</th><th>Costs to look for</th></tr></thead>
<tbody>
<tr><td><strong>Part 1 · General</strong></td><td>Summary, related sections, references, submittals, quality assurance, delivery and storage, warranty, maintenance</td><td>Submittal prep, samples, mockups, nursery inspections, warranty length, maintenance period</td></tr>
<tr><td><strong>Part 2 · Products</strong></td><td>Manufacturers, materials, “or equal” rules, mixes and grades</td><td>Named brands, required models, amendment types, plant quality standards</td></tr>
<tr><td><strong>Part 3 · Execution</strong></td><td>Examination, preparation, installation, field quality control, cleaning, protection</td><td>Methods that slow production, tests and inspections, cleanup, protection of finished work</td></tr>
</tbody></table></div>`,
  ex: `<p>Reading strategy: read Part 1 completely (that's where most hidden costs are), skim Part 2 for brands and anything unusual, and read Part 3 for tests, inspections and anything that changes how fast your crew can work.</p>`,
  watch: `<p>“Related sections” in Part 1 tell you what other sections apply to your work. If 32 84 00 says “Section 26 05 00 Common Work Results for Electrical,” your controller wiring might be on you. Read each related section's scope.</p>`
},

{ h: "Spec words that change your price",
  lead: "Specs use a small set of words with exact meanings. One word can decide whether you buy a part, install it, or both.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Word or phrase</th><th>Usual meaning</th><th>What it does to your price</th></tr></thead>
<tbody>
<tr><td>Shall / must</td><td>Required</td><td>No choice; price it</td></tr>
<tr><td>May</td><td>Allowed, not required</td><td>An option you can use to save money</td></tr>
<tr><td>Furnish</td><td>Supply the material</td><td>Buy it, deliver it</td></tr>
<tr><td>Install</td><td>Put in place</td><td>Labor only, if someone else furnishes</td></tr>
<tr><td>Provide</td><td>Furnish and install</td><td>Material and labor</td></tr>
<tr><td>As directed / as ordered</td><td>When the Engineer or owner says so</td><td>Often paid as extra work; read the payment clause</td></tr>
<tr><td>Approved / accepted</td><td>After the reviewer says yes in writing</td><td>Time for review; risk of rejection</td></tr>
<tr><td>Included in (another item)</td><td>Not paid separately</td><td>Put its cost inside the named item</td></tr>
<tr><td>Change order work</td><td>Paid as a change, not in your bid</td><td>Don't price it in the bid</td></tr>
<tr><td>Informational submittal</td><td>Sent for the record; no approval needed</td><td>Paperwork, but no waiting</td></tr>
</tbody></table></div>`,
  ex: `<p>Real examples: SP 20-3.02D on 11-428704, “Payment for tree hole and basin work is included in the payment for plant (group K).” And SP 20-10.02C(1): if an existing irrigation facility to be modified is unsuitable, replace it; “The replacement of the unsuitable facility is change order work.” The first goes in your tree price; the second stays out of your bid.</p>`,
  watch: `<p>Definitions vary. Most project manuals define furnish, install and provide in Division 01 or the general conditions; Caltrans and the Whitebook define terms in Section 1. Check the definitions section of each contract.</p>`,
  src: "SP 11-428704 20-3.02D, 20-10.02C(1)."
},

{ h: "The front end: Divisions 00 and 01",
  lead: "Landscape estimators often skip the front end. That's where bid forms, insurance, bonds, retention, submittal rules and closeout live.",
  body: `<ul>
<li><strong>Instructions to bidders and bid form:</strong> due date, what to submit, alternates, unit prices, addenda acknowledgment.</li>
<li><strong>Agreement and general conditions</strong> (often an AIA, American Institute of Architects, or ConsensusDocs form on private jobs): payment, retention, changes, claims, termination.</li>
<li><strong>Supplementary conditions:</strong> changes to the general conditions for this job. Read them; they often change retention, insurance or schedule rules.</li>
<li><strong>Insurance and bonds:</strong> limits, endorsements, performance and payment bonds (Module 2).</li>
<li><strong>Submittal procedures</strong> (01 33 00): format, number of copies, review time, resubmittals.</li>
<li><strong>Substitution procedures</strong> (01 25 00): how and when to propose an “or equal.”</li>
<li><strong>Quality requirements, temporary facilities</strong> (water, power, sanitation, fencing).</li>
<li><strong>Closeout</strong> (01 77 00, 01 78 00): record drawings, O&amp;M (operation and maintenance) manuals, warranties, training, extra stock.</li>
</ul>`,
  ex: `<p>On a sub bid, the GC may not send you the front end. Ask for at least the supplementary conditions, insurance requirements, Division 01 and the subcontract form. They change your overhead, your cash flow and your risk.</p>`,
  watch: `<p>A short review time for submittals (or long one for the owner to answer) changes your schedule. A “provide water for construction” line in Division 01 means you pay for water and a meter or hydrant permit.</p>`
},

{ h: "Front-end items that cost money · real Caltrans and City numbers",
  lead: "The first pages of a public spec book set the time, the penalties and the insurance. Here are the real numbers from two San Diego jobs.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Caltrans 11-428704</th><th>City K-24-1952</th></tr></thead>
<tbody>
<tr><td>Contract time</td><td>120 working days for all work except plant establishment; 250 working days of plant establishment; 370 total</td><td>270 working days, including a 90 calendar day PEP</td></tr>
<tr><td>Liquidated damages (LD: a set daily charge for finishing late)</td><td>By total bid (2018 SS 8-1.10): $4,000/day for $1M to $2M; $950/day when only plant establishment is left</td><td>By contract value: $1,000/day under $200,001, up to $2,500/day for $1,000,001 to $2,000,000</td></tr>
<tr><td>Bid security</td><td>At least 10% of the bid</td><td>Bid bond uploaded through PlanetBids at bid time; original due by 5 PM 1 working day later (Module 14)</td></tr>
<tr><td>Small business or DBE (disadvantaged business enterprise) goal</td><td>DBE goal 14%</td><td>Mandatory SLBE-ELBE (small local and emerging local business enterprise) subcontractor participation: 20.0% total (9.4% SLBE + 10.6% ELBE)</td></tr>
<tr><td>Wages</td><td>State prevailing wage and federal rates; pay the higher</td><td>State prevailing wage (Module 11)</td></tr>
<tr><td>Partnering</td><td>Facilitated partnering and partnering training required for a total bid over $1 million and 100 or more working days</td><td>Not listed</td></tr>
<tr><td>Retention to subs</td><td>Per the Standard Specifications</td><td>Return retention to subs within 30 calendar days after you're paid for accepted work</td></tr>
</tbody></table></div>`,
  deeper: `<p>Caltrans 7-1.06D(2) liability limits, by total bid: up to $1,000,000, $1,000,000 per occurrence, $2,000,000 aggregates and $5,000,000 umbrella; over $1,000,000 up to $10,000,000, the umbrella rises to $10,000,000. A prime may not require a small business sub to carry more than the table shows for the sub's own dollar amount. The Whitebook (3-13.1) allows retention release 35 calendar days after the notice of completion (NOC), on request.</p>`,
  watch: `<p>These rules are written for the prime contractor, but primes pass most of them down to subs in the subcontract. Read them even when you bid as a sub.</p>`,
  src: "SP 11-428704 Notice to Bidders (time, bid security, DBE goal, wages), 5-1.09A and 5-1.09C (partnering), 7-1.06D(2); Caltrans 2018 SS 8-1.10A; City K-24-1952 bid checklist (bid bond), SLBE-ELBE participation 7.1, contract time, 6-9 liquidated damages, prompt payment of retention; Whitebook 2024 3-13.1."
},

{ h: "Worked example: what late finish can cost",
  lead: "Liquidated damages run every day you're late. Do the math before you promise a schedule.",
  body: `<p><strong>Caltrans 11-428704.</strong> The Department's estimate was $1,510,000. Say the winning total bid is $1.2 million, inside the $1M to $2M band.</p>
<ol class="steps">
<li><div><b>Find the rate</b>2018 SS 8-1.10A: total bid over $1,000,000 to $2,000,000 = <strong>$4,000 per day</strong>.</div></li>
<li class="hl"><div><b>Late on the main work</b>10 working days late × $4,000 = <strong>$40,000</strong>.</div></li>
<li><div><b>Late with only plant establishment left</b>Rate drops to $950/day. 20 days × $950 = <strong>$19,000</strong>.</div></li>
<li class="hl"><div><b>Compare to the work</b>$40,000 is more than many landscape subs' whole profit on a job this size. Schedule risk is a real cost.</div></li>
</ol>
<p><strong>City K-24-1952 (example value):</strong> a $750,000 contract falls in the $500,001 to $1,000,000 band: $2,000 per day. 15 days late = 15 × $2,000 = <strong>$30,000</strong>.</p>`,
  watch: `<p>As a sub, read your subcontract: GCs often pass liquidated damages to the sub that caused the delay. Plant establishment is the longest part of many landscape jobs, so ask how the GC counts it.</p>`,
  src: "Caltrans 2018 SS 8-1.10A; SP 11-428704 Notice to Bidders (estimated cost); City K-24-1952 section 6-9. Bid amounts in this example are made up."
},

{ h: "Price changers 1 · Products, “or equal” and submittals",
  lead: "A spec that names one brand can lock in your cost. A spec that allows “or equal” still makes you prove it, on paper, on time.",
  body: `<ul>
<li><strong>Named brand only (sole source):</strong> you must use it. Get a quote from a distributor who carries it.</li>
<li><strong>Named brand “or equal”:</strong> you may propose another product, but the designer or agency decides if it's equal. Price the named product unless you have approval.</li>
<li><strong>Submittals:</strong> product data, samples, plant lists, nursery tags, soil tests. Each takes office time; some take testing fees.</li>
</ul>`,
  ex: `<p>11-428704 Special Provisions (SP) 20-2.06B(2)(a): controllers “must be Calsense and must have 2-way communication.” Caltrans then lists quoted prices from a named supplier (before tax and delivery), for example a Calsense 40-station base model for controller '97B' at $9,743.66, and in SP 20-2.05B the Calsense FM-2 2" flow sensor at $543.25 each (4 = $2,173.00). Prices “good until April 14, 2022.” You get real material costs, but you must still add tax, delivery and installation.</p>
<p>Submittal timing from the same job: the vendor statement that your plant order was accepted is due at least 60 days before planting (2018 SS 20-3.01A(3)(b)). Manufacturer's instructions for controller modification are due 15 days before installing (SP 20-10.02A(3)).</p>`,
  deeper: `<p>California Public Contract Code §3400 generally bars public agencies from writing specs that limit bidding to one brand unless “or equal” follows. It allows a brand-only spec when the agency makes a finding described in the bid documents, for reasons such as a field test, matching others in use on a public improvement, an item available from only one source, or an emergency. Check the current text on leginfo.legislature.ca.gov.</p>`,
  src: "SP 11-428704 20-2.05B, 20-2.06B(2)(a), 20-10.02A(3); Caltrans 2018 SS 20-3.01A(3)(b); Cal. Public Contract Code §3400."
},

{ h: "Worked example: pricing from quoted equipment",
  lead: "When the agency lists quoted prices, the material number is handed to you. Add up everything that's not in it.",
  body: `<p>11-428704 SP 20-2.06B(2)(a) and 20-2.05B list these Calsense quotes (before sales tax and delivery):</p>
<div class="tablewrap"><table>
<thead><tr><th>Equipment</th><th class="num">Qty</th><th class="num">Extended</th></tr></thead>
<tbody>
<tr><td>40-station controller package, '97B'</td><td class="num">1</td><td class="num">$9,743.66</td></tr>
<tr><td>40-station controller package, '97C', '97E', '97F'</td><td class="num">3</td><td class="num">$27,103.05</td></tr>
<tr><td>32-station controller package, '97D'</td><td class="num">1</td><td class="num">$8,496.23</td></tr>
<tr><td>40-station controller package with Yagi antenna, '97G'</td><td class="num">1</td><td class="num">$9,692.41</td></tr>
<tr><td>FM-2 2" flow sensors</td><td class="num">4</td><td class="num">$2,173.00</td></tr>
<tr><td colspan="2"><strong>Total quoted</strong></td><td class="num"><strong>$57,208.35</strong></td></tr>
</tbody></table></div>
<p>Check: 9,743.66 + 27,103.05 + 8,496.23 + 9,692.41 = 55,035.35 for controllers; + 2,173.00 = 57,208.35.</p>`,
  ex: `<p><strong>Add what's missing (example rates for practice).</strong> Sales tax at an example 8% = 57,208.35 × 0.08 = $4,576.67. Delivery, say $400. Material subtotal = 57,208.35 + 4,576.67 + 400 = <strong>$62,185.02</strong>, before any labor, pads, conduit, antenna masts or programming. Look up the real tax rate for the delivery address on the California Department of Tax and Fee Administration (CDTFA) site, and get delivery in writing.</p>`,
  watch: `<p>Quoted prices expire. These were “good until April 14, 2022.” If the job would buy after that date, call the supplier for a current quote and an escalation note (Module 8).</p>`,
  src: "SP 11-428704 20-2.05B and 20-2.06B(2)(a), quoted price tables. Tax rate and delivery cost in this example are made up."
},

{ h: "“Or equal” and substitutions: three rule sets",
  lead: "Each spec family has its own rules for swapping a named product. The timing rule is the one that bites.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>Caltrans 2018 SS 6-1.05</th><th>Whitebook 2024 4-6</th><th>Private (Division 01)</th></tr></thead>
<tbody>
<tr><td>What the brand name means</td><td>“Establishes a quality standard and is not intended to limit competition”</td><td>“Intended to establish the type, function, and quality required”</td><td>Read the basis-of-design and substitution sections</td></tr>
<tr><td>When to ask</td><td>After award; allow 30 days for review; must cause no delay</td><td>Before bid is possible: the Engineer responds by at least 3 working days before bid due date, or it's deemed denied. After award, also possible</td><td>Often in a short window before bid or right after award; often in Section 01 25 00</td></tr>
<tr><td>What to send</td><td>Data proving no delay and equal or better quality and suitability</td><td>Design changes needed, license fees, every variation, local service within 50 miles with 24-hour repair, performance certifications</td><td>Usually a substitution request form with product data and a comparison</td></tr>
<tr><td>What you bid</td><td>The specified product unless authorized</td><td>“The Bid submittal shall be based on the material and equipment specified by name”</td><td>The specified product unless approved in an addendum</td></tr>
<tr><td>If rejected</td><td>Use the specified product</td><td>No extra time and no extra money</td><td>Use the specified product</td></tr>
</tbody></table></div>`,
  deeper: `<p>Whitebook 4-6 also says there is no guaranteed review time after award, a lack of action is not acceptance, and the burden of proof is on you; the Engineer may ask for more data at your expense. Whitebook 3-8.1 adds that where the City has an Approved Materials List (AML), you use products on it.</p>`,
  watch: `<p>Never put an unapproved substitute into your bid price “because it's equal.” If it's rejected after award, you buy the specified product at your own cost.</p>`,
  src: "Caltrans 2018 Standard Specifications 6-1.05; City of San Diego Whitebook 2024, 3-8.1 and 4-6."
},

{ h: "How to request a substitution, step by step",
  lead: "A substitution request is a sales pitch with proof. Make it easy to say yes.",
  body: `<ol class="steps">
<li><div><b>Check the window</b>Find the deadline in the spec (for a City job, early enough that the Engineer can answer 3 working days before bid).</div></li>
<li><div><b>Get the data</b>Cut sheets for both the specified and the proposed product, side by side.</div></li>
<li class="hl"><div><b>Show every difference</b>List size, material, flow, pressure rating, warranty, service, price. Hiding a difference gets a rejection later.</div></li>
<li><div><b>Answer the spec's questions</b>Design changes needed? License fees? Local service and parts? Certifications?</div></li>
<li class="hl"><div><b>Send it the required way</b>Bidder inquiry system, RFI (request for information) form or substitution form, to the named contact.</div></li>
<li><div><b>Price the specified product until approved</b>Approval before bid usually comes as an addendum. Only then can you price the substitute.</div></li>
</ol>`,
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Field</th><th>Fill in</th></tr></thead>
<tbody>
<tr><td>Project, number, spec section</td><td>Name, contract or project number, section and paragraph</td></tr>
<tr><td>Specified item</td><td>Make, model, section reference</td></tr>
<tr><td>Proposed item</td><td>Make, model, supplier, lead time</td></tr>
<tr><td>Differences</td><td>Every variation, in a two-column table</td></tr>
<tr><td>Effect on design and other trades</td><td>None, or what changes</td></tr>
<tr><td>Service and warranty</td><td>Local service, warranty length</td></tr>
<tr><td>Reason</td><td>Lead time, availability, price, performance</td></tr>
<tr><td>Attachments</td><td>Cut sheets of both, samples if asked</td></tr>
</tbody></table></div>
<p class="small">Template. Use the agency's own form when it has one.</p>`,
  watch: `<p>“Equal” is decided by the reviewer, not by you or your supplier. A supplier's “it's the same thing” is not approval.</p>`
},

{ h: "Price changers 2 · Soil tests and amendments",
  lead: "Many landscape specs require a lab soil test, then amendments based on the result. At bid time you don't know the result, so you have to price an assumption.",
  body: `<ul>
<li><strong>Agronomic soil test:</strong> an independent lab tests the soil and recommends amendments (organic matter, gypsum, fertilizer, pH correction).</li>
<li><strong>Who pays and when:</strong> some specs make the owner pay for the first test; others put all tests on you.</li>
<li><strong>Amendment rates:</strong> stated in the spec (for example CY per 1,000 SF) or “per the soils report.”</li>
<li><strong>Imported topsoil:</strong> must meet a class or a test; tested before it ships and after placement.</li>
</ul>`,
  ex: `<p><strong>Whitebook 800-1.1.2 (Class “A” topsoil):</strong> submit the source, a physical sample and current independent lab results within 15 working days of the notice to proceed; a second series of tests 15 working days before placement; and more tests after placement. Topsoil that fails “shall not be shipped to the project site.”</p>
<p><strong>11-428704:</strong> compost at 200 CY (cubic yards) per acre (PL-1 sequence of work), and Special Provisions 21-2.02K sets compost quality limits by lab test methods (pH 6 to 8.5, soluble salts, organic matter, maturity, pathogens, contaminants). Your compost supplier must provide test results that meet them.</p>`,
  watch: `<p>When amendments are “per soils report” and no report exists yet, write your assumption into the proposal: the rate you priced, and that changes from the report will be priced as a change (Module 13).</p>`,
  src: "City of San Diego Whitebook 2024, 800-1.1.2; Plans PL-1 and SP 21-2.02K, contract 11-428704."
},

{ h: "Price changers 3 · Plant quality and inspection",
  lead: "Specs set how good the plants must be and who inspects them. Rejected plants cost you twice: once to buy, again to replace.",
  body: `<ul>
<li>Plants true to name, healthy, not root-bound, from inspected nurseries.</li>
<li>Inspection at the nursery (common on private jobs with specimen trees) or on site before planting.</li>
<li>Root inspection: the inspector knocks plants out of containers to check the roots.</li>
<li>Notice before delivery, tags on plants, nursery invoices as a submittal.</li>
<li>Reference standards such as ANSI Z60.1 (the American National Standards Institute's American Standard for Nursery Stock) are common in private specs.</li>
</ul>`,
  ex: `<p><strong>Caltrans 2018 SS 20-3.01A(4):</strong> the Engineer inspects roots by removing earth from the root ball of “not less than 2 plants, nor more than 2 percent of the total number of plants of each species or variety.” If the sample fails, “the entire lot represented by the noncompliant sample plants is rejected.” You must notify the Engineer at least 10 days before plants ship (20-3.01B(1)).</p>
<p><strong>Worked example:</strong> 450 plants of one species. Maximum inspected: 2% × 450 = 9 plants. Minimum: 2. Those plants are pulled apart; order a few extra so you still have 450 to plant.</p>
<p><strong>City K-24-1952:</strong> plants grown in their containers at least six months but not over two years; color photos of all palm trees at least 15 days before delivery; larger plants allowed only with approval and with “no change in Contract Price”; rejected plants replaced within one week of written notice.</p>`,
  watch: `<p>Ask your nursery to hold your order and confirm in writing (Caltrans wants a vendor statement 60 days before planting). Plants that are short in the market at planting time get substituted only with approval, which can take weeks.</p>`,
  src: "Caltrans 2018 Standard Specifications 20-3.01A(3)(b), 20-3.01A(4), 20-3.01B(1); City K-24-1952 special provisions 800-1.4.1 items 8–11."
},

{ h: "Submittals in depth: the kinds and what they cost",
  lead: "A submittal is anything you send for review or for the record before you buy, install or finish. Each kind takes different work.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Kind</th><th>What it is</th><th>Landscape examples</th><th>Cost</th></tr></thead>
<tbody>
<tr><td>Product data</td><td>Manufacturer cut sheets</td><td>Heads, valves, pipe, controllers, backflow</td><td>Office time to collect and mark the model</td></tr>
<tr><td>Shop drawings</td><td>Drawings you prepare</td><td>Controller wiring diagrams (Caltrans 20-2.01A(3)(a))</td><td>Drafting time, manufacturer sign-off</td></tr>
<tr><td>Samples</td><td>Physical pieces</td><td>Mulch, DG (decomposed granite), rock, topsoil, wire and splice samples</td><td>Material, delivery, sometimes lab fees</td></tr>
<tr><td>Test reports and certificates</td><td>Lab results or compliance letters</td><td>Soil tests, compost tests, certificate of compliance for sod and amendments</td><td>Lab fees; waiting time</td></tr>
<tr><td>Vendor statements and invoices</td><td>Proof of orders and sources</td><td>Plant order accepted; nursery invoices with botanical names and lot numbers</td><td>Office time; early ordering</td></tr>
<tr><td>Schedules and plans</td><td>Your plans for the work</td><td>Watering schedules, pest control recommendation</td><td>Licensed adviser fees; office time</td></tr>
<tr><td>Closeout</td><td>Records at the end</td><td>As-builts, O&amp;M (operation and maintenance) manuals, warranties</td><td>Drafting, binders, copies</td></tr>
</tbody></table></div>`,
  ex: `<p>Caltrans 20-1.01C: at least 15 days before applying any pesticide, submit the licensed pest control adviser's (PCA's) recommendation; each week, submit a Report of Chemical Spray Operations; before mixing, submit the pesticide label. A landscape sub who sprays weeds without a PCA recommendation on file is out of compliance from day one.</p>`,
  watch: `<p>Whitebook 3-8.2 asks for six copies plus one reproducible of working drawings, and 3-8.6 asks for one electronic copy and three bound copies of manufacturers' warranty and O&amp;M instructions. Copies and binders are small costs, but they're real; read the count on every job.</p>`,
  src: "Caltrans 2018 SS 20-1.01C, 20-2.01A(3), 20-3.01A(3); Whitebook 2024 3-8.2, 3-8.4, 3-8.6."
},

{ h: "Building a submittal register",
  lead: "A submittal register is one table of every submittal, its deadline and its status. Build it while you bid; it shows the office time and early ordering you must price.",
  body: `<p>Real deadlines from the 2018 Caltrans Standard Specifications (SS), the 11-428704 Special Provisions (SP) and the Whitebook (WB):</p>
<div class="tablewrap"><table>
<thead><tr><th>Submittal</th><th>Section</th><th>Deadline</th><th>Type</th></tr></thead>
<tbody>
<tr><td>Pest control adviser recommendation</td><td>SS 20-1.01C</td><td>15 days before any pesticide</td><td>For review</td></tr>
<tr><td>Report of chemical spray operations</td><td>SS 20-1.01C</td><td>End of each week</td><td>Informational</td></tr>
<tr><td>Electrical shop drawings for irrigation</td><td>SS 20-2.01A(3)(a)</td><td>30 days before installation</td><td>For review</td></tr>
<tr><td>Manufacturer's instructions (pipe, sprinklers, valves, backflow, sensors)</td><td>SS 20-2.01A(3)(b)</td><td>15 days before installing</td><td>Informational</td></tr>
<tr><td>Vendor statement, plant order accepted</td><td>SS 20-3.01A(3)(b)</td><td>60 days before planting</td><td>For review</td></tr>
<tr><td>Notice of plant shipment</td><td>SS 20-3.01B(1)</td><td>10 days before shipping</td><td>Notice</td></tr>
<tr><td>Seasonal watering schedules (4 seasons)</td><td>SP 20-4.01C(1)</td><td>First within 10 days after PEP starts; next at least 5 days before each season</td><td>For review</td></tr>
<tr><td>Landscaping and irrigation samples and test results</td><td>WB 3-8.4</td><td>Within 15 working days of the notice to proceed (NTP)</td><td>For review</td></tr>
</tbody></table></div>`,
  ex: `<p>Add columns for “date sent,” “date returned,” “status” (approved, approved as noted, revise and resubmit, rejected) and “responsible person.” Keep it in the same spreadsheet as your estimate notes, then hand it to the project manager at award (Module 16).</p>`,
  watch: `<p>“Revise and resubmit” restarts the review clock. Allow at least one resubmittal in your schedule for anything unusual.</p>`,
  src: "Caltrans 2018 SS 20-1.01C, 20-2.01A(3), 20-3.01A(3)(b), 20-3.01B(1); SP 11-428704 20-4.01C(1); Whitebook 2024 3-8.4."
},

{ h: "Worked example: counting back from the planting date",
  lead: "Spec deadlines run backward from events. Put them on a calendar and you'll see when you must order plants, sometimes before the job even starts.",
  body: `<p><strong>Example dates for practice</strong> on a Caltrans job where planting is planned to start June 1.</p>
<ol class="steps">
<li><div><b>Vendor statement</b>60 days before June 1 = <strong>April 2</strong>. Your plant order must be placed and accepted by the nursery before then, including extra sample plants for root inspection.</div></li>
<li class="hl"><div><b>Weed germination</b>On 11-428704, SP 20-1.03E: no planting in weed germination areas for 21 days after irrigation is installed. Irrigation must be done there by <strong>May 11</strong> (21 days before June 1).</div></li>
<li><div><b>Shipping notice</b>10 days before the first plants ship. If they ship May 29, notify by <strong>May 19</strong>.</div></li>
<li class="hl"><div><b>Pesticide recommendation</b>The weed control after germination needs a PCA recommendation 15 days before spraying. If you spray May 25, submit by <strong>May 10</strong>.</div></li>
</ol>`,
  ex: `<p>Check the math: April has 30 days. From April 2 to May 1 is 29 days; to June 1 is 29 + 31 = 60 days. May 11 + 21 days = June 1. Count the same way for every deadline.</p>`,
  watch: `<p>If your job's start is late, these dates don't move with it unless the planting date moves. A late award can make the 60-day vendor statement impossible, so ask about it early and document any delay.</p>`,
  src: "Caltrans 2018 SS 20-1.01C, 20-3.01A(3)(b), 20-3.01B(1); SP 11-428704 20-1.03E. Dates are an example."
},

{ h: "Testing and inspection holds",
  lead: "A hold point is a step where work stops until the inspector has looked. Each one is a wait, a trip and a schedule risk.",
  body: `<p>Caltrans 2018 SS 20-1.01D(2) lists the Engineer's progress inspections for landscape work:</p>
<ol class="steps">
<li><div><b>After marking plant locations</b>Layout must be approved before you dig.</div></li>
<li><div><b>Before cultivating work starts</b></div></li>
<li class="hl"><div><b>Before pressure testing pipe on the supply side of control valves</b></div></li>
<li><div><b>Before testing low voltage control and neutral conductors</b></div></li>
<li class="hl"><div><b>During irrigation system functional tests</b>Required before planting, after planting, and before plant establishment starts (20-2.01A(4)(d)).</div></li>
<li><div><b>Before planting the plants</b></div></li>
<li><div><b>Before completion of planting work</b></div></li>
<li><div><b>Before the start of plant establishment work</b></div></li>
<li class="hl"><div><b>Once a month during plant establishment</b></div></li>
</ol>`,
  ex: `<p>Plus: a final irrigation system check 20 to 30 days before contract acceptance (20-2.01A(4)(e)) and a final inspection of plant establishment work 20 to 30 days before acceptance (20-4.01D). The Whitebook adds a pre-maintenance inspection before its PEP starts (801-6) and asks for 24 hours' notice before pressure tests (801-5.7.2.2).</p>`,
  watch: `<p>Price holds as crew time. If the crew can't move to other work while waiting, every hold costs the whole crew's hourly rate.</p>`,
  src: "Caltrans 2018 SS 20-1.01D(2), 20-2.01A(4)(d)–(e), 20-4.01D; Whitebook 2024 801-5.7.2.2, 801-6."
},

{ h: "Worked example: the cost of tests and holds",
  lead: "Add up the hours a spec's tests take, including waiting and retests. Example rates for practice only; use your own costs.",
  body: `<p>A City job with 2,000 LF of pressurized main tested in 4 sections, and laterals tested in 6 sections (Whitebook 801-5.7.2.2: mains 125 psi for 4 hours, laterals 100 psi for 2 hours).</p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Math</th><th class="num">Hours</th></tr></thead>
<tbody>
<tr><td>Main tests: set up 1 h + test 4 h, 1 tech</td><td>4 sections × 5 h</td><td class="num">20</td></tr>
<tr><td>Lateral tests: set up 0.5 h + test 2 h, 1 tech</td><td>6 sections × 2.5 h</td><td class="num">15</td></tr>
<tr><td>Allowance for one retest of mains</td><td>1 × 5 h</td><td class="num">5</td></tr>
<tr><td>Coverage test and adjustments (801-5.7.3)</td><td>example 8 h</td><td class="num">8</td></tr>
<tr><td colspan="2"><strong>Total</strong></td><td class="num"><strong>48</strong></td></tr>
</tbody></table></div>
<p>At an example $75 per hour for an irrigation tech: 48 × $75 = <strong>$3,600</strong>. The same work under the base Caltrans Method A (1-hour test) would be far fewer hours. That's why you never copy test costs from a different spec family.</p>`,
  watch: `<p>The test hours can overlap with other work if the tech can do something useful while the gauge sits. Price what really happens on your crews, and keep records from past jobs (Module 9).</p>`,
  src: "Whitebook 2024 801-5.7.2.2 and 801-5.7.3. Section counts, hours and rates in this example are made up."
},

{ h: "Price changers 4 · Establishment, maintenance and warranty",
  lead: "After planting, you keep the job alive for a set period, then the owner accepts it. The length and the success rules decide the cost.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Spec</th><th>Period</th><th>Key rules</th></tr></thead>
<tbody>
<tr><td>Caltrans (11-428704)</td><td>Type 1, 250 working days</td><td>Starts after all other work is done. Days you don't do adequate work aren't credited. Seasonal watering schedules, fertilizer 1st week of April, July, September.</td></tr>
<tr><td>Whitebook 801-6</td><td>90 calendar days (plants, sod); 120 (seed or stolon lawns), unless the contract says otherwise</td><td>Weekly maintenance; fertilize every 4 weeks; 100% container plant survival; zero weed cover; replace unhealthy plants within 2 weeks; plant establishment period (PEP) extended if criteria not met</td></tr>
<tr><td>Private (project manual)</td><td>Varies: read 32 93 00 Part 1 and any maintenance section</td><td>Maintenance period, then a warranty period with plant replacement</td></tr>
</tbody></table></div>`,
  ex: `<p>The six bidders on 11-428704 priced plant establishment from $10,000 to $300,000 (Module 15). Same spec, same 250 working days. The difference was how each one read the spec.</p>`,
  watch: `<p>The Whitebook says if the plant establishment period ends before the City's final acceptance, you keep maintaining until final acceptance. A late GC or another trade can stretch your maintenance with no extra pay unless your contract says otherwise.</p>`,
  deeper: `<p>Caltrans 2018 SS 20-4.01B defines Type 1 (starts after all work except establishment is complete) and Type 2 (starts after planting is complete; the contract isn't accepted until the establishment work has been done for the required days). 20-4.01A: working days when you fail to do adequate establishment work are not credited, and days with unauthorized manual irrigation aren't credited either.</p>`,
  src: "SP 11-428704 20-4.01A, 20-4.01C(1), 20-4.03C; Caltrans 2018 SS 20-4.01; City of San Diego Whitebook 2024, 801-6."
},

{ h: "Caltrans Type 1 vs. Type 2 plant establishment",
  lead: "Both types are counted in working days. The difference is when the clock starts, and that changes how long you maintain and how long your money is tied up.",
  body: `<div class="twocol">
<div><h3>Type 1</h3><ul>
<li>Starts after <strong>all</strong> work is complete except plant establishment (and items that run to acceptance)</li>
<li>Planting may sit for weeks before the clock starts, while other work finishes; you care for it anyway</li>
<li>11-428704 is Type 1: 120 working days of work, then 250 working days of establishment</li>
</ul></div>
<div><h3>Type 2</h3><ul>
<li>Starts after <strong>planting</strong> is complete, even if other work continues</li>
<li>The contract isn't accepted until establishment has run the required days</li>
<li>Can overlap with the end of construction, so the job may finish sooner</li>
</ul></div>
</div>
<p><strong>Working days</strong> (2018 SS Section 1): every day except Saturdays and holidays (the holiday list includes every Sunday), and days when weather or other listed events stop the controlling work. 250 working days is roughly one calendar year: 52 weeks × 5 weekdays = 260, minus about a dozen holidays.</p>`,
  ex: `<p>What's credited (20-4.01A): working days when no work is required count anyway; days you fail to do adequate establishment work do not; a day you run the automatic system manually without authorization does not. Each uncredited day adds one more day of maintenance at your cost.</p>`,
  watch: `<p>On 11-428704 the SP adds: keep a neat site during establishment “including areas not visible to the public,” submit four seasonal watering schedules, operate the controllers using “external weather, learned flow, and other system data inputs” in automatic mode. Price a year of visits, not a few months.</p>`,
  src: "Caltrans 2018 SS Section 1 (working day, holiday), 20-4.01A, 20-4.01B; SP 11-428704 Notice to Bidders, 20-4.01A, 20-4.01C(1), 20-4.03A, 20-4.03G."
},

{ h: "City 90- and 120-day establishment, and native habitat",
  lead: "City periods are shorter and counted in calendar days, but the success rules are strict and the end date can slide.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Work type (Whitebook)</th><th>Plant establishment period</th><th>After that</th></tr></thead>
<tbody>
<tr><td>Permanently irrigated plants and sod (801-6)</td><td>90 calendar days</td><td>Final inspection; keep maintaining until Final Acceptance if other work isn't done</td></tr>
<tr><td>Seed or stolonized lawn (801-6)</td><td>120 calendar days</td><td>Same</td></tr>
<tr><td>Erosion control, re-vegetation, restoration (802)</td><td>120 calendar days</td><td>Maintenance and monitoring (M&amp;M) period: 25 months for re-vegetation or erosion control, 60 months for mitigation, unless otherwise specified</td></tr>
</tbody></table></div>
<ul>
<li>The PEP starts with a field notification after planting and the pre-maintenance punchlist are complete.</li>
<li>On City K-24-1952, “The 90 Calendar Day Plant Establishment Period is included in the stipulated Contract Time.” Your PEP eats into the 270 working days.</li>
</ul>`,
  ex: `<p><strong>Worked example (example rates for practice).</strong> A 90-day PEP is about 13 weekly visits (90 ÷ 7 = 12.9). At an example 6 crew-hours per visit × $70 per hour = $420 per visit; 13 × $420 = <strong>$5,460</strong>, plus fertilizer every 4 weeks (about 3 applications), plant replacements and water if it's yours to pay. A 25-month M&amp;M period on a native job is a different business: price it separately and carefully.</p>`,
  watch: `<p>Native habitat jobs under Whitebook 802 add a project biologist, success criteria for re-vegetation and long monitoring. Don't price them like a 90-day PEP.</p>`,
  src: "City of San Diego Whitebook 2024, 801-6 and 802 definitions (PEP, M&M period); City K-24-1952 section 6-1.1 item 4 and contract time. Hours and rates in the example are made up."
},

{ h: "Plant replacement rules: what you replace, and with what",
  lead: "Every establishment spec has replacement rules. Some make you upsize late replacements, which can cost more than the original plant.",
  body: `<p><strong>Caltrans 2018 SS 20-4.03F:</strong> up to the 125th establishment working day, replace with the same size. After that, replacements step up:</p>
<div class="tablewrap"><table>
<thead><tr><th>Original</th><th>Replacement after day 125</th></tr></thead>
<tbody>
<tr><td>Pot, liner, plug or seedling</td><td>No. 1 container</td></tr>
<tr><td>No. 1 container</td><td>No. 5 container</td></tr>
<tr><td>No. 5 container</td><td>No. 15 container</td></tr>
</tbody></table></div>
<p>Groundcover replacements are planted closer late in the period: original 12" spacing becomes 9" from day 126 to 190, and 6" after day 190. Original 36" becomes 24", then 18".</p>`,
  ex: `<ul>
<li><strong>Frost and water cutoffs (Caltrans 5-1.39C(1)):</strong> replacing plants damaged by temperatures below 32°F or by the Department or its supplier stopping water during establishment is change order work, not yours to absorb.</li>
<li><strong>Whitebook 801-6:</strong> replace unhealthy plants within 2 weeks of notice; 100% container plant survival.</li>
<li><strong>City K-24-1952:</strong> rejected plants replaced within one week of written notice.</li>
</ul>`,
  watch: `<p>Worked example (example prices for practice): 30 #1 plants die after day 125 on a Caltrans job. They must be replaced with #5 plants. At an example $9 for a #1 and $28 for a #5, plus $12 labor each: 30 × ($28 + $12) = <strong>$1,200</strong>, versus 30 × ($9 + $12) = $630 if they'd died early. Good early care is cheaper.</p>`,
  src: "Caltrans 2018 SS 20-4.03F, 5-1.39C(1); Whitebook 2024 801-6; City K-24-1952 special provisions 800-1.4.1 item 11."
},

{ h: "Warranty: what you promise after acceptance",
  lead: "Establishment ends at acceptance. The warranty keeps you on the hook after that. Read its length, what it covers, and when it starts.",
  body: `<p><strong>Whitebook 2024 3-13.3 (City of San Diego):</strong></p>
<ul>
<li>Repair all defective materials and workmanship for <strong>1 year</strong> from acceptance (or earlier beneficial use or occupancy).</li>
<li>Latent defects (hidden) warranted for 10 years; patent defects (visible) for 4 years.</li>
<li>Manufacturers' warranties start when the item is placed into service at the Engineer's written direction.</li>
<li>All warranties from subs, manufacturers and suppliers are assigned in writing to the City before acceptance.</li>
<li>If you don't repair within the time in the notice, the City may do it at your expense, and your surety (bond company) is liable if you don't pay.</li>
</ul>
<p><strong>Private jobs:</strong> look in 32 93 00 Part 1 (Warranty) and 32 84 00 Part 1. Plant warranties and irrigation warranties are often different lengths. Check whether replaced plants restart their own warranty.</p>`,
  ex: `<p><strong>Worked example (example numbers for practice).</strong> You expect 2% of 600 shrubs to fail in the warranty year: 0.02 × 600 = 12 plants. At an example $45 each installed, plus two service trips at $250 each: 12 × $45 + 2 × $250 = $540 + $500 = <strong>$1,040</strong> warranty reserve. Put it in the bid as a line, not as hope.</p>`,
  watch: `<p>Warranty usually excludes damage from vandalism, other trades, owner neglect and lack of water after turnover, but only if the contract says so. If it doesn't, write those exclusions into your proposal (Module 13).</p>`,
  src: "City of San Diego Whitebook 2024, 3-13.3. Failure rate and prices in the example are made up."
},

{ h: "Price changers 5 · Tests, as-builts, programming and extra stock",
  lead: "The last 5% of the job is mostly paperwork and small items. The spec lists every one, and each takes time or money.",
  body: `<ul>
<li><strong>Tests and inspections:</strong> pressure tests, coverage tests, backflow certification, pre-maintenance inspection, final inspection.</li>
<li><strong>As-builts / record drawings:</strong> a marked-up set kept current during the job, sometimes redrawn in CAD (computer-aided design) at the end. The Whitebook (3-7.3) requires red-lines kept current on a full-size set.</li>
<li><strong>Controller programming and charts:</strong> watering schedules, laminated zone charts in the controller, central-control setup.</li>
<li><strong>Training:</strong> Caltrans 20-4.01D requires training on the controllers “no more than 30 days before completion of the plant establishment period.”</li>
<li><strong>Extra stock:</strong> spare heads, nozzles, valve keys and controller keys turned over at the end.</li>
</ul>`,
  ex: `<p><strong>Worked example · Whitebook 800-2.5, extra equipment.</strong> The spec requires “Five (5) irrigation heads with nozzles of each type used for every 100 irrigation heads or portions thereof.” Your City job has 340 spray heads of one type and 85 rotors of another.</p>
<ul>
<li>Sprays: 340 ÷ 100 = 3.4, and “portions thereof” rounds up to 4. 4 × 5 = <strong>20 extra spray heads</strong>.</li>
<li>Rotors: 85 is one portion of 100. 1 × 5 = <strong>5 extra rotors</strong>.</li>
</ul>
<p>Plus 2 sets of special tools per head and valve type, valve keys and 2 sets of keys for each controller. Add them to your material list.</p>`,
  src: "City of San Diego Whitebook 2024, 800-2.5, 3-7.3; Caltrans 2018 SS 20-4.01D."
},

{ h: "Price changers 6 · Water use, MWELO and recycled water",
  lead: "California's water-efficient landscape rules shape the design, and they add paperwork at the end that the installer often has to deliver.",
  body: `<ul>
<li><strong>MWELO</strong> (Model Water Efficient Landscape Ordinance, California Code of Regulations, Title 23) applies to new landscapes of 500 SF or more and rehabilitated landscapes of 2,500 SF or more that need a permit, plan check or design review. Cities and counties can adopt their own ordinance if it is at least as effective in saving water.</li>
<li>For non-residential landscapes the water budget uses an evapotranspiration adjustment factor (ETAF) of 0.45 or less (0.55 for residential).</li>
<li>At the end, the project files a <strong>Certificate of Completion</strong>, which includes an irrigation audit report and proof that the soil report recommendations were carried out. The spec may make you responsible for the audit, the soil work, or both.</li>
<li><strong>Recycled water:</strong> purple pipe and parts, warning signs and tape, cross-connection testing, and no overspray or runoff, enforced locally by the San Diego County Department of Environmental Health (DEH) and the water agency.</li>
</ul>`,
  ex: `<p>11-428704 is a recycled-water job: ISS-1 note 3 requires purple or labeled equipment per DEH rules, ID-6 shows the recycled water warning sign (English and Spanish) and tape, and the mains test at 150 psi.</p>`,
  watch: `<p>MWELO was amended in 2025 and its section numbers changed. Check the current state text and the local agency's ordinance on each project. Don't rely on an old checklist.</p>`,
  src: "California Code of Regulations, Title 23, Division 2, Chapter 2.7 (MWELO), Department of Water Resources; ISS-1 and ID-6, contract 11-428704."
},

{ h: "A small rule with a big cost: weed germination",
  lead: "One sentence in a spec can add weeks to your schedule and days of crew time. Here's a real one.",
  body: `<p><strong>11-428704 Special Provisions (SP) 20-1.03E:</strong> “Do not perform planting work in weed germination areas for a period of 21 days after irrigation systems have been installed. For weed germination areas, keep the soil sufficiently moist to germinate weeds. Weeds that germinate must be controlled by the use of pesticides.”</p>
<ul>
<li><strong>Schedule:</strong> planting can't start in those areas until three weeks after the irrigation is done there.</li>
<li><strong>Water:</strong> you run the new system for 21 days with nothing planted.</li>
<li><strong>Labor and materials:</strong> a pesticide application after the weeds come up, using herbicides from the job's approved list in SP 20-1.02C.</li>
<li><strong>Sequence on PL-1:</strong> irrigation → weed germination → compost → planting → wood mulch.</li>
</ul>`,
  ex: `<p><strong>Example numbers for practice (use your own costs).</strong> If a 2-person spray crew costs you $120 per hour and treating the germination areas takes 2 days of 8 hours, that's 2 × 8 × $120 = <strong>$1,920</strong>, plus herbicide, plus site visits to check moisture during the 21 days. If you planned to plant the week after irrigation, your schedule just moved three weeks.</p>`,
  watch: `<p>Lines like this hide in the middle of long sections. Search the whole spec for words like “days,” “before,” “after,” “not until” and “notify.” Each one is a schedule rule.</p>`,
  src: "Special Provisions 20-1.02C, 20-1.03E; Plans PL-1, contract 11-428704."
},

{ h: "Using AI to pull requirements, then checking",
  lead: "AI can read a 300-page spec book in minutes and list the requirements. It also misses things and sometimes invents them. Use it for a first pass, then verify every line against the page.",
  body: `<ol class="steps">
<li><div><b>Give it the right text</b>The landscape and irrigation sections, Division 01 and the special provisions. For Caltrans, also the Standard Specifications sections they change.</div></li>
<li class="hl"><div><b>Ask for a table with section numbers</b>Requirement, section number, exact quote, cost impact (material, labor, test, submittal, schedule).</div></li>
<li><div><b>Check each row against the page</b>Find the section number and read the quote yourself. Delete anything you can't find.</div></li>
<li class="hl"><div><b>Search for what it missed</b>Use your checklist (later in this module). Search the PDF for “submit,” “test,” “days,” “warranty,” “maintain,” “equal,” “included in.”</div></li>
<li><div><b>Keep the checked table</b>It becomes your scope notes and the basis for your exclusions and clarifications (Module 13).</div></li>
</ol>`,
  exLabel: "Example request",
  ex: `<p>“From the attached Special Provisions section 20 and the 2018 Standard Specifications section 20, list every requirement that affects cost for irrigation, planting and plant establishment. For each one give the section number, the exact sentence, and whether it adds material, labor, testing, a submittal or a schedule limit. Note when a Special Provision replaces or adds to a Standard Specification. Don't summarize anything you can't quote.”</p>`,
  watch: `<p>Common AI mistakes with specs: mixing up the base Standard Specification and the job's change to it, missing “Replace” and “Delete” clauses, giving a number from a different section, and reading a sample table as a requirement. You sign the bid, so you check the pages.</p>`
},

{ h: "AI-assisted spec review, step by step",
  lead: "Break the review into small passes. Each pass asks one kind of question, and each answer gets checked before the next pass.",
  body: `<ol class="steps">
<li><div><b>Pass 1 · Map the book</b>Ask for a list of every section that mentions landscape, irrigation, planting, plant establishment, erosion control, water, or electrical service for irrigation, with page numbers. Check the list against the table of contents.</div></li>
<li class="hl"><div><b>Pass 2 · Requirements table</b>Use the example request on the previous slide, one division or section at a time. Smaller pieces mean fewer misses.</div></li>
<li><div><b>Pass 3 · Days and deadlines</b>Ask: “List every sentence containing a number of days, hours, or a deadline, with section number and exact quote.” This builds your submittal register and schedule rules.</div></li>
<li class="hl"><div><b>Pass 4 · Money words</b>Ask for every sentence with “included in,” “no additional payment,” “change order work,” “at your expense,” or “not paid separately.”</div></li>
<li><div><b>Pass 5 · Layer check (Caltrans)</b>For each “Add,” “Replace” or “Delete” in the Special Provisions, ask for the base Standard Specification text and the final combined rule. Then compare to the books yourself.</div></li>
<li class="hl"><div><b>Verify</b>Open the page for every row. Mark it right, wrong, or missing in a log (next slide).</div></li>
</ol>`,
  ex: `<p>Pass 3 on the 11-428704 Special Provisions should find, among others: 21 days for weed germination (20-1.03E), 10 days and 5 days for watering schedules (20-4.01C(1)), 15 days for controller modification instructions (20-10.02A(3)), and 15 working days' notice before work that disturbs vegetation (bird protection, SP 14-6.03A). If your AI tool misses any of these, it missed others too.</p>`,
  watch: `<p>Don't paste confidential private bid documents into a tool your company hasn't approved. Public agency specs are public; private project manuals may not be. Check with the GC or owner and your own policy.</p>`,
  src: "SP 11-428704 14-6.03A, 20-1.03E, 20-4.01C(1), 20-10.02A(3)."
},

{ h: "Verifying AI output: the check log",
  lead: "Keep a simple log of what the AI said and what the page says. It's proof of your review, and it trains you to spot the usual errors.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>#</th><th>AI said</th><th>Section and page checked</th><th>Result</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>1</td><td>“Recycled-water main tested at 125 psi for 1 hour”</td><td>SP 20-2.01A(4)(b)(i), p. 33</td><td>Wrong</td><td>SP modifies Method A to 150 psi</td></tr>
<tr><td>2</td><td>“Engineer inspects 2 plants per species”</td><td>SS 20-3.01A(4)</td><td>Partly wrong</td><td>Not less than 2, not more than 2% of each species</td></tr>
<tr><td>3</td><td>“Plant establishment 250 working days, Type 2”</td><td>SP 20-4.01A</td><td>Wrong</td><td>Type 1</td></tr>
<tr><td>4</td><td>“Controllers: Calsense or equal”</td><td>SP 20-2.06B(2)(a)</td><td>Wrong</td><td>“Must be Calsense”</td></tr>
<tr><td>5</td><td>“Weed germination 21 days after irrigation”</td><td>SP 20-1.03E</td><td>Right</td><td>None</td></tr>
<tr><td>6</td><td>(nothing about pest control adviser)</td><td>SS 20-1.01C</td><td>Missing</td><td>Add PCA recommendation 15 days before pesticide</td></tr>
</tbody></table></div>
<p class="small">Sample log. The “AI said” lines show typical errors to practice catching; they are not quotes from any specific tool.</p>`,
  watch: `<p>The most dangerous AI errors sound right: the base spec's number instead of the job's, “or equal” added where the spec is sole source, and a Type or class swapped. Check every number and every brand.</p>`,
  src: "SP 11-428704 20-1.03E, 20-2.01A(4)(b)(i), 20-2.06B(2)(a), 20-4.01A; Caltrans 2018 SS 20-1.01C, 20-3.01A(4)."
},

{ h: "Your spec checklist template",
  lead: "A checklist turns a 300-page book into one page of costs. Fill in one row per requirement that touches your price.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Topic</th><th>Section</th><th>Requirement (short quote)</th><th>Cost type</th><th>Priced how</th><th>Question / clarification</th></tr></thead>
<tbody>
<tr><td>Pressure test</td><td>SP 20-2.01A(4)(b)(i)</td><td>Recycled main, Method A, 150 psi</td><td>Labor, test</td><td>Hours per section + retest</td><td>None</td></tr>
<tr><td>Controllers</td><td>SP 20-2.06B(2)(a)</td><td>“Must be Calsense,” quoted prices</td><td>Material</td><td>Quote + tax + delivery</td><td>Quote valid after April 14, 2022?</td></tr>
<tr><td>Valve tags</td><td>SP 20-2.01B(7)</td><td>Polyurethane tag, stamped both sides, 1" letters</td><td>Material, labor</td><td>Per valve</td><td>None</td></tr>
<tr><td>Weed germination</td><td>SP 20-1.03E</td><td>No planting for 21 days after irrigation</td><td>Schedule, labor</td><td>Water, spray, 3-week gap</td><td>None</td></tr>
<tr><td>Plant establishment</td><td>SP 20-4.01A</td><td>Type 1, 250 working days</td><td>Labor, material</td><td>Visits × cost, fertilizer 3×/yr</td><td>Water cost by whom?</td></tr>
<tr><td>Tree holes</td><td>SP 20-3.02D</td><td>Included in plant (group K)</td><td>Payment rule</td><td>Inside tree price</td><td>None</td></tr>
</tbody></table></div>
<p class="small">Sample rows from 11-428704. Copy the columns into your own spreadsheet.</p>`,
  ex: `<p>Use the checklist slide that follows to score your review. A row you can't fill in completely is a question to send (Module 12) or a clarification to write (Module 13).</p>`,
  watch: `<p>The checklist only works if you quote the real section. A row that says “testing: normal” is useless when the GC asks why your price is higher than the next bid.</p>`,
  src: "SP 11-428704 20-1.03E, 20-2.01A(4)(b)(i), 20-2.01B(7), 20-2.06B(2)(a), 20-3.02D, 20-4.01A."
},

{ t: "scorer", id: "speccheck", h: "Reusable spec checklist",
  lead: "Run this on every bid. Score each line: 2 = found and priced, 1 = found but unclear (write an RFI, a request for information, or a clarification), 0 = not checked yet. Your choices are saved in this browser.",
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

{ h: "Common spec-reading mistakes",
  lead: "These are the spec mistakes that show up again and again in landscape bids. Each one has a simple fix.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>What it costs</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Reading the Special Provisions without the Standard Specifications</td><td>You miss the base rule the SP changes</td><td>Open both side by side</td></tr>
<tr><td>Using last job's spec from memory</td><td>Wrong test pressure, period or warranty</td><td>Read every job's sections fresh</td></tr>
<tr><td>Skipping Division 00 and 01</td><td>Insurance, retention, liquidated damages and water costs missed</td><td>Front-end checklist on every bid</td></tr>
<tr><td>Pricing an unapproved “equal”</td><td>Buying the specified product at your cost after award</td><td>Price the named product until approved in writing</td></tr>
<tr><td>Ignoring “included in”</td><td>Work done for free, or priced twice</td><td>Search for payment words</td></tr>
<tr><td>Not pricing holds and retests</td><td>Crew hours lost waiting</td><td>Add hold time per inspection</td></tr>
<tr><td>Assuming establishment ends on time</td><td>Weeks of unpaid maintenance</td><td>Read the extension and “until Final Acceptance” clauses; clarify in the proposal</td></tr>
<tr><td>Trusting AI output without checking</td><td>Wrong numbers in your bid</td><td>Check log for every row</td></tr>
</tbody></table></div>`,
  watch: `<p>Most of these come from rushing. Spec reading takes hours on a big job. Put the time in your bid calendar the day you decide to bid (Module 3).</p>`
},

{ h: "Scenarios: what would you do?",
  lead: "Short, real-world situations. Decide your move, then read the answer.",
  body: `<ol class="steps">
<li><div><b>The specified controller has a 16-week lead time.</b>Note it in your schedule. Ask the supplier for a written lead time. If the spec allows “or equal,” propose a substitute through the proper channel before bid; if not, order right after award and tell the GC in your proposal.</div></li>
<li class="hl"><div><b>The spec says “per soils report,” and there is no report.</b>Price a stated amendment rate and say so in your proposal. Changes from the report get priced as a change.</div></li>
<li><div><b>The GC's scope sheet says “maintenance per plans,” but the spec says 90 days plus “until Final Acceptance.”</b>Price 90 days, state it, and add a monthly rate for maintenance beyond 90 days that isn't your delay.</div></li>
<li class="hl"><div><b>A City job names a valve brand, and your supplier says another is “the same.”</b>Whitebook 4-6: bid the named product. A pre-bid substitution request needs an answer 3 working days before bid due; no answer means denied.</div></li>
<li><div><b>The project manual has no warranty article in 32 93 00.</b>Search Division 01 and the general conditions for warranty. If none, state your warranty in the proposal (Module 13).</div></li>
</ol>`,
  watch: `<p>The pattern: find the governing words, price what they say, and write down every assumption. Silence is what turns a spec question into a loss.</p>`,
  src: "Whitebook 2024 4-6 and 801-6."
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook. The full list of trade words is in the Bid Dictionary.",
  terms: [
    ["Specifications (specs)", "The written requirements for products, methods, tests and paperwork."],
    ["Project manual", "The book of bidding forms, contract terms and technical specs for a private or building project."],
    ["Order of precedence", "The contract rule for which document wins when two conflict."],
    ["Standard Specifications (SS)", "An agency's base spec book used on every job (Caltrans 2018 edition)."],
    ["Revised Standard Specifications (RSS)", "Caltrans statewide updates to the Standard Specifications."],
    ["Special Provisions (SP)", "Job-specific rules, written as changes to the standard specs."],
    ["Greenbook", "Standard Specifications for Public Works Construction, used by many Southern California agencies."],
    ["Whitebook", "The City of San Diego's supplement to the Greenbook. It governs over the Greenbook on City jobs."],
    ["SSP", "Supplemental Special Provisions: job rules on a City of San Diego contract."],
    ["CSI MasterFormat", "The standard numbering system for project manuals (CSI = Construction Specifications Institute)."],
    ["Division 32", "MasterFormat's Exterior Improvements division, where landscape and irrigation live."],
    ["Three-part format", "Part 1 General, Part 2 Products, Part 3 Execution."],
    ["Front end", "Divisions 00 and 01: bid forms, contract, conditions and general requirements."],
    ["Supplementary conditions", "Changes to the general conditions for one project."],
    ["Furnish / install / provide", "Supply it / put it in / both supply and put it in."],
    ["Included in", "Paid as part of another item, not separately."],
    ["Change order work", "Extra work paid by a change to the contract, not in your bid."],
    ["Or equal", "Spec wording that allows an approved product equal to the named one."],
    ["Sole source", "Only one named product is allowed."],
    ["Substitution request", "A formal request to use a product other than the one specified."],
    ["AML", "Approved Materials List: City of San Diego list of accepted products."],
    ["Submittal", "Product data, samples or reports sent for approval before you buy or install."],
    ["Informational submittal", "A submittal sent for the record that doesn't need approval."],
    ["Submittal register", "A table of every submittal with its deadline and status."],
    ["Vendor statement", "Nursery letter confirming your plant order was accepted."],
    ["Hold point", "A step where work stops until the inspector checks it."],
    ["Agronomic soil test", "Lab test of soil fertility and chemistry with amendment recommendations."],
    ["PCA", "Pest control adviser: licensed person who writes pesticide recommendations."],
    ["Plant establishment period (PEP)", "The required care period after planting, before acceptance."],
    ["Type 1 / Type 2 establishment", "Caltrans: clock starts after all work / after planting is complete."],
    ["Working day", "Caltrans: any day except Saturdays, holidays (including Sundays) and days the controlling work is stopped by listed causes."],
    ["M&M period", "Maintenance and monitoring period on City native habitat jobs (25 or 60 months)."],
    ["Liquidated damages (LD)", "A set daily charge for finishing late."],
    ["Warranty (latent / patent defects)", "Promise to fix defects after acceptance; hidden / visible defects."],
    ["Record drawings / as-builts", "Plans marked up to show what was actually installed."],
    ["MWELO", "California's Model Water Efficient Landscape Ordinance."]
  ]
},

{ t: "quiz", id: "m5", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "On a Caltrans job, the Special Provisions and the Standard Specifications disagree. Which governs?", a: ["The Standard Specifications", "The Special Provisions", "Whichever is cheaper"], c: 1, why: "Caltrans 5-1.02 ranks the special provisions first." },
    { q: "On a City of San Diego job, the Whitebook and the Greenbook conflict. Which controls?", a: ["The Greenbook", "The Whitebook", "Neither; you choose"], c: 1, why: "The City says the Whitebook controls if there is a conflict, and it ranks above the Greenbook in 3-7.2." },
    { q: "Which CSI section would you open first for valves, heads and controllers?", a: ["32 84 00 Planting Irrigation", "32 93 00 Plants", "01 33 00 Submittal Procedures"], c: 0, why: "32 84 00 covers planting irrigation products and installation." },
    { q: "In a CSI section, where is the warranty usually found?", a: ["Part 1 General", "Part 2 Products", "Part 3 Execution"], c: 0, why: "Warranty, submittals and quality assurance are in Part 1." },
    { q: "What test pressure did 11-428704 require for recycled-water mains?", a: ["100 psi", "125 psi", "150 psi"], c: 2, why: "The Special Provisions modified Method A to 150 psi for recycled-water mains (base is 125 psi)." },
    { q: "Under Caltrans 20-3.01A(4), how many plants of a 600-plant species can the Engineer root-inspect at most?", a: ["2", "12", "60"], c: 1, why: "Not more than 2% of each species: 2% × 600 = 12." },
    { q: "A Whitebook job has 230 spray heads of one type. How many extra spray heads must you turn over?", a: ["10", "15", "12"], c: 1, why: "5 per 100 or portion: 230 is 3 portions, so 3 × 5 = 15." },
    { q: "AI gave you a list of spec requirements. What do you do next?", a: ["Price them as listed", "Check each one against the section and page, then search for what it missed", "Ask AI to double-check itself"], c: 1, why: "AI misses and invents items. You verify against the actual pages." },
    { q: "When does a Caltrans Type 1 plant establishment period start?", a: ["When planting is complete", "After all work except plant establishment is complete", "On the day the contract is awarded"], c: 1, why: "2018 SS 20-4.01B: Type 1 starts after all work has been completed except plant establishment." },
    { q: "Under Whitebook 801-6, how long is the PEP for permanently irrigated plants, unless the contract says otherwise?", a: ["90 calendar days", "120 working days", "250 working days"], c: 0, why: "801-6 sets 90 calendar days for permanently irrigated plants and sod, 120 for seed or stolonized lawns." },
    { q: "On a City job you ask before bid to use a different valve brand. The Engineer never answers. What is the result?", a: ["Approved by silence", "Deemed denied; bid the named product", "You may choose either"], c: 1, why: "Whitebook 4-6: if the Engineer doesn't respond at least 3 working days before bid, the request is deemed denied." },
    { q: "On a Caltrans job, a #1 plant dies on the 150th establishment working day. What size replaces it?", a: ["#1", "#5", "#15"], c: 1, why: "20-4.03F: after day 125, a No. 1 container is replaced with a No. 5." },
    { q: "A spec says the work is “included in” another bid item. What does that mean?", a: ["It is paid separately at a unit price", "Its cost goes inside the named item's price", "It is change order work"], c: 1, why: "“Included in” means no separate payment; price it inside the named item." },
    { q: "A Caltrans job with a $1.2 million total bid finishes 10 working days late on the main work. Liquidated damages?", a: ["$9,500", "$40,000", "$4,000"], c: 1, why: "2018 SS 8-1.10A: $4,000 per day for a total bid over $1M to $2M; 10 × $4,000 = $40,000." },
    { q: "What does “provide” usually mean in a spec?", a: ["Furnish only", "Install only", "Furnish and install"], c: 2, why: "Provide usually means furnish and install. Check the definitions in each contract." }
  ]
},

{ t: "practice", id: "m5", h: "Practice assignments",
  lead: "Seven and a half hours with real spec books. Keep your notes; you'll use them in Modules 6, 7 and 15.",
  items: [
    { h: "Read Caltrans Section 20", hrs: 0.75, d: "<p>Download the 2018 Standard Specifications from <a href=\"https://dot.ca.gov/programs/design/2018-ccs-standard-plans-and-standard-specifications\" target=\"_blank\" rel=\"noopener\">Caltrans</a>. Read 5-1.02 and Section 20 parts 20-2.01A (irrigation submittals and testing), 20-3.01A (plant submittals and quality) and 20-4.01 (plant establishment). Write five requirements that cost money, with section numbers.</p>" },
    { h: "Map the layers on 11-428704", hrs: 0.75, d: "<p>Open the Special Provisions from <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>. For five landscape topics (pressure testing, flow sensors, controllers, plant establishment, compost), write down the Standard Specification section, what the Special Provision does to it (add, replace, delete) and the final rule.</p>" },
    { h: "Find your way around the Whitebook", hrs: 0.75, d: "<p>Download the current Whitebook from the <a href=\"https://www.sandiego.gov/ecp/edocref/whitebook-san-diego-supplement-greenbook\" target=\"_blank\" rel=\"noopener\">City of San Diego</a>. Find and summarize: 3-7.2 precedence, 800-1.1.2 topsoil testing, 800-2.5 extra equipment, 801-5.7.2.2 pressure test, and 801-6 plant establishment.</p>" },
    { h: "Read one private Division 32 section", hrs: 1, d: "<p>Get a project manual with landscape sections from a GC invitation or a school or college bid. Read 32 84 00 or 32 93 00 fully. Mark every item in Parts 1, 2 and 3 that changes price. Note the warranty, maintenance period, named brands and tests.</p>" },
    { h: "Test AI on a spec, then check it", hrs: 0.5, d: "<p>Give an AI tool the 11-428704 Special Provisions Section 20 with the example request from this module. Check every row against the page. Count how many were right, wrong or missing. Write down what you'd do differently next time.</p>" },
    { h: "Score a real job on the spec checklist", hrs: 0.5, d: "<p>Run the spec checklist on the private section you read (or on 11-428704). For every line scored 1, write the RFI or proposal clarification you'd send.</p>" },
    { h: "Look up water-efficient landscape rules", hrs: 0.25, d: "<p>Find which water-efficient landscape ordinance applies in the City of San Diego and one other city where you work, and what the Certificate of Completion requires. Note who signs it and whether an irrigation audit is required.</p>" },
    { h: "Read one section line by line", hrs: 0.5, d: "<p>Pick Caltrans 2018 SS 20-4.03F (replacement plants) or Whitebook 801-5.7.3 (sprinkler coverage test). Make a three-column table like the line-by-line slides: what the spec says, what it means in plain words, and the cost to price. Do every sentence.</p>" },
    { h: "Build a submittal register", hrs: 0.75, d: "<p>Using the 11-428704 Special Provisions and the 2018 Standard Specifications Section 20, build a submittal register with at least 12 rows: submittal, section, deadline, type (for review or informational), and responsible person. Then pick a planting start date and count back every deadline on a calendar.</p>" },
    { h: "Compare establishment and warranty on two jobs", hrs: 0.75, d: "<p>Compare 11-428704 (Type 1, 250 working days) with a City job under Whitebook 801-6 (90 calendar days) and, if you have one, a private 32 93 00 section. For each, write the start rule, length, success criteria, replacement rules, extension risk and warranty. Estimate the number of maintenance visits for each, with your own crew costs.</p>" },
    { h: "Front-end cost list", hrs: 0.5, d: "<p>From the 11-428704 Notice to Bidders and Special Provisions, list every front-end item that costs money: working days, liquidated damages rate for a bid of your choice, bid security, DBE goal, wage rules, partnering, insurance limits. Then do the same from a City of San Diego bid package found on <a href=\"https://www.sandiego.gov/purchasing/bids-contracts\" target=\"_blank\" rel=\"noopener\">the City's bid page</a>.</p>" },
    { h: "Write a substitution request", hrs: 0.5, d: "<p>Pick one specified irrigation product from a real spec (a controller, valve or backflow preventer). Using the template in this module, write a complete substitution request for a different brand, with a side-by-side difference table built from the two manufacturers' published cut sheets. Note the deadline that would apply under that spec.</p>" }
  ]
},

{ h: "Module 5 summary",
  lead: "You can now find, read and price the specifications. Next, you'll start counting: the irrigation takeoff.",
  body: `<ul>
<li>Plans show where and how much. Specs show what, how well, and how you prove it.</li>
<li>Know the order of precedence for each spec family. Use it like a ladder, and ask about conflicts before bid day.</li>
<li>Caltrans: Standard Specifications + revisions + Special Provisions. City of San Diego: Greenbook + Whitebook + special provisions. Private: project manual by CSI number. Read every requirement line by line and cite it by number.</li>
<li>Read Part 1 of every Division 32 section fully, and the front end for time, liquidated damages, insurance, retention and closeout.</li>
<li>The big price changers: named products and substitution rules, submittals and their deadlines, soil tests, plant inspection, tests and hold points, establishment (Caltrans Type 1 or 2; City 90 or 120 days), plant replacement, warranty, closeout and water rules.</li>
<li>Use AI in small passes, verify every row against the page in a check log, and run your checklist on every bid.</li>
</ul>
<p><strong>Next: Module 6 · Irrigation Takeoff</strong></p>`
}
]
});
