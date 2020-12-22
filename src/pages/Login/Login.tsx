import React from 'react';
import {
  Wrapper,
  Container,
  Heading1,
  Heading2,
  Highlight,
  Form,
  Input,
  Text,
  Button,
  Line,
  GoogleButton
} from './Login.styles';

const Login = (): JSX.Element => (
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
        <Input
          placeholder='email'
        />
        <Input
          placeholder='password'
        />
      </Form>
      <Text>Forgot password ?</Text>
      <Button>Log in</Button>
      <Line>Or</Line>
      <GoogleButton>Login with Google</GoogleButton>
    </Container>
  </Wrapper>
);

export default Login;