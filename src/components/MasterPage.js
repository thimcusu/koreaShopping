import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { MasterContainerPage, ProgressionBar } from './home/StyledHome';

const MasterPage = () => {
  return (
    <div className="app">
      <MasterContainerPage>
        <Outlet />
      </MasterContainerPage>
    </div>
  );
};

export default MasterPage;
