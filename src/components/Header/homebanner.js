import React,{useState} from 'react';
import {Carousel} from 'react-bootstrap';
// import banner_img from '../../Images/banner.jpg';
import banner_1 from '../../Images/WebsiteImage_1.jpg';
import banner_2 from '../../Images/WebsiteImage_2.jpg';
import banner_3 from '../../Images/WebsiteImage_3.jpg';
// import banner_4 from '../../Images/WebsiteImage_4.jpg';

const Homebanner = ()=>{
    return(
        <React.Fragment>
            
            <Carousel className="abcd">
                {/* <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={banner_img}
                    alt="First slide"
                    />
                </Carousel.Item> */}
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={banner_1}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={banner_2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={banner_3}
                    alt="Second slide"
                    />
                </Carousel.Item>
                {/* <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={banner_4}
                    alt="Second slide"
                    />
                </Carousel.Item> */}
            </Carousel>

      
        </React.Fragment>
    )
}

export default Homebanner;