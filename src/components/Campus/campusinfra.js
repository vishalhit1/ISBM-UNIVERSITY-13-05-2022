import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Tab,Tabs} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import resize1 from '../../Images/resize1.jpeg';
import resize2 from '../../Images/resize2.jpeg';
import Enquiry_now from "../enquiry_now";
const CampusInfrastructure =()=>{
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
                        Campus Infrastructure
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
            <Breadcrumb.Item active>Campus Infrastructure</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/overview'>Overview</Link></p>
                        <p className="links_about1"><Link to='/library'>Library</Link></p>
                        <p className="links_about1"><Link to='/laboratory'>Laboratory</Link></p>
                        <p className="links_about active"><Link to='/campusinfrastructure'>Campus Infrastructure</Link></p>
                        <p className="links_about1"><Link to='/itlab'>Information Technology Lab</Link></p>
                        <p className="links_about1"><Link to='/extracurricular'>Extra Curricular</Link></p>
                        <p className="links_about1"><Link to='/digitizedlearning'>Digitized Learning System</Link></p>
                        <p className="links_about1"><Link to='/Busrouteschedule'>Bus Routes And Schedules</Link></p>
                        <p className="links_about1"><Link to='/Bustransformation'>Bus Transportation Fees</Link></p>
                        <p className="links_about1"><Link to='/Hostel'>Hostel</Link></p>
                        <p className="links_about1"><Link to='/Complaints'>Complaints</Link></p>
                        <p className="links_about1"><Link to='/Complaincaste'>Complaint Against Caste-Based Discrimination</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Campus Infrastructure</h2>


                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/jMTzToBXj0Q" 
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>

                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default CampusInfrastructure;