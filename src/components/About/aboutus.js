import React, { useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Aboutus = () => {
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
              About University
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
          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col lg={3} className="mobile_view_none11">
            <h3 className="title">About us</h3>
            <p className="links_about active">
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
              <Link to="/Officialregistar">Registrar</Link>
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
              <Link to="/">Board of Advisors</Link>
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
            <h2 className="linkabout123">About Us</h2>
            <p className="detail_text">
              ISBM University is a new-age university committed to provide
              innovative learning programs like Diploma in Journalism and Mass
              Communication, Executive Master of Business Administration,
              Bachelors in Commerce , Diploma In Business Administration ,
              Bachelors in Business Administration,Bachelor of Science in
              Computer Science , Diploma in Computer Application, Bachelor in
              Computer Application and Post Graduation Diploma in Computer
              Application to meet the requirements of the industry. ISBM
              University programs are research-driven, skill-based and
              knowledge-intensive. The University is envisioned to be a center
              of academic innovation and research where students and faculty
              would collaborate to learn, research, create, innovate, inspire
              and incubate.
            </p>
            <p className="detail_text">
              ISBM University endeavors to offer services across the
              student-life cycle, supporting the students not only with
              teaching-learning but also with career development, skill
              enhancement, employment opportunities, business incubation,
              fundraising and mentoring.
            </p>
            <p className="detail_text">
              With the network and pan India presence of the Group, the students
              of ISBM University can benefit from the reach and network across
              corporate and industries. This would help our students with
              placement as well as business networking and incubation.
            </p>
            <p className="detail_text">
              ISBM University is established and approved by the Government of
              Chhattisgarh under the Chhattisgarh Private Universities
              (Establishment and Operation) Act, 2005 (Amendment Act 2016) to
              confer doctorate, degree, diploma, and certificates to students.
            </p>
            <p className="detail_text">
              At ISBM University, we are led by purpose and passion. We're
              committed to challenging convention and ourselves to meet the
              needs of new-age students, and we strive for a greater impact: one
              measured in people helped and lives improved.
            </p>
            <Row className="sub_details">
              <Col lg={6}>
                <div className="borders">
                  <h4>Our Focus:</h4>
                  <p>
                  We are a university Thinking & Teaching Differently with a focus on providing quality education, leadership, and incubation. 
                  Our university is networked with global alliances
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="borders">
                  <h4>Our Academics:</h4>
                  <p>
                  Molding students to make meaningful contributions to society as engaged citizens and leaders 
in a complex and fast-paced world. A rich learning experience that provides a broad perspective, 
foundation, and deep subject-area expertise. Wide range of opportunities to participate in the
advancement of all fields of knowledge
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="borders">
                  <h4>Our Students:</h4>
                  <p>
                  Students here at ISBM University believe in us to shape their future with blended and problem-based learning.
At ISBM University, we have students aspiring in different yet unique fields of management, health, and technology. 
They are lifelong learners, imbibing universal values of Knowledge. Wisdom. Humanity.
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="borders">
                  <h4>Our Approach:</h4>
                  <p>
                  The way we think and look at the future of the learning environment is changing and with that, 
we are changing our perspective too. There are student-centered policies 
and practices with inclusive experience. We, as a university are driven and student-oriented. 
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="borders">
                  <h4>Our life-on-campus:</h4>
                  <p>
                  Life On Campus is driven by a passion for growth and a future career. We offer more than just Academics.
Education at ISBM University is a Lifelong Learning to Cherish.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Aboutus;
