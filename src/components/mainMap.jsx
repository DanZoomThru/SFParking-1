import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';

import OpenSpot from './openSpot.jsx';
import ReservedSpot from './reservedSpot.jsx';
import Target from './target.jsx';
import ExpiredModal from './expiredModal.jsx';

export default class MainMap extends Component {
  static defaultProps = {
    zoom: 17,
  };

  constructor(props) {
    super(props);
    this.state = {
      expiredModalShown: false
    }
  }

  showModal() {
    this.setState({expiredModalShown: true});
  }

  closeModal() {
    this.setState({expiredModalShown: false});
  }

  render() {
    return (
      <div className="map">
        <GoogleMap
          center={this.props.center}
          defaultZoom={this.props.zoom} >
          {
            this.props.openSpots.map((spot) => {
              return (
                <OpenSpot
                  key={spot.id} 
                  spot={spot}
                  lat={spot.lat} 
                  lng={spot.lng}
                  setCenter={this.props.setCenter}
                  showSpots={this.props.showSpots}
                  target={this.props.target}
                  input={this.props.input}
                  addToReserved={this.props.addToReserved.bind(this)} />
                )
            })
          }
          {
            this.props.reservedSpots.map((spot) => {
              return (
                <ReservedSpot
                  showModal={this.showModal.bind(this)}
                  setCenter={this.props.setCenter}
                  key={spot.id} 
                  spot={spot}
                  lat={spot.lat} 
                  lng={spot.lng} />
                )
            })
          }
          <Target
            lat={this.props.target.lat} 
            lng={this.props.target.lng} />
        </GoogleMap>
        <ExpiredModal 
          shown={this.state.expiredModalShown}
          closeModal={this.closeModal.bind(this)}
          />
      </div>
    );
  }
}