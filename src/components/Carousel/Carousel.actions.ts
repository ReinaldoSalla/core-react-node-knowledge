import CONSTANTS from './Carousel.constants';
import { CarouselState } from './Carousel.types';

const moveToNextItem = (state: CarouselState): CarouselState => {
  let newIndex = state.index + 1;
  if (newIndex === CONSTANTS.LENGTH) {
    newIndex = 0;
  }
  return {
    index: newIndex,
    isTimerEnabled: true
  };
};

const moveToFirstItem = (): CarouselState => ({
  index: 0,
  isTimerEnabled: false
});

const moveToSecondItem = (): CarouselState => ({
  index: 1,
  isTimerEnabled: false
});

const moveToThirdItem = (): CarouselState => ({
  index: 2,
  isTimerEnabled: false
});

export {
  moveToNextItem,
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem
};