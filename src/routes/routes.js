import React from 'react';
import { Navigate } from 'react-router-dom';

import AboutPage from '../components/about/AboutPage';
import PageNotFound from '../components/PageNotFound';
import HomePage from '../components/home/HomePage';
import Login from '../components/admin/Login';
import ProtectedAdmin from '../guards/ProtectedAdmin';
import Category from '../components/admin/Category';

const routes = () => [
  { path: '/', element: <HomePage /> },
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: 'admin',
    element: <ProtectedAdmin />,
    children: [
      { path: '/dashboard', element: <div>ADMIN DASHBOARD</div> },
      { path: '/', element: <Navigate to="/admin/dashboard" /> },
      {
        path: 'users',
        children: [
          { path: '/', element: <div>USERS LIST</div> },
          { path: ':id', element: <div>USER DETAILS</div> },
        ],
      },
      {
        path: 'categories',
        children: [
          { path: '/', element: <Category /> },
          { path: ':id', element: <div>Category DETAILS</div> },
        ],
      },
      {
        path: 'user',
        children: [{ path: '/', element: <div>ADD USER</div> }],
      },
    ],
  },
  { path: '/auth/login', element: <Login /> },
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default routes;
