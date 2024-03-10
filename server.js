const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require('axios');
require("dotenv").config();

const app = express();

app.use(cors());

const currenciesQueried = 100;

app.get("/", (req, res) => {

    const options = {
        method: "GET",
        url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100`,
        headers: {
            "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
            "Accept": "application/json",
        }
    };

    axios.request(options)
        .then((response) => res.json(response.data))
        .catch((error) => console.log(error));
});

app.get("/currency*", (req, res) => {

    let dataArray = [];

    const firstOptions = {
        method: "GET",
        url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${req.query.symbol}`,
        headers: {
            "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
            "Accept": "application/json",
        }
    };

    const secondOptions = {
        method: "GET",
        url: `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${req.query.symbol}`,
        headers: {
            "X-CMC_PRO_API_KEY": process.env.CMC_PRO_API_KEY,
            "Accept": "application/json",
        }
    };

    const fetchData = async () => {
        await axios.request(firstOptions)
        .then((response) => {
            dataArray.push(response.data);
        })
        .catch((error) => console.log(error));

        await axios.request(secondOptions)
            .then((response) => {
                dataArray.push(response.data);
            })
            .catch((error) => console.log(error));

        res.json(dataArray)
    }

    fetchData();

});

app.listen(PORT, () => console.log("Listening on port " + PORT));