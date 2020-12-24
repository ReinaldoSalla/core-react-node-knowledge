import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { AiOutlineGoogle, AiOutlineUser, AiOutlineEye } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 2rem 3rem;
  margin: calc(${(props): string => props.theme.topbarHeight} + 40px) 0 40px;
  border: 1px solid gray;
  border-radius: 1rem;

  ${(props): string => props.theme.breakpoints.small} {
    padding: 0;
    margin: calc(${(props): string => props.theme.topbarHeight} + 20px) 0 40px;
    border: none;
  }
`;

const Title = styled.h1`
  padding: 0 1rem;
  margin: 0 1rem 2rem;
  text-align: center;
  color: white;

  @media only screen and (max-height: 680px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.h2`
  margin: 0 1rem 2rem;
  text-align: center;
  color: white;
  
  @media only screen and (max-height: 680px) {
    font-size: 1rem;
  }

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

const Form = styled.form`
  margin: 0 0 2rem 0;
`;

const InputContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 2rem;
  border: none;
  padding: 0;
  
  ${(props): string => props.theme.breakpoints.small} {
    width: 80vw;
    margin: 0 2rem 2rem;
  }
`;

const Input = styled.input`
  position: relative;
  padding-left: 3rem;
  height: 3rem;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 1rem;
  color: white;
  background-color: transparent;
  
  &:focus {
    border: 1px solid white;
    border-radius: 10px;
    outline: none;
  }
`;

const Label = styled(animated.label)`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 3rem;
  height: 1.5rem;
  color: white;
`;

const svg = css`
  position: absolute;
  top: 50%;
  width: 1.5rem;
  height: 1.5rem;  
  transform: translateY(-50%);
  color: white;
`;

const UserSvg = styled(AiOutlineUser)`
  ${svg}
  left: 1rem;
`;

const PasswordSvg = styled(RiLockPasswordLine)`
  ${svg}
  left: 1rem;
`;

const EyeSvg = styled(AiOutlineEye)`
  ${svg}
  right: 1rem;
`;

const Forgot = styled.div`
  text-align: center;
  margin: 0 0 2rem 0;
  color: red;
  transition: color 250ms;

  &:hover {
    cursor: pointer;
    color: orange;
  }

  @media only screen and (max-height: 680px) {
    font-size: 14px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ButtonLoginWrapper = styled.button`
  width: 12rem;
  height: 4rem;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: #263238;
  color: white;
  transition: background-color 500ms;

  &:hover {
    background-color: #26323894;
    cursor: pointer;
  }

  &:active {
    transition: background-color 250ms;
    background-color: #26323861;
  }

  @media only screen and (max-height: 680px) {
    height: 3.5rem;
  }
`;

const ButtonGoogleContainer = styled(ButtonLoginWrapper)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const GoogleSvg = styled(AiOutlineGoogle)`
  width: 2rem;
  height: 2rem;
`;

const Line = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  overflow: hidden;
  display: flex;

  &::before, &::after{
    content: "";
    flex: 1 1;
    border-bottom: 1px solid white;
    margin: auto;
  }

  &::before {
    margin-right: 10px;
    margin-left: 10px;
  }

  &::after {
    margin-left: 10px;
    margin-right: 10px;
  }

  ${(props): string => props.theme.breakpoints.small} {
    &::before {
      margin-left: 30px;
    }

    &::after {
      margin-right: 30px;
    }
  }
`;

export {
  Wrapper,
  Container,
  Title,
  Subtitle,
  Highlight,
  Form,
  InputContainer,
  Input,
  Label,
  UserSvg,
  PasswordSvg,
  EyeSvg,
  Forgot,
  ButtonWrapper,
  ButtonLoginWrapper,
  ButtonGoogleContainer,
  GoogleSvg,
  Line
};