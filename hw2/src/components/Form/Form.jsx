import React, { Component } from 'react';
import './style.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.id]: target.value
    })
  }

  handleSubmit = (e) => {
    const { name, email, password } = this.state
    const userCredentials = { name, email, password }
    const userCredentialsJSON = JSON.stringify(userCredentials)

    localStorage.setItem('userCredentials', userCredentialsJSON)

    this.setState({
      name: '',
      email: '',
      password: ''
    })

    this.props.onClose()
    e.preventDefault()
  }

  render() { 
    const { title, onClose } = this.props
    const { name, email, password } = this.state
    
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <fieldset className='form__fields'>
          <legend className='form__title'>{title}</legend>
          <Button 
            type='button'
            onClick={onClose}
            elemStyle='close'
          />
          <Input
            handleChange={this.handleChange}
            value={name}
            type='text' id='name'
            placeholder='insert your name'
            elemStyle='form'
          />
          <Input
            handleChange={this.handleChange}
            value={email}
            type='text' id='email'
            placeholder='insert your email'
            elemStyle='form'
          />
          <Input
            handleChange={this.handleChange}
            value={password}
            type='password' id='password'
            placeholder='insert your password'
            elemStyle='form'
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
}

export default Form;
