import React, {
  useReducer, useEffect, useContext, useRef, FunctionComponent
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

  const timer = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isDocumentVisible) {
        timer.current += 1;
      }
      if (timer.current === 10 && isDocumentVisible) {
        timer.current = 0;
        dispatch({ type: 'MOVE_TO_NEXT_ITEM' });
      }
    }, 1000);
    if (!isDocumentVisible) {
      timer.current = 0;
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isDocumentVisible]);

  const handleFirstClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_FIRST_ITEM });
    timer.current = 0;
  };

  const handleSecondClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_SECOND_ITEM });
    timer.current = 0;
  };

  const handleThirdClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_THIRD_ITEM });
    timer.current = 0;
  };

  useEffect(() => {
    // if (isDocumentVisible && !isTopbarSidebarVisible) {
    //   const intervalId = setInterval(() => {
    //     dispatch({ type: CONSTANTS.MOVE_TO_NEXT_ITEM });
    //   }, CONSTANTS.DURATION);
    //   return (): void => {
    //     clearInterval(intervalId);
    //   };
    // }
    // return undefined;
    // const intervalId = setInterval(() => {
    //   if (isDocumentVisible && !isTopbarSidebarVisible) {
    //     dispatch({ type: CONSTANTS.MOVE_TO_NEXT_ITEM });
    //   }
    // }, CONSTANTS.DURATION);
    // return (): void => clearInterval(intervalId);
  }, [isDocumentVisible, isTopbarSidebarVisible]);

  // const numRenders = useRef(0);

  useEffect(() => {
    // console.log(`Carousel re-render #${numRenders.current++}`);
  });

  return (
    <>
      <CarouselBackground />
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
        <CarouselInput
          index={state.index}
          isMotionEnabled={state.isMotionEnabled}
          handleFirstClick={handleFirstClick}
          handleSecondClick={handleSecondClick}
          handleThirdClick={handleThirdClick}
        />
      </CarouselWrapper>
    </>
  );
};

export default Carousel;