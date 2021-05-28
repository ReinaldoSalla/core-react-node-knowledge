import styled from 'styled-components/macro';
import { animated } from 'react-spring';
import ContentWrapperProps from './Content.types';

const ContentWrapper = styled(animated.div)<ContentWrapperProps>`
  padding: ${(props): string => `${props.theme.topbarHeight} 48px 36px 48px`};
  background: ${(props): string => props.theme.pageBgColor};
  pointer-events: ${({ $isTopbarSidebarVisible }): string => (
    $isTopbarSidebarVisible
      ? 'none'
      : 'auto'
  )};
  ${(props): string => props.theme.breakpoints.medium} {
    padding: ${(props): string => `${props.theme.topbarHeight} 36px 36px 36px`}
  }
  ${(props): string => props.theme.breakpoints.small} {
    padding: ${(props): string => `${props.theme.topbarHeight} 24px 36px 24px`}
  }
`;

const ContentContainer = styled.div`
  display: flex;
  position: relative;

  ${(props): string => props.theme.breakpoints.medium} {
    flex-direction: column-reverse;
  }
`;

export {
  ContentWrapper,
  ContentContainer
};
