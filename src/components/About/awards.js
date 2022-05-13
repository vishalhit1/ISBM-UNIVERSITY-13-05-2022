import React, { useEffect } from "react";
import { Container, Row, Col, Accordion, Breadcrumb } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import award1 from "../../Images/awards/awards1.png";
import award2 from "../../Images/awards/awards2.jpg";
import award3 from "../../Images/awards/awards4.jpg";
import award4 from "../../Images/awards/awards5.jpg";
import award5 from "../../Images/awards/awards6.jpg";
import award6 from "../../Images/awards/awards7.jpg";
import award7 from "../../Images/awards/awards8.jpg";
import award8 from "../../Images/awards/awards9.jpg";
import award9 from "../../Images/awards/awards10.jpg";
import award10 from "../../Images/awards/awards11.jpg";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Awards = () => {
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
              Awards
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
          <Breadcrumb.Item active>Awards</Breadcrumb.Item>
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
            <p className="links_about1">
              <Link to="/StatuesOrdinance">Statutes and Ordinances</Link>
            </p>
            <p className="links_about1">
              <Link to="/Recognisation">Recognitions and Approvals</Link>
            </p>
            <p className="links_about active">
              <Link to="/Awards">Awards</Link>
            </p>
            <p className="links_about1">
              <Link to="/Mediacoverage">Media Coverage</Link>
            </p>
            {/* <p className="links_about1"><Link to="/">Mou's &amp; Collaboration</Link></p> */}
          </Col>
          <Col lg={9}>
            <h2 className="linkabout123">Awards</h2>
            <Accordion className="faqss" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  ISBM University awarded the Best University in Chhattisgarh{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={4} className="mb-4 award-img">
                      <img src={award1}></img>
                    </Col>
                    <Col lg={8}>
                      <p>
                        ISBM University awarded the "Best University in
                        Chhattisgarh" by the Honorable CM of Chhattisgarh, Shri
                        Bhupesh Baghel.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  {" "}
                  Global Award 2019 as Best Upcoming University by Auropath
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={4} className="mb-4 award-img">
                      <img src={award2}></img>
                    </Col>
                    <Col lg={8}>
                      <p>
                        ISBM University is awarded the "Best Upcoming
                        University" Global Award 2019 by Auropath.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  {" "}
                  ISBM University awarded with "Certificate of Excellence"
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={4} className="mb-4 award-img">
                      <img src={award3}></img>
                    </Col>
                    <Col lg={8}>
                      <p>
                        ISBM University is awarded the "Certificate of
                        Excellence" by Dr. Vinod Kumar Bhardwaj, State Nodal
                        Officer, Innovations & Skill Development Programmes,
                        Department of College Education, Government of Rajasthan
                        on the occasion of 11th Higher Education & Human
                        Resource Conclave, Pune.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  {" "}
                  ISBM University awarded Best University in Chhatisgarh - 2019
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={4} className="mb-4 award-img">
                      <img src={award4}></img>
                    </Col>
                    <Col lg={8}>
                      <p>
                        ISBM University awarded Best University in Chhatisgarh
                        2019 by Shri Bhupesh Baghel, Hon. CM of Chhatisgarh.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  ISBM University awarded Best University Promoting Government
                  Digital Initiatives - 2019
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={4} className="mb-4 award-img">
                      <img src={award5}></img>
                    </Col>
                    <Col lg={8}>
                      <p>
                        ISBM University has been awarded by ASSOCHAM on its
                        Education Summit 2019 for being the "Best University
                        Promoting Government Digital Initiatives". presented by
                        His Excellency Former President of India Shri Pranab
                        Mukherjee and Hon. Minister for commerce and industry
                        and civil aviation, Government of India "Shri Suresh
                        Prabhu" in Delhi.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  {" "}
                  ISBM University awarded "MOST EMERGING UNIVERSITY 2018"
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={4} className="mb-4 award-img">
                      <img src={award6}></img>
                    </Col>
                    <Col lg={8}>
                      <p>
                        ISBM University awarded "MOST EMERGING UNIVERSITY 2018"
                        by Hon. Ex-Chief Minister of Uttarakhand State by "Shri
                        Harish Rawat" at New Delhi.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  ISBM University awarded with the "Best Upcoming University"
                  Award - 2018
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={4} className="mb-4 award-img">
                      <img src={award7}></img>
                    </Col>
                    <Col lg={8}>
                      <p>
                        ISBM University awarded "Best Upcoming University" by
                        Shri Purushottam Rupala, Hon'ble Minister of Agriculture
                        and Panchayati Raj at World Education Summit in
                        association with #IndiaToday Group on 27th April 2018.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  ISBM University Awarded "The Best Upcoming University" - 2017
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={4} className="mb-4 award-img">
                      <img src={award8}></img>
                    </Col>
                    <Col lg={8}>
                      <p>
                        ISBM University Awarded "THE BEST UPCOMING UNIVERSITY"
                        by the Hon. HRD Minister 'Shri Prakash Javdekar' in
                        association with ASSOCHAM.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  ISBM University awarded "MOST INNOVATIVE UNIVERSITY 2018"
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={4} className="mb-4 award-img">
                      <img src={award9}></img>
                    </Col>
                    <Col lg={8}>
                      <p>
                        ISBM University awarded "MOST INNOVATIVE UNIVERSITY" by
                        Hon. Chief Minister of Chhattisgarh 'Shri Raman Singh',
                        Hon. Higher Education Minister of Chhattisgarh State
                        'Shri Prem Prakash Pandey' and Hon. School Education
                        Minister of Chhattisgarh State 'Shri Kedar Kashyap' at
                        Sushiksha event on 25th June in Raipur, in association
                        with News18Network.
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>ISBM University Awarded</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={4} className="mb-4 award-img">
                      <img src={award10}></img>
                    </Col>
                    <Col lg={8}>
                      <p>
                        DR. D.M. Deshpande (Vice-Chancellor - ISBM University)
                        receiving "The Best Emerging Private University" Award
                        by Shri Raman Singh (Chief Minister - Chhattisgarh) and
                        Shri Narendra Singh Tomar (Union Mines and Rural
                        Development Minister).
                      </p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Awards;
