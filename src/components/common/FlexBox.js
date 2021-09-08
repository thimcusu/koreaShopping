import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const FlexBox = styled.div`
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  display: ${({ display }) => display};
  gap: ${({ gap }) => `${gap}px`};
  ${({ flexFlow }) =>
    !flexFlow &&
    css`
      flex-direction: ${({ flexDirection }) => flexDirection};
      flex-wrap: ${({ flexWrap }) => flexWrap};
    `}
  ${({ flexFlow }) =>
    flexFlow &&
    css`
      flex-flow: ${flexFlow};
    `}
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};
`;

export const FlexItem = styled.div`
  order: ${({ order }) => order || 0};
  ${({ flex }) =>
    !flex &&
    css`
      flex-grow: ${({ flexGrow }) => flexGrow || 0};
      flex-shrink: ${({ flexShrink }) => flexShrink || 1};
      flex-basis: ${({ flexBasis }) => flexBasis || 'auto'};
    `}
  align-self: ${({ alignSelf }) => alignSelf || 'auto'};
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
`;

const arrCssFlex = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'stretch',
];

FlexBox.propTypes = {
  alignContent: PropTypes.oneOf(arrCssFlex),
  alignItems: PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
  ]),
  display: PropTypes.oneOf(['inline-flex', 'flex']),
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  flexFlow: PropTypes.string,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf(arrCssFlex.concat('space-evenly')),
};

FlexItem.propTypes = {
  order: PropTypes.number,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexBasis: PropTypes.string,
  alignSelf: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
};

FlexBox.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: 'row',
  flexFlow: null,
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  width: 'auto',
};

// FlexBox.displayName = 'FlexBox';
// FlexItem.displayName = 'FlexItem';

// export default Flexbox;
