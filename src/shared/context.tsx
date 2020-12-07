import React, { useReducer, createContext } from 'react';
import isMobileOrTablet from '../utils/isMobileOrTablet';

const ModalsState = createContext<any>(null);
const ModalsDispatch = createContext<any>(null);

const isDeviceMobileOrTablet = isMobileOrTablet(navigator.userAgent);

const toggleSidebar = (state, hasScrollbar): any => {
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
    ...state, 
    isSidebarVisible: !state.isSidebarVisible,
    isSearchVisible: state.isSearchVisible ? false : false,
  };
};

const toggleSearch = (state, hasScrollbar): any => {
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
    ...state, 
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
      return toggleSidebar(state, action.payload);
    case 'TOGGLE_SEARCH':
      return toggleSearch(state, action.payload);
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