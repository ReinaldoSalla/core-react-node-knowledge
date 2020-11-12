import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, globalTheme } from './App.styles';
import Universal from './pages/Universal';
import 'fontsource-source-sans-pro/400-normal.css';
import 'fontsource-source-sans-pro/400-italic.css';
import 'fontsource-source-sans-pro/600-normal.css';

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

// const Wrapper = styled.div`
//   border: 1px solid black;
//   width: 200px;
//   height: 200px;
// `;

// const Text = styled.span`
//   /* width: 64px; */
//   /* height: 64px; */
//   font-size: 64px;
//   border: 1px solid black;
// `;

// export default () => (
//   <>
//     <Wrapper>
//       <svg viewBox="0 0 56 18">
//         <text x="0" y="15">Fit Me</text>
//       </svg>
//     </Wrapper>
//   </>
// );