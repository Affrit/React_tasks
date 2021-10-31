import React, { Component } from 'react';
import './style.css';
import Input from '../Input/Input';

class InputRange extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.getInitialValue(props)
    }
  }

  getInitialValue = (props) => {
    const maxValue = +props.max
    const minValue = +props.min
    const defaultValue = Math.floor( (maxValue - minValue) / 2 + minValue )

    return defaultValue
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  render() {
    return (
      <div className='input-range'>
        <Input
          type="range"
          {...this.props}
          value={this.state.value} 
          handleChange={this.handleChange}
        />
        <Input
          type="text"
          readOnly={true}
          value={this.state.value}
        />
      </div>
    )
  }
}

InputRange.defaultProps = {
  min: '1',
  max: '100',
  step: '1'
}

export default InputRange
