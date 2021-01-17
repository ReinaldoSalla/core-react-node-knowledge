import getScrollbarWidth from '../../../utils/getScrollbarWidth';

const isScrollbarVisible = getScrollbarWidth() > 0;

const initialState = {
  isScrollbarVisible,
  isTopbarSidebarVisible: false,
  isTopbarSearchVisible: true
};

export default initialState;