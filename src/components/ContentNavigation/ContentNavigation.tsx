import React, {
  FunctionComponent
} from 'react';
import { useSpring } from 'react-spring';
// import { useLocation } from 'react-router-dom';
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
// import { normalToHifen } from '../../utils/textManipulation';

const ContentNavigation: FunctionComponent<ContentNavigationProps> = ({
  isIntersecting,
  scrolls,
  delimiters
}): JSX.Element => {
  // const { pathname } = useLocation();

  const circleAnimations = [
    useSpring(getCircleAnimation(isIntersecting[0])),
    useSpring(getCircleAnimation(isIntersecting[1], isIntersecting[0])),
    useSpring(getCircleAnimation(isIntersecting[2], isIntersecting[1])),
    useSpring(getCircleAnimation(isIntersecting[3], isIntersecting[2])),
    useSpring(getCircleAnimation(isIntersecting[4], isIntersecting[3])),
    useSpring(getCircleAnimation(isIntersecting[5], isIntersecting[4])),
    useSpring(getCircleAnimation(isIntersecting[6], isIntersecting[5])),
    useSpring(getCircleAnimation(isIntersecting[7], isIntersecting[6])),
    useSpring(getCircleAnimation(isIntersecting[8], isIntersecting[7])),
    useSpring(getCircleAnimation(isIntersecting[9], isIntersecting[8]))
  ];

  const textAnimations = [
    useSpring(getTextAnimation(isIntersecting[0])),
    useSpring(getTextAnimation(isIntersecting[1], isIntersecting[0])),
    useSpring(getTextAnimation(isIntersecting[2], isIntersecting[1])),
    useSpring(getTextAnimation(isIntersecting[3], isIntersecting[2])),
    useSpring(getTextAnimation(isIntersecting[4], isIntersecting[3])),
    useSpring(getTextAnimation(isIntersecting[5], isIntersecting[4])),
    useSpring(getTextAnimation(isIntersecting[6], isIntersecting[5])),
    useSpring(getTextAnimation(isIntersecting[7], isIntersecting[6])),
    useSpring(getTextAnimation(isIntersecting[8], isIntersecting[7])),
    useSpring(getTextAnimation(isIntersecting[9], isIntersecting[8]))
  ];

  return (
    <ContentNavigationWrapper>
      {delimiters.map((item: any, index: number) => (
        <div key={item}>
          <ContentNavigationItem
            // to={`${pathname}#${normalToHifen(item)}`}
            onClick={scrolls[index]}
          >
            <ContentNavigationCircle style={circleAnimations[index]} />
            <ContentNavigationText style={textAnimations[index]}>
              {index + 1}
              .
              {item}
            </ContentNavigationText>
          </ContentNavigationItem>
          {index < delimiters.length - 1 && <ContentNavigationLine />}
        </div>
      ))}
    </ContentNavigationWrapper>
  );
};

export default ContentNavigation;