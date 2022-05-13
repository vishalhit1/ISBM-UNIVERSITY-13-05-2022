import React from "react";
import {Card,Button,Container} from 'react-bootstrap';
import rec1 from '../../Images/rec/11.jpg';
import rec2 from '../../Images/rec/12.jpg';
import rec3 from '../../Images/rec/13.jpg';
// import rec4 from '../../Images/rec/14.png';
import rec5 from '../../Images/rec/15.jpg';
import rec6 from '../../Images/rec/16.jpg';
import rec7 from '../../Images/rec/17.jpg';
import rec8 from '../../Images/rec/18.jpg';
import rec9 from '../../Images/rec/19.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
const state= {
    responsive:{
        0: {
            items: 2,
        },
        450: {
            items: 4,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 6,
        },
    },
}
const Partner =()=>{
    return(
        <React.Fragment>
        {/* <Container className="part">
            <div className="partnerss"> 
            <h1 className='mt-3 text-center' style={{color:'#06355f'}}><span>Recognitions and Approvals</span></h1>
            </div>
            
        <OwlCarousel margin={20} autoplay={false} nav={false} dots={false} items={3} touchDrag={true} lazyLoad={true}
         responsive={state.responsive}>
            <div className="item">
                <img src={rec1}/>
            </div>
            <div className="item">
                <img src={rec2}/>
            </div>
            <div className="item">
                <img src={rec3}/>
            </div>

            <div className="item">
                <img src={rec4}/>
            </div>

            <div className="item">
                <img src={rec5}/>
            </div>
            <div className="item">
                <img src={rec6}/>
            </div>
            <div className="item">
                <img src={rec7}/>
            </div>
            <div className="item">
                <img src={rec8}/>
            </div>
            <div className="item">
                <img src={rec9}/>
            </div>
        </OwlCarousel>
        </Container> */}
        </React.Fragment>
    )
}

export default Partner;