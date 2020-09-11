import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import { interval, transitionTime } from "../../../utils/slide";
import useCarousel from "./useCarousel";
import {
  Slide,
  SlideBackground,
  SlideContentContainer,
  SlideContent,
  CarouselSlider,
  HomeSlider,
  CustomDots,
} from "./StyledSlider";
function Carousel({ slides = [], length }) {
  const ref = useRef(null);
  const [
    active,
    setActive,
    handleStart,
    handleMove,
    handleEnd,
    style,
  ] = useCarousel({ length, interval, transitionTime, ref });
  console.log(style);
  return (
    <HomeSlider>
      <CarouselSlider
        ref={ref}
        style={style}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseUp={handleEnd}
        onTouchEnd={handleEnd}
      >
        <Slide /*translateX={-100}*/>
          <SlideBackground src={slides[length - 1].src} />
          <SlideContentContainer>
            <SlideContent>
              <div className="content_container">
                <div className="title">{slides[length - 1].title}</div>
                <div className="details">{slides[length - 1].details}</div>
              </div>
            </SlideContent>
          </SlideContentContainer>
        </Slide>
        {slides.map((slide, index) => (
          <Slide key={slide.title}>
            <SlideBackground src={slide.src} />
            <SlideContentContainer>
              <SlideContent className={`${active === index ? "fade" : ""}`}>
                <div className="content_container">
                  <div className="title">{slide.title}</div>
                  <div className="details">{slide.details}</div>
                </div>
              </SlideContent>
            </SlideContentContainer>
          </Slide>
        ))}
        <Slide>
          <SlideBackground src={slides[0].src} />
          <SlideContentContainer>
            <SlideContent>
              <div className="content_container">
                <div className="title">{slides[0].title}</div>
                <div className="details">{slides[0].details}</div>
              </div>
            </SlideContent>
          </SlideContentContainer>
        </Slide>
      </CarouselSlider>
      <CustomDots>
        <ul>
          {Array(length)
            .fill()
            .map((value, index) => (
              <li
                key={`slide${index}`}
                onClick={() => setActive(index)}
                className={`${active === index ? "active" : ""}`}
              >{`0${index + 1}.`}</li>
            ))}
        </ul>
        <button
          onClick={() => {
            ref.current.style.transform = `translateX(0px)`;
          }}
        >
          Up
        </button>
        <button
          onClick={() => {
            ref.current.style.transform = `translateX(-100px)`;
          }}
        >
          Down
        </button>
      </CustomDots>
    </HomeSlider>
  );
}

Carousel.propTypes = {
  slides: PropTypes.array,
};

export default Carousel;
