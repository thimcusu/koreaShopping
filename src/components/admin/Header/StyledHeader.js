import styled from 'styled-components';

import { device } from '../../../constants/deviceSizes';
import {
  WIDTH_SIDEBAR_EXPAND,
  WIDTH_SIDEBAR,
  HEIGHT_HEADER,
  HEIGHT_HEADER_MOBILE,
  HEIGHT_TOP_BAR_MOBILE,
} from '../../../constants/css';
import mixins from '../../../assets/style/mixins';

export const StyledHeader = styled.header`
  position: fixed;
  background: #fff;
  top: 0;
  right: 0;
  left: ${WIDTH_SIDEBAR_EXPAND};
  z-index: 97;
  height: auto;
  transition: height 0.3s ease;
  transition: left 0.15s ease-out;
  border-bottom: 1px solid #ebedf3;
  &.collapsed {
    left: ${WIDTH_SIDEBAR_EXPAND};
  }
  &.expanded {
    left: ${WIDTH_SIDEBAR};
  }
  @media ${device.laptop} {
    height: ${HEIGHT_HEADER};
  }
`;

export const StyledHeaderMobile = styled.header`
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 97;
  background-color: #1a1a27;
  height: ${HEIGHT_HEADER_MOBILE};
  @media ${device.laptop} {
    display: none;
  }
`;

export const HeaderBrand = styled.div`
  text-align: center;
  ${mixins.flex('row', 'center', 'center')};
  h2 {
    color: ${(props) => props.theme.white};
    font-size: 19px;
    margin: auto 0;
    letter-spacing: 6px;
    margin: 0;
    cursor: pointer;
  }
`;

export const HeaderContainer = styled.div`
  ${mixins.flex('row', 'space-between', 'stretch')};
  position: relative;
  padding: 0 25px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderMenu = styled.ul`
  height: 100%;
  margin: 0;
  padding: 10px 0;
  z-index: 1001;
  position: fixed;
  background-color: #fff;
  top: 0;
  bottom: 0;
  transition: left 0.3s ease, right 0.3s ease, bottom 0.3s ease, top 0.3s ease;
  left: -295px;
  width: 275px;
  &.active {
    left: 0;
  }
  @media ${device.laptop} {
    ${mixins.flex('row', 'flex-start', 'stretch')};
    padding: 0;
    height: 100%;
    position: static;
    background-color: inherit;
  }
`;

export const HeaderMenuItem = styled.li`
  ${mixins.flex('row', 'center', 'center')};
  position: relative;
  margin: 0 0.25rem;
  button {
    color: ${(props) => props.theme.admin.grayText};
  }
  a {
    background-color: rgba(77, 89, 149, 0.06);
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 0.65rem 1.1rem;
  }
`;

export const TopBar = styled.ul`
  ${mixins.flex('row', 'flex-end', 'stretch')};
  margin: 0;
  padding: 0 15px;
  position: fixed;
  z-index: 96;
  background-color: #fff;
  height: ${HEIGHT_TOP_BAR_MOBILE};
  z-index: 96;
  transition: all 0.3s ease;
  top: 0;
  left: 0;
  right: 0;
  &.active {
    margin-top: ${HEIGHT_HEADER_MOBILE};
  }
  @media ${device.laptop} {
    height: 100%;
    position: relative;
    background-color: inherit;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-top: none;
  }
  button {
    padding: 0.75rem 0.9rem;
    svg {
      fill: ${(props) => props.theme.admin.primary};
      opacity: 1;
      width: 1.25rem;
      height: auto;
      overflow: hidden;
      vertical-align: middle;
    }
    &:hover {
      svg {
      }
    }
  }
  li:last-child {
    button {
      padding: 0.3rem 0.4rem;
      ${mixins.flex('row', 'center', 'center')};
      & > span:first-child {
        color: ${(props) => props.theme.green};
        margin-right: 0.25rem;
      }
      & > span:last-child {
        margin-left: 0.45rem;
      }
      span {
        text-align: center;
      }
    }
  }
`;

// HEADER MOBLIE

export const Toolbar = styled.div`
  ${mixins.flex('row', 'flex-start', 'center')};
  margin: 0;
  padding: 0;
`;

export const HeaderMoblieButton = styled.button`
  padding: 0.2rem;
  margin-left: 0.625rem;
  transition: all 0.3s ease;
  background-color: transparent;
  border: none;
  outline: 0;
  color: #484f66;
  box-shadow: none;
  text-align: center;
  vertical-align: middle;
  svg {
    width: 1.5rem;
    transition: all 0.15s ease;
    height: auto;
    fill: currentColor;
  }
  &:last-child {
    svg {
      fill: ${(props) => props.theme.green};
    }
  }
  &:hover svg {
    fill: ${(props) => props.theme.admin.primary};
  }
  &:focus {
    outline: 0;
  }
`;
