import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';
import { ContentNavigationWrapperProps } from './ContentNavigation.types';

const ContentNavigationWrapper = styled.aside<ContentNavigationWrapperProps>`
  position: ${(props) => props.isSidebarVisible ? 'absolute' : 'sticky' };
  z-index: 1;
  top: ${(props) => props.isSidebarVisible ? `${props.top}px` : '100px' };
  /* top: 100px; */
  right: 20px;
  height: 300px;
  width: 150px;
  margin-left: 72px;
  border: 1px solid green;

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