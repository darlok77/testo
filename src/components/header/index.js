import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Login from '../authentification/components/login'
import { logout } from '../authentification/actions'

/** Class Header */
class Header extends Component {
  /** Create a Header. */
  constructor() {
    super()
    this.state = {
      islogged: false,
      haveData: false
    }
  }

  /**
    * Component Did Update.
    * @param {Object} prevProps.
  */
  componentDidUpdate(prevProps) {
    const { user, datas } = this.props
    if (user !== prevProps.user) {
      this.setIsLogged(user)
    }
    if (datas !== prevProps.datas) {
      this.setHaveData(datas)
    }
  }

  /**
    * Set Is Logged.
    * @param {Object} user.
  */
  setIsLogged(user) {
    if (Object.keys(user).length !== 0) {
      this.setState({ isLogged: false })
    } else {
      this.setState({ isLogged: true })
    }
  }

  /**
    * Set Have Data.
    * @param {Array} datas.
  */
  setHaveData(datas) {
    if (datas.length !== 0) {
      this.setState({ haveData: false })
    } else {
      this.setState({ haveData: true })
    }
  }

  /**
    * Handle Click Disconnect.
  */
  handleClickDisconnect() {
    logout()
  }

  /**
    * Show Login.
    * retrun {String}.
  */
  showLogin() {
    const { user } = this.props
    if (Object.keys(user).length !== 0) {
      return <div onClick={() => this.handleClickDisconnect()}>Disconnect</div>
    }
    return <Login />
  }

  /**
    * Show Page.
    * retrun {String}.
  */
  showPage() {
    const { user } = this.props
    if (Object.keys(user).length !== 0) {
      return (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link disabled className="nav-link" to="/weatherMap">Weather Map</Link>
          </li>
          {this.showWeatherCompare()}
        </ul>
      )
    }
    return ''
  }

  /**
    * Show Weather Compare.
    * retrun {String}.
  */
  showWeatherCompare() {
    const { datas } = this.props
    if (Object.keys(datas).length !== 0) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/compareCities">Compare Cities</Link>
        </li>
      )
    }
    return ''
  }

  /**
    * Render.
    * retrun {String}.
  */
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse" id="navbarNav">{this.showPage()}</div>
        <div id="openAuth">{this.showLogin()}</div>
      </nav>
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
    user: state.authentification.user,
    datas: state.weatherMap.datas
  }
)

export default connect(mapStateToProps)(Header)

