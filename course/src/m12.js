(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 12, hours: 9, title: "Pre-Bid Meetings, RFIs, Addenda and Communication",
slides: [

{ t: "cover",
  h: "Pre-Bid Meetings, RFIs, Addenda and Communication",
  lead: "Most bid mistakes start as a question nobody asked or a change nobody read. This module teaches you how to walk a site, ask questions in writing, track every addendum, and talk to agencies and GC (general contractor) estimators like a pro.",
  objectives: [
    "Tell a mandatory pre-bid meeting from an optional one, and what to bring",
    "Walk a landscape site step by step with a printable checklist, and document it with photos",
    "Know which questions to ask at a pre-bid meeting, and which not to ask in public",
    "Know where and when to send questions on City of San Diego, Caltrans and private bids",
    "Write a clear RFI (request for information) with a sheet reference, the conflict and a proposed answer, using real plan and spec examples",
    "Keep an addendum log and update your estimate for every change",
    "Communicate with GC estimators before, on and after bid day, with call scripts and email templates",
    "Run a post-bid debrief and learn from public bid results",
    "Follow the communication rules on public bids and keep a record system that holds up"
  ],
  time: [["Reading and slides", "4 h"], ["Practice assignments", "5 h"], ["Module total", "9 h"]],
  body: "<p>One rule runs through this whole module: <strong>only written answers count</strong>. What someone tells you at a job walk or on the phone is not part of the bid documents. Examples use real documents from Caltrans 11-428704 (I-805, Chula Vista), Caltrans 11-431064 (SR-905, Otay Mesa) and City of San Diego K-24-1952 (EMTS Boat Dock Esplanade). Names, phone numbers and companies in templates are placeholders.</p>"
},

{ h: "The rule: only written answers count",
  lead: "During bidding, the documents can only be changed in writing, by addendum. Anything said out loud has no effect.",
  body: `<p>Here is how real bid documents say it:</p>
<ul>
<li><strong>City of San Diego</strong> (bid K-24-1952, EMTS Boat Dock Esplanade, 2023): “Only questions answered by formal written addenda shall be binding. Oral and other interpretations or clarifications shall be without legal effect.”</li>
<li><strong>Caltrans:</strong> answers to bidder inquiries are posted publicly, but Caltrans says the responses do not become part of the contract and do not change it. Only an addendum changes the contract.</li>
<li><strong>Private GC (general contractor) bids:</strong> the GC's estimator may answer by email. Save it, and name it in your proposal (“per GC email dated 3/12”). Module 13 covers how.</li>
</ul>`,
  ex: `<p>At a job walk, the City's project engineer says, “Don't worry about the existing trees in the median, they're all coming out.” The plans show them protected in place. If no addendum changes the plans, you must price protecting them. Write the question down and send it in writing that afternoon.</p>`,
  watch: `<p>Submitting a bid usually counts as proof that you examined the site and the documents. The City's bid says submitting a bid “shall be conclusive evidence that the Bidder has investigated and is satisfied as to the conditions to be encountered.” If you didn't look or didn't ask, the risk is yours.</p>`,
  src: "City of San Diego Bidding Documents K-24-1952-DBB-3-A, Instructions to Bidders items 9 and 23; Caltrans Project Delivery Directive PD-07, Response to Bidder Inquiries (dot.ca.gov)."
},

{ h: "The bidding timeline, start to finish",
  lead: "Every public bid follows the same order. Put each date on your calendar the day you decide to bid.",
  body: `<ol class="steps">
<li><div><b>Notice published</b>The agency posts the Notice Inviting Bids (NIB) with the bid date, documents, pre-bid meeting and question deadline.</div></li>
<li><div><b>Pre-bid meeting or job walk</b>If mandatory, it can't be held sooner than 5 calendar days after the notice is published (Public Contract Code §6610).</div></li>
<li><div><b>Your takeoff and questions</b>Read, take off, walk the site, and send questions early.</div></li>
<li class="hl"><div><b>Question deadline</b>On City job K-24-1952, questions received less than 14 days before bid opening “may not be considered.”</div></li>
<li><div><b>Addenda</b>Changes come out by addendum. If a material change comes out less than 72 hours before bids close, the bid time must be extended at least 72 hours (Public Contract Code §4104.5).</div></li>
<li><div><b>GC deadline for sub prices</b>Usually hours before the agency's deadline.</div></li>
<li><div><b>Bid opening and results</b>Public bids are opened and read; results are posted.</div></li>
</ol>`,
  ex: `<p><strong>Real timeline, Caltrans 11-428704:</strong> Notice to Bidders dated Aug 2, 2021 · Addendum 1 issued Aug 27, 2021 (12 days before bids) · bids due 2:00 p.m. Wed Sept 8, 2021 through the Bid Express website · bid summary dated Sept 22, 2021. On <strong>11-431064</strong>, Addendum 1 came out May 12, 2022, five days before the May 17 bid opening, to change the federal wage rates.</p>`,
  deeper: `<p>PCC (Public Contract Code) §4104.5 defines a “material change” as one “with a substantial cost impact on the total bid as determined by the awarding agency.” The agency decides. Don't count on an extension; check the portal every day in the last week.</p>`,
  src: "Cal. Public Contract Code §§4104.5, 6610; City of San Diego K-24-1952-DBB-3-A Instructions to Bidders item 9.2; Caltrans 11-428704 Notice to Bidders and Addendum 1; Caltrans 11-431064 Addendum 1."
},

{ h: "Pre-bid meetings: mandatory or optional",
  lead: "The bid notice tells you if there is a pre-bid meeting or job walk, and whether it is mandatory. Read that line first.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>Mandatory</th><th>Optional</th></tr></thead>
<tbody>
<tr><td><strong>If you miss it</strong></td><td>You can't bid as prime. No exceptions.</td><td>You can still bid</td></tr>
<tr><td><strong>Sign-in</strong></td><td>The sign-in sheet is the proof you attended. Sign legibly with your company's exact legal name.</td><td>Sign in anyway; the list often becomes public</td></tr>
<tr><td><strong>Late arrival</strong></td><td>Often not allowed to sign in</td><td>Fine, but you miss the overview</td></tr>
<tr><td><strong>Who should go</strong></td><td>Someone who can read the plans: the estimator</td><td>Estimator, ideally with the field lead who will run the job</td></tr>
</tbody></table></div>
<p>A typical meeting: a short presentation by the agency or GC (general contractor), a review of key bid rules (SLBE/ELBE (Small and Emerging Local Business Enterprise) goals, bonds, dates), a question period, then a walk of the site.</p>`,
  ex: `<p>The sign-in sheet is also a lead list. On a public job, it shows every prime and sub who cared enough to attend. Ask for a copy, or watch for it in an addendum. Those primes are the GCs to send your landscape price to.</p>`,
  watch: `<p>A mandatory meeting usually requires attendance by the company bidding as prime. If you are only a sub to a prime, check the notice to see whether your attendance matters. When in doubt, go.</p>`,
  deeper: `<p>Public Contract Code §6610: a notice for formal bids with a mandatory pre-bid site visit, conference or meeting must give its time, date and location, and where the plans and specs are available, and the meeting “shall not occur within a minimum of five calendar days of the publication of the initial notice.”</p>`,
  src: "Cal. Public Contract Code §6610."
},

{ h: "Before you go: prepare the walk",
  lead: "A job walk is only as good as your homework. Spend an hour with the documents before you drive out.",
  body: `<ol class="steps">
<li><div><b>Read the landscape and irrigation sheets and specs</b>Note the POC (point of connection: where irrigation ties into the water supply), controller location, backflow detail, trees to protect, soil prep and plant establishment period.</div></li>
<li><div><b>Read the special provisions for site rules</b>Work hours, staging, traffic control, hazardous soil, water meter and water service charges.</div></li>
<li class="hl"><div><b>Mark up a walk set</b>Print the key sheets at half size or load them on a tablet. Circle every place you need to see. Number your questions on the sheets.</div></li>
<li><div><b>Print the job walk checklist</b>(Later in this module.)</div></li>
<li><div><b>Plan the route</b>Map where the site entrance, POC, controller and planting areas are. On a big site, walk the water path first: meter, backflow, mainline, valves.</div></li>
<li><div><b>Check access and PPE (personal protective equipment)</b>Hard hat, vest, glasses, boots. Freeway sites need agency escort.</div></li>
<li><div><b>Charge everything</b>Phone, camera, tablet, battery pack.</div></li>
</ol>`,
  ex: `<p><strong>Homework that pays, Caltrans 11-431064:</strong> the special provisions (section 5-1.20E) say the contractor pays water meter charges. One new 2" Otay Water District meter had a $210 connection fee and a <strong>$118,247.00</strong> meter charge. A bidder who read that before the walk knew to look for the meter locations and ask about them.</p>`,
  src: "Caltrans 11-431064 Special Provisions §§5-1.20E and 5-1.20F."
},

{ h: "What to bring",
  lead: "Show up ready to measure, photograph and take notes, with the plans in your hand.",
  body: `<div class="twocol">
<div><h3>Documents</h3><ul>
<li>Plans, printed or on a tablet, with your questions already marked</li>
<li>The landscape specs (Division 32 or Whitebook/Caltrans sections)</li>
<li>Your list of questions from your first read</li>
<li>The printed job walk checklist</li>
<li>Business cards</li>
</ul></div>
<div><h3>Tools</h3><ul>
<li>Phone or camera (turn on location and time stamps)</li>
<li>Measuring wheel and 25' tape</li>
<li>Pressure gauge with hose-bib adapter, if you're allowed to use a hose bib</li>
<li>Soil probe or long screwdriver</li>
<li>Hard hat, vest, safety glasses, boots (required on most active sites and all freeway shoulders)</li>
</ul></div>
</div>`,
  watch: `<p>Never open valves, controllers, backflow boxes or meter boxes on a public or occupied site without permission. Ask the host first. On a freeway, you may only look from where the agency allows. Never walk onto an open shoulder without traffic control.</p>`
},

{ h: "Job walk, step by step",
  lead: "Follow the same order every time so you never forget a key item.",
  body: `<ol class="steps">
<li><div><b>Arrive 15 minutes early</b>Sign in with the exact legal company name. Photograph the sign-in sheet if allowed.</div></li>
<li><div><b>Listen to the presentation</b>Write down anything about schedule, access, hours, phasing and who to contact. Note who asks what.</div></li>
<li class="hl"><div><b>Walk the water path</b>Meter, backflow, POC, mainline route, valve locations, controller and power.</div></li>
<li><div><b>Walk the planting areas</b>Soils, slopes, existing plants to protect, weeds, drainage, edges and mow curbs.</div></li>
<li><div><b>Walk access and staging</b>Gates, truck route, where a bin and pallets can go, parking for the crew.</div></li>
<li><div><b>Look for scope that may land on you</b>Demolition, fine grading, drainage, site concrete and walls are sometimes handed to the landscape sub. Note what you see; <a href="#m18-1">Module 18</a> covers those scopes.</div></li>
<li><div><b>Take photos as you go</b>Follow the photo steps later in this module.</div></li>
<li><div><b>Before you leave</b>Ask whether you may come back alone, and under what rules.</div></li>
<li><div><b>Same day</b>Write up notes, file photos, and send your written questions.</div></li>
</ol>`,
  watch: `<p>Don't wander off alone during a group walk on an active site. Stay with the host, and leave if you're asked to.</p>`
},

{ h: "On the site · water and power",
  lead: "The point of connection and the power to the controller drive a lot of cost. Find them first.",
  body: `<ul>
<li><strong>Point of connection (POC) and meter:</strong> Is the meter there, or does it need to be set? Who pays the meter fee? What size is it? Is it a dedicated irrigation meter?</li>
<li><strong>Backflow preventer:</strong> existing to remain, new, or relocated? Is there room for an enclosure and the clearance the detail shows?</li>
<li><strong>Water source:</strong> potable or recycled? Recycled (purple) water brings its own pipe, signs, tags and county rules. Ask which water agency serves the site (City of San Diego, Otay, Sweetwater, Helix or others).</li>
<li><strong>Static pressure:</strong> if you can read it safely, write it down in PSI (pounds per square inch). Compare it to the design pressure on the irrigation legend.</li>
<li><strong>Controller power:</strong> is there a 120V circuit at the controller location, or is a new circuit, conduit and electrician needed? Who provides it (you, the GC's electrician, or the utility)?</li>
<li><strong>Communication:</strong> does the controller need cell, radio or Wi-Fi? Can a signal be found there?</li>
</ul>`,
  ex: `<p>On Caltrans 11-428704 (see Module 15), three drinking-water connections were shut off and the whole corridor was fed from one recycled-water connection at Palomar Street, with new Calsense controllers powered from an existing SDG&amp;E (San Diego Gas &amp; Electric) service on sheets E-1 and E-2. A site visit lets you see exactly where those pieces sit before you price them.</p>`
},

{ h: "Water details that change your price",
  lead: "Meters, water bills and pressure tests are real money on public jobs. Read the specs, then check them on the site.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Real example</th><th>What to check on the walk</th></tr></thead>
<tbody>
<tr><td>Meter charges</td><td>11-431064 SP (special provisions) 5-1.20E: two new 2" Otay meters, $210 connection fee each; one meter charge “Zero” (Caltrans had credits), the other $118,247.00. The SP says the price is adjusted if the charge changes.</td><td>Where each meter goes; is there room; is it near the POC on the plans?</td></tr>
<tr><td>Water service during the job</td><td>11-431064 SP 5-1.20F: City of San Diego $78.72 a month plus $7.053 per HCF (hundred cubic feet); Otay $240.85 per meter per month plus $5.84 per HCF. You pay until contract acceptance.</td><td>How many meters will run, for how many months, including 750 working days of plant establishment</td></tr>
<tr><td>Pressure test</td><td>11-428704 SP: test recycled water mains by Method A “with the testing pressure modified to 150 psi”</td><td>Is static pressure available to fill and test, or will you need a pump?</td></tr>
<tr><td>Recycled water rules</td><td>11-428704 plan note: all piping, equipment and sprinkler caps purple or labeled per San Diego County DEH (Department of Environmental Health); no ponding, runoff or overspray</td><td>Walks, streets and private lots near spray heads</td></tr>
</tbody></table></div>`,
  watch: `<p>On a GC bid, ask in writing who pays meter fees and the water bill during construction and establishment. If nobody says, it often lands on the landscape sub.</p>`,
  src: "Caltrans 11-431064 Special Provisions §§5-1.20E, 5-1.20F; Caltrans 11-428704 Special Provisions (section 20-2.01A(4)(b)(i) revision) and irrigation legend note 3 and 4."
},

{ h: "On the site · ground, slopes and what's already there",
  lead: "Plans show what the designer expected. The site shows what's actually there.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Look at</th><th>Why it matters to your price</th></tr></thead>
<tbody>
<tr><td><strong>Existing irrigation</strong></td><td>If you must tie into it, keep it running, or demo it: is it working? Leaking? Old wire? Mixed brands? Note valve box locations.</td></tr>
<tr><td><strong>Soils</strong></td><td>Hard clay, rock, fill or caliche slows trenching and planting. Probe a few spots. Ask whether a soil test exists.</td></tr>
<tr><td><strong>Slopes</strong></td><td>Steeper than about 2:1 (2 feet across for every 1 foot up) slows every task and may need jute or erosion control. Estimate the slope and note it.</td></tr>
<tr><td><strong>Existing plants to protect</strong></td><td>Trees to stay need fencing, hand digging near roots, maybe temporary water. Count them.</td></tr>
<tr><td><strong>Utilities</strong></td><td>Look for markers, pull boxes, gas and telecom signs. They mean hand digging and Dig Alert (811) before trenching.</td></tr>
<tr><td><strong>Weeds and debris</strong></td><td>Heavy weeds or trash add clearing and a longer weed control cycle.</td></tr>
<tr><td><strong>Drainage</strong></td><td>Low spots and standing water affect plant survival and your warranty.</td></tr>
</tbody></table></div>`,
  ex: `<p>The specs on 11-428704 warned of aerially deposited lead in the freeway soil, up to 556 mg/kg (see Module 15). You can't see lead on a site walk. That's why you read the specs before you walk: so you know what to look for and what to ask.</p>`
},

{ h: "Checking existing irrigation",
  lead: "On retrofit and conversion jobs, the old system is part of your scope. Its condition is a cost you can only see on site.",
  body: `<ol class="steps">
<li><div><b>Find the controller</b>Brand, model, number of stations, condition of the enclosure, power and any communication antenna. Photograph the inside if the host opens it.</div></li>
<li><div><b>Open a few valve boxes, with permission</b>Valve brand and size, wire condition, splices, water in the box, broken lids.</div></li>
<li><div><b>Look at the heads</b>Tilted, broken, buried or missing heads; mixed brands; overspray marks on walls and walks.</div></li>
<li><div><b>Look for leaks</b>Wet spots, green strips in dry areas, eroded soil, algae on walks.</div></li>
<li class="hl"><div><b>Ask if a zone can be run</b>Only the owner's staff should run it. Watch coverage and pressure.</div></li>
<li><div><b>Write down what the specs make you responsible for</b>Testing, operating, repairing or replacing the existing system.</div></li>
</ol>`,
  ex: `<p><strong>Real spec language, Caltrans 11-428704:</strong> the bid had lump-sum items 32 “Check and Test Existing Irrigation Facilities” and 33 “Operate Existing Irrigation Facilities.” The SP added: “If an irrigation facility to be modified is determined unsuitable, replace the irrigation facility under section 20-2. The replacement of the unsuitable facility is change order work.” So checking is in your price; replacing unsuitable parts is paid extra. A walk tells you how much checking work there will be.</p>`,
  watch: `<p>On private GC jobs, the specs often say the opposite: “repair existing system to working order” with no extra pay. Read your job's wording and price the condition you saw.</p>`,
  src: "Caltrans 11-428704 Bid Item List items 32–33; Special Provisions additions to section 20-10.02C(1)."
},

{ h: "On the site · access, staging and traffic",
  lead: "How your crew gets in, where materials sit, and when you can work are all costs.",
  body: `<ul>
<li><strong>Access:</strong> can a truck and trailer reach the work? Gates, curbs, narrow drives, overhead wires?</li>
<li><strong>Staging:</strong> where can you store pipe, plants and a bin? Is it secure overnight? On a GC job, ask where the GC will let you stage.</li>
<li><strong>Traffic:</strong> medians and street work need traffic control plans, signs and maybe flaggers. Freeway work may be nights only.</li>
<li><strong>Work hours:</strong> schools, hospitals, HOAs (homeowners associations) and retail centers often limit hours or noisy work.</li>
<li><strong>Neighbors:</strong> occupied buildings mean clean-up every day and care with sprinklers near windows and walks.</li>
<li><strong>Distance:</strong> drive time from your yard is paid time for every crew, every day.</li>
</ul>`,
  ex: `<p><strong>Keep a photo log.</strong> Take 30–60 photos on a walk: wide shots of each area, then close-ups of the POC (point of connection), backflow, controller spot, existing heads, slopes and trees. Name the folder with the bid number and date. Photos taken before the job are your best evidence later if conditions turn out different from the plans.</p>`
},

{ h: "Printable job walk checklist · part 1",
  lead: "Print this page and the next. Fill it in on site, then file it in the bid folder.",
  body: `<p><strong>Project:</strong> ________ · <strong>Bid no.:</strong> ________ · <strong>Date/time:</strong> ________ · <strong>Walked by:</strong> ________</p>
<div class="tablewrap"><table>
<thead><tr><th>☐</th><th>Water and irrigation</th><th>Notes / photo #</th></tr></thead>
<tbody>
<tr><td>☐</td><td>POC (point of connection) location matches plans</td><td></td></tr>
<tr><td>☐</td><td>Meter: existing or new? size? dedicated irrigation? which water agency?</td><td></td></tr>
<tr><td>☐</td><td>Backflow: existing to remain, new or relocated? room for enclosure?</td><td></td></tr>
<tr><td>☐</td><td>Water type: potable or recycled (purple)?</td><td></td></tr>
<tr><td>☐</td><td>Static pressure reading (only if allowed): ____ PSI at ____</td><td></td></tr>
<tr><td>☐</td><td>Pressure test water: available at the site? pump needed?</td><td></td></tr>
<tr><td>☐</td><td>Controller location; 120V power present? who provides it?</td><td></td></tr>
<tr><td>☐</td><td>Controller communication: cell signal bars / radio line of sight</td><td></td></tr>
<tr><td>☐</td><td>Existing irrigation: controller, valves, heads, wire, leaks</td><td></td></tr>
<tr><td>☐</td><td>Existing system to keep running during work? temporary water needed?</td><td></td></tr>
<tr><td>☐</td><td>Sleeves under walks and drives: visible? marked on plans?</td><td></td></tr>
</tbody></table></div>`,
  watch: `<p>A blank box is better than a guess. If you couldn't check something, write “not checked” and add it to your question list.</p>`
},

{ h: "Printable job walk checklist · part 2",
  lead: "Ground, plants, access and the rest. Use the last lines for anything special to this job.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>☐</th><th>Ground, planting, access, other</th><th>Notes / photo #</th></tr></thead>
<tbody>
<tr><td>☐</td><td>Soil type at 3+ probe spots (clay, rock, fill, sand); soil report exists?</td><td></td></tr>
<tr><td>☐</td><td>Slopes: steepest about ___ : 1; erosion control needed?</td><td></td></tr>
<tr><td>☐</td><td>Existing trees and plants to protect: count ___; fencing needed?</td><td></td></tr>
<tr><td>☐</td><td>Weeds and debris: light / medium / heavy</td><td></td></tr>
<tr><td>☐</td><td>Drainage: low spots, standing water, inlets</td><td></td></tr>
<tr><td>☐</td><td>Utilities: markers, pull boxes, gas or telecom signs</td><td></td></tr>
<tr><td>☐</td><td>Truck access: gate width, curbs, overhead wires, turnaround</td><td></td></tr>
<tr><td>☐</td><td>Staging and bin location; secure overnight?</td><td></td></tr>
<tr><td>☐</td><td>Crew parking within walking distance?</td><td></td></tr>
<tr><td>☐</td><td>Work hours and noise limits; traffic control needed?</td><td></td></tr>
<tr><td>☐</td><td>Other scopes seen (demo, grading, drainage, hardscape): see <a href="#m18-1">Module 18</a></td><td></td></tr>
<tr><td>☐</td><td>Drive time from our yard: ___ minutes</td><td></td></tr>
<tr><td>☐</td><td>Questions to send in writing (numbered): ___</td><td></td></tr>
</tbody></table></div>`,
  ex: `<p>Keep a stack of blank checklists in the truck. After five walks you'll see which lines matter most for your kind of work, and you can add your own.</p>`
},

{ h: "Photo documentation, step by step",
  lead: "Good photos answer questions weeks later, back at the desk and during the job if a dispute comes up.",
  body: `<ol class="steps">
<li><div><b>Turn on date, time and location stamps</b>In your phone's camera settings, before you arrive.</div></li>
<li><div><b>First photo: something that names the site</b>The project sign, a street sign, or the sign-in sheet. It tells you later where the set started.</div></li>
<li class="hl"><div><b>Wide, then close</b>For each area: one wide shot from a corner, then close-ups. Stand in the same spots the plans show (e.g. “north end of median”).</div></li>
<li><div><b>Put something in the shot for scale</b>A tape, a 25' tape opened to 6', or a person. Hold the tape across trench widths, curb heights and box sizes.</div></li>
<li><div><b>Shoot the key items</b>Meter, backflow, POC (point of connection), controller and its power, existing heads and valve boxes, trees to protect, slopes, access gates, staging area.</div></li>
<li><div><b>Take a short video walk</b>Talk while you film: “Looking east along the median from station 10+00.”</div></li>
<li><div><b>Rename and log the same day</b>Name files with the bid number, date, number and subject: <em>K-24-1952_2023-11-14_037_POC.jpg</em>.</div></li>
</ol>`,
  exLabel: "Photo log template",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Time</th><th>Where (sheet / area)</th><th>What it shows</th><th>Question raised?</th></tr></thead>
<tbody>
<tr><td>037</td><td>9:42</td><td>L-3.1, north median</td><td>Existing backflow, no enclosure, bent cage</td><td>RFI #3: replace or reuse?</td></tr>
<tr><td>038</td><td>9:45</td><td>L-3.1, north median</td><td>Pedestal controller, no power conduit visible</td><td>RFI #4: who provides 120V?</td></tr>
<tr><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table></div>`,
  watch: `<p>Don't photograph people's faces, license plates or private homes more than you need to. Some sites, like schools and military areas, ban photos. Ask first.</p>`
},

{ h: "Asking questions at the meeting",
  lead: "Ask out loud to learn, then send the same question in writing so the answer counts.",
  body: `<ol class="steps">
<li><div><b>Bring a short list</b>Three to six real questions about scope, quantities or conflicts. Not “what's the budget?”</div></li>
<li><div><b>Ask clearly</b>“Sheet L-2.1 shows the 24-inch box oaks protected. Detail 4 on L-5.0 shows them removed. Which is correct?”</div></li>
<li class="hl"><div><b>Write down the answer, then send it in writing</b>The same day, submit the question through the official channel. Ask that the answer be issued by addendum.</div></li>
<li><div><b>Listen to other bidders' questions</b>They often find things you missed. Write them down too.</div></li>
<li><div><b>Watch for meeting minutes</b>Many agencies publish minutes and the sign-in sheet as an addendum. Read them.</div></li>
</ol>`,
  watch: `<p>Don't ask questions that give away your pricing strategy in front of competitors. “Can we use a cheaper controller?” tells everyone what you're thinking. Send “or equal” and substitution questions privately in writing.</p>`
},

{ h: "Good questions for a landscape pre-bid",
  lead: "These are the questions that most often change a landscape price. Pick the ones your documents don't already answer.",
  body: `<div class="twocol">
<div><h3>Water, power, irrigation</h3><ul>
<li>Is the irrigation meter existing or new? Who applies for it and pays the fees?</li>
<li>Is recycled water available now, or only later in the job?</li>
<li>Who pays the water bill during construction and plant establishment?</li>
<li>Who provides 120V power to the controller, and by when?</li>
<li>Must the existing irrigation stay running during construction?</li>
<li>Is there static pressure data for the POC (point of connection)?</li>
</ul></div>
<div><h3>Schedule, site, scope</h3><ul>
<li>When does plant establishment start, and what starts it?</li>
<li>Is there a soils report or agronomic soil test we can see?</li>
<li>Where may we stage and park? Can we leave equipment overnight?</li>
<li>What are the allowed work hours? Any blackout dates (school, events)?</li>
<li>Will the sign-in sheet and plan holders list be published?</li>
<li>May bidders come back to the site alone, and under what rules?</li>
</ul></div>
</div>`,
  watch: `<p><strong>Questions not to ask out loud:</strong> “What's the budget?” · “Who else is bidding the landscape?” · “Can we swap the specified controller for something cheaper?” · “Can we skip the soil test?” The first two won't be answered, and the last two tell competitors your plan. Send substitution questions in writing.</p>`
},

{ h: "RFIs during bidding",
  lead: "An RFI (request for information) is a written question about the bid documents. During bidding, public agencies may call it a bidder question or bidder inquiry.",
  body: `<p><strong>Send an RFI when:</strong></p>
<ul>
<li>Two documents disagree (plan vs. detail, plan vs. spec, quantity table vs. bid item)</li>
<li>Information is missing (no POC (point of connection) shown, no controller location, no soil test)</li>
<li>A specified product is discontinued or unavailable</li>
<li>You want approval of an “or equal” product before bid day (if the documents allow it)</li>
<li>A quantity you checked doesn't match the bid item quantity</li>
</ul>
<p><strong>Don't send an RFI when</strong> the answer is already in the documents. Read the specs, details and general notes first. Questions that show you didn't read waste everyone's time and are seen by your competitors.</p>`,
  deeper: `<p>Caltrans's Notice to Bidders on 11-428704 says: “Questions about alleged patent ambiguity of the plans, specifications, or estimate must be asked before bid opening. After bid opening, the Department does not consider these questions as bid protests.” A patent ambiguity is a conflict you could have seen by reading carefully. If you saw it and didn't ask, you can't complain about it after the bid.</p>`,
  src: "Caltrans 11-428704 Notice to Bidders."
},

{ h: "Where and when to send questions",
  lead: "Every bid names one channel for questions and a deadline. Use only that channel, and send early.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Bid type</th><th>Where questions go</th><th>Deadline</th></tr></thead>
<tbody>
<tr><td><strong>City of San Diego</strong> (public works)</td><td>The contact named in the bid documents. On K-24-1952 it was the Senior Contract Specialist, by email. Some solicitations use the PlanetBids Q&amp;A tab instead; check the bid's PlanetBids page.</td><td>K-24-1952: questions received less than 14 days before bid opening “may not be considered.”</td></tr>
<tr><td><strong>Caltrans</strong></td><td>The online Bidders' Inquiries system linked from the job's advertisement. Responses are posted publicly, numbered and dated.</td><td>Before bid opening; earlier is better</td></tr>
<tr><td><strong>Other agencies</strong></td><td>Whatever the Notice Inviting Bids says: PlanetBids Q&amp;A, email to one named buyer, or a form</td><td>Stated in the notice, often 7–14 days before bids are due</td></tr>
<tr><td><strong>Private (GC (general contractor) bids)</strong></td><td>The GC's estimator. Never the architect, owner or LA (landscape architect) directly unless the GC says so.</td><td>The GC's RFI deadline, usually a few days before the sub bid date</td></tr>
</tbody></table></div>`,
  watch: `<p>Deadlines differ on every bid. A question sent after the cutoff may never be answered, and you'll have to price the risk yourself. Put the question deadline on your calendar the day you decide to bid.</p>`,
  ex: `<p>Find them: <a href="https://www.sandiego.gov/cip/bid-contracting" target="_blank" rel="noopener">City of San Diego bid and contracting opportunities</a> · <a href="https://ppmoe.dot.ca.gov/des/oe/bid-inquiries.php" target="_blank" rel="noopener">Caltrans Bidders' Inquiries</a> · <a href="https://ppmoe.dot.ca.gov/des/oe/weekly-ads/all-adv-projects.php" target="_blank" rel="noopener">Caltrans projects currently advertised</a>.</p>`,
  deeper: `<p>Caltrans's directive PD-07 says the Department aims to respond to an inquiry within two business days, even if only to acknowledge it, and that later responses or addenda may change an earlier response. Signing in to the Caltrans bid system requires an account; check the current sign-in rules on the Office Engineer site. On K-24-1952, the Instructions to Bidders named an email address for questions, while the Notice Inviting Bids spoke of questions “submitted in writing via the City's eBidding web site.” When a package names two channels, ask which one to use, or use both and keep proof.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Instructions to Bidders item 9 and Notice Inviting Bids item 9; Caltrans PD-07, Response to Bidder Inquiries; Caltrans Office Engineer website (ppmoe.dot.ca.gov)."
},

{ h: "Sending a question, step by step",
  lead: "The channel changes from bid to bid, but the steps are the same. Leave a trail you can prove later.",
  body: `<ol class="steps">
<li><div><b>Find the channel in the documents</b>Instructions to Bidders, Notice Inviting Bids, or the GC's invitation. Copy the exact address or link into your bid tracker.</div></li>
<li><div><b>Write the question in your RFI log first</b>Number it, date it, attach the sheet references (next slides).</div></li>
<li class="hl"><div><b>Submit through that channel only</b>PlanetBids: open the bid, use its Q&amp;A area if the bid uses one. Email: one question per email, bid number and RFI number in the subject. Caltrans: the Bidders' Inquiries system for that contract. GC: email the estimator.</div></li>
<li><div><b>Save proof</b>Screenshot the confirmation or save the sent email as a PDF in folder 04 RFIs.</div></li>
<li><div><b>Watch for the answer</b>Check the Q&amp;A page and addenda every day. Answers usually go to everyone, not just to you.</div></li>
<li><div><b>No answer by the deadline?</b>Price the risk, and write your assumption into your proposal (Module 13).</div></li>
</ol>`,
  watch: `<p>A phone call to the agency engineer is not an RFI. If you call to understand something, follow it with a written question the same day.</p>`
},

{ h: "How to write a good RFI",
  lead: "A good RFI (request for information) can be answered in one line. Point to the exact place, state the conflict, and offer an answer.",
  body: `<ol class="steps">
<li><div><b>Reference</b>Sheet number, detail number, spec section, bid item number. Be exact.</div></li>
<li class="hl"><div><b>The conflict or gap</b>Quote what each document says. Facts only, no opinions.</div></li>
<li class="hl"><div><b>Proposed answer</b>“Please confirm that…” This makes it easy to say yes, and shows you know the work.</div></li>
<li><div><b>Why it matters</b>One line: it changes the quantity, the product or the method.</div></li>
<li><div><b>One question per RFI</b>Numbered, dated, with your company name and contact.</div></li>
</ol>`,
  exLabel: "RFI template (fill in the brackets)",
  ex: `<p><strong>RFI #[number] · [Project name] · Bid No. [number] · [date]</strong></p>
<p><strong>Reference:</strong> Sheet [L-3.1], Detail [5/L-6.0], Spec Section [32 84 00, 2.4.B], Bid Item [12].</p>
<p><strong>Question:</strong> Sheet [L-3.1] shows [x]. Detail [5/L-6.0] shows [y]. Bid Item [12] lists [quantity and unit].</p>
<p><strong>Proposed answer:</strong> Please confirm that [x] is correct and bidders should price [quantity/product/method].</p>
<p><strong>From:</strong> [Name], [Company], [phone], [email]</p>`
},

{ h: "Ask yourself before you hit send",
  lead: "Half of all bidder questions are already answered in the documents. Run this check first.",
  body: `<ol class="steps">
<li><div><b>Did I read the general notes and legends?</b>Most quantity “conflicts” are explained in a note.</div></li>
<li><div><b>Did I read the specs and the Standard Specifications they point to?</b>Special provisions often say “Replace section X with…”. Read the replaced section too.</div></li>
<li><div><b>Did I check the latest addendum?</b>The question may already be fixed.</div></li>
<li class="hl"><div><b>Does it change my price or my method?</b>If not, it isn't worth an RFI.</div></li>
<li><div><b>Does it give away my strategy?</b>If so, word it neutrally or ask privately when allowed.</div></li>
<li><div><b>Is it one clear question with a proposed answer?</b></div></li>
</ol>`,
  ex: `<p><strong>Real “don't send” examples:</strong></p>
<ul>
<li><strong>11-428704:</strong> the SP lists SiteOne Landscape Supply at 5805 Kearny Villa Road with phone (858) 560-1611 in one section and (858) 560-6611 in two others. That's a typo that doesn't change any price. Just call or look up the branch.</li>
<li><strong>11-431064:</strong> the bid lists 1,900 tree well sprinkler assemblies but only 440 Group K trees. Before asking, read irrigation sheet ISS-1, note 10: “one flood bubbler per 24 inch box tree, one flood bubbler per 15 gallon tree, one flood bubbler per palm tree, one flood bubbler per shrub where shown.” Count the shrubs before you call it a conflict.</li>
</ul>`,
  src: "Caltrans 11-428704 Special Provisions (equipment supplier listings in replaced sections 20-2.05B, 20-2.06B(2)(a) and 20-10.02B(1)); Caltrans 11-431064 Bid Item List items 26 and 48 and plan sheet ISS-1 note 10."
},

{ h: "Real RFI example 1 · tree well sprinklers on 11-428704",
  lead: "On the I-805 job, the quantity table and the bid item disagreed on tree well sprinkler assemblies. Here's the RFI a careful bidder would send.",
  body: `<ul>
<li>Sheet IQ-1 (irrigation quantities) adds up to <strong>172</strong> tree well sprinkler assemblies.</li>
<li>Bid item 51, Tree Well Sprinkler Assembly, lists <strong>180 EA</strong> (each).</li>
<li>The plans show <strong>43</strong> box trees, and the tree well sprinkler detail shows 4 bubblers per tree. 43 × 4 = <strong>172</strong>.</li>
<li>Addendum 1 replaced the quantity sheets, but the revised IQ-1 still totals 172 and item 51 stayed at 180.</li>
</ul>`,
  exLabel: "Sample bidder inquiry",
  ex: `<p><strong>Reference:</strong> Plan sheet IQ-1 (Irrigation Quantities); Bid Item 51, Tree Well Sprinkler Assembly; planting plans PP-1 to PP-7 (43 Group K trees).</p>
<p><strong>Question:</strong> Sheet IQ-1 totals 172 tree well sprinkler assemblies, which equals 43 trees at 4 assemblies each. Bid Item 51 lists 180 EA.</p>
<p><strong>Proposed answer:</strong> Please confirm whether bidders should price 180 EA as listed, or whether Bid Item 51 will be revised to 172 EA by addendum.</p>`,
  watch: `<p>Without an addendum, you bid the quantity on the Bid Item List. On a unit-price item paid by count, you'll be paid for what you actually install. Price each unit so it covers its share of your setup and overhead, even if only 172 get built.</p>`,
  src: "Caltrans 11-428704 plans IQ-1, PP-1 to PP-7, PLD-1; Bid Item List; Addendum 1 (Aug 27, 2021) revised IQ-1."
},

{ h: "Real RFI example 2 · iceplant cuttings on 11-428704",
  lead: "Group H cuttings are planted at 1 foot on center, so the count should match the planted area. Adding the plan callouts found a gap of almost 2,000 plants.",
  body: `<ul>
<li>The planting sheets PP-1 to PP-7 label each Group H area with a count: 4,600 + 15,750 + 12,900 + 185 + 1,790 + 2,430 + 2,730 + 6,180 + 1,960 + 13,450 = <strong>61,975</strong>.</li>
<li>The original Planting Quantities sheet (PQ-1) and bid item 25 both said <strong>60,015</strong>.</li>
<li>Difference: 1,960 cuttings. That happens to equal one callout on the plans, a clue that one area was left out of the table.</li>
</ul>`,
  exLabel: "Sample bidder inquiry",
  ex: `<p><strong>Reference:</strong> Planting plans PP-1 to PP-7; Planting Quantities sheet PQ-1; Bid Item 25, Plant (Group H).</p>
<p><strong>Question:</strong> The Group H (Carpobrotus edulis) callouts on PP-1 to PP-7 total 61,975. PQ-1 and Bid Item 25 list 60,015. The difference (1,960) matches one callout.</p>
<p><strong>Proposed answer:</strong> Please confirm the correct quantity is 61,975 and revise Bid Item 25 and PQ-1 by addendum.</p>`,
  deeper: `<p><strong>What happened:</strong> Addendum 1 replaced PQ-1 and changed Bid Item 25 to 61,975. A bidder who had already checked the callouts knew the addendum was right. A bidder who never checked would only notice if they read the addendum carefully. On a big quantity, small prices multiply: at the winner's $0.80 each, 1,960 cuttings is $1,568.</p>`,
  src: "Caltrans 11-428704 plans PP-1 to PP-7 and PQ-1 (original and Addendum 1 versions); Bid Item List; Addendum 1."
},

{ h: "Real RFI example 3 · controller communication on 11-428704",
  lead: "The spec text and the equipment list describe two different ways for the controllers to talk. That changes what you buy and who pays the monthly data plan.",
  body: `<ul>
<li>SP (special provisions) addition to section 20-2.06B(2)(a): controllers “must be Calsense and must have 2-way communication by General packet Radio Service (GPRS) radio.” GPRS is a cellular data service.</li>
<li>The Department's quoted equipment for controllers '97B' to '97G' lists a “Calsense CS3000 Spread Spectrum Radio Communication Device” and a spread spectrum stick antenna. Spread spectrum is a short-range radio link between controllers, not cellular.</li>
<li>Only the '97A' modification list includes a “Calsense 5 Year Data Access Service Plan, Item # COMM-5YR-35.”</li>
<li>Bid items 41–46 (controllers), 47 (antenna mast, 3 EA) and 40 (modify controller '97A') depend on the answer.</li>
</ul>`,
  exLabel: "Sample bidder inquiry",
  ex: `<p><strong>Reference:</strong> Special Provisions, additions to sections 20-2.06B(2)(a) and 20-10.02B(1); Bid Items 40–47.</p>
<p><strong>Question:</strong> Section 20-2.06B(2)(a) requires 2-way communication by GPRS radio. The quoted equipment for controllers '97B'–'97G' lists spread spectrum radio devices and antennas, and only the '97A' modification includes a 5-year data access service plan.</p>
<p><strong>Proposed answer:</strong> Please confirm that controllers '97B'–'97G' communicate by spread spectrum radio to '97A', that '97A' is the only controller requiring a data service plan, and that bidders should price the equipment as listed in the quoted tables.</p>`,
  watch: `<p>If you guess wrong, you either buy six cellular modems and data plans you didn't need, or you price too little and owe them later. One clear question protects every bidder's price.</p>`,
  src: "Caltrans 11-428704 Special Provisions, additions to sections 20-2.05B, 20-2.06B(2)(a) and 20-10.02B(1); Bid Item List items 40–47."
},

{ h: "Real RFI example 4 · quoted prices that expire on 11-428704",
  lead: "Caltrans gave bidders supplier quotes for the Calsense equipment. The quotes expire before most of the work would be done.",
  body: `<ul>
<li>The SP lists Department-obtained quotes from SiteOne Landscape Supply: for example, a 40-station controller package at $9,743.66 and flow sensors at $543.25 each, “not including sales tax and delivery.”</li>
<li>Each table says “These prices are good until April 14, 2022” (or 04/14/2022).</li>
<li>Bids opened Sept 8, 2021. With 120 working days of construction, equipment could be bought near or after that date.</li>
</ul>`,
  exLabel: "Sample bidder inquiry",
  ex: `<p><strong>Reference:</strong> Special Provisions, additions to sections 20-2.05B (flow sensors), 20-2.06B(2)(a) (controllers) and 20-10.02B(1) (modify controller); Bid Items 40–46 and 50.</p>
<p><strong>Question:</strong> The Department's quoted prices are good until April 14, 2022. If the equipment is purchased after that date and the supplier's price has increased, how will the difference be handled?</p>
<p><strong>Proposed answer:</strong> Please confirm whether bidders should price the quoted amounts plus tax and delivery, with any increase after April 14, 2022 paid as extra work, or whether bidders should include their own escalation.</p>`,
  watch: `<p>Before sending, search the Standard Specifications for the section on Department-quoted equipment prices. If it already answers this, don't ask; price by that rule. If it doesn't, ask, because escalation on $60,000 or more of controllers is real money.</p>`,
  src: "Caltrans 11-428704 Special Provisions (quoted price tables and expiration statements); Notice to Bidders (working days); Bid Item List."
},

{ h: "Real RFI example 5 · water use on 11-431064",
  lead: "You pay the water bills during a 750-working-day establishment period. Past water use on the existing meter helps you price it.",
  body: `<ul>
<li>11-431064 has lump-sum item 68, Irrigation Water Service Charges.</li>
<li>SP 5-1.20F: “Contact the local water authority to arrange a start date for water service and pay for the service until Contract acceptance.” City of San Diego: $78.72 a month plus $7.053 per HCF (hundred cubic feet). Otay Water District: $240.85 per meter per month plus $5.84 per HCF.</li>
<li>SP 5-1.20E lists an existing 2" City of San Diego meter at Caliente Avenue, serial # 11955385, plus two new 2" Otay meters.</li>
<li>Plant establishment: 750 working days (Notice to Bidders).</li>
</ul>`,
  exLabel: "Sample bidder inquiry",
  ex: `<p><strong>Reference:</strong> Special Provisions §§5-1.20E and 5-1.20F; Bid Item 68, Irrigation Water Service Charges; Notice to Bidders (750 working days of plant establishment).</p>
<p><strong>Question:</strong> To price item 68, can the Department provide past monthly water use (in HCF) for the existing 2" City of San Diego meter, serial # 11955385, at Caliente Avenue, and the expected start dates for the two new Otay meters?</p>
<p><strong>Proposed answer:</strong> Please provide the last 12 months of billed use for meter 11955385, or confirm bidders should estimate water use from the irrigation design.</p>`,
  deeper: `<p><strong>Rough math (example use, not from the documents):</strong> if all three meters ran 36 months and used 40 HCF a month each, Otay: 2 meters × 36 × ($240.85 + 40 × $5.84) = 2 × 36 × $474.45 = $34,160.40; City: 36 × ($78.72 + 40 × $7.053) = 36 × $360.84 = $12,990.24. Total about <strong>$47,150</strong>. Change the use guess and the number swings by tens of thousands. That's why the question is worth asking. The SP also says the Department adjusts the lump sum if the water authority changes its charges.</p>`,
  src: "Caltrans 11-431064 Special Provisions §§5-1.20E, 5-1.20F; Notice to Bidders; Bid Item List item 68."
},

{ h: "Real RFI example 6 · soil test changes on City job K-24-1952",
  lead: "The City's specs make you test the soil after rough grading, then change amendments by the lab's results. Ask how the change is paid before you bid.",
  body: `<ul>
<li>Section 801-2.2.1, item 8b: collect 4 soil samples at the end of rough grading, send them to an agricultural soils lab, and apply no amendments until results are back. “Costs for testing shall be included in the base bid. Cost change for soil preparation work shall be in accordance with the provisions of the General Conditions.”</li>
<li>Item 8c says the contractor “shall not be due additional compensation” for the soil analysis and testing.</li>
<li>So the test is in your price; a change in amendments after the test is handled as a contract change.</li>
</ul>`,
  exLabel: "Sample question to the City",
  ex: `<p><strong>Reference:</strong> K-24-1952 Supplementary Special Provisions, Section 801-2.2.1, item 8 (Soil Tests).</p>
<p><strong>Question:</strong> Item 8b says a cost change for soil preparation work will follow the General Conditions after the soil test results are reviewed.</p>
<p><strong>Proposed answer:</strong> Please confirm that bidders should price the amendments and rates listed in Section 801-2.2, and that any added or deleted amendments recommended after the soil test will be handled as a change under the General Conditions.</p>`,
  watch: `<p>This is a “confirm” question. The answer is probably yes, and that's fine: it puts the City's answer in writing for everyone and protects your price. Send it before the 14-day question cutoff.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Supplementary Special Provisions Section 801-2.2.1 item 8 (pages 94–95); Instructions to Bidders item 9.2."
},

{ h: "RFI log template",
  lead: "Keep one log per bid. It shows what you asked, what came back and what you did about it.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>RFI #</th><th>Date sent</th><th>Sent to / how</th><th>Reference</th><th>Question (short)</th><th>Answer and source</th><th>Estimate change</th></tr></thead>
<tbody>
<tr><td>1</td><td>8/16/21</td><td>Caltrans Bidders' Inquiries</td><td>IQ-1; item 51</td><td>172 vs 180 tree well assemblies</td><td>No change by Addendum 1</td><td>Priced 180; unit price covers setup</td></tr>
<tr><td>2</td><td>8/16/21</td><td>Caltrans Bidders' Inquiries</td><td>PP-1–PP-7; PQ-1; item 25</td><td>Group H count 61,975 vs 60,015</td><td>Addendum 1: item 25 = 61,975</td><td>Updated count, labor and nursery quote</td></tr>
<tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table></div>
<p>Dates on rows 1–2 are examples for the 11-428704 timeline. Add a “Follow-up by” date if no answer comes.</p>`,
  watch: `<p>The log is only useful if the “Estimate change” column is filled in. An answer you never priced is the same as no answer.</p>`
},

{ h: "Addenda: read every one, log every one",
  lead: "An addendum is a formal change to the bid documents issued before bid day. You must price it and acknowledge it.",
  body: `<ol class="steps">
<li><div><b>Know where they're posted</b>PlanetBids for the City, the Caltrans addendum page and Bid Express for Caltrans, the GC's platform or email for private bids.</div></li>
<li><div><b>Turn on notifications</b>But don't rely on them. Check the portal yourself, including the morning of bid day.</div></li>
<li class="hl"><div><b>Log each addendum</b>Number, date, what changed, which estimate lines it affects, done or not done.</div></li>
<li class="hl"><div><b>Update the estimate</b>Replace sheets in your plan set, re-check quantities, change your prices.</div></li>
<li><div><b>Tell your suppliers and subs</b>The Caltrans addendum letter says it directly: “Inform subcontractors and suppliers as necessary.”</div></li>
<li><div><b>Acknowledge it on the bid form</b>List every addendum number. On a GC bid, list them in your proposal.</div></li>
</ol>`,
  watch: `<p>The City's bid documents say addenda “are made effective as though originally issued with the Bid” and that bidders “shall acknowledge the receipt of Addenda at the time of bid submission.” A missing acknowledgment can make a public bid non-responsive. Module 14 covers the bid forms.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Notice Inviting Bids item 9; Caltrans 11-428704 Addendum 1."
},

{ h: "Working an addendum, step by step",
  lead: "When an addendum lands, stop and process it completely before you go back to pricing.",
  body: `<ol class="steps">
<li><div><b>Download everything</b>The letter, replaced sheets, revised bid item list and any new wage rates. Save them in folder 02 Addenda with the addendum number in the file name.</div></li>
<li><div><b>Read the cover letter first</b>It lists what changed. Caltrans 11-428704 Addendum 1 said: plan sheets 22, 23, 45 and 56 replaced; Bid Item List items 7, 25 and 38 replaced; federal wage rates now Modification 12.</div></li>
<li class="hl"><div><b>Swap sheets and mark the old ones “VOID”</b>Never take off from a superseded sheet.</div></li>
<li><div><b>Compare old and new</b>Lay the old and new sheet side by side or overlay the PDFs. Look for changes the letter didn't mention, including clouded areas and revision triangles.</div></li>
<li><div><b>Update quantities, prices and quotes</b>Re-send to suppliers anything that changed (plants, valves, controllers).</div></li>
<li><div><b>Check the bid date</b>Did it move? A material change late in bidding can extend it (Public Contract Code §4104.5).</div></li>
<li><div><b>Log it and mark it done</b>Only when every estimate line is updated.</div></li>
</ol>`,
  watch: `<p>Wage-only addenda are easy to skip. Don't: 11-431064 Addendum 1 (May 12, 2022) only changed the federal wage rates, five days before bids. Re-run your crew costs for any classification that changed (Module 11).</p>`,
  src: "Caltrans 11-428704 Addendum 1; Caltrans 11-431064 Addendum 1; Cal. Public Contract Code §4104.5."
},

{ h: "Example addendum log · 11-428704 Addendum 1",
  lead: "Here is what a real addendum log looks like, using the I-805 job's Addendum 1 (Aug 27, 2021, twelve days before bids opened).",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Change</th><th>Before → after</th><th>What you update</th><th>Done</th></tr></thead>
<tbody>
<tr><td>Item 7 · Temporary railing (Type K)</td><td class="num">1,340 → 1,700 LF (linear feet)</td><td>Ask the traffic control sub to re-quote</td><td>☐</td></tr>
<tr><td>Item 25 · Plant (Group H)</td><td class="num">60,015 → 61,975</td><td>Cutting count, labor hours, nursery quote</td><td>☐</td></tr>
<tr><td>Item 38 · 2" remote control valve</td><td class="num">4 → 3</td><td>Valve count, wire and decoders, supplier quote</td><td>☐</td></tr>
<tr><td>Plan sheets 22, 23, 45, 56</td><td>Replaced</td><td>Swap the sheets in your set; re-check traffic handling, irrigation and planting quantities</td><td>☐</td></tr>
<tr><td>Federal wage rates</td><td>Now Modification 12 (Aug 27, 2021)</td><td>Re-check labor rates for every classification you use</td><td>☐</td></tr>
<tr><td>Bid form</td><td>Acknowledge “1”</td><td>Bid form addenda line</td><td>☐</td></tr>
</tbody></table></div>`,
  ex: `<p>A wage update can change every labor-heavy item at once. On a prevailing wage job, re-run your crew cost after every wage modification (Module 11).</p>`,
  src: "Caltrans 11-428704 Addendum 1; Bid Item List (see Module 15)."
},

{ h: "Blank addendum log template",
  lead: "Copy this into a spreadsheet. One row per change, not one row per addendum.",
  body: `<p><strong>Project:</strong> ________ · <strong>Bid no.:</strong> ________ · <strong>Bid due:</strong> ________ (check after every addendum)</p>
<div class="tablewrap"><table>
<thead><tr><th>Add. #</th><th>Date issued</th><th>Date we saw it</th><th>Change (sheet / section / item)</th><th>Before</th><th>After</th><th>Estimate lines affected</th><th>Supplier or sub told</th><th>Done</th></tr></thead>
<tbody>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>☐</td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>☐</td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>☐</td></tr>
</tbody></table></div>
<p><strong>Bottom line before you submit:</strong> Highest addendum number posted: ___ · Addenda acknowledged on bid form: ___ · Checked portal at ___ (time) on bid day.</p>`,
  watch: `<p>The “Date we saw it” column catches the most dangerous problem: an addendum posted that you didn't see for days.</p>`
},

{ h: "Talking to GC estimators before bid day",
  lead: "GC (general contractor) estimators are busy, especially in the last week. Make every contact short, useful and easy to act on.",
  body: `<div class="twocol">
<div><h3>Do</h3><ul>
<li>Confirm you received the invite and say yes or no quickly</li>
<li>Ask scope questions early, by email, one list at a time</li>
<li>Ask what's in your package: the GC may split landscape, irrigation, site concrete, fencing and site furnishings differently</li>
<li>Ask about bid format: lump sum, unit prices, alternates, their scope sheet</li>
<li>Ask about schedule, labor (prevailing wage? union?), bonds and insurance</li>
</ul></div>
<div><h3>Don't</h3><ul>
<li>Call five times about the same thing</li>
<li>Ask what other subs bid</li>
<li>Go around the estimator to the owner or architect</li>
<li>Promise a number “by tomorrow” and miss it</li>
<li>Send a price with no scope description</li>
</ul></div>
</div>`,
  ex: `<p>A good phone call: “Hi, it's [Name] at [Company], about the Mission Valley medical office bid. Two quick things: is the bioswale planting in landscape or civil? And do you want a separate price for the 90-day maintenance? I'll send both questions by email too.”</p>`
},

{ h: "Call scripts for GC estimators",
  lead: "Short scripts keep calls under two minutes. Fill in the brackets and read them out loud a few times before you call.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Call</th><th>Script</th></tr></thead>
<tbody>
<tr><td><strong>1 · Reply to an invite</strong></td><td>“Hi [Name], [Your name] with [Company]. Got your invite for [Project], bid [date]. We're planning to bid landscape and irrigation. Is there a scope sheet or bid form you want us to use? Thanks, I'll confirm by email.”</td></tr>
<tr><td><strong>2 · Scope clarification</strong></td><td>“Hi [Name], quick scope question on [Project]. Does the landscape package include [the bioswale planting / the DG (decomposed granite) paths / the 90-day maintenance]? I'll put it in writing so you have it.”</td></tr>
<tr><td><strong>3 · Asking to be added to a bid list</strong></td><td>“Hi, I'm [Name] with [Company], a C-27 landscape contractor in San Diego. We bid commercial landscape and irrigation, public and private. Who should I send our info to so we get your invites?”</td></tr>
<tr><td><strong>4 · Bid-day confirmation</strong></td><td>“Hi [Name], I just emailed our landscape number for [Project]. Can you confirm it came through? I'm at this number all day if anything comes up.”</td></tr>
<tr><td><strong>5 · Answering a bid-day question</strong></td><td>“Yes, the backflow enclosure is in. It's line 4 of our proposal. Anything else you need from us?” If you don't know: “Let me check, I'll call you back in 10 minutes.” Then do it.</td></tr>
<tr><td><strong>6 · Follow-up after the bid</strong></td><td>“Hi [Name], thanks again for having us on [Project]. Any word on the award? If you can share it, how did our number compare?”</td></tr>
</tbody></table></div>`,
  watch: `<p>Every call ends with “I'll put it in writing.” Then send the email within the hour, and log the call.</p>`
},

{ h: "Bid day with GCs",
  lead: "On bid day, the GC is combining dozens of sub prices in a few hours. Send early, send clearly, and be reachable.",
  body: `<ol class="steps">
<li><div><b>Send a scope letter the day before</b>Inclusions, exclusions, clarifications, addenda acknowledged, with the price to follow if needed. Module 13 shows how to write it.</div></li>
<li class="hl"><div><b>Send the final number before the GC's cutoff</b>The GC sets its own deadline for sub prices, usually hours before the agency's.</div></li>
<li><div><b>Confirm they got it</b>A short call or reply: “Did my landscape number come through?”</div></li>
<li><div><b>Stay by your phone</b>Estimators call with “Does your number include the backflow enclosure?” Answer in minutes, not hours.</div></li>
<li><div><b>Don't change your price at the last minute without a reason</b>If you do, send the new number in writing with what changed.</div></li>
</ol>`,
  watch: `<p>On a public job, the prime must list subs on its bid. If you call after the bid with “I forgot something, my number is now higher,” the GC may be stuck with a listed sub it can't afford. That ends relationships. Check your number before you send it.</p>`
},

{ h: "A bid-day plan, hour by hour",
  lead: "Example times for a public bid due at 2:00 p.m. with a GC cutoff of 11:00 a.m. Adjust to your bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Time</th><th>Task</th></tr></thead>
<tbody>
<tr><td>Day before, by 3:00 p.m.</td><td>Scope letter sent to every GC bidding, with addenda listed and price “to follow”</td></tr>
<tr><td>7:00 a.m.</td><td>Check the portal for new addenda. Check the GC emails for last questions.</td></tr>
<tr><td>8:00 a.m.</td><td>Final supplier quotes in hand (plants, irrigation, controllers). Plug them in.</td></tr>
<tr><td>9:00 a.m.</td><td>Final review: quantities, labor, markup, totals (Module 10). A second person checks the math.</td></tr>
<tr><td>10:00 a.m.</td><td>Send the number to each GC. Same scope, same exclusions. Confirm by phone.</td></tr>
<tr><td>10:00 a.m. to 2:00 p.m.</td><td>Stay at your desk. Answer calls in minutes. Log every call.</td></tr>
<tr><td>2:00 p.m.</td><td>Bids close. Watch the opening if it's public (Caltrans reads bids by webcast).</td></tr>
<tr><td>Same afternoon</td><td>Save everything you sent in folder 07 Submitted. Note which GCs you priced to.</td></tr>
</tbody></table></div>`,
  watch: `<p>Don't send your number to one GC at 10:00 and another at 1:45. Late numbers get left out, and a GC that sees you favor others stops inviting you.</p>`,
  deeper: `<p>Caltrans 11-428704: “The Department will receive bids until 2:00 p.m. on the bid open date via Bid Express website. Bids received after this time will not be accepted.” The Department opened and read the bids by webcast or teleconference right after closing.</p>`,
  src: "Caltrans 11-428704 Notice to Bidders."
},

{ h: "After the bid: follow up and ask for feedback",
  lead: "Every bid is a chance to learn. Ask how you did, politely, a few days after bid day.",
  body: `<ul>
<li><strong>Public jobs:</strong> the results are public. Download the bid tab and find out which primes were low. Then ask those primes if they used your number.</li>
<li><strong>Private jobs:</strong> email the estimator 3–7 days after the bid. Ask whether the GC won, and how your number compared.</li>
<li><strong>Record the answer</strong> in your bid tracker: won, lost, how far off, why.</li>
<li><strong>If you won the sub price:</strong> thank them, confirm your scope and ask about the next step (Module 16).</li>
</ul>`,
  exLabel: "Follow-up email",
  ex: `<p><strong>Subject:</strong> [Project name] landscape bid: results?</p>
<p>Hi [Name], thanks for including us on [Project]. Do you know yet if you were awarded? If you're able to share, I'd appreciate knowing how our landscape number compared: were we in range, high or low, and was anything missing from our scope? It helps us sharpen our next number for you.</p>
<p>Thanks, [Name] · [Company] · [phone]</p>`,
  watch: `<p>Some GCs will give you a percent (“you were about 8% high”), some won't share anything. Never ask for a competitor's exact price, and never use what you learn to undercut after the bid. Just learn from it.</p>`
},

{ h: "Reading a public result: 11-428704",
  lead: "Public bid results teach you how close the field is and how bids get thrown out. This one has both lessons.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rank</th><th>Bidder</th><th class="num">Bid total</th></tr></thead>
<tbody>
<tr><td>1</td><td>ACCU Construction, Inc.</td><td class="num">$1,176,120.00</td></tr>
<tr><td>2</td><td>Diversified Landscape Co.</td><td class="num">$1,179,705.30</td></tr>
<tr><td>3</td><td>Griffith Company</td><td class="num">$1,234,875.85</td></tr>
<tr><td>4</td><td>Blue Pacific Engineering &amp; Construction</td><td class="num">$1,592,126.21</td></tr>
<tr><td>5</td><td>Mercer-Fraser Company</td><td class="num">$3,311,895.00</td></tr>
<tr><td>6 (NR)</td><td>Marina Landscape, Inc.</td><td class="num">$1,106,287.75</td></tr>
</tbody></table></div>
<ul>
<li>16 proposals issued, 6 bids. Engineer's estimate $1,516,176.50; the low bid was 22.43% under.</li>
<li>First and second were only $3,585.30 apart, about 0.3%.</li>
<li>The lowest number, Marina Landscape, was marked <strong>NR (not responsive)</strong>: “LATE DBE/DVBE SUBMITTAL” (Disadvantaged Business Enterprise / Disabled Veteran Business Enterprise paperwork).</li>
</ul>`,
  watch: `<p>A bid that was $69,832.25 lower than the winner lost on paperwork, not price. Communication isn't only talking: it's sending every required form on time (Module 14).</p>`,
  src: "Caltrans Bid Summary 11-428704, bid opening 09/08/21, summary dated 09/22/21 (see Module 15)."
},

{ h: "Post-bid debrief template",
  lead: "Within a week of every bid, fill this in, win or lose. In a year you'll have your own price history.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Question</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>Project, bid no., bid date, owner, GCs we priced to</td><td></td></tr>
<tr><td>Our number (and per SF or per item, where useful)</td><td></td></tr>
<tr><td>Result: won / lost / no award yet / GC didn't win</td><td></td></tr>
<tr><td>Where we placed, and the spread to the low number (%)</td><td></td></tr>
<tr><td>Feedback from the GC (exact words, date, who)</td><td></td></tr>
<tr><td>Items where we were far off (from public bid tabs or feedback)</td><td></td></tr>
<tr><td>Questions we should have asked earlier</td><td></td></tr>
<tr><td>Addenda or RFIs that changed our price</td><td></td></tr>
<tr><td>Hours we spent estimating</td><td></td></tr>
<tr><td>Would we bid this owner / GC / type again? Why?</td><td></td></tr>
<tr><td>One change for next time</td><td></td></tr>
</tbody></table></div>`,
  ex: `<p>Save the debrief in folder 08 Results and add a line to the <a href="https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP" target="_blank" rel="noopener">Commercial Bid Tracker</a>. Look at the last five debriefs before each new go/no-go decision (Module 3).</p>`
},

{ h: "Communication rules on public bids",
  lead: "Public agencies keep bidding fair by controlling who talks to whom. Break the rules and your bid can be thrown out.",
  body: `<ul>
<li><strong>One point of contact.</strong> Each solicitation names the person or channel for all questions. Talk only to them about the bid.</li>
<li><strong>No lobbying during the solicitation.</strong> Don't call council members, department staff, the design consultant or the inspector about the bid while it's open.</li>
<li><strong>Cone of silence.</strong> The City of San Diego's procurement manual describes a “cone of silence” that limits communication with prospective bidders once a solicitation is public, with the Purchasing &amp; Contracting Department controlling all communications. Read each solicitation's instructions for the exact rule and when it ends.</li>
<li><strong>Everyone gets the same answer.</strong> Answers go to all bidders by addendum or a public Q&amp;A, not just to you.</li>
<li><strong>Results are public.</strong> Bid tabs and the low bidder are posted; you can ask for them.</li>
</ul>`,
  watch: `<p>Gifts, lunches or favors to anyone involved in a public bid can violate agency ethics rules. On a public job, keep it strictly business.</p>`,
  deeper: `<p>The same City procurement manual discusses Government Code 1090: a consultant that helps scope a project generally can't then compete for the resulting contract. If your company ever does design-assist or budget pricing for a public owner, ask whether that keeps you from bidding the job.</p>`,
  src: "City of San Diego Procurement Manual (sandiego.gov, sd_procurement_manual.pdf); City of San Diego K-24-1952-DBB-3-A, Instructions to Bidders item 9."
},

{ h: "Scenarios: what would you do?",
  lead: "Short situations from real bidding life. Decide first, then read the right move.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>Right move</th><th>Why</th></tr></thead>
<tbody>
<tr><td>At a City job walk, the engineer says “the irrigation sleeves are already in.” The plans show new sleeves.</td><td>Price the sleeves. Send a written question the same day asking to confirm by addendum.</td><td>Oral answers have no legal effect on City bids.</td></tr>
<tr><td>A friend who works for the City offers to tell you the engineer's estimate.</td><td>Say no. Talk only to the named contact.</td><td>Communication rules and ethics rules protect fair bidding; your bid can be thrown out.</td></tr>
<tr><td>Two GCs ask you to “sharpen your pencil” before their bid goes in.</td><td>Re-check your numbers. Change only for a real reason, and send the same number to both.</td><td>Different numbers to different GCs for the same scope hurt your reputation.</td></tr>
<tr><td>An addendum posts at 4:00 p.m. the day before the bid and changes plant quantities.</td><td>Process it tonight, call the nursery in the morning, and watch for a bid date extension.</td><td>You must price and acknowledge every addendum; a material late change may extend the bid time.</td></tr>
<tr><td>A GC calls after bid opening: “Your number missed the irrigation sleeves.”</td><td>Check your proposal. If your scope letter included or excluded them clearly, say so politely. If you missed them, own it and talk about a fair fix.</td><td>A clear scope letter (Module 13) settles these calls.</td></tr>
<tr><td>Your RFI isn't answered and the deadline has passed.</td><td>Price the risk and state your assumption in your proposal.</td><td>Unanswered questions become clarifications, not guesses.</td></tr>
</tbody></table></div>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Instructions to Bidders item 9; Cal. Public Contract Code §4104.5."
},

{ h: "Professional email templates",
  lead: "Short, specific and easy to forward. Use the bid name and number in every subject line.",
  exLabel: "Templates (fill in the brackets)",
  ex: `<p><strong>1 · RFI to a GC estimator</strong><br><strong>Subject:</strong> [Project], landscape RFI #2, plant count conflict<br>Hi [Name], one question on landscape for [Project]. Sheet L-2.0 shows 38 Lomandra in the north bed; the plant schedule on L-1.0 lists 26 total. Please confirm we should price the 38 shown on the plan. Thanks, [Name].</p>
<p><strong>2 · Scope letter cover note</strong><br><strong>Subject:</strong> [Project], landscape &amp; irrigation proposal, addenda 1–2<br>Hi [Name], attached is our landscape and irrigation proposal for [Project], based on sheets [L-1.0 to L-6.0], spec sections [32 84 00, 32 91 13, 32 93 00] and addenda 1–2. Price and clarifications are on page 1. I'll be at this number all day: [phone].</p>
<p><strong>3 · Declining a bid</strong><br><strong>Subject:</strong> [Project], landscape: passing this time<br>Hi [Name], thanks for the invite. We're passing on this one because [our crews are committed in March]. Please keep us on your list for landscape and irrigation.</p>`,
  watch: `<p>Reread every email before you send it: right project, right person, right attachment, no old price in the file name.</p>`
},

{ h: "More email templates",
  lead: "Five more emails you'll send on almost every bid. Save them where you can copy them fast.",
  exLabel: "Templates (fill in the brackets)",
  ex: `<p><strong>4 · Accepting an invite</strong><br><strong>Subject:</strong> [Project], landscape/irrigation: will bid<br>Hi [Name], thanks for the invite. We'll bid landscape and irrigation on [Project]. We have the documents through addendum [#]. Please send any scope sheet or bid form you'd like us to use. Our DIR (Department of Industrial Relations) registration no. is [number] and our C-27 license is [number].</p>
<p><strong>5 · Scope clarification</strong><br><strong>Subject:</strong> [Project], landscape scope questions (3)<br>Hi [Name], three quick scope questions: 1) Is the bioswale planting on C-4 in landscape or civil? 2) Should we include the 90-day maintenance as a separate line? 3) Who provides 120V to the controller on L-3.0? We'll assume [our proposed answers] unless you tell us otherwise.</p>
<p><strong>6 · Bid-day transmittal</strong><br><strong>Subject:</strong> [Project], landscape &amp; irrigation, $[amount], addenda 1–[#]<br>Hi [Name], our final landscape and irrigation price for [Project] is <strong>$[amount]</strong>, per our proposal dated [date] (attached). Addenda 1–[#] included. Reachable at [phone] until [time].</p>
<p><strong>7 · Asking for feedback after a loss</strong><br><strong>Subject:</strong> [Project], thank you, and a question<br>Hi [Name], congratulations on [Project] / sorry it didn't go your way. If you can share, was our landscape number in range? Anything in our scope or proposal that made it harder to use? Thanks for the chance to bid.</p>
<p><strong>8 · Thank-you after a win</strong><br><strong>Subject:</strong> [Project], landscape: thank you, next steps<br>Hi [Name], thank you for using our number on [Project]. Please send the subcontract and schedule when ready. We'll start submittals right away (Module 16).</p>`,
  watch: `<p>In email 5, the line “We'll assume… unless you tell us otherwise” turns silence into a written assumption. Put the same assumption in your proposal.</p>`
},

{ h: "Record keeping",
  lead: "If it isn't written down and saved, it didn't happen. Keep one folder per bid, the same way every time.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Folder</th><th>What goes in it</th></tr></thead>
<tbody>
<tr><td>01 Docs</td><td>Plans, specs, bid forms, exactly as downloaded, with the date</td></tr>
<tr><td>02 Addenda</td><td>Every addendum, plus your addendum log</td></tr>
<tr><td>03 Site</td><td>Job walk notes, sign-in sheet, photo log</td></tr>
<tr><td>04 RFIs</td><td>Your questions, the answers, and the date of each</td></tr>
<tr><td>05 Quotes</td><td>Supplier and sub quotes, in writing</td></tr>
<tr><td>06 Estimate</td><td>Takeoff and pricing files, saved as versions (v1, v2, final)</td></tr>
<tr><td>07 Submitted</td><td>Exactly what you sent, with the email or upload receipt</td></tr>
<tr><td>08 Results</td><td>Bid tab, feedback, lessons</td></tr>
</tbody></table></div>
<p>Also keep a <strong>communication log</strong>: date, person, method, what was said. One line per contact.</p>`,
  ex: `<p>Use AI to help: have it list every question deadline, addendum and spec section in a bid package, then check each one against the actual pages. It saves time, but you are responsible for what's in the documents.</p>`,
  deeper: `<p>If you win, these records matter for years. The City's K-24-1952 contract, for example, required the prime to keep project records for at least 5 years after the Notice of Completion. Your bid folder becomes the start of the job file (Module 16).</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Equal Opportunity Contracting, Contract Records and Reports."
},

{ h: "Communication log and file names",
  lead: "Two habits make your records searchable: one log line per contact, and file names that sort themselves.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Date / time</th><th>Who (company)</th><th>How</th><th>Summary</th><th>Follow-up</th><th>Saved as</th></tr></thead>
<tbody>
<tr><td>3/10 9:15</td><td>[Estimator], [GC]</td><td>Phone</td><td>Bioswale planting is in civil, not landscape</td><td>Confirm by email today</td><td>04 RFIs / GC-email-2026-03-10.pdf</td></tr>
<tr><td>3/10 9:40</td><td>[Estimator], [GC]</td><td>Email</td><td>Confirmed bioswale in civil</td><td>Add exclusion to proposal</td><td>04 RFIs / GC-email-2026-03-10b.pdf</td></tr>
<tr><td>3/12 2:05</td><td>[Rep], [nursery]</td><td>Email</td><td>Quote rev. 2 after Addendum 2 plant changes</td><td>Update estimate v3</td><td>05 Quotes / nursery-rev2-2026-03-12.pdf</td></tr>
</tbody></table></div>
<p><strong>File name pattern:</strong> bid number, date as year-month-day, what it is, version. Examples: <em>K-24-1952_2023-11-20_proposal_v2.pdf</em> · <em>11-428704_2021-08-27_Add1.pdf</em>. Dates written that way sort in order on any computer.</p>`,
  watch: `<p>Never name a file “final.” There's always another final. Use v1, v2, v3 and mark which one you sent in folder 07.</p>`,
  ex: `<p>The log rows are examples with placeholder names. On a real job, use full names so anyone in your office can follow up.</p>`
},

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Pre-bid meeting", "A meeting before bids are due where the owner explains the job and answers questions."],
    ["Job walk / site walk", "A visit to the project site during bidding."],
    ["Mandatory pre-bid", "A meeting you must attend, and sign in at, to be allowed to bid."],
    ["Sign-in sheet", "The attendance list; your proof you were at a mandatory meeting."],
    ["NIB (Notice Inviting Bids)", "The agency's announcement of a bid: dates, documents, meetings and rules."],
    ["Bid advertisement date", "The date the notice was published; it also fixes the wage rates (Module 11)."],
    ["Point of connection (POC)", "Where the irrigation system connects to the water supply."],
    ["Backflow preventer", "A device that keeps irrigation water from flowing back into drinking water."],
    ["Recycled water", "Treated wastewater used for irrigation, piped in purple."],
    ["Static pressure / PSI", "Water pressure with no water flowing, measured in pounds per square inch."],
    ["HCF", "Hundred cubic feet of water (748 gallons); the unit water bills use."],
    ["Photo log", "Dated photos of the site taken during bidding, listed with what each shows."],
    ["RFI", "Request for information: a written question about the documents."],
    ["RFI log", "Your list of questions sent, answers received and estimate changes."],
    ["Bidder inquiry", "Caltrans's name for a question asked during bidding, answered publicly."],
    ["Patent ambiguity", "A conflict in the documents a careful bidder could see before bidding."],
    ["Or equal", "A product the owner may accept in place of the one specified."],
    ["SP (Special Provisions)", "Caltrans's job-specific specifications that add to or replace the Standard Specifications."],
    ["Addendum", "A formal written change to the bid documents issued before bid day."],
    ["Addendum log", "Your list of every addendum, what it changed and whether your estimate is updated."],
    ["Acknowledge an addendum", "List its number on the bid form to show you priced it."],
    ["Material change", "An addendum change with a substantial cost impact; late ones can extend the bid time (PCC §4104.5)."],
    ["PCC", "California Public Contract Code, the law for public contracting."],
    ["Question deadline", "The last day the owner will accept questions."],
    ["GC cutoff", "The time a GC wants sub prices, usually hours before the owner's bid deadline."],
    ["Scope letter", "A sub's written description of what its price includes and excludes."],
    ["Transmittal", "The cover email or letter that sends your price or documents."],
    ["Bid tab / bid summary", "The public list of bidders and their prices after opening."],
    ["NR (not responsive)", "A bid rejected for not meeting a bid requirement, like a late or missing form."],
    ["Engineer's estimate", "The agency's own estimate of the job cost."],
    ["Debrief", "Your internal review of a bid after the result."],
    ["Single point of contact", "The one person or channel named for all communication about a bid."],
    ["Cone of silence", "A rule limiting contact between bidders and agency staff during a solicitation."],
    ["Communication log", "A record of every call, email and meeting about a bid."]
  ]
},

{ t: "quiz", id: "m12", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "At a job walk, the City's engineer tells you the existing trees will be removed. The plans show them protected. What do you price?", a: ["Removal, as the engineer said", "Protection, unless an addendum changes the plans", "Half of each"], c: 1, why: "Only formal written addenda are binding; oral answers have no legal effect." },
    { q: "You arrive 15 minutes late to a mandatory pre-bid meeting and aren't allowed to sign in. What happens?", a: ["You can bid if you email them", "You likely can't bid that job as prime", "Nothing, sign-in is optional"], c: 1, why: "The sign-in sheet is the proof of attendance at a mandatory meeting." },
    { q: "On City of San Diego bid K-24-1952, when might your question not be considered?", a: ["If sent less than 14 days before bid opening", "If sent by email", "If it's about plants"], c: 0, why: "The bid said questions received less than 14 days before opening may not be considered." },
    { q: "Sheet IQ-1 on 11-428704 totals 172 tree well assemblies, and the bid item says 180. What's the best move?", a: ["Change the bid quantity to 172 yourself", "Send a bidder inquiry with the reference, conflict and a proposed answer", "Ignore it"], c: 1, why: "Ask in writing before bid opening; you can't change the Bid Item List yourself." },
    { q: "What are the three core parts of a good RFI?", a: ["Price, schedule and complaint", "Exact reference, the conflict, and a proposed answer", "Your opinion, a deadline and a threat"], c: 1, why: "That makes it easy for the owner to answer in one line." },
    { q: "Addendum 1 on 11-428704 updated the federal wage rates. What should you update?", a: ["Only the plant prices", "Your labor rates for every classification you use", "Nothing, wages don't change bids"], c: 1, why: "Wage changes affect every labor-heavy item in the estimate." },
    { q: "On a private bid, who should get your scope questions?", a: ["The landscape architect directly", "The GC's estimator", "The owner"], c: 1, why: "On GC bids, go through the estimator unless the GC says otherwise." },
    { q: "During an open City solicitation, a council member's aide calls asking how the bid is going. What do you do?", a: ["Explain your price strategy", "Politely decline to discuss it and refer them to the named City contact", "Ask for help winning"], c: 1, why: "Public bids limit communication to the named contact, so stay inside that channel." },
    { q: "Under Public Contract Code §6610, how soon after the notice is published can a mandatory pre-bid meeting be held?", a: ["The next day", "No sooner than 5 calendar days after", "Only after 30 days"], c: 1, why: "A mandatory pre-bid meeting “shall not occur within a minimum of five calendar days of the publication of the initial notice.”" },
    { q: "An agency issues a material addendum 48 hours before bids close. What does Public Contract Code §4104.5 require?", a: ["Nothing, bidders must keep up", "The bid deadline is extended by at least 72 hours", "The bid is cancelled"], c: 1, why: "Material changes issued later than 72 hours before bid closing extend the deadline by no less than 72 hours." },
    { q: "The 11-428704 specs list the same supplier with two different phone numbers. Should you send an RFI?", a: ["Yes, every difference needs an RFI", "No, it doesn't change price or scope; just verify the number", "Yes, and ask for a bid extension"], c: 1, why: "Save RFIs for questions that change your price or method." },
    { q: "11-431064 lists 1,900 tree well sprinkler assemblies but only 440 trees. What's your first step?", a: ["Send an RFI right away", "Read the irrigation notes: ISS-1 note 10 adds bubblers for 15-gallon trees, palms and shrubs where shown", "Price 440"], c: 1, why: "Check the notes and legends before calling it a conflict." },
    { q: "On 11-428704, why was Marina Landscape's lowest bid marked not responsive?", a: ["It was too low", "Late DBE/DVBE submittal", "It missed the pre-bid meeting"], c: 1, why: "The bid summary shows “NR LATE DBE/DVBE SUBMITTAL.” Paperwork lost a bid that was lowest on price." },
    { q: "When is a good time to email a GC estimator for feedback on a private bid?", a: ["An hour after bids close", "About 3–7 days after the bid", "Six months later"], c: 1, why: "Give the GC a few days to sort out its own result, then ask politely." }
  ]
},

{ t: "practice", id: "m12", h: "Practice assignments",
  lead: "These use real San Diego bids and the real Caltrans jobs from Module 15.",
  items: [
    { h: "Walk a site with the checklist", hrs: 1, d: "<p>Find an upcoming pre-bid meeting on the <a href=\"https://www.sandiego.gov/cip/bid-contracting\" target=\"_blank\" rel=\"noopener\">City of San Diego bid page</a> or another agency's PlanetBids portal and attend it. If none is coming up, walk an existing commercial landscape you can see from public property (a shopping center or a street median). Use the printable checklist from this module. Take a 30-photo log and write one page of notes.</p>" },
    { h: "Write three bidder inquiries for 11-428704", hrs: 0.75, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>. Write the tree well (item 51) and Group H (item 25) inquiries in your own words using the template. Then find one more question of your own in the plans or Special Provisions and write it the same way.</p>" },
    { h: "Build an addendum log", hrs: 0.5, d: "<p>Download Addendum 1 for 11-428704 from the lab. Make a spreadsheet log with columns: number, date, change, before, after, estimate lines affected, done. Fill it in for every change, including the wage modification.</p>" },
    { h: "Find the question rules on two live bids", hrs: 0.25, d: "<p>Open one current City of San Diego construction bid on PlanetBids and one advertised Caltrans District 11 job on the <a href=\"https://ppmoe.dot.ca.gov/des/oe/weekly-ads/all-adv-projects.php\" target=\"_blank\" rel=\"noopener\">Caltrans advertised projects</a> page. For each, write down: where questions go, the question deadline, the named contact, and how many addenda are posted. Read the posted Caltrans bidder inquiries to see how other contractors ask.</p>" },
    { h: "Write your email templates", hrs: 0.5, d: "<p>Write your own versions of the eight emails in this module: RFI to a GC, scope letter cover note, declining, accepting an invite, scope clarification, bid-day transmittal, asking for feedback and thank-you after a win. Save them where you can copy them fast.</p>" },
    { h: "Set up the bid folder and communication log", hrs: 0.25, d: "<p>Create a template bid folder with the eight subfolders from this module, and a communication log spreadsheet (date, person, company, method, summary, follow-up, saved as). Use the file name pattern from this module. Use it on your next bid.</p>" },
    { h: "Make one follow-up call", hrs: 0.25, d: "<p>Pick a bid you or the company submitted in the last month. Call or email the estimator using the follow-up script. Record what you learned in the <a href=\"https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP\" target=\"_blank\" rel=\"noopener\">Commercial Bid Tracker</a>.</p>" },
    { h: "Write three more real-style RFIs", hrs: 0.5, d: "<p>Using the Special Provisions for <a href=\"#lab-11-428704\">11-428704</a> and the lab files for 11-431064, write your own versions of the controller communication, quoted-price and water-use inquiries in this module. For each, first write two lines on what you checked to make sure the answer isn't already in the documents.</p>" },
    { h: "Make a job walk kit", hrs: 0.5, d: "<p>Print the two checklist pages and the photo log template. Put them in a folder with a 25' tape, a soil probe or long screwdriver, a pressure gauge with hose-bib adapter, a vest and a hard hat. Set your phone camera to stamp date, time and location. Practice the photo steps on any landscape you can see from public property and rename the files with the pattern from this module.</p>" },
    { h: "Run a mock bid day and debrief", hrs: 0.5, d: "<p>Pick a past public bid from the <a href=\"#lab\">Real Bid Lab</a>. Write an hour-by-hour plan like the one in this module, then read its bid summary and fill in the post-bid debrief template as if you had bid it: where you would have placed, the spread to the low bid, and any bidder marked not responsive and why.</p>" }
  ]
},

{ h: "Module 12 summary",
  lead: "You know how to see the site, ask the right questions in writing, and keep track of every change and every conversation.",
  body: `<ul>
<li>Only written answers count. Oral answers at a job walk have no effect unless an addendum follows.</li>
<li>Never miss a mandatory pre-bid meeting. Prepare with the documents, bring the checklist, tools and questions, and sign in clearly.</li>
<li>On the site, walk the water path first: meter, backflow, POC (point of connection), controller power. Then soils, slopes, plants to protect, existing irrigation, utilities, access and staging. Photograph it all with a log.</li>
<li>Ask the questions that change price. Keep strategy questions private and in writing.</li>
<li>Send questions through the one named channel, before the deadline: the named City contact or PlanetBids Q&amp;A, Caltrans Bidders' Inquiries, or the GC (general contractor) estimator.</li>
<li>A good RFI (request for information) gives the exact reference, the conflict and a proposed answer. Check the notes and specs first; keep an RFI log.</li>
<li>Process every addendum completely, log it, update the estimate and acknowledge it on the bid.</li>
<li>Be brief and reachable with GC estimators, use scripts and templates, and always follow up and debrief after the bid.</li>
<li>Keep one organized folder, a communication log and clear file names for every bid.</li>
</ul>
<p><strong>Next: Module 13 · Writing the Proposal</strong></p>`
}
]
});
