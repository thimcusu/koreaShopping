import styled, { keyframes } from "styled-components";
import { device } from "../../../contrants/deviceSizes";

export const HomeSliderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  padding-bottom: 30px;
  @media ${device.tablet} {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media ${device.laptop} {
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 130px;
  }
  .drag {
    cursor: grab;
    transition: none;
  }
  .no-animation {
    transition: none;
  }
`;
export const HomeSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  color: #fff;
  overflow: hidden;
`;

export const CarouselSlider = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  transition: all 1.2s ease;
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
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
const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const SlideContentContainer = styled.div`
  position: absolute;
  left: 0;
  top: 25%;
  width: 100%;
  @media ${device.mobileL} {
    width: 80%;
    left: 30px;
  }
  @media ${device.laptop} {
    max-width: 50%;
    left: 40px;
  }
  .fade {
    opacity: 1;
    animation: ${fade} linear 2s;
  }
`;

export const SlideContent = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  .content_container {
    max-width: 100%;
    .title {
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 1.2;
    }
    .details {
      margin-top: 15px;
      font-weight: 400;
      font-size: 14px;
      line-height: 2.1;
    }
  }
  @media ${device.laptop} {
    padding: 0;
    .content_container .title {
      font-size: 50px;
      font-weight: 600;
    }
  }
`;

export const CustomDots = styled.div`
  position: absolute;
  padding: 0 1.5rem;
  bottom: 1rem;
  font-size: 1em;
  ul {
    margin-bottom: 0;
    li.active {
      color: ${props => props.theme.hover};
    }
    li {
      display: inline-block;
      position: relative;
      cursor: pointer;
      font-weight: 600;
      margin-right: 2px;
      transition: all 0.2s ease;
    }
    li:hover {
      color: ${props => props.theme.hover};
    }
  }
  @media ${device.mobileL} {
    left: 30px;
  }
  @media ${device.laptop} {
    left: 40px;
    padding: 0;
  }
`;
