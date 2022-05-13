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
const Phd_mhil_program
    = () => {
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
                <div className="innerbackimage8">
                    <div className="text_banners_abcds">
                        <h1 className="animate__animated animate__fadeInRightBig">
                            Ph.D. & M.Phil. Program (Law)
                        </h1>
                        <p className="animate__animated animate__fadeInRightBig">Ph.D. in Legal Studies is a three years full-time doctorate program within the field of Law. <br />PhD
                            in Legal Studies involves research and a tutorial approach to Law study.</p>
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
                            <div className="BannerSection__programStats__static__desc">:Post Graduate (PG)</div>
                        </li>
                        <li className="BannerSection__programStats__static">
                            <div className="BannerSection__programStats__static__label">
                                <div className="smartness-overloaded">Duration</div>
                            </div>
                            <div className="BannerSection__programStats__static__desc">2 Years</div>
                        </li>
                        <li className="BannerSection__programStats__static">
                            <div className="BannerSection__programStats__static__label">
                                <div className="smartness-overloaded">Eligibility Criteria</div>
                            </div>
                            <div className="BannerSection__programStats__static__desc">10+2 or equivalent</div>
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
                            <Link to="/Schoollaws">School of Law</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active> Ph.D. & M.Phil. Program (Law)</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col lg={3} className="ordersss">
                            <h4 className="programees">Schools</h4>
                            <ul className="abcd1111">
                                <li className="acdsds"><Link to='/SchoolCommerce'>School of Commerce</Link></li>
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
                                <li><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
                            </ul>
                        </Col>
                        <Col lg={9}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="linkabout123"> Ph.D. & M.Phil. Program (Law)</h2>
                                    <p class="AboutSection__desc">Overview</p>
                                    <ul class="AboutSection__list">
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                            </div>
                                            <div class="AboutSection__list__label">A wide range of research areas is out there for a PhD Legal Studies program, including
                                                law of nations, comparative law, human rights law, admiralty law, international
                                                environmental law and many more.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Students after the successful completion of a Ph.D. in Legal Studies program have a large
                                                opportunity to explore various areas of professional life.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Working toward a PhD in Law is a process that develops the candidate in other ways
                                                besides their specific understanding and knowledge of the subject they are researching.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                            </div>
                                            <div class="AboutSection__list__label">The benefits of getting a doctorate degree in Law Studies are the deep and long-term
                                                research and this degree trains the candidates to develop their critical and systematic
                                                analytical aptitude into a highly valuable profession.
                                            </div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Those who hold a doctorate in Law find themselves highly qualified for positions as legal
                                                professionals, researchers, professors, policy-makers and many more.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Graduates from PhD in Law programs have got leadership positions in high courts,
                                                international humanitarian government, organizations and commerce.
                                            </div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_workingprofessional"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Candidates have a good scope to explore their knowledge, skills, training and apply the
                                                tools in areas like Law organizations, Businesses, Government and personal organization,
                                                Legal department, Research and Development, Colleges and Universities and other such.</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Col lg={12}>
                                <section>
                                    <div class="Career_row">
                                        <p class="AboutSection__desc">Specialization Offered :</p>
                                        <ul class="bba">
                                            <p style={{ color: '#5a5a5a' }}><BiRightArrow />  LLM :- (Select any One) Constitutional Law | Criminal Law | International Trade &amp; Economic Law</p>
                                        </ul>
                                    </div>
                                </section>
                            </Col>
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
export default Phd_mhil_program
    ;