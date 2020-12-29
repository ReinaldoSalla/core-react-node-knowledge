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

// const Container = styled.div`
//   position: relative;
//   height: 100px;
//   /* border: 1px solid black; */
// `;

// const Line = styled.div`
//   position: relative;
//   z-index: -1;
//   /* z-index: 1; */
//   top: 10px;
//   width: 100%;
//   border-top: 1px solid black;
//   /* opacity: 0.5; */
//   background: rgba(0, 0, 0, 0.1);
// `;

// const Box = styled.div`
//   height: 50px;
//   width: 50px;
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   border: 1px solid black;
//   /* background: transparent; */
//   background:white;
//   filter: alpha(opacity=1);
// `;

// const App = () => (
//   <Container>
//     <Line />
//     <Box />
//   </Container>
// );

// export default App;