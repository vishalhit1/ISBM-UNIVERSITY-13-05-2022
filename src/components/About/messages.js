import React, { useEffect } from "react";
import { Container, Row, Col, Accordion, Breadcrumb } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";
import abc1 from "../../Images/MsAnusuiya Uikey.jpg";
import abc2 from "../../Images/umesh_patel.jpg";
import abc3 from "../../Images/ts_singhdev.jpg";
import abc4 from "../../Images/chattisgarh-niji-vishvavidyalaya.jpg";
import abc5 from "../../Images/aa.jpg";
const Message = () => {
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
            Messages of the Dignitaries
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
          <Breadcrumb.Item active>Messages of the Dignitaries</Breadcrumb.Item>
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
            <p className="links_about active">
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
            <p className="links_about1">
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
            <h2 className="linkabout123">Path Finders</h2>
            <Accordion className="faqss" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  Message from our Hon. Minister of Higher Education, Government
                  of Chhattisgarh Umesh Patel.
                </Accordion.Header>
                <Accordion.Body>
                  {/* <img
                    className="img_abcd"
                    src={abc2}
                  />
                  <p id="umpara">
                    Umesh Nandkumar Patel is one of the most popular and dynamic
                    youth leaders of Indian National Congress. He is an Indian
                    politician, from Chhattisgarh. A member of the Indian
                    National Congress and has been the president of the
                    Chhattisgarh Youth Congress Committee since September 2016.
                    He represents the Kharsia constituency in the Chhattisgarh
                    Legislative Assembly.
                  </p> */}
                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        className="img_abcd1 sdsd1"
                        src={abc2}
                      />
                    </div>
                    <div className="col-lg-9">
                      <p id="umpara">
                        Umesh Nandkumar Patel is one of the most popular and dynamic
                        youth leaders of Indian National Congress. He is an Indian
                        politician, from Chhattisgarh. A member of the Indian
                        National Congress and has been the president of the
                        Chhattisgarh Youth Congress Committee since September 2016.
                        He represents the Kharsia constituency in the Chhattisgarh
                        Legislative Assembly.
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  {" "}
                  Message from our Hon. Minister of Medical Education Government
                  of Chhattisgarh TS Singhdev.
                </Accordion.Header>
                <Accordion.Body>

                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        className="img_abcd1 sdsd1"
                        src={abc3}
                      />
                    </div>
                    <div className="col-lg-9">
                      <p id="umpara">
                        Tribhuvaneshwar Saran Singh Deo or T. S. Singh Deo is an
                        Indian politician from Chhattisgarh. He is the current
                        Health Minister of Chhattisgarh. He is also the current
                        titular Maharaja of Surguja, with headquarters at Ambikapur.
                        He was the last mentor to sit on the throne of Surguja.
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  {" "}
                  Message from our Hon. Home Minister and PWD Minister
                  Government of Chhattisgarh Tamradhwaj Sahu.
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        className="img_abcd1 sdsd1"
                        src={abc5}
                      />
                    </div>
                    <div className="col-lg-9">
                      <p>
                      Tamradwaj Sahu is a seasoned politician. He belongs to the Indian National Congress Party. Born in an ordinary family of
                      Patora village of Bemetara district in (then Madhya Pradesh) Chhatisgarh, Sahu could receive his formal education only till
                      higher secondary. He has been active in social service from a young age and started political journey as a congressman to
                      rose through the ranks gradually. He worked for Madhya Pradesh Congress Seva Dal, then as Mahamantri of Madhya
                      Pradesh Congress Committee and Chairman of Madhya Pradesh Text Book corporation. Mr Sahu won his maiden election for
                      Madhya Pradesh Legislative Assembly in 1998 and then went won to winning 2003, 2008 and 2018 for Chhattisgarh
                      Assembly from the Durg constituency. He was elected to the 16th Lok Sabha from Durg (Lok Sabha constituency),
                      Chhattisgarh in 2014 as a candidate of Indian National Congress. When Chhattisgarh got statehood in 2000, Tamradwaj Sahu
                      was appointed as the minister of state for Water Resources, Energy and Education, Science and Technology, Agriculture,
                      Animal Husbandry and Cooperative. He has also worked as a member of the standing committee for official language, coal
                      and steel, petroleum and natural gas in Parliament during his tenure as a Member of Lok Sabha from 2014 - 2018. Mr. Sahu
                      was appointed as the Home Minister in the Chhattisgarh state government as the congress came back to power after over a

                      decade in 2018. He was also made the cabinet minister for Public Construction, Jail, Religious Trust, and Tourism and Culture
                      portfolios.<br/><br/>
                      <a href="https://en.wikipedia.org/wiki/Tamradhwaj_Sahu" target="_blank">https://en.wikipedia.org/wiki/Tamradhwaj_Sahu</a>
                      </p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Message from Our Hon. Anusuiya Uikey Governor of Chhattisgarh.
                </Accordion.Header>
                <Accordion.Body>
                  {/* <img
                    className="img_abcd1"
                    src={abc1}
                    />
                  <p id="umpara">
                    Anusuiya Uikey is a politician and currently serving as the
                    governor of Chhattisgarh. She was elected to the Madhya
                    Pradesh Legislative Assembly from Damua in the 1985 Madhya
                    Pradesh Legislative Assembly election as a member of the
                    Indian National Congress.
                  </p> */}
                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        className="img_abcd1 sdsd1"
                        src={abc1}
                      />
                    </div>
                    <div className="col-lg-9">
                      <p id="umpara">
                        Governor of the state is the academic leader. The function of a Governor is to oversee the institutional
                        performance of the Universities. Anusuiya Uikey is functioning as the Hon’ble Governor of Chhattisgarh.
                        She started her political career as a member of Legislative Assembly. She is a tribal leader and rendered
                        dedicated service for the upliftment of the tribal community. As visitor of the private Universities she has
                        interest to make Chhattisgarh as an education hub for the world. She has interest to promote
                        Chhattisgarhi language and culture in the curriculum.
                      </p>
                      <a href="https://rajbhavancg.gov.in" target="_blank">https://rajbhavancg.gov.in</a>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  {" "}
                  Chhattisgarh Niji Vishwavidyalaya Niyamak Aayog
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        className="img_abcd1 sdsd1"
                        src={abc4}
                      />
                    </div>
                    <div className="col-lg-9">
                      <p>Chhattisgarh Private Regulatory Commission is a statutory body of the Govt. of Chhattisgarh. It is
                        responsible for providing guidance and supervision to the private Universities Established in the State of
                        Chhattisgarh. The commission is dedicated to monitor and supervise the academic standard of the private
                        Universities. The commission functions under the general control of the Visitor i.e. the Hon’ble Governor
                        of Chhattisgarh. It consists of Chairman, Member Academic and Member Administration. The Secretary
                        looks after the functional aspect of the commission. The commission provides a regulatory mechanism in
                        order to ensure appropriate standards in teaching, examination, research, protecting the interest of the
                        student and providing reasonable service condition to the employees working in private Universities.</p>
                    </div>
                  </div>
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

export default Message;
