import styled from 'styled-components';

const SidebarWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.theme.topbarHeight};
  left: 0;
  height: 500px;
  width: 500px;
  background: transparent;
`;

export { SidebarWrapper };