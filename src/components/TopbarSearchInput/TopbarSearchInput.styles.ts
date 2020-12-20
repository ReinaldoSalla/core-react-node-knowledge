import styled from 'styled-components';
import { animated } from 'react-spring';

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Input = styled(animated.input)`
  height: 60px;
  width: calc(100% - 200px);
  margin-top: 48px;
  border-radius: 20px;
  font-size: 24px;
  padding: 0 16px;

  ${(props): string => props.theme.breakpoints.small} {
    width: calc(100% - 100px);
  }
`;

const Element = styled(animated.div)`
  margin: 48px 0;
  text-align: center;
`;

const Text = styled.span`
  font-size: 32px;
  color: white;
  text-align: center;
  border-bottom: 1px solid white;
`;

export {
  Wrapper, Input, Element, Text
};