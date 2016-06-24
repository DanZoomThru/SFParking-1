import React, {Component} from 'react';

import { Popover } from 'react-bootstrap';

export default class Detail extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={{ height: 120}}>
        <Popover placement="top" positionLeft={-20} positionTop={-250} title="Popup title">
          And here's some <strong>amazing</strong> content. It's very engaging. right?
        </Popover>
      </div>
    );
  }
}