import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Form,Button} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Complaincastebanner from "./complaincastebanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const Hostel =()=>{
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
                    Hostel
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
            Campus
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Hostel</Breadcrumb.Item>
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
                        <p className="links_about active"><Link to='/Hostel'>Hostel</Link></p>
                        <p className="links_about1"><Link to='/Complaints'>Complaints</Link></p>
                        <p className="links_about1"><Link to='/Complaincaste'>Complaint Against Caste-Based Discrimination</Link></p>
                    </Col>
                    <Col lg={9}>
                        <Row className="hotel">
                            <Col lg={12}>
                                <div>
                                <h2 className="linkabout123">Hostel</h2>
                                <p>We take special care of all requirements in a hostel for the development and growth of a student. We ensure that the child gets the homely feeling, with the best amenities and the desire to study hard more in a friendly atmosphere. The hygienic environment maintains the good health of our students and results in their overall physical development.</p>

                                <p>Students, who come from all over India, get exposed to different religions and customs, therefore, a complete finishing school in itself is the core feature of our hostel. We pamper students by providing amenities and groom them to manage their routine independently.</p>

                                <p>Tuning students to the real aspect of life, however letting them enjoy the comforts of reading newspapers and books, providing them nutritious food, safe drinking water, round the clock water supply including water heating systems, etc. gives them a feeling of being at home. All the above amenities when provided to your child give him/her the special nourishment to concentrate on his/her career growth.</p>

                                <p>The efficiency of students increases when they get good company and friends. Students usually have a habit of studying together, our spacious rooms provide them a comfortable setup to study. We have excellent acoustics in the hostel rooms which are designed in such a way as to avoid any noise disturbance.</p>

                                <p>Lessening the burden of daily washing of clothes and vessels, we have in house servants who take care of washing, ironing, and a dusting of the rooms regularly. We want our students to manage a home away from home and discipline themselves even in the absence of their parents. Liberal in all means, but strict in the areas of maintaining hygiene, manners, and discipline is the core feature at our Hostel.</p>
                                </div>
                                <div className="parasasasasa">
                                <h6><b>We provide:</b></h6>
                                <p>Nutritious Food</p>

                                <p>Pure Drinking Water (Through Aquaguard and water cooler)</p>

                                <p>Attached bathroom</p>

                                <p>24 hour Security</p>

                                <p>Doctor on Call</p>

                                <p>Telephone</p>
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

export default Hostel
