import React, { Component } from 'react';
import './style.css';

class Button extends Component {
  render() {
    return (
      <div className='form__item'>
        <button type='submit' className='form__btn'>
          {this.props.name}
        </button>
      </div>
    )
  }
}

export default Button;
