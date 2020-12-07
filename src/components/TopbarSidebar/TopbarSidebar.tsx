import React, { useContext, useState } from 'react';
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
import { ModalsState } from '../../shared/context';
import { ModalsDispatch } from '../../shared/context';

let nCallsTopbarSidebar = 0;

const TopbarSidebar = () => {
  const { isSidebarVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleSidebar = () => {
    console.log('onClick TopbarSidebar');
    nCallsTopbarSidebar++;
    console.log(`nCallsTopbarSidebar = ${nCallsTopbarSidebar}`);
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };
  
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const hoverAnimation = useSpring(getHoverAnimation(isHovering));

  const svgAnimation = useSpring(getSvgAnimation(isSidebarVisible));

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