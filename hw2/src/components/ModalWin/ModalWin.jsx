import React, { Component } from 'react';
import './style.css';
import Form from '../Form/Form';
import Button from '../Button/Button';

class ModalWin extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        isShow: false
      }
  }

  onOpen = () => {
    this.setState({
      isShow: true
    })
  }

  onClose = () => {
    this.setState({
      isShow: false
    })
  }
  
  render() {
    return (
      <div className='modal'>
        <Button 
          type='button' 
          name='Open form' 
          onClick={this.onOpen} 
        />
        {this.state.isShow && <Form onClose={this.onClose} title='Form'/>}
      </div>
    )
  }
}

export default ModalWin;
