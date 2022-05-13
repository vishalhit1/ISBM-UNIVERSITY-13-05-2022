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
const Masters_in_business_administration = () => {
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
            <div className="innerbackimage1">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        Masters in Business Administration (MBA)
                    </h1>
                    <p className="animate__animated animate__fadeInRightBig">Pursuing an MBA is an investment in your future. If you’re interested in taking on a<br />
                        leadership role and earning opportunities to climb the corporate ladder, studying <br /> for
                        your Master of Business Administration degree is a promising path.</p>
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
                        <div className="BannerSection__programStats__static__desc">Post Graduate (PG)</div>
                    </li>
                    <li className="BannerSection__programStats__static">
                        <div className="BannerSection__programStats__static__label">
                            <div className="smartness-overloaded">Duration</div>
                        </div>
                        <div className="BannerSection__programStats__static__desc">2 Years (Full Time)</div>
                    </li>
                    <li className="BannerSection__programStats__static">
                        <div className="BannerSection__programStats__static__label">
                            <div className="smartness-overloaded">Eligibility Criteria</div>
                        </div>
                        <div className="BannerSection__programStats__static__desc">Graduation Or equivalent</div>
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
                        <Link to="/Schoolmanagement">School of Management</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Masters in Business Administration (MBA)</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} className="ordersss">
                        <h4 className="programees">Schools</h4>
                        <ul className="abcd1111">
                            <li><Link to='/SchoolCommerce'>School of Commerce</Link></li>
                            <li className="acdsds"><Link to='/Schoolmanagement'>School of Management </Link></li>
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
                                <h2 className="linkabout123">Masters in Business Administration (MBA)</h2>
                                <p class="AboutSection__desc">Overview</p>
                                <ul class="AboutSection__list">
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The MBA program aims at preparing young minds for responsible positions in Industry,
                                            trade, commerce and other services with high level of motivation.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">MBA degree holders are eligible for reputed job profiles in India as well as
                                            internationally.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Be it an attractive salary package or better job opportunities, MBA makes one a
                                            complete package of all desirable qualities.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Pursuing a Master of Business administration program surely will reap many benefits for
                                            the student&#39;s future.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                        </div>
                                        <div class="AboutSection__list__label">An ability to analyze, evaluate, strategize and implement.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Presentation and Business Communication skills.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_jobinterviews"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Understand the latest technologies with hands-on experience.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_mentorship"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Gain In-depth knowledge of various functional areas.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Gain practical business experience Interpersonal and multicultural teamwork
                                            competency.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Col lg={12}>
                            <section>
                                <div className="Career_row">
                                    <p class="AboutSection__desc">Specialization Offered :</p>
                                    <ul className="bba">
                                        <p style={{ color: '#5a5a5a' }}>
                                            <BiRightArrow /> BBA :- (Select Any One) Finance | Marketing | Human Resource<br />
                                            <BiRightArrow /> MBA :- (Select Any Two From Below)<br />
                                            <BiRightArrow /> EMBA :- (Select Any Two From Below)<br />
                                        </p>
                                        <p style={{ color: '#5a5a5a' }}>Human Resources Management | Marketing Management | Financial Management |
                                            Entrepreneurship Operations Management | Product Management | Brand Management | Event
                                            Management | Insurance Business Administration | Banking Management | Construction
                                            Management | General Management Supply Chain &amp; Logistic | Retail Management | International
                                            Business | Project Management | Advertising Materials Management | Total Quality Management |
                                            Personnel Management | Education Management Information Technology | Hospital
                                            Administrations | E- Commerce | International Marketing</p>
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
export default Masters_in_business_administration;