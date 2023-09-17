import { combineReducers } from 'redux'

import weatherMap from './components/weatherMap/reducer'
import authentification from './components/authentification/reducer'

export default combineReducers({
  weatherMap,
  authentification
})
