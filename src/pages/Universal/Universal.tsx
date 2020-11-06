/*
Universal component rendered throughout the whole app.
*/

import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Search from '../../components/Search';
import HomePage from '../../pages/HomePage';
import ContentPage from '../../pages/ContentPage';
import Footer from '../../components/Footer';

const Universal = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const topRef: any = useRef();

  const toggleSidebar = () => {
    if (!isSidebarActive) {
      if (document.documentElement.scrollTop !== 0) {
        topRef.current = document.documentElement.scrollTop;
      } else {
        topRef.current = topRef.current;
      }
    }
    console.log(topRef.current);
    if (!isSidebarActive) {
      setIsSidebarActive(true);
      document.body.style.overflowY = 'scroll';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${topRef.current}px`;
    } else {
      setIsSidebarActive(false);
      document.body.style.overflowY = 'auto';
      document.body.style.position = 'static';
      document.body.style.top = '';
      window.scrollTo({ top: topRef.current, left: 0 });
    }
  };

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

