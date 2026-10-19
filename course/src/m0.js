(window.COURSE_MODULES = window.COURSE_MODULES || []).push({
n: 0, hours: 8, title: "Foundations: Construction Math, Units and Tools",
slides: [

{ t: "cover",
  h: "Foundations: Construction Math, Units and Tools",
  lead: "Estimating is mostly simple math done carefully, in the right units, on the right tools. This module starts from zero and builds the math, the units and the computer skills every later module uses. If you are rusty, start here. If you are sharp, use the drills to prove it and move on.",
  objectives: [
    "Work with whole numbers, decimals, fractions of an inch and percentages without mistakes",
    "Know every unit on a landscape bid form (LF linear feet, SF square feet, SQYD square yards, CY cubic yards, EA each, LS lump sum and more) and convert between them",
    "Find the area of rectangles, triangles, circles and odd shapes, and turn area into cubic yards",
    "Count plants from an area and a spacing, and know the container sizes and Caltrans plant groups",
    "Multiply unit price × quantity, add a bid and find math errors",
    "Read working days, calendar days, due dates and 24-hour time",
    "Use a calculator, a spreadsheet, PDF tools, email and folders like an estimator"
  ],
  time: [["Reading and slides", "4 h"], ["Practice assignments", "4 h"], ["Module total", "8 h"]],
  body: `<p>Every number in this module is either from a real document (the source is named) or labeled as a made-up example for practice. Drills have answers under <strong>Go deeper</strong>. Try each problem first, on paper, then check.</p>`
},

{ h: "How to use this course",
  lead: "Each slide starts in plain words. The colored boxes and the Go deeper section add examples, warnings and fine print.",
  body: `<ul>
<li><strong>Main text</strong> is what you must know. Read it on every slide.</li>
<li><strong>Example</strong> boxes show the idea on a real job or a made-up practice job. Made-up numbers always say so.</li>
<li><strong>Watch out</strong> boxes are mistakes that cost contractors money.</li>
<li><strong>Go deeper</strong> holds extra detail. In this module it also holds the <strong>answers</strong> to the drills.</li>
<li><strong>Words to know</strong>, <strong>Check yourself</strong> (quiz) and <strong>Practice</strong> sit at the end of every module.</li>
<li><strong>Read aloud</strong> (top right) reads the slide to you.</li>
</ul>
<p>After this module, start <a href="#m1-1">Module 1 · How Construction Bidding Works</a>. Module 1 has its own “How to use this course” slide with more detail.</p>`,
  watch: `<p>Don't skip the practice. Reading about math is like reading about trenching. You only get good by doing it.</p>`
},

{ h: "Study habits that work",
  lead: "Short, regular sessions beat one long weekend. Do the math by hand first, then on the calculator.",
  body: `<ol class="steps">
<li><div><b>Set a time</b>30 to 60 minutes, most days. Same time each day if you can.</div></li>
<li><div><b>One slide, one idea</b>Read the slide. Close your eyes and say the main idea out loud.</div></li>
<li class="hl"><div><b>Work every example yourself</b>Copy the numbers onto paper and do the math before you look at the answer.</div></li>
<li><div><b>Write your questions down</b>Keep a “Questions to ask” page. Bring it to your boss or a supplier once a week.</div></li>
<li><div><b>Come back</b>Re-do the drills a week later without looking. What you forget is what to study.</div></li>
</ol>`,
  ex: `<p>Made-up week plan: Monday and Tuesday, numbers and percentages. Wednesday, units and areas. Thursday, volume and plants. Friday, money and the spreadsheet. Saturday, all six drills again.</p>`
},

{ h: "Your bid notebook",
  lead: "A bid notebook is where you keep your words, your formulas, your questions and every bid you work on. It becomes your most useful tool.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Section</th><th>What goes in it</th></tr></thead>
<tbody>
<tr><td><strong>Words to know</strong></td><td>Every new term, in your own words</td></tr>
<tr><td><strong>Formulas</strong></td><td>SF (square feet) ÷ 9 = SQYD (square yards), CF (cubic feet) ÷ 27 = CY (cubic yards), SF × inches ÷ 324 = CY, plants per SF, and so on</td></tr>
<tr><td><strong>Questions to ask</strong></td><td>Things you don't understand yet, with the date you asked and the answer</td></tr>
<tr><td><strong>Bid log</strong></td><td>One line per bid: date, project, who invited you, due date, your price, result</td></tr>
<tr><td><strong>Lessons</strong></td><td>Mistakes you caught or made, and how to avoid them next time</td></tr>
</tbody></table></div>
<p>Paper binder or digital, both work. Digital is easier to search. Paper is easier to carry to a job walk. Many estimators use both.</p>`,
  watch: `<p>Don't trust your memory for formulas on bid day. Under time pressure, people mix up ÷ 9 and ÷ 27. Write the formula sheet once, check it, and keep it in front of you.</p>`
},

{ h: "Quick self-check: where should you start?",
  lead: "Try these five questions on paper. If you get all five right quickly, skim this module and focus on the drills and tools.",
  body: `<ol>
<li>What is 1-1/2 written as a decimal?</li>
<li>What is 8.75% of $2,000?</li>
<li>A bed is 30 ft by 45 ft. How many square feet?</li>
<li>How many square yards is 900 SF (square feet)?</li>
<li>You bid 190 CY (cubic yards) of wood mulch at $50.00 per CY. What is the total for that line?</li>
</ol>`,
  deeper: `<p><strong>Answers:</strong></p>
<ol>
<li>1.5</li>
<li>$2,000 × 0.0875 = $175.00</li>
<li>30 × 45 = 1,350 SF</li>
<li>900 ÷ 9 = 100 SQYD (square yards)</li>
<li>190 × $50.00 = $9,500.00 (this is a real line: 11-428704 item 31, wood mulch, 190 CY, priced at $50.00 by the winning bidder)</li>
</ol>
<p>Missed one? Study the slides on that topic. Missed three or more? Go through every slide in order.</p>`,
  src: "11-428704 Bid Item List item 31; Caltrans Bid Summary, ACCU Construction unit prices."
},

{ h: "Whole numbers and big numbers",
  lead: "Bids use big numbers. Read them by the commas: thousands, then millions.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Written</th><th>Say it</th><th>Where it came from</th></tr></thead>
<tbody>
<tr><td class="num">43</td><td>forty-three</td><td>24" box pine trees, 11-428704 item 26</td></tr>
<tr><td class="num">7,493</td><td>seven thousand four hundred ninety-three</td><td>LF (linear feet) of 4" supply line, item 63</td></tr>
<tr><td class="num">61,975</td><td>sixty-one thousand nine hundred seventy-five</td><td>iceplant cuttings, item 25 (after Addendum 1)</td></tr>
<tr><td class="num">$1,176,120.00</td><td>one million, one hundred seventy-six thousand, one hundred twenty dollars</td><td>winning bid, ACCU Construction, on Caltrans (California Department of Transportation) contract 11-428704</td></tr>
</tbody></table></div>
<ul>
<li>Commas split numbers into groups of three, counting from the right: ones, thousands, millions.</li>
<li>A comma is <strong>not</strong> a decimal point. 1,460 is one thousand four hundred sixty. 1.460 is about one and a half.</li>
</ul>`,
  watch: `<p>Copying 61,975 as 6,1975 or 619,75 happens when people type fast. Always read the number back out loud after you type it.</p>`,
  src: "11-428704 Bid Item List and Addendum 1; Caltrans Bid Summary (opened Sept 8, 2021)."
},

{ h: "Decimals: money and feet",
  lead: "A decimal is a part of a whole. In money, two places after the point are cents. In plan measurements, decimals are parts of a foot, not inches.",
  body: `<ul>
<li><strong>Money:</strong> $0.80 is 80 cents. $12.00 is twelve dollars. Unit prices are usually written with two decimal places.</li>
<li><strong>Feet:</strong> 12.5 ft means twelve and a half feet, which is 12 ft 6 in. It does <strong>not</strong> mean 12 ft 5 in.</li>
<li>To change decimal feet to inches, multiply the decimal part by 12: 0.25 ft × 12 = 3 in.</li>
<li>To change inches to decimal feet, divide by 12: 9 in ÷ 12 = 0.75 ft.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th>Inches</th><th class="num">Decimal feet</th><th>Inches</th><th class="num">Decimal feet</th></tr></thead>
<tbody>
<tr><td>1"</td><td class="num">0.083</td><td>6"</td><td class="num">0.50</td></tr>
<tr><td>2"</td><td class="num">0.167</td><td>8"</td><td class="num">0.667</td></tr>
<tr><td>3"</td><td class="num">0.25</td><td>9"</td><td class="num">0.75</td></tr>
<tr><td>4"</td><td class="num">0.333</td><td>12"</td><td class="num">1.00</td></tr>
</tbody></table></div>`,
  ex: `<p>Made-up example: a plan dimension reads 18'-9". In decimal feet that is 18 + (9 ÷ 12) = 18.75 ft. A tape measure in the field reads the same length as 18 ft 9 in.</p>`,
  watch: `<p>Mixing “feet and inches” with “decimal feet” is one of the most common takeoff mistakes. Pick decimal feet for all your math and convert once.</p>`
},

{ h: "Rounding: how to do it",
  lead: "Rounding makes a number shorter. Look at the digit just after where you want to stop: 5 or more rounds up, 4 or less rounds down.",
  body: `<ol class="steps">
<li><div><b>Decide where to stop</b>Cents (2 places), whole units, or tens.</div></li>
<li><div><b>Look one digit to the right</b>That digit decides.</div></li>
<li class="hl"><div><b>5 to 9: round up. 0 to 4: leave it</b>Then drop the digits after.</div></li>
</ol>
<div class="tablewrap"><table>
<thead><tr><th>Number</th><th>Rounded to</th><th>Result</th></tr></thead>
<tbody>
<tr><td class="num">321.34375</td><td>cents</td><td class="num">321.34</td></tr>
<tr><td class="num">12.8</td><td>whole</td><td class="num">13</td></tr>
<tr><td class="num">274.31</td><td>whole</td><td class="num">274</td></tr>
<tr><td class="num">1,893</td><td>tens</td><td class="num">1,890</td></tr>
</tbody></table></div>
<p><strong>Rounding up</strong> (always to the next whole number) is different. Use it for things you must buy whole: plants, pipe lengths, bags, truckloads. 274.31 plants means you need 275 plants.</p>`,
  ex: `<p>Real example: on 11-428704, the engineer rounded several measured quantities up a little for the bid list. Packet fertilizer added up to 1,893 on the plans, and the bid item says 1,900. Compost added up to 282 CY (cubic yards), and the bid item says 290 CY. See Module 15.</p>`,
  src: "11-428704 plans PQ-1 and Bid Item List items 23 and 68, as analyzed in Module 15."
},

{ h: "When NOT to round",
  lead: "Round only at the end, and never change the numbers an agency gives you on a bid form.",
  body: `<ul>
<li><strong>Don't round in the middle of a calculation.</strong> Keep all the digits until the final answer. Rounding early adds up to real money on big quantities.</li>
<li><strong>Don't round the agency's quantity.</strong> If the bid form says 7,493 LF (linear feet), you price 7,493 LF, not 7,500.</li>
<li><strong>Write unit prices exactly as you mean them.</strong> If your unit price is $0.80, the extension is 61,975 × $0.80. Rounding it to $1.00 adds $12,395.</li>
<li><strong>Follow the bid form's rules for cents.</strong> Many forms say how many decimal places a unit price may have. Read the instructions.</li>
<li><strong>Do round up what you buy.</strong> Your purchase quantity can be bigger than the bid quantity (waste, whole bags, full truckloads). That's a cost, inside your unit price.</li>
</ul>`,
  ex: `<p>Made-up example: you round a unit price of $0.83 down to $0.80 on 61,975 cuttings. 61,975 × $0.03 = $1,859.25 you just gave away. On the real 11-428704 bid, the top two bidders were only $3,585.30 apart in total.</p>`,
  watch: `<p>On a public unit-price bid, the agency usually checks your math. Read the bid instructions to learn what happens if your unit price and your extension don't agree. Often the unit price is what counts, so a typo in a unit price can change your total.</p>`,
  src: "Caltrans Bid Summary 11-428704: ACCU Construction $1,176,120.00, Diversified Landscape Co. $1,179,705.30."
},

{ h: "Fractions of an inch: pipe sizes",
  lead: "Irrigation pipe and fittings are named in inches and fractions. Learn the decimal for each one so your spreadsheet can sort and add them.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Fraction</th><th>Say it</th><th class="num">Decimal</th><th>Where you see it</th></tr></thead>
<tbody>
<tr><td>1/2"</td><td>half inch</td><td class="num">0.5</td><td>Spray head risers, drip fittings</td></tr>
<tr><td>3/4"</td><td>three-quarter inch</td><td class="num">0.75</td><td>Small laterals, rotor inlets, small valves</td></tr>
<tr><td>1"</td><td>one inch</td><td class="num">1.0</td><td>Common valve and lateral size</td></tr>
<tr><td>1-1/4"</td><td>one and a quarter</td><td class="num">1.25</td><td>Laterals, small mainline</td></tr>
<tr><td>1-1/2"</td><td>one and a half</td><td class="num">1.5</td><td>Larger valves (11-428704 item 37), laterals, mains</td></tr>
<tr><td>2"</td><td>two inch</td><td class="num">2.0</td><td>Mainline, valves (item 38)</td></tr>
<tr><td>3"</td><td>three inch</td><td class="num">3.0</td><td>Mainline, master valve (item 39)</td></tr>
<tr><td>4"</td><td>four inch</td><td class="num">4.0</td><td>Large mainline (item 63, 4" Class 315 pipe, a pipe rated for 315 psi, pounds per square inch)</td></tr>
</tbody></table></div>
<p>How to turn any fraction into a decimal: divide the top by the bottom. 3 ÷ 4 = 0.75. For a mixed number like 1-1/4, keep the 1 and add 1 ÷ 4 = 0.25, so 1.25.</p>`,
  deeper: `<p>Pipe sizes are <strong>nominal</strong>: a name, not an exact measurement. A 1" Schedule 40 PVC (polyvinyl chloride, the white plastic pipe) pipe is a little over 1.3" across on the outside. You never need the real outside size for a takeoff, but don't be surprised when the pipe doesn't measure 1.000" with a tape. Module 6 covers pipe classes and schedules.</p>`,
  watch: `<p>In a spreadsheet, type 1-1/4 as 1.25, or put pipe size in a text column. Some programs read 1/4 as a date (January 4).</p>`,
  src: "11-428704 Bid Item List items 37, 38, 39 and 63."
},

{ h: "Percentages: the basics",
  lead: "Percent means “out of 100.” To use a percent in math, change it to a decimal by moving the point two places left.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Percent</th><th class="num">Decimal</th><th>To add it on, multiply by</th></tr></thead>
<tbody>
<tr><td>5%</td><td class="num">0.05</td><td class="num">1.05</td></tr>
<tr><td>8.75%</td><td class="num">0.0875</td><td class="num">1.0875</td></tr>
<tr><td>10%</td><td class="num">0.10</td><td class="num">1.10</td></tr>
<tr><td>15%</td><td class="num">0.15</td><td class="num">1.15</td></tr>
<tr><td>100%</td><td class="num">1.00</td><td class="num">2.00</td></tr>
</tbody></table></div>
<ul>
<li><strong>The part:</strong> amount × decimal. 10% of $5,000 = $5,000 × 0.10 = $500.</li>
<li><strong>The new total:</strong> amount × (1 + decimal). $5,000 plus 10% = $5,000 × 1.10 = $5,500.</li>
<li><strong>What percent is it?</strong> part ÷ whole × 100. $500 ÷ $5,000 = 0.10 = 10%.</li>
</ul>`,
  watch: `<p>The classic mistake is multiplying by 8.75 instead of 0.0875. That makes the tax 100 times too big. If an answer looks crazy, check the decimal point first.</p>`
},

{ h: "Percentages on a bid: worked",
  lead: "Four percentages show up on almost every job: markup, sales tax, retention and how far a bid was from the low bid.",
  body: `<ol class="steps">
<li><div><b>Markup (made-up numbers)</b>Cost $50,000, markup 10%. Price = $50,000 × 1.10 = <strong>$55,000</strong>. Module 10 explains how to choose a markup.</div></li>
<li><div><b>Sales tax on materials (made-up amount)</b>Materials $10,000 at 8.75% (the Chula Vista rate used in Module 8; check yours with the CDTFA, the California Department of Tax and Fee Administration). Tax = $10,000 × 0.0875 = <strong>$875.00</strong>. Materials with tax = $10,875.00.</div></li>
<li class="hl"><div><b>Retention (made-up amount)</b>Your monthly bill is $40,000 and the contract holds back 5%. Held back: $40,000 × 0.05 = $2,000. You receive <strong>$38,000</strong> now and the $2,000 at the end.</div></li>
<li><div><b>Percent over low (real)</b>11-428704: low bid $1,176,120.00. Second bid $1,179,705.30. Difference $3,585.30. $3,585.30 ÷ $1,176,120.00 = 0.0030 = <strong>0.30% over low</strong>.</div></li>
<li><div><b>Percent under the estimate (real)</b>Engineer's estimate $1,516,176.50. Low bid was $340,056.50 under it. $340,056.50 ÷ $1,516,176.50 = <strong>22.4% under</strong>.</div></li>
</ol>`,
  deeper: `<p>Sales tax is a cost the contractor pays on materials it furnishes and installs in California, so it goes inside your prices. Module 8 explains who pays and which rate applies. Look up current rates with the <a href="https://www.cdtfa.ca.gov/taxes-and-fees/sales-use-tax-rates.htm" target="_blank" rel="noopener">CDTFA sales and use tax rates</a> page. Rates change, so check every bid.</p>
<p>Retention rules depend on the contract and on state law for public jobs. Module 16 covers them.</p>`,
  src: "Caltrans Bid Summary 11-428704 (engineer's estimate and bidder totals); CDTFA sales and use tax rates; Module 8 sales tax slides."
},

{ h: "Calculator skills and order of operations",
  lead: "Calculators do exactly what you type, in the order the calculator follows. Learn that order, and estimate the answer in your head first.",
  body: `<div class="twocol">
<div><h3>Order of operations</h3><ol>
<li><strong>P</strong>arentheses first</li>
<li><strong>E</strong>xponents (squares, like 3²)</li>
<li><strong>M</strong>ultiply and <strong>D</strong>ivide, left to right</li>
<li><strong>A</strong>dd and <strong>S</strong>ubtract, left to right</li>
</ol>
<p>Memory trick: “Please Excuse My Dear Aunt Sally.”</p></div>
<div><h3>Examples</h3><ul>
<li>2 + 3 × 4 = 2 + 12 = <strong>14</strong> (not 20)</li>
<li>(2 + 3) × 4 = 5 × 4 = <strong>20</strong></li>
<li>1,350 × 3 ÷ 324 = 4,050 ÷ 324 = <strong>12.5</strong></li>
<li>3.14 × 3² = 3.14 × 9 = <strong>28.26</strong></li>
</ul></div>
</div>
<ol class="steps">
<li><div><b>Estimate first</b>1,350 SF (square feet) at 3" is about 1,400 × 3 ÷ 300 = about 14 CY (cubic yards). Now you know 12.5 is reasonable and 125 is not.</div></li>
<li><div><b>Clear before each problem</b>Press C or AC.</div></li>
<li class="hl"><div><b>Type it twice</b>On anything that goes on a bid, do it twice. If the answers differ, do it a third time.</div></li>
<li><div><b>Write down each step</b>So someone else can check you.</div></li>
</ol>`,
  watch: `<p>Cheap calculators and phone calculators don't all follow the same order. Some do 2 + 3 × 4 = 20. Test yours with that problem. If it gets 20, use parentheses or press = between steps.</p>`
},

{ t: "std", h: "Drill 1 · Numbers and percentages",
  lead: "Do these on paper, then with a calculator. Answers are under Go deeper.",
  body: `<ol>
<li>Write 1-3/4" as a decimal.</li>
<li>Round 3.14159 to two decimal places.</li>
<li>Round 1,460.5 plants up to whole plants.</li>
<li>What is 8.75% sales tax on $12,400 of plants?</li>
<li>Your cost is $20,000. Add a 15% markup. What is the price?</li>
<li>A $60,000 pay application has 5% retention. How much do you receive now?</li>
<li>Real: on 11-428704, Griffith Company bid $1,234,875.85. The low bid was $1,176,120.00. What percent over low was Griffith?</li>
<li>What is 2 + 6 × 5 − 4?</li>
</ol>`,
  deeper: `<p><strong>Answers:</strong></p>
<ol>
<li>1 + 3 ÷ 4 = <strong>1.75</strong></li>
<li><strong>3.14</strong> (the next digit is 1, so leave it)</li>
<li><strong>1,461</strong> (you can't buy half a plant)</li>
<li>$12,400 × 0.0875 = <strong>$1,085.00</strong></li>
<li>$20,000 × 1.15 = <strong>$23,000</strong></li>
<li>$60,000 × 0.05 = $3,000 held. You receive <strong>$57,000</strong>.</li>
<li>$1,234,875.85 − $1,176,120.00 = $58,755.85. ÷ $1,176,120.00 = 0.04996 = <strong>about 5.0% over low</strong>.</li>
<li>6 × 5 = 30 first. 2 + 30 − 4 = <strong>28</strong>.</li>
</ol>`,
  src: "Caltrans Bid Summary 11-428704 (Griffith Company and ACCU Construction totals). Other numbers are made up for practice."
},

{ h: "The units on a landscape bid",
  lead: "Every bid line has a unit. The unit tells you how you'll be paid and how you must measure.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Unit</th><th>Means</th><th>Used for</th><th>Real example (11-428704)</th></tr></thead>
<tbody>
<tr><td><strong>LF</strong></td><td>Linear foot: length</td><td>Pipe, edging, conduit, wire</td><td>4" supply line, 7,493 LF</td></tr>
<tr><td><strong>SF</strong> (SQFT)</td><td>Square foot: area</td><td>Planting areas, DG (decomposed granite), rock mulch, sod</td><td>Private plans use SF most</td></tr>
<tr><td><strong>SQYD</strong></td><td>Square yard = 9 SF</td><td>Weed control, seeding</td><td>Weed germination, 7,020 SQYD</td></tr>
<tr><td><strong>CY</strong></td><td>Cubic yard = 27 CF: volume</td><td>Mulch, compost, soil, rock</td><td>Wood mulch 190 CY, compost 290 CY</td></tr>
<tr><td><strong>ACRE</strong></td><td>43,560 SF</td><td>Big areas, application rates</td><td>Compost at 200 CY per acre (sheet PL-1, the planting legend sheet)</td></tr>
<tr><td><strong>EA</strong></td><td>Each: a count</td><td>Plants, valves, controllers, heads</td><td>Group A plants, 1,460 EA</td></tr>
<tr><td><strong>LS</strong></td><td>Lump sum: one price for the whole item</td><td>Work hard to measure</td><td>Plant establishment work, LS</td></tr>
<tr><td><strong>LB</strong></td><td>Pound: weight</td><td>Fertilizer, seed, soil additives</td><td>Iron sulfate 230 LB</td></tr>
<tr><td><strong>GAL</strong></td><td>Gallon</td><td>Container plant size names, water, liquids</td><td>“No. 1 container” is the 1-gallon size</td></tr>
<tr><td><strong>GPM</strong></td><td>Gallons per minute: water flow</td><td>Sizing valves, pipes, meters</td><td>Flush valve gravel must absorb 1 gpm (specs)</td></tr>
<tr><td><strong>PSI</strong></td><td>Pounds per square inch: water pressure</td><td>Heads, valves, pipe ratings</td><td>Class 315 pipe is rated 315 psi</td></tr>
</tbody></table></div>`,
  watch: `<p>The same material can be paid in different units on different jobs: rock mulch by SF on one job, by CY on another. Always price in the unit printed on <strong>this</strong> bid form.</p>`,
  deeper: `<p>In PVC pipe names, the class number is the pressure rating in psi. Module 6 explains pipe classes. Caltrans uses “SQFT” and “SQYD” on its bid forms; private plans and specs usually say SF.</p>`,
  src: "11-428704 Bid Item List items 21, 22, 27, 29–31, 63, 68; Special Provisions 20-2.10C(8) flush valve; plans PL-1."
},

{ h: "Length: inches, feet, yards, miles",
  lead: "12 inches in a foot, 3 feet in a yard, 5,280 feet in a mile. Most plan math is done in feet.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>From</th><th>To</th><th>Do this</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Inches</td><td>Feet</td><td>÷ 12</td><td>36 in ÷ 12 = 3 ft</td></tr>
<tr><td>Feet</td><td>Inches</td><td>× 12</td><td>1.5 ft × 12 = 18 in</td></tr>
<tr><td>Feet</td><td>Yards</td><td>÷ 3</td><td>90 ft ÷ 3 = 30 yd</td></tr>
<tr><td>Yards</td><td>Feet</td><td>× 3</td><td>20 yd × 3 = 60 ft</td></tr>
<tr><td>Miles</td><td>Feet</td><td>× 5,280</td><td>1.7 mi × 5,280 = 8,976 ft</td></tr>
</tbody></table></div>
<p><strong>A simple rule:</strong> going from a big unit to a small unit, multiply (you get more of them). Going from small to big, divide.</p>`,
  ex: `<p>Real: Module 15 describes 11-428704 as about 1.7 miles of I-805. 1.7 × 5,280 = about 8,976 feet. The job had 7,493 LF (linear feet) of 4" supply line, so the main ran most of the length of the project.</p>`,
  watch: `<p>Spacing on plans is often in inches (“18" o.c. (on center)”), while areas are in feet. Change the inches to feet before you do spacing math: 18 in = 1.5 ft.</p>`
},

{ h: "Area: rectangles, triangles and circles",
  lead: "Area is how much flat ground a shape covers. Multiply two lengths in feet and you get square feet.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Shape</th><th>Formula</th><th>Worked (made-up sizes)</th></tr></thead>
<tbody>
<tr><td><strong>Rectangle or square</strong></td><td>length × width</td><td>45 ft × 30 ft = 1,350 SF (square feet)</td></tr>
<tr><td><strong>Triangle</strong></td><td>base × height ÷ 2</td><td>40 ft base, 25 ft high: 40 × 25 ÷ 2 = 500 SF</td></tr>
<tr><td><strong>Circle</strong></td><td>3.14 × radius × radius</td><td>Tree ring 6 ft across: radius 3 ft. 3.14 × 3 × 3 = 28.26 SF</td></tr>
<tr><td><strong>Half circle</strong></td><td>circle ÷ 2</td><td>20 ft across: 3.14 × 10 × 10 ÷ 2 = 157 SF</td></tr>
<tr><td><strong>Trapezoid</strong> (two parallel sides)</td><td>(side a + side b) ÷ 2 × height</td><td>Median 8 ft wide at one end, 14 ft at the other, 100 ft long: (8 + 14) ÷ 2 × 100 = 1,100 SF</td></tr>
</tbody></table></div>
<ul>
<li><strong>Radius</strong> is center to edge. <strong>Diameter</strong> is edge to edge, through the center. Radius = diameter ÷ 2.</li>
<li><strong>Height</strong> of a triangle is measured straight up from the base, at a right angle, not along the slanted side.</li>
</ul>`,
  watch: `<p>The most common circle mistake: using the diameter instead of the radius. A 6 ft ring with “3.14 × 6 × 6” gives 113 SF, four times too big.</p>`,
  deeper: `<p>3.14 is a short version of pi (π = 3.14159…). For takeoffs, 3.14 is close enough. Your PDF (Portable Document Format file) measure tool will do this math for you, but you should still know how to check it.</p>`
},

{ h: "Odd shapes: split them up",
  lead: "Real planting beds are never perfect rectangles. Split the shape into rectangles, triangles and circles, find each area, then add.",
  body: `<ol class="steps">
<li><div><b>Sketch the bed</b>Write every dimension you know on the sketch.</div></li>
<li><div><b>Draw lines to split it</b>Into simple shapes. Number each piece.</div></li>
<li><div><b>Find each area</b>Write the math next to each piece.</div></li>
<li class="hl"><div><b>Add the pieces. Subtract holes</b>Take out walks, tree wells, boulders or anything not planted.</div></li>
<li><div><b>Check it</b>Draw a box around the whole bed. Your answer must be smaller than the box.</div></li>
</ol>`,
  ex: `<p>Made-up example: an L-shaped bed. Piece 1 is 40 ft × 20 ft = 800 SF (square feet). Piece 2 sticks out below it, 15 ft × 10 ft = 150 SF. A round boulder 4 ft across sits in the bed: 3.14 × 2 × 2 = 12.56 SF.</p>
<p>Total: 800 + 150 − 12.56 = <strong>937.44 SF, about 937 SF</strong> of planting. Check: the box around the whole L is 40 × 30 = 1,200 SF. 937 is smaller. Good.</p>`,
  watch: `<p>Curved beds: split the curve into a few short straight pieces, or use your PDF (Portable Document Format file) tool's area (polygon) measure. Either way, write down how you got the number so you can defend it.</p>`
},

{ h: "Perimeter: the distance around",
  lead: "Perimeter is the length around the edge of a shape, in LF (linear feet). You need it for edging, header board, curbs and bed borders.",
  body: `<ul>
<li><strong>Rectangle:</strong> (length + width) × 2. A 45 × 30 bed: (45 + 30) × 2 = 150 LF.</li>
<li><strong>Circle (circumference):</strong> 3.14 × diameter. A 6 ft tree ring: 3.14 × 6 = 18.84 LF.</li>
<li><strong>Any shape:</strong> add up every side.</li>
<li><strong>Only count the edges that get the item.</strong> Edging often runs only where a bed meets turf or DG (decomposed granite), not where it meets a curb or wall.</li>
</ul>`,
  ex: `<p>Made-up example: the L-shaped bed from the last slide. Go around it: 40 + 20 + 25 + 10 + 15 + 30 = <strong>140 LF</strong>. Shortcut: an L-shape with only square corners has the same perimeter as the box around it: (40 + 30) × 2 = 140 LF.</p>
<p>If 60 LF of that edge is against a concrete curb, edging is 140 − 60 = <strong>80 LF</strong>.</p>`,
  deeper: `<p>Real: 11-430674 (SR-5/75/805/905) had 3,660 LF of edging as its own bid item. See Module 7.</p>`,
  src: "11-430674 Bid Item List (edging), as cited in Module 7."
},

{ h: "Square feet, square yards and acres",
  lead: "A square yard is 3 ft × 3 ft = 9 SF (square feet). An acre is 43,560 SF. Convert carefully: these mistakes are 9 times or 43,560 times too big.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>From</th><th>To</th><th>Do this</th><th>Example</th></tr></thead>
<tbody>
<tr><td>SF</td><td>SQYD (square yards)</td><td>÷ 9</td><td>1,800 SF ÷ 9 = 200 SQYD</td></tr>
<tr><td>SQYD</td><td>SF</td><td>× 9</td><td>310 SQYD × 9 = 2,790 SF</td></tr>
<tr><td>SF</td><td>Acres</td><td>÷ 43,560</td><td>87,120 SF ÷ 43,560 = 2 acres</td></tr>
<tr><td>Acres</td><td>SF</td><td>× 43,560</td><td>2.5 acres × 43,560 = 108,900 SF</td></tr>
</tbody></table></div>
<p>Why 9? A yard is 3 feet. A square yard is 3 ft long and 3 ft wide, so 3 × 3 = 9 square feet fit inside it.</p>`,
  ex: `<p>Real: 11-428704 item 21, weed germination, is 7,020 SQYD. In square feet: 7,020 × 9 = <strong>63,180 SF</strong>. In acres: 63,180 ÷ 43,560 = <strong>about 1.45 acres</strong>.</p>`,
  watch: `<p>Your PDF (Portable Document Format file) tool measures in SF. If the bid item is in SQYD and you forget to divide by 9, your price per unit will be off by 9 times.</p>`,
  src: "11-428704 Bid Item List item 21; plans PP-7 (310 SQYD compost callout)."
},

{ h: "Volume: from area and depth to cubic yards",
  lead: "Mulch, compost, soil and rock are bought by the cubic yard. Area × depth gives volume. A cubic yard is 3 × 3 × 3 = 27 cubic feet.",
  body: `<ol class="steps">
<li><div><b>Area in SF (square feet)</b>Measure the bed.</div></li>
<li><div><b>Depth in feet</b>Inches ÷ 12. A 3" layer is 0.25 ft.</div></li>
<li><div><b>Cubic feet</b>SF × depth in feet = CF (cubic feet).</div></li>
<li class="hl"><div><b>Cubic yards</b>CF ÷ 27 = CY (cubic yards).</div></li>
</ol>
<p><strong>The shortcut:</strong> <strong>SF × depth in inches ÷ 324 = CY</strong>. It works because 12 × 27 = 324.</p>
<div class="tablewrap"><table>
<thead><tr><th>Depth</th><th class="num">CY per 1,000 SF</th></tr></thead>
<tbody>
<tr><td>1"</td><td class="num">3.09</td></tr>
<tr><td>2"</td><td class="num">6.17</td></tr>
<tr><td>3"</td><td class="num">9.26</td></tr>
<tr><td>4"</td><td class="num">12.35</td></tr>
<tr><td>6"</td><td class="num">18.52</td></tr>
</tbody></table></div>`,
  ex: `<p>Made-up example: a 2,400 SF bed gets 3" of wood mulch (11-428704 used a 3" wood mulch layer, per sheet PL-1, the planting legend and notes sheet).</p>
<ul>
<li>Long way: 3 ÷ 12 = 0.25 ft. 2,400 × 0.25 = 600 CF. 600 ÷ 27 = 22.2 CY.</li>
<li>Shortcut: 2,400 × 3 ÷ 324 = 22.2 CY.</li>
<li>You buy whole yards: <strong>order 23 CY</strong>, plus any waste or settling your company adds.</li>
</ul>`,
  watch: `<p>Dividing cubic feet by 9 instead of 27 is a common mix-up (9 is for square yards). The answer comes out 3 times too big.</p>`,
  src: "11-428704 plans PL-1 (sequence of work: 3\" wood mulch)."
},

{ h: "Real rate: compost by the acre",
  lead: "Specs often give a rate, like “200 CY (cubic yards) per acre.” Turn the rate into a quantity for each area.",
  body: `<ol class="steps">
<li><div><b>Find the area in acres</b>SF (square feet) ÷ 43,560.</div></li>
<li><div><b>Multiply by the rate</b>Acres × 200 CY.</div></li>
<li class="hl"><div><b>Or use a per-1,000 SF number</b>200 ÷ 43.56 = 4.59 CY per 1,000 SF.</div></li>
</ol>
<p><strong>Real check (11-428704, sheet PP-7, one of the seven planting plan sheets):</strong> a compost callout covers 310 SQYD (square yards).</p>
<ul>
<li>310 × 9 = 2,790 SF</li>
<li>2,790 ÷ 43,560 = 0.064 acre</li>
<li>0.064 × 200 = 12.8 CY. The plan says <strong>13 CY</strong>. The math matches.</li>
</ul>`,
  deeper: `<p>What depth is 200 CY per acre? 200 × 27 = 5,400 CF (cubic feet) over 43,560 SF = 0.124 ft, or about 1.5 inches. Module 7 has the full compost walkthrough for this job.</p>`,
  src: "11-428704 plans PL-1 (compost 200 CY/acre) and PP-7 (13 CY compost); Module 7."
},

{ h: "Water units: gallons, GPM and PSI",
  lead: "Irrigation uses three water units. Gallons are an amount. GPM (gallons per minute) is how fast water flows. PSI (pounds per square inch) is how hard the water pushes.",
  body: `<ul>
<li><strong>Gallons:</strong> 1 cubic foot of water holds about 7.48 gallons. A gallon of water weighs about 8.34 pounds.</li>
<li><strong>GPM:</strong> each head or emitter uses some GPM. Add them up for a valve zone. A zone must not use more GPM than the pipe, valve and meter can deliver.</li>
<li><strong>PSI:</strong> the pressure. Heads need a certain PSI to throw water correctly. Water loses pressure going uphill and through pipe and fittings, and gains it going downhill.</li>
<li><strong>Height and pressure:</strong> every foot of height is about 0.433 PSI. 10 feet of height is about 4.3 PSI.</li>
</ul>`,
  ex: `<p>Made-up example: a zone has 10 rotors using 3 GPM each. Zone flow = 10 × 3 = <strong>30 GPM</strong>. If the zone sits 46 ft above the water meter, it loses about 46 × 0.433 = <strong>about 20 PSI</strong> just from the climb.</p>`,
  deeper: `<p>As an estimator you don't design the irrigation. The landscape architect does. But GPM and PSI tell you why the plans show certain valve sizes, pressure regulators or booster pumps, and why a slope job may need parts a flat job doesn't. Module 6 covers irrigation takeoff.</p>`
},

{ h: "Slope: rise over run",
  lead: "Slope is how steep the ground is. Plans write it three ways: as a ratio like 2:1, as a percent, or as rise over run.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Written</th><th>Means</th><th class="num">Percent</th><th class="num">Real surface ÷ flat plan area</th></tr></thead>
<tbody>
<tr><td>4:1</td><td>4 ft across for 1 ft up</td><td class="num">25%</td><td class="num">1.031</td></tr>
<tr><td>3:1</td><td>3 ft across for 1 ft up</td><td class="num">33%</td><td class="num">1.054</td></tr>
<tr><td>2:1</td><td>2 ft across for 1 ft up</td><td class="num">50%</td><td class="num">1.118</td></tr>
<tr><td>1.5:1</td><td>1.5 ft across for 1 ft up</td><td class="num">67%</td><td class="num">1.202</td></tr>
</tbody></table></div>
<ul>
<li><strong>Percent slope</strong> = rise ÷ run × 100. 1 ft up over 2 ft across = 1 ÷ 2 = 50%.</li>
<li>On grading plans, a ratio like 2:1 usually means <strong>horizontal : vertical</strong>. Check the plan's legend to be sure.</li>
<li><strong>Plans are drawn flat.</strong> A slope has more real surface than the plan shows. Multiply flat area by the factor in the table for the real area you cover with mulch, jute or plants.</li>
</ul>`,
  ex: `<p>Made-up example: a 2:1 slope measures 4,000 SF (square feet) on the plan. Real surface: 4,000 × 1.118 = <strong>4,472 SF</strong>. Mulch at 3": 4,472 × 3 ÷ 324 = 41.4 CY (cubic yards), not the 37.0 CY you'd get from the flat area.</p>`,
  watch: `<p><strong>Why slope matters for labor:</strong> crews walk, carry and plant slower on a slope. Wheelbarrows don't work on 2:1. Workers may need to rope in. A slope job can take much more labor per plant than a flat bed. Module 9 shows how to set production rates.</p>`,
  deeper: `<p>The factor is the slope length ÷ flat length. For 2:1, the slope is 2 across and 1 up, so the slanted length is √(2² + 1²) = √5 = 2.236. 2.236 ÷ 2 = 1.118. Whether you are paid on flat area or real surface depends on the bid item and the specs. Read how the item is measured.</p>`
},

{ t: "std", h: "Drill 2 · Units, area and volume",
  lead: "All landscape. Draw a sketch for each one. Answers are under Go deeper.",
  body: `<ol>
<li>Change 1,800 SF (square feet) to SQYD (square yards).</li>
<li>Change 540 CF (cubic feet) to CY (cubic yards).</li>
<li>Change 2.5 acres to SF.</li>
<li>A bed is 30 ft × 45 ft and gets 3" of mulch. How many CY? How many do you order?</li>
<li>A triangle bed has a 40 ft base and is 25 ft high. What is its area?</li>
<li>A tree ring is 6 ft across. What is its area? How much edging goes around it?</li>
<li>Real: 11-428704 item 21 is 7,020 SQYD of weed germination. How many SF? How many acres?</li>
<li>A 3:1 slope measures 10,000 SF on the plan. What is the real surface area?</li>
</ol>`,
  deeper: `<p><strong>Answers:</strong></p>
<ol>
<li>1,800 ÷ 9 = <strong>200 SQYD</strong></li>
<li>540 ÷ 27 = <strong>20 CY</strong></li>
<li>2.5 × 43,560 = <strong>108,900 SF</strong></li>
<li>30 × 45 = 1,350 SF. 1,350 × 3 ÷ 324 = <strong>12.5 CY</strong>. Order <strong>13 CY</strong> or more.</li>
<li>40 × 25 ÷ 2 = <strong>500 SF</strong></li>
<li>Radius 3 ft. 3.14 × 3 × 3 = <strong>28.26 SF</strong>. Edging: 3.14 × 6 = <strong>18.84 LF (linear feet)</strong>.</li>
<li>7,020 × 9 = <strong>63,180 SF</strong>. 63,180 ÷ 43,560 = <strong>1.45 acres</strong>.</li>
<li>10,000 × 1.054 = <strong>10,540 SF</strong></li>
</ol>`,
  src: "11-428704 Bid Item List item 21. Other numbers are made up for practice."
},

{ h: "Plant spacing: how many plants fit",
  lead: "Groundcover and shrub areas are drawn with a spacing, like “18\" o.c.” (on center: center of one plant to center of the next). Area and spacing give you the plant count.",
  body: `<div class="twocol">
<div><h3>Square spacing</h3><ul>
<li>Plants in straight rows and columns, like a grid</li>
<li><strong>Plants = SF (square feet) ÷ (spacing × spacing)</strong></li>
<li>Spacing in feet</li>
</ul></div>
<div><h3>Triangular spacing</h3><ul>
<li>Each row shifted half a space, so plants form triangles</li>
<li><strong>Plants = SF × 1.155 ÷ (spacing × spacing)</strong></li>
<li>About 15% more plants than square</li>
</ul></div>
</div>
<div class="tablewrap"><table>
<thead><tr><th>Spacing</th><th class="num">Square, plants per SF</th><th class="num">Triangular, plants per SF</th></tr></thead>
<tbody>
<tr><td>12" (1 ft)</td><td class="num">1.000</td><td class="num">1.155</td></tr>
<tr><td>18" (1.5 ft)</td><td class="num">0.444</td><td class="num">0.513</td></tr>
<tr><td>24" (2 ft)</td><td class="num">0.250</td><td class="num">0.289</td></tr>
<tr><td>36" (3 ft)</td><td class="num">0.111</td><td class="num">0.128</td></tr>
</tbody></table></div>`,
  ex: `<p>Made-up example: 2,000 SF of groundcover at 18" o.c., triangular. 18 in = 1.5 ft. 1.5 × 1.5 = 2.25. 2,000 × 1.155 ÷ 2.25 = 1,026.7. Round up: <strong>1,027 plants</strong>. Square spacing would be 2,000 ÷ 2.25 = 889 plants.</p>`,
  watch: `<p>If the plans don't say square or triangular, check the planting detail. If nothing says, ask, or write your assumption in your proposal. It changes the count by about 15%. Module 7 covers edge setbacks and checking against plan callouts.</p>`,
  src: "Spacing formulas as derived in Module 7."
},

{ h: "Container sizes and Caltrans plant groups",
  lead: "Plants are bought and priced by container size. Caltrans gives each size a letter, and each letter is its own bid item.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Common name</th><th>Caltrans group</th><th>Caltrans description</th><th class="num">Container size (cu in)</th></tr></thead>
<tbody>
<tr><td>1-gallon (#1)</td><td>A</td><td>No. 1 container</td><td class="num">152–251</td></tr>
<tr><td>5-gallon (#5)</td><td>B</td><td>No. 5 container</td><td class="num">785–1,242</td></tr>
<tr><td>15-gallon (#15)</td><td>U</td><td>No. 15 container</td><td class="num">2,768–3,696</td></tr>
<tr><td>24" box</td><td>K</td><td>24-inch box</td><td class="num">5,775–6,861</td></tr>
<tr><td>Cutting</td><td>H</td><td>Cutting</td><td>—</td></tr>
<tr><td>Palm</td><td>Z</td><td>Palm tree</td><td>—</td></tr>
</tbody></table></div>
<p>Other Caltrans groups: C balled and burlapped, E bulb, F in flats, I pot, M liner, O acorn, P plugs, S seedling (bare root). Private plans just say the size: #1, #5, #15, 24" box, 36" box, flats, plugs.</p>`,
  ex: `<p>Real: 11-428704 had four plant items. Item 27, Group A (1-gallon), 1,460 EA (each). Item 28, Group B (5-gallon), 110 EA. Item 25, Group H (iceplant cuttings), 61,975 EA after Addendum 1. Item 26, Group K (24" box pines), 43 EA.</p>`,
  watch: `<p>A 1-gallon and a 5-gallon of the same plant are two lines with very different prices and labor. Never combine sizes.</p>`,
  src: "11-428704 Special Provisions, replacement table for Standard Specifications 20-3.01B(2)(a) (plant group designations and container sizes); Bid Item List items 25–28; Addendum 1."
},

{ t: "std", h: "Drill 3 · Plants",
  lead: "Plant math, landscape style. Answers are under Go deeper.",
  body: `<ol>
<li>2,000 SF (square feet) at 24" o.c. (on center), triangular. How many plants?</li>
<li>Iceplant cuttings at 12" o.c., triangular, over 5,000 SF. How many cuttings?</li>
<li>Same 5,000 SF, square spacing. How many?</li>
<li>A plan legend says “Group U.” What container size is that?</li>
<li>Which Caltrans group is a 24" box tree?</li>
<li>Made-up: 950 SF bed of #1 groundcover at 24" o.c., triangular. How many plants do you order?</li>
<li>Made-up: the plan shows 36 symbols for a #5 shrub, but the callout says “40.” Which number do you price, and what do you do?</li>
</ol>`,
  deeper: `<p><strong>Answers:</strong></p>
<ol>
<li>2 × 2 = 4. 2,000 × 1.155 ÷ 4 = 577.5. Order <strong>578 plants</strong>.</li>
<li>1 × 1 = 1. 5,000 × 1.155 = <strong>5,775 cuttings</strong>.</li>
<li>5,000 ÷ 1 = <strong>5,000 cuttings</strong></li>
<li><strong>No. 15 container (15-gallon)</strong></li>
<li><strong>Group K</strong></li>
<li>950 × 1.155 ÷ 4 = 274.3. Order <strong>275 plants</strong>.</li>
<li>Usually the callout is what the owner pays for, so price <strong>40</strong>, then send a written question (RFI) about the difference. Module 7 explains how to read callouts and symbols, and Module 12 covers RFIs.</li>
</ol>`,
  src: "Caltrans plant groups per 11-428704 Special Provisions. Other numbers are made up for practice."
},

{ h: "Scale: turning inches on paper into feet",
  lead: "Plans are drawn smaller than real life. The scale says how much. “1\" = 20'” means one inch on the paper is 20 feet on the ground.",
  body: `<ul>
<li><strong>Feet on the ground = inches on paper × the scale number.</strong></li>
<li>1" = 20': you measure 2.5" on paper. 2.5 × 20 = <strong>50 ft</strong>.</li>
<li>1" = 50': you measure 3.2". 3.2 × 50 = <strong>160 ft</strong>. Many Caltrans sheets on 11-428704 are drawn at 1" = 50'.</li>
<li><strong>Engineer's scale ruler:</strong> a three-sided ruler with faces marked 10, 20, 30, 40, 50, 60. Use the face that matches the plan scale and read feet directly.</li>
<li><strong>Architect's scale</strong> reads scales like 1/4" = 1'-0". Site and landscape plans usually use engineer scales.</li>
</ul>`,
  watch: `<p><strong>Half-size prints and PDFs lie.</strong> A full-size 24 × 36 sheet printed on 11 × 17 paper is about half size, so 1" = 20' really measures as 1" = 40'. Always check against a written dimension or the graphic scale bar before you measure. Module 4 covers this step by step.</p>`,
  deeper: `<p>Caltrans sheets have a “relative border scale” bar so you can tell if a print is full size. Learn the full routine in <a href="#m4-1">Module 4 · Reading Landscape and Irrigation Plans</a> and the <a href="#plans-1">Plan Set Deep Dive</a>.</p>`,
  src: "11-428704 plans (WPC and U sheets, scale 1\" = 50'; relative border scale bar on each sheet)."
},

{ h: "Stationing: distances along a line",
  lead: "Long jobs like roads and medians use stations. A station is a distance in feet along a named survey line. Sta (station) 298+55 means 298 hundreds plus 55 feet.",
  body: `<ol class="steps">
<li><div><b>Drop the plus sign</b>298+55 becomes 29855.</div></li>
<li><div><b>Read it as feet</b>Sta 298+55 = <strong>29,855 ft</strong> from the start of that line.</div></li>
<li class="hl"><div><b>Subtract two stations for a length</b>Bigger station minus smaller station = distance between them in feet.</div></li>
</ol>`,
  ex: `<p>Real: the 11-428704 title sheet shows Sta 298+55 on the “SD 805” line near Palomar Street. That is 29,855 ft along the line.</p>
<p>Real: a note on sheet IP-1 (the first irrigation plan sheet) says to install 4" supply line from Sta 235+50 to Sta 249+70. 24,970 − 23,550 = <strong>1,420 LF (linear feet)</strong> of main, found without measuring.</p>`,
  watch: `<p>Stations only compare on the <strong>same line</strong>. Sta 261+00 on a ramp line is not the same place as Sta 261+00 on the freeway line. Module 4 explains line names, left and right, and match lines.</p>`,
  src: "11-428704 plans, title sheet and IP-1 note (as cited in Module 4)."
},

{ h: "Money math: unit price × quantity",
  lead: "On a unit-price bid, every line is quantity × unit price = extension. Add all the extensions to get the total bid.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Item</th><th>Description</th><th>Unit</th><th class="num">Quantity</th><th class="num">Unit price</th><th class="num">Extension</th></tr></thead>
<tbody>
<tr><td>25</td><td>Plant (Group H), cuttings</td><td>EA (each)</td><td class="num">61,975</td><td class="num">$0.80</td><td class="num">$49,580.00</td></tr>
<tr><td>27</td><td>Plant (Group A), 1-gallon</td><td>EA</td><td class="num">1,460</td><td class="num">$25.00</td><td class="num">$36,500.00</td></tr>
<tr><td>31</td><td>Wood mulch</td><td>CY (cubic yards)</td><td class="num">190</td><td class="num">$50.00</td><td class="num">$9,500.00</td></tr>
<tr><td>63</td><td>4" plastic pipe (Class 315) (supply line)</td><td>LF (linear feet)</td><td class="num">7,493</td><td class="num">$12.00</td><td class="num">$89,916.00</td></tr>
<tr><td>68</td><td>Compost</td><td>CY</td><td class="num">290</td><td class="num">$80.00</td><td class="num">$23,200.00</td></tr>
<tr><td colspan="5"><strong>These five lines</strong></td><td class="num"><strong>$208,696.00</strong></td></tr>
</tbody></table></div>
<p>These are the real unit prices from the winning bid on 11-428704. Check one: 7,493 × $12.00 = $89,916.00.</p>`,
  watch: `<p>A unit price is <strong>per one unit</strong>. If you write a total in the unit price box by mistake, the agency multiplies it by the quantity again.</p>`,
  src: "Caltrans Bid Summary 11-428704, ACCU Construction, Inc. unit prices for items 25, 27, 31, 63 and 68."
},

{ h: "Adding up a bid and checking it",
  lead: "Most bid math errors are typing errors. Check every extension and the total two different ways.",
  body: `<ol class="steps">
<li><div><b>Re-multiply every line</b>Quantity × unit price. Do it on the calculator, not just in your head.</div></li>
<li><div><b>Check the size of each answer</b>Round both numbers and multiply in your head. 7,493 × $12 is about 7,500 × 12 = 90,000. Good.</div></li>
<li class="hl"><div><b>Add the total twice</b>Once top to bottom, once bottom to top, or once on paper and once in the spreadsheet.</div></li>
<li><div><b>Compare to a quick check</b>Does the total make sense for the job size? Compare to the engineer's estimate on public jobs.</div></li>
<li><div><b>Have someone else check</b>A second person catches what you can't see.</div></li>
</ol>`,
  ex: `<p>Made-up error hunt: someone typed 190 × $50.00 = $95,000.00 for mulch. Quick check: 200 × 50 = 10,000. $95,000 is almost 10 times too big. The right extension is $9,500.00. One wrong zero added $85,500.</p>`,
  watch: `<p>Big quantities multiply small mistakes. Module 15 shows a real bidder on 11-428704 who priced the 61,975 cuttings at $6.00 each, while the others were near $0.48 to $0.90. That one line added about $322,000 compared with $0.80.</p>`,
  src: "Caltrans Bid Summary 11-428704 (item 25 unit prices), as analyzed in Module 15."
},

{ h: "Cost vs. price, markup vs. margin",
  lead: "Cost is what the job costs you. Price is what you charge. The difference pays for overhead and profit.",
  body: `<ul>
<li><strong>Cost:</strong> materials + labor + equipment + subcontractors + tax and fees for the job.</li>
<li><strong>Price:</strong> what the customer pays you.</li>
<li><strong>Markup</strong> is a percent of <strong>cost</strong>: (price − cost) ÷ cost.</li>
<li><strong>Margin</strong> is a percent of <strong>price</strong>: (price − cost) ÷ price.</li>
</ul>
<p><strong>Worked (made-up numbers):</strong> cost $100,000, price $120,000. The difference is $20,000.</p>
<ul>
<li>Markup = $20,000 ÷ $100,000 = <strong>20%</strong></li>
<li>Margin = $20,000 ÷ $120,000 = <strong>16.7%</strong></li>
</ul>`,
  watch: `<p>Same dollars, two different percents. If the owner says “20% margin” and you add 20% to cost, you come up short. Learn the full method in <a href="#m10-1">Module 10 · Overhead, Markup and Your Final Number</a>.</p>`,
  src: "Module 10, markup vs. margin."
},

{ h: "Hours × rate and a simple crew day",
  lead: "Labor cost is hours × hourly cost. A crew day cost is everything one crew costs for one day.",
  body: `<p><strong>Worked (made-up rates for practice; your real costs come from payroll, and Module 9 adds taxes, insurance and benefits):</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>Line</th><th>Math</th><th class="num">Cost per day</th></tr></thead>
<tbody>
<tr><td>Foreman</td><td>8 h × $50.00</td><td class="num">$400.00</td></tr>
<tr><td>3 laborers</td><td>3 × 8 h × $35.00</td><td class="num">$840.00</td></tr>
<tr><td>Crew truck</td><td>1 day × $95.00</td><td class="num">$95.00</td></tr>
<tr><td colspan="2"><strong>Crew day cost</strong></td><td class="num"><strong>$1,335.00</strong></td></tr>
</tbody></table></div>
<p><strong>Cost per unit:</strong> if this crew plants 400 one-gallon plants a day (made-up rate), labor per plant = $1,335 ÷ 400 = <strong>$3.34</strong>.</p>
<p><strong>Days needed:</strong> 1,460 plants ÷ 400 per day = 3.65, so <strong>about 4 crew days</strong>.</p>`,
  watch: `<p>The hourly wage is not your full labor cost. Payroll taxes, workers' comp, insurance and benefits add a lot. On public jobs, prevailing wage sets the minimum rates. Module 9 and Module 11 show how to build the real number.</p>`,
  src: "Truck cost example from Module 9. All other rates are made up for practice."
},

{ t: "std", h: "Drill 4 · Money",
  lead: "Bid math. Answers are under Go deeper.",
  body: `<ol>
<li>Real quantity, made-up price: 110 Group B plants (11-428704 item 28) at $38.00 each. What is the extension?</li>
<li>Made-up: 43 24" box trees at $415.00. Extension?</li>
<li>Find the error (made-up): “1,460 EA (each) × $25.00 = $3,650.00.”</li>
<li>Made-up: materials cost $18,640 before tax. Add 8.75% sales tax. What is the total?</li>
<li>Made-up: cost $80,000, price $92,000. What is the markup? What is the margin?</li>
<li>Made-up: a crew costs $1,335 per day and installs 250 LF (linear feet) of lateral pipe per day. What is the labor cost per LF?</li>
<li>Made-up: add these extensions: $49,580.00 + $36,500.00 + $9,500.00.</li>
</ol>`,
  deeper: `<p><strong>Answers:</strong></p>
<ol>
<li>110 × $38.00 = <strong>$4,180.00</strong></li>
<li>43 × $415.00 = <strong>$17,845.00</strong></li>
<li>1,460 × $25.00 = <strong>$36,500.00</strong>. A zero was dropped, which made the line 10 times too small.</li>
<li>$18,640 × 0.0875 = $1,631.00 tax. Total <strong>$20,271.00</strong>. (Or $18,640 × 1.0875 = $20,271.00.)</li>
<li>Difference $12,000. Markup $12,000 ÷ $80,000 = <strong>15%</strong>. Margin $12,000 ÷ $92,000 = <strong>13.0%</strong>.</li>
<li>$1,335 ÷ 250 = <strong>$5.34 per LF</strong></li>
<li><strong>$95,580.00</strong></li>
</ol>`,
  src: "11-428704 Bid Item List items 26 and 28 (quantities only). Prices are made up for practice, except drill 7, which uses the real extensions from the money slide."
},

{ h: "Time: working days vs. calendar days",
  lead: "A calendar day is every day on the calendar. A working day is a day work can normally happen, as the contract defines it. They are very different clocks.",
  body: `<div class="twocol">
<div><h3>Calendar days</h3><ul>
<li>Every day counts: weekends, holidays, rain days</li>
<li>Common for bid deadlines, notices and some private contracts</li>
<li>30 calendar days is about one month</li>
</ul></div>
<div><h3>Working days</h3><ul>
<li>Usually leaves out weekends and holidays</li>
<li>On Caltrans jobs, also days when weather or other listed causes stop the main work</li>
<li>About 5 working days per week, so 20 working days is about 4 weeks</li>
</ul></div>
</div>
<p><strong>Real (11-428704):</strong> 120 working days to build, then 250 working days of plant establishment, 370 working days total. At about 5 working days per week, 120 working days is about 24 weeks, more than 5 months, before holidays and rain days push it out further.</p>`,
  watch: `<p>Each contract defines its own days. Read the definitions section (Caltrans Standard Specifications section 1, or the definitions in a city's contract) before you plan a schedule or count a deadline.</p>`,
  deeper: `<p>Caltrans defines working day in its Standard Specifications, section 1-1.07B, and some contracts amend that definition. Some deadlines in the same contract use “business days” instead, for example the 11-428704 specs give 5 business days to dispute a weekly statement of working days. Read each deadline's exact words.</p>`,
  src: "11-428704 Special Provisions (contract time: 120, 250 and 370 working days; weekly statement of working days); Caltrans 2018 Standard Specifications section 1-1.07B."
},

{ h: "Due dates and 24-hour time",
  lead: "Bids are due at an exact minute. Read the date, the time, the time zone and the place, and be early.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>24-hour time</th><th>Regular time</th></tr></thead>
<tbody>
<tr><td>00:00</td><td>12:00 midnight</td></tr>
<tr><td>09:30</td><td>9:30 AM</td></tr>
<tr><td>12:00</td><td>12:00 noon</td></tr>
<tr><td>14:00</td><td>2:00 PM</td></tr>
<tr><td>17:00</td><td>5:00 PM</td></tr>
</tbody></table></div>
<p>After 12:00, subtract 12 to get the PM time: 14:00 − 12 = 2:00 PM.</p>
<ol class="steps">
<li><div><b>Write the due date in your bid log</b>Day of the week, date, time, and how to submit.</div></li>
<li><div><b>Count backward</b>Supplier quotes, sub quotes, bond request, final review. Put each on the calendar.</div></li>
<li class="hl"><div><b>Watch for changes</b>Addenda can move the date. Re-check before bid day.</div></li>
</ol>`,
  ex: `<p>Real: 11-428704 bids opened Wednesday, September 8, 2021, at 2:00 PM (14:00), on Bid Express (the website Caltrans uses for electronic bids). Addendum 1 came out August 27, 2021, 12 calendar days earlier. Bids after 2:00 PM were not accepted.</p>`,
  watch: `<p>The agency's clock decides, not yours. A bid at 2:00:30 PM is late. Plan to submit at least an hour early on electronic bids, and earlier on paper bids that need to be driven across town.</p>`,
  src: "11-428704 Notice to Bidders and Addendum 1 (as cited in Module 15)."
},

{ h: "Using a calculator like an estimator",
  lead: "A basic calculator with big keys and a paper tape, or a construction calculator, beats a phone for long bids.",
  body: `<ul>
<li><strong>Memory keys:</strong> M+ adds the shown number to memory. MR recalls it. MC clears it. Use M+ after each extension, then MR for the total.</li>
<li><strong>Percent key:</strong> works differently on different calculators. Safer: type the decimal (× 0.0875).</li>
<li><strong>Paper-tape or history:</strong> lets you check what you typed. Phone calculators often don't show it.</li>
<li><strong>Construction calculators</strong> can add feet and inches and convert units. Helpful, but learn the math by hand first.</li>
<li><strong>Spreadsheet over calculator</strong> for any bid with more than a few lines: you can see and check every number.</li>
</ul>`,
  ex: `<p>Made-up routine for three extensions: clear memory (MC). 110 × 38 = 4,180, press M+. 43 × 415 = 17,845, press M+. 190 × 50 = 9,500, press M+. Press MR: 31,525. Check by adding the three again: 4,180 + 17,845 + 9,500 = 31,525.</p>`,
  watch: `<p>Forgetting to clear memory from the last job adds old numbers to the new bid. Press MC first, every time.</p>`
},

{ h: "Spreadsheets: cells, rows and formulas",
  lead: "A spreadsheet (Excel or Google Sheets) is a grid. Each box is a cell with an address like B2: column letter, then row number.",
  body: `<ul>
<li><strong>Columns</strong> go up and down and have letters: A, B, C.</li>
<li><strong>Rows</strong> go across and have numbers: 1, 2, 3.</li>
<li><strong>A cell</strong> holds a number, words, or a formula.</li>
<li><strong>Formulas start with =</strong>. =B2*C2 multiplies cell B2 by C2. * means multiply, / means divide, + and − add and subtract.</li>
<li>Change a number and every formula that uses it updates by itself.</li>
</ul>
<div class="tablewrap"><table>
<thead><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead>
<tbody>
<tr><td>1</td><td>Item</td><td>Qty</td><td>Unit price</td><td>Extension</td></tr>
<tr><td>2</td><td>Wood mulch (CY)</td><td class="num">190</td><td class="num">50.00</td><td>=B2*C2 → 9,500.00</td></tr>
<tr><td>3</td><td>Compost (CY)</td><td class="num">290</td><td class="num">80.00</td><td>=B3*C3 → 23,200.00</td></tr>
<tr><td>4</td><td>Total</td><td></td><td></td><td>=SUM(D2:D3) → 32,700.00</td></tr>
</tbody></table></div>`,
  watch: `<p>Never type a number over a formula “just for now.” The sheet looks right, but it stops calculating. Mark typed-in numbers with a color so you can find them.</p>`,
  src: "Quantities and prices from 11-428704 items 31 and 68 (winning bid)."
},

{ h: "Spreadsheets: SUM, copying and $ references",
  lead: "A few tools do most of an estimator's work: SUM, copying a formula down, locking a cell with $, and rounding functions.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Tool</th><th>Type this</th><th>What it does</th></tr></thead>
<tbody>
<tr><td><strong>SUM</strong></td><td>=SUM(D2:D20)</td><td>Adds every cell from D2 to D20</td></tr>
<tr><td><strong>Copy down</strong></td><td>Drag the small square at the corner of a cell</td><td>=B2*C2 becomes =B3*C3, =B4*C4 on the rows below</td></tr>
<tr><td><strong>Lock a cell ($)</strong></td><td>=D2*$B$1</td><td>$B$1 stays B1 when copied. Put the tax rate in B1 once.</td></tr>
<tr><td><strong>ROUND</strong></td><td>=ROUND(D2,2)</td><td>Rounds to cents</td></tr>
<tr><td><strong>ROUNDUP</strong></td><td>=ROUNDUP(B2*C2/324,0)</td><td>Rounds up to a whole number. Here: SF (square feet) × inches ÷ 324, rounded up to whole CY (cubic yards).</td></tr>
<tr><td><strong>Change to SQYD</strong></td><td>=B2/9</td><td>SF to SQYD (square yards)</td></tr>
</tbody></table></div>`,
  ex: `<p>Made-up: put 0.0875 in cell B1 and label A1 “Tax rate.” In E2 type =D2*$B$1 and copy it down. Every row now uses B1. When the rate changes, you change one cell, not fifty.</p>`,
  watch: `<p>Check that SUM ranges include every row. Inserting a new row just below the SUM range leaves it out of the total. After adding rows, click the total and look at its range.</p>`,
  deeper: `<p>Excel and Google Sheets use the same formulas shown here. Press F4 (Windows Excel) while your cursor is on a cell address to add the $ signs. To see the formula behind a number, click the cell and read the formula bar at the top of the screen.</p>`
},

{ h: "A simple takeoff and pricing sheet",
  lead: "One row per item. Takeoff on the left, pricing on the right. Every number traceable to a sheet or a quote.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>A · Item</th><th>B · Sheet</th><th>C · Unit</th><th class="num">D · Takeoff qty</th><th class="num">E · Waste %</th><th class="num">F · Buy qty</th><th class="num">G · Material $/unit</th><th class="num">H · Labor $/unit</th><th class="num">I · Unit cost</th><th class="num">J · Extension</th></tr></thead>
<tbody>
<tr><td>#1 groundcover</td><td>L-2</td><td>EA (each)</td><td class="num">275</td><td class="num">0%</td><td class="num">275</td><td class="num">9.50</td><td class="num">3.34</td><td class="num">=G+H</td><td class="num">=D×I</td></tr>
<tr><td>Wood mulch 3"</td><td>L-2</td><td>CY (cubic yards)</td><td class="num">8.8</td><td class="num">5%</td><td class="num">=ROUNDUP(D×(1+E),0)</td><td class="num">45.00</td><td class="num">…</td><td class="num">…</td><td class="num">…</td></tr>
<tr><td>Edging</td><td>L-3</td><td>LF (linear feet)</td><td class="num">140</td><td class="num">5%</td><td class="num">147</td><td class="num">3.25</td><td class="num">…</td><td class="num">…</td><td class="num">…</td></tr>
</tbody></table></div>
<ul>
<li><strong>Top of the sheet:</strong> project name, bid date, your name, tax rate cell, plan date and addenda received.</li>
<li><strong>Bottom:</strong> subtotal, tax, markup, total. Module 10 sets the markup.</li>
<li><strong>Notes column:</strong> where each number came from (“PQ-1,” the planting quantities sheet; “quote from supplier, 10/2”).</li>
</ul>`,
  ex: `<p>All prices and the waste percent here are made-up examples. Use your own quotes (Module 8) and production rates (Module 9).</p>`,
  watch: `<p>Waste goes into what you buy, not into the agency's quantity. On a unit-price bid, the agency pays for 8.8 CY however much you buy, so the cost of waste goes inside your unit price.</p>`
},

{ h: "PDF (Portable Document Format file) tools for plans and specs",
  lead: "Most plans arrive as PDFs. Four tools do most of the work: zoom, thumbnails, search and measure.",
  body: `<ol class="steps">
<li><div><b>Zoom and pan</b>Ctrl + mouse wheel (or pinch) to zoom. Hold the space bar or use the hand tool to move around.</div></li>
<li><div><b>Page thumbnails and bookmarks</b>Open the side panel to see every sheet. Jump straight to a sheet like L-1 (landscape sheet 1) or IP-1 (irrigation plan sheet 1).</div></li>
<li class="hl"><div><b>Search text (Ctrl + F)</b>Find every “compost,” “Group H” or “32 84 00” (the CSI MasterFormat, Construction Specifications Institute, spec number for planting irrigation). Works only if the PDF has real text. Scanned sheets may need OCR (optical character recognition, which turns a picture of text into searchable text) first.</div></li>
<li><div><b>Measure</b>Set (calibrate) the scale from a known dimension, then measure length, area and count. Bluebeam Revu and Adobe Acrobat Pro have measure tools; some other viewers do too.</div></li>
<li><div><b>Mark up and save a copy</b>Highlight your scope in color. Save as a new file so the original stays clean.</div></li>
</ol>`,
  ex: `<p>Real: open the 11-428704 Special Provisions from the <a href="#lab-11-428704">Real Bid Lab</a> and search “working days.” You'll land on the contract time paragraph: 120, 370 and 250 working days.</p>`,
  watch: `<p>A measure tool is only as good as its calibration. Check every sheet against a written dimension or stations before you trust it. Module 4 shows how.</p>`,
  src: "11-428704 Special Provisions (contract time)."
},

{ h: "Email basics for bidding",
  lead: "Most bidding happens by email. Clear subject lines, the right attachments and a short, polite message make GCs (general contractors) want to open yours.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Part</th><th>Do this (made-up example)</th></tr></thead>
<tbody>
<tr><td><strong>Subject</strong></td><td>Bid · Oak Plaza Retail · Landscape and Irrigation · Due 10/14 2:00 PM</td></tr>
<tr><td><strong>Greeting</strong></td><td>Hi Maria,</td></tr>
<tr><td><strong>Body</strong></td><td>Attached is our landscape and irrigation proposal for Oak Plaza Retail per plans dated 9/15 and Addenda 1–2. Total: $186,400. Please call with any questions.</td></tr>
<tr><td><strong>Attachments</strong></td><td>One PDF (Portable Document Format file) proposal, named clearly. No editable spreadsheets unless asked.</td></tr>
<tr><td><strong>Signature</strong></td><td>Name, title, company, phone, license number</td></tr>
</tbody></table></div>
<ul>
<li>Reply on the same email thread so the history stays together.</li>
<li>Large plan files: send a download link instead of an attachment. Many email systems block attachments over about 20–25 MB.</li>
<li>Read it once more before you send. Check the name, the project and the total.</li>
</ul>`,
  watch: `<p>Sending a proposal with the wrong project name, or to the wrong GC, happens when you copy an old email. Start each proposal email fresh, or check every line.</p>`
},

{ h: "File naming and bid folders",
  lead: "Every bid gets one folder with the same set of subfolders. Every file name starts with the date, so they sort in order.",
  body: `<div class="twocol">
<div><h3>Folder layout</h3><ul>
<li>2026-10-14 Oak Plaza Retail (Landscape)
<ul>
<li>01 Invitation and bid forms</li>
<li>02 Plans and specs</li>
<li>03 Addenda</li>
<li>04 Takeoff</li>
<li>05 Quotes (suppliers and subs)</li>
<li>06 Estimate</li>
<li>07 Proposal sent</li>
<li>08 Results</li>
</ul></li>
</ul></div>
<div><h3>File names</h3><ul>
<li>Date first: year-month-day (2026-10-14)</li>
<li>Then project, then what it is, then version</li>
<li>2026-10-14 OakPlaza Proposal v2.pdf</li>
<li>2026-10-02 OakPlaza Quote SupplierName.pdf</li>
<li>No “final,” “final2,” “FINAL real”</li>
</ul></div>
</div>`,
  ex: `<p>Made-up project names. Real public jobs often have a number, so use it: a folder for City of San Diego job K-24-1952 or Caltrans 11-428704 starts with that number, so you can find it from the bid tab (the agency’s list of every bidder’s price) later.</p>`,
  watch: `<p>Year-month-day sorts correctly. Month-day-year (10-14-2026) does not: January of next year sorts before December.</p>`
},

{ h: "Reading plan words and abbreviations",
  lead: "Plans use short forms to save space. Learn these and most notes will make sense.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Short form</th><th>Means</th><th>Short form</th><th>Means</th></tr></thead>
<tbody>
<tr><td>O.C.</td><td>On center (spacing)</td><td>TYP</td><td>Typical: same everywhere it applies</td></tr>
<tr><td>NTS</td><td>Not to scale (don't measure it)</td><td>(E) or EX</td><td>Existing</td></tr>
<tr><td>(N)</td><td>New</td><td>POC</td><td>Point of connection (water source)</td></tr>
<tr><td>RCV</td><td>Remote control valve</td><td>BFP</td><td>Backflow preventer</td></tr>
<tr><td>STA</td><td>Station</td><td>LT / RT</td><td>Left / right of the line</td></tr>
<tr><td>DIA or Ø</td><td>Diameter</td><td>SCH 40</td><td>Schedule 40 (a pipe wall thickness)</td></tr>
<tr><td>CL</td><td>Class (pipe pressure class) or centerline: read the context</td><td>MIN / MAX</td><td>Minimum / maximum</td></tr>
<tr><td>VIF</td><td>Verify in field</td><td>SIM</td><td>Similar</td></tr>
<tr><td>EQ</td><td>Equal</td><td>N.I.C. or NIC</td><td>Not in contract: shown on the plans but not part of this bid</td></tr>
</tbody></table></div>`,
  watch: `<p>Each plan set has its own abbreviation list, usually on the first sheets or the legend. Use that list first. When a short form isn't listed and you're not sure, ask.</p>`
},

{ t: "std", h: "Drill 5 · Mixed landscape problems",
  lead: "Real-job style problems that combine several skills. Answers are under Go deeper.",
  body: `<ol>
<li>Real: a 4" main runs from Sta (station) 235+50 to Sta 249+70 on the same line. How many LF (linear feet)?</li>
<li>Made-up: add 5% waste to that length. If pipe comes in 20 ft lengths, how many lengths do you buy?</li>
<li>Made-up: a 2:1 slope is 4,000 SF (square feet) on the plan. How many CY (cubic yards) of 3" mulch cover the real surface?</li>
<li>Real rate: compost at 200 CY per acre over 5,000 SF. How many CY?</li>
<li>Made-up: 24-hour time. A pre-bid meeting is at 09:00 and bids are due at 15:00. Write both in regular time.</li>
<li>Made-up error hunt: “Edging 140 LF × $3.25 = $4,550.00.” Is it right?</li>
<li>Made-up: a zone has 14 spray heads at 1.5 GPM (gallons per minute) each. Total GPM?</li>
</ol>`,
  deeper: `<p><strong>Answers:</strong></p>
<ol>
<li>24,970 − 23,550 = <strong>1,420 LF</strong> (real note on 11-428704 IP-1)</li>
<li>1,420 × 1.05 = 1,491 LF. 1,491 ÷ 20 = 74.55, round up to <strong>75 lengths</strong> (1,500 LF).</li>
<li>Real surface 4,000 × 1.118 = 4,472 SF. 4,472 × 3 ÷ 324 = <strong>41.4 CY</strong> (order 42 or more).</li>
<li>5,000 ÷ 43,560 = 0.1148 acre. × 200 = <strong>23.0 CY</strong>. Or 5 × 4.59 = 22.95.</li>
<li><strong>9:00 AM</strong> and <strong>3:00 PM</strong></li>
<li>No. 140 × $3.25 = <strong>$455.00</strong>. The typed answer has an extra zero.</li>
<li>14 × 1.5 = <strong>21 GPM</strong></li>
</ol>`,
  src: "11-428704 plans IP-1 note and PL-1 compost rate. Other numbers are made up for practice."
},

{ t: "std", h: "Drill 6 · Price a small bed from start to finish",
  lead: "One made-up planting bed, every step. This is a tiny version of what you'll do on real bids. Answers are under Go deeper.",
  body: `<p><strong>The bed (made up):</strong> an L-shape. Piece 1 is 40 ft × 20 ft. Piece 2 is 15 ft × 10 ft. Square corners. No curbs.</p>
<p><strong>The plans say:</strong> #1 groundcover at 24" o.c. (on center), triangular. 3" wood mulch. Compost at 200 CY (cubic yards) per acre. Edging all around.</p>
<p><strong>Made-up material prices:</strong> #1 plant $9.50 each. Mulch $45.00 per CY. Compost $40.00 per CY. Edging $3.25 per LF (linear feet). Tax 8.75% on materials.</p>
<ol>
<li>Area of the bed</li>
<li>Number of plants (round up)</li>
<li>CY of mulch (round up to whole CY)</li>
<li>CY of compost (round up to whole CY)</li>
<li>LF of edging</li>
<li>Material cost for each line and the subtotal</li>
<li>Sales tax and material total</li>
</ol>`,
  deeper: `<p><strong>Answers:</strong></p>
<ol>
<li>800 + 150 = <strong>950 SF (square feet)</strong></li>
<li>950 × 1.155 ÷ 4 = 274.3, so <strong>275 plants</strong></li>
<li>950 × 3 ÷ 324 = 8.8, so <strong>9 CY</strong></li>
<li>950 ÷ 43,560 × 200 = 4.36, so <strong>5 CY</strong></li>
<li>Box around the L is 40 × 30, so (40 + 30) × 2 = <strong>140 LF</strong></li>
<li>Plants 275 × $9.50 = $2,612.50. Mulch 9 × $45.00 = $405.00. Compost 5 × $40.00 = $200.00. Edging 140 × $3.25 = $455.00. Subtotal <strong>$3,672.50</strong>.</li>
<li>Tax $3,672.50 × 0.0875 = $321.34. Material total <strong>$3,993.84</strong>.</li>
</ol>
<p>Labor, equipment, overhead and profit come later: Modules 9 and 10.</p>`,
  src: "Compost rate from 11-428704 plans PL-1. All other numbers are made up for practice."
},

{ h: "Common math mistakes and how to stop them",
  lead: "Almost every costly estimating mistake is one of these. Keep this list next to your formula sheet.",
  body: `<div class="tablewrap"><table>
<thead><tr><th>Mistake</th><th>How big</th><th>How to stop it</th></tr></thead>
<tbody>
<tr><td>SF (square feet) priced as SQYD (forgot ÷ 9)</td><td>9 times off</td><td>Write the unit next to every number</td></tr>
<tr><td>CF (cubic feet) ÷ 9 instead of ÷ 27</td><td>3 times too much</td><td>Use SF × inches ÷ 324 for volume</td></tr>
<tr><td>12.5 ft read as 12 ft 5 in</td><td>Small, but adds up</td><td>Do all math in decimal feet</td></tr>
<tr><td>Diameter used as radius</td><td>4 times too much area</td><td>Write “r =” before you start</td></tr>
<tr><td>Percent typed as a whole number</td><td>100 times off</td><td>8.75% = 0.0875, every time</td></tr>
<tr><td>Rounding in the middle</td><td>Grows with quantity</td><td>Round once, at the end</td></tr>
<tr><td>Dropped or extra zero in an extension</td><td>10 times off</td><td>Estimate in your head first</td></tr>
<tr><td>Half-size print measured as full size</td><td>2 times off</td><td>Check a known dimension on every sheet</td></tr>
<tr><td>Flat area used on a steep slope</td><td>About 12% short on 2:1</td><td>Use the slope factor</td></tr>
<tr><td>Markup confused with margin</td><td>Short on profit</td><td>See Module 10</td></tr>
<tr><td>SUM range missing rows</td><td>Missing lines</td><td>Re-check totals after inserting rows</td></tr>
</tbody></table></div>`,
  watch: `<p>The best protection is a second check by a different method: by hand and by spreadsheet, top-to-bottom and bottom-to-top, or by a second person.</p>`
},

{ t: "terms", h: "Words to know",
  lead: "A starter glossary for construction bidding. You'll see every one of these again in Modules 1 to 16.",
  terms: [
    ["Bid", "A written promise to do specific work for a specific price."],
    ["Scope", "Exactly what work is included in your bid."],
    ["Takeoff", "Counting and measuring everything on the plans."],
    ["Estimate", "Your calculation of what the work will cost you."],
    ["GC (general contractor)", "The company hired by the owner to build the whole project. Hires subs."],
    ["Sub (subcontractor)", "A specialty company hired by the GC for one part of the work."],
    ["Prime contractor", "The contractor hired directly by the owner."],
    ["Owner", "Whoever pays for the project: a developer, HOA, city or agency."],
    ["Landscape architect (LA)", "Designs the landscape and irrigation and writes the landscape specs."],
    ["Plans (drawings)", "The sheets that show what to build and where."],
    ["Specifications (specs)", "The written book of products, methods and rules."],
    ["Addendum", "An official change to the bid documents before bids are due. Plural: addenda."],
    ["RFI", "Request for information: a written question about the documents."],
    ["Bid form", "The agency's form where you write your prices."],
    ["Unit price", "The price for one unit, like $12.00 per LF."],
    ["Extension", "Quantity × unit price for one line."],
    ["Lump sum (LS)", "One price for a whole item or job."],
    ["Quantity", "How many units: the number on the bid form or from your takeoff."],
    ["LF", "Linear foot: a length."],
    ["SF / SQYD", "Square foot / square yard (9 SF): an area."],
    ["CY", "Cubic yard (27 CF): a volume."],
    ["EA", "Each: a count of items."],
    ["GPM", "Gallons per minute: how fast water flows."],
    ["PSI", "Pounds per square inch: water pressure."],
    ["On center (o.c.)", "Spacing measured from the center of one plant or head to the next."],
    ["Container size", "The pot a plant comes in: #1, #5, #15, 24\" box."],
    ["Plant group", "Caltrans letter for a plant size, like A for #1 or K for 24\" box."],
    ["Scale", "How much smaller the drawing is than real life, like 1\" = 20'."],
    ["Station (Sta)", "Distance in feet along a survey line. Sta 298+55 = 29,855 ft."],
    ["Slope (2:1)", "Steepness. 2:1 means 2 ft across for every 1 ft up (50%)."],
    ["Cost", "What the job costs you to build."],
    ["Price", "What you charge the customer."],
    ["Markup", "Amount added to cost, as a percent of cost."],
    ["Margin", "Profit as a percent of price."],
    ["Sales tax", "Tax on materials. In California the installing contractor usually pays it, so it goes in your cost."],
    ["Retention", "Part of each payment held back until the job is finished."],
    ["Working day", "A day that counts toward contract time, as the contract defines it."],
    ["Calendar day", "Every day on the calendar, including weekends and holidays."],
    ["Percent over low", "How far a bid was above the lowest bid, as a percent of the low bid."],
    ["Engineer's estimate", "The agency's own estimate of the job cost, often printed for bidders."],
    ["Bid tab", "The agency's list of every bidder's price after bids are opened."],
    ["Caltrans", "California Department of Transportation, the state highway agency."],
    ["Bid Express", "The website Caltrans uses for electronic bids."],
    ["CF", "Cubic foot: a box 1 ft × 1 ft × 1 ft. 27 CF = 1 CY."],
    ["LS / LB / GAL", "Lump sum / pound / gallon."],
    ["DG", "Decomposed granite: crushed rock used for paths and mulch."],
    ["PVC", "Polyvinyl chloride: the white plastic pipe used for most irrigation."],
    ["Class 315 / SCH 40", "Ways to name PVC pipe strength: pressure class (315 psi) or Schedule 40 wall thickness."],
    ["Nominal size", "The name of a pipe size (1\", 1-1/4\"), not its exact measurement."],
    ["CDTFA", "California Department of Tax and Fee Administration: posts sales tax rates."],
    ["PDF", "Portable Document Format: the file type plans and specs come in."],
    ["OCR", "Optical character recognition: turns scanned text into searchable text."],
    ["CSI MasterFormat", "The Construction Specifications Institute numbering system for specs, like 32 84 00 Planting Irrigation."],
    ["Sheet names (L-1, IP-1, PL-1, PP-7, PQ-1)", "Plan sheet labels: L landscape, IP irrigation plan, PL planting legend, PP planting plan, PQ planting quantities. Each plan set lists its own."],
    ["TYP", "Typical: the same detail or note applies everywhere it fits."],
    ["NTS", "Not to scale: don't measure it."],
    ["(E) / (N)", "Existing / new."],
    ["NIC", "Not in contract: shown but not part of your bid."],
    ["POC", "Point of connection: where the irrigation gets its water."],
    ["RCV", "Remote control valve: opens and closes one irrigation zone."],
    ["BFP", "Backflow preventer: keeps irrigation water from flowing back into drinking water."],
    ["VIF", "Verify in field: check the real condition on site."],
    ["SIM / EQ", "Similar / equal."],
    ["LT / RT", "Left / right of a survey line, looking toward higher stations."],
    ["Radius / diameter", "Center to edge / edge to edge through the center."],
    ["Extension error", "A wrong quantity × unit price answer, often from a dropped or extra zero."]
  ]
},

{ t: "quiz", id: "m0", h: "Check yourself",
  lead: "Tap an answer to see if you got it. You can try again any time.",
  qs: [
    { q: "What is 1-1/4\" written as a decimal?", a: ["1.14", "1.25", "1.4"], c: 1, why: "1/4 = 1 ÷ 4 = 0.25, so 1-1/4 = 1.25." },
    { q: "A plan dimension says 12.5 ft. How long is that in feet and inches?", a: ["12 ft 5 in", "12 ft 6 in", "12 ft 50 in"], c: 1, why: "0.5 ft × 12 = 6 in. Decimal feet are not inches." },
    { q: "How do you change square feet to square yards?", a: ["Divide by 3", "Divide by 9", "Divide by 27"], c: 1, why: "A square yard is 3 ft × 3 ft = 9 SF (square feet)." },
    { q: "A 1,350 SF bed gets 3\" of mulch. About how many CY (cubic yards)?", a: ["12.5 CY", "37.5 CY", "112.5 CY"], c: 0, why: "SF × inches ÷ 324 = 1,350 × 3 ÷ 324 = 12.5 CY." },
    { q: "How many square feet are in one acre?", a: ["5,280", "27,000", "43,560"], c: 2, why: "One acre is 43,560 SF. 5,280 is the feet in a mile." },
    { q: "What is the area of a circle 10 ft across?", a: ["31.4 SF", "78.5 SF", "314 SF"], c: 1, why: "Radius = 5 ft. 3.14 × 5 × 5 = 78.5 SF. Using the diameter gives an answer 4 times too big." },
    { q: "What is 8.75% sales tax on $2,000?", a: ["$17.50", "$175.00", "$1,750.00"], c: 1, why: "$2,000 × 0.0875 = $175.00. Move the decimal two places before you multiply." },
    { q: "Sta 298+55 means:", a: ["298.55 ft", "29,855 ft along the line", "298 stations and 55 sheets"], c: 1, why: "Drop the plus sign and read it as feet: 29,855 ft from the start of that survey line." },
    { q: "A plan is drawn at 1\" = 50'. You measure 3.2\" on a full-size sheet. How far is that?", a: ["16 ft", "53.2 ft", "160 ft"], c: 2, why: "3.2 × 50 = 160 ft. Check the print is full size first." },
    { q: "On a Caltrans bid, Group K means:", a: ["1-gallon plant", "24-inch box", "Cutting"], c: 1, why: "In the Caltrans plant group table, A is No. 1, B is No. 5, U is No. 15, K is 24-inch box and H is cutting." },
    { q: "Someone wrote 190 CY × $50.00 = $95,000.00. What's wrong?", a: ["Nothing", "An extra zero: it should be $9,500.00", "The unit should be SF"], c: 1, why: "A quick head check: 200 × 50 = 10,000. The extension is 10 times too big." },
    { q: "Cost is $100,000 and price is $120,000. What is the margin?", a: ["16.7%", "20%", "120%"], c: 0, why: "Margin is profit ÷ price: $20,000 ÷ $120,000 = 16.7%. The markup is 20%." },
    { q: "A 2:1 slope measures 4,000 SF on the plan. Why price more than 4,000 SF of mulch?", a: ["Plans are drawn flat, so the real slope surface is bigger", "Mulch shrinks on slopes", "You shouldn't: plan area is always exact"], c: 0, why: "A 2:1 slope has about 1.118 times the flat area. Read how the bid item is measured, and put the extra material inside your price." },
    { q: "Bids are due at 14:00. What time is that?", a: ["2:00 AM", "2:00 PM", "4:00 PM"], c: 1, why: "After noon, subtract 12: 14 − 12 = 2:00 PM." },
    { q: "In a spreadsheet, why write =D2*$B$1 instead of =D2*B1?", a: ["It runs faster", "$B$1 stays locked on the tax rate cell when you copy the formula down", "It rounds to cents"], c: 1, why: "The $ signs stop the cell address from changing when the formula is copied to other rows." }
  ]
},

{ t: "practice", id: "m0", h: "Practice assignments",
  lead: "Do these with paper, a calculator and a computer. Check each one off when it's done.",
  items: [
    { h: "Set up your notebook and bid folders", hrs: 0.5, d: "<p>Start a bid notebook with five sections: Words to know, Formulas, Questions to ask, Bid log and Lessons. Write the formula sheet from this module (÷ 9, ÷ 27, ÷ 324, 43,560, 1.155, slope factors) and check each one against the slides. On your computer, make an empty bid folder template with the eight subfolders from the file naming slide.</p>" },
    { h: "Redo all six drills from memory", hrs: 0.75, d: "<p>Two days after reading, redo Drills 1 to 6 on paper without looking at the answers. Then check. For every miss, write in your Lessons section what went wrong (unit, decimal, formula or typing) and reread that slide.</p>" },
    { h: "Measure a real planting bed", hrs: 0.75, d: "<p>With a 100 ft tape, measure a real planting bed at a job, your home or a park. Sketch it, split it into shapes, and find its area and perimeter. Then figure: plants at 18\" o.c. triangular, CY of mulch at 3\", and compost at 200 CY per acre. If the bed is on a slope, estimate the slope (rise over run) and apply the slope factor.</p>" },
    { h: "Build the takeoff and pricing spreadsheet", hrs: 0.75, d: "<p>In Excel or <a href=\"https://sheets.google.com\" target=\"_blank\" rel=\"noopener\">Google Sheets</a>, build the sheet from the takeoff and pricing slide. Put the tax rate in one locked cell ($B$1), use =ROUNDUP for buy quantities, and a SUM for the total. Enter Drill 6 and check that your sheet matches the answers to the cent. Then change the tax rate and watch the total update.</p>" },
    { h: "Check real extensions in the Real Bid Lab", hrs: 0.5, d: "<p>Open <a href=\"#lab-11-428704\">Real Bid Lab · 11-428704</a>. Pick five items with different units (EA, LF, CY, LB, SQYD). For each bidder, multiply quantity × unit price and check it. Then work out each bidder's percent over the low bid. Write the results in your bid log.</p>" },
    { h: "PDF practice on the real plans and specs", hrs: 0.5, d: "<p>From the Real Bid Lab, download the 11-428704 plans and Special Provisions. Use page thumbnails to find PL-1 and IP-1. Search the specs for “working days” and “Plant group.” Search the plans for “COMPOST.” If your PDF viewer has a measure tool, calibrate one sheet to 1\" = 50' using the scale bar and measure one run. Write down each step you took.</p>" },
    { h: "Glossary flash cards and teach-back", hrs: 0.25, d: "<p>Make flash cards for all the Words to know (paper or a free app). Then explain to a coworker, out loud, how to get CY of mulch from a bed's size and depth, and how to find percent over low. If you get stuck, reread that slide.</p>" }
  ]
},

{ h: "Module 0 summary",
  lead: "You now have the math, the units and the tools every later module uses. Keep your formula sheet close.",
  body: `<ul>
<li>Decimals of a foot are not inches. Fractions of an inch become decimals by dividing top by bottom.</li>
<li>Round once, at the end. Never round the agency's quantities. Round up what you buy.</li>
<li>Percents become decimals: 8.75% = 0.0875. Markup is on cost, margin is on price.</li>
<li>SF (square feet) ÷ 9 = SQYD (square yards). CF (cubic feet) ÷ 27 = CY (cubic yards). SF × inches ÷ 324 = CY. 1 acre = 43,560 SF.</li>
<li>Split odd shapes, use radius for circles, and use the slope factor on slopes.</li>
<li>Plants = SF ÷ spacing² (square) or SF × 1.155 ÷ spacing² (triangular). Caltrans groups: A #1, B #5, U #15, K 24" box, H cutting.</li>
<li>Quantity × unit price = extension. Check every extension and every total two ways.</li>
<li>Working days are not calendar days. Bid times are exact, often in 24-hour time.</li>
<li>Spreadsheets, PDF (Portable Document Format file) tools, clear email and tidy folders make every bid faster and safer.</li>
</ul>
<p><strong>Next: Module 1 · How Construction Bidding Works.</strong></p>`
}
]
});
