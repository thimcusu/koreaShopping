import styled from "styled-components";

import { device } from "../../../constants/deviceSizes";

export const StyledAdv = styled.div`
  padding-top: 0;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  & > div {
    position: relative;
    height: 75vh;
    width: 100%;
  }
  @media ${device.mobileL} {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media ${device.laptop} {
    padding-left: 60px;
    padding-right: 60px;
  }
`;
export const AdvSmall = styled.div`
  padding: 30px;
  margin-top: 0;
  @media ${device.mobileL} {
    margin-top: 30px;
  }
  @media ${device.laptop} {
    width: calc((100% * 0.4) - 15px) !important;
  }
`;
export const AdvLarge = styled.div`
  padding: 30px;
  margin-top: 30px;
  @media ${device.laptop} {
    width: calc((100% * 0.6) - 15px) !important;
    /* margin-top: 0; */
  }
`;
export const AdvBackGround = styled.div`
  position: absolute;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
export const AdvSmallInner = styled.div`
  position: relative;
  border: solid 2px ${props => props.theme.background};
  width: 100%;
  padding-top: 50px;
  padding-left: 30px;
  height: 100%;
  color: ${props => props.theme.background};
`;
export const AdvLargeInner = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.63);
  color: ${props => props.theme.background};
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-left: 30px;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.16;
  max-width: calc(70% - 30px);
  @media ${device.mobileL} {
    font-size: 48px;
  }
`;
export const Details = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 2.14;
  margin-top: 10px;
  padding-left: 2px;
`;
export const Link = styled.div`
  a {
    position: relative;
    display: inline-block;
    color: inherit;
    font-size: 14px;
    font-weight: 400;
  }
  & > a:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #ffffff;
    content: "";
  }
  margin-top: 20px;
  padding-left: 4px;
`;
