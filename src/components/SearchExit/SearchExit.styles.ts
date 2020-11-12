import styled from 'styled-components';
import { animated } from 'react-spring';

const Exit = styled(animated.div)`
  position: absolute;
  top: calc(100px);
  right: 32px;
  font-size: 48px;
  color: white;
  transition: color 250;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }
`;

export default Exit;