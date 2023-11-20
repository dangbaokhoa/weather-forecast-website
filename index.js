const API_KEY = "55de7d99777265c80e263e7902b65981";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName) {
  const response = await fetch(API_URL + cityName + `&appid=${API_KEY}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
  } 

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp / 10) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
  document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
  let currentWeather = data.weather[0].main;
  weatherIcon.src = `images/${currentWeather}.png`;

  document.querySelector(".error").style.display = "none";
  document.querySelector(".weather").style.display = "block";
}
searchBox.addEventListener('keypress', (event) => {
  if (event.key == "Enter") checkWeather(searchBox.value);
})
searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
})


  
