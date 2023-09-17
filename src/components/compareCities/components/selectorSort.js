import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

/** Class SelectorSort */
class SelectorSort extends Component {
  /**
    * Create a selectorSort.
    * @param {Object} props.
  */
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  /**
    * Handle Change.
    * @param {Object} event.
  */
  handleChange(event) {
    const { update } = this.props
    const { value } = event.target
    this.setState({
      value
    })
    update(value)
  }

  /**
    * Render.
    * return {String}
  */
  render() {
    const { value } = this.state

    return (
      <FormControl component="fieldset" id="formControlSort">
        <FormLabel component="legend" id="labelSort">Sort by</FormLabel>
        <RadioGroup className="radioGroupSort" aria-label="position" name="position" value={value} onChange={e => this.handleChange(e)} row>
          <div>
            <FormControlLabel
              value="temp"
              control={<Radio color="primary" />}
              label="Temperature"
              labelPlacement="top"
              className="formControlerRadio"
            />
            <FormControlLabel
              value="temp_max"
              control={<Radio color="primary" />}
              label="Temperature max"
              labelPlacement="top"
              className="formControlerRadio"
            />
          </div>
          <div>
            <FormControlLabel
              value="humidity"
              control={<Radio color="primary" />}
              label="Humidity"
              labelPlacement="top"
              className="formControlerRadio"
            />
            <FormControlLabel
              value="temp_min"
              control={<Radio color="primary" />}
              label="Temperature min"
              labelPlacement="top"
              className="formControlerRadio"
            />
          </div>
        </RadioGroup>
      </FormControl>
    )
  }
}

export default SelectorSort
