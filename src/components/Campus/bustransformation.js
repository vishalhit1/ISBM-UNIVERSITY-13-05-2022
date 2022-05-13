import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Table} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Complaincastebanner from "./complaincastebanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const Bustransformation =()=>{
    const [modalShow, setModalShow] = React.useState(false);
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
                        Bus Transportation Fees
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
            Campus
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Bus Transportation Fees</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/overview'>Overview</Link></p>
                        <p className="links_about1"><Link to='/library'>Library</Link></p>
                        <p className="links_about1"><Link to='/laboratory'>Laboratory</Link></p>
                        <p className="links_about1"><Link to='/campusinfrastructure'>Campus Infrastructure</Link></p>
                        <p className="links_about1"><Link to='/itlab'>Information Technology Lab</Link></p>
                        <p className="links_about1"><Link to='/extracurricular'>Extra Curricular</Link></p>
                        <p className="links_about1"><Link to='/digitizedlearning'>Digitized Learning System</Link></p>
                        <p className="links_about1"><Link to='/Busrouteschedule'>Bus Routes And Schedules</Link></p>
                        <p className="links_about active"><Link to='/Bustransformation'>Bus Transportation Fees</Link></p>
                        <p className="links_about1"><Link to='/Hostel'>Hostel</Link></p>
                        <p className="links_about1"><Link to='/Complaints'>Complaints</Link></p>
                        <p className="links_about1"><Link to='/Complaincaste'>Complaint Against Caste-Based Discrimination</Link></p>
                    </Col>
                    <Col lg={9}>
                        <Row className="hotel">
                            <Col lg={12}>
                                <div className="bus_transport">
                                <h2 className="linkabout123">Bus Transportation Fees</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                            <Table bordered>
                                <thead>
                                    <tr>
                                    <th  colSpan="2" style={{color:'black'}}>Mahasamund to Campus via Khatti</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{width:'50%'}}><strong>Route</strong></td>
                                        <td style={{width:'50%'}}><strong>Amount</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Mahasamund</td>
                                        <td>2000</td>
                                    </tr>
                                    <tr>
                                        <td>Boriyajhar</td>
                                        <td>1800</td>
                                    </tr>
                                    <tr>
                                        <td>Khatti</td>
                                        <td>1600</td>
                                    </tr>
                                    <tr>
                                        <td>Tusda</td>
                                        <td>1400</td>
                                    </tr>
                                    <tr>
                                        <td>Khamhariya</td>
                                        <td>1300</td>
                                    </tr>
                                    <tr>
                                        <td>Kokanajhar</td>
                                        <td>1200</td>
                                    </tr>
                                    <tr>
                                        <td>Charoda</td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td>Mogra</td>
                                        <td>800</td>
                                    </tr>
                                    <tr>
                                        <td>Dadargaon</td>
                                        <td>700</td>
                                    </tr>
                                    <tr>
                                        <td>Campus</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </Col>
                            <Col lg={4}>
                            <Table bordered>
                                <thead>
                                    <tr>
                                    <th  colSpan="2" style={{color:'black'}}>Khariyar Road To Campus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{width:'50%'}}><strong>Route</strong></td>
                                    <td style={{width:'50%'}}><strong>Amount</strong></td>
                                </tr>
                                <tr>
                                    <td>Khrodh l.d</td>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <td>Narra</td>
                                    <td>1800</td>
                                </tr>
                                <tr>
                                    <td>Komakhan</td>
                                    <td>1700</td>
                                </tr>
                                <tr>
                                    <td>Dhora Bhatha</td>
                                    <td>1600</td>
                                </tr>
                                <tr>
                                    <td>Tullu</td>
                                    <td>1500</td>
                                </tr>
                                <tr>
                                    <td>Palsi pani</td>
                                    <td>1400</td>
                                </tr>
                                <tr>
                                    <td>Chorbhatti</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td>Charoda</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>Mongra</td>
                                    <td>800</td>
                                </tr>
                                <tr>
                                    <td>Dadargaon</td>
                                    <td>700</td>
                                </tr>
                                <tr>
                                    <td>Kosumbuda</td>
                                    <td>700</td>
                                </tr>
                                <tr>
                                    <td>Campus</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                                </Table>
                            </Col>
                            <Col lg={4}>
                            <Table bordered>
                                <thead>
                                    <tr>
                                    <th  colSpan="2" style={{color:'black'}}>Kopra to Campus via Gariyaband</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{width:'50%'}}><strong>Route</strong></td>
                                    <td style={{width:'50%'}}><strong>Amount</strong></td>
                                </tr>
                                <tr>
                                    <td>Kopra</td>
                                    <td>1800</td>
                                </tr>
                                <tr>
                                    <td>Sursabandha</td>
                                    <td>1800</td>
                                </tr>
                                <tr>
                                    <td>Panduka</td>
                                    <td>1800</td>
                                </tr>
                                <tr>
                                    <td>Pond</td>
                                    <td>1600</td>
                                </tr>
                                <tr>
                                    <td>Malgaon</td>
                                    <td>1500</td>
                                </tr>
                                <tr>
                                    <td>Gariyaband</td>
                                    <td>1500</td>
                                </tr>
                                <tr>
                                    <td>Kokdi</td>
                                    <td>1400</td>
                                </tr>
                                <tr>
                                    <td>Kaserudih</td>
                                    <td>1400</td>
                                </tr>
                                <tr>
                                    <td>Kochvay</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td>Sadak Parsuli</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>Kharkhara</td>
                                    <td>800</td>
                                </tr>
                                <tr>
                                    <td>Chhura</td>
                                    <td>700</td>
                                </tr>
                                <tr>
                                    <td>Campus</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                            <Table bordered>
                                <thead>
                                    <tr>
                                    <th  colSpan="2" style={{color:'black'}}>Rajim to Campus via Fingeshwar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td  style={{width:'50%'}}><strong>Route</strong></td>
                                    <td  style={{width:'50%'}}><strong>Amount</strong></td>
                                </tr>
                                <tr>
                                    <td>Rajim</td>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <td>Koma</td>
                                    <td>1800</td>
                                </tr>
                                <tr>
                                    <td>Kirvai</td>
                                    <td>1700</td>
                                </tr>
                                <tr>
                                    <td>Borsi</td>
                                    <td>1600</td>
                                </tr>
                                <tr>
                                    <td>Purena Mod</td>
                                    <td>1500</td>
                                </tr>
                                <tr>
                                    <td>Chaitra Mod</td>
                                    <td>1500</td>
                                </tr>
                                <tr>
                                    <td>Fingeshwar</td>
                                    <td>1300</td>
                                </tr>
                                <tr>
                                    <td>Borid</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td>Sarkada</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td>Sorid</td>
                                    <td>1100</td>
                                </tr>
                                <tr>
                                    <td>Amethi</td>
                                    <td>1100</td>
                                </tr>
                                <tr>
                                    <td>Kasekera</td>
                                    <td>1100</td>
                                </tr>
                                <tr>
                                    <td>Akalvara</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>Mudagaon</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>Parsada</td>
                                    <td>900</td>
                                </tr>
                                <tr>
                                    <td>Bodra Bandha</td>
                                    <td>800</td>
                                </tr>
                                <tr>
                                    <td>Kosambuda</td>
                                    <td>700</td>
                                </tr>
                                <tr>
                                    <td>Campus</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                                </Table>
                            </Col>
                            <Col lg={4}>
                            <Table bordered>
                                <thead>
                                    <tr>
                                    <th  colSpan="2" style={{color:'black'}}>Gariaband to Campus via Rasela</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td  style={{width:'50%'}}><strong>Route</strong></td>
                                        <td  style={{width:'50%'}}><strong>Amount</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Gariyaband</td>
                                        <td>1500</td>
                                    </tr>
                                    <tr>
                                        <td>Kordi</td>
                                        <td>1400</td>
                                    </tr>
                                    <tr>
                                        <td>Kaserudih</td>
                                        <td>1400</td>
                                    </tr>
                                    <tr>
                                        <td>Kochvay</td>
                                        <td>1200</td>
                                    </tr>
                                    <tr>
                                        <td>Sadak Parsuli</td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td>Pipperchhedi</td>
                                        <td>900</td>
                                    </tr>
                                    <tr>
                                        <td>Ruad</td>
                                        <td>900</td>
                                    </tr>
                                    <tr>
                                        <td>Kergaon</td>
                                        <td>900</td>
                                    </tr>
                                    <tr>
                                        <td>Russela</td>
                                        <td>800</td>
                                    </tr>
                                    <tr>
                                        <td>Kansingi</td>
                                        <td>700</td>
                                    </tr>
                                    <tr>
                                        <td>Raksi</td>
                                        <td>600</td>
                                    </tr>
                                    <tr>
                                        <td>Nartora</td>
                                        <td>500</td>
                                    </tr>
                                    <tr>
                                        <td>Dulla</td>
                                        <td>500</td>
                                    </tr>
                                    <tr>
                                        <td>Bhaisamuda</td>
                                        <td>400</td>
                                    </tr>
                                    <tr>
                                        <td>Kosmi</td>
                                        <td>300</td>
                                    </tr>
                                    <tr>
                                        <td>Campus</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </Col>
                            <Col lg={4}>
                            <Table bordered>
                                <thead>
                                    <tr>
                                    <th  colSpan="2" style={{color:'black'}}>Rajim to Campus via tarrighat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td  style={{width:'50%'}}><strong>Route</strong></td>
                                        <td  style={{width:'50%'}}><strong>Amount</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Belturi</td>
                                        <td>1800</td>
                                    </tr>
                                    <tr>
                                        <td>Bhaisatara</td>
                                        <td>1800</td>
                                    </tr>
                                    <tr>
                                        <td>Kondkera</td>
                                        <td>1700</td>
                                    </tr>
                                    <tr>
                                        <td>Semardih</td>
                                        <td>1700</td>
                                    </tr>
                                    <tr>
                                        <td>Tarrighat</td>
                                        <td>1600</td>
                                    </tr>
                                    <tr>
                                        <td>Chhuhiya</td>
                                        <td>1500</td>
                                    </tr>
                                    <tr>
                                        <td>Jamahi</td>
                                        <td>1500</td>
                                    </tr>
                                    <tr>
                                        <td>Junvani</td>
                                        <td>1400</td>
                                    </tr>
                                    <tr>
                                        <td>Paktiya</td>
                                        <td>1400</td>
                                    </tr>
                                    <tr>
                                        <td>Boirgaon</td>
                                        <td>1300</td>
                                    </tr>
                                    <tr>
                                        <td>Madeli</td>
                                        <td>1200</td>
                                    </tr>
                                    <tr>
                                        <td>Khairjhitti</td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td>Lohjhar</td>
                                        <td>900</td>
                                    </tr>
                                    <tr>
                                        <td>Tumgaon</td>
                                        <td>800</td>
                                    </tr>
                                    <tr>
                                        <td>Chhura</td>
                                        <td>700</td>
                                    </tr>
                                    <tr>
                                        <td>Campus</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                            <Table bordered>
                                <thead>
                                    <tr>
                                    <th  colSpan="2" style={{color:'black'}}>Raipur to Campus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td style={{width:'50%'}}><strong>Route</strong></td>
                                            <td style={{width:'50%'}}><strong>Amount</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Pachpadi</td>
                                            <td>3500</td>
                                        </tr>
                                        <tr>
                                            <td>Mana</td>
                                            <td>3500</td>
                                        </tr>
                                        <tr>
                                            <td>Abhanpur</td>
                                            <td>3000</td>
                                        </tr>
                                        <tr>
                                            <td>Nawapara</td>
                                            <td>2200</td>
                                        </tr>
                                        <tr>
                                            <td>Rajim</td>
                                            <td>2000</td>
                                        </tr>
                                        <tr>
                                            <td>Koma</td>
                                            <td>1800</td>
                                        </tr>
                                        <tr>
                                            <td>Kirvai</td>
                                            <td>1700</td>
                                        </tr>
                                        <tr>
                                            <td>Borsi</td>
                                            <td>1600</td>
                                        </tr>
                                        <tr>
                                            <td>Purena Mod</td>
                                            <td>1500</td>
                                        </tr>
                                        <tr>
                                            <td>Chaitra Mod</td>
                                            <td>1500</td>
                                        </tr>
                                        <tr>
                                            <td>Fingeshwar</td>
                                            <td>1300</td>
                                        </tr>
                                        <tr>
                                            <td>Borid</td>
                                            <td>1200</td>
                                        </tr>
                                        <tr>
                                            <td>Sarkada</td>
                                            <td>1200</td>
                                        </tr>
                                        <tr>
                                            <td>Sorid</td>
                                            <td>1100</td>
                                        </tr>
                                        <tr>
                                            <td>Amethi</td>
                                            <td>1100</td>
                                        </tr>
                                        <tr>
                                            <td>Kasekera</td>
                                            <td>1100</td>
                                        </tr>
                                        <tr>
                                            <td>Akalvara</td>
                                            <td>1000</td>
                                        </tr>
                                        <tr>
                                            <td>Mudagaon</td>
                                            <td>1000</td>
                                        </tr>
                                        <tr>
                                            <td>Parasada</td>
                                            <td>900</td>
                                        </tr>
                                        <tr>
                                            <td>Bodra Bandha</td>
                                            <td>800</td>
                                        </tr>
                                        <tr>
                                            <td>Kosambuda</td>
                                            <td>700</td>
                                        </tr>
                                        <tr>
                                            <td>Campus</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Bustransformation
