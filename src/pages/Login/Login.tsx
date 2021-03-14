import React, { useState, ChangeEvent } from 'react';
import { useSpring } from 'react-spring';
import getLabelSpring from './Login.animations';
import {
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
  ButtonGoogleContainer,
  GoogleSvg,
  Line
} from './Login.styles';
import Button from '../../shared/styles/Button.styles';

const Login = (): JSX.Element => {
  const [isFirstFocused, setIsFirstFocused] = useState(false);
  const [isSecondFocused, setIsSecondFocused] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onFocusFirst = (): void => {
    setIsFirstFocused(true);
  };

  const onBlurFirst = (): void => {
    setIsFirstFocused(false);
  };

  const onFocusSecond = (): void => {
    setIsSecondFocused(true);
  };

  const onBlurSecond = (): void => {
    setIsSecondFocused(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.currentTarget.id]: event.currentTarget.value
    });
  };

  const firstLabelSpring = useSpring(getLabelSpring(
    isFirstFocused,
    formData.email.length,
    '-165%'
  ));

  const secondLabelSpring = useSpring(getLabelSpring(
    isSecondFocused,
    formData.password.length,
    '-100%'
  ));

  return (
    <Wrapper>
      <Container>
        <Title>Log in ProgrTmp</Title>
        <Subtitle>
          Don&apos;t have an account?
          <Highlight>
            Sign Up
          </Highlight>
        </Subtitle>
        <Form>
          <InputContainer onFocus={onFocusFirst} onBlur={onBlurFirst}>
            <UserSvg />
            <Input
              type='email'
              id='email'
              onChange={onChange}
              value={formData.email}
              autoComplete='off'
            />
            <Label style={firstLabelSpring} htmlFor='email'>Email</Label>
          </InputContainer>
          <InputContainer onFocus={onFocusSecond} onBlur={onBlurSecond}>
            <PasswordSvg />
            <Input
              id='password'
              onChange={onChange}
              value={formData.password}
              autoComplete='off'
            />
            <Label style={secondLabelSpring} htmlFor='password'>Password</Label>
            <EyeSvg />
          </InputContainer>
          <Forgot>Forgot password ?</Forgot>
          <ButtonWrapper>
            <Button type='button'>
              Continue
            </Button>
          </ButtonWrapper>
        </Form>
        <Line>OR</Line>
        <ButtonWrapper>
          <ButtonGoogleContainer type='button'>
            <GoogleSvg />
            Login with Google
          </ButtonGoogleContainer>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default Login;

/*
first draft css bem
<login__wrapper>
  <login_container>
    <login__title>
    <login__subtitle>
      <login__link>
    <login__form>
      <login__input-container>
        <login__user-svg>
        <login__input>
        <login__labal>
      <login__input-container<
        <login__password-svg>
        <login__inupt>
        <login__label>
        <login__eye-svg>
      <login__forgot-password>
      <login__button-wrapper>
        <login__button-login-wrapper>
      <login__or>
      <login__button-wrapper>
        <login__button-google-container>
          <login__button-google-svg>
          <login__button-google-text>
*/