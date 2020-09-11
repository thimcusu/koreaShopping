import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import {
  StyleHeader,
  HeaderContainer,
  HeaderExtra,
  MainNavigation,
  HeaderLogo,
  WrapperHeader,
  WrapperHeaderContent,
} from "./StyleHeader";
import iconCart from "../../../images/shopping.svg";
import iconSearch from "../../../images/search.svg";
import { categories } from "../../../utils/category";

const Header = () => {
  const headerRef = useRef();
  const [isDropDown, setIsDropDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleResizeHeader);
    return () => {
      window.removeEventListener("scroll", handleResizeHeader);
    };
  }, []);

  const handleResizeHeader = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 100) headerRef.current.classList.add("scrolled");
    else headerRef.current.classList.remove("scrolled");
  };

  const toggleMenu = event => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropDown = event => {
    event.preventDefault();
    setIsDropDown(!isDropDown);
  };

  return (
    <StyleHeader>
      <WrapperHeader>
        <HeaderContainer ref={headerRef}>
          <HeaderLogo>
            <NavLink to="/">Sublime.</NavLink>
          </HeaderLogo>
          <WrapperHeaderContent className={`${isMenuOpen ? "active" : ""}`}>
            <div className="menu_close" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <MainNavigation>
              <ul>
                <li onClick={toggleDropDown}>
                  <NavLink to="/">Home</NavLink>
                  <ul className={`${isDropDown ? "active" : ""}`}>
                    <li>
                      <NavLink to={`/category`}>Categories</NavLink>
                    </li>
                    <li>
                      <NavLink to={`/cart`}>Cart</NavLink>
                    </li>
                    <li>
                      <NavLink to={`/contact`}>Contact</NavLink>
                    </li>
                  </ul>
                </li>
                {categories.map(category => (
                  <li key={category.id}>
                    <NavLink to={`/category/${category.slug}`}>
                      {category.name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </MainNavigation>
            <div className="social_media">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </WrapperHeaderContent>
          <HeaderExtra>
            <div className="cart">
              <NavLink to="/cart">
                <img src={iconCart} alt="Shopping" />
                <div>
                  <span>Cart(0)</span>
                </div>
              </NavLink>
            </div>
            <div className="search-input">
              <img src={iconSearch} alt="Search" />
            </div>
          </HeaderExtra>
          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </HeaderContainer>
      </WrapperHeader>
    </StyleHeader>
  );
};

export default Header;
