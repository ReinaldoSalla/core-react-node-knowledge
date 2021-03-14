export interface CarouselInputProps {
  index: number;
  handleFirstClick: () => void;
  handleSecondClick: () => void;
  handleThirdClick: () => void;
}

export interface CarouselInputWrapperProps {
  $isTopbarSidebarVisible: boolean;
}