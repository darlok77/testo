import React, { Component } from 'react'

import { setWeatherData } from '../actions'

/** Class SearchQuery */
class SearchQuery extends Component {
  /**
    * Create a SearchQuery.
    * @param {Object} props.
  */
  constructor(props) {
    super(props)
    this.state = { searchField: '', err: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
    * Handle Submit.
    * @param {Object} event.
  */
  handleSubmit(event) {
    event.preventDefault()
    const { searchField } = this.state
    setWeatherData(searchField)
  }

  /**
    * Handle Change.
    * @param {Object} event.
  */
  handleChange(event) {
    this.setState({ searchField: event.target.value })
  }

  /**
    * Create a Render.
    * @param {String}.
  */
  render() {
    // todo set error
    return (
      <div id="divSearchCitie">
        <form id="formSearchCitie">
          <input id="inputSearch" type="text" onChange={this.handleChange} />
          <input id="btnSearch" type="submit" value="SEARCH" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default SearchQuery
