import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import {Link, BrowserRouter} from 'react-router-dom';
import Aboutplacementbanner from "./aboutplacementbanner";
import Enquiry_now from "../enquiry_now";
const Globalskills =()=>{
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        Global Skills
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                Placements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Global Skills</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to="/Aboutplacement">About Placements</Link></p>
                        <p className="links_about1"><Link to="/Careercounselling">Career Counselling</Link></p>
                        <p className="links_about active"><Link to="/Globalskills">Global Skills</Link></p>
                        <p className="links_about1"><Link to="/Recruiters">Recruiters</Link></p>
                        <p className="links_about1"><Link to="/Campusrecruitment">Campus Recruitment & Interview Training</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Global Skills</h2>
                        <p className="detail_text">Requirement nowadays is of affordable & convenient formal training in non-technical skills with certification from "ISBM University - Global Skills":</p>
                        <p className="detail_text">
                        In today's environment, technical competence alone is not sufficient for competence alone is not sufficient for career success. Employers are looking for employees with non-technical skills such, that they have edge over others and are able to perform better.
                        </p>
                        <p className="detail_text"><b>Employers want:</b></p>
                        <ul className="careercounsellingg">
                            <li>Employees who are well rounded.</li>
                            <li>Employees having non-technical skills.</li>
                            <li>Employees who have prepared themselves for the job by balancing both their technical and non-technical skills</li>                        
                        </ul>   
                        <p className="detail_text"><b>Non-Technical Skills desired by employers world-wide in their prospective employees now are:</b></p>
                        <ul className="careercounsellingg">
                            <li>Oral and written communication</li>
                            <li>Team Work</li>
                            <li>Business Awareness</li>
                            <li>Organization and management skills</li>
                            <li>Responsibility and initiative</li>
                            <li>Problem Solving</li>
                            <li>IT competency</li>                        
                        </ul> 
                        <p className="detail_text">
                        Only bar during training is of language, since deliverance shall be in language English.
Yes, But English is the modern day language of Business and success world-wide.
This training will be aimed at people wishing to acquire new-age skills to adapt to global platforms of their own area of choice, or to develop their existing skills, enabling them to increase their earning power.
                        </p>
                        <p clasname="detail_text">
                        This training shall also equip learner with practical skills which are most imperative and desired by companies/employers, in addition to their field's technical knowledge requirement.
                        </p>
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Globalskills