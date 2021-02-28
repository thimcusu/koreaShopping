import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyledHeader,
  HeaderContainer,
  HeaderMenu,
  HeaderMenuItem,
  TopBar,
} from './StyledHeader';
import Button from '../common/Button';
import Avatar from '../../common/Avatar';
import HeaderMobile from './HeaderMobile';
import DropdownLocales from './DropdownLocales';
import { ReactComponent as AppIcon } from '../../../assets/images/fi-rr-apps.svg';
import { ReactComponent as SearchIcon } from '../../../assets/images/fi-rr-search.svg';
import { ReactComponent as BellIcon } from '../../../assets/images/fi-rr-bell.svg';
import { ReactComponent as ChatIcon } from '../../../assets/images/fi-rr-comment-alt.svg';

function Header() {
  let { pathname } = useLocation();
  const toggledSidebar = useSelector((state) => state.toggledSidebar);
  const toggledTopbar = useSelector((state) => state.toggledTopbar);
  const toggledMenu = useSelector((state) => state.toggledMenu);
  const dispatch = useDispatch();

  return (
    <StyledHeader className={`${toggledSidebar ? 'collapsed' : 'expanded'}`}>
      <HeaderContainer>
        <HeaderMenu className={`${toggledMenu ? 'active' : ''}`}>
          <HeaderMenuItem>
            <Button active>Pages</Button>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Button>Features</Button>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Button>Apps</Button>
          </HeaderMenuItem>
        </HeaderMenu>
        <TopBar className={`${toggledTopbar ? 'active' : ''}`}>
          <HeaderMenuItem>
            <Button>
              <SearchIcon />
            </Button>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Button>
              <BellIcon />
            </Button>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Button>
              <AppIcon />
            </Button>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Button>
              <ChatIcon />
            </Button>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <DropdownLocales />
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Button>
              <span>Hi, </span>
              <span>Boss </span>
              <Avatar text={'B'} />
            </Button>
          </HeaderMenuItem>
        </TopBar>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
