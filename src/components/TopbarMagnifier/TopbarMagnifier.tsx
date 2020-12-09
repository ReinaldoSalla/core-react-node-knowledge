import React, { useState, useContext } from 'react';
import { useSpring } from 'react-spring';
import { 
  getHoverAnimation,
  getSvgAnimation
} from './TopbarMagnifier.animations';
import {
  TopbarMagnifierWrapper,
  TopbarMagnifierNormalizer,
  TopbarMagnifierSvg,
  TopbarMagnifierText,
  TopbarMagnifierFiller
} from './TopbarMagnifier.styles';
import { ModalsState } from '../../shared/context';
import { ModalsDispatch } from '../../shared/context';

const TopbarMagnifier = () => {
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
    <TopbarMagnifierWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={toggleSearch}  
      title='TopbarSearch for contents'
    >
      <TopbarMagnifierNormalizer style={svgSpring}>
        <TopbarMagnifierSvg />
      </TopbarMagnifierNormalizer>
      <TopbarMagnifierText>
       Search 
      </TopbarMagnifierText>
      <TopbarMagnifierFiller style={hoverSpring} />
    </TopbarMagnifierWrapper>
  );
};

export default TopbarMagnifier;