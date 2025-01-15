//select element
const searchBtn = document.querySelector("#searchbtn");
const cityInput = document.querySelector(".cityInput");
const weatherResult = document.querySelector("#weatherResult");


    searchBtn.addEventListener("click", async function(){
        const city = cityInput.value;
        const apikey = "3ae8be9e6bcac1b87d1e68f8216ad346";
    
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    
        const weatherData = await fetch(`${apiUrl}`).then(response => response.json());
        console.log(weatherData);

        document.querySelector(".cityName").innerHTML = "City: " + weatherData.name;
        document.querySelector(".temp").innerHTML = "Temperature: " + Math.round(weatherData.main.temp - 273.15) + " Celsius";
        document.querySelector(".description").innerHTML = "Weather: " + weatherData.weather[0].description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + weatherData.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = "Wind Speed: " + weatherData.wind.speed + " km/h";
    
    });
