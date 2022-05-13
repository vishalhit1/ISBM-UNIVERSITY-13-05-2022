import React from 'react'
import { Tabs, Tab } from "react-bootstrap";


const Degree = () => {
    return (
        <div className='container-fluid degrees'>
            <div className='container'>
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
                    <Tab eventKey="home" title="LBS">
                        <div className='row'>
                            <div className='col-lg-7'>
                                <h3>MBA Degree</h3>
                                <p>Become a part of global & strong alumni network of one of UK's Top B-School - Liverpool Business School</p>
                                <div style={{ borderLeft: 'solid white 2px' }}>
                                    <p style={{ paddingLeft: '15px' }}>Get an MBA Degree from a leading UK B-School at 1/10th the cost</p>
                                    <p style={{ marginTop: '10px', paddingLeft: '15px' }}>Learn industry relevant skills to enhance your career</p>
                                </div>
                            </div>
                            <div className='col-lg-5'>
                                <img src="https://thumbs.dreamstime.com/b/certificate-template-diploma-letter-size-vector-vertical-61990694.jpg" />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="IMT Ghaziabad">
                        <div className='row'>
                            <div className='col-lg-7'>
                                <h3>Post Graduate Programme from IMT Ghaziabad</h3>
                                <p>Become part of the 10,000+ community of management leaders with IMTG Associate Alumni status from IMT Ghaziabad</p>
                                <div style={{ borderLeft: 'solid white 2px' }}>
                                    <p style={{ paddingLeft: '15px' }}>Get certified from one of India's top B-schools</p>
                                    <p style={{ marginTop: '10px', paddingLeft: '15px' }}>Widely recognized and valued programme in management</p>
                                </div>
                            </div>
                            <div className='col-lg-5'>
                                <img style={{width:"100%"}} src="https://i.pinimg.com/736x/b4/e7/09/b4e709fcd318edd41e90a1ff0d5889cb.jpg" />
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Degree