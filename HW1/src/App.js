import React, { Component } from 'react';
import './App.css';
import Ball from './components/Ball/Ball';
import Form from './components/Form/Form'

class App extends Component {
  render() {
    return (
      <div className='app-wrap'>
        <Form title='React-form'/>
        <Ball />
      </div>
    )
  }
}

export default App;
