export const fetchWeatherAPI = (cityID) => {
  let lati = document.getElementById('latitude').value;
  let long = document.getElementById('longitude').value;
  //   let language = 'en';
  let APIKey = 'APIHERE';
  let url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${APIKey}`;
  fetch(url)
    .then((res) => {
      return res.json;
    })
    .then((data) => {
      console.log(data);
      const day = data.daily;
      console.log(day);
    })
    .catch(console.err);
};
