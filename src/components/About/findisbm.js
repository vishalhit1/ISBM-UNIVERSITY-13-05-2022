import { Container,Row,Col,Form,Button,Carousel} from "react-bootstrap";
import award1 from '../../Images/award.jpg';
import award2 from '../../Images/award1.png';
import logo11 from '../../Images/icon10.jpg';
import logo12 from '../../Images/icon20.jpg';
import logo13 from '../../Images/icon30.jpg';
import logo14 from '../../Images/icon40.jpg';
import logo15 from '../../Images/icon50.jpg';
const Findisbm =()=>{
    return (
        <div>
            {/* <Container className="findisbm">
                <Row className="find_abcd1">
                    <Col lg={7}>
                        <Row className="find_abcd2">
                            <Col lg={3}>
                                <h3>
                                FIND <br />ISBM ON:
                                </h3>
                            </Col>
                            <Col lg={9}>
                            <span className="connect">Connect with ISBM University</span><br/>
                            <span className="newsletter">ISBM's Official NewsLetter</span>
                            <div className="form_news">
                            <Form.Control type="email" placeholder="Your Email Address" />
                            <Button variant="primary subscribe" type="submit">
                            Subscribe
                            </Button>
                            </div>
                            </Col>
                            <div className="quicklinks">
                                <h3>QUICK LINKS</h3>
                                    <Row>
                                     <Col lg={2}>
                                         <img src={logo11} /><br />
                                         <span>
                                         Industry interface
                                         </span>
                                     </Col>
                                     <Col lg={2}>
                                         <img src={logo12} /><br />
                                         <span>
                                         LIBRARY
                                         </span>
                                     </Col>
                                     <Col lg={2}>
                                         <img src={logo13} /><br />
                                         <span>
                                         STAFF EMAIL ACCESS
                                         </span>
                                     </Col>
                                     <Col lg={2}>
                                         <img src={logo14} /><br />
                                         <span>
                                         SEMINARS
                                         </span>
                                     </Col>
                                     <Col lg={2} className="last">
                                         <img src={logo15} /><br />
                                         <span>
                                         STUDENTS SECTION
                                         </span>
                                     </Col>
                                    </Row>  
                            </div>
                        </Row>
                    </Col>
                    <Col lg={5}>
                    <h2 className="gallery">Picture gallery</h2>
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={award2}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={award1}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={award2}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </Container>    */}
        </div>
    )
}
export default Findisbm