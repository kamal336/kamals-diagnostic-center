import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImg1 from './../../../images/banner-1.jpg'
import bannerImg2 from "./../../../images/banner-2.jpg"
import bannerImg3 from "./../../../images/banner-3.jpg"
import bannerImg4 from "./../../../images/banner-4.jpg"

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bannerImg1}
                    alt="First slide"
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImg2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImg3}
                alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImg4}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;