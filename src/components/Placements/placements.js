import React from "react";
import {Container, Row,Col,Carousel,Card,Button} from 'react-bootstrap';
import img_1 from '../../Images/1.jpg';
import OwlCarousel from 'react-owl-carousel';
import event1 from '../../Images/latest-event-1.png';
import event2 from '../../Images/latest-event-2.png';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
const state= {
    responsive:{
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
            items: 1,
        },
    },
}
const Placement = () =>{
    return(
        <React.Fragment>
            {/* <Row className="bg-placements mt-5">
                <h3 className="Placements-h1">Placements</h3>
                <p className="Placements-para">ISBM University has an independent Placement Cell to facilitate campus placements and jobs for the students.</p>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col lg={5}>
                                    <h5 className="placements-card">Placement Card</h5>
                                    <img src={img_1}  className="placements-card-img"></img>
                                </Col>
                                <Col lg={7}>
                                    <h5 className="placement-card-color">JNU offers Privilege Placement Card to its students that assures 100% placement assistance and the students who are performing exceptionally good gets chance on campus residential training.</h5>
                                </Col>
                            </Row> 
                        </Col>
                           
                        <Col lg={6}>
                            <h5 className="placements-card">Top Placement</h5>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img
                                    className="d-block w-50"
                                    src={img_1} 
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3 className="carousel-h3">First slide label</h3>
                                    <p className="carousel-para">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                    className="d-block w-50"
                                    src={img_1}
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h3 className="carousel-h3">Second slide label</h3>
                                    <p  className="carousel-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-50"
                                    src={img_1}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3 className="carousel-h3">Third slide label</h3>
                                    <p className="carousel-para">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Row> */}
        <section className="home-section-5 wow fadeInUp" data-wow-delay=".5s">
        <div className="container">
          <h2 className="wow fadeInUp" data-wow-delay=".7s"> Placements</h2>
          <p className="wow fadeInUp" data-wow-delay=".9s">ISBM University has an independent Placement Cell to facilitate campus placements and jobs for the students.</p>
          <div className="row">
            <div className="col-md-6 wow fadeInLeft" data-wow-delay="1s">
              <h3> Placement Card</h3>
              <div className="row">
                <div className="col-md-4">
                  <img className="img-fluid img_hgt"  src={img_1} alt="placement_card" /></div>
                <div className="col-md-8">
                  <div className="card_placement">
                    <p className="pb-3 mb-0 text-left">
                    ISBM University offers Privilege Placement Card to its students that assures 100% placement <font face="Arial, sans-serif">assistance</font>&nbsp;and the students who are performing exceptionally good gets chance on campus residential training.</p>
                  </div>
                </div>
              </div>
            </div>
            <div  className="col-md-6 wow fadeInLeft" data-wow-delay="1s">
            <h3> Top Placement</h3>   
            <OwlCarousel margin={20} autoplay nav={false} dots={false} touchDrag={true} lazyLoad={true} responsive={state.responsive}>
                <div className="item">
                <div className="row">
                    <div className="col-md-6"><img src={img_1} id="repplacestudent_ctl06_img1" className="img-fluid" alt="ISBM" /></div>
                    <div className="col-md-6">
                    <h4 className="pb-3 mb-0 text-left"><strong> Sidharth Kumar </strong> </h4>
                    <p className="pb-3 mb-0 text-left"> B.Tech. (Computer Science)	<br />
                        Company: Bosch<br />
                        Package : 5.5 LPA<br />
                        Session: 2019-20 </p>
                    </div>
                </div>
                </div>
                <div className="item">
                <div className="row">
                    <div className="col-md-6"><img src={img_1} id="repplacestudent_ctl06_img1" className="img-fluid" alt="ISBM" /></div>
                    <div className="col-md-6">
                    <h4 className="pb-3 mb-0 text-left"><strong> Sidharth Kumar </strong> </h4>
                    <p className="pb-3 mb-0 text-left"> B.Tech. (Computer Science)	<br />
                        Company: Bosch<br />
                        Package : 5.5 LPA<br />
                        Session: 2019-20 </p>
                    </div>
                </div>
                </div>
            </OwlCarousel>
            </div>
          </div>
        </div>
      </section>



        </React.Fragment>
    )
}

export default Placement;