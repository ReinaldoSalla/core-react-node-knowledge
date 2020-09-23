import React, { useReducer } from 'react';
import './Courosel.css';

const Courosel = () => {
  // const [state, dispatch] = useReducer(couroselReducer, { index: 0 });
  return (
    <div className='courosel'>
      <div className='courosel-content'>
        <h1 className='courosel-content-title'>
          JavaScript Guides
        </h1>
        <h2 className='courosel-content-description'>
          From data processing to asyncronous programming
        </h2>
        <div className='courosel-content-check'>
          <span className='courosel-content-check-text'>
            Check JavaScript Tutorials
          </span>
        </div>

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