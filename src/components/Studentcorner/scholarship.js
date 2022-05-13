import React, { useEffect } from "react";
import { Container,Row,Col,Accordion,Breadcrumb} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Studentcornerbanner from "./studentcornerbanner";
import scholar1 from '../../Images/scholar1.jpg'
import scholar2 from '../../Images/scholar2.jpg';
import scholar3 from '../../Images/scholar3.jpg';
import scholar4 from '../../Images/scholar4.jpg'
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const Scholarships =()=>{
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
                        Scholarship
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
            Student Corner
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Scholarship</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to="/Faqs">FAQ</Link></p>
                        <p className="links_about active"><Link to="/Scholarships">Scholarship</Link></p>
                        <p className="links_about1"><Link to="/Antiragging">Anti-Ragging Policy</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Scholarship</h2>
                        <Accordion className="faqss" defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>ISBM University is a proud sponsor of “Shushiksha" Chhattisgarh </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col lg={4} className='mb-4 award-img'><img src = {scholar1}></img></Col>
                                        <Col lg={8} ><p>ISBM University is a proud sponsor of “Shushiksha" Chhattisgarh an Education Conclave 2018. Education Conclave was an effort to bring together Policy Makers, Institution Heads, Decision Makers, Industry HR Officials and Edu-tech Players under one roof to explore the various space in the Education field..</p></Col>
                                    </Row>

                                    
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> ISBM University has been fortunate to host several scholarship</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col lg={4} className='mb-4 award-img'><img src = {scholar2}></img></Col>
                                        <Col lg={8} ><p>ISBM University has been fortunate to host several scholarship awarding events for our students These events has been graced by the supremos of the state Dr. Raman Singh (Former Chief Minister of Chhattisgarh) and Shri Bhupesh Baghel (Chief Minister of Chhattisgarh) have awarded scholarship certificates to the deserving students of ISBM University respectively.</p></Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>We offer and array of scholarships for the deserving students</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col lg={4} className='mb-4 award-img'><img src = {scholar3}></img></Col>
                                        <Col lg={8} ><p>We offer and array of scholarships for the deserving students. It has been a constant effort of I5BM to work towards the upliftment of underprivileged population of the region.We also believe in positive discriminatory treatment of girls and women to educate them in the realm of higher education.
                                        ISBM is providing various scholarships for students enrolling in various academic programs: more information on the same can be obtained from : <a href="#">www.isbmuniversity.edu.in</a></p></Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>A number of Scholarships are offered to students out of the funds</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col lg={4} className='mb-4 award-img'><img src = {scholar4}></img></Col>
                                        <Col lg={8} ><p>A number of Scholarships are offered to students out of the funds received in the form of gifts from the University benefactors, depending on the academic. The University grants full to partial waiver on tuition fees payable by the student we extend scholarship to meritorious students based on their academic achievements, caste, gender in accordance with Government norms and ISM University's policy.Money is not a constraint to pursue higher education, ISBM University also aids the aspirants with education loans to pursue their dreams. So, now is the time to fly high.</p></Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Scholarships