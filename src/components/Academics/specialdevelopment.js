import React,{ useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Accordion} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "./managementbanner";
import BONSAI from "../../Images/BONSAI.jpg"
import ENAGRAM from "../../Images/ENAGRAM.jpg"
import BV from "../../Images/BV.jpg"
import INTEL from "../../Images/INTEL.jpg";
import Enquiry_now from "../enquiry_now";
import MyVerticallyCenteredModal from "./specialdevelopmentmodal";
import MyVerticallyCenteredModal1 from "./specialdevelopmentmodal1";
import MyVerticallyCenteredModal2 from "./specialdevelopmentmodal2";
import MyVerticallyCenteredModal3 from "./specialdevelopmentmodal3";
import {Link, BrowserRouter} from 'react-router-dom';
const Specialdevelopment =()=>{
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow11, setModalShow11] = React.useState(false);
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
                    Special Development Cells
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
            <Breadcrumb.Item active>Special Development Cells</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>                  
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/Academicsphil'>Academic Philosophy</Link></p>
                        <p className="links_about1"><Link to='/Academicspartners'>Academic Partners</Link></p>
                        <p className="links_about active"><Link to='/Specialdevelopment'>Special Development Cells</Link></p>
                        <p className="links_about1"><Link to='/Downloadresources'>Online Resources</Link></p>
                        <p className="links_about1"><Link to='/Teachningmethod'>Teaching Methodology/Pedagogy</Link></p>
                        <p className="links_about1"><Link to='/MoocIsbm'>MOOC with ISBM University</Link></p>
                        <p className="links_about1"><Link to='/Diploma_in_hotel_management_and_catering_technology'>MOUs' and Collaborations</Link></p>
                        <p className="links_about1"><Link to='/Certificateemdps'>Certificate Programs and MDPs</Link></p>
                        <p className="links_about1"><Link to='/'>Student ERP</Link></p>
                    </Col>
                    <Col lg={9} className="specialdevelopmentss">
                        <h2 className="linkabout123">Special Development Cells</h2>
                        <p>ISBM University Network for Technology Entrepreneurship & Leadership (INTEL)</p>
                        <img src={INTEL} onClick={() => setModalShow(true)}/>
                        <MyVerticallyCenteredModal show={modalShow}onHide={() => setModalShow(false)}/>
                        <p>Business Opportunities Nurtured through Support, Action and Incubation (BONSAI)</p>
                        <img src={BONSAI} onClick={() => setModalShow1(true)} />
                        <MyVerticallyCenteredModal1 show={modalShow1}onHide={() => setModalShow1(false)}/>
                        <p>English and Grammar Development Cell (ENAGRAM)</p>
                        <img src={ENAGRAM} onClick={() => setModalShow2(true)}  />
                        <MyVerticallyCenteredModal2 show={modalShow2}onHide={() => setModalShow2(false)}/>
                        <p>Careers and Placement Assistance Cell (BigVacancy.Com)</p>
                        <img src={BV}  onClick={() => setModalShow3(true)} />
                        <MyVerticallyCenteredModal3 show={modalShow3}onHide={() => setModalShow3(false)}/>
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Specialdevelopment