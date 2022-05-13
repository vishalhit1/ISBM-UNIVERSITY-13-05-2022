import React, { useEffect } from "react";
import { Container, Row, Col, Table, Breadcrumb } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const BoardAdvisor = () => {
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
              Board of Advisors
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
          <Breadcrumb.Item active>Board of Advisors</Breadcrumb.Item>
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
            <p className="links_about1 ">
              <Link to="/Academiccouncil">Academic Council</Link>
            </p>
            <p className="links_about active">
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
            <h2 className="linkabout123">Board of Advisors</h2>
            <Table striped bordered>
              <thead>
                <tr>
                  <th style={{ width: "300px",color:'black' }}>Sr. No.</th>
                  <th style={{ width: "300px",color:'black' }}>Name of Advisors</th>
                  <th style={{ width: "300px",color:'black' }}>Advisors Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h3>1</h3>
                  </td>
                  <td>Mr. Jitendra Nahar</td>
                  <td>
                    <p>Founder Trustee</p>
                    <p>
                      Kruti Institute of Technology and Engineering, Raipur.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>2</h3>
                  </td>
                  <td>Dr. Rajan Chopra</td>
                  <td>
                    <p>Chancellor</p>
                    <p>Chancellor at Mahatma Gandhi University, Meghalaya</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>3</h3>
                  </td>
                  <td>Dr. A.L Agrawal-Chairman</td>
                  <td>
                    <p>President-World Education Mission</p>
                    <p>Chairman-Arunachal University of Studies</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>4</h3>
                  </td>
                  <td>Mr. Sameep Shastri </td>
                  <td>
                    <p>Vice-chairman, BRICS CCI</p>
                    <p>
                      Indian Institute of Governance & Leadership, Vice Chairman
                      - BRICS Chamber of Commerce & Industry
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>5</h3>
                  </td>
                  <td>Mr. Rahul Tiwari</td>
                  <td>
                    <p>Secretary</p>
                    <p>Rahul Education Society</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>6</h3>
                  </td>
                  <td>Mrs. Sabitha Natraj</td>
                  <td>
                    <p>General Manager</p>
                    <p>Indian Oil Corporation</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>7</h3>
                  </td>
                  <td>Mr. Dinesh Gosai </td>
                  <td>
                    <p>NLP and Corporate Trainer</p>
                    <p>Meta Coaching</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>8</h3>
                  </td>
                  <td>Dr. Munir Sayyad</td>
                  <td>
                    <p>General Manager and Head of Reliance</p>
                    <p>JIO Quality Assurance Lab, Mumbai</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>9</h3>
                  </td>
                  <td>Dr. P.V Pradhan</td>
                  <td>
                    <p>Executive Director Thakur Education Trust, Mumbai.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>10</h3>
                  </td>
                  <td>Mr. Vivek Mohile</td>
                  <td>
                    <p>Director Sales and Marketing</p>
                    <p>Laticrete International, Kingdom of Saudi Arabia</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>11</h3>
                  </td>
                  <td>Mr. Sudeep Saha</td>
                  <td>
                    <p>Alumni (IIM-A), CFA</p>
                    <p>MD, Avant Group</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>12</h3>
                  </td>
                  <td>Mr. Yeshwant Raj Parasmal</td>
                  <td>
                    <p>Managing Director</p>
                    <p>Strategum Eduserve Private limited</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>13</h3>
                  </td>
                  <td>Adv. Syed Zeeshan</td>
                  <td>
                    <p>Counsel</p>
                    <p>Advocate Chhattisgarh, India</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>14</h3>
                  </td>
                  <td>Dr.AKHILESH KUMAR BHATT</td>
                  <td>
                    <p>(DY Director Of Edn.)</p>
                    <p>GNCT – Delhi</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>15</h3>
                  </td>
                  <td>Mr. Aparajeet Mittal </td>
                  <td>
                    <p>Committee Chair - BRICS CCI</p>
                    <p>Managing Director/Partner- Golden Ace Ventures LLP</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>16</h3>
                  </td>
                  <td>Adv. D.G. Naik</td>
                  <td>
                    <p>Senior Counsel</p>
                    <p>High Court, Mumbai</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>17</h3>
                  </td>
                  <td>Mr. Shakti Swamy</td>
                  <td>
                    <p>Consultant and Coach Bigvacancy.com</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>18</h3>
                  </td>
                  <td>Adv. SK Farhan</td>
                  <td>
                    <p> Senior Counsel</p>
                    <p>District Court, Raipur</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default BoardAdvisor;
