import styled from "styled-components";
import { device } from "../../../constants/deviceSizes";

export const StyleHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${props => props.theme.background};
`;

export const WrapperHeader = styled.div`
  width: 100%;
  @media ${device.mobileL} {
    .scrolled {
      height: 70px;
      transition: height 0.3s ease;
    }
  }
`;

export const HeaderContainer = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  padding: 0 15px;
  margin: 0 auto;
  .active {
    transition: all 500ms ease;
    right: 0;
    .menu_close {
      right: 27px;
      transition: all 500ms ease 300ms;
    }
    .social_media {
      right: 30px;
      transition: all 500ms ease 300ms;
    }
  }
  .hamburger {
    margin-left: 15px;
    padding: 3px;
    cursor: pointer;
    svg {
      font-size: 18px;
    }
  }
  @media ${device.tablet} {
    padding: 0 30px;
    height: 130px;
  }
  @media ${device.laptop} {
    padding: 0 60px;
    .menu_close {
      display: none;
    }
    .social_media {
      display: none;
    }
    .hamburger {
      display: none;
    }
  }
`;

export const HeaderLogo = styled.div`
  display: inline-block;
  & > a {
    font-weight: 700;
    font-size: 20px;
    color: ${props => props.theme.primary};
    line-height: 35px;
  }
  @media ${device.tablet} {
    & > a {
      font-size: 25px;
    }
  }
  @media ${device.laptop} {
    margin-right: auto;
    & > a {
      font-size: 30px;
    }
  }
  @media screen and (min-width: 72em) {
    margin-left: 40px;
  } ;
`;
export const HeaderExtra = styled.div`
  margin-left: auto;
  margin-right: 20px;
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
    margin-left: 20px;
    display: inline-block;
  }
`;

export const WrapperHeaderContent = styled.div`
  font-size: 16px;
  z-index: 100;
  .menu_close {
    position: fixed;
    top: 27px;
    right: -150%;
    padding: 3px;
    cursor: pointer;
    svg {
      font-size: 20px;
      color: #1b1b1b;
    }
  }
  .social_media {
    position: fixed;
    display: flex;
    bottom: 30px;
    right: calc(-100% - 20px);
    svg {
      margin-left: 10px;
    }
  }
  @media ${device.downLaptop} {
    position: fixed;
    background-color: #e4e4e4;
    top: 0;
    right: calc(-100% - 20px);
    height: 100vh;
    width: 60vw;
    font-weight: 700;
  }
  @media ${device.downMobileL} {
    font-size: 14px;
    width: 100vw;
  }
`;

export const MainNavigation = styled.nav`
  display: inline-block;
  padding: 80px 15px;
  width: 100%;
  ul {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }

  & > ul > :first-child > a {
    position: relative;
    padding-right: 15px;
    :after {
      content: "";
      position: absolute;
      right: 0;
      width: 6px;
      height: 6px;
      top: 50%;
      transform: translateY(-75%) rotate(45deg);
      border-right: 1px solid;
      border-bottom: 1px solid;
    }
  }
  @media ${device.downLaptop} {
    text-align: right;
    ul {
      flex-direction: column;
      text-align: right;
      padding-right: 15px;
      a {
        display: block;
        height: 50px;
        line-height: 50px;
        font-weight: 700;
        color: ${props => props.theme.primary};
        transition: 0.2s all ease;
        touch-action: manipulation;
      }
      a:hover {
        color: ${props => props.theme.linkHeader};
        transition: 0.2s all ease;
      }
      .active {
        max-height: 500px;
      }
    }
    li {
      display: inline-block;
      border-bottom: solid 1px rgb(0, 0, 0, 0.2);
      ul {
        max-height: 0;
        background-color: transparent;
        transition: all 0.5s ease;
        overflow: hidden;
        & > :last-child {
          border-bottom: none;
        }
        li {
          font-size: 0.9em;
        }
      }
    }
  }
  @media ${device.laptop} {
    font-weight: 600;
    li {
      display: inline-block;
      position: relative;
      & > ul {
        display: none;
        position: absolute;
        background-color: ${props => props.theme.background};
        right: 0;
        padding: 10px;
        li {
          font-size: 0.85em;
          a {
            text-align: right;
          }
          display: block;
          padding: 5px 10px;
        }
      }
    }
    & > ul > :not(:last-child) {
      margin-right: 40px;
    }
    li:hover {
      ul {
        display: block;
      }
    }
    a {
      display: block;
      color: ${props => props.theme.linkHeader};
      transition: 0.2s all ease;
    }
    a:hover {
      transition: 0.2s all ease;
      color: ${props => props.theme.primary};
    }
  }
`;
