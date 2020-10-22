import styled from 'styled-components';
import { animated } from 'react-spring';

const TopbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: ${(props) => props.theme.topbarHeight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TopbarFillerProps {
  isInTop?: boolean
}

const TopbarFiller = styled(animated.div)<TopbarFillerProps>`
  position: absolute;
  background: ${(props) => props.theme.bgColor};
  width: 100%;
`;

export {
  TopbarWrapper,
  TopbarFiller
};
