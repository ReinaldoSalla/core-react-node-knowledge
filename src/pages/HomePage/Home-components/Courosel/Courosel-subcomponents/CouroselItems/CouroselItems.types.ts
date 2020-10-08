interface CouroselItemProps {
  style: any;
  name: string;
  title: string;
  description: string;
  check: string;
  scrollToJavascript: () => void;
  scrollToReact: () => void;
  scrollToNode: () => void;
}

export type { CouroselItemProps };