import React from 'react';
import styled, { css } from 'styled-components';

import { device } from '../../constants/deviceSizes';
import { randomColor, contrast } from '../../utils/generateColor';

const styleSizeAvatar = css`
  height: 35px;
  width: 35px;
  ${(props) =>
    props.medium &&
    css`
      height: 60px;
      width: 60px;
    `}
  ${(props) =>
    props.large &&
    css`
      height: 90px;
      width: 90px;
    `}
  ${(props) =>
    props.small &&
    css`
      height: 20px;
      width: 20px;
    `}
    ${(props) =>
    props.rounded &&
    css`
      border-radius: 50%;
    `}
`;

const WrapperAvatar = styled.span`
  position: relative;
  flex-shrink: 0;
  border-radius: 5px;
  ${styleSizeAvatar};
  color: #3f4254;
  background: ${(props) => (props.bgColor ? props.bgColor : '#c9f7f5')};
  font-weight: 500;
  margin: auto 0;
  color: ${(props) => (props.color ? props.color : '#1bc5bd')} !important;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const Avatar = ({ text, defaultValue, ...rest }) => {
  const bgColor = randomColor();
  const textColor = contrast(bgColor);
  return (
    <WrapperAvatar
      className="avatar"
      color={textColor}
      bgColor={bgColor}
      {...rest}
    >
      <span>{text ? text : 'A'}</span>
    </WrapperAvatar>
  );
};

export default Avatar;
