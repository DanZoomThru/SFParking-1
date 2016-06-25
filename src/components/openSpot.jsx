import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { OverlayTrigger } from 'react-bootstrap';
import OpenSpotPopover from './openSpotPopover.jsx'
import ConfirmModal from './confirmModal.jsx';

export default class OpenSpot extends Component {
  constructor(props) {
    super(props);
  }

  markerSelected(e) {
    this.props.setCenter({lat: Number(this.props.spot.lat), lng: Number(this.props.spot.lng)});
  }

  render() {
    const boarderRadius = 16;
    const dotRadius = 10;

    const spotStyle = {
      position: 'absolute',
      width: boarderRadius * 2,
      height: boarderRadius * 2,
      left: -boarderRadius,
      top: -boarderRadius,
      border: '2px solid #00e6e6',
      borderRadius: boarderRadius,
    };

    const dotStyle = {
      position: 'relative',
      width: dotRadius * 2,
      height: dotRadius * 2,
      left: 4,
      top: 4,
      borderRadius: dotRadius,
      backgroundColor: '#00e6e6',
    };

    return (
      <OverlayTrigger trigger="click" rootClose placement="top" 
        overlay={
          <OpenSpotPopover 
            showSpots={this.props.showSpots} 
            addToReserved={this.props.addToReserved} 
            spot={this.props.spot} 
            target={this.props.target}
            input={this.props.input}
          /> 
        }>
        <div className="marker" style={spotStyle} onClick={this.markerSelected.bind(this)}>
          <div style={dotStyle}></div>
        </div>
      </OverlayTrigger>
    )
  }
}