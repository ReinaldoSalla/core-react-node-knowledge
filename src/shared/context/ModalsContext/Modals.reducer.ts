import { 
  toggleTopbarSidebar,
  toggleTopbarSearch,
  navigateToHome
} from './Modals.actions'; 
import { State, Action } from './Modals.types'; 

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_TOPBAR_SIDEBAR':
      return toggleTopbarSidebar(state);
    case 'TOGGLE_TOPBAR_SEARCH':
      return toggleTopbarSearch(state);
    case 'NAVIGATE_TO_HOME':
      return navigateToHome(state, action.payload);  
    default:
      return state
  }  
};

export default reducer;





