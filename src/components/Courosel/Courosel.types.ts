import COUROSEL_CONSTANTS from './Courosel.constants';

interface CouroselState {
	index: number;
	isTimerEnabled: boolean;
}

interface MoveToNextItem {
	type: typeof COUROSEL_CONSTANTS.MOVE_TO_NEXT_ITEM;
}

interface MoveToFirstItem {
	type: typeof COUROSEL_CONSTANTS.MOVE_TO_FIRST_ITEM;
}

interface MoveToSecondItem {
	type: typeof COUROSEL_CONSTANTS.MOVE_TO_SECOND_ITEM;
}

interface MoveToThirdItem {
	type: typeof COUROSEL_CONSTANTS.MOVE_TO_THIRD_ITEM;
}

type CouroselAction =
	| MoveToNextItem
	| MoveToFirstItem
	| MoveToSecondItem
	| MoveToThirdItem

interface CouroselWrapperProps {
	disabled: boolean
}

export type {
	CouroselState,
	CouroselAction,
	CouroselWrapperProps
};