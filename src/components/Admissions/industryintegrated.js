import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb,Tab,Tabs} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const IndustryIntegrated = ()=>{
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
                    Programmes and Eligibilities
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                Admissions
            </Breadcrumb.Item>
            <Breadcrumb.Item active>INDUSTRY INTEGRATED PROGRAMS</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3} className="order-md-1">
                        <h4 className="programees">PROGRAMMES</h4>
                        <ul className="abcd1111">
                        <li><a>School of Commerce</a></li>
                        <li><a>School of Management </a></li>
                        <li><a>School of Science</a></li>
                        <li><a>School of Arts and Humanities</a></li>
                        <li><a>School of Engineering and Technology</a></li>
                        <li><a>School of Library and Information Science</a></li>
                        <li><a>School of Journalism and Mass Communication</a></li>
                        <li><a>School of Law</a></li>
                        <li><a>School of Design</a></li>
                        <li><a>School of Information and Technology </a></li>
                        <li><a>School of Pharmacy</a></li>
                        <li><a>School of Life Science</a></li>
                        <li><a>School of Yoga and Naturopathy</a></li>
                        <li><a>School of Education</a></li>
                        <li><a>School of Hotel Management</a></li>
                        </ul>      
                    </Col>
                    <Col lg={9} className="order-md-2">
                        <h2 className="linkabout">INDUSTRY INTEGRATED PROGRAMS</h2>
                    <Tabs defaultActiveKey="home" transition={false} className="acds" id="noanim-tab-example">
                            <Tab eventKey="home" title="All Programmes">
                                <Row>
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            <a href="mba-in-business-administration.php">
                                                Masters in Business Administration (MBA) (Logistics &amp; Supply Chain Management)
                                            </a>
                                        </li>
                                    </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="Postgraduate" title="Postgraduate Programmes">
                            <Row>
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            <a href="mba-in-business-administration.php">
                                                Masters in Business Administration (MBA) (Logistics &amp; Supply Chain Management)
                                            </a>
                                        </li>															
                                    </ul>
                                    </Col>
                            </Row>
                            </Tab>
                            </Tabs> 
                </Col>
            </Row>
        </Container>
        </React.Fragment>
    )
}

export default IndustryIntegrated;