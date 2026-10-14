# Commercial Landscape Bidding: course

A 16-module, 100-hour course on bidding commercial landscape, irrigation and planting work in San Diego County, for someone starting from zero. It covers private work for general contractors and public work for cities, schools and agencies.

Each module is a set of written slides with:

- plain-language main text, plus an optional "Go deeper" section for laws, numbers and fine print
- examples, "watch out" notes and a "Words to know" glossary
- a self-check quiz and practice assignments with hour estimates
- a read-aloud button on every slide

## Status

All 16 modules (100 hours) are written, plus two practice sections:

| Module | Title | Hours |
|---|---|---|
| 1 | How Construction Bidding Works | 6 |
| 2 | Your License, Your Company and Getting Bid-Ready | 6 |
| 3 | Finding Work and Deciding What to Bid | 6 |
| 4 | Reading Landscape and Irrigation Plans | 8 |
| 5 | Reading Specifications | 6 |
| 6 | Irrigation Takeoff | 8 |
| 7 | Planting, Soil and Hardscape Takeoff | 7 |
| 8 | Pricing Materials and Working with Suppliers | 5 |
| 9 | Labor, Production Rates and Equipment | 7 |
| 10 | Overhead, Markup and Your Final Number | 5 |
| 11 | Prevailing Wage and Public Works Compliance | 6 |
| 12 | Pre-Bid Meetings, RFIs, Addenda and Communication | 5 |
| 13 | Writing the Proposal | 5 |
| 14 | Submitting Public Bids and Bid Day | 6 |
| 15 | Real Bid Practice: full walkthrough of Caltrans 11-428704 | 8 |
| 16 | After the Bid: Contracts, Billing and Growing the Division | 6 |

**Plan Set Deep Dive** (`src/plans.js`, 6 h workshop): the real 65-sheet 11-428704 plan set, every sheet ranked by importance to bidding, then close-ups of the price-driving sheets. Images in `src/img/pdd/` are crops of the public Caltrans plan PDFs.

**Real Bid Lab** (below): price five real Caltrans jobs and compare to every bidder.

## Real Bid Lab

Five real Caltrans District 11 (San Diego County) highway planting and irrigation jobs, bid 2021–2022, from $557K to $11.5M. For each one the lab links the real plans, Special Provisions and addenda, lets you enter a unit price for every bid item (landscape scope only, or the full prime bid), then reveals every bidder's actual unit prices, your rank, your gap to the winner, and the items that differed most.

| Contract | Job | Bidders | Winning bid |
|---|---|---|---|
| 11-422004 | I-5 Carmel Valley: pervious concrete and landscape | 4 | $557,307.25 |
| 11-428704 | I-805 Chula Vista: recycled-water conversion and planting | 6 | $1,176,120.00 |
| 11-431064 | SR-905 Otay Mesa: new highway landscaping | 3 | $4,247,463.10 |
| 11-428804 | I-805 / SR-905 San Ysidro: recycled-water conversion | 10 | $5,468,945.45 |
| 11-430674 | SR-5/75/805/905: planting, irrigation and slope paving | 5 | $11,546,030.50 |

Source data is saved in `data/caltrans/<contract>/` (Bid Summary PDF and text, bid item list, contract page JSON, document list). `tools/parse_bidsum.py` reads every bidder's line items from the Bid Summary and checks that they add up to the printed total; `tools/build_realbids.py` turns the folders into `src/realbids.js`. Documents come from Caltrans Contractors Corner (https://cdotprod.service-now.com/cc).

## Structure

```
course/
  src/shell.html   page layout, styles and slide viewer
  src/outline.js   the 16-module outline (titles, hours, descriptions)
  src/m1.js ...    one file per module (slides as data)
  src/plans.js     Plan Set Deep Dive workshop
  src/img/         plan sheet images used by the deep dive
  src/realbids.js  generated Real Bid Lab data (do not edit by hand)
  src/lab.js       Real Bid Lab pages
  data/caltrans/   saved Caltrans source documents for the lab
  tools/           scripts that parse Caltrans Bid Summaries
  build.mjs        combines everything into one HTML file
  dist/index.html  standalone build: open it in any browser
  dist/course.html same build without the <html> wrapper (used for the claude.ai artifact)
```

## Build

```
python3 course/tools/build_realbids.py   # only when lab data changes
node course/build.mjs
```

To edit a module, change `src/mN.js` and rebuild. `MODULES=1,2,3 node course/build.mjs` builds only the listed modules.

Progress, quiz answers and checked-off practice are saved in the viewer's browser only.

This course is training material, not legal, tax or insurance advice. Fees, limits and rules change; confirm any number at the source given on the slide before relying on it in a real bid.
