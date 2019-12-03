import React, { Component } from 'react';
import './Shipment.css';

export default class Shipment extends Component {
  render() {
    console.log(this.props.shipmentData);

    // take variables from data object
    const {
      postcodePickup,
      cityPickup,
      postcodeDropoff,
      cityDropoff,
      reference,
      state,
      reference_route
    } = this.props.shipmentData;

    return (
      <div className='shipmentData'>
        <div className='postcodesCities'>
          <div>{postcodePickup}</div>
          <div>{cityPickup}</div>
          <div>&#10230;</div> {/* hmtl entity for long rightwards arrow */}
          <div>{postcodeDropoff}</div>
          <div>{cityDropoff}</div>
        </div>
        <div>{reference}</div>
        <div>{state}</div>
        <div>{reference_route}</div>
      </div>
    );
  }
}
