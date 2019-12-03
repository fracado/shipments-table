import React, { Component } from 'react';
import './Action.css';

export default class Action extends Component {
  render() {
    return (
      <div className='actionContainer'>
        <button className='button' id='activeButton'>
          reorder
        </button>
      </div>
    );
  }
}
