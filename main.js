const searchInput = document.querySelector(".input");
const searchBtn = document.getElementById("searchBtn");
const imageWeather = document.getElementById("weather-img");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");

const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");


async function checkWeather(city) {
    const appKey = "8a0f70c33c6f8afca24e9fce5ef0306e";
    const appUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}`;
    const weather_data = await fetch(`${appUrl}`).then(response => response.json());
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}km/h`;
    cityName.innerHTML = `${weather_data.name}`;
    console.log(weather_data);

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            imageWeather.src = "./images/icons8-partly-cloudy-day-96.png";
            break;
        case 'Rain':
            imageWeather.src = "./images/cloudy_1163657.png";
            break;
        case 'Clear':
            imageWeather.src = "./images/sun_869869.png";
            break;
        case 'Mist':
            imageWeather.src = "./images/cloud_1163624.png";
            break;

    }







}
searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});