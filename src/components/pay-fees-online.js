import { Container,Breadcrumb,Form,Button,Row} from "react-bootstrap";
import Footer from "./footer";
import $ from 'jquery';
import Header from "./Header/header";
import NavigationBar from "./Header/navbar";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import React,{useEffect} from "react";
import axios from 'axios';
import Enquiry_now from "./enquiry_now";
const Payfeesonline =()=>{
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    async function getData(e) {
        e.preventDefault();
       
        var name = $('#name1').val();
        var email = $('#email1').val();
        var amount = $('#amount1').val();
        var phone = $('#phone1').val();
        var course = $('#course1').val();
        var comment = $('#comment1').val();
        var orderid = Date.now();
        let input = {
            "email": email,
            "name": name,
            "amount": amount,
            "return_url": "https://isbmuniversity.edu.in/api/payment_response.php",
            "order_id": orderid,
            "mode": "LIVE",
            "currency": "INR",
            "description": "Payment Gateway",
            "phone": phone,
            "address_line_1": "Lalji Pada",
            "address_line_2": "Kandivali West",
            "city": "Mumbai",
            "state": "Maharashtra",
            "zip_code": "400051",
            "country": "India",
            "udf1": course,
            "udf2": comment,
            "udf3": "",
            "udf4": "",
            "udf5": ""
        };
    
        console.log(input);
        await axios.post("https://isbmuniversity.edu.in/api/payment_proceed.php",input)
        .then((response) => {
            $('input[name="amount"]').val(amount);
            $('input[name="name"]').val(name);
            $('input[name="email"]').val(email);
            $('input[name="phone"]').val(phone);
            $('input[name="order_id"]').val(orderid);
            $('input[name="udf1"]').val(course);
            $('input[name="udf2"]').val(comment);
            $('input[name="hash"]').val(response.data.data);
            $('#tnpForm1').attr("action", "https://biz.traknpay.in/v2/paymentrequest");
            $('#tnpForm1').submit();
        });
    }
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                    Pay Fee Online
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us fee_form">
            <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Pay Fee</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <div className="wm-student-settings-info">
                <div className="wm-student-dashboard-settings">
                <div className="wm-plane-title">
                    <h1 className="regis_details">Pay Online</h1>
                </div>
                <Form id="tnpForm">
                <Row>
                <div className="col-lg-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control  type="text" id="name1" name="name1" placeholder="Enter Full Name" />
                        </Form.Group>
                    </div> 
                    <div className="col-lg-6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control required type="text" id="email1"  name="email" placeholder="Enter Email Address"/>
                        </Form.Group>
                    </div> 
                    <div className="col-lg-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control required type="text" id='phone1' name="phone"  placeholder="Enter Mobile Number" />
                        </Form.Group>
                    </div> 
                    <div className="col-lg-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Counselor Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Counselor Name" />
                        </Form.Group>
                    </div>
                    <div className="col-lg-6">
                    <Form.Group className="mb-3">
                    <Form.Label>Courses</Form.Label>
                    <select required name="course1" id="course1" className="form-control">
                     <option value="">Select Course</option>
                     <option value="School of Arts and Humanities">School of Arts and Humanities</option>
                     <option value="Bachelor in Arts (BA)">&nbsp; &nbsp;- Bachelor in Arts (BA)</option>
                     <option value="Bachelor in Social Work (BSW)">&nbsp; &nbsp;- Bachelor in Social Work (BSW)</option>
                     <option value="Bachelors in Arts ( Public Administration) (BA-PA)">&nbsp; &nbsp;- Bachelors in Arts ( Public Administration) (BA-PA)</option>
                     <option value="Masters in Arts (MA)">&nbsp; &nbsp;- Masters in Arts (MA)</option>
                     <option value="Masters in Arts- Public Administration / Economics / English">&nbsp; &nbsp;- Masters in Arts- Public Administration / Economics / English</option>
                     <option value="Masters in Arts- Education">&nbsp; &nbsp;- Masters in Arts- Education</option>
                     <option value="Masters in Social Work (MSW)">&nbsp; &nbsp;- Masters in Social Work (MSW)</option>
                     <option value="">School of Management and Commerce</option>
                     <option value="Diploma in Business Administration (DBA)">&nbsp; &nbsp;- Diploma in Business Administration (DBA)</option>
                     <option value="Bachelors in Business Administration (BBA)">&nbsp; &nbsp;- Bachelors in Business Administration (BBA)</option>
                     <option value="Bachelors in Commerce (BCom)">&nbsp; &nbsp;- Bachelors in Commerce (BCom)</option>
                     <option value="Masters in Business Administration (MBA)">&nbsp; &nbsp;- Masters in Business Administration (MBA)</option>
                     <option value="Executive Masters in Business Administration (EMBA)">&nbsp; &nbsp;- Executive Masters in Business Administration (EMBA)</option>
                     <option value="Masters in Commerce (MCom)">&nbsp; &nbsp;- Masters in Commerce (MCom)</option>
                     <option value="Post Graduate Diplomas (PGD)">&nbsp; &nbsp;- Post Graduate Diplomas (PGD)</option>
                     <option value="">School of Library and Information Science</option>
                     <option value="Bachelors in Library and Information Science (BLib)">&nbsp; &nbsp;- Bachelors in Library and Information Science (BLib)</option>
                     <option value="Masters in Library and Information Science (MLib)">&nbsp; &nbsp;- Masters in Library and Information Science (MLib)</option>
                     <option value="">School of Science</option>
                     <option value="Diploma in Computer Applications (DCA)">&nbsp; &nbsp;- Diploma in Computer Applications (DCA)</option>
                     <option value="Advance Diploma in Computer Application  (ADCA)">&nbsp; &nbsp;- Advance Diploma in Computer Application  (ADCA)</option>
                     <option value="Diploma in Fashion Designing (DFD)">&nbsp; &nbsp;- Diploma in Fashion Designing (DFD)</option>
                     <option value="Diploma in Interior Designing (DID)">&nbsp; &nbsp;- Diploma in Interior Designing (DID)</option>
                     <option value="Bachelors in Science (BSc)">&nbsp; &nbsp;- Bachelors in Science (BSc)</option>
                     <option value="Bachelors in Science (Computer Science) (BSc-CS)">&nbsp; &nbsp;- Bachelors in Science (Computer Science) (BSc-CS)</option>
                     <option value="Bachelors in Science (Computer Science &amp; Information Technology) (B.Sc-CS &amp; IT)">&nbsp; &nbsp;- Bachelors in Science (Computer Science &amp; Information Technology) (B.Sc-CS &amp; IT)</option>
                     <option value="Bachelors in Science (Information Technology) (B.Sc-IT)">&nbsp; &nbsp;- Bachelors in Science (Information Technology) (B.Sc-IT)</option>
                     <option value="Bachelors in Science (Fashion Designing) (B.Sc-FD)">&nbsp; &nbsp;- Bachelors in Science (Fashion Designing) (B.Sc-FD)</option>
                     <option value="Bachelors in Science (Interior Designing) (B.Sc-ID)">&nbsp; &nbsp;- Bachelors in Science (Interior Designing) (B.Sc-ID)</option>
                     <option value="Bachelors in Computer Applications (BCA)">&nbsp; &nbsp;- Bachelors in Computer Applications (BCA)</option>
                     <option value="Masters in Science (Computer Science) (MSc-CS)">&nbsp; &nbsp;- Masters in Science (Computer Science) (MSc-CS)</option>
                     <option value="Masters in Science (Computer Science &amp; Information Science) (MSc-CS &amp; IS)">&nbsp; &nbsp;- Masters in Science (Computer Science &amp; Information Science) (MSc-CS &amp; IS)</option>
                     <option value="Masters in Science (Information Technology) (MSc-IT)">&nbsp; &nbsp;- Masters in Science (Information Technology) (MSc-IT)</option>
                     <option value="Masters in Science (Biotechnology) (MSc-BT)">&nbsp; &nbsp;- Masters in Science (Biotechnology) (MSc-BT)</option>
                     <option value="Masters in Science (Electronics) (MSc-Electronics)">&nbsp; &nbsp;- Masters in Science (Electronics) (MSc-Electronics)</option>
                     <option value="Masters in Computer Applications (MCA)">&nbsp; &nbsp;- Masters in Computer Applications (MCA)</option>
                     <option value="Masters in Science (Physics/Mathematics/Chemistry/Botany/Zoology/Biotechnology)">&nbsp; &nbsp;- Masters in Science (Physics/Mathematics/Chemistry/Botany/Zoology/Biotechnology)</option>
                     <option value="Post Graduate Diploma in Computer Application (PGDCA)">&nbsp; &nbsp;- Post Graduate Diploma in Computer Application (PGDCA)</option>
                     <option value="">School of Journalism and Mass Communication</option>
                     <option value="Diploma (Journalism and Mass Communication) (DJMC)">&nbsp; &nbsp;- Diploma (Journalism and Mass Communication) (DJMC)</option>
                     <option value="Bachelors in Arts (Journalism and Mass communication (BA-JMC)">&nbsp; &nbsp;- Bachelors in Arts (Journalism and Mass communication (BA-JMC)</option>
                     <option value="Masters in Arts (Journalism and Mass communication) (MA-JMC)">&nbsp; &nbsp;- Masters in Arts (Journalism and Mass communication) (MA-JMC)</option>
                     <option value="">School of Law</option>
                     <option value="Bachelors in Law (L.L.B)">&nbsp; &nbsp;- Bachelors in Law (L.L.B)</option>
                     <option value="Bachelors in Business Administration and Bachelors in Law (B.B.A. L.L.B.)">&nbsp; &nbsp;- Bachelors in Business Administration and Bachelors in Law (B.B.A. L.L.B.)</option>
                     <option value="LLM">&nbsp; &nbsp;- LLM</option>
                     <option value="">School of Engineering and Technology</option>
                     <option value="Diploma in Engineering">&nbsp; &nbsp;- Diploma in Engineering</option>
                     <option value="Diploma in Engineering">&nbsp; &nbsp;-  Bachelor in Technology</option>
                     <option value="Diploma in Engineering">&nbsp; &nbsp;-  Master in Technology</option>
                     <option value="">School of Yoga and Naturopathy</option>
                     <option value="Diploma in Yoga (DIY)">&nbsp; &nbsp;- Diploma in Yoga (DIY)</option>
                     <option value="Diploma in Naturopathy (DIN)">&nbsp; &nbsp;- Diploma in Naturopathy (DIN)</option>
                     <option value="Bachelors in Yoga (BIY)">&nbsp; &nbsp;- Bachelors in Yoga (BIY)</option>
                     <option value="Post Graduate Diploma in Yoga (PGDY)">&nbsp; &nbsp;- Post Graduate Diploma in Yoga (PGDY)</option>
                     <option value="">Research Programs</option>
                     <option value="PhD. Two Years">&nbsp; &nbsp;- PhD. Two Years</option>
                     <option value="PhD. Three Years">&nbsp; &nbsp;- PhD. Three Years</option>
                     <option value="Mphil">&nbsp; &nbsp;- Mphil</option>
                     <option value="">Industry Inegrated Programs</option>
                     <option value="MASTERS IN BUSINESS ADMINISTRATION (MBA) (LOGISTICS &amp; SUPPLY CHAIN MANAGEMENT)">&nbsp; &nbsp;- MASTERS IN BUSINESS ADMINISTRATION (MBA) (LOGISTICS &amp; SUPPLY CHAIN MANAGEMENT)</option>
                     <option value="Others">Others</option>
                    </select>
                    </Form.Group>
                    </div> 
                    <div className="col-lg-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control required as="textarea" id='comment1' name="comment1" placeholder="Enter Comment" rows={3} />
                        </Form.Group>
                    </div>
                    <div className="col-lg-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Amount</Form.Label>
                            <Form.Control required type="text" id='amount1' name="amount" placeholder="Enter Amount" />
                        </Form.Group>
                    </div>
                    <div className="col-lg-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Transaction Type</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Transaction Type" />
                        </Form.Group>
                    </div>
                </Row>
                </Form>
        
                <Form id="tnpForm1" method="POST">
                <input type="hidden" value='51f1c2bf-8654-4215-8ee4-5bf4ef779955' name='api_key'/>
                <input type="hidden" value="" name="hash"/>
                <input type="hidden" value="https://isbmuniversity.edu.in/api/payment_response.php"  name="return_url"/>
                <input type="hidden" value="LIVE"   name="mode"/>
                <input type="hidden" value=""       name="order_id"/>
                <input type="hidden" value=""       name="amount"/>
                <input type="hidden" value="INR"    name="currency"/>
                <input type="hidden" value="Payment Gateway"  name="description"/>
                <input type="hidden" value=""       name="name"/>
                <input type="hidden" value=""       name="email"/>
                <input type="hidden" value=""       name="phone"/>
                <input type="hidden" value="Lalji Pada"     name="address_line_1"/>
                <input type="hidden" value="Kandivali West"     name="address_line_2"/>
                <input type="hidden" value="Mumbai"     name="city"/>
                <input type="hidden" value="Maharashtra"     name="state"/>
                <input type="hidden" value="400051"     name="zip_code"/>
                <input type="hidden" value="India"     name="country"/>
                <input type="hidden" value=""     name="udf1"/>
                <input type="hidden" value=""     name="udf2"/>
                <input type="hidden" value=""     name="udf3"/>
                <input type="hidden" value=""     name="udf4"/>
                <input type="hidden" value=""     name="udf5"/>
                <Button variant="primary" onClick={(e) => getData(e)} type="submit">Submit </Button>
                </Form>
                </div>
            </div>
            </div>
            <div className="col-md-2"></div>
            </Row>
            </Container>
            <Footer/>
        </div>
    )
}
export default Payfeesonline