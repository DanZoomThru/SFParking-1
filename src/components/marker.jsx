import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Overlay } from 'react-bootstrap';

import Detail from './detail.jsx'

export default class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {

    const K_WIDTH = 40;
    const K_HEIGHT = 40;

    const greatPlaceStyle = {
      // initially any map object has left top corner at lat lng coordinates
      // it's on you to set object origin to 0,0 coordinates
      // position: 'absolute',
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,

      border: '5px solid #f44336',
      borderRadius: K_HEIGHT,
      backgroundColor: 'white',
      textAlign: 'center',
      color: '#3f51b5',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 4
    };

    return (
      <div>
        <div style={greatPlaceStyle} onClick={e => this.setState({ target: e.target, show: !this.state.show })}>
          {this.props.text}
        </div>

        <Overlay
          show={this.state.show}
          target={()=> ReactDOM.findDOMNode(this.state.target)}
          placement="top"
          container={this}
          containerPadding={20}
        >
          <Detail />
        </Overlay>
      </div>
    );
  }
}