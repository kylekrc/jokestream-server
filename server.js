const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5175;

app.use(cors());  // Allow cross-origin requests

// Endpoint to fetch a joke
app.get('/joke', async (req, res) => {
  try {
    const jokeResponse = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
    const joke = jokeResponse.data.joke || 'No joke available!';
    res.json({ joke });
  } catch (error) {
    res.status(500).json({ joke: 'Sorry, could not fetch a joke at the moment.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
