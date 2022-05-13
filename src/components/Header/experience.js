import React from "react";
import {Row,Col,Container} from "react-bootstrap";
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Ubuntu:ital,wght@1,300&display=swap" rel="stylesheet"></link>
const Experience =()=>{
    return(
        <React.Fragment>
            <h3 className='w-75 m-auto text-center mt-5 h3-exp'>"Be a part of ISBM University to enhance your knowledge , <br></br>skills and prosperous for the better future"</h3>
            <Container style={{marginBottom:'40px'}}>
                <Row className='mt-5 text__mobiless'>
                    <Col lg={3}>
                        <p style={{color:'black',fontSize:'50px'}}><b className="exp-p count">200</b>+</p>
                        <p className='expfont'><b>Renowned Teaching Faculty</b></p>
                    </Col>
                    <Col lg={3}>
                        <p style={{color:'black',fontSize:'50px'}}><b className="exp-p count">100</b>+</p>
                        <p className='expfont'><b>Programmes to Choose From</b></p>
                    </Col>
                    <Col lg={6}>
                        <p>Our practical courses teach you advanced skills with lots of personal support. Search and Apply to be a part of ISBM University</p>
                        <input type='text' placeholder='Find Programmes' className='form-control input'></input>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Experience;