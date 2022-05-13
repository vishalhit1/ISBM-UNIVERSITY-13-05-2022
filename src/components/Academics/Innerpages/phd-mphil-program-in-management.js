import React, { useEffect } from "react";
import { Container, Row, Col, Breadcrumb, Button, Accordion } from "react-bootstrap";
import Footer from "../../footer";
import Header from "../../Header/header";
import NavigationBar from "../../Header/navbar";
import Managementbanner from "../../Academics/managementbanner";
import { Link, BrowserRouter } from 'react-router-dom';
import { BsDownload } from "react-icons/bs";
import Enquiry_now from "../../enquiry_now";
import { MdPlayArrow } from 'react-icons/md';
import Allinone from "../../commanfiles/allinone";
// import Brouche from '../Images/ISBM_PROSPECTUS.pdf';
import Brouche from '../../../Images/ISBM_PROSPECTUS.pdf';
import DBA from '../../../Images/Syllabus_pdf/DBA.pdf';
import PGDBA from '../../../Images/Syllabus_pdf/PGDBA.pdf';
import BBA from '../../../Images/Syllabus_pdf/BBA.pdf';
// import MBA from '../../Images/Syllabus_pdf/MBA.pdf';
import EMBA from '../../../Images/Syllabus_pdf/EMBA.pdf';
const Phd_mphil_program_in_management = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <div className="innerbackimage8">
        <div className="text_banners_abcds">
          <h1 className="animate__animated animate__fadeInRightBig">
            Ph.D. Program (Management)
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
            <div className="BannerSection__programStats__static__desc">:Doctorate</div>
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
            School of Management
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Ph.D. Program (Management)</Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          <Col lg={3} className="ordersss">
            <h4 className="programees">Schools</h4>
            <ul className="abcd1111">
              <li>
                <Link to="/SchoolCommerce">School of Commerce</Link>
              </li>
              <li>
                <Link to="/Schoolmanagement">School of Management </Link>
              </li>
              <li>
                <Link to="/Schoolscience">School of Science</Link>
              </li>
              <li>
                <Link to="/Schoolartshuman">School of Arts and Humanities</Link>
              </li>
              <li>
                <Link to="/Schoolengrtech">
                  School of Engineering and Technology
                </Link>
              </li>
              <li>
                <Link to="/Schooloflibrary">
                  School of Library and Information Science
                </Link>
              </li>
              <li>
                <Link to="/Journalismandmass">
                  School of Journalism and Mass Communication
                </Link>
              </li>
              <li>
                <Link to="/Schoollaws">School of Law</Link>
              </li>
              <li>
                <Link to="/Schooldesign">School of Design</Link>
              </li>
              <li>
                <Link to="/Schoolofit">
                  School of Information and Technology{" "}
                </Link>
              </li>
              <li>
                <Link to="/Schoolofpharma" target="blank">School of Pharmacy</Link>
              </li>
              <li>
                <Link to="/Schooloflifescience">School of Life Science</Link>
              </li>
              <li>
                <Link to="/Schoolofyoga">School of Yoga and Naturopathy</Link>
              </li>
              <li>
                <Link to="/Schoolofeducation">School of Education</Link>
              </li>
              <li>
                <Link to="/Schoolofhotelmanagement">
                  School of Hotel Management
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={9} className="ordersss11">
            <h2 className="linkabout123">Ph.D. Program (Management)</h2>
            <p>A post graduate diploma in Business Administration will be of great help in polishing the knowledge and skills acquired during your Bachelors program. Students at ISBM University have the feasibility to choose from a variety of Post Graduate Diploma programs thus enabling them to gain expertise and applied familiarity within a particular field that interests them the most.</p>

            <p><MdPlayArrow className="arrow11" /><b>Objectives of the program</b></p>
            <p>The University aims to maintain high research standards in keeping with the University Grants Commission (Minimum Standards and Procedure for Award of M.PHIL./PH.D Degrees) Regulations, 2016.</p>
            <p>ISBM University, being a multi-faculty institution of higher education, encourages inter disciplinary research. The award of the Ph.D. degree is based on satisfactory completion of prescribed coursework, publication of research papers in listed journals and demonstration of the ability to undertake an independent research project. </p>
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
                    <td><Link to="/Diploma_in_business_administration">
                      Diploma in Business Administration (DBA)</Link></td>
                    <td>1 Year</td>
                    <td>Annual</td>
                    <td>10 + 2 Equivalent</td>
                    <td><a download href={DBA}><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td><Link to="/Post_graduate_diploma_in_business_administration">
                      Post Graduate Diploma in Business Administration (PGDBA)</Link> </td>
                    <td>1 Year</td>
                    <td>Annual</td>
                    <td>Graduation Equivalent</td>
                    <td><a download href={PGDBA}><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td><Link to="/Bachelors_in_business_administration">Bachelors in Business Administration (BBA)</Link></td>
                    <td>3 Years</td>
                    <td>Semester</td>
                    <td>10 + 2 Equivalent</td>
                    <td><a download href={BBA}><BsDownload /> Click Here</a></td>
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
                    <td><Link to="/Executive_masters_in_business_administration">
                      Executive Masters in Business Administration (EMBA)</Link></td>
                    <td>18 Months</td>
                    <td>Semester</td>
                    <td>Graduation Equivalent</td>
                    <td><a download href={{ EMBA }}><BsDownload /> Click Here</a></td>
                  </tr>
                  <tr>
                    <td><Link to="/">
                      Phd In Management</Link></td>
                    <td>3 Years</td>
                    <td>Semester</td>
                    <td>PG In Relavant Discipline</td>
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
    </React.Fragment>
  )
}

export default Phd_mphil_program_in_management