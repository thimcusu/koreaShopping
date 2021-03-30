import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import routes from './routes';
import { getJwt } from '../utils/jwt';
import useFetchCurrentUser from '../api/useFetchCurrentUser';

const AppRoutes = () => {
  let { pathname } = useLocation();
  let isAdmin = pathname.startsWith('/admin');
  let isAuth = pathname.includes('/auth');
  const routing = useRoutes(routes());

  return (
    <>
      {!isAuth && !isAdmin && <Header path={pathname} />}
      {routing}
      {!isAuth && !isAdmin && <Footer />}
    </>
  );
};

export default AppRoutes;
