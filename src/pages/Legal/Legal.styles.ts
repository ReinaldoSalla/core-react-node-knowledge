import styled from 'styled-components';
import { animated } from 'react-spring';

const Container = styled(animated.div)`
  height: 100vh;
  padding: 120px 40px 0 40px;
`;

const Title = styled.h2`
  color: white;
`;

const Text = styled.p`
  color: white;
`;

export {
  Container,
  Title,
  Text
};
