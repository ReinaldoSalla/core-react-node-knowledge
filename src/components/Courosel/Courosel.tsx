import React, { useReducer, useEffect } from 'react';
import { useSpring, useTransition } from 'react-spring';
import { CouroselWrapper } from './Courosel.styles';
import CouroselInput from '../CouroselInput';
import couroselItems from '../CouroselItems';
import CouroselBackground from '../CouroselBackground';
import couroselInitialState from './Courosel.init';
import { 
  couroselTransitionProps,
  getCouroselSpring 
} from './Courosel.animations';
import couroselReducer from './Courosel.reducer';
import COUROSEL_CONSTANTS from './Courosel.constants';
import useDocumentVisibility from '../../hooks/useDocumentVisibility';

const Courosel = ({
  scrollToJavascript,
  scrollToReact,
  scrollToNode,
  isSidebarVisible,
  closeSidebar
}) => {
  const [state, dispatch] = useReducer(couroselReducer, couroselInitialState);
  const transitions = useTransition(state.index, null, {
    ...couroselTransitionProps,
    order: ['leave', 'enter', 'update']
  });
  const isDocumentVisible: boolean = useDocumentVisibility();

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

  const couroselSpring = useSpring(getCouroselSpring(isSidebarVisible));

  return (
    <>
      <CouroselBackground />
      <CouroselWrapper 
        style={couroselSpring}
        onClick={closeSidebar}
      >
        {transitions.map(({ item, props, key }) => {
          const Item = couroselItems[item];
            return (
              <Item 
                key={key}
                style={props}
                scrollToJavascript={scrollToJavascript}
                scrollToReact={scrollToReact}
                scrollToNode={scrollToNode}
              />
            );
        })}
        <CouroselInput 
          handleFirstClick={handleFirstClick}
          handleSecondClick={handleSecondClick}
          handleThirdClick={handleThirdClick}
          index={state.index}
          isSidebarVisible={isSidebarVisible}
        />
      </CouroselWrapper>
    </>
  );
};

export default Courosel;