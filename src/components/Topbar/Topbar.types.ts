interface TopbarProps {
  isSidebarVisible: boolean;
  isSearchVisible: boolean;
  toggleSidebar: () => void;
  toggleSearch: () => void;
  isDeviceMobileOrTablet: boolean;
}

interface TopbarHeaderProps {
  $isSidebarVisible: boolean;
  $isSearchVisible: boolean;
  $isDeviceMobileOrTablet;
}

export type { TopbarProps, TopbarHeaderProps };