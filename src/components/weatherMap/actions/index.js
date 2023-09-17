import axios from 'axios'

import actionsType from './actions-type'
import store from '../../../store'

/**
 * Format data
 * @param {Array} data
 * @return {Array} formatedData
 */
const formatData = (data) => {
  const formatedData = {
    temp: Math.round(data.main.temp - 273.15),
    humidity: Math.round(data.main.humidity),
    temp_min: Math.round(data.main.temp_min - 273.15),
    temp_max: Math.round(data.main.temp_max - 273.15),
    coord: [data.coord.lat, data.coord.lon],
    name: data.name
  }
  return formatedData
}

/**
 * Set Weather
 * @param {Array} data
 * return {Object}
 */
const setWeather = data => ({
  type: actionsType.GET_WEATHER_DATA,
  data: formatData(data)
})

export const addDataHistory = (data, history) => {
  history.push(data)
}

/**
 * Set Weather Data
 * @param {String} citie
 */
export const setWeatherData = (citie) => {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${citie}&APPID=b1578017bd124add823e2634584d09ae`
  axios.get(apiUrl).then((response) => {
    store.dispatch(setWeather(response.data))
  })
}
