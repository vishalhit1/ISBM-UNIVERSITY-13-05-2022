import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Tab,Tabs} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import overview1 from '../../Images/campus-overview1.jpg'
import overview2 from '../../Images/campus-overview2.jpg';
import campus from '../../Images/ISBMU-Campus.jpg';
import library from '../../Images/library.jpg';
import Enquiry_now from "../enquiry_now";
const Library =()=>{
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
                    Library
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
            <Breadcrumb.Item active>Library</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/overview'>Overview</Link></p>
                        <p className="links_about active"><Link to='/library'>Library</Link></p>
                        <p className="links_about1"><Link to='/laboratory'>Laboratory</Link></p>
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
                        <h2 className="linkabout123">Library</h2>
                        <img src={library} style={{marginBottom:'20px'}}></img>
                        

                        <p>Libraries are the hub of academic life of the campus. Housed in spacious halls, 
                            the library is well stacked with text books, journals, periodicals and reference 
                            material.</p>
                        <p>The University supports a huge state-of-the-art library with the contemporary books
                             and online system of accessibility to make research and learning a continuous and
                              speedy process. The library is stocked with large number of books and journals
                               in all applied areas of studies.</p>

                        <p>It is equipped with the most popular journals both National and International, 
                            Newspapers, Current Magazines, books, research publications etc. The library is 
                            accessible to all students and faculty members. Reference Section contains 
                            Encyclopedias, books on General Knowledge and Competitive Exams, Dictionaries, 
                            previous volumes of journals/magazine etc. and remote access to thousands of 
                            libraries through modern software..</p>
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Library;