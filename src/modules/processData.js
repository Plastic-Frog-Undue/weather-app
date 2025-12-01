export function processCurrentWeather(data) {
    return {
        city: `${data.name}, ${data.sys.country}`,
        description: data.weather[0].description,
        temp: data.main.temp.toFixed(1),
        icon: data.weather[0].icon,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),
    };
}

export function processForecast(data, count = 8) {
    return data.list.slice(0, count).map(item => ({
        time: new Date(item.dt * 1000).getHours(),
        temp: item.main.temp.toFixed(1),
        icon: item.weather[0].icon
    }));
}
