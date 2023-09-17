import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Map,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'

/** Class WorldMap */
class WorldMap extends Component {
  /**
    * Create a WorldMap.
    * @param {Object} props.
  */
  constructor(props) {
    super(props)
    this.state = {
      datas: props.datas
    }
  }

  /**
    * Component Did Update.
    * @param {Object} prevProps.
  */
  componentDidUpdate(prevProps) {
    const { datas } = this.props
    if (datas !== prevProps.datas) {
      this.setDatas(datas)
    }
  }

  /**
    * setData.
    * @param {Array} datas.
  */
  setDatas(datas) {
    this.setState({ datas })
  }

  /**
    * Handle Click.
    * @param {Number} pos.
  */
  handleClick(pos) {
    const { datas } = this.props
    datas.splice(pos, 1)
    this.setState({ datas })
  }

  /**
    * Render.
    * return {String}.
  */
  render() {
    const position = [52.68751, 14.7504003]
    const zoom = 4
    const { datas } = this.state
    return (
      <div>
        <Map center={position} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {datas.map((data, pos) => (
            <Marker
              key={`marker-${pos}`}
              position={data.coord}
              title={data.name}
            >
              <Popup>
                <b>{data.name}</b>
                <br />
                {`${data.temp}°C`}
                <br />
                {`${data.temp_min}°C min`}
                <br />
                {`${data.temp_max}°C max`}
                <br />
                {`${data.humidity}% humidity`}
                <br />
                <p className="test" onClick={() => this.handleClick(pos)}>&#xe014;Remove</p>
              </Popup>
            </Marker>
          ))}
        </Map>
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

export default connect(mapStateToProps)(WorldMap)

