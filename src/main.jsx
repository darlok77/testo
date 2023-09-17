import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

import Routes from './routes'

/** Component App */
const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))
