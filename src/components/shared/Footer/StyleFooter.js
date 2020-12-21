import styled from "styled-components";
import { device } from "../../../contrants/deviceSizes";

export const StyleFooter = styled.footer`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${props => props.theme.background};
`;

export const WrapperHeader = styled.div`
  width: 100%;
  @media ${device.mobileL} {
    .scrolled {
      height: 70px;
      transition: height 0.3s ease;
    }
  }
`;