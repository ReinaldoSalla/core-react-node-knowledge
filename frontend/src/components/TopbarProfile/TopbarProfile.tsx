import React, { useState, useContext } from 'react';
import { useTransition } from 'react-spring';
import { Link } from 'react-router-dom';
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
  ReactComponent as ProfileSvg
} from '../../assets/icons/profile.svg';

const TopbarHome = (): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useContext(ModalsDispatch);

  const onFocus = (): void => {
    dispatch({ type: 'CLOSE_MODALS' });
  };

  const handleEnter = (): void => {
    setIsHovering(true);
  };

  const handleLeave = (): void => {
    setIsHovering(false);
  };

  const handleClick = (): void => {
    dispatch({ type: 'NAVIGATE_TO_LOGIN' });
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
      to='/login'
      as={Link}
      onFocus={onFocus}
    >
      <Normalizer>
        <Svg
          width='100%'
          height='100%'
          transform='translate(0%, 0%)'
          as={ProfileSvg}
        />
      </Normalizer>
      <Text>
        Log In
      </Text>
      {transitions.map(({ item, key, props }) => (
        item && <Filler key={key} style={props} />
      ))}
    </Container>
  );
};

export default TopbarHome;