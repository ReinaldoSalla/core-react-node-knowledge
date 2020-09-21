import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Universal from './pages/Universal';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Universal />
    </BrowserRouter>
  );
};

export default App;

// import React from 'react';
// import './App.css';

// export default () => (
//   <main>
//     <div className='test' />
//     <div className='test2' />
//   </main>
// );