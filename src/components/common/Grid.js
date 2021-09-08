import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

import { device } from '../../constants/deviceSizes';

export const Grid = styled.div``;

const WrapperRow = styled.div`
  ${props =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `};
  margin: 0 -${props => props.spacingX}px 0 -${props => props.spacingX}px;
  width: ${props =>
    props.standardWidth ? '100%' : `calc(100% + ${props.spacingX * 2}px)`};
  @media (min-width: ${props => props.breakpoint}px) {
    flex-direction: ${props =>
      props.flexDirections ? props.flexDirections[0] || 'row' : 'row'};
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: ${props =>
      props.standardWidth
        ? '0'
        : `0 -${props.spacingX}px 0 -${props.spacingX}px`};
  }
`;

const WrapperColumn = styled.div`
  flex: 1 1 0;
  width: 100%;
  flex-basis: ${props => (12 / props.maxColumnCount / 12) * 100}% !important;
  padding: ${props => props.spacingY}px ${props => props.spacingX}px;
  // ACTIVE BETWEEN BREAKPOINT ONE AND TWO (OR 9999PX)
  @media (min-width: ${props =>
      props.breakpointOne}px) and (max-width: ${props =>
      props.breakpointTwo | 9999}px) {
    width: ${props =>
      props.widthOne !== 'auto'
        ? `${(props.widthOne / props.maxColumnCount) * 100}%`
        : null};
    flex: ${props => (props.widthOne !== 'auto' ? 'none !important' : null)};
    margin-left: ${props =>
      props.offsetOne ? `${(props.offsetOne / 12) * 100}% !important` : null};
  }

  // ACTIVE BETWEEN BREAKPOINT TWO AND THREE (OR 9999PX)
  @media (min-width: ${props =>
      props.breakpointTwo}px) and (max-width: ${props =>
      props.breakpointThree | 9999}px) {
    width: ${props =>
      props.widthTwo !== 'auto'
        ? `${(props.widthTwo / props.maxColumnCount) * 100}%`
        : null};
    flex: ${props => (props.widthTwo !== 'auto' ? 'none !important' : null)};
    margin-left: ${props =>
      props.offsetTwo ? `${(props.offsetTwo / 12) * 100}% !important` : null};
  }

  // ACTIVE BETWEEN BREAKPOINT THREE AND UP
  @media (min-width: ${props =>
      props.breakpointThree}px) and (max-width: 99999px) {
    width: ${props =>
      props.widthThree !== 'auto'
        ? `${(props.widthThree / props.maxColumnCount) * 100}%`
        : null};
    flex: ${props => (props.widthThree !== 'auto' ? 'none !important' : null)};
    margin-left: ${props =>
      props.offsetThree
        ? `${(props.offsetThree / 12) * 100}% !important`
        : null};
  }
`;

export const Column = ({
  className,
  children,
  spacing,
  breakpoints,
  cols = ['auto'],
  offsets,
  maxColumnCount = 12,
  ...rest
}) => {
  // Breakpoints
  const breakpointOne = breakpoints[0];
  const breakpointTwo = breakpoints.length >= 1 ? breakpoints[1] : null;
  const breakpointThree = breakpoints.length >= 2 ? breakpoints[2] : null;
  // Widths
  const widthOne = cols[0];
  const widthTwo = cols.length >= 1 ? cols[1] : null;
  const widthThree = cols.length >= 2 ? cols[2] : null;

  // Offsets
  const offsetOne = offsets && offsets.length > 0 ? offsets[0] : null;
  const offsetTwo = offsets && offsets.length >= 1 ? offsets[1] : null;
  const offsetThree = offsets && offsets.length >= 2 ? offsets[2] : null;
  return (
    <WrapperColumn
      breakpointOne={breakpointOne}
      breakpointTwo={breakpointTwo}
      breakpointThree={breakpointThree}
      widthOne={widthOne}
      widthTwo={widthTwo}
      widthThree={widthThree}
      offsetOne={offsetOne}
      offsetTwo={offsetTwo}
      offsetThree={offsetThree}
      maxColumnCount={maxColumnCount}
      spacingX={spacing[0]}
      spacingY={typeof spacing[1] === 'number' ? spacing[1] : spacing[0]}
      className={className}
      {...rest}
    >
      {children}
    </WrapperColumn>
  );
};

export const Row = ({
  children,
  className = '',
  id,
  breakpoints = [769],
  spacing = [12],
  flexDirections,
  maxColumnCount = 12,
}) => {
  return (
    <WrapperRow
      className={className}
      id={id}
      breakpoint={breakpoints[0]}
      breakpointTwo={breakpoints[1] || breakpoints[0]}
      spacingX={spacing[0]}
      spacingY={typeof spacing[1] === 'number' ? spacing[1] : spacing[0]}
      flexDirections={flexDirections || null}
      maxColumnCount={maxColumnCount}
    >
      {React.Children.toArray(children).map((item, index) => {
        const { id, cols, offsets, className, ...rest } = item.props;
        return (
          item && (
            <Column
              key={`column-${className}${id || index}`}
              breakpoints={breakpoints}
              cols={cols}
              offsets={offsets}
              maxColumnCount={maxColumnCount}
              className={className || ''}
              id={id}
              spacing={item.props.spacing || spacing}
              {...rest}
            >
              {item.props.children}
            </Column>
          )
        );
      })}
    </WrapperRow>
  );
};
