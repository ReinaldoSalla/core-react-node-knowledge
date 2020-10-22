import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
import { getTopbarHomeAnimation } from './TopbarHome.animations';
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
    pathname === '/'
      ? window.scroll({ top: 0, left: 0, behavior: 'smooth'})
      : window.scroll({ top: 0, left: 0});
  };

  const animation = useSpring(getTopbarHomeAnimation(isHovering));

  return (
    <TopbarHomeWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={handleClick}  
      to='/'
    >
      <TopbarHomeNormalizer>
        <TopbarHomeSvg />
      </TopbarHomeNormalizer>
      <TopbarHomeText>
        ReactAcb
      </TopbarHomeText>
      <TopbarHomeFiller style={animation} />
    </TopbarHomeWrapper>
  );
};

export default TopbarHome;