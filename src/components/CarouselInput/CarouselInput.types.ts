export interface CarouselInputProps {
  index: number;
  isMotionEnabled: boolean;
  handleFirstClick: () => void;
  handleSecondClick: () => void;
  handleThirdClick: () => void;
}

export interface CarouselInputWrapperProps {
  $isTopbarSidebarVisible: boolean;
}