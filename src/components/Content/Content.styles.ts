import styled from 'styled-components';
import { animated } from 'react-spring';
import { ContentWrapperProps } from './Content.types';

const ContentWrapper = styled(animated.article)<ContentWrapperProps>`
  padding: var(--topbar-height) 48px 0 48px; 
  pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};
`;

const ContentContainer = styled.div`
  display: flex;

  ${(props) => props.theme.breakpoints.medium} {
    flex-direction: column-reverse;
  }
`;

export {
  ContentWrapper,
  ContentContainer
};

