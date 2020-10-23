import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
import { getTopbarButtonAnimation } from './TopbarButton.animations';
import {
  TopbarButtonWrapper,
  TopbarButtonNormalizer,
  TopbarButtonSvg,
  TopbarButtonText,
  TopbarButtonFiller
} from './TopbarButton.styles';

const TopbarButton = ({
  Svg,
  text,
  title,
  tag,
  adjustSvg=false
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const { pathname } = useLocation();

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const handleClick = () => {
    pathname === '/'
      ? window.scroll({ top: 0, left: 0, behavior: 'smooth'})
      : window.scroll({ top: 0, left: 0});
  };

  const animation = useSpring(getTopbarButtonAnimation(isHovering));

  return (
    <TopbarButtonWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={handleClick}  
      title={title}
      as={tag}
      to='/'
    >
      <TopbarButtonNormalizer>
        <TopbarButtonSvg as={Svg} adjustSvg={adjustSvg}/>
      </TopbarButtonNormalizer>
      <TopbarButtonText>
        {text}
      </TopbarButtonText>
      <TopbarButtonFiller style={animation} />
    </TopbarButtonWrapper>
  );
};

export default TopbarButton;