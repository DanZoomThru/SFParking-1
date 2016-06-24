import React from 'react';

import Header from './header.jsx';
import MainMap from './mainMap.jsx';
import Footer from './footer.jsx';

import initialData from '../initialData.js'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = initialData;
  }

  setCenter(center){
    this.setState({
      currentCenter: center
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
          setCenter={this.setCenter.bind(this)} />
        <MainMap 
          currentCenter={this.state.currentCenter} 
          spots={this.state.currentSpots}/>
      </div>
    );
  }
};