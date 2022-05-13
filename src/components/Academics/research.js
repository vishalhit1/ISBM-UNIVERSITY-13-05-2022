import React, { useEffect } from 'react';
import { Container, Row, Col, Breadcrumb, Tab, Tabs } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "./managementbanner";
import { Link, BrowserRouter } from 'react-router-dom';
import eggss11 from '../../Images/eggs1.PNG';
import { GrLock } from 'react-icons/gr';
import Enquiry_now from "../enquiry_now";
import Allinone from "../commanfiles/allinone";
import { BsDownload } from "react-icons/bs";
const Research = () => {
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header />
            <NavigationBar />
            <div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        Research
                    </h1>
                    <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                    <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Pages
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Research</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} className="order-md-1">
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
                            <li><Link to='/Schoolofpharma' target="blank">School of Pharmacy</Link></li>
                            <li><Link to='/Schooloflifescience'>School of Life Science</Link></li>
                            <li><Link to='/Schoolofyoga'>School of Yoga and Naturopathy</Link></li>
                            <li><Link to='/Schoolofeducation'>School of Education</Link></li>
                            <li><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
                        </ul>
                    </Col>
                    <Col lg={9} className="order-md-2">

                        <h2 className="linkabout123">Research</h2>
                        <p className="detail_text">The Master of Philosophy (M. Phil.) & Doctor of Philosophy (Ph.D.) programs will provide an opportunity to the students to undertake advanced studies in the subject in which he or she has already acquired postgraduation.</p>
                        <p className="detail_text">These programs are focused on creating free thinkers- individuals who are independent in their thinking, loyalty, and commitment.</p>
                        <p className="detail_text">The prime focus of programs offered is to promote the effective integration of technology with state-of-the-art facilities in teaching and research activities. The curriculum offered and learning pedagogy focuses on problem-solving, decision making thus creating honed analytical skills coupled with knowledge and application of various emerging trends in fields of Management & Commerce, Science, Arts & Humanities.</p>
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
                                        <td><Link to="/phd-mphil-commerce">
                                            Ph.D. Program (Commerce)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>Graduation In Relavant Discipline</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Phd_mhil_program">
                                            Ph.D. Program (Law)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>Graduation In Relavant Discipline</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/phd-mphil-science">
                                            Ph.D. Program (Science)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>Graduation In Relavant Discipline</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/phd-mphil-arts">
                                            Ph.D. Program (Arts and Humanities)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>Graduation In Relavant Discipline</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Phd_program_information_technology">
                                            Ph.D. Program (Information Technology)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>Graduation In Relavant Discipline</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Phd_mphil_program_in_management">
                                            Ph.D. Program (Management)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>Graduation In Relavant Discipline</td>
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
        </div>
    )
}

export default Research