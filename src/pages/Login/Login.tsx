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
  Text,
  ButtonWrapper,
  ButtonLoginWrapper,
  ButtonGoogleContainer,
  ButtonGoogleText,
  GoogleSvg,
  Line
} from './Login.styles';
import './Login.css';

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

  const onClick = (event: any): void => {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
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
            <Input type='email' id='email' />
            <Label style={firstLabelSpring} htmlFor='email'>Email</Label>
          </InputContainer>
          <InputContainer onFocus={onFocusSecond} onBlur={onBlurSecond}>
            <Input id='password' />
            <Label style={secondLabelSpring} htmlFor='password'>Password</Label>
          </InputContainer>
          <Text>Forgot password ?</Text>
          <ButtonWrapper>
            <ButtonLoginWrapper onClick={onClick}>
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