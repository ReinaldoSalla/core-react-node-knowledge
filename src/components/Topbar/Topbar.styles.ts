import styled from 'styled-components/macro';
import { animated } from 'react-spring';
import { HeaderProps } from './Topbar.types';

const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  z-index: 2;
  width: ${({
    $isTopbarSidebarVisible,
    $isTopbarSearchVisible,
    $isScrollbarVisible
  }): string => (
    ($isTopbarSidebarVisible && $isScrollbarVisible)
    || ($isTopbarSearchVisible && $isScrollbarVisible)
      ? 'calc(100% - 17px)'
      : '100%'
  )};
  height: ${(props): string => props.theme.topbarHeight};
`;

const Nav = styled.nav`
  width: 100%;
  height: ${(props): string => props.theme.topbarHeight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface FillerProps {
  isInTop?: boolean;
}

const Filler = styled(animated.div)<FillerProps>`
  position: absolute;
  background: ${(props): string => props.theme.topbarBgColor};
  width: 100%;
`;

export {
  Header,
  Nav,
  Filler
};
