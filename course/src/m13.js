(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 13, hours: 4.5, title: "Writing the Proposal",
slides: [

{ t: "cover",
  h: "Writing the Proposal",
  lead: "Your price only counts if the GC knows exactly what it buys. The words around the number decide whether it gets carried.",
  objectives: [
    "Pick the right document: GC proposal, bid-item quote to a public prime, owner-direct proposal, or the agency's bid form",
    "Write line items that state what, where, how much, where it stops and what's included",
    "Exclude from a library without over-excluding, and know when to call instead",
    "Price alternates and add/deduct unit prices with full markup logic",
    "Write schedule, establishment, warranty and terms that match the specs",
    "Answer GC scope sheets, revise after addenda, quote public primes by bid item, and review before sending"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "3 h"], ["Module total", "4.5 h"]],
  body: `<p>Two full samples: a proposal to a GC on a made-up private medical office job, and a bid-item quote to primes on the real Caltrans SR-905 job (11-431064). The number comes from <a href="#m10-1">Module 10</a>; this module is the words.</p>`
},

{ h: "Which document, and why the words matter",
  lead: "Your proposal becomes part of the subcontract; anything unclear gets a plug added to your number during leveling.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Situation</th><th>What you send</th><th>Exclusions?</th></tr></thead>
<tbody>
<tr><td>Private job, sub to a GC</td><td>Proposal on letterhead, plus the GC's bid form or scope sheet if sent</td><td>Yes, short and specific</td></tr>
<tr><td>Public job, sub to a prime</td><td>Quote by the agency's bid item numbers, plus listing information</td><td>Almost none; the prime can't carry them</td></tr>
<tr><td>Public job, you are prime</td><td>The agency's bid forms, exactly (<a href="#m14-1">Module 14</a>)</td><td>None; conditions can make the bid non-responsive</td></tr>
<tr><td>Private, direct to owner (HOA, property manager)</td><td>Proposal that becomes the contract: add payment, change and warranty terms</td><td>Yes</td></tr>
</tbody></table></div>
<ul>
<li>The GC builds its bid from your proposal, often in the last hour, and compares subs line by line.</li>
<li>After award, the subcontract usually incorporates your proposal or its scope. What you included and excluded is what you're held to.</li>
</ul>`,
  ex: `<p>Two subs at $140,000. One says “Landscape and irrigation per plans.” The other lists seven priced lines, cites L-1.0 to L-6.0 and Addenda 1–2, and states the backflow is by the plumber. The second gets carried; the first gets a plug.</p>`
},

{ h: "Parts of a proposal and the document list",
  lead: "Use one template with every section; mark unused ones N/A so a missing section is a visible error.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>Contents</th></tr></thead>
<tbody>
<tr><td>Header</td><td>Company, CSLB (Contractors State License Board) license # and classes, DIR (Department of Industrial Relations) # on public work, contact, date, proposal #</td></tr>
<tr><td>To / project</td><td>GC and estimator, project, address, bid date</td></tr>
<tr class="hl"><td>Documents priced</td><td>Sheets with set name and date (“L-1.0 to L-6.0, 100% CD (construction documents) set dated 06/12/2026”); spec sections and dates (32 80 00, 32 91 13, 32 93 00, CSI MasterFormat); every addendum by number and date, even ones that don't affect you; geotech or agronomic reports; GC scope sheet</td></tr>
<tr><td>Scope by line item</td><td>Each type of work, short description, price; lines add to the base bid</td></tr>
<tr><td>Inclusions / exclusions / clarifications</td><td>Lists</td></tr>
<tr><td>Alternates / unit prices</td><td>Separate from base, add or deduct</td></tr>
<tr><td>Schedule, establishment, warranty</td><td>Duration, sequence, lead times; period, start, contents; guarantee and voids</td></tr>
<tr><td>Terms and signature</td><td>Validity, payment, insurance, bonds; your signature and a GC acceptance line</td></tr>
</tbody></table></div>
<p><strong>Have on the desk before writing:</strong> recap sheet, plan/spec log, addenda log (re-check the portal now), the GC's invitation and scope sheet, RFI log, supplier and sub quotes with their validity and exclusions, walk notes and photos.</p>`,
  watch: `<p>“Per plans and specs” with no dates is a blank check: when the plans change, you can't prove what you priced. Listing Addenda 1–2 when Addendum 3 changed the planting plan is a proposal for the wrong job.</p>`,
  deeper: `<p>The company's <a href="https://claude.ai/artifact/Lya5kQRNBTrDcNgc7xeumK" target="_blank" rel="noopener">How to Make a Bid</a> process (Step 9) requires every template section filled or marked N/A, never deleted.</p>`
},

{ h: "Writing a line item",
  lead: "Every line answers five things in order: what, where shown, how much, where it stops, what's included that a GC might doubt.",
  body: `<ol class="steps">
<li><div><b>What</b>Name it as the plans do: “Shrubs and groundcover,” “Stabilized DG (decomposed granite).”</div></li>
<li><div><b>Where shown</b>“per L-4.0, L-4.1 and 32 93 00.”</div></li>
<li class="hl"><div><b>How much</b>Counts and sizes you priced: “(420) #5, (1,210) #1.” Parentheses mean a count.</div></li>
<li><div><b>Where it stops</b>“from the downstream side of the backflow,” “to back of curb,” “3" depth.”</div></li>
<li><div><b>Disputed inclusions</b>Staking, root barrier, testing, as-builts.</div></li>
</ol>
<p>Group lines by CSI section or work type: irrigation (32 80 00 / 32 84 00), soil prep (32 91 13), turf (32 92 00), plants (32 93 00), mulch, DG and boulders, establishment. Follow the GC's breakdown when one is sent; if it splits out sleeves, price sleeves separately.</p>`,
  exLabel: "One line, built",
  ex: `<p>“Mulch per L-4.0 and 32 93 00: 3" shredded bark in all shrub and groundcover areas, about 15,600 SF, excluding DG areas and tree wells in paving; weed fabric where shown on 6/L-5.0.”</p>`,
  watch: `<p>Write the quantity you priced and its source. If the landscape architect's number is 15,600 SF and you measured 15,200 SF, say which you used. Open every detail you cite to confirm it exists.</p>`
},

{ h: "Weak vs. clear wording",
  lead: "Weak lines and open-ended words promise more than you priced; replace them with counts, sheets and edges.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Weak</th><th>Clear</th></tr></thead>
<tbody>
<tr><td>Irrigation per plans</td><td>Irrigation per L-3.0 to L-3.2 and 32 84 00, from the downstream side of the backflow: smart controller, flow sensor, master valve, (14) RCVs (remote control valves), drip and spray zones, mainline, laterals, wire, testing</td></tr>
<tr><td>Trees</td><td>(18) trees per L-4.0: (14) 24" box, (4) 36" box; staking per 4/L-5.0; root barrier within 5' of paving</td></tr>
<tr><td>Soil prep</td><td>Per 32 91 13: (1) agronomic test; amendments per report up to the rates in 2.3; rototill 6"; fine grade ±0.1 ft</td></tr>
<tr><td>Sleeves</td><td>Sch 40 (Schedule 40) PVC sleeves per L-3.0, sizes shown, installed before paving; GC gives 5 working days' notice</td></tr>
<tr><td>Maintenance</td><td>90-day establishment after acceptance of planting: weekly visits, watering schedule, weeding, replacement of failed plants</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Risky phrase</th><th>Problem</th><th>Use instead</th></tr></thead>
<tbody>
<tr><td>“Complete landscape system”</td><td>Pulls in backflow, power, sleeves you excluded</td><td>“Items 1–7 as listed”</td></tr>
<tr><td>“All work shown” / “per plans and specs”</td><td>Pulls in civil and electrical sheets; no dates</td><td>“Work shown on L-1.0 to L-6.0,” “documents listed above”</td></tr>
<tr><td>“Turnkey”</td><td>Ready to use: permits, water, power</td><td>Don't use</td></tr>
<tr><td>“As required” / “as needed”</td><td>Required by whom; no limit</td><td>Count, depth, or “weekly for 90 days”</td></tr>
<tr><td>“Fully functional” / “guaranteed”</td><td>Responsible for others' parts</td><td>“Tested and operating from the POC to the last head”</td></tr>
</tbody></table></div>`,
  ex: `<p>A sub's own word “complete” makes 400 LF of extra pipe to a distant meter arguable. “From the POC (point of connection) stubbed 5' inside the property line” ends the argument.</p>`
},

{ h: "Inclusions and clarifications",
  lead: "Inclusions answer leveling questions before they're asked; clarifications record how you read something unclear or what your price depends on.",
  body: `<div class="twocol">
<div><h3>Inclusions to state</h3><ul>
<li>POC: where irrigation starts</li>
<li>Controller: furnish, install, mount; who connects power</li>
<li>Soil tests: number, and what happens after the report</li>
<li>Fine grade tolerance once rough grade is turned over</li>
<li>Establishment period and contents</li>
<li>Submittals, as-builts, controller charts, O&amp;M (operation and maintenance) manuals</li>
<li>Number of mobilizations (“(2); added mobilizations $850 each”)</li>
<li>Wage basis: prevailing wage and certified payroll when required (<a href="#m11-1">Module 11</a>)</li>
</ul></div>
<div><h3>Clarification types</h3><ul>
<li><b>Interpretation:</b> “Legend lists 1,150 #1; plan count is 1,210. Priced 1,210.”</li>
<li><b>Condition:</b> “Assumes skid steer and 10-wheel truck access to all planting areas.”</li>
<li><b>Sequence:</b> “Assumes turnover in no more than two phases.”</li>
<li><b>Unanswered RFI:</b> “RFI #3 (controller location) unanswered at bid; priced as shown on L-3.0.”</li>
<li><b>Substitution:</b> “Priced as specified; equals on request.”</li>
</ul></div>
</div>`,
  watch: `<p>A clarification that quietly removes scope is an exclusion in disguise, and GCs notice. Put removed scope in the exclusions, where they look.</p>`
},

{ h: "Exclusions: rules and when to call",
  lead: "Exclude only specific items that belong to someone else; every exclusion becomes a plug on your number.",
  body: `<div class="twocol">
<div><h3>Good exclusion</h3><ul>
<li>Names a specific item and who provides it: “Backflow preventer and enclosure (by plumbing).”</li>
<li>Covers items the plans leave unassigned, so the GC can assign them.</li>
<li>Agrees with the GC's scope sheet and the specs.</li>
</ul>
<h3>Over-excluding</h3><ul>
<li>Work shown on your L- sheets (“tree staking excluded”)</li>
<li>Catch-alls: “anything not specifically listed”</li>
<li>Pages of boilerplate; normal soil risk you should price</li>
</ul></div>
<div><h3>Call first, or exclude?</h3><ol>
<li>Drawn or specified in your section → include; if you truly can't, call.</li>
<li>GC scope sheet assigns it to landscape → include, or call to move it.</li>
<li>Bigger than about 3% of your price → call (course rule of thumb).</li>
<li>Clearly another trade → exclude and name the trade.</li>
<li>Unsure → price it as a separate line or alternate.</li>
</ol></div>
</div>`,
  ex: `<p><strong>Plug math:</strong> ten exclusions at a $1,500 plug each turn a “low” $140,000 into $155,000 on the GC's sheet. Call script: “Your scope sheet lists site furnishings under landscape. Do you want benches and trash cans from us, or a furnishings vendor? If us, I'll show them as a separate line.” Log who said what, when.</p>`,
  deeper: `<p>If the GC's or agency's instructions say “no qualified bids” (no exclusions or conditions), call the estimator about anything you can't include. How to Make a Bid (Step 5) checks exclusions against the bid form and specs before pricing.</p>`
},

{ h: "Exclusions library",
  lead: "Start from this table, delete what doesn't apply, and never keep a line that excludes work assigned to you.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Typical wording</th><th>Exclude when</th><th>Don't exclude when</th></tr></thead>
<tbody>
<tr><td>Permits and fees</td><td>Building, grading, encroachment, plan check permits and fees by others</td><td>Owner/GC pulls project permits</td><td>Documents assign a landscape permit to you</td></tr>
<tr><td>Water meter and service</td><td>Meter, meter fees, capacity and connection fees by owner/GC; irrigation starts at the stated POC</td><td>Almost always</td><td>Caltrans meter charges are a bid item (11-431064 item 67); the prime carries them</td></tr>
<tr><td>Backflow and enclosure</td><td>By plumbing unless listed in scope</td><td>Shown on plumbing or civil sheets</td><td>Listed in the irrigation section: include or call</td></tr>
<tr><td>Controller power</td><td>120V, conduit and final connection by electrical</td><td>Electrical sheets show the circuit</td><td>Always say who makes the final connection</td></tr>
<tr><td>Sleeves</td><td>By others; we provide a sleeve layout and inspect before paving</td><td>GC's concrete sub installs them</td><td>GC scope sheet assigns them to landscape</td></tr>
<tr><td>Rough grading</td><td>Rough grade to ±0.1 ft of finish, less soil and mulch depth, by others</td><td>Grading on civil sheets with a grading sub</td><td>You're the only earth-moving trade</td></tr>
<tr><td>Soil import/export</td><td>Excluded unless listed; amendments per report up to spec rates included</td><td>Quantities not shown, report not out</td><td>Import quantity shown on your sheets</td></tr>
<tr><td>Rock, concrete, debris</td><td>Removal from planting areas excluded</td><td>Old foundations or fill</td><td>Normal rock per the soil report</td></tr>
<tr><td>Hazardous materials</td><td>Testing, handling, disposal of contaminated soil excluded</td><td>Always, unless specified to you</td><td></td></tr>
<tr><td>Demolition and clearing</td><td>By others</td><td>Separate demo sheets (<a href="#m17-1">Module 17</a>)</td><td>Removals shown on your L- sheets</td></tr>
<tr><td>Traffic control</td><td>Traffic control, flaggers, lane closures excluded</td><td>GC runs it for all trades</td><td>You're prime or alone in the street</td></tr>
<tr><td>SWPPP and BMPs</td><td>SWPPP (storm water pollution prevention plan) and BMPs (best management practices) by GC, except protecting our stockpiles</td><td>GC holds the storm water permit</td><td>Spec puts erosion control (fiber rolls, hydroseed) in your section</td></tr>
<tr><td>Work hours</td><td>Night, weekend, overtime excluded unless required by listed documents</td><td>Normal-hours job</td><td>Documents require it: price it</td></tr>
<tr><td>Recycled water signs and tags</td><td></td><td>Never, if your spec lists them</td><td>Local water agency rules govern</td></tr>
<tr><td>Establishment water</td><td>Supplied by owner through the permanent meter</td><td>Owner's meter is live</td><td>Caltrans item 68 water service on 11-431064 is a real cost</td></tr>
<tr><td>Damage by others, vandalism, theft</td><td>Repair or replacement is extra work</td><td>Active sites, parks, medians</td><td></td></tr>
<tr><td>Water or power loss</td><td>Warranty void for loss from interruptions outside our control</td><td>Owner/GC controls meter or power</td><td></td></tr>
<tr><td>Amendments beyond spec rates</td><td>Included to 32 91 13 rates; more by unit price</td><td>Soil test not done</td><td></td></tr>
<tr><td>Maintenance beyond period</td><td>Beyond 90 days due to others' delays: $1,250/month</td><td>GC may delay acceptance</td><td>Spec makes you replace dead plants during establishment: price it</td></tr>
<tr><td>Existing plants to remain</td><td>Protection fencing by GC; we protect plants in our work areas</td><td>Plans don't assign protection</td><td></td></tr>
<tr><td>Bonds</td><td>Excluded; available at added [x]%</td><td>Not requested in the invitation (PCC 4108)</td><td>Invitation stated bond requirements</td></tr>
<tr><td>Special insurance</td><td>State what you carry; extra limits or wrap-up priced on request</td><td>Requirements not seen</td><td></td></tr>
<tr><td>Testing and inspection</td><td>Third-party fees by others except listed soil tests</td><td>Owner hires the lab</td><td></td></tr>
<tr><td>General conditions</td><td>Dumpsters, toilets, fencing, field office by GC</td><td>GC provides for all trades</td><td>Scope sheet assigns them to you</td></tr>
<tr><td>Liquidated damages</td><td>LDs (liquidated damages) only for delays we cause</td><td>Always clarify</td><td></td></tr>
<tr><td>Prevailing wage</td><td>State the wage basis either way</td><td></td><td>Public work: include it; a private-wage price is a missing cost</td></tr>
</tbody></table></div>`,
  deeper: `<p>PCC (Public Contract Code) §4108: a sub bidding a public job must be able to furnish performance and payment bonds if the prime asks, but the prime may require them only if its written or published request for sub bids clearly stated the amount, requirements and who pays. If it didn't, the prime can't impose the bond later under that section.</p>`,
  src: "Caltrans 11-431064 Bid Item List items 67 and 68; Cal. Public Contract Code §4108 (via california.public.law, verified Oct. 2026)."
},

{ h: "Alternates, unit prices and allowances",
  lead: "Alternates price owner options; unit prices become your change order prices. Both carry the same markup as the base bid.",
  body: `<div class="twocol">
<div><h3>Alternates</h3><ul>
<li>Price every requested alternate with the documents' numbers and names; say add or deduct and what changes.</li>
<li>Price each on its own; note interactions (“Alt. 2 assumes Alt. 4 not accepted”).</li>
<li>Voluntary alternates (your own ideas) go in a separate, labeled section.</li>
<li>Deducts return direct cost; mobilization, supervision and overhead stay.</li>
</ul></div>
<div><h3>Unit prices and limits</h3><ul>
<li>Common: per plant by size, per tree, per valve, per head, per LF of drip, per CY of mulch.</li>
<li>Add prices carry full overhead and profit; small-quantity adds cost more per unit. Deducts are lower.</li>
<li>Limit: “Unit prices apply to changes up to 15% of each item.”</li>
<li>Minimum change order: “$450,” so a two-plant change doesn't cost a trip.</li>
</ul></div>
</div>
<p><strong>Allowances:</strong> your own (“$3,000 for added amendments after the soil test”) bills only what's used; unused money returns to the owner. An owner allowance in the documents (“$5,000 for specimen tree upgrades”) is carried exactly as written, without markup unless the documents say otherwise.</p>`,
  watch: `<p>Lowballed unit prices look good on bid day and lose money on every change during the job.</p>`
},

{ h: "Worked: alternates and unit prices",
  lead: "Each alternate and unit price is a small estimate with its own worksheet (example costs; use yours).",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Alt. 3 · maintenance 90 days → 12 months (+39 weekly visits)</th><th class="num">Cost</th></tr></thead>
<tbody>
<tr><td>Labor: 39 × 2 workers × 3 h = 234 h × $58</td><td class="num">$13,572.00</td></tr>
<tr><td>Truck and fuel: 39 × $35</td><td class="num">$1,365.00</td></tr>
<tr><td>Fertilizer and small materials (3 feedings)</td><td class="num">$450.00</td></tr>
<tr><td>Plant replacement (≈2% of #1 and #5)</td><td class="num">$800.00</td></tr>
<tr><td>Subtotal × 1.15 markup = $16,187 × 1.15 = $18,615.05</td><td class="num"><strong>Add $18,600</strong></td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Alt. 2 · delete (22) boulders</th><th class="num">Credit</th></tr></thead>
<tbody>
<tr><td>22 × $110 = $2,420; tax 7.75% = $187.55; setting 16 h × $62 = $992</td><td class="num">$3,599.55</td></tr>
<tr><td>Direct cost only, no markup (loader, foreman and overhead stay)</td><td class="num"><strong>Deduct $3,600</strong></td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Unit price · #5 shrub</th><th class="num">Add</th><th class="num">Deduct</th></tr></thead>
<tbody>
<tr><td>Plant $14.00 + tax $1.09 + amendment/tablets $2.00</td><td class="num">$17.09</td><td class="num">$17.09</td></tr>
<tr><td>Labor at $62/h</td><td class="num">0.60 h = $37.20</td><td class="num">0.45 h = $27.90</td></tr>
<tr><td>Small-order delivery and handling</td><td class="num">$8.00</td><td class="num">$0.00</td></tr>
<tr><td>Direct cost × markup</td><td class="num">$62.29 × 1.25 = $77.86</td><td class="num">$44.99 × 1.10 = $49.49</td></tr>
<tr><td><strong>Unit price</strong></td><td class="num"><strong>$78</strong></td><td class="num"><strong>$50</strong></td></tr>
</tbody></table></div>
<p><strong>Limit check:</strong> 15% of (1,210) #1 groundcover = 181.5, so unit prices cover changes up to (181) plants; a change of (300) gets a new price.</p>`,
  watch: `<p>Round freely; never drop markup on an add. An alternate priced at cost is a gift if the owner takes it.</p>`
},

{ h: "Schedule, establishment and warranty",
  lead: "Promise a duration that starts when your areas are ready, and copy establishment and warranty periods from the specs.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Topic</th><th>Wording to adapt</th></tr></thead>
<tbody>
<tr><td>Duration</td><td>“Approximately [6] weeks on site with a [5]-person crew after all planting areas are turned over.”</td></tr>
<tr><td>Phases</td><td>“Includes [2] phases; each added phase or mobilization $[850].”</td></tr>
<tr><td>Turnover</td><td>“Rough grade ±0.1 ft, free of debris, sleeves installed, water at the POC, power at the controller.”</td></tr>
<tr><td>Sleeves</td><td>“GC to give 5 working days' notice before paving so sleeves can be verified.”</td></tr>
<tr><td>Long lead</td><td>“Specimen trees require submittal approval 6 weeks before planting.”</td></tr>
<tr><td>Season</td><td>“Planting June–September may require added watering visits at the listed unit price.”</td></tr>
<tr><td>Delay</td><td>“Delay over 60 days past scheduled start for causes outside our control: material escalation priced as a change.”</td></tr>
<tr><td>Establishment</td><td>“Includes [90]-day establishment per [section] from written acceptance of planting: [weekly] visits, controller adjustment, weeding, fertilizing per spec, replacement in kind. Water by owner. Excludes damage by others, vandalism, theft, and loss from water or power interruptions outside our control.”</td></tr>
<tr><td>Warranty</td><td>Plant and workmanship periods per spec, from acceptance; voided by vandalism, owner neglect, loss of water or power, acts of nature.</td></tr>
</tbody></table></div>`,
  ex: `<p><strong>Real periods:</strong> K-24-1952 (EMTS park): 90 calendar days, inside contract time, starting at acceptance of planting; punch list completion “authorizes start of maintenance period.” 11-431064 (SR-905): Type 1 establishment of 750 working days after 120 working days of construction, four seasonal watering schedules, and “maintain a neat and presentable job site… including areas not visible to the public”; the three bids for Plant Establishment Work were $95,000, $140,000 and $153,900. 11-428704: 120 working days then 250 of establishment (<a href="#m15-1">Module 15</a>).</p>`,
  watch: `<p>“Warranty per specs” unread is risky: some specs require a full year of replacements. Price them in establishment cost, then state the period.</p>`,
  src: "City of San Diego K-24-1952-DBB-3-A, Supplementary Special Provisions 6-1.1 and 801-1; Caltrans 11-431064 Special Provisions 20-4 and Bid Summary item 31."
},

{ h: "Validity, payment, insurance, bonds and signature",
  lead: "The terms section protects your price and your cash.",
  body: `<ul>
<li><strong>Validity:</strong> “Valid 30 days.” Never longer than your supplier quotes (<a href="#m8-1">Module 8</a>).</li>
<li><strong>Payment:</strong> monthly progress billing; retention per subcontract; stored materials if allowed.</li>
<li><strong>Insurance:</strong> your limits; certificates and endorsements per subcontract; flag unpriced special requirements.</li>
<li><strong>Bonds:</strong> excluded unless requested; give the added percent.</li>
<li><strong>Signature:</strong> name, title, date, plus a GC acceptance line.</li>
</ul>`,
  deeper: `<p>Statute overrides the proposal. Business and Professions Code §7108.5: a prime pays a sub its share within 7 days of receiving each progress payment unless otherwise agreed in writing. PCC §7201: retention on public works contracts entered on or after Jan 1, 2012 is limited to 5%, with exceptions. Check current text on leginfo.legislature.ca.gov; billing and retention are in <a href="#m16-1">Module 16</a>.</p>`,
  src: "Business and Professions Code §7108.5; Public Contract Code §7201."
},

{ h: "Leveling and the GC scope sheet",
  lead: "The GC levels in its own format; answer every scope sheet line and make your proposal say the same thing.",
  body: `<ul>
<li>Follow the GC's breakdown and alternate numbers; one price per line; lines add to the total; alternates and unit prices never mixed into base.</li>
<li>Answer every line: included, excluded, or priced separately. A blank gets a plug.</li>
<li>Expect surprises on the sheet: sleeves, fine grading, erosion control, furnishings, tree protection.</li>
<li>Tailor the proposal to each GC's split (How to Make a Bid, Step 10). Send early: received 2 hours before bid time it gets studied; 10 minutes before, it gets plugged. Bid leveling basics: <a href="#m1-1">Module 1</a>.</li>
</ul>`,
  exLabel: "Made-up scope sheet, answered",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Scope sheet line</th><th>Answer</th><th class="num">Price</th></tr></thead>
<tbody>
<tr><td>1</td><td>Irrigation complete from POC</td><td>Included, from downstream of backflow</td><td class="num">In base</td></tr>
<tr><td>2</td><td>Backflow and enclosure</td><td>Excluded, on plumbing sheet P-2.1</td><td class="num">Separate $4,200</td></tr>
<tr><td>3</td><td>Sleeves under hardscape</td><td>Included per L-3.0 (moved into base)</td><td class="num">In base $3,150</td></tr>
<tr><td>4</td><td>Fine grading</td><td>Included ±0.1 ft after rough grade turnover</td><td class="num">In base</td></tr>
<tr><td>5</td><td>Jute netting on slopes</td><td>Included per L-2.1</td><td class="num">In base</td></tr>
<tr><td>6</td><td>Site furnishings</td><td>Excluded, not landscape; available</td><td class="num">Separate $11,800</td></tr>
<tr><td>7</td><td>Tree protection fencing</td><td>Excluded, GC general conditions</td><td class="num">N/A</td></tr>
<tr><td>8</td><td>90-day maintenance</td><td>Included</td><td class="num">In base</td></tr>
<tr><td>9</td><td>Prevailing wage</td><td>Not required, private job</td><td class="num">N/A</td></tr>
<tr><td>10</td><td>Bond</td><td>Excluded; $140,800 × 2.5%</td><td class="num">$3,520</td></tr>
</tbody></table></div>
<p>Moving sleeves into base took the total from $137,650 to $140,800; the attached proposal must now say “sleeves included.”</p>`,
  watch: `<p>A form that says “sleeves: included” with a proposal that excludes them is a dispute created before the job starts.</p>`
},

{ h: "Revising after an addendum",
  lead: "Any addendum after you've sent means a numbered revision, even with no price change.",
  body: `<ol class="steps">
<li><div><b>Log it the day it posts</b>Mark changes touching your scope or exclusions (<a href="#m12-1">Module 12</a>).</div></li>
<li><div><b>Re-price on the recap first</b>Then the proposal.</div></li>
<li class="hl"><div><b>Mark the revision</b>“Proposal #26-041 Rev. 1, dated 07/09/2026, supersedes 07/08/2026.”</div></li>
<li><div><b>Add the addendum to the document list; state the change in one line</b>“Rev. 1 adds Addendum 3: (6) added 24" box trees at the north lot. Base bid +$3,840.”</div></li>
<li><div><b>Send to every GC quoted</b>Confirm by phone they're using Rev. 1 and discarding the original.</div></li>
</ol>`,
  ex: `<p>6 × $640 (24" box add unit price) = $3,840; $140,800 + $3,840 = <strong>$144,640</strong>. No price effect: still send Rev. 1 listing the addendum, “No change in price.”</p>`
},

{ h: "Public bids: the bid form is the proposal",
  lead: "As prime on a public job you fill in the agency's forms exactly; exclusions and conditions can void a low bid.",
  body: `<ul>
<li>Every bidder must offer the same work on the same terms; a condition is an advantage others didn't get.</li>
<li>City of San Diego: “Conditional Bids may be rejected as being non-responsive. Alternative proposals will not be considered unless called for.”</li>
<li>Caltrans: you bid “based on the bid item quantities shown on the Bid Item List,” and “failure to submit the forms and information as specified may result in a nonresponsive bid.”</li>
<li>Your clarifications go in before bid day as RFIs or bidder inquiries; answers come back as addenda everyone bids.</li>
</ul>`,
  ex: `<p>“Price excludes rock excavation” written on a City bid can throw out the low bid. Ask before bid day; if no answer comes, price the risk (<a href="#m10-1">Module 10</a>) or don't bid. Add no notes, letters or cover pages unless the instructions call for them.</p>`,
  src: "City of San Diego Bid No. K-24-1952-DBB-3-A, Instructions to Bidders 2.6; Caltrans 2018 Standard Specifications 2-1.09 and 2-1.33A."
},

{ h: "Quoting a public prime as a sub",
  lead: "Write the quote in the agency's bid items so the prime can drop it into its bid and its Subcontractor List without calling you.",
  body: `<ul>
<li><strong>By bid item:</strong> item, description, unit, quantity, unit price, extension, exactly as the Bid Item List shows.</li>
<li><strong>Items and percents:</strong> the prime lists each sub's items and percent of each; if you do part of an item, say which part (<a href="#m14-1">Module 14</a>).</li>
<li><strong>Listing data:</strong> company name and city, CSLB #, DIR #, DBE (Disadvantaged Business Enterprise) or SLBE (Small Local Business Enterprise) certification.</li>
<li><strong>Exclusions near zero:</strong> anything you exclude, the prime must price or replace you.</li>
<li><strong>Quote every prime, early on bid day.</strong> The City's documents allow a sub that quotes one bidder to quote others.</li>
</ul>`,
  ex: `<p><strong>11-428704:</strong> Blue Pacific listed Diversified Landscape for all irrigation, items 32–67. Winner ACCU listed a boring sub for part of one item: “Item 66, 54%, boring only.” That is the precision a prime needs from your quote (<a href="#m15-1">Module 15</a>).</p>`,
  deeper: `<p>Caltrans 2018 Standard Specifications 2-1.10: the prime lists each sub performing more than ½ of 1% of the total bid or $10,000, whichever is greater, with business name and location, license number (non-federal-aid contracts), public works contractor registration number, bid item numbers, percent of each item, and a description when less than 100% of an item. Section 3-1.03: no contractor or sub may be awarded public work unless registered with DIR.</p>`,
  src: "Caltrans 2018 Standard Specifications 2-1.10, 3-1.03; Caltrans Bid Summary and ACCU bid book, contract 11-428704; City of San Diego Bid No. K-24-1952-DBB-3-A, Instructions to Bidders 17."
},

{ h: "Sample sub quote · 11-431064 bid items",
  lead: "Real items and quantities from the SR-905 job; company and prices made up. Grouped rows here only to fit the screen; a real quote lists every item separately.",
  exLabel: "Sample quote (real bid items; made-up company and prices)",
  ex: `<p><strong>[COMPANY] · Landscape &amp; Irrigation</strong> · CSLB #[n] (C-27) · DIR #[n] · <strong>Quote #22-118</strong> to all prime bidders · Caltrans 11-431064, SR-905 landscaping, Caliente Ave to La Media Rd · Opening 05/17/2022 · Addendum 1 (05/12/2022) acknowledged · Prevailing wage included</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Description</th><th>Unit</th><th class="num">Qty</th><th class="num">Unit price</th><th class="num">Amount</th></tr></thead>
<tbody>
<tr><td>21</td><td>Roadside clearing</td><td>LS</td><td class="num">1</td><td class="num">42,000.00</td><td class="num">42,000.00</td></tr>
<tr><td>22–23</td><td>Rock mulch 94,100 SQFT @ 3.10; rock blanket 3,780 SQFT @ 13.50</td><td>SQFT</td><td class="num"></td><td class="num"></td><td class="num">342,740.00</td></tr>
<tr><td>24–25</td><td>Weed germination 116,000 SQYD @ 0.40; packet fertilizer 14,700 EA @ 0.18</td><td></td><td class="num"></td><td class="num"></td><td class="num">49,046.00</td></tr>
<tr><td>26</td><td>Plant (Group K) 24" box</td><td>EA</td><td class="num">440</td><td class="num">395.00</td><td class="num">173,800.00</td></tr>
<tr><td>27</td><td>Plant (Group Z) palm</td><td>EA</td><td class="num">90</td><td class="num">1,050.00</td><td class="num">94,500.00</td></tr>
<tr><td>28–30</td><td>Groups A (No. 1) 6,880 @ 6.40; B (No. 5) 2,120 @ 18.50; U (No. 15) 310 @ 115.00</td><td>EA</td><td class="num">9,310</td><td class="num"></td><td class="num">118,902.00</td></tr>
<tr><td>31</td><td>Plant establishment work (750 working days)</td><td>LS</td><td class="num">1</td><td class="num">98,000.00</td><td class="num">98,000.00</td></tr>
<tr><td>32–34</td><td>Gravel mulch Types 1–3: 115,000 @ 2.25; 79,500 @ 2.20; 27,100 @ 1.95</td><td>SQFT</td><td class="num">221,600</td><td class="num"></td><td class="num">486,495.00</td></tr>
<tr><td>35</td><td>Wood mulch</td><td>CY</td><td class="num">3,290</td><td class="num">40.00</td><td class="num">131,600.00</td></tr>
<tr><td>36</td><td>Edging</td><td>LF</td><td class="num">6,200</td><td class="num">8.25</td><td class="num">51,150.00</td></tr>
<tr><td>64</td><td>Compost</td><td>CY</td><td class="num">1,180</td><td class="num">38.00</td><td class="num">44,840.00</td></tr>
<tr><td></td><td colspan="4"><strong>Planting subtotal (17 items)</strong></td><td class="num"><strong>1,633,073.00</strong></td></tr>
<tr><td>37</td><td>Control and neutral conductors</td><td>LS</td><td class="num">1</td><td class="num">98,000.00</td><td class="num">98,000.00</td></tr>
<tr><td>38–40</td><td>RCVs: 1" 33 @ 410; 1 1/2" 100 @ 455; 2" 21 @ 505</td><td>EA</td><td class="num">154</td><td class="num"></td><td class="num">69,635.00</td></tr>
<tr><td>41–44</td><td>48-station controllers and enclosures 164A, 165A, 166A, 166B: 13,800 / 13,800 / 16,200 / 13,800</td><td>EA</td><td class="num">4</td><td class="num"></td><td class="num">57,600.00</td></tr>
<tr><td>45</td><td>3" ductile iron supply line</td><td>LF</td><td class="num">520</td><td class="num">135.00</td><td class="num">70,200.00</td></tr>
<tr><td>46</td><td>2" backflow preventer assembly</td><td>EA</td><td class="num">3</td><td class="num">7,400.00</td><td class="num">22,200.00</td></tr>
<tr><td>47</td><td>Flow sensor</td><td>EA</td><td class="num">3</td><td class="num">1,250.00</td><td class="num">3,750.00</td></tr>
<tr><td>48</td><td>Tree well sprinkler assembly</td><td>EA</td><td class="num">1,900</td><td class="num">47.00</td><td class="num">89,300.00</td></tr>
<tr><td>49–52</td><td>Riser and pop-up assemblies (gear driven and spray): 210 @ 58; 310 @ 96; 120 @ 48; 1,120 @ 82</td><td>EA</td><td class="num">1,760</td><td class="num"></td><td class="num">139,540.00</td></tr>
<tr><td>53–54</td><td>Gate valves 2" 39 @ 440; 3" 24 @ 820</td><td>EA</td><td class="num">63</td><td class="num"></td><td class="num">36,840.00</td></tr>
<tr><td>55–60</td><td>Plastic supply line 1" to 3" (Sch 40; 3" Class 315): 40,785 @ 4.25; 26,844 @ 4.40; 6,682 @ 5.10; 7,802 @ 6.20; 12,740 @ 8.40; 12,494 @ 11.50</td><td>LF</td><td class="num">107,347</td><td class="num"></td><td class="num">624,597.45</td></tr>
<tr><td></td><td colspan="4"><strong>Irrigation subtotal (24 items)</strong></td><td class="num"><strong>1,211,662.45</strong></td></tr>
<tr><td></td><td colspan="4"><strong>Total, items 21–60 and 64 (41 items)</strong></td><td class="num"><strong>2,844,735.45</strong></td></tr>
</tbody></table></div>`,
  body: `<p>Group letters per the Caltrans plant table: A = No. 1, B = No. 5, U = No. 15, K = 24" box, Z = palm. Quote unit prices to the cent as you want them carried; on Caltrans bids the unit price governs.</p>`,
  src: "Caltrans 11-431064 Bid Item List and Special Provisions 20-3.01B(2)(a) plant group table. Prices are made up."
},

{ h: "Sample sub quote · listing data and terms",
  lead: "The last page gives the prime everything it needs to list you and the few conditions a prime can live with.",
  exLabel: "Sample quote, continued",
  ex: `<p><strong>For your Subcontractor List:</strong> [Company], [City], CA · CSLB #[n] · DIR #[n] · Items 21–36 (100%), 37–60 (100%), 64 (100%) · DBE certified: [yes/no, #]</p>
<p><strong>Items not quoted (for the prime to cover):</strong> 1–20 (general, traffic control, storm water), 61–62 PVC conduit and sleeves (boring by others), 63 hydroseed, 65 subsurface locator, 66 electric service for irrigation, 67 water meter charges, 68 irrigation water service charges, 69 mobilization.</p>
<p><strong>Clarifications (3):</strong> (1) Quantities per the Bid Item List; paid on measured quantities per Caltrans specifications. (2) Traffic control for our work by the prime under item 6. (3) Establishment covers the full 750 working days per SP 20-4, including four seasonal watering schedules.</p>
<p><strong>Terms:</strong> prevailing wage and certified payroll included · valid 60 days from opening · bonds at an added [x]% if requested in writing before bid (PCC 4108) · payment and retention per subcontract and state law · [name, title, signature, date]</p>`,
  body: `<p>The “items not quoted” list is a coverage map for the prime, not an exclusion of work inside your items.</p>`,
  deeper: `<p>Real comparison: winner Griffith ($4,247,463.10) listed subs for hydroseed (63, 100%), electrical (65, 66), storm water (10, 11, 13), traffic control (6 at 64%, 7, 8, 9) and solid waste and clearing (20, 21), but no landscape sub for planting and irrigation. Second-place Marina Landscape ($4,254,436.10) listed Turboscape for item 35 at 34%, “wood mulch.” Your quote may be used in full, in part, or not at all.</p>`,
  src: "Caltrans 11-431064 Bid Summary (list of subcontractors), bid opening 05/17/2022."
},

{ h: "Sample GC proposal · page 1",
  lead: "Made-up San Diego job, company and prices.",
  exLabel: "Sample proposal",
  ex: `<p><strong>[COMPANY] · Landscape &amp; Irrigation</strong> · [Address], San Diego · CSLB #[n] (B, C-27) · DIR #[n] · [phone] · [email]<br><strong>PROPOSAL #26-041</strong> · 07/08/2026 · valid 30 days<br><strong>To:</strong> Harbor Peak Builders (made-up GC), Attn: Chief Estimator · <strong>Project:</strong> Mission Valley Medical Office Building (made-up) · Bid 07/09/2026</p>
<p><strong>Documents priced:</strong> L-1.0 to L-6.0, 100% CD set dated 06/12/2026 · Specs 32 84 00, 32 91 13, 32 93 00 dated 06/12/2026 · Addendum 1 (06/24/2026), Addendum 2 (07/01/2026) · Geotechnical report 03/15/2026</p>
<div class="tablewrap"><table>
<thead><tr><th>#</th><th>Scope</th><th class="num">Price</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Irrigation</strong> (32 84 00, L-3.0 to L-3.2) from the downstream side of the backflow: smart controller, flow sensor, master valve; (14) RCVs; drip zones with filter and regulator kits; spray and rotor zones; 2" Sch 40 mainline; laterals, wire, testing, controller charts, as-builts</td><td class="num">$48,600</td></tr>
<tr><td>2</td><td><strong>Soil prep and fine grading</strong> (32 91 13): (1) agronomic test; amendments per report up to spec rates; fine grade ±0.1 ft</td><td class="num">$14,200</td></tr>
<tr><td>3</td><td><strong>Trees</strong> (32 93 00, L-4.0): (14) 24" box, (4) 36" box; staking per 4/L-5.0; root barrier within 5' of paving</td><td class="num">$21,400</td></tr>
<tr><td>4</td><td><strong>Shrubs and groundcover</strong> (L-4.0, L-4.1): (420) #5, (1,210) #1, flats as shown</td><td class="num">$26,300</td></tr>
<tr><td>5</td><td><strong>Mulch</strong>: 3" shredded bark, all planting areas, about 15,600 SF</td><td class="num">$9,800</td></tr>
<tr><td>6</td><td><strong>Stabilized DG and boulders</strong> (L-2.0): 3,200 SF with steel header; (22) boulders, 2–3 ton</td><td class="num">$12,700</td></tr>
<tr><td>7</td><td><strong>90-day maintenance and establishment</strong> after acceptance of planting</td><td class="num">$7,800</td></tr>
<tr><td></td><td><strong>BASE BID</strong> (48,600 + 14,200 + 21,400 + 26,300 + 9,800 + 12,700 + 7,800)</td><td class="num"><strong>$140,800</strong></td></tr>
</tbody></table></div>`
},

{ h: "Sample GC proposal · page 2",
  lead: "Alternates, unit prices, inclusions, exclusions, clarifications, schedule and terms on one page, all traceable to the recap.",
  exLabel: "Sample proposal, continued",
  ex: `<div class="tablewrap"><table>
<thead><tr><th>Alternates</th><th class="num">Price</th></tr></thead>
<tbody>
<tr><td>Alt. 1 (bid form): upsize (6) 24" box to 36" box</td><td class="num">Add $4,950</td></tr>
<tr><td>Alt. 2 (bid form): delete boulders</td><td class="num">Deduct $3,600</td></tr>
<tr><td>Alt. 3: maintenance 90 days → 12 months</td><td class="num">Add $18,600</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Unit prices (changes up to 15% of quantity)</th><th class="num">Add</th><th class="num">Deduct</th></tr></thead>
<tbody>
<tr><td>#1 shrub installed</td><td class="num">$38</td><td class="num">$22</td></tr>
<tr><td>#5 shrub installed</td><td class="num">$78</td><td class="num">$50</td></tr>
<tr><td>24" box tree, staked</td><td class="num">$640</td><td class="num">$520</td></tr>
<tr><td>RCV with box</td><td class="num">$640</td><td class="num">$480</td></tr>
<tr><td>Drip tubing, per LF</td><td class="num">$4.10</td><td class="num">$2.60</td></tr>
</tbody></table></div>
<p><strong>Includes:</strong> (2) mobilizations; submittals, as-builts, controller charts; (1) soil test; non-prevailing wage labor.</p>
<p><strong>Excludes:</strong> permits and fees · meter and connection fees · backflow and enclosure (plumbing) · 120V and connection at controller (electrical) · sleeves (we provide layout) · rough grading · soil import/export · rock or debris removal · hazardous materials · traffic control · night or weekend work · bonds (added 2.5%) · damage by others.</p>
<p><strong>Clarifications:</strong> rough grade turned over at ±0.1 ft · L-4.1 count (1,210 #1) used over legend (1,150) · maintenance water by owner through permanent meter · priced as specified; equals on request.</p>
<p><strong>Schedule:</strong> about 6 weeks, 5-person crew, after turnover; tree order approval 4 weeks before planting. <strong>Warranty:</strong> per 32 93 00 from acceptance; excludes vandalism, owner neglect, loss of water or power. <strong>Terms:</strong> monthly progress billing; retention per subcontract; insurance certificates per subcontract; valid 30 days.</p>
<p>Submitted by ______ [Name, Title] Date ____ · Accepted (GC) ______ Date ____</p>`
},

{ h: "Sending, and checking AI drafts",
  lead: "Send a signed PDF early, confirm receipt by phone, and verify every word an AI drafted.",
  body: `<div class="twocol">
<div><h3>Sending</h3><ul>
<li>Subject: “Landscape &amp; Irrigation Proposal · Mission Valley MOB (medical office building) · Bid 07/09 · [Company]”</li>
<li>First line: proposal #, base bid, addenda included</li>
<li>Three notes max: “Backflow and controller power excluded (plumbing, electrical). Sleeves included per your scope sheet. Alternates 1–3 separate.”</li>
<li>Signed PDF plus the GC's form; also upload to BuildingConnected or PlanHub if the GC uses it</li>
<li>Call: “Did you get it? Any questions?” Log who you spoke to. Know the estimator's name a week ahead.</li>
</ul></div>
<div><h3>AI drafting (How to Make a Bid, Step 8)</h3><ul>
<li>Input: plans and specs, priced lines with quantities, exclusions list</li>
<li>Check every quantity, size and product against the estimate</li>
<li>Delete anything that promises excluded work</li>
<li>Open every sheet and detail cited; AI invents plausible detail numbers</li>
<li>Strip “complete,” “all,” “fully functional,” “per plans and specs”</li>
</ul></div>
</div>`,
  watch: `<p>“(18) 36" box trees” in an AI draft when you priced 24" box is a $10,000 problem with your signature on it.</p>`
},

{ h: "Mistakes that cost money",
  lead: "Small on paper, expensive on the job (sample-job numbers).",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Result</th><th class="num">Cost</th></tr></thead>
<tbody>
<tr><td>Addendum 3 (6 trees) not listed</td><td>Build free or argue</td><td class="num">6 × $640 = $3,840</td></tr>
<tr><td>“Complete irrigation,” POC unstated</td><td>400 LF of 2" pipe to a distant meter</td><td class="num">400 × $14 = $5,600</td></tr>
<tr><td>#5 unit price at cost ($62.29), not $78</td><td>Owner adds 120 shrubs</td><td class="num">120 × $15.71 = $1,885.20</td></tr>
<tr><td>Validity 90 days, nursery quote 30</td><td>$15,000 tree quote rises 8%</td><td class="num">$1,200</td></tr>
<tr><td>Ten loose exclusions</td><td>GC plugs $1,500 each, carries the next sub</td><td class="num">The job</td></tr>
<tr><td>Same proposal to GCs with different scope sheets; exclusions written onto a public bid form; unsigned or editable file at the last minute</td><td>Plugs, disputes, non-responsive bid</td><td class="num"></td></tr>
</tbody></table></div>
<p>The first four total $12,525.20 on a $140,800 job, about 9%: most or all of the profit.</p>`,
  ex: `<p><strong>GC calls 30 minutes before bid: “You're $9,000 under the next sub.”</strong> Ask which categories; open the recap; check sheets and addenda. Missed something (jute netting on L-2.1)? Say so, add it ($6,400), send Rev. 1 now. Didn't? Hold the number and explain. Never cut price on hearing a competitor's number; that is how bid shopping starts.</p>`
},

{ h: "Proposal review checklist",
  lead: "Score before sending: 2 = done and checked, 1 = done not checked, 0 = missing. Choices are saved in this browser.",
  t: "scorer", id: "proposalcheck",
  items: [
    ["Documents listed", "Every plan sheet with its date, every spec section, every addendum by number and date"],
    ["Totals add up", "Line items add up to the base bid, checked by a second person"],
    ["Quantities match the recap", "Every count and size in the words matches what you priced"],
    ["POC and edges stated", "Point of connection, controller power, sleeves and rough grade turnover are clear"],
    ["Exclusions are specific", "Each names an item and who provides it; nothing shown on your sheets is excluded"],
    ["GC scope sheet answered", "Every line answered: included, excluded or priced separately; matches the proposal"],
    ["Alternates and unit prices", "Priced with markup, labeled add or deduct, and kept separate from the base bid"],
    ["Schedule and establishment", "Duration, phases, lead times, establishment period and start match the specs"],
    ["Terms", "Validity no longer than supplier quotes; payment, insurance and bond notes included"],
    ["Signed PDF, sent early", "On letterhead, signed, sent at least 2 hours before bid time, receipt confirmed"]
  ],
  bands: [
    [18, "Send it", "Ready to go."],
    [14, "Fix first", "Fix the 0s and 1s before you send."],
    [0, "Not ready", "Stop and work through the template again."]
  ]
},

{ t: "terms", h: "Words to know",
  lead: "Module-specific terms. The full list is in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Proposal / quote / scope letter", "A sub's written offer: scope, price, terms."],
    ["Scope by line item", "Price broken into work types, each described and priced."],
    ["Inclusion", "An item you state you are providing, to remove doubt."],
    ["Exclusion", "A specific item near your scope that someone else provides."],
    ["Clarification / assumption", "How you read an unclear item, or a condition your price depends on."],
    ["Plug", "Amount a GC adds to a sub's number for a missing item."],
    ["Bid leveling", "Comparing sub proposals on one sheet and adding plugs."],
    ["Scope sheet", "A GC's list of what each trade's price must include."],
    ["No qualified bids", "Rule that bids may not carry exclusions or conditions."],
    ["Alternate", "An option priced separately as an add or deduct."],
    ["Voluntary alternate", "An option you offer that the documents didn't request."],
    ["Add / deduct unit price", "Price per unit for adding or removing work after award; deducts are lower."],
    ["Unit price limit", "The change size (e.g. 15% of an item) beyond which unit prices stop applying."],
    ["Allowance", "Fixed amount carried for work not yet priceable; unused money returns to the owner."],
    ["Minimum change order", "Floor price for any change, covering a trip."],
    ["Validity period", "How long the price holds; not longer than supplier quotes."],
    ["Revision (Rev. 1)", "Numbered, dated replacement proposal stating what changed."],
    ["Plant establishment", "Post-planting period of watering, weeding and replacement."],
    ["Type 1 plant establishment", "Caltrans full-maintenance establishment; 750 working days on 11-431064."],
    ["Warranty / guarantee", "Promise to replace failed plants or fix work for a set period."],
    ["Mobilization", "Moving crew and equipment onto site; each trip costs money."],
    ["Conditional bid", "A public bid with conditions added; may be rejected as non-responsive."],
    ["Subcontractor List", "Form where a public prime lists subs, items and percents."],
    ["Extension", "Unit price × quantity."],
    ["Items not quoted", "List on a sub's public quote showing which bid items the prime must still cover."]
  ]
},

{ t: "quiz", id: "m13", h: "Check yourself",
  lead: "Tap an answer to check it.",
  qs: [
    { q: "Your $140,000 private proposal carries ten loose exclusions; the GC plugs each at $1,500. Your leveled number?", a: ["$140,000", "$141,500", "$155,000"], c: 2, why: "$140,000 + 10 × $1,500 = $155,000, likely no longer low." },
    { q: "Spec 32 84 00 lists the backflow preventer in the irrigation section. Your library excludes backflow. You:", a: ["Keep the standard exclusion", "Include it, or call the GC before excluding", "Move it to clarifications"], c: 1, why: "Excluding work specified in your section makes you incomplete; include it or get the GC to reassign it." },
    { q: "Deleting (22) boulders saves $2,420 material, $187.55 tax and $992 setting labor. What credit do you offer?", a: ["Deduct $3,600", "Deduct $4,140 (with 15% markup)", "Deduct $2,420"], c: 0, why: "A deduct returns direct cost; overhead, supervision and the loader stay." },
    { q: "An add alternate's direct cost is $16,187 and your markup is 15%. You quote about:", a: ["$16,187", "$18,600", "$32,374"], c: 1, why: "$16,187 × 1.15 = $18,615.05, rounded to $18,600." },
    { q: "Unit prices apply to changes up to 15% of each item. On (1,210) #1 groundcover, the owner adds 300. What applies?", a: ["Your add unit price × 300", "Unit prices to 181; the change is priced separately", "Nothing; changes are free under 15%"], c: 1, why: "1,210 × 0.15 = 181.5; 300 exceeds the limit, so it gets a new price." },
    { q: "An RFI on controller location is unanswered at bid time on a private job. You:", a: ["Say nothing", "State how you priced it as a clarification citing the RFI number", "Exclude the controller"], c: 1, why: "A stated assumption fixes exactly what your price covers." },
    { q: "As prime on a City bid you're worried about rock. Can you write “excludes rock excavation” on the bid form?", a: ["Yes, if in writing", "No; a conditional bid may be rejected as non-responsive", "Only with a cover letter"], c: 1, why: "All bidders must bid the same terms; ask before bid day instead." },
    { q: "You'll do all of items 37–60 on a Caltrans job except the boring part of one item. What must your quote give the prime?", a: ["A lump sum with an exclusions list", "Unit prices by bid item, license and DIR numbers, items and percents, and a description of the partial item", "Your standard private proposal"], c: 1, why: "The prime must list your items, percents and a description of partial items (Std. Specs 2-1.10)." },
    { q: "Addendum 3 adds six 24\" box trees after you sent a $140,800 proposal; your add price is $640 each. Rev. 1 base bid?", a: ["$141,440", "$144,640", "$145,600"], c: 1, why: "6 × $640 = $3,840; $140,800 + $3,840 = $144,640, issued as a numbered revision." },
    { q: "The GC's scope sheet puts sleeves in landscape; your attached proposal excludes them. Fix?", a: ["Leave both; the proposal governs", "Answer the scope line clearly and make the proposal say the same", "Delete the scope sheet"], c: 1, why: "Two documents that disagree create a dispute before the job starts." }
  ]
},

{ t: "practice", id: "m13", h: "Practice assignments",
  lead: "Real bid items, a real plan set, and a real GC.",
  items: [
    { h: "Quote 11-428704 to a prime", hrs: 1, d: "<p>Using <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a> and your Module 15 prices, write a sub quote for the planting and irrigation items (20–69, leaving out what you'd sub or not do, such as electric service). Follow the 11-431064 sample: every item with unit, quantity, unit price and extension; license, DIR and certifications; items and percents for the Subcontractor List; items not quoted; no more than three clarifications. Check every extension.</p>" },
    { h: "Write a full proposal for a real plan set", hrs: 1, d: "<p>Take a landscape set from a current GC invitation (BuildingConnected or PlanHub) or the <a href=\"https://www.sandiego.gov/cip/bidopps/\" target=\"_blank\" rel=\"noopener\">City of San Diego bid opportunities</a> page and write it as a private GC proposal: dated document list, six or more five-part line items, inclusions, exclusions from the library adjusted to the job, clarifications, two alternates, five unit prices, schedule, establishment, warranty, terms. Then issue Rev. 1 for an invented addendum (three trees added, 200 SF of DG deleted) and score it on the review checklist.</p>" },
    { h: "Price the alternates and unit prices", hrs: 0.5, d: "<p>For that proposal, build worksheets for one add alternate, one deduct and five add/deduct unit prices using the company's real labor rate and markup (Modules 9 and 10).</p>" },
    { h: "Answer a real GC scope sheet", hrs: 0.5, d: "<p>Ask a GC you're prequalifying with for a landscape scope sheet. Answer every line, reconcile it with your proposal, and list the lines you'd call about and what you'd ask.</p>" }
  ]
},

{ h: "Module 13 summary",
  lead: "Clear words get your price carried.",
  body: `<ul>
<li>Know the document: GC proposal, bid-item quote to a public prime, owner-direct proposal, or the agency's form (no conditions).</li>
<li>List dated sheets, specs and every addendum. Write lines as what, where, how much, where it stops, disputed inclusions.</li>
<li>Exclude specific items that belong to others; call on big ones; never exclude your own work.</li>
<li>Alternates and add unit prices carry full markup; deducts return direct cost; state limits and minimums.</li>
<li>Match establishment and warranty periods to the specs; validity no longer than supplier quotes.</li>
<li>Answer every scope sheet line; revise with a numbered Rev. after any addendum; quote public primes by bid item with listing data.</li>
<li>Score the proposal, verify AI drafts, send a signed PDF early, and confirm receipt.</li>
</ul>
<p><strong>Next: <a href="#m14-1">Module 14 · Submitting Public Bids and Bid Day</a></strong></p>`
}
]
});
