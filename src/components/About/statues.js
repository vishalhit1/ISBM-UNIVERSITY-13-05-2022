import React, { useEffect } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Table,
  Breadcrumb,
  Accordion,
} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import pdf1 from "../../Images/ISBMU-Ordinances.pdf";
import pdf2 from "../../Images/Gazette Notification_ISBM First Ordinance.pdf";
import pdf3 from "../../Images/ISBMU First Statute - 1.pdf";
import Enquiry_now from "../enquiry_now";

const StatuesOrdinance = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <div className="innerbackimage">
          <div className="text_banners_abcds">
              <h1 className="animate__animated animate__fadeInRightBig">
              Statutes and Ordinances
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
          <Breadcrumb.Item active>Statutes and Ordinances</Breadcrumb.Item>
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
            <p className="links_about1">
              <Link to="/Academiccouncil">Academic Council</Link>
            </p>
            <p className="links_about1">
              <Link to="/BoardAdvisor">Board of Advisors</Link>
            </p>
            <p className="links_about1">
              <Link to="/Othercommunitie">Other Committees</Link>
            </p>
            <p className="links_about  active">
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
            <h2 className="linkabout123">Statutes and Ordinances</h2>
            <Accordion className="faqss" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  Statutes and Ordinances - 2{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="committe-list">
                    <li>
                      <a
                        href={pdf1}
                        style={{ color: "#5e1756", textDecoration: "none" }}
                      >
                        Statutes and Ordinances - 2
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Ordinances - 1</Accordion.Header>
                <Accordion.Body>
                  <ul className="committe-list">
                    <li>
                      <a
                        href={pdf2}
                        style={{ color: "#5e1756", textDecoration: "none" }}
                      >
                        Ordinances - 1
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Statutes - 1</Accordion.Header>
                <Accordion.Body>
                  <ul className="committe-list">
                    <li>
                      <a
                        href={pdf2}
                        style={{ color: "#5e1756", textDecoration: "none" }}
                      >
                        Statutes - 1
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default StatuesOrdinance;
