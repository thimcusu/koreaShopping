import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyledSidebar,
  SidebarContainer,
  NavigationList,
  MenuSection,
  SidebarBrand,
} from './StyledSidebar';
import NavItem from './NavItem';
import { BRAND_NAME } from '../../../constants/css';
import { DEVICE_FIXED_SIZE } from '../../../constants/deviceSizes';
import { toggleSideBar } from '../../../redux/actions/utilsAction';
import boxUrl, {
  ReactComponent as BoxIcon,
} from '../../../assets/images/fi-rr-box.svg';
import homeUrl, {
  ReactComponent as HomeIcon,
} from '../../../assets/images/fi-rr-home.svg';
import { ReactComponent as HourglassIcon } from '../../../assets/images/fi-rr-hourglass-end.svg';
import { ReactComponent as SettingIcon } from '../../../assets/images/fi-rr-settings.svg';
import { ReactComponent as ArrowDoubleIcon } from '../../../assets/images/fi-rr-angle-double-left.svg';
import { ReactComponent as DotsIcon } from '../../../assets/images/fi-rr-menu-dots.svg';

function Sidebar() {
  const toggledSidebar = useSelector((state) => state.toggledSidebar);
  const isLaptop = window.innerWidth >= DEVICE_FIXED_SIZE.laptop;
  const [isHover, setIsHover] = useState(false);
  const brandRef = useRef(null);
  let { pathname } = useLocation();
  const dispatch = useDispatch();
  const handleToggleSidebar = (event) => {
    event.preventDefault();
    dispatch(toggleSideBar());
    if (isHover) setTimeout(() => setIsHover(false), 800);
  };
  const handleMouseEnter = (event) => {
    event.preventDefault();
    if (toggledSidebar) return;
    if (isHoverBrandRef(event.target)) return;
    setTimeout(() => setIsHover(true), 200);
  };
  const handleMouseLeave = (event) => {
    event.preventDefault();
    // if (isHoverBrandRef(event.target)){
    //   return;
    // }
    if (isHover) setTimeout(() => setIsHover(false), 50);
  };
  //Detect if otherNode is contained by refNode
  function isHoverBrandRef(hoveredNode) {
    const parentNode = brandRef.current;
    if (parentNode === null) return false;
    return parentNode == hoveredNode || parentNode.contains(hoveredNode);
  }
  const expandedMenu = toggledSidebar || isHover;
  return (
    <StyledSidebar
      className={expandedMenu ? 'expanded' : 'collapsed'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SidebarContainer>
        {isLaptop && (
          <SidebarBrand
            ref={brandRef}
            className={`${isHover ? 'hovered' : ''} ${
              toggledSidebar ? 'toggled' : ''
            }`}
          >
            <Link to="/admin/dashboard">
              <h2 className="brand-name">{BRAND_NAME}</h2>
            </Link>
            <button className="sidebar-toggler" onClick={handleToggleSidebar}>
              <ArrowDoubleIcon />
            </button>
          </SidebarBrand>
        )}
        <NavigationList>
          <NavItem to="/admin" icon={<HomeIcon />} title="Dashboard" />
          <MenuSection>
            <h4>Items</h4>
            <DotsIcon />
          </MenuSection>
          <NavItem
            to="/admin/products"
            icon={<BoxIcon />}
            title="Product"
          ></NavItem>
          <NavItem
            to="/admin/categories"
            icon={<HourglassIcon />}
            title="Category"
          ></NavItem>
          <NavItem
            to="/admin/settings"
            icon={<SettingIcon />}
            title="Setting"
          ></NavItem>
        </NavigationList>
      </SidebarContainer>
    </StyledSidebar>
  );
}

export default Sidebar;
