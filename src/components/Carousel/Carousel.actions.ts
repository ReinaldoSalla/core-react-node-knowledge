import CONSTANTS from './Carousel.constants';
import { CarouselState } from './Carousel.types';

const moveToNextItem = (state: CarouselState): CarouselState => {
  let newIndex = state.index + 1;
  if (newIndex === CONSTANTS.LENGTH) {
    newIndex = 0;
  }
  return {
    ...state,
    index: newIndex,
    isTimerEnabled: true
  };
};

const moveToFirstItem = (state: CarouselState): CarouselState => ({
  ...state,
  index: 0,
  isTimerEnabled: false
});

const moveToSecondItem = (state: CarouselState): CarouselState => ({
  ...state,
  index: 1,
  isTimerEnabled: false
});

const moveToThirdItem = (state: CarouselState): CarouselState => ({
  ...state,
  index: 2,
  isTimerEnabled: false
});

const toggleMotion = (state: CarouselState): CarouselState => ({
  ...state,
  isMotionEnabled: !state.isMotionEnabled
});

export {
  moveToNextItem,
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem,
  toggleMotion
};