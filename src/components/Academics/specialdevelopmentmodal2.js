import React from "react";
import { Modal,Button} from "react-bootstrap";
function MyVerticallyCenteredModal2(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          English and Grammar Development Cell (ENAGRAM)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          In today’s era, English Language is an asset and its value cannot be measured. A student with strong English Communication Skills and good personality will succeed in every chosen field and career. ISBM University recognizes this as critical success factor for student’s future and has established “ENAGRAM”- a dedicated and focused Spoken English, Grammar and Personality Development Cell.
          </p>
          <p>The Cell will conduct various interesting, fun-filled learning activities throughout the year for the students of all Programs:</p>
          <ul>
            <li>English Language Lab</li>
            <li>Word Building Games</li>
            <li>Debates and Group Discussions</li>
            <li>Public Speaking Workshops</li>
            <li>English Grammar Sessions</li>
            <li>Spoken English Classes</li>
            <li>Phonetics Program</li>
            <li>Personality Development Workshops</li>
            <li>Career Development Workshops</li>
            <li>Counseling & Mentoring</li>
            <li>Personality Assessment Tests</li>
            <li>Professional Etiquettes Program</li>
            <li>Presentation Skills</li>
          </ul>
          <p>The Programs at ISBM University include a host of activities around networking, relationship building and socio-cultural values that you will most certainly have the best time of your life here at ISBM.</p>
          <p>For any further detailing required in same or to discuss any tie-up opportunities please email at <span>info@isbmuniversity.edu.in</span> or call at <span>+91-9373199999</span></p>  
        </Modal.Body>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal2  