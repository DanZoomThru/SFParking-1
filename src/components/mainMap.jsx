import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';

import Marker from './marker.jsx'
import Target from './target.jsx'

export default class MainMap extends Component {
  static defaultProps = {
    zoom: 17,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map">
        <GoogleMap
          center={this.props.center}
          defaultZoom={this.props.zoom} >
          {
            this.props.spots.map((spot) => {
              return (
                <Marker
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
      </div>
    );
  }
}