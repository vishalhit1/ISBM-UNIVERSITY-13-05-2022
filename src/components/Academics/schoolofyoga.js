import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Modal } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import { Link } from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Allinone from "../commanfiles/allinone";
import { BsDownload } from "react-icons/bs";
const Schoolofyoga = () => {
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
      <div className="innerbackimage12">
        <div className="text_banners_abcds">
          <h1 className="animate__animated animate__fadeInRightBig">
            School of Yoga and Naturopathy
          </h1>
          <p className="animate__animated animate__fadeInRightBig">Yoga is a collection of physical, spiritual and mental practices that originated in ancient India.
            <br />It increases self-awareness and removes negativity from the mind and toxins from the body. <br />It promotes self-healing and recharges the body with cosmic energy.</p>
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
          <Breadcrumb.Item active>School of Yoga and Naturopathy</Breadcrumb.Item>
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
              <li className="acdsds"><Link to='/Schoolofyoga'>School of Yoga and Naturopathy</Link></li>
              <li><Link to='/Schoolofeducation'>School of Education</Link></li>
              <li><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
            </ul>
          </Col>
          <Col lg={9}>
            <div className="row">
              <div className="col-lg-9">
                <h2 className="linkabout123">School of Yoga and Naturopathy</h2>
                <p class="AboutSection__desc">Overview</p>
                <ul class="AboutSection__list">
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">Yoga is a physical, mental, and spiritual practice or discipline which originated in ancient India more
                      than five thousand years ago and is followed in all over the world.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">Yoga therapy is mainly the use of yogic practices to provide psychological, spiritual, and physiological
                      healing. This mainly involves the use of meditation, chanting, and the study of scriptures.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                    </div>
                    <div class="AboutSection__list__label">The school organizes free naturopathy camp in the villages located in the close proximity of the
                      campus. The patients are treated disease wise and symptoms wise.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                    </div>
                    <div class="AboutSection__list__label">Yoga training is given to the students by the experts for their webbing.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                    </div>
                    <div class="AboutSection__list__label">International Yoga Day is celebrated in the campus.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                    </div>
                    <div class="AboutSection__list__label">AYUSH ministry is promoting the curriculum.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div class="AboutSection__testimonial">
                  <p class="AboutSection__testimonial__desc has-logo">The curriculum of yoga includes Yogic Texts, Patanjali Yoga Sutra, Hatha Yoga, Anatomy
                    and Physiology, Diet and Nutrition, Therapeutic Yoga, Practical Yoga including Asana,
                    Pranayama, Dharana Dhyana, Bandha, Mudra and Shat Kriya.</p>
                  <div class="brand-icon-stopper brand-icon-retina brand-icon-retina_LBS_testimonial__1581430299500">
                  </div>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
      <div style={{ background: '#06355f', paddingTop: '50px', paddingBottom: '20px' }}>
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
                      <Link to="/Diploma_in_yoga">Diploma in Yoga (DIY)</Link>
                    </td>
                    <td>1 Year</td>
                    <td>Annual/Semester</td>
                    <td>12th or Equivalent</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Diploma_in_naturopathy">
                        Diploma in Naturopathy (DN)
                      </Link>
                    </td>
                    <td>1 Year</td>
                    <td>Annual/Semester</td>
                    <td>12th or Equivalent</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Pg_diploma_in_yoga_and_naturopathy">
                        PG Diploma in Yoga and Naturopathy
                      </Link>
                    </td>
                    <td>1 Year</td>
                    <td>Semester</td>
                    <td>Graduation or Equivalent</td>
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

export default Schoolofyoga