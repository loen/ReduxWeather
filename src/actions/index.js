import axios from 'axios';

const API_KEY=be70db04674b66158ef3eddcecef0cf8;
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export fetchWeather(city) {
  const url = `ROOT_URL&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
