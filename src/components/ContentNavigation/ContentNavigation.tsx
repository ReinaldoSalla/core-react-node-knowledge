import React, {
  FunctionComponent
} from 'react';
import { useSpring } from 'react-spring';
import {
  ContentNavigationWrapper,
  ContentNavigationItem,
  ContentNavigationCircle,
  ContentNavigationText
} from './ContentNavigation.styles';
import { ContentNavigationProps } from './ContentNavigation.types';
import { 
  getTextAnimation,
  getCircleAnimation 
} from './ContentNavigation.animations';

const ContentNavigation: FunctionComponent<ContentNavigationProps> = ({
  isIntroIntersecting,
  isSetupIntersecting,
  isJsxIntersecting,
  isStylingIntersecting,
  isUseStateIntersecting,
  isUseReducerIntersecting,
  isFinalCodeIntersecting,
  scrollToIntro,
  scrollToSetup,
  scrollToJsx,
  scrollToStyling,
  scrollToUseState,
  scrollToUseReducer,
  scrollToFinalCode
}): JSX.Element => {
  const introCircleAnimation = useSpring(getCircleAnimation(isIntroIntersecting));
  const introTextAnimation = useSpring(getTextAnimation(isIntroIntersecting));
  console.log(getTextAnimation(isIntroIntersecting));
  return (
    <ContentNavigationWrapper>
      <ContentNavigationItem>
        <ContentNavigationCircle style={introCircleAnimation} />
        <ContentNavigationText 
          style={introTextAnimation}
          onClick={scrollToIntro}
        >
          1. Intro
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle />
        <ContentNavigationText onClick={scrollToSetup}>
          2. Setup
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle />
        <ContentNavigationText onClick={scrollToJsx}>
          3. JSX
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle />
        <ContentNavigationText onClick={scrollToStyling}>
          4. Styling
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle />
        <ContentNavigationText onClick={scrollToUseState}>
          5. useState
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle />
        <ContentNavigationText onClick={scrollToUseReducer}>
          6. useReducer
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle />
        <ContentNavigationText onClick={scrollToFinalCode}>
          7. Final Code
        </ContentNavigationText>
      </ContentNavigationItem>
    </ContentNavigationWrapper>
  );
};

export default ContentNavigation;