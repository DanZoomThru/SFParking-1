import React from 'react';

import Header from './header.jsx';
import MainMap from './mainMap.jsx';

import initialData from '../initialData.js'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentLocation: initialData.currentLocation,
      target: initialData.target,
      center: initialData.center,
      currentSpots: initialData.currentSpots
    };
  }

  setCenter(center){
    this.setState({
      center: center
    });
  }

  setTarget(target){
    this.setState({
      target: target
    });
  }

  showSpots(spots){
    this.setState({
      currentSpots: spots
    });
  }

  render() {
    return (
      <div>
        <Header 
          currentLocation={this.state.currentLocation} 
          showSpots={this.showSpots.bind(this)}
          setCenter={this.setCenter.bind(this)}
          setTarget={this.setTarget.bind(this)} />
        <MainMap 
          center={this.state.center}
          target={this.state.target}
          spots={this.state.currentSpots} 
          setCenter={this.setCenter.bind(this)} />
      </div>
    );
  }
};