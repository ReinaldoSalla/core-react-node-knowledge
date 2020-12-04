import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle, globalTheme } from './App.styles';
import Topbar from './components/Topbar';
import Search from './components/Search';
import Home from './pages/Home';
import Content from './pages/Content';
import Footer from './components/Footer';
import isMobileOrTablet from './utils/isMobileOrTablet';
import './App.css';

const isDeviceMobileOrTablet = isMobileOrTablet(navigator.userAgent);

const App = (): JSX.Element => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSidebar = (): void => {
    if (isSearchVisible) {
      setIsSearchVisible(false);
    }
    if (!isSidebarVisible) {
      document.body.style.overflowY = 'hidden';
      if (!isDeviceMobileOrTablet) {
        document.body.style.width = 'calc(100% - 17px)';
      }
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.width = '100%';
    }
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = (): void => {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
    setIsSidebarVisible(false);
  };

  const toggleSearch = (): void => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    }
    if (!isSearchVisible) {
      document.body.style.overflowY = 'hidden';
      if (!isDeviceMobileOrTablet) {
        document.body.style.width = 'calc(100% - 17px)';
      }
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.width = '100%';
    }
    setIsSearchVisible(!isSearchVisible);  
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={globalTheme}>
        <GlobalStyle />
          <Topbar 
            isSidebarVisible={isSidebarVisible}
            isSearchVisible={isSearchVisible}
            toggleSidebar={toggleSidebar}
            toggleSearch={toggleSearch}
            isDeviceMobileOrTablet={isDeviceMobileOrTablet}
        />
        <Search
          isSearchVisible={isSearchVisible}
          toggleSearch={toggleSearch}
        />
        <Switch>
          <Route exact path='/'>
            <Home
              isSidebarVisible={isSidebarVisible} 
              closeSidebar={closeSidebar}
            />
          </Route>
          <Route path='/rendering'>
            <Content 
              isSidebarVisible={isSidebarVisible} 
              closeSidebar={closeSidebar}  
            />
          </Route>
        </Switch>      
        <Footer 
          isSidebarVisible={isSidebarVisible} 
          closeSidebar={closeSidebar}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;