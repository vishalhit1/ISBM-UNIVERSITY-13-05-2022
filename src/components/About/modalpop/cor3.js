import React from "react";
import { Modal,Button} from "react-bootstrap";
function Cor3(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          PHD Chamber of Commerce and Industry
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is an institutional member of PHD Chamber of Commerce and Industry, established in 1905, is a proactive and dynamic multi-State apex organization with strong national and international linkages. The Chamber acts as a catalyst in the promotion of industry, trade and entrepreneurship.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Cor3