import React, {Component} from 'react';

import { Popover } from 'react-bootstrap';
import ConfirmModal from './confirmModal.jsx';

export default class OpenSpotPopover extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalShown: false
    }
  }

  getSpots(location){
    $.getJSON({
      url  : `http://ridecellparking.herokuapp.com/api/v1/parkinglocations/search?lat=${location.lat}&lng=${location.lng}`,
      success : ( data, textStatus ) => {
        this.props.showSpots(data);
      }
    });
  }

  requestSpot(id) {
    $.ajax({
      url: `http://ridecellparking.herokuapp.com/api/v1/parkinglocations/${id}/reserve/`,
      method: "POST",
      dataType: "JSON",
      success: ( data, textStatus ) => {
        this.setState({modalShown: true});
      }
    });
  }

  reserveSpot(){
    this.props.addToReserved(this.props.spot);
    this.requestSpot(this.props.spot.id);
  }

  closeModal(){
    this.setState({modalShown: false});
    this.getSpots(this.props.target);
  }

  render(){
    return  (
      <Popover placement="top"
      positionLeft={window.innerWidth/2 - 138} positionTop={window.innerHeight/2 - 150} 
      title={`Parking Near ${this.props.input}`}>
        <div className="row">
          <div className="col-xs-6 text-center">
            <h6>Spot No.</h6>
            <p>{this.props.spot.id}</p>
          </div>
          <div className="col-xs-6 text-center">
            <h6>Cost</h6>
            <p>
              <span>
                {this.props.spot.cost_per_minute}
              </span>
              <span>/min</span>
            </p>
          </div>
          <button 
            className="btn btn-default center-block" 
            onClick={ this.reserveSpot.bind(this) }>Pay and Reserve</button>
          <ConfirmModal modalShown={this.state.modalShown} closeModal={this.closeModal.bind(this)} />
        </div>
      </Popover>
    );
  }
}