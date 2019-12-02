import React, { Component } from 'react';

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
      <div>
        <p>{postcodePickup}</p>
        <p>{cityPickup}</p>
        <p>{postcodeDropoff}</p>
        <p>{cityDropoff}</p>
        <p>{reference}</p>
        <p>{state}</p>
        <p>{reference_route}</p>
      </div>
    );
  }
}
