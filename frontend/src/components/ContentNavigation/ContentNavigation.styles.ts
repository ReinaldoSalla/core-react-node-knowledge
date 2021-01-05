import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { animated } from 'react-spring';

const ContentNavigationWrapper = styled.aside`
  position: sticky;
  top: 110px;
  right: 0px;
  height: 300px;
  margin-top: 140px;
  margin-left: 48px;
  
  ${(props): string => props.theme.breakpoints.large} {
    display: none;
  }
`;

const ContentNavigationItem = styled.span`
  position: relative;
  bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;

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
  transition: transform 250ms;

  &:hover {
    transform: translate3d(8px, 0, 0);
  }
`;

const ContentNavigationLine = styled.div`
  position: relative;
  left: 3.811%;
  height: 32px;
  width: 1px;
  background: rgba(255, 255, 255, 0.8);
  color: blue;
`;

export {
  ContentNavigationWrapper,
  ContentNavigationItem,
  ContentNavigationCircle,
  ContentNavigationText,
  ContentNavigationLine
};