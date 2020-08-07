import styled from "styled-components";

export const HomeSliderContainer = styled.div`
  padding-top: 130px;
  padding-bottom: 30px;
`;
export const HomeSlider = styled.div`
  display: flex;
`;
export const Slide = styled.div`
  position: relative;
  min-width: 100%;
  height: 80vh;
`;

export const SlideBackground = styled.div`
  position: absolute;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
`;
export const SlideContent = styled.div`
  position: absolute;
  width: 50%;
`;
export const HomeSliderDots = styled.div``;
