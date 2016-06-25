import React from 'react';

import Header from './header.jsx';
import MainMap from './mainMap.jsx';
import ConfirmModal from './confirmModal.jsx';

import initialData from '../initialData.js'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '1 Market st.',
      target: initialData.target,
      center: initialData.center,
      openSpots: initialData.openSpots,
      reservedSpots: initialData.reservedSpots
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
      openSpots: spots
    });
  }

  addToReserved(spot) {
    let newReservedSpots = this.state.reservedSpots.concat(spot);
    this.setState({
      reservedSpots: newReservedSpots
    });
  }

  updateInput(value){
    this.setState({
      input: value
    });
  }

  render() {
    return (
      <div>
        <Header 
          target={this.state.target}
          input={this.state.input}
          updateInput={this.updateInput.bind(this)}
          showSpots={this.showSpots.bind(this)}
          setCenter={this.setCenter.bind(this)}
          setTarget={this.setTarget.bind(this)} />
        <MainMap
          center={this.state.center}
          target={this.state.target}
          input={this.state.input}
          openSpots={this.state.openSpots}
          reservedSpots={this.state.reservedSpots} 
          setCenter={this.setCenter.bind(this)}
          showSpots={this.showSpots.bind(this)}
          addToReserved={this.addToReserved.bind(this)} />
      </div>
    );
  }
};