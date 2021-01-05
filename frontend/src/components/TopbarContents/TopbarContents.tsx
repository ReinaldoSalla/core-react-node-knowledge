import React, { useState, useContext } from 'react';
import { useSpring, useTransition } from 'react-spring';
import getSvgAnimation from './TopbarContents.animations';
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
  ReactComponent as ContentSvg
} from '../../assets/icons/contents.svg';

const TopbarHome = (): JSX.Element => {
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

  const transitions = useTransition(
    isHovering,
    null,
    getTransition(isHovering)
  );

  const svgAnimation = useSpring(getSvgAnimation(isTopbarSidebarVisible));

  return (
    <Container
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={toggleTopbarSidebar}
      title='Access all contents'
      as='button'
    >
      <Normalizer style={svgAnimation}>
        <Svg
          width='100%'
          height='100%'
          transform='translate(0%, 0%)'
          as={ContentSvg}
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