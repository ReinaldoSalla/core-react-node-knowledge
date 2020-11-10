import styled from 'styled-components';
import { animated } from 'react-spring';

const Exit = styled(animated.div)`
  position: absolute;
  top: 8px;
  right: 0px;
  font-size: 24px;
  width: 32px;
  height: 24px;
  color: white;
  transition: color 250ms;
  font-family: sans-serif;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }
`;

export default Exit;