import React, {Component} from 'react';

export default class Target extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const Radious = 30;

    const iconStyle = {
      top: -Radious,
      left: -Radious/2,
      fontSize: Radious,
      color: 'red',
    }

    return (
      <div>
        <span style={iconStyle} className="glyphicon glyphicon-map-marker"  aria-hidden="false"></span> 
      </div>
    );
  }
}