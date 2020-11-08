import styled from 'styled-components';
import { animated } from 'react-spring';
import { ContentWrapperProps } from './Content.types';

const ContentWrapper = styled(animated.article)<ContentWrapperProps>`
  padding: ${(props) => `${props.theme.topbarHeight} 48px 36px 48px`};
  background: ${(props) => props.theme.pageBgColor};
  pointer-events: ${(props) => props.isSidebarVisible ? 'none' : 'auto'};
`;

const ContentSection = styled.section<ContentWrapperProps>`
  @media only screen and (min-width: 769px) {
    margin-right: ${(props) => props.isSidebarVisible ? '190px' : '0px'};
  }

  ${(props) => props.theme.breakpoints.medium} {
    margin-right: '0px';
  }
`;

const ContentTitle = styled.h1`
  font-size: 32px;
  padding-top: 24px;
  color: ${(props) => props.theme.textColor};
`;

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  border: 1px solid blue;

  ${(props) => props.theme.breakpoints.medium} {
    flex-direction: column-reverse;
  }
`;

export {
  ContentWrapper,
  ContentSection,
  ContentTitle,
  ContentContainer
};

