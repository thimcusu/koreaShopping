import styled from 'styled-components';

import { device } from '../../../constants/deviceSizes';
import { HEIGHT_FOOTER } from '../../../constants/css';

export const FooterContainer = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${HEIGHT_FOOTER};
  z-index: 1;
  background-color: ${(props) => props.theme.background};
`;

export const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.src});
`;

export const FooterContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .copyright {
    color: #fff;
  }
`;
