import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const SignInForm = (props) => {
  const [userCred, setUserCred] = useState({
    email: '',
    password: '',
    isEmailValid: true,
    isPassValid: true
  })

  const { email, password, isEmailValid, isPassValid } = userCred
  const { title, onAuth } = props

  const validateField = (value) => {
    return value.length > 0
  }

  const validateForm = () => {
    const isEmailValid = validateField(email)
    const isPassValid = validateField(password)

    setUserCred({
      ...userCred,
      isEmailValid,
      isPassValid
    })

    return isEmailValid && isPassValid
  }

  const handleChange = ({ target }) => {
    setUserCred({
      ...userCred,
      [target.id]: target.value,
    })
  }

  const handleSubmit = (e) => {
    const credJSON = localStorage.getItem('userCredentials')
    const { email: emailfromStor, password: passwordfromStor } = JSON.parse(credJSON)

    e.preventDefault()

    if (!validateForm()) {
      return
    } else if (email === emailfromStor && password === passwordfromStor) {
      onAuth()
      props.history.push('/table')
    } else {
      props.history.push('/signup')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <fieldset className='form__fields'>
        <legend className='form__title'>{title}</legend>
        <Input
          handleChange={handleChange}
          value={email}
          type='text' name='email' id='email'
          placeholder='insert your email'
          elemStyle={isEmailValid ? 'form' : 'formError'}
        />
        <Input
          handleChange={handleChange}
          value={password}
          type='password' name='password' id='password'
          placeholder='insert your password'
          elemStyle={isPassValid ? 'form' : 'formError'}
        />
        <Button
          type='submit'
          name='Sign in'
          elemStyle='form'
        />
        <div className='redirect-wrap'>
          <span>Or you can sign up</span>
          <Link to='/signup'>
            <Button
              type='button'
              name='Sign up'
              elemStyle='formSmall'
            />
          </Link>
        </div>
      </fieldset>
    </form>
  )
}
