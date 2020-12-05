interface CarouselInputProps {
  index: number;
  handleFirstClick: () => void;
  handleSecondClick: () => void;
  handleThirdClick: () => void;
}

interface CarouselInputWrapperProps {
  $isSidebarVisible: boolean;
}

export type { CarouselInputProps, CarouselInputWrapperProps };