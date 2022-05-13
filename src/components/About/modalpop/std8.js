import React from "react";
import { Modal,Button} from "react-bootstrap";
import pci from '../../../Images/pci-img.jpg';
function Std8(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Pharmacy Council of India
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={pci} style={{width:"100%",marginBottom:'20px'}} />
        </Modal.Body>
      </Modal>
    );
  }

export default Std8 