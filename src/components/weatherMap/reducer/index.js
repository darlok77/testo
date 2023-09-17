import { fromJS } from 'immutable'

import initialState from './initial-state'
import actionsType from '../actions/actions-type'

/**
  * Set Weather.
  * @param {Object} state.
  * @param {Object} action.
  * return {Object}.
*/
const setWeather = (state, action) => (
  fromJS(state)
    .setIn(['data'], action.data)
    .toJS()
)

/**
  * Add Data History.
  * @param {Object} state.
  * @param {Object} action.
  * return {Object}.
*/
const addDataHistory = (state, action) => (
  fromJS(state)
    .setIn(['datas'], action.datas)
    .toJS()
)

/**
  * Weather Map.
  * @param {Object} state.
  * @param {Object} action.
  * return {Object}.
*/
const weatherMap = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_WEATHER_DATA:
      return setWeather(state, action)
    case actionsType.ADD_DATAS:
      return addDataHistory(state, action)
    default:
      return state
  }
}

export default weatherMap
