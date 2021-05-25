import styled from 'styled-components/macro';

const Container = styled.div`
  /* width: 100vw; */
  height: 100vh;
  padding-top: 200px;
  box-sizing: border-box;
  border: 10px solid red;
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.primaryTextColor};
`;

const Input = styled.input`
  border: 1px solid blue;
  color: white;
  background: black;
  font-size: 2rem;
`;

export {
  Container,
  Heading,
  Input
};