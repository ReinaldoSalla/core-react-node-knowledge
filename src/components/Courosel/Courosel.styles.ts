import styled from 'styled-components';
import { animated } from 'react-spring';
import { CouroselWrapperProps } from './Courosel.types';

const CouroselWrapper = styled(animated.section)<CouroselWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: ${(props) => props.disabled ? 'none': 'auto'};
  background: black;
`;

export {
  CouroselWrapper
};