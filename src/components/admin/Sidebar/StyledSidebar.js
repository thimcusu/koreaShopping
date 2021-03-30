import styled, { keyframes } from 'styled-components';

import { device } from '../../../constants/deviceSizes';
import {
  WIDTH_SIDEBAR_EXPAND,
  WIDTH_SIDEBAR,
  HEIGHT_HEADER,
} from '../../../constants/css';
import mixins from '../../../assets/style/mixins';

const rotate = keyframes`
  0% {
    transform: rotate(-180deg);
  }
  80% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const StyledSidebar = styled.aside`
  position: fixed;
  background-color: #1e1e2d;
  z-index: 1001;
  left: -${WIDTH_SIDEBAR_EXPAND};
  top: 0;
  bottom: 0;
  width: ${WIDTH_SIDEBAR_EXPAND};
  transition: width 0.15s ease-out;
  transition: left 0.15s ease-out;
  @media ${device.laptop} {
    left: 0;
  }
  &.expanded {
    left: 0;
  }
  @media ${device.laptop} {
    &.collapsed {
      width: ${WIDTH_SIDEBAR};
      ${NavigationItem} {
        .nav-menu-text {
          display: none;
        }
        .nav-menu-icon {
          margin: 0 auto;
        }
      }
      ${SidebarBrand} {
        justify-content: center;
        .brand-name {
          display: none;
        }
        button {
          transition: all 0.3s ease;
          transform: rotate(180deg);
          svg {
            path:nth-of-type(even) {
              fill: #494b74;
              opacity: 1;
            }
            path:nth-of-type(odd) {
              fill: ${(props) => props.theme.admin.primary};
            }
          }
        }
      }
      ${MenuSection} {
        h4 {
          display: none;
        }
        svg {
          margin: 0 auto;
          display: block;
        }
      }
    }
  }
`;

export const SidebarContainer = styled.div`
  position: relative;
  color: #a2a3b7;
`;
export const NavigationList = styled.ul`
  margin: 1rem 0;
  list-style: none;
  padding: 15px 0;
  &:hover {
  }
`;

export const NavigationItem = styled.li`
  position: relative;
  ${mixins.flex('column')};
  margin: 0;
  a {
    cursor: pointer;
    ${mixins.flex('row', 'flex-start', 'center')};
    min-height: 44px;
    color: #a2a3b7;
    padding: 9px 25px;
    .nav-menu-icon {
      width: 16px;
      margin-right: 20px;
      svg {
        fill: #494b74;
      }
    }
    .nav-menu-arrow {
      width: 18px;
      height: auto;
      margin-left: auto;
      svg {
        fill: #494b74;
      }
    }
    .nav-menu-text {
      cursor: pointer;
      font-weight: 400;
      font-size: 13px;
      text-transform: initial;
      line-height: 19px;
    }
    &:hover {
      svg {
        fill: ${(props) => props.theme.admin.primary};
      }
      .nav-menu-arrow {
        svg {
          fill: ${(props) => props.theme.white};
        }
      }
      color: ${(props) => props.theme.white};
    }
  }
`;

export const MenuSection = styled.li`
  margin: 20px 0 0 0;
  height: 40px;
  padding: 0 25px;
  ${mixins.flex('row', 'flex-start', 'center')};
  h4 {
    color: #4c4e6f;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    vertical-align: middle;
    margin: auto 0;
  }
  svg {
    fill: ${(props) => props.theme.admin.primary};
    width: 20px;
    height: auto;
    display: none;
  }
`;

export const SidebarBrand = styled.div`
  position: relative;
  ${mixins.flex('row', 'space-between', 'center')};
  color: #a2a3b7;
  background-color: #1a1a27;
  padding: 9px 25px;
  height: ${HEIGHT_HEADER};
  h2 {
    color: ${(props) => props.theme.white};
    font-size: 19px;
    letter-spacing: 6px;
    margin: 0;
    cursor: pointer;
  }
  & > button {
    cursor: pointer;
    padding: 2px 4px;
    margin-right: 0;
    color: inherit;
    background-color: inherit;
    border: none;
    outline: 0;
    svg {
      transition: all 0.15s ease;
      height: 20px;
      width: auto;
      path {
        transition: all 0.3s ease;
        fill: #494b74;
      }
      path:nth-of-type(even) {
        fill: ${(props) => props.theme.grayDark};
        opacity: 0.5;
      }
      path:nth-of-type(odd) {
        fill: #494b74;
      }
    }
    &:hover {
      svg {
        path:nth-of-type(even) {
          fill: #494b74;
          opacity: 1;
        }
        path:nth-of-type(odd) {
          fill: ${(props) => props.theme.admin.primary};
        }
      }
    }
  }
  &.hovered {
    button {
      transform: rotate(-180deg);
      margin-right: 20px;
      transition: margin 0.5s ease;
    }
    &.toggled {
      button {
        margin-right: 0;
        animation: ${rotate} 0.6s ease-out;
        transform: rotate(0deg);
      }
    }
  }
`;
