const express = require("express");
const app = express();

/* # Middleware # */
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Hello !");
});

app.listen(3000, () => {
    console.log("Serveur à l'écoute");
});