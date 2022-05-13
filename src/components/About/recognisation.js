import React,{useState,useEffect} from "react";
import { Container,Row,Col,Accordion,Breadcrumb} from "react-bootstrap";
import rec1 from '../../Images/rec/11.jpg';
import rec2 from '../../Images/rec/12.jpg';
import rec3 from '../../Images/rec/13.jpg';
import rec4 from '../../Images/rec/14.png';
import rec5 from '../../Images/rec/15.jpg';
import rec6 from '../../Images/rec/16.jpg';
import rec7 from '../../Images/rec/17.jpg';
import rec8 from '../../Images/rec/18.jpg';
import rec9 from '../../Images/rec/19.jpg';
import corporate1  from '../../Images/rec/assocam_img.jpg';
import corporate2 from '../../Images/rec/cii_img.jpg';
import corporate3 from '../../Images/rec/phd_img.jpg';
import international1 from '../../Images/rec/iacc_img.jpg';
import international2 from '../../Images/rec/eu_img.jpg';
import international3 from '../../Images/rec/unglobal.jpg';
import international4 from '../../Images/rec/latestpost.jpg';
import international5 from '../../Images/rec/UNSDSN.png';
import national1 from '../../Images/rec/iste_img.jpg';
import national2 from '../../Images/rec/istd_img.jpg';
import national3 from '../../Images/rec/bma_img.jpg';
import national4 from '../../Images/rec/aims_img.jpg';
import national5 from '../../Images/rec/CEGR.jpg';
import degree1 from '../../Images/rec/sambalpur-university.jpg'
import quality1 from '../../Images/rec/iso_img.jpg';
import quality2 from '../../Images/rec/globally_img.jpg';
import cipp from '../../Images/cipp_img.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Std1 from "./modalpop/std1";
import Std3 from "./modalpop/std3";
import Std4 from "./modalpop/std4";
import Std5 from "./modalpop/std5";
import Std6 from "./modalpop/std6";
import Std7 from "./modalpop/std7";
import Std8 from "./modalpop/std8";
import Cor1 from "./modalpop/cor1";
import Cor2 from "./modalpop/cor2";
import Cor3 from "./modalpop/cor3";
import Int1 from "./modalpop/int1";
import Int2 from "./modalpop/int2";
import Int3 from "./modalpop/int3";
import Int4 from "./modalpop/int4";
import Int5 from "./modalpop/int5";
import Int6 from "./modalpop/int6";
import Qua1 from "./modalpop/qua1";
import Qua2 from "./modalpop/qua2";
import Deg1 from "./modalpop/deg1";
import Nat1 from "./modalpop/nat1";
import Nat2 from "./modalpop/nat2";
import Nat3 from "./modalpop/nat3";
import Nat4 from "./modalpop/nat4";
import Nat5 from "./modalpop/nat5";
import Enquiry_now from "../enquiry_now";

const option= {
    responsive:{
        0: {
            items: 2,
        },
        450: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        },
    }
}
const Recognisation =()=>{
    const [modalShow111, setModalShow111] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);
    const [modalShow6, setModalShow6] = React.useState(false);
    const [modalShow7, setModalShow7] = React.useState(false);
    const [modalShow8, setModalShow8] = React.useState(false);
    const [modalShow9, setModalShow9] = React.useState(false);
    const [modalShow10, setModalShow10] = React.useState(false);
    const [modalShow11, setModalShow11] = React.useState(false);
    const [modalShow12, setModalShow12] = React.useState(false);
    const [modalShow13, setModalShow13] = React.useState(false);
    const [modalShow14, setModalShow14] = React.useState(false);
    const [modalShow15, setModalShow15] = React.useState(false);
    const [modalShow16, setModalShow16] = React.useState(false);
    const [modalShow17, setModalShow17] = React.useState(false);
    const [modalShow18, setModalShow18] = React.useState(false);
    const [modalShow19, setModalShow19] = React.useState(false);
    const [modalShow20, setModalShow20] = React.useState(false);
    const [modalShow21, setModalShow21] = React.useState(false);
    const [modalShow22, setModalShow22] = React.useState(false);

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
                    Recognitions and Approvals
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
            <Breadcrumb.Item active>Recognitions and Approvals</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3} className="mobile_view_none11">
                        <h3 className="title">About us</h3>
                        <p className="links_about1"><Link to="/aboutus">About ISBMU University</Link></p>
                        <p className="links_about1"><Link to="/Missionvalues">Vision, Mission and Values</Link></p>
                        <p className="links_about1"><Link to="/Honorable">Hon'ble Visitor</Link></p>
                        <p className="links_about1"><Link to="/Honorablepatron">Hon'ble Patron</Link></p>
                        <p className="links_about1"><Link to="/Honorablechancellor">Hon'ble Chancellor</Link></p>
                        <p className="links_about1"><Link to="/Honorablevicechancellor">Hon'ble Vice-Chancellor</Link></p>
                        <p className="links_about1"><Link to="/Officialregistar"> Registrar</Link></p>
                        <p className="links_about1"><Link to="/Governingbody"> Governing Body</Link></p>
                        <p className="links_about1"><Link to="/Message">Messages of the Dignitaries</Link></p>
                        <p className="links_about1"><Link to="/Boardmanagement">Board of Management</Link></p>
                        <p className="links_about1"><Link to="/Academiccouncil">Academic Council</Link></p>
                        <p className="links_about1"><Link to="/BoardAdvisor">Board of Advisors</Link></p>
                        <p className="links_about1"><Link to="/Othercommunitie">Other Committees</Link></p>
                        <p className="links_about1"><Link to="/StatuesOrdinance">Statutes and Ordinances</Link></p>
                        <p className="links_about active"><Link to="/Recognisation">Recognitions and Approvals</Link></p>
                        <p className="links_about1"><Link to="/Awards">Awards</Link></p>
                        <p className="links_about1"><Link to="/Mediacoverage">Media Coverage</Link></p>
                        {/* <p className="links_about1"><Link to="/">Mou's &amp; Collaboration</Link></p> */}
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Recognitions and Approvals</h2>
                        <Accordion className="faqss anchoorr" defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Statutory Approvals</Accordion.Header>
                                <Accordion.Body>
                                    <Row className="modallss">
                                        <div className="item col-lg-3" >
                                            <img src={rec1} onClick={() => setModalShow(true)}/>
                                            <Std1 show={modalShow}onHide={() => setModalShow(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={rec2} />
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={rec3} onClick={() => setModalShow(true)}/>
                                            <Std3 show={modalShow}onHide={() => setModalShow(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={rec5}  onClick={() => setModalShow1(true)} />
                                            <Std4 show={modalShow1}onHide={() => setModalShow1(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={rec6}  onClick={() => setModalShow2(true)} />
                                            <Std5 show={modalShow2}onHide={() => setModalShow2(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={rec7} onClick={() => setModalShow3(true)} />
                                            <Std6 show={modalShow3}onHide={() => setModalShow3(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={rec8} onClick={() => setModalShow4(true)} />
                                            <Std7 show={modalShow4}onHide={() => setModalShow4(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={rec9} onClick={() => setModalShow5(true)} />
                                            <Std8 show={modalShow5}onHide={() => setModalShow5(false)}/>
                                        </div>
                                        </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Corporate Memberships & Recognitions</Accordion.Header>
                                <Accordion.Body>
                                        <Row>
                                            <Col ><img src={corporate1} onClick={() => setModalShow6(true)} className='corporate-img'></img></Col>
                                            <Cor1 show={modalShow6}onHide={() => setModalShow6(false)}/>
                                            <Col ><img src={corporate2} onClick={() => setModalShow7(true)} className='corporate-img'></img></Col>
                                            <Cor2 show={modalShow7}onHide={() => setModalShow7(false)}/>
                                            <Col ><img src={corporate3} onClick={() => setModalShow8(true)}  className='corporate-img'></img></Col>
                                            <Cor3 show={modalShow8}onHide={() => setModalShow8(false)}/>
                                        </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>International Associations & Memberships</Accordion.Header>
                                <Accordion.Body>
                                <Row className="modallss">
                                        <div className="item col-lg-3">
                                            <img src={international1}  onClick={() => setModalShow9(true)}/>
                                            <Int1 show={modalShow9}onHide={() => setModalShow9(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={international2} onClick={() => setModalShow10(true)} />
                                            <Int2 show={modalShow10}onHide={() => setModalShow10(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={cipp}  onClick={() => setModalShow11(true)}/>
                                            <Int3 show={modalShow11}onHide={() => setModalShow11(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={international3}  onClick={() => setModalShow14(true)}/>
                                            <Int4 show={modalShow14}onHide={() => setModalShow14(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={international4} onClick={() => setModalShow12(true)} />
                                            <Int5 show={modalShow12}onHide={() => setModalShow12(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={international5} onClick={() => setModalShow13(true)} />
                                            <Int6 show={modalShow13}onHide={() => setModalShow13(false)}/>
                                        </div>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>National Associations & Memberships</Accordion.Header>
                                <Accordion.Body>
                                <Row className="modallss">
                                        <div className="item col-lg-3">
                                            <img src={national1} onClick={() => setModalShow18(true)} />
                                            <Nat1 show={modalShow18}onHide={() => setModalShow18(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={national2}  onClick={() => setModalShow19(true)} />
                                            <Nat2 show={modalShow19}onHide={() => setModalShow19(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={national3}  onClick={() => setModalShow20(true)} />
                                            <Nat3 show={modalShow20}onHide={() => setModalShow20(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={national4}  onClick={() => setModalShow21(true)} />
                                            <Nat4 show={modalShow21}onHide={() => setModalShow21(false)}/>
                                        </div>
                                        <div className="item col-lg-3">
                                            <img src={national5}  onClick={() => setModalShow22(true)} />
                                            <Nat5 show={modalShow22}onHide={() => setModalShow22(false)}/>
                                        </div>
                                        </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Degree Equivalence</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col lg={5}><img src={degree1} onClick={() => setModalShow17(true)}></img></Col>
                                        <Deg1 show={modalShow17}onHide={() => setModalShow17(false)}/>
                                    </Row>
                               </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Quality Assurance & Compliances</Accordion.Header>
                                <Accordion.Body>
                                <Row>
                                    <img src={quality1} onClick={() => setModalShow16(true)} style={{width:'23%'}}></img>
                                        <Qua1 show={modalShow16}onHide={() => setModalShow16(false)}/>
                                    <img src={quality2} onClick={() => setModalShow15(true)} style={{width:'23%'}}></img>
                                        <Qua2 show={modalShow15}onHide={() => setModalShow15(false)}/>
                                </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Recognisation