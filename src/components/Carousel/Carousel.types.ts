import CONSTANTS from './Carousel.constants';

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

export type CarouselAction =
| MoveToNextItem
| MoveToFirstItem
| MoveToSecondItem
| MoveToThirdItem

export interface CarouselState {
	index: number;
	isTimerEnabled: boolean;
}

export interface WrapperProps {
	$isTopbarSidebarVisible: boolean;
}

// export type {
//   CarouselState,
//   CarouselAction,
//   WrapperProps
// };
