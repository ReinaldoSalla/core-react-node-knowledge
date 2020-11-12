import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
import { getHoverAnimation } from './TopbarHome.animations';
import {
  TopbarHomeWrapper,
  TopbarHomeNormalizer,
  TopbarHomeSvg,
  TopbarHomeText,
  TopbarHomeFiller
} from './TopbarHome.styles';

const TopbarHome = () => {
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
    <TopbarHomeWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={handleClick}  
      title='Navigate to the home page'
      to='/'
    >
      <TopbarHomeNormalizer>
        <TopbarHomeSvg />
      </TopbarHomeNormalizer>
      <TopbarHomeText>
        AAA
      </TopbarHomeText>
      <TopbarHomeFiller style={hoverAnimation} />
    </TopbarHomeWrapper>
  );
};

export default TopbarHome;