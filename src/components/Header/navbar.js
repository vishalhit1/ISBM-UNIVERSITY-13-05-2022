import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown, Navbar, Container, Row, Col, Offcanvas, Button, Carousel } from 'react-bootstrap';
import banner_img from '../../Images/banner.jpg';
import banner_2 from '../../Images/banner-2.jpg';
// import logo from '../../Images/isbm-university.png';
import academy from '../../Images/academic-signup.png';
import admission from '../../Images/ad3.jpg';
import research from '../../Images/research.jpg'
import placement from '../../Images/placement.jpg';
import { ImCross } from 'react-icons/im';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from '../../Images/isbm-university.png';

const NavigationBar = () => {

    const [navbar, setNavbar] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY >= 10) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])


    return (
        <React.Fragment>

            <div className='nav-bg' >
                <div className='nav-bg' >
                    <nav className="navbar navbar-expand-lg navbar-light main">
                        <div className="container-fluid">
                            <Navbar.Brand href="#home"><Link to="/"><img src={logo} className='logo' style={{height:'100px'}}></img></Link></Navbar.Brand>
                            {/* <Navbar.Brand href="#home"><Link to="/"><img src={logo} height='100px' className='logo' className={`logonav.navbar.navbar-expand-lg.navbar-light.main ${navbar && '.navbar.navbar-expand-lg.navbar-light.main1'}`}></img></Link></Navbar.Brand> */}
                            <button className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto me-auto">
                                    <li className="nav-item dropdown position-static me-3">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdown" role="button">About isbmu</a>
                                        <ul className="dropdown-menu megamenu" >
                                            <div className="row">
                                                <li className="col-md-3">
                                                    <ul className='inner-ul'>
                                                        <li>
                                                            <Link to="/about-isbm-university.php">About ISBMU University</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Missionvalues">Vision, Mission and Values</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Honorable">Hon'ble Visitor</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Honorablepatron">Hon'ble Patron</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Honorablechancellor">Hon'ble Chancellor</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Honorablevicechancellor">Hon'ble Vice-Chancellor</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-md-3" >
                                                    <ul className='inner-ul'>

                                                        <li>
                                                            <Link to="/Officialregistar"> Register</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Governingbody"> Governing Body</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Boardmanagement">Board of Management</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Academiccouncil">Academic Council</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/BoardAdvisor">Board of Advisors</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Othercommunitie">Other Committees</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-md-3">
                                                    <ul className='inner-ul'>

                                                        <li>
                                                            <Link to="/Message">Messages of the Dignitaries</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/StatuesOrdinance">Statutes and Ordinances</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Recognisation">Recognitions and Approvals</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Awards">Awards</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Mediacoverage">Media Coverage</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </div>
                                        </ul>


                                    </li>
                                    <li className="nav-item dropdown position-static me-3">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdown" role="button">ACADEMICS</a>
                                        <ul className="dropdown-menu megamenu">
                                            <div className="row">
                                                <li className="col-md-3">
                                                    <ul className='inner-ul'>
                                                        <li>
                                                            <Link to="/SchoolCommerce">School of Commerce</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schoolmanagement">School of Management</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schoolscience">School of Science</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schoolartshuman">School of Arts and Humanities</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schoolengrtech">School of Engineering and Technology</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schooloflibrary">School of Library and Information Science</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Journalismandmass">School of Journalism and Mass Communication</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schoollaws">School of Law</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-md-3">
                                                    <ul className='inner-ul'>

                                                        <li>
                                                            <Link to="/Schooldesign">School of Design</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schoolofit">School of Information and Technology</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schoolofpharma" target='_blank'>School of Pharmacy</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schooloflifescience">School of Life Science</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schoolofyoga">School of Yoga and Naturopathy</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schoolofeducation">School of Education</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Schoolofhotelmanagement">School of Hotel Management</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Industryintegrated">Industry Integrated Programs</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Research">Research</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-md-3">
                                                    <ul className='inner-ul'>

                                                        <li>
                                                            <Link to="/Academicsphil">Academic Philosophy</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Academicspartners">Academic Partners</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Specialdevelopment">Special Development Cells</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Downloadresources">Online Resources</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Teachningmethod">Teaching Methodology/Pedagogy</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/MoocIsbm">MOOC with ISBM University</Link>
                                                        </li>
                                                        <li>
                                                            <a href="#">MOUs' and Collaborations</a>
                                                        </li>
                                                        <li>
                                                            <Link to="/Certificateemdps">Certificate Programs and MDPs</Link>
                                                        </li>
                                                        <li>
                                                            <a href="#">Student ERP</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-md-3">
                                                    <ul className='inner-ul'>
                                                        {/* <h6 className="list-header">List Header</h6>
                                            <hr/> */}
                                                        <li>
                                                            <a href="#">E-Library</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Online Video Lectures</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">E-Links</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">LMS</a>
                                                        </li>
                                                        <li>
                                                            <Link to="/Specialdevelopment">ERP</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Specialdevelopment">BONSAI</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Specialdevelopment">ENAGRAM</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/skilldevelopment">Skill Development</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </div>
                                        </ul>


                                    </li>










                                    <li className="nav-item dropdown position-static me-3">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdown" role="button">Admissions </a>
                                        <ul className="dropdown-menu megamenu">
                                            <div className="row">
                                                <li className="col-md-3">
                                                    <ul className='inner-ul'>
                                                        <h6 className="list-header">Programmes</h6>
                                                        <li>
                                                            <Link to="/programs&eligibilty">Programmes and Eligibilities</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/industryintegrated">Industry Integrated Programs</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/skilldevelopment">Skill Development</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Research">Research</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-md-3">
                                                    <ul className='inner-ul'>
                                                        <h6 className="list-header">Programmes By Qualification</h6>
                                                        <li>
                                                            <Link to="/after-10th">After 10th</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/after-10th">After 12th</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/after-10th">After Graduation</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/after-10th">After Post-Graduation</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/after-10th">Lateral Entry</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-md-3">
                                                    <ul className='inner-ul'>
                                                        <h6 className="list-header">Apply To ISBMU</h6>
                                                        <li>
                                                            <Link to="/applyonline">Apply Online</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Payfeesonline">Online Payment</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/downloads">Download and Resources</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/paymentprocedure">Payment Procedure Guidelines</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/admissionprocedure">Admission Procedure Guidelines</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/admissionhelpdesk">Admission Helpdesk</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* <li className="col-md-3">
                                        <ul>
                                            <h6 className="list-header">List Header</h6>
                                            <hr/>
                                            <li>
                                                <a href="#">Lorem Ipsum</a>
                                            </li>
                                            <li>
                                                <a href="#">Lorem Ipsum</a>
                                            </li>
                                            <li>
                                                <a href="#">Lorem Ipsum</a>
                                            </li>
                                            <li>
                                                <a href="#">Lorem Ipsum</a>
                                            </li>
                                            <li>
                                                <a href="#">Lorem Ipsum</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                            </div>
                                        </ul>
                                    </li>




                                    <li className="nav-item dropdown position-static me-3">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdown" role="button">Placements</a>
                                        <ul className="dropdown-menu megamenu" id="placement">
                                            <div className="row">
                                                <li className="col-md-12">
                                                    <ul className='inner-ul'>
                                                        <li>
                                                            <Link to="/Aboutplacement">About Placements</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Careercounselling">Career Counselling</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Globalskills">Global Skills</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Recruiters">Recruiters</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Campusrecruitment">Campus Recruitment &amp; Interview Training</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </div>
                                        </ul>
                                    </li>



                                    <li className="nav-item dropdown position-static me-3">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdown" role="button">Student Corner</a>
                                        <ul className="dropdown-menu megamenu" id="studentcorner">
                                            <div className="row">
                                                <li className="col-md-12">
                                                    <ul className='inner-ul'>
                                                        <li>
                                                            <Link to="/Faqs">FAQ</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Scholarships">Scholarship</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Antiragging">Anti-Ragging Policy</Link>
                                                        </li>
                                                        <li>
                                                            <a href="http://isbmu.co.in/">Alumni Portal</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </div>
                                        </ul>
                                    </li>



                                    <li className="nav-item dropdown position-static me-3">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdown" role="button">Campus</a>
                                        <ul className="dropdown-menu megamenu" id="campus">
                                            <div className="row">
                                                <li className="col-md-12">
                                                    <ul className='inner-ul'>
                                                        <li>
                                                            <Link to="/overview">Overview</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/library">Library</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/laboratory">Laboratory</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/campusinfrastructure">Campus Infrastructure</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/itlab">Information Technology Lab</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/extracurricular">Extra Curricular</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/digitizedlearning">Digitized Learning System</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Busrouteschedule">Bus Routes And Schedules</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Bustransformation">Bus Transportation Fees</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Hostel">Hostel</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Complaints">Complaints</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Complaincaste">Complaint Against Caste-Based Discrimination</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </div>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown position-static me-3">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdown" role="button"><Link style={{ color: 'black', textDecoration: 'none' }} to="/Internationalstudents">International Students</Link></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </React.Fragment>
    )
}

export default NavigationBar;