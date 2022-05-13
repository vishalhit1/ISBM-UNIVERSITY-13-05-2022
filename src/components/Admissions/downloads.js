import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb,Tab,Tabs} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const Downloads =()=>{
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
                    Download and Resources
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
            <Breadcrumb.Item active>Download and Resources</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        {/* <ul className="drop"> */}
                        <p className="links_about1"><Link to='/programs&eligibilty'>Programmes and Eligibilities</Link></p>
                        <p className="links_about1"><Link to='/after-10th'>Programmes By Qualification</Link></p>
                        <p className="links_about1"><Link to='/industryintegrated'>Industry Integrated Programs</Link></p>
                        <p className="links_about1"><Link to='/skilldevelopment'>Skill Development</Link></p>
                        <p className="links_about1"><Link to='/applyonline'>Apply Online</Link></p>
                        <p className="links_about active"><Link to='/downloads'>Download and Resources</Link></p>
                        <p className="links_about1"><Link to=''>Courses finder</Link></p>
                        <p className="links_about1"><Link to='/paymentprocedure'>Payment Procedure Guidelines</Link></p>
                        <p className="links_about1"><Link to=''>Admission Procedure Guidelines</Link></p>
                        <p className="links_about1"><Link to='/onlinepayment'>Online Payment</Link></p>
                        <p className="links_about1"><Link to=''>Admission Helpdesk</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Download and Resources</h2>
                        <ul className='skill-a'>
                            <li><a href=''>Download Brochure</a></li>
                            <li><a href=''>ISBM University Android App</a></li>
                            <li><a href=''>ISBM University iOS App</a></li>
                        </ul>
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Downloads;