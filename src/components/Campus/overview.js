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
import Enquiry_now from "../enquiry_now";
const Overview =()=>{
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
                    Overview
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
            <Breadcrumb.Item active>Overview</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about active"><Link to='/overview'>Overview</Link></p>
                        <p className="links_about1"><Link to='/library'>Library</Link></p>
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
                        <h2 className="linkabout123">Overview</h2>
                        <p>Largest campus amongst private Universities in Chhattisgarh on a sprawling campus 
                            of the single continuous plot. The lush green surroundings provide serene ambiance,
                            conducive to render our young minds in creative academic pursuits away from the
                            distractions of modern city life. Amenities like multi-specialty Hospitals, residence
                            facilities are in the nearby vicinity of Campus.</p>
                            <p>The sprawling 32-acre campus of ISBM University is nestled in the heart of 
                                nature. The sylvan surroundings of the campus amidst the forest and hills, 
                                provide an inspiring learning environment for everyone. Blessed with the 
                                divinity of Tenganhi Mata (Durga Maa) Temple in its neighborhood, the campus 
                                is complete with all modern facilities and features.</p>
                                <Row>
                                    <Col><img src={overview1} className='img-fluid' style={{marginBottom:'20px'}}></img></Col>
                                    <Col><img src={overview2} className='img-fluid' style={{marginBottom:'20px'}}></img></Col>
                                </Row>
                                
                                
                        <ul className='skill-a aasas'>
                            <li>Spacious classrooms</li>
                            <li>Student Service Centre</li>
                            <li>Library</li>
                            <li>INTEL: The ISBM University Network for Technology Entrepreneurship and Leadership</li>
                            <li>Bonsai: Startup Incubation Cell</li>
                            <li>Infirmary and Medical Care</li>
                            <li>Yoga and Meditation hall</li>
                            <li>Indoor Sports Complex</li>
                            <li> Outdoor Sports</li>
                            <li>Student Residences</li>
                            <li>Kitchen and Dining Block</li>
                            <li>Staff Residences</li>
                            <li>Seminar Hall</li>
                            <li>Hi-speed Internet</li>
                            <li>Safe and Secured campus</li>
                        </ul>

                        <img src={campus} style={{marginBottom:'20px'}}></img>

                        <p>ISBM University has excellent laboratory facilities for carrying out teaching,
                            research and consultancy activities in various disciplines of design, media,
                            and mass communication.</p>
                        <p>The University has state of the art labs that allow the students to experiment and 
                            bring to practice what they have learned in theory.</p>

                        <p>The Laboratory at ISBM University facilitates the progress of logical and decisive
                             thinking skills of the students. The University has dedicated laboratories for 
                             physics, chemistry and biology programs. Each laboratory is well equipped with 
                             sufficient equipment, apparatus, specimens, and computerized charts as per the 
                             requirements of different subjects. The laboratories are environmentally friendly 
                             and all the necessary safety measures have been taken while designing the 
                             laboratory.</p>
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Overview;