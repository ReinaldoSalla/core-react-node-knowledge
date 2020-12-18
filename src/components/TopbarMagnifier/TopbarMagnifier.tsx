import React, { useState, useContext } from 'react';
import { useSpring } from 'react-spring';
import {
  getHoverAnimation,
  getSvgAnimation,
} from './TopbarMagnifier.animations';
import {
  TopbarMagnifierWrapper,
  TopbarMagnifierNormalizer,
  TopbarMagnifierSvg,
  TopbarMagnifierText,
  TopbarMagnifierFiller,
} from './TopbarMagnifier.styles';
import {
  ModalsState,
  ModalsDispatch,
} from '../../shared/context/ModalsContext';

const TopbarMagnifier = (): JSX.Element => {
  const { isTopbarSearchVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSearch = (): void => {
    dispatch({ type: 'TOGGLE_TOPBAR_SEARCH' });
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = (): void => {
    setIsHovering(true);
  };

  const handleLeave = (): void => {
    setIsHovering(false);
  };

  const hoverSpring = useSpring(getHoverAnimation(isHovering));

  const svgSpring = useSpring(getSvgAnimation(isTopbarSearchVisible));

  return (
    <TopbarMagnifierWrapper
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={toggleTopbarSearch}
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