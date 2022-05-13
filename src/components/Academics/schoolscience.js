import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Modal } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import { Link } from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
import Allinone from "../commanfiles/allinone";
import { BsDownload } from "react-icons/bs";
import Bsc from '../../Images/Syllabus_pdf/Bsc.pdf';
import Msc from '../../Images/Syllabus_pdf/MSc.pdf';
import Din from '../../Images/Syllabus_pdf/DIN.pdf';
const Schoolscience = () => {
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
            <div className="innerbackimage2">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        School of Science
                    </h1>
                    <p className="animate__animated animate__fadeInRightBig">The school of science is driven to unfold unbridled curiosity on, life and universe. <br />
                        Development of sustainable materials is another dimension <br /> of the seat of learning.</p>
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
                    <Breadcrumb.Item active>School of Science</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h4 className="programees">Schools</h4>
                        <ul className="abcd1111">
                            <li><Link to='/SchoolCommerce'>School of Commerce</Link></li>
                            <li><Link to='/Schoolmanagement'>School of Management </Link></li>
                            <li className="acdsds"><Link to='/Schoolscience'>School of Science</Link></li>
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
                            <div className="col-lg-9">
                                <h2 className="linkabout123">School of Science</h2>
                                <p class="AboutSection__desc">Overview</p>
                                <ul class="AboutSection__list">
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">School of Science is imparting teaching in different physical and life
                                            sciences in UG, PG &amp; Doctoral level.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">It is equipped with modern labs to conduct regular classes and research.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Science club is constituted comprising students and members of the faculty.
                                            It is organizing seminars, Conferences to enlarge the knowledge base of the
                                            students.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Teaching is provided in Physics, Botany, Zoology, Microbiology,
                                            Biotechnology, Forestry and Wild life Conservation and Mathematics.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The school is working on energy, preservation environmental protection.
                                            Our school has a patent of its credit.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                        </div>
                                        <div class="AboutSection__list__label">All laboratories are fully functional with the equipment’s and machineries.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <div class="AboutSection__testimonial">
                                    <p class="AboutSection__testimonial__desc has-logo">The students are encouraged to not only follow the prescribed syllabus rather go
                                        beyond regular academic to explore new areas to expand their knowledge base.
                                        The teaching pedagogy gives equal emphasis to theory and practical. The school of
                                        science is driven by a mission to advance in the domain of science in order to build
                                        global leaders for the society,</p>
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
                                        <td><Link to="/bachelors-of-science">
                                            Bachelors in Science (Bsc)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download href={Bsc}><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/masters-in-science">
                                            Masters in Science (Msc)</Link></td>
                                        <td>2 Years</td>
                                        <td>Semester</td>
                                        <td>Graduation Equivalent</td>
                                        <td><a download href={Msc}><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/diploma-in-nutrition">
                                            Diploma in Nutrition (DIN)</Link></td>
                                        <td>1 Year</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download href={Din}><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/phd-mphil-science">
                                            Ph.D. Program (Science)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>PG In Revelant Discipline</td>
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

export default Schoolscience