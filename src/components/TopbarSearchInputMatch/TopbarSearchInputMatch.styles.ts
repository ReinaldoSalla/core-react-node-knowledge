import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const textCSS = css`
  font-size: 32px;
  color: white;
  text-align: center;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 1rem;
    position: relative;
    top: 0.5rem;
  }
`;

const MatchLink = styled(Link)`
  ${textCSS}
  padding: 1rem;
  border: 1px solid white;
  border-radius: 2rem;
  transition: color 250ms, border 250ms;

  &:hover {
    color: ${(props): string => props.theme.hoverColor};
    border: ${(props): string => `1px solid ${props.theme.hoverColor}`};
    cursor: pointer;
  }

  ${(props): string => props.theme.breakpoints.small} {
    padding: 0.5rem;
  }
`;

const Highlight = styled.span`
  background: #737325;
`;

const Text = styled.span`
  ${textCSS}

`;

export { MatchLink, Highlight, Text };