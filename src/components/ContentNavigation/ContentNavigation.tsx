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
  // isIntroIntersecting,
  // isSetupIntersecting,
  // isJsxIntersecting,
  // isStylingIntersecting,
  // isUseStateIntersecting,
  // isUseReducerIntersecting,
  // isFinalCodeIntersecting,
  // scrollToIntro,
  // scrollToSetup,
  // scrollToJsx,
  // scrollToStyling,
  // scrollToUseState,
  // scrollToUseReducer,
  // scrollToFinalCode,
  isIntersecting,
  scrolls,
  delimiters
}): JSX.Element => {

  const { pathname } = useLocation();

  // const introCircleAnimation = useSpring(getCircleAnimation(isIntroIntersecting));
  // const setupCircleAnimation = useSpring(getCircleAnimation(isSetupIntersecting, isIntroIntersecting));
  // const jsxCircleAnimation = useSpring(getCircleAnimation(isJsxIntersecting, isSetupIntersecting));
  // const stylingCircleAnimation = useSpring(getCircleAnimation(isStylingIntersecting, isJsxIntersecting));
  // const useStateCircleAnimation = useSpring(getCircleAnimation(isUseStateIntersecting, isStylingIntersecting));
  // const useReducerCircleAnimation = useSpring(getCircleAnimation(isUseReducerIntersecting, isUseStateIntersecting));
  // const finalCodeCircleAnimation = useSpring(getCircleAnimation(isFinalCodeIntersecting, isUseReducerIntersecting));
  
  // const introTextAnimation = useSpring(getTextAnimation(isIntroIntersecting));
  // const setupTextAnimation = useSpring(getTextAnimation(isSetupIntersecting, isIntroIntersecting));
  // const jsxTextAnimation = useSpring(getTextAnimation(isJsxIntersecting, isSetupIntersecting));
  // const stylingTextAnimation = useSpring(getTextAnimation(isStylingIntersecting, isJsxIntersecting));
  // const useStateTextAnimation = useSpring(getTextAnimation(isUseStateIntersecting, isStylingIntersecting));
  // const useReducerTextAnimation = useSpring(getTextAnimation(isUseReducerIntersecting, isUseStateIntersecting));
  // const finalCodeTextAnimation = useSpring(getTextAnimation(isFinalCodeIntersecting, isUseReducerIntersecting));

  const circleAnimations = [
    useSpring(getCircleAnimation(isIntersecting[0])),
    useSpring(getCircleAnimation(isIntersecting[1], isIntersecting[0])),
    useSpring(getCircleAnimation(isIntersecting[2], isIntersecting[1])),
    useSpring(getCircleAnimation(isIntersecting[3], isIntersecting[2])),
    useSpring(getCircleAnimation(isIntersecting[4], isIntersecting[3])),
    useSpring(getCircleAnimation(isIntersecting[5], isIntersecting[4])),
  ];

  const textAnimations = [
    useSpring(getTextAnimation(isIntersecting[0])),
    useSpring(getTextAnimation(isIntersecting[1], isIntersecting[0])),
    useSpring(getTextAnimation(isIntersecting[2], isIntersecting[1])),
    useSpring(getTextAnimation(isIntersecting[3], isIntersecting[2])),
    useSpring(getTextAnimation(isIntersecting[4], isIntersecting[3])),
    useSpring(getTextAnimation(isIntersecting[5], isIntersecting[4])),
  ];

  // return (
  //   <ContentNavigationWrapper>
  //     <div>
  //       <ContentNavigationItem
  //         to={`${pathname}#intro`}
  //         onClick={scrollToIntro}
  //       >
  //         <ContentNavigationCircle style={introCircleAnimation} />
  //         <ContentNavigationText style={introTextAnimation}>
  //           1. Intro
  //         </ContentNavigationText>
  //       </ContentNavigationItem>
  //       <ContentNavigationLine />
  //     </div>
  //     <div>
  //       <ContentNavigationItem
  //         to={`${pathname}#setup`}
  //         onClick={scrollToSetup}
  //       >
  //         <ContentNavigationCircle style={setupCircleAnimation}/>
  //         <ContentNavigationText style={setupTextAnimation}>
  //           2. Setup
  //         </ContentNavigationText>
  //       </ContentNavigationItem>
  //       <ContentNavigationLine />
  //     </div>
  //     <div>
  //       <ContentNavigationItem
  //         to={`${pathname}#jsx`}
  //         onClick={scrollToJsx}
  //       >
  //         <ContentNavigationCircle style={jsxCircleAnimation}/>
  //         <ContentNavigationText style={jsxTextAnimation}>
  //           3. JSX
  //         </ContentNavigationText>
  //       </ContentNavigationItem>
  //       <ContentNavigationLine />
  //     </div>
  //     <div>
  //       <ContentNavigationItem
  //         to={`${pathname}#styling`}
  //         onClick={scrollToStyling}
  //       >
  //         <ContentNavigationCircle style={stylingCircleAnimation}/>
  //         <ContentNavigationText style={stylingTextAnimation}>
  //           4. Styling
  //         </ContentNavigationText>
  //       </ContentNavigationItem>
  //       <ContentNavigationLine />
  //     </div>
  //     <div>
  //       <ContentNavigationItem
  //         to={`${pathname}#useState`}
  //         onClick={scrollToUseState}
  //       >
  //         <ContentNavigationCircle  style={useStateCircleAnimation}/>
  //         <ContentNavigationText style={useStateTextAnimation}>
  //           5. useState
  //         </ContentNavigationText>
  //       </ContentNavigationItem>
  //       <ContentNavigationLine />        
  //     </div>
  //     <div>
  //       <ContentNavigationItem
  //         to={`${pathname}#useReducer`}
  //         onClick={scrollToUseReducer}
  //       >
  //         <ContentNavigationCircle style={useReducerCircleAnimation}/>
  //         <ContentNavigationText style={useReducerTextAnimation}>
  //           6. useReducer
  //         </ContentNavigationText>
  //       </ContentNavigationItem>
  //       <ContentNavigationLine />
  //     </div>
  //     <div>
  //       <ContentNavigationItem 
  //         to={`${pathname}#final-code`} 
  //         onClick={scrollToFinalCode}
  //       >
  //         <ContentNavigationCircle style={finalCodeCircleAnimation}/>
  //         <ContentNavigationText style={finalCodeTextAnimation}>
  //           7. Final Code
  //         </ContentNavigationText>
  //       </ContentNavigationItem>
  //     </div>
  //   </ContentNavigationWrapper>
  // );
  return (
    <ContentNavigationWrapper>
      {delimiters.map((item, index) => (
        <div key={item}>
          <ContentNavigationItem 
            to={`${pathname}#${item}`}
           >
            <ContentNavigationCircle style={circleAnimations[index]} />
            <ContentNavigationText style={textAnimations[index]}>
              {index + 1}. {item}
            </ContentNavigationText>
          </ContentNavigationItem>
          { index < delimiters.length - 1 && <ContentNavigationLine /> }
        </div>
      ))}
    </ContentNavigationWrapper>
  )
};

export default ContentNavigation;