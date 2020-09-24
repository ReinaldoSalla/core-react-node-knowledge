import React, { useReducer, useEffect } from 'react';
import CONSTANTS from './Courosel.constants';
import couroselReducer from './Courosel.reducer';
import './Courosel.css';

const computeCN = (targetIndex, lastIndex, currIndex) => {
  switch (targetIndex) {
    case currIndex:
      return 'courosel-content courosel-content-keyframes-in';
    case lastIndex:
      return 'courosel-content courosel-content-keyframes-out';
    default:
      return 'courosel-content courosel-content-keyframes-off';
  }
};

const Courosel = () => {
  const [state, dispatch] = useReducer(couroselReducer, { 
    lastAndCurrIndex: [0, 0]
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
    console.log('deactivate');
    setTimeout(() => {
      console.log('activate');
    }, 2000);
  };

  const handleSecondItem = () => {
    dispatch({ type: CONSTANTS.MOVE_TO_SECOND_ITEM });
  };

  const handleThirdItem = () => {
    dispatch({ type: CONSTANTS.MOVE_TO_THIRD_ITEM });
  };

  const getCN = (targetIndex) => computeCN(
    targetIndex,
    state.lastAndCurrIndex[0],
    state.lastAndCurrIndex[1]
  );

  const javascriptCN = getCN(0);

  const reactCN = getCN(1);

  const nodeCN = getCN(2);

  return (
    <div className='courosel'>
      <div style={{ color: 'white' }}>{state.lastAndCurrIndex}</div>
    

      <div className={javascriptCN}>
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


      <div className={reactCN}>
        <h1 className='courosel-content-title'> 
          React Guides
        </h1>
        <h2 className='courosel-content-description'>
          Modern frontend development with the popular facebook library
        </h2>
        <div className='courosel-content-check'>
          <span className='courosel-content-check-text'>
            Check React Tutorials
          </span>
        </div>
      </div>


      <div className={nodeCN}>
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