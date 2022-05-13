import React, { useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import mahesh from "../../Images/mahesh.jpg";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Honorablepatron = () => {
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
            Hon'ble Patron
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
          <Breadcrumb.Item active>Hon'ble Patron</Breadcrumb.Item>
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
            <p className="links_about active">
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
            <h2 className="linkabout123">Hon'ble Patron</h2>
            <Row>
              <Col lg={4}>
                <div className="honor_div">
                  <img className="img_honor" src={mahesh} />
                </div>
              </Col>
              <Col lg={8}>
                <h3 className="honor_name">Mr. Mahesh Agrawal</h3>
                <p className="honor_details">
                  ISBM University is established in year 2016 with the objective
                  of catering to the multifaceted educational needs of millions.
                  Our philosophy includes offering multiple courses and
                  programes for the students, preparing students to become
                  successful in life and eventually becoming responsible
                  citizens. We encourage them for developing personality,
                  metamorphosing and nurturing them to become employable as well
                  as venture into entrepreneurship. In a nut shell we make them
                  academically sound with desired skills.As we look to the
                  future one thing is certain - knowledge will be a key resource
                  and will be highly sought-after within growing India and
                  around the world.
                </p>
                <p className="honor_details">
                  This will help to ensure the on-going relevance of our
                  academic programmes and the continued excellence of our
                  teaching, learning and research.I welcome all and congratulate
                  the students and the parents who choose to be a part of our
                  university. I am sure that you will feel proud on being
                  associated with us and make us equally proud with your
                  academic excellence.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Honorablepatron;
