import React from 'react'
import { Container, Row, Col, Breadcrumb, Tab, Tabs } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Imagesss from "../../Images/rec/18.jpg";
const Ourstudentwork = () => {
const state = {
    responsive: {
        0: {
        items: 2,
        },
        450: {
        items: 2,
        },
        600: {
        items: 2,
        },
        1000: {
        items: 6,
        },
    },
    };
  return (
    <div className="our_student">
     <Container>   
      <h4 className="our_student_work_at">Our Students Work At</h4>
      <p className="our_student_work_at_para">
        Top companies from all around the world have recruited ISBMU
        alumni
      </p>
      <OwlCarousel
        className="owl-theme"
        margin={20}
        autoplay
        nav={true}
        dots={false}
        items={1}
        touchDrag={true}
        lazyLoad={true}
        responsive={state.responsive}
      >
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
        <div class="item" className="carousel_imgss">
          <img src={Imagesss}></img>
        </div>
      </OwlCarousel>
      </Container>
    </div>
  )
}

export default Ourstudentwork