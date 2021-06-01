/* eslint-disable */

import React, {
  useState
} from 'react';
import {
  Container,
  Input,
  SubsectionTitle
} from './Crud.styles';
import Button from '../../shared/styles/Button.styles';

function Crud() {
  const [title, setTitle] = useState('article title');
  const [sections, setSections] = useState<any[]>([]);
  console.log(sections);
  return (
    <Container>
      <Input
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <br />
      <br />
      <ul>
        {sections.map((section, index) => (
          <li key={index.toString()}>
            <hr />
            <Input
              type='text'
              value={section.title}
              onChange={(event) => {
                const newSections = [...sections];
                newSections[index].title = event.target.value;
                setSections(newSections);
              }}
            />
            <br />
            <br />
            <ul>
              {sections[index].contents.map((content: any, contentIndex: any) => (
                <li key={contentIndex.toString()}>
                  <SubsectionTitle>{Object.keys(content)[0]} {contentIndex + 1}</SubsectionTitle>
                  <Input 
                    // value={Object.values(content)[0]}
                    // onChange={(event) => {
                    //   const newSections = [...sections];
                    //   newSections[index] = { paragraph: event.target.value }
                    //   setSections(newSections);
                    // }} 
                  />
                </li>
              ))}
            </ul>
            <br />
            <br />
            <Button
              onClick={() => {
                const newSections = [...sections];
                newSections[index].contents = [
                  ...sections[index].contents,
                  { paragraph: 'paragraph' }
                ];
                setSections(newSections);
              }}
            >
              add a paragraph {section.title}
            </Button>
            <Button
              onClick={() => {
                const newSections = [...sections];
                newSections[index].contents = [
                  ...sections[index].contents,
                  { code: 'code' }
                ];
                setSections(newSections);
              }} 
            >
              add code with syntax {section.title}
            </Button>
            <br />
            <br />
          </li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <Button
        onClick={() => {
          const newSection = {
            title: `section title ${sections.length + 1}`,
            contents: []
          };
          setSections([...sections, newSection]);
        }}
      >
        add new section
      </Button>
      <br />
      <br />
      <br />
      <Button
        onClick={() => {
          const data = { title, sections };
          alert(JSON.stringify(data));
        }} 
      >
        generate article
      </Button>
    </Container>
  );
}

export default Crud;

/*
[
  {
    title: microtask,
    contents: [
      { paragraph: 'paragraph exemple' },
      { codePath: './parser.js' },
      { code: 'import Parser from 'parser' },
      { paragraph: 'paragraph example' },
    ]
  },
  {
    title: event loop,
    contents: [
      { paragraph: 'paragraph exemple' },
      { codePath: './parser.js' },
      { code: 'import Parser from 'parser' },
      { paragraph: 'paragraph example' },
    ]
  },
]
*/