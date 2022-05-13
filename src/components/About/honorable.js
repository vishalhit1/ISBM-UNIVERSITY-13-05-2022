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
import honor from "../../Images/MsAnusuiya.jpg";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Honorable = () => {
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
              Hon'ble Visitor
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
          <Breadcrumb.Item active>Hon'ble Visitor</Breadcrumb.Item>
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
            <p className="links_about active">
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
            <h2 className="linkabout123">Hon'ble Visitor</h2>
            <Row>
              <Col lg={4}>
                <div className="honor_div">
                  <img className="img_honor" src={honor} />
                </div>
              </Col>
              <Col lg={8}>
                <h3 className="honor_name">Ms. Anusuiya Uikey</h3>
                <p className="honor_details">
                  It is the Innovation that can lead our country towards
                  development and help us in attaining a remarkable position on
                  the world map. Today, our survival in this world of competency
                  depends on our ability to innovate. It is said that
                  much-celebrated Information age is now over and we are now in
                  the creative era, where the speed of innovation is the only
                  key to sustainable development. But we have also to remember
                  that knowledge is one of the most powerful tools to succeed,
                  so invest your time and efforts to identify appropriate
                  competencies based on your interest, aptitude and social
                  values associated with them.
                </p>
                <p className="honor_details">
                  It is good to adopt scientific approaches of west to solve the
                  problems and for development, but we should not underestimate
                  our own Indian way of thinking and indigenous philosophy of
                  life which lays emphasis on "Vasudhaiva Kutumbakam" and well
                  being of every individual, i.e., "General Interest, General
                  Happiness". We must remain deeply connected to our roots and
                  ethical bindings. This will help you to succeed in life not
                  only academically but also as a good human being and a
                  responsible citizen of country.
                </p>
                <p className="honor_details">
                  The ambitious schemes, viz. "Swachh Bharat", "Digital India",
                  "Make in India" and "Quality Education to All" are also
                  envisaged by Hon'ble Prime Minister attain again our ancient
                  glory and to play the role of "World guru" in the 21st
                  century. Keep all these at the center of your thoughts rather
                  than at the periphery of your vision. We see you all as a
                  vital partner in India's quest for progress and prosperity.
                </p>
                <p className="honor_details">
                  I wish you all the best for a successful career and life.
                </p>
                <a href="https://rajbhavancg.gov.in" target="_blank">https://rajbhavancg.gov.in</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Honorable;
