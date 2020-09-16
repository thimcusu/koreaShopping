import React, { useRef } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

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
import { LightButton } from "../../common/Button";

function Carousel({ slides = [], length }) {
  const ref = useRef(null);
  const [
    active,
    reseted,
    setActive,
    handleStart,
    handleMove,
    handleEnd,
    style,
  ] = useCarousel({ length, ref });
  return (
    <HomeSlider>
      {slides && (
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
              <SlideContent className={`${active === -1 ? "fade" : ""}`}>
                <div className="content_container">
                  <div className="title">{slides[length - 1].title}</div>
                  <div className="details">{slides[length - 1].details}</div>
                  <LightButton>
                    <NavLink to="#">Shop Now</NavLink>
                  </LightButton>
                </div>
              </SlideContent>
            </SlideContentContainer>
          </Slide>
          {slides.map((slide, index) => (
            <Slide key={`${slide.title}${index}`}>
              <SlideBackground src={slide.src} />
              <SlideContentContainer>
                <SlideContent
                  className={`${active === index && !reseted ? "fade" : ""}`}
                >
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
          <Slide>
            <SlideBackground src={slides[0].src} />
            <SlideContentContainer>
              <SlideContent className={`${active === length ? "fade" : ""}`}>
                <div className="content_container">
                  <div className="title">{slides[0].title}</div>
                  <div className="details">{slides[0].details}</div>
                  <LightButton>
                    <NavLink to="/">Shop Now</NavLink>
                  </LightButton>
                </div>
              </SlideContent>
            </SlideContentContainer>
          </Slide>
        </CarouselSlider>
      )}
      <CustomDots>
        <ul>
          {Array(length)
            .fill()
            .map((value, index) => (
              <li
                key={`slide${index}`}
                onClick={() => setActive(index)}
                className={`${
                  active === index ||
                  (active === -1 && index === length - 1) ||
                  (active === length && index === 0)
                    ? "active"
                    : ""
                }`}
              >{`0${index + 1}.`}</li>
            ))}
        </ul>
      </CustomDots>
    </HomeSlider>
  );
}

Carousel.propTypes = {
  length: PropTypes.number,
  slides: PropTypes.array,
};

export default Carousel;
