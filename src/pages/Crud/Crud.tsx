import React, { FunctionComponent } from 'react';
import {
  Container,
  Label
} from './Crud.styles';

const Crud: FunctionComponent = (): JSX.Element => (
  <Container>
    <Label htmlFor='name'>Type your name</Label>
    <input id='name' type='text' />
    <br />
    <Label htmlFor='msg'>Type a message</Label>
    <input id='msg' type='text' />
  </Container>
);

export default Crud;