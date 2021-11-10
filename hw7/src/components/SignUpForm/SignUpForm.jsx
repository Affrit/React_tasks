import React, { useState } from 'react';
import '../SignInForm/style.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../store/actions/actions'

export const SignUpForm = (props) => {
  const [userCred, setUserCred] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    isNameValid: true,
    isEmailValid: true,
    isPassValid: true,
    isRepPassValid: true,
    isEqualPass: true
  })

  const dispatch = useDispatch()

  const { title } = props
  const { name, email, password, repeatPassword,
    isEqualPass, isNameValid, isEmailValid,
    isPassValid, isRepPassValid } = userCred

  const validateField = (value) => {
    return value.length > 0
  }

  const validateForm = () => {
    const isNameValid = validateField(name)
    const isEmailValid = validateField(email)
    const isPassValid = validateField(password)
    const isRepPassValid = validateField(repeatPassword)
    const isEqualPass = password === repeatPassword

    setUserCred({
      ...userCred,
      isNameValid,
      isEmailValid,
      isPassValid,
      isRepPassValid,
      isEqualPass
    })

    return isNameValid && isEmailValid && isPassValid && isRepPassValid && isEqualPass
  }

  const handleChange = ({ target }) => {
    setUserCred({
      ...userCred,
      [target.id]: target.value
    })
  }

  const handleSubmit = (e) => {
    const userCredentials = { name, email, password }
  
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    dispatch( setCredentials(userCredentials) )

    props.history.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <fieldset className='form__fields'>
        <legend className='form__title'>{title}</legend>
        <Input
          handleChange={handleChange}
          value={name}
          type='text' name='name' id='name'
          placeholder='insert your name'
          elemStyle={isNameValid ? 'form' : 'formError'}
        />
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
          elemStyle={isEqualPass && isPassValid ? 'form' : 'formError'}
        />
        <Input
          handleChange={handleChange}
          value={repeatPassword}
          type='password' name='repeat Password' id='repeatPassword'
          placeholder='repeat your password'
          elemStyle={isEqualPass && isRepPassValid ? 'form' : 'formError'}
        />
        <Button
          type='submit'
          name='Sign up'
          elemStyle='form'
        />
      </fieldset>
    </form>
  )
}
