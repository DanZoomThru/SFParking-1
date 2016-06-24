import React, {Component} from 'react';

import { Popover } from 'react-bootstrap';

export default class Detail extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={{ width: 120}}>
        <Popover
          key={this.props.id}
          id={this.props.id} 
          placement="top" 
          positionLeft={-35} positionTop={-230} 
          title="Parking Near Moscone Center">
          <div className="row">
            <div className="col-xs-4 text-center">
              <h6>Name</h6>
              <p>placeholder</p>
            </div>
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
          </div>
          <button className="btn btn-default center-block">Pay and Reserve</button>
        </Popover>
      </div>
    );
  }
}