import { State } from './Modals.types';

const goToHome = (state: State, pathname: any): State => {
  if (pathname === '/' && window.pageYOffset === 0) {
    window.location.reload();
  } else if (pathname === '/') {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, left: 0 });
  }
  return {
    ...state,
  }
};

const toggleTopbarSidebar = (state: State): State => {
  if (!state.isTopbarSidebarVisible) {
    document.body.style.overflowY = 'hidden';
    if (state.isScrollbarVisible) {
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

const toggleTopbarSearch = (state: State): State => {
  if (!state.isTopbarSearchVisible) {
    document.body.style.overflowY = 'hidden';
    if (state.isScrollbarVisible) {
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

export { toggleTopbarSidebar, toggleTopbarSearch};