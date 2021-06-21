import styled from 'styled-components/macro';
import { HideProps } from './Writer.types';

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
  margin-bottom: 48px;
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
  font-size: 18px;
  font-weight: 700;
`;

const Label = styled.label<HideProps>`
  color: white;
  margin-right: 8px;
  opacity: ${(props) => (props.hide ? 0.5 : 1)};
  pointer-events: ${(props) => (props.hide ? 'none' : 'auto')};
`;

const Select = styled.select`
  margin-right: 32px;
`;

const Checkbox = styled.input`
  margin-right: 32px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 64px 0;
`;

const RemoveButton = styled.span`
  display: inline-block;
  font-size: 32px;
  margin-left: 32px;
  color: white;
  cursor: pointer;
`;

export {
  Container,
  Heading,
  TextArea,
  Input,
  SubsectionTitle,
  Label,
  Select,
  Checkbox,
  ButtonsContainer,
  RemoveButton
};
