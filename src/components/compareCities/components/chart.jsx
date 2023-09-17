import React, { Component } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'

am4core.useTheme(am4themesAnimated)

/** Class Chart */
class Chart extends Component {
  /**
    * Create a chart.
    * @param {Object} props.
  */
  constructor(props) {
    super(props)
    this.state = {
      temp: [],
      tempMax: [],
      tempMin: [],
      humidity: []
    }
  }

  /**
    * Component Did Mount.
  */
  componentDidMount() {
    this.setData()
  }

  /**
    * Component Did Update.
    * @param {Object} prevProps.
    * @param {Object} prevState.
  */
  componentDidUpdate(prevProps, prevState) {
    const { propertie, dataHistory } = this.props
    const { temp } = this.state
    if (prevProps.propertie !== propertie) {
      this.setChart()
    }
    if (prevProps.dataHistory !== dataHistory) {
      this.setData()
      this.setChart()
    }
    if (prevState.temp !== temp) {
      this.setChart()
    }
  }

  /**
    * Component Will Unmount.
  */
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }

  /**
    * Set Data.
  */
  setData() {
    const { dataHistory } = this.props
    const tabTemp = []
    const tabTempMax = []
    const tabTempMin = []
    const tabHumidity = []
    // const tab = []

    dataHistory.map((citie) => {
      const temp = {
        name: citie.name,
        value: citie.temp
      }
      const tempMax = {
        name: citie.name,
        value: citie.temp_max
      }
      const tempMin = {
        name: citie.name,
        value: citie.temp_min
      }
      const humidity = {
        name: citie.name,
        value: citie.humidity
      }
      // tab.push(temp, tempMax, tempMin, humidity)
      tabTemp.push(temp)
      tabTempMax.push(tempMax)
      tabTempMin.push(tempMin)
      tabHumidity.push(humidity)

      return ''
    })
    this.setState({
      temp: tabTemp,
      tempMax: tabTempMax,
      tempMin: tabTempMin,
      humidity: tabHumidity
    })
  }

  /**
    * Set Chart.
  */
  setChart() {
    const {
      temp,
      tempMax,
      tempMin,
      humidity
    } = this.state
    const { propertie } = this.props

    const chart = am4core.create('chartdiv', am4charts.XYChart)
    chart.scrollbarX = new am4core.Scrollbar()

    switch (propertie) {
      case 'temp':
        chart.data = temp
        break
      case 'temp_max':
        chart.data = tempMax
        break
      case 'temp_min':
        chart.data = tempMin
        break
      case 'humidity':
        chart.data = humidity
        break
      default:
    }

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'name'
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.minGridDistance = 30
    categoryAxis.renderer.labels.template.horizontalCenter = 'right'
    categoryAxis.renderer.labels.template.verticalCenter = 'middle'
    categoryAxis.renderer.labels.template.rotation = 270
    categoryAxis.tooltip.disabled = true
    categoryAxis.renderer.minHeight = 110

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.minWidth = 10

    // Create series
    const series = chart.series.push(new am4charts.ColumnSeries())
    series.sequencedInterpolation = true
    series.dataFields.valueY = 'value'
    series.dataFields.categoryX = 'name'
    series.tooltipText = '[{categoryX}: bold]{valueY}[/]'
    series.columns.template.strokeWidth = 0
    series.tooltip.pointerOrientation = 'vertical'

    series.columns.template.column.cornerRadiusTopLeft = 10
    series.columns.template.column.cornerRadiusTopRight = 10
    series.columns.template.column.fillOpacity = 0.8

    // on hover, make corner radiuses bigger
    const hoverState = series.columns.template.column.states.create('hover')
    hoverState.properties.cornerRadiusTopLeft = 0
    hoverState.properties.cornerRadiusTopRight = 0
    hoverState.properties.fillOpacity = 1

    series.columns.template.adapter.add('fill', (fill, target) => (
      chart.colors.getIndex(target.dataItem.index)
    ))

    // Cursor
    chart.cursor = new am4charts.XYCursor()
  }

  /**
    * render.
    * return {String}
  */
  render() {
    return (
      <div id="chartdiv" />
    )
  }
}

export default Chart
