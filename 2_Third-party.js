const axios = require('axios');
     const API_KEY = 'YOUR_WEATHER_API_KEY';
     const city = 'London';
axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
       .then((response) => {
         console.log(response.data);
       })
       .catch((error) => {
         console.error(error);
       });
