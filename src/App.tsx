import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useTabOutline from './hooks/useTabOutline';
import { GlobalStyle, globalTheme } from './App.styles';
import ScrollToTop from './utils/ScrollToTop';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import ContentSuspense from './components/ContentSuspense';
import { ModalsProvider } from './shared/context/ModalsContext';
import './App.css';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import About from './pages/About';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const About = lazy(() => import('./pages/About'));
const Content = lazy(() => import('./pages/Content'));

const App = (): JSX.Element => {
  useTabOutline();

  return (
    <BrowserRouter>
      <ModalsProvider>
        <ThemeProvider theme={globalTheme}>
          <GlobalStyle />
          <ScrollToTop />
          <Suspense fallback={<ContentSuspense />}>
            <Topbar />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route path='/:id'>
                <Content />
              </Route>
            </Switch>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </ModalsProvider>
    </BrowserRouter>
  );
};

export default App;