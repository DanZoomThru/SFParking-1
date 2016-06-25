import React, {Component} from 'react';

import { Modal, Button } from 'react-bootstrap';

export default class ExpiredModal extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('this.props.shown', this.props.shown);
    return (
      <div className="modal-container" style={{height: 1}}>
        <Modal className="confirmModal"
          show={this.props.shown}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title">Your reservation has expired!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Your total Change is $4.50</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ () => {console.log('extend reservation')} }>Extend Reservation</Button>
            <Button onClick={ this.props.closeModal }>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}