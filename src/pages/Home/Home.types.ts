interface HomeProps {
  isTopbarSidebarVisible: boolean;
}

interface ContainerProps {
  $isTopbarSidebarVisible: boolean;
  $fixedHeight?: boolean;
}

export type {
  HomeProps,
  ContainerProps
};
