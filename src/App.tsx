import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'fontsource-source-sans-pro/400-normal.css';
import 'fontsource-source-sans-pro/400-italic.css';
import 'fontsource-source-sans-pro/600-normal.css';
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

// import React, { useState, useEffect } from 'react';

// let x;

// const App = () => {
//   const [state, setState] = useState(null);

//   useEffect(() => {
//     console.log(state)
//   }, []);

//   return (
//     <div onClick={() => {}}>div</div>
//   );
// };

// export default App;