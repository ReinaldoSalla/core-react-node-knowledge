import {
	moveToNextItem,
	moveToFirstItem,
	moveToSecondItem,
	moveToThirdItem,
} from './Carousel.actions';
import Carousel_CONSTANTS from './Carousel.constants';
import { CarouselState, CarouselAction } from './Carousel.types';

const CarouselReducer = (
	state: CarouselState,
	action: CarouselAction
): CarouselState => {
	switch (action.type) {
		case Carousel_CONSTANTS.MOVE_TO_NEXT_ITEM:
			return moveToNextItem(state);
		case Carousel_CONSTANTS.MOVE_TO_FIRST_ITEM:
			return moveToFirstItem();
		case Carousel_CONSTANTS.MOVE_TO_SECOND_ITEM:
			return moveToSecondItem();
		case Carousel_CONSTANTS.MOVE_TO_THIRD_ITEM:
			return moveToThirdItem();
		default:
			return state;
	}
};

export default CarouselReducer;