import styled from 'styled-components/macro';

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 200px;
  margin: 2rem;
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

const SubsectionTitle = styled.p`
  color: white;
`;

const Label = styled.label`
  color: white;
  margin-right: 32px;
`;

export {
  Container,
  Heading,
  Input,
  SubsectionTitle,
  Label
};
