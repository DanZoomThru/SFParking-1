import React, {Component} from 'react';

import { Popover } from 'react-bootstrap';

export default class Detail extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return  (
      <Popover placement="top"
      positionLeft={window.innerWidth/2 - 128} positionTop={window.innerHeight/2 - 130} 
      title="Parking Near Moscone Center">
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
          <button className="btn btn-default center-block">Pay and Reserve</button>
        </div>
      </Popover>
    );
  }
}