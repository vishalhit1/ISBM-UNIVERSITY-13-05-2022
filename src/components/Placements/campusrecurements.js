import React, { useEffect } from "react";
import { Container,Row,Col,Breadcrumb,Accordion,Table} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import {Link, BrowserRouter} from 'react-router-dom';
import Aboutplacementbanner from "./aboutplacementbanner";
import big_vacany from "../../Images/big_vacancyy.png"
import Enquiry_now from "../enquiry_now";
const Campusrecruitment =()=>{
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
                        Campus Recruitment & Interview Training
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                Placements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Campus Recruitment & Interview Training</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to="/Aboutplacement">About Placements</Link></p>
                        <p className="links_about1"><Link to="/Careercounselling">Career Counselling</Link></p>
                        <p className="links_about1"><Link to="/Globalskills">Global Skills</Link></p>
                        <p className="links_about1"><Link to="/Recruiters">Recruiters</Link></p>
                        <p className="links_about active"><Link to="/Campusrecruitment">Campus Recruitment & Interview Training</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Campus Recruitment & Interview Training</h2>
                        <p className="detail_text">The interview itself is merely an exercise in two-way communication between the recruiter and the student and each attempt to "sell" the other. The recruiter "sells" the job and his/her company while the student "sells" himself or herself as the person best suited to fill it. The Key to do well in an interview is to prepare well and the Career Services will help students by offering following interview training services:</p>
                        <ul className="cmapus_recur">
                            <li>Mock Interviews</li>
                            <li>Videotaped Mock Interviews</li>

                            <li>Case Preparation</li>

                            <li>Salary Negotiation</li>

                            <li>Job Search Techniques</li>

                            <li>Presentation Skills</li>

                            <li>Dressing for Success</li>

                            <li>Networking</li>

                            <li>Online Networking</li>

                            <li>Informational Interviews with Alumni and Industry Professionals</li>
                        </ul>
                        <p className="detail_text"><b>The Career and Placement Cell is powered by India's leading Job Portal,</b></p>
                        <img src={big_vacany} className="big_vav" />
                        <Accordion className="faqss" defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> Opportunity for fresh graduates - Fashion Consultant</Accordion.Header>
                                <Accordion.Body className="acssa">
                                <Table bordered>
                                    <thead>
                                        <tr>
                                        <th style={{width:'230px'}}>Job Title :</th>
                                        <th>Fashion Consultant</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Job purpose</td>
                                        <td>
                                            <ul className="table_css">
                                                <li>At the store I am the person who ensures “Customer Delight” - for each customer each time.</li>
                                                <li>Contribute to achieve store KPIs.</li>
                                                <li>I am the “Brand ambassador”  - both in and out the store</li>
                                            </ul>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>I spend my time in :</td>
                                        <td>
                                            <ul className="table_css">
                                                <li>Attending customer</li>
                                                <li>Contribute to the store merchandising and sales</li>
                                                <li>Stocks, inventory and cash handling</li>
                                            </ul>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>I know I have done a great job if :</td>
                                        <td>
                                            <ul className="table_css">
                                                <li>I am meeting my weekly, fortnightly, quarterly targets.</li>
                                                <li>Contribute towards healthy audit scores</li>
                                                <li>I am able live and exhibit brand DNA.</li>
                                            </ul>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>The people I need to work with</td>
                                        <td>
                                            <Row>
                                                <Col lg={6}>
                                                    <b style={{marginLeft:"10px"}}>Within function</b>
                                                    <ul style={{marginTop:"10px"}} className="table_css">
                                                        <li>Store Manager</li>
                                                        <li>Retails Ops Manager</li>
                                                        <li>Business Manager</li>
                                                        <li>Business Head</li>
                                                    </ul>
                                                </Col>
                                                <Col lg={6}>
                                                    <b style={{marginLeft:"10px"}}>Outside function</b>
                                                    <ul style={{marginTop:"10px"}} className="table_css">
                                                        <li>Training Manager</li>
                                                        <li>Visual Merchandiser</li>
                                                        <li>Business Manager</li>
                                                        <li>Buying team</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>What is that I need to do:</td>
                                        <td>
                                            <ul className="table_css">
                                                <li><b>Warm welcome and approach</b>to each customer – customer’s inclination to shop starts right from the first step & eye contact.</li>
                                                <li>Utilize the knowledge of fashion trends and guide each customer on <b>“what suits better”</b> – in line with the customer needs, individuality and product range.</li>
                                                <li>Believes and lives the attitude of <b>“Sheer customer delight”</b> – go beyond </li>
                                                <li>Contribute towards merchandising and keeping the ambience is in accordance with the Brand standards and guidelines.</li>
                                                <li>Live the <b>“ownership mentality”</b> – looks for areas to contribute on factors impacting overall store performance – create niche for the store in the vicinitymall.</li>
                                                <li>Ability to deliver on all aspects with least guidance from the store manager.</li>
                                            </ul>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>Capabilities :</td>
                                        <td>
                                            <ul className="table_css">
                                                <li>Create the warmth for the customer – welcoming attitude</li>
                                                <li>Good at relationship building  - conversion to sales</li>
                                                <li>Good listening skills – understand customer needs</li>
                                                <li>Ability to follow brand and store guidelines</li>
                                                <li>Good operations experience – receiving stock, inventory keeping, cash handling etc.</li>
                                            </ul>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>Experience:</td>
                                        <td>
                                            <p className="detail_text">
                                            	Successful candidates should be able to cite significant achievements.
                                            </p>
                                            <p className="detail_text">
                                           Ability to understand and handle aspects of retail operational and merchandising -  from the delivery of stock to the final sale of the product with minimum 2+ years. Should be able to share multiple instances of “Customer Delight” and strong “one-to-one relationship building”.
                                            </p>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>Attitudes:</td>
                                        <td>
                                            <ul>
                                                <li>Self-motivated –  Don’t dream, obsess attitude </li>
                                                <li>Ability to relate and live the brand  - Look the part</li>
                                                <li>Believes and delivers – Excellence </li>
                                                <li>Hunger to “Succeed & Grow”</li>
                                            </ul>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> Paid Internship in USA</Accordion.Header>
                                <Accordion.Body>
                                <p className="detail_text">
                                Room Services Division  /  Food And Beverages  /  Culinary  /  Office Administrative/IT  /  Management training
                                </p>
                                <p className="detail_text">
                                Programs provide international qualified candidates with paid placements in locations throughout the United States, including New Jersey, Virginia,  Georgia, Florida, Mississippi, South Carolina, Philadelphia, Boston, California, and many other locations throughout the US. If you have ever dreamed of traveling, training, earning money and living in America, AMLINE is the right choice for you.
                                </p>
                                <p><b>Training/Internship Programs Include:</b></p>
                                <p>J-1 visa up to 12 months (non-hospitality up to 18 months)</p>
                                <p>The Internship Program places professionals in their field of expertise.</p>
                                <p>Highly qualified, motivated and professional individuals add to your work culture.</p>
                                <b>Benefits:</b>
                                <ul className="benefits">
                                <li>University students and graduates in professional categories.</li>

                                <li>Interview before selecting candidates.</li>

                                <li>Save on payroll taxes! No FICA or FUTA taxes. (State unemployment rules vary by state.)</li>

                                <li>Customized training plan.</li>
                                </ul>
                                <p><b>Work & Travel Program includes:</b></p>
                                <p>J-1 visa up to 4 to 6 months</p>
                                <p>This is an exchange program that assists companies with meeting current labor demands by bringing international university students to the U.S., on their summer, spring or winter break</p>
                                <b>Benefits:</b>
                                <ul className="benefits">
                                <li>State Department designated J-1 visa sponsor for Work/Travel.</li>

                                <li>Ideal for companies with additional staffing needs in the winter, spring or summer months.</li>

                                <li>Save on payroll taxes! No FICA or FUTA taxes (State unemployment rules vary by state.)</li>
                                </ul>
                                <b className="fe_co">Total fees cover the following expenses and services</b>
                                <ul className="fees_covers">
                                    <li><b>Placement Match</b></li>
                                    <li><b>DS-2019 Form</b></li>
                                    <li><b>SEVIS Fee</b></li>
                                    <li><b>Health Insurance</b></li>
                                    <li><b>Ongoing Support</b></li>
                                </ul>
                                <b className="fe_co">Total fees do not cover the following</b>
                                <ul className="fees_covers">
                                    <li><b>Transportation</b></li>
                                    <li><b>Personal expenses</b></li>
                                    <li><b>Air tickets</b></li>
                                </ul>
                                <b className="fe_co">If you have any questions or query feel free to contact us anytime.</b>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Campusrecruitment