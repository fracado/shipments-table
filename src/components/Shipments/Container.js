import React, { Component } from 'react';
import './Container.css';
import ShipmentsRow from './ShipmentsRow.js';
import data from '../../shipments.json';

export default class Container extends Component {
  state = {
    data
  };

  render() {
    console.log(data);
    return (
      <div className='container'>
        <div className='headings'>
          <h4>Shipments</h4>
          <h4>Actions</h4>
        </div>
        {this.state.data.map((row, i) => (
          <ShipmentsRow row={row} key={i} />
        ))}
      </div>
    );
  }
}
