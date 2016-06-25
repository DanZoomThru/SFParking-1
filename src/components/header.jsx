import React from 'react';

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.getSpots(this.props.target);
  }

  getSpots(location){
    $.getJSON({
      url  : `http://ridecellparking.herokuapp.com/api/v1/parkinglocations/search?lat=${location.lat}&lng=${location.lng}`,
      success : ( data, textStatus ) => {
        this.props.showSpots(data);
      }
    });
  }

  getCurrentLatLng(){
    $.getJSON({
      url  : 'https://maps.googleapis.com/maps/api/geocode/json',
      data : {
        sensor  : false,
        address : this.props.input + ', SF'// TODO: change to input
      },
      success : ( data, textStatus ) => {
        this.props.setCenter(data.results[0].geometry.location);
        this.props.setTarget(data.results[0].geometry.location);
        this.getSpots(data.results[0].geometry.location);
      }
    });
  }

  updateInput(e){
    this.props.updateInput(e.target.value);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <h2 className="text-center">PARKING APP</h2>
        <div className="search">
            <div className="input-group">
              <input onChange={this.updateInput.bind(this)} type="text" className="form-control" placeholder="Search for parking spots near...ex.Moscone Center, 1 Market st. etc." />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" 
                  onClick={
                    this.getCurrentLatLng.bind(this)}>
                  Find Parking Spots!</button>
              </span>
            </div>
          </div>
      </nav>
    );
  }
};
