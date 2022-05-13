import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Tab,Tabs} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import itimg from '../../Images/it-lab1.jpg';
import Enquiry_now from "../enquiry_now";
const ExtraCurricular =()=>{
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
                    Extra Curricular
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
            <Breadcrumb.Item active>Extra Curricular</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/overview'>Overview</Link></p>
                        <p className="links_about1"><Link to='/library'>Library</Link></p>
                        <p className="links_about1"><Link to='/laboratory'>Laboratory</Link></p>
                        <p className="links_about1"><Link to='/campusinfrastructure'>Campus Infrastructure</Link></p>
                        <p className="links_about1"><Link to='/itlab'>Information Technology Lab</Link></p>
                        <p className="links_about active"><Link to='/extracurricular'>Extra Curricular</Link></p>
                        <p className="links_about1"><Link to='/digitizedlearning'>Digitized Learning System</Link></p>
                        <p className="links_about1"><Link to='/Busrouteschedule'>Bus Routes And Schedules</Link></p>
                        <p className="links_about1"><Link to='/Bustransformation'>Bus Transportation Fees</Link></p>
                        <p className="links_about1"><Link to='/Hostel'>Hostel</Link></p>
                        <p className="links_about1"><Link to='/Complaints'>Complaints</Link></p>
                        <p className="links_about1"><Link to='/Complaincaste'>Complaint Against Caste-Based Discrimination</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Extra Curricular</h2>
                        

                        <p>The University has many auditoriums and seminar rooms equipped with the latest and
                             state of the art audio visual facilities for guest lectures, seminars, 
                             presentations, meetings, faculty presentations, discussions and other academic 
                             activities.</p>
                        <p>Students, coming from all over India get exposed to different religions and customs.
                             We pamper these students conveniences by facilitating and connecting them with
                              nearby providers of stay and accommodation services which provide amenities and 
                              groom them to manage them routine independently thus enabling them tune to the real
                               aspects of life. Here, they can enjoy the comforts of reading newspapers and books
                               with nutritious vegetarian and non-vegetarian food, safe drinking water and round
                                the clock water supply thus giving them a feel of being at home.</p>

                        <p>The physical development of the learners is equally important. Keeping this fact in mind, 
                            the University provides students with the ultra-modern facilities for sports and recreation.
                             The campus has lot of space for indoor as well as outdoor games like Chess, Carrom-board, 
                             table-tennis, hockey, cricket, football, badminton, volleyball, aerobics, etc. Apart from this 
                             there are facilities for swimming, horse-riding etc. All this enhances the extra-curricular 
                             skills of the learners.</p>

                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default ExtraCurricular;