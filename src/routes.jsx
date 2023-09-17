import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import CompareCities from './components/compareCities'
import WeatherMap from './components/weatherMap'
import Header from './components/header'
import PrivateRoute from './privateRoute'

/* Class Routes */
class Routes extends Component {
  /**
    * Render.
    * return {String}.
  */
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <PrivateRoute path="/compareCities" component={CompareCities} />
              <PrivateRoute path="/weatherMap" component={WeatherMap} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routes
