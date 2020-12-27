import React, {
  useReducer, useEffect, useRef, FunctionComponent
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

  const handleFirstClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_FIRST_ITEM });
  };

  const handleSecondClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_SECOND_ITEM });
  };

  const handleThirdClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_THIRD_ITEM });
  };

  useEffect(() => {
    const handleNextItem = (): void => {
      dispatch({ type: CONSTANTS.MOVE_TO_NEXT_ITEM });
    };

    if (isDocumentVisible) {
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
        {transitions.map(({ item, props, key }, index) => {
          const Component = components[item];
          return (
            <Component
              key={key}
              style={props}
              scrolls={scrolls}
              index={index}
            />
          );
        })}
        <CarouselInput
          handleFirstClick={handleFirstClick}
          handleSecondClick={handleSecondClick}
          handleThirdClick={handleThirdClick}
          index={state.index}
        />
      </CarouselWrapper>
    </>
  );
};

export default Carousel;