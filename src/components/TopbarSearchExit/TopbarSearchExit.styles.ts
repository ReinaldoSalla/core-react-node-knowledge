import styled from 'styled-components/macro';
import { animated } from 'react-spring';

const Exit = styled(animated.button)`
  position: absolute;
  top: 100px;
  right: 32px;
  font-size: 48px;
  color: white;
  transition: color 250;

  &:hover {
    color: ${(props): string => props.theme.hoverColor};
    cursor: pointer;
  }

  ${(props): string => props.theme.breakpoints.small} {
    top: 87px;
    font-size: 2.5rem;
  }
`;

export default Exit;
