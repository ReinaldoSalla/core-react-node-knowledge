interface CarouselItemProps {
  style: any;
  name: string;
  title: string;
  description: string;
  check: string;
  scrollToJavascript: () => void;
  scrollToReact: () => void;
  scrollToNode: () => void;
}

interface TextProps {
  $isTopbarSidebarVisible: boolean;
}

export type { CarouselItemProps, TextProps };
