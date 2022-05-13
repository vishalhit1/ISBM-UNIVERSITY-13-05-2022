import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Table} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import bustakes from "../../Images/bustakes.jpg"
import NavigationBar from "../Header/navbar";
import Complaincastebanner from "./complaincastebanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const Busrouteschedule =()=>{
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
                        Bus Routes And Schedules
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
            <Breadcrumb.Item active>Bus Routes And Schedules</Breadcrumb.Item>
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
                        <p className="links_about1"><Link to='/digitizedlearning'>Digitized Learning System</Link></p>
                        <p className="links_about active"><Link to='/Busrouteschedule'>Bus Routes And Schedules</Link></p>
                        <p className="links_about1"><Link to='/Bustransformation'>Bus Transportation Fees</Link></p>
                        <p className="links_about1"><Link to='/Hostel'>Hostel</Link></p>
                        <p className="links_about1"><Link to='/Complaints'>Complaints</Link></p>
                        <p className="links_about1"><Link to='/Complaincaste'>Complaint Against Caste-Based Discrimination</Link></p>
                    </Col>
                    <Col lg={9}>
                        <Row className="hotel">
                            <Col lg={12}>
                                <div className="bus_transport">
                                <h2 className="linkabout123">Bus Routes And Schedules</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <img src={bustakes} style={{width:'100%'}} />
                            </Col>
                            <Col lg={6}>
                                <h6><b>Unsure About Which Bus To Take?</b></h6>  
                                <p>The easiest way to plan your trip to our campus using transit - especially if you're unsure about which route to take or what time to take it - is to use the ISBM University Bus Schedule penned below and to contact our city office (+91-771-2412333) in case of any queries. Alternatively, go to maps.google.com and use the Directions tool (be sure to specify "transit" as your mode of travel)!</p>
                                <p>The trip planner will automatically select the best route for you to take, based on your origin and destination - it will even suggest trips operated by local service providers.</p>
                            </Col>
                            <b className="bolddd">Already Know The System?</b>
                            <p>Below is a list of ISBM University bus routes, some common destinations served by the route, and the service periods and times. Click here for a map and look below full schedule of the route.</p>
                        </Row>
                        <Row>
                            <Col lg={6}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th style={{color:'black'}}>STOPS</th>
                                    <th style={{color:'black'}}>NEXT BUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td id="bustd">Churra</td>
                                        <td id="bustd">6.00 AM</td>
                                    </tr>
                                    <tr>
                                        <td id="bustd">Fingeshwar</td>
                                        <td id="bustd">7.00 AM</td>
                                    </tr>
                                    <tr>
                                        <td id="bustd">Mahasamund</td>
                                        <td id="bustd">7.55 AM</td>
                                    </tr>
                                    <tr>
                                        <td id="bustd">Khatti Khamariya</td>
                                        <td id="bustd">8.30 AM</td>
                                    </tr>
                                    <tr>
                                        <td id="bustd">Churra</td>
                                        <td id="bustd">9.25 AM</td>
                                    </tr>
                                    <tr>
                                        <td id="bustd">Campus</td>
                                        <td id="bustd">3.30 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="bustd">Churra</td>
                                        <td id="bustd">4.00 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="bustd">Fingeshwar</td>
                                        <td id="bustd">4.45 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="bustd">Mahasamund</td>
                                        <td id="bustd">5.15 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="bustd">Khatti Khamariya</td>
                                        <td id="bustd">6.00 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="bustd">Churra</td>
                                        <td id="bustd">7.00 PM</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </Col>
                            <Col lg={6} style={{marginTop:'60px'}}>
                                <p>For instant arrivals via phone call,Dial +91-771-2412333.</p>
                                <p>Questions, comments or concerns? Contact us at support@isbmuniversity.edu.in</p>
                            </Col>
                            </Row>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Busrouteschedule
