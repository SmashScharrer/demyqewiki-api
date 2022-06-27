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
/* ## All Versions ## */
app.get("/versions", async (request, response) => {
    await axios.get(hostDDRagon + "/api/versions.json", config).then((res) => {
        response.status(200).json(res.data);
    }).catch((error) => {
        response.status(500);
        console.log(error);
    });
});

/* ## Summoner ## */
app.get("/summoner", async (request, response) => {
    await axios.get(hostRiotAPIv1 + "/cdn/" + + "/data/fr_FR/champion.json", config).then((res) => {
        response.status(200).json(res.data);
    }).catch((error) => {
        response.status(500);
        console.log(error);
    });
});

/* ## All Champions ## */
// app.get("/champions", async (request, response) => {
//     await axios.get(hostDDRagon + "/lol/summoner/v4/summoners/by-name/Sn0W3838?api_key=RGAPI-6082214f-5a9e-4dc9-a596-4f9fdef2eec5", config).then((res) => {
//         response.status(200).json(res.data);
//     }).catch((error) => {
//         response.status(500);
//         console.log(error);
//     });
// });

app.listen(process.env.PORT || 5000, () => {
    console.log("Serveur à l'écoute");
});