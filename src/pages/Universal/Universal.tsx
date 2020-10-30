/*
Universal component rendered throughout the whole app.
*/

import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Search from '../../components/Search';
import HomePage from '../../pages/HomePage';
import ContentPage from '../../pages/ContentPage';
import Footer from '../../components/Footer';

const Universal = () => {
  const [isSidebarActive, setisSidebarActive] = useState(false);

  const toggleSidebar = () => setisSidebarActive(!isSidebarActive);

  return (
    <>
      <Topbar 
        isSidebarActive={isSidebarActive}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar 
        isSidebarActive={isSidebarActive}
        toggleSidebar={toggleSidebar}
      />
      <Search />
      <Switch>
        <Route exact path='/'>
          <HomePage isSidebarActive={isSidebarActive} />
        </Route>
        <Route path='/rendering'>
          <ContentPage isSidebarActive={isSidebarActive} />
        </Route>
      </Switch>      
      <Footer isSidebarActive={isSidebarActive} />
    </>
  );
};

export default Universal;

