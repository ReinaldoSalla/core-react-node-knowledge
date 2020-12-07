import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle, globalTheme } from './App.styles';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Content from './pages/Content';
import Footer from './components/Footer';
import isMobileOrTablet from './utils/isMobileOrTablet';
import { ModalsProvider } from './shared/context';
import './App.css';

const isDeviceMobileOrTablet = isMobileOrTablet(navigator.userAgent);

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ModalsProvider>
        <ThemeProvider theme={globalTheme}>
          <GlobalStyle />
          <Topbar isDeviceMobileOrTablet={isDeviceMobileOrTablet}/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/rendering'>
              <Content/>
            </Route>
          </Switch>      
          <Footer/>
        </ThemeProvider>
      </ModalsProvider>
    </BrowserRouter>
  );
};

export default App;