import React from 'react';
import './App.css';
import Home from './components/Header/Home';
import Home1 from './components/Header/Home1';
import Aboutus from './components/About/aboutus';
import { BrowserRouter, Redirect, Place, Route, Link, Switch, } from "react-router-dom";
import Missionvalues from './components/About/visionmission';
import Honorable from './components/About/honorable';
import Honorablepatron from './components/About/honorablepatron';
import Honorablevicechancellor from './components/About/honorablevicechancellor';
import Honorablechancellor from './components/About/honorablechancellor';
import Officialregistar from './components/About/officialregistar';
import Governingbody from './components/About/governingbody';
import Message from './components/About/messages';
import Boardmanagement from './components/About/boardmanagement';
import Academiccouncil from './components/About/academiccouncil';
import Othercommunitie from './components/About/othercommunitie';
import Recognisation from './components/About/recognisation';
import Awards from './components/About/awards';
import Mediacoverage from './components/About/mediacoverage';
import StatuesOrdinance from './components/About/statues';
import BoardAdvisor from './components/About/boardAdvisor';
import Schoolmanagement from './components/Academics/schoolmanagement';
import Schoolscience from './components/Academics/schoolscience';
import Schoolartshuman from './components/Academics/schoolartshuman';
import Schoolengrtech from './components/Academics/schoolengrtech';
import Schooloflibrary from './components/Academics/schooloflibrary';
import Journalismandmass from './components/Academics/schoolofjournalism';
import Schoollaws from './components/Academics/schoollaws';
import Schooldesign from './components/Academics/schooldesgin';
import Schoolofit from './components/Academics/schoolofit';
import Schoolofpharma from './components/Academics/schoolofpharma';
import Schooloflifescience from './components/Academics/schooloflifescience';
import Schoolofyoga from './components/Academics/schoolofyoga';
import Schoolofeducation from './components/Academics/schoolofeducation';
import Industryintegrated from './components/Academics/industryintegrated';
import Research from './components/Academics/research';
import MoocIsbm from './components/Academics/moocisbm';
import Schoolofhotelmanagement from './components/Academics/schoolofhotelmanagement';
import Academicsphil from './components/Academics/academicsphil';
import Academicspartners from './components/Academics/academicpartners';
import Specialdevelopment from './components/Academics/specialdevelopment';
import Downloadresources from './components/Academics/downloadresources';
import Teachningmethod from './components/Academics/teachingmethod';
import Certificateemdps from './components/Academics/certprogmdps';
import Aboutplacement from './components/Placements/aboutplacements';
import Careercounselling from './components/Placements/careercounselling';
import Globalskills from './components/Placements/globalskills';
import Recruiters from './components/Placements/recruiters';
import ProgramsEligibility from './components/Admissions/programseligibility';
import IndustryIntegrated from './components/Admissions/industryintegrated';
import SkillDevelopment from './components/Admissions/skilldevelopment';
import After10th from './components/Admissions/after10th';
import ApplyOnline from './components/Admissions/applyonline';
import PayOnline from './components/Admissions/payonline';
import Downloads from './components/Admissions/downloads';
import PaymentProcedure from './components/Admissions/paymentprocedure';
import AdmissionProcedure from './components/Admissions/admissionprocedure';
import AdmissionHelpDesk from './components/Admissions/admissionhelpdesk';
import Campusrecruitment from './components/Placements/campusrecurements';
import Scholarships from './components/Studentcorner/scholarship';
import Antiragging from './components/Studentcorner/antiragging';
import Faqs from './components/Studentcorner/faqs';
import Complaincaste from './components/Campus/complaincaste';
import Overview from './components/Campus/overview';
import Library from './components/Campus/library';
import Laboratory from './components/Campus/laboratory';
import CampusInfrastructure from './components/Campus/campusinfra';
import ItLab from './components/Campus/itlab';
import ExtraCurricular from './components/Campus/extracurricular';
import DigitizedLearning from './components/Campus/digitize';
import Complaints from './components/Campus/complaints';
import Hostel from './components/Campus/hostel';
import Bustransformation from './components/Campus/bustransformation';
import Busrouteschedule from './components/Campus/busrouteschedule';
import Bachelors_in_business_administration from './components/Academics/Innerpages/bachelors-in-business-administration';
import Masters_in_business_administration from './components/Academics/Innerpages/masters-in-business-administration';
import Diploma_in_business_administration from './components/Academics/Innerpages/diploma-in-business-administration';
import Executive_masters_in_business_administration from './components/Academics/Innerpages/executive-masters-in-business-administration';
import Post_graduate_diploma_in_business_administration from './components/Academics/Innerpages/post-graduate-diploma-in-business-administration';
import Phd_mphil_program_in_management from './components/Academics/Innerpages/phd-mphil-program-in-management';
import Diploma_in_Engineering from './components/Academics/Innerpages/diploma-in-engineering';
import Bachelor_in_technology from './components/Academics/Innerpages/bachelor-in-technology';
import Bachelor_of_library_and_information_science from './components/Academics/Innerpages/bachelor-of-library-and-information-science';
import Master_of_library_and_information_science from './components/Academics/Innerpages/master-of-library-and-information-science';
import Diploma_in_Journalism_and_Mass_Communication from './components/Academics/Innerpages/diploma-in-journalism-and-mass-communic';
import Bachelor_of_arts_in_journalism_and_mass_communication from './components/Academics/Innerpages/bachelor-of-arts-in-journalism-and-mass-communication';
import Master_of_arts_in_journalism_and_mass_communication from './components/Academics/Innerpages/master-of-arts-in-journalism-and-mass-communication';
import Bachelors_in_business_administration_and_bachelors_in_law from './components/Academics/Innerpages/bachelors-in-business-administration-and-bachelors-in-law';
import Bachelors_in_Law from './components/Academics/Innerpages/bachelors-in-law';
import Master_in_laws from './components/Academics/Innerpages/master-in-law';
import Phd_mhil_program from './components/Academics/Innerpages/phd-mphil-program-in-law';
import Bachelors_In_Science from './components/Academics/Innerpages/bachelors-in-science';
import Diploma_In_Nutrition from './components/Academics/Innerpages/diploma-in-nutrition';
import Masters_In_Science from './components/Academics/Innerpages/masters-in-science';
import Phd_Program from './components/Academics/Innerpages/phd-science';
import SchoolOfCommerce from './components/Academics/schoolcommerce';
import Bachelors_In_Commerce from './components/Academics/Innerpages/bachelors-in-commerce';
import Masters_In_Commerce from './components/Academics/Innerpages/masters-in-commerce';
import Phd_Commerce from './components/Academics/Innerpages/phd-commerce';
import Bachelors_In_Arts from './components/Academics/Innerpages/bachelors-in-arts';
import Bachelors_Public_Admin from './components/Academics/Innerpages/b-public-admin';
import Bachelors_Social_Work from './components/Academics/Innerpages/bachelor-social-work';
import Masters_Social_Work from './components/Academics/Innerpages/masters-social-work';
import Masters_In_Arts from './components/Academics/Innerpages/masters-of-arts';
import Phd_Arts from './components/Academics/Innerpages/phd-arts';
import Diploma_Interior_Design from './components/Academics/Innerpages/diploma-iterior-design';
import Certificate_in_Fashion_designing from './components/Academics/Innerpages/certificate-in-fashion-designing';
import Certificate_in_interior_design from './components/Academics/Innerpages/certificate-in-interior-design';
import Diploma_in_fashion_designing from './components/Academics/Innerpages/diploma-in-fashion-designing';
import Bachelor_of_science_in_fashion_designing from './components/Academics/Innerpages/bachelor-of-science-in-fashion-designing';
import Bachelor_of_science_in_interior_designing from './components/Academics/Innerpages/bachelor-of-science-in-interior-design';
import Diploma_in_computer_application from './components/Academics/Innerpages/diploma-in-computer-application';
import Advance_diploma_in_computer_applications from './components/Academics/Innerpages/advance-diploma-in-computer-applications-adca';
import Bachelor_of_science_in_computer_science from './components/Academics/Innerpages/bachelor-of-science-in-computer-science';
import Bachelor_of_science_in_information_technology from './components/Academics/Innerpages/bachelor-of-science-in-information-technology';
import Master_of_computer_applications from './components/Academics/Innerpages/master-of-computer-applications';
import Post_graduate_diploma_in_computer_application from './components/Academics/Innerpages/post-graduate-diploma-in-computer-application';
import Master_of_science_in_information_technology from './components/Academics/Innerpages/master-of-science-in-information-technology';
import Master_of_science_in_computer_science from './components/Academics/Innerpages/masters-of-science-in-computer-science';
import Phd_program_information_technology from './components/Academics/Innerpages/phd-mphil-program-in-it';
import Diploma_in_pharmacy from './components/Academics/Innerpages/diploma-in-pharmacy';
import Bachelor_of_pharmacy from './components/Academics/Innerpages/bachelor-of-pharmacy';
import Master_of_pharmacy from './components/Academics/Innerpages/master-of-pharmacy';
import Phd_program_pharmacy from './components/Academics/Innerpages/phd-program-pharmacy';
import Bachelor_of_science_in_biotechnology from './components/Academics/Innerpages/bachelor-of-science-in-biotechnology';
import Bachelor_of_science_in_microbiology from './components/Academics/Innerpages/bachelor-of-science-in-microbiology';
import Master_of_science_in_bio_technology from './components/Academics/Innerpages/master-of-science-in-bio-technology';
import Master_of_science_in_microbiology from './components/Academics/Innerpages/master-of-science-in-microbiology';
import Diploma_in_yoga from './components/Academics/Innerpages/diploma-in-yoga';
import Pg_diploma_in_yoga_and_naturopathy from './components/Academics/Innerpages/pg-diploma-in-yoga-and-naturopathy';
import Diploma_in_naturopathy from './components/Academics/Innerpages/diploma-in-naturopathy';
import Diploma_in_education from './components/Academics/Innerpages/diploma-in-education';
import Bachelor_of_education from './components/Academics/Innerpages/bachelor-of-education';
import Bachelor_of_physical_education from './components/Academics/Innerpages/bachelor-of-physical-education';
import Mba_in_business_administration from './components/Academics/Innerpages/mba-in-business-administration';
import Diploma_in_hotel_management_and_catering_technology from './components/Academics/Innerpages/diploma-in-hotel-management-and-catering-technology';
import Bachelors_in_hotel_management_and_catering_technology from './components/Academics/Innerpages/bachelors-in-hotel-management-and-catering-technology';
import Certificate_in_computer_design from './components/Academics/Innerpages/certificate-in-computer-design';
import Certificate_in_jewellery_design from './components/Academics/Innerpages/certificate_in_jewellery_design';
import Mdp_on_project_management from './components/Academics/Innerpages/mdp-on-project-management';
import Mdp_on_data_analytics from './components/Academics/Innerpages/mdp-on-data-analytics';
import Mdp_on_strategies_for_online_businesses from './components/Academics/Innerpages/mdp-on-strategies-for-online-businesses';
import Mdp_on_story_telling_and_theater_techniques from './components/Academics/Innerpages/mdp-on-story-telling-and-theater-techniques';
import Mdp_on_six_sigma_for_quality_improvement from './components/Academics/Innerpages/mdp-on-six-sigma-for-quality-improvement';
import Mdp_on_digital_communication_and_marketing_strategies from './components/Academics/Innerpages/mdp-on-digital-communication-and-marketing-strategies';
import Mdp_on_business_process_change_and_it_applications from './components/Academics/Innerpages/mdp-on-business-process-change-and-it-applications';
import Mdp_on_e_governance_and_government_process_change from './components/Academics/Innerpages/mdp-on-e-governance-and-government-process-change';
import Mdp_on_effective_communication_for_managers_and_leaders from './components/Academics/Innerpages/mdp-on-effective-communication-for-managers-and-leaders';
import Mdp_on_transforming_organizations_through_proactive_people_management_strategies from './components/Academics/Innerpages/mdp-on-transforming-organizations-through-proactive-people-management-strategies';
import Mdp_on_the_art_of_successful_leadership_and_management from './components/Academics/Innerpages/mdp-on-the-art-of-successful-leadership-and-management';
import Mdp_on_strategy_consultancy from './components/Academics/Innerpages/mdp-on-strategy-consultancy';
import Mdp_on_e_governance_and_digital_transformation_issue_and_challenges from './components/Academics/Innerpages/mdp-on-e-governance-and-digital-transformation-issue-and-challenges';
import Payfeesonline from './components/pay-fees-online';
import Contact_us from './components/contact_us';
import Isbm_pro from './components/isbmpro';
import Enquiry_now from './components/enquiry_now';
import On_load_popup from './components/on_load_popup';
import Bachelor_of_computer_applications from './components/Academics/Innerpages/bachelor-of-computer-applications';
import Payment_Failure from './components/payment_failure';
import Success from './components/Success';
import Sports from './components/sports';
import Libraries from './components/libraries';
import Laboratories from './components/Laboratories';
import Campus from './components/Campus';
import PageNotFound from './components/PageNotFound';
import Internationalstudents from './components/Internationalstudents';
function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
        <Switch>
          {/* <Route path="/aboutus">
          <Aboutus/>
        </Route> */}
          <Redirect from="/about-isbm-university.php" to="/aboutus" />
          <Route path="/aboutus">
            <Aboutus />
          </Route>
          {/* <Route path="/Missionvalues">
          <Missionvalues/>
        </Route> */}
          <Redirect from="/vision-mission-and-values.php" to="/Missionvalues" />
          <Route path="/Missionvalues">
            <Missionvalues />
          </Route>
          <Route path="/Honorable">
            <Honorable />
          </Route>
          <Route path="/Honorablepatron">
            <Honorablepatron />
          </Route>
          <Route path="/Honorablechancellor">
            <Honorablechancellor />
          </Route>
          <Route path="/Officialregistar">
            <Officialregistar />
          </Route>
          <Route path="/Honorablevicechancellor">
            <Honorablevicechancellor />
          </Route>
          <Route path="/Governingbody">
            <Governingbody />
          </Route>
          <Route path="/Message">
            <Message />
          </Route>
          <Route path="/Boardmanagement">
            <Boardmanagement />
          </Route>
          <Route path="/Academiccouncil">
            <Academiccouncil />
          </Route>
          <Route path="/Othercommunitie">
            <Othercommunitie />
          </Route>
          {/* <Route path="/Recognisation">
          <Recognisation/> 
        </Route> */}
          <Redirect from="/recognitions-and-approvals.php" to="/Recognisation" />
          <Route path="/Recognisation">
            <Recognisation />
          </Route>
          {/* <Route path="/Awards">
          <Awards/> 
        </Route> */}
          <Redirect from="/awards.php" to="/Awards" />
          <Route path="/Awards">
            <Awards />
          </Route>
          <Route path="/BoardAdvisor">
            <BoardAdvisor />
          </Route>
          {/* <Route path="/StatuesOrdinance">
          <StatuesOrdinance/> 
        </Route> */}
          <Redirect from="/ordinance-statutes.php" to="/StatuesOrdinance" />
          <Route path="/StatuesOrdinance">
            <StatuesOrdinance />
          </Route>


          {/* <Route path="/Mediacoverage">
          <Mediacoverage/> 
        </Route> */}


          <Redirect from="/media-coverage.php" to="/Mediacoverage" />
          <Route path="/Mediacoverage">
            <Mediacoverage />
          </Route>

          <Redirect from="/school-of-management.php" to="/Schoolmanagement" />
          <Route path="/Schoolmanagement">
            <Schoolmanagement />
          </Route>


          {/* <Route path="/Schoolmanagement">
          <Schoolmanagement/> 
        </Route> */}


          {/* <Route path="/Schoolscience">
          <Schoolscience/>
        </Route> */}


          <Redirect from="/school-of-science.php" to="/Schoolscience" />
          <Route path="/Schoolscience">
            <Schoolscience />
          </Route>


          <Redirect from="/school-of-arts-and-humanities.php" to="/Schoolartshuman" />
          <Route path="/Schoolartshuman">
            <Schoolartshuman />
          </Route>


          {/* <Route path="/Schoolartshuman">
          <Schoolartshuman/>
        </Route> */}


          <Redirect from="/school-of-engineering-and-technology.php" to="/Schoolengrtech" />
          <Route path="/Schoolengrtech">
            <Schoolengrtech />
          </Route>


          {/* <Route path="/Schoolengrtech">
          <Schoolengrtech/>
        </Route> */}

          <Redirect from="/school-of-library-and-information-science.php" to="/Schooloflibrary" />
          <Route path="/Schooloflibrary">
            <Schooloflibrary />
          </Route>


          {/* <Route path="/Schooloflibrary">
          <Schooloflibrary/>
        </Route> */}


          <Redirect from="/school-of-journalism-and-mass-communication.php" to="/Journalismandmass" />
          <Route path="/Journalismandmass">
            <Journalismandmass />
          </Route>


          {/* <Route path="/Journalismandmass">
          <Journalismandmass/>
        </Route> */}


          <Redirect from="/school-of-law.php" to="/Schoollaws" />
          <Route path="/Schoollaws">
            <Schoollaws />
          </Route>


          {/* <Route path="/Schoollaws">
          <Schoollaws/>
        </Route> */}

          <Redirect from="/school-of-design.php" to="/Schooldesign" />
          <Route path="/Schooldesign">
            <Schooldesign />
          </Route>


          {/* <Route path="/Schooldesign">
          <Schooldesign/>
        </Route> */}

          <Redirect from="/school-of-information-and-technology.php" to="/Schoolofit" />
          <Route path="/Schoolofit">
            <Schoolofit />
          </Route>


          {/* <Route path="/Schoolofit">
          <Schoolofit/>
        </Route> */}


          <Redirect from="/school-of-pharmacy.php" to="/Schoolofpharma" />
          <Route path="/Schoolofpharma">
            <Schoolofpharma />
          </Route>


          {/* <Route path="/Schoolofpharma">
          <Schoolofpharma/>
        </Route> */}

          <Redirect from="/school-of-life-science.php" to="/Schooloflifescience" />
          <Route path="/Schooloflifescience">
            <Schooloflifescience />
          </Route>


          {/* <Route path="/Schooloflifescience">
          <Schooloflifescience/>
        </Route> */}

          <Redirect from="/school-of-yoga-and-naturopathy.php" to="/Schoolofyoga" />
          <Route path="/Schoolofyoga">
            <Schoolofyoga />
          </Route>


          {/* <Route path="/Schoolofyoga">
          <Schoolofyoga/>
        </Route> */}


          <Redirect from="/school-of-education.php" to="/Schoolofeducation" />
          <Route path="/Schoolofeducation">
            <Schoolofeducation />
          </Route>


          {/* <Route path="/Schoolofeducation">
          <Schoolofeducation/>
        </Route> */}


          {/* <Route path="/Industryintegrated">
          <Industryintegrated/>
        </Route> */}
          <Redirect from="/industry-integrated-programs.php" to="/Industryintegrated" />
          <Route path="/Industryintegrated">
            <Industryintegrated />
          </Route>

          <Redirect from="/research.php" to="/Research" />
          <Route path="/Research">
            <Research />
          </Route>


          <Route path="/Research">
            <Research />
          </Route>

          <Route path="/Schoolofhotelmanagement">
            <Schoolofhotelmanagement />
          </Route>

          <Redirect from="/isbm-university-academic-philosophy.php" to="/Academicsphil" />
          <Route path="/Academicsphil">
            <Academicsphil />
          </Route>

          <Redirect from="/academic-partner.php" to="/Academicspartners" />
          <Route path="/Academicspartners">
            <Academicspartners />
          </Route>



          {/* <Route path="/Academicspartners">
          <Academicspartners/>
        </Route> */}


          <Redirect from="/special-development-cells.php" to="/Specialdevelopment" />
          <Route path="/Specialdevelopment">
            <Specialdevelopment />
          </Route>


          {/* <Route path="/Specialdevelopment">
          <Specialdevelopment/>
        </Route> */}


          <Redirect from="/online-resources.php" to="/Downloadresources" />
          <Route path="/Downloadresources">
            <Downloadresources />
          </Route>



          {/* <Route path="/Downloadresources">
          <Downloadresources/>
        </Route> */}


          <Redirect from="/teaching-methodology-pedagogy.php" to="/Teachningmethod" />
          <Route path="/Teachningmethod">
            <Teachningmethod />
          </Route>


          {/* <Route path="/Teachningmethod">
          <Teachningmethod/>
        </Route> */}

          <Redirect from="/certificate-programs-and-mdps-certificate-courses.php" to="/Certificateemdps" />
          <Route path="/Certificateemdps">
            <Certificateemdps />
          </Route>


          {/* <Route path="/Certificateemdps">
          <Certificateemdps/>
        </Route> */}
        <Redirect from="/about-placement.php" to="/Aboutplacement" />
          <Route path="/Aboutplacement">
            <Aboutplacement />
          </Route>

          <Redirect from="/career-cells.php" to="/Careercounselling" />
          <Route path="/Careercounselling">
            <Careercounselling />
          </Route>


          {/* <Route path="/Careercounselling">
          <Careercounselling/>
        </Route> */}



          <Redirect from="/global-skills.php" to="/Globalskills" />
          <Route path="/Globalskills">
            <Globalskills />
          </Route>


          {/* <Route path="/Globalskills">
          <Globalskills/>
        </Route> */}

          <Redirect from="/recruiters.php" to="/Recruiters" />
          <Route path="/Recruiters">
            <Recruiters />
          </Route>

          {/* <Route path="/Recruiters">
          <Recruiters/>
        </Route> */}


          <Redirect from="/campus-recruitment-interview-training.php" to="/Campusrecruitment" />
          <Route path="/Campusrecruitment">
            <Campusrecruitment />
          </Route>


          {/* <Route path="/Campusrecruitment">
          <Campusrecruitment/>
        </Route> */}
          {/* <Route path="/Faqs">
          <Faqs/>
        </Route> */}

          <Redirect from="/faqs.php" to="/Faqs" />
          <Route path="/Faqs">
            <Faqs />
          </Route>


          {/* <Route path="/Scholarships">
            <Scholarships />
          </Route> */}

          <Redirect from="/scholarship.php" to="/Scholarships" />
          <Route path="/Scholarships">
            <Scholarships />
          </Route>

          {/* <Route path="/Antiragging">
          <Antiragging/>
        </Route> */}

          <Redirect from="/anti-ragging-policy.php" to="/Antiragging" />
          <Route path="/Antiragging">
            <Antiragging />
          </Route>

          <Redirect from="/mooc-with-isbm.php" to="/MoocIsbm" />
          <Route path="/MoocIsbm">
            <MoocIsbm />
          </Route>


          {/* <Route path="/MoocIsbm">
          <MoocIsbm/>
        </Route> */}

          {/* ------------------------Admission----------------------- */}
          <Redirect from="/programmes-and-eligibilities.php" to="/programs&eligibilty" />
          <Route path='/programs&eligibilty'>
            <ProgramsEligibility />
          </Route>

          <Redirect from="/industry-integrated-programs.php" to="/industryintegrated" />
          <Route path='/industryintegrated'>
            <IndustryIntegrated />
          </Route>

          <Redirect from="/skill-development.php" to="/skilldevelopment" />
          <Route path="/skilldevelopment">
            <SkillDevelopment />
          </Route>

          {/* <Route path='/skilldevelopment'>
          <SkillDevelopment/>
        </Route> */}
          <Route path='/after-10th'>
            <After10th />
          </Route>
          {/* <Route path='/applyonline'>
          <ApplyOnline/>
        </Route> */}

          <Redirect from="/apply-online.php" to="/applyonline" />
          <Route path="/applyonline">
            <ApplyOnline />
          </Route>

          <Redirect from="/pay-fees-online.php" to="/onlinepayment" />
          <Route path="/onlinepayment">
            <PayOnline />
          </Route>

          {/* <Route path='/onlinepayment'>
          <PayOnline/>
        </Route> */}
          <Route path='/downloads'>
            <Downloads />
          </Route>


          <Redirect from="/complaint-against-caste-based-discrimination.php" to="/Complaincaste" />
          <Route path="/Complaincaste">
            <Complaincaste />
          </Route>


          {/* <Route path='/Complaincaste'>
          <Complaincaste/>
        </Route> */}


          <Redirect from="/complaints.php" to="/Complaints" />
          <Route path="/Complaints">
            <Complaints />
          </Route>

          {/* <Route path='/Complaints'>
          <Complaints/>
        </Route> */}

          <Redirect from="/hostel.php" to="/Hostel" />
          <Route path="/Hostel">
            <Hostel />
          </Route>


          {/* <Route path='/Hostel'>
          <Hostel/>
        </Route> */}

          <Redirect from="/bus-routes-and-schedules.php" to="/Bustransformation" />
          <Route path="/Bustransformation">
            <Bustransformation />
          </Route>


          {/* <Route path='/Bustransformation'>
          <Bustransformation/>
        </Route> */}


          <Redirect from="/bus-transportation-fees.php" to="/Busrouteschedule" />
          <Route path="/Busrouteschedule">
            <Busrouteschedule />
          </Route>


          {/* <Route path='/Busrouteschedule'>
          <Busrouteschedule/>
        </Route> */}


          {/* <Route path='/paymentprocedure'>
          <PaymentProcedure/>
        </Route> */}


          <Redirect from="/payment-procedure-guidelines.php" to="/paymentprocedure" />
          <Route path="/paymentprocedure">
            <PaymentProcedure />
          </Route>


          {/* <Route path='/admissionprocedure'>
          <AdmissionProcedure/>
        </Route> */}

          <Redirect from="/admission-procedure-guidelines.php" to="/admissionprocedure" />
          <Route path="/admissionprocedure">
            <AdmissionProcedure />
          </Route>

          <Redirect from="/admission-helpdesk.php" to="/admissionhelpdesk" />
          <Route path="/admissionhelpdesk">
            <AdmissionHelpDesk />
          </Route>


          {/* <Route path='/admissionhelpdesk'>
          <AdmissionHelpDesk/>
        </Route> */}

          <Redirect from="/overview.php" to="/Overview" />
          <Route path="/Overview">
            <Overview />
          </Route>


          {/* <Route path='/overview'>
          <Overview/>
        </Route> */}

          <Redirect from="/overview.php" to="/overview" />
          <Route path="/overview">
            <Overview />
          </Route>

          <Redirect from="/library.php" to="/library" />
          <Route path="/library">
            <Library />
          </Route>


          {/* <Route path='/library'>
          <Library/>
        </Route> */}


          <Redirect from="/laboratory.php" to="/laboratory" />
          <Route path="/laboratory">
            <Laboratory />
          </Route>


          {/* <Route path='/laboratory'>
          <Laboratory/>
        </Route> */}


          <Route path='/campusinfrastructure'>
            <CampusInfrastructure />
          </Route>

          <Redirect from="/information-technology-lab.php" to="/itlab" />
          <Route path="/itlab">
            <ItLab />
          </Route>


          {/* <Route path='/itlab'>
          <ItLab/>
        </Route> */}


          <Redirect from="/extra-curricular.php" to="/extracurricular" />
          <Route path="/extracurricular">
            <ExtraCurricular />
          </Route>


          {/* <Route path='/extracurricular'>
          <ExtraCurricular/>
        </Route> */}

          <Redirect from="/digitized-learning-system.php" to="/DigitizedLearning" />
          <Route path="/DigitizedLearning">
            <DigitizedLearning />
          </Route>


          {/* <Route path='/digitizedlearning'>
          <DigitizedLearning/>
        </Route> */}


          {/* Inner Pages Linking */}


          <Redirect from="/bachelors-in-business-administration-bba.php" to="/Bachelors_in_business_administration" />
          <Route path="/Bachelors_in_business_administration">
            <Bachelors_in_business_administration />
          </Route>


          {/* <Route path='/Bachelors_in_business_administration'>
          <Bachelors_in_business_administration/>
        </Route> */}

          <Redirect from="/masters-in-business-administration-mba.php" to="/Masters_in_business_administration" />
          <Route path="/Masters_in_business_administration">
            <Masters_in_business_administration />
          </Route>


          {/* <Route path='/Masters_in_business_administration'>
          <Masters_in_business_administration/>
        </Route> */}

          <Redirect from="/diploma-in-business-administration-dba.php" to="/Diploma_in_business_administration" />
          <Route path="/Diploma_in_business_administration">
            <Diploma_in_business_administration />
          </Route>

          {/* <Route path='/Diploma_in_business_administration'>
          <Diploma_in_business_administration/>
        </Route> */}

          <Redirect from="/executive-masters-in-business-administration-emba.php" to="/Executive_masters_in_business_administration" />
          <Route path="/Executive_masters_in_business_administration">
            <Executive_masters_in_business_administration />
          </Route>


          {/* <Route path='/Executive_masters_in_business_administration'>
          <Executive_masters_in_business_administration/>
        </Route> */}

          <Redirect from="/post-graduate-diploma-in-business-administration.php" to="/Post_graduate_diploma_in_business_administration" />
          <Route path='/Post_graduate_diploma_in_business_administration'>
            <Post_graduate_diploma_in_business_administration />
          </Route>

          <Redirect from="/phd-mphil-program-in-management.php" to="/Phd_mphil_program_in_management" />
          <Route path='/Phd_mphil_program_in_management'>
            <Phd_mphil_program_in_management />
          </Route>

          <Redirect from="/diploma-in-engineering.php" to="/Diploma_in_Engineering" />
          <Route path='/Diploma_in_Engineering'>
            <Diploma_in_Engineering />
          </Route>

          <Redirect from="/bachelor-in-technology.php" to="/Bachelor_in_technology" />
          <Route path='/Bachelor_in_technology'>
            <Bachelor_in_technology />
          </Route>
          
          <Redirect from="/bachelor-of-library-and-information-science-blib.php" to="/Bachelor_of_library_and_information_science" />
          <Route path='/Bachelor_of_library_and_information_science'>
            <Bachelor_of_library_and_information_science />
          </Route>

          <Redirect from="/master-of-library-and-information-science-mlib.php" to="/Master_of_library_and_information_science" />
          <Route path='/Master_of_library_and_information_science'>
            <Master_of_library_and_information_science />
          </Route>

          <Redirect from="/diploma-in-journalism-and-mass-communication.php" to="/Diploma_in_Journalism_and_Mass_Communication" />
          <Route path="/Diploma_in_Journalism_and_Mass_Communication">
            <Diploma_in_Journalism_and_Mass_Communication />
          </Route>

          <Redirect from="/bachelor-of-arts-in-journalism-and-mass-communication-bajmc.php" to="/Bachelor_of_arts_in_journalism_and_mass_communication" />
          <Route path="/Bachelor_of_arts_in_journalism_and_mass_communication">
            <Bachelor_of_arts_in_journalism_and_mass_communication />
          </Route>

          <Redirect from="/master-of-arts-in-journalism-and-mass-communication-majmc.php" to="/Master_of_arts_in_journalism_and_mass_communication" />
          <Route path="/Master_of_arts_in_journalism_and_mass_communication">
            <Master_of_arts_in_journalism_and_mass_communication />
          </Route>

          <Redirect from="/bachelors-in-business-administration-and-bachelors-in-law-bba-llb.php" to="/Bachelors_in_business_administration_and_bachelors_in_law" />
          <Route path="/Bachelors_in_business_administration_and_bachelors_in_law">
            <Bachelors_in_business_administration_and_bachelors_in_law />
          </Route>
          
          <Redirect from="/bachelors-in-law.php" to="/Bachelors_in_Law" />
          <Route path="/Bachelors_in_Law">
            <Bachelors_in_Law />
          </Route>

          <Redirect from="/master-in-law-llm.php" to="/Master_in_laws" />
          <Route path="/Master_in_laws">
            <Master_in_laws />
          </Route>

          <Redirect from="/phd-mphil-program-in-law.php" to="/Phd_mhil_program" />
          <Route path="/Phd_mhil_program">
            <Phd_mhil_program />
          </Route>

          <Redirect from="/diploma-in-pharmacy.php" to="/Diploma_in_pharmacy" />
          <Route path="/Diploma_in_pharmacy">
            <Diploma_in_pharmacy />
          </Route>

          <Redirect from="/master-of-pharmacy.php" to="/Master_of_pharmacy" />
          <Route path="/Master_of_pharmacy">
            <Master_of_pharmacy />
          </Route>
          {/* ------------------InnerPages--------------------- */}

          <Redirect from="/bachelors-in-science.php" to="/bachelors-of-science" />
          <Route path="/bachelors-of-science">
            <Bachelors_In_Science />
          </Route>


          {/* <Route path='/bachelors-of-science'>
          <Bachelors_In_Science/>
        </Route> */}

          <Redirect from="/diploma-in-nutrition.php" to="/diploma-in-nutrition" />
          <Route path='/diploma-in-nutrition'>
            <Diploma_In_Nutrition />
          </Route>

          <Redirect from="/masters-in-science.php" to="/masters-in-science" />
          <Route path='/masters-in-science'>
            <Masters_In_Science />
          </Route>

          <Redirect from="/phd-mphil-program-in-science.php" to="/phd-mphil-science" />
          <Route path='/phd-mphil-science'>
            <Phd_Program />
          </Route>

          <Redirect from="/bachelors-in-commerce-bcom.php" to="/bachelors-of-commerce" />
          <Route path="/bachelors-of-commerce">
            <Bachelors_In_Commerce />
          </Route>
          {/* <Route path='/bachelors-of-commerce'>
          <Bachelors_In_Commerce/>
        </Route> */}


          <Redirect from="/masters-in-commerce-mcom.php" to="/masters-in-commerce" />
          <Route path="/masters-in-commerce">
            <Masters_In_Commerce />
          </Route>


          {/* <Route path='/masters-in-commerce'>
        <Masters_In_Commerce/>
        </Route> */}

          <Redirect from="/phd-mphil-program-in-commerce.php" to="/phd-mphil-commerce" />
          <Route path='/phd-mphil-commerce'>
            <Phd_Commerce />
          </Route>

          <Redirect from="/bachelor-of-arts-ba.php" to="/bachelors-of-arts" />
          <Route path='/bachelors-of-arts'>
            <Bachelors_In_Arts />
          </Route>

          <Redirect from="/bachelor-of-arts-in-public-administration.php" to="/bachelors-public-administration" />
          <Route path='/bachelors-public-administration'>
            <Bachelors_Public_Admin />
          </Route>

          <Redirect from="/bachelor-of-social-work-bsw.php" to="/bachelors-social-work" />
          <Route path='/bachelors-social-work'>
            <Bachelors_Social_Work />
          </Route>

          <Redirect from="/master-of-social-work-msw.php" to="/masters-social-work" />
          <Route path='/masters-social-work'>
            <Masters_Social_Work />
          </Route>

          <Redirect from="/master-of-arts-ma.php" to="/masters-of-arts" />
          <Route path='/masters-of-arts'>
            <Masters_In_Arts />
          </Route>

          <Redirect from="/phd-mphil-program-in-arts.php" to="/phd-mphil-arts" />
          <Route path='/phd-mphil-arts'>
            <Phd_Arts />
          </Route>

          <Redirect from="/diploma-in-interior-design-did.php" to="/diploma-interior-design" />
          <Route path='/diploma-interior-design'>
            <Diploma_Interior_Design />
          </Route>

          <Redirect from="/certificate-in-fashion-designing-cfd.php" to="/Certificate_in_Fashion_designing" />
          <Route path='/Certificate_in_Fashion_designing'>
            <Certificate_in_Fashion_designing />
          </Route>

          <Redirect from="/certificate-in-interior-design-cid.php" to="/Certificate_in_interior_design" />
          <Route path='/Certificate_in_interior_design'>
            <Certificate_in_interior_design />
          </Route>

          <Redirect from="/diploma-in-fashion-designing-dfd.php" to="/Diploma_in_fashion_designing" />
          <Route path='/Diploma_in_fashion_designing'>
            <Diploma_in_fashion_designing />
          </Route>

          <Redirect from="/bachelor-of-science-in-fashion-designing-bscfd.php" to="/Bachelor_of_science_in_fashion_designing" />
          <Route path='/Bachelor_of_science_in_fashion_designing'>
            <Bachelor_of_science_in_fashion_designing />
          </Route>

          <Redirect from="/bachelor-of-science-in-interior-design-bscid.php" to="/Bachelor_of_science_in_interior_designing" />
          <Route path='/Bachelor_of_science_in_interior_designing'>
            <Bachelor_of_science_in_interior_designing />
          </Route>

          <Redirect from="/diploma-in-computer-application-dca.php" to="/Diploma_in_computer_application" />
          <Route path='/Diploma_in_computer_application'>
            <Diploma_in_computer_application />
          </Route>

          <Redirect from="/advance-diploma-in-computer-applications-adca.php" to="/Advance_diploma_in_computer_applications" />
          <Route path='/Advance_diploma_in_computer_applications'>
            <Advance_diploma_in_computer_applications />
          </Route>

          <Redirect from="/bachelor-of-science-in-computer-science-bsccomputer-science.php" to="/Bachelor_of_science_in_computer_science" />
          <Route path='/Bachelor_of_science_in_computer_science'>
            <Bachelor_of_science_in_computer_science />
          </Route>

          <Redirect from="/bachelor-of-science-in-information-technology-bscit.php" to="/Bachelor_of_science_in_information_technology" />
          <Route path='/Bachelor_of_science_in_information_technology'>
            <Bachelor_of_science_in_information_technology />
          </Route>

          <Redirect from="/master-of-computer-applications-mca.php" to="/Master_of_computer_applications" />
          <Route path='/Master_of_computer_applications'>
            <Master_of_computer_applications />
          </Route>

          <Redirect from="/post-graduate-diploma-in-computer-application-pgdca.php" to="/Post_graduate_diploma_in_computer_application" />
          <Route path='/Post_graduate_diploma_in_computer_application'>
            <Post_graduate_diploma_in_computer_application />
          </Route>

          <Redirect from="/master-of-science-in-information-technology-mscit.php" to="/Master_of_science_in_information_technology" />
          <Route path='/Master_of_science_in_information_technology'>
            <Master_of_science_in_information_technology />
          </Route>

          <Redirect from="/masters-of-science-in-computer-science-msccomputer-science.php" to="/Master_of_science_in_computer_science" />
          <Route path='/Master_of_science_in_computer_science'>
            <Master_of_science_in_computer_science />
          </Route>

          <Route path='/Phd_program_information_technology'>
            <Phd_program_information_technology />
          </Route>

          <Redirect from="/diploma-in-pharmacy.php" to="/Diploma_in_pharmacy" />
          <Route path='/Diploma_in_pharmacy'>
            <Diploma_in_pharmacy />
          </Route>

          <Redirect from="/bachelor-of-pharmacy.php" to="/Bachelor_of_pharmacy" />
          <Route path='/Bachelor_of_pharmacy'>
            <Bachelor_of_pharmacy />
          </Route>

          <Route path='/Phd_program_pharmacy'>
            <Phd_program_pharmacy />
          </Route>

          <Redirect from="/bachelor-of-science-in-biotechnology.php" to="/Bachelor_of_science_in_biotechnology" />
          <Route path='/Bachelor_of_science_in_biotechnology'>
            <Bachelor_of_science_in_biotechnology />
          </Route>

          <Redirect from="/bachelor-of-science-in-microbiology.php" to="/Bachelor_of_science_in_microbiology" />
          <Route path='/Bachelor_of_science_in_microbiology'>
            <Bachelor_of_science_in_microbiology />
          </Route>

          <Redirect from="/master-of-science-in-bio-technology.php" to="/Master_of_science_in_bio_technology" />
          <Route path='/Master_of_science_in_bio_technology'>
            <Master_of_science_in_bio_technology />
          </Route>

          <Redirect from="/master-of-science-in-microbiology.php" to="/Master_of_science_in_microbiology" />
          <Route path='/Master_of_science_in_microbiology'>
            <Master_of_science_in_microbiology />
          </Route>

          <Redirect from="/diploma-in-yoga-diy.php" to="/Diploma_in_yoga" />
          <Route path='/Diploma_in_yoga'>
            <Diploma_in_yoga />
          </Route>

          <Redirect from="/pg-diploma-in-yoga-and-naturopathy.php" to="/Pg_diploma_in_yoga_and_naturopathy" />
          <Route path='/Pg_diploma_in_yoga_and_naturopathy'>
            <Pg_diploma_in_yoga_and_naturopathy />
          </Route>

          <Redirect from="/diploma-in-naturopathy-dn.php" to="/Diploma_in_naturopathy" />
          <Route path='/Diploma_in_naturopathy'>
            <Diploma_in_naturopathy />
          </Route>

          <Redirect from="/diploma-in-education.php" to="/Diploma_in_education" />
          <Route path='/Diploma_in_education'>
            <Diploma_in_education />
          </Route>

          <Redirect from="/bachelor-of-education.php" to="/Bachelor_of_education" />
          <Route path='/Bachelor_of_education'>
            <Bachelor_of_education />
          </Route>

          <Redirect from="/bachelor-of-physical-education.php" to="/Bachelor_of_physical_education" />
          <Route path='/Bachelor_of_physical_education'>
            <Bachelor_of_physical_education />
          </Route>

          <Redirect from="/mba-logistics-and-supply-chain-management.php" to="/Mba_in_business_administration" />
          <Route path='/Mba_in_business_administration'>
            <Mba_in_business_administration />
          </Route>

          <Route path='/Diploma_in_hotel_management_and_catering_technology'>
            <Diploma_in_hotel_management_and_catering_technology />
          </Route>

          <Route path='/Bachelors_in_hotel_management_and_catering_technology'>
            <Bachelors_in_hotel_management_and_catering_technology />
          </Route>

          <Redirect from="/bachelor-of-computer-applications-bca.php" to="/Bachelor_of_computer_applications" />
          <Route path='/Bachelor_of_computer_applications'>
            <Bachelor_of_computer_applications />
          </Route>

          {/* Certificate Programs and MDPs */}
          <Redirect from="/certificate-in-computer-design.php" to="/Certificate_in_computer_design" />
          <Route path='/Certificate_in_computer_design'>
            <Certificate_in_computer_design />
          </Route>

          <Redirect from="/certificate-in-jewellery-design.php" to="/Certificate_in_jewellery_design" />
          <Route path='/Certificate_in_jewellery_design'>
            <Certificate_in_jewellery_design />
          </Route>

          <Redirect from="/mdp-on-project-management.php" to="/Mdp_on_project_management" />
          <Route path='/Mdp_on_project_management'>
            <Mdp_on_project_management />
          </Route>

          <Redirect from="/mdp-on-strategy-consultancy.php" to="/Mdp_on_strategy_consultancy" />
          <Route path='/Mdp_on_strategy_consultancy'>
            <Mdp_on_strategy_consultancy />
          </Route>

          <Redirect from="/mdp-on-data-analytics.php" to="/Mdp_on_data_analytics" />
          <Route path='/Mdp_on_data_analytics'>
            <Mdp_on_data_analytics />
          </Route>

          <Redirect from="/mdp-on-strategies-for-online-businesses.php" to="/Mdp_on_strategies_for_online_businesses" />
          <Route path='/Mdp_on_strategies_for_online_businesses'>
            <Mdp_on_strategies_for_online_businesses />
          </Route>

          <Redirect from="/mdp-on-story-telling-and-theater-techniques-for-effective-communication.php" to="/Mdp_on_story_telling_and_theater_techniques" />
          <Route path='/Mdp_on_story_telling_and_theater_techniques'>
            <Mdp_on_story_telling_and_theater_techniques />
          </Route>

          <Redirect from="/mdp-on-six-sigma-for-quality-improvement.php" to="/Mdp_on_six_sigma_for_quality_improvement" />
          <Route path='/Mdp_on_six_sigma_for_quality_improvement'>
            <Mdp_on_six_sigma_for_quality_improvement />
          </Route>

          <Redirect from="/mdp-on-digital-communications-and-marketing-strategies.php" to="/Mdp_on_digital_communication_and_marketing_strategies" />
          <Route path='/Mdp_on_digital_communication_and_marketing_strategies'>
            <Mdp_on_digital_communication_and_marketing_strategies />
          </Route>

          <Redirect from="/mdp-on-business-process-change-it-applications.php" to="/Mdp_on_business_process_change_and_it_applications" />
          <Route path='/Mdp_on_business_process_change_and_it_applications'>
            <Mdp_on_business_process_change_and_it_applications />
          </Route>

          <Redirect from="/mdp-on-egovernance-government-process-change.php" to="/Mdp_on_e_governance_and_government_process_change" />
          <Route path='/Mdp_on_e_governance_and_government_process_change'>
            <Mdp_on_e_governance_and_government_process_change />
          </Route>

          <Redirect from="/mdp-on-effective-communication-for-managers-and-leaders.php" to="/Mdp_on_effective_communication_for_managers_and_leaders" />
          <Route path='/Mdp_on_effective_communication_for_managers_and_leaders'>
            <Mdp_on_effective_communication_for_managers_and_leaders />
          </Route>

          <Redirect from="/mdp-on-transforming-organizations-through-proactive-people-management-strategies.php" to="/Mdp_on_transforming_organizations_through_proactive_people_management_strategies" />
          <Route path='/Mdp_on_transforming_organizations_through_proactive_people_management_strategies'>
            <Mdp_on_transforming_organizations_through_proactive_people_management_strategies />
          </Route>

          <Redirect from="/mdp-on-the-art-of-successful-leadership-and-management.php" to="/Mdp_on_the_art_of_successful_leadership_and_management" />
          <Route path='/Mdp_on_the_art_of_successful_leadership_and_management'>
            <Mdp_on_the_art_of_successful_leadership_and_management />
          </Route>

          <Redirect from="/mdp-on-e-governance-and-digital-transformation-issues-and-challenges.php" to="/Mdp_on_e_governance_and_digital_transformation_issue_and_challenges" />
          <Route path='/Mdp_on_e_governance_and_digital_transformation_issue_and_challenges'>
            <Mdp_on_e_governance_and_digital_transformation_issue_and_challenges />
          </Route>


          {/* ------------------Schoolofcommerce--------------- */}

          <Redirect from="/school-of-commerce.php" to="/SchoolCommerce" />
          <Route path="/SchoolCommerce">
            <SchoolOfCommerce />
          </Route>


          {/* <Route path='/SchoolCommerce'>
          <SchoolOfCommerce/>
        </Route> */}

          {/* Pay Fees Online */}
          <Redirect from="/pay-fees-online.htm" to="/Payfeesonline" />
          <Route path='/Payfeesonline'>
            <Payfeesonline />
          </Route>

          <Redirect from="/contact-us.php" to="/Contact_us" />
          <Route path="/Contact_us">
            <Contact_us />
          </Route>

          {/* <Route path='/Contact_us'>
          <Contact_us/>
        </Route> */}

          <Route path='/Isbm_pro'>
            <Isbm_pro />
          </Route>

          {/* Enquiry Form */}

          <Route path='/Enquiry_now'>
            <Enquiry_now />
          </Route>

          {/* Onload Popup */}

          <Route path='/On_load_popup'>
            <On_load_popup />
          </Route>

          {/* Payment Failure */}

          <Route path='/Payment_Failure'>
            <Payment_Failure />
          </Route>
          <Route path="/Success">
            <Success />
          </Route>
          <Route path="/Sports">
            <Sports />
          </Route>

          {/* <Redirect from="/library.php" to="/Libraries" /> */}
          <Route path="/Libraries">
            <Libraries />
          </Route>
       
          {/* <Redirect from="/laboratory.php" to="/Laboratories" /> */}
          <Route path="/Laboratories">
            <Laboratories />
          </Route>

          <Route path="/Campus">
            <Campus />
          </Route>
          <Route path="/Internationalstudents">
          <Internationalstudents/>
          </Route>
          {/* <Route path="/Home1">
          <Home1/>
          </Route> */}
          <Route exact path="/" component={Home1} />
          <Route component={PageNotFound} />
        </Switch>

      </BrowserRouter>

    </React.Fragment>


  )
}

export default App;
