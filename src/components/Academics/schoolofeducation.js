import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Modal } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import { Link } from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
import Allinone from "../commanfiles/allinone";
import { BsDownload } from "react-icons/bs";
const Schoolofeducation = () => {
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
      <div className="innerbackimage11">
        <div className="text_banners_abcds">
          <h1 className="animate__animated animate__fadeInRightBig">
            School of Education
          </h1>
          <p className="animate__animated animate__fadeInRightBig">With a career in education, you get the most appreciated job, a great growth prospective,<br /> and
            chance to make the world a better place.</p>
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
          <Breadcrumb.Item active>School of Education</Breadcrumb.Item>
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
              <li className="acdsds"><Link to='/Schoolofeducation'>School of Education</Link></li>
              <li><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
            </ul>
          </Col>
          <Col lg={9}>
            <div className="row">
              <div className="col-lg-9">
                <h2 className="linkabout123">School of Education</h2>
                <p class="AboutSection__desc">Overview</p>
                <ul class="AboutSection__list">
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">School of Education aims to train human resource as educational leaders and as
                      experienced educators with knowledge and skills.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">The overall aim is to promote and support educational scholarship, research, and
                      practices.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                    </div>
                    <div class="AboutSection__list__label">New skills and strength of thinking are synthesized into regular practices and
                      experiences.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                    </div>
                    <div class="AboutSection__list__label">The teaching is characterized by clarity, repertoire examples, analogies, demonstration.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                    </div>
                    <div class="AboutSection__list__label">The School of Education endeavors to provide quality education to meet the global
                      challenges of school education and to prepare teachers as instruments of social change, in
                      order to achieve high ideals of social justice and a democratic society.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                    </div>
                    <div class="AboutSection__list__label">A significant feature of the School of Education is its extensive education programs. The
                      School organizes workshops and in-service training programs for school teachers to
                      update their knowledge and skills.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div class="AboutSection__testimonial">
                  <p class="AboutSection__testimonial__desc has-logo">ISBM’s specialization programs in education are designed in a way that gives the student a
                    chance to learn from a multi-disciplinary curriculum in a conducive environment.</p>
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
                      <Link to="/Diploma_in_education">
                        Diploma in Education
                      </Link>
                    </td>
                    <td>1 Year</td>
                    <td>Semester</td>
                    <td>10 + 2 or Equivalent</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Bachelor_of_education">
                        Bachelor of Education
                      </Link>
                    </td>
                    <td>3 Years</td>
                    <td>Semester</td>
                    <td>10 + 2 or Equivalent</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Bachelor_of_physical_education">
                        Bachelor of Physical Education
                      </Link>
                    </td>
                    <td>1 Year</td>
                    <td>Annual</td>
                    <td>10 + 2 or Equivalent</td>
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

export default Schoolofeducation