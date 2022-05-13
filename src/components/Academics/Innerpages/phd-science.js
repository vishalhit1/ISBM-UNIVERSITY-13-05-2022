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
const Phd_Science = () => {
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
            <div className="innerbackimage2">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        Ph.D. & M.Phil. Program (Science)
                    </h1>
                    <p className="animate__animated animate__fadeInRightBig">The Ph.D. Program at ISBM University&#39;s School of Science emphasizes innovative research<br />
                        work with the implementation of policies designed to improve the research  infrastructure<br /> and
                        new academic &amp; industry collaborations.</p>
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
                        <div className="BannerSection__programStats__static__desc">Doctorate</div>
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
                        <Link to="/Schoolscience">School of Science</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Ph.D. & M.Phil. Program (Science)</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} className="ordersss">
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
                            <div className="col-lg-12">
                                <h2 className="linkabout123">Ph.D. & M.Phil. Program (Science)</h2>
                                <p class="AboutSection__desc">Overview</p>
                                <ul class="AboutSection__list">
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The Master of Philosophy (M. Phil.) &amp; Doctor of Philosophy (Ph.D.) programs will provide
                                            an opportunity to the students to undertake advanced studies in the subject in which he
                                            or she has already acquired post-graduation.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_certification"></div>
                                        </div>
                                        <div class="AboutSection__list__label">ISBM University offers M.Phil. / Ph.D. program under the guidelines prescribed by the
                                            University Grants Commission UGC (2016).
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_campusaccess"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The University aims to maintain high research standards in keeping with the University
                                            Grants Commission (Minimum Standards and Procedure for Award of M.PHIL./PH.D
                                            Degrees) Regulations, 2016.</div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_alumnistatus"></div>
                                        </div>
                                        <div class="AboutSection__list__label">ISBM University, being a multi-faculty institution of higher education, encourages inter
                                            disciplinary research.
                                        </div>
                                    </li>
                                    <li>
                                        <div class="AboutSection__list__icon">
                                            <div class=" brand-icon-retina brand-icon-retina_icon__1638883352377"></div>
                                        </div>
                                        <div class="AboutSection__list__label">The award of the Ph.D. degree is based on satisfactory completion of prescribed
                                            coursework, publication of research papers in listed journals and demonstration of the
                                            ability to undertake an independent research project.</div>
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
                                            <BiRightArrow />  B.Sc :- Physics | Chemistry | Mathematics | Botany | Zoology | Statistics | Biochemistry<br />
                                            <BiRightArrow /> M.Sc :- (Select any One) Physics | Chemistry | Mathematics | Botany | Zoology | Statistics |
                                            Biochemistry | Electronics<br />
                                            <BiRightArrow /> PGD.Sc :- (Select any One) Remote Sensing Technology and Geographic Information systems | food
                                            Processing and Preservation | Energy Audit and Alternative Energy Sources | Analytical Techniques |
                                            Applied Statistics with software | Bio-nanotechnology | Post Graduate Diploma in Forensic Science
                                            and related Law | Clinical Studies, Data Management and Medical Writing<br />
                                        </p>
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
export default Phd_Science;