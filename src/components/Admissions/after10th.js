import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb,Tab,Tabs} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link} from 'react-router-dom';
import eggss11 from '../../Images/eggs1.PNG';
import Enquiry_now from "../enquiry_now";
import Allinone from '../commanfiles/allinone';
const After10th =()=>{
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
                    After 10th
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                Admissions
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Programmes By Qualification</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                <Col lg={3} className="order-md-1">
                    {/* <ul className="abcd1111">
                        <li><a href="#"><img src={eggss11} /><span className="rating-box" style={{width:"70%"}}></span>Labs</a></li>
                        <li><a href="#"><img src={eggss11} /><span className="rating-box" style={{width:"70%"}}></span><time datetime="2017-02-14">Facilities</time></a></li>
                        <li><a href="#"><img src={eggss11} /><span className="rating-box" style={{width:"70%"}}></span>Library</a></li>
                        <li><a href="#"><img src={eggss11} /><span className="rating-box" style={{width:"70%"}}></span>Sports &amp; Events</a></li>
                        <li><a href="#"><img src={eggss11} /><span className="rating-box" style={{width:"70%"}}></span>Photo Gallery</a></li>
                        <li><a href="#"><img src={eggss11} /><span className="rating-box" style={{width:"70%"}}></span>School Notification</a></li>

                    </ul> */}

                        <h4 className="programees">Schools</h4>
                        <ul className="abcd1111">
                        <li><Link to='/SchoolCommerce'>School of Commerce</Link></li>
                            <li><Link to='/Schoolmanagement'>School of Management </Link></li>
                            <li><Link to='/Schoolscience'>School of Science</Link></li>
                            <li><Link to='/Schoolartshuman'>School of Arts and Humanities</Link></li>
                            <li><Link to='/Schoolengrtech'>School of Engineering and Technology</Link></li>
                            <li><Link to='/Schooloflibrary'>School of Library and Information Science</Link></li>
                            <li><Link to='/Journalismandmass'>School of Journalism and Mass Communication</Link></li>
                            <li><Link to='/Schoollaws'>School of Law</Link></li>
                            <li><Link to='/Schooldesign'>School of Design</Link></li>
                            <li><Link to='/Schoolofit'>School of Information and Technology </Link></li>
                            <li><Link to='/Schoolofpharma'>School of Pharmacy</Link></li>
                            <li><Link to='/Schooloflifescience'>School of Life Science</Link></li>
                            <li><Link to='/Schoolofyoga'>School of Yoga and Naturopathy</Link></li>
                            <li><Link to='/Schoolofeducation'>School of Education</Link></li>
                            <li><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
                        </ul>      
                    </Col>
                    <Col lg={9} className="order-md-2">
                        <h2 className="linkabout123">Programmes By Qualification</h2>
                        <p className="detail_text">We provide management education with innovative applied 
                        research and practice to educate business leaders of tomorrow. Our graduates make a
                         difference by creating real value for society by emphasizing a focus on a holistic 
                         multi-disciplinary, and multi-cultural approach to learning.</p>
                        <p className="detail_text">Interaction with business leaders and entrepreneurs, 
                        industrial visits and workshops, prepares the students to be leaders who can address 
                        the most urgent and challenging problems that the world is facing today.
                        </p>
                        <p className="detail_text">
                        Personality enhancement and practical experience through a continuous process of 
                        industry-academia interface are facilitated, thereby making them socially responsible,
                         culturally aware and ethically better citizens of today and tomorrow.
                        </p>
                        <Tabs defaultActiveKey="home" transition={false} className="acds jbhjbghb" id="noanim-tab-example">
                            <Tab eventKey="home" title="After-10th">
                                <Row className="tenth">
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            <Link to="/">
                                                Diploma in Civil Engineering
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Diploma in Computer Science Engineering
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Diploma in Electrical and Electronics Engineering
                                            </Link>
                                        </li>	
                                        <li>
                                            <Link to="/">
                                                Diploma in Mechanical Engineering
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Diploma in Mining Engineering
                                            </Link>
                                        </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="profile" title="After-12th">
                            <Row className="tenth">
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            <Link to="/bachelors-of-commerce">
                                                Bachelors in Commerce (B.Com) 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Bachelors_in_business_administration">
                                                Bachelors in Business Administration (BBA) 
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/bachelors-of-science">
                                                Bachelors in Science (B.Sc)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Bachelor_of_science_in_computer_science">
                                                Bachelor of Science in Computer Science (B.SC-Computer Science)
                                            </Link>
                                        </li>	

                                        <li>
                                            <Link to="/Bachelor_of_science_in_fashion_designing">
                                                Bachelor of Science in Fashion Designing (B.SC-FD) 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Bachelor_of_science_in_interior_designing">
                                                Bachelor of Science in Interior Design (B.Sc-ID) 
                                            </Link>
                                        </li>																	
                                    </ul>
                                    </Col>
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            <Link to="/bachelors-social-work">
                                                Bachelor of Social Work (BSW)
                                            </Link>
                                        </li>	

                                        <li>
                                            <Link to="/bachelors-of-arts">
                                                Bachelor of Arts (B.A) 
                                            </Link>
                                        </li>		

                                        <li>
                                            <Link to="/Bachelor_of_computer_applications">
                                                Bachelor of Computer Applications (BCA) 
                                            </Link>
                                        </li>	

                                        <li>
                                            <Link to="/Bachelor_of_science_in_information_technology">
                                                Bachelor of Science in Information Technology (B.Sc.[I.T.]) 
                                            </Link>
                                        </li>		
                                        <li>
                                            <Link to="/Bachelor_of_library_and_information_science">
                                                Bachelor of Library and Information Science (B.Lib.)
                                            </Link>
                                        </li>	

                                        <li>
                                            <Link to="/Bachelor_of_arts_in_journalism_and_mass_communication">
                                                Bachelor of Arts in Journalism and Mass Communication (BA-JMC)
                                            </Link>
                                        </li>																	
                                    </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="Undergraduate" title="After Graduation">
                            <Row className="tenth">
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            <Link to="/masters-in-commerce">
                                                Masters in Commerce (M.Com) 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Masters_in_business_administration">
                                                Masters in Business Administration (MBA)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/masters-in-science">
                                                Masters in Science (M.Sc)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Executive_masters_in_business_administration">
                                                Executive Masters in Business Administration (EMBA)
                                            </Link>
                                        </li>	
                                        <li>
                                            <Link to="/Post_graduate_diploma_in_business_administration">
                                                Post Graduate Diploma in Business Administration (PGDBA)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Master_of_computer_applications">
                                                Master of Computer Applications (MCA) 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Post_graduate_diploma_in_computer_application">
                                                Post Graduate Diploma In Computer Application (PGDCA) 
                                            </Link>
                                        </li>																	
                                    </ul>
                                    </Col>
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            <Link to="/Master_of_science_in_information_technology">
                                                Master of Science in Information Technology (M.Sc.[I.T.]) 
                                            </Link>
                                        </li>	

                                        <li>
                                            <Link to="/Master_of_science_in_computer_science">
                                                Masters of Science in Computer Science (M.SC-Computer Science)
                                            </Link>
                                        </li>																	
                                        <li>
                                            <Link to="/masters-social-work">
                                                Master of Social Work (MSW) 
                                            </Link>
                                        </li>	
                                        <li>
                                            <Link to="/masters-of-arts">
                                                Master of Arts (M.A)
                                            </Link>
                                        </li>	
                                        <li>
                                            <Link to="/Master_of_library_and_information_science">
                                                Master of Library and Information Science (M.Lib.) 
                                            </Link>
                                        </li>	
                                        <li>
                                            <Link to="/Master_of_arts_in_journalism_and_mass_communication">
                                                Master of Arts in Journalism and Mass Communication (MA-JMC)
                                            </Link>
                                        </li>	
                                    </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="Postgraduate" title="After Postgraduate">
                            <Row className="tenth">
                                    <Col lg={6}>
                                    <ul className="inner">
                                        <li>
                                            <Link to="/phd-mphil-commerce">
                                                Ph.D. &amp; M.Phil. Program (Commerce)
                                            </Link>
                                        </li>															
                                        <li>
                                            <Link to="/Phd_mphil_program_in_management">
                                                Ph.D. &amp; M.Phil. Program (Management)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/phd-mphil-science">
                                                Ph.D. &amp; M.Phil. Program (Science)
                                            </Link>
                                        </li>
                                    </ul>
                                    </Col>
                                    <Col lg={6}>
                                    <ul className="inner">
                                    <li>
                                            <Link to="/phd-mphil-arts">
                                                Ph.D. &amp; M.Phil. Program (Arts and Humanities)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Phd_program_information_technology">
                                                Ph.D. &amp; M.Phil. Program (Information Technology)
                                            </Link>
                                        </li>															
                                        <li>
                                            <Link to="/Phd_mhil_program">
                                                Ph.D. &amp; M.Phil. Program (Law)
                                            </Link>
                                        </li>
                                        																	
                                    </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            </Tabs> 
                    </Col>     
                </Row>
            </Container>
            <Allinone/>
            <Footer/>
        </div>
    )
}

export default After10th