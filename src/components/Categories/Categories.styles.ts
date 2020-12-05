import styled from 'styled-components';
import { animated } from 'react-spring';
import { WrapperProps } from './Categories.types';

const CategoriesWrapper = styled(animated.section)<WrapperProps>`
  padding-top: 48px;
  background: ${(props) => props.theme.pageBgColor};
  padding-bottom: 2rem;
  pointer-events: ${({ $isSidebarVisible }) => $isSidebarVisible ? 'none' : 'auto'};
`;

export { CategoriesWrapper };
