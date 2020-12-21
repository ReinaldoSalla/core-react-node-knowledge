import React, { useState, useContext } from 'react';
import { useSpring } from 'react-spring';
import {
  getHoverAnimation,
  getSvgAnimation
} from './TopbarMagnifier.animations';
import {
  Container,
  Normalizer,
  Svg,
  Text,
  Filler
} from '../TopbarButton/TopbarButton.styles';
import {
  ModalsDispatch,
  ModalsState
} from '../../shared/context/ModalsContext';
import {
  ReactComponent as SearchSvg
} from '../../assets/icons/search.svg';

const TopbarHome = (): JSX.Element => {
  const { isTopbarSearchVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSidebar = (): void => {
    dispatch({ type: 'TOGGLE_TOPBAR_SEARCH' });
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = (): void => {
    setIsHovering(true);
  };

  const handleLeave = (): void => {
    setIsHovering(false);
  };

  const hoverAnimation = useSpring(getHoverAnimation(isHovering));

  const svgAnimation = useSpring(getSvgAnimation(isTopbarSearchVisible));

  return (
    <Container
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={toggleTopbarSidebar}
      title='Search for content'
      as='button'
    >
      <Normalizer style={svgAnimation}>
        <Svg
          width='120%'
          height='120%'
          transform='translate3d(-8%, -8%, 0)'
          as={SearchSvg}
        />
      </Normalizer>
      <Text>
        Contents
      </Text>
      <Filler style={hoverAnimation} />
    </Container>
  );
};

export default TopbarHome;