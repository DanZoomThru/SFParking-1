import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { OverlayTrigger } from 'react-bootstrap';
import ReservedSpotPopover from './reservedSpotPopover.jsx'

export default class ReservedSpot extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.showModal();
    }, 5000);  
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
      border: '2px solid red',
      borderRadius: boarderRadius,
    };

    const dotStyle = {
      position: 'relative',
      width: dotRadius * 2,
      height: dotRadius * 2,
      left: 4,
      top: 4,
      borderRadius: dotRadius,
      backgroundColor: 'red',
    };

    return (
      <div>
        <OverlayTrigger trigger="click" rootClose placement="top" overlay={
          <ReservedSpotPopover spot={this.props.spot} setCenter={this.props.setCenter} /> }>
          <div className="marker" style={spotStyle} onClick={this.markerSelected.bind(this)}>
            <div style={dotStyle}></div>
          </div>
        </OverlayTrigger>
      </div>
    )
  }
}