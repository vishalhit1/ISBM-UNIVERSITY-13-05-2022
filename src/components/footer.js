import React,{ useEffect } from "react";
import { Container,Row,Col} from "react-bootstrap";
import google from '../Images/google.svg';
import whatsapp from '../Images/whatsapp.svg';
import apple from '../Images/apple.svg';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaSearchLocation } from 'react-icons/fa';
import { Link } from "react-router-dom";
import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';
import instagram from '../Images/instagram.png';
import linkedin from '../Images/linkedin.png';
import youtube from '../Images/youtube.png';
import pinterest from '../Images/pinterest.png';
import Enquiry_now from "../components/enquiry_now";

const Footer =()=>{
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
        <a href="https://api.whatsapp.com/send?phone=+919373199999"><img id="whatsappp" src={whatsapp} /></a>
        <button onClick={() => setModalShow(true)} className="trigger_popup border-0"><span>Enquire Now</span></button>
        <Enquiry_now show={modalShow}onHide={() => setModalShow(false)}/>
        <div className="sticky-social">
            <ul className="social">
                <li className="fb">
                <a href="https://www.facebook.com/isbmuniversity/" target="_blank">
                    <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                </li>
                <li className="insta">
                <a href="https://instagram.com/isbm_university?utm_medium=copy_link" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                </li>
                <li className="linkedin">
                <a href="https://www.linkedin.com/school/13211303/admin/" target="_blank">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                </li>
                <li className="twitter">
                <a href="https://twitter.com/ISBMUniversity" target="_blank">
                    <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                </li>
                <li className="pin">
                <a href="https://www.pinterest.ca/isbmuniversity/_created/" target="_blank">
                    <i className="fa fa-pinterest-p" aria-hidden="true" />
                </a>
                </li>
                <li className="you">
                <a href="https://www.youtube.com/c/ISBMUniversity" target="_blank">
                    <i className="fa fa-youtube" aria-hidden="true" />
                </a>
                </li>
                
            </ul>
            </div>
                        {/* <Container className="contact_us footerr" style={{marginTop:"30px"}}>
                            <h4 className="text-color">Visit at Campus</h4>
                            <Row>
                            <Col lg={3} >
                            <iframe async src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218845.76449413784!2d82.20318066830421!3d20.83359713034619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a25febf2368cb33%3A0x8df9cf351c0cd8d5!2sISBM+University%2C+Chhatisgarh%2C+Gariyaband-Chhura-Khomakhan+Rd%2C+Nawapara%2C+Chhattisgarh+493996!5e0!3m2!1sen!2sin!4v1477458743062" width="100%" height="195" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                            <h6 class="text-center course-1 text-white">Google Map</h6>
                            </Col>
                            <Col lg={6}>
                            <h6 className="address">Address</h6>
                            <p>Nawapara (Kosmi), Block & Tehsil- Chhura, <br/>District-Gariyaband,Chhattisgarh- 493 996, India.</p>
                            <h6 className="address">Mobile Number</h6>
                            <p>+91-9373199999/+91-9109333333 </p>
                            <h6 className="address">Email</h6>
                            <p>info@isbmuniversity.edu.in</p>
                            </Col>  
                            <Col lg={9}>
                            <div className="footer_bottom text-center">
                                <Row>
                                    <Col lg={4}>
                                    <div className="abcd"> 
                                    <div className="fbox-icon">
                                    <FaSearchLocation size={50} />
									</div>
                                        <span className="subtitle">
                                        Nawapara (Kosmi), Block & Tehsil-Chhura, District-Gariyaband, Chhattisgarh
                                        </span>
                                    </div>
                                    <h6 class="text-center course-1 text-white">Our Campus</h6>
                                    </Col>
                                    <Col lg={4}>
                                    <div className="abcd"> 
                                    <div className="fbox-icon">
                                    <BsTelephoneOutboundFill size={50} />
									</div>
                                            <a href="tel:+919373199999"><span className="subtitle">
                                                +91-9373199999
                                            </span></a>
                                            <a href="tel:+919109333333"><span className="subtitle" style={{marginBottom:"15px"}}>
                                                +91-9109333333
                                            </span></a>
                                    </div>
                                    <h6 class="text-center course-1 text-white">Contact Us</h6>
                                    </Col>
                                    <Col lg={4}>
                                    <div className="abcd"> 
                                    <div className="fbox-icon">
                                    <HiOutlineMailOpen size={50} />
									</div>
                                            <span className="subtitle" style={{marginBottom:"40px"}}>
                                            <a href="mailto:info@isbmuniversity.edu.in">info@isbmuniversity.edu.in</a>
                                            </span>
                                    </div>
                                    <h6 class="text-center course-1 text-white">Email Us</h6>
                                    </Col>
                                </Row>
                            </div>
                            </Col>
                            </Row>
                        </Container> */}
                        <div className="abcds_footer">
                        <Container className="Footer">
                            
                            <Row>
                                <Col></Col>
                            </Row>
                            <Row className="justify-content-center">
                            <Col lg={3} >
                            <h4 className="text-color" >About Us</h4>
                            <ul>
                                <li><Link to='/aboutus' className="alink">About ISBM University  </Link></li>
                                <li><Link to='/Missionvalues' className="alink">Vision, Mission and Values</Link></li>
                                <li><Link to='/Honorable' className="alink">Hon'ble Visitor</Link></li>
                                <li><Link to='/Honorablepatron' className="alink">Hon'ble Patron</Link></li>
                                <li><Link to='/Honorablechancellor' className="alink">Hon'ble Chancellor</Link></li>
                                <li><Link to='/Honorablevicechancellor' className="alink">Hon'ble Vice-Chancellor</Link></li>
                                <li><Link to='/Officialregistar' className="alink">Registrar</Link></li>
                                <li><Link to='/Governingbody' className="alink">Governing Body</Link></li>
                                <li><Link to='/Boardmanagement' className="alink">Board of Management</Link></li>
                                <li><Link to='/Academiccouncil' className="alink">Academic Council</Link></li>
                                <li><Link to='/BoardAdvisor' className="alink">Board of Advisors</Link></li>
                                <li><Link to='/Othercommunitie' className="alink">Other Committees</Link></li>
                                <li><Link to='/Message' className="alink">Messages of the Dignitaries</Link></li>
                                <li><Link to='/StatuesOrdinance' className="alink">Statutes and Ordinances</Link></li>
                                <li><Link to='/Recognisation' className="alink">Recognitions and Approvals</Link></li>
                                <li><Link to='/Awards' className="alink">Awards</Link></li>
                                <li><Link to='/Mediacoverage' className="alink">Media Coverage</Link></li>
                            </ul>
                            </Col>              
                            <Col lg={3} >
                            <h4 className="text-color">Our Schools</h4>
                            <ul>
                                <li><Link to='/SchoolCommerce'>School of Commerce</Link></li>
                                <li><Link to='/Schoolmanagement'>School of Management</Link></li>
                                <li><Link to='/Schoolscience'>School of Science</Link></li>
                                <li><Link to='/Schoolengrtech'>School of Engineering and Technology</Link></li>
                                <li><Link to='/Schooloflibrary'>School of Library and Information Science</Link></li>
                                <li><Link to='/Journalismandmass'>School of Journalism and Mass Communication</Link></li>
                                <li><Link to='/Schoollaws'>School of Law</Link></li>
                                <li><Link to='/Schooldesign'>School of Design</Link></li>
                                <li><Link to='/Schoolofit'>School of Information and Technology</Link></li>
                                <li><Link to='/Schoolofpharma'>School of Pharmacy (Proposed)</Link></li>
                                <li><Link to='/Schoolofyoga'>School of Yoga and Naturopathy</Link></li>
                                <li><Link to='/Industryintegrated'>Industry Integrated Programs</Link></li>
                                <li><Link to='/Research'>Research</Link></li>
                                <li><Link to=''>RTI</Link></li>
                            </ul>
                            </Col>  
                            <Col lg={3} >
                            <h4 className="text-color">Admissions</h4>
                            <ul>
                                <li><Link to='/programs&eligibilty'>Programmes and Eligibilities</Link></li>
                                <li><Link to='/after-10th'>Programmes By Qualification</Link></li>
                                <li><Link to='/industryintegrated'>Industry Integrated Programs</Link></li>
                                <li><Link to='/skilldevelopment'>Skill Development</Link></li>
                                <li><Link to='/applyonline'>Apply Online</Link></li>
                                <li><Link to='/downloads'>Download and Resources</Link></li>
                                <li><Link to=''>Courses finder</Link></li>
                                <li><Link to='/paymentprocedure'>Payment Procedure Guidelines</Link></li>
                                <li><Link to='/admissionprocedure'>Admission Procedure Guidelines</Link></li>
                                <li><Link to='/Payfeesonline'>Online Payment</Link></li>
                                <li><Link to='/admissionhelpdesk'>Admission Helpdesk</Link></li>                        
                            </ul>
                            </Col>  
                            <Col lg={3} >
                            <h4 className="text-color">Academics</h4>
                            <ul>
                                <li><Link to='/Academicsphil'>Academic Philosophy</Link></li>
                                <li><Link to='/Academicspartners'>Academic Partners</Link></li>
                                <li><Link to='/Specialdevelopment'>Special Development Cells</Link></li>
                                <li><Link to='/Downloadresources'>Online Resources</Link></li>
                                <li><Link to='/Teachningmethod'>Teaching Methodology/Pedagogy</Link></li>
                                <li><Link to='/moocisbm'>MOOC with ISBM University</Link></li>
                                <li><Link to=''>MOUs' and Collaborations</Link></li>
                                <li><Link to='/Certificateemdps'>Certificate Programs and MDPs</Link></li>
                                <li><Link to=''>Student ERP</Link></li>                    
                            </ul>
                            </Col>   
                            </Row>
                </Container>
                </div>
                <div className="Socials">
                    <Container>
                    <Row>
                        {/* <Col lg={6} className="socil sasaas">
                            <a href="https://www.facebook.com/isbmuniversity"><img src={facebook}/></a>
                            <a href="https://www.instagram.com/isbm_university/"><img src={instagram}/></a>
                            <a href="https://in.linkedin.com/school/isbmuniversity"><img src={linkedin}/></a>
                            <a href="https://twitter.com/ISBMUniversity"><img src={twitter}/></a>
                            <a href="https://www.youtube.com/c/ISBMUniversity"><img src={youtube}/></a>
                            <a href="https://www.pinterest.com/isbmuniversity/"><img src={pinterest}/></a>
                        </Col> */}

                        <Col lg={6} className="socil sasaas">
                            <a href="https://www.facebook.com/isbmuniversity/"><img src={facebook}/></a>
                            <a href="https://instagram.com/isbm_university?utm_medium=copy_link"><img src={instagram}/></a>
                            <a href="https://www.linkedin.com/school/13211303/admin/"><img src={linkedin}/></a>
                            <a href="https://twitter.com/ISBMUniversity"><img src={twitter}/></a>
                            <a href="https://www.youtube.com/c/ISBMUniversity"><img src={youtube}/></a>
                            <a href="https://www.pinterest.ca/isbmuniversity/_created/"><img src={pinterest}/></a>
                        </Col>
                        <Col lg={6} className="socialplay">
                            {/* <img src={apple} /> */}
                            <a href="https://play.google.com/store/apps/details?id=com.hit.isbmuniversity&hl=en&gl=US"><img src={google} /></a>
                        </Col>
                    </Row>
                    </Container>
                </div>
                <div className="copyrights">
                    <Container>
                    <Row>
                        <Col lg={12} className="socil">
                            <p>
                            Copyright © <a href="https://isbmuniversity.edu.in/">ISBM University,</a> 2016. All Rights Reserved
                            </p>
                        </Col>
                    </Row>
                    </Container>
                </div>
        </>
    )
}
export default Footer;