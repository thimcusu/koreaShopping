import React from "react";

import { images } from "../../../utils/slide";
import { HomeSliderContainer, HomeSlider } from "./StyledSlider";
import Carousel from "./Carousel";

function Slider() {
  const length = images.length || 0;

  return (
    <HomeSliderContainer>
      <HomeSlider>
        <Carousel slides={images} length={length} />
      </HomeSlider>
    </HomeSliderContainer>
  );
}

export default Slider;
