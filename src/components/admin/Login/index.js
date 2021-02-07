import React from 'react';

import { ContainerLogin, StyledLogin, TitleLogin } from './StyledLogin';
import LoginForm from './LoginForm';

function AdminLogin() {
  return (
    <StyledLogin>
      <ContainerLogin>
        <TitleLogin>
          <h3>Welcome to KorShop</h3>
        </TitleLogin>
        <LoginForm />
      </ContainerLogin>
    </StyledLogin>
  );
}

export default AdminLogin;
