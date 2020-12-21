import React, { useState, useContext } from 'react';
import { useSpring } from 'react-spring';
import { Link, useLocation } from 'react-router-dom';
import getHoverAnimation from './TopbarHome.animations';
import {
  Container,
  Normalizer,
  Svg,
  Text,
  Filler
} from '../TopbarButton/TopbarButton.styles';
import { ModalsDispatch } from '../../shared/context/ModalsContext';
import {
  ReactComponent as HomeSvg
} from '../../assets/icons/home.svg';

const TopbarHome = (): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useContext(ModalsDispatch);

  const handleEnter = (): void => {
    setIsHovering(true);
  };

  const handleLeave = (): void => {
    setIsHovering(false);
  };

  const handleClick = (): void => {
    dispatch({ type: 'NAVIGATE_TO_HOME', payload: pathname });
  };

  const hoverAnimation = useSpring(getHoverAnimation(isHovering));

  return (
    <Container
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      title='Access the home page'
      to='/'
      as={Link}
    >
      <Normalizer>
        <Svg
          width='112%'
          height='112%'
          transform='translate3d(-5%, -5%, 0)'
          as={HomeSvg}
        />
      </Normalizer>
      <Text>
        ProgrTmp
      </Text>
      <Filler style={hoverAnimation} />
    </Container>
  );
};

export default TopbarHome;