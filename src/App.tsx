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

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column-reverse;
// `;

// const FirstItem = styled.div`
//   width: 50px;
//   height: 50px;
//   background: red;
// `;

// const SecondItem = styled.div`
//   width: 50px;
//   height: 50px;
//   background: blue;
// `

// export default () => (
//   <Wrapper>
//     <FirstItem />
//     <SecondItem />
//   </Wrapper>
// );