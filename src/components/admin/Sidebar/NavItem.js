import React from 'react';
import { useLocation } from 'react-router';
import NavLink from '../../common/NavLink';
import { NavigationItem } from './StyledSidebar';
import { ReactComponent as ArrowIcon } from '../../../assets/images/fi-rr-angle-small-right.svg';

function NavItem({ to = '/', icon, title, children, ...rest }) {
  let { pathname } = useLocation();
  return (
    <NavigationItem>
      <NavLink path={pathname} to={to} {...rest}>
        <span className="nav-menu-icon">{icon}</span>
        <span className="nav-menu-text">{title}</span>
        {children && (
          <span className="nav-menu-arrow">
            <ArrowIcon />
          </span>
        )}
      </NavLink>
      {children}
    </NavigationItem>
  );
}

export default NavItem;
