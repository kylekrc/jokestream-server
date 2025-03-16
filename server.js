const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Endpoint to fetch a joke
app.get("/joke", async (req, res) => {
  try {
    const jokeResponse = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
    const joke = jokeResponse.data.joke || "No joke available!";
    res.json({ joke });
  } catch (error) {
    res.status(500).json({ joke: "Sorry, could not fetch a joke at the moment." });
  }
});

module.exports = app; // Remove app.listen() for Vercel deployment
