import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Modal } from "react-bootstrap";
import Footer from "../../footer";
import Header from "../../Header/header";
import NavigationBar from "../../Header/navbar";
import { Link } from 'react-router-dom';
import Enquiry_now from "../../enquiry_now";
import Brouche from '../../../Images/ISBM_PROSPECTUS.pdf';
import Allinone from "../../commanfiles/allinone";
const Bachelor_of_science_in_biotechnology = () => {
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
      <div className="innerbackimage13">
        <div className="text_banners_abcds">
          <h1 className="animate__animated animate__fadeInRightBig">
            Bachelor of Science in Bio-Technology (BSc Bio -Tech)
          </h1>
          <p className="animate__animated animate__fadeInRightBig">Biotechnology is a discipline of applied sciences which deals with creating processes  <br/>or products
through biological systems and organisms.</p>
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
            <div className="BannerSection__programStats__static__desc">Graduate</div>
          </li>
          <li className="BannerSection__programStats__static">
            <div className="BannerSection__programStats__static__label">
              <div className="smartness-overloaded">Duration</div>
            </div>
            <div className="BannerSection__programStats__static__desc">4 Years</div>
          </li>
          <li className="BannerSection__programStats__static">
            <div className="BannerSection__programStats__static__label">
              <div className="smartness-overloaded">Eligibility Criteria</div>
            </div>
            <div className="BannerSection__programStats__static__desc">12 or Equivalent</div>
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
            <Link to="/Schooloflifescience">School of Life Science</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Bachelor of Science in Bio-Technology (BSc Bio -Tech)</Breadcrumb.Item>
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
              <li><Link to='/Schoolofit'>School of Information and Technology </Link></li>
              <li><Link to='/Schoolofpharma' target="blank">School of Pharmacy</Link></li>
              <li className="acdsds"><Link to='/Schooloflifescience'>School of Life Science</Link></li>
              <li><Link to='/Schoolofyoga'>School of Yoga and Naturopathy</Link></li>
              <li><Link to='/Schoolofeducation'>School of Education</Link></li>
              <li><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
            </ul>
          </Col>
          <Col lg={9}>
            <div className="row">
              <div className="col-lg-12">
                <h2 className="linkabout123">Bachelor of Science in Bio-Technology (BSc Bio -Tech)</h2>
                <p class="AboutSection__desc">Overview</p>
                <ul class="AboutSection__list">
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">B. Sc. in Biotechnology is a 3 - year’s undergraduate course, involving an advanced
study of the cellular and bimolecular processes for the development of a variety of
technologies and products that contribute to improving people’s lives and health.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                    </div>
                    <div class="AboutSection__list__label">Most of the jobs in biotechnology are research-based and most biotechnologists are
appointed in the research and development departments of institutions and industries
involved in the work of biotechnology.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                    </div>
                    <div class="AboutSection__list__label">Biotechnologists work extensively in the production departments of these industries.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                    </div>
                    <div class="AboutSection__list__label">Pursuing a BSc in Biotechnology provides students with a deep understanding of subjects
like Genetic Engineering, Fermentation Technology, Vaccine Production Immunology,
Bioinformatics, Research Design, Epidemiology, and Cell Structure.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                    </div>
                    <div class="AboutSection__list__label">BSc, in biotechnology may be the first step in an educational journey, or it could be the
only step toward obtaining a rewarding career.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                    </div>
                    <div class="AboutSection__list__label">This area of study is broad and can include exposure to many subjects such as molecular
biology, genetics, and chemistry.
                    </div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_workingprofessional"></div>
                    </div>
                    <div class="AboutSection__list__label">Coursework will include microbiology, biochemistry, genetics, bioinformatics,
epidemiology, and food biosecurity.</div>
                  </li>
                  <li>
                    <div class="AboutSection__list__icon">
                      <div class=" brand-icon-retina brand-icon-retina_jobinterviews"></div>
                    </div>
                    <div class="AboutSection__list__label">Over the course of study, students may expect an introduction to modern equipment and
exposure to current experts in their field.</div>
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
export default Bachelor_of_science_in_biotechnology
