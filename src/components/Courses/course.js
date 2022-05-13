import React from 'react';
import { Col,Row,Nav,Tab, Container,Button } from 'react-bootstrap';
import manage from '../../Images/School-of-Management1.jpg'
import img_1 from '../../Images/1.jpg';
import img_2 from '../../Images/2.jpg';
import img_3 from '../../Images/3.jpg';
import img_4 from '../../Images/4.jpg';
import img_5 from '../../Images/5.png';
import img_6 from '../../Images/6.jpg';
import img_7 from '../../Images/7.jpg';
import img_8 from '../../Images/8.jpg';
import img_9 from '../../Images/9.jpg';
import img_10 from '../../Images/10.jpg';
import img_12 from '../../Images/12.jpg';
import img_13 from '../../Images/13.jpg';
import img_14 from '../../Images/14.jpg';
import img_15 from '../../Images/15.jpg';
import img_18 from '../../Images/18.jpg';
import { Link } from 'react-router-dom';


const Course = ()=>{
    return(
        <React.Fragment>
            <div className="pop_courses">
           <h1 className='text-center' style={{color:'#06355f'}}> </h1>
            <Container>
                <Row className='mt-4' lg={12} md={3} sm={2} xs={2} g={3}>
                   
                        <Link to='/after-10th' style={{textDecoration:'none'}}> 
                            <Col>
                                <img src={img_1} className='img-fluid'></img>
                                <h6 className='text-center course-1 text-white'>Under Graduate</h6>
                            </Col>
                        </Link>
                    
                        <Link to='/after-10th' style={{textDecoration:'none'}}>
                            <Col>
                                <img src={img_4} className='img-fluid'></img>
                                <h6 className='text-center course-1 text-white'>Post Graduate</h6> 
                            </Col>
                        </Link>

                        <Link to='/Research' style={{textDecoration:'none'}}>
                            <Col>
                                <img src={img_3} className='img-fluid'></img>
                                <h6 className='text-center course-1 text-white'>Research</h6>
                            </Col>
                        </Link>

                        <Link to ='/Schoollaws' style={{textDecoration:'none'}}>
                            <Col>
                                <img src={img_2} className='img-fluid'></img>
                                <h6 className='text-center course-1 text-white'>Diploma</h6>
                            </Col>
                        </Link>  
                        <Link to ='/Certificateemdps' style={{textDecoration:'none'}}>
                            <Col>
                                <img src={img_5} className='img-fluid'></img>
                                <h6 className='text-center course-1 text-white'>Certificate</h6>
                            </Col>
                        </Link>  
                        <Link to='/industryintegrated' style={{textDecoration:'none'}}>
                            <Col>
                                <img src={img_6} className='img-fluid'></img>
                                <h6 className='text-center course-1 text-white'>Industry Integrated</h6>
                            </Col>
                        </Link>
                    {/* <Col>
                        <img src={img_7} className='img-fluid'></img>
                        <Link to ='/Schoolofeducation' style={{textDecoration:'none'}}><h6 className='text-center course-1 text-white'>School of Education</h6></Link>
                    </Col>
                    <Col>
                        <img src={img_8} className='img-fluid'></img>
                        <Link to='/Schooloflifescience' style={{textDecoration:'none'}}><h6 className='text-center course-2'>School of Life Science</h6></Link>
                    </Col>
                    <Col>
                        <img src={img_9} className='img-fluid'></img>
                        <Link to='/Schoolartshuman' style={{textDecoration:'none'}}><h6 className='text-center course-1 text-white'>School of Arts and Humanities</h6></Link>
                    </Col>
                    <Col>
                        <img src={img_13} className='img-fluid'></img>
                        <Link to='/Research' style={{textDecoration:'none'}}><h6 className='text-center course-2'>Research</h6></Link>
                    </Col>
                    <Col>
                        <img src={img_15} className='img-fluid'></img>
                        <Link to='/Schoolofyoga' style={{textDecoration:'none'}}><h6 className='text-center course-1 text-white'>School of Yoga & Naturopathy</h6></Link>
                    </Col>
                    <Col>
                        <img src={img_18} className='img-fluid'></img>
                        <Link to='/Schoolofhotelmanagement' style={{textDecoration:'none'}}><h6 className='text-center course-2'>School of Hotel Management</h6></Link>
                    </Col>
                    <Col>
                        <img src={img_13} className='img-fluid'></img>
                        <Link to='/Journalismandmass' style={{textDecoration:'none'}}><h6 className='text-center course-1 text-white'>School of Journalism & Mass Communication</h6></Link>
                    </Col>
                    <Col>
                        <img src={img_14} className='img-fluid'></img>
                        <Link to='/Schoolofit' style={{textDecoration:'none'}}><h6 className='text-center course-2'>School of Information & Technology</h6></Link>
                    </Col>
                    <Col>
                        <img src={img_10} className='img-fluid'></img>
                        <Link to='/Schoolengrtech' style={{textDecoration:'none'}}><h6 className='text-center course-1 text-white'>School of Engineering & Technology</h6></Link>
                    </Col>
                    <Col>
                        <img src={img_12} className='img-fluid'></img>
                        <Link to='/Schooloflibrary' style={{textDecoration:'none'}}><h6 className='text-center course-2'>School of Library & Information Science </h6></Link>
                    </Col> */}
                </Row>
            </Container>
            </div>
            {/* <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} lg={12}>
                            <Nav variant="pills" className="flex-row">
                                <Row>
                                    <Col lg={3}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <img src={img_1} className='img-fluid'></img> 
                                            </Nav.Link>
                                            <p className='fs-5'>Under Graduates</p>
                                        </Nav.Item>
                                    </Col>
                                    <Col lg={3}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                <img src={img_2} className='img-fluid'></img>
                                            </Nav.Link>
                                            <p className='fs-5'>Post Graduates</p>
                                        </Nav.Item>
                                    </Col>
                                    <Col lg={3}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">
                                                <img src={img_3} className='img-fluid'></img>
                                            </Nav.Link>
                                            <p className='fs-5'>Doctoral Programs</p>
                                        </Nav.Item>
                                    </Col>
                                    <Col lg={3}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <img src={img_4} className='img-fluid'></img>
                                            </Nav.Link>
                                            <p className='fs-5'>Diploma & Certificate</p>
                                        </Nav.Item>
                                    </Col>
                                </Row>
                            </Nav>
                    </Col>
                </Row>
                    <Row>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            abc
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            pqr
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            mno
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            xyz
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
                </Container>
                <Container>
                    <Row className='mt-5 justify-content-center'>
                        <Col lg={3} className='img-1'>
                            <div className='opacity text-center pt-5'>
                                <h5 className='text-center text-white'>School of Management</h5>
                                <Button>View Courses</Button>
                            </div>
                        </Col>
                        <Col lg={3} className='img-2'>
                            <div className='opacity text-center pt-5'>
                                <h5 className='text-center text-white'>School of Commerce</h5>
                                <Button>View Courses</Button>
                            </div>
                        </Col>
                        <Col lg={3} className='img-3'>
                            <div className='opacity text-center pt-5'>
                                <h5 className='text-center text-white'>School of science</h5>
                                <Button>View Courses</Button>
                            </div>
                        </Col>
                    </Row>
                </Container> */}
        </React.Fragment>
    )
}

export default Course;