import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { authToggle } from '../../store/actions/actions';

export const UserInfo = () => {
  const { name, email } = useSelector(({ login: { credentials: { name, email } } }) => ({
    name, email
  }))
  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch( authToggle(false) )
  }

  return (
    <div className='user-logged'>
      <span className='user-text'>name: {name}</span>
      <span className='user-text'>email: {email}</span>
      <Link to='/'>
        <Button
          type='button'
          name='log out'
          elemStyle='formSmall'
          onClick={onLogOut}
        />
      </Link>
    </div>
  )
}
