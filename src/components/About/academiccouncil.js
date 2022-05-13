import React, { useEffect } from "react";
import { Container, Row, Col, Table, Breadcrumb } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Academiccouncil = () => {
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
            Academic Council
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
          <Breadcrumb.Item active>Academic Council</Breadcrumb.Item>
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
            <p className="links_about1">
              <Link to="/Governingbody"> Governing Body</Link>
            </p>
            <p className="links_about1">
              <Link to="/Message">Messages of the Dignitaries</Link>
            </p>
            <p className="links_about1">
              <Link to="/Boardmanagement">Board of Management</Link>
            </p>
            <p className="links_about active">
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
            <h2 className="linkabout123">Academic Council - Committee Members</h2>
            <p className="detail_text">Academic Council is the highest academic body of the University it coordinates and exercise supervision
              over the academic policy and programs of the University. Vice Chancellor of the University is the
              chairman of the council and presides over the meeting. It is composed of the Dean, HODs, Scientists,
              academicians, technocrats and industrialists nominated by the Chancellor.<br/><br/>
              Powers and functions of the Academic Council<br/><br/>
              1. To co-opt members having special knowledge or experience in the subject domin for academic
              transaction.<br/><br/>
              2. To promote teaching, research and related activities in the University.<br/><br/>
              3. To exercise general supervision over the academic policies and programs of the University<br/><br/>
              4. To give directions to the method of transaction academic, undertaking research and improving
              academic standards.<br/><br/>
              5. To make proposal to the Governing Body for allocating funds for undertaking research.<br/><br/>
              6. To make proposal to the Governing Body for instituting fellowship, scholarships, studentship,
              exhibition, medals and prizes and to make rules for its implementation.<br/><br/>
              7. To recognize persons of eminence in the subject domains to be associated as research guides/co-
              guides in the subjects interdisciplinary multi disciplinary subjects as prescribed in the ordinance.<br/><br/>
              8. To formulate, modify or revise schemes for the organization and assignment of subject to the
              faculties/school/departments, and to report to the Governing Body for approval.</p><br/><br/>
              <p className="detail_text"><b>Members of the Academic Council</b></p>
            <Table striped bordered>
              <thead>
                <tr>
                  <th style={{ width: "100px", color: 'black' }}>Sr. No.</th>
                  <th style={{ width: "300px", color: 'black' }}>Name of Member</th>
                  <th style={{ width: "300px", color: 'black' }}>Board Designation</th>
                  <th style={{ width: "300px", color: 'black' }}>Organizational Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h3>1</h3>
                  </td>
                  <td>Dr. Anand Mahalwar</td>
                  <td>Chairperson </td>
                  <td>Vice Chancellor, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>2</h3>
                  </td>
                  <td>Dr. N. Kumar Swamy</td>
                  <td>Member</td>
                  <td>Dean (In- charge), ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>3</h3>
                  </td>
                  <td>Dr. Bhupndra Kumar Sahu</td>
                  <td>Member</td>
                  <td>Associate Prof. &amp; HOD, School of Arts &amp; Humanities</td>
                </tr>
                <tr>
                  <td>
                    <h3>4</h3>
                  </td>
                  <td>Dr. Sohan Lal Sahu</td>
                  <td>Member</td>
                  <td>Asst. Professor &amp; HOD, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>5</h3>
                  </td>
                  <td>Shri Diamond Sahu</td>
                  <td>Member</td>
                  <td>Asst. Professor, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>6</h3>
                  </td>
                  <td>Shri Bhupesh Patra</td>
                  <td>Member</td>
                  <td>Asst. Professor, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>7</h3>
                  </td>
                  <td>Shri Jitendra Nahar</td>
                  <td>Member</td>
                  <td>Nominee, Chancellor, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>8</h3>
                  </td>
                  <td>Shri Munir Sayyad</td>
                  <td>Member</td>
                  <td>Nominee, Chancellor, ISBM University
                  Address: Reliance Corporate Park Cabin No. 01, Ground
                  floor, TC-23, Block-C, Phase-IC, Ghansoli, Navi Mumbai-
                  400701 Maharashtray</td>
                </tr>
                <tr>
                  <td>
                    <h3>9</h3>
                  </td>
                  <td>Mr. Bhushan Kumar Sahu</td>
                  <td>Member</td>
                  <td>Asst. Professor Zoology, Govt. College Gariyaband (CG)</td>
                </tr>
                <tr>
                  <td>
                    <h3>10</h3>
                  </td>
                  <td>Mr. P.K. Bhoi</td>
                  <td>Member</td>
                  <td>Principal, Govt. College Chhura, District – Gariyaband (CG)</td>
                </tr>
                <tr>
                  <td>
                    <h3>11</h3>
                  </td>
                  <td>Mr. S.R. Vadde</td>
                  <td>Member</td>
                  <td>Asst. Professor Commerce, Shri Khuleshwar Mahadev Govt. College Gobra Nawapara, Raipur ,C.G.</td>
                </tr>
                <tr>
                  <td>
                    <h3>12</h3>
                  </td>
                  <td>Dr. Barada Prasad Bhol</td>
                  <td>Member Secretary</td>
                  <td>Registrar, ISBM University</td>
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

export default Academiccouncil;
