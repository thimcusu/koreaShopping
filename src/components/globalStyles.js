import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html{
    font-size: 14px;
  }
  #root{
    max-width: 100%;
    margin: 0 5rem;
    text-shadow: rgba(0,0,0,.01) 0 0 1px;
  }
  body {
    margin: 0 auto;
    padding: 0;
    background-color: ${props => props.theme.background};
    font-family: Poppins, Sans-Serif;
    font-weight: 400;
    .container {
      margin-top: 9rem;
    }
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
