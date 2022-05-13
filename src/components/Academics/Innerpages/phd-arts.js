import React, { useEffect } from "react";
import { Container, Row, Col, Breadcrumb, Button, Accordion } from "react-bootstrap";
import Footer from "../../footer";
import Header from "../../Header/header";
import NavigationBar from "../../Header/navbar";
import Managementbanner from "../../Academics/managementbanner";
import { Link, BrowserRouter } from 'react-router-dom';
import { GrLock } from 'react-icons/gr';
import Enquiry_now from "../../enquiry_now";
import Brouche from '../../../Images/ISBM_PROSPECTUS.pdf';
import { MdPlayArrow } from 'react-icons/md';
import Allinone from "../../commanfiles/allinone";
import { BsDownload } from "react-icons/bs";
const Phd_Arts = () => {
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <React.Fragment>
            <Header />
            <NavigationBar />
            <div className="innerbackimage14">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        Ph.D Program (Arts and Humanities)
                    </h1>
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
                        <div className="BannerSection__programStats__static__desc">:Doctorate</div>
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
                        School of Arts and Humanities
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Ph.D Program (Arts and Humanities)</Breadcrumb.Item>
                </Breadcrumb>
                <Row>

                    <Col lg={3} className="ordersss">
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
                    <Col lg={9} className="ordersss11">
                        <h2 className="linkabout123">Ph.D Program (Arts and Humanities)</h2>
                        <p>The Ph.D. Programmes at ISBM University's School of Arts and Humanities emphasize innovative research work with the implementation of policies designed to improve the research infrastructure and new academic & industry collaborations.</p>
                        <p>The Master of Philosophy (M. Phil.) & Doctor of Philosophy (Ph.D.) programs will provide an opportunity to the students to undertake advanced studies in the subject in which he or she has already acquired postgraduation.</p>
                        <p>ISBM University offers M.Phil. / Ph.D. programmes under the guidelines prescribed by the University Grants Commission UGC (2016).</p>

                        <MdPlayArrow className="arrow11" /><b>Objectives of the program</b>
                        <p>The University aims to maintain high research standards in keeping with the University Grants Commission (Minimum Standards and Procedure for Award of M.PHIL./PH.D Degrees) Regulations, 2016.</p>
                        <p>ISBM University, being a multi-faculty institution of higher education, encourages inter disciplinary research. The award of the Ph.D. degree is based on satisfactory completion of prescribed coursework, publication of research papers in listed journals and demonstration of the ability to undertake an independent research project. </p>
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
                                        <td><Link to="/masters-of-arts">
                                            Master of Arts (M.A)</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual</td>
                                        <td>Graduation Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/phd-mphil-arts">
                                            Ph.D. & M.Phil. Program (Arts and Humanities)</Link></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/bachelors-public-administration">
                                            Bachelor of Arts in Public Administration</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>Graduation Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/bachelors-social-work">
                                            Bachelor of Social Work (BSW)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/masters-social-work">
                                            Master of Social Work (MSW)</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual</td>
                                        <td>Graduation Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/bachelors-of-arts">
                                            Bachelor of Arts (B.A)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
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
        </React.Fragment>
    )
}
export default Phd_Arts;