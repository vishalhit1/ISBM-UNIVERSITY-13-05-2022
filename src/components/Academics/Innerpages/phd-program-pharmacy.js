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
const Phd_program_pharmacy = () => {
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
            <div className="innerbackimage6">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        Ph. D. Program (Pharmaceutical Sciences)
                    </h1>
                    <p className="animate__animated animate__fadeInRightBig">The Pharm. D. program is primarily used by the student who intends to be a practicing
                        pharmacist <br />whether it be in a community pharmacy or in a large healthcare establishment.</p>
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
                        <div className="BannerSection__programStats__static__desc">B.pharm with minimum 55% marks from University <br />/ Institution approved by PCI</div>
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
                        <Link to="/Schoolofpharma">School of Pharmacy</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Ph. D. Program (Pharmaceutical Sciences)</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} className="ordersss">
                        <h4 className="programees">Schools</h4>
                        <ul className="abcd1111">
                            <li><Link to='/SchoolCommerce'>School of Commerce</Link></li>
                            <li><Link to='/Schoolmanagement'>School of Management </Link></li>
                            <li><Link to='/Schoolscience'>School of Science</Link></li>
                            <li><Link to='/Schoolartshuman'>School of Arts and Humanities</Link></li>
                            <li><Link to='/Schoolengrtech'>School of Engineering and Technology</Link></li>
                            <li><Link to='/Schooloflibrary'>School of Library and Information Science</Link></li>
                            <li><Link to='/Journalismandmass'>School of Journalism and Mass Communication</Link></li>
                            <li><Link to='/Schoollaws'>School of Law</Link></li>
                            <li><Link to='/Schooldesign'>School of Design</Link></li>
                            <li><Link to='/Schoolofit'>School of Information and Technology </Link></li>
                            <li className="acdsds"><Link to='/Schoolofpharma' target="blank">School of Pharmacy</Link></li>
                            <li><Link to='/Schooloflifescience'>School of Life Science</Link></li>
                            <li><Link to='/Schoolofyoga'>School of Yoga and Naturopathy</Link></li>
                            <li><Link to='/Schoolofeducation'>School of Education</Link></li>
                            <li><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
                        </ul>
                    </Col>
                    <Col lg={9}>
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="linkabout123">Ph. D. Program (Pharmaceutical Sciences)</h2>
                                <p class="AboutSection__desc">Overview</p>
                                <ul class="AboutSection__list">
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">If you are interested in a career in research within the pharmaceutical realm or a career in
                                            teaching at a higher educational level, then a Ph.D. program may be the degree of choice
                                            for you. </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">This degree is not as research-intensive as the Ph.D. program however; it does focus on
                                            the knowledge of biological science and patient care.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                        </div>
                                        <div class="AboutSection__list__label">A PhD in Pharmacy is a course program of advanced education and training.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                        </div>
                                        <div class="AboutSection__list__label">This degree can offer unique experiences for each of the students because it can
                                            be focused on the individual’s line of work. This means that this type of degree
                                            may emphasize medicinal chemistry or pharmacotherapy.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Students are typically expected to conduct research, attend lectures and
                                            conferences and start participating in the world of pharmacology.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_networking_colored"></div>
                                        </div>
                                        <div class="AboutSection__list__label">With a PhD in Pharmacy you have a lot of career options. You can work as a
                                            pharmacist, you can do research to develop new medicines and combat
                                            diseases, you can teach at a college level or you can make new policies for
                                            pharmaceutical sciences.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_workingprofessional"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The main subjects that are taught in this course are mainly all the Science subjects and
                                            put special emphasis on Chemistry subjects.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_jobinterviews"></div>
                                        </div>
                                        <div class="AboutSection__list__label">Students have to study Pharmaceutical Organic Chemistry and Pharmaceutical
                                            Inorganic Chemistry.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <Col lg={12}>
                            <section>
                                <div class="Career_row">
                                    <p class="AboutSection__desc">Specialization Offered :</p>
                                    <ul class="bba">
                                        <p style={{ color: '#5a5a5a' }}><BiRightArrow />  For Diploma in Engineering :- Engineering: Civil Engineering | Mechanical Engineering | Electronics &amp; Electrical
                                    Engineering | Computer Science | Mining.
                                            <br /><BiRightArrow /> For Bachelor in Technology :- Civil Engineering | Mechanical Engineering | Electronics &amp; Electrical Engineering | Computer
                                    Science.</p>
                                    </ul>
                                </div>
                            </section>
                        </Col> */}
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
export default Phd_program_pharmacy;