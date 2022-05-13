import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb,Accordion} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const AdmissionProcedure = ()=>{
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
                    Admission Procedure Guidelines
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
                <Breadcrumb.Item active>Admission Procedure Guidelines</Breadcrumb.Item>
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
                        <p className="links_about active"><Link to='/admissionprocedure'>Admission Procedure Guidelines</Link></p>
                        <p className="links_about1"><Link to='/onlinepayment'>Online Payment</Link></p>
                        <p className="links_about1"><Link to='/admissionhelpdesk'>Admission Helpdesk</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Admission Procedure Guidelines</h2>
                        <p>ISBM University has multiple options available for efficient and secure fee payment for students. Details regarding the different modes of fee payment for students are given below.</p>
                        




                        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Admission Requirements</Accordion.Header>
    <Accordion.Body>
      <ul>
          <li>Photo Copies of Mark Sheets & Certificates</li>
          <li>Four Latest Photographs</li>
          <li>Identity Proof</li>
          <li>Address Proof</li>
          <li>Work Experience Certificate if any</li>
      </ul>
      <p><b>Note:</b> All the documents need to be attested.</p>
      <p><b>Eligibility: </b> Please refer the list of Courses for details.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Admission Procedure</Accordion.Header>
    <Accordion.Body>
        <ul>
            <li>Applicants are required to fill the application form and submit/post it to ISBM University.<a href=''>Click here</a> to see list of centers</li>
            <li>Fees payment can be done any of our payment methods<a href=''>Click here</a> see the available payment options</li>
            <li>A printable format of the application form is available on our website.<a href=''>Click here</a>download the admission form</li>
            <li>Address Proof</li>
            <li>Work Experience Certificate if any</li>
        </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<p style={{marginTop:'30px'}}><b>Application Form is available at the Admission Cell, ISBM University, Chhura, Gariyaband, Chattisgarh on cash payment of 900 INR.</b></p>
<p>OR</p>
<p><b>Application form can be downloaded from website and sent along with a DD of 900 INR in favor of 'ISBM University', payable at Raipur and required to be sent at the address given below:</b></p>

<p><b>ISBM university:</b>Village-Nawapara (Kosmi) Block,
Tehsil-Chhura, District: Gariyaband,
Chhattisgarh</p>
<p></p>
<p><b>Pin:</b> 493996</p>
<p><b>Contact:</b> +91 9373199999</p>
<p><b>Email:</b> info@isbmuniversity.edu.in</p>
<p>To download admission form<a href=''> Click here</a></p>


</Col>
                    
                </Row>
                
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default  AdmissionProcedure;