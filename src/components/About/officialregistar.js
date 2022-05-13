import React, { useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import bhol from "../../Images/bhol.jpg";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Officialregistar = () => {
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
              Registrar
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
          <Breadcrumb.Item active>Registrar</Breadcrumb.Item>
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
            <p className="links_about active">
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
            <h2 className="linkabout123">Registrar</h2>
            <Row>
              <Col lg={4}>
                <div className="honor_div">
                  <img className="img_honor" src={bhol} />
                </div>
              </Col>
              <Col lg={8}>
                <h3 className="honor_name">Dr. B.P. Bhol</h3>
                <p className="honor_details">
                  On behalf of Administration, faculty and staff of ISBM
                  University, I would like to take this opportunity to extend a
                  warm welcome to you! Congratulations on making a very positive
                  choice in becoming a student and a member of our ISBM
                  University family.
                </p>
                <p className="honor_details">
                  The University believes in providing quality education by
                  using latest technology with high academic standards. We have
                  excellent team members to support the students in order to
                  provide the best education in the world. Our highly qualified,
                  committed and friendly staff will ensure that your experience
                  at ISBM University is one that will be imprinted on your mind
                  as the most rewarding and fulfilling. Our faculty members are
                  committed to advising and working with you to guide your
                  progress, along with other academic and professional goals you
                  envision for yourself.
                </p>
                <p className="honor_details">
                  The ISBM University lays emphasis on all round development of
                  personalities of students. It will be our endeavor to convert
                  the campus in to a hub of buzzing activities. Being in the
                  field of higher education for very long, we understand the
                  needs of today's youth. Hence, the University will make all
                  efforts to make learning process a joyous and fun filled one.
                  We are living in exciting times as India makes its mark
                  globally and takes its position in the new emerging
                  socio-economic order. There will be no dearth of opportunities
                  for young Indians, both with in India and outside. Of course,
                  we need to produce quality young men and women who can take
                  advantage of these growth opportunities. That is where
                  institutions such as ISBM can contribute in a big way.
                </p>
                <p className="honor_details">
                  Our earnest aim is not to offer any program just as an added
                  qualification or degree but to support the students and
                  professionals to be successful in their life and profession.
                  The University provides affordable courses so that it will
                  benefit most of the students and professionals across the
                  world. ISBM University also welcomes world reputed
                  universities and academic institutions for academic
                  partnership and educational exchange programs and
                  recognitions. Do enjoy the responsibilities and privileges of
                  being both a university student and a developing professional.
                  We wish you a rewarding and successful academic year.
                </p>
                <p className="honor_details">
                  Once again welcome from the entire ISBM University family.
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

export default Officialregistar;
