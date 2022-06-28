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
        console.log("Error : " + error.code);
        response.status(500);
    });
});
// GET : Lastest Version
app.get("/version/lastest", async (request, response) => {
    await axios.get(hostDDRagon + "/api/versions.json", config).then((res) => {
        response.status(200).json(res.data[0]);
    }).catch((error) => {
        console.log("Error : " + error.code);
        response.status(500);
    });
});

/* ## Summoner ## */
// GET : Summoner by name
app.get("/summoner", async (request, response) => {
    await axios.get(hostRiotAPIv1 + "/lol/summoner/v4/summoners/by-name/Sn0W3838?api_key=" + process.env.RIOT_API_KEY, config).then((res) => {
        response.status(200).json(res.data);
    }).catch((error) => {
        console.log("Error : " + error.code);
        response.status(500);
    });
});

/* ## Masteries ## */
// GET : Champion masteries by summoner ID
app.get("/champion-masteries/:summonerId", async (request, response) => {
    await axios.get(hostRiotAPIv1 + "/lol/champion-mastery/v4/champion-masteries/by-summoner/" + request.params.summonerId + "?api_key=RGAPI-6082214f-5a9e-4dc9-a596-4f9fdef2eec5", config).then((res) => {
        response.status(200).json(res.data);
    }).catch((error) => {
        console.log("Error : " + error.code);
        response.status(500);
    });
});
// GET : Champion mastery by summoner ID & champion ID
app.get("/champion-masteries/:summonerId/by-champion/:championId", async (request, response) => {
    await axios.get(hostRiotAPIv1 + "/lol/champion-mastery/v4/champion-masteries/by-summoner/" + request.params.summonerId + "/by-champion/" + request.params.championId + "?api_key=RGAPI-6082214f-5a9e-4dc9-a596-4f9fdef2eec5", config).then((res) => {
        response.status(200).json(res.data);
    }).catch((error) => {
        console.log("Error : " + error.code);
        response.status(500);
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Serveur à l'écoute");
});