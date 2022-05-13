import React from 'react'
import Ourstudentwork from "./ourstudentwork";
import Faculties from "./faculties";
import Learnersupport from "./learnersupport";
import Admissionprocess from "./admissionprocess";
import Career_opportunities from "./career_opportunities";
import Testimonials from "./testimonials";
import Isbmuadvantage from "./isbmuadvantage";
import Syllabus from "./syllabus";
import Degree from "./degree";
import Faqs from "./faqs";
import Facilities from '../Campus/facilities';
const Allinone = () => {
  return (
    <div>
        {/* <Syllabus /> */}
        {/* <Degree/> */}
        <Facilities/>
        <Career_opportunities />
        <Isbmuadvantage />
        <Faculties />
        <Testimonials />
        <Admissionprocess />
        {/* <Ourstudentwork /> */}
        <Faqs />
        <Learnersupport />
    </div>
  )
}

export default Allinone