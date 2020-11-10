import React, { useReducer, useEffect } from 'react';
import { useSpring, useTransition } from 'react-spring';
import { CarouselWrapper } from './Carousel.styles';
import CarouselInput from '../CarouselInput';
import CarouselItems from '../CarouselItems';
import CarouselBackground from '../CarouselBackground';
import CarouselInitialState from './Carousel.init';
import { 
  CarouselTransitionProps,
  getCarouselSpring 
} from './Carousel.animations';
import CarouselReducer from './Carousel.reducer';
import Carousel_CONSTANTS from './Carousel.constants';
import useDocumentVisibility from '../../hooks/useDocumentVisibility';

const Carousel = ({
  scrollToJavascript,
  scrollToReact,
  scrollToNode,
  isSidebarVisible,
  closeSidebar
}) => {
  const [state, dispatch] = useReducer(CarouselReducer, CarouselInitialState);
  const transitions = useTransition(state.index, null, {
    ...CarouselTransitionProps,
    order: ['leave', 'enter', 'update']
  });
  const isDocumentVisible: boolean = useDocumentVisibility();

  const handleFirstClick = () => {
    dispatch({ type: Carousel_CONSTANTS.MOVE_TO_FIRST_ITEM });
  };

  const handleSecondClick = () => {
    dispatch({ type: Carousel_CONSTANTS.MOVE_TO_SECOND_ITEM});
  };

  const handleThirdClick = () => {
    dispatch({ type: Carousel_CONSTANTS.MOVE_TO_THIRD_ITEM });
  };

  useEffect(() => {
    const handleNextItem = () => {
      dispatch({ type: Carousel_CONSTANTS.MOVE_TO_NEXT_ITEM });
    };

    if (isDocumentVisible) {
      const intervalId = setInterval(() => {
        handleNextItem();
      }, Carousel_CONSTANTS.DURATION);
      return () => clearInterval(intervalId);
    }
  });

  const CarouselSpring = useSpring(getCarouselSpring(isSidebarVisible));

  return (
    <>
      <CarouselBackground />
      <CarouselWrapper 
        style={CarouselSpring}
        onClick={closeSidebar}
      >
        {transitions.map(({ item, props, key }) => {
          const Item = CarouselItems[item];
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
        <CarouselInput 
          handleFirstClick={handleFirstClick}
          handleSecondClick={handleSecondClick}
          handleThirdClick={handleThirdClick}
          index={state.index}
          isSidebarVisible={isSidebarVisible}
        />
      </CarouselWrapper>
    </>
  );
};

export default Carousel;