const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    
    const url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=4e063aed9dd36c8e1effe4b37e7e13e6";

    https.get(url, function(response) {
        console.log(response.statusCode);
    })

    res.send("Server is running")
});

app.listen(3000, function () {
    console.log("listening on 3000");
})