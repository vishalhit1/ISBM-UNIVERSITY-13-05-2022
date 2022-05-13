import React from "react";
import { Row, Col, Form, Nav, NavDropdown, Offcanvas, FormControl, Container, Navbar, Button } from "react-bootstrap";
import logo from '../../Images/isbm-university.png';
import { IoCall } from 'react-icons/io5';
import { HiMail } from 'react-icons/hi';
import { AiOutlineForm } from 'react-icons/ai';
import { FaDownload } from 'react-icons/fa';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
const Header = () => {
    return (
        <React.Fragment>
            {/* <nav class="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
                <div class="container">
                    <a href="/" class="navbar-brand">
                        <i class="fas fa-blog"></i> &nbsp;
                        Blog Template
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarCollapse" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="" class="nav-link active">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link active">
                                    Blog
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link active">
                                    About
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="" class="nav-link active">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <Row style={{ backgroundColor: '#06355f', paddingTop: '5px', paddingBottom: '5px' }} className="justify-content-end header_top_abcd_" >
                <Col lg={7} >
                    {/* <ul > */}
                    <Row className='header-li'>
                        <p style={{ width: '150px' }} className="header-1-media"><li><a href="tel:+919373199999">+91-9373199999</a></li></p>
                        <p style={{ width: '90px' }} className="header-1-media"><li><Link to="/Isbm_pro">ISBM Pro</Link></li></p>
                        <p style={{ width: '60px' }} className="header-1-media"><li><Link to="/Mediacoverage">Media</Link></li></p>
                        <p style={{ width: '80px' }} className="header-1-media"><li><Link to="/Libraries">Library</Link></li></p>
                        <p style={{ width: '110px' }} className="header-1-media"><li><Link to="/Payfeesonline">Pay Online</Link></li></p>
                        {/* <p style={{width:'110px'}} className="header-1-media"><li><a href="#" target="blank">ISBMU Stars</a></li></p> */}
                        <p style={{ width: '70px' }} className="header-1-media"><li><a href="#" data-toggle="modal" data-target="#ModalLogin">Login</a></li></p>
                        <p style={{ width: '110px' }} className="header-1-media"> <li><Link to="/Contact_us">Contact us</Link></li></p>
                    </Row>
                    {/* </ul> */}
                </Col>
            </Row>

            <Row>
                {/* <Col lg={4}>
                    <div>
                        <Link to="/"><img src={logo} height='100px' className='logo'></img></Link>
                    </div>
                </Col> */}
                {/* <Col className='header2-a header_bottom'>
                    <Row className="justify-content-end">
                        <Col lg={3}  style={{width:'20%'}} className="abc">
                            <HiMail style={{fontSize:'15px',color:'white'}}/><a href="mailto:admissions@isbmuniversity.edu.in" style={{fontSize:'15px'}}>admissions@isbmuniversity.edu.in</a>
                        </Col>
                        <Col lg={2} style={{width:'10%'}} className="abc">
                        <AiOutlineForm style={{fontSize:'15px',color:'white'}}/><Link to="/applyonline" style={{fontSize:'15px'}}>Apply Online</Link>
                        </Col>
                        <Col lg={2} style={{width:'9%'}} className="abc"><FaDownload  style={{fontSize:'15px',color:'white'}}/><a href='#'  style={{fontSize:'15px'}}>Downloads</a></Col>
                        <Col  lg={2} className="me-4"><Form.Control type="text" placeholder="Search for Courses" /></Col>
                    </Row>
                </Col> */}
            </Row>

        </React.Fragment>
    )
}

export default Header;