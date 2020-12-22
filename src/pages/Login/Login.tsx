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
  Button,
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
            <Input type='email' id='email' />
            <Label style={firstLabelSpring} htmlFor='email'>Email</Label>
          </InputContainer>
          <InputContainer onFocus={onFocusSecond} onBlur={onBlurSecond}>
            <Input id='password' />
            <Label style={secondLabelSpring} htmlFor='password'>Password</Label>
          </InputContainer>
          <Text>Forgot password ?</Text>
          <Button>Log in</Button>
        </Form>
        <Line>Or</Line>
        <Button>Login with Google</Button>
      </Container>
    </Wrapper>
  );
};

export default Login;