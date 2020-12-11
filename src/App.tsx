import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle, globalTheme } from './App.styles';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Content from './pages/Content';
import Footer from './components/Footer';
import { ModalsProvider } from './shared/context/ModalsContext';
import './App.css';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ModalsProvider>
        <ThemeProvider theme={globalTheme}>
          <GlobalStyle />
          <Topbar/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/:id'>
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