import React, { Component } from 'react'
import { connect } from 'react-redux'

/** Class Home */
class Home extends Component {
  /**
    * Show Info.
    * return {String}
  */
  showInfo() {
    const { user } = this.props
    if (user.name !== undefined) {
      return (
        <div>
          <h1 id="titleHome">{`Welcome to the weather app ${user.name}`}</h1>
          <div id="contentHome">
            <p> This app allows you to know meteorological information about the city you want </p>
            <p> Starting off is easy peasy </p>
            <p> Click on the menu Weather Map and search the city of your choice </p>
            <p>If you selects several city (10 max)</p>
            <p>you will be able to compare them in the new menu</p>
          </div>
        </div>
      )
    }
    return (
      <div>
        <h1 id="titleHome">Welcome to the weather app</h1>
        <div id="contentHome">
          <p> This app allows you to know meteorological information about the city you want </p>
          <p> Starting off is easy peasy. Connect yourself (top right) </p>
        </div>
      </div>
    )
  }

  /**
    * render.
    * return {String}
  */
  render() {
    return (
      <div id="divHome">{this.showInfo()}</div>
    )
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

export default connect(mapStateToProps)(Home)
