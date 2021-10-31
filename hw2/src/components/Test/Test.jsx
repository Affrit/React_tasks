import React, { Component } from 'react';
import './style.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Test extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value > this.props.trigger ? false : true
  }

  render() {
    return (
      <div className='test'>
        <Input 
          type="text" readOnly={true} 
          value={this.props.value} 
        />
        <Button 
          type='button' 
          onClick={this.props.handleClick}
          name='Add +1'
        />
      </div>
    )
  }
}

export default Test
