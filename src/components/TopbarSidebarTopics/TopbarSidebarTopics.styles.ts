import styled from 'styled-components/macro';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

const Wrapper = styled(animated.section)`
  margin: 0 0 0 2rem;
`;

const Title = styled.h2`
  color: white;
  margin: 32px 0 0 0;
`;

const Topics = styled.ul`
  margin-bottom: 32px;
`;

const Topic = styled.li`
  margin: 8px 0;
`;

const Text = styled(Link)`
  color: white;
  transition: color 250ms;

  &:hover {
    color: ${(props): string => props.theme.hoverColor};
    cursor: pointer;
  }
`;

export {
  Wrapper,
  Title,
  Topics,
  Topic,
  Text
};
