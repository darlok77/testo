import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from './components/chart'
import SelectorSort from './components/selectorSort'
// import SelectorData from './components/selectorData'

/** Class CompareCities */
class CompareCities extends Component {
  /**
    * Create a CompareCities.
    * @param {Object} props.
  */
  constructor(props) {
    super(props)
    this.updatePropertieBind = this.updatePropertie.bind(this)
    this.state = {
      propertie: 'temp'
    }
  }

  /**
    * Update Propertie.
    * @param {String} propertie.
  */
  updatePropertie(propertie) {
    this.setState({
      propertie
    })
  }

  /**
    * Render.
    * retrun {String}.
  */
  render() {
    const { datas } = this.props
    const { propertie } = this.state
    return (
      <div>
        <div id="selectorDiv">
          <SelectorSort update={this.updatePropertieBind} value={propertie} />
        </div>
        <Chart dataHistory={datas} propertie={propertie} />
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
    datas: state.weatherMap.datas
  }
)

export default connect(mapStateToProps)(CompareCities)
