import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const productMode = (env) => {
  if (env !== 'production') {
    return createStore(
      reducers,
      compose(
        applyMiddleware(thunk),
        applyMiddleware(createLogger())
      )
    )
  }

  return createStore(
    reducers,
    compose(applyMiddleware(thunk))
  )
}

export default productMode(process.env.NODE_ENV)
