(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 12, hours: 5, title: "Pre-Bid Meetings, RFIs, Addenda and Communication",
slides: [

{ t: "cover",
  h: "Pre-Bid Meetings, RFIs, Addenda and Communication",
  lead: "Most bid mistakes start as a question nobody asked or a change nobody read. This module teaches you how to walk a site, ask questions in writing, track every addendum, and talk to agencies and GC estimators like a pro.",
  objectives: [
    "Tell a mandatory pre-bid meeting from an optional one, and what to bring",
    "Walk a landscape site and find the things that change your price",
    "Know where and when to send questions on City of San Diego, Caltrans and private bids",
    "Write a clear RFI with a sheet reference, the conflict and a proposed answer",
    "Keep an addendum log and update your estimate for every change",
    "Communicate with GC estimators before, on and after bid day",
    "Follow the communication rules on public bids and keep good records"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "3.5 h"], ["Module total", "5 h"]],
  body: "<p>One rule runs through this whole module: <strong>only written answers count</strong>. What someone tells you at a job walk or on the phone is not part of the bid documents.</p>"
},

{ h: "The rule: only written answers count",
  lead: "During bidding, the documents can only be changed in writing, by addendum. Anything said out loud has no effect.",
  body: `<p>Here is how real bid documents say it:</p>
<ul>
<li><strong>City of San Diego</strong> (bid K-24-1952, EMTS Boat Dock Esplanade, 2023): “Only questions answered by formal written addenda shall be binding. Oral and other interpretations or clarifications shall be without legal effect.”</li>
<li><strong>Caltrans:</strong> answers to bidder inquiries are posted publicly, but Caltrans says the responses do not become part of the contract and do not change it. Only an addendum changes the contract.</li>
<li><strong>Private GC bids:</strong> the GC's estimator may answer by email. Save it, and name it in your proposal (“per GC email dated 3/12”). Module 13 covers how.</li>
</ul>`,
  ex: `<p>At a job walk, the City's project engineer says, “Don't worry about the existing trees in the median, they're all coming out.” The plans show them protected in place. If no addendum changes the plans, you must price protecting them. Write the question down and send it in writing that afternoon.</p>`,
  watch: `<p>Submitting a bid usually counts as proof that you examined the site and the documents. The City's bid says submitting a bid “shall be conclusive evidence that the Bidder has investigated and is satisfied as to the conditions to be encountered.” If you didn't look or didn't ask, the risk is yours.</p>`,
  src: "City of San Diego Bidding Documents K-24-1952-DBB-3-A, Instructions to Bidders items 9 and 23; Caltrans Project Delivery Directive PD-07, Response to Bidder Inquiries (dot.ca.gov)."
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
<p>A typical meeting: a short presentation by the agency or GC, a review of key bid rules (SLBE goals, bonds, dates), a question period, then a walk of the site.</p>`,
  ex: `<p>The sign-in sheet is also a lead list. On a public job, it shows every prime and sub who cared enough to attend. Ask for a copy, or watch for it in an addendum. Those primes are the GCs to send your landscape price to.</p>`,
  watch: `<p>A mandatory meeting usually requires attendance by the company bidding as prime. If you are only a sub to a prime, check the notice to see whether your attendance matters. When in doubt, go.</p>`
},

{ h: "What to bring",
  lead: "Show up ready to measure, photograph and take notes, with the plans in your hand.",
  body: `<div class="twocol">
<div><h3>Documents</h3><ul>
<li>Plans, printed or on a tablet, with your questions already marked</li>
<li>The landscape specs (Division 32 or Whitebook/Caltrans sections)</li>
<li>Your list of questions from your first read</li>
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

{ h: "On the site · water and power",
  lead: "The point of connection and the power to the controller drive a lot of cost. Find them first.",
  body: `<ul>
<li><strong>Point of connection (POC) and meter:</strong> Is the meter there, or does it need to be set? Who pays the meter fee? What size is it? Is it a dedicated irrigation meter?</li>
<li><strong>Backflow preventer:</strong> existing to remain, new, or relocated? Is there room for an enclosure and the clearance the detail shows?</li>
<li><strong>Water source:</strong> potable or recycled? Recycled (purple) water brings its own pipe, signs, tags and county rules. Ask which water agency serves the site (City of San Diego, Otay, Sweetwater, Helix or others).</li>
<li><strong>Static pressure:</strong> if you can read it safely, write it down. Compare it to the design pressure on the irrigation legend.</li>
<li><strong>Controller power:</strong> is there a 120V circuit at the controller location, or is a new circuit, conduit and electrician needed? Who provides it (you, the GC's electrician, or the utility)?</li>
<li><strong>Communication:</strong> does the controller need cell, radio or Wi-Fi? Can a signal be found there?</li>
</ul>`,
  ex: `<p>On Caltrans 11-428704 (see Module 15), three drinking-water connections were shut off and the whole corridor was fed from one recycled-water connection at Palomar Street, with new Calsense controllers powered from an existing SDG&amp;E service on sheets E-1 and E-2. A site visit lets you see exactly where those pieces sit before you price them.</p>`
},

{ h: "On the site · ground, slopes and what's already there",
  lead: "Plans show what the designer expected. The site shows what's actually there.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Look at</th><th>Why it matters to your price</th></tr></thead>
<tbody>
<tr><td><strong>Existing irrigation</strong></td><td>If you must tie into it, keep it running, or demo it: is it working? Leaking? Old wire? Mixed brands? Note valve box locations.</td></tr>
<tr><td><strong>Soils</strong></td><td>Hard clay, rock, fill or caliche slows trenching and planting. Probe a few spots. Ask whether a soil test exists.</td></tr>
<tr><td><strong>Slopes</strong></td><td>Steeper than about 2:1 slows every task and may need jute or erosion control. Estimate the slope and note it.</td></tr>
<tr><td><strong>Existing plants to protect</strong></td><td>Trees to stay need fencing, hand digging near roots, maybe temporary water. Count them.</td></tr>
<tr><td><strong>Utilities</strong></td><td>Look for markers, pull boxes, gas and telecom signs. They mean hand digging and Dig Alert (811) before trenching.</td></tr>
<tr><td><strong>Weeds and debris</strong></td><td>Heavy weeds or trash add clearing and a longer weed control cycle.</td></tr>
<tr><td><strong>Drainage</strong></td><td>Low spots and standing water affect plant survival and your warranty.</td></tr>
</tbody></table></div>`,
  ex: `<p>The specs on 11-428704 warned of aerially deposited lead in the freeway soil, up to 556 mg/kg (see Module 15). You can't see lead on a site walk. That's why you read the specs before you walk: so you know what to look for and what to ask.</p>`
},

{ h: "On the site · access, staging and traffic",
  lead: "How your crew gets in, where materials sit, and when you can work are all costs.",
  body: `<ul>
<li><strong>Access:</strong> can a truck and trailer reach the work? Gates, curbs, narrow drives, overhead wires?</li>
<li><strong>Staging:</strong> where can you store pipe, plants and a bin? Is it secure overnight? On a GC job, ask where the GC will let you stage.</li>
<li><strong>Traffic:</strong> medians and street work need traffic control plans, signs and maybe flaggers. Freeway work may be nights only.</li>
<li><strong>Work hours:</strong> schools, hospitals, HOAs and retail centers often limit hours or noisy work.</li>
<li><strong>Neighbors:</strong> occupied buildings mean clean-up every day and care with sprinklers near windows and walks.</li>
<li><strong>Distance:</strong> drive time from your yard is paid time for every crew, every day.</li>
</ul>`,
  ex: `<p><strong>Keep a photo log.</strong> Take 30–60 photos on a walk: wide shots of each area, then close-ups of the POC, backflow, controller spot, existing heads, slopes and trees. Name the folder with the bid number and date. Photos taken before the job are your best evidence later if conditions turn out different from the plans.</p>`
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

{ h: "RFIs during bidding",
  lead: "An RFI (request for information) is a written question about the bid documents. During bidding, public agencies may call it a bidder question or bidder inquiry.",
  body: `<p><strong>Send an RFI when:</strong></p>
<ul>
<li>Two documents disagree (plan vs. detail, plan vs. spec, quantity table vs. bid item)</li>
<li>Information is missing (no POC shown, no controller location, no soil test)</li>
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
<tr><td><strong>Private (GC bids)</strong></td><td>The GC's estimator. Never the architect, owner or LA directly unless the GC says so.</td><td>The GC's RFI deadline, usually a few days before the sub bid date</td></tr>
</tbody></table></div>`,
  watch: `<p>Deadlines differ on every bid. A question sent after the cutoff may never be answered, and you'll have to price the risk yourself. Put the question deadline on your calendar the day you decide to bid.</p>`,
  ex: `<p>Find them: <a href="https://www.sandiego.gov/cip/bid-contracting" target="_blank" rel="noopener">City of San Diego bid and contracting opportunities</a> · <a href="https://ppmoe.dot.ca.gov/des/oe/bid-inquiries.php" target="_blank" rel="noopener">Caltrans Bidders' Inquiries</a> · <a href="https://ppmoe.dot.ca.gov/des/oe/weekly-ads/all-adv-projects.php" target="_blank" rel="noopener">Caltrans projects currently advertised</a>.</p>`,
  deeper: `<p>Caltrans's directive PD-07 says the Department aims to respond to an inquiry within two business days, even if only to acknowledge it, and that later responses or addenda may change an earlier response. Signing in to the Caltrans bid system requires an account; check the current sign-in rules on the Office Engineer site.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Instructions to Bidders item 9; Caltrans PD-07, Response to Bidder Inquiries; Caltrans Office Engineer website (ppmoe.dot.ca.gov)."
},

{ h: "How to write a good RFI",
  lead: "A good RFI can be answered in one line. Point to the exact place, state the conflict, and offer an answer.",
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

{ h: "Real RFI example 1 · tree well sprinklers on 11-428704",
  lead: "On the I-805 job, the quantity table and the bid item disagreed on tree well sprinkler assemblies. Here's the RFI a careful bidder would send.",
  body: `<ul>
<li>Sheet IQ-1 (irrigation quantities) adds up to <strong>172</strong> tree well sprinkler assemblies.</li>
<li>Bid item 51, Tree Well Sprinkler Assembly, lists <strong>180 EA</strong>.</li>
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

{ h: "Example addendum log · 11-428704 Addendum 1",
  lead: "Here is what a real addendum log looks like, using the I-805 job's Addendum 1 (Aug 27, 2021, twelve days before bids opened).",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Change</th><th>Before → after</th><th>What you update</th><th>Done</th></tr></thead>
<tbody>
<tr><td>Item 7 · Temporary railing (Type K)</td><td class="num">1,340 → 1,700 LF</td><td>Ask the traffic control sub to re-quote</td><td>☐</td></tr>
<tr><td>Item 25 · Plant (Group H)</td><td class="num">60,015 → 61,975</td><td>Cutting count, labor hours, nursery quote</td><td>☐</td></tr>
<tr><td>Item 38 · 2" remote control valve</td><td class="num">4 → 3</td><td>Valve count, wire and decoders, supplier quote</td><td>☐</td></tr>
<tr><td>Plan sheets 22, 23, 45, 56</td><td>Replaced</td><td>Swap the sheets in your set; re-check traffic handling, irrigation and planting quantities</td><td>☐</td></tr>
<tr><td>Federal wage rates</td><td>Now Modification 12 (Aug 27, 2021)</td><td>Re-check labor rates for every classification you use</td><td>☐</td></tr>
<tr><td>Bid form</td><td>Acknowledge “1”</td><td>Bid form addenda line</td><td>☐</td></tr>
</tbody></table></div>`,
  ex: `<p>A wage update can change every labor-heavy item at once. On a prevailing wage job, re-run your crew cost after every wage modification (Module 11).</p>`,
  src: "Caltrans 11-428704 Addendum 1; Bid Item List (see Module 15)."
},

{ h: "Talking to GC estimators before bid day",
  lead: "GC estimators are busy, especially in the last week. Make every contact short, useful and easy to act on.",
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

{ h: "Professional email templates",
  lead: "Short, specific and easy to forward. Use the bid name and number in every subject line.",
  exLabel: "Templates (fill in the brackets)",
  ex: `<p><strong>1 · RFI to a GC estimator</strong><br><strong>Subject:</strong> [Project], landscape RFI #2, plant count conflict<br>Hi [Name], one question on landscape for [Project]. Sheet L-2.0 shows 38 Lomandra in the north bed; the plant schedule on L-1.0 lists 26 total. Please confirm we should price the 38 shown on the plan. Thanks, [Name].</p>
<p><strong>2 · Scope letter cover note</strong><br><strong>Subject:</strong> [Project], landscape &amp; irrigation proposal, addenda 1–2<br>Hi [Name], attached is our landscape and irrigation proposal for [Project], based on sheets [L-1.0 to L-6.0], spec sections [32 84 00, 32 91 13, 32 93 00] and addenda 1–2. Price and clarifications are on page 1. I'll be at this number all day: [phone].</p>
<p><strong>3 · Declining a bid</strong><br><strong>Subject:</strong> [Project], landscape: passing this time<br>Hi [Name], thanks for the invite. We're passing on this one because [our crews are committed in March]. Please keep us on your list for landscape and irrigation.</p>`,
  watch: `<p>Reread every email before you send it: right project, right person, right attachment, no old price in the file name.</p>`
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

{ t: "terms", h: "Words to know",
  lead: "Add these to your notebook.",
  terms: [
    ["Pre-bid meeting", "A meeting before bids are due where the owner explains the job and answers questions."],
    ["Job walk / site walk", "A visit to the project site during bidding."],
    ["Mandatory pre-bid", "A meeting you must attend, and sign in at, to be allowed to bid."],
    ["Sign-in sheet", "The attendance list; your proof you were at a mandatory meeting."],
    ["Point of connection (POC)", "Where the irrigation system connects to the water supply."],
    ["Backflow preventer", "A device that keeps irrigation water from flowing back into drinking water."],
    ["Recycled water", "Treated wastewater used for irrigation, piped in purple."],
    ["Photo log", "Dated photos of the site taken during bidding."],
    ["RFI", "Request for information: a written question about the documents."],
    ["Bidder inquiry", "Caltrans's name for a question asked during bidding, answered publicly."],
    ["Patent ambiguity", "A conflict in the documents a careful bidder could see before bidding."],
    ["Or equal", "A product the owner may accept in place of the one specified."],
    ["Addendum", "A formal written change to the bid documents issued before bid day."],
    ["Addendum log", "Your list of every addendum, what it changed and whether your estimate is updated."],
    ["Acknowledge an addendum", "List its number on the bid form to show you priced it."],
    ["Question deadline", "The last day the owner will accept questions."],
    ["Scope letter", "A sub's written description of what its price includes and excludes."],
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
    { q: "During an open City solicitation, a council member's aide calls asking how the bid is going. What do you do?", a: ["Explain your price strategy", "Politely decline to discuss it and refer them to the named City contact", "Ask for help winning"], c: 1, why: "Public bids limit communication to the named contact, so stay inside that channel." }
  ]
},

{ t: "practice", id: "m12", h: "Practice assignments",
  lead: "These use real San Diego bids and the real Caltrans job from Module 15.",
  items: [
    { h: "Walk a site with the checklist", hrs: 1, d: "<p>Find an upcoming pre-bid meeting on the <a href=\"https://www.sandiego.gov/cip/bid-contracting\" target=\"_blank\" rel=\"noopener\">City of San Diego bid page</a> or another agency's PlanetBids portal and attend it. If none is coming up, walk an existing commercial landscape you can see from public property (a shopping center or a street median). Use the water/power, ground and access checklists from this module. Take a 30-photo log and write one page of notes.</p>" },
    { h: "Write three bidder inquiries for 11-428704", hrs: 0.75, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>. Write the tree well (item 51) and Group H (item 25) inquiries in your own words using the template. Then find one more question of your own in the plans or Special Provisions and write it the same way.</p>" },
    { h: "Build an addendum log", hrs: 0.5, d: "<p>Download Addendum 1 for 11-428704 from the lab. Make a spreadsheet log with columns: number, date, change, before, after, estimate lines affected, done. Fill it in for every change, including the wage modification.</p>" },
    { h: "Find the question rules on two live bids", hrs: 0.25, d: "<p>Open one current City of San Diego construction bid on PlanetBids and one advertised Caltrans District 11 job on the <a href=\"https://ppmoe.dot.ca.gov/des/oe/weekly-ads/all-adv-projects.php\" target=\"_blank\" rel=\"noopener\">Caltrans advertised projects</a> page. For each, write down: where questions go, the question deadline, the named contact, and how many addenda are posted. Read the posted Caltrans bidder inquiries to see how other contractors ask.</p>" },
    { h: "Write your email templates", hrs: 0.5, d: "<p>Write your own versions of five emails: RFI to a GC, scope letter cover note, bid-day confirmation, declining a bid, and post-bid follow-up. Save them where you can copy them fast.</p>" },
    { h: "Set up the bid folder and communication log", hrs: 0.25, d: "<p>Create a template bid folder with the eight subfolders from this module, and a communication log spreadsheet (date, person, company, method, summary, follow-up). Use it on your next bid.</p>" },
    { h: "Make one follow-up call", hrs: 0.25, d: "<p>Pick a bid you or the company submitted in the last month. Call or email the estimator using the follow-up template. Record what you learned in the <a href=\"https://claude.ai/artifact/BfM3VhU69VAesNWb6kbEnP\" target=\"_blank\" rel=\"noopener\">Commercial Bid Tracker</a>.</p>" }
  ]
},

{ h: "Module 12 summary",
  lead: "You know how to see the site, ask the right questions in writing, and keep track of every change and every conversation.",
  body: `<ul>
<li>Only written answers count. Oral answers at a job walk have no effect unless an addendum follows.</li>
<li>Never miss a mandatory pre-bid meeting. Sign in clearly and bring the plans, tools and questions.</li>
<li>On the site, find the POC, backflow, water source, controller power, soils, slopes, plants to protect, utilities, access and staging.</li>
<li>Send questions through the one named channel, before the deadline: the named City contact or PlanetBids Q&amp;A, Caltrans Bidders' Inquiries, or the GC estimator.</li>
<li>A good RFI gives the exact reference, the conflict and a proposed answer.</li>
<li>Log every addendum, update the estimate and acknowledge it on the bid.</li>
<li>Be brief and reachable with GC estimators, and always follow up after the bid.</li>
<li>Keep one organized folder and a communication log for every bid.</li>
</ul>
<p><strong>Next: Module 13 · Writing the Proposal</strong></p>`
}
]
});
