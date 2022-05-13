import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Modal } from "react-bootstrap";
import Footer from "../../footer";
import Header from "../../Header/header";
import NavigationBar from "../../Header/navbar";
import { Link } from 'react-router-dom';
import Enquiry_now from "../../enquiry_now";
import { BiRightArrow } from "react-icons/bi";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Allinone from "../../commanfiles/allinone";
import Brouche from '../../../Images/ISBM_PROSPECTUS.pdf';
const Post_graduate_diploma_in_computer_application = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <div className="innerbackimage9">
        <div className="text_banners_abcds">
          <h1 className="animate__animated animate__fadeInRightBig">
            Post Graduate Diploma In Computer Application (PGDCA)
          </h1>
          <p className="animate__animated animate__fadeInRightBig">A Post Graduate Diploma in Computer Applications is a specialized program for <br />individuals
            who want to opt for a career in IT industry.</p>
          <button
            className="animate__animated animate__fadeInRightBig apply_btn"
            onClick={() => setModalShow(true)}
          >
            <span>Apply Now</span>
          </button>
          <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />

        </div>
      </div>
      <section className="BannerSection__programStats">
        <ul className="BannerSection__programStats__box">
          <li className="BannerSection__programStats__static">
            <div className="BannerSection__programStats__static__label">
              <div className="smartness-overloaded">Level</div>
            </div>
            <div className="BannerSection__programStats__static__desc">Post Graduate Diploma (PGD)</div>
          </li>
          <li className="BannerSection__programStats__static">
            <div className="BannerSection__programStats__static__label">
              <div className="smartness-overloaded">Duration</div>
            </div>
            <div className="BannerSection__programStats__static__desc">1 Year</div>
          </li>
          <li className="BannerSection__programStats__static">
            <div className="BannerSection__programStats__static__label">
              <div className="smartness-overloaded">Eligibility Criteria</div>
            </div>
            <div className="BannerSection__programStats__static__desc">Graduation</div>
          </li>
          <li className="BannerSection__programStats__static">
            <div className="BannerSection__programStats__static__label">
              <div className="smartness-overloaded">Download Brochure</div>
            </div>
            <div className="BannerSection__programStats__static__desc"><a download href={Brouche}>Click Here</a></div>
          </li>
        </ul>
      </section>
      <Container className="About_us11">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            Academics
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/Schoolofit">School of Information and Technology</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Post Graduate Diploma In Computer Application (PGDCA)</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col lg={3} className="ordersss">
            <h4 className="programees">Schools</h4>
            <ul className="abcd1111">
              <li><Link to='/SchoolCommerce'>School of Commerce</Link></li>
              <li><Link to='/Schoolmanagement'>School of Management </Link></li>
              <li><Link to='/Schoolscience'>School of Science</Link></li>
              <li><Link to='/Schoolartshuman'>School of Arts and Humanities</Link></li>
              <li><Link to='/Schoolengrtech'>School of Engineering and Technology</Link></li>
              <li><Link to='/Schooloflibrary'>School of Library and Information Science</Link></li>
              <li><Link to='/Journalismandmass'>School of Journalism and Mass Communication</Link></li>
              <li><Link to='/Schoollaws'>School of Law</Link></li>
              <li><Link to='/Schooldesign'>School of Design</Link></li>
              <li className="acdsds"><Link to='/Schoolofit'>School of Information and Technology </Link></li>
              <li><Link to='/Schoolofpharma' target="blank">School of Pharmacy</Link></li>
              <li><Link to='/Schooloflifescience'>School of Life Science</Link></li>
              <li><Link to='/Schoolofyoga'>School of Yoga and Naturopathy</Link></li>
              <li><Link to='/Schoolofeducation'>School of Education</Link></li>
              <li><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
            </ul>
          </Col>
          <Col lg={9}>
            <div className="row">
              <div className="col-lg-12">
                <h2 className="linkabout123">Post Graduate Diploma In Computer Application (PGDCA)</h2>
                <p class="AboutSection__desc">Overview</p>
                <ul class="AboutSection__list">
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">To boost the students career in computer based jobs.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">To prepare him/her for the role of an assistant programmer or a computer operator.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                    </div>
                    <div class="AboutSection__list__label">To train students in a way that they can tackle software challenges in industry and
                      academia.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                    </div>
                    <div class="AboutSection__list__label">Provide students an expertise in the field thereby making them computer professionals
                      with enormous skills.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                    </div>
                    <div class="AboutSection__list__label">PGDCA from ISBM University gives students all the required skills and technical
                      knowledge.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                    </div>
                    <div class="AboutSection__list__label">It provides numerous opportunities to students enrolled in the course to opt for various
                      careers such as web developer, web designer, computer language programmer, computer
                      programmer, software developer, ethical hacker and various others.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                    </div>
                    <div class="AboutSection__list__label">The one-year PGDCA course will teach students about the theoretical and application-
                      oriented aspects of computer application, including the latest computer software
                      development.

                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                    </div>
                    <div class="AboutSection__list__label">The PGDCA is meant for graduate students and is a professional course
                    </div>
                  </li>

                </ul>
              </div>
            </div>
            {/* <Col lg={12}>
              <section>
                <div class="Career_row">
                  <p class="AboutSection__desc">Specialization Offered :</p>
                  <ul class="bba">
                    <p style={{ color: '#5a5a5a' }}><BiRightArrow />  B.A:- (Select any 3 Subject) English Literature | Hindi Literature | History | Economics | Sociology |
                      Political Science | Geography
                      <br /><BiRightArrow /> M.A :- (Select any One) English | Hindi | Chhattisgarhi | Philosophy | History &amp; Archaeology Political
                      Science | Public Administration | Economics | Education | Sociology | Geography | Psychology.</p>
                  </ul>
                </div>
              </section>
            </Col> */}
          </Col>
        </Row>
      </Container>
      <Allinone />
      <Footer />
      <Modal show={show} onHide={handleClose} centered className="video_courses_abcdsa">
        {/* <Modal.Header closeButton>
                </Modal.Header> */}
        <Modal.Body style={{ padding: '0px', background: 'transparent' }}>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgS_lbVI428" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
export default Post_graduate_diploma_in_computer_application
