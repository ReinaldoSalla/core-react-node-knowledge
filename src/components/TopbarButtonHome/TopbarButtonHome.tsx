import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
import { getHoverAnimation } from './TopbarButtonHome.animations';
import {
  TopbarButtonHomeWrapper,
  TopbarButtonHomeNormalizer,
  TopbarButtonHomeSvg,
  TopbarButtonHomeText,
  TopbarButtonHomeFiller
} from './TopbarButtonHome.styles';

const TopbarButtonHome = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { pathname } = useLocation();

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);
  
  const handleClick = () => {
    if (pathname === '/' && window.pageYOffset === 0) {
      window.location.reload();
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  };
  
  const hoverAnimation = useSpring(getHoverAnimation(isHovering));

  return (
    <TopbarButtonHomeWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={handleClick}  
      title='Access the home page'
      to='/'
    >
      <TopbarButtonHomeNormalizer>
        <TopbarButtonHomeSvg />
      </TopbarButtonHomeNormalizer>
      <TopbarButtonHomeText>
        ProgrTmp
      </TopbarButtonHomeText>
      <TopbarButtonHomeFiller style={hoverAnimation} />
    </TopbarButtonHomeWrapper>
  );
};

export default TopbarButtonHome;