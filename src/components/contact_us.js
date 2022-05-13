import React, { useEffect } from "react";
import { Container, Breadcrumb, Form, Button, Row } from "react-bootstrap";
import Footer from "./footer";
import Header from "./Header/header";
import NavigationBar from "./Header/navbar";
import Enquiry_now from "./enquiry_now";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import emailjs from 'emailjs-com';
const Contact_us = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_3iwjjzi',
            'template_i6xl0px',
            e.target,
            'SzAIZHsYQqNMsL6wY'
        ).then(res => {
            alert("Thank You Our Team Will Contact You");
            window.location.href = "http://isbmuniversity.edu.in/";
        }).catch(err => console.log(err));
    }
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <NavigationBar />
            <div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                    Contact us
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us fee_form">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Pages</Breadcrumb.Item>
                    <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="wm-student-settings-info">
                            <div className="wm-student-dashboard-settings">
                                <div className="wm-plane-title">
                                    <h1 className="regis_details">Talk To Us Today</h1>
                                </div>
                                <Form name="myForm" onSubmit={sendEmail}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name="name" placeholder="Enter Full Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter Email Address" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="text" name="phone" placeholder="Enter Mobile Number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control as="textarea" name="comment" placeholder="Enter Comment" rows={3} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Contact_us