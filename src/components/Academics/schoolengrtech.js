import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Modal } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import { Link } from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
import Allinone from "../commanfiles/allinone";
import { BsDownload } from "react-icons/bs";
const Schoolengrtech = () => {
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
            <div className="innerbackimage4">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        School of Engineering and Technology
                    </h1>
                    <p className="animate__animated animate__fadeInRightBig">Get trained to analyse technically and learn to figure out a way to simplify human efforts.<br/>
Technology helps to smoothen life and has become important of our lives.<br/>
Demand for emerging technologies, as well as technological advancements.</p>
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
                    <Breadcrumb.Item active>School of Engineering and Technology</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h4 className="programees">Schools</h4>
                        <ul className="abcd1111">
                            <li><Link to='/SchoolCommerce'>School of Commerce</Link></li>
                            <li><Link to='/Schoolmanagement'>School of Management </Link></li>
                            <li><Link to='/Schoolscience'>School of Science</Link></li>
                            <li><Link to='/Schoolartshuman'>School of Arts and Humanities</Link></li>
                            <li className="acdsds"><Link to='/Schoolengrtech'>School of Engineering and Technology</Link></li>
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
                            <div className="col-lg-9">
                                <h2 className="linkabout123">School of Engineering and Technology</h2>
                                <p class="AboutSection__desc">Overview</p>
                                <ul class="AboutSection__list">
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">An internship facility is provided to the students during summer and winter vacations.
                                            They gain hands-on experience in skill and practice.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Articulating the concepts from basic science to technology through Lab and Project work.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The School has state of the laboratory and research facilities which enable students and faculty
members to carry out the teaching learning activities.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The vision of the school is to provide high quality education in the field of engineering,
                                            thereby enabling the students to meet the requirements of the industry.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The school of Engineering always strives to collaborate with national and international
                                            institutions to excel in its academic pursuit.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Highly qualified, dynamic and multi-talented faculty, non-teaching faculty contribute to
                                            make the school relevant for the teaching &amp; learning.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <div class="AboutSection__testimonial">
                                    <p class="AboutSection__testimonial__desc has-logo">School of Engineering and Technology is for students that are keen to pursue careers in
                                        engineering in different branches. University offers core branches namely mechanical, electrical,
                                        civil, mining, IT &amp; CS. The industrial revolution has introduced several new technologies that
                                        engineers need to imbibe to be relevant for the future.</p>
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
                                        <td><Link to="/Diploma_in_Engineering">
                                            Diploma in Engineering (DE)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>10 <sup>th</sup></td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelor_in_technology">
                                            Bachelor in Technology (B.Tech)</Link></td>
                                        <td>4 Years</td>
                                        <td>Semester</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/">
                                            Diploma in Engineering (DE)<br />(Lateral Entry)</Link></td>
                                        <td>2 Years</td>
                                        <td>Semester</td>
                                        <td>10 <sup>th</sup>  With ITI</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/">
                                            Bachelor in Technology (B.Tech)<br />(Lateral Entry)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>Diploma Engineering</td>
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

export default Schoolengrtech