import styled from 'styled-components';

const ContentNavigationMobileItem = styled.li`
  /* display: none; */
  margin-bottom: 16px;

  ${(props) => props.theme.breakpoints.medium} {
    display: static;
  }
`;

export { ContentNavigationMobileItem };