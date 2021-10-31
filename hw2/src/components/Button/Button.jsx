import React, { Component } from 'react';
import './style.css';
import cn from 'classnames';

class Button extends Component {
  render() {
    const { elemStyle, name, ...rest } = this.props
    const btnStyle = cn('btn', {
      'form__btn': elemStyle === 'form',
      'close-btn': elemStyle === 'close'
    })
    const wrapStyle = cn('btn-wrap', {
      'form__item': elemStyle === 'form',
      'close-btn-wrap': elemStyle === 'close'
    })
    
    return (
      <div className={wrapStyle}>
        <button className={btnStyle} {...rest}>
          {name}
        </button>
      </div>
    )
  }
}

export default Button
