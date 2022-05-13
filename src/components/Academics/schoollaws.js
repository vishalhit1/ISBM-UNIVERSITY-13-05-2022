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
import BBA_LLB from '../../Images/Syllabus_pdf/BBA_LLB.pdf';
import LLB from '../../Images/Syllabus_pdf/LLB.pdf';
import LLM from '../../Images/Syllabus_pdf/LLM.pdf';

const Schoollaws = () => {
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
            <div className="innerbackimage8">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        School of Law
                    </h1>
                    <p className="animate__animated animate__fadeInRightBig">Legal education makes a responsible citizen, vivacious person and constructive mind. It <br />
                        transforms the society by encouraging the citizen to think  <br />about. A democratic set up as
                        conscious citizen.</p>
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
                    <Breadcrumb.Item active>School of Law</Breadcrumb.Item>
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
                            <li className="acdsds"><Link to='/Schoollaws'>School of Law</Link></li>
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
                            <div className="col-lg-9">
                                <h2 className="linkabout123">School of Law</h2>
                                <p class="AboutSection__desc">Overview</p>
                                <ul class="AboutSection__list">
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Discover your strengths through interdisciplinary Legal Education.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Law plays a pivotal role in transforming society into responsible citizens.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                        </div>
                                        <div class="AboutSection__list__label">School of Law prepares you for a career as a legal professional.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                        </div>
                                        <div class="AboutSection__list__label">ISBM University provides courses from bachelor’s to masters’ degrees that have been
                                            designed to develop knowledge of different law/sections and issues all around India.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Our qualifying Law programs combine academic study with opportunities to experience
                                            law practice.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Legal education is a vital link in the creation of knowledge concept as well as in the
                                            application of such concept in the society.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <div class="AboutSection__testimonial">
                                    <p class="AboutSection__testimonial__desc has-logo">School of Law in ISBM University focuses to absorb the best practices in terms of curriculum, training,
                                    innovation in teaching methods, and ethics by addressing the emerging issues of the society. School
                                    of Law is established with a vision to educate and train the future thought-leaders in the field of Law.
                                    It imparts teaching in UG, PG, M. Phil and Ph.D. level.</p>
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
                                        <th>SYllabus</th>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelors_in_business_administration_and_bachelors_in_law">
                                            Bachelors in Business Administration and Bachelors in Law (BBA-LLB)</Link></td>
                                        <td>5 Years</td>
                                        <td>Semester</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download href={BBA_LLB}><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelors_in_Law">
                                            Bachelors in Law (LLB)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>Graduation</td>
                                        <td><a download href={LLB}><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Master_in_laws">
                                            Master in Law (LLM)</Link></td>
                                        <td>2 Years</td>
                                        <td>Semester</td>
                                        <td>Law Graduate</td>
                                        <td><a download href={LLM}><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Phd_mhil_program">
                                            Ph.D. Program (Law)</Link></td>
                                        <td>3 Year</td>
                                        <td>Semester</td>
                                        <td>PG In Relavant Area</td>
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

export default Schoollaws