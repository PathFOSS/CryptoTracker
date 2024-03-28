# PathFOSS Crypto Tracker
This repository contains all the JSX, HTML, CSS, and SVG files for a minimalist CoinMarketCap front-end.

## What is the purpose of the website?
To help users fetch key crypto metrics as fast as possible, by emphasizing minimal delivery and computations.

## Why is this faster than CoinMarketCap itsself?
This website does not load articles, ads, elaborate graphs, and other heavy components.

## How was the website made?
With ReactJS, Vite, and npm. Six CSS files were created for responsive behavior.

The front-end and back-end are hosted on Vercel. The front-end website queries the REST API at https://api.pathfoss.com in the /currencies and /currencies/currency?symbol=XXX paths relative to root.

To track API usage volumes, the webpage connects to a Vercel MySQL server at https://database.pathfoss.com/monthly-calls.

A free plan for the CoinMarketCap API is used.

## Why is the graph so basic?
The free API plan does not come with historical data, which is why there are only four data points for each graphs. Each datapoint is computed from percentage changes in the 90-day, 60-day, and 30-day intervals.

## Why am I getting errors from the API?
Please submit an issue in this repository with the console log. 

Most likely we have hit the 10,000 queries / month limit on the free API plan.

## Known Bugs
Responsible UI: Vercel hosting jams responsive CSS loading on browser resize, although the web app functions well on localhost. 

This is the error message on Firefox: "Layout was forced before the page was fully loaded. If stylesheets are not yet loaded this may cause a flash of unstyled content."

Mobile devices seem to work but dev tools and inspect element on PC browsers seem to be broken.

This is under investigation.
