import styled from 'styled-components';
import { device } from '../../../constants/deviceSizes';

export const FooterContainer = styled.footer`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
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
