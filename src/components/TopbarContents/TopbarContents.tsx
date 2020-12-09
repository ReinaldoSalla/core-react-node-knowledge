import React, { useContext, useState } from 'react';
import { useSpring } from 'react-spring';
import { 
  getHoverAnimation,
  getSvgAnimation
} from './TopbarContents.animations';
import {
  TopbarContentsWrapper,
  TopbarContentsNormalizer,
  TopbarContentsSvg,
  TopbarContentsText,
  TopbarContentsFiller
} from './TopbarContents.styles';
import { ModalsState } from '../../shared/context';
import { ModalsDispatch } from '../../shared/context';

const TopbarContents = () => {
  const { isSidebarVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };
  
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const hoverAnimation = useSpring(getHoverAnimation(isHovering));

  const svgAnimation = useSpring(getSvgAnimation(isSidebarVisible));

  return (
    <TopbarContentsWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={toggleSidebar}  
      title='Access all contents'
    >
      <TopbarContentsNormalizer>
        <TopbarContentsSvg style={svgAnimation} />
      </TopbarContentsNormalizer>
      <TopbarContentsText>
        Contents
      </TopbarContentsText>
      <TopbarContentsFiller style={hoverAnimation} />
    </TopbarContentsWrapper>
  );
};

export default TopbarContents;