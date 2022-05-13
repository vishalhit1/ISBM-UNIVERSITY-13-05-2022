import React from "react";
import { Modal,Button} from "react-bootstrap";
function MyVerticallyCenteredModal1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Business Opportunities Nurtured through Support, Action and Incubation (BONSAI)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Young Indians today have the conviction to venture out on their own and a conducive ecosystem lets them watch their ideas come to life. In today’s environment we have more Startups and entrepreneurs than ever before and the movement is at the cusp of a revolution. However, many Startups do not reach their full potential due to limited guidance and access.
          </p>
          <p>In line with the Government of India’s Startup India Program, ISBM University is taking an unprecedented step to create a Startup Incubator - a first for any university to do so at the time of inception. Aptly named, Bonsai, the Incubator will sow the seeds for creation of technology and social enterprises on its campus providing assistance in diverse areas to budding entrepreneurs.</p>
          <p>Since startup companies lack many resources, experience and networks, BONSAI provider services which helps them get through initial hurdles in starting up a business. These hurdles include space, funding, legal, accounting, computer services and other prerequisites to running the business.</p>
          <p>The incubator services offered by BONSAI are :</p>
          <ul>
            <li>Help with business basics</li>
            <li>Networking activities</li>
            <li>Marketing assistance</li>
            <li>Market Research</li>
            <li>High-speed Internet access</li>
            <li>Help with accounting/financial management</li>
            <li>Access to bank loans, loan funds and guarantee programs</li>
            <li>Help with presentation skills</li>
            <li>Links to higher education resources</li>
            <li>Links to strategic partners</li>
            <li>Access to angel investors or venture capital</li>
            <li>Comprehensive business training programs</li>
            <li>Advisory boards and mentors</li>
            <li>Management team identification</li>
            <li>Help with business etiquette</li>
            <li>Technology commercialization assistance</li>
            <li>Help with regulatory compliance</li>
            <li>Intellectual property management</li>
          </ul>
          <p>For any further detailing required in same or to discuss any tie-up opportunities please email at <span>info@isbmuniversity.edu.in</span> or call at <span>+91-9373199999</span></p>  
        </Modal.Body>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal1  