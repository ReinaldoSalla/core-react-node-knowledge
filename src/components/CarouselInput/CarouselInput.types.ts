interface CarouselInputProps {
  index: number;
  handleFirstClick: () => void;
  handleSecondClick: () => void;
  handleThirdClick: () => void;
}

interface CarouselInputWrapperProps {
  $isTopbarSidebarVisible: boolean;
}

export type { CarouselInputProps, CarouselInputWrapperProps };