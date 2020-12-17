import { ReactNode } from 'react';

export interface State {
  isScrollbarVisible: boolean;
  isTopbarSidebarVisible: boolean;
  isTopbarSearchVisible: boolean;
}

export type Action =
  | { type: 'TOGGLE_TOPBAR_SIDEBAR' }
  | { type: 'TOGGLE_TOPBAR_SEARCH' }
  | { type: 'NAVIGATE_TO_HOME'; payload: string };

export interface ModalsProviderProps {
  children: ReactNode;
}