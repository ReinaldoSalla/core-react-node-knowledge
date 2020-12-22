import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  border: 1px solid red;
`;

const Heading1 = styled.h1`
  text-align: center;
  color: white;
`;

const Heading2 = styled.h2`
  text-align: center;
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
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
`;

const Text = styled.div`
  text-align: center;
  color: white;
`;

const Button = styled.button`
  border: 1px solid red;
  color: white;
`;

const Line = styled.div`
  text-align: center;
  color: white;
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
  Input,
  Text,
  Button,
  Line,
  GoogleButton
};