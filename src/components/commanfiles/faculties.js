import React, { useEffect } from "react";
import { Container, Row, Col, Breadcrumb, Tab, Tabs } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TiArrowForward } from "react-icons/ti";
import Ashish from '../../Images/Ashish Kumar Tamrakar.jpg';
import MAHENDRA from '../../Images/MAHENDRA KUMAR.jpg';
import Kishor from '../../Images/kishor.PNG';
import RISHABH from '../../Images/RISHABH SHARMA.JPG';

const Faculties = () => {
  const state1 = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <div className="faculties_background">
      <Container className="faculties_container">
        <h4 className="faculties_h4" style={{ paddingTop: "30px" }}>
          Faculties
        </h4>
        <p className="faculties_para">
          Learn from leading management faculty and industry leaders worldwide
        </p>

        <OwlCarousel
          className="owl-theme"
          margin={20}
          // autoplay
          nav={true}
          dots={false}
          items={1}
          touchDrag={true}
          lazyLoad={true}
          responsive={state1.responsive}
        >
          <div class="item">
            <div className="Instructors__list__item">
              <div className="faculties_img">
                <img src={Ashish}></img>
              </div>
              <h3 className="faculties_name">DR. ASHISH TAMRAKAR</h3>
              <small className="faculties_profession">
                ASSOCIATE PROFESSOR
              </small>
              <p className="faculties_text">
                He published 15+ Papers in International Journal on various
                topics of Information Technology.
              </p>
            </div>
          </div>
          <div class="item">
            <div className="Instructors__list__item">
              <div className="faculties_img">
                <img src={MAHENDRA}></img>
              </div>
              <h3 className="faculties_name">DR. MAHENDRA KUMAR</h3>
              <small className="faculties_profession">
                Assistant Professor
              </small>
              <p className="faculties_text">
                DR. MAHENDRA KUMAR has experience of working, researching and
                teaching in the Pharmacy domain with ISBM University.
              </p>
            </div>
          </div>
          <div class="item">
            <div className="Instructors__list__item">
              <div className="faculties_img">
                <img src={RISHABH}></img>
              </div>
              <h3 className="faculties_name">MR. RISHABH SHARMA</h3>
              <small className="faculties_profession">
                Assistant Professor
              </small>
              <p className="faculties_text">
                Prof. RISHABH SHARMA Manage information technology and computer
                systems. Plan, organize, control and evaluate IT and electronic
                data operation
              </p>
            </div>
          </div>
          <div class="item">
            <div className="Instructors__list__item">
              <div className="faculties_img">
                <img src={Kishor}></img>
              </div>
              <h3 className="faculties_name">MR. YUGAL KISHOR RAJPUT</h3>
              <small className="faculties_profession">
                Assistant Professor
              </small>
              <p className="faculties_text">
                Prof. YUGAL KISHOR RAJPUT has experience of working, researching
                and teaching in the Pharmacy domain with ISBM University.
              </p>
            </div>
          </div>
        </OwlCarousel>
      </Container>
    </div>
  );
};

export default Faculties;
