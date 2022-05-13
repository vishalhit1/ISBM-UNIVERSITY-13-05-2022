import React, { useEffect } from "react";
import { Container, Row, Col, Table, Breadcrumb } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Governingbody = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="innerbackimage">
          <div className="text_banners_abcds">
              <h1 className="animate__animated animate__fadeInRightBig">
              Governing Body
              </h1>
                  <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
          <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
          </div>
      </div>
      <Container className="About_us11 container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item active>Governing Body</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col lg={3} className="mobile_view_none11">
            <h3 className="title">About us</h3>
            <p className="links_about1">
              <Link to="/aboutus">About ISBMU University</Link>
            </p>
            <p className="links_about1">
              <Link to="/Missionvalues">Vision, Mission and Values</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorable">Hon'ble Visitor</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorablepatron">Hon'ble Patron</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorablechancellor">Hon'ble Chancellor</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorablevicechancellor">Hon'ble Vice-Chancellor</Link>
            </p>
            <p className="links_about1">
              <Link to="/Officialregistar"> Registrar</Link>
            </p>
            <p className="links_about active">
              <Link to="/Governingbody"> Governing Body</Link>
            </p>
            <p className="links_about1">
              <Link to="/Message">Messages of the Dignitaries</Link>
            </p>
            <p className="links_about1">
              <Link to="/Boardmanagement">Board of Management</Link>
            </p>
            <p className="links_about1">
              <Link to="/Academiccouncil">Academic Council</Link>
            </p>
            <p className="links_about1">
              <Link to="/BoardAdvisor">Board of Advisors</Link>
            </p>
            <p className="links_about1">
              <Link to="/Othercommunitie">Other Committees</Link>
            </p>
            <p className="links_about1">
              <Link to="/StatuesOrdinance">Statutes and Ordinances</Link>
            </p>
            <p className="links_about1">
              <Link to="/Recognisation">Recognitions and Approvals</Link>
            </p>
            <p className="links_about1">
              <Link to="/Awards">Awards</Link>
            </p>
            <p className="links_about1">
              <Link to="/Mediacoverage">Media Coverage</Link>
            </p>
            {/* <p className="links_about1"><Link to="/">Mou's &amp; Collaboration</Link></p> */}
          </Col>
          <Col lg={9}>
            <h2 className="linkabout123">Governing Body - Committee Members</h2>
            <p>Governing Body is the principal decision making body of the University. It has the powers &amp; responsibility
            to develop strategic plans for the deployment of the resources to ensure academic excellence. It monitors
            and evaluates the effectiveness of the curriculum and strategies from time to time.<br/><br/>
            Powers and functions of the Governing Body<br/><br/>
            1. To review, suggest and approve, from time to time, the policies, plans, procedures and measures
            for the development of the University.<br/><br/>
            2. To make recommendations to the Chancellor/Sponsoring Body on different strategies.
            3. To make recommendation to the Sponsoring Body for the creation of new posts of officers/
            teachers/staff of the University.<br/><br/>
            4. To exercise such other powers and functions as may be assigned by the Sponsoring Body.<br/><br/>
            5. To consider and approve the recommendations made by the Board of Management/ Academic
            Council/ Chancellor/ Vice Chancellor<br/><br/>
            6. The Governing Body shall meet at least 3 times in a calendar year.<br/><br/>
            7. The Governing Body shall maintain a quorum of 5 members as per section 22(5) of the Act.<br/><br/>
            <b>Member of the Governing Body</b></p>
            <Table striped bordered>
              <thead>
                <tr>
                  <th style={{ width: "150px",color:'black'}}>Sr. No.</th>
                  <th style={{ width: "300px",color:'black' }}>Name of Member</th>
                  <th style={{ width: "300px",color:'black' }}>Committee Designation</th>
                  <th style={{ width: "300px",color:'black' }}>Organizational Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h3>1</h3>
                  </td>
                  <td>Dr. Vinay Agrawal</td>
                  <td>Chairman </td>
                  <td>Chancellor ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>2</h3>
                  </td>
                  <td>Prof.(Dr) Anand Mahalwar</td>
                  <td>Member </td>
                  <td>Vice Chancellor ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>3</h3>
                  </td>
                  <td>Mrs. Pramila Mahesh Agrawal</td>
                  <td>Member</td>
                  <td>Nominee, Sponsoring Body, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>4</h3>
                  </td>

                  <td>Shri Mahesh Ratanlal Agrawal</td>
                  <td>Member</td>
                  <td>Nominee, Sponsoring Body, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>5</h3>
                  </td>
                  <td>Shri Yashwanth Raj Parasmal</td>
                  <td>Member</td>
                  <td>Nominee, Sponsoring Body, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>6</h3>
                  </td>
                  <td>Dr. Sarita Sinha</td>
                  <td>
                    Member
                  </td>
                  <td>
                    Principal (Retd.) Govt. Mata Karma Girls College,
                    Mahasamund (CG). Nominee & Representative of State Govt.
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>7</h3>
                  </td>
                  <td>Dr. Madan Lal Lakhanpal</td>
                  <td>
                    Member
                  </td>
                  <td>
                    Principal (Retd.) Govt. Danteshwari Girls Post
                    Graduate College, Jagdalpur (CG). Nominee & Representative
                    of State Govt.
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>8</h3>
                  </td>
                  <td>Dr. Sheela Tiwari</td>
                  <td>
                    Member
                  </td>
                  <td>
                    Principle (Retd.) Govt. P.G. College, Bilashpur (CG).
                    Nominee & Representative of State Govt.
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>9</h3>
                  </td>
                  <td>Dr. Barada Prasad Bhol</td>
                  <td>
                    Member Secretary
                  </td>
                  <td>
                    Registrar (In-charge), ISBM University
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Governingbody;
