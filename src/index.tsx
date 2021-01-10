import 'fontsource-source-sans-pro/400-normal.css';
import 'fontsource-source-sans-pro/400-italic.css';
import 'fontsource-source-sans-pro/600-normal.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { hydrate } from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

// const root = document.getElementById('root');
// hydrate(<App />, root);

serviceWorker.register();