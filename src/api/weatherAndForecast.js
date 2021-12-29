import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: "1b825daf58d455d1161c0dd1607a1aec",
        units: "metric"
      }
    }
  );

  return response;
}

export default getWeatherAndForecast;
