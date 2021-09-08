import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';

import { device } from '../../../constants/deviceSizes';

const animeModalShow = keyframes`
  0% { 
    opacity: 0;
    top: -5%;
    transform: translate3d(50%, -5%, 0);
  }
  50%{ opacity: 0.7}
  100%{ opacity: 1; transform: translate3d(50%, -50%, 0);}
`;

export const GlobalModalOverlay = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  left: 0;
  width: 100vw;
  overflow: hidden;
  outline: 0;
  z-index: 999;
  overflow-x: hidden;
  overflow-y: auto;
  display: block;
`;

export const GlobalModalWrapper = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  min-width: 8rem;
  max-width: 36rem;
  border-radius: 10px;
  transform: translate3d(50%, -50%, 0);
  transition: opacity 0.2s ease-out, transform 0.3s ease;
  background-color: ${({ theme }) => rgba(theme.gunmetal, 0.95)};
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  animation: ${animeModalShow} 0.2s linear;
`;

export const GlobalModalContent = styled.div`
  padding: 1rem 1.5rem;
  color: ${({ theme }) => theme.white};
  & > svg {
    height: 25px;
    width: 25px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    fill: ${({ theme }) => theme.white};
  }
`;

export const ModalHeading = styled.h3``;

export const ModalContentText = styled.div`
  color: ${({ theme }) => theme.gray03};
  font-size: 0.9em;
`;

const animateRight = keyframes`
  0% { opacity: 0; transform: translate3d(105%, -50%, 0);}
  50%{ opacity: 0.7}
  100%{ opacity: 1; transform: translate3d(0, -50%, 0)}
`;

export const PanelRightWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => rgba(theme.gunmetal, 0.95)};
  border-radius: 3px;
  padding: 1.5rem;
  right: 0;
  top: 50%;
  animation: ${animateRight} 0.3s linear;
  transition: opacity 0.2s ease-out, transform 0.3s ease;
  transform: ${({ active }) =>
    active
      ? css`
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, -50%, 0);
        `
      : css`
          opacity: 0;
          visibility: hidden;
          transform: translate3d(105%, -50%, 0);
        `};
  min-width: 100%;
  @media ${device.mobileL} {
    min-width: 450px;
  }
  min-height: 100px;
`;

export const PanelRightContainer = styled.div`
  color: ${({ theme }) => theme.white};
`;
