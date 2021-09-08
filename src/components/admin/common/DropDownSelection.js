import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

import mixins from '../../../assets/style/mixins';
import { device } from '../../../constants/deviceSizes';
import { ReactComponent as ArrowDown } from '../../../assets/images/svg-icon/fi-rr-angle-small-down.svg';
import { ReactComponent as ArrowUp } from '../../../assets/images/svg-icon/fi-rr-angle-small-up.svg';
import useOnClickOutside from '../../common/useOnClickOutside';

export const SelectionWrapper = styled.div`
  position: relative;
  z-index: 2;
  ${props =>
    props.border &&
    css`
      border: 1px solid ${props => props.theme.admin.borderInput};
    `}
`;
export const ButtonSelect = styled.button`
  ${mixins.flex('row', 'space-between', 'center')};
  padding: 9px 15px;
  cursor: default;
  background-color: ${props => props.theme.greenLight};
  border-radius: 3px;
  color: ${props => props.theme.white};
  white-space: nowrap;
  cursor: pointer;
  border: none;
  svg {
    transition: all 0.15s ease;
    fill: ${props => props.theme.white};
    height: 20px;
    width: auto;
    margin-left: 10px;
  }
  &:hover,
  &:focus {
    outline: 0;
    transition: background-color 0.1s ease;
    background-color: ${props => props.theme.green};
  }
`;
export const DropDownWrapper = styled.div`
  background-color: #fff;
  min-width: 100%;
  max-width: 30rem;
  position: absolute;
  top: 100%;
  left: 0;
  ${mixins.magicBoxShadow()}
`;
export const DropDownList = styled.ul`
  list-style: none;
  margin-bottom: 0.5rem;
  ${mixins.flex('column', 'stretch', 'stretch')};
`;
export const DropDownItem = styled.li`
  cursor: pointer;
  padding: 0.75rem 2rem 0.75rem 1.25rem;
  &:hover {
    color: ${props => props.theme.admin.primary};
    background-color: ${props => props.theme.gray06};
  }
`;

function DropDownSelectTion({
  selection = [],
  label = 'Select',
  trans = true,
  isLoading = false,
  onSelect = () => {},
  ...rest
}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = async event => {
    const a = onSelect(event);
    toggleOpen();
  };

  return (
    <SelectionWrapper ref={ref} {...rest}>
      <ButtonSelect onClick={toggleOpen}>
        {label}
        <ArrowDown />
      </ButtonSelect>
      {isOpen && !isLoading && (
        <DropDownWrapper>
          <DropDownList>
            {(Array.isArray(selection) ? selection : Array.from(selection)).map(
              (e, i) => (
                <DropDownItem
                  key={`item-${e.key}-${i}`}
                  onClick={handleSelectItem}
                >
                  {trans ? t(e.key) : e.value}
                </DropDownItem>
              )
            )}
          </DropDownList>
        </DropDownWrapper>
      )}
    </SelectionWrapper>
  );
}

export default DropDownSelectTion;
