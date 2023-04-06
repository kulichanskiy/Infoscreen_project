const apiKey = "YOUR_API_KEY";
const city = "YOUR_CITY_NAME";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
   .then((response) => response.json())
   .then((data) => {
      const temp = data.main.temp;
      const weather = data.weather[0].description;
      const weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML = `${temp}°C<br>Погода: ${weather}`;
   });
