import React, { useEffect } from 'react';
import { Container, Breadcrumb, Form, Button, Row } from "react-bootstrap";
import Footer from "./footer";
import Header from "./Header/header";
import NavigationBar from "./Header/navbar";
import { MdPlayArrow } from 'react-icons/md';
import Enquiry_now from "./enquiry_now";
import inter from "../Images/international.jpg"
const Internationalstudents = () => {
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header />
            <NavigationBar />
            <div className="innerbackimage">
                <div className="text_banners_abcds">
                    <h1 className="animate__animated animate__fadeInRightBig">
                    International Students
                    </h1>
                        <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
                <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
            <div className="About_us11 container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a role="button" tabIndex={0} /><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">International Students</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="linkabout123">International Students</h2>
                        {/* <img src="/static/media/library.5aba3069.jpg" style={{ marginBottom: '20px' }} /> */}
                        {/* <div><MdPlayArrow className="arrow11" /><b className="worslls">International Students</b></div> */}
                        <ul className="extracontent">
                            <li>ISBM University (Deemed to be University) is situated in Chhattisgarh under the Chhattisgarh Private Universities (Establishment and Operation Act) 2005</li>
                            <li>Student should update the University regarding the visa status once the Admission is confirmed.</li>
                            <li>Ensure that you bring the Medical Certificate provided by an authorized doctor in your country stating about your fitness</li>
                            <li>Ensure you've taken all of the vaccinations you need to avoid medical complications like Yellow Fever, Typhoid Vaccine, Hepatitis Vaccine, Covid Vaccine etc. while in India.</li>
                            <li>Ensure that at least two weeks before arrival you notify ISTM University International Relations for Airport pickup and provide the complete details of your flight journey. </li>
                            <li>Bring the University Admission letter along with all the Certificates/Degrees and Transcripts (in original) and 15 passport size photographs.</li>
                            <li>Before you bring the foreign currency kindly consult the Indian Embassy /High commission in your country to ascertain the limits on the currency. You can bring all your money in the form of Travelers Cheques which can be easily exchanged either at the airport or in exchange offices and banks. Alternatively you can use International Debit / Credit Cards issued in your country.</li>
                            <li>Students should confirm with the Indian Embassy about FRRO / Fro process.</li>
                            <li>Temperature varies between 30 to 45 degrees Celsius around summer and from 20 to 25 degree Celsius around winter. Here the winter season starts from November so it is necessary to bring the warm material (blankets, quilts, woolens, etc.) accordingly.</li>
                            <li>While all things are available in Chhattisgarh, try to get everything you would need in the first few days. You can get all the essential items from the markets about 3 km away from the university campus.</li>
                            <li>In India the electrical standard works on 240 V AC. So, if the devices operate on a different voltage in your country, make sure you have an adapter for your mobile or laptop. The electrical sockets are also 2 or 3 pin (round holes) so you'll be able to carry a converter/adapter</li>
                            <li>University will arrange airport pickup for students who have shared their flight details with the Office of International Relations after reaching Chhattisgarh.</li> 
                            <li>Student should submit the documents at the Immigration Counter in the airport and ensure that the passport is stamped.</li>
                            <li>The student must present with all necessary documents in the Office of International Relations (OIR) and communicate with the reporting officer to complete the admission formalities.</li>
                            <li>Student's visa must register in FRRO / FRO / Chhattisgarh within 14 days following his arrival in India for all international students. The University will lend support to students towards this. More information can be found in the document FRRO.pdf</li>
                            <li>The students are required to report for medical checkup at the Office of International Relations (OIR) and will advise the student regarding the medical insurance process.</li>

                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Internationalstudents