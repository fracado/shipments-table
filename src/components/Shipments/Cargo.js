import React, { Component } from 'react';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cargo.css';

export default class Cargo extends Component {
  render() {
    return (
      <div className='cargoContainer'>
        <div className='iconContainer'>
          <div className='title'>Cargo</div>
          <div>
            <FontAwesomeIcon className='icon' icon={faCubes} />
          </div>
        </div>
        <div className='cargo'>
          <div>{this.props.cargo.type}</div>
          <div>{this.props.cargo.weight}</div>
          <div>{this.props.cargo.size}</div>
        </div>
        <br />
        {this.props.expanded ? (
          <div className='trackingCode'>
            <div className='title'>Tracking Code</div>
            <div>{this.props.tracking}</div>
          </div>
        ) : null}
      </div>
    );
  }
}
