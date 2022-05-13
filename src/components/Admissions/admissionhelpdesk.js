import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb,Accordion} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const AdmissionHelpDesk = ()=>{
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    return(
        <React.Fragment>
            <Header/>
            <NavigationBar/>
            <div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                    Admission Helpdesk
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
                <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>
                    Admissions
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Admission Helpdesk</Breadcrumb.Item>
                </Breadcrumb>

                <Row>
                    <Col lg={3}>
                        <h4 className="programees">Apply to ISBMU</h4>
                        {/* <ul className="drop"> */}
                        <p className="links_about1"><Link to='/programs&eligibilty'>Programmes and Eligibilities</Link></p>
                        <p className="links_about1"><Link to='/after-10th'>Programmes By Qualification</Link></p>
                        <p className="links_about1"><Link to='/industryintegrated'>Industry Integrated Programs</Link></p>
                        <p className="links_about1"><Link to='/skilldevelopment'>Skill Development</Link></p>
                        <p className="links_about1"><Link to='/applyonline'>Apply Online</Link></p>
                        <p className="links_about1 "><Link to='/downloads'>Download and Resources</Link></p>
                        <p className="links_about1"><Link to=''>Courses finder</Link></p>
                        <p className="links_about1 "><Link to='/paymentprocedure'>Payment Procedure Guidelines</Link></p>
                        <p className="links_about1 "><Link to='/admissionprocedure'>Admission Procedure Guidelines</Link></p>
                        <p className="links_about1"><Link to='/onlinepayment'>Online Payment</Link></p>
                        <p className="links_about active"><Link to='/admissionhelpdesk'>Admission Helpdesk</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Admission Help desk</h2>
                        <p style={{marginTop:'20px'}}>Please do feel free to contact us through any of the following means:</p>
                            <p>Helpline No<a href=''> +91-9373199999.</a> It shall be manned from Monday - Saturday between 10.30 AM to 6.00 PM</p>
                         
                            <p>Send us an email at<a href=''> enquiry@isbmuniversity.edu.in</a></p>

                            <p><b>Visit Us at Our Campus:</b>Village-Nawapara (Kosmi) Block,
                            Tehsil-Chhura, District: Gariyaband,
                            Chhattisgarh</p>
                            
                            <p><b>Pin:</b> 493996</p>
                            <p><b>Contact:</b> +91 9373199999</p>
                            <p><b>Email:</b> info@isbmuniversity.edu.in</p>

</Col>
                    
                </Row>
                
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default  AdmissionHelpDesk;