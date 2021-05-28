import styled from 'styled-components/macro';
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
  padding: 0 16px;
  font-size: 24px;
  box-shadow: 0 0 1px 1px transparent;
  /* TODO: use a pseudo-element to transition the opacity instead of 
  the box-shadow directly */
  transition: box-shadow 500ms;

  ${(props): string => props.theme.breakpoints.small} {
    width: calc(100% - 100px);
    height: 40px;
    margin-top: 20px;
    font-size: 1rem;
  }

  /* &:hover {
    box-shadow: 0 0 8px 2px white;
  } */

  &:focus {
    box-shadow: 0 0 1px 1px white;
  }
`;

const Element = styled(animated.div)`
  margin: 48px 0;
  text-align: center;

  ${(props): string => props.theme.breakpoints.small} {
    margin: 20px 0;
  }
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
