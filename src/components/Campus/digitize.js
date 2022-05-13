import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Accordion} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import feature from '../../Images/Picture1.png';
import benefit from '../../Images/Capture.png';
import Enquiry_now from "../enquiry_now";

const DigitizedLearning =()=>{
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
                    Digitized Learning System
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
            Campus
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Digitized Learning System</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/overview'>Overview</Link></p>
                        <p className="links_about1"><Link to='/library'>Library</Link></p>
                        <p className="links_about1"><Link to='/laboratory'>Laboratory</Link></p>
                        <p className="links_about1"><Link to='/campusinfrastructure'>Campus Infrastructure</Link></p>
                        <p className="links_about1"><Link to='/itlab'>Information Technology Lab</Link></p>
                        <p className="links_about1"><Link to='/extracurricular'>Extra Curricular</Link></p>
                        <p className="links_about active"><Link to='/digitizedlearning'>Digitized Learning System</Link></p>
                        <p className="links_about1"><Link to='/Busrouteschedule'>Bus Routes And Schedules</Link></p>
                        <p className="links_about1"><Link to='/Bustransformation'>Bus Transportation Fees</Link></p>
                        <p className="links_about1"><Link to='/Hostel'>Hostel</Link></p>
                        <p className="links_about1"><Link to='/Complaints'>Complaints</Link></p>
                        <p className="links_about1"><Link to='/Complaincaste'>Complaint Against Caste-Based Discrimination</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Digitized Learning System</h2>
                        <h5 style={{marginBottom:'15px'}}>ISBM University formally announces Digital Auditoriums on par with Digital India vision</h5>
                        

                        <p>ISBM University, awarded as "BEST UPCOMING UNIVERSITY" by the Hon. HRD Minister 
                            'Shri Prakash Javdekar' in association with ASSOCHAM; has recently initiated
                             Digital Auditoriums for digitizing lecture relays of the University. This concept
                              of digitized lectures has been designed, equipped and digitized by ISBM 
                              University. The objective of the initiative is to provide a robust infrastructure
                            platform to relay educational videos in addition to reaching far-flung and remotely 
                            located student community including all other learning stakeholders of the University
                             through virtual technology in subjects like Science, Arts and Humanities, Commerce 
                             and Management, Library and Information Science, Journalism and Mass Communication 
                             among other faculties, from centrally located studios. The aim is to improve the 
                             teaching quality in colleges in remote areas. Being able to watch a lecture online
                              means that students who can't be physically present in a lecture still feel part
                            of a learning community and can see and hear their tutors speaking about a topic.</p>

                        

                        
                            <Accordion className="faqss" defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Features of ISBM University Digitized Learning Concept:</Accordion.Header>
    <Accordion.Body>
    <img src ={feature} className='img-fluid banner_abc'></img>
    <p>ISBM University is happy and proud in implementing this project with assurance that this digital 
        lectures concept will be an asset for complete student-community. The idea is to make eminent 
        academicians and field experts available to students with limited resources or from far-flung areas.
        The university already has leading academicians and it also intends to invite eminent personalities 
        for lectures. Lecturers from various different cities like Mumbai, Hyderabad, Bangalore, Kolkata, 
        Delhi, Chennai, etc. can deliver lectures from their own cities without having to travel to ISBM
        University's campus or elsewhere.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Benefits of ISBM University Digitized Learning Concept:</Accordion.Header>
    <Accordion.Body>
    <img src ={benefit} className='img-fluid banner_abc'></img>
    <p>ISBM University has showed an exemplary support to Digital India initiative and has kept up with
        their commitment to support digitization. ISBM University is proud to align its reform processes 
        in tune with the national mission and vision of Hon. Prime Minister of India under the banners of 
        Digital India, Make in India and Skills India. With this initiative as a catalyst through developing 
        a platform which will boost educational content.</p>
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

export default DigitizedLearning;