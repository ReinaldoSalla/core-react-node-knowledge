import React, { FunctionComponent } from 'react';
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
  const setupCircleAnimation = useSpring(getCircleAnimation(isSetupIntersecting, isIntroIntersecting));
  const jsxCircleAnimation = useSpring(getCircleAnimation(isJsxIntersecting, isSetupIntersecting));
  const stylingCircleAnimation = useSpring(getCircleAnimation(isStylingIntersecting, isJsxIntersecting));
  const useStateCircleAnimation = useSpring(getCircleAnimation(isUseStateIntersecting, isStylingIntersecting));
  const useReducerCircleAnimation = useSpring(getCircleAnimation(isUseReducerIntersecting, isUseStateIntersecting));
  const finalCodeCircleAnimation = useSpring(getCircleAnimation(isFinalCodeIntersecting, isUseReducerIntersecting));
  
  const introTextAnimation = useSpring(getTextAnimation(isIntroIntersecting));
  const setupTextAnimation = useSpring(getTextAnimation(isSetupIntersecting, isIntroIntersecting));
  const jsxTextAnimation = useSpring(getTextAnimation(isJsxIntersecting, isSetupIntersecting));
  const stylingTextAnimation = useSpring(getTextAnimation(isStylingIntersecting, isJsxIntersecting));
  const useStateTextAnimation = useSpring(getTextAnimation(isUseStateIntersecting, isStylingIntersecting));
  const useReducerTextAnimation = useSpring(getTextAnimation(isUseReducerIntersecting, isUseStateIntersecting));
  const finalCodeTextAnimation = useSpring(getTextAnimation(isFinalCodeIntersecting, isUseReducerIntersecting));

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
        <ContentNavigationCircle style={setupCircleAnimation}/>
        <ContentNavigationText 
          style={setupTextAnimation} 
          onClick={scrollToSetup}
        >
          2. Setup
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle style={jsxCircleAnimation}/>
        <ContentNavigationText 
          style={jsxTextAnimation}
          onClick={scrollToJsx}
        >
          3. JSX
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle style={stylingCircleAnimation}/>
        <ContentNavigationText 
          style={stylingTextAnimation}
          onClick={scrollToStyling}
        >
          4. Styling
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle  style={useStateCircleAnimation}/>
        <ContentNavigationText 
          style={useStateTextAnimation}
          onClick={scrollToUseState}
        >
          5. useState
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle style={useReducerCircleAnimation}/>
        <ContentNavigationText 
          style={useReducerTextAnimation}
          onClick={scrollToUseReducer}
        >
          6. useReducer
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem>
        <ContentNavigationCircle style={finalCodeCircleAnimation}/>
        <ContentNavigationText 
          style={finalCodeTextAnimation}
          onClick={scrollToFinalCode}
        >
          7. Final Code
        </ContentNavigationText>
      </ContentNavigationItem>
    </ContentNavigationWrapper>
  );
};

export default ContentNavigation;