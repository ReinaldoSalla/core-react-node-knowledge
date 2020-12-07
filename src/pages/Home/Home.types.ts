interface HomeProps {
  isSidebarVisible: boolean;
}

interface ContainerProps {
  $isSidebarVisible: boolean;
  $fixedHeight?: boolean; 
}

export type {
  HomeProps, 
  ContainerProps,
}; 