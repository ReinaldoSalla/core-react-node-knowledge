import React, { 
  useEffect,
  FunctionComponent
} from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
import {
  ContentNavigationWrapper,
  ContentNavigationItem,
  ContentNavigationCircle,
  ContentNavigationText,
  ContentNavigationLine
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
  scrollToFinalCode,
}): JSX.Element => {

  const { pathname } = useLocation();

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
      <div>
        <ContentNavigationItem
          to={`${pathname}#intro`}
          onClick={scrollToIntro}
        >
          <ContentNavigationCircle style={introCircleAnimation} />
          <ContentNavigationText style={introTextAnimation}>
            1. Intro
          </ContentNavigationText>
        </ContentNavigationItem>
        <ContentNavigationLine />
      </div>
      <div>
        <ContentNavigationItem
          to={`${pathname}#setup`}
          onClick={scrollToSetup}
        >
          <ContentNavigationCircle style={setupCircleAnimation}/>
          <ContentNavigationText style={setupTextAnimation}>
            2. Setup
          </ContentNavigationText>
        </ContentNavigationItem>
        <ContentNavigationLine />
      </div>
      <div>
        <ContentNavigationItem
          to={`${pathname}#jsx`}
          onClick={scrollToJsx}
        >
          <ContentNavigationCircle style={jsxCircleAnimation}/>
          <ContentNavigationText style={jsxTextAnimation}>
            3. JSX
          </ContentNavigationText>
        </ContentNavigationItem>
        <ContentNavigationLine />
      </div>
      <div>
        <ContentNavigationItem
          to={`${pathname}#styling`}
          onClick={scrollToStyling}
        >
          <ContentNavigationCircle style={stylingCircleAnimation}/>
          <ContentNavigationText style={stylingTextAnimation}>
            4. Styling
          </ContentNavigationText>
        </ContentNavigationItem>
        <ContentNavigationLine />
      </div>
      <div>
        <ContentNavigationItem
          to={`${pathname}#useState`}
          onClick={scrollToUseState}
        >
          <ContentNavigationCircle  style={useStateCircleAnimation}/>
          <ContentNavigationText style={useStateTextAnimation}>
            5. useState
          </ContentNavigationText>
        </ContentNavigationItem>
        <ContentNavigationLine />        
      </div>
      <div>
        <ContentNavigationItem
          to={`${pathname}#useReducer`}
          onClick={scrollToUseReducer}
        >
          <ContentNavigationCircle style={useReducerCircleAnimation}/>
          <ContentNavigationText style={useReducerTextAnimation}>
            6. useReducer
          </ContentNavigationText>
        </ContentNavigationItem>
        <ContentNavigationLine />
      </div>
      <div>
        <ContentNavigationItem 
          to={`${pathname}#final-code`} 
          onClick={scrollToFinalCode}
        >
          <ContentNavigationCircle style={finalCodeCircleAnimation}/>
          <ContentNavigationText style={finalCodeTextAnimation}>
            7. Final Code
          </ContentNavigationText>
        </ContentNavigationItem>
      </div>
    </ContentNavigationWrapper>
  );
};

export default ContentNavigation;