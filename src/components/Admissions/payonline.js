import React,{useEffect} from 'react';
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import Footer from "../footer";
import { Container,Row,Col,Breadcrumb,Tab,Tabs,Accordion,Form,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const PayOnline = ()=>{
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
                    Online Payment
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us" style={{marginBottom:"20px"}}>
                <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>
                    Admissions
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Online Payment</Breadcrumb.Item>
                </Breadcrumb>
                <h3>Registration Details</h3>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name *(In block Letters)</Form.Label>
                            <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Phone number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder='Location'/>
                        </Form.Group>
                        <Form.Label >Courses Detail:</Form.Label>
                        <Form.Select  className="mb-3"defaultValue="...Select Course...">
                            <option>Select Course...</option>
                            <option>Bachelor in arts</option>
                            <option>Bachelor in social work</option>
                            <option>Bachelor in arts</option>
                            <option>Bachelors in commerce</option>
                            <option>Masters in commerce</option>
                            <option>Bachelors in business administration</option>
                            <option>Masters in arts education</option>
                            <option>Masters in arts</option>
                        </Form.Select>
                        <Form.Label >Transaction type</Form.Label>
                        <Form.Select defaultValue="...Select Course...">
                            <option>Select Payment...</option>
                            <option>New Enrollment</option>
                            <option>Pending amount</option>
                        </Form.Select>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name *(In block Letters)</Form.Label>
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Counsellor Name</Form.Label>
                            <Form.Control type="text" placeholder="Counsellor Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Pay Amount</Form.Label>
                            <Form.Control type="number" placeholder="Counsellor Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Admission Enrollment No</Form.Label>
                            <Form.Control type="number" placeholder="Admission Enrollment no" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as='textarea' rows={2} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" style={{backgroundColor:"#5e1756",border:'1px solid #5e1756'}}>
                    Pay Now
                </Button>
            </Container>
        </React.Fragment>
    )
}

export default PayOnline;