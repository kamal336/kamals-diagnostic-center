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
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImg2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImg3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImg4}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;