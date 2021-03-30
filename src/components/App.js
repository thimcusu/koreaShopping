import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import AppRoutes from '../routes';

import { theme, GlobalStyle } from './globalStyles';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import configureStore from '../redux/configureStore';

const store = configureStore();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <AppRoutes />
          <ToastContainer autoClose={3000} hideProgressBar />
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
