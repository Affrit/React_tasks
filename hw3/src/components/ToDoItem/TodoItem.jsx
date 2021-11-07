import React from 'react';
import './style.css';
import { Button } from '../Button/Button';

export const ToDoItem = (props) => {
  const { id, text, backColor, textColor, onDeleteItem } = props

  return (
    <div style={{ backgroundColor: backColor, color: textColor }} className='item-wrap'>
      <div className='todo__close-btn'>
        <Button onClick={() => onDeleteItem(id)} elemStyle='close' />
      </div>
      <div className='item__body'>
        <span>{`${id}.`}</span>
        <p className='item__text'>{text}</p>
      </div>
    </div>
  )
}
