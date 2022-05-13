import React, { useEffect } from "react";
import { Container, Row, Col, Breadcrumb, Tab, Tabs } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TiArrowForward } from "react-icons/ti";

const Facilities = () => {
  const state1 = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <div className="facilititttess">
      <Container className="">
        <h4 className="facilities_h4" style={{ paddingTop: "30px" }}>
          ISBMU Facilities
        </h4>
        <OwlCarousel
          className="owl-theme"
          margin={20}
          // autoplay
          nav={true}
          dots={false}
          items={1}
          touchDrag={true}
          lazyLoad={true}
          responsive={state1.responsive}
        >
          <div class="item">
            <div className="Instructors__list__item">
              <div className="facilities_img">
                <img src="https://icon-library.com/images/icon-for-school/icon-for-school-28.jpg"></img>
              </div>
              <h3 className="faculties_name">Campus</h3>
              <p className="faculties_text">
                ISBM University provides a proper academic ambiance with
                well-furnished, spacious classrooms equipped with contemporary
                instructional. A fleet of institute owned buses is available for
                transportation of students from different parts of the city.ISBM
                University provides the necessary hardware and software to cater
                to the computing needs of all students & members of the faculty
                and the training needs of information technology related
                subjects.
              </p>
              <a href="" class="career_btn">
                View Details
              </a>
            </div>
          </div>
          <div class="item">
            <div className="Instructors__list__item">
              <div className="facilities_img">
                <img src="https://cdn0.iconfinder.com/data/icons/cosmo-education/40/326512-books_2-512.png"></img>
              </div>
              <h3 className="faculties_name">Library</h3>
              <p className="faculties_text">
                ISBM University houses a spacious library, stacked with
                approximately 20,000 books. The Library consists of a Central
                Library & Separate Departmental Libraries to help students and
                faculties alike have to easy access to courses and reference
                materials through a membership card.
              </p>
              <a href="" class="career_btn">
                View Details
              </a>
            </div>
          </div>
          <div class="item">
            <div className="Instructors__list__item">
              <div className="facilities_img">
                <img src="https://cdn-icons-png.flaticon.com/512/2270/2270989.png"></img>
              </div>
              <h3 className="faculties_name">Sports</h3>
              <p className="faculties_text">
                The sports grounds are situated at a close distance to encourage
                students to stay fit by regularly playing cricket, hockey,
                volley ball, football, basketball, or by taking a simple
                refreshing run along the tracks.
              </p>
              <a href="" class="career_btn">
                View Details
              </a>
            </div>
          </div>
          <div class="item">
            <div className="Instructors__list__item">
              <div className="facilities_img">
                <img src="https://t3.ftcdn.net/jpg/04/56/33/42/360_F_456334263_j9eofDYPxgGotfaRGgQ3m4UKKSQHKvDE.jpg"></img>
              </div>
              <h3 className="faculties_name">Alumni</h3>
              <p className="faculties_text">
                The campus incorporates residential buildings in close proximity
                to the departments, library and classrooms to facilitate easy
                access. All rooms are well-furnished. Mess facilities are also
                available for which separate monthly payment will be accrued
                from the respective students. The students are provided with
                basic amenities like a cot, table, chair and a cupboard in their
                respective rooms. The student must submit his preferences for
                accommodation early in the process of admission.
              </p>
              <a href="" class="career_btn">
                View Details
              </a>
            </div>
          </div>
          <div class="item">
            <div className="Instructors__list__item">
              <div className="facilities_img">
                <img src="https://www.kindpng.com/picc/m/244-2445340_transportation-icon-free-transportation-icon-png-transparent-png.png"></img>
              </div>
              <h3 className="faculties_name">Transport</h3>
              <p className="faculties_text">
                The ISBM University runs a fleet of buses to help students and
                staff members commute to and from regions around the city.
              </p>
              <a href="" class="career_btn">
                View Details
              </a>
            </div>
          </div>
          <div class="item">
            <div className="Instructors__list__item">
              <div className="facilities_img">
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/industry-visit-1539661-1306679.png"></img>
              </div>
              <h3 className="faculties_name">Industrial Visits</h3>
              <p className="faculties_text">
                She has worked as a Lecturer at University of Liverpool,
                Postdoctoral Research Fellow at University of Warwick,
                University of Oxford.
              </p>
              <a href="" class="career_btn">
                View Details
              </a>
            </div>
          </div>
        </OwlCarousel>
      </Container>
    </div>
  );
};

export default Facilities;
