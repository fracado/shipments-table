import React, { Component } from 'react';
import './Container.css';
import ShipmentsRow from './ShipmentsRow.js';
import data from '../../shipments.json';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='headings'>
          <h4>Shipments</h4>
          <h4 id='actionsHeader'>Actions</h4>
        </div>
        {this.state.data.map((row, i) => (
          <ShipmentsRow row={row} key={i} />
        ))}
      </div>
    );
  }
}
