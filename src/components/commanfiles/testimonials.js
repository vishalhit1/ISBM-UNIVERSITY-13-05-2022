import React from 'react'
import { Container, Row, Col, Breadcrumb, Tab, Tabs } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Images from "../../Images/widget-galleryfull-6.jpg"
const Testimonials = () => {
const state = {
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
        items: 2,
        },
    },
    };
  return (
    <div className="our_testimonails">
     <Container>   
      <h4 className="our_student_work_at">Testimonials</h4>
      <OwlCarousel
        className="owl-theme"
        margin={20}
        autoplay
        nav={true}
        dots={false}
        items={1}
        touchDrag={true}
        lazyLoad={true}
        responsive={state.responsive}
      >
        <div class="item" className="carousel_imgss">
            <div className='container'>
            <div className="carousel__slide UserReview__list__item swiper-slide-active">
              <div className="UserReview__userBox">
                <div className="UserReview__userBox__photo">
                  <div className="lazyLoad__wrapper"><img alt="Aravind Vorungati" data-src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" lazy="loaded" /></div>
                </div>
                <div className="UserReview__userBox__info">
                  <div className="UserReview__userBox__name">Urvashi Sahu</div>
                  <div className="UserReview__userBox__designation"><span>Bachelors in Arts (B.A)</span>
                    {/* <span className="u-dot" /> <span>Vice President - Products,</span>
                    <span>Zoreum Blockchain Labs</span> */}
                  </div>
                </div>
              </div>
              <div className="UserReview__reviewInfo mt-18"><svg xmlns="http://www.w3.org/2000/svg" width={21} height={15} viewBox="0 0 14 10" className="UserReview__reviewInfo__quote">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#000" fillRule="nonzero" d="M1 10h3l2-4V0H0v6h3l-2 4zm8 0h3l2-4V0H8v6h3l-2 4z">
                    </path>
                    <path d="M-5-7h24v24H-5z" />
                  </g>
                </svg>
                <div className="UserReview__reviewInfo__desc">
                I am glad to provide you with my feedback about the University. My overall experience to date
                has been amazing, and the University is having an amazing infrastructure. University has
                provided me with a number of opportunities to grow and explore my skills. The emphasis on
                sports along with education always helped me a lot. I have always found a positive and healthy
                environment and the Professors are highly supportive. Most of my doubts were cleared after the
                classes get over.
                </div>
              </div>
              <div className="UserReview__reviewInfo">
                <div className="UserReview__reviewInfo__desc">
                </div>
              </div>
            </div>

            </div>
        </div>
        <div class="item" className="carousel_imgss">
            <div className='container'>
            <div className="carousel__slide UserReview__list__item swiper-slide-active">
              <div className="UserReview__userBox">
                <div className="UserReview__userBox__photo">
                  <div className="lazyLoad__wrapper"><img alt="Aravind Vorungati" data-src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" lazy="loaded" /></div>
                </div>
                <div className="UserReview__userBox__info">
                  <div className="UserReview__userBox__name">Kamlesh Kumar Lahre</div>
                  <div className="UserReview__userBox__designation"><span>Post Graduate Diploma in Computer Application (PGDCA)</span>
                  </div>
                </div>
              </div>
              <div className="UserReview__reviewInfo mt-18"><svg xmlns="http://www.w3.org/2000/svg" width={21} height={15} viewBox="0 0 14 10" className="UserReview__reviewInfo__quote">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#000" fillRule="nonzero" d="M1 10h3l2-4V0H0v6h3l-2 4zm8 0h3l2-4V0H8v6h3l-2 4z">
                    </path>
                    <path d="M-5-7h24v24H-5z" />
                  </g>
                </svg>
                <div className="UserReview__reviewInfo__desc">
                ISBM University is my second home. I have built great relationships with my classmates,
                teachers, and staff. Being at ISBM University has been an amazing experience for me that
                have helped me grow personally and professionally.
                </div>
              </div>
              <div className="UserReview__reviewInfo">
                <div className="UserReview__reviewInfo__desc">
                </div>
              </div>
            </div>

            </div>
        </div>
        <div class="item" className="carousel_imgss">
            <div className='container'>
            <div className="carousel__slide UserReview__list__item swiper-slide-active">
              <div className="UserReview__userBox">
                <div className="UserReview__userBox__photo">
                  <div className="lazyLoad__wrapper"><img alt="Aravind Vorungati" data-src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" lazy="loaded" /></div>
                </div>
                <div className="UserReview__userBox__info">
                  <div className="UserReview__userBox__name">Topendra Verma</div>
                  <div className="UserReview__userBox__designation"><span>Master of Computer Applications (MCA)</span>
                  </div>
                </div>
              </div>
              <div className="UserReview__reviewInfo mt-18"><svg xmlns="http://www.w3.org/2000/svg" width={21} height={15} viewBox="0 0 14 10" className="UserReview__reviewInfo__quote">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#000" fillRule="nonzero" d="M1 10h3l2-4V0H0v6h3l-2 4zm8 0h3l2-4V0H8v6h3l-2 4z">
                    </path>
                    <path d="M-5-7h24v24H-5z" />
                  </g>
                </svg>
                <div className="UserReview__reviewInfo__desc">
                I have had an amazing time studying at ISBM University, the comfortable study
                environment, friendly staff and wonderful resources. There are so many activities that you
                could participate in along the way to get more campus life experience.
                </div>
              </div>
              <div className="UserReview__reviewInfo">
                <div className="UserReview__reviewInfo__desc">
                </div>
              </div>
            </div>

            </div>
        </div>
        <div class="item" className="carousel_imgss">
            <div className='container'>
            <div className="carousel__slide UserReview__list__item swiper-slide-active">
              <div className="UserReview__userBox">
                <div className="UserReview__userBox__photo">
                  <div className="lazyLoad__wrapper"><img alt="Aravind Vorungati" data-src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" lazy="loaded" /></div>
                </div>
                <div className="UserReview__userBox__info">
                  <div className="UserReview__userBox__name">Shraddha Diwan</div>
                  <div className="UserReview__userBox__designation"><span>Bachelor of Computer Applications (BCA)</span>
                  </div>
                </div>
              </div>
              <div className="UserReview__reviewInfo mt-18"><svg xmlns="http://www.w3.org/2000/svg" width={21} height={15} viewBox="0 0 14 10" className="UserReview__reviewInfo__quote">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#000" fillRule="nonzero" d="M1 10h3l2-4V0H0v6h3l-2 4zm8 0h3l2-4V0H8v6h3l-2 4z">
                    </path>
                    <path d="M-5-7h24v24H-5z" />
                  </g>
                </svg>
                <div className="UserReview__reviewInfo__desc">
                I have had a very good experience at ISBM University.  The campus environment and class
                schedule are very convenient. The hands on teaching style provide good learning
                opportunities; and the advisors area very helpful with registering for classes.
                </div>
              </div>
              <div className="UserReview__reviewInfo">
                <div className="UserReview__reviewInfo__desc">
                </div>
              </div>
            </div>

            </div>
        </div>
        <div class="item" className="carousel_imgss">
            <div className='container'>
            <div className="carousel__slide UserReview__list__item swiper-slide-active">
              <div className="UserReview__userBox">
                <div className="UserReview__userBox__photo">
                  <div className="lazyLoad__wrapper"><img alt="Aravind Vorungati" data-src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" lazy="loaded" /></div>
                </div>
                <div className="UserReview__userBox__info">
                  <div className="UserReview__userBox__name">Yogesh Kumar Majhi</div>
                  <div className="UserReview__userBox__designation"><span>Bachelors in Business Administration and Bachelors in Law (BBA-LLB)</span>
                  </div>
                </div>
              </div>
              <div className="UserReview__reviewInfo mt-18"><svg xmlns="http://www.w3.org/2000/svg" width={21} height={15} viewBox="0 0 14 10" className="UserReview__reviewInfo__quote">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#000" fillRule="nonzero" d="M1 10h3l2-4V0H0v6h3l-2 4zm8 0h3l2-4V0H8v6h3l-2 4z">
                    </path>
                    <path d="M-5-7h24v24H-5z" />
                  </g>
                </svg>
                <div className="UserReview__reviewInfo__desc">
                I’m a proud student of ISBM University, the University that helps you stand stronger for
                what’s coming in the future. What they teach you here is not just knowledge, its
                experiences.
                </div>
              </div>
              <div className="UserReview__reviewInfo">
                <div className="UserReview__reviewInfo__desc">
                </div>
              </div>
            </div>

            </div>
        </div>
      </OwlCarousel>
      </Container>
    </div>
  )
}

export default Testimonials