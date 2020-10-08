/*
Universal component rendered throughout the whole app.
*/

import React from 'react';
import Topbar from '../Universal-components/Topbar/Topbar-component';
import Footer from '../Universal-components/Footer/Footer-component';
import RouteParser from '../../../routes/RouteParser';
import routesConfig from '../../../routes/routes-config';

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

