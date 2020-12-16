import styled from 'styled-components';
import { animated } from 'react-spring';
import { HeaderProps } from './Topbar.types';

const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  z-index: 2;
  width: ${({ $isTopbarSidebarVisible, $isTopbarSearchVisible, $isScrollbarVisible }) => (
    ($isTopbarSidebarVisible && $isScrollbarVisible)
    || ($isTopbarSearchVisible && $isScrollbarVisible)
      ? 'calc(100% - 17px)'
      : '100%'
  )};
  height: ${(props) => props.theme.topbarHeight};
`;

const Nav = styled.nav`
  width: 100%;
  height: ${(props) => props.theme.topbarHeight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface FillerProps {
  isInTop?: boolean;
}

const Filler = styled(animated.div)<FillerProps>`
  position: absolute;
  background: ${(props) => props.theme.topbarBgColor};
  width: 100%;
`;

export {
  Header,
  Nav,
  Filler
};
