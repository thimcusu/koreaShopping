import React from "react";
import PropTypes from "prop-types";

import { CustomDots } from "./StyledSlider";

function SliderDots({
  lengthSlide = 0,
  currentSlide = 0,
  onSelectedSlide = () => {},
}) {
  return (
    <CustomDots>
      <ul>
        {Array(lengthSlide)
          .fill()
          .map((value, index) => (
            <li
              key={`slide${index}`}
              onClick={onSelectedSlide}
              value={index}
              className={`${currentSlide === index ? "active" : ""}`}
            >{`0${index + 1}.`}</li>
          ))}
      </ul>
    </CustomDots>
  );
}

SliderDots.propTypes = {
  lengthSlide: PropTypes.number,
  currrentSlide: PropTypes.number,
  onSelectedSlide: PropTypes.func,
};

export default SliderDots;
