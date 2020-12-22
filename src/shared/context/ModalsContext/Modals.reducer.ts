import {
  navigateToHome,
  navigateToLogin,
  toggleTopbarSidebar,
  toggleTopbarSearch
} from './Modals.actions';
import { State, Action } from './Modals.types';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
  case 'NAVIGATE_TO_HOME':
    return navigateToHome(state, action.payload);
  case 'NAVIGATE_TO_LOGIN':
    return navigateToLogin(state);
  case 'TOGGLE_TOPBAR_SIDEBAR':
    return toggleTopbarSidebar(state);
  case 'TOGGLE_TOPBAR_SEARCH':
    return toggleTopbarSearch(state);
  default:
    return state;
  }
};

export default reducer;