import React from 'react';
import './style.css';
import { Navbar } from '../Navbar/Navbar';
import { UserInfo } from '../UserInfo/UserInfo';
import { UserControls } from '../UserControls/UserControls';

export const Header = (props) => {
  const { isAuth } = props

  return (
    <div className='header'>
      <Navbar />
      <div className='user'>
        {isAuth ? <UserInfo /> : <UserControls />}
      </div>
    </div>
  )
}
