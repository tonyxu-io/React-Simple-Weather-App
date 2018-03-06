import axios from 'axios'
const API_KEY = '17a9f8e35f92890614f78c0ac5eb2870'
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