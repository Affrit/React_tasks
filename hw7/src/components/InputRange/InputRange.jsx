import React, { useState } from 'react';
import { Input } from '../Input/Input';
import './style.css'

export const InputRange = ({ min, max, step }) => {
  const [value, setValue] = useState(() => {
    const maxValue = +max
    const minValue = +min
    const initialValue = Math.floor((maxValue - minValue) / 2 + minValue)

    return initialValue
  })

  const handleChange = ({ target: { value } }) => {
    setValue(value)
  }

  return (
    <div className='range-wrap'>
      <Input
        type='range' max={max} min={min} step={step}
        value={value} handleChange={handleChange}
      />
      <Input
        type='text' value={value} readOnly={true}
      />
    </div>
  )
}
