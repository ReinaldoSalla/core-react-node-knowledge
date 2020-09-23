import React, { useReducer, useEffect } from 'react';
import CONSTANTS from './Courosel.constants';
import couroselReducer from './Courosel.reducer';
import './Courosel.css';

const Courosel = () => {
  const [state, dispatch] = useReducer(couroselReducer, { 
    firstTime: true,
    pastFirstClick: 'no',
    index: 0 
  });

  // useEffect(() => {
  //   const handleNextItem = () => {
  //     dispatch({ type: ACTION_TYPES.MOVE_TO_NEXT_ITEM });
  //   }

  //   const intervalId = setInterval(() => {
  //     handleNextItem()
  //   }, DURATION);

  //   return () => clearInterval(intervalId)
  // });

  const handleFirstItem = () => {
    dispatch({ type: CONSTANTS.MOVE_TO_FIRST_ITEM });
  };

  const handleSecondItem = () => {
    dispatch({ type: CONSTANTS.MOVE_TO_SECOND_ITEM });
  };

  const handleThirdItem = () => {
    dispatch({ type: CONSTANTS.MOVE_TO_THIRD_ITEM });
  };

  return (
    <div className='courosel'>
      <div style={{ color: 'white' }}>{state.index}</div>


      <div className={`courosel-content${state.index === 0 ? ' courosel-content-keyframes-on' : ' courosel-content-keyframes-off'}`} >
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


      <div className={`courosel-content${state.index === 1 ? ' courosel-content-keyframes-on' : ' courosel-content-keyframes-off'} ${state.firstTime ? ' courosel-content-first-time' : ''} ${state.pastFirstClick === 'almost' && state.index !== 1 ? 'courosel-content-past-first-click-almost' : ''}`}>
        <h1 className='courosel-content-title'>
          React Guides
        </h1>
        <h2 className='courosel-content-description'>
          Modern frontend with the popular facebook library
        </h2>
        <div className='courosel-content-check'>
          <span className='courosel-content-check-text'>
            Check React Tutorials
          </span>
        </div>
      </div>


      <div className={`courosel-content${state.index === 2 ? ' courosel-content-keyframes-on' : ' courosel-content-keyframes-off'} ${state.firstTime ? ' courosel-content-first-time' : ''} ${state.pastFirstClick === 'almost' && state.index !== 2 ? 'courosel-content-past-first-click-almost' : ''}`}>
        <h1 className='courosel-content-title'>
          Node Guides
        </h1>
        <h2 className='courosel-content-description'>
          Dynamic backend structures with Node and GraphQL
        </h2>
        <div className='courosel-content-check'>
          <span className='courosel-content-check-text'>
            Check Node Tutorials
          </span>
        </div>
      </div>
      

      <div className='courosel-select'>
        <div className='courosel-select-inputs'>
          <div 
            className='courosel-select-inputs-input'
            onClick={handleFirstItem}
          >
            <span className='courosel-select-inputs-input-text'>
              JavaScript
            </span>
          </div>
          <div 
            className='courosel-select-inputs-input'
            onClick={handleSecondItem}
          >
            <span className='courosel-select-inputs-input-text'>
              React
            </span>
          </div>
          <div 
            className='courosel-select-inputs-input'
            onClick={handleThirdItem}  
          >
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