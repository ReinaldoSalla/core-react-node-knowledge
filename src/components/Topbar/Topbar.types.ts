interface TopbarProps {
  isTopbarSidebarVisible: boolean;
  isTopbarSearchVisible: boolean;
  toggleTopbarSidebar: () => void;
  toggleTopbarSearch: () => void;
  isDeviceMobileOrTablet: boolean;
}

interface HeaderProps {
  $isTopbarSidebarVisible: boolean;
  $isTopbarSearchVisible: boolean;
  $isScrollbarVisible: boolean;
}

export type { TopbarProps, HeaderProps };
