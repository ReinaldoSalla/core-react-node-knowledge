import styled from 'styled-components';
import { animated } from 'react-spring';

const Wrapper = styled.div`
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
`;

export { Wrapper, Input };