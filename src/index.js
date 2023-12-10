function refreshWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityHeaderInput = document.querySelector("#city-header");
  cityHeaderInput.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function submitCity(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  searchCity(searchFormInput.value);
}

function searchCity(city) {
  let apiKey = "f3c5613898a1043cbte4a77d8c1bcfo0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeatherData);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", submitCity);

searchCity("London");
