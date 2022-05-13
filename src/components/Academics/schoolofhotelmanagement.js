import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Modal } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import { Link } from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
import Allinone from "../commanfiles/allinone";
import { BsDownload } from "react-icons/bs";
const Schoolofhotelmanagement = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="innerbackimage10">
        <div className="text_banners_abcds">
          <h1 className="animate__animated animate__fadeInRightBig">
            School of Hotel Management
          </h1>
          <p className="animate__animated animate__fadeInRightBig">Hotel Management and Catering Technology is a demanding field of skilled professionals in
            the present <br /> scenario and is expected to be ever demanding. Hotel sectors are one of the<br />
            prominent contributors of the world economy.</p>
          <button
            className="animate__animated animate__fadeInRightBig apply_btn"
            onClick={() => setModalShow(true)}
          >
            <span>Apply Now</span>
          </button>
          <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />

        </div>
      </div>
      <Container className="About_us11">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            Pages
          </Breadcrumb.Item>
          <Breadcrumb.Item active>School of Hotel Management</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col lg={3}>
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
              <li><Link to='/Schoolofit'>School of Information and Technology </Link></li>
              <li><Link to='/Schoolofpharma' target="blank">School of Pharmacy</Link></li>
              <li><Link to='/Schooloflifescience'>School of Life Science</Link></li>
              <li><Link to='/Schoolofyoga'>School of Yoga and Naturopathy</Link></li>
              <li><Link to='/Schoolofeducation'>School of Education</Link></li>
              <li className="acdsds"><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
            </ul>
          </Col>
          <Col lg={9}>
            <div className="row">
              <div className="col-lg-9">
                <h2 className="linkabout123">School of Hotel Management</h2>
                <p class="AboutSection__desc">Overview</p>
                <ul class="AboutSection__list">
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">The basic objective of the Hotel management program is to provide the hospitality
                      industry a steady stream of competent young skilled professional with the necessary
                      knowledge, value and attitudes to occupy key operational positions.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">The students hone skills to work on timelines, develop plate presentation and inculcate
                      team work.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                    </div>
                    <div class="AboutSection__list__label">They polish techniques of tasting and serving food and beverages by simulating the
                      workings of restaurant.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                    </div>
                    <div class="AboutSection__list__label">This is further extended to internship in industry to allow students to solidify their
                      knowledge.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                    </div>
                    <div class="AboutSection__list__label">The hotel industry is a burgeoning sector which promises lucrative career opportunities.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                    </div>
                    <div class="AboutSection__list__label">The course takes young students to various arenas of hotel work like office operation,
                      hospitality, sales and marketing, etc.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div class="AboutSection__testimonial">
                  <p class="AboutSection__testimonial__desc has-logo">This growing industry frequently needs young, energetic and skilled graduates in India as
                    well as abroad with height salary packages and rewards. The course enables the students
                    to fill the gap between expectation of the global need and present scenario.</p>
                  <div class="brand-icon-stopper brand-icon-retina brand-icon-retina_LBS_testimonial__1581430299500">
                  </div>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
      <div style={{ background: '#06355f', paddingTop: '50px', paddingBottom: '50px' }}>
        <div className='container'>
          <section>
            <div className="programs_row">
              <table>
                <tbody>
                  <tr>
                    <th>Programme</th>
                    <th>Duration</th>
                    <th>Mode</th>
                    <th>Eligibility</th>
                    <th>Syllabus</th>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Bachelors_in_hotel_management_and_catering_technology">
                        Bachelor of Hotel Management and Catering Technology (BHMCT)
                      </Link>
                    </td>
                    <td>4 Years</td>
                    <td>Semester</td>
                    <td>10+2 or equivalent(Any Stream)</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Diploma_in_hotel_management_and_catering_technology">
                        Diploma in Hotel Management and Catering Technology (DHMCT)
                      </Link>
                    </td>
                    <td>3 Years</td>
                    <td>Semester</td>
                    <td>10th</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
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
    </div>
  )
}

export default Schoolofhotelmanagement