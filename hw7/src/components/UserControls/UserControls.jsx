import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button';

export const UserControls = () => {
  return (
    <div className='user-unlogged'>
      <Link to='/signup'>
        <Button
          type='button'
          name='Sign up'
          elemStyle='formSmall'
        />
      </Link>
      <Link to='/'>
        <Button
          type='button'
          name='Sign in'
          elemStyle='formSmall'
        />
      </Link>
    </div>
  )
}
