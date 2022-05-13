import React from "react";
import { Modal,Button} from "react-bootstrap";
function Qua1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          International Organization for Standardization (ISO)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalparas">
        <div className="modal-body recog">
        <p>ISBM University is registered with Nimbus Certifications which is registered with Accreditation services for certifying bodies (Europe). This accreditation ensures the authenticity of valid certificate issued from ISBM University. Since 1995 ASCB(E) has been actively involved in tertiary levels of quality assurance for further education programmes.<br></br><br></br>

        Accreditation of training programmes provides an essential level of assurance for Trading Standards Organisations, Local Authorities, Chambers of Commerce, Insurance Companies and Higher Education Establishments.<br></br><br></br>

        Independent accreditation by ASCB(E) and similar accreditation authorities is often an essential pre-requisite for the delivery of training under the auspices of the above and similar categories of organisation or association.</p>
         </div>
        </Modal.Body>
      </Modal>
    );
  }

export default Qua1