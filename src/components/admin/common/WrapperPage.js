import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import mixins from '../../../assets/style/mixins';
import { device } from '../../../constants/deviceSizes';

import {
  WIDTH_SIDEBAR_EXPAND,
  WIDTH_SIDEBAR,
  HEIGHT_HEADER_MOBILE,
  HEIGHT_HEADER,
  PADDING_X_LEFT_CONTAINER_PAGE,
  PADDING_X_RIGHT_CONTAINER_PAGE,
  PADDING_X_LEFT_CONTAINER_PAGE_EXPAND,
  PADDING_X_RIGHT_CONTAINER_PAGE_EXPAND,
} from '../../../constants/css';

export const ContainerPage = styled.div`
  @media ${device.downLaptop} {
    padding: 20px 15px;
  }
  background-color: #fff;
`;

export const HeaderPage = styled.div`
  @media ${device.downLaptop} {
    padding: 10px 15px;
  }
`;

export const TitlePage = styled.div`
  ${mixins.flex('row', 'space-between')};
  margin: 0;
  margin-top: auto;
  h2 {
    margin: 0;
  }
`;

export const TopButton = styled.div`
  ${mixins.flex('row', 'flex-start', 'center')};
  & > button:last-child {
    margin-left: 2rem;
  }
  button {
    color: ${(props) => props.theme.dark};
    padding: 0.5rem 1rem;
    border-radius: 3px;
    svg {
      margin-left: 1rem;
      display: inline-block;
      height: 0.75rem;
      width: auto;
    }
  }
`;

// TOP NAV PAGE
export const NavPage = styled.div`
  margin-top: 1.3rem;
`;

export const NavList = styled.ul`
  ${mixins.flex('row', 'flex-start', 'center')};
  margin: 0 auto;
`;

export const NavItem = styled.li`
  display: inline-block;
  padding: 0.5rem 0;
  margin-right: 2.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.admin.grayText};
  opacity: 0.5;
  transition: all 0.1s ease-in;
  border-bottom: 2px solid transparent;
  &:first-child {
  }
  &:hover {
    color: inherit;
    transition: all 0.1s ease-in;
    opacity: 1;
    border-bottom: 2px solid ${(props) => props.theme.admin.primary};
  }
`;
// SEARCH BOX

export const SearchBar = styled.div`
  ${mixins.flex('row', 'flex-start', 'center')};
  margin-bottom: 30px;
  border: 1px solid ${(props) => props.theme.admin.lightText};
  border-radius: 3px;
  height: 40px;
  input {
    padding: 10px 15px;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
  }
`;

// Wrapper Page
const StyledWrapperPage = styled.div`
  margin: 0 auto;
  transition: margin 0.15s ease-out;
  margin-top: ${HEIGHT_HEADER_MOBILE};

  ${ContainerPage} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media ${device.laptop} {
    margin-top: ${HEIGHT_HEADER};
    &.collapsed {
      margin-left: ${WIDTH_SIDEBAR};
      ${ContainerPage} {
        padding-left: ${PADDING_X_LEFT_CONTAINER_PAGE_EXPAND};
        padding-right: ${PADDING_X_RIGHT_CONTAINER_PAGE_EXPAND};
      }
      ${HeaderPage} {
        padding: 30px ${PADDING_X_LEFT_CONTAINER_PAGE_EXPAND} 0;
      }
    }
    &.expanded {
      margin-left: ${WIDTH_SIDEBAR_EXPAND};
      & > ${ContainerPage} {
        padding-left: ${PADDING_X_LEFT_CONTAINER_PAGE};
        padding-right: ${PADDING_X_RIGHT_CONTAINER_PAGE};
      }
      & > ${HeaderPage} {
        padding: 30px ${PADDING_X_LEFT_CONTAINER_PAGE} 0;
      }
    }
  }
`;

function WrapperPage({ children }) {
  const toggledSidebar = useSelector((state) => state.toggledSidebar);
  const dispatch = useDispatch();
  return (
    <StyledWrapperPage className={toggledSidebar ? 'expanded' : 'collapsed'}>
      {children}
    </StyledWrapperPage>
  );
}

export default WrapperPage;
