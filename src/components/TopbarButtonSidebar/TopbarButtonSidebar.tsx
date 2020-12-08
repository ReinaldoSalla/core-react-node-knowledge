import React, { useContext, useState } from 'react';
import { useSpring } from 'react-spring';
import { 
  getHoverAnimation,
  getSvgAnimation
} from './TopbarButtonTopbarModalSidebar.animations';
import {
  TopbarButtonTopbarModalSidebarWrapper,
  TopbarButtonTopbarModalSidebarNormalizer,
  TopbarButtonTopbarModalSidebarSvg,
  TopbarButtonTopbarModalSidebarText,
  TopbarButtonTopbarModalSidebarFiller
} from './TopbarButtonTopbarModalSidebar.styles';
import { ModalsState } from '../../shared/context';
import { ModalsDispatch } from '../../shared/context';

const TopbarButtonTopbarModalSidebar = () => {
  const { isTopbarModalSidebarVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarModalSidebar = () => {
    dispatch({ type: 'TOGGLE_TopbarModalSidebar' });
  };
  
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const hoverAnimation = useSpring(getHoverAnimation(isHovering));

  const svgAnimation = useSpring(getSvgAnimation(isTopbarModalSidebarVisible));

  return (
    <TopbarButtonTopbarModalSidebarWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={toggleTopbarModalSidebar}  
      title='Access all contents'
    >
      <TopbarButtonTopbarModalSidebarNormalizer>
        <TopbarButtonTopbarModalSidebarSvg style={svgAnimation} />
      </TopbarButtonTopbarModalSidebarNormalizer>
      <TopbarButtonTopbarModalSidebarText>
        Contents
      </TopbarButtonTopbarModalSidebarText>
      <TopbarButtonTopbarModalSidebarFiller style={hoverAnimation} />
    </TopbarButtonTopbarModalSidebarWrapper>
  );
};

export default TopbarButtonTopbarModalSidebar;