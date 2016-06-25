import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Detail from './detail.jsx'

export default class Target extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const K_WIDTH = 20;
    const K_HEIGHT = 20;

    const greatPlaceStyle = {
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,

      border: '2px solid green',
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
        <div style={greatPlaceStyle}>
          {'me'}
        </div>
      </div>
    );
  }
}