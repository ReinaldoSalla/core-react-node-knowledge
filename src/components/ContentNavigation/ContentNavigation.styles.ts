import styled from 'styled-components';
import { animated } from 'react-spring';

const ContentNavigationWrapper = styled.ol`
  margin: 0 0 0 72px;
  position: sticky;
  top: 100px;
  right: 20px;
  height: 300px;
  width: 150px;

  ${(props) => props.theme.breakpoints.medium} {
    margin: 0;
    position: static;
  }
`;

const ContentNavigationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  &:hover {
    cursor: pointer;
  }

  ${(props) => props.theme.breakpoints.medium} {
    display: block;
    margin-bottom: 24px;
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

  ${(props) => props.theme.breakpoints.medium} {
    display: none;
  }
`;

const ContentNavigationText = styled(animated.span)`
  display: inline-block;
  width: 100px;
  line-height: 0.7;

  ${(props) => props.theme.breakpoints.medium} {
    width: auto;
  }
`;

export {
  ContentNavigationWrapper,
  ContentNavigationItem,
  ContentNavigationCircle,
  ContentNavigationText,
};