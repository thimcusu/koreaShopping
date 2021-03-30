import styled from 'styled-components';

import { device } from '../../../constants/deviceSizes';
import mixins from '../../../assets/style/mixins';

export const ContainerProducts = styled.section`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media ${device.mobileL} {
    max-width: 540px;
  }
  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.laptop} {
    max-width: 960px;
  }
  @media ${device.laptopL} {
    max-width: 1170px;
  }
`;

export const TitleProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 2rem;
  h3 {
    margin: 0;
  }
  a {
    color: #1b1b1b;
    display: inline-block;
    position: relative;
    margin-top: auto;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.hover};
    }
    &:after {
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #1b1b1b;
      content: '';
    }
  }
`;

export const ListProduct = styled.ul`
  ${mixins.flex('row', 'center', 'center', 'wrap')};
  @media ${device.mobileL} {
    justify-content: space-between;
  }
`;

export const ProductItem = styled.li`
  position: relative;
  figure > a {
    display: block;
    width: 320px;
    height: 320px;
    @media ${device.mobileL} {
      width: 245px;
      height: 245px;
    }
    @media ${device.tablet} {
      width: 210px;
      height: 210px;
    }
    @media ${device.laptopL} {
      width: 265px;
      height: 265px;
    }
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
`;

export const ProductTags = styled.div`
  position: absolute;
  top: 0;
  left: 54px;
  width: 66px;
  height: 36px;
  text-align: center;
  transform-origin: top left;
  transform: rotate(90deg);
  a {
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    line-height: 36px;
  }
  &.new {
    background: #6c6a74;
  }
`;

export const ProductContent = styled.div`
  width: 100%;
  padding: 1.5rem 0 2.25rem;
`;

export const ProductTitle = styled.div`
  a {
    font-size: 18px;
    font-weight: 500;
    color: #1b1b1b;
    line-height: 1.1;
    transition: all 200ms ease;
    &:hover {
      color: ${(props) => props.theme.hover};
    }
  }
`;

export const ProductPrice = styled.div``;
