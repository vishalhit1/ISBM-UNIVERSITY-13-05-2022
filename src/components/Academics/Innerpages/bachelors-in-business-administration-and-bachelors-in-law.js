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
const Bachelors_in_business_administration_and_bachelors_in_law
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
                            Bachelors in Business Administration and Bachelors in Law (BBA-LLB)
                        </h1>
                        <p className="animate__animated animate__fadeInRightBig">Bachelors in Business Administration and Bachelors in Law (BBA-LLB.) is program proposed
                            which amplifies <br /> the knowledge that the student would have gained while pursuing his studies.</p>
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
                            <div className="BannerSection__programStats__static__desc">5 Years</div>
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
                        <Breadcrumb.Item active> Bachelors in Business Administration and Bachelors in Law (BBA-LLB)</Breadcrumb.Item>
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
                                    <h2 className="linkabout123"> Bachelors in Business Administration and Bachelors in Law (BBA-LLB)</h2>
                                    <p class="AboutSection__desc">Overview</p>
                                    <ul class="AboutSection__list">
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Major areas of specialization in Law include Family law, Taxation law, Constitutional
                                                law, etc.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Evaluation of the program is mainly based on University examinations, projects,
                                                assignments, moot-court practice participation, social responsibilities and initiatives taken
                                                up and so on.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                            </div>
                                            <div class="AboutSection__list__label">The sweeping changes in the global economic scenario have necessitated a strong
                                                demand for a breed of youngsters with the potential knowledge of law coupled with the
                                                core essentials of management and business to enhance productivity.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                            </div>
                                            <div class="AboutSection__list__label">With the object of catering to this demand unfolding before the students, and to enable
                                                them to explore these vistas of opportunities that lie ahead, we have commenced an
                                                integrated Bachelor of Business Administration and Bachelor of Law degree program
                                                (BBA-LLB).
                                            </div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Here we impart exhaustive knowledge to the students not only to survive but also to excel
                                                in the increasingly competitive world.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                            </div>
                                            <div class="AboutSection__list__label">To develop a firm understanding among students regarding fundamental areas in business
                                                law.
                                            </div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_workingprofessional"></div>
                                            </div>
                                            <div class="AboutSection__list__label">To facilitate students with a foundation to build their professional practice.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_jobinterviews"></div>
                                            </div>
                                            <div class="AboutSection__list__label">To provide them with globally acclaimed business management skills in this exceedingly
                                                competitive market.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_mentorship"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Familiarize students with advanced analytical skills highly demanded by leading law
                                                establishments.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                            </div>
                                            <div class="AboutSection__list__label">BBA LLB is a one such unique and niche interdisciplinary program that has emerged in
                                                the last decade in response to fast-changing trends of the industry.</div>
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
export default Bachelors_in_business_administration_and_bachelors_in_law
    ;