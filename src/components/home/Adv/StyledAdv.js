import styled from "styled-components";

import { device } from "../../../contrants/deviceSizes";

export const StyledAdv = styled.div`
  margin-top: 0;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 0px);
  & > div {
    position: relative;
    height: 80vh;
    width: 100%;
  }
  @media ${device.mobileL} {
    margin-top: 30px;
  }
`;
export const AdvSmall = styled.div`
  padding: 30px;
  margin: 15px;
  margin-top: 0;
`;
export const AdvLarge = styled.div`
  padding: 30px;
  margin: 15px;
`;
export const AdvBackGround = styled.div`
  position: absolute;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
export const AdvSmallInner = styled.div`
  position: relative;
  border: solid 2px ${props => props.theme.background};
  width: 100%;
  height: 100%;
`;
export const AdvLargeInner = styled.div`
  position: relative;
  border: solid 2px ${props => props.theme.background};
  width: 100%;
  height: 100%;
`;
export const Title = styled.div``;
export const Details = styled.div``;
export const Link = styled.a``;
