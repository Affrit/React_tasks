import React from 'react';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          isAuth ?
            <Component {...props} {...rest} /> :
            <Redirect to="/" />
        )
      }}
    />
  )
}