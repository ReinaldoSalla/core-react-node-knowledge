import React, { useReducer, createContext } from 'react';
import isMobileOrTablet from '../utils/isMobileOrTablet';

const ModalsState = createContext<any>(null);
const ModalsDispatch = createContext<any>(null);

const isDeviceMobileOrTablet = isMobileOrTablet(navigator.userAgent);

let nCallsContext = 0;

const toggleSidebar = (state): any => {
  nCallsContext++;
  console.log(`nCalls inside context = ${nCallsContext}`)
  if (!state.isSidebarVisible) {
    document.body.style.overflowY = 'hidden';
    if (!isDeviceMobileOrTablet) {
      document.body.style.width = 'calc(100% - 17px)'
    }
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
  }
  return {
    isSidebarVisible: !state.isSidebarVisible,
    isSearchVisible: state.isSearchVisible ? false : false,
  };
};

const toggleSearch = (state): any => {
  if (!state.isSearchVisible) {
    document.body.style.overflowY = 'hidden';
    if (!isDeviceMobileOrTablet) {
      document.body.style.width = 'calc(100% - 17px)'
    }
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
  }
  return {
    isSidebarVisible: state.isSidebarVisible ? false : false,
    isSearchVisible: !state.isSearchVisible 
  };
};

const initialState = {
  isSidebarVisible: false,
  isSearchVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return toggleSidebar(state);
    case 'TOGGLE_SEARCH':
      return toggleSearch(state);
    default:
      throw new Error(`Action type ${action.type} is undefined`);
  }  
};

const ModalsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (      
    <ModalsState.Provider value={state}>
      <ModalsDispatch.Provider value={dispatch}>
        {children}
      </ModalsDispatch.Provider>
    </ModalsState.Provider>
  );
};

export {
  ModalsState,
  ModalsDispatch,
  ModalsProvider,
};