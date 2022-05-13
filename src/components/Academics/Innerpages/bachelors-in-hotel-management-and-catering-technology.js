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
const Bachelors_in_hotel_management_and_catering_technology
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
                <div className="innerbackimage10">
                    <div className="text_banners_abcds">
                        <h1 className="animate__animated animate__fadeInRightBig">
                            Bachelor in Hotel Management and Catering Technology (BHMCT)
                        </h1>
                        <p className="animate__animated animate__fadeInRightBig">Starting with the basics of hotel management, the course sails into more detailed and
                            professional  <br /> aspects of catering and hospitality. Students are trained in areas of Food Production,
                            Food Safety, <br /> Culinary Hygiene, Nutrition and Beverage, etc.</p>
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
                            <div className="BannerSection__programStats__static__desc">Under Graduate (UG)</div>
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
                            <div className="BannerSection__programStats__static__desc">10+2 or Equivalent (Any Stream)</div>
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
                            <Link to="/Schoolofhotelmanagement">School of Hotel Management</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active> Bachelor in Hotel Management and Catering Technology (BHMCT)</Breadcrumb.Item>
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
                                    <h2 className="linkabout123"> Bachelor in Hotel Management and Catering Technology (BHMCT)</h2>
                                    <p class="AboutSection__desc">Overview</p>
                                    <ul class="AboutSection__list">
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                            </div>
                                            <div class="AboutSection__list__label"> The basic idea is to revise the curriculum of the Four Years Degree Course in Hotel
                                                Management and Catering Technology (BHMCT) with a view to keep abreast with the
                                                current changing trends in the hospitality industry.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                            </div>
                                            <div class="AboutSection__list__label">A four years bachelor in Hotel Management &amp; Catering Technology (BHMCT) course
                                                has been usefully crafted keeping this in mind.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                            </div>
                                            <div class="AboutSection__list__label">BHMCT programs are aimed to provide students a strong base of knowledge, skills and
                                                attitudes required for employability/ leadership roles in hospitality and restaurant
                                                operations/ management /entrepreneurship.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                            </div>
                                            <div class="AboutSection__list__label">At ISBM University, we are all geared up to provide the best industry experience to our
                                                students.
                                            </div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Our newly updated curriculum combined with latest industry knowledge make us the best
                                                hotel management college in central India.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                            </div>
                                            <div class="AboutSection__list__label">The course takes young students to various arenas of hotel work like office operation,
                                                hospitality, sales and marketing, etc.
                                            </div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_workingprofessional"></div>
                                            </div>
                                            <div class="AboutSection__list__label">The hotel industry today has become a global business which caters the needs and
                                                demands of various other sectors as well.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_jobinterviews"></div>
                                            </div>
                                            <div class="AboutSection__list__label">This is one of the best career choices today.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_mentorship"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Gaining knowledge and skills in Food Production, Food &amp; Beverage Service, Front
                                                Office, Accommodation Operations, and Management Studies.</div>
                                        </li>
                                        <li>
                                            <div class="AboutSection__list__icon">
                                                <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                            </div>
                                            <div class="AboutSection__list__label">Developing attitudes, contextual knowledge and appropriate techniques; demonstrate,
                                                apply and commit the same towards the specific needs of the hospitality industry with
                                                due consideration of health and safety, cultural, societal, legal and environment.</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Col lg={12}>
                                <section>
                                    <div class="Career_row">
                                        <p class="AboutSection__desc">Specialization Offered :</p>
                                        <ul class="bba">
                                            <p style={{ color: '#5a5a5a' }}><BiRightArrow />  BHMCT :- (Select Any One) Travel and Tourism | Front Office | Housekeeping | Food and Beverage Production | Food  and Beverage Service.</p>
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
export default Bachelors_in_hotel_management_and_catering_technology
    ;