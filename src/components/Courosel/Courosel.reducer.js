import CONSTANTS from './Courosel.constants';
import {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem,
  activateButtons,
  deactivateButtons
} from './Courosel.actions';

const couroselReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.MOVE_TO_FIRST_ITEM:
      return moveToFirstItem(state);
    case CONSTANTS.MOVE_TO_SECOND_ITEM:
      return moveToSecondItem(state);
    case CONSTANTS.MOVE_TO_THIRD_ITEM:
      return moveToThirdItem(state);
    case CONSTANTS.ACTIVATE_BUTTONS:
      return activateButtons(state);
    case CONSTANTS.DEACTIVATE_BUTTONS:
      return deactivateButtons(state);
    default:
      return Error(`Action type '${action.type}' is not defined`);
  }
};

export default couroselReducer;