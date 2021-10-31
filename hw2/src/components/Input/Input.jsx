import React, { Component } from 'react';
import './style.css';
import cn from 'classnames';

class Input extends Component {
  render() {
    const { elemStyle, id, handleChange, ...rest } = this.props
    const inputStyle = cn('input', {
      'form__input': elemStyle === 'form'
    })
    const labelStyle = cn('input-label', {
      'form__label': elemStyle === 'form'
    })
    const wrapStyle = cn('input-wrap', {
      'form__item': elemStyle === 'form'
    })

    return (
      <div className={wrapStyle}>
        <label className={labelStyle} htmlFor={id}>
          {id}
        </label>
        <input
          className={inputStyle} id={id}
          onChange={handleChange} {...rest}
        />
      </div>
    )
  }
}

export default Input;
