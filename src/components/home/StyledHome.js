import styled, { keyframes } from 'styled-components';

import { device } from '../../constants/deviceSizes';
import {
  HEIGHT_HEADER_CS,
  HEIGHT_HEADER_CS_LAPTOP,
  PADDING_X_MASTER,
  PADDING_X_MASTER_LAPTOP,
} from '../../constants/css';

export const MasterContainerPage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* max-width: 1130px; */
  padding-top: ${HEIGHT_HEADER_CS};
  @media ${device.tablet} {
    padding-left: ${PADDING_X_MASTER};
    padding-right: ${PADDING_X_MASTER};
  }
  @media ${device.laptop} {
    padding-left: ${PADDING_X_MASTER_LAPTOP};
    padding-right: ${PADDING_X_MASTER_LAPTOP};
    padding-top: ${HEIGHT_HEADER_CS_LAPTOP};
  }
`;

const scrollProgress = keyframes`
  to {
    transform: translateX(0);
  }
`;

export const ProgressionBar = styled.div`
  height: 8px;
  background: limegreen;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateX(-100%);
  animation: ${scrollProgress} 1s linear both;
  animation-timeline: scrollProgress;
`;
