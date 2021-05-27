import React, {
  useState
} from 'react';
import {
  Container,
  Input
} from './Crud.styles';
import Button from '../../shared/styles/Button.styles';

function Crud() {
  const [text, setText] = useState('Page Title');
  const [numSections, setNumSections] = useState(0);
  const [sectionsText, setSectionsText] = useState<string[]>([]);
  return (
    <Container>
      <Input
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      {new Array(numSections).fill(0).map((_, index) => (
        <div key={index.toString()}>
          <hr />
          <Input
            type='text'
            value={sectionsText[index]}
            onChange={(event) => {
              const items = [...sectionsText];
              items[index] = event.target.value;
              setSectionsText(items);
            }}
          />
          <br />
          <Button>add a paragraph</Button>
          <Button>add code</Button>
        </div>
      ))}

      <hr />
      <Button onClick={() => {
        setNumSections(numSections + 1);
        setSectionsText([...sectionsText, `Section title ${numSections + 1}`]);
      }}
      >
        add new section
      </Button>
    </Container>
  );
}

export default Crud;