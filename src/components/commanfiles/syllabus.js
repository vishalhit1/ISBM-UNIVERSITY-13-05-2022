import React from 'react'
import { BsDownload } from "react-icons/bs";
const Syllabus = () => {
    return (
        <div style={{ background: '#06355f', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h4 className='syllabuss'>Syllabus</h4>
                        <p className='paras_acd'>Best-in-class content by leading faculty and industry leaders in the form of videos, cases and projects</p>
                    </div>
                    <div className='col-lg-4'>
                        <button className='abvcd'><BsDownload /> Download Syllabus</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Syllabus