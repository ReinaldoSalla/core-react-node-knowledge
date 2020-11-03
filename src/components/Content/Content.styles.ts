import styled from 'styled-components';
import { animated } from 'react-spring';
import { ContentWrapperProps } from './Content.types';

const ContentWrapper = styled(animated.article)<ContentWrapperProps>`
  padding: var(--topbar-height) 48px 36px 48px; 
  background: ${(props) => props.theme.pageBgColor};
  pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};
`;

const ContentTitle = styled.h1`
  font-size: 32px;
  /* border: 1px solid red; */
  padding-top: 24px;
  color: ${(props) => props.theme.textColor};
`;

const ContentContainer = styled.div`
  display: flex;

  ${(props) => props.theme.breakpoints.medium} {
    flex-direction: column-reverse;
  }
`;

export {
  ContentWrapper,
  ContentTitle,
  ContentContainer
};

