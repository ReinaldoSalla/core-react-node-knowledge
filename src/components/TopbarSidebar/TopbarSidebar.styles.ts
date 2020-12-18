import styled from 'styled-components';
import { animated } from 'react-spring';

const TopbarSidebarWrapper = styled(animated.aside)`
  position: fixed;
  top: ${(props): string => props.theme.topbarHeight};
  left: 0;
  z-index: 3;
  width: 300px;
  height: calc(100% - 80px);
  background: ${(props): string => props.theme.boxBgColor};
  overflow-y: auto;
  overflow-x: hidden;

  ${(props): string => props.theme.breakpoints.small} {
    width: 100%;
  }
`;

export default TopbarSidebarWrapper;