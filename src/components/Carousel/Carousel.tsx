import React, {
  useReducer, useEffect, useRef, useContext, FunctionComponent
} from 'react';
import { useTransition } from 'react-spring';
import CarouselWrapper from './Carousel.styles';
import components from './Carousel.mapper';
import initialState from './Carousel.init';
import { carouselTransitionProps } from './Carousel.animations';
import reducer from './Carousel.reducer';
import { CarouselProps } from './Carousel.types';
import CONSTANTS from './Carousel.constants';
import CarouselInput from '../CarouselInput';
import useDocumentVisibility from '../../hooks/useDocumentVisibility';
import Background from '../Background';
import { ModalsState } from '../../shared/context/ModalsContext';

const Carousel: FunctionComponent<CarouselProps> = ({
  scrolls
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const transitions = useTransition(state.index, null, {
    ...carouselTransitionProps,
    order: ['leave', 'enter', 'update']
  } as any);
  const isDocumentVisible: boolean = useDocumentVisibility();
  const videoDomNode = useRef<any>(null);
  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const handleFirstClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_FIRST_ITEM });
  };

  const handleSecondClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_SECOND_ITEM });
  };

  const handleThirdClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_THIRD_ITEM });
  };

  const handleToggleMotion = (): void => {
    dispatch({ type: CONSTANTS.TOGGLE_MOTION });
  };

  useEffect(() => {
    const handleNextItem = (): void => {
      dispatch({ type: CONSTANTS.MOVE_TO_NEXT_ITEM });
    };
    if (isDocumentVisible && !isTopbarSidebarVisible) {
      const intervalId = setInterval(() => {
        handleNextItem();
      }, CONSTANTS.DURATION);
      return (): void => {
        clearInterval(intervalId);
      };
    }
    return undefined;
  });

  return (
    <>
      <Background videoDomNode={videoDomNode} />
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
          handleToggleMotion={handleToggleMotion}
        />
      </CarouselWrapper>
    </>
  );
};

export default Carousel;