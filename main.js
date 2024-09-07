const apiKey = "9d649d2fc20be0224fe4cc12432347ff";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let input = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let img = document.querySelector(".weather img")
let temp = document.querySelector("#temp");
let city = document.querySelector("#city");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".weather").style.display = "none";
})

const checkWeather = async (toFind) => {
    const response = await fetch(apiURL + `${toFind}` + `&appid=${apiKey}`);
    
    if (response.status == "404") {
        console.log("error");
        document.querySelector(".main-heading").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error-msg").style.display = "block";
    }
    else {
        const data = await response.json();
        console.log(response);

        temp.innerHTML = Math.trunc(data.main.temp) + "ºc";
        city.innerHTML = data.name;
        img.src = `images/${data.weather[0].main}.png`
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "km/h";
        input.value = "";

        document.querySelector(".main-heading").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error-msg").style.display = "none";
    }
}

btn.addEventListener("click", () => {
    searchCity = input.value;
    checkWeather(searchCity);
})

