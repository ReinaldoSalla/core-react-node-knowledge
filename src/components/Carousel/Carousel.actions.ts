import CONSTANTS from './Carousel.constants';
import { CarouselState } from './Carousel.types';

const moveToNextItem = (state: CarouselState): CarouselState => {
  let newIndex = state.index + 1;
  if (newIndex === CONSTANTS.LENGTH) {
    newIndex = 0;
  }
  return {
    ...state,
    index: newIndex
  };
};

const moveToFirstItem = (state: CarouselState): CarouselState => ({
  ...state,
  index: 0
});

const moveToSecondItem = (state: CarouselState): CarouselState => ({
  ...state,
  index: 1
});

const moveToThirdItem = (state: CarouselState): CarouselState => ({
  ...state,
  index: 2
});

export {
  moveToNextItem,
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem
};
