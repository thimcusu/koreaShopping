import React from 'react';
import { useTranslation } from 'react-i18next';

import { NavPage, NavList, NavItem } from './WrapperPage';
function TopNavPage({ children, list }) {
  const { t } = useTranslation();
  return (
    <NavPage>
      <NavList>
        {list &&
          list.map((e) => (
            <NavItem key={e} role="button">
              {t(e)}
            </NavItem>
          ))}
        {children}
      </NavList>
    </NavPage>
  );
}

export default TopNavPage;
