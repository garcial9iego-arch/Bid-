(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 8, hours: 5.5, title: "Pricing Materials and Working with Suppliers",
slides: [

{ t: "cover",
  h: "Pricing Materials and Working with Suppliers",
  lead: "Turn the takeoff into delivered, taxed material cost from written sources: leveled quotes, the jobsite tax rate, freight, waste once, and price risk to the buying date.",
  objectives: [
    "Get project quotes with a complete request, read their terms and fine print, and level them line by line",
    "Price specified and sole-source items and follow public-works buying rules (or-equal deadlines, listed suppliers, Buy America)",
    "Apply California sales tax correctly (contractor as consumer, plants as fixtures, jobsite district rate)",
    "Add freight, waste and escalation on their own lines; find long-lead items on bid day",
    "Keep a 90-day price list with history; manage accounts, credit, preliminary notices, joint checks, POs and returns"
  ],
  time: [["Reading and slides", "1.5 h"], ["Practice assignments", "4 h"], ["Module total", "5.5 h"]],
  body: `<p>All prices are made-up practice numbers unless a real source is named. Quantities come from <a href="#m6-1">Module 6</a> and <a href="#m7-1">Module 7</a>; labor is <a href="#m9-1">Module 9</a>.</p>`
},

{ h: "From takeoff to delivered material cost",
  lead: "Every material number comes from a project quote or a price list under 90 days old, never from memory or an old invoice.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Step</th><th>Do</th></tr></thead>
<tbody>
<tr><td>1 · Clean list</td><td>One line per item: size, model, quantity, unit</td></tr>
<tr><td>2 · Mark specified items</td><td>Brand and model named, or "no substitutions"</td></tr>
<tr><td>3 · Split by supplier type</td><td>Irrigation house, nursery, bulk yard, specialty (boulders, edging, enclosures)</td></tr>
<tr><td>4 · Request quotes same day</td><td>Two or three per list; log date sent</td></tr>
<tr><td>5 · Price from your list meanwhile</td><td>A check number for each quote</td></tr>
<tr><td>6 · Level</td><td>Line by line on one sheet; fill every gap</td></tr>
<tr><td>7 · Round to buy units</td><td>Full sticks, spools, rolls, loads</td></tr>
<tr><td>8 · Tax</td><td>Jobsite rate, with the rate and lookup date written down</td></tr>
<tr><td>9 · Freight, escalation, lead times</td><td>Each on its own line</td></tr>
<tr><td>10 · Carry to unit prices</td><td>Material per head, per plant, per CY</td></tr>
</tbody></table></div>
<div class="tablewrap"><table>
<thead><tr><th>Price type</th><th>What it is</th><th>Use</th></tr></thead>
<tbody>
<tr><td>List (MSRP, manufacturer's suggested retail price)</td><td>Counter price before discount</td><td>Almost never</td></tr>
<tr><td>Contractor / tier</td><td>Your account discount, set by volume</td><td>Small jobs, checks, price list</td></tr>
<tr><td>Project quote</td><td>Written price for one job's list, usually below tier</td><td>Every commercial bid of any size</td></tr>
</tbody></table></div>`,
  watch: `<p>PVC (polyvinyl chloride) pipe, copper wire and brass move in months. Ask your rep what tier you're on and what volume reaches the next one; project quotes beat tier pricing while your volume is still small.</p>`
},

{ h: "Buy units: lengths, spools, rolls, loads, tons",
  lead: "The takeoff counts what goes in the ground; suppliers sell in fixed units. Convert and round up on the pricing sheet, not in the takeoff.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Material</th><th>Takeoff unit</th><th>Sold as</th><th>Do</th></tr></thead>
<tbody>
<tr><td>PVC pipe</td><td>LF</td><td>Priced per LF, sold in 20-ft sticks</td><td>Round to full sticks</td></tr>
<tr><td>Valve wire</td><td>LF</td><td>Spools (500, 1,000, 2,500 ft)</td><td>Full spools, by color</td></tr>
<tr><td>Drip line</td><td>LF</td><td>Rolls (100, 250 ft)</td><td>Full rolls</td></tr>
<tr><td>Fittings</td><td>EA</td><td>Each or by box or bag</td><td>Check box count</td></tr>
<tr><td>Plants</td><td>EA by size</td><td>Each; groundcover may be by the flat</td><td>Ask count per flat</td></tr>
<tr><td>Mulch, compost, soil</td><td>CY</td><td>By the truckload (10, 20, 40 CY)</td><td>Full loads</td></tr>
<tr><td>Rock, cobble, boulders</td><td>CY or EA</td><td>Often by the ton</td><td>Yard's tons per CY, in writing</td></tr>
</tbody></table></div>`,
  ex: `<p>If a yard says its rock runs about 1.4 tons per CY (example), 10 CY = 14 tons. Every rock differs.</p>`,
  watch: `<p>A "1,000 ft spool" on one quote and a "2,500 ft spool" on another are not the same line. Read the pack size.</p>`
},

{ h: "Irrigation supply houses and accounts",
  lead: "Open accounts with at least two irrigation distributors before the first bid, and work through the outside rep, not the counter.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Supplier</th><th>Notes</th></tr></thead>
<tbody>
<tr><td><strong>SiteOne Landscape Supply</strong></td><td>National; several San Diego County branches including 5805 Kearny Villa Rd. Bought San Diego-based Hydro-Scape Products in 2016. Named Calsense source on Caltrans 11-428704.</td></tr>
<tr><td><strong>Ewing Outdoor Supply</strong> (formerly Ewing Irrigation)</td><td>National, family-owned; San Diego County branches.</td></tr>
<tr><td><strong>Horizon Distributors</strong></td><td>San Diego branch at 7366 Engineer Rd; irrigation, turf, power equipment.</td></tr>
</tbody></table></div>
<p>Get each outside rep's cell and email, and ask who the Rain Bird, Hunter, Toro and Calsense manufacturer reps are; they help with specified products, submittals and job pricing.</p>
<p><strong>Account setup:</strong> legal name, CSLB license and classes, tax ID, owners, bank and three trade references. Settle the tax setup with the company CPA first (tax-paid vs. resale certificate, e.g. for plants). Read the personal guarantee before the owner signs, ideally with counsel. List authorized buyers; require a PO or job name on every charge; ask about job accounts on large work. Approval takes days: open two irrigation, two nursery and one bulk account before bidding.</p>`,
  watch: `<p>Branch addresses and names change; verify on each supplier's site.</p>`,
  src: "SiteOne branch locator (store 102, 5805 Kearny Villa Rd); Horizon Distributors San Diego store page; SiteOne press release on the Hydro-Scape acquisition (Jan. 2016); 11-428704 Special Provisions 20-2.06B(2)(a)."
},

{ h: "Nurseries, growers and bulk yards",
  lead: "Large plant lists may not exist yet in the size and count you need, and bulk delivery can cost as much as the material: call early and ask per-load terms.",
  body: `<ul>
<li><strong>Wholesale nurseries</strong> (trade accounts): e.g. <strong>Village Nurseries</strong> (San Diego landscape center on Governor Drive, formerly Miramar Wholesale Nurseries) and <strong>Devil Mountain Wholesale Nursery</strong> (Carmel Valley Rd, a SiteOne partner).</li>
<li><strong>Native and specialty growers</strong> for natives, succulents, erosion-control plants; Caltrans and City jobs often specify natives.</li>
<li><strong>Tree growers and brokers</strong> for 24" box and up, often out of county; brokers assemble orders one nursery can't fill.</li>
<li><strong>Compost and mulch:</strong> the City's <a href="https://www.sandiego.gov/environmental-services/miramar/greenery/cmw" target="_blank" rel="noopener">Miramar Greenery</a> sells by the CY, posted prices include sales tax. Private yards usually add tax on the invoice.</li>
<li><strong>Soil yards:</strong> ask for a soil test or data sheet when specs set organic content. <strong>Rock yards and quarries:</strong> DG, cobble, boulders, often by the ton.</li>
<li>Ask every bulk yard: price per CY or ton, truck size, delivery per load, delivery radius.</li>
</ul>`,
  ex: `<p>11-428704 needed 1,460 one-gallon, 110 five-gallon ghost aloes, 43 Canary Island and Eldarica pines in 24" boxes and 61,975 iceplant cuttings: send the list to two or three nurseries the week you decide to bid. 11-431064 restricted sources: "Plant source from San Diego and Orange County only," and rock "closely resembling 'San Diego Tan Cobble' available from KRC Rock, Southwest Boulder &amp; Stone, or Decorative Stone Solutions." When plans name sources, start there.</p>`,
  src: "Village Nurseries acquisition of Miramar Wholesale Nurseries (trade press, 2013); SiteOne branch locator, store 1215 (Devil Mountain, 4343 Carmel Valley Rd); City of San Diego, Miramar Greenery Products, Pricing and Pickup; 11-428704 plans PL-1; 11-431064 plans PL-1 (note 10, rock mulch requirements)."
},

{ t: "scorer", id: "plantqc", h: "Nursery visit · plant quality checklist",
  lead: "Walk the nursery before a big order or when specs require inspection. Score a sample of each plant. 2 = yes, 1 = partly, 0 = no. Saved in this browser.",
  items: [
    ["Right name and size", "Botanical name on the tag matches the plant list; container size matches (#1, #5, #15, 24\" box)"],
    ["Healthy color", "Normal leaf color for the species; no heavy yellowing, burn or bare stems"],
    ["No pests or disease", "No insects, webbing, scale, spots or rot on leaves, stems or soil surface"],
    ["Roots fill the pot, not circling", "Roots hold the soil together without thick circling roots at the outside"],
    ["Not too big for its pot", "Top in proportion to container; no roots grown out of drain holes into the ground"],
    ["Good structure", "Trees: one straight leader unless multi-trunk species; no broken limbs or deep wounds"],
    ["Trunk sound", "No cracks, sunscald or girdling ties; stands without the nursery stake, or nearly"],
    ["Even across the block", "Most plants in the block match the one checked, not just the front row"],
    ["Enough quantity", "Full count shown, or a written grow-out date for the rest"],
    ["Clean of weeds", "Few weeds in the containers"]
  ],
  bands: [
    [17, "Buy", "Confirm price, count and delivery date in writing."],
    [12, "Ask questions", "Have the nursery pull weak plants or show another block before you commit."],
    [0, "Look elsewhere", "Check another nursery or request a substitute through the designer."]
  ],
  body: `<p>Bring the plant list, tape, camera and flagging. Photograph tags and problems; on a spec job the inspector can reject plants at delivery at your cost.</p>`,
  deeper: `<p>Many specs cite ANSI Z60.1, the American Standard for Nursery Stock, for how container and box sizes, heights and caliper are measured. Read the section for the plant types on your list.</p>`
},

{ h: "Availability, box trees and long-lead items",
  lead: "Confirm availability and lead time on bid day; a low price on plants or controllers you can't get on schedule is worthless.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Why slow</th><th>Do</th></tr></thead>
<tbody>
<tr><td>Controllers, central-control or radio</td><td>Built or programmed to order; vendor software and communications setup</td><td>Lead time in writing; order right after award</td></tr>
<tr><td>Large backflows and enclosures</td><td>Not always stocked; enclosures built to order</td><td>Confirm stock; price enclosure separately</td></tr>
<tr><td>Box and specimen trees</td><td>Limited supply in size and species</td><td>Tag (reserve) at the grower; written hold, deposit and payment terms</td></tr>
<tr><td>Large counts of one plant, cuttings</td><td>Contract growing (nursery grows to order)</td><td>Months needed and deposit; sign only after your contract is signed</td></tr>
<tr><td>Purple (recycled water) parts and signs</td><td>Thin stock</td><td>Rep checks each part number</td></tr>
<tr><td>Sole-source brand items</td><td>One supplier, one stock</td><td>Call the named source before bid day</td></tr>
</tbody></table></div>
<p><strong>Box trees, check:</strong> box size, height, spread and caliper per spec; single leader; sound box with no escaped roots; uniformity. <strong>Ask:</strong> hold period, deposit, truck type and trees per load, who unloads (forklift or crane), any guarantee (usually none after it leaves the yard).</p>`,
  ex: `<p>11-428704: 43 Group K pines (item 26), and the Special Provisions put tree hole and basin work in the Group K payment, so the per-tree price carried tree, freight, hole, basin and planting labor. The Calsense vendor had to "install any necessary software and conduct any initial software or proprietary website setup configuration": a vendor service to book ahead. 11-430674 called for 741,405 iceplant cuttings and about 37,350 container plants: contract-grow scale.</p>`,
  watch: `<p>If a specified plant isn't available: get the nursery's "not available until [month]" in writing, ask for alternates, RFI before the question deadline (<a href="#m12-1">Module 12</a>); with no answer, price the specified plant and state the assumption (<a href="#m13-1">Module 13</a>). Never quietly price a cheaper substitute.</p>`,
  src: "11-428704 Bid Summary item 26; Special Provisions 20-3.02D (tree hole and basin payment), 20-2.06B(2)(a), 20-10.02B(1); 11-430674 Bid Item List."
},

{ h: "Quote requests",
  lead: "Send your takeoff, not the plans: without your list each supplier counts its own quantities and the quotes can't be compared.",
  body: `<p><strong>Package:</strong> takeoff list in estimate order (size, model, quantity, unit); relevant spec sections, e.g. 32 84 00 Planting Irrigation and 32 93 00 Plants, with no-substitution items marked; legend and detail sheets; job address or cross streets (tax and freight); schedule; bid date and your quote deadline 3 to 5 days earlier; owner, public or private, and GC.</p>`,
  exLabel: "Email template",
  ex: `<p><strong>Subject:</strong> Quote request: [Project], bid [date], irrigation material</p>
<p>We're bidding [Project] at [address, city] for [GC or agency], due [date]. Please send a project quote by [date].</p>
<p>Attached: material list (quantities and models), spec section [32 84 00], legend and details [L-5.0 to L-5.3].</p>
<p>Please show unit price per line with tax and delivery separate; price validity and lead times on controllers, backflows and valves; substitutions, exclusions and minimum charges. Schedule: irrigation [month/year], planting [month/year], delivered to [city].</p>
<p>[Name] · [Company] · [phone] · [email]</p>`,
  watch: `<p>For nurseries, attach the plant list (botanical name, size, quantity) and ask availability and contract growing. Follow up by phone two days later; reps triage near bid day.</p>`
},

{ h: "Reading a quote: terms and fine print",
  lead: "A number without terms is a guess: confirm unit prices, models, tax, freight, expiration, lead times, exclusions and substitutions on every quote.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Phrase</th><th>Means</th><th>Do</th></tr></thead>
<tbody>
<tr><td>"Subject to prior sale" / "stock on hand"</td><td>Price holds only while stocked</td><td>Ask quantity on hand and a reserve</td></tr>
<tr><td>"Prices firm for 30 days"</td><td>Can change after that</td><td>Hold to buying date, or escalate</td></tr>
<tr><td>"F.O.B. (free on board) our yard"</td><td>Price at their yard; title passes at loading</td><td>Add freight; decide who unloads</td></tr>
<tr><td>"Freight TBD"</td><td>Delivery unknown</td><td>Get a number or price your own</td></tr>
<tr><td>"Plus applicable taxes"</td><td>Tax excluded</td><td>Add jobsite rate</td></tr>
<tr><td>"Or equal" / "alt"</td><td>Product swapped</td><td>Check spec; price the specified item if no substitutions</td></tr>
<tr><td>"Quantities per customer list"</td><td>Priced your counts</td><td>Good: your takeoff carries quantity risk</td></tr>
<tr><td>"NIC" (not in contract) / "by others"</td><td>Line excluded</td><td>Price from another source</td></tr>
<tr><td>"Special order, non-returnable"</td><td>Yours once ordered</td><td>Order only after a signed contract</td></tr>
<tr><td>"Restocking fee 20%" (example)</td><td>Returns cost a share</td><td>Keep overage small on expensive items</td></tr>
<tr><td>Net 30 / COD</td><td>Due 30 days after invoice / cash on delivery</td><td>Cash flow (<a href="#m3-1">Module 3</a>)</td></tr>
</tbody></table></div>`,
  watch: `<p>A quote valid 30 days, bid in 10, award 45 days later, irrigation 60 days after that: expired long before you buy. Get unclear terms clarified by email and file the answer with the quote.</p>`
},

{ h: "Leveling quotes",
  lead: "Compare adjusted totals, never quoted totals: plug every exclusion and substitution first.",
  exLabel: "Worked example: nursery quotes (made-up numbers)",
  ex: `<p>Plant list: 12 box trees, 18 fifteen-gallon trees, 220 five-gallon, 1,120 one-gallon.</p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th class="num">A</th><th class="num">B</th><th class="num">C</th></tr></thead>
<tbody>
<tr><td>Quoted total before tax</td><td class="num">$16,950</td><td class="num">$17,520</td><td class="num">$13,600</td></tr>
<tr><td>Container delivery</td><td class="num">Excluded: + $175</td><td class="num">Included</td><td class="num">Included</td></tr>
<tr><td>Box tree freight (trucker quote)</td><td class="num">F.O.B.: + $450</td><td class="num">+ $450</td><td class="num">+ $450</td></tr>
<tr><td>Scope gap</td><td class="num"></td><td class="num"></td><td class="num">No box trees: + 12 × $310 = $3,720</td></tr>
<tr><td>Substitution</td><td class="num">None</td><td class="num">None</td><td class="num">Groundcover swap; spec plant + 480 × $0.85 = $408</td></tr>
<tr><td>Validity / stock</td><td class="num">30 days; 5-gal "subject to availability"</td><td class="num">60 days; full count on hand</td><td class="num">45 days</td></tr>
<tr><td><strong>Adjusted total</strong></td><td class="num"><strong>$17,575</strong></td><td class="num"><strong>$17,970</strong></td><td class="num"><strong>$18,178</strong></td></tr>
</tbody></table></div>`,
  body: `<p><strong>Decision:</strong> A is $395 lower but holds 30 days with uncertain 5-gallons. Ask A to hold to the planting month and reserve the 5-gallons; if not, carry B. C's low number was a scope gap plus a substitution, the most common leveling trap. The same pattern in irrigation: a quote $1,470 low that excludes a $2,100 controller and $150 delivery is the highest once adjusted.</p>`,
  watch: `<p>Never accept an "equal" on a specified item without approval.</p>`
},

{ h: "Specified and sole-source products",
  lead: "When the specs name the product and source, every bidder pays about the same: price it exactly and compete on labor and markup.",
  body: `<p>11-428704 Special Provisions required Calsense controllers and flow sensors from SiteOne, Kearny Villa Road, and printed the prices:</p>
<div class="tablewrap"><table>
<thead><tr><th>Item</th><th class="num">Each</th><th class="num">Qty</th><th class="num">Extended</th></tr></thead>
<tbody>
<tr><td>'97B' 40-station CS3000</td><td class="num">$9,743.66</td><td class="num">1</td><td class="num">$9,743.66</td></tr>
<tr><td>'97C', '97E', '97F' 40-station</td><td class="num">$9,034.35</td><td class="num">3</td><td class="num">$27,103.05</td></tr>
<tr><td>'97D' 32-station</td><td class="num">$8,496.23</td><td class="num">1</td><td class="num">$8,496.23</td></tr>
<tr><td>'97G' 40-station with Yagi antenna</td><td class="num">$9,692.41</td><td class="num">1</td><td class="num">$9,692.41</td></tr>
<tr><td>'97A' modification kit</td><td class="num">$6,708.64</td><td class="num">1</td><td class="num">$6,708.64</td></tr>
<tr><td>FM-2 2" flow sensor</td><td class="num">$543.25</td><td class="num">4</td><td class="num">$2,173.00</td></tr>
<tr><td>2-wire master valve decoder and cable</td><td class="num">$824.90</td><td class="num">1</td><td class="num">$824.90</td></tr>
<tr><td colspan="3"><strong>Total, excluding tax and delivery; "good until April 14, 2022"</strong></td><td class="num"><strong>$64,741.89</strong></td></tr>
</tbody></table></div>`,
  ex: `<p>At today's Chula Vista rate of 8.75%: $64,741.89 × 0.0875 = $5,664.92, about $70,407 before delivery. Bids opened Sept. 8, 2021 with 120 working days; a late controller purchase could pass the April 2022 date, so confirm the quote and its date before bidding. The same specs list the branch at (858) 560-1611 for flow sensors and (858) 560-6611 for controllers: confirm the right contact.</p>`,
  src: "11-428704 Special Provisions 20-2.05B, 20-2.06B(2)(a), 20-10.02B(1); CDTFA sales and use tax rates (Chula Vista 8.750%, effective Oct. 1, 2026). See Module 15."
},

{ h: "Public-works buying rules",
  lead: "Named products, or-equal deadlines, listed suppliers, certificates and Buy America all constrain what you can price; read them before you take a cheaper quote.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Rule</th><th>Real example</th><th>Effect on price</th></tr></thead>
<tbody>
<tr><td>Named product and source</td><td>11-428704: Calsense from SiteOne, prices in the specs</td><td>No cheaper swap</td></tr>
<tr><td>Or-equal deadline</td><td>City K-24-1952: equals due no later than 5 working days after the Notice of Intent to Award, on the City's Product Submittal Form (Whitebook 4-6, Trade Names)</td><td>Bid the specified product unless approval in time is certain</td></tr>
<tr><td>Listed suppliers locked</td><td>K-24-1952: listed subs and suppliers can't be substituted without City written approval; supplier substitution requests due in writing at least 10 days before the new supplier provides material</td><td>Firm quote from any supplier you list</td></tr>
<tr><td>Buy America (newer Caltrans)</td><td>11-4C0034 (San Ysidro, opened May 4, 2023) SP 6-1.04E: plastic and polymer-based products, including PVC, US-manufactured, with a manufacturer's certificate of compliance on each delivery</td><td>Supplier confirms US-made pipe and fittings and paperwork before bid day</td></tr>
<tr><td>Certificates and submittals</td><td>Caltrans and City specs</td><td>Product data sheets with the quote</td></tr>
</tbody></table></div>`,
  watch: `<p>Buy America applies by contract, and Caltrans revised its version for projects advertised after Oct. 6, 2023. Read section 6-1.04 on every Caltrans job.</p>`,
  deeper: `<p>CPD 22-13 (Dec. 13, 2022): the Build America, Buy America Act in the Infrastructure Investment and Jobs Act extended Buy America to nonferrous metals, plastic or polymer-based products, glass, lumber and drywall. CPD 23-9 (Nov. 1, 2023) adopted the revised federal guidance (2 CFR 184) for projects submitted for advertisement after Oct. 6, 2023. 6-1.04A excludes tools, construction equipment and temporary work not incorporated. Public Contract Code §4110 sets penalties for substituting listed subs without approval; the City's bid book cites it.</p>`,
  src: "Caltrans 11-4C0034 Special Provisions 6-1.04; Caltrans CPD 22-13 and CPD 23-9; City of San Diego K-24-1952 Bidding Documents, Instructions to Bidders H and Supplementary Special Provisions 4-6; 11-428704 Special Provisions 20-2.06B(2)(a)."
},

{ h: "Sales tax: who pays and which rate",
  lead: "On a lump-sum job the contractor is the consumer of materials it installs: tax is your cost, built into unit prices at the jobsite rate, not a line on the customer's bill.",
  body: `<ul>
<li>Pipe, fittings, wire, valves, mulch, soil, rock, sod and flowers: materials. You pay sales tax at purchase (or use tax if not charged).</li>
<li>Plants, trees and shrubs: generally <strong>fixtures</strong>; the landscape contractor is the retailer, and on lump-sum work tax is generally measured by your plant cost. For bidding: budget tax on plant cost.</li>
<li>Whether you buy plants tax-paid or on resale, and whether you need a seller's permit, is a CPA decision made before the first commercial job.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Rates effective Oct. 1, 2026</th><th class="num">Rate</th></tr></thead>
<tbody>
<tr><td>City of San Diego, unincorporated county, Carlsbad, Coronado, Encinitas, Poway, Santee</td><td class="num">7.75%</td></tr>
<tr><td>El Cajon, Oceanside, Vista</td><td class="num">8.25%</td></tr>
<tr><td>La Mesa</td><td class="num">8.50%</td></tr>
<tr><td>Chula Vista, Del Mar, Escondido, Imperial Beach, Lemon Grove, National City, San Marcos, Solana Beach</td><td class="num">8.75%</td></tr>
</tbody></table></div>
<p>Statewide base 7.25% plus district taxes. Look up every job on the <a href="https://www.cdtfa.ca.gov/taxes-and-fees/rates.aspx" target="_blank" rel="noopener">CDTFA rate table</a> and record rate and date: $40,000 of material is $3,500 in Chula Vista, $3,100 in San Diego.</p>`,
  watch: `<p>Don't add tax twice: Miramar Greenery and some quotes include it. Rates change, sometimes twice a year; no fixed tax % in the template.</p>`,
  deeper: `<p>CDTFA Publication 9 (Feb. 2025): "Construction contractors are always the consumers of materials that they furnish and install in the performance of a lump sum contract." Landscape section: "Plants, trees, and shrubs are generally considered fixtures, and the contractor is considered the retailer of these items when they are installed in connection with their services... In the case of lump sum contracts, the selling price of the plants, trees, and shrubs is generally regarded as the cost price to the landscape contractor." Regulation 1521 (materials Appendix A, fixtures Appendix B). Time-and-material contracts can change who is the retailer. District taxes: "the contractor's jobsite is considered the place of business"; district use tax applies when you install at a jobsite with a higher rate than you paid, and you pay the difference. Bid rule: budget the jobsite rate, or the higher of pickup and jobsite.</p>`,
  src: "CDTFA Publication 9 (Feb. 2025), contract types, landscape contractors, district taxes; CDTFA Regulation 1521; CDTFA California City and County Sales and Use Tax Rates (effective Oct. 1, 2026). <a href=\"https://www.cdtfa.ca.gov/formspubs/pub9.pdf\" target=\"_blank\" rel=\"noopener\">cdtfa.ca.gov/formspubs/pub9.pdf</a>"
},

{ h: "Freight, waste and escalation",
  lead: "Each is its own line with a stated basis, so it can be checked and changed without touching unit costs.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Basis</th><th>Example (made up)</th></tr></thead>
<tbody>
<tr><td>Supply house delivery</td><td>Free over a minimum; small-order or special-trip charges</td><td>$65 add-on trip</td></tr>
<tr><td>Bulk loads</td><td>Per load; partial costs about the same as full</td><td>190 CY mulch at $28 = $5,320; 5 loads × $225 = $1,125 (21%)</td></tr>
<tr><td>Box trees</td><td>Flatbed trips; unloading machine</td><td>43 trees, 30 per trip, $1,350 per trip: $2,700 = $62.79 per tree, 18% on a $350 tree</td></tr>
<tr><td>Long items, will-call</td><td>Special truck; your driver and truck time (<a href="#m9-1">Module 9</a>)</td><td></td></tr>
<tr><td>Waste</td><td>Once, in one place (if the takeoff carries it, don't add again); then round to buy units</td><td>Pipe 5–10%, wire 10–15%, bulk 5–15%; plants exact (replacements in establishment)</td></tr>
<tr><td>Escalation</td><td>Material bought later × expected rise × months ÷ 12</td><td>$60,000 × 4% × 8 ÷ 12 = $1,600</td></tr>
</tbody></table></div>
<p>Escalation tools: a supplier hold to the buying date; buying long-lead items early after award and storing them; on private work, a validity or adjustment clause in the proposal (<a href="#m13-1">Module 13</a>).</p>`,
  deeper: `<p>Caltrans bid books include "Opt Out of Payment Adjustments for Price Index Fluctuations." Under Standard Specifications 9-1.07, payment on asphalt items adjusts when a monthly crude-oil-based index moves more than 5% from bid time; bidders can opt out (the 11-428704 winner left it blank). It covers asphalt only: pipe, controllers and plants have no index, so the landscape contractor carries that risk. Taxability of delivery charges depends on who delivers and how it is billed (CDTFA Regulation 1628).</p>`,
  src: "11-428704 Bid Summary (subcontractor list), Special Provisions 2-1.33; Caltrans Standard Specifications 9-1.07; Caltrans California Statewide Crude Oil Price Index page; Caltrans memo CPD 24-11; CDTFA Regulation 1628."
},

{ h: "Worked example · full irrigation list",
  lead: "An 8-zone retail pad in El Cajon (8.25%), sub to a GC. Practice prices.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item (buy quantity basis)</th><th class="num">Qty</th><th class="num">Unit</th><th class="num">Extended</th></tr></thead>
<tbody>
<tr><td>1½" RP backflow / lockable enclosure</td><td class="num">1 / 1</td><td class="num">$1,150 / $620</td><td class="num">$1,770.00</td></tr>
<tr><td>1½" master valve / flow sensor</td><td class="num">1 / 1</td><td class="num">$185 / $310</td><td class="num">$495.00</td></tr>
<tr><td>12-station controller, stainless enclosure</td><td class="num">1</td><td class="num">$1,480.00</td><td class="num">$1,480.00</td></tr>
<tr><td>1" RCV with flow control</td><td class="num">8</td><td class="num">$92.00</td><td class="num">$736.00</td></tr>
<tr><td>Valve boxes (8 RCV + MV + FS)</td><td class="num">10</td><td class="num">$36.00</td><td class="num">$360.00</td></tr>
<tr><td>2" Class 315 main (420 + 5% = 441 → 23 sticks)</td><td class="num">460 LF</td><td class="num">$1.35</td><td class="num">$621.00</td></tr>
<tr><td>1" Sch 40 (1,280 + 10% = 1,408 → 71 sticks)</td><td class="num">1,420 LF</td><td class="num">$0.58</td><td class="num">$823.60</td></tr>
<tr><td>¾" Sch 40 (1,900 + 10% = 2,090 → 105 sticks)</td><td class="num">2,100 LF</td><td class="num">$0.44</td><td class="num">$924.00</td></tr>
<tr><td>4" Sch 40 sleeves (110 → 6 sticks)</td><td class="num">120 LF</td><td class="num">$2.60</td><td class="num">$312.00</td></tr>
<tr><td>6" PRS spray with nozzle / gear rotor</td><td class="num">150 / 24</td><td class="num">$9.80 / $24.50</td><td class="num">$2,058.00</td></tr>
<tr><td>½" / ¾" × 12" swing joints</td><td class="num">150 / 24</td><td class="num">$4.10 / $6.20</td><td class="num">$763.80</td></tr>
<tr><td>Quick couplers</td><td class="num">4</td><td class="num">$48.00</td><td class="num">$192.00</td></tr>
<tr><td>Fittings counted (lot) / primer and cement (3 sets)</td><td class="num">1 / 3</td><td class="num">$640 / $26</td><td class="num">$718.00</td></tr>
<tr><td>14 AWG control (2,300 → one 2,500 spool) / 12 AWG common (1,150 → one 2,500 spool)</td><td class="num">1 / 1</td><td class="num">$285 / $410</td><td class="num">$695.00</td></tr>
<tr><td>Waterproof connectors</td><td class="num">2 boxes</td><td class="num">$18.00</td><td class="num">$36.00</td></tr>
<tr><td colspan="3"><strong>Material subtotal</strong></td><td class="num"><strong>$11,984.40</strong></td></tr>
<tr><td colspan="3">Tax 8.25%</td><td class="num">$988.71</td></tr>
<tr><td colspan="3">Delivery: two drops free, one add-on trip</td><td class="num">$65.00</td></tr>
<tr><td colspan="3">Escalation: buy in 4 months, rep expects about 2%</td><td class="num">$239.69</td></tr>
<tr><td colspan="3"><strong>Irrigation material cost</strong></td><td class="num"><strong>$13,277.80</strong></td></tr>
</tbody></table></div>`,
  ex: `<p>$13,277.80 ÷ 8 = $1,659.73 per zone. POC and controller items (backflow, enclosure, master valve, flow sensor, controller) are $3,745.00, 31% of the subtotal: fixed items drive cost per zone up on small jobs. On a single-zone order (22 sprays, one valve, 400 LF of lateral) tax and a $65 small-order trip add $129.74 (16%) to an $835.40 subtotal that already carries pipe rounded to full sticks.</p>`,
  watch: `<p>Check backflow and controller models against the legend and the water purveyor's rules before pricing.</p>`
},

{ h: "Worked example · plants and bulk loads",
  lead: "A City of San Diego job (7.75%) using the best leveled nursery quote and per-load bulk pricing. Practice prices.",
  body: `<div class="twocol">
<div><h3>Plants</h3>
<div class="tablewrap"><table>
<thead><tr><th>Size</th><th class="num">Qty × unit</th><th class="num">Extended</th></tr></thead>
<tbody>
<tr><td>24" box</td><td class="num">12 × $310</td><td class="num">$3,720.00</td></tr>
<tr><td>15-gal</td><td class="num">18 × $95</td><td class="num">$1,710.00</td></tr>
<tr><td>5-gal</td><td class="num">220 × $18.50</td><td class="num">$4,070.00</td></tr>
<tr><td>1-gal shrub / groundcover</td><td class="num">640 × $7.25 / 480 × $6.75</td><td class="num">$7,880.00</td></tr>
<tr><td>Subtotal</td><td></td><td class="num">$17,380.00</td></tr>
<tr><td>Box tree freight / container delivery</td><td></td><td class="num">$625.00</td></tr>
<tr><td>Tax budget on plant cost</td><td class="num">× 0.0775</td><td class="num">$1,346.95</td></tr>
<tr><td><strong>Total</strong></td><td></td><td class="num"><strong>$19,351.95</strong></td></tr>
</tbody></table></div></div>
<div><h3>Bulk</h3>
<div class="tablewrap"><table>
<thead><tr><th>Material</th><th class="num">Material + delivery + tax</th><th class="num">Total</th></tr></thead>
<tbody>
<tr><td>Mulch 11,500 SF × 3" = 106.5 CY + 10% = 117.1 → 3 × 40 CY = 120 × $28</td><td class="num">$3,360 + $675 + $260.40</td><td class="num">$4,295.40</td></tr>
<tr><td>Compost 11.5 × 4 = 46 → 50 CY × $32</td><td class="num">$1,600 + $450 + $124.00</td><td class="num">$2,174.00</td></tr>
<tr><td>Rock 1,200 SF × 3" = 11.1 CY × 1.4 = 15.6 → 16 T × $95</td><td class="num">$1,520 + $250 + $117.80</td><td class="num">$1,887.80</td></tr>
<tr><td><strong>Bulk total</strong></td><td></td><td class="num"><strong>$8,357.20</strong></td></tr>
</tbody></table></div></div>
</div>`,
  ex: `<p>Per box tree, all-in material: $310 + $24.03 tax + $37.50 freight share = $371.53, before labor, staking, amendments and equipment. Per 1-gallon: $7.25 × 1.0775 = $7.81 + $175 ÷ 1,358 container plants = $0.13, about $7.94. Bulk delivery is $1,375 of $8,357.20 (16%); on mulch alone 20%.</p>`,
  watch: `<p>Establishment replacements are priced in establishment (<a href="#m16-1">Module 16</a>), not added here. For tax-included yards drop the tax column on that line and ask whether delivery is taxed.</p>`,
  src: "Tax treatment: CDTFA Publication 9 (landscape contractors, lump-sum contracts). City of San Diego rate 7.75% (CDTFA, effective Oct. 1, 2026)."
},

{ h: "Negotiating and supplier relationships",
  lead: "Terms, holds and service cost the supplier less than price cuts and are often worth more to you; the best pricing goes to customers who are easy to work with and loyal.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Ask for</th><th>Why</th><th>Wording</th></tr></thead>
<tbody>
<tr><td>Project pricing</td><td>Below tier</td><td>"Can you sharpen this as a project quote? We buy the whole package from one house if we win."</td></tr>
<tr><td>Price hold</td><td>Removes escalation</td><td>"Can you hold through [month], or tell me now how you'll adjust?"</td></tr>
<tr><td>Manufacturer job pricing</td><td>Maker cuts distributor cost on big jobs</td><td>"Can you ask the [brand] rep for job pricing on heads and valves?"</td></tr>
<tr><td>Staged delivery</td><td>Cuts freight and site storage</td><td>"Three drops at no charge?"</td></tr>
<tr><td>Longer terms</td><td>Bridges GC payment lag</td><td>"Net 60 on this order?"</td></tr>
<tr><td>Return allowance</td><td>Unopened overage back without fee</td><td>"Will you take back unopened stock items, no restocking fee?"</td></tr>
</tbody></table></div>
<ul>
<li>Never show one supplier another's quote or prices. "B is $500 lower but holds 30 days; can you get closer?" keeps A's 90-day hold and may recover part of the gap.</li>
<li>Send complete requests; report win or loss ("second by 3%"); buy from the house whose quote won; keep a main and a backup in each category so you climb the main's tiers; pay on time; meet manufacturer reps.</li>
</ul>`
},

{ h: "The 90-day price list",
  lead: "One owner, one list, no price older than 90 days, and history kept instead of overwritten.",
  body: `<p><strong>Columns:</strong> category / CSI section · item and size · maker and model · unit · unit price before tax · previous price · change % = (new − old) ÷ old · supplier and rep · source (quote, invoice, counter) · date priced · next update (+90 days) · lead time and notes.</p>
<p><strong>Upkeep, monthly on a fixed day:</strong> sort by next update; enter last month's quotes and invoices first; send each supplier one list of remaining due items; flag moves over your trigger (e.g. 5%); send the team a two-line note ("PVC up 6%, wire flat") and recheck open bids that used old prices.</p>
<div class="tablewrap"><table>
<thead><tr><th>1" Sch 40, per LF (made up)</th><th class="num">Jan</th><th class="num">Apr</th><th class="num">Jul</th><th class="num">Oct</th><th class="num">Jan–Oct</th></tr></thead>
<tbody><tr><td>Price / change</td><td class="num">$0.52</td><td class="num">$0.55 / +5.8%</td><td class="num">$0.58 / +5.5%</td><td class="num">$0.61 / +5.2%</td><td class="num">+17.3%</td></tr></tbody></table></div>
<p>Bid in October, buy pipe in April: two more 5% steps on $5,000 = $5,000 × 1.05² − $5,000 = $512.50 of risk. Get a hold or carry escalation.</p>`,
  ex: `<p>Start with about 50 lines covering most bids: PVC by size, Sch 40 fittings, sprays, rotors, valves, boxes, wire, drip line, 1- and 5-gallon plants, mulch per CY. Track marker items (1" and 3" PVC, 14 AWG, a common spray, a 1" valve, 1- and 5-gallon plants, mulch) for the trend.</p>`,
  watch: `<p>The list is for budgets and quote checks; large bids still need project quotes. Trends reverse: a written hold beats your forecast.</p>`
},

{ h: "Credit, preliminary notices and joint checks",
  lead: "Supplier credit is cash flow, and suppliers protect themselves with notices, bonds and joint checks; never leave a supplier unpaid after you've been paid for its material.",
  body: `<ul>
<li><strong>Net 30:</strong> due 30 days after invoice (or end of following month, per terms). If the GC pays on day 60 to 75, net 30 covers only part of the gap (<a href="#m3-1">Module 3</a>); ask for longer terms on big orders.</li>
<li><strong>Preliminary notice:</strong> suppliers routinely send a 20-day preliminary notice to owner and GC to protect payment rights.</li>
<li><strong>Joint check:</strong> payable to you and the supplier; both endorse. GCs and suppliers ask for them on large orders.</li>
<li>An unpaid supplier can claim against the job, and the GC will hear about it.</li>
</ul>`,
  deeper: `<p>Private works: suppliers have mechanics lien rights (Civil Code §8000 et seq.). Public works: no lien on public property; stop payment notices and payment bond claims (Civil Code §9000 et seq.). A public-works preliminary notice under Civil Code §9300 is generally required before using those remedies, except for claimants in direct contract with the direct contractor. Joint checks: under <em>Post Bros. Construction Co. v. Yoder</em> (1977), a supplier that endorses a joint check, absent another agreement on allocation, is generally treated as paid what it was owed up to the check amount. Joint check agreements are contracts: have counsel review one and check current law.</p>`,
  src: "California Civil Code §§8000 et seq. (private works), §§9000 et seq. and §9300 (public works preliminary notice); Post Bros. Constr. Co. v. Yoder, 20 Cal.3d 1 (1977)."
},

{ h: "After award: POs, deliveries and returns",
  lead: "A purchase order locks the prices you bid; a signed packing slip without notes says you received everything in good order.",
  body: `<ol class="steps">
<li><div><b>Re-confirm the quote</b>"We won [Project]; is quote #[ ] still good?" Changes in writing.</div></li>
<li class="hl"><div><b>Write the PO</b>Number, job name and address, quote number, items with quantity and unit price, tax, delivery terms and dates, receiver, billing address.</div></li>
<li><div><b>Long-lead first</b>Controllers, backflows, box trees; submittals usually come first (<a href="#m16-1">Module 16</a>).</div></li>
<li><div><b>Stage deliveries</b>Material on site gets stolen, broken or run over.</div></li>
<li><div><b>Receive</b>Count against slip and PO, check models and sizes, inspect plants before the truck leaves, write shortages and damage on the slip, get the driver's signature.</div></li>
<li><div><b>Match invoice to PO</b>Before paying.</div></li>
</ol>
<p><strong>Returns:</strong> stock items often returnable unopened, with a restocking fee and time limit; special orders (controllers, large backflows, custom enclosures) and delivered plants generally not. Returns become a credit memo on the job's account. Keep leftovers in a valued yard inventory and use them first.</p>`,
  ex: `<p>Made up: 6 spare sprays at $9.80 + 2 valves at $92.00 = $242.80, less 20% restocking $48.56 = $194.24 credit. A spare $1,480 controller you can't return is a $1,480 loss: keep overage off special orders.</p>`
},

{ h: "Mistakes that cost money",
  lead: "Each one has a one-line control.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>Cost</th><th>Control</th></tr></thead>
<tbody>
<tr><td>Old invoice pricing</td><td>5–15% low on items that moved (example)</td><td>Project quote or list under 90 days</td></tr>
<tr><td>Comparing quoted totals</td><td>Picking a quote with holes</td><td>Level line by line</td></tr>
<tr><td>Wrong city rate, or tax twice</td><td>7.75–8.75% of material</td><td>Jobsite lookup; note tax-included quotes</td></tr>
<tr><td>No freight on trees and bulk</td><td>15–25% of that material</td><td>Freight lines</td></tr>
<tr><td>No rounding to sticks, spools, loads</td><td>Small per line, large per job</td><td>Round on the pricing sheet</td></tr>
<tr><td>"Equal" on a no-substitution item</td><td>Pay the difference after award</td><td>Price the specified product</td></tr>
<tr><td>Expired quote at buying date</td><td>Price rise before purchase</td><td>Hold or escalation line</td></tr>
<tr><td>Long-lead missed</td><td>Delays, idle crews, possible late-finish damages</td><td>Lead times on bid day; order after award</td></tr>
<tr><td>Late quote used unread</td><td>Gap or substitution carried into the bid</td><td>15-minute check; plug gaps or use the trusted quote; second person checks the total (<a href="#m14-1">Module 14</a>)</td></tr>
</tbody></table></div>`
},

{ t: "terms", h: "Words to know",
  lead: "Material pricing terms. Full list in the <a href=\"#dict\">Bid Dictionary</a>.",
  terms: [
    ["Contractor price / tier", "Your account discount level, set by volume."],
    ["Project quote", "Written price for one job's material list."],
    ["Outside rep / manufacturer rep", "Supplier's bid and quote contact / maker's local rep for specified items and job pricing."],
    ["Lead time / long-lead item", "Order to delivery / items taking weeks or months (controllers, large backflows, box trees)."],
    ["Price hold", "Supplier's commitment to hold prices to your buying date."],
    ["Or equal / substitution", "Product offered in place of the specified one; needs approval."],
    ["Sole source", "Specs allow one product or one supplier."],
    ["Leveling", "Side-by-side line comparison with gaps filled before comparing totals."],
    ["F.O.B.", "Free on board: where the price applies and title passes; \"F.O.B. our yard\" means freight extra."],
    ["NIC / TBD", "Not in contract / to be determined."],
    ["Consumer (sales tax)", "Who owes tax on materials; the contractor on materials it installs."],
    ["Fixture (sales tax)", "Item keeping its identity when installed; plants and trees generally."],
    ["District tax", "Local tax above the 7.25% statewide base; jobsite rate governs."],
    ["CDTFA", "California Department of Tax and Fee Administration."],
    ["Escalation", "Allowance for price rises between bid and purchase."],
    ["Contract growing", "Nursery grows plants to order for your job, usually with a deposit."],
    ["Tagging", "Reserving specific trees at the grower."],
    ["Caliper", "Trunk diameter, measured per spec (often ANSI Z60.1)."],
    ["Buy America", "Contract rule requiring US-made materials; newer Caltrans contracts include PVC."],
    ["Certificate of compliance", "Maker's signed statement that a product meets the specs."],
    ["PO / packing slip", "Your written order / delivery list you annotate before signing."],
    ["Restocking fee / credit memo", "Charge for returns / account credit for a return."],
    ["Preliminary notice", "Supplier's notice to owner and GC protecting payment rights."],
    ["Joint check", "Check payable to you and your supplier."]
  ]
},

{ t: "quiz", id: "m8", h: "Check yourself",
  lead: "Most need a number or a judgment call.",
  qs: [
    { q: "Supplier B quotes $16,950 but excludes a $2,100 controller and charges $150 delivery. A quotes $18,420 all-in. Adjusted, which is lower?", a: ["B by $1,470", "A, because B adjusts to $19,200", "They are equal"], c: 1, why: "16,950 + 2,100 + 150 = 19,200, above A's 18,420." },
    { q: "$40,000 of irrigation material on a Chula Vista lump-sum job (Oct. 2026). Tax budget?", a: ["$2,900 at 7.25%", "$3,100 at 7.75%", "$3,500 at 8.75%"], c: 2, why: "Chula Vista is 8.75%; the contractor is the consumer, so tax goes into your cost." },
    { q: "On a lump-sum job, how do you handle tax on the plants you install?", a: ["Exempt: plants aren't materials", "Budget tax on your plant cost; settle tax-paid vs. resale with your CPA", "Add a sales tax line to the GC invoice"], c: 1, why: "Plants are generally fixtures; on lump-sum work tax is generally measured by your cost." },
    { q: "The 11-428704 Calsense prices total $64,741.89, excluding tax and delivery. With Chula Vista tax at 8.75%, about how much before delivery?", a: ["$64,742", "$70,407", "$75,100"], c: 1, why: "64,741.89 × 1.0875 = 70,406.81." },
    { q: "$60,000 of material bought 8 months after bid; suppliers expect about 4% a year. Escalation?", a: ["$1,600", "$2,400", "$4,800"], c: 0, why: "60,000 × 0.04 × 8 ÷ 12 = 1,600." },
    { q: "11,500 SF of mulch at 3\" plus 10% settling, sold in 40 CY loads. Buy?", a: ["106.5 CY", "117.1 CY", "120 CY (3 loads)"], c: 2, why: "11,500 × 3 ÷ 324 = 106.5 × 1.10 = 117.1, rounded to 3 full loads." },
    { q: "Your takeoff already carries 10% waste on pipe. On the pricing sheet you:", a: ["Add another 10%", "Round up to full 20-ft sticks only", "Leave pipe unrounded"], c: 1, why: "Waste lives in one place; rounding to buy units is still needed." },
    { q: "On K-24-1952, when is a proposed \"or equal\" due?", a: ["With the bid", "No later than 5 working days after the Notice of Intent to Award, on the City's form", "Any time before installation"], c: 1, why: "Whitebook 4-6 Trade Names, as used in K-24-1952; bid the specified product unless approval in time is certain." },
    { q: "A newer Caltrans job's 6-1.04 requires US-made plastic products. Your cheapest PVC quote can't certify origin. What do you do?", a: ["Use it; PVC is exempt", "Price a supplier who confirms US-made pipe with certificates of compliance", "Add 5% and hope"], c: 1, why: "11-4C0034 6-1.04E lists PVC among plastic products that must be US-manufactured, with a certificate on each delivery." },
    { q: "Supplier A is $500 higher than B but holds 90 days vs. 30. Best ask?", a: ["Send A a copy of B's quote", "Tell A that B is lower with a 30-day hold and ask A to get closer", "Switch to B"], c: 1, why: "Keeps A's hold and may recover some of the gap without sharing a competitor's quote." }
  ]
},

{ t: "practice", id: "m8", h: "Practice assignments",
  lead: "By the end you have accounts, real quotes, a leveled comparison and a dated price list.",
  items: [
    { h: "Reps and accounts", hrs: 0.75, d: "<p>Call or visit two irrigation suppliers (SiteOne, Ewing or Horizon), two wholesale nurseries and one bulk yard. Get each outside rep's contact, ask your tier and what moves it, request credit applications, and record delivery charges, minimums and contract-growing terms. Note which products and load sizes <a href=\"https://www.sandiego.gov/environmental-services/miramar/greenery/cmw\" target=\"_blank\" rel=\"noopener\">Miramar Greenery</a> sells.</p>" },
    { h: "Send a real quote request", hrs: 0.75, d: "<p>From a Module 6 or 7 takeoff (or the irrigation items of <a href=\"#lab-11-428704\">11-428704</a>), send the request email to two suppliers with list, specs and schedule. Log dates and follow up by phone in two days.</p>" },
    { h: "Level the quotes", hrs: 0.5, d: "<p>Put the returned quotes side by side: missing items, substitutions, delivery, expiration, lead times, fine-print phrases. Plug the gaps, pick the best adjusted total, and write one sentence on why.</p>" },
    { h: "Tax setup questions", hrs: 0.25, d: "<p>Read the landscape and lump-sum sections of <a href=\"https://www.cdtfa.ca.gov/formspubs/pub9.pdf\" target=\"_blank\" rel=\"noopener\">CDTFA Publication 9</a>. Write three questions for the CPA (plants tax-paid or resale, seller's permit, district use tax reporting) and look up three job addresses on the <a href=\"https://www.cdtfa.ca.gov/taxes-and-fees/rates.aspx\" target=\"_blank\" rel=\"noopener\">CDTFA rate page</a>.</p>" },
    { h: "Build the starter price list", hrs: 0.75, d: "<p>Build the price list with the columns on the price list slide. Enter at least 40 items from your quotes or recent invoices with date priced and next update. Set the monthly upkeep reminder.</p>" },
    { h: "Nursery visit with the checklist", hrs: 0.5, d: "<p>Take a real plant list (or the 11-428704 list in the <a href=\"#lab-11-428704\">Real Bid Lab</a>) to a wholesale nursery. Score three plant types and one box tree, photograph tags and problems, and record the grower's answers on hold, deposit, freight and unloading.</p>" },
    { h: "Price a small job end to end", hrs: 0.5, d: "<p>With your quotes, price an irrigation list, plant list and bulk materials for one small job: buy quantities, unit prices, extensions, tax with rate and date, freight and escalation. Report cost per zone and all-in cost per box tree.</p>" }
  ]
},

{ h: "Module 8 summary",
  lead: "Material cost is written-source unit cost, rounded to buy units, taxed at the jobsite rate, with freight, waste and escalation on their own lines.",
  body: `<ul>
<li>Project quotes for bids; a 90-day price list with history for checks. Send your takeoff, specs, location and schedule.</li>
<li>Read terms and fine print; level line by line. A low total with a gap isn't low.</li>
<li>Specified or sole-source items are priced exactly. On public work, check or-equal deadlines, listed-supplier rules, certificates and Buy America.</li>
<li>Tax is your cost: materials as consumer, plants generally as fixtures; jobsite district rate; CPA sets the buying setup.</li>
<li>Confirm availability and long-lead items on bid day; inspect plants and price box trees to the hole.</li>
<li>Negotiate terms and holds, stay loyal, pay on time; protect payment chains (preliminary notices, joint checks); POs, annotated slips and known return rules after award.</li>
</ul>
<p><strong>Next: <a href="#m9-1">Module 9 · Labor, Production Rates and Equipment</a></strong></p>`
}
]
});
