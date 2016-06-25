import React, {Component} from 'react';

import { Modal, Button } from 'react-bootstrap';

export default class ConfirmModal extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="modal-container" style={{height: 1}}>
        <Modal className="confirmModal"
          show={this.props.modalShown}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title">Great!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your reservation has been confirmed.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}