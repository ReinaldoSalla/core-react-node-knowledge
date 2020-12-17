import React, { useState, useContext } from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
import { getHoverAnimation } from './TopbarHome.animations';
import {
  TopbarHomeWrapper,
  TopbarHomeNormalizer,
  TopbarHomeSvg,
  TopbarHomeText,
  TopbarHomeFiller,
} from './TopbarHome.styles';
import { ModalsDispatch } from '../../shared/context/ModalsContext';

const TopbarHome = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useContext(ModalsDispatch);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const handleClick = () => {
    // if (pathname === '/' && window.pageYOffset === 0) {
    //   window.location.reload();
    // } else if (pathname === '/') {
    //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // } else {
    //   window.scrollTo({ top: 0, left: 0 });
    // }
    dispatch({ type: 'NAVIGATE_TO_HOME', payload: pathname });
  };

  const hoverAnimation = useSpring(getHoverAnimation(isHovering));

  return (
    <TopbarHomeWrapper
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      title="Access the home page"
      to="/"
    >
      <TopbarHomeNormalizer>
        <TopbarHomeSvg />
      </TopbarHomeNormalizer>
      <TopbarHomeText>
        ProgrTmp
      </TopbarHomeText>
      <TopbarHomeFiller style={hoverAnimation} />
    </TopbarHomeWrapper>
  );
};

export default TopbarHome;