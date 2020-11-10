import styled from 'styled-components';
import { animated } from 'react-spring';

const SidebarWrapper = styled(animated.aside)`
  position: fixed;
  top: ${(props) => props.theme.topbarHeight};
  left: 0;
  z-index: 3;
  width: 300px;
  height: 100%;
  background: ${(props) => props.theme.boxBgColor};
`;

export default SidebarWrapper;