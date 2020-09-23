import CONSTANTS from './Courosel.constants';
import {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem
} from './Courosel.actions';

const couroselReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.MOVE_TO_FIRST_ITEM:
      return moveToFirstItem();
    case CONSTANTS.MOVE_TO_SECOND_ITEM:
      return moveToSecondItem();
    case CONSTANTS.MOVE_TO_THIRD_ITEM:
      return moveToThirdItem();
    default:
      return Error(`Action type '${action.type}' is not defined`);
  }
};

export default couroselReducer;