import React, { useState, useEffect, useReducer } from "react";

import { images, interval, transitionTime } from "../../../utils/slide";
import { HomeSliderContainer, HomeSlider } from "./StyledSlider";
import Carousel from "./Carousel";
import SliderDots from "./SliderDots";
import {
  initialState,
  carouselReducer,
} from "../../../redux/reducers/carouselReducer";

function Slider() {
  const length = images.length;

  return (
    <HomeSliderContainer>
      <HomeSlider>
        <Carousel slides={images} length={length} />
      </HomeSlider>
    </HomeSliderContainer>
  );
}

export default Slider;
