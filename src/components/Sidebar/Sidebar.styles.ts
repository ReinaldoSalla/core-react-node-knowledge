import styled from 'styled-components';
import { animated } from 'react-spring';

const SidebarWrapper = styled(animated.aside)`
  position: fixed;
  top: ${(props) => props.theme.topbarHeight};
  left: 0;
  z-index: 3;
  width: 250px;
  height: 100%;
  background: ${(props) => props.theme.secondaryBgColor};
`;

const SidebarContainer = styled(animated.section)`
  margin: 0 0 0 24px;
`;

const SidebarTitle = styled.h2`
  color: white;
  margin: 32px 0 0 0;
`;

const SidebarContent = styled.li`
  color: white;
  margin: 8px 0;
`

export { 
  SidebarWrapper,
  SidebarContainer,
  SidebarTitle,
  SidebarContent
};