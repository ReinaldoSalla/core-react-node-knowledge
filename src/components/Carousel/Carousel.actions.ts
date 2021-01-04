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
    isTransitionEnabled: true
  };
};

const moveToFirstItem = (state: CarouselState): CarouselState => ({
  ...state,
  index: 0,
  isTransitionEnabled: false
});

const moveToSecondItem = (state: CarouselState): CarouselState => ({
  ...state,
  index: 1,
  isTransitionEnabled: false
});

const moveToThirdItem = (state: CarouselState): CarouselState => ({
  ...state,
  index: 2,
  isTransitionEnabled: false
});

export {
  moveToNextItem,
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem
};