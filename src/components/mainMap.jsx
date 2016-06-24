import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';

import Marker from './marker.jsx'
import Center from './center.jsx'

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
          center={this.props.currentCenter}
          defaultZoom={this.props.zoom}>
          {
            this.props.spots.map((spot) => {
              return ( 
                <Marker key={spot.id} spot={spot}
                  lat={spot.lat} 
                  lng={spot.lng} text={spot.id} />
                )
            })
          }
          <Center
            lat={this.props.currentCenter.lat} 
            lng={this.props.currentCenter.lng} />
        </GoogleMap>
      </div>
    );
  }
}