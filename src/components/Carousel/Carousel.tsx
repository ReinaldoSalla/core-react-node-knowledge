import React, {
  useReducer, useEffect, useContext, useRef, FunctionComponent, useMemo
} from 'react';
import { useTransition } from 'react-spring';
import CarouselWrapper from './Carousel.styles';
import components from './Carousel.mapper';
import initialState from './Carousel.init';
import getTransition from './Carousel.animations';
import reducer from './Carousel.reducer';
import { CarouselProps } from './Carousel.types';
import CONSTANTS from './Carousel.constants';
import CarouselInput from '../CarouselInput';
import useDocumentVisibility from '../../hooks/useDocumentVisibility';
import CarouselBackground from '../CarouselBackground';
import { ModalsState } from '../../shared/context/ModalsContext';

const Carousel: FunctionComponent<CarouselProps> = ({
  scrolls
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const transitions = useTransition(state.index, null, {
    ...getTransition(),
    order: ['leave', 'enter', 'update']
  } as any);
  const isDocumentVisible: boolean = useDocumentVisibility();
  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const seconds = useRef(0);

  useEffect(() => {
    let hasUnmounted = false;
    const intervalId = setInterval(() => {
      seconds.current += 1;
      if (seconds.current === 10) {
        seconds.current = 0;
        if (!hasUnmounted) {
          dispatch({ type: 'MOVE_TO_NEXT_ITEM' });
        }
      }
    }, 1000);
    if (!isDocumentVisible || isTopbarSidebarVisible) {
      seconds.current = 0;
      clearInterval(intervalId);
    }
    return (): void => {
      clearInterval(intervalId);
      hasUnmounted = true;
    };
  }, [isDocumentVisible, isTopbarSidebarVisible]);

  const handleFirstClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_FIRST_ITEM });
    seconds.current = 0;
  };

  const handleSecondClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_SECOND_ITEM });
    seconds.current = 0;
  };

  const handleThirdClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_THIRD_ITEM });
    seconds.current = 0;
  };

  const backgroundMemo = useMemo(() => (
    <CarouselBackground />
  ), []);

  const inputMemo = useMemo(() => (
    <CarouselInput
      index={state.index}
      handleFirstClick={handleFirstClick}
      handleSecondClick={handleSecondClick}
      handleThirdClick={handleThirdClick}
    />
  ), [state.index]);

  return (
    <>
      {backgroundMemo}
      <CarouselWrapper>
        {transitions.map(({ item, props, key }) => {
          const Component = components[item];
          return (
            <Component
              key={key}
              style={props}
              scrolls={scrolls}
              index={item}
            />
          );
        })}
        {inputMemo}
      </CarouselWrapper>
    </>
  );
};

export default Carousel;
