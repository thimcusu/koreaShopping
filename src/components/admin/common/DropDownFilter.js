import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import mixins from '../../../assets/style/mixins';
import { device } from '../../../constants/deviceSizes';
import useOnClickOutside from '../../common/useOnClickOutside';
import { ReactComponent as ArrowUp } from '../../../assets/images/svg-icon/fi-rr-angle-small-up.svg';
import { ReactComponent as ArrowDown } from '../../../assets/images/svg-icon/fi-rr-angle-small-down.svg';
import { ReactComponent as CircleIcon } from '../../../assets/images/svg-icon/fi-rr-circle-small.svg';
import { ReactComponent as CrossIcon } from '../../../assets/images/svg-icon/fi-rr-cross-circle.svg';
import { StyledChip } from './Chip';

function heightLineCSS() {
  let styles = '';
  for (let i = 0; i < 20; i += 1) {
    styles += `
      &:nth-child(${i}):before {
        height: calc(100% * ${i});
        top: calc(51% - 100% * ${i});
      }
    `;
  }
  return css`
    ${styles}
  `;
}

export const FilterWrapper = styled.div`
  position: relative;
  z-index: 10;
  ${(props) =>
    props.border &&
    css`
      border: 1px solid ${(props) => props.theme.admin.borderInput};
    `}
`;

export const ContainerLabel = styled.div`
  ${mixins.flex('row', 'space-between', 'center')};
  padding: 9px 15px;
  cursor: default;
  svg {
    transition: all 0.15s ease;
    height: 20px;
    width: auto;
    margin-left: 20px;
  }
  label {
    white-space: nowrap;
    margin: 0;
  }
`;
export const DropDownWrapper = styled.div`
  ${mixins.flex('row', 'flex-start')};
  background-color: ${({ theme }) => theme.grayBg};
  border-radius: 3px;
  padding: 0.75rem 1rem;
  min-width: 15rem;
  max-width: 30rem;
  /* border: 1px solid ${(props) => props.theme.admin.lightText}; */
  ${mixins.magicBoxShadow()}
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  & > ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 300px;
    & > li > div {
      color: ${({ theme }) => theme.gray01};
    }
  }
`;

export const GroupItem = styled.li``;

export const DropDownItem = styled.div`
  cursor: pointer;
  width: fit-content;
  padding: 0.25rem 0.75rem;
  position: relative;
  color: ${(props) => (props.active ? props.theme.gray01 : 'inherit')};
  font-weight: ${(props) => (props.active ? 500 : 400)};
  svg {
    position: absolute;
    height: 10px;
    left: -3px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
  }
  &:hover {
    color: ${(props) => props.theme.admin.primary};
    svg {
      fill: ${(props) => props.theme.admin.primary};
    }
  }
`;

export const DropDownList = styled.ul`
  position: relative;
  & > strong {
    display: inline-block;
  }
  & > li > ul {
    ${mixins.flex('column', 'flex-start', 'flex-start', 'wrap')};
    margin-left: 20px;
    & > li > ${DropDownItem} {
      &:before {
        content: '';
        position: absolute;
        top: -49%;
        left: -21px;
        width: 20px;
        height: 100%;
        border-left: 1px solid ${({ theme }) => theme.gray04};
        border-bottom: 1px solid ${({ theme }) => theme.gray04};
        border-bottom-left-radius: 5px;
        background-color: transparent;
      }
      ${heightLineCSS()};
    }
  }
`;

const DropDownFilter = ({
  filters = [],
  filterLabel = 'Filter',
  defaultFilter = [],
  multi = false,
  onSelectFilter = () => {},
  border,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  function componentListCategories(category) {
    return (
      <DropDownList>
        {category.map((cat) => (
          <GroupItem>
            <DropDownItem
              key={cat._id}
              role="button"
              onClick={() => onSelectFilter(cat._id)}
              active={defaultFilter.includes(cat.name)}
            >
              <CircleIcon />
              {cat.name}
            </DropDownItem>
            {cat.children.length > 0 && componentListCategories(cat.children)}
          </GroupItem>
        ))}
      </DropDownList>
    );
  }
  function renderLabel() {}
  return (
    <FilterWrapper
      border={
        border && Array.isArray(defaultFilter) && defaultFilter.length === 0
      }
      ref={ref}
      {...rest}
    >
      {multi && defaultFilter.length > 0 ? (
        defaultFilter.map((name) => (
          <StyledChip onClick={toggleOpen}>
            {name}
            <CrossIcon />
          </StyledChip>
        ))
      ) : (
        <ContainerLabel onClick={toggleOpen}>
          {defaultFilter & !Array.isArray(defaultFilter) ? (
            <label>{defaultFilter.name}</label>
          ) : (
            <label>{filterLabel}</label>
          )}
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </ContainerLabel>
      )}
      {isOpen && (
        <DropDownWrapper>{componentListCategories(filters)}</DropDownWrapper>
      )}
    </FilterWrapper>
  );
};

export default DropDownFilter;
