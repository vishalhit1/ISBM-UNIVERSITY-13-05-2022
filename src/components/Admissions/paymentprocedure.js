import React,{useEffect} from "react";
import { Container,Row,Col,Breadcrumb,Tab,Tabs} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";

const PaymentProcedure = ()=>{
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
                    Payment Procedure Guidelines
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
                <Breadcrumb.Item active>Payment Procedure Guidelines</Breadcrumb.Item>
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
                        <p className="links_about1 "><Link to='/downloads'>Download and Resources</Link></p>
                        <p className="links_about1"><Link to=''>Courses finder</Link></p>
                        <p className="links_about active"><Link to='/paymentprocedure'>Payment Procedure Guidelines</Link></p>
                        <p className="links_about1"><Link to='/admissionprocedure'>Admission Procedure Guidelines</Link></p>
                        <p className="links_about1"><Link to='/onlinepayment'>Online Payment</Link></p>
                        <p className="links_about1"><Link to='/admissionhelpdesk'>Admission Helpdesk</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Payment Procedure Guidelines</h2>
                        <p>ISBM University has multiple options available for efficient and secure fee payment for students. Details regarding the different modes of fee payment for students are given below.</p>
                        
                        
                        <Tabs defaultActiveKey="home" transition={false} className="acds" id="noanim-tab-example">
                            <Tab eventKey="home" title="Fees Payment Mode">
                                <Row>
                                    <p>Fees can be paid in either of the following modes:</p>
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            {/* <a href="bachelors-in-business-administration.php"> */}
                                                Cash
                                            {/* </a> */}
                                        </li>
                                        <li>
                                            {/* <a href="bachelors-in-business-administration.php"> */}
                                                Cheque/Demand Draft
                                            {/* </a> */}
                                        </li>
                                        <li>
                                            {/* <a href="bachelors-in-science.php"> */}
                                                Credit Card
                                            {/* </a> */}
                                        </li>																
                                    </ul>
                                    </Col>
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            
                                                Online Bank Transfer
                                           
                                        </li>
                                        <li>
                                           
                                                Online Credit Card Transfer
                                           
                                        </li>
                                        <li>
                                           
                                               <Link to='/Payfeesonline' style={{color:'#0961ab'}}><b>Click here</b> </Link>to make payment
                                            
                                        </li>															
                                    </ul>
                                    </Col>
                                    <p>Please get in touch at admissions@isbmuniversity.edu.in for further details</p>
                                </Row>
                            </Tab>
                            <Tab eventKey="profile" title="Other Related Important Information">
                            <Row>
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            You can opt for more than one course at a time.
                                        </li>
                                        <li>
                                            Fees are subject to revision at any time.
                                        </li>

                                        <li>
                                            Course once selected will not be changed under any circumstance.
                                        </li>
                                        																	
                                    </ul>
                                    </Col>
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            You can change the course while taking admission or the same day of admission till the working hours.
                                        </li>

                                        <li>
                                            Full fees has to be paid at the time of admission.
                                        </li>	

                                        <li>
                                            Fees once paid is not refundable under any circumstance.
                                        </li>																	
                                    </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            </Tabs> 
                        
                        {/* <ul className='skill-a'>
                            <li><a href=''>Download Brochure</a></li>
                            <li><a href=''>ISBM University Android App</a></li>
                            <li><a href=''>ISBM University iOS App</a></li>
                        </ul> */}
                    </Col>     
                </Row>
          
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default PaymentProcedure;