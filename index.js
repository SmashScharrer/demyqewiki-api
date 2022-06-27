const express = require("express");
const app = express();
const port = 8080;

/* # Middleware # */
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Hello !");
});

app.listen(8080, () => {
    console.log(`Serveur ${port} à l'écoute`);
});