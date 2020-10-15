import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: var(--topbar-height) 48px 0 48px; 
`;

const ContentContainer = styled.div`
  display: flex;

  ${(props) => props.theme.breakpoints.medium} {
    flex-direction: column;
  }
`;

export {
  ContentWrapper,
  ContentContainer
};

