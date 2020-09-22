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
      <div className='courosel-select'>
        <div className='courosel-select-inputs'>
          <div className='courosel-select-inputs-input'>
            <span className='courosel-select-inputs-input-text'>
              JavaScript
            </span>
          </div>
          <div className='courosel-select-inputs-input'>
            <span className='courosel-select-inputs-input-text'>
              React
            </span>
          </div>
          <div className='courosel-select-inputs-input'>
            <span className='courosel-select-inputs-input-text'>
              Node
            </span>
          </div>
        </div>
        <div className='courosel-select-timer'>
          <div className='courosel-select-timer-row' />
        </div>
      </div>

    </div>    
  );
};

export default Courosel;