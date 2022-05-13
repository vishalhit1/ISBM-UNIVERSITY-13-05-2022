import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Button,Accordion} from "react-bootstrap";
import Footer from "../../footer";
import Header from "../../Header/header";
import NavigationBar from "../../Header/navbar";
import Managementbanner from "../managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import { GrLock } from 'react-icons/gr';
import Enquiry_now from "../../enquiry_now";
import Brouche from '../../../Images/ISBM_PROSPECTUS.pdf';
import Allinone from "../../commanfiles/allinone";
const Mba_in_business_administration = ()=>{
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
                        Masters in Business Administration (MBA)
                    </h1>
                    <button
                        className="animate__animated animate__fadeInRightBig apply_btn"
                        onClick={() => setModalShow(true)}
                    >
                        <span>Apply Now</span>
                    </button>
                    <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />

                </div>
            </div>
            <section className="BannerSection__programStats">
                <ul className="BannerSection__programStats__box">
                    <li className="BannerSection__programStats__static">
                        <div className="BannerSection__programStats__static__label">
                            <div className="smartness-overloaded">Level</div>
                        </div>
                        <div className="BannerSection__programStats__static__desc">Under-Graduate (UG)</div>
                    </li>
                    <li className="BannerSection__programStats__static">
                        <div className="BannerSection__programStats__static__label">
                            <div className="smartness-overloaded">Duration</div>
                        </div>
                        <div className="BannerSection__programStats__static__desc">1 Year</div>
                    </li>
                    <li className="BannerSection__programStats__static">
                        <div className="BannerSection__programStats__static__label">
                            <div className="smartness-overloaded">Eligibility Criteria</div>
                        </div>
                        <div className="BannerSection__programStats__static__desc">10 + 2 or Equivalent</div>
                    </li>
                    <li className="BannerSection__programStats__static">
                        <div className="BannerSection__programStats__static__label">
                            <div className="smartness-overloaded">Download Brochure</div>
                        </div>
                        <div className="BannerSection__programStats__static__desc"><a download href={Brouche}>Click Here</a></div>
                    </li>
                </ul>
            </section>
            <Container className="About_us11">
                <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>
                    Academics
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                Industry Integrated Programs
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Masters in Business Administration (MBA) (Logistics & Supply Chain Management)</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                <Col lg={3} className="ordersss">
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
                            <li><Link to='/Schoolofpharma' target="blank">School of Pharmacy</Link></li>
                            <li><Link to='/Schooloflifescience'>School of Life Science</Link></li>
                            <li><Link to='/Schoolofyoga'>School of Yoga and Naturopathy</Link></li>
                            <li><Link to='/Schoolofeducation'>School of Education</Link></li>
                            <li><Link to='/Schoolofhotelmanagement'>School of Hotel Management</Link></li>
                        </ul>
                    </Col>
                    <Col lg={9} className="ordersss11">
                        <h2 className="linkabout123">Masters in Business Administration (MBA) (Logistics & Supply Chain Management)</h2>
                        <p>Bachelor of Physical Education is a course which deals with different orders of physical exercises. It is a sports-based course. It defines the basis of ancient and medieval Vedic Yoga. It takes you to the next dimension of astonishing sportsman spirit in sports and information of different sorts of dynamic physical exercises. </p>
                        <p>Any individual who has a bright interest in sports and wellness and is prepared to pick this as his or her profession choice can choose our Bachelor of Physical Education course. The course in itself accommodates a more extensive sports preparing and accordingly, it ends up mandatory for the individual to perform sports exercises among the course. In this way, any individual who can without much of a stretch, can live energetically and fit life.</p>
                        <div className="programs_row">
                            <h2 className="linkabout123">Programmes Offered :</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Programme</th>
                                        <th>Duration</th>
                                        <th>Mode</th>
                                        <th>Eligibility</th>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mba_in_business_administration">
                                            Masters in Business Administration (MBA) (Logistics & Supply Chain Management)</Link></td>
                                        <td>1 Year</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Allinone/>
            <Footer/>
        </React.Fragment>
    )
}
export default Mba_in_business_administration