import React, { useReducer, useEffect, createContext } from 'react';

const ModalsState = createContext<any>(null);
const ModalsDispatch = createContext<any>(null);

function getScrollbarWidth() {

  // Creating invisible container
  const outer: any = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);
  
  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
    
}

const isScrollbarVisible = getScrollbarWidth() > 0;

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

const initialState = {
  isScrollbarVisible,
  isTopbarSidebarVisible: false,
  isTopbarSearchVisible: false
};

const reducer = (state, action) => {
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