const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Root route ("/") - Custom message
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Joke API! Server is running, you can now get a joke!\n" +
    "Note: Do not close this link to make JokeAPI work!" 
  );
});

// Endpoint to fetch a joke
app.get("/joke", async (req, res) => {
  try {
    const jokeResponse = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single&blacklistFlags=racist,sexist,explicit,religious,political");
    const joke = jokeResponse.data.joke || "No joke available!";
    res.json({ joke });
  } catch (error) {
    res.status(500).json({ joke: "Sorry, could not fetch a joke at the moment." });
  }
});

module.exports = app;
