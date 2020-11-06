import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';

interface ContentNavigationWrapperProps {
  isSidebarVisible: boolean;
  top: number;
}

const ContentNavigationWrapper = styled.aside<ContentNavigationWrapperProps>`
  /* position: sticky; */
  position: ${(props) => props.isSidebarVisible ? 'fixed' : 'sticky'};
  top: 100px;
  /* top: ${(props) => props.isSidebarVisible ? `${props.top}` : '100px'}; */
  /* right: 20px; */
  right: ${(props) => props.isSidebarVisible ? '32px' : '20px' };
  height: 300px;
  width: 150px;
  /* margin: 0 0 0 72px; */
  margin-top: ${(props) => props.isSidebarVisible ? `${props.top <= 100 ? '97px' : '0px'}` : '0px' };
  margin-left: 72px;
  /* border: 5px solid red; */

  ${(props) => props.theme.breakpoints.medium} {
    display: none;
  }
`;

const ContentNavigationItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  &:hover {
    cursor: pointer;
  }
`;

const ContentNavigationCircle = styled(animated.div)`
  margin-top: 2px;
  margin-right: 8px;
  width: 8px;
  height: 8px;
  border: 1px solid black;
  border-radius: 50%;
  background: 50%;
`;

const ContentNavigationText = styled(animated.span)`
  display: inline-block;
  width: 100px;
  line-height: 0.7;
`;

export {
  ContentNavigationWrapper,
  ContentNavigationItem,
  ContentNavigationCircle,
  ContentNavigationText,
};