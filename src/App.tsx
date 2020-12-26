import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useTabOutline from './hooks/useTabOutline';
import { GlobalStyle, globalTheme } from './App.styles';
import ScrollToTop from './utils/ScrollToTop';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Footer from './components/Footer';
import ContentSuspense from './components/ContentSuspense';
import { ModalsProvider } from './shared/context/ModalsContext';
import './App.css';

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

// import React from 'react';
// import styled from 'styled-components';
// import { BrowserRouter } from 'react-router-dom';
// import { GlobalStyle } from './App.styles';
// import Button from './shared/styles/Button.styles';
// import ButtonLink from './shared/styles/ButtonLink.styles';

// const LButton = styled.button`
//   height: 100px;
//   width: 100px;
//   border: 1px solid black;
//   background: white;
// `;

// const LButtonLink = styled.a`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100px;
//   width: 100px;
//   border: 1px solid black;
//   background: white;
// `;

// export default () => (
//   <BrowserRouter>
//     <GlobalStyle />
//     <LButton>lbutton</LButton>
//     <LButtonLink>lbuttonlink</LButtonLink>
//     <Button>button</Button>
//     <ButtonLink to='/'>lbuttonlink</ButtonLink>
//   </BrowserRouter>
// )