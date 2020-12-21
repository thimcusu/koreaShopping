import React from "react";

import { images } from "../../../utils/slide";
import { HomeSliderContainer, HomeSlider } from "./StyledSlider";
import SlickCarousel from './SlickCarousel';

function Slider() {
  const length = images.length || 0;
  return (
    <HomeSliderContainer>
      <HomeSlider>
        <SlickCarousel slides={images} length={length} />
      </HomeSlider>
    </HomeSliderContainer>
  );
}

export default Slider;
