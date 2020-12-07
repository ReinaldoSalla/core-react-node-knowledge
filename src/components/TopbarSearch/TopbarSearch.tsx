import React, { useState, useContext } from 'react';
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
import { ModalsState } from '../../shared/context';
import { ModalsDispatch } from '../../shared/context';

const TopbarSearch = () => {
  const { isSearchVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleSearch = () => {
    dispatch({ type: 'TOGGLE_SEARCH' });
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const hoverSpring = useSpring(getHoverAnimation(isHovering));

  const svgSpring = useSpring(getSvgAnimation(isSearchVisible));

  return (
    <TopbarSearchWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={toggleSearch}  
      title='Search for contents'
    >
      <TopbarSearchNormalizer style={svgSpring}>
        <TopbarSearchSvg />
      </TopbarSearchNormalizer>
      <TopbarSearchText>
        Search
      </TopbarSearchText>
      <TopbarSearchFiller style={hoverSpring} />
    </TopbarSearchWrapper>
  );
};

export default TopbarSearch;