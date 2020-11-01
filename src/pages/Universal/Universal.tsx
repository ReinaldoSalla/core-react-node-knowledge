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
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSidebar = () => setisSidebarActive(!isSidebarActive);
  const toggleSearch = () => setIsSearchActive(!isSearchActive);  

  return (
    <>
      <Topbar 
        isSidebarActive={isSidebarActive}
        isSearchActive={isSearchActive}
        toggleSidebar={toggleSidebar}
        toggleSearch={toggleSearch}
      />
      <Sidebar 
        isSidebarActive={isSidebarActive}
        toggleSidebar={toggleSidebar}
      />
      <Search
        isSearchActive={isSearchActive}
        toggleSearch={toggleSearch}
      />
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

