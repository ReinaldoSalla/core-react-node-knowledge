import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import {
  CouroselItemWrapper,
  CouroselItemTitle,
  CouroselItemDescription,
  CouroselItemCheckWrapper,
  CouroselItemCheck
} from './CouroselItems.styles';
import getCouroselItemProps from './CouroselItems.animations';

const CouroselItem = ({ style, name, title, description, check }) => {
  const [isHovering, setIsHovering] = useState(false);

  const animationProps = useSpring(getCouroselItemProps(isHovering));

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  return (
    <CouroselItemWrapper style={style}>
      <CouroselItemTitle 
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