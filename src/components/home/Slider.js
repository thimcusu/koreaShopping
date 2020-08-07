import React from "react";

import { images } from "../../utils/sliderImages";
import {
  HomeSliderContainer,
  HomeSlider,
  HomeSliderDots,
  Slide,
  SlideBackground,
  SlideContent,
} from "./style/Slider";

function Slider() {
  return (
    <HomeSliderContainer>
      <HomeSlider>
        {images.map(slide => (
          <Slide key={slide.title}>
            <SlideBackground src={slide.src} />
            <SlideContent>
              <h2>{slide.title}</h2>
              <div>{slide.details}</div>
            </SlideContent>
          </Slide>
        ))}
      </HomeSlider>
      <HomeSliderDots></HomeSliderDots>
    </HomeSliderContainer>
  );
}

export default Slider;
