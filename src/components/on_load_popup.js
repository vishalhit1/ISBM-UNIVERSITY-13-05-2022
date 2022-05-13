import React,{useState} from "react";
import logo from '../Images/isbm-university.png';
import { Modal,Button,Form} from "react-bootstrap";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
function On_load_popup(props) {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const history = useHistory();
    const[emaildata,setEmail]= useState({name:"",email:"",phone:"",location:"",course:"",remark:"comment",pagename:"Popup Form",websitename:"ISBM University"});
    const {name,email,location,phone,course} = emaildata;
    const [cookies, setCookie] = useCookies(['name','email','phone','location','course']);
    const onInputChange = e => {
        setEmail({ ...emaildata, [e.target.name]: e.target.value });
        setCookie('name','email','phone','location','course',e.target.value, { path: '/' });
      };
      const onSubmit = async e => {
        e.preventDefault();
        await axios.post("https://insity.org.in/api/upload_system_enquiry_data_for_react.php",emaildata);
        alert("Thank You Our Team Will Contact You");
        // console.log(emaildata);
        window.location.href = "/";
        // history.push("/Test-preparation");
      }
      return (
        <>
          <Modal className="enquiry_formss" show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{display:"initial"}}>
          <Modal.Title id="contained-modal-title-vcenter">
              <img className="modallogo" src={logo} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="abcd_modal_abcd">
            <h5>Enquiry Now</h5>
        <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control requiredtype="text" name="name" onChange={e => onInputChange(e)} required placeholder="Enter Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="email" onChange={e => onInputChange(e)} required placeholder="Enter Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" name="phone" onChange={e => onInputChange(e)} required placeholder="Enter Mobile Number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control  type="hidden" value="ISBMU Homepage Enquiry" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>City</Form.Label>
                        <Form.Control name="location" onChange={e => onInputChange(e)} type="text" required placeholder="Enter City" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Courses</Form.Label>
                        <Form.Select onChange={e => onInputChange(e)} name="course" aria-label="Default select example">
                        <option value="Select">Select Course</option>
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
                        </Form.Select>
                    </Form.Group>
                    <input type="checkbox" /> <span>I agree to receive information regarding my submitted application by signing up on ISBM University</span>
                    <br></br>
                    <Button variant="primary" type="submit" style={{marginTop:"10px"}}>
                        Submit
                    </Button>
                </Form>
          </Modal.Body>
          </Modal>
        </>
      );
  }

export default On_load_popup  