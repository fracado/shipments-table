import React, { Component } from 'react';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PickUp.css';

export default class PickUp extends Component {
  render() {
    // take variables from props data
    const { company, country, postcode, street } = this.props.pickup.address;
    const dateMin = this.props.pickup.date.min;
    const dateMax = this.props.pickup.date.max;
    const hourMin = this.props.pickup.hour.min;
    const hourMax = this.props.pickup.hour.max;

    return (
      <div className='pickupContainer'>
        <div className='iconContainer'>
          <div className='title'>Pick Up</div>
          <div>
            <FontAwesomeIcon className='icon' icon={faLevelUpAlt} />
          </div>
        </div>
        <div className='pickup'>
          <div>{company}</div>
          <div>{country}</div>
          <div>{postcode}</div>
          <div>{street}</div>
          <br />
          <div className='title inline'>Date:</div>
          <div className='inline'>
            {dateMin}-{dateMax}
          </div>
          <div className='title inline'>Time:</div>
          <div className='inline'>
            {hourMin}-{hourMax}
          </div>
          <br />
          {/* show contact info when row is expanded: */}
          {this.props.expanded ? (
            <div className='pickupContact'>
              <div className='title'>Contact</div>
              <div>{this.props.pickup.contact.name}</div>
              <div>{this.props.pickup.contact.email}</div>
              <div>{this.props.pickup.contact.phone}</div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
