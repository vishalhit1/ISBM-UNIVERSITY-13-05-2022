import { Carousel, Container,Row,Col,Card } from "react-bootstrap";
import universitypartners1 from '../../Images/university-partners-1.png';
import universitypartners3 from '../../Images/university-partners-3.png';
import universitypartners4 from '../../Images/university-partners-4.png';
import universitypartners5 from '../../Images/university-partners-5.png';
import universitypartners6 from '../../Images/university-partners-6.png';

const UniversityP =()=>{
return(
    <>
    <Container className="mt-5 mb-5">
      <Row>
          <Col>
          <Card body className="bg-color text-white rounded-0"><h5>UNIVERSITY PARTNER</h5></Card>
          </Col>
      </Row>
      <Row>
              <Col>
              <Carousel variant="dark" interval={2000}>
                    <Carousel.Item>
                      <Row>
                        <Col lg={2}> <img
                        className="d-inline"
                        src={universitypartners1} className="img-fluid"
                        alt="First slide"
                      /></Col>
                      <Col lg={2}> <img
                        className="d-inline"
                        src={universitypartners3} className="img-fluid"
                        alt="First slide"
                      /></Col>
                       <Col lg={2}> <img
                        className="d-inline"
                        src={universitypartners4} className="img-fluid"
                        alt="First slide"
                      /></Col>
                       <Col lg={2}> <img
                        className="d-inline"
                        src={universitypartners5} className="img-fluid"
                        alt="First slide"
                      /></Col>
                       <Col lg={2}> <img
                        className="d-inline"
                        src={universitypartners6} className="img-fluid"
                        alt="First slide"
                      /></Col>
                     <Col lg={2}> <img
                        className="d-inline"
                        src={universitypartners1} className="img-fluid"
                        alt="First slide"
                      /></Col>
                      </Row>
                    
                    
                    
                    </Carousel.Item>
                    <Carousel.Item>
                      <Row>
                        <Col lg={2}> <img
                        className="d-block"
                        src={universitypartners1} className="img-fluid"
                        alt="First slide"
                      /></Col>
                      <Col lg={2}> <img
                        className="d-block"
                        src={universitypartners3} className="img-fluid"
                        alt="First slide"
                      /></Col>
                       <Col lg={2}> <img
                        className="d-block"
                        src={universitypartners4} className="img-fluid"
                        alt="First slide"
                      /></Col>
                       <Col lg={2}> <img
                        className="d-block"
                        src={universitypartners5} className="img-fluid"
                        alt="First slide"
                      /></Col>
                       <Col lg={2}> <img
                        className="d-block"
                        src={universitypartners6} className="img-fluid"
                        alt="First slide"
                      /></Col>
                     <Col lg={2}> <img
                        className="d-block"
                        src={universitypartners1} className="img-fluid"
                        alt="First slide"
                      /></Col>
                      </Row>
                    
                    
                    
                    </Carousel.Item>
      
            </Carousel>
              </Col>
      </Row>
    </Container>


  
    </>
)
}

export default UniversityP;