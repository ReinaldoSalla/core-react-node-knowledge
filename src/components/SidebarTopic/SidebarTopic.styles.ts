import styled from 'styled-components';
import { animated } from 'react-spring';

const Wrapper = styled(animated.section)`
  margin: 0 0 0 24px;
`;

const Title = styled.h2`
  color: white;
  margin: 32px 0 0 0;
`;

const Topic = styled.li`
  color: white;
  margin: 8px 0;
`;


export { 
  Wrapper,
  Title,
  Topic,
};