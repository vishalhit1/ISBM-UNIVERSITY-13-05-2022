import React, { useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import vinay from "../../Images/vinay.jpg";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Honorablechancellor = () => {
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
              Hon'ble Chancellor
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
          <Breadcrumb.Item active>Hon'ble Chancellor</Breadcrumb.Item>
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
            <p className="links_about active">
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
            <h2 className="linkabout123">Hon'ble Chancellor</h2>
            <Row>
              <Col lg={4}>
                <div className="honor_div">
                  <img className="img_honor" src={vinay} />
                </div>
              </Col>
              <Col lg={8}>
                <h3 className="honor_name">Dr. Vinay M. Agrawal</h3>
                <p className="honor_details">
                  In Modern Day society where harmonious development is achieved
                  by enlightenment of an individual's heart, mind and soul and
                  when material gains outplay basic human values I am of the
                  opinion that education can transform the attitude, thinking
                  and lifestyle of people and enhance society. Knowledge makes
                  people flexible in thinking and decision making. I have always
                  worked towards empowering the society with skillful and
                  socially relevant citizens which is possible only educating
                  the masses. We initiated this benign of social order
                  reconstruction by establishing various educational
                  establishments, this contributing to the nation's development
                  in its own humble way. ISBM University has taken the task of
                  human capital development in sync in modern day industry,
                  society required by integrating the basic principles of
                  knowledge, wisdom and humanity in its policies and programmes.
                </p>
                <p className="honor_details">
                  ISBM University stands for humanism, tolerance, rationality,
                  idea exploration and search of innovativeness. The approach of
                  our curriculum focuses on experiential learning, ensuring
                  better content delivery and provision for extra-curricular
                  activities are integral components of the learning process. At
                  ISBM University we seek self-motivated individuals who believe
                  in making their own methods of learning, take full advantage
                  of opportunities and willing to contribute their very best.
                </p>
                <p className="honor_details">
                  ISBM University is proud of its state of the art technology
                  and its beautifully landscaped campus with aesthetically built
                  facilities and student friendly policies that creates a
                  satisfying overall academic ambience. I extend my best wishes
                  to all the aspirants and assure them that under the mentorship
                  of experienced faculties of ISBM University they shall be able
                  to extract complete advantage out of the opportunity offered
                  and contribute towards crating harmonious, peaceful and
                  rewarding future. Participation in wide range of academics and
                  other activities will provide you the opportunity to acquire
                  leadership, professional and personal skills.
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

export default Honorablechancellor;
