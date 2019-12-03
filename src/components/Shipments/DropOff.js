import React, { Component } from 'react';
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DropOff.css';

export default class DropOff extends Component {
  render() {
    // take variables from props data
    const { company, country, postcode, street } = this.props.dropoff.address;
    const dateMin = this.props.dropoff.date.min;
    const dateMax = this.props.dropoff.date.max;
    const hourMin = this.props.dropoff.hour.min;
    const hourMax = this.props.dropoff.hour.max;

    return (
      <div className='dropoffContainer'>
        <div className='iconContainer'>
          <div className='title'>Drop Off</div>
          <div>
            <FontAwesomeIcon className='icon' icon={faLevelDownAlt} />
          </div>
        </div>
        <div className='dropoff'>
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
            <div className='dropoffContact'>
              <div className='title'>Contact</div>
              <div>{this.props.dropoff.contact.name}</div>
              <div>{this.props.dropoff.contact.email}</div>
              <div>{this.props.dropoff.contact.phone}</div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
