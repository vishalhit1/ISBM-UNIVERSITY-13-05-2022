import React, { useEffect } from "react";
import { Container, Row, Col, Table, Breadcrumb } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Boardmanagement = () => {
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
              Board of Management
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
          <Breadcrumb.Item active>Board of Management</Breadcrumb.Item>
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
            <p className="links_about active">
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
            <h2 className="linkabout123">
              Board of Management - Committee Members
            </h2>
            <p className="detail_text">
            Board of Management is a statutory body under the provisions of the Chhattisgarh Private Universities
            (Establishment and Operation) Act 2005. The term of the nominated members of the Board of
            Management shall be of three years.<br/><br/>
            Powers and functions of the Board of Management<br/><br/>
            1. To consider sanction of teaching and non teaching post of the University and to recommend the
            same to the Governing Body for approval.<br/><br/>
            2. To get the financial approval of the Governing Body before the implementation of such decisions<br/><br/>
            3. To consider and approve the minutes of the selection committee for the appointment of teaching
            and non teaching post.<br/><br/>
            4. To propose fee structure to competent authority for various programs run by the University.<br/><br/>
            5. To perform any other function which may be assigned by the Governing Body/Chancellor<br/><br/>
            <p className="detail_text"><b>Member of the Board of Management</b></p>
            </p>
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
                  <td>Prof. (Dr) Anand Mahalwar</td>
                  <td>Chairperson </td>
                  <td>Vice Chancellor, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>2</h3>
                  </td>
                  <td>Ms. Bindu Mahesh Agrawal</td>
                  <td>Member</td>
                  <td>Nominee, Sponsoring Body, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>3</h3>
                  </td>
                  <td>Shri Jitendra Nahar</td>
                  <td>Member</td>
                  <td>Nominee, Sponsoring Body, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>4</h3>
                  </td>
                  <td>Dr. Ashok Kumar Nema</td>
                  <td>Member</td>
                  <td>Associate Professor (Retd.) Pt. Ravi Shankar
                  Shukla University. Nominee &amp; Representative,
                  State Govt.</td>
                </tr>
                <tr>
                  <td>
                    <h3>5</h3>
                  </td>
                  <td>Dr. C. L. Patel</td>
                  <td>Member</td>
                  <td>Principal (Retd.) Govt. College Mahasamund
                  (CG). Nominee &amp; Representative, State Govt.</td>
                </tr>
                <tr>
                  <td>
                    <h3>6</h3>
                  </td>
                  <td>Dr. N. Kumar Swamy</td>
                  <td>Member</td>
                  <td>Associate Professor &amp; Dean (In-charge), Faculty of Sciences, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>7</h3>
                  </td>
                  <td>Dr. Bhupendra Kumar</td>
                  <td>Member</td>
                  <td>Associate Professor &amp; DSW, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>8</h3>
                  </td>
                  <td>Dr. Garima Diwan</td>
                  <td>Member</td>
                  <td>Associate Prof. &amp; HOD, School of Arts &amp; Humanities Professor, ISBM University</td>
                </tr>
                <tr>
                  <td>
                    <h3>9</h3>
                  </td>
                  <td>Dr. Sohan Lal Sahu</td>
                  <td>Member</td>
                  <td>Asst. Professor Zoology, Govt. College Gariyaband (CG)</td>
                </tr>
                <tr>
                  <td>
                    <h3>10</h3>
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

export default Boardmanagement;
