import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';

import Marker from './marker.jsx'

export default class MainMap extends Component {
  static defaultProps = {
    center: {lat: 37.7730933, lng: -122.4125351},
    zoom: 15,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const spots = [
      {
          "id": 2017,
          "lat": "37.773090",
          "lng": "-122.412530",
          "name": "",
          "cost_per_minute": "0.50",
          "max_reserve_time_mins": 120,
          "min_reserve_time_mins": 10,
          "is_reserved": false,
          "reserved_until": null
      },
      {
          "id": 2020,
          "lat": "37.774900",
          "lng": "-122.419400",
          "name": "",
          "cost_per_minute": "0.50",
          "max_reserve_time_mins": 120,
          "min_reserve_time_mins": 10,
          "is_reserved": false,
          "reserved_until": null
      }
    ];
    return (
      <div className="map">
        <GoogleMap
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          {
            spots.map((spot) => {
              return ( 
                <Marker key={spot.id}
                  lat={spot.lat} 
                  lng={spot.lng} text={spot.id} />
                )
            })
          }
        </GoogleMap>
      </div>
    );
  }
}