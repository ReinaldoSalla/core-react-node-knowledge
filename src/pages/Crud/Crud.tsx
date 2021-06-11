/* eslint-disable */

import React, {
  useState
} from 'react';
import Button from '../../shared/styles/Button.styles';
import {
  Container,
  Input,
  TextArea,
  SubsectionTitle,
  Label,
  Select,
  Checkbox,
  ButtonsContainer
} from './Crud.styles';

function Crud() {
  const [title, setTitle] = useState('article title');
  const [sections, setSections] = useState<any[]>([]);
  return (
    <Container>
      <Input
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <ul>
        {sections.map((section, sectionIndex) => (
          <li key={sectionIndex.toString()}>
            <hr />
            <Input
              type='text'
              value={section.title}
              onChange={(event) => {
                const newSections = [...sections];
                newSections[sectionIndex].title = event.target.value;
                setSections(newSections);
              }}
            />
            <ul>
              {sections[sectionIndex].contents.map((content: any, contentIndex: any) => (
                <li key={contentIndex.toString()}>
                  {Object.keys(content)[0] === 'paragraph' && (
                    <div>
                      <SubsectionTitle>{Object.keys(content)[0]} {contentIndex + 1}</SubsectionTitle>
                      <TextArea 
                        value={content.paragraph} 
                        onChange={(event) => {
                          const newSections = [...sections];
                          newSections[sectionIndex].contents[contentIndex].paragraph = event.target.value;
                          setSections(newSections);
                        }}
                      />
                    </div>
                  )}
                  {Object.keys(content)[0] === 'codeBlock' && (
                    <div>
                      <SubsectionTitle>{Object.keys(content)[0]} {contentIndex + 1}</SubsectionTitle>
                      <Label 
                        htmlFor={`language${sectionIndex}x${contentIndex}`}
                      >
                        Chose a language
                      </Label>
                      <Select 
                        id={`language${sectionIndex}x${contentIndex}`}
                        value={content.codeBlock.language}
                        onChange={(event) => {
                          const newSections = [...sections];
                          newSections[sectionIndex].contents[contentIndex].codeBlock.language = event.target.value;
                          setSections(newSections);
                        }}
                      >
                        <option>TypeScript</option>
                        <option>TSX</option>
                        <option>CSS</option>
                      </Select>
                      <Label
                        htmlFor={`disable-line-numbers${sectionIndex}x${contentIndex}`} 
                      >
                        disable line numbers
                      </Label>
                      <Checkbox
                        id={`disable-line-numbers${sectionIndex}x${contentIndex}`} 
                        type='checkbox'
                        checked={content.codeBlock.disableLineNumbers}
                        onChange={(event) => {
                          const newSections = [...sections];
                          newSections[sectionIndex].contents[contentIndex].codeBlock.disableLineNumbers = event.target.checked;
                          setSections(newSections);
                        }}
                      />  
                      <Label
                        htmlFor={`disable-file-path${sectionIndex}x${contentIndex}`} 
                      >
                        disable file path
                      </Label>
                      <Checkbox 
                        id={`disable-file-path${sectionIndex}x${contentIndex}`} 
                        type='checkbox'
                        checked={content.codeBlock.disableFilePath}
                        onChange={(event) => {
                          const newSections = [...sections];
                          newSections[sectionIndex].contents[contentIndex].codeBlock.disableFilePath = event.target.checked;
                          setSections(newSections);
                        }}
                      />
                      <br />
                      <br />
                      <Label
                        htmlFor={`code-path${sectionIndex}x${contentIndex}`}
                        hide={content.codeBlock.disableFilePath}
                      >
                        File Path
                      </Label>
                      <Input
                        id={`file-path${sectionIndex}x${contentIndex}`}
                        value={content.codeBlock.filePath}
                        onChange={(event) => {
                          const newSections = [...sections];
                          newSections[sectionIndex].contents[contentIndex].codeBlock.filePath = event.target.value;
                          setSections(newSections);
                        }}
                        hide={content.codeBlock.disableFilePath}
                      />
                      <br />
                      <br />
                      <Label
                        htmlFor={`code${sectionIndex}x${contentIndex}`}
                      >
                        code
                      </Label>
                      <br />
                      <br />
                      <TextArea 
                        id={`code${sectionIndex}x${contentIndex}`}
                        value={content.codeBlock.code}
                        onChange={(event) => {
                          const newSections = [...sections];
                          newSections[sectionIndex].contents[contentIndex].codeBlock.code = event.target.value;
                          setSections(newSections);
                        }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <ButtonsContainer>
              <Button
                onClick={() => {
                  const newSections = [...sections];
                  newSections[sectionIndex].contents = [
                    ...sections[sectionIndex].contents,
                    { paragraph: '' }
                  ];
                  setSections(newSections);
                }}
              >
                add paragraph {section.title}
              </Button>
              <Button
                onClick={() => {
                  const newSections = [...sections];
                  newSections[sectionIndex].contents = [
                    ...sections[sectionIndex].contents,
                    { 
                      codeBlock: {
                        language: 'tsx',
                        code: '',
                        filePath: '',
                        disableLineNumbers: false,
                        disableFilePath: false,
                      }
                    }
                  ];
                  setSections(newSections);
                }} 
              >
                add codeblock {section.title}
              </Button>
            </ButtonsContainer>
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
      { 
        paragraph: 'paragraph exemple' 
      },
      { 
        codeBlock: { 
          language: 'ts', 
          filePath: './app.ts;', 
          code: 'import something from somewhere' 
          disableFilePath" false
          disableLineNumbers: false, 
        } 
      },
      { 
        paragraph: 'paragraph example' 
      },
    ]
  },
  {
    title: microtask,
    contents: [
      { 
        paragraph: 'paragraph exemple' 
      },
      { 
        codeBlock: { 
          language: 'ts', 
          filePath: './app.ts;', 
          code: 'import something from somewhere' 
          disableFilePath" false
          disableLineNumbers: false, 
        } 
      },
      { 
        paragraph: 'paragraph example' 
      },
    ]
  },
]
*/