import styled from 'styled-components';
import { animated } from 'react-spring';
import { CategoriesWrapperProps } from './Categories.types' 

const CategoriesWrapper = styled(animated.section)<CategoriesWrapperProps>`
  padding-top: 48px;
  pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};
  background: ${(props) => props.theme.pageBgColor};
`;

export { CategoriesWrapper };
