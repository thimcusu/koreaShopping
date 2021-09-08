import React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { device } from '../../../constants/deviceSizes';
import { toCssUnitSize } from '../../../utils/css';
import { StyledInput } from '../common/Input';
import { ReactComponent as CrossIcon } from '../../../assets/images/svg-icon/fi-rr-cross-circle.svg';

export const WrapperChip = styled(StyledInput).attrs({
  as: 'div',
})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const CurrentChips = styled.ul`
  display: inline-block;
  margin: 0;
`;

const StyledTemplateList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
  margin-top: 0.5rem;
`;

const WrapperTemplate = styled.div``;

const StyledTemplate = styled.span`
  position: relative;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background-color: ${props => rgba(props.theme.admin.primary, 0.5)};
  margin-right: 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  &:after {
    position: absolute;
    content: '';
    width: 0%;
    height: 1px;
    background-color: whitesmoke;
    left: 50%;
    bottom: 0.375rem;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    transition: all 0.2s ease;
    color: #fff;
    background-color: ${props => props.theme.admin.primary};
    &:after {
      width: calc(100% - 1.5rem);
      left: 0.75rem;
    }
  }
`;

const ViewMoreTemplate = styled.a`
  position: relative;
  cursor: pointer;
  color: ${props => props.theme.admin.primary};
  &:after {
    position: absolute;
    content: '';
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.admin.primary};
    left: 50%;
    bottom: -5px;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    color: ${props => props.theme.admin.primary};
    &:after {
      width: 100%;
      left: 0;
    }
  }
`;

const ChipInput = styled.span`
  padding: 0.375rem 1.2rem 0.375rem 0.75rem;
  min-height: 30px !important;
  min-width: 100px;
  /* max-width: 100%; */
  background: transparent;
  border: none;
  white-space: pre-wrap;
  outline: 0;
  box-shadow: none;
  -webkit-appearance: textfield;
`;

export const StyledChip = styled.li`
  position: relative;
  display: inline-block;
  padding: 0.375em 1.2rem 0.375rem 0.75rem;
  background-color: #e1e9ff;
  color: ${props => props.theme.blue500};
  border-radius: 3px;
  margin-right: 1.5rem;
  svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(50%) translateY(-50%);
    height: 50%;
    font-size: 12px;
    z-index: 1;
    fill: ${props => props.theme.red};
    cursor: pointer;
    &:hover {
      fill: ${props => props.theme.admin.primary};
      transition: all 0.2s ease-out;
    }
  }
  &:after {
    content: '';
    background-color: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(50%) translateY(-50%);
    border-radius: 50%;
    height: calc(50% + 4px);
    aspect-ratio: 1/1;
    cursor: pointer;
    z-index: 0;
  }
`;

const Chip = ({
  children,
  currentList = [],
  list = [],
  templateList = [],
  wrapper,
  viewAllLabel = 'View all',
  editable = true,
  padding = ['0.3rem', '0.5rem'],
  onAddChip = () => {},
  onRemoveChip = () => {},
  ...rest
}) => {
  const Wrapper = wrapper || WrapperChip;
  const paddingX = toCssUnitSize(padding[0]);
  const paddingY = toCssUnitSize(padding[1]) || toCssUnitSize(padding[0]);

  const handleOnKeyPressChip = event => {
    if (event.code === 'Enter') {
      event.preventDefault();
      const label = event.target.textContent.trim();
      if (label === '') return;
      if (currentList.some(e => e.label === label)) {
        return;
      }
      const newChip = { label };
      event.target.textContent = '';
      onAddChip(newChip);
    }
  };
  return (
    <>
      <Wrapper paddingX={paddingX} paddingY={paddingY} {...rest}>
        <>
          {currentList.map((elm, index) => {
            return (
              <StyledChip key={`${elm.label}-${elm._id || elm.index}`}>
                {elm.label}
                <CrossIcon
                  onClick={() => {
                    onRemoveChip(elm);
                  }}
                />
              </StyledChip>
            );
          })}
        </>
        {editable && (
          <ChipInput onKeyPress={handleOnKeyPressChip} contentEditable />
        )}
      </Wrapper>
      {templateList[0] && (
        <StyledTemplateList>
          <WrapperTemplate>
            {templateList
              .filter(tag => !currentList.some(e => e.label === tag.label))
              .map((elm, index) => {
                return (
                  <StyledTemplate
                    key={`0-${elm.label}-${elm._id || elm.index}`}
                    onClick={() => {
                      onAddChip(elm);
                    }}
                  >
                    {elm.label}
                  </StyledTemplate>
                );
              })}
          </WrapperTemplate>
          {/* <ViewMoreTemplate>{viewAllLabel}</ViewMoreTemplate> */}
        </StyledTemplateList>
      )}
    </>
  );
};

export default Chip;
