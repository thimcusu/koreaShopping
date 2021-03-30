import React from 'react';
import { Outlet } from 'react-router-dom';

import WrapperPage from './common/WrapperPage';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import HeaderMoblie from '../../components/admin/Header/HeaderMobile';
import { DEVICE_FIXED_SIZE } from '../../constants/deviceSizes';

function Admin({ children }) {
  return (
    <>
      <Header /> <HeaderMoblie />
      <Sidebar />
      <WrapperPage>
        <Outlet />
      </WrapperPage>
    </>
  );
}

export default Admin;
