import React, { useEffect } from "react";
import { Container, Row, Col, Breadcrumb, Tab, Tabs } from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { HiUserGroup } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsFillDiscFill } from "react-icons/bs";
const Career_opportunities = () => {
  return (
    <div className="CareerTransition">
      <div className="career_opportunities">
        <Container>
          <h4 className="carrer_title">Career Opportunities</h4>
        </Container>
      </div>
      <div className="career_cards">
        <Container>
          <Row>
            <Col>
              <div className="Career_item">
                <div className="Career_icon">
                  <HiUserGroup className="cards_icon" />
                </div>
                <h6 className="career_card_title">
                  Personalised Industry Session
                </h6>
                <p className="career_card_para">
                  Training imparted to the students to make students industry
                  ready. Understanding the relevance of the training soft skill
                  training and other industry recruitment training programs are
                  imparted to the students.
                </p>
              </div>
            </Col>

            <Col>
              <div className="Career_item">
                <div className="Career_icon">
                  <MdMessage className="cards_icon" />
                </div>
                <h6 className="career_card_title">High Performance Coaching</h6>
                <p className="career_card_para">
                  In partnership with the Ministry of Skill Development &
                  Entrepreneurship (MSDE) and National Skill Development
                  Corporation (NSDC), we have launched a state-of-the-art Model
                  Training Centre (MTC).
                </p>
              </div>
            </Col>

            <Col>
              <div className="Career_item">
                <div className="Career_icon">
                  <BsFillDiscFill className="cards_icon" />
                </div>
                <h6 className="career_card_title">
                  Career Mentorship Sessions (1:1)
                </h6>
                <p className="career_card_para">
                  Conduct Career Opportunity Workshops, Personality Tests.
                  Counsel students for a smooth transition from student to
                  employee.Network with Industries to identify job 
                  opportunities and skill / knowledge requirements.
                </p>
              </div>
            </Col>

            <Col>
              <div className="Career_item">
                <div className="Career_icon">
                  <FaBook className="cards_icon" />
                </div>
                <h6 className="career_card_title">Interview Preparation</h6>
                <p className="career_card_para">
                  Train students for preparing CV, Group Discussion, Written
                  Tests and Interviews. Conduct Mock Interview Sessions. Conduct
                  Job Fairs and Placement Weeks
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Career_opportunities;
