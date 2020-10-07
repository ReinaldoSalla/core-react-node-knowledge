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

// import React, { useEffect, useRef } from 'react';

// export default () => {
//   const inputEl: any = useRef(null);
//   useEffect(() => {
//     console.log(inputEl.current.offsetTop);
//     inputEl.current?.focus();
//   })
  
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button>btn</button>
//     </>
//   );
// }