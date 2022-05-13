import React from "react";
import {Row,Col,Container} from 'react-bootstrap';
import {FaUniversity} from 'react-icons/fa';
import {BsBook} from 'react-icons/bs';
import {FaFlask} from 'react-icons/fa';
import {FaLaptopCode} from 'react-icons/fa';
import {FaTasks} from 'react-icons/fa';
import {FaHeadset} from 'react-icons/fa';
import { Link } from "react-router-dom";
import background_campus from '../../Images/Banner12.webp';
import campus from '../../Images/campus_image.jpg';
import img_1 from '../../Images/isbmu_experinece.jpg';
import Liabrary from '../../Images/4_2.png';
import Laboratories from '../../Images/science-lab.jpg';
import Sports from '../../Images/football-sports.jpg';
import Events from '../../Images/maxresdefault.jpg';
import bannerimage from '../../Images/Banner12.jpg';

const Campus = ()=>{
    return(
        <React.Fragment>
            <Row>
            <Link to="/applyonline"><button className="Apply-Online">Apply Online</button></Link>
                {/* <div className="background-campus-1 mt-4"></div> */}
                <img src={bannerimage} className='img-fluid'></img>
            </Row>

            <Container>
                <Row>
                    <Col lg={4} className="mt-4">
                    <Link to="/"><div className="div1">
                    <img src={img_1} className='img-fluid'></img>
                    <h6 class="text-center course-1 text-white">ISBMU Experience</h6>
                    </div></Link>
                    </Col>

                    <Col lg={4} className="mt-4">
                    <Link to="/Campus"><div className="div1">
                    <img src={campus} className='img-fluid'></img>
                    <h6 class="text-center course-1 text-white">Campus</h6>
                    </div></Link>
                    </Col>

                    <Col lg={4} className="mt-4">
                    <Link to="/Libraries"><div className="div1">
                    <img src={Liabrary} className='img-fluid'></img>
                    <h6 class="text-center course-1 text-white">Library</h6>
                    </div></Link>
                    </Col>

                    <Col lg={4} className="mt-4">
                    <Link to="/Laboratories"><div className="div1">
                    <img src={Laboratories} className='img-fluid'></img>
                    <h6 class="text-center course-1 text-white">Laboratories</h6>
                    </div></Link>
                    </Col>

                    <Col lg={4} className="mt-4">
                    <Link to="/Sports"><div className="div1">
                    <img src={Sports} className='img-fluid'></img>
                    <h6 class="text-center course-1 text-white">Sports</h6>
                    </div></Link>
                    </Col>

                    <Col lg={4} className="mt-4">
                    <Link to="/"><div className="div1">
                    <img src={Events} className='img-fluid'></img>
                    <h6 class="text-center course-1 text-white">Beyond Acadamics</h6>
                    </div></Link>
                    </Col>
                </Row>
            </Container>
            
            {/* <Container>
                <h1 className='mt-3 text-center' style={{color:'#06355f'}}>Campus</h1>
            <Row className='justify-content-center mt-4 find_isbmss'>
                <Col lg={6} className='text-center'>
                    <Row>
                        <Col lg={4}>
                            <Link to='/overview' style={{textDecoration:'none'}}>
                                <div style={{border:'1px solid black',backgroundColor:'#06355f'}} className='p-2'>
                                    <FaUniversity className='icon'/>
                                    <h5 className='text-white'>Overview</h5>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4}>
                        <Link to='/library' style={{textDecoration:'none',color:'#06355f'}}>
                            <div style={{border:'1px solid black',}} className='p-2'>
                                <BsBook className='icon2'/>
                                <h5>Library</h5>
                            </div>
                        </Link>
                        </Col>
                        <Col lg={4}>
                        <Link to='/laboratory' style={{textDecoration:'none'}}>
                            <div style={{border:'1px solid black',backgroundColor:'#06355f'}} className='p-2'>
                                <FaFlask className='icon'/>
                                <h5  className='text-white'>Laboratory</h5>
                            </div>
                        </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/itlab' style={{textDecoration:'none'}}>
                                <div style={{border:'1px solid black',backgroundColor:'#06355f'}} className='p-2'>
                                    <FaLaptopCode className='icon'/>
                                    <h5 className='text-white'>IT <br/>Professionals</h5>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={4}>
                        <Link to='/extracurricular' style={{textDecoration:'none',color:'#06355f'}}>
                            <div style={{border:'1px solid black',}} className='p-2'>
                                <FaTasks className='icon2'/>
                                <h5>Extra<br/>Curricular</h5>
                            </div>
                        </Link>
                        </Col>
                        <Col lg={4}>
                        <Link to='/admissionhelpdesk' style={{textDecoration:'none'}}>
                            <div style={{border:'1px solid black',backgroundColor:'#06355f'}} className='p-2'>
                                <FaHeadset className='icon'/>
                                <h5  className='text-white'>Admission Helpdesk</h5>
                            </div>
                        </Link>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                    <iframe width="100%" height="275" className="vide_iframes" src="https://www.youtube.com/embed/_esugx-NCy0" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                     gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
            </Container> */}
           
        </React.Fragment>
    )
}

export default Campus;