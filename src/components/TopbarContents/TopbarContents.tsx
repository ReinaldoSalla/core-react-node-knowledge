import React, { useContext, useState } from 'react';
import { useSpring } from 'react-spring';
import {
  getHoverAnimation,
  getSvgAnimation,
} from './TopbarContents.animations';
import {
  TopbarContentsWrapper,
  TopbarContentsNormalizer,
  TopbarContentsSvg,
  TopbarContentsText,
  TopbarContentsFiller,
} from './TopbarContents.styles';
import {
  ModalsState,
  ModalsDispatch,
} from '../../shared/context/ModalsContext';

const TopbarContents = (): JSX.Element => {
  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSidebar = (): void => {
    dispatch({ type: 'TOGGLE_TOPBAR_SIDEBAR' });
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = (): void => {
    setIsHovering(true);
  };

  const handleLeave = (): void => {
    setIsHovering(false);
  };

  const hoverAnimation = useSpring(getHoverAnimation(isHovering));

  const svgAnimation = useSpring(getSvgAnimation(isTopbarSidebarVisible));

  return (
    <TopbarContentsWrapper
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={toggleTopbarSidebar}
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