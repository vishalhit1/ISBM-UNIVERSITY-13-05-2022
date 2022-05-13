import React,{useEffect} from "react";
import { Container,Row,Col,Breadcrumb,Accordion,Table} from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Managementbanner from "../Academics/managementbanner";
import {Link, BrowserRouter} from 'react-router-dom';
import swayam from '../../Images/SWAYAM.jpg';
import { MdPlayArrow } from 'react-icons/md';
import Enquiry_now from "../enquiry_now";

const MoocIsbm = ()=>{
	const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <React.Fragment>
            <Header/>
            <NavigationBar/>
			<div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                    MOOC with ISBM University
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <Container className="About_us11 container">
                <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>
                    Courses
                </Breadcrumb.Item>
                <Breadcrumb.Item active>MOOC with ISBM University</Breadcrumb.Item>
                </Breadcrumb>

                <Row>
					<Col lg={3}>                  
                        <h3 className="title">NAVIGATION</h3>
                        <p className="links_about1"><Link to='/Academicsphil'>Academic Philosophy</Link></p>
                        <p className="links_about1"><Link to='/Academicspartners'>Academic Partners</Link></p>
                        <p className="links_about1"><Link to='/Specialdevelopment'>Special Development Cells</Link></p>
                        <p className="links_about1"><Link to='/Downloadresources'>Online Resources</Link></p>
                        <p className="links_about1"><Link to='/Teachningmethod'>Teaching Methodology/Pedagogy</Link></p>
                        <p className="links_about active"><Link to='/MoocIsbm'>MOOC with ISBM University</Link></p>
                        <p className="links_about1"><Link to='/Diploma_in_hotel_management_and_catering_technology'>MOUs' and Collaborations</Link></p>
                        <p className="links_about1"><Link to='/Certificateemdps'>Certificate Programs and MDPs</Link></p>
                        <p className="links_about1"><Link to='/'>Student ERP</Link></p>
                    </Col>
                    <Col lg={9}>
                        <h2 className="linkabout123">MOOC with ISBM University</h2>
                        <img src={swayam} height='120px'></img><span>MASSIVE OPEN ONLINE COURSES ON SWAYAM PORTAL OF UGC</span>
                        <p><MdPlayArrow className="arrow11"/><b>About SWAYAM (Study Web of Active Learning by Young and Aspiring Minds):</b></p>
                        <p>As per the UGC (Credit Framework for online learning courses through SWAYAM) Regulation 2016, ISBM University introduces MOOCs courses through SWAYAM platform of Government of India for the benefit of the students.</p>
                        <p>SWAYAM (Study Web of Active Learning by Young and Aspiring Minds) is a program initiated by Government of India and designed to achieve access, equity, and quality. SWAYAM platform is indigenously developed by Ministry of Human Resource Development (MHRD) and All India Council for Technical Education (AICTE). The objective of this effort is to take the best teaching-learning resources to all, including the most disadvantaged. SWAYAM seeks to bridge the digital divide for students who have remained untouched by the digital revolution. This is done through an indigenous developed IT Platform that facilitates hosting of all the courses taught in classrooms to be accessed by anyone, anywhere at any time. All the courses are interactive and are available free of cost to the residents in India.</p>
                        <p><MdPlayArrow className="arrow11"/><b>Quadrants of MOOCs:</b></p>
                        <p>These Massive Open Online Courses (MOOCs) hosted on SWAYAM will be in 4 quadrants.</p>
                        <ul>
                            <li>Video Lecture</li>
                            <li>Specially prepared reading material that can be downloaded/Printed</li>
                            <li>Self Assessment Tests</li>
                            <li>An Online Discussion forum for clearing doubts</li>
                        </ul>
                        <p><MdPlayArrow className="arrow11"/><b>National Coordinators for MOOCs:</b></p>
                        <p>Seven National Coordinators have been appointed to start the MOOCs as:</p>
                        <ul>
                            <li>NPTEL for Engineering</li>
                            <li>UGC for Post Graduation Education</li>
                            <li>CEC for Under Graduate Education</li>
                            <li> NCERT for School Education</li>
                            <li> NIOS for School Education</li>
                            <li>IGNOU for out of the school students</li>
                            <li>IIMB for Management studies</li>
                        </ul>
                        <p><MdPlayArrow className="arrow11"/><b>Course Delivery & Certification:</b></p>
                        <p>Courses delivered through SWAYAM are available free of cost to the learners, however, students wanting certifications shall be registered and shall be offered a certificate of successful completion of the course with a little fee. At the end of each course, there will be an assessment of the student through proctored examination and the marks/grades secured in this examination could be transferred to the academic record of the students.</p>
                        <p>The following are the courses identified by ISBM University to be offered through SWAYAM along with the proposed academic program and semester in which courses to be offered.</p> 
                        <Accordion className="faqss" defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header> School of Engineering and Technology</Accordion.Header>
    <Accordion.Body>
    <Table striped bordered>
    <tbody>
		<tr>
			<td className='th'>
			<p><strong>Sr.No.</strong></p>
			</td>
			<td >
			<p><strong>Course Name</strong></p>
			</td>
			<td >
			<p><strong>Web Link</strong></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>1</h3>
			</td>
			<td >
			<p>NOC:Infrared spectroscopy for pollution monitoring</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/103108139/" target="_blank">http://nptel.ac.in/courses/103108139/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>2</h3>
			</td>
			<td >
			<p>NOC:Environmental Engineering-Chemical Processes</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/105107176/" target="_blank">http://nptel.ac.in/courses/105107176/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>3</h3>
			</td>
			<td >
			<p>NOC:Electrical Distribution System Analysis</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/108107112/" target="_blank">http://nptel.ac.in/courses/108107112/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>4</h3>
			</td>
			<td >
			<p>NOC:Facts Devices</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/108107114/" target="_blank">http://nptel.ac.in/courses/108107114/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>5</h3>
			</td>
			<td >
			<p>NOC:Advanced Linear Continuous Control Systems: Applications with MATLAB Programming and Simulink</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/108107115/" target="_blank">http://nptel.ac.in/courses/108107115/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>6</h3>
			</td>
			<td >
			<p>NOC:Semiconductor Devices and Circuits</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/108108112/" target="_blank">http://nptel.ac.in/courses/108108112/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>7</h3>
			</td>
			<td >
			<p>NOC:Fabrication Techniques for MEMs-based sensors : clinical perspective</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/108108113/" target="_blank">http://nptel.ac.in/courses/108108113/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>8</h3>
			</td>
			<td >
			<p>Advanced Control System Design for Aerospace Vehicles</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/101108047/" target="_blank">http://nptel.ac.in/courses/101108047/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>9</h3>
			</td>
			<td >
			<p>Advanced Electric Drives</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/108104011/" target="_blank">http://nptel.ac.in/courses/108104011/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>10</h3>
			</td>
			<td >
			<p>Advanced Engineering Mathematics</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/111105035/" target="_blank">http://nptel.ac.in/courses/111105035/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>11</h3>
			</td>
			<td >
			<p>Advanced Finite Elements Analysis</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/112106130/" target="_blank">http://nptel.ac.in/courses/112106130/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>12</h3>
			</td>
			<td >
			<p>Advanced Foundation Engineering</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/105108069/" target="_blank">http://nptel.ac.in/courses/105108069/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>13</h3>
			</td>
			<td >
			<p>Advanced Chemical Reaction Engineering (PG)</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/103101001/" target="_blank">http://nptel.ac.in/courses/103101001/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>14</h3>
			</td>
			<td >
			<p>Advanced Gas Dynamics</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/112106056/" target="_blank">http://nptel.ac.in/courses/112106056/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>15</h3>
			</td>
			<td >
			<p>Advanced Geotechnical Engineering</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/105101001/" target="_blank">http://nptel.ac.in/courses/105101001/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>16</h3>
			</td>
			<td >
			<p>Advanced Heat and Mass Transfer</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/103105052/" target="_blank">http://nptel.ac.in/courses/103105052/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>17</h3>
			</td>
			<td >
			<p>Advanced Hydrology</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/105103021/" target="_blank">http://nptel.ac.in/courses/105103021/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>18</h3>
			</td>
			<td >
			<p>Advanced Logic Synthesis</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/117106109/" target="_blank">http://nptel.ac.in/courses/117106109/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>19</h3>
			</td>
			<td >
			<p>Advanced Machining Processes</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/112104028/" target="_blank">http://nptel.ac.in/courses/112104028/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>20</h3>
			</td>
			<td >
			<p>Advanced manufacturing process for micro system fabrication</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/112104162/" target="_blank">http://nptel.ac.in/courses/112104162/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>21</h3>
			</td>
			<td >
			<p>Advanced Manufacturing Processes</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/112107077/" target="_blank">http://nptel.ac.in/courses/112107077/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>22</h3>
			</td>
			<td >
			<p>Advanced Marine Structures</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/114106037/" target="_blank">http://nptel.ac.in/courses/114106037/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>23</h3>
			</td>
			<td >
			<p>Advanced Mathematical Techniques in Chemical Engineering</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/103105106/" target="_blank">http://nptel.ac.in/courses/103105106/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>24</h3>
			</td>
			<td >
			<p>Advanced Numerical Analysis</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/103101009/" target="_blank">http://nptel.ac.in/courses/103101009/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>25</h3>
			</td>
			<td >
			<p>Advanced Operations Research</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/112106131/" target="_blank">http://nptel.ac.in/courses/112106131/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>26</h3>
			</td>
			<td >
			<p>Advanced Optical Communication</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/117101002/" target="_blank">http://nptel.ac.in/courses/117101002/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>27</h3>
			</td>
			<td >
			<p>Advanced Process Control</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/103101003/" target="_blank">http://nptel.ac.in/courses/103101003/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>28</h3>
			</td>
			<td >
			<p>Advanced Solid Mechanics</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/105106049/" target="_blank">http://nptel.ac.in/courses/105106049/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>29</h3>
			</td>
			<td >
			<p>Advanced Strength of Materials</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/112101095/" target="_blank">http://nptel.ac.in/courses/112101095/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>30</h3>
			</td>
			<td >
			<p>Advanced Structural Analysis</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/105106050/" target="_blank">http://nptel.ac.in/courses/105106050/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>31</h3>
			</td>
			<td >
			<p>Advanced Techniques in Geotechnical and Foundation Engineering</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/105106144/" target="_blank">http://nptel.ac.in/courses/105106144/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>32</h3>
			</td>
			<td >
			<p>Advanced Transport Phenomena</p>
			</td>
			<td >
			<p><u><a href="http://nptel.ac.in/courses/103106068/" target="_blank">http://nptel.ac.in/courses/103106068/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>33</h3>
			</td>
			<td >
			<p>ANALOG ELECTRONIC CIRCUITS</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102095/" target="_blank">https://nptel.ac.in/courses/108102095/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>34</h3>
			</td>
			<td >
			<p>Applied mechanics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/122102004/" target="_blank">https://nptel.ac.in/courses/122102004/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>35</h3>
			</td>
			<td >
			<p>Automation &amp; Controls</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112102011/" target="_blank">https://nptel.ac.in/courses/112102011/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>36</h3>
			</td>
			<td >
			<p>Circuit Theory</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102042/" target="_blank">https://nptel.ac.in/courses/108102042/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>37</h3>
			</td>
			<td >
			<p>Civil Engineering - Building materials and Construction</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105102088/" target="_blank">https://nptel.ac.in/courses/105102088/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>38</h3>
			</td>
			<td >
			<p>Communication Engineering</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117102059/" target="_blank">https://nptel.ac.in/courses/117102059/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>39</h3>
			</td>
			<td >
			<p>Computational Geometry</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102011/" target="_blank">https://nptel.ac.in/courses/106102011/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>40</h3>
			</td>
			<td >
			<p>Computer Aided Design and Manufacturing</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112102101/" target="_blank">https://nptel.ac.in/courses/112102101/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>41</h3>
			</td>
			<td >
			<p>Computer Aided Design and Manufacturing I</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112102102/" target="_blank">https://nptel.ac.in/courses/112102102/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>42</h3>
			</td>
			<td >
			<p>Computer Aided Design and Manufacturing II</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112102103/" target="_blank">https://nptel.ac.in/courses/112102103/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>43</h3>
			</td>
			<td >
			<p>Computer Architecture</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102062/" target="_blank">https://nptel.ac.in/courses/106102062/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>44</h3>
			</td>
			<td >
			<p>Computer Graphics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102063/" target="_blank">https://nptel.ac.in/courses/106102063/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>45</h3>
			</td>
			<td >
			<p>Concrete Technology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105102012/" target="_blank">https://nptel.ac.in/courses/105102012/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>46</h3>
			</td>
			<td >
			<p>Control Engineering</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102043/" target="_blank">https://nptel.ac.in/courses/108102043/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>47</h3>
			</td>
			<td >
			<p>Data Structures And Algorithms</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102064/" target="_blank">https://nptel.ac.in/courses/106102064/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>48</h3>
			</td>
			<td >
			<p>DIGITAL COMMUNICATION</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102096/" target="_blank">https://nptel.ac.in/courses/108102096/</a></u></p>
			</td>
		</tr>
		<tr>
            <td>
			<h3>49</h3>
			</td>
			<td >
			<p>Digital Signal Processing</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117102060/" target="_blank">https://nptel.ac.in/courses/117102060/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>50</h3>
			</td>
			<td >
			<p>Electronics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/115102014/" target="_blank">https://nptel.ac.in/courses/115102014/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>51</h3>
			</td>
			<td >
			<p>Environment and Ecology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/122102006/" target="_blank">https://nptel.ac.in/courses/122102006/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>52</h3>
			</td>
			<td >
			<p>Embedded Systems</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102045/" target="_blank">https://nptel.ac.in/courses/108102045/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>53</h3>
			</td>
			<td >
			<p>Enzyme Science and Engineering</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/102102033/" target="_blank">https://nptel.ac.in/courses/102102033/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>54</h3>
			</td>
			<td >
			<p>Environmental Air Pollution</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105102089/" target="_blank">https://nptel.ac.in/courses/105102089/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>55</h3>
			</td>
			<td >
			<p>Fabric Manufacture - I</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102005/" target="_blank">https://nptel.ac.in/courses/116102005/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>56</h3>
			</td>
			<td >
			<p>Fuel Cell Technology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/103102015/" target="_blank">https://nptel.ac.in/courses/103102015/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>57</h3>
			</td>
			<td >
			<p>G.I.S in Civil Engineering</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105102015/" target="_blank">https://nptel.ac.in/courses/105102015/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>58</h3>
			</td>
			<td >
			<p>High Performance and Specialty Fibres</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102006/" target="_blank">https://nptel.ac.in/courses/116102006/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>59</h3>
			</td>
			<td >
			<p>Industrial Drives</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102046/" target="_blank">https://nptel.ac.in/courses/108102046/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>60</h3>
			</td>
			<td >
			<p>Introduction to Computer Graphics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102065/" target="_blank">https://nptel.ac.in/courses/106102065/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>61</h3>
			</td>
			<td >
			<p>Introduction To Electronic Circuits</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102097/" target="_blank">https://nptel.ac.in/courses/108102097/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>62</h3>
			</td>
			<td >
			<p>Introduction to Problem Solving and Programming</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102066/" target="_blank">https://nptel.ac.in/courses/106102066/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>63</h3>
			</td>
			<td >
			<p>Knitting Technology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102066/" target="_blank">https://nptel.ac.in/courses/106102066/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>64</h3>
			</td>
			<td >
			<p>Kinematics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102008/" target="_blank">https://nptel.ac.in/courses/116102008/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>65</h3>
			</td>
			<td >
			<p>Heterogeneous Catalysis and Catalytic Processes</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112102105/" target="_blank">https://nptel.ac.in/courses/112102105/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>66</h3>
			</td>
			<td >
			<p>Linear Algebra</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/111102011/" target="_blank">https://nptel.ac.in/courses/111102011/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>67</h3>
			</td>
			<td >
			<p>Logic for CS</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102013/" target="_blank">https://nptel.ac.in/courses/106102013/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>68</h3>
			</td>
			<td >
			<p>Manufactured Fibre Technology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102010/" target="_blank">https://nptel.ac.in/courses/116102010/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>69</h3>
			</td>
			<td >
			<p>Mechanics of Solids</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105102090/" target="_blank">https://nptel.ac.in/courses/105102090/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>70</h3>
			</td>
			<td >
			<p>Mechanics of Textile Machinery</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102012/" target="_blank">https://nptel.ac.in/courses/116102012/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>71</h3>
			</td>
			<td >
			<p>Nano structured materials-synthesis, properties, self assembly and applications</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/118102003/" target="_blank">https://nptel.ac.in/courses/118102003/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>72</h3>
			</td>
			<td >
			<p>NOC:Analog Electronic Circuit</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102112/" target="_blank">https://nptel.ac.in/courses/108102112/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>73</h3>
			</td>
			<td >
			<p>NOC:Computer Architecture</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102157/" target="_blank">https://nptel.ac.in/courses/106102157/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>74</h3>
			</td>
			<td >
			<p>NOC:Energy Efficiency, Acoustics and daylighting in Building</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105102175/" target="_blank">https://nptel.ac.in/courses/105102175/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>75</h3>
			</td>
			<td >
			<p>NOC:Fire Protection, Services and Maintenance Management of Building</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105102176/" target="_blank">https://nptel.ac.in/courses/105102176/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>76</h3>
			</td>
			<td >
			<p>NOC:Geoenvironmental Engineering (Environmental Geotechnology): Landfills, Slurry Ponds &amp; Contaminated Sites</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105102160/" target="_blank">https://nptel.ac.in/courses/105102160/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>77</h3>
			</td>
			<td >
			<p>NOC:Information Theory, Coding and Cryptography</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102117/" target="_blank">https://nptel.ac.in/courses/108102117/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>78</h3>
			</td>
			<td >
			<p>NOC:Introduction to Materials Science and Engineering</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/113102080/" target="_blank">https://nptel.ac.in/courses/113102080/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>79</h3>
			</td>
			<td >
			<p>NOC:Introduction to Parallel Programming in OpenMP</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102163/" target="_blank">https://nptel.ac.in/courses/106102163/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>80</h3>
			</td>
			<td >
			<p>NOC:Introduction to Probability Theory and Stochastic Processes</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/111102111/" target="_blank">https://nptel.ac.in/courses/111102111/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>81</h3>
			</td>
			<td >
			<p>NOC:Nonlinear and Adaptive Control</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102113/" target="_blank">https://nptel.ac.in/courses/108102113/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>82</h3>
			</td>
			<td >
			<p>NOC:RAC Product Design</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112102248/" target="_blank">https://nptel.ac.in/courses/112102248/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>83</h3>
			</td>
			<td >
			<p>NOC:Science of Clothing Comfort</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102047/" target="_blank">https://nptel.ac.in/courses/116102047/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>84</h3>
			</td>
			<td >
			<p>NOC:Semiconductor Optoelectronics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/115102103/" target="_blank">https://nptel.ac.in/courses/115102103/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>85</h3>
			</td>
			<td >
			<p>NOC:Statistical Inference</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/111102112/" target="_blank">https://nptel.ac.in/courses/111102112/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>86</h3>
			</td>
			<td >
			<p>Power System Dynamics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102080/" target="_blank">https://nptel.ac.in/courses/108102080/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>87</h3>
			</td>
			<td >
			<p>Power System Generation, Transmission and Distribution (Encapsulated from earlier Video)</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108102047/" target="_blank">https://nptel.ac.in/courses/108102047/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>88</h3>
			</td>
			<td >
			<p>Principles of Programming Languages</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106102067/" target="_blank">https://nptel.ac.in/courses/106102067/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>89</h3>
			</td>
			<td >
			<p>Project and Production Management</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112102107/" target="_blank">https://nptel.ac.in/courses/112102107/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>90</h3>
			</td>
			<td >
			<p>Quality Control in Textile Industry</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102019/" target="_blank">https://nptel.ac.in/courses/116102019/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>91</h3>
			</td>
			<td >
			<p>Quantum Electronics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/115102022/" target="_blank">https://nptel.ac.in/courses/115102022/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>92</h3>
			</td>
			<td >
			<p>Quantum Mechanics and Applications</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/115102023/" target="_blank">https://nptel.ac.in/courses/115102023/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>93</h3>
			</td>
			<td >
			<p>Restructured Power Systems</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108101005/" target="_blank">https://nptel.ac.in/courses/108101005/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>94</h3>
			</td>
			<td >
			<p>RF Integrated Circuits</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117102012/" target="_blank">https://nptel.ac.in/courses/117102012/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>95</h3>
			</td>
			<td >
			<p>Seismic Analysis of Structures</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105102016/" target="_blank">https://nptel.ac.in/courses/105102016/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>96</h3>
			</td>
			<td >
			<p>Textile chemical Processing: Theory and practice of Preparatory Processes</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102016/" target="_blank">https://nptel.ac.in/courses/116102016/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>97</h3>
			</td>
			<td >
			<p>Semiconductor Optoelectronics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/115102026/" target="_blank">https://nptel.ac.in/courses/115102026/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>98</h3>
			</td>
			<td >
			<p>Shuttleless Weaving</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102017/" target="_blank">https://nptel.ac.in/courses/116102017/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>99</h3>
			</td>
			<td >
			<p>Stochastic Processes</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/111102014/" target="_blank">https://nptel.ac.in/courses/111102014/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>100</h3>
			</td>
			<td >
			<p>Textile Fibres</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102026/" target="_blank">https://nptel.ac.in/courses/116102026/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>101</h3>
			</td>
			<td >
			<p>Textile Testing</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102029/" target="_blank">https://nptel.ac.in/courses/116102029/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>102</h3>
			</td>
			<td >
			<p>Theory of Yarn Structures</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/116102034/" target="_blank">https://nptel.ac.in/courses/116102034/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>103</h3>
			</td>
			<td >
			<p>Transport Phenomena (UG)</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/103102024/" target="_blank">https://nptel.ac.in/courses/103102024/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>104</h3>
			</td>
			<td >
			<p>Tribology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112102015/" target="_blank">https://nptel.ac.in/courses/112102015/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>105</h3>
			</td>
			<td >
			<p>Semiconductor Devices</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117102061/" target="_blank">https://nptel.ac.in/courses/117102061/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>106</h3>
			</td>
			<td >
			<p>Structure and Functions of Biomolecules</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/104102016/" target="_blank">https://nptel.ac.in/courses/104102016/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>107</h3>
			</td>
			<td >
			<p>Advanced Complex Analysis - Part 2: Compactness of Meromorphic Functions in the Spherical Metric, Spherical Derivative, Normality, Theorems of Marty-Zalcman-Montel-Picard-Royden-Schottky Syllabus</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/111106094/" target="_blank">https://nptel.ac.in/courses/111106094/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>108</h3>
			</td>
			<td >
			<p>CMOS Analog VLSI Design</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117101105/" target="_blank">https://nptel.ac.in/courses/117101105/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>109</h3>
			</td>
			<td >
			<p>Advanced Control Systems</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108103007/" target="_blank">https://nptel.ac.in/courses/108103007/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>110</h3>
			</td>
			<td >
			<p>Acoustics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112104026/" target="_blank">https://nptel.ac.in/courses/112104026/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>111</h3>
			</td>
			<td >
			<p>Adaptive Signal Processing</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117101001/" target="_blank">https://nptel.ac.in/courses/117101001/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>112</h3>
			</td>
			<td >
			<p>Adv. Digital Signal Processing - Multirate and wavelets</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/104104066/" target="_blank">https://nptel.ac.in/courses/104104066/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>113</h3>
			</td>
			<td >
			<p>Advance Analytical Course</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117104099/" target="_blank">https://nptel.ac.in/courses/117104099/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>114</h3>
			</td>
			<td >
			<p>Advanced 3G and 4G Wireless Mobile Communications</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/111105069/" target="_blank">https://nptel.ac.in/courses/111105069/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>115</h3>
			</td>
			<td >
			<p>A Basic Course in Real Analysis</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/111102009/" target="_blank">https://nptel.ac.in/courses/111102009/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>116</h3>
			</td>
			<td >
			<p>Advanced Antenna Theory</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/113105015/" target="_blank">https://nptel.ac.in/courses/113105015/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>117</h3>
			</td>
			<td >
			<p>Advanced ceramics for strategic applications</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112103016/" target="_blank">https://nptel.ac.in/courses/112103016/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>118</h3>
			</td>
			<td >
			<p>Advanced Engineering Thermodynamics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112103016/" target="_blank">https://nptel.ac.in/courses/112103016/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>119</h3>
			</td>
			<td >
			<p>Advanced Hydraulics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105103021/" target="_blank">https://nptel.ac.in/courses/105103021/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>120</h3>
			</td>
			<td >
			<p>Advanced Statistical Mechanics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/115103028/" target="_blank">https://nptel.ac.in/courses/115103028/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>121</h3>
			</td>
			<td >
			<p>Basic Biology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/122103039/" target="_blank">https://nptel.ac.in/courses/122103039/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>122</h3>
			</td>
			<td >
			<p>Basic Electronics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117103063/" target="_blank">https://nptel.ac.in/courses/117103063/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>123</h3>
			</td>
			<td >
			<p>Basic Organic Chemistry</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/104103071/" target="_blank">https://nptel.ac.in/courses/104103071/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>124</h3>
			</td>
			<td >
			<p>Bio-organic chemistry</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/104103018/" target="_blank">https://nptel.ac.in/courses/104103018/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>125</h3>
			</td>
			<td >
			<p>Bio-Organic Chemistry of Natural Enediyne Anticancer Antibiotics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/104103068/" target="_blank">https://nptel.ac.in/courses/104103068/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>126</h3>
			</td>
			<td >
			<p>Bioanalytical Techniques and Bioinformatics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/102103044/" target="_blank">https://nptel.ac.in/courses/102103044/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>127</h3>
			</td>
			<td >
			<p>Catalyst Science and Technology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/103103026/" target="_blank">https://nptel.ac.in/courses/103103026/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>128</h3>
			</td>
			<td >
			<p>Catalytic Asymmetric Synthesis</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/104103067/" target="_blank">https://nptel.ac.in/courses/104103067/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>129</h3>
			</td>
			<td >
			<p>Acoustic Instabilities in Aerospace Propulsion</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/101106031/" target="_blank">https://nptel.ac.in/courses/101106031/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>130</h3>
			</td>
			<td >
			<p>Chemical Engineering Design - II</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/103103027/" target="_blank">https://nptel.ac.in/courses/103103027/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>131</h3>
			</td>
			<td >
			<p>Chemical Technology - II</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/103103029/" target="_blank">https://nptel.ac.in/courses/103103029/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>132</h3>
			</td>
			<td >
			<p>Chemistry of Materials</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/104103019/" target="_blank">https://nptel.ac.in/courses/104103019/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>133</h3>
			</td>
			<td >
			<p>Complex Analysis</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/111103070/" target="_blank">https://nptel.ac.in/courses/111103070/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>134</h3>
			</td>
			<td >
			<p>Computational Number Theory &amp; Cryptography</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106103015/" target="_blank">https://nptel.ac.in/courses/106103015/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>135</h3>
			</td>
			<td >
			<p>Computer Organization and Architecture</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106103068/" target="_blank">https://nptel.ac.in/courses/106103068/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>136</h3>
			</td>
			<td >
			<p>Construction Economics &amp; Finance</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105103023/" target="_blank">https://nptel.ac.in/courses/105103023/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>137</h3>
			</td>
			<td >
			<p>Construction Planning and Management</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105103093/" target="_blank">https://nptel.ac.in/courses/105103093/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>138</h3>
			</td>
			<td >
			<p>Continuum Mechanics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112103167/" target="_blank">https://nptel.ac.in/courses/112103167/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>139</h3>
			</td>
			<td >
			<p>Cell Biology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/102103012/" target="_blank">https://nptel.ac.in/courses/102103012/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>140</h3>
			</td>
			<td >
			<p>Cellular and Molecular Immunology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/102103038/" target="_blank">https://nptel.ac.in/courses/102103038/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>141</h3>
			</td>
			<td >
			<p>Characterization of Materials</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/115103030/" target="_blank">https://nptel.ac.in/courses/115103030/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>142</h3>
			</td>
			<td >
			<p>Data Structures and Program Methodology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106103069/" target="_blank">https://nptel.ac.in/courses/106103069/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>143</h3>
			</td>
			<td >
			<p>Design for Manufacture and Assembly(DFMA)</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106103069/" target="_blank">https://nptel.ac.in/courses/106103069/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>144</h3>
			</td>
			<td >
			<p>Design fundamentals</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/107103012/" target="_blank">https://nptel.ac.in/courses/107103012/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>145</h3>
			</td>
			<td >
			<p>Design Verification and Test of Digital VLSI Circuits</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/107103002/" target="_blank">https://nptel.ac.in/courses/107103002/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>146</h3>
			</td>
			<td >
			<p>Digital Circuits</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106103116/" target="_blank">https://nptel.ac.in/courses/106103116/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>147</h3>
			</td>
			<td >
			<p>Digital Control System</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117103064/" target="_blank">https://nptel.ac.in/courses/117103064/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>148</h3>
			</td>
			<td >
			<p>Electromagnetic Fields</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108103008/" target="_blank">https://nptel.ac.in/courses/108103008/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>149</h3>
			</td>
			<td >
			<p>Engineering Drawing</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117103065/" target="_blank">https://nptel.ac.in/courses/117103065/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>150</h3>
			</td>
			<td >
			<p>Engineering Mechanics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112103108/" target="_blank">https://nptel.ac.in/courses/112103108/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>151</h3>
			</td>
			<td >
			<p>Cultural Studies</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/109103018/" target="_blank">https://nptel.ac.in/courses/109103018/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>152</h3>
			</td>
			<td >
			<p>Basic Thermodynamics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112104113/" target="_blank">https://nptel.ac.in/courses/112104113/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>153</h3>
			</td>
			<td >
			<p>Biomicroelectromechanical systems</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112104029/" target="_blank">https://nptel.ac.in/courses/112104029/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>154</h3>
			</td>
			<td >
			<p>Color in Design</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/109104075/" target="_blank">https://nptel.ac.in/courses/109104075/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>155</h3>
			</td>
			<td >
			<p>Compiler Design</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106104072/" target="_blank">https://nptel.ac.in/courses/106104072/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>156</h3>
			</td>
			<td >
			<p>Composite Materials and Structures</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/101104010/" target="_blank">https://nptel.ac.in/courses/101104010/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>157</h3>
			</td>
			<td >
			<p>Computational Fluid Dynamics and Heat Transfer</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112104030/" target="_blank">https://nptel.ac.in/courses/112104030/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>158</h3>
			</td>
			<td >
			<p>Computer Aided Engineering Design</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112104031/" target="_blank">https://nptel.ac.in/courses/112104031/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>159</h3>
			</td>
			<td >
			<p>Computer Algorithms - 2</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106104019/" target="_blank">https://nptel.ac.in/courses/106104019/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>160</h3>
			</td>
			<td >
			<p>Computer Organisation and Architecture</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106104073/" target="_blank">https://nptel.ac.in/courses/106104073/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>161</h3>
			</td>
			<td >
			<p>Concrete Engineering and Technology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105104030/" target="_blank">https://nptel.ac.in/courses/105104030/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>162</h3>
			</td>
			<td >
			<p>Convective Heat and Mass Transfer</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112104159/" target="_blank">https://nptel.ac.in/courses/112104159/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>163</h3>
			</td>
			<td >
			<p>Convex Optimization</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/111104068/" target="_blank">https://nptel.ac.in/courses/111104068/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>164</h3>
			</td>
			<td >
			<p>Design Paradigm: Source Of Innovation &amp; Invention</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/107104076/" target="_blank">https://nptel.ac.in/courses/107104076/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>165</h3>
			</td>
			<td >
			<p>Design Philosophy &amp; History</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/107104078/" target="_blank">https://nptel.ac.in/courses/107104078/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>166</h3>
			</td>
			<td >
			<p>Digital Image Processing</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117104069/" target="_blank">https://nptel.ac.in/courses/117104069/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>167</h3>
			</td>
			<td >
			<p>Digital Switching</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117104069/" target="_blank">https://nptel.ac.in/courses/117104069/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>168</h3>
			</td>
			<td >
			<p>Digital Video Signal Processing</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117104020/" target="_blank">https://nptel.ac.in/courses/117104020/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>169</h3>
			</td>
			<td >
			<p>Discrete Mathematics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/111104026/" target="_blank">https://nptel.ac.in/courses/111104026/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>170</h3>
			</td>
			<td >
			<p>Dynamics of Machines</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112104114/" target="_blank">https://nptel.ac.in/courses/112104114/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>171</h3>
			</td>
			<td >
			<p>Engine Combustion</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/122104014/" target="_blank">https://nptel.ac.in/courses/122104014/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>172</h3>
			</td>
			<td >
			<p>Engineering Physics II</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105104099/" target="_blank">https://nptel.ac.in/courses/105104099/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>173</h3>
			</td>
			<td >
			<p>Ethics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112104115/" target="_blank">https://nptel.ac.in/courses/112104115/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>174</h3>
			</td>
			<td >
			<p>Exploring Human Values: Visions of Happiness and Perfect Society</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112104116/" target="_blank">https://nptel.ac.in/courses/112104116/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>175</h3>
			</td>
			<td >
			<p>Finite Element Method</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112104172/" target="_blank">https://nptel.ac.in/courses/112104172/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>176</h3>
			</td>
			<td >
			<p>Fluid Machinery</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/101104013/" target="_blank">https://nptel.ac.in/courses/101104013/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>177</h3>
			</td>
			<td >
			<p>Fuel,furnace and Refractory</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/113104058/" target="_blank">https://nptel.ac.in/courses/113104058/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>178</h3>
			</td>
			<td >
			<p>Fundamentals of Combustion</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/101104014/" target="_blank">https://nptel.ac.in/courses/101104014/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>179</h3>
			</td>
			<td >
			<p>High Speed Semiconductor Devices</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117104071/" target="_blank">https://nptel.ac.in/courses/117104071/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>180</h3>
			</td>
			<td >
			<p>High Voltage DC Transmission</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108104013/" target="_blank">https://nptel.ac.in/courses/108104013/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>181</h3>
			</td>
			<td >
			<p>Game Theory for Economists</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/109104034/" target="_blank">https://nptel.ac.in/courses/109104034/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>182</h3>
			</td>
			<td >
			<p>Aircraft Structural Dynamics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/101105022/" target="_blank">https://nptel.ac.in/courses/101105022/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>183</h3>
			</td>
			<td >
			<p>Applied Multivariate Statistical Modeling</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/110105060/" target="_blank">https://nptel.ac.in/courses/110105060/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>184</h3>
			</td>
			<td >
			<p>Applied Thermodynamics for Marine Systems</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/114105029/" target="_blank">https://nptel.ac.in/courses/114105029/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>185</h3>
			</td>
			<td >
			<p>Artificial Intelligence</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106105077/" target="_blank">https://nptel.ac.in/courses/106105077/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>186</h3>
			</td>
			<td >
			<p>Advanced Materials and Processes</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/113105057/" target="_blank">https://nptel.ac.in/courses/113105057/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>187</h3>
			</td>
			<td >
			<p>Biocatalysis in organic synthesis</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/104105032/" target="_blank">https://nptel.ac.in/courses/104105032/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>188</h3>
			</td>
			<td >
			<p>Biochemical Engineering</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/103105054/" target="_blank">https://nptel.ac.in/courses/103105054/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>189</h3>
			</td>
			<td >
			<p>Chaos, Fractals &amp; Dynamic Systems</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108105054/" target="_blank">https://nptel.ac.in/courses/108105054/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>190</h3>
			</td>
			<td >
			<p>Co-ordination chemistry (chemistry of transition elements)</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/104105033/" target="_blank">https://nptel.ac.in/courses/104105033/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>191</h3>
			</td>
			<td >
			<p>Bio-inorganic chemistry</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/104105031/" target="_blank">https://nptel.ac.in/courses/104105031/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>192</h3>
			</td>
			<td >
			<p>Artificial Intelligence(Prof.P.Dasgupta)</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106105079/" target="_blank">https://nptel.ac.in/courses/106105079/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>193</h3>
			</td>
			<td >
			<p>Communication Networks and Switching</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117105076/" target="_blank">https://nptel.ac.in/courses/117105076/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>194</h3>
			</td>
			<td >
			<p>Astrophysics &amp; Cosmology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/115105046/" target="_blank">https://nptel.ac.in/courses/115105046/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>195</h3>
			</td>
			<td >
			<p>Computational Fluid Dynamics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112105045/" target="_blank">https://nptel.ac.in/courses/112105045/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>196</h3>
			</td>
			<td >
			<p>Computer Networks</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106105080/" target="_blank">https://nptel.ac.in/courses/106105080/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>197</h3>
			</td>
			<td >
			<p>Data Communication</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106105082/" target="_blank">https://nptel.ac.in/courses/106105082/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>198</h3>
			</td>
			<td >
			<p>Design of Concrete Structures</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105105104/" target="_blank">https://nptel.ac.in/courses/105105104/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>199</h3>
			</td>
			<td >
			<p>Design of Machine Elements I</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112105124/" target="_blank">https://nptel.ac.in/courses/112105124/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>200</h3>
			</td>
			<td >
			<p>Design of Reinforced Concrete Structures</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105105105/" target="_blank">https://nptel.ac.in/courses/105105105/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>201</h3>
			</td>
			<td >
			<p>Consumer Behaviour</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/110105029/" target="_blank">https://nptel.ac.in/courses/110105029/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>202</h3>
			</td>
			<td >
			<p>Cryptography and Network Security</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106105031/" target="_blank">https://nptel.ac.in/courses/106105031/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>203</h3>
			</td>
			<td >
			<p>Digital Computer Organization</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117105078/" target="_blank">https://nptel.ac.in/courses/117105078/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>204</h3>
			</td>
			<td >
			<p>Electrical Machines -I</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108105017/" target="_blank">https://nptel.ac.in/courses/108105017/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>205</h3>
			</td>
			<td >
			<p>Electronic Design Automation</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106105083/" target="_blank">https://nptel.ac.in/courses/106105083/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>206</h3>
			</td>
			<td >
			<p>Digital Voice &amp; Picture Communication</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117105081/" target="_blank">https://nptel.ac.in/courses/117105081/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>207</h3>
			</td>
			<td >
			<p>Dynamics of Physical Systems</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108105056/" target="_blank">https://nptel.ac.in/courses/108105056/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>208</h3>
			</td>
			<td >
			<p>Digital Systems Design</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/117105080/" target="_blank">https://nptel.ac.in/courses/117105080/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>209</h3>
			</td>
			<td >
			<p>Elements of Ocean Engineering</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/114105002/" target="_blank">https://nptel.ac.in/courses/114105002/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>210</h3>
			</td>
			<td >
			<p>Engineering Geology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105105106/" target="_blank">https://nptel.ac.in/courses/105105106/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>211</h3>
			</td>
			<td >
			<p>Estimation of Signals and Systems</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108105059/" target="_blank">https://nptel.ac.in/courses/108105059/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>212</h3>
			</td>
			<td >
			<p>Finite Element Analysis</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105105041/" target="_blank">https://nptel.ac.in/courses/105105041/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>213</h3>
			</td>
			<td >
			<p>Fuel and Combustion Technology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/103105110/" target="_blank">https://nptel.ac.in/courses/103105110/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>214</h3>
			</td>
			<td >
			<p>Fundamental Algorithms:Design and Analysis</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106105157/" target="_blank">https://nptel.ac.in/courses/106105157/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>215</h3>
			</td>
			<td >
			<p>Fundamentals of Environmental Pollution and Control</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/123105001/" target="_blank">https://nptel.ac.in/courses/123105001/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>216</h3>
			</td>
			<td >
			<p>Energy Resources &amp; Technology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108105058/" target="_blank">https://nptel.ac.in/courses/108105058/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>217</h3>
			</td>
			<td >
			<p>Fundamentals of Industrial Oil Hydraulics and Pneumatics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112105047/" target="_blank">https://nptel.ac.in/courses/112105047/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>218</h3>
			</td>
			<td >
			<p>Fluid Mechanics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/112105171/" target="_blank">https://nptel.ac.in/courses/112105171/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>219</h3>
			</td>
			<td >
			<p>Ground Water Hydrology</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/105105042/" target="_blank">https://nptel.ac.in/courses/105105042/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>220</h3>
			</td>
			<td >
			<p>High Performance Computer Architecture</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/106105033/" target="_blank">https://nptel.ac.in/courses/106105033/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>221</h3>
			</td>
			<td >
			<p>High Speed Aero Dynamics</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/101105024/" target="_blank">https://nptel.ac.in/courses/101105024/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>222</h3>
			</td>
			<td >
			<p>Hydrostatics and Stability</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/114105003/" target="_blank">https://nptel.ac.in/courses/114105003/</a></u></p>
			</td>
		</tr>
		<tr>
			<td >
			<h3>223</h3>
			</td>
			<td >
			<p>Illumination Engineering</p>
			</td>
			<td >
			<p><u><a href="https://nptel.ac.in/courses/108105060/" target="_blank">https://nptel.ac.in/courses/108105060/</a></u></p>
			</td>
		</tr>
	</tbody>
                            </Table>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header> School of Science</Accordion.Header>
    <Accordion.Body>
    <Table striped bordered>
    <tbody>
		<tr>
			<td className='th'>
			<p><strong>Sr.No.</strong></p>
			</td>
			<td>
			<p><strong>Course Name</strong></p>
			</td>
			<td>
			<p><strong>Web Link</strong></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>1</h3>
			</td>
			<td>
			<p>Materials Science</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/122102008/" target="_blank">https://nptel.ac.in/courses/122102008/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>2</h3>
			</td>
			<td>
			<p>Fundamental concepts of semiconductors</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/115102025/" target="_blank">https://nptel.ac.in/courses/115102025/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>3</h3>
			</td>
			<td>
			<p>Linear Programming Problems</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/111102012/" target="_blank">https://nptel.ac.in/courses/111102012/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>4</h3>
			</td>
			<td>
			<p>Advanced Abstract Algebra</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/117107035/" target="_blank">https://nptel.ac.in/courses/117107035/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>5</h3>
			</td>
			<td>
			<p>Plasma Physics: Fundamentals and Applications</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/115102020/" target="_blank">https://nptel.ac.in/courses/115102020/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>6</h3>
			</td>
			<td>
			<p>NOC:Chaotic Dynamical Systems</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/111102110/" target="_blank">https://nptel.ac.in/courses/111102110/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>7</h3>
			</td>
			<td>
			<p>Management Science I</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/122102007/" target="_blank">https://nptel.ac.in/courses/122102007/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>8</h3>
			</td>
			<td>
			<p>Advanced Complex Analysis - Part 2: Compactness of Meromorphic Functions in the Spherical Metric, Spherical Derivative, Normality, Theorems of Marty-Zalcman-Montel-Picard-Royden-Schottky</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/111106094/" target="_blank">https://nptel.ac.in/courses/111106094/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>9</h3>
			</td>
			<td>
			<p>Biological Bases of Behavior</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/109104029/" target="_blank">https://nptel.ac.in/courses/109104029/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>10</h3>
			</td>
			<td>
			<p>Analysis of variance and design of experiment-II</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/111104078/" target="_blank">https://nptel.ac.in/courses/111104078/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>11</h3>
			</td>
			<td>
			<p>Animal Physiology</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/102104042/" target="_blank">https://nptel.ac.in/courses/102104042/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>12</h3>
			</td>
			<td>
			<p>Applied Multivariate Analysis</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/111104024/" target="_blank">https://nptel.ac.in/courses/111104024/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>13</h3>
			</td>
			<td>
			<p>Astronomy in Ancient, Medieval and Early Telescopic Era of India</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/121104006/" target="_blank">https://nptel.ac.in/courses/121104006/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>14</h3>
			</td>
			<td>
			<p>Advanced Characterization Techniques</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/105104029/" target="_blank">https://nptel.ac.in/courses/105104029/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>15</h3>
			</td>
			<td>
			<p>Calculus of Variations and Integral Equations</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/111104025/" target="_blank">https://nptel.ac.in/courses/111104025/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>16</h3>
			</td>
			<td>
			<p>Communication Skills</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/109104031/" target="_blank">https://nptel.ac.in/courses/109104031/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>17</h3>
			</td>
			<td>
			<p>Econometric Theory</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/111104072/" target="_blank">https://nptel.ac.in/courses/111104072/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>18</h3>
			</td>
			<td>
			<p>Environmental Degradation of Materials</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/109104068/" target="_blank">https://nptel.ac.in/courses/109104068/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>19</h3>
			</td>
			<td>
			<p>Electroceramics</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/122104015/" target="_blank">https://nptel.ac.in/courses/122104015/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>20</h3>
			</td>
			<td>
			<p>Foundations of Optimization</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/111104071/" target="_blank">https://nptel.ac.in/courses/111104071/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>21</h3>
			</td>
			<td>
			<p>BioChemistry I</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/102105034/" target="_blank">https://nptel.ac.in/courses/102105034/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>22</h3>
			</td>
			<td>
			<p>Basic Electrical Technology</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/108105053/" target="_blank">https://nptel.ac.in/courses/108105053/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>23</h3>
			</td>
			<td>
			<p>Functional Analysis</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/111105037/" target="_blank">https://nptel.ac.in/courses/111105037/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>24</h3>
			</td>
			<td>
			<p>Heterocyclic Chemistry</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/104105034/" target="_blank">https://nptel.ac.in/courses/104105034/</a></u></p>
			</td>
		</tr>
	</tbody>
    </Table>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>School of Management &amp; Commerce</Accordion.Header>
    <Accordion.Body>
    <Table striped bordered>
    <tbody>
		<tr>
			<td className='th'>
			<p><strong>Sl. No.</strong></p>
			</td>
			<td>
			<p><strong>Course Name</strong></p>
			</td>
			<td>
			<p><strong>Web Link</strong></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>1</h3>
			</td>
			<td>
			<p>Econometric Modelling</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/108105055/" target="_blank">https://nptel.ac.in/courses/108105055/</a></u></p>
			</td>
		</tr>
		<tr>
			<td>
			<h3>2</h3>
			</td>
			<td>
			<p>Economics / Management / Entrepreneurship</p>
			</td>
			<td>
			<p><u><a href="https://nptel.ac.in/courses/110105067/" target="_blank">https://nptel.ac.in/courses/110105067/</a></u></p>
			</td>
		</tr>
	</tbody>
    </Table>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </Col>     
                </Row>
          
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default  MoocIsbm;