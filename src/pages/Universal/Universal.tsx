/*
Universal component rendered throughout the whole app.
*/

import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import RouteParser from '../../routes/RouteParser';
import routesConfig from '../../routes/routes-config';

const Universal = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  const spring = useSpring({
    from: { opacity: 0.5 },
    to: async (next) => {
      await next({
        to: { opacity: isSidebarVisible ? 0.5 : 1 }
      });
    },
  });

  return (
    <>
      <Topbar 
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar 
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      {routesConfig.map((route, index) => (
        <RouteParser key={index} {...route} />
      ))}
      <Footer />
    </>
  );
};

export default Universal;

