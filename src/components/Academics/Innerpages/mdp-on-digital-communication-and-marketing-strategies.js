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
import { BsDownload } from "react-icons/bs";
const Mdp_on_digital_communication_and_marketing_strategies = ()=>{
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <React.Fragment>
            <Header/>
            <NavigationBar/>
            <div className="innerbackimage">
                <h1 className="animate__animated animate__fadeInRightBig">
                Mdp on digital communication and marketing strategies
                </h1>
                <button className="animate__animated animate__fadeInRightBig" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            <Container className="About_us11">
                <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>
                Certificate Programs and MDPs
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Mdp on digital communication and marketing strategies</Breadcrumb.Item>
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
                        <h2 className="linkabout123">MDP on Digital Communication and Marketing Strategies</h2>
                        <p>In today’s digital space customers are more connected, more informed, and more empowered to engage on their terms than ever before. Organizations need to reinvent their role in customer’s digital world, create memorable engaging experiences and use modern digital marketing platforms to scale and respond quickly to lead the marketplace. The businesses that win customers in the digital space will be the businesses of tomorrow.</p>
                        <p>Introduction of Digital Marketing with correct communication skills, set to be known as the future of Marketing, will help your organization rapidly grow in the current marketing playing field. A better understanding of your existing as well as potential customers in this digitally connected space will also assist the organization to be better informed, prepared and leverage the knowledge to face the future competition.</p>

                    </Col>
                </Row>
            </Container>
            <div style={{ background: '#06355f', paddingTop: '50px', paddingBottom: '20px' }}>
                <div className='container'>
                    <section>
                        <div className="programs_row">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Programme</th>
                                        <th>Level</th>
                                        <th>Syllabus</th>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Certificate_in_computer_design">Certificate in Computer Design</Link></td>
                                        <td>Graduate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Certificate_in_jewellery_design">Certificate in Jewellery Design</Link></td>
                                        <td>Graduate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_project_management">MDP on Project Management</Link></td>
                                        <td>Graduate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_digital_communication_and_marketing_strategies">MDP on Digital Communication and Marketing Strategies</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_strategy_consultancy">MDP On Strategy Consultancy</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_e_governance_and_digital_transformation_issue_and_challenges">MDP On E-Governance And Digital Transformation: Issue And Challenges</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_six_sigma_for_quality_improvement">MDP On Six Sigma For Quality Improvement</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_business_process_change_and_it_applications">MDP on Business Process Change and IT Applications</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_transforming_organizations_through_proactive_people_management_strategies">MDP on Transforming Organizations Through Proactive People Management Strategies</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_strategies_for_online_businesses">MDP On Strategies For Online Businesses</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_e_governance_and_government_process_change">MDP on E-Governance And Government Process Change</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_the_art_of_successful_leadership_and_management">MDP on The Art of Successful Leadership And Management</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_story_telling_and_theater_techniques">MDP on Story Telling And Theater Techniques</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_effective_communication_for_managers_and_leaders">MDP on Effective Communication For Managers And Leaders</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Mdp_on_data_analytics">MDP on Data Analytics</Link></td>
                                        <td>Certificate</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
                </div>
                <Allinone />
            <Footer/>
        </React.Fragment>
    )
}

export default Mdp_on_digital_communication_and_marketing_strategies