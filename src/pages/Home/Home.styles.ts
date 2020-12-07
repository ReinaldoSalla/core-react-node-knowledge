import styled from 'styled-components';
import { animated } from 'react-spring';
import { ContainerProps } from './Home.types';

const Container = styled(animated.div)<ContainerProps>`
  height: ${({ $fixedHeight }) => $fixedHeight ? '100%' : 'auto'};
  pointer-events: ${({ $isSidebarVisible }) => $isSidebarVisible ? 'none': 'auto'};
`;

export default Container;
