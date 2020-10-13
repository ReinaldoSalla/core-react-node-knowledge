/*
Universal component rendered throughout the whole app.
*/

import React from 'react';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import RouteParser from '../../routes/RouteParser';
import routesConfig from '../../routes/routes-config';

const Universal = () => {
  return (
    <>
      <Topbar />
      {routesConfig.map((route, index) => (
        <RouteParser key={index} {...route} />
      ))}
      <Footer />
    </>
  );
};

export default Universal;

