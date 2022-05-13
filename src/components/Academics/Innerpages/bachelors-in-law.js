import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Modal } from "react-bootstrap";
import Footer from "../../footer";
import Header from "../../Header/header";
import NavigationBar from "../../Header/navbar";
import { Link } from 'react-router-dom';
import Enquiry_now from "../../enquiry_now";
import { BiRightArrow } from "react-icons/bi";
import Brouche from '../../../Images/ISBM_PROSPECTUS.pdf';
import Allinone from "../../commanfiles/allinone";
const Bachelors_in_Law
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
                            Bachelors in Law (LLB)
                        </h1>
                        <p className="animate__animated animate__fadeInRightBig">LLB programs give students a solid understanding of law, as well as the critical, analytical <br /> and
                            strategic thinking skills necessary for the field of law.</p>
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
                                <div className="smartness-overloaded">Structure</div>
                            </div>
                            <div className="BannerSection__programStats__static__desc">Semester</div>
                        </li>
                        <li className="BannerSection__programStats__static">
                            <div className="BannerSection__programStats__static__label">
                                <div className="smartness-overloaded">Duration</div>
                            </div>
                            <div className="BannerSection__programStats__static__desc">3 Years</div>
                        </li>
                        <li className="BannerSection__programStats__static">
                            <div className="BannerSection__programStats__static__label">
                                <div className="smartness-overloaded">Eligibility Criteria</div>
                            </div>
                            <div className="BannerSection__programStats__static__desc">Graduation or equivalent</div>
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
                        <Breadcrumb.Item active> Bachelors in Law (LLB)</Breadcrumb.Item>
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
                                    <h2 className="linkabout123"> Bachelors in Law (LLB)</h2>
                                    <p class="AboutSection__desc">Overview</p>
                                    <ul class="AboutSection__list">
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                            </div>
                                            <div class="AboutSection__list__label">A practice-based, impact-led, program to bring out the intellectual genius within you.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Students passionate about making a career in Laws should most certainly enroll for
Bachelors in Laws (LLB) proposed degree program. </div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                            </div>
                                            <div class="AboutSection__list__label">This program improves student’s basic command over the English language, logical
skills, and legal aptitude, etc.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Taking up law will leave you with a series of career choices to choose from.
                                            </div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Although you need to spend generously to pursue law, the future returns are quite
promising.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                            </div>
                                            <div class="AboutSection__list__label">An LLB degree will not just shape your career but test your mental strength at each and
every level:
                                            </div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_workingprofessional"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Individuals inclined towards challenging their intellect most definitely hold the capacity
of making a successful career in the field of law.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_jobinterviews"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Law is a challenging sector altogether because of the different types of people you need
to deal with as a part of your profession.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_mentorship"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Once done with your solely because of the prestige that comes along with the LLB
degree.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                            </div>
                                            <div class="AboutSection__list__label">LLM is a next step after successful completion of LLB. LLB serves as a base for
pursuing Master of Law.</div>
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
export default Bachelors_in_Law
    ;