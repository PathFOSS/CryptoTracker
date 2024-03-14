const PORT = 8081;
const express = require("express");
const mysql = require("mysql");

const app = express();
require("dotenv").config({path: "../.env"});

const db = mysql.createConnection({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE,
});

app.get("/monthly-calls", (req, res) => {
    const day = new Date().toISOString().split("T")[0];
    const yearMonth = day.substring(0,7);

    db.query("INSERT INTO `API_CALLS` (`DAY`, `DAILY_COUNT`) VALUES('" + day + "', 1) ON DUPLICATE KEY UPDATE `DAILY_COUNT` = `DAILY_COUNT` + 1");
    db.query("SELECT DATE_FORMAT(`DAY`, '%Y-%m') AS CURRENT_MONTH, SUM(`DAILY_COUNT`) AS TOTAL_COUNT FROM `API_CALLS` WHERE DATE_FORMAT(`DAY`, '%Y-%m') = '" + yearMonth + "' GROUP BY MONTH(`DAY`), YEAR(`DAY`)", (err, data) => {
        if (err) return res.json("Error in query");
        return res.json(data);
    })
})

app.listen(PORT, () => console.log("Listening on port " + PORT));