import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Text = styled.span`
  font-size: 32px;
  color: white;
  text-align: center;
`;


const MatchLink = styled(Link)`
  font-size: 32px;
  text-align: center;
  border-bottom: 1px solid white;
  color: white;
  transition: color 250ms, border-bottom 250ms;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    border-bottom: ${(props) => `1px solid ${props.theme.hoverColor}`};
    cursor: pointer;
  }
`;

export { Text, MatchLink };