import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import {Link, BrowserRouter} from 'react-router-dom';
import Aboutplacementbanner from "./aboutplacementbanner";
import Enquiry_now from "../enquiry_now";
const Careercounselling =()=>{
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
                        Career Counselling
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
            <Breadcrumb.Item active>Career Counselling</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to="/Aboutplacement">About Placements</Link></p>
                        <p className="links_about active"><Link to="/Careercounselling">Career Counselling</Link></p>
                        <p className="links_about1"><Link to="/Globalskills">Global Skills</Link></p>
                        <p className="links_about1"><Link to="/Recruiters">Recruiters</Link></p>
                        <p className="links_about1"><Link to="/Campusrecruitment">Campus Recruitment & Interview Training</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Career Counselling</h2>
                        <p className="detail_text">The Career and Placement Cell is well equipped and recognised to provide the following services to all students:</p>
                        <ul className="careercounsellingg">
                            <li>Conduct Career Opportunity Workshops, Personality Tests</li> 
                            <li>Conduct Job Fairs and Placement Weeks</li> 
                            <li>Provide resources on various industries, economy, technological advances and job opportunities</li> 
                            <li>Train students for preparing CV, Group Discussion, Written Tests and Interviews</li> 
                            <li>Conduct Mock Interview Sessions</li> 
                            <li>Sensitise students with work culture and corporate etiquettes</li> 
                            <li>Counsel students for a smooth transition from student to employee</li> 
                            <li>Network with Industries to identify job opportunities and skill / knowledge requirementsv</li> 
                            <li>Assist with Internship Programs</li> 
                            <li>Facilitate Companies to recruit students from campus</li> 
                            <li>Maintain Alumni Database and actively engage with them</li> 
                            <li>Map future industry trends and feed information to Boards of Study for syllabus development</li>                        
                        </ul>   
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Careercounselling