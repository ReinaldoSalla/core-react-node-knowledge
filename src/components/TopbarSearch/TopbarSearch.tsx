import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { 
  getHoverAnimation,
  getSvgAnimation
} from './TopbarSearch.animations';
import {
  TopbarSearchWrapper,
  TopbarSearchNormalizer,
  TopbarSearchSvg,
  TopbarSearchText,
  TopbarSearchFiller
} from './TopbarSearch.styles';

const TopbarSearch = ({ isSearchActive, toggleSearch }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const hoverSpring = useSpring(getHoverAnimation(isHovering));

  const svgSpring = useSpring(getSvgAnimation(isSearchActive));

  return (
    <TopbarSearchWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={toggleSearch}  
    >
      <TopbarSearchNormalizer>
        <TopbarSearchSvg style={svgSpring}/>
      </TopbarSearchNormalizer>
      <TopbarSearchText>
        Search
      </TopbarSearchText>
      <TopbarSearchFiller style={hoverSpring} />
    </TopbarSearchWrapper>
  );
};

export default TopbarSearch;