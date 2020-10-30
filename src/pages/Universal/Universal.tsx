/*
Universal component rendered throughout the whole app.
*/

import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import HomePage from '../../pages/HomePage';
import ContentPage from '../../pages/ContentPage';
import Footer from '../../components/Footer';

const Universal = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

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
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/rendering'>
          <ContentPage />
        </Route>
      </Switch>      
      <Footer isSidebarVisible={isSidebarVisible} />
    </>
  );
};

export default Universal;

