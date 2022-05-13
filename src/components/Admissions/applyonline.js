import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
// import Managementbanner from "../Academics/managementbanner";
import Footer from "../footer";
import { Container,Row,Col,Breadcrumb,Tab,Tabs,Accordion,Form} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const ApplyOnline = ()=>{
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <React.Fragment>
            <Header/>
            <NavigationBar/>
            <div className="innerbackimage">
        <div className="text_banners_abcds">
          <h1 className="animate__animated animate__fadeInRightBig">
            Apply Online
          </h1>
          <button
            className="animate__animated animate__fadeInRightBig apply_btn"
            onClick={() => setModalShow(true)}
          >
            <span>Apply Now</span>
          </button>
          <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
            <Container className="About_us apply__online">
                <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>
                    Admissions
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Online Application</Breadcrumb.Item>
                </Breadcrumb>
                <Accordion className="faqss" defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><b>Student Imperative Details</b></Accordion.Header>
    <Accordion.Body>
        <h5>Application form</h5>
        <p>This page is an electronic version of the application form. Filling and submitting this form will 
            navigate to an online payment process/page. If you don't wish to do an online payment, you are 
            requested to download the form, fill it and send it to your nearest ISBM University center.</p>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Category</Form.Label>
                                <Form.Select defaultValue="...Select Category...">
                                    <option>Select Category...</option>
                                    <option>Bachelor in arts</option>
                                    <option>Bachelor in social work</option>
                                    <option>Bachelor in arts</option>
                                    <option>Bachelors in commerce</option>
                                    <option>Masters in commerce</option>
                                    <option>Bachelors in business administration</option>
                                    <option>Masters in arts education</option>
                                    <option>Masters in arts</option>
                                </Form.Select>
                                {/* <select className='form-control' style={{color:'#5e1756'}}>
                                    <option>----Select Category------</option>
                                    
                                </select> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Name *(In block Letters)</Form.Label>
                            <Form.Control type="text" placeholder="Full name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address for correspondence*</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control type="date" placeholder="Date of birth" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nationality*</Form.Label>
                            <Form.Control type="text" placeholder="Nationality" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Col>
                     
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Course</Form.Label>
                                <Form.Select defaultValue="...Select Course...">
                                    <option>Select Category...</option>
                                    <option>Bachelor in arts</option>
                                    <option>Bachelor in social work</option>
                                    <option>Bachelor in arts</option>
                                    <option>Bachelors in commerce</option>
                                    <option>Masters in commerce</option>
                                    <option>Bachelors in business administration</option>
                                    <option>Masters in arts education</option>
                                    <option>Masters in arts</option>
                                </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Father's Name *(In block Letters)</Form.Label>
                            <Form.Control type="text" placeholder="Father's name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Permanent Address</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                            type="radio"
                            label="female"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="male"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Telephone*</Form.Label>
                            <Form.Control type="number" placeholder="Mobile" />
                        </Form.Group>
                    </Col>
                </Row>
            
            </Form>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><b>Academic &amp; Work Experience Details</b></Accordion.Header>
    <Accordion.Body>
        <p>Examination taken (Please list in chronological order including examinations with results pending)</p>
        <Form>
                <Row>
                    <Col>
                       
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Degree</Form.Label>
                            <Form.Control type="text" placeholder="Degree" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Exam Month</Form.Label>
                            <Form.Control type="month"q />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Subjects specialization</Form.Label>
                            <Form.Control type="text" placeholder="Subjects specialization" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Work Experience</Form.Label>
                            <Form.Control type="number" placeholder="Work Experience" />
                        </Form.Group>
                     
                    </Col>
                     
                    <Col>
                   
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name of the Institution / College / School :</Form.Label>
                            <Form.Control type="text" placeholder="College" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Exam Year:</Form.Label>
                            <Form.Control type="year" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Results / Grades / Percentage </Form.Label>
                            <Form.Control type="number" placeholder="Results / Grades / Percentage :" />
                        </Form.Group>
                    </Col>
                </Row>
            
            </Form>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><b>Admission Details</b></Accordion.Header>
    <Accordion.Body>
     <Row>
        <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Counselling Centre*</Form.Label>
                <Form.Control type="text" placeholder="Counselling Centre" />
            </Form.Group>
                       
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Counselor Name*</Form.Label>
                <Form.Control type="text" placholder='Counselor Name'/>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Pay Amount*</Form.Label>
                <Form.Control type="number" placeholder="Pay Amount" />
            </Form.Group>
        </Col>
     </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={2} />
        </Form.Group>
        <h6>Declaration by the Candidate</h6>
        <p>I certify that all information provided in this application proforma is complete and accurate.
             I agree to familiarize myself with all the rules and regulations of the program set forth by 
             ISBM University and abide by them. I would uplift the standards and respect the principles of 
             ISBM University as an organization of higher learning.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default ApplyOnline;