import React from "react";
import { Modal,Button} from "react-bootstrap";
function MyVerticallyCenteredModal3(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Careers and Placement Assistance Cell (BigVacancy.Com)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          ISBM University through its strong network and alliances is committed to provide 100% placement services to its students pursuing degree program. It aims to create resources and understanding of career opportunities, while enhancing student’s transition from university to career.
          </p>
          <p>The Career and Placement Cell is well equipped and recognized to provide the following services to all students:</p>
          <ul>
            <li>English Language Lab</li>
            <li>Word Building Games</li>
            <li>Conduct Career Opportunity Workshops, Personality Tests</li>
            <li>Conduct Job Fairs and Placement Weeks</li>
            <li>Provide resources on various industries, economy, technological advances and job opportunities</li>
            <li>Train students for preparing CV, Group Discussion, Written Tests and Interviews</li>
            <li>Conduct Mock Interview Sessions</li>
            <li>Sensitize students with work culture and corporate etiquettes</li>
            <li>Counsel students for a smooth transition from student to employee</li>
            <li>Network with Industries to identify job opportunities and skill / knowledge requirements</li>
            <li>Assist with Internship Programs</li>
            <li>Facilitate Companies to recruit students from campus</li>
            <li>Maintain Alumni Database and actively engage with them</li>
            <li>Develop relationship with Corporate and Other Recruiters</li>
            <li>Map future industry trends and feed information to Boards of Study for syllabus development</li>
          </ul>
          <p>The Career and Placement Cell is powered by India’s leading Job Portal, www.bigvacancy.com</p>
          <p>For any further detailing required in same or to discuss any tie-up opportunities please email at <span>info@isbmuniversity.edu.in</span> or call at <span>+91-9373199999</span></p>  
        </Modal.Body>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal3