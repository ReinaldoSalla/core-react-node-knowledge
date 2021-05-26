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
  // Heading,
  Input
} from './Crud.styles';
import Button from '../../shared/styles/Button.styles';

function Crud() {
  const [text, setText] = useState('Page Title');
  const [numSections, setNumSections] = useState(2);
  return (
    <Container>
      <Input
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <br />
      <br />
      <br />
      <br />
      <Button onClick={() => setNumSections(numSections + 1)}>
        add new section
      </Button>
    </Container>
  );
}

export default Crud;