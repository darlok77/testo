import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addDataHistory } from './actions'
import SearchQuery from './components/search_query'
import WorldMap from './components/map'

/** Class WeatherMap */
class WeatherMap extends Component {
  /**
    * Create a WeatherMap.
    * @param {Object} props.
  */
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      nbHistory: 0
    }
  }

  /**
    * Component Did Update.
    * @param {Object} prevProps.
  */
  componentDidUpdate(prevProps) {
    const { data, datas } = this.props
    const { nbHistory } = this.state
    if (data !== prevProps.data) {
      this.setData(data)
      if (nbHistory < 10) {
        addDataHistory(data, datas)
      }
    }
    if (datas !== prevProps.datas) {
      this.setNbHistory(datas.length)
    }
  }

  /**
    * Set Data.
    * @param {Object} data.
  */
  setData(data) { // ici
    this.setState({ data })
  }

  /**
    * Set Nb History.
    * @param {Number} nbHistory.
  */
  setNbHistory(nbHistory) { // ici
    this.setState({ nbHistory })
  }

  /**
    * Render.
    * return {String}.
  */
  render() {
    return (
      <div id="divWeather">
        <SearchQuery />
        <WorldMap />
      </div>
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
    data: state.weatherMap.data,
    datas: state.weatherMap.datas
  }
)

export default connect(mapStateToProps)(WeatherMap)
