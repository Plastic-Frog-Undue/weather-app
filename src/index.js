import "./style.css";

import { fetchCurrentWeather, fetchForecast } from './modules/api.js';
import { processCurrentWeather, processForecast } from './modules/processData.js';
import { displayCurrentWeather, displayForecast } from './modules/dom.js';

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
        const currentData = await fetchCurrentWeather(city);
        if (currentData.cod !== 200) {
            alert('City not found');
            return;
        }

        const forecastData = await fetchForecast(city);

        const current = processCurrentWeather(currentData);
        const forecast = processForecast(forecastData);

        displayCurrentWeather(current);
        displayForecast(forecast);

        const weatherMain = currentData.weather[0].main.toLowerCase();
        const body = document.body;
        const card = document.querySelector('.weather-card');

        switch(weatherMain) {
            case 'clear':
                body.style.background = 'linear-gradient(to bottom, #fceabb, #f8b500)';
                card.style.background = 'linear-gradient(to bottom, #fffbea, #fff2b5)';
                break;
            case 'clouds':
                body.style.background = 'linear-gradient(to bottom, #d7d2cc, #304352)';
                card.style.background = 'linear-gradient(to bottom, #f0f0f0, #d3d3d3)';
                break;
            case 'rain':
            case 'drizzle':
                body.style.background = 'linear-gradient(to bottom, #4e54c8, #8f94fb)';
                card.style.background = 'linear-gradient(to bottom, #e0eafc, #cfdef3)';
                break;
            case 'snow':
                body.style.background = 'linear-gradient(to bottom, #e0f7fa, #b2ebf2)';
                card.style.background = 'linear-gradient(to bottom, #ffffff, #e0f7fa)';
                break;
            case 'thunderstorm':
                body.style.background = 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)';
                card.style.background = 'linear-gradient(to bottom, #4e5d6c, #6b7a89)';
                break;
            default:
                body.style.background = 'linear-gradient(to bottom, #74ebd5, #acb6e5)';
                card.style.background = 'linear-gradient(to bottom, #ffffff, #f0f8ff)';
        }

    } catch (err) {
        console.error(err);
        alert('Error fetching weather data');
    }
});
