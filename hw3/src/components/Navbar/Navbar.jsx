import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__item-wrap'>
        <NavLink className='navbar__item' activeClassName='navbar__item-active' to='/signup' >
          signup
        </NavLink>
      </div>
      <div className='navbar__item-wrap'>
        <NavLink className='navbar__item' activeClassName='navbar__item-active' to='/input-range' >
          input range
        </NavLink>
      </div>
      <div className='navbar__item-wrap'>
        <NavLink className='navbar__item' activeClassName='navbar__item-active' to='/table' >
          table
        </NavLink>
      </div>
      <div className='navbar__item-wrap'>
        <NavLink className='navbar__item' activeClassName='navbar__item-active' to='/todo-list' >
          todo list
        </NavLink>
      </div>
    </div>
  )
}
