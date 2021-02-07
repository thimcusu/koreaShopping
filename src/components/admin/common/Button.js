import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { device } from '../../../constants/deviceSizes';

const colorButtonStyle = css`
  color: ${({ primary, secondary, active, theme }) =>
    primary
      ? active
        ? theme.white
        : theme.admin.primary
      : active
      ? theme.admin.primary
      : theme.admin.lightText};
  background-color: ${({ primary, secondary, active, theme }) =>
    primary
      ? active
        ? theme.admin.primary
        : '#e1f0ff'
      : active
      ? '#f3f6f9'
      : 'transparent'};
  &:hover {
    color: ${({ primary, secondary, active, theme }) =>
      primary ? theme.white : theme.admin.primary};
    background-color: ${({ primary, secondary, active, theme }) =>
      primary ? theme.admin.primary : '#f3f6f9'};
  }
`;
const WrapperButton = styled.button`
  position: relative;
  border-radius: 5px;
  padding: 0.65rem 1.1rem;
  transition: all 0.3s ease;
  border: none;
  outline: 0;
  box-shadow: none;
  vertical-align: middle;
  cursor: pointer;
  text-align: center;
  ${colorButtonStyle}
  span,
  a {
    color: inherit;
  }
  svg {
    fill: currentColor;
  }
  &:focus {
    outline: 0;
  }
`;

export const Button = ({ children, ...rest }) => (
  <WrapperButton {...rest}>{children}</WrapperButton>
);

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
