import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { BRAND_NAME } from '../../../constants/css';
import { ReactComponent as AlignJustifyIcon } from '../../../assets/images/fi-rr-align-justify.svg';
import { ReactComponent as AlignRightIcon } from '../../../assets/images/fi-rr-align-right.svg';
import { ReactComponent as UserIcon } from '../../../assets/images/fi-rr-user.svg';

import {
  StyledHeaderMobile,
  HeaderContainer,
  HeaderBrand,
  Toolbar,
  HeaderMoblieButton,
} from './StyledHeader';
import {
  toggleSideBar,
  toggleTopbar,
  toggleMenu,
} from '../../../redux/actions/utilsAction';

function HeaderMobile() {
  const dispatch = useDispatch();

  const handleToggleSidebar = (event) => {
    event.preventDefault();
    dispatch(toggleSideBar());
  };

  const handleToggleTopbar = (event) => {
    event.preventDefault();
    dispatch(toggleTopbar());
  };

  const handleToggleMenu = (event) => {
    event.preventDefault();
    dispatch(toggleMenu());
  };

  return (
    <StyledHeaderMobile>
      <HeaderContainer>
        <HeaderBrand>
          <Link to="/admin/dashboard">
            <h2 className="brand-name">{BRAND_NAME}</h2>
          </Link>
        </HeaderBrand>
        <Toolbar>
          <HeaderMoblieButton>
            <AlignRightIcon onClick={handleToggleSidebar} />
          </HeaderMoblieButton>
          <HeaderMoblieButton>
            <AlignJustifyIcon onClick={handleToggleMenu} />
          </HeaderMoblieButton>
          <HeaderMoblieButton>
            <UserIcon onClick={handleToggleTopbar} />
          </HeaderMoblieButton>
        </Toolbar>
      </HeaderContainer>
    </StyledHeaderMobile>
  );
}

export default HeaderMobile;
