import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import useTabOutline from './hooks/useTabOutline';
import { GlobalStyle, globalTheme } from './App.styles';
import ScrollToTop from './utils/ScrollToTop';
import ContentSuspense from './components/ContentSuspense';
import { ModalsProvider } from './shared/context/ModalsContext';
// import json from './test.json';

// import Topbar from './components/Topbar';
// import Footer from './components/Footer';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import About from './pages/About';
// import Content from './pages/Content';

const Topbar = lazy(() => import('./components/Topbar'));
const Footer = lazy(() => import('./components/Footer'));

const Home = lazy(() => import('./pages/Home'));
const Content = lazy(() => import('./pages/Content'));
const Login = lazy(() => import('./pages/Login'));
const About = lazy(() => import('./pages/About'));
const Legal = lazy(() => import('./pages/Legal'));
const Crud = lazy(() => import('./pages/Writer'));

const App = (): JSX.Element => {
  useTabOutline();
  // React.useEffect(() => {
  //   console.log(json);
  //   console.log(json.key);
  // }, []);
  return (
    <BrowserRouter>
      <HelmetProvider>
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
                <Route exact path='/legal'>
                  <Legal />
                </Route>
                <Route exact path='/crud'>
                  <Crud />
                </Route>
                <Route path='/:id'>
                  <Content />
                </Route>
              </Switch>
              <Footer />
            </Suspense>
          </ThemeProvider>
        </ModalsProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
