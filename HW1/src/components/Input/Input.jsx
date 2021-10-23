import React, { Component } from 'react';
import './style.css';

class Input extends Component {
  render() {
    return (
      <div className='form__item'>
        <label htmlFor={this.props.id} className='form__label'>
          {this.props.id}
        </label>
        <input 
          className='form__input'
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}

export default Input;
