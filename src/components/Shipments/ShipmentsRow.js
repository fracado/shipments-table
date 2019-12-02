import React, { Component } from 'react';
import Shipment from './Shipment.js';
import './ShipmentsRow.css';
import Cargo from './Cargo.js';
import PickUp from './PickUp.js';
import DropOff from './DropOff.js';
import Action from './Action.js';

export default class ShipmentsRow extends Component {
  render() {
    console.log(this.props.row);
    const pickup = this.props.row.pickup;
    const dropoff = this.props.row.drop_off;
    const cargo = this.props.row.cargo;
    const shipmentData = {
      postcodePickup: pickup.address.postcode,
      cityPickup: pickup.address.city,
      postcodeDropoff: dropoff.address.postcode,
      cityDropoff: dropoff.address.city,
      reference: this.props.row.reference,
      state: this.props.row.state,
      reference_route: this.props.row.reference_route
    };

    return (
      <div className='shipmentsRow'>
        <Shipment shipmentData={shipmentData} />
        <Cargo cargo={cargo} />
        <PickUp pickup={pickup} />
        <DropOff dropoff={dropoff} />
        <Action />
      </div>
    );
  }
}
