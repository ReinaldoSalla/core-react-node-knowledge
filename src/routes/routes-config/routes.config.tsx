import React from 'react';
import Home from '../../pages/Home';
import Content from '../../pages/Content';

const routesConfig = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/rendering',
    component: Content,
  },
];

export default routesConfig;