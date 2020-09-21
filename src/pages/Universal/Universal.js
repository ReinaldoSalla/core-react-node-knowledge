/*
Universal component rendered throughout the whole app.
*/

import React from 'react';
import Topbar from '../../components/Topbar';

const Universal = () => {
  return (
    <>
      <Topbar />
      {new Array(100).fill(0).map((_, index) => (
        <div key={index}>
          content #{index+1}
        </div>
      ))}
    </>
  );
};

export default Universal;

