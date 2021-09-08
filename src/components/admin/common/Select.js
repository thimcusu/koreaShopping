import React from 'react';
import styled, { css } from 'styled-components';

import mixins from '../../../assets/style/mixins';
import { device } from '../../../constants/deviceSizes';
import { toCssUnitSize } from '../../../utils/css';
import { StyledInput } from './Input';

export const StyledSelect = styled(StyledInput)`
  font-weight: 500;
  line-height: 1.5;
  width: 100%;
`;

export const SelectOption = styled.option`
  &:first-child,
  &[value=''] {
    color: ${props => props.theme.admin.grayText};
  }
`;

export const CustomArrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ${mixins.flex('row', 'center', 'center')};
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.admin.borderInput};
  border-left: none;
  height: 100%;
  width: 3em;
  pointer-events: none;
  svg {
    height: 1.5rem;
  }
`;

export const Select = ({ children, padding = ['', ''], ...rest }) => {
  const paddingX = toCssUnitSize(padding[0]);
  const paddingY = toCssUnitSize(padding[1]) || toCssUnitSize(padding[0]);
  return (
    <StyledSelect as="select" paddingX={paddingX} paddingY={paddingY} {...rest}>
      {children}
    </StyledSelect>
  );
};
