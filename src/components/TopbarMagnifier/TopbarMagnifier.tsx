import React, { useState, useContext } from 'react';
import { useSpring, useTransition } from 'react-spring';
import getSvgAnimation from './TopbarMagnifier.animations';
import {
  Container,
  Normalizer,
  Svg,
  Text,
  Filler
} from '../TopbarButton/TopbarButton.styles';
import getTransition from '../TopbarButton/TopbarButton.animations';
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

  const transitions = useTransition(
    isHovering,
    null,
    getTransition(isHovering)
  );

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
          transform='translate(-8%, -8%)'
          as={SearchSvg}
        />
      </Normalizer>
      <Text>
        Contents
      </Text>
      {transitions.map(({ item, key, props }) => (
        item && <Filler key={key} style={props} />
      ))}
    </Container>
  );
};

export default TopbarHome;