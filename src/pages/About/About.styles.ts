import styled from 'styled-components/macro';
import { animated } from 'react-spring';

const Container = styled(animated.section)`
  padding-top: calc(${(props): string => props.theme.topbarHeight} + 100px);
  padding-left: 60px;
  padding-right: 60px;
  height: 100%;
`;

const Title = styled.h1`
  color: white;
`;

const Text = styled.p`
  color: white;
  font-size: 17px;
  line-height: 1.7;
`;

export { Container, Title, Text };
