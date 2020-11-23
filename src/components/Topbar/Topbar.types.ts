interface TopbarProps {
  isSidebarVisible: boolean;
  isSearchVisible: boolean;
  toggleSidebar: () => void;
  toggleSearch: () => void;
}

interface TopbarHeaderProps {
  $isSidebarVisible: boolean;
}

export type { TopbarProps, TopbarHeaderProps };