import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { 
  getHoverAnimation,
} from './TopbarSearch.animations';
import {
  TopbarSearchWrapper,
  TopbarSearchNormalizer,
  TopbarSearchSvg,
  TopbarSearchText,
  TopbarSearchFiller
} from './TopbarSearch.styles';

const TopbarSearch = ({ toggleSidebar, isSidebarActive }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const hoverAnimation = useSpring(getHoverAnimation(isHovering));

  return (
    <TopbarSearchWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={toggleSidebar}  
    >
      <TopbarSearchNormalizer>
        <TopbarSearchSvg />
      </TopbarSearchNormalizer>
      <TopbarSearchText>
        Contents
      </TopbarSearchText>
      <TopbarSearchFiller style={hoverAnimation} />
    </TopbarSearchWrapper>
  );
};

export default TopbarSearch;