import styled from 'styled-components/macro';
import { animated } from 'react-spring';

const Title = styled(animated.label)`
  display: inline-block;
  font-size: 2rem;
  text-align: center;
  width: 100%;
  margin-top: 180px;
  color: white;

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 1.5rem;
    margin-top: calc(${(props): string => props.theme.topbarHeight} + 20px);
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Title;