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
import BA from '../../Images/Syllabus_pdf/BA.pdf';
import BSW from '../../Images/Syllabus_pdf/BSW.pdf';
import MSW from '../../Images/Syllabus_pdf/MSW.pdf';
const Schoolartshuman = () => {
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
            <div className="innerbackimage14">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        School of Arts and Humanities
                    </h1>
                    <p className="animate__animated animate__fadeInRightBig">Arts and Humanities are special learning components of life. It plays an <br />important role in the
                        growth and development of the society.</p>
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
                    <Breadcrumb.Item active>School of Arts and Humanities</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h4 className="programees">Schools</h4>
                        <ul className="abcd1111">
                            <li><Link to='/SchoolCommerce'>School of Commerce</Link></li>
                            <li><Link to='/Schoolmanagement'>School of Management </Link></li>
                            <li><Link to='/Schoolscience'>School of Science</Link></li>
                            <li className="acdsds"><Link to='/Schoolartshuman'>School of Arts and Humanities</Link></li>
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
                            <div className="col-lg-9">
                                <h2 className="linkabout123">School of Arts and Humanities</h2>
                                <p class="AboutSection__desc">Overview</p>
                                <ul class="AboutSection__list">
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The programs of the SOA&amp;H reveal subjective, objective, inter-subjective and structural
                                            aspects of our real-life surroundings. It takes a multi-disciplinary approach in
                                            incorporating these theoretical and practical skills which are efficacious for a strong
                                            footing with an aim of creating an ethical driven society.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Hindi, English, Marathi, Language and Literature, Political Science, Sociology,
                                            Chhattisgarhi, History, Public Administration, Economics, Geography, Comparative
                                            Religion &amp; Philosophy, Psychology, Journalism &amp; Mass Communication and Social
                                            Work are taught in Undergraduate, Postgraduate level. Research leading to M. Phil &amp; Ph.
                                            D. is also conducted on various aspects of the knowledge.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The school is also equipped with Geography lab for reading atmosphere, measurement of
                                            surface land, area mapping work via android machines, study of Topo-sheet.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Workshops are conducted for Remote Sensing, Thermal Remote Sensing, Visual image
                                            aerial photography, processing and Interpretation, Digital image processing, Data
                                            modelling, Data analysis and Integration of GIS and Remote Sensing by the department
                                            of the Geography. Workshops are also conducted on museology, archaeological survey,
                                            and scripture reading for the students of History.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Language lab is functioning to improve the language base of the students. Phonetic
                                            training is imparted to the students to enhance their proficiency in English. Study tours
                                            are also organised to focus, waterfalls, mountains and river basins for acquiring practical
                                            knowledge on the subject.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Mock interviews are organised for the personality development of the students.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <div class="AboutSection__testimonial">
                                    <p class="AboutSection__testimonial__desc has-logo">Great philosophers like Plato and Aristotle were advocates of social sciences, humanities and
                                        their philosophies are based on the functionalities of the society.</p>
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
                                        <td><Link to='/bachelors-of-arts'>
                                            Bachelor of Arts (B.A)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download href={BA}><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/masters-of-arts">
                                            Master of Arts (M.A)</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual</td>
                                        <td>Graduation Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/bachelors-public-administration">
                                            Bachelor of Arts in Public Administration(B.A.-P.A)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/bachelors-social-work">
                                            Bachelor of Social Work (BSW)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download href={BSW}><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/masters-social-work">
                                            Master of Social Work (MSW)</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual</td>
                                        <td>Graduation Equivalent</td>
                                        <td><a download href={MSW}><BsDownload /> Click Here</a></td>
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

export default Schoolartshuman