import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "./managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";

const Academicsphil =()=>{
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
                    Academic Philosophy
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Academic Philosophy</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>                  
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about active"><Link to='/Academicsphil'>Academic Philosophy</Link></p>
                        <p className="links_about1"><Link to='/Academicspartners'>Academic Partners</Link></p>
                        <p className="links_about1"><Link to='/Specialdevelopment'>Special Development Cells</Link></p>
                        <p className="links_about1"><Link to='/Downloadresources'>Online Resources</Link></p>
                        <p className="links_about1"><Link to='/Teachningmethod'>Teaching Methodology/Pedagogy</Link></p>
                        <p className="links_about1"><Link to='/MoocIsbm'>MOOC with ISBM University</Link></p>
                        <p className="links_about1"><Link to='/Diploma_in_hotel_management_and_catering_technology'>MOUs' and Collaborations</Link></p>
                        <p className="links_about1"><Link to='/Certificateemdps'>Certificate Programs and MDPs</Link></p>
                        <p className="links_about1"><Link to='/'>Student ERP</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Academic Philosophy</h2>
                        <p style={{fontSize:'20px',fontStyle:'italic'}}>ISBM University aims to help students realize dreams through an educational pedagogy which focuses better on connecting with them as people, inside and outside the classroom.</p>
                        <p className="detail_text">With many experiences enriched over past quite many years, our tools of teaching have changed considerably, but the heart of what we do has just remained constant. The relationships that our faculty members look forward to build with the learners take ISBM University education far beyond merely imparting knowledge and preparing job-seekers. Our faculties surely experts in their respective fields, but seek to produce graduates who will aspire to have more than a successful career. In partnership with ISBM University's academic, social life, and support staff, they aim to graduate thought-leaders who will make an impact for better, both at their local community and in the larger world. At ISBM University, learners better be ready to get challenged intellectually by academic programs that expects the best of their efforts and energies. Learners also become part of a close university community where people care about each other. According to Chancellor Dr. VinayAgrawal, ISBM University's students can make a difference in the University itself much before they go out making difference in the real world.</p>
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Academicsphil