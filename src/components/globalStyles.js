import { createGlobalStyle } from "styled-components";
import { device } from "../contrants/deviceSizes";

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
    background-color: ${props => props.theme.background};
    font-family: "Poppins", Sans-Serif;
    font-weight: 400;
  }
  a, a:hover, a:visited {
    text-decoration: none;
  }
  
`;

export const theme = {
  primary: "#1B1B1B",
  hover: "#E95A5A",
  light: "#A5A5A5",
  linkHeader: "#767676",
  background: "#FFFFFF",
};
