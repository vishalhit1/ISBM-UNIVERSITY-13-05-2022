import React from "react";
import { Modal,Button} from "react-bootstrap";
function Cor2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Confederation of Indian Industry (CII)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
          <p>
          ISBM University is a member of Confederation of Indian Industry (CII). The Confederation of Indian Industry is an association of Indian businesses which works to create an environment conducive to the growth of industry in the country. CII is a non-government, not-for-profit, industry-led and industry-managed organization, playing a proactive role in India's development process.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

export default Cor2