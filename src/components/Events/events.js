import React from "react";
import {Row,Col,Carousel,Card,Button,Container} from 'react-bootstrap';
import event1 from '../../Images/latest-event-1.png';
import event2 from '../../Images/latest-event-2.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
const state= {
    responsive:{
        0: {
            items: 1,
        },
        450: {
            items: 2,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 4,
        },
    },
}
const Events =()=>{
    return(
        <React.Fragment>
        {/* <Container>
            <div className="Eventss"> 
            <h1 className='mt-3 text-center' style={{color:'#06355f'}}>Our Events</h1>
            </div>
            
        <OwlCarousel margin={20} autoplay nav={false} dots={false} items={3} touchDrag={true} lazyLoad={true}
         responsive={state.responsive}>
            <div className="item">
                <Card>
                    <Card.Img variant="top" src={event1} />
                    <Card.Body>
                        <Card.Title>24-SEPTEMBER-2021</Card.Title>
                        <Card.Text>
                            ISBM University Scholar, Mr. Yogendra Narang, has received the award "Chattisgarh Ke Ratna."                    
                        </Card.Text>
                        <Button className='btn-1'>Check Event</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="item">
                <Card>
                    <Card.Img variant="top" src={event2} />
                    <Card.Body>
                        <Card.Title>25-JUNE-2021</Card.Title>
                        <Card.Text>
                            Exclusive Workshop by BRICS CCI
                        </Card.Text>
                        <Button  className='btn-1'>Check Event</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="item">
                <Card>
                    <Card.Img variant="top" src={event2} />
                    <Card.Body>
                        <Card.Title>28-MAY-2021</Card.Title>
                        <Card.Text>
                            Lecture & Hands-on training by (Yugal Kishor) ITM University Raipur
                        </Card.Text>
                        <Button  className='btn-1'>Check Event</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="item">
                <Card>
                    <Card.Img variant="top" src={event1} />
                    <Card.Body>
                        <Card.Title>24-SEPTEMBER-2021</Card.Title>
                        <Card.Text>
                            ISBM University Scholar, Mr. Yogendra Narang, has received the award "Chattisgarh Ke Ratna."                    
                        </Card.Text>
                        <Button  className='btn-1'>Check Event</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="item">
            <Card>
                    <Card.Img variant="top" src={event2} />
                    <Card.Body>
                        <Card.Title>25-JUNE-2021</Card.Title>
                        <Card.Text>
                            Exclusive Workshop by BRICS CCI
                        </Card.Text>
                        <Button  className='btn-1'>Check Event</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="item">
            <Card>
                    <Card.Img variant="top" src={event2} />
                    <Card.Body>
                        <Card.Title>28-MAY-2021</Card.Title>
                        <Card.Text>
                            Lecture & Hands-on training by (Yugal Kishor) ITM University Raipur
                        </Card.Text>
                        <Button  className='btn-1'>Check Event</Button>
                    </Card.Body>
                </Card>
            </div>
        </OwlCarousel>
        <h1 className='text-center mt-4'><Button className='btn-1'>View All Events</Button></h1>
        </Container> */}
        </React.Fragment>
    )
}

export default Events;