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
// GET : All Versions
app.get("/versions", async (request, response) => {
    await axios.get(hostDDRagon + "/api/versions.json", config).then((res) => {
        response.status(200).json(res.data);
    }).catch((error) => {
        response.status(500);
        console.log(error);
    });
});
// GET : Lastest Version
app.get("/version/lastest", async (request, response) => {
    await axios.get(hostDDRagon + "/api/versions.json", config).then((res) => {
        response.status(200).json(res.data[0]);
    }).catch((error) => {
        response.status(500);
        console.log(error);
    });
});

/* ## Summoner ## */
// GET : Summoner by name
app.get("/summoner", async (request, response) => {
    await axios.get(hostRiotAPIv1 + "/lol/summoner/v4/summoners/by-name/Sn0W3838?api_key=" + process.env.RIOT_API_KEY, config).then((res) => {
        response.status(200).json(res.data);
    }).catch((error) => {
        console.log(error);
        response.status(500);
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Serveur à l'écoute");
});