export interface CarouselInputProps {
  index: number;
  isMotionEnabled: boolean;
  handleFirstClick: () => void;
  handleSecondClick: () => void;
  handleThirdClick: () => void;
  handleToggleMotion: () => void;
}

export interface CarouselInputWrapperProps {
  $isTopbarSidebarVisible: boolean;
}