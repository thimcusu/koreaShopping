import React from 'react';
import styled, { css } from 'styled-components';

import mixins from '../../../assets/style/mixins';
import { ReactComponent as CheckboxIcon } from '../../../assets/images/svg-icon/fi-rr-checkbox.svg';

const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
  z-index: 10;
  &:checked ~ svg {
    fill: ${props => props.theme.admin.primary};
    path:last-child {
      opacity: 1;
    }
  }
`;

const WrapperCheckbox = styled.div`
  position: relative;
  display: inline-block;
  padding-left: 2rem;
  svg {
    height: 60%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    /* transition: opacity 0.2s ease-in-out; */
    path:last-child {
      transition: opacity 0.2s ease-in;
      opacity: 0;
    }
  }
`;

const CustomLabel = styled.label`
  margin-bottom: 0;
  font-size: 16px;
`;

const Checkbox = ({ label, id, name, onChange, ...rest }) => {
  const Label =
    typeof label === 'string' ? (
      <CustomLabel htmlFor={id}>{label}</CustomLabel>
    ) : (
      label
    );
  return (
    <WrapperCheckbox>
      <StyledCheckbox type="checkbox" id={id} name={name} onChange={onChange} />
      <CheckboxIcon />
      {Label}
    </WrapperCheckbox>
  );
};

export default Checkbox;
