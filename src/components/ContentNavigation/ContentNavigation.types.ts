interface ContentNavigationProps {
  isIntroIntersecting: boolean;
  isSetupIntersecting: boolean;
  isJsxIntersecting: boolean;
  isStylingIntersecting: boolean;
  isUseStateIntersecting: boolean;
  isUseReducerIntersecting: boolean;
  isFinalCodeIntersecting: boolean;
  scrollToIntro: () => void;
  scrollToSetup: () => void;
  scrollToJsx: () => void;
  scrollToStyling: () => void;
  scrollToUseState: () => void;
  scrollToUseReducer: () => void;
  scrollToFinalCode: () => void;
  isSidebarVisible: boolean;
  topRef: any;
}

interface ContentNavigationWrapperProps {
  isSidebarVisible: boolean;
  top: number;
}

export type { ContentNavigationProps, ContentNavigationWrapperProps };