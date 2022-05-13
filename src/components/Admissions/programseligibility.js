import React, { useEffect } from 'react';
import { Container, Row, Col, Breadcrumb, Tab, Tabs } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import { Link, BrowserRouter } from 'react-router-dom';
import eggss11 from '../../Images/eggs1.PNG';
import { GrLock } from 'react-icons/gr';
import Enquiry_now from "../enquiry_now";
import Allinone from "../commanfiles/allinone";
import { BsDownload } from "react-icons/bs";
const ProgramsEligibility = () => {
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header />
            <NavigationBar />
            <div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                        Programmes and Eligibilities
                    </h1>
                    <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                    <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Admissions
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Programmes and Eligibilities</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3}>
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
                    <Col lg={9}>
                        <h2 className="linkabout123">Programmes and Eligibilities</h2>
                        <p className="detail_text">We provide management education with innovative applied
                            research and practice to educate business leaders of tomorrow. Our graduates make a
                            difference by creating real value for society by emphasizing a focus on a holistic
                            multi-disciplinary, and multi-cultural approach to learning.</p>
                        <p className="detail_text">Interaction with business leaders and entrepreneurs,
                            industrial visits and workshops, prepares the students to be leaders who can address
                            the most urgent and challenging problems that the world is facing today.
                        </p>
                        <p className="detail_text">
                            Personality enhancement and practical experience through a continuous process of
                            industry-academia interface are facilitated, thereby making them socially responsible,
                            culturally aware and ethically better citizens of today and tomorrow.
                        </p>
                        <p className="detail_text">
                            Taught interactively through real-client, project-based learning, and regular
                            networking opportunities, students undergo a real-world transformative learning
                            experience.
                        </p>
                        <p className="detail_text">
                            Our graduates are valued for their well-rounded education, many enjoying strong
                            starting salaries and career opportunities. Always future-ready, they are well
                            prepared to make a difference in business and society.
                        </p>
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
                                        <th>Duration</th>
                                        <th>Mode</th>
                                        <th>Eligibility</th>
                                        <th>Syllabus</th>
                                    </tr>
                                    <tr>
                                        <td><Link to="/bachelors-of-commerce">
                                            Bachelors in Commerce (B.Com)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 or Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelors_in_business_administration">
                                            Bachelors in Business Administration (BBA)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>10 + 2 or Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/bachelors-of-science">
                                            Bachelors in Science (B.Sc)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelor_of_science_in_computer_science">
                                            Bachelor of Science in Computer Science (B.SC-Computer Science)</Link></td>
                                        <td>3 Years</td>
                                        <td></td>
                                        <td>10 + 2</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelor_of_science_in_fashion_designing">
                                            Bachelor of Science in Fashion Designing (B.SC-FD)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelor_of_science_in_interior_designing">
                                            Bachelor of Science in Interior Design (B.Sc-ID)</Link></td>
                                        <td>1 Year</td>
                                        <td>Semester</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelor_of_computer_applications">
                                            Bachelor of Computer Applications (BCA)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual/Semester</td>
                                        <td>10 + 2</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelor_of_science_in_information_technology">
                                            Bachelor of Science in Information Technology (B.Sc.[I.T.])</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual/Semester</td>
                                        <td>10 + 2</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/bachelors-social-work">
                                            Bachelor of Social Work (BSW)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/bachelors-of-arts">
                                            Bachelor of Arts (B.A)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelor_of_library_and_information_science">
                                            Bachelor of Library and Information Science (B.Lib.)</Link></td>
                                        <td>1 Year</td>
                                        <td>Annual</td>
                                        <td>Graduation</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Bachelor_of_arts_in_journalism_and_mass_communication">
                                            Bachelor of Arts in Journalism and Mass Communication (BA-JMC)</Link></td>
                                        <td>3 Years</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/diploma-interior-design">
                                            Diploma in Interior Design (DID)</Link></td>
                                        <td>6 Months</td>
                                        <td>Semester</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Certificate_in_interior_design">
                                            Certificate in Interior Design (CID)</Link></td>
                                        <td>6 Months</td>
                                        <td>Semester</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Diploma_in_fashion_designing">
                                            Diploma in Fashion Management (DFM)</Link></td>
                                        <td>3 Years</td>
                                        <td>Semester</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/masters-in-commerce">
                                            Masters in Commerce (M.Com)</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual</td>
                                        <td>Graduation with Commerce</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Masters_in_business_administration">
                                            Masters in Business Administration (MBA)</Link></td>
                                        <td>2 Years</td>
                                        <td>Semester</td>
                                        <td>Graduation Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/masters-in-science">
                                            Masters in Science(M.Sc)</Link></td>
                                        <td>2 Years</td>
                                        <td>Semester</td>
                                        <td>Graduation Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Master_of_science_in_computer_science">
                                            Masters of Science in Computer Science (M.SC-Computer Science)</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual/Semester</td>
                                        <td>Graduation</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>

                                    <tr>
                                        <td><Link to="/Executive_masters_in_business_administration">
                                            Executive Masters in Business Administration (EMBA)</Link></td>
                                        <td>18 Months</td>
                                        <td>Semester</td>
                                        <td>Graduation Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Master_of_computer_applications">
                                            Master of Computer Applications (MCA)</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual/Semester</td>
                                        <td>Graduation</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Master_of_science_in_information_technology">
                                            Master of Science in Information Technology (M.Sc.[I.T.])</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual/Semester</td>
                                        <td>Graduation</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/masters-social-work">
                                            Master of Social Work (MSW)</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual</td>
                                        <td>Graduation Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/masters-of-arts">
                                            Master of Arts (M.A)</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual</td>
                                        <td>Graduation</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>

                                    <tr>
                                        <td><Link to="/Master_of_library_and_information_science">
                                            Master of Library and Information Science (M.Lib.)</Link></td>
                                        <td>1 Year</td>
                                        <td>Semester</td>
                                        <td>B.Lib</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Master_of_arts_in_journalism_and_mass_communication">
                                            Master of Arts in Journalism and Mass Communication (MA-JMC)</Link></td>
                                        <td>2 Years</td>
                                        <td>Annual</td>
                                        <td>Graduation</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Diploma_in_business_administration">
                                            Diploma in Business Administration (DBA)</Link></td>
                                        <td>1 Year</td>
                                        <td>Annual</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Diploma_in_computer_application">
                                            Diploma in Computer Application (DCA)</Link></td>
                                        <td>1 Year</td>
                                        <td>Annual/Semester</td>
                                        <td>10 + 2</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/Certificate_in_Fashion_designing">
                                            Certificate in Fashion Designing (CFD)</Link></td>
                                        <td>1 Year</td>
                                        <td>Semester</td>
                                        <td>10 + 2 Equivalent</td>
                                        <td><a download ><BsDownload /> Click Here</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
            <Allinone />
            <Footer />
        </div>
    )
}

export default ProgramsEligibility