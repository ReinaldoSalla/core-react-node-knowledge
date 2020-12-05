import CONSTANTS from './Carousel.constants';

interface CarouselState {
	index: number;
	isTimerEnabled: boolean;
}

interface MoveToNextItem {
	type: typeof CONSTANTS.MOVE_TO_NEXT_ITEM;
}

interface MoveToFirstItem {
	type: typeof CONSTANTS.MOVE_TO_FIRST_ITEM;
}

interface MoveToSecondItem {
	type: typeof CONSTANTS.MOVE_TO_SECOND_ITEM;
}

interface MoveToThirdItem {
	type: typeof CONSTANTS.MOVE_TO_THIRD_ITEM;
}

type CarouselAction =
	| MoveToNextItem
	| MoveToFirstItem
	| MoveToSecondItem
	| MoveToThirdItem

interface WrapperProps {
	$isSidebarVisible: boolean;
}

export type {
  CarouselState,
  CarouselAction,
	WrapperProps
};