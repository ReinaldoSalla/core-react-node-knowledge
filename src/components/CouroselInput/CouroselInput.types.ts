interface CouroselInputProps {
  index: number;
  isSidebarVisible: boolean;
  handleFirstClick: () => void;
  handleSecondClick: () => void;
  handleThirdClick: () => void;
}

interface CouroselInputWrapperProps {
  $isSidebarVisible: boolean;
}

export type {CouroselInputProps, CouroselInputWrapperProps};