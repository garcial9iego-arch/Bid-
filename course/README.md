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
| 4–16 | See `src/outline.js` | 82 | Planned |

## Structure

```
course/
  src/shell.html   page layout, styles and slide viewer
  src/outline.js   the 16-module outline (titles, hours, descriptions)
  src/m1.js ...    one file per finished module (slides as data)
  build.mjs        combines everything into one HTML file
  dist/index.html  standalone build: open it in any browser
  dist/course.html same build without the <html> wrapper (used for the claude.ai artifact)
```

## Build

```
node course/build.mjs
```

To add a module, create `src/mN.js` following the existing modules and rebuild. The outline marks a module "Ready" automatically once its file exists.

Progress, quiz answers and checked-off practice are saved in the viewer's browser only.

This course is training material, not legal, tax or insurance advice. Fees, limits and rules change; confirm any number at the source given on the slide before relying on it in a real bid.
