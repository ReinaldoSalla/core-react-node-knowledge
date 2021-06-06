import styled from 'styled-components/macro';
import { HideProps } from './Crud.types';

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 200px;
  margin: 2rem;
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.primaryTextColor};
`;

const Input = styled.input<HideProps>`
  border: 1px solid blue;
  color: white;
  background: black;
  font-size: 2rem;
  opacity: ${(props) => (props.hide ? 0.5 : 1)};
  pointer-events: ${(props) => (props.hide ? 'none' : 'auto')};
`;

const TextArea = styled.textarea`
  width: 90vw;
  height: 200px;
  font-size: 20px;
  color: white;
  background-color: black;
`;

const SubsectionTitle = styled.p`
  color: white;
`;

const Label = styled.label<HideProps>`
  color: white;
  margin-right: 32px;
  opacity: ${(props) => (props.hide ? 0.5 : 1)};
  pointer-events: ${(props) => (props.hide ? 'none' : 'auto')};
`;

export {
  Container,
  Heading,
  TextArea,
  Input,
  SubsectionTitle,
  Label
};
