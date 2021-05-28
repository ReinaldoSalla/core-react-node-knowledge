import { State } from './Modals.types';

const navigateToHome = (state: State, pathname: string): State => {
  if (state.isTopbarSidebarVisible || state.isTopbarSearchVisible) {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
  }
  if (pathname === '/' && window.pageYOffset === 0) {
    window.location.reload();
  } else if (pathname === '/') {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, left: 0 });
  }
  return {
    ...state,
    isTopbarSidebarVisible: false,
    isTopbarSearchVisible: false
  };
};

const navigateToLogin = (state: State): State => {
  if (state.isTopbarSidebarVisible || state.isTopbarSearchVisible) {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
  }
  return {
    ...state,
    isTopbarSidebarVisible: false,
    isTopbarSearchVisible: false
  };
};

const toggleTopbarSidebar = (state: State): State => {
  if (!state.isTopbarSidebarVisible) {
    document.body.style.overflowY = 'hidden';
    if (state.isScrollbarVisible) {
      document.body.style.width = 'calc(100% - 17px)';
    }
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
  }
  return {
    ...state,
    isTopbarSidebarVisible: !state.isTopbarSidebarVisible,
    isTopbarSearchVisible: false
  };
};

const toggleTopbarSearch = (state: State): State => {
  if (!state.isTopbarSearchVisible) {
    document.body.style.overflowY = 'hidden';
    if (state.isScrollbarVisible) {
      document.body.style.width = 'calc(100% - 17px)';
    }
  } else {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
  }
  return {
    ...state,
    isTopbarSidebarVisible: false,
    isTopbarSearchVisible: !state.isTopbarSearchVisible
  };
};

const closeTopbarSidebar = (state: State): State => {
  if (state.isTopbarSidebarVisible) {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
  }
  return {
    ...state,
    isTopbarSidebarVisible: false
  };
};

const closeModals = (state: State): State => {
  if (state.isTopbarSidebarVisible || state.isTopbarSearchVisible) {
    document.body.style.overflowY = 'auto';
    document.body.style.width = '100%';
  }
  return {
    ...state,
    isTopbarSidebarVisible: false,
    isTopbarSearchVisible: false
  };
};

export {
  navigateToHome,
  navigateToLogin,
  toggleTopbarSidebar,
  closeTopbarSidebar,
  toggleTopbarSearch,
  closeModals
};
