import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { 
  getHoverAnimation,
  getSvgAnimation
} from './TopbarSidebar.animations';
import {
  TopbarSidebarWrapper,
  TopbarSidebarNormalizer,
  TopbarSidebarSvg,
  TopbarSidebarText,
  TopbarSidebarFiller
} from './TopbarSidebar.styles';

const TopbarSidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const hoverAnimation = useSpring(getHoverAnimation(isHovering));

  const svgAnimation = useSpring(getSvgAnimation(isSidebarVisible));

  // const onFocus = () => {
  //   document.title = 'topbarsidebar onFocus detected'
  // };

  // const onBlur = () => {
  //   document.title = 'topbarsidebar onblur detected';
  // };

  return (
    <TopbarSidebarWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={toggleSidebar}  
      title='Access all contents'
    >
      <TopbarSidebarNormalizer>
        <TopbarSidebarSvg style={svgAnimation} />
      </TopbarSidebarNormalizer>
      <TopbarSidebarText>
        Contents
      </TopbarSidebarText>
      <TopbarSidebarFiller style={hoverAnimation} />
    </TopbarSidebarWrapper>
  );
};

export default TopbarSidebar;