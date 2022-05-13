import React, { useEffect } from "react";
import { Container, Row, Col, Table, Breadcrumb } from "react-bootstrap";
import Footer from "../footer";
import Header from "../Header/header";
import NavigationBar from "../Header/navbar";
import Aboutbanner from "./aboutbanner";
import { Link, BrowserRouter } from "react-router-dom";
import Enquiry_now from "../enquiry_now";

const Mediacoverage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="innerbackimage">
          <div className="text_banners_abcds">
              <h1 className="animate__animated animate__fadeInRightBig">
              Media Coverage
              </h1>
                  <button className="animate__animated animate__fadeInRightBig apply_btn" onClick={() => setModalShow(true)}><span>Apply Now</span></button>
          <Enquiry_now show={modalShow} onHide={() => setModalShow(false)} />
          </div>
      </div>
      <Container className="About_us11 container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item active>Media Coverage</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col lg={3} className="mobile_view_none11">
            <h3 className="title">About us</h3>
            <p className="links_about1">
              <Link to="/aboutus">About ISBMU University</Link>
            </p>
            <p className="links_about1">
              <Link to="/Missionvalues">Vision, Mission and Values</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorable">Hon'ble Visitor</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorablepatron">Hon'ble Patron</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorablechancellor">Hon'ble Chancellor</Link>
            </p>
            <p className="links_about1">
              <Link to="/Honorablevicechancellor">Hon'ble Vice-Chancellor</Link>
            </p>
            <p className="links_about1">
              <Link to="/Officialregistar"> Registrar</Link>
            </p>
            <p className="links_about1">
              <Link to="/Governingbody"> Governing Body</Link>
            </p>
            <p className="links_about1">
              <Link to="/Message">Messages of the Dignitaries</Link>
            </p>
            <p className="links_about1">
              <Link to="/Boardmanagement">Board of Management</Link>
            </p>
            <p className="links_about1">
              <Link to="/Academiccouncil">Academic Council</Link>
            </p>
            <p className="links_about1">
              <Link to="/BoardAdvisor">Board of Advisors</Link>
            </p>
            <p className="links_about1">
              <Link to="/Othercommunitie">Other Committees</Link>
            </p>
            <p className="links_about1">
              <Link to="/StatuesOrdinance">Statutes and Ordinances</Link>
            </p>
            <p className="links_about1">
              <Link to="/Recognisation">Recognitions and Approvals</Link>
            </p>
            <p className="links_about1">
              <Link to="/Awards">Awards</Link>
            </p>
            <p className="links_about active">
              <Link to="/Mediacoverage">Media Coverage</Link>
            </p>
            {/* <p className="links_about1"><Link to="/">Mou's &amp; Collaboration</Link></p> */}
          </Col>
          <Col lg={9} className="media_videos">
            <h2 className="linkabout123">Media Coverage</h2>
            {/* <p>
              मन से की गई मेहनत से सफलता अवश्य मिलती है: सुश्री उइके राज्यपाल
              छत्तीसगढ़ निजी विश्वविद्यालय संघ द्वारा आयोजित सम्मान समारोह में
              हुई शामिल ‘‘मन से की गई मेहनत से सफलता अवश्य मिलती है’’ उक्त बातें
              राज्यपाल सुश्री अनुसुईया उइके ने आज राजभवन में छत्तीसगढ़ निजी
              विश्वविद्यालय संघ द्वारा छत्तीसगढ़ निजी विश्वविद्यालय विनियामक आयोग
              के अध्यक्ष डॉ. शिववरण शुक्ल के सम्मान में आयोजित समारोह को संबोधित
              करते हुए कही। राज्यपाल सुश्री उइके ने सम्मान समारोह को संबोधित
              करते हुए कहा कि डॉ. शुक्ल का संपूर्ण जीवन शिक्षा के क्षेत्र में
              समर्पित रहा और आयोग के सदस्य एवं अध्यक्ष के रूप में निजी
              विश्वविद्यालयों को भी उनके अनुभवों का लाभ मिला। अपने संपूर्ण
              कार्यकाल में उन्होंने विभिन्न शिक्षण संस्थाओं में सेवाएं दी तथा
              शिक्षाविद् के रूप में उनके कार्य विद्यार्थियों के साथ-साथ उच्च
              शिक्षा से जुड़े संस्थान और शोधार्थियों के लिए भी अनुकरणीय हैं।
              उन्होंने कहा कि कर्मठ व्यक्ति के लिए कोई भी राह कठिन नहीं होती है
              और यह बताने की आवश्यकता नहीं है कि डॉ. शुक्ल न केवल कर्मठ हैं,
              बल्कि अपने दायित्वों का बखूबी निर्वहन करते आ रहे हैं। राज्यपाल
              सुश्री उइके ने कहा कि जो व्यक्ति पूरी तन्मयता के साथ कार्य करता है
              उसके लिए सभी चुनौतियां बौनी साबित होती है। उन्होंने अपने
              प्राध्यापक जीवन के दिनों का स्मरण करते हुए कहा कि हमारी कोशिश होनी
              चाहिए कि शिक्षा सभी के लिए सुलभ हो और सबको समान अवसर भी प्राप्त
              हो। निजी विश्वविद्यालय विनियामक आयोग के अध्यक्ष के रूप में डॉ.
              शुक्ल ने ऐसे उल्लेखनीय कार्य किए हैं, जिससे दीर्घकाल में आयोग के
              साथ-साथ छात्र भी लाभान्वित होंगे। सुश्री उइके ने डॉ. शुक्ल के
              स्वस्थ व दीर्घायु जीवन की कामना करते हुए कहा कि बतौर शिक्षाविद्
              उनका योगदान सदैव अतुलनीय व स्मरणीय रहेगा। उच्च शिक्षा मंत्री
              छत्तीसगढ़ शासन श्री उमेश पटेल ने भी विनियामक आयोग के अध्यक्ष डॉ.
              शुक्ल के भावी जीवन के लिए शुभकामनाएं देते हुए उनके द्वारा शिक्षा
              के क्षेत्र में किए गए कार्यों की सराहना की। मंत्री श्री पटेल ने
              कहा कि सेवानिवृत्ति किसी भी व्यक्ति के जीवन का पड़ाव मात्र है।
              सेवानिवृत्ति के बाद डॉ. शुक्ल अपनी रूचि का तथा रचनात्मक कार्य
              करें, हर्षित रहें, प्रफुल्लित रहें। डॉ. शिववरण शुक्ल ने सम्मान
              समारोह के आयोजन के लिए धन्यवाद देते हुए कहा कि मेरे पूरे कार्यकाल
              के दौरान अलग-अलग समय पर सभी सहकर्मियों का भरपूर सहयोग मिला है। सभी
              निजी विश्वविद्यालयों के साथ व समन्वय से आयोग ने नये प्रतिमान
              स्थापित किए हैं। उन्होंने कहा कि आयोग के अध्यक्ष के रूप में शिक्षा
              के बेहतरी के लिए सदैव प्रयत्नशील रहा हूं और सबके सहयोगात्मक भावना
              के कारण ही यह संभव हो पाया है। इस अवसर पर राज्यपाल सुश्री उइके तथा
              उच्च शिक्षा मंत्री श्री उमेश पटेल ने स्मृति चिन्ह देकर डॉ. शुक्ल
              को सम्मानित किया। साथ ही छत्तीसगढ़ निजी विश्वविद्यालय संघ ने भी
              राज्यपाल सुश्री उइके व उच्च शिक्षा मंत्री श्री पटेल को स्मृति
              चिन्ह देकर सम्मानित किया। कार्यक्रम में सुश्री उइके द्वारा विभिन्न
              निजी विश्वविद्यालयों के स्मारिकाओं का भी विमोचन किया गया। भारती
              विश्वविद्यालय दुर्ग के ‘‘कार्य मंजूषा’’, छत्तीसगढ़ निजी
              विश्वविद्यालय एसोसिएशन के ‘‘ज्ञानामृतम’’, ए.ए.एफ.टी. विश्वविद्यालय
              रायपुर के ‘‘भारतीय ज्ञान एवं संस्कृति के वैश्विक परिदृश्य’’, डॉ.
              सी.व्ही.रमन विश्वविद्यालय का ‘‘छत्तीसगढ़ राज्य एवं विश्वविद्यालय
              स्थापना महोत्सव एवं ‘‘छत्तीसगढ़ के आदिवासी युवाओं के विकास में निजी
              विश्वविद्यालयों का योगदान’’ नामक स्मारिका का विमोचन किया गया। इस
              अवसर पर निजी विश्वविद्यालय संघ के अध्यक्ष श्री गजराज पगारिया सहित
              सभी निजी विश्वविद्यालयों के कुलाधिपति, कुलपति एवं कुलसचिव उपस्थित
              थे। एसोसिएशन के सचिव श्री विनय अग्रवाल ने आभार व्यक्त किया।
            </p> */}
            <Row>
              <Col lg={4}>
                <div className="youvideos">
                  <iframe
                    style={{ width: "100%", height: "250px" }}
                    src="https://www.youtube.com/embed/1OdmR85f1Vo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h4>Media Coverage of INH TV</h4>
                </div>
              </Col>
              <Col lg={4}>
                <div className="youvideos">
                  <iframe
                    style={{ width: "100%", height: "250px" }}
                    src="https://www.youtube.com/embed/msaIBvKXjws"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h4>Media Coverage of IBC24</h4>
                </div>
              </Col>
              <Col lg={4}>
                <div className="youvideos">
                  <iframe
                    style={{ width: "100%", height: "250px" }}
                    src="https://www.youtube.com/embed/r-z-6sMtrgY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h4>Media Coverage of Swaraj Express</h4>
                </div>
              </Col>
              <Col lg={4}>
                <div className="youvideos">
                  <iframe
                    style={{ width: "100%", height: "250px" }}
                    src="https://www.youtube.com/embed/d-H0D7OaRp0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h4>"ISBMU Shushiksha Scholarship Event 2019"</h4>
                </div>
              </Col>
              <Col lg={4}>
                <div className="youvideos">
                  <iframe
                    style={{ width: "100%", height: "250px" }}
                    src="https://www.youtube.com/embed/490Sw_wiZW8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h4>Media Coverage of Edumate TV</h4>
                </div>
              </Col>
              <Col lg={4}>
                <div className="youvideos">
                  <iframe
                    style={{ width: "100%", height: "250px" }}
                    src="https://www.youtube.com/embed/VO2P-OGklh8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h4>Media Coverage of Desh TV</h4>
                </div>
              </Col>
              <Col lg={4}>
                <div className="youvideos">
                  <iframe
                    style={{ width: "100%", height: "250px" }}
                    src="https://www.youtube.com/embed/d-RIDjYSYFE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h4>Media Coverage of Glibs.in news</h4>
                </div>
              </Col>
              <Col lg={4}>
                <div className="youvideos">
                  <iframe
                    style={{ width: "100%", height: "250px" }}
                    src="https://www.youtube.com/embed/HqxxM7QkteM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h4>Media Coverage of Swaraj Express</h4>
                </div>
              </Col>
              <Col lg={4}>
                <div className="youvideos">
                  <iframe
                    style={{ width: "100%", height: "250px" }}
                    src="https://www.youtube.com/embed/ZpXfEGWxAYY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <h4>Media Coverage of Swaraj Express</h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Mediacoverage;
