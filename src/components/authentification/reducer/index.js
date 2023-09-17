import { fromJS } from 'immutable'

import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const setUser = (state, action) => (
  fromJS(state)
    .setIn(['user'], action.user)
    .toJS()
)

const authentification = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.AUTH:
      return setUser(state, action)
    default:
      return state
  }
}

export default authentification
