import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import {Link, BrowserRouter} from 'react-router-dom';
import Aboutplacementbanner from "./aboutplacementbanner";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Enquiry_now from "../enquiry_now";
const state= {
    responsive:{
        0: {
            items: 1,
        },
        450: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    },
}
const Recruiters =()=>{
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
                    Recruiters
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
            <Breadcrumb.Item active>Recruiters</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to="/Aboutplacement">About Placements</Link></p>
                        <p className="links_about1"><Link to="/Careercounselling">Career Counselling</Link></p>
                        <p className="links_about1"><Link to="/Globalskills">Global Skills</Link></p>
                        <p className="links_about active"><Link to="/Recruiters">Recruiters</Link></p>
                        <p className="links_about1"><Link to="/Campusrecruitment">Campus Recruitment & Interview Training</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Recruiters</h2>
                        <p className="detail_text">Over the years, several well-known companies of the corporate world and other agencies have offered ISBM University for recruitment of our professionals. Many of our students have gone abroad for higher studies.</p>
                        <OwlCarousel margin={20} autoplay nav={false} dots={false} items={3} touchDrag={true} lazyLoad={true}
                        responsive={state.responsive}>
                            <div className="item">
                                <img src ="https://www.isbmuniversity.edu.in/uploads/1531547570_549676_1.png" className='img-fluid'></img>
                            </div>
                            <div className="item">
                                <img src ="https://www.isbmuniversity.edu.in/uploads/1531547570_549676_1.png" className='img-fluid'></img>
                            </div>
                            <div className="item">
                                <img src ="https://www.isbmuniversity.edu.in/uploads/1531547570_549676_1.png" className='img-fluid '></img>
                            </div>
                            <div className="item">
                                <img src ="https://www.isbmuniversity.edu.in/uploads/1531547570_549676_1.png" className='img-fluid'></img>
                            </div>
                            <div className="item">
                                <img src ="https://www.isbmuniversity.edu.in/uploads/1531547570_549676_1.png" className='img-fluid'></img>
                            </div>
                            <div className="item">
                                <img src ="https://www.isbmuniversity.edu.in/uploads/1531547570_549676_1.png" className='img-fluid'></img>
                            </div>
                            <div className="item">
                                <img src ="https://www.isbmuniversity.edu.in/uploads/1531547570_549676_1.png" className='img-fluid'></img>
                            </div>
                            <div className="item">
                                <img src ="https://www.isbmuniversity.edu.in/uploads/1531547570_549676_1.png" className='img-fluid'></img>
                            </div>
                            <div className="item">
                                <img src ="https://www.isbmuniversity.edu.in/uploads/1531547570_549676_1.png" className='img-fluid'></img>
                            </div>
                        </OwlCarousel>  
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Recruiters