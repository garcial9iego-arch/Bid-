(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 12, hours: 5, title: "Pre-Bid Meetings, RFIs, Addenda and Communication",
slides: [

{ t: "cover",
  h: "Pre-Bid Meetings, RFIs, Addenda and Communication",
  lead: "Most bid mistakes start as a question nobody asked or a change nobody read. Walk the site, ask in writing, process every addendum, and keep a record that holds up.",
  objectives: [
    "Handle mandatory and optional pre-bid meetings and run a documented job walk",
    "Spot the site and spec items that move a landscape price: water, power, existing irrigation, soils, access",
    "Decide when an RFI is worth sending, route it to the right channel before the deadline, and write it to be answered in one line",
    "Process, log, price and acknowledge every addendum",
    "Work with GC estimators before, on and after bid day; debrief from public results",
    "Follow public-bid communication rules and keep a bid file that survives a dispute"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "3.5 h"], ["Module total", "5 h"]],
  body: "<p>Examples come from Caltrans 11-428704 (I-805, Chula Vista), Caltrans 11-431064 (SR-905, Otay Mesa) and City of San Diego K-24-1952 (EMTS Boat Dock Esplanade). Names and companies in templates are placeholders.</p>"
},

{ h: "The rule: only written answers count",
  lead: "During bidding the documents change only by written addendum. Anything said aloud has no effect.",
  body: `<ul>
<li><strong>City of San Diego</strong> (K-24-1952, 2023): “Only questions answered by formal written addenda shall be binding. Oral and other interpretations or clarifications shall be without legal effect.”</li>
<li><strong>Caltrans:</strong> answers to bidder inquiries are posted publicly but do not become part of the contract. Only an addendum changes it.</li>
<li><strong>Private GC bids:</strong> the estimator may answer by email. Save it and cite it in your proposal (“per GC email dated 3/12”; <a href="#m13-1">Module 13</a>).</li>
<li><strong>Your bid certifies you looked.</strong> The City: submitting a bid “shall be conclusive evidence that the Bidder has investigated and is satisfied as to the conditions to be encountered.”</li>
</ul>`,
  ex: `<p>At the walk the City engineer says the median trees “are all coming out.” The plans show them protected. With no addendum, you price protection, and you send the question in writing that afternoon.</p>`,
  src: "City of San Diego Bidding Documents K-24-1952-DBB-3-A, Instructions to Bidders items 9 and 23; Caltrans Project Delivery Directive PD-07, Response to Bidder Inquiries (dot.ca.gov)."
},

{ h: "Bidding timeline and the statutory dates",
  lead: "Calendar every date the day you decide to bid; two of them are set by statute.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Step</th><th>Rule</th><th>Real example</th></tr></thead>
<tbody>
<tr><td>Notice published</td><td>The NIB (Notice Inviting Bids) sets the bid date, documents, pre-bid meeting and question deadline</td><td>11-428704 Notice to Bidders dated Aug 2, 2021</td></tr>
<tr><td>Mandatory pre-bid</td><td>Not within 5 calendar days of the initial notice (PCC (Public Contract Code) §6610)</td><td></td></tr>
<tr class="hl"><td>Question deadline</td><td>Set by the package</td><td>K-24-1952: questions received less than 14 days before opening “may not be considered”</td></tr>
<tr><td>Addenda</td><td>A material change issued less than 72 hours before closing extends bid time at least 72 hours (PCC §4104.5)</td><td>11-428704 Addendum 1, Aug 27, 2021 (12 days out). 11-431064 Addendum 1, May 12, 2022, 5 days before the May 17 opening, changed only federal wage rates</td></tr>
<tr><td>GC cutoff</td><td>The GC's deadline for sub prices, usually hours before the agency's</td><td></td></tr>
<tr><td>Opening and results</td><td>Bids opened and read; results posted</td><td>11-428704: 2:00 p.m. Wed Sept 8, 2021 via Bid Express; bid summary dated Sept 22, 2021</td></tr>
</tbody></table></div>`,
  deeper: `<p>PCC §4104.5 defines a material change as one “with a substantial cost impact on the total bid as determined by the awarding agency.” The agency decides, so don't count on an extension; check the portal daily in the last week.</p>`,
  src: "Cal. Public Contract Code §§4104.5, 6610; City of San Diego K-24-1952-DBB-3-A Instructions to Bidders item 9.2; Caltrans 11-428704 Notice to Bidders and Addendum 1; Caltrans 11-431064 Addendum 1."
},

{ h: "Pre-bid meetings and the job walk",
  lead: "Read the notice for whether the pre-bid is mandatory; if it is, missing it or the sign-in ends a prime bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th></th><th>Mandatory</th><th>Optional</th></tr></thead>
<tbody>
<tr><td>Miss it</td><td>No prime bid. No exceptions.</td><td>You can still bid</td></tr>
<tr><td>Sign-in</td><td>Your only proof of attendance. Exact legal company name, legible.</td><td>Sign anyway; the list often goes public</td></tr>
<tr><td>Late</td><td>Often refused at sign-in</td><td>Allowed; you miss the overview</td></tr>
</tbody></table></div>
<p><strong>Prepare (1 hour):</strong> read the landscape and irrigation sheets and specs (POC (point of connection), controller, backflow, trees to protect, soil prep, establishment); read the SP (special provisions) for work hours, staging, traffic control, hazardous soil and water charges; mark a walk set with numbered questions; plan the route along the water path.</p>
<p><strong>Kit:</strong> marked plans, specs, checklist, camera with date/time/location stamps, measuring wheel, 25' tape, pressure gauge with hose-bib adapter, soil probe, PPE (personal protective equipment: hard hat, vest, glasses, boots). Freeway sites need agency escort.</p>
<p><strong>Walk order:</strong> sign in → note schedule, access, hours, phasing and contacts → water path (meter, backflow, POC, mainline, valves, controller, power) → planting areas → access and staging → adjacent scopes that may land on you (demo, grading, drainage, concrete, walls; <a href="#m17-1">Module 17</a>) → ask whether you may return alone → same day: notes, photo log, written questions.</p>`,
  ex: `<p><strong>Homework that pays, 11-431064:</strong> SP 5-1.20E makes the contractor pay meter charges; one new 2" Otay Water District meter carried a $210 connection fee and a <strong>$118,247.00</strong> meter charge. Read that before the walk and you go looking for the meter locations. The sign-in sheet doubles as a lead list: every prime there is a GC to price.</p>`,
  watch: `<p>Never open valves, controllers, backflow or meter boxes without the host's permission, and never step onto an open freeway shoulder without traffic control. If you are only a sub, check whether your attendance matters; when in doubt, go.</p>`,
  deeper: `<p>PCC §6610: a notice for formal bids with a mandatory pre-bid site visit, conference or meeting must give its time, date and location and where plans and specs are available, and the meeting “shall not occur within a minimum of five calendar days of the publication of the initial notice.”</p>`,
  src: "Cal. Public Contract Code §6610; Caltrans 11-431064 Special Provisions §§5-1.20E and 5-1.20F."
},

{ h: "On site: water, power and existing irrigation",
  lead: "The POC and controller power drive a lot of cost; on retrofit jobs the old system's condition is a cost you can only see on site.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Check</th><th>Record</th></tr></thead>
<tbody>
<tr><td>Meter</td><td>Existing or new, size, dedicated irrigation meter, who pays fees, serving agency (City of San Diego, Otay, Sweetwater, Helix)</td></tr>
<tr><td>Backflow</td><td>Remain, new or relocated; room for the enclosure and detail clearances</td></tr>
<tr><td>Water type</td><td>Potable or recycled (purple pipe, signs, tags, County DEH (Department of Environmental Health) rules)</td></tr>
<tr><td>Static pressure</td><td>PSI (pounds per square inch) if you can read it safely, vs. design pressure on the legend; water available to fill and test, or a pump</td></tr>
<tr><td>Controller</td><td>120V present or new circuit, conduit and electrician; who provides it; cell, radio or Wi-Fi signal</td></tr>
<tr><td>Existing system</td><td>Controller brand and stations; valve brand, wire, splices, water in boxes; tilted, buried or mixed heads; overspray; leaks (wet or green strips, algae on walks). Ask the owner's staff to run a zone.</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>11-428704:</strong> three potable connections were shut off and the corridor fed from one recycled connection at Palomar Street, with new Calsense controllers on an existing SDG&amp;E service (sheets E-1, E-2). Lump-sum items 32 “Check and Test Existing Irrigation Facilities” and 33 “Operate Existing Irrigation Facilities” put checking in your price; the SP adds that replacing a facility found unsuitable “is change order work.” The walk tells you how much checking there will be.</p>`,
  watch: `<p>Private GC specs often say the opposite: “repair existing system to working order,” no extra pay. Price the condition you saw.</p>`,
  src: "Caltrans 11-428704 plans E-1, E-2; Bid Item List items 32–33; Special Provisions additions to section 20-10.02C(1)."
},

{ h: "Water costs hidden in the specs",
  lead: "Meters, water bills and test pressure are real money on public jobs; read the spec, then verify on site.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Real example</th><th>Check on the walk</th></tr></thead>
<tbody>
<tr><td>Meter charges</td><td>11-431064 SP 5-1.20E: two new 2" Otay meters, $210 connection fee each; one meter charge “Zero” (Caltrans credits), the other $118,247.00; price adjusted if the charge changes</td><td>Meter locations, room, distance to the POC</td></tr>
<tr><td>Water service</td><td>11-431064 SP 5-1.20F: City of San Diego $78.72/month + $7.053 per HCF (hundred cubic feet); Otay $240.85 per meter per month + $5.84 per HCF; paid until contract acceptance</td><td>Meters running and months, including 750 working days of establishment</td></tr>
<tr><td>Pressure test</td><td>11-428704 SP: recycled mains tested by Method A “with the testing pressure modified to 150 psi”</td><td>Static pressure available, or a pump</td></tr>
<tr><td>Recycled water</td><td>11-428704 plan note: piping, equipment and sprinkler caps purple or labeled per County DEH; no ponding, runoff or overspray</td><td>Walks, streets and private lots near spray heads</td></tr>
</tbody></table></div>`,
  watch: `<p>On a GC bid, ask in writing who pays meter fees and the construction and establishment water bill. If nobody says, it tends to land on the landscape sub.</p>`,
  src: "Caltrans 11-431064 Special Provisions §§5-1.20E, 5-1.20F; Caltrans 11-428704 Special Provisions (section 20-2.01A(4)(b)(i) revision) and irrigation legend notes 3 and 4."
},

{ h: "On site: ground, access and adjacent scope",
  lead: "Plans show what the designer expected; the site shows what's there.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Look at</th><th>Price impact</th></tr></thead>
<tbody>
<tr><td>Soils</td><td>Clay, rock, fill or caliche slow trenching and planting. Probe 3+ spots; ask for a soil report.</td></tr>
<tr><td>Slopes</td><td>Steeper than about 2:1 slows every task; may need jute or erosion control</td></tr>
<tr><td>Plants to protect</td><td>Count them: fencing, hand digging at roots, temporary water</td></tr>
<tr><td>Utilities</td><td>Markers, pull boxes, gas or telecom signs mean hand digging and Dig Alert (811)</td></tr>
<tr><td>Weeds, debris, drainage</td><td>Clearing, longer weed cycles; low spots threaten survival and your warranty</td></tr>
<tr><td>Access and staging</td><td>Truck and trailer reach, gate width, overhead wires, secure bin and pallet space, crew parking</td></tr>
<tr><td>Traffic and hours</td><td>Traffic control plans, flaggers, freeway nights only; schools, hospitals, HOAs and retail limit hours and noise</td></tr>
<tr><td>Distance</td><td>Drive time from the yard is paid for every crew, every day</td></tr>
</tbody></table></div>`,
  ex: `<p>11-428704's specs reported aerially deposited lead in freeway soil up to 556 mg/kg. You can't see lead on a walk; you read the spec first so you know what to ask.</p>`
},

{ h: "Job walk checklist and photo log",
  lead: "One printed sheet per walk; a blank box beats a guess.",
  body: `<p><strong>Project · Bid no. · Date/time · Walked by</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>☐</th><th>Item</th><th>Notes / photo #</th></tr></thead>
<tbody>
<tr><td>☐</td><td>POC matches plans; meter existing/new, size, dedicated, agency</td><td></td></tr>
<tr><td>☐</td><td>Backflow remain/new/relocated; enclosure room</td><td></td></tr>
<tr><td>☐</td><td>Potable or recycled; static ____ PSI at ____; test water or pump</td><td></td></tr>
<tr><td>☐</td><td>Controller location, 120V, who provides; signal for communication</td><td></td></tr>
<tr><td>☐</td><td>Existing irrigation condition; must it run during work?</td><td></td></tr>
<tr><td>☐</td><td>Sleeves under walks and drives visible and on plans</td><td></td></tr>
<tr><td>☐</td><td>Soil at 3+ probes; soil report exists?</td><td></td></tr>
<tr><td>☐</td><td>Steepest slope ___:1; erosion control</td><td></td></tr>
<tr><td>☐</td><td>Trees/plants to protect: count ___</td><td></td></tr>
<tr><td>☐</td><td>Weeds (light/med/heavy); drainage; utilities</td><td></td></tr>
<tr><td>☐</td><td>Truck access, staging, bin, parking; hours, noise, traffic control</td><td></td></tr>
<tr><td>☐</td><td>Adjacent scopes seen (demo, grading, drainage, hardscape)</td><td></td></tr>
<tr><td>☐</td><td>Drive time ___ min; numbered questions to send ___</td><td></td></tr>
</tbody></table></div>
<p><strong>Photos:</strong> stamps on; first shot names the site; for each area one wide shot then close-ups, with a tape for scale; 30–60 photos plus a narrated video; log and rename the same day (bid no., date, number, subject).</p>`,
  exLabel: "Photo log rows",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Time</th><th>Sheet / area</th><th>Shows</th><th>Question</th></tr></thead>
<tbody>
<tr><td>037</td><td>9:42</td><td>L-3.1 north median</td><td>Existing backflow, no enclosure, bent cage</td><td>RFI #3: replace or reuse?</td></tr>
<tr><td>038</td><td>9:45</td><td>L-3.1 north median</td><td>Pedestal controller, no power conduit</td><td>RFI #4: who provides 120V?</td></tr>
</tbody></table></div>`,
  watch: `<p>Write “not checked” and add it to the question list rather than guessing. Schools and military sites may ban photos; ask first. Pre-job photos are your best evidence of differing conditions later.</p>`
},

{ h: "Questions at the meeting",
  lead: "Ask aloud to learn; submit the same question in writing the same day so the answer binds.",
  body: `<div class="twocol">
<div><h3>Ask (if the documents don't answer it)</h3><ul>
<li>Meter existing or new; who applies and pays fees?</li>
<li>Recycled water available now or later?</li>
<li>Who pays water during construction and establishment?</li>
<li>Who provides 120V to the controller, and when?</li>
<li>Must existing irrigation stay running?</li>
<li>Static pressure data at the POC?</li>
<li>What starts plant establishment?</li>
<li>Soils report or agronomic test available?</li>
<li>Staging, parking, overnight equipment?</li>
<li>Work hours and blackout dates?</li>
<li>Will the sign-in sheet and plan holders list be published?</li>
</ul></div>
<div><h3>Don't ask aloud</h3><ul>
<li>“What's the budget?” or “Who else is bidding landscape?” (won't be answered)</li>
<li>“Can we swap the controller for something cheaper?” or “Can we skip the soil test?” (tells competitors your plan; send substitution questions privately in writing)</li>
</ul>
<p>Phrase questions with sheet references: “L-2.1 shows the 24-inch box oaks protected; detail 4/L-5.0 shows them removed. Which governs?” Write down other bidders' questions, and read the minutes and sign-in sheet if issued by addendum.</p></div>
</div>`
},

{ h: "When an RFI is worth sending",
  lead: "Send an RFI only when the answer changes your price or method and isn't already in the documents.",
  body: `<div class="twocol">
<div><h3>Send when</h3><ul>
<li>Two documents disagree (plan vs. detail, plan vs. spec, quantity table vs. bid item)</li>
<li>Information is missing (no POC, controller location or soil test)</li>
<li>A specified product is discontinued</li>
<li>You want an “or equal” approved before bid, where allowed</li>
<li>Your checked quantity doesn't match the bid item</li>
</ul></div>
<div><h3>Check first</h3><ul>
<li>General notes and legends (most quantity “conflicts” are explained there)</li>
<li>The SP and the Standard Specification sections they replace</li>
<li>The latest addendum</li>
<li>Does it change price or method? Does it reveal your strategy? If so, word it neutrally.</li>
</ul></div>
</div>`,
  exLabel: "Real “don't send” cases",
  ex: `<ul>
<li><strong>11-428704:</strong> the SP lists SiteOne at 5805 Kearny Villa Road as (858) 560-1611 in one section and (858) 560-6611 in two others. A typo with no price effect: look the branch up.</li>
<li><strong>11-431064:</strong> 1,900 tree well sprinkler assemblies vs. 440 Group K trees. Irrigation sheet ISS-1 note 10: one bubbler per 24" box tree, per 15-gallon tree, per palm, and per shrub where shown. Count before you call it a conflict.</li>
</ul>`,
  deeper: `<p>11-428704 Notice to Bidders: “Questions about alleged patent ambiguity of the plans, specifications, or estimate must be asked before bid opening. After bid opening, the Department does not consider these questions as bid protests.” A conflict you could have seen and didn't ask about is yours.</p>`,
  src: "Caltrans 11-428704 Notice to Bidders and Special Provisions (supplier listings in replaced sections 20-2.05B, 20-2.06B(2)(a), 20-10.02B(1)); Caltrans 11-431064 Bid Item List items 26 and 48, sheet ISS-1 note 10."
},

{ h: "Where, when and how to send questions",
  lead: "Each bid names one channel and one deadline; use only that channel, early, and keep proof.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Bid type</th><th>Channel</th><th>Deadline</th></tr></thead>
<tbody>
<tr><td>City of San Diego</td><td>Contact named in the documents (K-24-1952: the Senior Contract Specialist, by email); some solicitations use the PlanetBids Q&amp;A tab</td><td>K-24-1952: under 14 days before opening “may not be considered”</td></tr>
<tr><td>Caltrans</td><td>Online Bidders' Inquiries for the contract; answers posted publicly, numbered and dated</td><td>Before opening; earlier is better</td></tr>
<tr><td>Other agencies</td><td>Per the NIB: PlanetBids Q&amp;A, one named buyer, or a form</td><td>Often 7–14 days before bids</td></tr>
<tr><td>Private</td><td>The GC estimator only, never the architect, owner or LA (landscape architect) unless the GC says so</td><td>The GC's RFI deadline, a few days before the sub bid date</td></tr>
</tbody></table></div>
<p><strong>Procedure:</strong> copy the exact channel into your tracker; one question per submission with bid and RFI numbers in the subject; save the confirmation or sent email in the RFI folder; check Q&amp;A and addenda daily (answers go to everyone). No answer by the deadline: price the risk and state the assumption in your proposal. A phone call is not an RFI; follow it with a written question the same day.</p>`,
  ex: `<p><a href="https://www.sandiego.gov/cip/bid-contracting" target="_blank" rel="noopener">City of San Diego bid opportunities</a> · <a href="https://ppmoe.dot.ca.gov/des/oe/bid-inquiries.php" target="_blank" rel="noopener">Caltrans Bidders' Inquiries</a> · <a href="https://ppmoe.dot.ca.gov/des/oe/weekly-ads/all-adv-projects.php" target="_blank" rel="noopener">Caltrans advertised projects</a></p>`,
  deeper: `<p>Caltrans PD-07: the Department aims to respond within two business days, even if only to acknowledge, and later responses or addenda may change an earlier response. K-24-1952's Instructions named an email address while its NIB spoke of questions “submitted in writing via the City's eBidding web site.” When a package names two channels, ask which governs, or use both and keep proof.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Instructions to Bidders item 9 and Notice Inviting Bids item 9; Caltrans PD-07, Response to Bidder Inquiries; Caltrans Office Engineer website (ppmoe.dot.ca.gov)."
},

{ h: "Writing the RFI and keeping the log",
  lead: "Exact reference, the conflict in each document's words, and a proposed answer the owner can confirm in one line.",
  body: `<ol class="steps">
<li><div><b>Reference</b>Sheet, detail, spec section, bid item.</div></li>
<li class="hl"><div><b>Conflict or gap</b>Quote each document. Facts only.</div></li>
<li class="hl"><div><b>Proposed answer</b>“Please confirm that…”</div></li>
<li><div><b>Why it matters</b>One line: quantity, product or method.</div></li>
<li><div><b>One question per RFI</b>Numbered, dated, company and contact.</div></li>
</ol>
<p><strong>RFI log columns:</strong> # · date sent · channel · reference · question · answer and source · estimate change · follow-up by. An answer never carried into the estimate is the same as no answer.</p>`,
  exLabel: "Template",
  ex: `<p><strong>RFI #[n] · [Project] · Bid No. [n] · [date]</strong><br><strong>Reference:</strong> Sheet [L-3.1], Detail [5/L-6.0], Spec [32 84 00, 2.4.B], Bid Item [12].<br><strong>Question:</strong> [L-3.1] shows [x]. [5/L-6.0] shows [y]. Item [12] lists [qty, unit].<br><strong>Proposed answer:</strong> Please confirm [x] governs and bidders should price [qty/product/method].<br><strong>From:</strong> [Name, company, phone, email]</p>`
},

{ h: "Real RFIs from three bid packages",
  lead: "Six questions a careful bidder would have sent, each tied to a dollar consequence.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Job · reference</th><th>What the documents say</th><th>Proposed answer</th><th>Stakes / outcome</th></tr></thead>
<tbody>
<tr><td>11-428704 · IQ-1, item 51 tree well sprinkler assembly</td><td>IQ-1 totals 172 (43 Group K trees × 4); item 51 lists 180 EA. Addendum 1's revised IQ-1 still totals 172; item 51 stayed 180.</td><td>Confirm 180 as listed, or revise item 51 to 172 by addendum</td><td>No change: bid 180. Payment is by installed count, so each unit must carry its share of setup and overhead.</td></tr>
<tr><td>11-428704 · PP-1 to PP-7, PQ-1, item 25 Group H cuttings (1' o.c.)</td><td>Callouts 4,600 + 15,750 + 12,900 + 185 + 1,790 + 2,430 + 2,730 + 6,180 + 1,960 + 13,450 = 61,975; PQ-1 and item 25: 60,015. Gap 1,960 equals one callout.</td><td>Confirm 61,975; revise item 25 and PQ-1</td><td>Addendum 1 changed item 25 to 61,975. At the winner's $0.80, 1,960 × $0.80 = $1,568.</td></tr>
<tr><td>11-428704 · SP 20-2.06B(2)(a), 20-10.02B(1); items 40–47</td><td>Spec: Calsense, 2-way GPRS (General Packet Radio Service, cellular). Quoted equipment for '97B'–'97G': CS3000 spread spectrum radio and stick antenna. Only '97A' includes a 5-year data plan (COMM-5YR-35).</td><td>Confirm '97B'–'97G' talk by spread spectrum to '97A', only '97A' needs a data plan, price as quoted</td><td>Guess wrong: six cellular modems and data plans you didn't need, or owe them later. Items 40–47 (incl. 47 antenna mast, 3 EA) ride on it.</td></tr>
<tr><td>11-428704 · SP quoted price tables; items 40–46, 50</td><td>Department-obtained SiteOne quotes (40-station controller package $9,743.66; flow sensor $543.25; excl. tax and delivery) “good until April 14, 2022.” Bids Sept 8, 2021; 120 working days.</td><td>Confirm whether increases after 4/14/2022 are extra work or bidder escalation</td><td>Search the Standard Specifications for quoted-price rules first. Escalation on $60,000+ of controllers is real.</td></tr>
<tr><td>11-431064 · SP 5-1.20E/F; item 68 Irrigation Water Service Charges</td><td>Pay water until acceptance; rates as on the water-cost slide. Existing 2" City meter #11955385 at Caliente Ave plus two new Otay meters; 750 working days of establishment.</td><td>Provide 12 months' billed use for meter 11955385 and Otay start dates, or confirm bidders estimate from the design</td><td>Use assumptions swing the lump sum by tens of thousands (math below). SP adjusts the item if the authority changes its rates.</td></tr>
<tr><td>K-24-1952 · SSP 801-2.2.1 item 8 soil tests</td><td>4 samples at end of rough grading; no amendments until results. Testing “included in the base bid”; 8c: no added compensation for testing; amendment cost change per the General Conditions.</td><td>Confirm bidders price the 801-2.2 rates and changed amendments are a change under the General Conditions</td><td>A “confirm” question: likely yes, but it puts the answer in writing. Send before the 14-day cutoff.</td></tr>
</tbody></table></div>`,
  deeper: `<p><strong>Item 68 math (assumed use, not from the documents):</strong> 3 meters, 36 months, 40 HCF/month each. Otay: 2 × 36 × ($240.85 + 40 × $5.84) = 72 × $474.45 = $34,160.40. City: 36 × ($78.72 + 40 × $7.053) = 36 × $360.84 = $12,990.24. Total ≈ <strong>$47,150</strong>.</p>`,
  src: "Caltrans 11-428704 plans IQ-1, PP-1 to PP-7, PQ-1 (original and Addendum 1), PLD-1, Special Provisions (sections 20-2.05B, 20-2.06B(2)(a), 20-10.02B(1), quoted price tables), Notice to Bidders, Bid Item List; Caltrans 11-431064 Special Provisions §§5-1.20E, 5-1.20F, Notice to Bidders, Bid Item List item 68; City of San Diego K-24-1952-DBB-3-A, SSP Section 801-2.2.1 item 8 (pp. 94–95), Instructions to Bidders item 9.2."
},

{ h: "Addenda: process, price, acknowledge",
  lead: "Stop pricing when an addendum lands and process it completely; an unacknowledged addendum can make a public bid non-responsive.",
  body: `<ol class="steps">
<li><div><b>Watch the source</b>PlanetBids (City), the Caltrans addendum page and Bid Express, the GC's platform. Notifications help; check the portal yourself daily, including bid morning.</div></li>
<li><div><b>Download all of it</b>Letter, replaced sheets, revised bid item list, wage rates.</div></li>
<li><div><b>Read the letter</b>11-428704 Addendum 1: sheets 22, 23, 45, 56 replaced; bid items 7, 25, 38 replaced; federal wages now Modification 12.</div></li>
<li class="hl"><div><b>Swap and void</b>Mark superseded sheets VOID. Overlay old and new for clouds and revision triangles the letter didn't mention.</div></li>
<li class="hl"><div><b>Re-price</b>Quantities, labor, quotes. Re-send changes to suppliers and subs (Caltrans: “Inform subcontractors and suppliers as necessary”).</div></li>
<li><div><b>Check the bid date</b>A late material change can extend it (PCC §4104.5).</div></li>
<li><div><b>Log, then acknowledge</b>Done only when every estimate line is updated. List every addendum on the bid form or in your proposal.</div></li>
</ol>`,
  watch: `<p>Wage-only addenda are easy to skip. 11-431064 Addendum 1 changed only federal wage rates, five days before bids; re-run crew costs for every changed classification (<a href="#m11-1">Module 11</a>). The City: addenda “are made effective as though originally issued with the Bid,” and bidders “shall acknowledge the receipt of Addenda at the time of bid submission” (<a href="#m14-1">Module 14</a>).</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Notice Inviting Bids item 9; Caltrans 11-428704 Addendum 1; Caltrans 11-431064 Addendum 1; Cal. Public Contract Code §4104.5."
},

{ h: "Addendum log · 11-428704 Addendum 1",
  lead: "One row per change, not per addendum. This is Addendum 1 of the I-805 job (Aug 27, 2021, 12 days before opening).",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Change</th><th>Before → after</th><th>Update</th><th>Done</th></tr></thead>
<tbody>
<tr><td>Item 7 · Temporary railing (Type K)</td><td class="num">1,340 → 1,700 LF</td><td>Traffic control sub re-quote</td><td>☐</td></tr>
<tr><td>Item 25 · Plant (Group H)</td><td class="num">60,015 → 61,975</td><td>Count, labor hours, nursery quote</td><td>☐</td></tr>
<tr><td>Item 38 · 2" remote control valve</td><td class="num">4 → 3</td><td>Valves, wire and decoders, supplier quote</td><td>☐</td></tr>
<tr><td>Sheets 22, 23, 45, 56</td><td>Replaced</td><td>Swap; re-check traffic handling, irrigation, planting quantities</td><td>☐</td></tr>
<tr><td>Federal wage rates</td><td>Modification 12 (Aug 27, 2021)</td><td>Labor rate for every classification used</td><td>☐</td></tr>
<tr><td>Bid form</td><td>Acknowledge “1”</td><td>Addenda line</td><td>☐</td></tr>
</tbody></table></div>
<p><strong>Blank log columns:</strong> Add. # · date issued · date we saw it · sheet/section/item · before · after · estimate lines · supplier/sub told · done. <strong>Before submitting:</strong> highest addendum posted ___ · acknowledged ___ · portal checked at ___ on bid day.</p>`,
  watch: `<p>The “date we saw it” column exposes the worst failure: an addendum posted days before you noticed.</p>`,
  src: "Caltrans 11-428704 Addendum 1; Bid Item List."
},

{ h: "Working with GC estimators",
  lead: "Every contact should be short, specific and confirmed in writing within the hour.",
  body: `<div class="twocol">
<div><h3>Do</h3><ul>
<li>Answer an invite yes or no quickly</li>
<li>Send scope questions early, by email, as one list</li>
<li>Ask how the GC splits landscape, irrigation, site concrete, fencing, furnishings</li>
<li>Ask bid format (lump sum, unit prices, alternates, scope sheet), schedule, wage basis (prevailing? union?), bonds, insurance</li>
</ul></div>
<div><h3>Don't</h3><ul>
<li>Call repeatedly about the same item</li>
<li>Ask what other subs bid</li>
<li>Go around the estimator to the owner or architect</li>
<li>Promise a number by a time and miss it</li>
<li>Send a price with no scope</li>
</ul></div>
</div>
<div class="tablewrap"><table>
<thead><tr><th>Call</th><th>Core line</th></tr></thead>
<tbody>
<tr><td>Invite reply</td><td>“We're bidding landscape and irrigation on [Project]. Is there a scope sheet or bid form you want us to use?”</td></tr>
<tr><td>Scope question</td><td>“Is the bioswale planting in landscape or civil? I'll put it in writing.”</td></tr>
<tr><td>Get on a bid list</td><td>“C-27 landscape contractor, commercial landscape and irrigation, public and private. Who gets our info for your invites?”</td></tr>
<tr><td>Bid-day confirm</td><td>“I just emailed our number. Did it come through? I'm on this line all day.”</td></tr>
<tr><td>Bid-day question</td><td>“Yes, the backflow enclosure is in, line 4.” If unsure: “I'll call back in 10 minutes,” and do.</td></tr>
<tr><td>Post-bid</td><td>“Any word on award? If you can share, how did our number compare?”</td></tr>
</tbody></table></div>`
},

{ h: "Bid day as a sub",
  lead: "Send the same scope and number to every GC, early, then stay reachable until bids close.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Time (bid 2:00 p.m., GC cutoff 11:00 a.m.)</th><th>Task</th></tr></thead>
<tbody>
<tr><td>Day before, by 3:00 p.m.</td><td>Scope letter to every GC: inclusions, exclusions, clarifications, addenda, price to follow (<a href="#m13-1">Module 13</a>)</td></tr>
<tr><td>7:00 a.m.</td><td>Portal check for addenda; GC emails for last questions</td></tr>
<tr><td>8:00 a.m.</td><td>Final supplier quotes plugged in</td></tr>
<tr><td>9:00 a.m.</td><td>Final review of quantities, labor, markup, totals; a second person checks the math (<a href="#m10-1">Module 10</a>)</td></tr>
<tr><td>10:00 a.m.</td><td>Number to every GC at once; confirm by phone</td></tr>
<tr><td>10:00 a.m.–2:00 p.m.</td><td>At your desk; answer in minutes; log every call</td></tr>
<tr><td>2:00 p.m.</td><td>Bids close; watch the opening (Caltrans by webcast)</td></tr>
<tr><td>Same afternoon</td><td>File exactly what you sent and to which GCs</td></tr>
</tbody></table></div>`,
  watch: `<p>Change your price only for a real reason, in writing, to every GC. On public jobs the prime lists you; raising your number after the bid strands a GC with a listed sub it can't afford, and ends the relationship. Late numbers to some GCs get left out and read as favoritism.</p>`,
  deeper: `<p>Caltrans 11-428704: “The Department will receive bids until 2:00 p.m. on the bid open date via Bid Express website. Bids received after this time will not be accepted.” Bids were opened and read by webcast or teleconference immediately after.</p>`,
  src: "Caltrans 11-428704 Notice to Bidders."
},

{ h: "Reading a public result · 11-428704",
  lead: "Bid summaries show how tight the field is and how bids get thrown out.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rank</th><th>Bidder</th><th class="num">Total</th></tr></thead>
<tbody>
<tr><td>1</td><td>ACCU Construction, Inc.</td><td class="num">$1,176,120.00</td></tr>
<tr><td>2</td><td>Diversified Landscape Co.</td><td class="num">$1,179,705.30</td></tr>
<tr><td>3</td><td>Griffith Company</td><td class="num">$1,234,875.85</td></tr>
<tr><td>4</td><td>Blue Pacific Engineering &amp; Construction</td><td class="num">$1,592,126.21</td></tr>
<tr><td>5</td><td>Mercer-Fraser Company</td><td class="num">$3,311,895.00</td></tr>
<tr><td>6 (NR)</td><td>Marina Landscape, Inc.</td><td class="num">$1,106,287.75</td></tr>
</tbody></table></div>
<ul>
<li>16 proposals issued, 6 bids. Engineer's estimate $1,516,176.50; low bid 22.43% under.</li>
<li>1st and 2nd: $3,585.30 apart (≈0.3%).</li>
<li>Lowest number marked NR (not responsive): “LATE DBE/DVBE SUBMITTAL” (Disadvantaged / Disabled Veteran Business Enterprise paperwork). It was $69,832.25 under the winner.</li>
</ul>`,
  src: "Caltrans Bid Summary 11-428704, bid opening 09/08/21, summary dated 09/22/21 (see Module 15)."
},

{ h: "Follow-up and debrief",
  lead: "Win or lose, ask how you placed within a week and record it; a year of debriefs is your price history.",
  body: `<ul>
<li><strong>Public:</strong> download the bid tab; ask the low primes whether they carried your number.</li>
<li><strong>Private:</strong> email the estimator 3–7 days after bid: did the GC win, and how did your number compare? Never ask for a competitor's exact price or use what you learn to undercut after the bid.</li>
<li><strong>Won the sub price:</strong> thank them, confirm scope, ask for the subcontract and schedule (<a href="#m16-1">Module 16</a>).</li>
</ul>
<p><strong>Debrief fields:</strong> project, bid no., date, owner, GCs priced · our number and unit metrics ($/SF, $/item) · result · rank and % spread to low · GC feedback (exact words, date, who) · items far off · questions we should have asked · addenda/RFIs that moved price · estimating hours · bid this owner/GC/type again? · one change. Log it in the <a href="https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP" target="_blank" rel="noopener">Commercial Bid Tracker</a> and review the last five before each go/no-go (<a href="#m3-1">Module 3</a>).</p>`,
  exLabel: "Follow-up email",
  ex: `<p><strong>Subject:</strong> [Project] landscape bid: results?<br>Thanks for including us. Do you know yet if you were awarded? If you can share, were we in range, high or low, and was anything missing from our scope? Some GCs will give a percent (“about 8% high”); some give nothing.</p>`
},

{ h: "Communication rules on public bids",
  lead: "Talk only to the named contact while a solicitation is open; breaking contact rules can get a bid thrown out.",
  body: `<ul>
<li><strong>One point of contact</strong> or channel per solicitation.</li>
<li><strong>No lobbying</strong> council members, department staff, the design consultant or the inspector about an open bid.</li>
<li><strong>Cone of silence:</strong> the City's procurement manual limits communication with prospective bidders once a solicitation is public; Purchasing &amp; Contracting controls all communications. Each solicitation states the exact rule and when it ends.</li>
<li><strong>Same answer to everyone</strong> by addendum or public Q&amp;A.</li>
<li><strong>Results are public;</strong> request the bid tab.</li>
<li><strong>No gifts, lunches or favors</strong> to anyone involved; agency ethics rules apply.</li>
</ul>`,
  deeper: `<p>The City's manual discusses Government Code 1090: a consultant that helps scope a project generally can't compete for the resulting contract. If you do design-assist or budget pricing for a public owner, ask whether it bars you from the bid.</p>`,
  src: "City of San Diego Procurement Manual (sandiego.gov, sd_procurement_manual.pdf); City of San Diego K-24-1952-DBB-3-A, Instructions to Bidders item 9."
},

{ h: "Email templates",
  lead: "Bid name and number in every subject; one purpose per email.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Email</th><th>Subject</th><th>Core text</th></tr></thead>
<tbody>
<tr><td>Accept invite</td><td>[Project], landscape/irrigation: will bid</td><td>We have documents through addendum [#]. Send any scope sheet or bid form. DIR (Department of Industrial Relations) registration [#], C-27 license [#].</td></tr>
<tr><td>Decline</td><td>[Project], landscape: passing this time</td><td>Passing because [crews committed in March]. Please keep us on your list.</td></tr>
<tr><td>RFI to GC</td><td>[Project], landscape RFI #2, plant count</td><td>L-2.0 shows 38 Lomandra in the north bed; the L-1.0 schedule lists 26. Please confirm we price the 38 shown.</td></tr>
<tr><td>Scope questions</td><td>[Project], landscape scope questions (3)</td><td>1) Bioswale planting on C-4: landscape or civil? 2) 90-day maintenance as a separate line? 3) Who provides 120V at L-3.0? We'll assume [answers] unless you tell us otherwise.</td></tr>
<tr><td>Proposal cover</td><td>[Project], landscape &amp; irrigation proposal, addenda 1–2</td><td>Based on sheets [L-1.0 to L-6.0], sections [32 84 00, 32 91 13, 32 93 00], addenda 1–2. Price and clarifications on page 1.</td></tr>
<tr><td>Bid-day transmittal</td><td>[Project], landscape &amp; irrigation, $[amount], addenda 1–[#]</td><td>Final price $[amount] per proposal dated [date], attached. Reachable at [phone] until [time].</td></tr>
<tr><td>Feedback after loss</td><td>[Project], thank you, and a question</td><td>Was our number in range? Anything in our scope that made it harder to use?</td></tr>
<tr><td>Thanks after win</td><td>[Project], landscape: thank you, next steps</td><td>Please send the subcontract and schedule; we'll start submittals.</td></tr>
</tbody></table></div>`,
  watch: `<p>“We'll assume… unless you tell us otherwise” turns silence into a written assumption. Repeat it in the proposal.</p>`
},

{ h: "The bid file and communication log",
  lead: "If it isn't saved, it didn't happen; one identical folder structure per bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Folder</th><th>Contents</th></tr></thead>
<tbody>
<tr><td>01 Docs</td><td>Plans, specs, bid forms as downloaded, dated</td></tr>
<tr><td>02 Addenda</td><td>Every addendum and the addendum log</td></tr>
<tr><td>03 Site</td><td>Walk notes, sign-in sheet, photo log</td></tr>
<tr><td>04 RFIs</td><td>Questions, answers, dates, RFI log</td></tr>
<tr><td>05 Quotes</td><td>Written supplier and sub quotes</td></tr>
<tr><td>06 Estimate</td><td>Takeoff and pricing, versioned v1, v2…</td></tr>
<tr><td>07 Submitted</td><td>Exactly what was sent, with email or upload receipt</td></tr>
<tr><td>08 Results</td><td>Bid tab, feedback, debrief</td></tr>
</tbody></table></div>
<p><strong>Communication log:</strong> date/time · who (company) · method · summary · follow-up · saved as. Example: “3/10 9:15, [estimator], phone: bioswale is civil → confirm by email” then “3/10 9:40, email: confirmed → add exclusion.” File names: bid no._YYYY-MM-DD_subject_v#, e.g. <em>11-428704_2021-08-27_Add1.pdf</em>; never “final.”</p>`,
  deeper: `<p>The file outlives the bid. K-24-1952 required the prime to keep project records at least 5 years after the Notice of Completion; the bid folder becomes the start of the job file (<a href="#m16-1">Module 16</a>).</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Equal Opportunity Contracting, Contract Records and Reports."
},

{ h: "Scenarios",
  lead: "Decide first, then check the move.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>Move</th><th>Why</th></tr></thead>
<tbody>
<tr><td>City engineer at the walk: “sleeves are already in.” Plans show new sleeves.</td><td>Price the sleeves; ask in writing for an addendum.</td><td>Oral answers have no legal effect.</td></tr>
<tr><td>A friend at the City offers the engineer's estimate.</td><td>Decline; talk only to the named contact.</td><td>Communication and ethics rules; bid can be thrown out.</td></tr>
<tr><td>Two GCs ask you to “sharpen your pencil.”</td><td>Re-check; change only for a real reason; same number to both.</td><td>Different numbers for the same scope cost you both relationships.</td></tr>
<tr><td>Addendum at 4:00 p.m. the day before changes plant quantities.</td><td>Process tonight, call the nursery at open, watch for an extension.</td><td>You must price and acknowledge it; PCC §4104.5 may extend.</td></tr>
<tr><td>After opening, a GC says your number missed the sleeves.</td><td>Check the proposal. If clearly included or excluded, say so; if you missed them, own it and discuss a fair fix.</td><td>A clear scope letter settles these calls.</td></tr>
<tr><td>RFI unanswered, deadline passed.</td><td>Price the risk and state the assumption.</td><td>Unanswered questions become clarifications.</td></tr>
</tbody></table></div>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Instructions to Bidders item 9; Cal. Public Contract Code §4104.5."
},

{ t: "terms", h: "Words to know",
  lead: "Module-specific terms. The full list is in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Mandatory pre-bid", "A meeting you must attend and sign in at to bid as prime."],
    ["Sign-in sheet", "Attendance proof at a mandatory meeting; also a list of interested primes."],
    ["NIB (Notice Inviting Bids)", "The agency's announcement: dates, documents, meetings, rules. Its advertisement date also fixes wage rates."],
    ["POC (point of connection)", "Where irrigation ties into the water supply."],
    ["Backflow preventer", "Device keeping irrigation water out of the potable supply."],
    ["Recycled water", "Treated wastewater for irrigation, in purple pipe, under County DEH rules."],
    ["Static pressure / PSI", "Pressure with no flow, in pounds per square inch."],
    ["HCF", "Hundred cubic feet (748 gallons), the billing unit for water."],
    ["Photo log", "Dated, numbered site photos with what each shows."],
    ["Bidder inquiry", "Caltrans's term for a question during bidding, answered publicly."],
    ["Patent ambiguity", "A conflict a careful bidder could see before bidding; must be asked before opening."],
    ["Or equal", "A product the owner may accept in place of the one specified."],
    ["SP (Special Provisions)", "Caltrans job-specific specs that add to or replace the Standard Specifications."],
    ["Addendum", "A formal written change to the bid documents before bid day."],
    ["Addendum log", "One row per change: what changed, estimate lines, done."],
    ["Acknowledge an addendum", "List its number on the bid form or proposal to show you priced it."],
    ["Material change", "An addendum change with substantial cost impact; late ones extend bid time (PCC §4104.5)."],
    ["Question deadline", "Last day the owner will consider questions."],
    ["GC cutoff", "The GC's deadline for sub prices, hours before the owner's."],
    ["Scope letter", "A sub's written statement of inclusions, exclusions and clarifications."],
    ["Transmittal", "The cover email or letter that sends a price or documents."],
    ["Bid tab / bid summary", "Public list of bidders and prices after opening."],
    ["NR (not responsive)", "A bid rejected for failing a bid requirement, such as a late form."],
    ["Engineer's estimate", "The agency's own cost estimate."],
    ["Cone of silence", "Rule limiting bidder contact with agency staff during a solicitation."]
  ]
},

{ t: "quiz", id: "m12", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "At a City job walk the engineer says the median trees will be removed. The plans show them protected, and no addendum follows. What do you price?", a: ["Removal, as the engineer said", "Protection, per the plans", "Half removal, half protection as a hedge"], c: 1, why: "Only formal written addenda bind; oral interpretations have no legal effect." },
    { q: "K-24-1952 opened Dec 6, 2023. You email a scope question on Nov 25. What should you expect?", a: ["The City must answer it by addendum", "It may not be considered, so price the risk and state your assumption", "It extends the bid date"], c: 1, why: "Nov 25 is 11 days out; questions received less than 14 days before opening may not be considered." },
    { q: "No addendum resolves your 172 vs. 180 tree well assembly question on 11-428704. What do you bid for item 51?", a: ["172, the quantity you verified", "180 EA as listed, with a unit price that carries setup even if only 172 are built", "Leave the item blank"], c: 1, why: "You bid the Bid Item List quantity; payment is by installed count, so the unit price must carry its share of fixed cost." },
    { q: "A material addendum is posted 48 hours before bids close. Under PCC §4104.5:", a: ["Bidders must absorb it", "Bid time must be extended at least 72 hours", "The solicitation is cancelled"], c: 1, why: "A material change issued less than 72 hours before closing extends the deadline by at least 72 hours." },
    { q: "11-431064 lists 1,900 tree well sprinkler assemblies but only 440 trees. First move?", a: ["Send an RFI immediately", "Read ISS-1 note 10 and count palms, 15-gallon trees and shrubs that get bubblers", "Price 440"], c: 1, why: "Notes and legends explain most apparent quantity conflicts." },
    { q: "At Otay's 11-431064 rates ($240.85 per meter per month + $5.84 per HCF), what do 2 meters cost over 36 months at 40 HCF per meter per month?", a: ["$17,080.20", "$34,160.40", "$17,341.20"], c: 1, why: "2 × 36 × ($240.85 + 40 × $5.84) = 72 × $474.45 = $34,160.40." },
    { q: "11-428704 Addendum 1 cut item 38 (2\" RCV) from 4 to 3 and moved federal wages to Modification 12. What's complete processing?", a: ["Acknowledge Addendum 1 on the bid form", "Update valves, wire and decoders and the supplier quote; re-run labor for every classification; log; acknowledge", "Update the valve count only"], c: 1, why: "Every estimate line touched by the addendum, including wage-driven labor, must be updated before acknowledging." },
    { q: "Marina Landscape bid $1,106,287.75 on 11-428704, $69,832.25 under ACCU. Why did ACCU get the job?", a: ["Marina's price was unbalanced", "Marina's DBE/DVBE submittal was late, so it was not responsive", "Marina missed the pre-bid"], c: 1, why: "The bid summary marks Marina NR: “LATE DBE/DVBE SUBMITTAL.”" },
    { q: "During an open City solicitation a council member's aide asks how your bid is going. You:", a: ["Explain your approach to build support", "Decline and refer them to the named City contact", "Ask what the engineer's estimate is"], c: 1, why: "Communication is limited to the named contact while the solicitation is open." },
    { q: "Two GCs on the same job ask you to sharpen your pencil an hour before cutoff. Best response?", a: ["Cut 3% for the GC you prefer", "Re-check; change only for a real reason, in writing, and send the same number to both", "Refuse to talk"], c: 1, why: "One scope and one number to every GC protects your credibility." }
  ]
},

{ t: "practice", id: "m12", h: "Practice assignments",
  lead: "Real documents, real sites, real calls.",
  items: [
    { h: "Walk a site with the checklist", hrs: 1, d: "<p>Attend an upcoming pre-bid from the <a href=\"https://www.sandiego.gov/cip/bid-contracting\" target=\"_blank\" rel=\"noopener\">City of San Diego bid page</a> or another agency's PlanetBids portal. If none is coming up, walk a commercial landscape or median visible from public property. Fill in the checklist, shoot a 30-photo log, and write the numbered questions you would send.</p>" },
    { h: "Write four bidder inquiries for 11-428704", hrs: 1, d: "<p>In <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>, write the tree well (item 51), Group H (item 25) and controller communication inquiries in your own words using the template, then find one more conflict in the plans or Special Provisions. For each, note in two lines what you checked to make sure the answer isn't already in the documents.</p>" },
    { h: "Log 11-428704 Addendum 1", hrs: 0.5, d: "<p>Download Addendum 1 from the lab and build the addendum log one row per change, including the wage modification, with the estimate lines each change touches.</p>" },
    { h: "Find the question rules on two live bids", hrs: 0.25, d: "<p>Open one current City of San Diego bid on PlanetBids and one Caltrans District 11 job on the <a href=\"https://ppmoe.dot.ca.gov/des/oe/weekly-ads/all-adv-projects.php\" target=\"_blank\" rel=\"noopener\">advertised projects</a> page. Record the question channel, deadline, named contact and addenda count. Read the posted Caltrans inquiries to see how other contractors word them.</p>" },
    { h: "Make one follow-up call", hrs: 0.25, d: "<p>Pick a bid submitted in the last month and call or email the estimator with the follow-up script. Record the answer in the <a href=\"https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP\" target=\"_blank\" rel=\"noopener\">Commercial Bid Tracker</a>.</p>" },
    { h: "Debrief a past public bid", hrs: 0.5, d: "<p>Pick a job in the <a href=\"#lab\">Real Bid Lab</a>, read its bid summary and fill in the debrief fields as if you had bid it: rank, spread to low, items far off, and any bidder marked not responsive and why.</p>" }
  ]
},

{ h: "Module 12 summary",
  lead: "See the site, ask in writing, process every change, and keep the record.",
  body: `<ul>
<li>Only written addenda change bid documents; your bid certifies you investigated the site.</li>
<li>Calendar the dates: PCC §6610 (mandatory pre-bid ≥ 5 days after notice), the package's question deadline, PCC §4104.5 (72-hour rule).</li>
<li>Never miss a mandatory pre-bid. Walk the water path first, then ground, access and adjacent scope; document with a checklist and photo log.</li>
<li>Send RFIs only when they change price or method; check notes, SP and addenda first; one channel, before the deadline; reference, conflict, proposed answer.</li>
<li>Process every addendum fully, one log row per change, then acknowledge it.</li>
<li>One scope, one number, to every GC, early; stay reachable; follow up and debrief.</li>
<li>Talk only to the named contact on public bids; keep one bid file and a communication log.</li>
</ul>
<p><strong>Next: <a href="#m13-1">Module 13 · Writing the Proposal</a></strong></p>`
}
]
});
