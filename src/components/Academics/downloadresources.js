import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb,Accordion} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "./managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";

const Downloadresources =()=>{
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Header/>
            <NavigationBar/>
            <div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                    Downloads and Online Resources
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
            <Breadcrumb.Item active>Downloads and Online Resources</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>                  
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/Academicsphil'>Academic Philosophy</Link></p>
                        <p className="links_about1"><Link to='/Academicspartners'>Academic Partners</Link></p>
                        <p className="links_about1"><Link to='/Specialdevelopment'>Special Development Cells</Link></p>
                        <p className="links_about active"><Link to='/Downloadresources'>Online Resources</Link></p>
                        <p className="links_about1"><Link to='/Teachningmethod'>Teaching Methodology/Pedagogy</Link></p>
                        <p className="links_about1"><Link to='/MoocIsbm'>MOOC with ISBM University</Link></p>
                        <p className="links_about1"><Link to='/Diploma_in_hotel_management_and_catering_technology'>MOUs' and Collaborations</Link></p>
                        <p className="links_about1"><Link to='/Certificateemdps'>Certificate Programs and MDPs</Link></p>
                        <p className="links_about1"><Link to='/'>Student ERP</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Downloads and Online Resources</h2>
                        <Accordion className="faqss accordion" defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>E-Resources</Accordion.Header>
                            <Accordion.Body className="resourcesss">
                                <p>Click Here to get&nbsp;<a href="http://studentdata.co.in/" target="_blank">Student Information</a></p>

                                <p>Click Here to get&nbsp;<a href="http://isbmelearning.com/" target="_blank">E-Library</a></p>

                                <p>Click Here to get <a href="http://www.isbm.online/" target="_blank">Live Lectures</a></p>

                                <p>Click Here to get <a href="http://mediaconsole.pearsoncmg.com/curriculum/intl/India/ISBMA/ISBMA.html" target="_blank">Pearson Study Material</a></p>

                                <p>Click Here to get <a href="http://www.isbmlms.com/" target="_blank">Learning Management System</a></p>

                                <p>Click Here to get <a href="https://play.google.com/store/apps/details?id=com.hit.isbmuniversity" target="_blank">ISBM University Android App</a></p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Recorded Video Lectures</Accordion.Header>
                            <Accordion.Body>
                            <Row>
                                    <Col lg={4}>
                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/MuFUyrsr7u0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </Col>
                                    {/* <Col lg={4}>
                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/MuFUyrsr7u0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </Col>
                                    <Col lg={4}>
                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/MuFUyrsr7u0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </Col> */}
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

export default Downloadresources