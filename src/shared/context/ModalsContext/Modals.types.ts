import { ReactNode } from 'react';

export interface State {
  isScrollbarVisible: boolean;
  isTopbarSidebarVisible: boolean;
  isTopbarSearchVisible: boolean;
}

export type Action =
  | { type: 'NAVIGATE_TO_HOME'; payload: string }
  | { type: 'NAVIGATE_TO_LOGIN' }
  | { type: 'TOGGLE_TOPBAR_SIDEBAR' }
  | { type: 'TOGGLE_TOPBAR_SEARCH' }
  | { type: 'CLOSE_MODALS' };

export interface ModalsProviderProps {
  children: ReactNode;
}