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
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSidebar = () => {
    if (isSearchVisible) {
      setIsSearchVisible(false);
    }
    if (!isSidebarVisible) {
      document.body.style.overflowY = 'hidden';
      document.body.style.width = 'calc(100% - 17px)';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.width = '100%';
    }
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
    setIsSidebarVisible(false);
  }

  const toggleSearch = () => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    }
    setIsSearchVisible(!isSearchVisible);  
  }

  return (
    <>
      <Topbar 
        isSidebarVisible={isSidebarVisible}
        isSearchVisible={isSearchVisible}
        toggleSidebar={toggleSidebar}
        toggleSearch={toggleSearch}
      />
      <Sidebar 
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <Search
        isSearchVisible={isSearchVisible}
        toggleSearch={toggleSearch}
      />
      <Switch>
        <Route exact path='/'>
          <HomePage
            isSidebarVisible={isSidebarVisible} 
            closeSidebar={closeSidebar}
          />
        </Route>
        <Route path='/rendering'>
          <ContentPage 
            isSidebarVisible={isSidebarVisible} 
            closeSidebar={closeSidebar}  
          />
        </Route>
      </Switch>      
      <Footer 
        isSidebarVisible={isSidebarVisible} 
        closeSidebar={closeSidebar}
      />
    </>
  );
};

export default Universal;

