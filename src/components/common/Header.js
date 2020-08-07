import React from "react";
import { NavLink } from "react-router-dom";

import {
  StyleHeader,
  HeaderExtra,
  MainNavigation,
  HeaderLogo,
} from "./StyleHeader";
import iconCart from "../../images/shopping.svg";
import iconSearch from "../../images/search.svg";
import { categories } from "../../utils/category";

const Header = () => {
  return (
    <StyleHeader>
      <HeaderLogo>
        <NavLink to="/">Sublime.</NavLink>
      </HeaderLogo>
      <MainNavigation>
        <ul>
          <li>
            <NavLink to="/">Categories</NavLink>
            <ul>
              {categories.map(category => (
                <li key={`dropdown-${category.id}`}>
                  <NavLink to={`/category/${category.slug}`}>
                    {category.name}
                  </NavLink>
                </li>
              ))}
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
    </StyleHeader>
  );
};

export default Header;
