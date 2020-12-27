import {
  moveToNextItem,
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem,
  toggleMotion
} from './Carousel.actions';
import CONSTANTS from './Carousel.constants';
import { CarouselState, CarouselAction } from './Carousel.types';

const reducer = (
  state: CarouselState,
  action: CarouselAction
): CarouselState => {
  switch (action.type) {
  case CONSTANTS.MOVE_TO_NEXT_ITEM:
    return moveToNextItem(state);
  case CONSTANTS.MOVE_TO_FIRST_ITEM:
    return moveToFirstItem(state);
  case CONSTANTS.MOVE_TO_SECOND_ITEM:
    return moveToSecondItem(state);
  case CONSTANTS.MOVE_TO_THIRD_ITEM:
    return moveToThirdItem(state);
  case CONSTANTS.TOGGLE_MOTION:
    return toggleMotion(state);
  default:
    return state;
  }
};

export default reducer;