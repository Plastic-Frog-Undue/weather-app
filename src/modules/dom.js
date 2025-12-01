export function displayCurrentWeather(current) {
    const weatherDisplay = document.getElementById('weather-display');
    document.getElementById('city-name').textContent = current.city;
    document.getElementById('description').textContent = current.description;
    document.getElementById('temp').textContent = `${current.temp}°C`;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${current.icon}@2x.png`;
    document.getElementById('wind').textContent = `Wind: ${current.wind} m/s`;
    document.getElementById('humidity').textContent = `Humidity: ${current.humidity}%`;
    document.getElementById('pressure').textContent = `Pressure: ${current.pressure} hPa`;
    document.getElementById('sunrise-sunset').textContent = `Sunrise / Sunset: ${current.sunrise} / ${current.sunset}`;
    weatherDisplay.style.display = 'inline-block';
}

export function displayForecast(forecast) {
    const hourlyForecastEl = document.getElementById('hourly-forecast');
    hourlyForecastEl.innerHTML = '';
    forecast.forEach(f => {
        const div = document.createElement('div');
        div.classList.add('forecast-item');
        div.innerHTML = `
            <p>${f.time}:00</p>
            <img src="https://openweathermap.org/img/wn/${f.icon}.png" width="40"/>
            <p>${f.temp}°C</p>
        `;
        hourlyForecastEl.appendChild(div);
    });
}
