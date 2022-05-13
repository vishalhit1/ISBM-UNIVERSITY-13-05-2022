import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Modal } from "react-bootstrap";
import Footer from "../../footer";
import Header from "../../Header/header";
import NavigationBar from "../../Header/navbar";
import { Link } from 'react-router-dom';
import Enquiry_now from "../../enquiry_now";
import Brouche from '../../../Images/ISBM_PROSPECTUS.pdf';
import Allinone from "../../commanfiles/allinone";
const Master_of_arts_in_journalism_and_mass_communication = () => {
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
            <div className="innerbackimage3">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        Master of Arts in Journalism and Mass Communication (MA-JMC)
                    </h1>
                    <p className="animate__animated animate__fadeInRightBig">Master of Journalism &amp; Mass Communication is a postgraduate mass communication course <br /> of two
                        years duration. The course involves the study of different forms of mass media including <br />
                        newspapers, radio, television, films, etc to convey information to a large audience.</p>
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
                        <div className="BannerSection__programStats__static__desc">Diploma</div>
                    </li>
                    <li className="BannerSection__programStats__static">
                        <div className="BannerSection__programStats__static__label">
                            <div className="smartness-overloaded">Duration</div>
                        </div>
                        <div className="BannerSection__programStats__static__desc">1 Year</div>
                    </li>
                    <li className="BannerSection__programStats__static">
                        <div className="BannerSection__programStats__static__label">
                            <div className="smartness-overloaded">Eligibility Criteria</div>
                        </div>
                        <div className="BannerSection__programStats__static__desc">10+2 Or Equivalent</div>
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
                        <Link to="/Journalismandmass">School of Journalism and Mass Communication</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Master of Arts in Journalism and Mass Communication (MA-JMC)</Breadcrumb.Item>
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
                                <h2 className="linkabout123">Master of Arts in Journalism and Mass Communication (MA-JMC)</h2>
                                <p class="AboutSection__desc">Overview</p>
                                <ul class="AboutSection__list">
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">This course teaches students about the fundamentals of mass media and current events and how
                                            to deal with difficult situations.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The course examines how various types of mass media, such as newspapers, radio, television,
                                            and cinema, may be used to transmit information to a broad audience.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The course prepares students for advanced theoretical and practical expertise in various media
                                            fields, including journalism, advertising, event management, and public relations, among others.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The course acts as a foundation for candidates who wish to build their career in the field of
                                            research.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Learn from the faculty having rich academic &amp; industry experience.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Study from a curriculum that is the first-of-its-kind, It has been designed in consultation with
                                            leading media houses.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_workingprofessional"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Students acquire a functional knowledge on the principles and recent emerging trends of the
                                            media industry.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_jobinterviews"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Students develop communication skills, a sense of creativity, critical thinking an analytical
                                            approach.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_mentorship"></div>
                                        </div>
                                        <div class="AboutSection__list__label"> Study in mass communication from ISBM University opens doors of opportunities in Journalism,
                                            Public Relations, Reporting, News Analysis, and Advertising.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                        </div>
                                        <div class="AboutSection__list__label"> It comprised of a good mix of formal lectures, seminars, computer-based learning, individual and
                                            group project work, guest lectures and Media house training.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_mentorship"></div>
                                        </div>
                                        <div class="AboutSection__list__label"> Students get the chance to interact with the industry experts and gain hands-on knowledge and
                                            understanding about contemporary issues and requirements of the industry.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                        </div>
                                        <div class="AboutSection__list__label">At the end of the program a student gains proficiency reads to newspapers, television, radio,
                                            digital content management, social media, advertising, public relations, event management,
                                            communication, film studies, and digital photography.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Col lg={12}>
                            <section>
                                <div class="Career_row">
                                    <p class="AboutSection__desc">Specialization Offered :</p>
                                    {/* <ul class="bba">
                                        <p style={{ color: '#5a5a5a' }}><BiRightArrow />  For Diploma in Engineering :- Engineering: Civil Engineering | Mechanical Engineering | Electronics &amp; Electrical
                                    Engineering | Computer Science | Mining.
                                            <br /><BiRightArrow /> For Bachelor in Technology :- Civil Engineering | Mechanical Engineering | Electronics &amp; Electrical Engineering | Computer
                                    Science.</p>
                                    </ul> */}
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
export default Master_of_arts_in_journalism_and_mass_communication;