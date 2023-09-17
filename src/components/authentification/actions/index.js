import sha1 from 'js-sha1'

import actionsType from './actions-type'
import store from '../../../store'
import mock from '../../../mock/mock.json'

/**
  * Set User.
  * @param {Object} user.
  * return {Object}
*/
const setUser = user => ({
  type: actionsType.AUTH,
  user
})

/**
  * Login.
  * @param {String} name.
  * @param {String} pwd.
*/
export const login = (name, pwd) => {
  mock.forEach((e) => {
    if (name === e.name && sha1(pwd) === e.pwd) {
      store.dispatch(setUser(e))
    }
  })
}

/**
  * Logout.
*/
export const logout = () => {
  store.dispatch(setUser({}))
}
