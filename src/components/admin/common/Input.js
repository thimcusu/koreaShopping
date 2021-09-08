import React from 'react';
import styled, { css } from 'styled-components';

import { device } from '../../../constants/deviceSizes';
import { toCssUnitSize } from '../../../utils/css';

export const WrapperInput = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input.attrs(({ type }) => ({
  type: type || 'text',
}))`
  ${css`
    padding: ${({ paddingX }) => (paddingX ? paddingX : '0.5rem')}
      ${({ paddingY }) => (paddingY ? paddingY : '1rem')};
  `};
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  background-color: transparent;
  border: 1px solid ${props => props.theme.admin.borderInput};
  color: ${props => props.theme.gray01};
  caret-color: ${props => props.theme.admin.primary};
  border-radius: 3px;
  transition: all 0.15 ease-in-out;
  outline: 0;
  box-shadow: none;
  &:focus {
    border-color: ${props => props.theme.gray03};
  }
  &:is(textarea) {
    max-height: 300px;
  }
  &[readonly],
  &:disabled {
    background-color: ${props => props.theme.grayBg};
    color: ${props => props.theme.gray03};
    opacity: 0.6;
  }
  &[aria-invalid='true'] {
    border-color: ${props => props.theme.red};
    color: ${props => props.theme.red};
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.admin.grayText};
`;

export const ErrorInput = styled.p`
  color: ${props => props.theme.red};
  position: absolute;
  top: 100%;
  font-size: 14px;
  margin-bottom: 0;
  margin-top: 0.125rem;
`;

export const NoteInput = styled.span`
  color: ${props => props.theme.admin.primary};
  font-weight: 500;
  font-size: 0.8em;
`;

const Input = ({ children, padding = ['', ''], type, ...rest }) => {
  const paddingX = toCssUnitSize(padding[0]);
  const paddingY = toCssUnitSize(padding[1]) || toCssUnitSize(padding[0]);
  return (
    <StyledInput
      paddingX={paddingX}
      paddingY={paddingY}
      type={type}
      {...rest}
    />
  );
};

export default Input;
