(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 5, hours: 6, title: "Reading Specifications",
slides: [

{ t: "cover",
  h: "Reading Specifications",
  lead: "The plans show what to build and where. The specifications say what quality, which products, what tests and what paperwork. Most hidden costs in a commercial landscape bid are in the specs.",
  objectives: [
    "Explain the difference between plans and specs, and which one governs when they conflict",
    "Find your way around a project manual using CSI MasterFormat and Division 32",
    "Read a spec section in its three parts: General, Products, Execution",
    "Understand how Caltrans, Greenbook/Whitebook and private specs are layered",
    "Find the spec requirements that change a landscape price",
    "Use AI to pull spec requirements, then check them against the pages",
    "Build and use a reusable spec checklist on every bid"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "4.5 h"], ["Module total", "6 h"]],
  body: `<p>Real examples come from the Special Provisions of Caltrans contract 11-428704 (download from <a href="#lab-11-428704">Real Bid Lab · 11-428704</a>), the 2018 Caltrans Standard Specifications, and the City of San Diego Whitebook.</p>`,
  src: "Caltrans 11-428704 Notice to Bidders and Special Provisions; Caltrans 2018 Standard Specifications; City of San Diego Whitebook, 2024 edition."
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
  ex: `<p>On 11-428704, the plans show a 4" Class 315 recycled-water main, 7,493 LF. The Special Provisions add that recycled-water mains are pressure tested “by method A with the testing pressure modified to 150 psi,” that the warning tape must be purple, at least 5 mil thick, with a metallic strip, marked “Caution Reclaimed Water Line Buried Below,” and run along the whole trench. None of that is on the plan view, and all of it costs money.</p>`,
  watch: `<p>On private work, specs are often a separate book (the project manual) that the GC doesn't send unless you ask. Always ask for the landscape and irrigation sections and Division 01. Pricing from plans alone means guessing at the specs.</p>`,
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

{ h: "The three spec families in San Diego",
  lead: "Almost every commercial landscape job you bid will use one of three spec systems. Know which one before you start reading.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Family</th><th>Who uses it</th><th>How it's built</th></tr></thead>
<tbody>
<tr><td><strong>Caltrans</strong></td><td>State highway jobs; some local road jobs that reference it</td><td>2018 Standard Specifications + Revised Standard Specifications + job Special Provisions + Standard Plans. Landscape is Section 20.</td></tr>
<tr><td><strong>Greenbook + agency supplement</strong></td><td>City of San Diego (with its Whitebook) and many other Southern California cities and agencies, often with their own supplement or special provisions</td><td>Greenbook (Standard Specifications for Public Works Construction) + supplement + project special provisions. Landscape is Part 8 (Sections 800, 801).</td></tr>
<tr><td><strong>Project manual (CSI)</strong></td><td>Private work, schools, colleges, many public buildings</td><td>Front end (Divisions 00, 01) + technical sections by CSI MasterFormat number. Landscape is Division 32.</td></tr>
</tbody></table></div>`,
  ex: `<p>A Chula Vista freeway job uses Caltrans. A City of San Diego median retrofit uses the Greenbook and Whitebook. A new medical office for a private developer uses a project manual with sections 32 84 00 and 32 93 00. School districts often use a project manual too, with their own Division 00 forms.</p>`,
  watch: `<p>Check which <em>edition</em> the contract names. The City lists the Whitebook 2024 edition as effective April 1, 2026, and the 2021 edition before it. A job advertised under one edition stays under it. Read the right book.</p>`,
  src: "City of San Diego, “The WHITEBOOK: San Diego Supplement to the GREENBOOK” page; Caltrans 2018 CCS Standard Plans and Standard Specifications page."
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

{ h: "Greenbook and the City of San Diego Whitebook",
  lead: "The Greenbook is the base public works spec used across Southern California. The City of San Diego's Whitebook changes it for City jobs, and the Whitebook wins when they conflict.",
  body: `<ul>
<li>The <strong>Greenbook</strong> must be bought from its publisher. The <strong>Whitebook</strong> is a free download from the City.</li>
<li>Whitebook changes use phrases like “DELETE in its entirety and SUBSTITUTE with the following” and “ADD the following.”</li>
<li>Landscape is <strong>Part 8</strong>: 800 Materials (topsoil, amendments, mulch, plants, pipe, valves, controllers), 801 Installation (soil prep, planting, irrigation, testing, plant establishment), 802 Native habitat.</li>
<li>City projects then add <strong>Supplemental Special Provisions</strong> for that job.</li>
</ul>`,
  ex: `<p>Same task, three specs. Pressure testing a mainline:</p>
<div class="tablewrap"><table>
<thead><tr><th>Spec</th><th class="num">Test pressure</th><th class="num">Duration</th></tr></thead>
<tbody>
<tr><td>Caltrans 2018 SS, Method A</td><td class="num">125 psi</td><td class="num">1 hour</td></tr>
<tr><td>11-428704 SP, recycled-water main</td><td class="num">150 psi</td><td class="num">1 hour</td></tr>
<tr><td>Whitebook 801-5.7.2.2, pressurized mains</td><td class="num">125 psi</td><td class="num">4 hours</td></tr>
<tr><td>Whitebook 801-5.7.2.2, non-pressurized laterals</td><td class="num">100 psi</td><td class="num">2 hours</td></tr>
</tbody></table></div>
<p>Same pipe, different rules. Never assume the last job's spec.</p>`,
  src: "City of San Diego Whitebook 2024, Part 8, 801-5.7.2.2; Caltrans 2018 SS 20-2.01A(4)(b)(ii); SP 11-428704."
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

{ h: "The front end: Divisions 00 and 01",
  lead: "Landscape estimators often skip the front end. That's where bid forms, insurance, bonds, retention, submittal rules and closeout live.",
  body: `<ul>
<li><strong>Instructions to bidders and bid form:</strong> due date, what to submit, alternates, unit prices, addenda acknowledgment.</li>
<li><strong>Agreement and general conditions</strong> (often an AIA or ConsensusDocs form on private jobs): payment, retention, changes, claims, termination.</li>
<li><strong>Supplementary conditions:</strong> changes to the general conditions for this job. Read them; they often change retention, insurance or schedule rules.</li>
<li><strong>Insurance and bonds:</strong> limits, endorsements, performance and payment bonds (Module 2).</li>
<li><strong>Submittal procedures</strong> (01 33 00): format, number of copies, review time, resubmittals.</li>
<li><strong>Quality requirements, temporary facilities</strong> (water, power, sanitation, fencing).</li>
<li><strong>Closeout</strong> (01 77 00, 01 78 00): record drawings, O&amp;M manuals, warranties, training, extra stock.</li>
</ul>`,
  ex: `<p>On a sub bid, the GC may not send you the front end. Ask for at least the supplementary conditions, insurance requirements, Division 01 and the subcontract form. They change your overhead, your cash flow and your risk.</p>`,
  watch: `<p>A short review time for submittals (or long one for the owner to answer) changes your schedule. A “provide water for construction” line in Division 01 means you pay for water and a meter or hydrant permit.</p>`
},

{ h: "Price changers 1 · Products, “or equal” and submittals",
  lead: "A spec that names one brand can lock in your cost. A spec that allows “or equal” still makes you prove it, on paper, on time.",
  body: `<ul>
<li><strong>Named brand only (sole source):</strong> you must use it. Get a quote from a distributor who carries it.</li>
<li><strong>Named brand “or equal”:</strong> you may propose another product, but the designer or agency decides if it's equal. Price the named product unless you have approval.</li>
<li><strong>Submittals:</strong> product data, samples, plant lists, nursery tags, soil tests. Each takes office time; some take testing fees.</li>
</ul>`,
  ex: `<p>11-428704 SP 20-2.06B(2)(a): controllers “must be Calsense and must have 2-way communication.” Caltrans then lists quoted prices from a named supplier (before tax and delivery), for example a Calsense 40-station base model for controller '97B' at $9,743.66, and in SP 20-2.05B the Calsense FM-2 2" flow sensor at $543.25 each (4 = $2,173.00). Prices “good until April 14, 2022.” You get real material costs, but you must still add tax, delivery and installation.</p>
<p>Submittal timing from the same job: the vendor statement that your plant order was accepted is due at least 60 days before planting (2018 SS 20-3.01A(3)(b)). Manufacturer's instructions for controller modification are due 15 days before installing (SP 20-10.02A(3)).</p>`,
  deeper: `<p>California Public Contract Code §3400 generally bars public agencies from writing specs that limit bidding to one brand unless “or equal” follows. It allows a brand-only spec when the agency makes a finding described in the bid documents, for reasons such as a field test, matching others in use on a public improvement, an item available from only one source, or an emergency. Check the current text on leginfo.legislature.ca.gov.</p>`,
  src: "SP 11-428704 20-2.05B, 20-2.06B(2)(a), 20-10.02A(3); Caltrans 2018 SS 20-3.01A(3)(b); Cal. Public Contract Code §3400."
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
<p><strong>11-428704:</strong> compost at 200 CY per acre (PL-1 sequence of work), and SP 21-2.02K sets compost quality limits by lab test methods (pH 6 to 8.5, soluble salts, organic matter, maturity, pathogens, contaminants). Your compost supplier must provide test results that meet them.</p>`,
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
<li>Reference standards such as ANSI Z60.1 (American Standard for Nursery Stock) are common in private specs.</li>
</ul>`,
  ex: `<p><strong>Caltrans 2018 SS 20-3.01A(4):</strong> the Engineer inspects roots by removing earth from the root ball of “not less than 2 plants, nor more than 2 percent of the total number of plants of each species or variety.” If the sample fails, “the entire lot represented by the noncompliant sample plants is rejected.” You must notify the Engineer at least 10 days before plants ship (20-3.01B(1)).</p>
<p><strong>Worked example:</strong> 450 plants of one species. Maximum inspected: 2% × 450 = 9 plants. Minimum: 2. Those plants are pulled apart; order a few extra so you still have 450 to plant.</p>`,
  watch: `<p>Ask your nursery to hold your order and confirm in writing (Caltrans wants a vendor statement 60 days before planting). Plants that are short in the market at planting time get substituted only with approval, which can take weeks.</p>`,
  src: "Caltrans 2018 Standard Specifications 20-3.01A(3)(b), 20-3.01A(4), 20-3.01B(1)."
},

{ h: "Price changers 4 · Establishment, maintenance and warranty",
  lead: "After planting, you keep the job alive for a set period, then the owner accepts it. The length and the success rules decide the cost.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Spec</th><th>Period</th><th>Key rules</th></tr></thead>
<tbody>
<tr><td>Caltrans (11-428704)</td><td>Type 1, 250 working days</td><td>Starts after all other work is done. Days you don't do adequate work aren't credited. Seasonal watering schedules, fertilizer 1st week of April, July, September.</td></tr>
<tr><td>Whitebook 801-6</td><td>90 calendar days (plants, sod); 120 (seed or stolon lawns), unless the contract says otherwise</td><td>Weekly maintenance; fertilize every 4 weeks; 100% container plant survival; zero weed cover; replace unhealthy plants within 2 weeks; PEP extended if criteria not met</td></tr>
<tr><td>Private (project manual)</td><td>Varies: read 32 93 00 Part 1 and any maintenance section</td><td>Maintenance period, then a warranty period with plant replacement</td></tr>
</tbody></table></div>`,
  ex: `<p>The six bidders on 11-428704 priced plant establishment from $10,000 to $300,000 (Module 15). Same spec, same 250 working days. The difference was how each one read the spec.</p>`,
  watch: `<p>The Whitebook says if the plant establishment period ends before the City's final acceptance, you keep maintaining until final acceptance. A late GC or another trade can stretch your maintenance with no extra pay unless your contract says otherwise.</p>`,
  deeper: `<p>Caltrans 2018 SS 20-4.01B defines Type 1 (starts after all work except establishment is complete) and Type 2 (starts after planting is complete; the contract isn't accepted until the establishment work has been done for the required days). 20-4.01A: working days when you fail to do adequate establishment work are not credited, and days with unauthorized manual irrigation aren't credited either.</p>`,
  src: "SP 11-428704 20-4.01A, 20-4.01C(1), 20-4.03C; Caltrans 2018 SS 20-4.01; City of San Diego Whitebook 2024, 801-6."
},

{ h: "Price changers 5 · Tests, as-builts, programming and extra stock",
  lead: "The last 5% of the job is mostly paperwork and small items. The spec lists every one, and each takes time or money.",
  body: `<ul>
<li><strong>Tests and inspections:</strong> pressure tests, coverage tests, backflow certification, pre-maintenance inspection, final inspection.</li>
<li><strong>As-builts / record drawings:</strong> a marked-up set kept current during the job, sometimes redrawn in CAD at the end. The Whitebook (3-7.3) requires red-lines kept current on a full-size set.</li>
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
<li><strong>Recycled water:</strong> purple pipe and parts, warning signs and tape, cross-connection testing, and no overspray or runoff, enforced locally by San Diego County DEH and the water agency.</li>
</ul>`,
  ex: `<p>11-428704 is a recycled-water job: ISS-1 note 3 requires purple or labeled equipment per DEH rules, ID-6 shows the recycled water warning sign (English and Spanish) and tape, and the mains test at 150 psi.</p>`,
  watch: `<p>MWELO was amended in 2025 and its section numbers changed. Check the current state text and the local agency's ordinance on each project. Don't rely on an old checklist.</p>`,
  src: "California Code of Regulations, Title 23, Division 2, Chapter 2.7 (MWELO), Department of Water Resources; ISS-1 and ID-6, contract 11-428704."
},

{ h: "A small rule with a big cost: weed germination",
  lead: "One sentence in a spec can add weeks to your schedule and days of crew time. Here's a real one.",
  body: `<p><strong>11-428704 SP 20-1.03E:</strong> “Do not perform planting work in weed germination areas for a period of 21 days after irrigation systems have been installed. For weed germination areas, keep the soil sufficiently moist to germinate weeds. Weeds that germinate must be controlled by the use of pesticides.”</p>
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
<li class="hl"><div><b>Search for what it missed</b>Use your checklist (next slide). Search the PDF for “submit,” “test,” “days,” “warranty,” “maintain,” “equal,” “included in.”</div></li>
<li><div><b>Keep the checked table</b>It becomes your scope notes and the basis for your exclusions and clarifications (Module 13).</div></li>
</ol>`,
  exLabel: "Example request",
  ex: `<p>“From the attached Special Provisions section 20 and the 2018 Standard Specifications section 20, list every requirement that affects cost for irrigation, planting and plant establishment. For each one give the section number, the exact sentence, and whether it adds material, labor, testing, a submittal or a schedule limit. Note when a Special Provision replaces or adds to a Standard Specification. Don't summarize anything you can't quote.”</p>`,
  watch: `<p>Common AI mistakes with specs: mixing up the base Standard Specification and the job's change to it, missing “Replace” and “Delete” clauses, giving a number from a different section, and reading a sample table as a requirement. You sign the bid, so you check the pages.</p>`
},

{ t: "scorer", id: "speccheck", h: "Reusable spec checklist",
  lead: "Run this on every bid. Score each line: 2 = found and priced, 1 = found but unclear (write an RFI or a clarification), 0 = not checked yet. Your choices are saved in this browser.",
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
  lead: "Add these to your notebook.",
  terms: [
    ["Specifications (specs)", "The written requirements for products, methods, tests and paperwork."],
    ["Project manual", "The book of bidding forms, contract terms and technical specs for a private or building project."],
    ["Order of precedence", "The contract rule for which document wins when two conflict."],
    ["Standard Specifications", "An agency's base spec book used on every job (Caltrans 2018 edition)."],
    ["Revised Standard Specifications (RSS)", "Caltrans statewide updates to the Standard Specifications."],
    ["Special Provisions (SP)", "Job-specific rules, written as changes to the standard specs."],
    ["Greenbook", "Standard Specifications for Public Works Construction, used by many Southern California agencies."],
    ["Whitebook", "The City of San Diego's supplement to the Greenbook. It governs over the Greenbook on City jobs."],
    ["CSI MasterFormat", "The standard numbering system for project manuals."],
    ["Division 32", "MasterFormat's Exterior Improvements division, where landscape and irrigation live."],
    ["Three-part format", "Part 1 General, Part 2 Products, Part 3 Execution."],
    ["Front end", "Divisions 00 and 01: bid forms, contract, conditions and general requirements."],
    ["Supplementary conditions", "Changes to the general conditions for one project."],
    ["Or equal", "Spec wording that allows an approved product equal to the named one."],
    ["Sole source", "Only one named product is allowed."],
    ["Submittal", "Product data, samples or reports sent for approval before you buy or install."],
    ["Agronomic soil test", "Lab test of soil fertility and chemistry with amendment recommendations."],
    ["Plant establishment period (PEP)", "The required care period after planting, before acceptance."],
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
    { q: "AI gave you a list of spec requirements. What do you do next?", a: ["Price them as listed", "Check each one against the section and page, then search for what it missed", "Ask AI to double-check itself"], c: 1, why: "AI misses and invents items. You verify against the actual pages." }
  ]
},

{ t: "practice", id: "m5", h: "Practice assignments",
  lead: "Four and a half hours with real spec books. Keep your notes; you'll use them in Modules 6, 7 and 15.",
  items: [
    { h: "Read Caltrans Section 20", hrs: 0.75, d: "<p>Download the 2018 Standard Specifications from <a href=\"https://dot.ca.gov/programs/design/2018-ccs-standard-plans-and-standard-specifications\" target=\"_blank\" rel=\"noopener\">Caltrans</a>. Read 5-1.02 and Section 20 parts 20-2.01A (irrigation submittals and testing), 20-3.01A (plant submittals and quality) and 20-4.01 (plant establishment). Write five requirements that cost money, with section numbers.</p>" },
    { h: "Map the layers on 11-428704", hrs: 0.75, d: "<p>Open the Special Provisions from <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>. For five landscape topics (pressure testing, flow sensors, controllers, plant establishment, compost), write down the Standard Specification section, what the Special Provision does to it (add, replace, delete) and the final rule.</p>" },
    { h: "Find your way around the Whitebook", hrs: 0.75, d: "<p>Download the current Whitebook from the <a href=\"https://www.sandiego.gov/ecp/edocref/whitebook-san-diego-supplement-greenbook\" target=\"_blank\" rel=\"noopener\">City of San Diego</a>. Find and summarize: 3-7.2 precedence, 800-1.1.2 topsoil testing, 800-2.5 extra equipment, 801-5.7.2.2 pressure test, and 801-6 plant establishment.</p>" },
    { h: "Read one private Division 32 section", hrs: 1, d: "<p>Get a project manual with landscape sections from a GC invitation or a school or college bid. Read 32 84 00 or 32 93 00 fully. Mark every item in Parts 1, 2 and 3 that changes price. Note the warranty, maintenance period, named brands and tests.</p>" },
    { h: "Test AI on a spec, then check it", hrs: 0.5, d: "<p>Give an AI tool the 11-428704 Special Provisions Section 20 with the example request from this module. Check every row against the page. Count how many were right, wrong or missing. Write down what you'd do differently next time.</p>" },
    { h: "Score a real job on the spec checklist", hrs: 0.5, d: "<p>Run the spec checklist on the private section you read (or on 11-428704). For every line scored 1, write the RFI or proposal clarification you'd send.</p>" },
    { h: "Look up water-efficient landscape rules", hrs: 0.25, d: "<p>Find which water-efficient landscape ordinance applies in the City of San Diego and one other city where you work, and what the Certificate of Completion requires. Note who signs it and whether an irrigation audit is required.</p>" }
  ]
},

{ h: "Module 5 summary",
  lead: "You can now find, read and price the specifications. Next, you'll start counting: the irrigation takeoff.",
  body: `<ul>
<li>Plans show where and how much. Specs show what, how well, and how you prove it.</li>
<li>Know the order of precedence for each spec family. Ask about conflicts before bid day.</li>
<li>Caltrans: Standard Specifications + revisions + Special Provisions. City of San Diego: Greenbook + Whitebook + special provisions. Private: project manual by CSI number.</li>
<li>Read Part 1 of every Division 32 section fully, and the front end for insurance, retention and closeout.</li>
<li>The big price changers: named products, submittals, soil tests, plant inspection, establishment and warranty, tests, closeout and water rules.</li>
<li>Use AI for a first pass, then verify every requirement against the page and run your checklist.</li>
</ul>
<p><strong>Next: Module 6 · Irrigation Takeoff</strong></p>`
}
]
});
