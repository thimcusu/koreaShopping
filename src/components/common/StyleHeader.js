import styled from "styled-components";

export const StyleHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${props => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 6rem;
  margin-bottom: 0;
`;

export const HeaderLogo = styled.div`
  display: inline-block;
  margin-right: 3rem;
  & > a {
    font-weight: 700;
    font-size: 2.5rem;
    color: ${props => props.theme.primary};
    line-height: 3.2rem;
  }
`;
export const HeaderExtra = styled.div`
  margin-left: auto;
  display: inline-block;
  .cart {
    display: inline-block;
    a {
      color: ${props => props.theme.primary};
    }
    a div {
      display: inline-block;
      vertical-align: middle;
      font-weight: 500;
      margin-left: 1rem;
      transition: all 200ms ease;
    }
  }
  img {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    transition: all 200ms ease;
  }
  .cart a:hover {
    div,
    img {
      fill: ${props => props.theme.hover};
      color: ${props => props.theme.hover};
    }
  }
  .search-input {
    margin-left: 3rem;
    display: inline-block;
  }
`;

export const MainNavigation = styled.nav`
  display: inline-block;
  align-items: center;
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }
  li {
    display: inline-block;
    position: relative;
    padding: 1.5rem 2rem;
    ul {
      display: none;
      position: absolute;
      background-color: ${props => props.theme.background};
      right: 0;
      li {
        a {
          text-align: right;
        }
        display: block;
        padding: 0.3rem 1rem;
      }
    }
  }
  li:hover {
    ul {
      display: block;
    }
  }
  a {
    font-weight: 600;
    font-size: 1.2rem;
    text-shadow: rgba(0, 0, 0, 0.1);
    display: block;
    color: ${props => props.theme.linkHeader};
    transition: 0.2s all ease;
  }
  a:hover {
    transition: 0.2s all ease;
    color: ${props => props.theme.primary};
  }
  & > ul > :first-child > a:after {
    content: "";
    position: absolute;
    right: 1rem;
    width: 0.5rem;
    height: 0.5rem;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    border-right: 2px solid;
    border-bottom: 2px solid;
  }
`;
