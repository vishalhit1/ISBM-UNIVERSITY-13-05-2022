import React, { useEffect } from "react";
import { Container,Row,Col,Accordion,Breadcrumb} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Studentcornerbanner from "./studentcornerbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import Enquiry_now from "../enquiry_now";
const Antiragging =()=>{
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
                        Anti-Ragging Policy
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                Student Corner
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Anti-Ragging Policy</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col lg={3}>
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to="/Faqs">FAQ</Link></p>
                        <p className="links_about1"><Link to="/Scholarships">Scholarship</Link></p>
                        <p className="links_about active"><Link to="/Antiragging">Anti-Ragging Policy</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">Anti-Ragging Policy</h2>
                        <h2 id="rag1">Ragging</h2>
                        <h2 id="rag2">Alcohol, Smoking, Gambling</h2>
                        <h2 id="rag3">Misconduct, Hooliganism, Indiscipline</h2>
                        <h2 id="rag4">Possession or use of firearms or any latheal weapon</h2>
                        <h2 id="rag5">Possession or use of addictive or hallucinogenic drugs in the campus</h2>
                        <h2 id="rag6">Possession or use of alcoholic beverages or delinquency under the influence of alcohol</h2>
                        <p className="detail_text">Student found guilty of such act by the way of including in or outside the premises of the University shall be liable to punishment as per the guidelines given by UGC in the light of the direction of Hon'ble Supreme Court depending upon the natural gravity of the offence establish by Anti Ragging Committe of the University. The punishment for those found guilty of the ragging at the University level shall be any one or any combination of the following:</p>
                        <ul id="anyul">
                            <li id="lianty">Suspension from attending classes and academic privileges</li>
                            <li id="lianty">Withholding/withdrawing scholarship/ fellowship and other benefits</li>
                            <li id="lianty">Debarring from appearing in any test/ examination or other evaluation process</li>
                            <li id="lianty">Withholding Results</li>
                            <li id="lianty">Debarring from representing the institute in any regional, national or international meet, tournament, youth festival etc.</li>
                            <li id="lianty">Suspension/ expulsion from the hostel</li>
                            <li id="lianty">Cancellation of admission</li>
                            <li id="lianty">Rustication from the institute for period ranging from 1 to 4 semesters</li>
                            <li id="lianty">Fine ragging from Rs. 25,000/- and Rs. 1 Lakh</li>
                            <li id="lianty">Collective punishment: When the persons committing or abetting the crime of ragging are bot identified, the institution shall resort to collective punishment.</li>

                        </ul>
                        <Accordion className="faqss" defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Rules & Regulations</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col lg={12} >
                                            <p><b>STUDENT DISCLIPLINE:</b></p>
                                            <p>Student enrolled in the University must recognize their responsibilities towards the faculty, office staff and fellow students by maintaining appropriate standards of conduct will attract disciplinary action.</p>

                                            <p>The University believes that duty, decorum and discipline are the hallmarks of a good student. Students with such qualities alone can prove to be productive manpower with appreciable value system. Therefore, erring students would be subject to certain disciplinary code. The following acts would be deemed to be acts of indisicipline. Any overt or covert act leading to ragging, eve teasing disruption of class room activities, disturbing the studies of other students or marring the operations of the University, its educational activities or harming the health, safety of staff or students or damaging the property, possession of any intoxicants, illicit drugs or weapons in the University campus, misconduct during examination, production of false information or documents for admission purpose and the failure to returned loaned materials or settle debts with the ISBM University of Studies.</p>
                                            <p><b>RULES & REGULATIONS</b></p>
                                            <ul className="rules_regula">
                                                <li> If an applicant is found not eligible for admission on verification of the document's at any stage or otherwise, eligibility shall stand cancelled. If such instances go undetected during the admission process but are detected in subsequent semester/ year, such disqualifcation will take place with retrospective effect. In such a case, the applicant shall have no claim whatsoever against the ISBM University.</li>
                                                <li>All the students shall be required to produce their original certificate of the last examination passed for verification as and when asked for. Since all the admission to University are provisional and are likely to be cancelled if the original certificates are found fake and fraudulent. Such students will not be awarded a degree certificate even after completion of the course. The University reserves the right to withdraw a degree certificate from the student whose educational documents are not found genuine or true.</li>
                                                <li>The Degree/Diploma/Certificates will be awarded to the students only if he/she acquires pass grade in all the semesters within the maximum duration of the course</li>
                                                <li>In case a student does not clear all the examinations in the maximum duration as mentioned in the course details, he/she will not be awarded a Degree / Diploma / Certificate and no fee shall be refunded such that case.</li>
                                                <li>The student can discontinue his/her studies anytime during the year but the fees paid by him/her will not be refunded in any circumstances.</li>
                                                <li>It is the wholesome discretion of ISBM UNIVERSITY to upgrade or modify the syllabus or content of the course without prior intimation to student.</li>
                                                <li>If it is found at any stage/level that student has concealed/misguided/violates any rules and regulations, ISBM University keeps right to terminate the admission of the student. The fees paid will be forfeited & it will not be refunded under any circumstances. Gariyaband, Raipur court is the jurisdiction in case of any dispute / legal action.</li>
                                            </ul>
                                        </Col>
                                    </Row>

                                    
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

export default Antiragging
