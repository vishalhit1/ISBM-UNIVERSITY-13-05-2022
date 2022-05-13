import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Breadcrumb,
  Accordion,
} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Othercommunitie = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="innerbackimage">
          <div className="text_banners_abcds">
              <h1 className="animate__animated animate__fadeInRightBig">
              Other Committees
              </h1>
                  <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
          <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
          </div>
      </div>
      <Container className="About_us11 container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item active>Other Committees</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col lg={3} className="mobile_view_none11">
            <h3 className="title">About us</h3>
            <p className="links_about1">
              <Link to="/aboutus">About ISBMU University</Link>
            </p>
            <p className="links_about1">
              <Link to="/Missionvalues">Vision, Mission and Values</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorable">Hon'ble Visitor</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorablepatron">Hon'ble Patron</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorablechancellor">Hon'ble Chancellor</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorablevicechancellor">Hon'ble Vice-Chancellor</Link>
            </p>
            <p className="links_about1">
              <Link to="/Officialregistar"> Registrar</Link>
            </p>
            <p className="links_about1">
              <Link to="/Governingbody"> Governing Body</Link>
            </p>
            <p className="links_about1">
              <Link to="/Message">Messages of the Dignitaries</Link>
            </p>
            <p className="links_about1">
              <Link to="/Boardmanagement">Board of Management</Link>
            </p>
            <p className="links_about1">
              <Link to="/Academiccouncil">Academic Council</Link>
            </p>
            <p className="links_about1">
              <Link to="/BoardAdvisor">Board of Advisors</Link>
            </p>
            <p className="links_about active">
              <Link to="/Othercommunitie">Other Committees</Link>
            </p>
            <p className="links_about1">
              <Link to="/StatuesOrdinance">Statutes and Ordinances</Link>
            </p>
            <p className="links_about1">
              <Link to="/Recognisation">Recognitions and Approvals</Link>
            </p>
            <p className="links_about1">
              <Link to="/Awards">Awards</Link>
            </p>
            <p className="links_about1">
              <Link to="/Mediacoverage">Media Coverage</Link>
            </p>
            {/* <p className="links_about1"><Link to="/">Mou's &amp; Collaboration</Link></p> */}
          </Col>
          <Col lg={9}>
            <h2 className="linkabout123">Other Committees</h2>
            <Accordion className="faqss" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Anti Ragging Committee</Accordion.Header>
                <Accordion.Body>
                  <ul className="committe-list">
                    <li>Dr. Mukesh Kumar Ray</li>
                    <li>Dr. Sohal Lal Sahu</li>
                    <li>Mrs. Romi Bala</li>
                    <li>Ms. Khusboo Rajput</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header> Examination Committee</Accordion.Header>
                <Accordion.Body>
                  <p>Examination Committee has been constituted to authorize to make policy to organize, conduct, evaluate and
                    publish results of the University examination. The planning of examination, conduct of Examination are the basic
                    functions assigned to the Controller of Examination and his functionaries.<br/>
                    Examination related matters should be addressed to-<br/>

                    Mr. Richards Hadlee<br/>
                    Mail ID- examination@isbmuniversity.edu.in</p>
                  <ul className="committe-list">
                    <li>Dr. T.S. Sinha</li>
                    <li>Dr. Bhupendra Sahu</li>
                    <li>Dr. N. Kumar Swamy</li>
                    <li>Mr. Praveen Yadaw</li>
                    <li>Mr. Mahendra Sonkar</li>
                    <li>Mr. Ganesh Ram Kaushik</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Discipline Committee</Accordion.Header>
                <Accordion.Body>
                  <p>The Discipline committee will look after the on campus and off campus discipline of the students in day to day basis. The role
                  of the committee is to maintain the discipline in strict manner in different areas of the campus like- class room, office,
                  seminar hall, laboratories, play ground, mess, hostel, canteen, bus, in and around the campus.<br/>
                  In case of any cat of in -discipline, students may contact-<br/>
                  Mr. Arjun Singh<br/>
                  Mail ID- arjun.singh@isbmuniversity.edu.in</p>
                  <ul className="committe-list">
                    <li>Mr. Fanish Chandrakar</li>
                    <li>Mr. Gokul Prasad Sahu</li>
                    <li>Mr. Hemant Pandy</li>
                    <li>Dr. Bhupendra Sahu</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              {/* <Accordion.Item eventKey="4">
                <Accordion.Header>
                  {" "}
                  Research and Development Committee
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="committe-list">
                    <li>Dr. N Kumar Swamy</li>
                    <li>Dr. B.P.Bhol</li>
                    <li>Dr. Bhupendra Sahu</li>
                    <li>Dr. Sandeep Kumar Sahu</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item> */}
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Training, Placement and Entrepreneurship Committee
                </Accordion.Header>
                <Accordion.Body>
                  <p>Training imparted to the students to make students industry ready. Understanding the relevance of the training soft skill training and
                  other industry recruitment training programs are imparted to the students. On campus, off campus and pooled campus facilities are
                  provided to the students.<br/>
                  Students may contact<br/>
                  Mr. Praveen Kumar Yadaw<br/>
                  Mail ID- tpo@isbmuniversity.edu.in</p>
                  <ul className="committe-list">
                    <li>Mr.Preetam Sahu</li>
                    <li>Mr. Mahendra Sonkar</li>
                    <li>Mr. Praveen Yadaw</li>
                    <li>Ms. Garima Diwan</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Construction and Purchase CommitteE
                </Accordion.Header>
                <Accordion.Body>
                  <p>A Purchase Committee has been constituted for purchase documentation, preparation of list of supplier and
                  service providers basing on the price, quality and stock. The University level purchase committee will comprise of
                  the following to execute purchase decisions and test the quality of the equipment, machinery, glassware,
                  chemicals, sports equipment, computer peripherals and articles and items required for the University. <br/>
                  In case of requisition and purchase, please contact- <br/>
                  Mr. O. P. Sharma <br/>
                  Mail ID- omprakash.sharma@isbmuniversity.edu.in</p>
                  <ul className="committe-list">
                    <li>Mr. Diamond Sahu</li>
                    <li>Ms. Diksha Chandrakar</li>
                    <li>Mr. Gaurav</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  {" "}
                  Internal Quality and Assurance Committee
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="committe-list">
                    <li>Mr. Rishabh Sharma</li>
                    <li>Mr. Kamlesh Bisen</li>
                    <li>Mr. Ram Krishna Deshmukh</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  {" "}
                  NAAC accreditation Committee
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="committe-list">
                    <li> Ms. Garima Diwan</li>
                    <li>Dr. Mukesh Kumar Ray</li>
                    <li>Dr. Sandeep Kumar Sahu</li>
                    <li>Dr. N Kumar Swamy</li>
                    <li>Mr. Preetam Sahu</li>
                    <li>Mr. Diamond Sahu</li>
                    <li>Mrs. Romi Bala</li>
                    <li>Mr. Ashwani Sahu</li>
                    <li>Ms. Vimla Sona</li>
                    <li>Mr. Hemant Verma</li>
                    <li>Dr. Bhupendra Sahu</li>
                    <li>Mr. Rishabh Sharma</li>
                    <li>Mr. Bhupesh Patra</li>
                    <li>Ms. Shikha Yadaw</li>
                    <li>Mr. Gokul Sahu</li>
                    <li>Mr. preetam Sahu</li>
                    <li>Dr. Bhupendra Sahu</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header> Sports Committee</Accordion.Header>
                <Accordion.Body>
                  <p>The Sports Committee has been constituted for the physiological well-being of the students. The committee is empowered to draw sports
                  calendar for both indoor and outdoor games. It will conduct inter University tournaments. In addition it will organize training camps to
                  develop the qualities of the sportsmen.<br/>
                  The sports person may contact-<br/>
                  Mr. Ashwani Kumar Sahu<br/>
                  Mail ID- ashwani.k@isbmuniversity.edu.in</p>
                  <ul className="committe-list">
                    <li>Mr. Ashwani Sahu</li>
                    <li>Mr. Hemant Pandey</li>
                    <li>Mrs. Romi Bala</li>
                    <li>Ms. Garima Diwan</li>
                    <li>Mr. Saurav Shukla</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header> Cultural Committee</Accordion.Header>
                <Accordion.Body>
                  <p>
                  The Cultural Committee is a platform to provide opportunities to the students for organizing different cultural events in the University.
                  They will take steps for budget approval for the events including the permission to organize the program. Spring festival, youth festivals,
                  dance festivals will be organized by the committee both in the state and national level.<br/>
                  Students are advised to contact-<br/>
                  Ms. Vimla Sona<br/>
                  Mail ID- vimla.sona@isbmuniversity.edu.in<br/>
                  </p>
                  <ul className="committe-list">
                    <li>Ms. Vimla Sona</li>
                    <li>Ms. Garima Diwan</li>
                    <li>Mrs. Romi Bala</li>
                    <li>Mr. Preetam Sahu</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>Library Committee</Accordion.Header>
                <Accordion.Body>
                  <ul className="committe-list">
                    <li>Ms. Vimla Sona</li>
                    <li>Mr. Pukhraj Yadav</li>
                    <li>Dr. Sohan Lal Sahu</li>
                    <li>Mr. Khemraj Chandrakar</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>
                  Health and Hygiene Committee
                </Accordion.Header>
                <Accordion.Body>
                  <p>The University Health Committee is an advisory body, the committee maintains a outdoor medical unit in the campus for instant outdoor
                  and first aid facility.<br/>
                  In case of emergency cantact-<br/>
                  Dr. Garima Diwan<br/>
                  Mail ID- garima.diwan@isbmuniversity.edu.in</p>
                  <ul className="committe-list">
                    <li>Mr. Rishabh Sharma</li>
                    <li>Dr. Garima Diwan</li>
                    <li>Mr. Yugal Kishor Rajput</li>
                    <li>Mr. Rajendra Kumar Sahu</li>
                    <li>Mrs. Nimmi Sahu</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header> Hostel Committee</Accordion.Header>
                <Accordion.Body>
                  <p>The Hostel Committee has been constituted to look after the hostel administration including hostel allotment, supervision of mass,
                    discipline in the hostel premises.<br/>

                    For boys hostel, students may contact-<br/>
                    Mr. Chandrashekar Kurre<br/>

                    Mail ID- chandrashekhar@isbmuniversity.edu.in<br/>

                    For Girls hostel, students may contact-<br/>
                    Dr Poonam Verma<br/>
                    Mail ID- jyoti.rai@isbmuniversity.edu.in</p>
                  <ul className="committe-list">
                    <li>Mr. Bhupesh Patra</li>
                    <li>Ms. Romi Bala</li>
                    <li>Mr. C.S. Kurree</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>Student grievance Committee</Accordion.Header>
                <Accordion.Body>
                <p>The functions of the Students Grievance Committee are to look into the complaints lodged by any student, and judge its
                  merit. The Grievance Redressal Committee is also empowered to look into matters and redress the grievances within a
                  shortest time frame.<br/>
                  In case of any grievances, students may contact or post their grievances to-<br/>
                  Ms. Deeksha Kamalwanshi<br/>
                  Mail ID- students-support@isbmuniversity.edu.in</p>
                  <ul className="committe-list">
                    <li> Dr. Mukesh Kumar Ray</li>
                    <li>Ms. Garima Diwan</li>
                    <li>Mr. Manish Pandey</li>
                    <li>Dr. Bhupendra Sahu</li>
                    <li>Mr. Kamlesh Bisen</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header> NCC &amp; NSS Committees</Accordion.Header>
                <Accordion.Body>
                  <ul className="committe-list">
                    <Table>
                      <thead>
                        <th>NCC</th>
                        <tr>
                          <ul>
                            <li>Mr. Gokul Sahu</li>
                          </ul>
                        </tr>
                        <th>NSS</th>
                        <tr>
                          <ul>
                            <li> Mr. preetam Sahu</li>
                            <li>Mr. Pukhraj Yadaw</li>
                            <li>Ms. Vimla Sona</li>
                            <li>Mr. Bhupesh Patra</li>
                          </ul>
                        </tr>
                      </thead>
                    </Table>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>
                  Media and News Letter Committees
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="committe-list">
                    <li>Dr. Bhupendra Sahu</li>
                    <li>Mr. Dipesh Nishad</li>
                    <li>Ms. Garima Diwan</li>
                    <li>Mr. Pukhraj Yadav</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Othercommunitie;
