import React, { useEffect, FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
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

  const { pathname, hash } = useLocation();

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

  useEffect(() => {
    const goToBlock = () => {
      switch (hash) {
        case '#intro':
          return scrollToIntro();
        case '#setup':
          return scrollToSetup();
        case '#jsx':
          return scrollToJsx();
        case '#styling':
          return scrollToStyling();
        case '#useState':
          return scrollToUseState();
        case '#useReducer':
          return scrollToUseReducer();
        case '#final-code':
          return scrollToFinalCode();
        default:
          return window.scroll(0, 0);      
      }
    }
    goToBlock();
  }, []);

  return (
    <ContentNavigationWrapper>
      <ContentNavigationItem
        to={`${pathname}#intro`}
        onClick={scrollToIntro}
      >
        <ContentNavigationCircle style={introCircleAnimation} />
        <ContentNavigationText style={introTextAnimation}>
          1. Intro
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem
        to={`${pathname}#setup`}
        onClick={scrollToSetup}
      >
        <ContentNavigationCircle style={setupCircleAnimation}/>
        <ContentNavigationText style={setupTextAnimation}>
          2. Setup
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem
        to={`${pathname}#jsx`}
        onClick={scrollToJsx}
      >
        <ContentNavigationCircle style={jsxCircleAnimation}/>
        <ContentNavigationText style={jsxTextAnimation}>
          3. JSX
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem
        to={`${pathname}#styling`}
        onClick={scrollToStyling}
      >
        <ContentNavigationCircle style={stylingCircleAnimation}/>
        <ContentNavigationText style={stylingTextAnimation}>
          4. Styling
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem
        to={`${pathname}#useState`}
        onClick={scrollToUseState}
      >
        <ContentNavigationCircle  style={useStateCircleAnimation}/>
        <ContentNavigationText style={useStateTextAnimation}>
          5. useState
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem
        to={`${pathname}#useReducer`}
        onClick={scrollToUseReducer}
      >
        <ContentNavigationCircle style={useReducerCircleAnimation}/>
        <ContentNavigationText style={useReducerTextAnimation}>
          6. useReducer
        </ContentNavigationText>
      </ContentNavigationItem>
      <ContentNavigationItem 
        to={`${pathname}#final-code`} 
        onClick={scrollToFinalCode}
      >
        <ContentNavigationCircle style={finalCodeCircleAnimation}/>
        <ContentNavigationText style={finalCodeTextAnimation}>
          7. Final Code
        </ContentNavigationText>
      </ContentNavigationItem>
    </ContentNavigationWrapper>
  );
};

export default ContentNavigation;