interface TopbarProps {
  isSidebarVisible: boolean;
  isSearchVisible: boolean;
  toggleSidebar: () => void;
  toggleSearch: () => void;
  isDeviceMobileOrTablet: boolean;
}

interface HeaderProps {
  $isSidebarVisible: boolean;
  $isSearchVisible: boolean;
  $isScrollbarVisible: boolean;
}

export type { TopbarProps, HeaderProps };