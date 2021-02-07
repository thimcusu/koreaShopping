import React from 'react';

import { HeaderMenuItem } from './StyledHeader';


function HeaderMenuDropdown({icon, title, arrow = false}) {
    return (
        <HeaderMenuItem>
            <a className="menu-link"><span className="menu-text">{title}</span></a>
        </HeaderMenuItem>
    )
}

export default HeaderMenuDropdown;
