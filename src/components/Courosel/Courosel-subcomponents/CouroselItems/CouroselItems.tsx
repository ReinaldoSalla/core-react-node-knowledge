import React, { useState, FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import {
  CouroselItemWrapper,
  CouroselItemTitle,
  CouroselItemDescription,
  CouroselItemCheckWrapper,
  CouroselItemCheck
} from './CouroselItems.styles';
import getCouroselItemProps from './CouroselItems.animations';

interface CouroselItemProps {
  style: any;
  name: string;
  title: string;
  description: string;
  check: string;
  scrollToJavascript: () => void;
  scrollToReact: () => void;
  scrollToNode: () => void;
}

const getWhichElement = (
  name,
  scrollToJavascript,
  scrollToReact,
  scrollToNode
) => {
  switch (name) {
    case 'javascript':
      return scrollToJavascript;
    case 'react':
      return scrollToReact;
    case 'node':
      return scrollToNode;
    default:
      throw new Error(`Name ${name} is undefined`);
  }
};

const CouroselItem: FunctionComponent<CouroselItemProps> = ({ 
  style, 
  name, 
  title, 
  description, 
  check, 
  scrollToJavascript,
  scrollToReact,
  scrollToNode
}): JSX.Element  => {
  const [isHovering, setIsHovering] = useState(false);

  const animationProps = useSpring(getCouroselItemProps(isHovering));

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  const scrollToElement = getWhichElement(
    name,
    scrollToJavascript,
    scrollToReact,
    scrollToNode
  );

  return (
    <CouroselItemWrapper style={style}>
      <CouroselItemTitle
        onClick={scrollToElement}
        style={animationProps}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </CouroselItemTitle>
      <CouroselItemDescription
        style={animationProps}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {description}
      </CouroselItemDescription>
      <CouroselItemCheckWrapper>
        <CouroselItemCheck
          style={animationProps}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {check}
        </CouroselItemCheck>
      </CouroselItemCheckWrapper>
    </CouroselItemWrapper>
  );
};

export default CouroselItem;