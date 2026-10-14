# Commercial Landscape Bidding: course

A 16-module, 100-hour course on bidding commercial landscape, irrigation and planting work in San Diego County, for someone starting from zero. It covers private work for general contractors and public work for cities, schools and agencies.

Each module is a set of written slides with:

- plain-language main text, plus an optional "Go deeper" section for laws, numbers and fine print
- examples, "watch out" notes and a "Words to know" glossary
- a self-check quiz and practice assignments with hour estimates
- a read-aloud button on every slide

## Status

| Module | Title | Hours | Status |
|---|---|---|---|
| 1 | How Construction Bidding Works | 6 | Ready |
| 2 | Your License, Your Company and Getting Bid-Ready | 6 | Ready |
| 3 | Finding Work and Deciding What to Bid | 6 | Ready |
| 15 | Real Bid Practice: full walkthrough of Caltrans 11-428704 (I-805 Chula Vista) | 8 | Ready |
| 4–14, 16 | See `src/outline.js` | 74 | Planned |

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
  src/m1.js ...    one file per finished module (slides as data)
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

To add a module, create `src/mN.js` following the existing modules and rebuild. The outline marks a module "Ready" automatically once its file exists.

Progress, quiz answers and checked-off practice are saved in the viewer's browser only.

This course is training material, not legal, tax or insurance advice. Fees, limits and rules change; confirm any number at the source given on the slide before relying on it in a real bid.
