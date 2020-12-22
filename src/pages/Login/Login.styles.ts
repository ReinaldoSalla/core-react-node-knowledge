import styled from 'styled-components';
import { animated } from 'react-spring';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  padding: 2rem 3rem;
  margin-top: ${(props): string => props.theme.topbarHeight};
  border: 1px solid gray;
  border-radius: 1rem;
`;

const Heading1 = styled.h1`
  text-align: center;
  margin: 0 0 2rem 0;
  color: white;
`;

const Heading2 = styled.h2`
  text-align: center;
  margin: 0 0 2rem 0;
  color: white;
`;

const Highlight = styled.span`
  margin-left: 0.5rem;
  color: red;
  transition: color 250ms;

  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const Form = styled.div`
  margin: 0 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  position: relative;
  z-index: 2;
  height: 32px;
  border: 1px solid gray;
  border-radius: 10px;
  color: white;
  background-color: transparent;

  &:focus {
    border: 1px solid white;
    border-radius: 10px;
    outline: none;
  }
`;

const Label = styled(animated.label)`
  position: absolute;
  z-index: 1;
  top: 0.5rem;
  left: 1rem;
  color: white;
`;

const Text = styled.div`
  text-align: center;
  margin: 0 0 2rem 0;
  color: red;
  transition: color 250ms;

  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

const Button = styled.button`
  width: 12rem;
  height: 4rem;
  padding: 0.5rem;
  border: 1px solid #350003;
  border-radius: 12px;
  background: #350003;
  color: white;
`;

const Line = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 2rem;
`;

const GoogleButton = styled.button`
  border: 1px solid red;
  color: white;
`;

export {
  Wrapper,
  Container,
  Heading1,
  Heading2,
  Highlight,
  Form,
  InputContainer,
  Input,
  Label,
  Text,
  Button,
  Line,
  GoogleButton
};