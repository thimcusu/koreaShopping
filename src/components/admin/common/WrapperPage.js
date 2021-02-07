import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { device } from '../../../constants/deviceSizes';

import {
  WIDTH_SIDEBAR_EXPAND,
  WIDTH_SIDEBAR,
  HEIGHT_HEADER_MOBILE,
  HEIGHT_HEADER,
} from '../../../constants/css';

const StyledWrapperPage = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  transition: margin 0.15s ease-out;
  margin-top: ${HEIGHT_HEADER_MOBILE};
  @media ${device.laptop} {
    margin-top: ${HEIGHT_HEADER};
    &.collapsed {
      margin-left: ${WIDTH_SIDEBAR};
    }
    &.expanded {
      margin-left: ${WIDTH_SIDEBAR_EXPAND};
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
