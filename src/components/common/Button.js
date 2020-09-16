import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { device } from "../../contrants/deviceSizes";

const WrapperButton = styled.button`
  background: none;
  position: relative;
  width: 140px;
  height: 40px;
  cursor: pointer;
  border: solid 2px ${props => props.theme.primary};
  text-align: center;
  overflow: hidden;
  span,
  a {
    color: ${props => props.theme.primary};
    background: none;
    display: inline-block;
    position: relative;
    font-weight: 600;
    font-size: 13px;
    line-height: 36px;
    width: 100%;
    height: 100%;
    transition: all 200ms ease;
  }
  :before {
    content: "";
    background-color: ${props => props.theme.primary};
    position: absolute;
    width: 150%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -10.4em, 0);
    transition: all 0.3s ease;
    transition-property: transform opacity background-color;
  }
  &:hover ${Button} {
    span,
    a {
      color: ${props => props.theme.background};
    }
    :before {
      opacity: 1;
      transform: rotate3d(0, 0, 1, 0deg);
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }
  }
  @media ${device.mobileL} {
    width: 174px;
    height: 57px;
    span,
    a {
      font-size: 16px;
      line-height: 53px;
    }
    :before {
      transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -9.8em, 0);
    }
  }
`;

const WrapperLightButton = styled(WrapperButton)`
  border: solid 2px ${props => props.theme.background};
  span,
  a {
    color: ${props => props.theme.background};
  }
  :before {
    background-color: ${props => props.theme.background};
  }
  &:hover ${WrapperLightButton} {
    span,
    a {
      color: ${props => props.theme.primary};
    }
  }
`;

const Button = ({ children }) => (
  <WrapperButton>
    {typeof children === "string" ? <span>{children}</span> : children}
  </WrapperButton>
);

export const LightButton = ({ children }) => (
  <WrapperLightButton>
    {typeof children === "string" ? <span>{children}</span> : children}
  </WrapperLightButton>
);

LightButton.propTypes = {
  children: PropTypes.node,
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
