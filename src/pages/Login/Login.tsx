/* eslint-disable no-multi-assign */

import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import getLabelSpring from './Login.animations';
import {
  Wrapper,
  Container,
  Heading1,
  Heading2,
  Highlight,
  Form,
  InputContainer,
  Input,
  Label,
  UserSvg,
  PasswordSvg,
  EyeSvg,
  Text,
  ButtonWrapper,
  ButtonLoginWrapper,
  ButtonGoogleContainer,
  ButtonGoogleText,
  GoogleSvg,
  Line
} from './Login.styles';

const Login = (): JSX.Element => {
  const [isFirstFocused, setIsFirstFocused] = useState(false);
  const [isSecondFocused, setIsSecondFocused] = useState(false);

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

  const firstLabelSpring = useSpring(getLabelSpring(isFirstFocused));

  const secondLabelSpring = useSpring(getLabelSpring(isSecondFocused));

  return (
    <Wrapper>
      <Container>
        <Heading1>Log in ProgrTmp</Heading1>
        <Heading2>
          Don&apos;t have an account?
          <Highlight>
            Sign Up
          </Highlight>
        </Heading2>
        <Form>
          <InputContainer onFocus={onFocusFirst} onBlur={onBlurFirst}>
            <UserSvg />
            <Input type='email' id='email' />
            <Label style={firstLabelSpring} htmlFor='email'>Email</Label>
          </InputContainer>
          <InputContainer onFocus={onFocusSecond} onBlur={onBlurSecond}>
            <PasswordSvg />
            <Input id='password' />
            <Label style={secondLabelSpring} htmlFor='password'>Password</Label>
            <EyeSvg />
          </InputContainer>
          <Text>Forgot password ?</Text>
          <ButtonWrapper>
            <ButtonLoginWrapper>
              Continue
            </ButtonLoginWrapper>
          </ButtonWrapper>
        </Form>
        <Line>OR</Line>
        <ButtonWrapper>
          <ButtonGoogleContainer>
            <GoogleSvg />
            <ButtonGoogleText>
              Login with Google
            </ButtonGoogleText>
          </ButtonGoogleContainer>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default Login;