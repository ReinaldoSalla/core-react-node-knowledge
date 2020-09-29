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

const computeButtonCN = (isButtonActivated) => (
  isButtonActivated
    ? 'courosel-select-inputs-input'
    : 'courosel-select-inputs-input courosel-select-inputs-input-disabled'
);

const computeButtonTextCN = (targetIndex, currIndex) => (
  targetIndex === currIndex 
    ? 'courosel-select-inputs-input-text courosel-select-inputs-input-text-transition'
    : 'courosel-select-inputs-input-text'
);

const computeButtonFillerCN = (targetIndex, currIndex) => (
  targetIndex === currIndex
    ? 'courosel-select-inputs-input-filler courosel-select-inputs-input-filler-transition'
    : 'courosel-select-inputs-input-filler'
);

const Courosel = () => {
  const [state, dispatch] = useReducer(couroselReducer, { 
    indexesStackOrderTwo: [0, 0],
    isFirstButtonActivated: true,
    isSecondButtonActivated: true,
    isThirdButtonActivated: true
  });

  const handleFirstItem = async () => {
    dispatch({ type: CONSTANTS.MOVE_TO_FIRST_ITEM });
  };

  const handleSecondItem = async () => {
    dispatch({ type: CONSTANTS.MOVE_TO_SECOND_ITEM });
  };

  const handleThirdItem = async () => {
    dispatch({ type: CONSTANTS.MOVE_TO_THIRD_ITEM });
  };

  const getCN = (targetIndex) => computeCN(
    targetIndex,
    state.indexesStackOrderTwo[0],
    state.indexesStackOrderTwo[1]
  );

  const javascriptCN = getCN(0);

  const reactCN = getCN(1);

  const nodeCN = getCN(2);

  const javascriptButtonCN = computeButtonCN(state.isFirstButtonActivated);

  const reactButtonCN = computeButtonCN(state.isSecondButtonActivated);

  const nodeButtonCN = computeButtonCN(state.isThirdButtonActivated);

  const javascriptButtonTextCN = computeButtonTextCN(0, state.indexesStackOrderTwo[1]);

  const reactButtonTextCN = computeButtonTextCN(1, state.indexesStackOrderTwo[1]);

  const nodeButtonTextCN = computeButtonTextCN(2, state.indexesStackOrderTwo[1]);

  const javascriptButtonFillerCN = computeButtonFillerCN(0, state.indexesStackOrderTwo[1]);

  const reactButtonFillerCN = computeButtonFillerCN(1, state.indexesStackOrderTwo[1]);

  const nodeButtonFillerCN = computeButtonFillerCN(2, state.indexesStackOrderTwo[1]);

  return (
    <div className='courosel'>
      <div style={{ color: 'white' }}>{state.indexesStackOrderTwo}</div>
    

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
        <div className={`courosel-select-inputs`}>
          <div 
            className={javascriptButtonCN}
            onClick={handleFirstItem}
          >
            <span className={javascriptButtonTextCN}>
              JavaScript
            </span>
            <div className={javascriptButtonFillerCN}/>
          </div>
          <div 
            className={reactButtonCN}
            onClick={handleSecondItem}
          >
            <span className={reactButtonTextCN}>
              React
            </span>
            <div className={reactButtonFillerCN} />
          </div>
          <div 
            className={nodeButtonCN}
            onClick={handleThirdItem}  
          >
            <span className={nodeButtonTextCN}>
              Node
            </span>
            <div className={nodeButtonFillerCN} />
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