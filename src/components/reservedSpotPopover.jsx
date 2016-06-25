import React, {Component} from 'react';

import { Popover } from 'react-bootstrap';
import ConfirmModal from './confirmModal.jsx';

export default class ReservedSpotPopover extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalShown: false
    }
  }

  render(){
    return  (
      <Popover placement="top"
      positionLeft={window.innerWidth/2 - 138} positionTop={window.innerHeight/2 - 150} 
      title="Reserved Spot">
        <div className="row">
          <div className="col-xs-4 text-center">
            <h6>Spot No.</h6>
            <p>{this.props.spot.id}</p>
          </div>
          <div className="col-xs-4 text-center">
            <h6>Cost</h6>
            <p>
              <span>
                {this.props.spot.cost_per_minute}
              </span>
              <span>/min</span>
            </p>
          </div>
          <div className="col-xs-4 text-center">
            <h6>Time Left</h6>
            <span>0</span>
            <span>min</span>
          </div>
          <button 
            className="btn btn-default center-block" 
            onClick={ () => { console.log('extend reservation!') } }>Extend Reservation</button>
        </div>
      </Popover>
    );
  }
}