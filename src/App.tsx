import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, globalTheme } from './App.styles';
import Universal from './pages/Universal';
import 'fontsource-source-sans-pro';
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

// export default () => (
//   <div style={{ height: '500px', width: '500px', background: 'red' }}>
//     <div style={{ height: 'calc(50% + 50px)', width: '50%', background: 'green' }} />
//   </div>
// )