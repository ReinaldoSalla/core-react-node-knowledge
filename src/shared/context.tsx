import React, { useReducer, createContext } from 'react';
import getScrollbarWidth from '../utils/getScrollbarWidth';

const isScrollbarVisible = getScrollbarWidth() > 0;

const initialState = {
  isScrollbarVisible,
  isTopbarSidebarVisible: false,
  isTopbarSearchVisible: false
};

const ModalsState = createContext<any>(null);
const ModalsDispatch = createContext<any>(null);

const toggleTopbarSidebar = (state): any => {
  if (!state.isTopbarSidebarVisible) {
    document.body.style.overflowY = 'hidden';
    if (isScrollbarVisible) {
      document.body.style.width = 'calc(100% - 17px)'
    }
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
  }
  return {
    ...state,
    isTopbarSidebarVisible: !state.isTopbarSidebarVisible,
    isTopbarSearchVisible: state.isTopbarSearchVisible ? false : false,
  };
};

const toggleTopbarSearch = (state): any => {
  if (!state.isTopbarSearchVisible) {
    document.body.style.overflowY = 'hidden';
    if (isScrollbarVisible) {
      document.body.style.width = 'calc(100% - 17px)'
    }
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
  }
  return {
    ...state,
    isTopbarSidebarVisible: state.isTopbarSidebarVisible ? false : false,
    isTopbarSearchVisible: !state.isTopbarSearchVisible 
  };
};


const reducer = (state: typeof initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TOPBAR_SIDEBAR':
      return toggleTopbarSidebar(state);
    case 'TOGGLE_TOPBAR_SEARCH':
      return toggleTopbarSearch(state);
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