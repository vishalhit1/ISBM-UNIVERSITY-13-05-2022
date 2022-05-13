import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Tab,
  Tabs,
  Accordion,
} from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ImNewspaper } from "react-icons/im";
import { FaNetworkWired } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import  abcd12  from "../../Images/ls.jpg";
import  abcd13  from "../../Images/peda.jpg";
import  abcd14  from "../../Images/placeme.jpg";
const Isbmuadvantage = () => {
  return (
    <div className="Advantage">
      <Container>
        <h2 className="advantage_title">The ISBMU Advantage</h2>
        {/* <div className="ProgramSupport__desc">Shubhamklnfes</div> */}
        <div>
          <ul
            class="nav nav-pills navv_tabs mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item navv_tabs" role="presentation">
              <a
                class="nav-link "
                id="pills-profile-tab tab_background"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <div className="ProgramSupport__tabs__icon">
                  <FaUsers className="advantage_icon" />
                </div>
                <p className="advantage_icon_text">PEDAGOGY</p>
              </a>
            </li>
            <li class="nav-item navv_tabs" role="presentation">
              <a
                class="nav-link "
                id="pills-contact-tab tab_background"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <div className="ProgramSupport__tabs__icon">
                  <FaNetworkWired className="advantage_icon" />
                </div>
                <p className="advantage_icon_text">Placements</p>
              </a>
            </li>
            <li class="nav-item " role="presentation">
              <a
                class="nav-link  active "
                id="pills-home-tab tab_background"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <div className="ProgramSupport__tabs__icon">
                  <ImNewspaper className="advantage_icon" />
                </div>
                <p className="advantage_icon_text">Learning Support</p>
              </a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <Row>
                <Col lg={6}>
                  <img
                    style={{ width: "100%" }}
                    src={abcd12}
                  ></img>
                </Col>
                <Col lg={6} className="isbm_advantage">
                  <p className="tab_view_title">
                    <FaCheck className="check_icon" />
                    Skill development
                  </p>
                  <p className="tab_view_para">
                    ISBM University in association with the Ministry and NSDC,
                    are playing a pivotal role in creating benchmark
                    institutions that demonstrate aspirational value for
                    competency based skill development training by focusing on
                    elements of quality, sustainability and connect with youth.
                  </p>
                  <p className="tab_view_para">
                    By addressing the challenges of unemployment and ensuring
                    gainful employment for the youth of the state, we are
                    enabling and mobilizing Chhattisgarh youth to make them
                    employable and work ready.
                  </p>
                  <p className="tab_view_title">
                    <FaCheck className="check_icon" />
                    Training:-
                  </p>
                  <p className="tab_view_para">
                    Requirement nowadays is of affordable & convenient formal
                    training in non-technical skills with certification from
                    "ISBM University - Global Skills".
                  </p>
                  <p className="tab_view_para">
                    This training will be aimed at people wishing to acquire
                    new-age skills to adapt to global platforms of their own
                    area of choice, or to develop their existing skills,
                    enabling them to increase their earning power.
                  </p>
                </Col>
              </Row>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <Row>
                <Col lg={6}>
                  <img
                    style={{ width: "100%" }}
                    src={abcd13}
                  ></img>
                </Col>
                <Col lg={6}>
                  {/* <p className="tab_view_title">
                    <FaCheck className="check_icon" />
                    Thesis Supervisors
                  </p> */}
                  <p className="tab_view_para">
                    At ISBM University, learning activities are characterized by
                    active engagement, inquiry, problem solving and
                    collaboration with others. The teacher acts as a guide, a
                    facilitator and also co explorer.{" "}
                    <b>
                      They encourage learners to question, challenge and
                      formulate their ideas, opinions and conclusions. The
                      pedagogy to be used would be:
                    </b>
                    <ul style={{listStyle:"none"}} className="bsbgdyhg">
                      <li className="arowww">Problem Based Learning</li>
                      <li className="arowww">Learning Constructivist Approach</li>
                      <li className="arowww">Case Studies</li>
                      <li className="arowww">Peer Tutorials</li>
                      <li className="arowww">E-Learning</li>
                      <li className="arowww">Blended Learning</li>
                      <li className="arowww">Flipped Classrooms</li>
                      <li className="arowww">Experiential Learning</li>
                    </ul>
                  </p>
                  {/* <p className="tab_view_para">
                    Unparalleled guidance from industry mentors and teaching
                    assistants.
                  </p> */}
                  {/* <p className="tab_view_title">
                    <FaCheck className="check_icon" />
                    Expert Feedback
                  </p>
                  <p className="tab_view_para">
                    Personalised expert feedback on assignments and projects
                  </p>
                  <p className="tab_view_para">
                    Regular live sessions by experts to clarify concept-related
                    doubts
                  </p> */}
                </Col>
              </Row>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <Row>
                <Col lg={6}>
                  <img
                    style={{ width: "100%" }}
                    src={abcd14}
                  ></img>
                </Col>
                <Col lg={6}>
                  {/* <p className="tab_view_title">
                    <FaCheck className="check_icon" />
                    Thesis Supervisors
                  </p> */}
                  <p className="tab_view_para">
                    ISBM University through its strong network and alliances is
                    committed to provide 100% placement services to its students
                    pursuing degree program. It aims to create resources and
                    understanding of career opportunities, while enhancing
                    student's transition from university to career.
                  </p>
                  <p className="tab_view_para">
                    ISBM University endeavors to equip its students with all
                    skills required for being employable in the industry,
                    services, Government and Non-Government sector. To meet with
                    this objective, ISBM University has established its
                    placement cell as an interface between the University and
                    the corporate arena. This placement cell is responsible for
                    the industry academy interaction, corporate training and
                    seminars and various workshops thus strengthening the
                    corporate relations ultimately helping the students in good
                    placements. 
                  </p>
                  {/* <p className="tab_view_title">
                    <FaCheck className="check_icon" />
                    Expert Feedback
                  </p>
                  <p className="tab_view_para">
                    Personalised expert feedback on assignments and projects
                  </p>
                  <p className="tab_view_para">
                    Regular live sessions by experts to clarify concept-related
                    doubts
                  </p> */}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Isbmuadvantage;
