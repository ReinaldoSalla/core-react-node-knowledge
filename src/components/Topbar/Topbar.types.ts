export interface TopbarProps {
  isTopbarSidebarVisible: boolean;
  isTopbarSearchVisible: boolean;
  toggleTopbarSidebar: () => void;
  toggleTopbarSearch: () => void;
  isDeviceMobileOrTablet: boolean;
}

export interface HeaderProps {
  $isTopbarSidebarVisible: boolean;
  $isTopbarSearchVisible: boolean;
  $isScrollbarVisible: boolean;
}
