import React,{useEffect} from 'react';
import { Container,Row,Col,Breadcrumb,Tab,Tabs} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "./managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";

const Teachningmethod =()=>{
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                    Teaching Methodology/Pedagogy
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Teaching Methodology/Pedagogy</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>                  
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/Academicsphil'>Academic Philosophy</Link></p>
                        <p className="links_about1"><Link to='/Academicspartners'>Academic Partners</Link></p>
                        <p className="links_about1"><Link to='/Specialdevelopment'>Special Development Cells</Link></p>
                        <p className="links_about1"><Link to='/Downloadresources'>Online Resources</Link></p>
                        <p className="links_about active"><Link to='/Teachningmethod'>Teaching Methodology/Pedagogy</Link></p>
                        <p className="links_about1"><Link to='/MoocIsbm'>MOOC with ISBM University</Link></p>
                        <p className="links_about1"><Link to='/Diploma_in_hotel_management_and_catering_technology'>MOUs' and Collaborations</Link></p>
                        <p className="links_about1"><Link to='/Certificateemdps'>Certificate Programs and MDPs</Link></p>
                        <p className="links_about1"><Link to='/'>Student ERP</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Teaching Methodology/Pedagogy</h2>
                        <p className="detail_text">Since the start of the current millennium, new pedagogies have begun to evolve to match the scale, scope, speed, and intensity of new age digital economy. Advances in technology are disrupting the status quo in higher education, compelling us to push the boundaries of how we conceptualize the delivery of education.</p>
                        <p className="detail_text">Today's students expect their classes to include multiple modes of engagement taking advantage of technology and the learning spaces. Technology, in various forms, can be included to enhance both in- and out-of-classroom learning experiences. <b>ISBM University recognizes this inherent need of today's time and is making a pioneering effort to:</b></p>
                        <ul>
                            <li>Ensure increasing use of technology in teaching - learning process</li>
                            <li>Provide for individualized teaching</li>
                            <li>Cater to need for lifelong education using technology</li>
                            <li>Ensure easy access to information leading to its explosion, interactions round the globe</li>
                        </ul>
                        <hr/>
                        <p className="detail_text">At ISBM University, learning activities are characterized by active engagement, inquiry, problem solving and collaboration with others. The teacher acts as a guide, a facilitator and also co explorer. <b>They encourage learners to question, challenge and formulate their ideas, opinions andconclusions. The pedagogy to be used would be:</b></p>
                        <ul>
                            <li>Problem Based Learning</li>
                            <li>Learning Constructivist Approach</li>
                            <li>Case Studies</li>
                            <li>Peer Tutorials</li>
                            <li>E-Learning</li>
                            <li>Blended Learning</li>
                            <li>Flipped Classrooms</li>
                            <li>Experiential Learning</li>
                        </ul>
                        <hr />
                        <p className="detail_text">We would use technology based learning platforms, social media, internet and interactive Learning Management Systems to deliver our programs.</p>
                        <p className="detail_text">The barriers are melting down across the world and it is our scope and vision to connect the students from hinterlands of Chhattisgarh to the Global platforms.</p>
                        <p className="detail_text"><b>The ISBM University Programs are unique and unmatched by any other University Programs because of the following innovative practices:</b></p>
                        <p className="detail_text"><b>Industry Driven Syllabus</b> - our syllabus is updated every year to reflect the present and future requirements of industry and economy</p>
                        <p className="detail_text"><b>Systems driven Management</b> - Using technology we are highly systems driven rather than people dependent. All our processes are automated.</p>
                        <p className="detail_text"><b>Student Centric Approach</b> - Our policy making and approach is student centric, putting students first always. This ensures seamless positive student experience at ISBM University.</p>
                        <p className="detail_text"><b>Value based</b> - We aim to inculcate universal and global values in our students not by preaching but by setting an example</p>
                        <p className="detail_text"><b>Spoken English</b> - every student will undergo special classes for Spoken English to improve the communication skills</p>
                        <p className="detail_text"><b>Personality Development</b> - every students will undergo intensive workshops on personality development to make them ready for the knowledge economy</p>
                        <p className="detail_text"><b>Career Skills</b> - Whether its writing a CV or being prepared for interview, we will prepare our students for everything they aspire</p>
                        <p className="detail_text"><b>Medium of Instruction</b> - Flexible option for Hindi and English as medium of instruction</p>
                        <p className="detail_text"><b>Program Structure</b> - Innovative program structure with credit transfers ensures that students can pursue their passion</p>
                        <p className="detail_text"><b>Think Global. Act Local</b> - Our inter-disciplinary approach and global partners help us to meet the emerging global standards in university education, yet we are well oriented to meet the local industry requirements</p>
                        <p className="detail_text"><b>Internships</b> - practical and hands-on education is a defining element of ISBM University education. Every student will undertake Internship Assignments.</p>
                        <p className="detail_text"><b>Government recognized</b>  - The University is established by the Act of State Government of Chhattisgarh and recognized by the Department of Higher Education.</p>
                        <p className="detail_text"><b>Industry Ready</b> - The university syllabus, teaching methods, teachers and students are all industry ready, to meet the requirements and challenges of emerging economy and fuelled by technological innovations</p>
                        <p className="detail_text"><b>Entrepreneurship and Leadership</b> - All students will undergo special Sensitization Programs for Entrepreneurship and Leadership, an important quality for future success in career</p>
                        <p className="detail_text"><b>Placement</b> - We assure 100% placement assistance. Period.</p>
                        <p className="detail_text"><b>Incubation</b> - For those creative and innovative students who aspire to start their own business venture, we provide them with mentoring, money and models</p>
                        <p className="detail_text"><b>Teaching Learning methodology</b><br/>
                            Effective Teaching Learning Process lays strong foundation for achieving academic success. ISBM University follows Learner Centered Teaching Approach to promote and develop the knowledge, skills, attitudes and continuous learning habit among its students. Students do activities that enable them to acquire knowledge, skills, and good thoughts and values. The curriculum is innovative and comprehensive which enables our students to get knowledge, skills and expertise which will make them competitive in the global world.</p>
                        <p className="detail_text">Learning at ISBM University is an added advantage as it is not only limited to classrooms but practical exposure is made through field visits, summer internship, vocational courses and constant interaction with industry personnel / professional experts. Guest Lectures/ Expert Lectures by eminent persons from Industry & Academia/Industrial/Field Visits. Use of Audio Visual Aids in Teaching Learning Process.Seminars, Workshops on Emerging, Innovative techniques in various technical/non-technical fields by Industry Experts.</p>
                        <p className="detail_text"><b>Lectures Tutorials</b><br/>
                            ISBM University's classrooms and lecture halls are well equipped with modern teaching aids like multimedia projectors and computers with Wi-Fi connectivity. The simulated teaching software helps the students to understand the subject material in highly visualized form.</p>
                        <p className="detail_text"><b>Guest lectures and Seminars</b><br/>
                            The guest lectures and seminars are delivered from the best industrial and corporate professionals to bring the application practices from the actual working environment</p>
                        <p className="detail_text"><b>Practicals</b><br/>
                            The practical sessions are the ideal testing grounds for students to apply. Test and confirm the LMS content.</p>
                        <p className="detail_text">Case studies</p>
                        <p className="detail_text"><b>Industrial Visits</b><br/>
                            ISBM University also conducts student visits to reputed industries, acquainting students with the processes and practices that govern the modern industry.</p>
                        <p className="detail_text"><b>Mentoring</b><br/>
                            A student mentoring system has been evolved for giving personal to each of the students. The faculty member provides constant support and every piece of advice whenever he/she faces a problem with any aspect of the curricula.</p>
                        <p className="detail_text"><b>Academic Program and evaluation system</b><br/>
                            ISBM University has adopted flexible credit-based approach after a thorough study of the best practices followed in India, US and UK. We have devised a term based system in which deficient students are given opportunity to make up for their deficiency, by taking summer projects/make up examination facilitated by University. This enables the students to earn requisite credits for graduation a term earlier than the prescribed minimum duration. Although such student continue to be the students of the University they can indulge themselves in high-end research, development, training on live projects on campus or in Industrial set ups, etc. thus providing them global perspective and work culture exposure.</p>
                        <p className="detail_text">The University curriculum allows students to choose from an array of Courses. Proper education counseling is provided to the students to choose the course according to their interest. The template of the courses is broken into various segments such as applied courses, communications and soft skills courses, management, social sciences and Humanities related courses, Core courses, Electives and Open electives. Students are encouraged to take inter-disciplinary courses in different disciplines.</p>
                        <p className="detail_text">The faculty of ISBM University is its greatest strength. It is a blend of experience and the youthful vigor, a judicious mix of academic and Industrial experience hand-picked from reputed institutions of Indian and Abroad and from the corporate sector. Besides teaching, the faculty is also involved in research and consulting and has number of projects sponsored by National and Governmental funding bodies and Schemes. The faculty also has to its credit a number of publications in referred journals and conferences.</p>
                        <h3 className="Excellence">ISBM UNIVERSITY IS YOUR GATEWAY TO EXCELLENCE</h3>
                    </Col>     
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Teachningmethod