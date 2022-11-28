const weather = document.querySelector('.weather');

async function getWeather() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=c72d203ae648714169ecf931ca5f9dbe', {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData);
  weather.textContent = weatherData;
}

getWeather();