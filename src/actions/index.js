import axios from 'axios'
const API_KEY = process.env.API_KEY
const WEATHER_BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather(city) {
  const fetchUrl = `${WEATHER_BASE_URL}&q=${city},us`
  const fetchRequest = axios.get(fetchUrl)
  return {
    type: FETCH_WEATHER,
    payload: fetchRequest
  }
}