import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';
// import { ContentNavigationWrapperProps } from './ContentNavigation.types';

// const ContentNavigationWrapper = styled.aside<ContentNavigationWrapperProps>`
  // position: ${(props) => !props.isSidebarVisible ? 'sticky' : 'absolute' };
  // z-index: 1;
  // top: ${(props) => props.isIntersecting && !props.isSidebarVisible ? '100px' : ''};
  // bottom: ${(props) => props.isIntersecting && !props.isSidebarVisible ? '' : '10px' };
  // right: 20px;
  // height: 300px;
  // width: 150px;
  // margin-left: 72px;
  // border: 1px solid green;

  // ${(props) => props.theme.breakpoints.medium} {
  //   display: none;
  // }
// `;

interface Unknown {
  [key: string]: any;
}

const ContentNavigationWrapper = styled.aside.attrs<Unknown>(props => {
  let position,
      top,
      right,
      bottom;
  if (!props.isSidebarVisible) {
    position = 'sticky';
    top = '100px';
    right = '20px';
    bottom = '';
  } else if (props.isSidebarVisible && props.isIntersecting) {
    position = 'absolute';
    top = props.top <= 100 ? props.top : `${props.top-98}px`;
    right = '0px';
    bottom = '';
  } else if (props.isSidebarVisible && !props.isIntersecting) {
    position = 'absolute';
    top = '';
    right = '0px';
    bottom = '0px';
  } 
  return {
    position,
    top,
    right,
    bottom
  };
})<Unknown>`
  position: ${(props) => props.position};
  z-index: 1;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  height: 300px;
  margin-left: 72px;
  border: 1px solid transparent;

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