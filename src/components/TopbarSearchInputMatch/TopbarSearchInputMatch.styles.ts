import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const textCSS = css`
  font-size: 32px;
  color: white;
  text-align: center;
`;

const Text = styled.span`
  ${textCSS}
`;

const MatchLink = styled(Link)`
  ${textCSS}
  border-bottom: 1px solid white;
  transition: color 250ms, border-bottom 250ms;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    border-bottom: ${(props) => `1px solid ${props.theme.hoverColor}`};
    cursor: pointer;
  }
`;

export { Text, MatchLink };