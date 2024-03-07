# PathFOSS Crypto Tracker
This repository contains all the JSX, HTML, CSS, and SVG files for a minimalist CoinMarketCap front-end.


## What is the purpose of the website?
To help users fetch key crypto metrics as fast as possible, by emphasizing minimal delivery and computations.

## Why is this faster than CoinMarketCap itsself?
This website does not load articles, ads, elaborate graphs, and other heavy components.

## How was the website made?
With ReactJS, Vite, and npm. Six CSS files were created for responsive behavior.

A free plan for the CoinMarketCap API was used.

## Why is the graph so basic?
The free API plan does not come with historical data, which is why there are only four data points for each graphs. Each datapoint is computed from percentage changes in the 90-day, 60-day, and 30-day intervals.

## Help I am getting errors from the API
Please submit an issue in this repository. Most likely we have hit the 10,000 queries / month limit on the free API plan.