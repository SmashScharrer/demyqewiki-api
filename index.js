/* # Require Dependencies # */
const express = require("express");
const app = express();
const axios = require("axios");

/* # Axios Config # */
const config = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
}

/* # API Static Data # */
const hostRiotAPIv1 = "https://euw1.api.riotgames.com";
const hostRiotAPIv2 = "https://europe.api.riotgames.com";
const hostDDRagon = "https://ddragon.leagueoflegends.com";

/* # Middleware # */
app.use(express.json());

/* # Endpoints # */
/* ## Versions ## */
// All Versions
app.get("/versions", async (request, response) => {
    await axios.get(hostDDRagon + "/api/versions.json", config).then((res) => {
        response.status(200).json(res.data);
    }).catch((error) => {
        response.status(500);
        console.log(error);
    });
});
// Lastest Version
app.get("/version/lastest", async (request, response) => {
    await axios.get(hostDDRagon + "/api/versions.json", config).then((res) => {
        response.status(200).json(res.data[0]);
    }).catch((error) => {
        response.status(500);
        console.log(error);
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Serveur à l'écoute");
});