import styled from 'styled-components';
import { animated } from 'react-spring';

const TopbarHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: ${(props) => props.theme.topbarHeight};
  /* padding-right: 170px; */
  /* border: 5px solid blue; */
`;

const TopbarNav = styled.div`
  width: 100%;
  height: ${(props) => props.theme.topbarHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-right: 17px; */
  /* border: 5px solid green; */
`;

interface TopbarFillerProps {
  isInTop?: boolean
}

const TopbarFiller = styled(animated.div)<TopbarFillerProps>`
  position: absolute;
  background: ${(props) => props.theme.topbarBgColor};
  width: 100%;
`;

export {
  TopbarHeader,
  TopbarNav,
  TopbarFiller
};
