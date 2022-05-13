import React, { useEffect } from "react";
import { Container,Breadcrumb,Form,Button,Row} from "react-bootstrap";
import Footer from "./footer";
import Header from "./Header/header";
import NavigationBar from "./Header/navbar";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Enquiry_now from "./enquiry_now";
const Isbm_pro =()=>{
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
                    ISBM Pro
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us isbm_pro">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>ISBM Pro</Breadcrumb.Item>
            </Breadcrumb>
            <div className="col-md-12">
                <h4 className="teweleve">12th Standard Model QP (2021)</h4>
            </div>
            <ul className="row">
                <li className="col-md-1">
                </li>
                <li className="col-md-10">
                <div className="wm-student-profile">
                    <div className="wm-student-profile-text">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqcFJ1jMkSHaSQx1t5OMRPYG2dtFYtlO-n-p39Luhysi_1NQ/viewform?embedded=true" target="_blank" id="down">12th Mock Test MCQ’S-Examination (Arts Group)</a>
                    </div>
                </div>
                </li>
                <li className="col-md-1">
                </li>
                <li className="col-md-1">
                </li>
                <li className="col-md-10" id="sec">
                <div className="wm-student-profile">
                    <div className="wm-student-profile-text">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScNEbrfUuKYyTKOxZaS6CJHAFQ60-82ALJJWFuSOpYOjEgR_w/viewform?embedded=true" target="_blank" id="down">12th Mock Test MCQ’S-Examination ( Science Biology and Mathematics Group)</a>
                    </div>
                </div>
                </li>
                <li className="col-md-1">
                </li>
            </ul>
            </Container>
            <Footer/>
        </div>
    )
}

export default Isbm_pro