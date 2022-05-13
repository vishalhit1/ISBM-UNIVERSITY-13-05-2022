import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb,Accordion} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "./managementbanner";
import perleg from "../../Images/per-lg.jpg"
import alpha from "../../Images/alpha.jpg"
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";

const Academicspartners =()=>{
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
                    Academic Partners
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
            <Breadcrumb.Item active>Academic Partners</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                <Col lg={3}>                  
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/Academicsphil'>Academic Philosophy</Link></p>
                        <p className="links_about active"><Link to='/Academicspartners'>Academic Partners</Link></p>
                        <p className="links_about1"><Link to='/Specialdevelopment'>Special Development Cells</Link></p>
                        <p className="links_about1"><Link to='/Downloadresources'>Online Resources</Link></p>
                        <p className="links_about1"><Link to='/Teachningmethod'>Teaching Methodology/Pedagogy</Link></p>
                        <p className="links_about1"><Link to='/MoocIsbm'>MOOC with ISBM University</Link></p>
                        <p className="links_about1"><Link to='/Diploma_in_hotel_management_and_catering_technology'>MOUs' and Collaborations</Link></p>
                        <p className="links_about1"><Link to='/Certificateemdps'>Certificate Programs and MDPs</Link></p>
                        <p className="links_about1"><Link to='/'>Student ERP</Link></p>
                    </Col>
                    <Col lg={9} className="acaemic_partner">
                        <h2 className="linkabout123">Academic Partners</h2>
                        <Accordion className="faqss accordion" defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Arean Foundation</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col lg={4}>
                                            <img src={alpha}/>
                                        </Col>
                                        <Col lg={8}>
                                            <p>
                                            Arean Foundation is a government registered NGO, determined to funding, footing and sustaining actual grassroots initiatives focused at providing learning and wellbeing to disadvantaged children. In this process, the foundation has achieved position as the first ever grant maker and changing the face of thousands of lives. Alpha Foundation aims at Welfare Reforms for underprivileged children, Social welfare and Health Welfare.
                                            It is an Indian NGO for Social Services, Indian Child Welfare Services, Child Education and Self Employment.
                                            </p>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Pearson Education</Accordion.Header>
                                <Accordion.Body>
                                <Row>
                                        <Col lg={4}>
                                            <img src={perleg}/>
                                        </Col>
                                        <Col lg={8}>
                                            <p>
                                            Educating 100 million people worldwide, Pearson Education is the world's biggest education company. Pearson Education's solutions cover a wide spectrum of subjects including business, technology, sciences, law and the humanities. They include books and resources that help students learn, teachers teach, and professionals evolve throughout their careers. The carefully designed learning tools help people around the world to expand their knowledge, develop their skills and realize their potential. The company is committed to provide quality content, assessment tools and educational services in all available media, spanning the learning curve from birth through university and beyond.
                                            </p>
                                            <p>
                                            Pearson Education India specializes in the publication of academic and reference books in the fields of computer science, engineering, business & management, professional & trade, higher education and competitive examination preparation books. Pearson Education India is also India's foremost publisher in the school segment (K-12), with book lists in English language teaching (ELT), the humanities, sciences and mathematics, from primary to senior secondary classes.
                                            </p>
                                            <p>
                                            With elaborate editorial facilities in Delhi, Chennai and Chandigarh, Pearson Education India covers the entire subcontinent and has specific divisions with experienced editorial teams catering to all levels and fields of education. The teams create indigenous publishing programmes to meet local market needs, and undertake customized publishing for schools, universities and other institutions. Pearson Education India also works closely with authors and customers through strong editorial development processes and innovations in sales and marketing.
                                            </p>
                                        </Col>
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

export default Academicspartners