import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

/* Class PrivateRoute */
class PrivateRoute extends Component {
  /**
    * Render.
    * return {String}.
  */
  render() {
    const {
      path,
      component,
      user
    } = this.props
    if (user.name !== undefined) {
      return <Route path={path} component={component} exact />
    }
    return <Redirect to="/" />
  }
}

/**
  * mapStateToProps.
  * @param {Object} state.
  * return {Object}.
*/
const mapStateToProps = state => (
  {
    user: state.authentification.user
  }
)

export default connect(mapStateToProps)(PrivateRoute)
