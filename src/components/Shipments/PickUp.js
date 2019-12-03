import React, { Component } from 'react';

export default class PickUp extends Component {
  render() {
    // take variables from props data
    const { company, country, postcode, street } = this.props.pickup.address;
    const dateMin = this.props.pickup.date.min;
    const dateMax = this.props.pickup.date.max;
    const hourMin = this.props.pickup.hour.min;
    const hourMax = this.props.pickup.hour.max;

    return (
      <div>
        <div className='title'>Pick Up</div>
        <div>{company}</div>
        <div>{country}</div>
        <div>{postcode}</div>
        <div>{street}</div>
        <div className='title inline'>Date:</div>
        <div className='inline'>
          {dateMin}-{dateMax}
        </div>
        <br />
        <div className='title inline'>Time:</div>
        <div className='inline'>
          {hourMin}-{hourMax}
        </div>
      </div>
    );
  }
}
