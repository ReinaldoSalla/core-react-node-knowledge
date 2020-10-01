import CONSTANTS from './Courosel.constants';
import {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem,
  hiddenlyMoveLastItem,
} from './Courosel.actions';

const couroselReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.MOVE_TO_FIRST_ITEM:
      return moveToFirstItem(state);
    case CONSTANTS.MOVE_TO_SECOND_ITEM:
      return moveToSecondItem(state);
    case CONSTANTS.MOVE_TO_THIRD_ITEM:
      return moveToThirdItem(state);
    case CONSTANTS.HIDDENLY_MOVE_LAST_ITEM:
      return hiddenlyMoveLastItem(state);
    default:
      return Error(`Action type '${action.type}' is not defined`);
  }
};

export default couroselReducer;