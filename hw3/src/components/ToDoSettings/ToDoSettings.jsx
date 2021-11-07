import React from 'react';
import './style.css';
import { Input } from '../Input/Input';

export const ToDoSettings = (props) => {
  const { settings, onSetSettings, bGColor, textColor } = props

  const handleChange = ({ target }) => {
    onSetSettings(target)
  }

  return (
    <div className='todo-settings'>
      <div className='todo-settings__inner'>
        <div className='todo-settings__item'>
          <span className='todo-settings__title'>Text color:</span>
          <Input
            elemStyle='todo-settings' type='range'
            value={settings.textColorR} handleChange={handleChange}
            id='textColorR' name='R' min='0' max='255' step='1'
          />
          <Input
            elemStyle='todo-settings' type='range'
            value={settings.textColorG} handleChange={handleChange}
            id='textColorG' name='G' min='0' max='255' step='1'
          />
          <Input
            elemStyle='todo-settings' type='range'
            value={settings.textColorB} handleChange={handleChange}
            id='textColorB' name='B' min='0' max='255' step='1'
          />
          <Input
            elemStyle='todo-settings' type='range'
            value={settings.textColorO} handleChange={handleChange}
            id='textColorO' name='O' min='0' max='1' step='0.1'
          />
          <span>{textColor}</span>
        </div>

        <div className='todo-settings__item'>
          <span className='todo-settings__title'>BG color:</span>
          <Input
            elemStyle='todo-settings' type='range'
            value={settings.bGColorR} handleChange={handleChange}
            id='bGColorR' name='R' min='0' max='255' step='1'
          />
          <Input
            elemStyle='todo-settings' type='range'
            value={settings.bGColorG} handleChange={handleChange}
            id='bGColorG' name='G' min='0' max='255' step='1'
          />
          <Input
            elemStyle='todo-settings' type='range'
            value={settings.bGColorB} handleChange={handleChange}
            id='bGColorB' name='B' min='0' max='255' step='1'
          />
          <Input
            elemStyle='todo-settings' type='range'
            value={settings.bGColorO} handleChange={handleChange}
            id='bGColorO' name='O' min='0' max='1' step='0.1'
          />
          <span>{bGColor}</span>
        </div>
      </div>
      <div className='example' style={{ backgroundColor: bGColor, color: textColor }}>
        <span>Example Text</span>
      </div>
    </div>
  )
}
