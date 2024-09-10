const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const url = process.env.URL;
const apiKey = process.env.API_KEY;

// Exercício 1
app.get("/coord", async (req, res) => {
  const city = req.query.city;
  const response = await fetch(
    `${url}/geo/1.0/direct?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();
  res.json({
    latitude: data[0].lat,
    longitude: data[0].lon,
  })
});

app.listen(port, () => {
    console.log(`Servidor iniciado. Porta: ${port}`);
    });