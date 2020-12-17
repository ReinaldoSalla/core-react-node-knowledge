interface ContentNavigationProps {
  // isIntroIntersecting: boolean;
  // isSetupIntersecting: boolean;
  // isJsxIntersecting: boolean;
  // isStylingIntersecting: boolean;
  // isUseStateIntersecting: boolean;
  // isUseReducerIntersecting: boolean;
  // isFinalCodeIntersecting: boolean;
  // scrollToIntro: () => void;
  // scrollToSetup: () => void;
  // scrollToJsx: () => void;
  // scrollToStyling: () => void;
  // scrollToUseState: () => void;
  // scrollToUseReducer: () => void;
  // scrollToFinalCode: () => void;
  isIntersecting: any;
  scrolls: any;
  delimiters: any;
}

interface LinkProps {
  $isTopbarSidebarVisible: boolean;
}

export type { ContentNavigationProps, LinkProps };