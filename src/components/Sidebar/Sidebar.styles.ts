import styled from 'styled-components';
import { animated } from 'react-spring';

const SidebarWrapper = styled(animated.aside)`
  position: fixed;
  top: ${(props) => props.theme.topbarHeight};
  left: 0;
  z-index: 3;
  width: 500px;
  height: 100%;
  background: ${(props) => props.theme.boxBgColor};
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
`;

const SidebarExit = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
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

export { 
  SidebarWrapper,
  SidebarContainer,
  SidebarTitle,
  SidebarContent,
  SidebarExit
};