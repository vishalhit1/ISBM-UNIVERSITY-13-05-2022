import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Modal } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import { Link } from "react-router-dom";
import Enquiry_now from "../enquiry_now";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Allinone from "../commanfiles/allinone";
import { BsDownload } from "react-icons/bs";
import Bcom from '../../Images/Syllabus_pdf/BCOM.pdf';
import Mcom from '../../Images/Syllabus_pdf/MCOM.pdf';
const SchoolOfCommerce = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="innerbackimage15">
        <div className="text_banners_abcds">
          <h1 className="animate__animated animate__fadeInRightBig">
            School of Commerce
          </h1>
          <p className="animate__animated animate__fadeInRightBig">
            The School of Commerce focuses on wide range of subject in Business
            Management,
            <br /> Banking and Finance. School offers specialization in areas
            namely, the Financial Capital,
            <br /> Business Management & Banking, Higher Accountancy Insurance
            and Finance.
          </p>
          <button
            className="animate__animated animate__fadeInRightBig apply_btn"
            onClick={() => setModalShow(true)}
          >
            <span>Apply Now</span>
          </button>
          <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />

          {/* <button
            className="animate__animated animate__fadeInRightBig outer_circle"
            onClick={handleShow}
          >
            <button className="play_btn">
              <BsFillPlayCircleFill className="playy" />
            </button>
          </button> */}
        </div>
      </div>
      <Container className="About_us11">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item active>School Commerce</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col lg={3}>
            <h4 className="programees">Schools</h4>
            <ul className="abcd1111">
              <li className="acdsds">
                <Link to="/SchoolCommerce">School of Commerce</Link>
              </li>
              <li>
                <Link to="/Schoolmanagement">School of Management </Link>
              </li>
              <li>
                <Link to="/Schoolscience">School of Science</Link>
              </li>
              <li>
                <Link to="/Schoolartshuman">School of Arts and Humanities</Link>
              </li>
              <li>
                <Link to="/Schoolengrtech">
                  School of Engineering and Technology
                </Link>
              </li>
              <li>
                <Link to="/Schooloflibrary">
                  School of Library and Information Science
                </Link>
              </li>
              <li>
                <Link to="/Journalismandmass">
                  School of Journalism and Mass Communication
                </Link>
              </li>
              <li>
                <Link to="/Schoollaws">School of Law</Link>
              </li>
              <li>
                <Link to="/Schooldesign">School of Design</Link>
              </li>
              <li>
                <Link to="/Schoolofit">
                  School of Information and Technology{" "}
                </Link>
              </li>
              <li>
                <Link to="/Schoolofpharma" target="blank">
                  School of Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/Schooloflifescience">School of Life Science</Link>
              </li>
              <li>
                <Link to="/Schoolofyoga">School of Yoga and Naturopathy</Link>
              </li>
              <li>
                <Link to="/Schoolofeducation">School of Education</Link>
              </li>
              <li>
                <Link to="/Schoolofhotelmanagement">
                  School of Hotel Management
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={9}>
            <div className="row">
              <div className="col-lg-9">
                <h2 className="linkabout123">School of Commerce</h2>
                <p class="AboutSection__desc">Overview</p>
                <ul class="AboutSection__list">
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">
                      To provide professional education for teaching commerce
                      and management disciplines to undergraduate students for
                      advancement of learning and thereby setting up a benchmark
                      for the industry.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">
                      To encourage the development of comprehensive conceptual
                      and professional skills among students.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                    </div>
                    <div class="AboutSection__list__label">
                      The emphasis of the course is to impart to the students'
                      specialized skill sets in the areas of finance, accounting
                      and taxation with a view to avail career opportunities in
                      financial services.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                    </div>
                    <div class="AboutSection__list__label">
                      SOC provides a learning ambience to the students with
                      competitive education emphasizing on inculcating values
                      and transforming them into socially responsible managers
                      and business leaders.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                    </div>
                    <div class="AboutSection__list__label">
                      Knowledge is imparted by using an innovative teaching
                      approach towards lectures, giving on-the-job experience
                      through internship and by organizing guest lectures and
                      practical demonstrations relevant to gain an elevated
                      understanding of the subject in relation to its practical
                      environment.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                    </div>
                    <div class="AboutSection__list__label">
                      To train the students to carry out research in the field
                      of management and provide them with state-of-the-art
                      infrastructure and necessary resources for fostering
                      research.
                    </div>
                  </li>
                  {/* <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_workingprofessional"></div>
                    </div>
                    <div class="AboutSection__list__label">
                      World Education Services (WES) recognized. Lets you move
                      one step closer to working abroad.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_jobinterviews"></div>
                    </div>
                    <div class="AboutSection__list__label">
                      Advance your career with 360° Career Support
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_mentorship"></div>
                    </div>
                    <div class="AboutSection__list__label">
                      Get 1:1 Mentorship from Industry Mentors
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                    </div>
                    <div class="AboutSection__list__label">
                      {" "}
                      Network with peers at Offline BaseCamps
                    </div>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-3">
                <div class="AboutSection__testimonial">
                  <p class="AboutSection__testimonial__desc has-logo">
                    Our School of Commerce is functioning since the inception of
                    the University. It provides teaching in undergraduate, post
                    graduate level and Doctoral level. Our broad Vision of the
                    SOC is to persistently endeavor to achieve excellence in
                    management and commerce education, research, and outreach
                    activities with a multi-disciplinary developmental
                    perspective.
                  </p>
                  <div class="brand-icon-stopper brand-icon-retina brand-icon-retina_LBS_testimonial__1581430299500"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ background: 'rgb(6 53 95)', paddingTop: '50px', paddingBottom: '20px' }}>
        <div className='container'>
          <div className='row'>
            <Col lg={12}>
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
                          <Link to="/bachelors-of-commerce">
                            Bachelors in Commerce (B.Com)
                          </Link>
                        </td>
                        <td>3 Years</td>
                        <td>Annual</td>
                        <td>10 + 2 or Equivalent</td>
                        <td><a download href={Bcom}><BsDownload /> Click Here</a></td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/masters-in-commerce">
                            Masters in Commerce (M.Com)
                          </Link>
                        </td>
                        <td>2 Years</td>
                        <td>Annual</td>
                        <td>Graduation with Commerce</td>
                        <td><a download href={Mcom}><BsDownload /> Click Here</a></td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/phd-mphil-commerce">
                            Ph.D. Program (Commerce)
                          </Link>
                        </td>
                        <td>1 Year</td>
                        <td>Annual</td>
                        <td>PG In Relavent Area</td>
                        <td><a download href={Mcom}><BsDownload /> Click Here</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </Col>
            {/* <div className='col-lg-6'>
                        <p className='paras_acd'>Bachelors in Commerce (B.Com)</p>
                    </div>
                    <div className='col-lg-6 qwersadf'>
                    <a download href={Bcom}><button className='abvcd'><BsDownload /> Download Syllabus</button></a>
                    </div>
                    <div className='col-lg-6'>
                        <p className='paras_acd'>Masters in Commerce (M.Com)</p>
                    </div>
                    <div className='col-lg-6 qwersadf'>
                    <a download href={Mcom}><button className='abvcd'><BsDownload /> Download Syllabus</button></a>
                    </div>
                    <div className='col-lg-6'>
                        <p className='paras_acd'>Ph.D. Program (Commerce)</p>
                    </div>
                    <div className='col-lg-6 qwersadf'>
                        <button className='abvcd'><BsDownload /> Download Syllabus</button>
                    </div> */}
          </div>
        </div>
      </div>
      <Allinone />
      <Footer />
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="video_courses_abcdsa"
      >
        {/* <Modal.Header closeButton>
                </Modal.Header> */}
        <Modal.Body style={{ padding: "0px", background: "transparent" }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/jgS_lbVI428"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SchoolOfCommerce;
