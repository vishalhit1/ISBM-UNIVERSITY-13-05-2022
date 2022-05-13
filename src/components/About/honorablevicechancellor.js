import React, { useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import anand from "../../Images/anand.jpg";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Honorablevicechancellor = () => {
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
            Hon'ble Vice Chancellor
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
          <Breadcrumb.Item active>Hon'ble Vice Chancellor</Breadcrumb.Item>
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
            <p className="links_about active">
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
            <h2 className="linkabout123">Hon'ble Vice Chancellor</h2>
            <Row>
              <Col lg={4}>
                <div className="honor_div">
                  <img className="img_honor" src={anand} />
                </div>
              </Col>
              <Col lg={8}>
                <h3 className="honor_name">Pro. (Dr.) Anand Mahalwar</h3>
                <p className="honor_details">
                  ISBM University is a new age, technologically driven modern
                  institution of higher learning. It has been established in
                  Chura tehsil in Garyaband district of Chhattisgarh. It has
                  been promoted by a group of persons who have high level of
                  integrity and years of experience in the field of running
                  reputed institutions of higher learning. They are men with
                  vision and social commitment. As Jawaharlal Nehru famously
                  wrote, ' a university stands for humanism, for tolerance, for
                  reason, for the adventure of ideas and search for truth'. The
                  ISBM University holds all these democratic values very high
                  and is committed to follow them in letter and spirit. In fact,
                  the University has already been awarded the best upcoming
                  University in the country by the HRD Ministry in association
                  with ASSOCHAM. This is indeed a matter of pride and a vote of
                  confidence in our ability to plan, execute and deliver
                  educational services professionally and diligently.
                </p>
                <p className="honor_details">
                  The University has two main objectives. One, to cater to the
                  higher educational needs of people of this region who have,
                  for long, been deprived of quality education. Second, to give
                  quality assurance in providing educational service so that
                  graduating students get placed in gainful employment after
                  leaving the portals of ISBM University. The University has
                  plans to attract students and faculty from pan India because
                  of unflinching faith in positive outcomes from diversity. We
                  have made elaborate plans for achieving this goal; later we
                  would like to make a mark at the global level, too. We are
                  committed to provide quality infrastructure and competent
                  faculty in the campus. The University is spread over more than
                  30 acres of lush green campus with modern facilities of
                  internet and telephone connectivity. All learning resources
                  including books and internet facilities shall be made
                  available. Hostels within the campus for boys and girls will
                  be ready by the time courses begin for the new academic year
                  2017-18.
                </p>
                <p className="honor_details">
                  The ISBM University lays emphasis on all round development of
                  personalities of students. It will be our endeavor to convert
                  the campus in to a hub of buzzing activities. Being in the
                  field of higher education for very long, we understand the
                  needs of today's youth. Hence, the University will make all
                  efforts to make learning process a joyous and fun filled one.
                  We are living in exciting times as India makes its mark
                  globally and takes its position in the new emerging
                  socio-economic order. There will be no dearth of opportunities
                  for young Indians, both with in India and outside. Of course,
                  we need to produce quality young men and women who can take
                  advantage of these growth opportunities. That is where
                  institutions such as ISBM can contribute in a big way.
                </p>
                <p className="honor_details">
                  As a team, we welcome you all for enrolling in various
                  programs of ISBM University and I will assure that there will
                  not be a dull moment; I also assure you that you will not
                  regret your decision to join ISBM University!
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Honorablevicechancellor;
