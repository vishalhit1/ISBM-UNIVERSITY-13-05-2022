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
const Schoolofit = () => {
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
      <div className="innerbackimage9">
        <div className="text_banners_abcds">
          <h1 className="animate__animated animate__fadeInRightBig">
            School of Information and Technology
          </h1>
          <p className="animate__animated animate__fadeInRightBig">Information technology (IT) is the use of computers to create, process, store, retrieve, and <br />
            exchange all kinds of electronic data and information.</p>
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
          <Breadcrumb.Item active>School of Information and Technology</Breadcrumb.Item>
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
              <div className="col-lg-9">
                <h2 className="linkabout123">School of Information and Technology</h2>
                <p class="AboutSection__desc">Overview</p>
                <ul class="AboutSection__list">
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">High tech labs with campus connected with LAN.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">Equipped with various software C, C++, Oracle, Visual Studio, Java and Case Tools,
                      MATLAB and PYTHON.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                    </div>
                    <div class="AboutSection__list__label">The School of IT Organizes Symposia, Exhibitions, Conferences, Seminars and
                      Workshops for both Students and Faculty belonging to various Technical Educational
                      Institutions, Research center and center of excellence.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                    </div>
                    <div class="AboutSection__list__label">School of Information Technology provides Free Computer Training Program to the
                      interested students residing in nearby areas of University campus.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                    </div>
                    <div class="AboutSection__list__label">School of Information Technology provides Free of cost Computer Hardware training to
                      the interested students residing in nearby areas of University campus in collaboration
                      with Department of Electronic, School of Engineering &amp; Technology.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_workingprofessional"></div>
                    </div>
                    <div class="AboutSection__list__label">Motivational lectures are arranged for students by the experts.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_jobinterviews"></div>
                    </div>
                    <div class="AboutSection__list__label">Interaction with industry experts in Industry Academic Board meetings. The outcome of
                      industry University interaction is placed in the Board of Studies.</div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div class="AboutSection__testimonial">
                  <p class="AboutSection__testimonial__desc has-logo">The school has advanced facilities for teaching, learning, and research. The department offers
                    multidisciplinary research opportunities and programs in undergraduate, postgraduate, and
                    doctorate levels.</p>
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
                      <Link to="/Bachelor_of_science_in_information_technology">
                        Bachelor of Science in Information Technology
                        (B.Sc.[I.T.])
                      </Link>
                    </td>
                    <td>3 Years</td>
                    <td>Annual/Semester</td>
                    <td>10 + 2 </td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Bachelor_of_science_in_computer_science">
                        Bachelor of Science in Computer Science (B.SC-Computer
                        Science)
                      </Link>
                    </td>
                    <td>3 Years</td>
                    <td></td>
                    <td>10 + 2</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Master_of_science_in_information_technology">
                        Master of Science in Information Technology
                        (M.Sc.[I.T.])
                      </Link>
                    </td>
                    <td>2 Years</td>
                    <td>Annual/Semester</td>
                    <td>Graduation</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Master_of_science_in_computer_science">
                        Masters of Science in Computer Science (M.SC-Computer
                        Science)
                      </Link>
                    </td>
                    <td>2 Years</td>
                    <td>Annual/Semester</td>
                    <td>Graduation</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Diploma_in_computer_application">
                        Diploma in Computer Application (DCA)
                      </Link>
                    </td>
                    <td>1 Year</td>
                    <td>Annual/Semester</td>
                    <td>10 + 2</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Bachelor_of_computer_applications">
                        Bachelor of Computer Applications (BCA)
                      </Link>
                    </td>
                    <td>3 Years</td>
                    <td>Annual/Semester</td>
                    <td>10 + 2</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Master_of_computer_applications">
                        Master of Computer Applications (MCA)
                      </Link>
                    </td>
                    <td>2 Years</td>
                    <td>Annual/Semester</td>
                    <td>Graduation</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Post_graduate_diploma_in_computer_application">
                        Post Graduate Diploma In Computer Application (PGDCA)
                      </Link>
                    </td>
                    <td>1 Year</td>
                    <td>Annual/Semester</td>
                    <td>Graduation</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Advance_diploma_in_computer_applications">
                        Advance Diploma in Computer Applications (ADCA)
                      </Link>
                    </td>
                    <td>1 Year</td>
                    <td>Annual</td>
                    <td>10 + 2 or Equivalent</td>
                    <td><a download ><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/Phd_program_information_technology">
                        Ph.D. Program (Information Technology)
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
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

export default Schoolofit