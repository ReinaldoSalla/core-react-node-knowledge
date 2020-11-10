import Carousel_CONSTANTS from './Carousel.constants';

interface CarouselState {
	index: number;
	isTimerEnabled: boolean;
}

interface MoveToNextItem {
	type: typeof Carousel_CONSTANTS.MOVE_TO_NEXT_ITEM;
}

interface MoveToFirstItem {
	type: typeof Carousel_CONSTANTS.MOVE_TO_FIRST_ITEM;
}

interface MoveToSecondItem {
	type: typeof Carousel_CONSTANTS.MOVE_TO_SECOND_ITEM;
}

interface MoveToThirdItem {
	type: typeof Carousel_CONSTANTS.MOVE_TO_THIRD_ITEM;
}

type CarouselAction =
	| MoveToNextItem
	| MoveToFirstItem
	| MoveToSecondItem
	| MoveToThirdItem

interface CarouselWrapperProps {
	disabled: boolean
}

export type {
	CarouselState,
	CarouselAction,
	CarouselWrapperProps
};