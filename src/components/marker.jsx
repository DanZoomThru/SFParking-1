import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Overlay } from 'react-bootstrap';

import Detail from './detail.jsx'

export default class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false 
    };
  }

  markerSelected(e) {
    this.setState({ target: e.target, show: !this.state.show });
    this.props.setCenter({lat: Number(this.props.spot.lat), lng: Number(this.props.spot.lng)});
  }

  render() {

    const K_WIDTH = 20;
    const K_HEIGHT = 20;

    const greatPlaceStyle = {
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,

      border: '2px solid #f44336',
      borderRadius: K_HEIGHT,
      backgroundColor: 'white',
      textAlign: 'center',
      color: '#3f51b5',
      fontSize: 10,
      fontWeight: 'bold',
      padding: 4
    };

    return (
      <div>
        <div style={greatPlaceStyle} onClick={this.markerSelected.bind(this)}>
          {this.props.spot.id}
        </div>

        <Overlay
          key={this.props.spot.id}
          show={this.state.show}
          target={()=> ReactDOM.findDOMNode(this.state.target)}
          placement="top"
          container={this}
          containerPadding={20}
        >
          <Detail 
            key={this.props.spot.id}
            spot={this.props.spot}/>
        </Overlay>
      </div>
    );
  }
}