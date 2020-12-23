import styled from 'styled-components';
import { animated } from 'react-spring';
import { AiOutlineGoogle } from 'react-icons/ai';

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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ButtonLoginWrapper = styled.button`
  position: relative;
  width: 12rem;
  height: 4rem;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: #263238;
  color: white;
  transition: background-color 500ms;
  overflow: hidden;

  &:hover {
    background-color: #26323894;
    cursor: pointer;
  }

  /* &:active {
    background-color: #26323861;
  } */
`;

const ButtonGoogleContainer = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* position: relative; */
  width: 12rem;
  height: 4rem;
  border: 1px solid #263238;
  border-radius: 12px;
  background: #263238;
  color: white;
`;

const ButtonGoogleText = styled.span`
  /* display: inline-block; */
  /* width: 10rem; */
  /* height: 2rem; */
  /* border: 1px solid white; */
  /* margin-left: 3rem; */
`;

const GoogleSvg = styled(AiOutlineGoogle)`
  /* position: absolute; */
  /* right: 0.5rem; */
  width: 2rem;
  height: 2rem;
  /* border: 1px solid white; */
`;

const Line = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 2rem;
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
  ButtonWrapper,
  ButtonLoginWrapper,
  ButtonGoogleContainer,
  ButtonGoogleText,
  GoogleSvg,
  Line
};