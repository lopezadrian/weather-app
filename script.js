const weather = document.querySelector('.weather');
const form = document.querySelector('form');

function convertTemp(kelvin, unit) {
  let celsius = kelvin - 273.15;
  let fahrenheit = (celsius * (9/5)) + 32;
  fahrenheit = fahrenheit.toFixed(2);
  celsius = celsius.toFixed(2);
  if(unit === "fahrenheit")
    return fahrenheit;
  if(unit === "celsius")
    return celsius;
}

async function getWeather(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c72d203ae648714169ecf931ca5f9dbe`, {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData);
  const feelsLike = convertTemp(weatherData.main.feels_like, "fahrenheit");
  const weatherMain = weatherData.weather[0].main;
  const weatherDescription = weatherData.weather[0].description;

  const weatherText = document.createTextNode(`It feels like ${feelsLike} \u00B0F ${weatherMain}: ${weatherDescription}`);
  weather.appendChild(weatherText);
}

function getLocation(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  getWeather(formProps.location);
}

form.addEventListener("submit", getLocation);