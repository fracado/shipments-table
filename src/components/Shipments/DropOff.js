import React, { Component } from 'react';

export default class DropOff extends Component {
  render() {
    // take variables from props data
    const { company, country, postcode, street } = this.props.dropoff.address;
    const dateMin = this.props.dropoff.date.min;
    const dateMax = this.props.dropoff.date.max;
    const hourMin = this.props.dropoff.hour.min;
    const hourMax = this.props.dropoff.hour.max;

    return (
      <div>
        <div className='title'>Drop Off</div>
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
