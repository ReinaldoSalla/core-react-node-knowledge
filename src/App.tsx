import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, globalTheme } from './App.styles';
import Universal from './pages/Universal';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={globalTheme}>
        <GlobalStyle />
        <Universal />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

// import React from 'react';
// import styled from 'styled-components';

// const Box = styled.div`
//   width: 32px;
//   height: 32px;
//   background: black;
//   transition: transform 500ms;

//   &:hover {
//     transform: rotate(90deg) translate(0, -100px);
//   }
// `;

// export default () => (
//   <Box />
// )