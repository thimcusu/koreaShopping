import React from 'react';
import styled, { css } from 'styled-components';

import { device } from '../../../constants/deviceSizes';
import { toCssUnitSize } from '../../../utils/css';

export const WrapperTextField = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`;

export const LabelTextField = styled.label`
  color: ${props => props.theme.admin.grayText};
  position: absolute;
  display: block;
  top: -1rem;
  transition: 0.2s;
  color: $primary;
  font-weight: 600;
  font-size: 1rem;
`;

const StyledInput = styled.input.attrs(({ type }) => ({
  type: type || 'text',
}))`
  ${css`
    padding: ${({ paddingX }) => (paddingX ? paddingX : '0.5rem')}
      ${({ paddingY }) => (paddingY ? paddingY : 0)};
  `};
  font-weight: 500;
  line-height: 1.5;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.admin.lightText};
  color: ${props => props.theme.dark};
  caret-color: ${props => props.theme.admin.primary};
  border-radius: 3px;
  transition: all 0.15 ease-in-out;
  outline: 0;
  box-shadow: none;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${LabelTextField} {
    top: 50%;
    transform: translateY(-50%);
    cursor: text;
    font-weight: 400;
    font-size: inherit;
  }
  &:focus {
    & ~ ${LabelTextField} {
      top: -1rem;
      transition: 0.2s;
      color: $primary;
      font-weight: 600;
    }
  }
`;

const TextField = ({ children, padding = ['', ''], ...rest }) => {
  const paddingX = toCssUnitSize(padding[0]);
  const paddingY = toCssUnitSize(padding[1]) || toCssUnitSize(padding[0]);
  return <StyledInput paddingX={paddingX} paddingY={paddingY} {...rest} />;
};

export default TextField;
