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
const Laboratory =()=>{
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
                    Laboratory
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
            <Breadcrumb.Item active>Laboratory</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/overview'>Overview</Link></p>
                        <p className="links_about1"><Link to='/library'>Library</Link></p>
                        <p className="links_about active"><Link to='/laboratory'>Laboratory</Link></p>
                        <p className="links_about1"><Link to='/campusinfrastructure'>Campus Infrastructure</Link></p>
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
                        <h2 className="linkabout123">Laboratory</h2>
                       

                        <p>ISBM University has excellent laboratory facilities for carrying out teaching,
                            research and consultancy activities in various disciplines of design, media and
                            mass communication.</p>
                        <p>The University has state of the art labs that allow the students to experiment and
                             bring to practice what they have learnt in theory.</p>

                        <p>Laboratory at ISBM University facilitates progress of logical and decisive 
                            thinking skills of the students. The University has dedicated laboratories for 
                            physics, chemistry and biology programs. Each laboratory is well equipped with 
                            sufficient equipments, apparatus, specimens and computerized charts as per the 
                            requirements of different subjects. The laboratories are environmental friendly 
                            and all the necessary safety measures have been taken while designing the 
                            laboratory.</p>

                            <Row>
                                <Col><img src={resize1} height='300px'></img></Col>
                                <Col><img src={resize2} height='300px'></img></Col>
                            </Row>
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Laboratory;