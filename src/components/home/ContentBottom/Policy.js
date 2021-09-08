import React from 'react';
import styled from 'styled-components';

import { device } from '../../../constants/deviceSizes';
import shipIcon from '../../../assets/images/icon_1.svg';
import returnIcon from '../../../assets/images/icon_2.svg';
import supportIcon from '../../../assets/images/icon_3.svg';

export const WrapperPolicy = styled.section`
  margin: 0 auto;
  padding: 30px 0;
  background: #ffffff;
  z-index: 2;
  @media ${device.mobileL} {
    max-width: 540px;
  }
  @media ${device.tablet} {
    max-width: 720px;
    padding: 90px 0;
  }
  @media ${device.laptop} {
    max-width: 960px;
  }
  @media ${device.laptopL} {
    max-width: 1170px;
  }
`;

export const ContainerBoxes = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  flex-wrap: wrap;
  @media ${device.tablet} {
    padding-left: 15px;
    padding-right: 15px;
    flex-wrap: nowrap;
  }
`;

export const BoxItem = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
  margin-bottom: 40px;
  @media ${device.tablet} {
    margin-bottom: 0px;
  }
`;

export const IconBox = styled.div`
  width: 75px;
  height: 75px;
  margin: 0 auto;
  text-align: center;
  img {
    max-width: 100%;
  }
  @media ${device.tablet} {
  }
`;
export const BoxTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #1b1b1b;
  margin-top: 33px;
  @media ${device.tablet} {
  }
`;
export const BoxText = styled.div`
  margin-top: 20px;
  p {
    font-size: 14px;
    line-height: 2.14;
    font-weight: 400;
    color: #6c6a74;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    text-shadow: rgb(0 0 0 / 1%) 0 0 1px;
  }
`;

function Policy() {
  return (
    <WrapperPolicy>
      <ContainerBoxes>
        <BoxItem>
          <IconBox>
            <img src={shipIcon} alt="Shipping Icon" />
          </IconBox>
          <BoxTitle>Free Shipping</BoxTitle>
          <BoxText>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              cupiditate, cumque fuga expedita itaque laboriosam odio, quidem
              recusandae possimus iure minus. Illo itaque cupiditate error ab,
              voluptates magnam libero odio!
            </p>
          </BoxText>
        </BoxItem>
        <BoxItem>
          <IconBox>
            <img src={returnIcon} alt="Returning Icon" />
          </IconBox>
          <BoxTitle>Free Return</BoxTitle>
          <BoxText>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              cupiditate, cumque fuga expedita itaque laboriosam odio, quidem
              recusandae possimus iure minus. Illo itaque cupiditate error ab,
              voluptates magnam libero odio!
            </p>
          </BoxText>
        </BoxItem>
        <BoxItem>
          <IconBox>
            <img src={supportIcon} alt="Supporting Icon" />
          </IconBox>
          <BoxTitle>24h Fast support</BoxTitle>
          <BoxText>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              cupiditate, cumque fuga expedita itaque laboriosam odio, quidem
              recusandae possimus iure minus. Illo itaque cupiditate error ab,
              voluptates magnam libero odio!
            </p>
          </BoxText>
        </BoxItem>
      </ContainerBoxes>
    </WrapperPolicy>
  );
}

export default Policy;
