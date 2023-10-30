const express = require("express");
const axios = require("axios");
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get("/cities", async (req, res) => {
  try {
    const { cityName, cityCode, page, limit } = req.query;
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=12.9716&lon=77.5946&exclude=current&appid=${process.env.API_KEY}`
    );
console.log(response, "response response response");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
