
//USING AXOIS JAVASCRIPT TO SUPPORT THE API KEY 
const axios = require('axios');

const getWeather = async (cityName) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

module.exports = { getWeather };
