import { Container,Row,Col} from "react-bootstrap";
import google from './Images/google.svg';
import apple from './Images/apple.svg';
import { BsFacebook } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import './App.css';
const Footer =()=>{
    return(
        <>
            <Container className="Footer">
                <Row>
                    <Col></Col>
                </Row>
                <Row className="justify-content-center">
                <Col lg={2} >
                <h4 className="text-color" >About Us</h4>
                <ul>
                    <li><a href="#" className="alink">About ISBM University  </a></li>
                    <li><a href="#" className="alink">Vision, Mission and Values</a></li>
                    <li><a href="#" className="alink">Hon'ble Visitor</a></li>
                    <li><a href="#" className="alink">Hon'ble Patron</a></li>
                    <li><a href="#" className="alink">Hon'ble Chancellor</a></li>
                    <li><a href="#" className="alink">Hon'ble Vice-Chancellor</a></li>
                    <li><a href="#" className="alink">Officiating Registrar</a></li>
                    <li><a href="#" className="alink">Governing Body</a></li>
                    <li><a href="#" className="alink">Board of Management</a></li>
                    <li><a href="#" className="alink">Academic Council</a></li>
                    <li><a href="#" className="alink">Board of Advisors</a></li>
                    <li><a href="#" className="alink">Other Committees</a></li>
                    <li><a href="#" className="alink">Messages of the Dignitaries</a></li>
                    <li><a href="#" className="alink">Statutes and Ordinances</a></li>
                    <li><a href="#" className="alink">Recognitions and Approvals</a></li>
                    <li><a href="#" className="alink">Awards</a></li>
                    <li><a href="#" className="alink">Media Coverage</a></li>
                </ul>
                </Col>              
                <Col lg={2} >
                <h4 className="text-color">Our Schools</h4>
                <ul>
                    <li><a href="#">School of Commerce</a></li>
                    <li><a href="#">School of Management</a></li>
                    <li><a href="#">School of Science</a></li>
                    <li><a href="#">School of Engineering and Technology</a></li>
                    <li><a href="#">School of Library and Information Science</a></li>
                    <li><a href="#">School of Journalism and Mass Communication</a></li>
                    <li><a href="#">School of Law</a></li>
                    <li><a href="#">School of Design</a></li>
                    <li><a href="#">School of Information and Technology</a></li>
                    <li><a href="#">School of Pharmacy (Proposed)</a></li>
                    <li><a href="#">School of Yoga and Naturopathy</a></li>
                    <li><a href="#">Industry Integrated Programs</a></li>
                    <li><a href="#">Research</a></li>
                    <li data-toggle="modal" data-target="#exampleModal"><a href="#">RTI</a></li>
                </ul>
                </Col>  
                <Col lg={2} >
                <h4 className="text-color">Admissions</h4>
                <ul>
                    <li><a href="programmes-and-eligibilities.php">Programmes and Eligibilities</a></li>
                    <li><a href="programmes-by-qualification.php">Programmes By Qualification</a></li>
                    <li><a href="industry-integrated-programs.php">Industry Integrated Programs</a></li>
                    <li><a href="skill-development.php">Skill Development</a></li>
                    <li><a href="apply-online.php">Apply Online</a></li>
                    <li><a href="download-and-resources.php">Download and Resources</a></li>
                    <li><a href="courses-finder.php">Courses finder</a></li>
                    <li><a href="payment-procedure-guidelines.php">Payment Procedure Guidelines</a></li>
                    <li><a href="admission-procedure-guidelines.php">Admission Procedure Guidelines</a></li>
                    <li><a href="pay-fees-online.php">Online Payment</a></li>
                    <li><a href="admission-helpdesk.php">Admission Helpdesk</a></li>                        
                </ul>
                </Col>  
                <Col lg={2} >
                <h4 className="text-color">Academics</h4>
                <ul>
                    <li><a href="academic-philosophy.php">Academic Philosophy</a></li>
                    <li><a href="academic-partner.php">Academic Partners</a></li>
                    <li><a href="special-development-cells.php">Special Development Cells</a></li>
                    <li><a href="online-resources.php">Online Resources</a></li>
                    <li><a href="teaching-methodology-pedagogy.php">Teaching Methodology/Pedagogy</a></li>
                    <li><a href="mooc-with-isbm-university.php">MOOC with ISBM University</a></li>
                    <li><a href="mous-and-collaborations.php">MOUs' and Collaborations</a></li>
                    <li><a href="certificate-programs-and-mdps.php">Certificate Programs and MDPs</a></li>
                    <li><a href="http://95.217.28.97/">Student ERP</a></li>                    
                </ul>
                </Col>
                <Col lg={2} >
                <h4 className="text-color">Contact Us</h4>
                <iframe async src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218845.76449413784!2d82.20318066830421!3d20.83359713034619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a25febf2368cb33%3A0x8df9cf351c0cd8d5!2sISBM+University%2C+Chhatisgarh%2C+Gariyaband-Chhura-Khomakhan+Rd%2C+Nawapara%2C+Chhattisgarh+493996!5e0!3m2!1sen!2sin!4v1477458743062" width="100%" height="150" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                <h6>ISBM University,</h6>
                <p>Nawapara (Kosmi), Block & Tehsil- Chhura,District- Gariyaband,Chhattisgarh- 493 996, India.</p>
                <p> Contact Us : +91-9373199999/ +91-9109333333 E-mail : info@isbmuniversity.edu.in</p>
                </Col>    
                </Row>  
            </Container>
            <div className="Socials">
                <Container>
                <Row>
                    <Col lg={6} className="socil">
                        <BsFacebook size={30} />
                        <BsGoogle size={30} />
                        <BsTwitter size={30} />
                        <BsYoutube size={30} />
                        <BsPinterest size={30} />
                    </Col>
                    <Col lg={6} className="socialplay">
                        <img src={apple} />
                        <img src={google} />
                    </Col>
                </Row>
                </Container>
            </div>
            <div className="copyrights">
                <Container>
                <Row>
                    <Col lg={12} className="socil">
                        <p>
                        Copyright © ISBM University, 2016. All Rights Reserved
                        </p>
                    </Col>
                </Row>
                </Container>
            </div>
        </>
    )
}
export default Footer;