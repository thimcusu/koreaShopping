import React from 'react';
import { Link } from 'react-router-dom';

function NavLink({
  to,
  className,
  activeClassName,
  inactiveClassName,
  path,
  ...rest
}) {
  let isActive = path === to;
  let allClassNames =
    (className ? className : '') + (isActive ? 'active' : 'inactive');
  return <Link className={allClassNames} to={to} {...rest} />;
}

export default NavLink;
