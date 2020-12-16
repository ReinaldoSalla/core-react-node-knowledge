import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle, globalTheme } from './App.styles';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import { ModalsProvider } from './shared/context/ModalsContext';
import useTabOutline from './hooks/useTabOutline';
import './App.css';
import Home from './pages/Home';
// import Content from './pages/Content';

// const Home = lazy(() => import('./pages/Home'));
const Content = lazy(() => import('./pages/Content'));

const App = (): JSX.Element => {
  useTabOutline();

  return (
    <BrowserRouter>
      <ModalsProvider>
        <ThemeProvider theme={globalTheme}>
          <GlobalStyle />
          <Topbar/>
          <Suspense fallback={<div style={{color: 'white', fontSize: '10rem'}}>LOADING</div>}>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/:id'>
                <Content/>
              </Route>
            </Switch>      
            <Footer/>
          </Suspense>
        </ThemeProvider>
      </ModalsProvider>
    </BrowserRouter>
  );
};

export default App;