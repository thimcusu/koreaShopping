import styled from 'styled-components';

import mixins from '../../../assets/style/mixins';
import { device } from '../../../constants/deviceSizes';

export const Banner = styled.div`
  height: 500px;
  width: 100%;
  background: url(${(props) => props.src}) no-repeat center;
  background-size: cover;
  @media ${device.downMobileL} {
    height: 350px;
  }
`;

export const ContainerFilter = styled.div`
  ${mixins.flex('row', 'space-between', 'center')};
  padding: 80px 0px;
  div:first-child {
    color: #6c6a74;
  }
`;

export const ContainerSorting = styled.div`
  position: relative;
  border: solid 2px ${(props) => props.theme.light};
  padding: 0.5rem 1.25rem 0.5rem 1.5rem;
  width: 200px;
  cursor: pointer;
  ${mixins.flex('row', 'space-between', 'center')};
  & > svg {
    width: 20px;
  }
  & + div {
    color: #ddd;
  }
  &:hover {
    ul {
      opacity: 1;
      visibility: visible;
    }
  }
  ul {
    opacity: 0;
    visibility: hidden;
    z-index: 10;
    background-color: #fff;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    width: 100%;
    transition: all 0.3s ease;
    ${mixins.magicBoxShadow()};
    li {
      text-align: end;
      padding: 0.5rem 1.5rem;
      transition: all 0.2s ease-in;
    }
    li:hover {
      color: #b5aec4;
    }
    li + li {
      border-top: solid 1px ${(props) => props.theme.light};
    }
  }
`;
