import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb,Form,Button} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Complaincastebanner from "./complaincastebanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";

const Complaints =()=>{
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
                    Complaints
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                Campus
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Complaints</Breadcrumb.Item>
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
                        <p className="links_about1"><Link to='/Busrouteschedule'>Bus Routes And Schedules</Link></p>
                        <p className="links_about1"><Link to='/Bustransformation'>Bus Transportation Fees</Link></p>
                        <p className="links_about1"><Link to='/Hostel'>Hostel</Link></p>
                        <p className="links_about active"><Link to='/Complaints'>Complaints</Link></p>
                        <p className="links_about1"><Link to='/Complaincaste'>Complaint Against Caste-Based Discrimination</Link></p>
                    </Col>
                    <Col lg={9}>
                        <Row className="complaintcaste">
                            <Col lg={12}>
                                <div style={{border:'solid #0a3f7a 1px'}}>
                                <h5>Complaints</h5>
                                <Form className="Form_complaint">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Courses</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Courses" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Academic Year</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Academic Year" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Enrollement No</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Enrollement No" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone No</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Phone No" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email Address" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Brief Description of the Complaint*</Form.Label>
                                        <Form.Control placeholder="Enter Brief Description" as="textarea" rows={3} />
                                    </Form.Group>
                                    <div style={{marginBottom:'10px'}}>
                                    <Button variant="primary">Submit</Button>&nbsp;&nbsp;
                                    <Button variant="danger">Reset</Button>
                                    </div>
                                </Form>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Complaints
