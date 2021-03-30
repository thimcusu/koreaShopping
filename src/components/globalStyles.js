import { createGlobalStyle } from 'styled-components';
import { device } from '../constants/deviceSizes';

export const GlobalStyle = createGlobalStyle`
  *, *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html{
    font-size: 10px;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  /* 0.625em(10px) @ 48em(768px) increasing to 1em(16px) @ 64em(1024px) */
  @media ${device.tablet} {
    html {
      font-size: calc(0.625rem + ((1vw - 0.48em) * 2.3438));
      /* Where: 2.3438 = 100 * font-size_difference / viewport_width_difference */

      /* Safari resize fix */
      min-height: 0vw;
    }
    body{
      font-size: 14px;
    }
  }
  /* Prevent scaling beyond this breakpoint */
  @media ${device.laptop}  {
    html {
      font-size: 1em;
    }
    body{
      font-size: 14px;
    }
  }
  #root{
    max-width: 100%;
    text-shadow: rgba(0,0,0,.01) 0 0 1px;
  }
  body {
    margin: 0 auto;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    font-family: "Poppins", Sans-Serif;
    font-weight: 400;
    .main-container {
      max-width: 1330px;
      margin: 0 auto;
      margin-top: 2rem;
    }
    .main-container td {
      padding-right: 20px;
    }
  }
  a, a:hover, a:visited {
    text-decoration: none;
  }
  
`;

export const theme = {
  primary: '#1B1B1B',
  hover: '#E95A5A',
  light: '#A5A5A5',
  linkHeader: '#767676',
  background: '#F8F9FB',
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  white: '#ffffff',
  gray: '#7E8299',
  grayDark: '#3F4254',
  success: '#1BC5BD',
  info: '#8950FC',
  warning: '#FFA800',
  danger: '#F64E60',
  light: '#F3F6F9',
  dark: '#181C32',
  admin: {
    primary: '#02CB62',
    //primary: '#3699FF',
    // primary: '#8950FC',
    secondary: '#E4E6EF',
    grayText: '#6c7293',
    lightText: '#b5b5c3',
  },
};
