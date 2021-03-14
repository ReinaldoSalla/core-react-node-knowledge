import React, { useState, useContext } from 'react';
import { useTransition } from 'react-spring';
import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  Normalizer,
  Svg,
  Text,
  Filler
} from '../TopbarButton/TopbarButton.styles';
import getTransition from '../TopbarButton/TopbarButton.animations';
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

  const transitions = useTransition(
    isHovering,
    null,
    getTransition(isHovering)
  );

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
          width='110%'
          height='110%'
          $transform='translate(0%, -4%)'
          as={HomeSvg}
        />
      </Normalizer>
      <Text>
        ProgrTmp
      </Text>
      {transitions.map(({ item, key, props }) => (
        item && <Filler key={key} style={props} />
      ))}
    </Container>
  );
};

export default TopbarHome;