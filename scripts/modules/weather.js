const apiKey = "034c24a116f54d54c14adbbfd3a8dac6";
const city = "ZAPORIZHZHIA";
const url = `https://api.openweathermap.org/data/2.5/weather?q=ZAPORIZHZHIA&appid=034c24a116f54d54c14adbbfd3a8dac6&units=metric`;

fetch(url)
   .then((response) => response.json())
   .then((data) => {
      const temp = data.main.temp;
      const weather = data.weather[0].description;
      console.log(`${temp}°C<br>Погода: ${weather}`);
   });
