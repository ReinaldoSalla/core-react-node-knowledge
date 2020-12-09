interface SearchProps {
  isSearchVisible: boolean;
  toggleSearch: () => void;
}

interface SearchWrapperProps {
  $scroll: boolean;
}

export type { SearchProps, SearchWrapperProps };