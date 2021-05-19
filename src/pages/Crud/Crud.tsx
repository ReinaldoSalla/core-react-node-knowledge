// import React, { FunctionComponent } from 'react';
// import {
//   Container,
//   Label
// } from './Crud.styles';

// const Crud: FunctionComponent = (): JSX.Element => (
//   <Container>
//     <Label htmlFor='name'>Type your name</Label>
//     <input id='name' type='text' />
//     <br />
//     <Label htmlFor='msg'>Type a message</Label>
//     <input id='msg' type='text' />
//   </Container>
// );

import React, {
  useState
} from 'react';
import {
  Container,
  Heading,
  Input
} from './Crud.styles';

function Crud() {
  const [text, setText] = useState('');
  return (
    <Container>
      <Heading>Add a title</Heading>
      <Input
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </Container>
  );
}

export default Crud;