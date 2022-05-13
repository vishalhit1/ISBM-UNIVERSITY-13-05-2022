import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Button,Accordion} from "react-bootstrap";
import Footer from "../../footer";
import Header from "../../Header/header";
import NavigationBar from "../../Header/navbar";
import Managementbanner from "../managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import { GrLock } from 'react-icons/gr';
import Enquiry_now from "../../enquiry_now";
import Brouche from '../../../Images/ISBM_PROSPECTUS.pdf';
import { MdPlayArrow } from 'react-icons/md';
import Allinone from "../../commanfiles/allinone";

const Mdp_on_project_management = ()=>{
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <React.Fragment>
            <Header/>
            <NavigationBar/>
            <div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                    Mdp on project management
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
                        <div className="BannerSection__programStats__static__desc">Graduate</div>
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
                Certificate Programs and MDPs
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Mdp on project management</Breadcrumb.Item>
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
                            <li><Link to='/Schoolofpharma' target="blank">School of Pharmacy</Link></li>
                            <li><Link to='/Schooloflifescience'>School of Life Science</Link></li>
                            <li><Link to='/Schoolofyoga'>School of Yoga and Naturopathy</Link></li>
                            <li><Link to='/Schoolofeducation'>School of Education</Link></li>
                            <li><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
                        </ul> 
                    </Col>
                    <Col lg={9} className="ordersss">
                        <h2 className="linkabout123">Mdp on project management</h2>
                        <p>Recent Developments in Business and Industry have shown that Project Management has emerged as the new competence in short supply across all Industry sectors / verticals. Project Management as a management discipline provides the foundation for most of the varied economic activity, in industries as diverse as pharmaceuticals, software and aerospace, projects drive business. And in the public sector, it is effective project management that translates politicians’ promises of new roads, schools and hospitals into meaningful new constructions that improve everyday public life. The world (most parts of it ) today is witnessing tremendous acceleration in the pace of change in business and technology and this has had a direct impact on the occurrence and frequency of projects, including the projects targeted to develop and implement new ways of meeting the ever increasing demand for energy, improved communication, housing, recreation, transportation and food. Other projects could be to solve the problem of hunger, high population growth, illiteracy, disease and pollution. All these projects have one thing in common – proper planning, implementation / execution, monitoring and control so as to deliver the desired level of performance, on completion, within the stipulated cost and time.</p>
                        <MdPlayArrow className="arrow11"/><b>Objectives of the Program</b>
                        <ul className="bba">
                        <li>To introduce the concept of project management and project life cycle.</li>
                        <li>To provide an understanding of a project through all its stages starting from the feasibility study stage to the final stages of execution and commissioning.</li>
                        <li>To provide the familiarity for using the tools and techniques</li>
                        <li>Project management information systems</li>
                        <li>To provide exposure to computer software used in project management</li>
                        <li>To provide the skills and know-how for combating time and cost overruns</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Allinone/>
            <Footer/>
        </React.Fragment>
    )
}

export default Mdp_on_project_management