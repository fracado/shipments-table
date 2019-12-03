import React, { Component } from 'react';
import Shipment from './Shipment.js';
import './ShipmentsRow.css';
import Cargo from './Cargo.js';
import PickUp from './PickUp.js';
import DropOff from './DropOff.js';
import Action from './Action.js';

export default class ShipmentsRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedRow: false
    };
    this.toggleExpandRow = this.toggleExpandRow.bind(this);
  }
  toggleExpandRow() {
    this.setState({ expandedRow: !this.state.expandedRow });
  }

  render() {
    const pickup = this.props.row.pickup;
    const dropoff = this.props.row.drop_off;
    const cargo = this.props.row.cargo;
    const tracking = this.props.row.tracking_number;
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
      <div className='shipmentsRow' onClick={this.toggleExpandRow}>
        <Shipment shipmentData={shipmentData} />
        <Cargo
          cargo={cargo}
          expanded={this.state.expandedRow}
          tracking={tracking}
        />
        <PickUp pickup={pickup} expanded={this.state.expandedRow} />
        <DropOff dropoff={dropoff} expanded={this.state.expandedRow} />
        <Action cargo={cargo} />
      </div>
    );
  }
}
