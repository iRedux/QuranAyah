const express = require("express");
const https = require("https");

const app = express();
const port = 3000;

app.get("/", function(req, res){
    const ayahNum = Math.floor(Math.random() * 6236) + 1;

    url = "https://api.alquran.cloud/v1/ayah/" + ayahNum;
    https.get(url, function(response){
        response.on("data", function(data){
            const ayahData = JSON.parse(data);
            res.send(ayahData.data.text);
        });
    });
});

app.listen(process.env.PORT || port, function(){
    console.log("Server is up");
});