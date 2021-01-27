import {
  navigateToHome,
  navigateToLogin,
  toggleTopbarSidebar,
  toggleTopbarSearch,
  closeTopbarSidebar,
  closeModals
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
  case 'CLOSE_TOPBAR_SIDEBAR':
    return closeTopbarSidebar(state);
  case 'CLOSE_MODALS':
    return closeModals(state);
  default:
    return state;
  }
};

export default reducer;