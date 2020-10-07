import React, { useState, useReducer, useEffect } from 'react';
import { useTransition } from 'react-spring';
import { CouroselWrapper } from './Courosel.styles';
import CouroselInput from './Courosel-subcomponents/CouroselInput';
import couroselInitialState from './Courosel.init';
import { couroselTransitionProps } from './Courosel.animations';
import couroselReducer from './Courosel.reducer';
import COUROSEL_CONSTANTS from './Courosel.constants';
import couroselItems from './Courosel-subcomponents/CouroselItems';
import useDocumentVisibility from '../../custom-hooks/document-visibility';

let nCalls = 0;

const Courosel = () => {
  const [state, dispatch] = useReducer(couroselReducer, couroselInitialState);
  const transitions = useTransition(state.index, null, {
    ...couroselTransitionProps,
    order: ['leave', 'enter', 'update']
  });
  const isDocumentVisible: boolean = useDocumentVisibility();
  nCalls++;
  console.log(nCalls);
  console.log(isDocumentVisible);

  const handleFirstClick = () => {
    dispatch({ type: COUROSEL_CONSTANTS.MOVE_TO_FIRST_ITEM });
  };

  const handleSecondClick = () => {
    dispatch({ type: COUROSEL_CONSTANTS.MOVE_TO_SECOND_ITEM});
  };

  const handleThirdClick = () => {
    dispatch({ type: COUROSEL_CONSTANTS.MOVE_TO_THIRD_ITEM });
  };

  useEffect(() => {
    const handleNextItem = () => {
      dispatch({ type: COUROSEL_CONSTANTS.MOVE_TO_NEXT_ITEM });
    };

    if (isDocumentVisible) {
      const intervalId = setInterval(() => {
        handleNextItem();
      }, COUROSEL_CONSTANTS.DURATION);
      return () => clearInterval(intervalId);
    }
  });

  return (
    <CouroselWrapper>
      {transitions.map(({ item, props, key }) => {
        const Item = couroselItems[item];
          return (
            <Item 
              key={key}
              style={props}
            />
          )
      })}
      <CouroselInput 
        handleFirstClick={handleFirstClick}
        handleSecondClick={handleSecondClick}
        handleThirdClick={handleThirdClick}
        index={state.index}
      />
    </CouroselWrapper>
  );
};

export default Courosel;