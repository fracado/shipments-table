import React, { Component } from 'react';

export default class Cargo extends Component {
  render() {
    // take variables from props data
    const { size, type, weight } = this.props.cargo;

    return (
      <div>
        <div className='title'>Cargo</div>
        <div>{type}</div>
        <div>{size}</div>
        <div>{weight}</div>
      </div>
    );
  }
}
