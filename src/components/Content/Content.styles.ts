import styled from 'styled-components';

const ContentWrapper = styled.article`
  padding: var(--topbar-height) 48px 0 48px; 
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

