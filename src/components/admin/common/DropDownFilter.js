import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import mixins from '../../../assets/style/mixins';
import { device } from '../../../constants/deviceSizes';

import useOnClickOutside from '../../common/useOnClickOutside';
import { ReactComponent as ArrowUp } from '../../../assets/images/fi-rr-angle-small-up.svg';
import { ReactComponent as ArrowDown } from '../../../assets/images/fi-rr-angle-small-down.svg';

export const FilterWrapper = styled.div`
  position: relative;
  border-right: 1px solid ${(props) => props.theme.admin.lightText};
`;
export const ContainerLabel = styled.div`
  ${mixins.flex('row', 'space-between')};
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
  background-color: #fff;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme.admin.lightText};
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  ${mixins.flex('row', 'flex-start')};
`;
export const DropDownList = styled.ul`
  min-width: 9rem;
  & > strong {
    display: inline-block;
  }
`;
export const DropDownItem = styled.li`
  cursor: pointer;
  width: fit-content;
  padding: 0.125rem 0.25rem;
  &:hover {
    color: ${(props) => props.theme.admin.primary};
  }
`;

function DropDownFilter({
  filters = [],
  filterLabel = 'Filter',
  listFilters = [{ id: undefined }],
}) {
  const [filter, setFilter] = useState(listFilters[0]);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const handleSelectFilter = (id) => {
    const filterValue = listFilters.find((e) => e.id === id);
    setFilter(filterValue);
    setIsOpen(!isOpen);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FilterWrapper ref={ref}>
      <ContainerLabel onClick={toggleOpen}>
        {filter.id === undefined ? (
          <label>{filterLabel}</label>
        ) : (
          <label>{filter.label}</label>
        )}
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </ContainerLabel>
      {isOpen && (
        <DropDownWrapper>
          {filters &&
            filters.map((bigCat) => (
              <DropDownList key={bigCat.id}>
                <strong
                  role="button"
                  onClick={() => handleSelectFilter(bigCat.id)}
                >
                  {bigCat.label}
                </strong>
                {bigCat.childrens &&
                  bigCat.childrens.map((smallCat) => (
                    <DropDownItem
                      key={smallCat.id}
                      role="button"
                      onClick={() => handleSelectFilter(smallCat.id)}
                    >
                      {smallCat.label}
                    </DropDownItem>
                  ))}
              </DropDownList>
            ))}
        </DropDownWrapper>
      )}
    </FilterWrapper>
  );
}

export default DropDownFilter;
