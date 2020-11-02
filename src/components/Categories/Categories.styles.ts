import styled from 'styled-components';
import { animated } from 'react-spring';
import { CategoriesWrapperProps } from './Categories.types' 

const CategoriesWrapper = styled(animated.section)<CategoriesWrapperProps>`
  margin-top: 48px;
  pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};
  color: yellow;
`;

export { CategoriesWrapper };
