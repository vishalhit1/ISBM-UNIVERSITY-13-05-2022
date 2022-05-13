import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import {Link, BrowserRouter} from 'react-router-dom';
import Aboutplacementbanner from "./aboutplacementbanner";
import Enquiry_now from "../enquiry_now";

const Aboutplacement =()=>{
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
                    About Placements
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                Placements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>About Placements</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about active"><Link to="/Aboutplacement">About Placements</Link></p>
                        <p className="links_about1"><Link to="/Careercounselling">Career Counselling</Link></p>
                        <p className="links_about1"><Link to="/Globalskills">Global Skills</Link></p>
                        <p className="links_about1"><Link to="/Recruiters">Recruiters</Link></p>
                        <p className="links_about1"><Link to="/Campusrecruitment">Campus Recruitment & Interview Training</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">About Placements</h2>
                        <p className="detail_text">ISBM University through its strong network and alliances is committed to provide 100% placement services to its students pursuing degree program. It aims to create resources and understanding of career opportunities, while enhancing student's transition from university to career.</p>
                        <p className="detail_text">ISBM University endeavours to equip its students with all skills required for being employable in the industry, services, Government and Non-Government sector. To meet with this objective, ISBM University has established its placement cell as an interface between the University and the corporate arena. This placement cell is responsible for the industry academy interaction, corporate training and seminars and various workshops thus strengthening the corporate relations ultimately helping the students in good placements.</p>   
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Aboutplacement