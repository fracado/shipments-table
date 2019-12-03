import React, { Component } from 'react';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Shipment.css';

export default class Shipment extends Component {
  render() {
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
      <div className='shipmentContainer'>
        <div className='shipment'>
          <div className='postcodesCities'>
            <div>{postcodePickup}&nbsp;</div>
            <div>{cityPickup}&nbsp;</div>
            <div>&#10230;</div> {/* hmtl entity for long rightwards arrow */}
            <div>&nbsp;{postcodeDropoff} </div>
            <div>&nbsp;{cityDropoff}</div>
          </div>
          <br />
          <div>
            <span className='title'>Ref.:&nbsp;</span>
            {reference}
          </div>
          <br />
          <div className='title'>Cargo</div>
          <div className={state === 'Delivered' ? 'success' : 'fail'}>
            {state}
          </div>
          <br />
          <div>
            <span className='title'>Fixed Route:&nbsp;</span>
            {reference_route}
          </div>
        </div>
        <div>
          <FontAwesomeIcon className='icon' icon={faRedoAlt} />
        </div>
      </div>
    );
  }
}
