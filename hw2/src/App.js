import React, { Component } from 'react';
import './App.css';
import InputRange from './components/InputRange/InputRange';
import Test from './components/Test/Test';
import ModalWin from './components/ModalWin/ModalWin';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleClick = () => {
    this.setState( prevState => {
      return { 
        value: prevState.value + 1 
      }
    })
  }

  render() {
    return (
      <div className="app-wrap">
        <InputRange min='1' max='100' step='1' />
        <Test trigger='15' value={this.state.value} handleClick={this.handleClick} />
        <ModalWin />
      </div>
    )
  }
}

export default App;
