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

const toggleSidebar = (state): any => {
  if (!state.isSidebarVisible) {
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
    isSidebarVisible: !state.isSidebarVisible,
    isSearchVisible: state.isSearchVisible ? false : false,
  };
};

const toggleSearch = (state): any => {
  if (!state.isSearchVisible) {
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
    isSidebarVisible: state.isSidebarVisible ? false : false,
    isSearchVisible: !state.isSearchVisible 
  };
};

const initialState = {
  isScrollbarVisible,
  isSidebarVisible: false,
  isSearchVisible: false
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