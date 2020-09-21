import React from 'react';
import './Courosel.css';

const Courosel = () => {
  return (
    <div className='courosel'>
      <h1 className='courosel-title'>
        JavaScript Guides
      </h1>
      <h2 className='courosel-description'>
        From data processing to asyncronous programming
      </h2>
      <div className='courosel-check'>
        <span className='courosel-check-text'>
          Check JavaScript Tutorials
        </span>
      </div>
      <div className='courosel-inputs'>
        <div className='courosel-inputs-timer' />
      </div>
    </div>    
  );
};

export default Courosel;