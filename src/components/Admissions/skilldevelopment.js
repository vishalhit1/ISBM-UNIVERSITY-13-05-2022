import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb,Tab,Tabs} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import modi from '../../Images/pm-modi.jpg'
import fire from '../../Images/fire-sefty.jpg';
import img1 from '../../Images/1.png';
import img2 from '../../Images/2_2.png';
import img3 from '../../Images/3_2.png';
import img4 from '../../Images/4_2.png';
import img5 from '../../Images/5_2.png';
import img6 from '../../Images/6_2.png';
import img7 from '../../Images/7_2.png';
import img8 from '../../Images/8_2.png';
import img9 from '../../Images/9_2.png';
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

const SkillDevelopment = ()=>{
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
                    Skill Development
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
                <Breadcrumb.Item active>Skill Development</Breadcrumb.Item>
                </Breadcrumb>

                        <h2 className="linkabout123">Skill Development</h2>
                        <h5 className="linkabout">We make VOCATIONAL TRAINING inspirational to transform INDIA into the SKILL CAPITAL of the world.</h5>
                        <p className="detail_text">In partnership with the Ministry of Skill Development &
                         Entrepreneurship (MSDE) and National Skill Development Corporation (NSDC), we have 
                         launched a state-of-the-art Model Training Centre (MTC), called Pradhan Mantri
                          Kaushal Kendra (PMKK) in Gariyabandh, Chhattisgarh.</p>
                          <img src={modi}></img>
                          <img src={fire} className='ms-4'></img>
                        <p className="detail_text" style={{marginTop:"20px"}}>We in association with the Ministry and NSDC, are playing 
                        a pivotal role in creating benchmark institutions that demonstrate aspirational value
                         for competency based skill development training by focusing on elements of quality, 
                         sustainability and connect with youth. By addressing the challenges of unemployment 
                         and ensuring gainful employment for the youth of the state, we are enabling and 
                         mobilizing Chhattisgarh youth to make them employable and work ready.
                        </p>
                        <p className="detail_text">
                            The Pradhan Mantri Kaushal Kendra run by us in Gariyabandh, Chhattisgarh will 
                            be offering several courses in Agriculture i.e. Gardening, Micro-irrigation 
                            Technician and Assistant Electrician under Civil construction and Plumbing and 
                            Sewing Machine Operator. These courses have been approved by the Ministry of Skill
                             Development & Entrepreneurship (MSDE).
                        </p>
                        <p className="detail_text">
                            We are laying special emphasis on enhancing the personality and soft skills of 
                            candidates to enhance their employability quotient and entrepreneurship skills. 
                            Moreover, additional investment has been made to impart training on 
                            entrepreneurship skills. Besides a recreation zone has been set up alongwith 
                            a special interview cell and an up-to-date library. Additionally to further 
                            motivate and provide confidence to the candidates, a counselling cum placement 
                            cell has been made part of the Kaushal Kendra.
                        </p>
                        <p className="detail_text">
                            Skills development is now a national priority and India has a long way to go in 
                            realizing the benefits of its demographic dividend. While the state contributed 
                            heavily towards the green revolution and made nation self-sufficient in food 
                            crops production in 1960’s, there still remain large diaspora of unemployed youth 
                            at any point of time. This is due to the dearth of industry specific skills and 
                            domain knowledge in such mainstream education. To bridge this employability gap, 
                            we are providing livelihood training for rural youth to prepare them with hands-on 
                            skills required for self or wage employment to skill and make them job-ready.
                        </p>
                        <p className="detail_text">
                            ISBM University Offers:
                        </p>
                        <ul className='skill-a'>
                            <li><a href="https://www.isbmuniversity.edu.in/soft-skills.php" id="ulli" target="_blank">Soft Skill Development</a></li>
                            <li><a href="https://www.isbmuniversity.edu.in/computer-hardware-assistant.php" id="ulli" target="_blank">Computer Hardware Assistant</a></li>
                            <li><a href="https://www.isbmuniversity.edu.in/computer-network-assistant.php" id="ulli" target="_blank">Computer Network Assistant</a></li>
                            <li><a href="https://www.isbmuniversity.edu.in/risk-management-and-insurance.php" id="ulli" target="_blank">Risk Management &amp; Insurance</a></li>
                            <li><a href="https://www.isbmuniversity.edu.in/retail-management.php" id="ulli" target="_blank">Retail Management</a></li>
                            <li><a href="https://www.isbmuniversity.edu.in/managing-retail.php" id="ulli" target="_blank">Managing Retail</a></li>
                            <li><a href="https://www.isbmuniversity.edu.in/financial-services.php" id="ulli" target="_blank">Financial Services</a></li>
                            <li><a href="https://www.isbmuniversity.edu.in/general-bank-management.php" id="ulli" target="_blank">General Bank Management</a></li>
                        </ul>

<OwlCarousel margin={20} autoplay nav={false} dots={false} items={3} touchDrag={true} lazyLoad={true}
         responsive={state.responsive}>
            <div className="item">
                <img src ={img1} className='img-fluid'></img>
            </div>
            <div className="item">
                <img src = {img2} className='img-fluid'></img>
            </div>
            <div className="item">
                <img src = {img3} className='img-fluid '></img>
            </div>
            <div className="item">
                <img src ={img4} className='img-fluid'></img>
            </div>
            <div className="item">
                <img src = {img5} className='img-fluid'></img>
            </div>
            <div className="item">
                <img src = {img6} className='img-fluid'></img>
            </div>
            <div className="item">
                <img src ={img7} className='img-fluid'></img>
            </div>
            <div className="item">
                <img src = {img8} className='img-fluid'></img>
            </div>
            <div className="item">
                <img src = {img9} className='img-fluid'></img>
            </div>

        </OwlCarousel>

            <h6 className='mt-5'>For TRAINING related queries, contact:</h6>
            <p>Mr. Ravi Singh:-- +91 9926808100</p>

            <h6>PMKK Gariyabandh Chhattisgarh,</h6>
            <p>Village-Nawapara (Kosmi), Block & Tehsil-Chhura, District: Gariyaband, Chhattisgarh - 493 996.</p>
            <p className="detail_text">
                Skills Development:
            </p>
            <ul className='skill-a'>
                <li><a href="#" id="ulli" target="_blank">Excel</a></li>
                <li><a href="#" id="ulli" target="_blank">English Speaking</a></li>
                <li><a href="#" id="ulli" target="_blank">Social Media</a></li>
                <li><a href="#" id="ulli" target="_blank">Advance English</a></li>
                <li><a href="#" id="ulli" target="_blank">Advance Tally</a></li>
                <li><a href="#" id="ulli" target="_blank">GST</a></li>
                <li><a href="#" id="ulli" target="_blank">Power Point</a></li>
                <li><a href="#" id="ulli" target="_blank">Word</a></li>
                <li><a href="#" id="ulli" target="_blank">Interview Skills</a></li>
                <li><a href="#" id="ulli" target="_blank">Sales</a></li>
                <li><a href="#" id="ulli" target="_blank">Iphone Features</a></li>
                <li><a href="#" id="ulli" target="_blank">Android Features</a></li>
            </ul>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default SkillDevelopment;