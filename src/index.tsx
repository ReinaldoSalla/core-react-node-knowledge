import 'fontsource-source-sans-pro/400-normal.css';
import 'fontsource-source-sans-pro/400-italic.css';
import 'fontsource-source-sans-pro/600-normal.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

serviceWorker.register();