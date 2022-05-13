import React from "react";
import { Modal,Button} from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          ISBM University Network for Technology Entrepreneurship & Leadership (INTEL)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          The ISBM University Network for Technology Entrepreneurship & Leadership (INTEL) coordinates capacity building activities that focus on entrepreneurship and leadership, and provides opportunity for technological innovations that can create commercially viable solutions for real-life problems of our Society. Our objectives include:
          </p>
          <ul>
            <li>Develop groundbreaking entrepreneurship schemes to support youth and graduate employment</li>
            <li>Embed entrepreneurship education</li>
            <li>Establish entrepreneurship centres</li>
            <li>Devise good governance templates for start-ups</li>
          </ul>
          <p>We have extensive experience of leading multi-agency partnerships and working with groups, higher institutions, governments, and incubators to address socio-economic challenges of region through technological innovations, business incubation and skill development programs.</p>
          <p>For any further detailing required in same or to discuss any tie-up opportunities please email at <span>info@isbmuniversity.edu.in</span> or call at <span>+91-9373199999</span></p>  
        </Modal.Body>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal  