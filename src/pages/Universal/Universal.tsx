/*
Universal component rendered throughout the whole app.
*/

import React, { useState } from 'react';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import RouteParser from '../../routes/RouteParser';
import routesConfig from '../../routes/routes-config';

const Universal = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  return (
    <>
      <Topbar 
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar />
      {routesConfig.map((route, index) => (
        <RouteParser key={index} {...route} />
      ))}
      <Footer />
    </>
  );
};

export default Universal;

