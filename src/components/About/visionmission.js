import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Carousel,
  Breadcrumb,
} from "react-bootstrap";
import mission from "../../Images/mission.png";
import vision from "../../Images/vision.png";
import value from "../../Images/value.png";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Missionvalues = () => {
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
              Vision Mission and Values
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
          <Breadcrumb.Item active>Vision / Mission / Values</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col lg={3} className="mobile_view_none11">
            <h3 className="title">About us</h3>
            <p className="links_about1">
              <Link to="/aboutus">About ISBMU University</Link>
            </p>
            <p className="links_about active">
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
            <h2 className="linkabout123">Vision, Mission and Values</h2>
            <Row className="detail_vis">
              <Col lg={3}>
                <div className="Vision">
                  <img src={vision} />
                </div>
              </Col>
              <Col lg={9}>
                <div className="Vision">
                  <h3>Vision</h3>
                  <p>
                    Our vision is to be a distinguished University committed to
                    entrepreneurship and incubation, that lets a thousand minds
                    bloom with virtues of knowledge, wisdom, and humanity.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="detail_vis">
              <Col lg={9}>
                <div className="Vision">
                  <h3>Mission</h3>
                  <p>
                    Our mission is to research, develop and deliver knowledge,
                    wisdom and skills necessary to succeed in life. We would
                    achieve this mission within the gamut of world-class
                    faculty, infrastructure, technology, curricula and
                    collaborative teaching and research.
                  </p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="Vision">
                  <img src={mission} />
                </div>
              </Col>
            </Row>
            <Row className="detail_vis">
              <Col lg={3}>
                <div className="Vision">
                  <img src={value} />
                </div>
              </Col>
              <Col lg={9}>
                <div className="Vision">
                  <h3>Values</h3>
                  <p>
                    Our values at ISBM University are guided by our motto of
                    Knowledge, Wisdom, and Humanity. Values give tremendous
                    clarity and focus paving way for consistency in decision
                    making and action. We encourage students to live the
                    universal values of peace, freedom, social progress, equal
                    rights and human dignity, enshrined in the Charter of the
                    United Nations Organisation.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Missionvalues;
