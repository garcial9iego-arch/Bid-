(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 17, hours: 14, title: "Capstone: Bid the SR-905 Otay Mesa Job Start to Finish",
slides: [

{ t: "cover",
  h: "Capstone: bid SR-905 Otay Mesa yourself",
  lead: "This is your final exam. You bid a real Caltrans landscape job, contract 11-431064 on State Route 905 in Otay Mesa, from the first page of the bid package to the bid results. Each step gives you a task first. Do the task, then open the answer key to see what the real documents show and what the real bidders did.",
  objectives: [
    "Make a go/no-go decision from a real Notice to Bidders",
    "Find the spec sections that change your price on this job",
    "Use the sheet index and quantity sheets to check every big bid item",
    "List the hidden costs: work hours, environment, paperwork and 750 working days of plant establishment",
    "Find the 10 items that carry most of the money and price them carefully",
    "Plan subcontractors and the 26% DBE (Disadvantaged Business Enterprise) goal, and assemble the bid book",
    "Price the whole job in the Real Bid Lab and learn from the three real bidders"
  ],
  time: [["Reading and slides", "5 h"], ["Practice: price the real job", "9 h"], ["Module total", "14 h"]],
  body: `<p>Everything here comes from the documents Caltrans published for this job: the Notice to Bidders and Special Provisions, the 96 plan sheets, Addendum 1, the wage files and the Bid Summary. Open the job in <a href="#lab-11-431064">Real Bid Lab · 11-431064</a> and keep it open beside these slides. <strong>Don't reveal the bids in the lab until Step 10.</strong></p>`,
  src: "Caltrans contract 11-431064: Notice to Bidders and Special Provisions (bid book dated April 11, 2022), project plans (96 sheets, approved December 13, 2021), Addendum 1 (May 12, 2022), Bid Summary (May 17, 2022)."
},

{ h: "How this capstone works",
  lead: "You work through 10 steps in order. Each step has a task, then an answer key. Try the task before you read the key, the same way you would on a real bid with nobody to check you.",
  body: `<ol class="steps">
<li><div><b>Read the task</b>It tells you which document to open and what to find or calculate.</div></li>
<li class="hl"><div><b>Do it yourself first</b>Write your answer on paper or in your estimate sheet. Use the real PDFs from the lab page.</div></li>
<li><div><b>Open the answer key</b>The green box labeled “Answer key” shows what the real documents say, with the section, sheet or item number so you can check it.</div></li>
<li><div><b>Mark what you missed</b>Every miss goes on your personal “bid checklist” for the next job.</div></li>
<li class="hl"><div><b>Price the job in the lab</b>After Step 7 you enter your prices in <a href="#lab-11-431064">the lab</a>. In Step 10 you reveal the real bids and compare.</div></li>
</ol>
<div class="tablewrap"><table>
<thead><tr><th>Need a refresher?</th><th>Go to</th></tr></thead>
<tbody>
<tr><td>A full worked Caltrans bid (I-805 Chula Vista, 11-428704)</td><td><a href="#m15-1">Module 15</a></td></tr>
<tr><td>Reading a real Caltrans plan set sheet by sheet</td><td><a href="#plans-1">Plans Workshop</a></td></tr>
<tr><td>Any word or abbreviation you don't know</td><td><a href="#dict">Bid Dictionary</a></td></tr>
<tr><td>Grading, demo, drainage and other scopes a landscape company gets handed</td><td><a href="#m18-1">Module 18</a></td></tr>
</tbody></table></div>`,
  watch: `<p>The answer keys show what the documents say and what the real bidders did. They don't tell you the “right” price. A real bid is right when it covers your real costs and still wins. Use your own costs, crews and quotes.</p>`
},

{ h: "The job at a glance",
  lead: "New highway landscaping on about 3.7 miles of SR-905 (State Route 905) near the Mexico border: four new controllers, about 107,000 feet of pipe, almost 10,000 plants, acres of rock and gravel mulch, and 750 working days of plant establishment.",
  body: `<div class="tablewrap"><table><tbody>
<tr><td><strong>Owner</strong></td><td>Caltrans District 11 (federal-aid project ACNH-P905(023)E, Project ID 1120000088)</td></tr>
<tr><td><strong>Where</strong></td><td>SR-905 in the City of San Diego (Otay Mesa), from 0.3 mile west of the Caliente Avenue overcrossing to 0.4 mile east of the La Media Road undercrossing. Location code 11-SD-905-R6.4/R10.1 means District 11, San Diego County, Route 905, post miles R6.4 to R10.1.</td></tr>
<tr><td><strong>Work</strong></td><td>“Landscaping, planting and irrigation.”</td></tr>
<tr><td><strong>Bid items</strong></td><td>69 items on the Bid Item List</td></tr>
<tr><td><strong>Estimated cost printed for bidders</strong></td><td>$4,260,000</td></tr>
<tr><td><strong>Bid book dated / bids open</strong></td><td>April 11, 2022 / Tuesday, May 17, 2022 at 2:00 PM</td></tr>
<tr><td><strong>Bid books issued</strong></td><td>8 (from the Bid Summary)</td></tr>
</tbody></table></div>
<p>An <strong>overcrossing (OC)</strong> is a bridge that carries a street over the freeway. An <strong>undercrossing (UC)</strong> carries the freeway over a street. Caltrans uses them as landmarks for where the work starts and stops.</p>`,
  ex: `<p>Why this job is the capstone: it's almost pure planting, irrigation and mulch, the C-27 trade. It's also about 3½ times the size of the Module 15 job, with a 26% DBE (Disadvantaged Business Enterprise) goal and a very long establishment period. If you can bid this one carefully, you can bid most Caltrans landscape jobs.</p>`,
  src: "Notice to Bidders and Bid Item List, contract 11-431064; Bid Summary page 1."
},

{ h: "Your road map",
  lead: "The same 10 steps as every public bid. Suggested times are for your first full pass.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Step</th><th>What you do</th><th>Main documents</th><th class="num">Time</th></tr></thead>
<tbody>
<tr><td>1</td><td>Go/no-go decision</td><td>Notice to Bidders</td><td class="num">30 min</td></tr>
<tr><td>2</td><td>Read the spec layers and the landscape sections</td><td>Special Provisions (SP) sections 1, 5, 20, 21, 87</td><td class="num">60 min</td></tr>
<tr><td>3</td><td>Learn the plan set</td><td>Sheet index, ISS-1, PL-1, IP and PP sheets</td><td class="num">60 min</td></tr>
<tr><td>4</td><td>Check quantities</td><td>Quantity sheets IQ-1 to IQ-3, PQ-1, PQ-2</td><td class="num">60 min</td></tr>
<tr><td>5</td><td>Read the addendum</td><td>Addendum 1</td><td class="num">10 min</td></tr>
<tr><td>6</td><td>List hidden costs</td><td>SP sections 5, 7, 12, 13, 14, 20</td><td class="num">45 min</td></tr>
<tr><td>7</td><td>Price the big items</td><td>Your quotes and crew costs, the lab</td><td class="num">3 h+</td></tr>
<tr><td>8</td><td>Subs and DBE plan</td><td>Notice, SP 2-1.12, DBE directory</td><td class="num">30 min</td></tr>
<tr><td>9</td><td>Assemble the bid book</td><td>SP 2-1.33 form schedule</td><td class="num">20 min</td></tr>
<tr><td>10</td><td>Read results and learn</td><td>Bid Summary, the lab reveal</td><td class="num">60 min</td></tr>
</tbody></table></div>`,
  watch: `<p>On a real bid the steps overlap. You ask for supplier and sub quotes during Step 2, not after Step 7, because quotes take days. Start the phone calls early.</p>`
},

{ h: "Every document in this package",
  lead: "Caltrans published these files for 11-431064. Download them all from the lab page before you start.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Document</th><th>What's in it</th><th>Why you need it</th></tr></thead>
<tbody>
<tr><td><strong>Notice to Bidders and Special Provisions</strong> (one 350-page PDF)</td><td>The Notice, the Bid Item List, about 40 pages of job-specific Special Provisions, then the Revised Standard Specifications (RSS) dated 10-15-21</td><td>Rules, products, work hours, quoted prices, payment</td></tr>
<tr><td><strong>Plans</strong> (96 sheets)</td><td>Water pollution control, utilities, signs, plant removal, irrigation, planting, electrical, revised standard plans</td><td>Where the work is and how much of it</td></tr>
<tr><td><strong>Addendum 1</strong> (May 12, 2022)</td><td>A letter plus new federal wage rates</td><td>You must acknowledge it on the bid form</td></tr>
<tr><td><strong>Federal wage rates</strong> (original and addendum)</td><td>U.S. Department of Labor wage decision for San Diego County</td><td>Federal-aid job: pay the higher of state or federal rates</td></tr>
<tr><td><strong>DBE forms</strong></td><td>DBE Commitment, Confirmation, Good Faith Efforts</td><td>Due after bid day; late means your bid can be thrown out</td></tr>
<tr><td><strong>Information Handout</strong> (about 74 MB)</td><td>A 2004 wildlife Biological Opinion, as-built fiber roll plans and photos, the Otay Water District meter application</td><td>Background you are expected to know</td></tr>
<tr><td><strong>2018 Standard Specifications and Standard Plans</strong> (not in the package)</td><td>Caltrans's base rule book and standard details</td><td>The SP only lists changes to it</td></tr>
<tr><td><strong>Bid Summary</strong> (after opening)</td><td>Every bidder's total, subs and unit prices</td><td>Step 10</td></tr>
</tbody></table></div>`,
  deeper: `<p>Get the Standard Specifications and Standard Plans from <a href="https://dot.ca.gov/programs/design/ccs-standard-plans-and-standard-specifications" target="_blank" rel="noopener">Caltrans Construction Contract Standards</a>. Use the 2018 edition for this job, because the bid book says “Standard Specifications dated 2018.” Newer jobs may use a newer edition.</p>`,
  src: "Caltrans Contractors Corner document list for 11-431064; SP cover page and section 2-1.06B."
},

{ h: "Step 1 · Task: read the Notice to Bidders",
  lead: "Open the Special Provisions PDF and read the two-page Notice to Bidders (pages 1–2). Write down these 10 facts before you look at the answer key.",
  body: `<ol>
<li>Bid opening date, time and how bids are submitted</li>
<li>License(s) allowed to bid as the prime contractor</li>
<li>DBE goal</li>
<li>Federal-aid or not</li>
<li>Unit price or lump sum basis</li>
<li>Working days to build, working days of plant establishment, total working days</li>
<li>Printed estimated cost</li>
<li>Bid security (bond) required</li>
<li>Wage rules</li>
<li>Where bidder questions go, and the deadline for questions about unclear plans</li>
</ol>
<p>A <strong>working day (WD)</strong> is a day the contractor could work, counted by Caltrans toward contract time. Weekends, holidays and bad-weather days usually don't count, so 120 working days is longer than 120 calendar days.</p>`,
  exLabel: "Answer key · what the Notice says",
  ex: `<ol>
<li>Bids open Tuesday, May 17, 2022. Bids accepted “until 2:00 p.m.… via Bid Express website. Bids received after this time will not be accepted.”</li>
<li>“Class A license or the following Class C license which constitutes a majority of the work: C-27.”</li>
<li>“The DBE Contract goal is 26 percent.”</li>
<li>Federal-aid project ACNH-P905(023)E.</li>
<li>“Bids must be on a unit price basis.”</li>
<li>120 working days excluding plant establishment; plant establishment within 750 working days; everything within 870 working days.</li>
<li>$4,260,000.</li>
<li>“Bidder's security equal to at least 10 percent of the bid.”</li>
<li>State prevailing wages from DIR (the California Department of Industrial Relations); federal minimum rates from the U.S. Secretary of Labor; pay the higher rate.</li>
<li>Bidder inquiries online; questions about “alleged patent ambiguity of the plans, specifications, or estimate must be asked before bid opening.”</li>
</ol>`,
  src: "Notice to Bidders, contract 11-431064, pages 1–2."
},

{ h: "Step 1 · What those facts mean in dollars",
  lead: "Turn each fact into a number or an action. This is what makes the go/no-go decision real.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Fact</th><th>What it means for a company bidding about $4.25 million</th></tr></thead>
<tbody>
<tr><td>10% bid security</td><td>A bid bond of about $425,000. Call your surety (bonding company) the week you decide to bid.</td></tr>
<tr><td>Performance and payment bonds</td><td>If you win, bonds for the full contract amount. Your bonding line must handle a $4M+ single job.</td></tr>
<tr><td>26% DBE goal</td><td>About $1.1 million of the bid should go to certified Disadvantaged Business Enterprise (DBE) firms, or you must document good faith efforts (Step 8).</td></tr>
<tr><td>870 total working days</td><td>About 3½ years from start to final acceptance (estimate: roughly 250 working days a year). Your company commits a crew, a supervisor and insurance for that long.</td></tr>
<tr><td>Liquidated damages</td><td>For a total bid between $2 million and $5 million, $5,200 per day late (table in section 8-1.10A of the Revised Standard Specifications, RSS).</td></tr>
<tr><td>Partnering</td><td>Required for bids over $1 million with 100 or more working days (SP 5-1.09). Budget meeting time.</td></tr>
<tr><td>Federal aid</td><td>Federal wage rates, DBE rules, federal certifications in the bid book.</td></tr>
</tbody></table></div>
<p><strong>Liquidated damages (LDs)</strong> are a fixed amount the owner deducts for each day you finish late. You don't have to prove anything; the money is just taken.</p>`,
  ex: `<p><strong>Worked math:</strong> 10% × $4,247,463.10 = $424,746.31 bid bond. 26% × $4,247,463.10 = $1,104,340.41 DBE goal. 870 working days ÷ about 250 working days a year ≈ 3.5 years. (The 250-a-year figure is a rough estimate; check the real calendar and holidays.)</p>`,
  watch: `<p>The project funding sign Caltrans requires on this job reads “YEAR OF COMPLETION 2029” (SP 12-3.11B(5)(a)). That's seven years after bid day. Plan for wage increases, fuel and water price changes across those years.</p>`,
  src: "Notice to Bidders; SP 5-1.09A, 12-3.11B(5)(a); RSS 8-1.10A (dated 10-15-21)."
},

{ t: "scorer", id: "m17gonogo", h: "Step 1 · Score the job for your company",
  lead: "Use the Module 3 scorecard on SR-905. 2 = strong yes, 1 = so-so, 0 = no. Be honest about your company today, not your plans for next year. Your choices are saved in this browser.",
  items: [
    ["Fits our scope", "Mostly planting, irrigation and mulch: work we do every day"],
    ["Right size", "A $4M+ job is within our bonding, cash and crew capacity"],
    ["Schedule works", "We can commit a crew for 120 working days, then establishment for 750 more"],
    ["Location", "Otay Mesa is within our normal service area"],
    ["Good customer", "Caltrans pays on a set schedule; we can handle its paperwork"],
    ["Competition", "Few bidders expected, or we have an edge"],
    ["Clear documents", "Plans and specs are complete; quantities check out"],
    ["Manageable risk", "We understand daytime closure limits, the paleontology monitor, water costs and liquidated damages"],
    ["DBE plan", "We can find about $1.1M of certified DBE work or document good faith efforts"],
    ["Strategic value", "A Caltrans reference job we want for the division"]
  ],
  bands: [
    [15, "Go", "Strong fit. Start the estimate and call the surety today."],
    [11, "Think it over", "Talk through the weak scores with the owner. Consider quoting the landscape scope to a prime instead."],
    [0, "Pass as prime", "Don't prime it. Send a landscape sub quote to the primes on the planholders list, or pass."]
  ]
},

{ h: "Step 1 · Prime it or quote it as a sub?",
  lead: "A C-27 may bid this job as the prime. That doesn't mean your company should. Here's how to decide, and what the real bidders did.",
  body: `<div class="twocol">
<div><h3>Bid as prime if…</h3><ul>
<li>Your bonding line covers $4.5 million or more for one job</li>
<li>You have run a Caltrans or similar public job and its paperwork before</li>
<li>You can carry about 3½ years of overhead, insurance and establishment crews</li>
<li>You can line up traffic control, storm water and electrical subs</li>
<li>You have a DBE outreach plan</li>
</ul></div>
<div><h3>Quote it as a sub if…</h3><ul>
<li>Your biggest job so far is well under $1 million</li>
<li>Your bonding line is small or new</li>
<li>You've never done certified payroll on a federal-aid job</li>
<li>You want the planting and irrigation work without the prime's risk</li>
<li>Find primes on the bidders list and send them a scope quote (Module 13)</li>
</ul></div>
</div>`,
  exLabel: "Answer key · what really happened",
  ex: `<p>Eight bid books were issued and only three companies bid, all as primes: <strong>Griffith Company</strong> (Brea, a large contractor that is not a landscape-only firm), <strong>Marina Landscape, Inc.</strong> (Orange) and <strong>Diversified Landscape Co.</strong> (Wildomar). Two of the three were landscape companies. None of them was based in San Diego County. A San Diego landscape company with enough bonding would have faced only three competitors.</p>`,
  src: "Bid Summary 11-431064, page 1."
},

{ h: "Step 2 · Task: how is this spec book built?",
  lead: "Open the SP and answer: what are the layers, what date is each layer, and what did this job add to the list of bid items?",
  body: `<ol>
<li>Find the line on the cover that names the Standard Specifications and Standard Plans edition.</li>
<li>Find the date of the Revised Standard Specifications at the back of the book.</li>
<li>Read the “Organization” page. What does a “revision clause” do?</li>
<li>Find section 1-1.01 “Bid Items and Applicable Sections.” How many item codes are listed, and why are they there?</li>
</ol>
<p>A <strong>revision clause</strong> is the line in bold at the top of each special provision, like “Replace the 1st paragraph of section 5-1.09C with:”. It tells you exactly what part of the Standard Specifications changes.</p>`,
  exLabel: "Answer key · the four layers",
  ex: `<ol>
<li><strong>2018 Standard Specifications and 2018 Standard Plans</strong> (base rule book and standard details, not in the package).</li>
<li><strong>Revised Standard Specifications dated 10-15-21</strong>, bound at the back of the SP book. These are statewide updates.</li>
<li><strong>Special Provisions</strong> (pages 7–47 of the book): rules for this job only. Each begins with a revision clause.</li>
<li><strong>Revised Standard Plans (RSPs)</strong>: plan sheets 85–96, such as RSP H3, H4, H6, H8, H9 for landscape details.</li>
</ol>
<p>Section 1-1.01 lists <strong>14 item codes</strong> that are not standard Caltrans items, so the SP has to say which section covers each. They're on the next slide.</p>`,
  src: "SP cover page, Organization page, section 1-1.01; Standard Plans List (pages ii–iii)."
},

{ h: "Step 2 · The 14 special items on this job",
  lead: "Non-standard item codes are where the designer wrote something unusual. Read their sections first.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item no.</th><th>Item code</th><th>Description</th><th>SP section</th></tr></thead>
<tbody>
<tr><td>3, 4</td><td>090200, 090207</td><td>Dispute Resolution Advisor (DRA) meetings and hourly tasks</td><td>5</td></tr>
<tr><td>20</td><td>013530</td><td>Manage solid waste generated by the public</td><td>14</td></tr>
<tr><td>32–34</td><td>013531–013533</td><td>Gravel mulch Types 1, 2 and 3</td><td>20</td></tr>
<tr><td>41–44</td><td>013534–013537</td><td>48-station irrigation controllers and enclosures '164A', '165A', '166A', '166B'</td><td>20</td></tr>
<tr><td>45</td><td>013538</td><td>3" ductile iron pipe (supply line)</td><td>20</td></tr>
<tr><td>65</td><td>013539</td><td>Subsurface locator</td><td>87</td></tr>
<tr><td>67</td><td>995100</td><td>Water meter charges</td><td>5</td></tr>
<tr><td>68</td><td>995200</td><td>Irrigation water service charges</td><td>5</td></tr>
</tbody></table></div>
<p>A <strong>Dispute Resolution Advisor (DRA)</strong> is a neutral expert who helps Caltrans and the contractor settle disagreements during the job.</p>`,
  watch: `<p>Item codes that start with 0135 or 995 are made up for this job. You won't find them in the Standard Specifications. If you skip the SP, you'll have no idea how they're measured or paid.</p>`,
  src: "SP 1-1.01, Bid Items and Applicable Sections table."
},

{ h: "Step 2 · Rock, gravel and wood mulch",
  lead: "About a quarter of the money on this job is mulch. The plant legend sets the colors; the SP sets how it's placed and measured.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Bid quantity</th><th>What it must be (sheet PL-1)</th></tr></thead>
<tbody>
<tr><td>22 Rock mulch</td><td class="num">94,100 SQFT</td><td>Rock 4 to 12 inches, mostly tan, like “San Diego Tan Cobble”</td></tr>
<tr><td>23 Rock blanket</td><td class="num">3,780 SQFT</td><td>Mostly tan, may include red, brown, gray and light gray</td></tr>
<tr><td>32 Gravel mulch (Type 1)</td><td class="num">115,000 SQFT</td><td>Mostly red, like “Red Lava Rock” or “Burgundy Cinder”</td></tr>
<tr><td>33 Gravel mulch (Type 2)</td><td class="num">79,500 SQFT</td><td>Mostly white, like “White” or “White Ice”</td></tr>
<tr><td>34 Gravel mulch (Type 3)</td><td class="num">27,100 SQFT</td><td>Mostly brown, like “Apache Brown” or “Bodie Brown”</td></tr>
<tr><td>35 Wood mulch</td><td class="num">3,290 CY</td><td>Wood chip, 3 inches deep</td></tr>
<tr><td>36 Edging</td><td class="num">6,200 LF</td><td>Black HDPE (plastic) edging, layout on the planting details</td></tr>
</tbody></table></div>
<p>Units: <strong>SQFT</strong> = square feet, <strong>CY</strong> = cubic yards, <strong>LF</strong> = linear feet. <strong>HDPE</strong> = high-density polyethylene, a stiff plastic.</p>`,
  exLabel: "Answer key · Special Provisions (SP) rules that change the price",
  ex: `<ul>
<li><strong>Rock mulch (SP 20-5.03E):</strong> rounded cobble from a single source; exposed rock smooth and round; submit a 1 square yard sample 5 business days before delivery; grade and compact to at least 90% relative compaction; no soil or filter fabric showing; paid by area measured parallel to the surface.</li>
<li><strong>Gravel mulch (SP 20-5.03C):</strong> uniform color for each type; grade and compact to at least 90% relative compaction; excavation only where shown.</li>
<li>Each mulch color has named products from three suppliers on PL-1. Get a written quote from at least two.</li>
</ul>`,
  watch: `<p>“Measured parallel to the surface” means slope area, which is larger than the flat area on a plan view. On steep slopes you'll place more rock than a flat takeoff suggests, and you're paid for it. Your tonnage must match the slope area too.</p>`,
  src: "Plan sheet PL-1 (Rock Mulch, Gravel Mulch and Rock Blanket Requirements); SP 20-5.03C(2), 20-5.03C(3), 20-5.03E; Bid Item List."
},

{ h: "Step 2 · The plant groups",
  lead: "Caltrans prices plants by group, and each group is a container size. This job has five groups, including palms and contract-grown trees.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Group (item)</th><th>Size</th><th>Plants</th><th class="num">Bid qty</th><th class="num">Fertilizer packets each</th></tr></thead>
<tbody>
<tr><td>A (28)</td><td>No. 1 container</td><td>Torch aloe, red yucca, creeping myoporum, creeping rosemary</td><td class="num">6,880</td><td class="num">1</td></tr>
<tr><td>B (29)</td><td>No. 2 container</td><td>Coral aloe, century plant, bougainvillea 'Rosenka', Saint Catherine's lace, scrub oak</td><td class="num">2,120</td><td class="num">2</td></tr>
<tr><td>K (26)</td><td>24" box</td><td>Pindo palm, redbud 'Forest Pansy', palo verde 'Desert Museum', coast live oak</td><td class="num">440</td><td class="num">5</td></tr>
<tr><td>U (30)</td><td>No. 15 container</td><td>California pepper, California sycamore</td><td class="num">310</td><td class="num">3</td></tr>
<tr><td>Z (27)</td><td>Ball and burlap palm</td><td>Hybrid fan palm (Washingtonia filibusta), 15 ft brown trunk height unless noted, brown-skinned</td><td class="num">90</td><td class="num">5</td></tr>
</tbody></table></div>
<p><strong>Ball and burlap (B&amp;B)</strong> means the tree is dug from the ground with its root ball wrapped in burlap. <strong>Brown trunk height (BTH)</strong> is the height of the bare trunk, not counting fronds.</p>`,
  exLabel: "Answer key · SP and legend notes",
  ex: `<ul>
<li>“Some plants required may not be readily available and must be grown specifically for this project.” Within 30 days after contract approval, submit a vendor statement that the grow order was accepted, with names, sizes, quantities and delivery date (SP 20-3.01A(3)(b)).</li>
<li>Coast live oak in a container must be at least 6 feet tall (PL-1 note 12).</li>
<li>K and U trees are staked per the standard detail; K trees use the tree hole and basin detail; palms use the palm tree detail (PL-1 notes 6, 7, 13).</li>
<li>Each plant gets a wood mulch basin: 0.03 CY per Group A plant up to 0.08 CY per box tree (PL-1).</li>
</ul>`,
  watch: `<p>A contract-grow order means you commit to a nursery months before planting, often with a deposit. Get the grower's written quote and lead time before bid day, and carry the deposit in your cash-flow plan.</p>`,
  src: "Plan sheets PL-1 and PQ-1; SP 20-3.01A(3)(b)."
},

{ h: "Step 2 · Hydroseed, compost and the order of work",
  lead: "Hydroseed covers 797,000 SQFT, more than 18 acres. Sheet PL-2 sets the seed mix and the six-step sequence.",
  body: `<ol class="steps">
<li><div><b>Step 1 · Temporary fiber rolls</b>From the water pollution control sheets; remove them later.</div></li>
<li><div><b>Step 2 · Irrigation</b>Install and test the system.</div></li>
<li class="hl"><div><b>Step 3 · Weed germination</b>Water to sprout weeds, then kill them. The SP says no planting in weed germination areas for 21 days after irrigation is installed.</div></li>
<li><div><b>Step 4 · Compost</b>Fine compost at 70 CY per acre.</div></li>
<li><div><b>Step 5 · Planting</b>Per the planting plans.</div></li>
<li class="hl"><div><b>Step 6 · Hydroseed</b>Tackifier, wood fiber and a 12-species coastal sage scrub seed mix at 28.1 pounds of pure live seed per acre.</div></li>
</ol>
<p><strong>Pure live seed (PLS)</strong> is the weight of seed that will actually sprout, after removing dead seed and trash. <strong>Tackifier</strong> is the glue in hydroseed slurry that holds it on the slope.</p>`,
  exLabel: "Answer key · what the specs add",
  ex: `<ul>
<li>Compost must meet the gradation and quality table in SP 21-2.02K (pH 6 to 8.5, physical contaminants under 0.5% for fine compost, and more). Ask your compost supplier for test results that match.</li>
<li>Seed mix examples from PL-2: California buckwheat 5.0 lb, purple needlegrass 6.0 lb, pigmy-leaved lupine 4.0 lb PLS per acre.</li>
<li>Weed germination is item 24, 116,000 SQYD (square yards). Keep the soil moist enough to sprout weeds, then control them with pesticides (SP 20-1.03E).</li>
</ul>`,
  src: "Plan sheet PL-2 (Seed Mix, Erosion Control table); SP 20-1.03E, 21-2.02K."
},

{ h: "Step 2 · Controllers and flow sensors: prices handed to you",
  lead: "The Special Provisions (SP) require Calsense equipment and list the supplier's quoted prices. That's your material cost for items 41–44 and 47.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Equipment (SP 20-2.06B(2)(a), 20-2.05B)</th><th class="num">Quoted price</th></tr></thead>
<tbody>
<tr><td>'164A' CS3000 48-station controller in stainless pedestal, 4G LTE (fourth-generation cellular) modem, 5-year data plan</td><td class="num">$11,077.26</td></tr>
<tr><td>'165A' same as '164A'</td><td class="num">$11,077.26</td></tr>
<tr><td>'166A' controller plus spread spectrum radio, FLOWSENSE option, 4G modem, 5-year data plan</td><td class="num">$13,750.91</td></tr>
<tr><td>'166B' controller plus FLOWSENSE option and spread spectrum radio</td><td class="num">$10,678.26</td></tr>
<tr><td>Calsense FM-2B 2" flow sensor (3 needed)</td><td class="num">$855.88 each</td></tr>
</tbody></table></div>
<p>Supplier: SiteOne Landscape Supply, Encinitas. Prices exclude sales tax and delivery and were good until June 16, 2022.</p>`,
  exLabel: "Answer key · what else the SP says",
  ex: `<ul>
<li>Controllers must have 2-way radio communication; the vendor installs software and sets up communication (SP 20-2.06B(2)(a)).</li>
<li>Door locks must take Caltrans's Best brand lock core; furnish 2 keys per lock (SP 20-2.06B(3), 20-2.06C).</li>
<li>The concrete foundation, pad and conduit sweeps are <strong>included</strong> in the controller price (SP 20-2.06D).</li>
<li>Quoted material for the four controllers adds up to $11,077.26 + $11,077.26 + $13,750.91 + $10,678.26 = <strong>$46,583.69</strong> before tax and delivery.</li>
</ul>`,
  src: "SP 20-2.05B, 20-2.06B(2)(a), 20-2.06B(3), 20-2.06C, 20-2.06D."
},

{ h: "Step 2 · Backflow, ductile iron and valves",
  lead: "Three points of connection, each with a backflow preventer, a short run of ductile iron pipe and a flow sensor. The SP adds details that cost money.",
  body: `<ul>
<li><strong>2" backflow preventer assembly (item 46, 3 EA):</strong> sheet ISS-1 calls it a BPAE, “backflow preventer assembly in enclosure.” Locations: IP-4, IP-8 and IP-10 (sheet IQ-3).</li>
<li><strong>3" ductile iron pipe supply line (item 45, 520 LF):</strong> ductile iron pipe, fittings and expansion assemblies; 45-degree elbows must be ductile iron; wrap damaged coating with pipe wrap tape; submit catalog cuts and installation instructions (SP 20-2.08A(3), 20-2.08B(6), 20-2.08C(5)).</li>
<li><strong>Remote control valves (items 38–40):</strong> brass or bronze body, self-flushing for recycled water, no external tubing (SP 20-2.10B(10)(a)). A master valve is paid as a remote control valve of its size (SP 20-2.10D).</li>
<li><strong>Valve tags:</strong> polyurethane tag on the wire, stamped both sides with 1-inch letters showing controller and station (SP 20-2.01B(7)).</li>
<li><strong>Pressure test:</strong> Method B for lateral lines and trenched lines (SP 20-2.01A(4)(b)(i)).</li>
</ul>
<p><strong>Ductile iron</strong> is strong, flexible cast iron pipe, used here where the supply line needs more strength than plastic. A <strong>remote control valve (RCV)</strong> is the electric valve the controller opens for each zone.</p>`,
  ex: `<p><strong>Worked check:</strong> sheet IQ-3 shows 65 LF of 3" ductile iron on each of sheets IP-1 through IP-8. 8 × 65 = 520 LF, the bid quantity for item 45.</p>`,
  src: "Plan sheets ISS-1, IQ-3; SP 20-2.01A(4)(b)(i), 20-2.01B(7), 20-2.08, 20-2.10B(10)(a), 20-2.10D."
},

{ h: "Step 2 · Water meter and water service charges",
  lead: "Items 67 and 68 pay you back for fees you pay to the water agencies. The SP prints the fees. Read them before you put a number on these lump sums.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Meter (SP 5-1.20E)</th><th>Agency</th><th class="num">Connection fee</th><th class="num">Meter charge</th></tr></thead>
<tbody>
<tr><td>New 2" meter #1</td><td>Otay Water District</td><td class="num">$210.00</td><td class="num">$0 (Caltrans has credits)</td></tr>
<tr><td>New 2" meter #2</td><td>Otay Water District</td><td class="num">$210.00</td><td class="num">$118,247.00</td></tr>
<tr><td>Existing 2" meter, Caliente Ave (account setup)</td><td>City of San Diego</td><td class="num">n/a</td><td class="num">$0</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Water service (SP 5-1.20F)</th><th class="num">Monthly charge</th><th class="num">Per HCF of water</th></tr></thead>
<tbody>
<tr><td>City of San Diego</td><td class="num">$78.72 per month</td><td class="num">$7.053</td></tr>
<tr><td>Otay Water District</td><td class="num">$240.85 per meter per month</td><td class="num">$5.84</td></tr>
</tbody></table></div>
<p><strong>HCF</strong> means hundred cubic feet of water, about 748 gallons. You pay water bills from the start of service “until Contract acceptance,” and submit a copy of each monthly bill.</p>`,
  exLabel: "Answer key · worked math for item 67",
  ex: `<p>$210 + $210 + $118,247 = <strong>$118,667</strong> in fees you must pay. Item 67 is a lump sum, so your bid should be at least $118,667 plus your time to arrange the meters. If the agency's charges change, Caltrans adjusts the lump sum by the difference (SP 5-1.20E).</p>`,
  watch: `<p>Item 68 has no printed total. You have to estimate how much water the job will use for about 3½ years. Step 6 shows how, and Step 10 shows how far apart the bidders were.</p>`,
  src: "SP 5-1.20E, 5-1.20F; SP 2-1.06B (Otay Water District meter application in the Information Handout)."
},

{ h: "Step 2 · Subsurface locator and electric service",
  lead: "Two lump sums most landscape contractors subcontract. Read what they require so your sub quote covers all of it.",
  body: `<div class="twocol">
<div><h3>Item 65 · Subsurface locator (SP 87)</h3><ul>
<li>Locate everything underground in the electrical work areas with <strong>two different technologies</strong>; one must be ground-penetrating radar (GPR) or another imaging method</li>
<li>Operator must be certified and have worked for the locating company at least 1 year</li>
<li>A successful demonstration for the Engineer before any digging</li>
<li>A signed report before digging; allow 10 days for approval</li>
<li>After installation, GPS data within 3 feet and digital CAD and GIS files</li>
</ul></div>
<div><h3>Item 66 · Electric service for irrigation</h3><ul>
<li>Power to the new controllers from existing service equipment enclosures (electrical sheets E-1 to E-4)</li>
<li>120/240 volt service; SDG&amp;E is the utility</li>
<li>Electrical contractor's schedule of values by plan sheet (SP 86-1.01C(1))</li>
<li>Type 3 conduit on 2 inches of sand, 4 inches of concrete over it in unpaved areas (SP 87-1.03B(3)(a))</li>
</ul></div>
</div>
<p><strong>GPS</strong> is satellite positioning. <strong>CAD</strong> is computer drafting software; <strong>GIS</strong> is mapping software. <strong>SDG&amp;E</strong> is San Diego Gas &amp; Electric.</p>`,
  exLabel: "Answer key · who did it",
  ex: `<p>All three bidders listed an electrical subcontractor for items 65 and 66 (Step 8). That's normal. Your job is to send the sub the SP sections, get a written quote, and check that it includes the demonstration, both technologies and the digital files.</p>`,
  src: "SP 86-1.01C(1), 87-1.01C, 87-1.01D(3)–(4), 87-1.03B(3)(a), 87-1.03X; plan sheet E-1 notes."
},

{ h: "Step 2 · Self-check: did you read it all?",
  lead: "Answer each question from memory. If you can't, go back to the section before moving on.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Ask yourself</th><th>Where to check</th></tr></thead>
<tbody>
<tr><td>Which items have quoted supplier prices?</td><td>SP 20-2.05B, 20-2.06B(2)(a)</td></tr>
<tr><td>What is included in the controller price that you might forget?</td><td>SP 20-2.06D</td></tr>
<tr><td>How long must planting wait after irrigation in weed germination areas?</td><td>SP 20-1.03E</td></tr>
<tr><td>What does rock mulch need before delivery?</td><td>SP 20-5.03E(1)(c)</td></tr>
<tr><td>Which plants may have to be contract-grown, and when is the statement due?</td><td>SP 20-3.01A(3)(b)</td></tr>
<tr><td>What are the known water meter fees?</td><td>SP 5-1.20E</td></tr>
<tr><td>How many locating technologies does the subsurface locator need?</td><td>SP 87-1.03X(1)</td></tr>
<tr><td>Which herbicides are allowed?</td><td>SP 20-1.02C table</td></tr>
<tr><td>How far beyond mulched areas must you control weeds?</td><td>SP 20-1.03C(3)</td></tr>
</tbody></table></div>`,
  ex: `<p>Using AI to help: you can ask an AI tool to list every requirement in SP section 20 that adds cost. Then check each line against the actual page. Tools miss things and sometimes invent them. The page is the contract; the summary isn't.</p>`
},

{ h: "Step 3 · Task: map the 96-sheet plan set",
  lead: "Open the plans PDF. Using the Index of Plans on sheet 1 and the title block in each sheet's lower right corner, fill in which sheets hold which work.",
  body: `<p>Write the sheet numbers for: water pollution control, utilities, construction signs, plant removal, irrigation schedule, irrigation plans, irrigation details, irrigation quantities, plant legend, planting plans, planting details, planting quantities, electrical and revised standard plans.</p>`,
  exLabel: "Answer key · the sheet map",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Sheet no.</th><th>Codes</th><th>What they are</th></tr></thead>
<tbody>
<tr><td>1</td><td>Title</td><td>Title and location map, begin and end work</td></tr>
<tr><td>2–14</td><td>WPC-1 to 12, WPCQ-1</td><td>Temporary water pollution control plans and quantities</td></tr>
<tr><td>15–19</td><td>U-1 to 5</td><td>Utility plans</td></tr>
<tr><td>20</td><td>CS-1</td><td>Construction area signs</td></tr>
<tr><td>21–32</td><td>PR-1 to 12</td><td>Plant removal (roadside clearing and fiber roll removal)</td></tr>
<tr><td>33</td><td>ISS-1</td><td>Irrigation sprinkler schedule, legend, pipe sizing</td></tr>
<tr><td>34–45</td><td>IP-1 to 12</td><td>Irrigation plans</td></tr>
<tr><td>46–52</td><td>ID-1 to 7</td><td>Irrigation details</td></tr>
<tr><td>53–55</td><td>IQ-1 to 3</td><td>Irrigation quantities</td></tr>
<tr><td>56–57</td><td>PL-1, PL-2</td><td>Plant legend, seed mix, erosion control sequence</td></tr>
<tr><td>58–69</td><td>PP-1 to 12</td><td>Planting plans</td></tr>
<tr><td>70–78</td><td>PLD-1 to 9</td><td>Planting details</td></tr>
<tr><td>79–80</td><td>PQ-1, PQ-2</td><td>Planting quantities</td></tr>
<tr><td>81–84</td><td>E-1 to 4</td><td>Electrical (power to controllers)</td></tr>
<tr><td>85–96</td><td>RSP</td><td>Revised Standard Plans</td></tr>
</tbody></table></div>`,
  deeper: `<p>Unlike the I-805 job in Module 15, this set has no traffic handling (TH) sheets. Traffic control comes from the Standard Plans (T9, T10, T14 and others listed in the SP) and the lane closure charts in SP 12-4.02C.</p>`,
  src: "Plan sheet 1 Index of Plans; title blocks of sheets 2–96; SP Standard Plans List."
},

{ h: "Step 3 · Task: find the key places on the plans",
  lead: "Answer these from the plans before opening the key. This is how you learn a job well enough to price it.",
  body: `<ol>
<li>On which IP sheets are the four controllers?</li>
<li>Where are the three backflow preventers and flow sensors?</li>
<li>Where is the 260 LF of PVC pipe conduit (item 61), and what goes inside it?</li>
<li>On sheet ISS-1, how many flood bubblers does each tree and palm get?</li>
<li>What does ISS-1 say about 90-degree turns in the main?</li>
<li>Which items on IQ-3 are marked (N), and what does (N) mean?</li>
</ol>
<p><strong>PVC</strong> is polyvinyl chloride, the common plastic pipe. A <strong>flood bubbler</strong> is a low-flow head that floods a tree basin.</p>`,
  exLabel: "Answer key · from ISS-1 and IQ-3",
  ex: `<ol>
<li>'164A' on IP-4, '165A' on IP-8, '166A' on IP-10, '166B' on IP-11.</li>
<li>Backflow preventers and flow sensors on IP-4, IP-8 and IP-10.</li>
<li>Two crossings on line “CL34” at stations 31+00 and 34+00 (sheets IP-9 to IP-12), 130 LF each of 8" conduit. Inside: 134 LF each of 3" Class 315 supply line plus a 2" electrical conduit.</li>
<li>One flood bubbler per 24" box tree, per 15-gallon tree, per palm, and per shrub where shown (ISS-1 note 10).</li>
<li>Every 90-degree change in direction on new main supply line uses two 45-degree elbows (ISS-1 note 2).</li>
<li>The CEC column and the 2" electrical conduit in the conduits are (N): <strong>not a separate pay item</strong>. Their cost goes into other items.</li>
</ol>`,
  watch: `<p>ISS-1 note 5 says the controllers “must be operated with the flow-checking feature enabled at all times.” That means programming time and alarm response for 3½ years.</p>`,
  src: "Plan sheets ISS-1 (notes 2, 5, 10), IQ-3 (Irrigation Conduit table and notes)."
},

{ h: "Step 4 · Task: check eight quantities",
  lead: "Caltrans gives you the quantities, but you check them against the plan quantity (Q) sheets. Trace each bid item to its quantity sheet total and write down any difference.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Bid quantity</th><th>Check against</th></tr></thead>
<tbody>
<tr><td>28 Plant (Group A)</td><td class="num">6,880 EA</td><td>PQ-1</td></tr>
<tr><td>25 Packet fertilizer</td><td class="num">14,700 EA</td><td>PQ-1</td></tr>
<tr><td>22 Rock mulch</td><td class="num">94,100 SQFT</td><td>PQ-2</td></tr>
<tr><td>35 Wood mulch</td><td class="num">3,290 CY</td><td>PQ-2</td></tr>
<tr><td>63 Hydroseed</td><td class="num">797,000 SQFT</td><td>PQ-2</td></tr>
<tr><td>48 Tree well sprinkler assembly</td><td class="num">1,900 EA</td><td>IQ-2 lateral total</td></tr>
<tr><td>55 1" plastic pipe (Schedule 40)</td><td class="num">40,785 LF</td><td>IQ-2 lateral total</td></tr>
<tr><td>59 2½" plastic pipe (Schedule 40)</td><td class="num">12,740 LF</td><td>IQ-2 plus IQ-3</td></tr>
</tbody></table></div>
<p><strong>EA</strong> = each. <strong>Schedule 40</strong> and <strong>Class 315</strong> are PVC pipe wall-strength ratings.</p>`,
  ex: `<p>Tip: write each quantity sheet total in a column next to the bid quantity, then a third column for the difference. Anything over a few percent, or any item marked (F) that doesn't match exactly, gets a question.</p>`
},

{ h: "Step 4 · Answer key: planting quantities",
  lead: "Sheets PQ-1 and PQ-2 total the planting work by sheet. Most bid quantities are the plan totals rounded up a little.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Plan total</th><th class="num">Bid qty</th><th>Difference</th></tr></thead>
<tbody>
<tr><td>28 Group A</td><td class="num">6,874</td><td class="num">6,880</td><td>Rounded up 6</td></tr>
<tr><td>29 Group B</td><td class="num">2,119</td><td class="num">2,120</td><td>Rounded up 1</td></tr>
<tr><td>26 Group K</td><td class="num">439</td><td class="num">440</td><td>Rounded up 1</td></tr>
<tr><td>30 Group U</td><td class="num">306</td><td class="num">310</td><td>Rounded up 4</td></tr>
<tr><td>27 Group Z</td><td class="num">90</td><td class="num">90</td><td>Match</td></tr>
<tr><td>25 Packet fertilizer</td><td class="num">14,675</td><td class="num">14,700</td><td>Rounded up 25</td></tr>
<tr><td>24 Weed germination (SQYD)</td><td class="num">115,099</td><td class="num">116,000</td><td>Rounded up</td></tr>
<tr><td>63 Hydroseed (SQFT)</td><td class="num">796,550</td><td class="num">797,000</td><td>Rounded up</td></tr>
<tr><td>64 Compost (CY)</td><td class="num">1,178</td><td class="num">1,180</td><td>Rounded up</td></tr>
<tr><td>32 / 33 / 34 Gravel mulch (SQFT)</td><td class="num">114,440 / 79,490 / 27,100</td><td class="num">115,000 / 79,500 / 27,100</td><td>Rounded up or match</td></tr>
<tr><td>22 Rock mulch (SQFT)</td><td class="num">94,100</td><td class="num">94,100</td><td>Match</td></tr>
<tr><td>36 Edging (LF)</td><td class="num">6,200</td><td class="num">6,200</td><td>Match</td></tr>
<tr class="hl"><td><strong>35 Wood mulch (CY)</strong></td><td class="num"><strong>3,320</strong></td><td class="num"><strong>3,290</strong></td><td><strong>Bid is 30 CY lower</strong></td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Worked check, packet fertilizer:</strong> PL-1 gives packets per plant: A 1, B 2, K 5, U 3, Z 5. So 6,874 × 1 + 2,119 × 2 + 439 × 5 + 306 × 3 + 90 × 5 = 6,874 + 4,238 + 2,195 + 918 + 450 = <strong>14,675</strong>, the PQ-1 total. Group A check: 982 + 1,327 + 4,413 + 152 = 6,874.</p>`,
  src: "Plan sheets PQ-1 (Plant Quantities), PQ-2 (Planting Area Quantities), PL-1; Bid Item List."
},

{ h: "Step 4 · Answer key: irrigation quantities",
  lead: "Sheets IQ-1 and IQ-2 (irrigation quantities) total pipe and heads by controller and valve. IQ-3 adds the main supply side. The pipe items match exactly.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Plan total</th><th class="num">Bid qty</th><th>How it adds up</th></tr></thead>
<tbody>
<tr><td>55 1" Sch 40 (Schedule 40 PVC)</td><td class="num">40,785</td><td class="num">40,785</td><td>IQ-2 lateral total</td></tr>
<tr><td>56 1¼" Sch 40</td><td class="num">26,844</td><td class="num">26,844</td><td>IQ-2 lateral total</td></tr>
<tr><td>57 1½" Sch 40</td><td class="num">6,682</td><td class="num">6,682</td><td>IQ-2 lateral total</td></tr>
<tr><td>58 2" Sch 40</td><td class="num">7,802</td><td class="num">7,802</td><td>IQ-2 lateral total</td></tr>
<tr><td>59 2½" Sch 40</td><td class="num">12,740</td><td class="num">12,740</td><td>12,438 lateral + 302 main side</td></tr>
<tr><td>60 3" Class 315</td><td class="num">12,494</td><td class="num">12,494</td><td>12,226 main + 268 inside conduits</td></tr>
<tr><td>48 Tree well sprinkler</td><td class="num">1,892</td><td class="num">1,900</td><td>608 + 319 + 456 + 509</td></tr>
<tr><td>49 Riser (gear driven)</td><td class="num">205</td><td class="num">210</td><td>Rounded up</td></tr>
<tr><td>50 Pop-up (gear driven)</td><td class="num">301</td><td class="num">310</td><td>Rounded up</td></tr>
<tr><td>51 Riser sprinkler</td><td class="num">111</td><td class="num">120</td><td>Rounded up</td></tr>
<tr><td>52 Pop-up sprinkler</td><td class="num">1,120</td><td class="num">1,120</td><td>Match</td></tr>
<tr><td>38 / 39 / 40 Valves 1" / 1½" / 2"</td><td class="num">33 / 100 / 21</td><td class="num">33 / 100 / 21</td><td>2" = 18 remote control + 3 master</td></tr>
<tr><td>53 / 54 Gate valves 2" / 3"</td><td class="num">39 / 24</td><td class="num">39 / 24</td><td>Match</td></tr>
</tbody></table></div>`,
  ex: `<p>Gear-driven heads are rotors with internal gears that throw water 25 to 48 feet. Rotary stream heads (items 51–52) throw many thin streams 18 feet (sheet ISS-1).</p>`,
  src: "Plan sheets IQ-1, IQ-2 (Lateral Total), IQ-3; ISS-1; Bid Item List."
},

{ h: "Step 4 · Things that don't add up",
  lead: "A careful estimator finds small problems. Here are three on this job. Decide what you'd do about each before reading the key.",
  body: `<ol>
<li><strong>Wood mulch:</strong> PQ-2 totals 3,320 CY (1,011 + 921 + 548 + 496 on PP-5 to PP-8, plus 344 CY in plant basins). The bid item says 3,290 CY.</li>
<li><strong>Tree wells on IQ-2:</strong> controller '166(A)' shows 456 tree well sprinklers in its own subtotal, but the repeated '166(A)' row under '166(B)' shows 436. The summary table uses 456.</li>
<li><strong>Compost rate:</strong> PL-2 says 70 CY per acre. Hydroseed is 796,550 SQFT = 18.29 acres. 18.29 × 70 = about 1,280 CY. PQ-2 shows 1,178 CY, about 8% less, and the gap is about the same on every sheet.</li>
</ol>`,
  exLabel: "Answer key · how to handle each",
  ex: `<ul>
<li><strong>Wood mulch:</strong> not a final-pay item, so you're paid for what you actually place. A 30 CY gap (under 1%) won't change your bid much. Price it per CY and move on, or ask in a bidder inquiry if you want it fixed.</li>
<li><strong>Tree wells:</strong> add the valve rows yourself. With valve 15 read as 52, the rows add to 456, so 436 is a copy error. The bid quantity of 1,900 already covers 1,892. No question needed.</li>
<li><strong>Compost:</strong> the compost area may not equal the hydroseed area (for example, if compost skips some areas). You don't know. If compost were a big-dollar item you'd ask. Here it's paid per CY placed, so price per CY.</li>
</ul>
<p>Rule of thumb: ask before bid day when the item is final pay, lump sum, or big money, and the gap is more than rounding.</p>`,
  src: "Plan sheets PQ-2, IQ-2, PL-2; Bid Item List."
},

{ h: "Step 4 · Final-pay items on this job",
  lead: "Items marked (F) are paid at the bid quantity, not at what you install. Find them before you price.",
  body: `<p>The Bid Summary marks <strong>(F)</strong> on items 55, 56, 57, 58, 59, 60 (all six plastic supply pipe sizes) and 62 (PVC pipe conduit sleeve, 80 LF). Every one of them matches the plan quantity sheets exactly.</p>
<div class="tablewrap"><table>
<thead><tr><th>Final-pay item</th><th class="num">Quantity</th><th>If you install more</th><th>If you install less</th></tr></thead>
<tbody>
<tr><td>Supply pipe 1" to 3"</td><td class="num">107,347 LF total</td><td>You pay for the extra yourself</td><td>You keep the difference</td></tr>
<tr><td>PVC sleeve</td><td class="num">80 LF</td><td>Your cost</td><td>Your gain</td></tr>
</tbody></table></div>
<p>The exception: if the Engineer changes the work, the quantity is adjusted by change order.</p>`,
  ex: `<p><strong>Worked math:</strong> 40,785 + 26,844 + 6,682 + 7,802 + 12,740 + 12,494 = <strong>107,347 LF</strong> of final-pay supply pipe. If your crew installs 2% more than the plans show (fittings, routing, waste), that's about 2,147 LF you won't be paid for. Include waste and routing in your unit price, not in the quantity.</p>`,
  watch: `<p>The portal's bid item CSV for this job doesn't show the (F) marks. The Bid Item List in the SP and the Bid Summary are what count. Always check the official list.</p>`,
  src: "Bid Summary 11-431064, pages 9–10; plan sheets IQ-2, IQ-3."
},

{ h: "Step 5 · Task: read Addendum 1",
  lead: "Addendum 1 is dated May 12, 2022, five days before bid opening. What changed, and what must you do?",
  body: `<ol>
<li>Did any quantities, plan sheets or spec sections change?</li>
<li>What did change?</li>
<li>What must you do on the bid form?</li>
<li>Who else should you tell?</li>
</ol>`,
  exLabel: "Answer key · what Addendum 1 did",
  ex: `<ul>
<li>No quantities, plans or SP sections changed.</li>
<li>It “is being issued to revise the Federal Minimum Wages with Modification Number 6 dated 04/29/2022.”</li>
<li>Acknowledge Addendum 1 on the Bid to the Department form. Recheck your labor rates against the new federal rates and the current state DIR rates, and use the higher rate for each trade.</li>
<li>“Inform subcontractors and suppliers as necessary.” Your subs price labor too.</li>
</ul>`,
  watch: `<p>A wage-only addendum is easy to ignore. Don't. Failing to acknowledge any addendum can make the bid non-responsive (rejected for not following the rules). Check for new addenda again the morning of bid day.</p>`,
  deeper: `<p>Module 11 covers prevailing wage in detail. Get current state rates from <a href="https://www.dir.ca.gov" target="_blank" rel="noopener">DIR</a> and federal rates from <a href="https://sam.gov" target="_blank" rel="noopener">SAM.gov</a>. Rates change every year; never use this job's 2022 rates on a new bid.</p>`,
  src: "Addendum No. 1, contract 11-431064, May 12, 2022."
},

{ h: "Step 6 · Task: list the hidden costs",
  lead: "Read Special Provisions (SP) sections 5, 7, 12, 13, 14 and 20 and list every requirement that costs money but isn't on a landscape plan sheet. Aim for at least 12.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Category</th><th>Questions to ask yourself</th></tr></thead>
<tbody>
<tr><td>Work hours</td><td>When can I close a lane or shoulder? How many hours a day can my crew actually work near traffic?</td></tr>
<tr><td>Environment</td><td>Monitors? Lead in soil? Storm water risk level? Nesting birds?</td></tr>
<tr><td>Recurring work</td><td>Trash pickup? Watering? Establishment visits for 750 working days?</td></tr>
<tr><td>Paperwork</td><td>Submittals, safety questionnaires, partnering, water bills, digital files?</td></tr>
<tr><td>Timing</td><td>Waiting periods, grow-out time, other contracts nearby?</td></tr>
</tbody></table></div>`,
  ex: `<p>Write each one with a rough cost: crew-hours, a sub quote, or a dollar allowance. The next four slides are the answer key.</p>`
},

{ h: "Step 6 · Answer key: work hours and lane closures",
  lead: "On SR-905 the closure windows are daytime and short. That limits how much work a crew does near traffic each day.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Closure chart</th><th>Mon–Thu</th><th>Fri</th><th>Sat–Sun</th></tr></thead>
<tbody>
<tr><td>G1, G2 freeway lane closure near Caliente Ave (keep 2 lanes open)</td><td>9 AM–3 PM</td><td>9 AM–3 PM</td><td>8 AM–4 PM</td></tr>
<tr><td>G3, G4 right shoulder closure, Britannia Blvd to La Media Rd</td><td>9 AM–3 PM</td><td>9 AM–3 PM</td><td>8 AM–4 PM</td></tr>
<tr><td>J1 shoulder closure, EB exit ramp to Caliente Ave</td><td>9 AM–3 PM</td><td>10 AM–2 PM</td><td>8 AM–4 PM</td></tr>
</tbody></table></div>
<ul>
<li>Work area inside a closure: 2 miles maximum; only 1 stationary closure per direction at a time.</li>
<li>Equipment parked on the shoulder within 6 feet of a lane requires a shoulder closure.</li>
<li>Portable changeable message signs (PCMS) must show the message 30 minutes before closing a lane or shoulder.</li>
<li>Ramps stay fully open on designated holidays and listed special days; restrictions also apply around holidays (SP 12-4.02C(3)(f)).</li>
<li>Personal vehicles may not park on the traveled way or shoulders, even inside closures (SP 5-1.32).</li>
</ul>`,
  ex: `<p><strong>Worked example (example numbers):</strong> if a closure takes 45 minutes to set up and 45 to pick up, a 9 AM–3 PM window gives about 4½ hours of real work near traffic. An 8-hour crew day on that work is only about 56% productive (4.5 ÷ 8). Price work near lanes with that factor, or plan it for weekends with the 8-hour window. Work away from traffic isn't limited by the charts.</p>`,
  watch: `<p>Compare Module 15: on I-805, lane closures were mostly at night. Here they're daytime. Every job's charts are different; never copy work hours from another bid.</p>`,
  src: "SP 12-3.32C, 12-4.02C(1), 12-4.02C(3)(a), 12-4.02C(3)(e)–(g), 12-4.02C(3)(j) (Charts G1–G4, J1–J8); SP 5-1.32."
},

{ h: "Step 6 · Answer key: environment and site",
  lead: "These rules come from the Special Provisions (SP), not the plans, and each one costs crew time or a sub.",
  body: `<ul>
<li><strong>Paleontology (SP 14-7.04):</strong> no digging until Caltrans's paleontological team is on site. Submit a digging schedule 15 days before starting; every worker who digs takes 1 hour of training; notify 15 days before digging. The Engineer may stop or divert your work near fossils.</li>
<li><strong>Lead in soil (SP 7-1.02K(6)(j)(iii)):</strong> “unregulated earth material containing lead” exists throughout the site, mostly in the top 2 feet. Reuse all excavated material on the right-of-way; cover it in your lead compliance plan (item 1).</li>
<li><strong>Storm water:</strong> risk level 2 (SP 13-3.01A). A SWPPP (storm water pollution prevention plan), rain event action plans, sampling and annual reports (items 11–14).</li>
<li><strong>Solid waste from the public (SP 14-10.01A):</strong> start within the first 20 working days, then at least 4 hours every 2 weeks until acceptance. Each 1-hour unit = 2 laborers, a pickup with an arrow board, bags, hauling and dump fees (item 20, 350 HR).</li>
<li><strong>Local material (SP 6-1.03B):</strong> rock, soil or gravel from a non-commercial source needs a sampling plan 60 days before placing it.</li>
<li><strong>Nearby contracts (SP 5-1.20A):</strong> six other projects may be working near this one, including SR-125/905 connector work and a City culvert job on La Media Rd. Coordinate closures with them.</li>
</ul>`,
  ex: `<p><strong>Worked check, item 20:</strong> about 3½ years ≈ 91 two-week periods. 91 × 4 hours = 364 hours, close to the 350 HR bid quantity. (The 91 is an estimate from 870 working days.) At a bid of $195 per hour, 350 × $195 = $68,250 covers 700 laborer-hours, a truck, fuel and dump fees.</p>`,
  src: "SP 5-1.20A, 6-1.03B, 7-1.02K(6)(j)(iii), 13-3.01A, 14-7.04, 14-10.01A; Bid Item List items 1, 11–14, 20."
},

{ h: "Step 6 · Answer key: paperwork, waiting and penalties",
  lead: "Small requirements with real dollar consequences.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Requirement</th><th>Cost or risk</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Safety survey questionnaire for you and every listed sub within 30 days of contract approval</td><td>$1,000 deducted per missing questionnaire</td><td>SP 5-1.34</td></tr>
<tr><td>Professionally facilitated partnering and partnering training</td><td>Meeting time and your share of facilitator cost</td><td>SP 5-1.09A, 5-1.09C</td></tr>
<tr><td>21-day wait after irrigation before planting weed germination areas</td><td>Three weeks of watering and weed control in the schedule</td><td>SP 20-1.03E</td></tr>
<tr><td>Contract-grown plants statement within 30 days</td><td>Nursery deposit and lead time</td><td>SP 20-3.01A(3)(b)</td></tr>
<tr><td>Subsurface locator report approved before digging (10 days)</td><td>Schedule delay if late</td><td>SP 87-1.01C</td></tr>
<tr><td>Monthly water bills submitted until acceptance</td><td>Office time for about 3½ years</td><td>SP 5-1.20F</td></tr>
<tr><td>Liquidated damages (LDs) $5,200 per day</td><td>Late finish</td><td>RSS 8-1.10A</td></tr>
</tbody></table></div>`,
  exLabel: "Answer key · items Caltrans priced for you",
  ex: `<p>Four items have the same price on every bid because the price is set in the Bid Item List (the lab marks them fixed): item 3 DRA on-site meeting ($2,000 × 4), item 4 off-site DRA tasks ($200 × 10), item 12 rain event action plan ($500 × 4) and item 14 storm water annual report ($2,000 × 4). Enter them exactly as given. Changing them doesn't help you and can cause problems.</p>`,
  src: "SP 5-1.09, 5-1.20F, 5-1.34, 20-1.03E, 20-3.01A(3)(b), 87-1.01C; RSS 8-1.10A; Bid Summary items 3, 4, 12, 14."
},

{ h: "Step 6 · Answer key: 750 working days of establishment",
  lead: "Plant establishment here is about three years of maintenance after a 120-working-day build. It's one lump sum (item 31), and it's easy to underprice.",
  body: `<ul>
<li><strong>Type 1 plant establishment</strong> (Special Provisions, SP, 20-4.01A) for 750 working days.</li>
<li><strong>Four seasonal watering schedules</strong> every year: March–May, June–August, September–October, November–February. The first is due within 10 days after establishment starts; later ones 5 business days before each season. Build them in the Calsense software (SP 20-4.01C(1)).</li>
<li>Keep the site “neat and presentable… including areas not visible to the public” (SP 20-4.03A).</li>
<li>Control pests (SP 20-4.03H) and weeds, including under guardrails and in rock mulch (SP 20-1.03C(3)).</li>
<li>Replace dead plants and keep the controllers' flow checking on (ISS-1 note 5).</li>
<li>Pay the water bills (item 68) the whole time.</li>
</ul>`,
  ex: `<p><strong>Worked example (example numbers for practice, use your own costs):</strong> one 2-person crew, 1 day a week, for about 150 weeks (3 years) = 150 crew-days. At an example crew cost of $1,000 a day with truck, that's $150,000 before plant replacement, herbicide, supervision and markup. Compare that with what the real bidders put on item 31 in Step 10.</p>`,
  watch: `<p>If you price establishment as “a few visits,” you'll lose money every month for three years. Price it as a separate job with its own crew schedule.</p>`,
  src: "SP 20-1.03C(3), 20-4.01A, 20-4.01C(1), 20-4.03A, 20-4.03H; plan sheet ISS-1; Notice to Bidders."
},

{ h: "Step 6 · Worked example: estimating irrigation water",
  lead: "Item 68 pays the water bills from start of service to acceptance. HCF means hundred cubic feet, about 748 gallons. You must estimate them. Here's one way to do it.",
  body: `<ol class="steps">
<li><div><b>Fixed monthly charges</b>City of San Diego $78.72 + Otay 2 meters × $240.85 = $560.42 per month.</div></li>
<li><div><b>Months of service</b>About 3½ years ≈ 42 months (estimate from 870 working days).</div></li>
<li class="hl"><div><b>Fixed total</b>$560.42 × 42 = $23,537.64.</div></li>
<li><div><b>Water used</b>Example only: 8 irrigated acres × 24 inches a year. 8 × 43,560 SQFT × 2 ft = 696,960 cubic feet = 6,970 HCF a year.</div></li>
<li><div><b>Water cost</b>6,970 HCF × $5.84 = $40,705 a year × 3.5 years = $142,467.</div></li>
<li class="hl"><div><b>Item 68 estimate</b>$23,538 + $142,467 ≈ $166,005 (example).</div></li>
</ol>
<p>The 8 acres and 24 inches are made-up example numbers. For a real bid, measure the irrigated areas on the plans, use the designer's precipitation rates and your seasonal schedules, and price establishment watering separately from the build period.</p>`,
  ex: `<p><strong>Reverse check:</strong> a bid of $60,000 leaves about $36,462 for water after fixed charges, or about 6,244 HCF (4.7 million gallons) over 3½ years. A bid of $553,400 implies about 90,700 HCF (68 million gallons). Two real bidders were at each end of this range. You'll see who in Step 10.</p>`,
  watch: `<p>If the agency raises its rates, Caltrans adjusts item 68 by the difference (SP 5-1.20F). If you guessed the amount of water wrong, there's no adjustment. That risk is yours.</p>`,
  src: "SP 5-1.20F rates; 1 HCF = 100 cubic feet ≈ 748 gallons."
},

{ h: "Step 7 · Task: find where the money is",
  lead: "Before pricing 69 items equally, find the 10 that carry most of the money. Spend most of your pricing time there.",
  body: `<ol class="steps">
<li><div><b>Make a quick first pass</b>Put a rough unit price on every item (your best guess or last job's number).</div></li>
<li><div><b>Extend each item</b>Unit price × quantity.</div></li>
<li class="hl"><div><b>Sort by dollars</b>Largest first. Add a column for percent of total and a running total.</div></li>
<li><div><b>Find the cut-off</b>Usually 10 to 15 items make up half the bid.</div></li>
<li class="hl"><div><b>Get real quotes for those</b>Rock and gravel suppliers, nursery, pipe supply house. Build crew production for each.</div></li>
<li><div><b>Price the rest carefully but faster</b>Small items still matter, but a 10% miss on a $1,500 item costs $150.</div></li>
</ol>`,
  ex: `<p>Do this in the lab or a spreadsheet. The answer key on the next slide uses the winning bid's own numbers, so you can see the real ranking.</p>`
},

{ h: "Step 7 · Answer key: the top 10 items",
  lead: "In the winning bid, 10 of 69 items carried 47.8% of the money. Four of the top five are mulch or plants.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rank</th><th>Item</th><th class="num">Quantity</th><th class="num">Winner's unit price</th><th class="num">Amount</th><th class="num">Share</th><th class="num">Running</th></tr></thead>
<tbody>
<tr><td>1</td><td>22 Rock mulch</td><td class="num">94,100 SQFT</td><td class="num">$4.05</td><td class="num">$381,105</td><td class="num">9.0%</td><td class="num">9.0%</td></tr>
<tr><td>2</td><td>32 Gravel mulch Type 1</td><td class="num">115,000 SQFT</td><td class="num">$2.50</td><td class="num">$287,500</td><td class="num">6.8%</td><td class="num">15.7%</td></tr>
<tr><td>3</td><td>26 Plant Group K (24" box)</td><td class="num">440 EA</td><td class="num">$600.00</td><td class="num">$264,000</td><td class="num">6.2%</td><td class="num">22.0%</td></tr>
<tr><td>4</td><td>33 Gravel mulch Type 2</td><td class="num">79,500 SQFT</td><td class="num">$2.75</td><td class="num">$218,625</td><td class="num">5.1%</td><td class="num">27.1%</td></tr>
<tr><td>5</td><td>55 1" Sch 40 pipe</td><td class="num">40,785 LF</td><td class="num">$4.60</td><td class="num">$187,611</td><td class="num">4.4%</td><td class="num">31.5%</td></tr>
<tr><td>6</td><td>69 Mobilization</td><td class="num">LS</td><td class="num">$159,000</td><td class="num">$159,000</td><td class="num">3.7%</td><td class="num">35.3%</td></tr>
<tr><td>7</td><td>60 3" Class 315 pipe</td><td class="num">12,494 LF</td><td class="num">$12.00</td><td class="num">$149,928</td><td class="num">3.5%</td><td class="num">38.8%</td></tr>
<tr><td>8</td><td>56 1¼" Sch 40 pipe</td><td class="num">26,844 LF</td><td class="num">$5.10</td><td class="num">$136,904</td><td class="num">3.2%</td><td class="num">42.0%</td></tr>
<tr><td>9</td><td>27 Plant Group Z (palms)</td><td class="num">90 EA</td><td class="num">$1,400.00</td><td class="num">$126,000</td><td class="num">3.0%</td><td class="num">45.0%</td></tr>
<tr><td>10</td><td>35 Wood mulch</td><td class="num">3,290 CY</td><td class="num">$37.00</td><td class="num">$121,730</td><td class="num">2.9%</td><td class="num">47.8%</td></tr>
</tbody></table></div>
<p>Share = amount ÷ $4,247,463.10 total. <strong>LS</strong> = lump sum, one price for the whole item.</p>`,
  watch: `<p>This uses the winner's prices. On the losing bid with the highest total, irrigation water service charges (item 68) would have been the single biggest item. Your top 10 depends on your own prices, so build your own list.</p>`,
  src: "Bid Summary 11-431064, Contract Proposal of Low Bidder (pages 8–10); shares calculated."
},

{ h: "Step 7 · Answer key: the job by group",
  lead: "Group the items the way you'd run the work. Mulch and pipe together are almost half of every bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Group (items)</th><th class="num">Griffith</th><th class="num">Marina</th><th class="num">Diversified</th></tr></thead>
<tbody>
<tr><td>Rock, gravel, wood mulch (22, 23, 32–35)</td><td class="num">$1,145,067 (27.0%)</td><td class="num">$1,099,640 (25.8%)</td><td class="num">$1,123,055 (20.5%)</td></tr>
<tr><td>Supply pipe incl. ductile iron (45, 55–60)</td><td class="num">$756,049 (17.8%)</td><td class="num">$739,686 (17.4%)</td><td class="num">$1,167,252 (21.4%)</td></tr>
<tr><td>Plants (26–30)</td><td class="num">$531,592 (12.5%)</td><td class="num">$395,300 (9.3%)</td><td class="num">$495,720 (9.1%)</td></tr>
<tr><td>Traffic control and storm water (5–19)</td><td class="num">$268,575 (6.3%)</td><td class="num">$426,970 (10.0%)</td><td class="num">$373,602 (6.8%)</td></tr>
<tr><td>Sprinkler assemblies (48–52)</td><td class="num">$266,090 (6.3%)</td><td class="num">$222,350 (5.2%)</td><td class="num">$240,905 (4.4%)</td></tr>
<tr><td>Mobilization and time-related overhead (69, 2)</td><td class="num">$231,000 (5.4%)</td><td class="num">$214,400 (5.0%)</td><td class="num">$220,400 (4.0%)</td></tr>
<tr><td>Water meter and water service (67, 68)</td><td class="num">$178,000 (4.2%)</td><td class="num">$208,000 (4.9%)</td><td class="num">$700,300 (12.8%)</td></tr>
<tr><td>Plant establishment (31)</td><td class="num">$95,000 (2.2%)</td><td class="num">$140,000 (3.3%)</td><td class="num">$153,900 (2.8%)</td></tr>
<tr><td>Valves (38–40, 53, 54)</td><td class="num">$112,975 (2.7%)</td><td class="num">$110,325 (2.6%)</td><td class="num">$144,100 (2.6%)</td></tr>
<tr><td>Controllers (41–44)</td><td class="num">$64,000 (1.5%)</td><td class="num">$53,000 (1.2%)</td><td class="num">$87,100 (1.6%)</td></tr>
</tbody></table></div>
<p><strong>Time-related overhead (TRO)</strong> is item 2: the contractor's job-site overhead, paid per working day for the 120 build days.</p>`,
  src: "Bid Summary 11-431064, all bidders' unit prices × quantities; percentages are of each bidder's own total."
},

{ h: "Step 7 · How to price rock mulch, the biggest item",
  lead: "Build big items from material, labor and equipment, not from a single “per square foot” guess.",
  exLabel: "Worked example (example numbers for practice, use your own quotes and crews)",
  ex: `<ol>
<li><strong>Material:</strong> your supplier quotes 4–12" tan cobble at $90 a ton delivered. You figure 1 ton covers 60 SQFT at the depth shown. 94,100 ÷ 60 = 1,568 tons × $90 = $141,120.</li>
<li><strong>Prep:</strong> grade and compact to 90%. Example production 4,000 SQFT a day for a 3-person crew with a skid steer at $2,400 a day: 94,100 ÷ 4,000 = 23.5 days × $2,400 = $56,400.</li>
<li><strong>Placement:</strong> hand-set so smooth faces show, 1,200 SQFT a day for a 4-person crew with a loader at $3,000 a day: 94,100 ÷ 1,200 = 78.4 days × $3,000 = $235,200.</li>
<li><strong>Sample and submittal:</strong> $500 allowance.</li>
<li><strong>Direct cost:</strong> $141,120 + $56,400 + $235,200 + $500 = $433,220 = $4.60 per SQFT.</li>
<li><strong>Add markup</strong> (Module 10) for your bid price.</li>
</ol>`,
  body: `<p>Every number above is made up. The method is real: tons from coverage, days from production, cost from crew rates. Your coverage comes from the supplier's spec sheet and the depth on the plans; your production comes from your own past jobs (Module 9).</p>
<ul>
<li>Slope area is larger than flat area (measured “parallel to the surface”).</li>
<li>Daytime closure windows slow work near traffic (Step 6).</li>
<li>Rock must come from a single source: confirm the supplier has enough of one color.</li>
</ul>`,
  watch: `<p>The three real bids on rock mulch were $4.05, $2.70 and $4.35 per SQFT. A $1.35 difference on 94,100 SQFT is $127,035. Big items decide jobs.</p>`,
  src: "SP 20-5.03E; Bid Summary item 22. Material, coverage and production figures are made-up examples."
},

{ h: "Step 7 · Pricing items where you know the cost",
  lead: "Some items come with known costs in the Special Provisions (SP). Start with those, because they're the easiest money to get right.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Known cost from the documents</th><th>What to add</th></tr></thead>
<tbody>
<tr><td>41–44 Controllers</td><td>$46,583.69 quoted for all four</td><td>Tax, delivery, concrete pad and foundation, sweeps, install, wiring, programming, markup</td></tr>
<tr><td>47 Flow sensors</td><td>$855.88 each quoted</td><td>Tax, delivery, fittings, install, wiring</td></tr>
<tr><td>67 Water meter charges</td><td>$118,667 in agency fees</td><td>Time to apply and coordinate</td></tr>
<tr><td>68 Water service</td><td>Rates known, usage estimated</td><td>Your water estimate (Step 6)</td></tr>
<tr><td>3, 4, 12, 14</td><td>Price set in the Bid Item List</td><td>Nothing; enter as given</td></tr>
</tbody></table></div>`,
  exLabel: "Answer key · what the bidders did",
  ex: `<ul>
<li>Controllers (four together): Griffith $64,000, Marina $53,000, Diversified $87,100. Against $46,583.69 of quoted material, Marina carried only $6,416 for tax, delivery, four foundations, installation and profit.</li>
<li>Flow sensors each: $1,305, $1,200, $2,160 against $855.88 quoted.</li>
<li>Water meter charges: Griffith <strong>$118,000</strong>, which is $667 <em>under</em> the known fees. Marina $148,000 and Diversified $146,900 carried about $28,000 to $29,000 over the fees.</li>
</ul>`,
  watch: `<p>Bidding below a known pass-through cost is giving money away. The winner did it here by $667. Small, but it's a habit to avoid.</p>`,
  src: "SP 5-1.20E, 20-2.05B, 20-2.06B(2)(a); Bid Summary items 41–47, 67."
},

{ h: "Step 7 · Your turn: price the job in the lab",
  lead: "Now enter your prices. Do the landscape scope first, then the full prime bid.",
  body: `<ol class="steps">
<li><div><b>Open the lab</b>Go to <a href="#lab-11-431064">Real Bid Lab · 11-431064</a>.</div></li>
<li><div><b>Pick “Landscape sub scope”</b>Planting, irrigation and erosion control: what you'd quote to a prime.</div></li>
<li class="hl"><div><b>Price your top 10 from real build-ups</b>Material quotes or published prices, crew-day costs, production rates.</div></li>
<li><div><b>Price the rest</b>Use the quoted controller and flow sensor prices, the meter fees and your water estimate.</div></li>
<li><div><b>Switch to the full prime bid</b>Add traffic control, storm water, mobilization and overhead. For items you'd subcontract, use an assumption and write it down.</div></li>
<li class="hl"><div><b>Review before you reveal</b>Check your top 10 again. Check every lump sum against the spec section. Don't reveal yet.</div></li>
</ol>`,
  watch: `<p>Don't copy the numbers you've already seen on these slides into the lab. The point is to test your own method. You'll compare in Step 10.</p>`
},

{ h: "Step 8 · Task: plan the DBE goal",
  lead: "The goal is 26% of your bid. Answer these before reading the key.",
  body: `<ol>
<li>At a $4.25 million bid, how many dollars must go to DBEs?</li>
<li>When are the DBE forms due?</li>
<li>Which forms, and what goes with them?</li>
<li>What must you check about each DBE at bid time?</li>
<li>Which parts of this job could a DBE perform?</li>
</ol>
<p>A <strong>DBE (Disadvantaged Business Enterprise)</strong> is a small business owned by people the federal program defines as socially and economically disadvantaged, certified by the California Unified Certification Program (CUCP).</p>`,
  exLabel: "Answer key · the DBE rules on this job",
  ex: `<ol>
<li>26% × $4,247,463.10 = <strong>$1,104,340.41</strong>.</li>
<li>No later than 4 PM on the 5th day after bid opening. If that day is a Saturday or holiday, the next business day (SP 2-1.33B(2)(b)(ii)).</li>
<li>DBE Commitment, a DBE Confirmation signed by each DBE, a copy of each DBE's quote, and Good Faith Efforts documentation if you're short (SP 2-1.12B(2)).</li>
<li>That each firm is certified by the CUCP and has the NAICS or work codes for the work it will do (SP 2-1.12B). <strong>NAICS</strong> is the federal industry code system.</li>
<li>Examples: traffic control, storm water plans and devices, trash pickup, electrical, hydroseed, trucking, mulch or rock supply, a nursery.</li>
</ol>`,
  deeper: `<p>Search certified firms in the <a href="https://caltrans.dbesystem.com" target="_blank" rel="noopener">Caltrans DBE directory</a>. Materials bought from a DBE count only partly: under federal rules (49 CFR 26.55) a DBE regular dealer counts 60% of the material cost and a DBE manufacturer counts 100%. The rules were updated in 2024; check the current text before you rely on it.</p>`,
  src: "Notice to Bidders; SP 2-1.12B, 2-1.12B(2), 2-1.33B(2)(b)(ii); 49 CFR 26.55 (U.S. DOT, 2024 supplier counting summary)."
},

{ h: "Step 8 · What the bidders listed",
  lead: "The Bid Summary shows each bidder's subcontractor list. Read it like a competitor would.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Bidder</th><th>Subcontractors listed (item and percent)</th></tr></thead>
<tbody>
<tr><td><strong>Griffith</strong></td><td>Perry Electric, Santee: 65, 66 (100%) · Quality Hydroseeding &amp; Restoration, Ramona: 63 hydroseed (100%) · SWPPQUEEN, Sacramento: 10, 11, 13 storm water (100%) · Synergy Traffic Control, Escondido: 6 (64%), 7, 8, 9 (100%), ramp closures and attenuator truck · United General Construction, Poway: 20 trash pickup, 21 roadside clearing (100%)</td></tr>
<tr><td><strong>Marina</strong></td><td>Arrow Signs HC, Temecula: 5 (80%) · Bayside Engineering Const., San Diego: 1 (84%), 10 (81%), 11 (80%), 12 (63%), 13 (78%), 14 (42%), 15 (80%), 16 (66%), 17 (80%), 20 (80%) · Perry Electric: 65 (78%), 66 (80%) · Riverside Directional Drilling: 61 (54%), boring · SoCal Traffic, Vista: 6 (45%) · Turboscape, Lake Elsinore: 35 wood mulch (34%)</td></tr>
<tr><td><strong>Diversified</strong></td><td>Fortte Construction, Buena Park: 65, 66 (100%) · Synergy Traffic Control: 5, 6, 7 (100%)</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Worked math (estimate):</strong> percent × each item's amount, added up. Griffith listed about $373,440 of subcontracts (8.8% of its bid). Marina about $478,328 (11.2%). Diversified about $243,800 (4.5%). All three did the planting, irrigation and mulch themselves.</p>`,
  watch: `<p>The Bid Summary doesn't say which subs are DBEs. DBE commitments were filed 5 days later and aren't in the summary. Don't assume a listed sub is a DBE, and don't assume an unlisted supplier isn't. Suppliers and truckers can count toward DBE goals without being on the subcontractor list.</p>`,
  src: "Bid Summary 11-431064, List of Subcontractors (pages 2–7). Dollar totals calculated from listed percentages."
},

{ h: "Step 8 · Scenario: you're the landscape sub",
  lead: "Your company decided not to prime SR-905. You want to quote the landscape scope to the primes. What do you do?",
  body: `<ol class="steps">
<li><div><b>Find the primes</b>Check the planholders list on the Caltrans job page; 8 bid books were issued. Call each estimator.</div></li>
<li><div><b>Define your scope by item number</b>For example items 22–36 and 38–64, or only irrigation 37–62. Primes level quotes by item.</div></li>
<li class="hl"><div><b>Price by item, with the bid units</b>SQFT, EA, LF, CY: the same units and quantities as the Bid Item List, so the prime can drop your numbers straight in.</div></li>
<li><div><b>State DBE status</b>If you're a certified DBE, say so on the quote with your certification number. It's worth a lot on a 26% goal.</div></li>
<li><div><b>Write clear exclusions</b>Traffic control, water bills, storm water, mobilization if the prime carries them (Module 13).</div></li>
<li class="hl"><div><b>Send it early</b>At least a day before bid day so the prime can level it. Confirm it was received.</div></li>
</ol>`,
  exLabel: "Answer key · why this works",
  ex: `<p>On Module 15's job, Diversified Landscape bid as a prime <em>and</em> quoted irrigation to another prime. Primes like Griffith that aren't landscape-only firms still self-performed the landscape here, but many A contractors don't have landscape crews. A clean item-by-item quote gets you on their sub list.</p>`,
  src: "Bid Summary 11-431064 page 1 (8 bid books issued); Module 15 (11-428704 sub lists)."
},

{ h: "Step 9 · The bid book and its deadlines",
  lead: "On a federal-aid job with a DBE goal, forms are due at different times. Make a calendar the day you decide to bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Form</th><th>Due</th></tr></thead>
<tbody>
<tr><td>Bid to the Department of Transportation (prices, addenda acknowledged, certifications)</td><td>Time of bid, except the DIR registration number</td></tr>
<tr><td>Subcontractor List</td><td>Time of bid, except the DIR registration number</td></tr>
<tr><td>Small Business Status</td><td>Time of bid</td></tr>
<tr><td>Opt Out of Payment Adjustments for Price Index Fluctuations (only if you choose it)</td><td>Time of bid</td></tr>
<tr><td>Bid bond (10%)</td><td>Time of bid</td></tr>
<tr><td>DBE Commitment, DBE Confirmation, Good Faith Efforts</td><td>4 PM on the 5th day after bid opening</td></tr>
<tr><td>Copies of the bid and Subcontractor List showing DIR registration numbers</td><td>10 days after bid opening</td></tr>
</tbody></table></div>
<p><strong>DIR registration</strong> is the public works contractor registration with the California Department of Industrial Relations. You and every sub need it (Module 2).</p>`,
  exLabel: "Answer key · the real calendar",
  ex: `<ul>
<li>April 11, 2022: bid book issued</li>
<li>May 12, 2022: Addendum 1 (wage rates)</li>
<li>May 17, 2022, 2:00 PM: bids due on Bid Express, opened by webcast</li>
<li>5th day after opening, 4 PM: DBE package</li>
<li>10 days after opening: copies with DIR numbers</li>
<li>July 11, 2022: contract awarded to Griffith Company</li>
</ul>`,
  watch: `<p>On the Module 15 job, the lowest bidder was thrown out for a late DBE submittal. Put the day-5 deadline in two calendars and assign one person to own it.</p>`,
  src: "SP 2-1.33B(2)(b)(ii) table; Notice to Bidders; Addendum 1; award record (Caltrans contract page)."
},

{ h: "Step 9 · Bid-day checklist for SR-905",
  lead: "A one-page checklist you can reuse. Every line comes from this job's documents.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Check</th><th>Done</th></tr></thead>
<tbody>
<tr><td>All 69 items priced; unit price × quantity checked; no blanks</td><td>☐</td></tr>
<tr><td>Fixed items 3, 4, 12, 14 entered exactly as set</td><td>☐</td></tr>
<tr><td>Item 67 (water meter charges) at or above $118,667; item 68 (water service) from your water estimate</td><td>☐</td></tr>
<tr><td>Controllers priced from the SiteOne quote plus pad, install, tax and delivery</td><td>☐</td></tr>
<tr><td>Addendum 1 acknowledged; checked for new addenda this morning</td><td>☐</td></tr>
<tr><td>Labor at the higher of state and federal rates (federal Modification 6)</td><td>☐</td></tr>
<tr><td>Subcontractor List: name, city, license, items and percent for every sub over the listing threshold (Module 14)</td><td>☐</td></tr>
<tr><td>Bid bond for 10%, signed by the surety</td><td>☐</td></tr>
<tr><td>Certifications answered truthfully</td><td>☐</td></tr>
<tr><td>Bid submitted on Bid Express well before 2:00 PM; receipt saved</td><td>☐</td></tr>
<tr><td>DBE forms and quotes ready for day 5, owner assigned</td><td>☐</td></tr>
</tbody></table></div>`,
  ex: `<p>Print this, or copy it into your bid folder template. After each bid, add a line for anything you nearly missed.</p>`
},

{ h: "Step 10 · The results",
  lead: "Bids opened May 17, 2022. The top two were $6,973 apart. Reveal the bids in the lab now and find your place.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rank</th><th>Bidder</th><th class="num">Total</th><th class="num">vs. winner</th></tr></thead>
<tbody>
<tr><td>1</td><td>Griffith Company, Brea (awarded)</td><td class="num">$4,247,463.10</td><td class="num">n/a</td></tr>
<tr><td>2</td><td>Marina Landscape, Inc., Orange</td><td class="num">$4,254,436.10</td><td class="num">+0.16%</td></tr>
<tr><td>3</td><td>Diversified Landscape Co., Wildomar</td><td class="num">$5,465,706.30</td><td class="num">+28.7%</td></tr>
<tr><td></td><td>Engineer's estimate (EE)</td><td class="num">$4,250,599.00</td><td class="num">+0.07%</td></tr>
<tr><td></td><td>Estimate printed in the Notice</td><td class="num">$4,260,000.00</td><td class="num">+0.30%</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Worked math:</strong> $4,254,436.10 − $4,247,463.10 = $6,973.00. $6,973 ÷ $4,247,463.10 = 0.164%. The winner came in $3,135.90 (0.07%) under the engineer's estimate. Diversified: $5,465,706.30 − $4,247,463.10 = $1,218,243.20 more, or 28.7%.</p>`,
  watch: `<p>Unlike Module 15, where bids came in 22% under the estimate, here the winning bid almost equals it. Never assume the market will be under (or over) the estimate. Price your costs.</p>`,
  src: "Bid Summary 11-431064, page 1 and Summary of Remaining Bidders."
},

{ h: "Step 10 · How a $4.2M race ends 0.16% apart",
  lead: "Griffith and Marina had nearly identical totals, but item by item they were far apart. The differences cancelled out.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Griffith unit</th><th class="num">Marina unit</th><th class="num">Marina minus Griffith</th></tr></thead>
<tbody>
<tr><td>17 Temporary fiber roll (23,800 LF)</td><td class="num">$1.50</td><td class="num">$7.25</td><td class="num">+$136,850</td></tr>
<tr><td>32 Gravel mulch Type 1</td><td class="num">$2.50</td><td class="num">$3.15</td><td class="num">+$74,750</td></tr>
<tr><td>35 Wood mulch</td><td class="num">$37.00</td><td class="num">$58.00</td><td class="num">+$69,090</td></tr>
<tr><td>10 Job site management (LS)</td><td class="num">$8,550</td><td class="num">$59,000</td><td class="num">+$50,450</td></tr>
<tr><td>60 3" Class 315 pipe</td><td class="num">$12.00</td><td class="num">$16.00</td><td class="num">+$49,976</td></tr>
<tr><td>31 Plant establishment (LS)</td><td class="num">$95,000</td><td class="num">$140,000</td><td class="num">+$45,000</td></tr>
<tr><td>22 Rock mulch</td><td class="num">$4.05</td><td class="num">$2.70</td><td class="num">−$127,035</td></tr>
<tr><td>26 Plant Group K</td><td class="num">$600</td><td class="num">$360</td><td class="num">−$105,600</td></tr>
<tr><td>2 Time-related overhead (per day × 120)</td><td class="num">$600</td><td class="num">$120</td><td class="num">−$57,600</td></tr>
<tr><td>6 Traffic control system (LS)</td><td class="num">$90,000</td><td class="num">$41,000</td><td class="num">−$49,000</td></tr>
</tbody></table></div>
<p>All 69 differences together add up to Marina's $6,973 higher total.</p>`,
  ex: `<p><strong>Lesson:</strong> two experienced bidders disagreed by $240 on each box tree and by $5.75 per foot of fiber roll, yet finished within 0.16%. Being close on the total doesn't mean you priced each item right. It means your mistakes balanced out. Learn from the items, not just the total.</p>`,
  src: "Bid Summary 11-431064, pages 8–12; differences calculated as (Marina − Griffith) × quantity."
},

{ h: "Step 10 · Where Diversified's $1.2 million came from",
  lead: "Diversified was 28.7% high. One item explains about 40% of the gap; the rest is spread over pipe and general items.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Griffith</th><th class="num">Diversified</th><th class="num">Difference</th></tr></thead>
<tbody>
<tr class="hl"><td><strong>68 Irrigation water service charges (LS)</strong></td><td class="num">$60,000</td><td class="num">$553,400</td><td class="num"><strong>+$493,400</strong></td></tr>
<tr><td>55 1" Sch 40 pipe ($/LF)</td><td class="num">$4.60</td><td class="num">$7.20</td><td class="num">+$106,041</td></tr>
<tr><td>21 Roadside clearing (LS)</td><td class="num">$55,000</td><td class="num">$152,000</td><td class="num">+$97,000</td></tr>
<tr><td>17 Temporary fiber roll ($/LF)</td><td class="num">$1.50</td><td class="num">$4.95</td><td class="num">+$82,110</td></tr>
<tr><td>59 2½" Sch 40 pipe ($/LF)</td><td class="num">$8.80</td><td class="num">$15.10</td><td class="num">+$80,262</td></tr>
<tr><td>56 1¼" Sch 40 pipe ($/LF)</td><td class="num">$5.10</td><td class="num">$7.60</td><td class="num">+$67,110</td></tr>
<tr><td>60 3" Class 315 pipe ($/LF)</td><td class="num">$12.00</td><td class="num">$17.30</td><td class="num">+$66,218</td></tr>
<tr><td>37 Control and neutral conductors (LS)</td><td class="num">$104,000</td><td class="num">$164,700</td><td class="num">+$60,700</td></tr>
<tr><td>31 Plant establishment (LS)</td><td class="num">$95,000</td><td class="num">$153,900</td><td class="num">+$58,900</td></tr>
</tbody></table></div>
<p>Without item 68, Diversified would still have been $724,843.20 (17.1%) high.</p>`,
  ex: `<p><strong>What item 68 shows:</strong> Griffith and Marina both bid exactly $60,000 for 3½ years of water. Diversified bid $553,400. Using the Step 6 method, $60,000 buys about 4.7 million gallons after fixed charges; $553,400 buys about 68 million. Diversified may have estimated water use from the irrigated area and watering schedules; the other two may have used a lower or more standard allowance. Nobody can tell from the Bid Summary who was “right.” What's certain: an unclear lump sum can swing a bid by half a million dollars. Estimate it from the documents and write down your assumption.</p>`,
  src: "Bid Summary 11-431064, Summary of Remaining Bidders; SP 5-1.20F; differences calculated."
},

{ h: "Step 10 · Item spreads: where bidders disagree most",
  lead: "The spread is the highest unit price divided by the lowest. Big spreads show where the documents are unclear or the risk is hard to price.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Unit prices (Griffith / Marina / Diversified)</th><th class="num">Spread</th></tr></thead>
<tbody>
<tr><td>68 Irrigation water service charges</td><td class="num">$60,000 / $60,000 / $553,400</td><td class="num">9.2×</td></tr>
<tr><td>10 Job site management</td><td class="num">$8,550 / $59,000 / $13,000</td><td class="num">6.9×</td></tr>
<tr><td>2 Time-related overhead (per day)</td><td class="num">$600 / $120 / $800</td><td class="num">6.7×</td></tr>
<tr><td>19 Street sweeping</td><td class="num">$2,800 / $18,500 / $5,310</td><td class="num">6.6×</td></tr>
<tr><td>62 PVC conduit sleeve (per LF)</td><td class="num">$95 / $17 / $43.80</td><td class="num">5.6×</td></tr>
<tr><td>17 Temporary fiber roll (per LF)</td><td class="num">$1.50 / $7.25 / $4.95</td><td class="num">4.8×</td></tr>
<tr><td colspan="3"><strong>Compare: landscape items where they agreed</strong></td></tr>
<tr><td>52 Pop-up sprinkler assembly</td><td class="num">$89 / $85 / $92.60</td><td class="num">1.09×</td></tr>
<tr><td>39 1½" remote control valve</td><td class="num">$490 / $480 / $550</td><td class="num">1.15×</td></tr>
<tr><td>48 Tree well sprinkler assembly</td><td class="num">$58 / $45 / $48</td><td class="num">1.29×</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Lesson:</strong> experienced landscape bidders agree closely on heads and valves, the work they do every day. They disagree on lump sums, general conditions and items with unclear amounts. That's where a careful reading of the SP gives you an edge, and where a careless reading costs you the job or the profit.</p>`,
  deeper: `<p>Counting each item's lowest unit price (ties count for each bidder): Griffith was low on 27 items, Marina on 33 and Diversified on 20. Marina was low on more items and still lost. Totals win, not item counts.</p>`,
  src: "Bid Summary 11-431064; spreads and counts calculated from all 69 items."
},

{ h: "Step 10 · Grade your own bid",
  lead: "Use this rubric after you reveal the bids in the lab. Write the answers down; they're your lessons for the next real bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Question</th><th>Good result</th><th>If not, look at</th></tr></thead>
<tbody>
<tr><td>Where did my total land?</td><td>Within about 5% of the winner</td><td>Your top 10 items first</td></tr>
<tr><td>How did my top 10 compare to the middle bid on each?</td><td>Most within 20%</td><td>Material quotes, production rates</td></tr>
<tr><td>Did I carry item 67 at or above the known fees?</td><td>Yes</td><td>SP 5-1.20E</td></tr>
<tr><td>Did I write down my item 68 water assumption?</td><td>Yes, with acres and inches</td><td>Step 6 worked example</td></tr>
<tr><td>Was my establishment price a real crew plan for 750 working days?</td><td>Yes</td><td>SP 20-4; Step 6</td></tr>
<tr><td>Did I price daytime closure limits into work near traffic?</td><td>Yes</td><td>SP 12-4.02C charts</td></tr>
<tr><td>Did I enter the four fixed items exactly?</td><td>Yes</td><td>Items 3, 4, 12, 14</td></tr>
<tr><td>Which 5 items cost me the most against the winner?</td><td>Listed with a reason for each</td><td>The lab's “items that cost you most” list</td></tr>
</tbody></table></div>`,
  watch: `<p>Being the low bidder in the lab isn't the goal. A bid that wins because you forgot water, establishment or closure time would lose money for three years. The goal is a price you can explain line by line.</p>`
},

{ h: "Capstone · Common mistakes on a job like this",
  lead: "Every one of these shows up in the real documents or results for SR-905.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>What it costs</th><th>How to avoid it</th></tr></thead>
<tbody>
<tr><td>Pricing only from the plans</td><td>Missed water, monitors, trash pickup, safety surveys</td><td>Read Special Provisions (SP) sections 5, 7, 12, 14 and 20 every time</td></tr>
<tr><td>Guessing a lump sum</td><td>Up to $493,400 swing on one item here</td><td>Build it from the SP rates and your assumptions</td></tr>
<tr><td>Flat takeoff on slopes for rock</td><td>Short on tons and labor</td><td>Measured parallel to the surface; check slopes</td></tr>
<tr><td>Ignoring daytime closure windows</td><td>Crews paid for 8 hours, working 4½ near traffic</td><td>Production factor for work near lanes</td></tr>
<tr><td>Establishment as “a few visits”</td><td>Losses every month for about 3 years</td><td>Crew-day plan, plant replacement, herbicide, water</td></tr>
<tr><td>Late contract-grow order</td><td>Wrong sizes or substitutions at planting time</td><td>Grower quote before bid; order within 30 days</td></tr>
<tr><td>Bidding under a known fee</td><td>Money given away ($667 on item 67 here)</td><td>Fees are a floor, not a target</td></tr>
<tr><td>Missing the day-5 DBE deadline</td><td>Bid rejected</td><td>Calendar it twice; one owner</td></tr>
</tbody></table></div>`,
  ex: `<p>For scopes this module doesn't cover in depth (roadside clearing, grading, drainage, demolition), see <a href="#m18-1">Module 18</a>. Item 21 roadside clearing on this job is shown on the 12 plant removal sheets, PR-1 to PR-12.</p>`
},

{ t: "terms", h: "Words to know",
  lead: "Words, abbreviations and phrases from this job's documents. The full list is in the Bid Dictionary.",
  terms: [
    ["Capstone", "A final project that uses everything learned in a course."],
    ["SR (State Route)", "A state highway, such as SR-905."],
    ["OC / UC", "Overcrossing (a bridge over the freeway) / undercrossing (the freeway passes over a street)."],
    ["Post mile (PM)", "Caltrans's mile marker system; R6.4/R10.1 is the job's limits."],
    ["Notice to Bidders (NTB)", "The first pages of the bid book: dates, license, DBE goal, time and estimate."],
    ["Special Provisions (SP)", "Rules for this job only, written as changes to the Standard Specifications."],
    ["Revised Standard Specifications (RSS)", "Statewide updates to the 2018 Standard Specifications, bound into the bid book."],
    ["Revised Standard Plans (RSP)", "Updated standard details included in the plan set."],
    ["Revision clause", "The bold line that says which part of the Standard Specifications a provision changes."],
    ["Working day (WD)", "A day work could be done, counted toward contract time."],
    ["Type 1 plant establishment", "Caltrans's establishment period with set duties; 750 working days on this job."],
    ["Liquidated damages (LDs)", "A set amount deducted for each day the job finishes late."],
    ["Final pay item (F)", "Paid at the bid quantity, not the measured quantity, unless the work is changed."],
    ["Lump sum (LS)", "One price for a whole item."],
    ["EA / LF / SQFT / SQYD / CY", "Each / linear feet / square feet / square yards / cubic yards."],
    ["HCF", "Hundred cubic feet of water, about 748 gallons; how water is billed."],
    ["BPAE", "Backflow preventer assembly in enclosure."],
    ["RCV", "Remote control valve; the electric zone valve."],
    ["Ductile iron pipe", "Strong, flexible iron pipe used where plastic isn't strong enough."],
    ["Schedule 40 / Class 315", "PVC pipe wall-strength ratings."],
    ["Gear-driven / rotary stream", "Rotor heads with internal gears / heads that throw many thin streams."],
    ["Flood bubbler", "A low-flow head that floods a tree basin."],
    ["(N)", "On plans: not a separate pay item; include the cost elsewhere."],
    ["Contract-grown", "Plants a nursery grows specially for one job under a written order."],
    ["B&B / BTH", "Ball and burlap (dug tree, wrapped root ball) / brown trunk height of a palm."],
    ["PLS", "Pure live seed: the weight of seed that will sprout."],
    ["Tackifier", "The glue in hydroseed slurry."],
    ["HDPE edging", "Black high-density polyethylene plastic edging."],
    ["Rock mulch / gravel mulch", "Cobble placed as ground cover / smaller gravel in set colors (Types 1, 2, 3 here)."],
    ["Subsurface locator", "A company that finds buried utilities with GPR and a second technology."],
    ["GPR", "Ground-penetrating radar."],
    ["PCMS", "Portable changeable message sign."],
    ["TRO", "Time-related overhead, paid per working day (item 2)."],
    ["DRA", "Dispute Resolution Advisor."],
    ["SWPPP", "Storm water pollution prevention plan."],
    ["DBE / CUCP", "Disadvantaged Business Enterprise / California Unified Certification Program that certifies them."],
    ["Good faith efforts (GFE)", "Documented attempts to meet the DBE goal when you fall short."],
    ["EE", "Engineer's estimate: the owner's own price for the job."],
    ["Spread", "Highest unit price divided by lowest for one item."],
    ["Pass-through cost", "A fee you pay to someone else and bill back, like water meter charges."]
  ]
},

{ t: "quiz", id: "m17", h: "Final check",
  lead: "Every answer comes from the real SR-905 documents and results.",
  qs: [
    { q: "Which licenses could bid 11-431064 as the prime contractor?", a: ["Class A or C-27", "Class A only", "C-27 only"], c: 0, why: "The Notice to Bidders allowed a Class A or the C-27, because landscape was the majority of the work." },
    { q: "How many working days of plant establishment did the job require?", a: ["250", "370", "750"], c: 2, why: "The Notice says 120 working days to build, 750 of plant establishment and 870 total." },
    { q: "The DBE goal was 26%. About how many dollars is that on the winning bid?", a: ["About $425,000", "About $260,000", "About $1.1 million"], c: 2, why: "26% × $4,247,463.10 = $1,104,340.41." },
    { q: "What did Addendum 1 change?", a: ["Plant quantities", "Federal minimum wage rates (Modification 6)", "Lane closure charts"], c: 1, why: "Its only change was the federal wage rates; you still had to acknowledge it." },
    { q: "What is included in the price of each irrigation controller (items 41–44)?", a: ["The concrete foundation, pad and conduit sweeps", "The electric service", "Five years of water"], c: 0, why: "SP 20-2.06D says the foundation, pad and sweeps are paid as part of the controller." },
    { q: "The SP lists $118,667 in known fees for item 67, water meter charges. What should your bid be?", a: ["Any number; it gets adjusted", "At least $118,667 plus your coordination time", "About half, since Caltrans pays some"], c: 1, why: "Known fees are a floor. The winner bid $118,000, $667 under the fees." },
    { q: "When could crews close a freeway lane near Caliente Avenue on a weekday?", a: ["9 PM to 5 AM", "9 AM to 3 PM", "Any time with a flagger"], c: 1, why: "Charts G1 and G2 allow weekday closures from 9 AM to 3 PM and 8 AM to 4 PM on weekends." },
    { q: "Which bid items on this job are final pay (F)?", a: ["The plant groups", "The six plastic supply pipe sizes and the PVC sleeve", "The mulch items"], c: 1, why: "Items 55–60 and 62 are marked (F), and they match the plan quantity sheets exactly." },
    { q: "PQ-2 totals 3,320 CY of wood mulch but item 35 says 3,290 CY. What's the best move?", a: ["Bid 3,320 CY instead", "Leave item 35 blank", "Price it per CY; it's paid by measure, so ask only if you want it fixed"], c: 2, why: "You must bid the listed quantity. Wood mulch isn't final pay, so you're paid for what you place." },
    { q: "In the winning bid, how much of the money did the top 10 items carry?", a: ["About 48%", "About 20%", "About 80%"], c: 0, why: "The top 10 added up to 47.8% of $4,247,463.10." },
    { q: "How far apart were the first and second bids?", a: ["$6,973, about 0.16%", "$69,730, about 1.6%", "$1.2 million"], c: 0, why: "$4,254,436.10 − $4,247,463.10 = $6,973.00, or 0.164%." },
    { q: "Which single item explains about 40% of Diversified's higher bid?", a: ["Mobilization", "Rock mulch", "Irrigation water service charges, $553,400 vs $60,000"], c: 2, why: "Item 68 added $493,400 of the $1,218,243.20 gap." },
    { q: "Where did the three bidders agree most closely?", a: ["Lump-sum general items", "Sprinkler heads and valves", "Water service charges"], c: 1, why: "Pop-up heads ranged only $85 to $92.60; lump sums like job site management ranged almost 7 times." },
    { q: "When were the DBE forms due?", a: ["With the bid at 2:00 PM", "4 PM on the 5th day after bid opening", "30 days after award"], c: 1, why: "SP 2-1.33B(2)(b)(ii) sets DBE Commitment, Confirmation and Good Faith Efforts at 4 PM on day 5." }
  ]
},

{ t: "practice", id: "m17", h: "Practice: bid SR-905 yourself",
  lead: "Nine hours of real estimating. The main work is pricing the whole job in the Real Bid Lab before you reveal the bids.",
  items: [
    { h: "Download and organize the package", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-431064\">Real Bid Lab · 11-431064</a>. Download the plans, Special Provisions, Addendum 1 and wage files into a bid folder named for the job. Download the 2018 Standard Specifications section 20 from <a href=\"https://dot.ca.gov/programs/design/ccs-standard-plans-and-standard-specifications\" target=\"_blank\" rel=\"noopener\">Caltrans</a>. Start a log of every document and its date.</p>" },
    { h: "Go/no-go memo", hrs: 0.5, d: "<p>Score the job on the Step 1 scorecard for your company. Write a half-page memo to the owner: prime or sub, the bonds needed (bid bond about $425,000), the DBE plan and the three biggest risks.</p>" },
    { h: "Build a spec checklist for this job", hrs: 1, d: "<p>From SP sections 1, 5, 7, 12, 13, 14, 20, 21 and 87, write at least 20 lines: requirement, section number and how you'll price it. Include the quoted Calsense prices, the water fees and the 21-day weed germination wait.</p>" },
    { h: "Check ten quantities and write two bidder inquiries", hrs: 1, d: "<p>Trace items 22, 25, 26, 28, 35, 45, 48, 55, 59 and 60 to sheets PQ-1, PQ-2, IQ-1, IQ-2 and IQ-3. Show your math. Write two short bidder inquiries in Caltrans style about anything you'd want confirmed, such as the wood mulch total.</p>" },
    { h: "Price the hidden costs", hrs: 1, d: "<p>List every hidden cost from Step 6 with a dollar amount or crew-day figure: closure productivity, trash pickup, paleontology training, safety surveys, establishment crew plan and your item 68 water estimate with acres and inches written down.</p>" },
    { h: "Price the landscape scope in the lab", hrs: 3, d: "<p>In the lab, choose “Landscape sub scope.” Build your top 10 items from material, labor and equipment (get at least two real or published material prices for rock, gravel and pipe). Price every other planting, irrigation and erosion item. Don't reveal the bids.</p>" },
    { h: "Finish the full prime bid", hrs: 1, d: "<p>Switch to the full prime bid. Add traffic control, storm water, mobilization, time-related overhead and the fixed items. For each item you'd subcontract, write the assumption you used. Run the Step 9 bid-day checklist on your bid.</p>" },
    { h: "Reveal, grade and present your lessons", hrs: 1, d: "<p>Reveal the real bids. Fill in the Step 10 rubric. For your five biggest differences from the winner, write the reason and what you'd change. Present it at your next bid review meeting.</p>" }
  ]
},

{ h: "Module 17 summary · You've finished the course",
  lead: "You've now bid a real $4.25 million Caltrans landscape job from the Notice to Bidders to the results. That's the whole job of a public-works landscape estimator.",
  body: `<ul>
<li>Read the Notice first and turn every fact into a number: bond, DBE dollars, time, liquidated damages.</li>
<li>The SP holds the money: quoted equipment, water fees, closure hours, monitors and establishment rules.</li>
<li>Use the sheet index and quantity sheets to check every big item; ask about gaps on final-pay and lump-sum items.</li>
<li>Find the 10 items that carry half the money and build them from real quotes and production.</li>
<li>Lump sums with unclear amounts, like water service, can swing a bid by half a million dollars. Estimate them and write down why.</li>
<li>Close bids are won and lost item by item; learn from every line of the Bid Summary.</li>
</ul>
<p><strong>Congratulations.</strong> You've completed the course. Next steps for the commercial division:</p>
<ol class="steps">
<li><div><b>This month</b>Price the other jobs in the <a href="#lab">Real Bid Lab</a> and review each with the owner.</div></li>
<li><div><b>Get bid-ready</b>Finish DIR registration, bonding line, insurance and the bid-ready folder (Module 2).</div></li>
<li class="hl"><div><b>Bid real work</b>Quote landscape scope to 3–5 GCs or Caltrans primes a month; bid a small public job as prime when the scorecard says go.</div></li>
<li><div><b>Hold the biweekly bid review</b>Bring every result, won or lost, and update your price list and production rates (Module 16).</div></li>
<li><div><b>Grow in steps</b>Raise your job size only after you finish jobs at the current size with the margin you planned.</div></li>
</ol>`
}
]
});
