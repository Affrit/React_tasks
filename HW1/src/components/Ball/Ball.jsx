import React, { Component } from 'react';
import './style.css';
import cn from 'classnames'

class Ball extends Component {
  constructor() {
    super()
    this.state = {
      ballToggle: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      ballToggle: !prevState.ballToggle
    }))
  }

  render() {
    const { ballToggle } = this.state
    return (
      <div className='ball-wrap'>
        <div onClick={this.handleClick}
          className={cn('ball', { 'clicked': ballToggle })}>
        </div>
      </div>
    )
  }
}

export default Ball;
