interface SearchProps {
  isTopbarSearchVisible: boolean;
  toggleTopbarSearch: () => void;
}

interface SearchWrapperProps {
  $scroll: boolean;
}

export type { SearchProps, SearchWrapperProps };
