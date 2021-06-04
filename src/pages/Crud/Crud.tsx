/* eslint-disable */

import React, {
  useState
} from 'react';
import Button from '../../shared/styles/Button.styles';
import {
  Container,
  Input,
  SubsectionTitle,
  Label
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
      <br />
      <br />
      <br />
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
            <br />
            <br />
            <ul>
              {sections[sectionIndex].contents.map((content: any, contentIndex: any) => (
                <li key={contentIndex.toString()}>
                  {Object.keys(content)[0] === 'paragraph' && (
                    <div>
                      <SubsectionTitle>{Object.keys(content)[0]} {contentIndex + 1}</SubsectionTitle>
                      <Input />
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
                      <select 
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
                      </select>
                      <br />
                      <br />
                      <Label
                        htmlFor={`disable-line-numbers${sectionIndex}x${contentIndex}`} 
                      >
                        disable line numbers
                      </Label>
                      <input
                        id={`disable-line-numbers${sectionIndex}x${contentIndex}`} 
                        type='checkbox'
                        checked={content.codeBlock.disableLineNumbers}
                        onChange={(event) => {
                          const newSections = [...sections];
                          newSections[sectionIndex].contents[contentIndex].codeBlock.disableLineNumbers = event.target.checked;
                          setSections(newSections);
                        }}
                      />  
                      <br />
                      <br />
                      <Label
                        htmlFor={`disable-file-path${sectionIndex}x${contentIndex}`} 
                      >
                        disable file path
                      </Label>
                      <input 
                        id={`disable-file-path${sectionIndex}x${contentIndex}`} 
                        type='checkbox'
                        checked={content.codeBlock.disableCodePath}
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
                      <Input 
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
            <br />
            <br />
            <Button
              onClick={() => {
                const newSections = [...sections];
                newSections[sectionIndex].contents = [
                  ...sections[sectionIndex].contents,
                  { paragraph: 'paragraph' }
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
                      filePath: './app.ts',
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
      { 
        paragraph: 'paragraph exemple' 
      },
      { 
        codeBlock: { 
          language: 'ts', 
          codePath: './app.ts;', 
          code: 'import something from somewhere' 
          disableCodePath" false
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
          codePath: './app.ts;', 
          code: 'import something from somewhere' 
          disableCodePath" false
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