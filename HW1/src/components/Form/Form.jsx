import React, { Component } from 'react';
import './style.css';
import Input from '../Input/Input'
import Button from '../Button/Button'

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

    e.preventDefault()
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <fieldset className='form__fields'>
          <legend className='form__title'>{this.props.title}</legend>
          <Input
            handleChange={this.handleChange}
            value={this.state.name}
            type='text' id='name'
            placeholder='insert your name'
          />
          <Input
            handleChange={this.handleChange}
            value={this.state.email}
            type='text' id='email'
            placeholder='insert your email'
          />
          <Input
            handleChange={this.handleChange}
            value={this.state.password}
            type='password' id='password'
            placeholder='insert your password'
          />
          <Button name='Submit' />
        </fieldset>
      </form>
    )
  }
}

export default Form;
