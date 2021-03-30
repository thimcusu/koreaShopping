import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import {
    Slide,
    SlideBackground,
    SlideContentContainer,
    SlideContent,
    CarouselSlider,
    HomeSlider,
    CustomDots,
} from "./StyledSlider";
import { LightButton } from "../../common/Button";

function SlickCarousel({ slides = [], length }) {
    const settings = {
        dots: true,
        appendDots: dots => <CustomDots><ul>{dots}</ul></CustomDots>,
        customPaging: (i) => (<span>{`0${i + 1}`}</span>),
        arrows: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplaySpeed: 5000,
        // autoplay: true,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            { slides && slides.map((slide, index) => (
                <Slide key={`slide${index}`}>
                    <img src={slide.src} />
                    <SlideContentContainer>
                        <SlideContent>
                            <div className="content_container">
                                <div className="title">{slide.title}</div>
                                <div className="details">{slide.details}</div>
                                <LightButton>
                                    <NavLink to="/">Shop Now</NavLink>
                                </LightButton>
                            </div>
                        </SlideContent>
                    </SlideContentContainer>
                </Slide>
            ))}
        </Slider>
    );
}

SlickCarousel.propTypes = {
    length: PropTypes.number,
    slides: PropTypes.array,
};

export default SlickCarousel;
