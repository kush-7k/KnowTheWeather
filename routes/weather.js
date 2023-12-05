
const express = require('express');
const router = express.Router();
const Weather = require('../models/Weather');
const weatherApi = require('./weather-api'); // Assuming this is the path to your weather-api.js file

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/users/login');
};

// Render the page with existing weather data
router.get('/', ensureAuthenticated, async (req, res) => {
  try {
    const weatherData = await Weather.find();
    res.render('index', { title: 'Weather CRUD App', weatherData, user: req.user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

// Fetch and store new weather data from OpenWeatherMap
router.get('/update', ensureAuthenticated, async (req, res) => {
  try {
    // Assuming you have a query parameter 'city' in the request
    const cityName = req.query.city;

    if (!cityName) {
      return res.status(400).json({ error: 'City name is required' });
    }

    // Fetch weather data from OpenWeatherMap
    const weatherApiResponse = await weatherApi.getWeather(cityName);

    // Extract relevant data from the API response (adjust as needed)
    const { name: city, main: { temp: temperature }, weather: [{ description: condition }] } = weatherApiResponse;

    // Save the weather data to the database
    const newWeatherData = new Weather({ city, temperature, condition });
    await newWeatherData.save();
    //weather displayed on the main home page
    res.redirect('/weather'); // Redirect to the main weather page
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating weather data' });
  }
});

module.exports = router;
