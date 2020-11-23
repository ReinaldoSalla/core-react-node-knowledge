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

// import React from 'react';

// export default () => {
//   document.body.style.paddingRight = '500px';
//   return (
//     <div style={{
//       height: '100px',
//       border: '1px solid black'
//     }}/>
//   );
// };
