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

/*
{
  "title": "article title",
  "seo": "",
  "text": [
    {
      "title": "section title 1",
      "paragraphsCommandsCode": [
        {
          "command": []
        },
        {
          "command": []
        },
        {
          "command": "sdjffasdf\npadsfhnaskjldfn\naksdjfhals"
        },
        {
          "codeBlock": {
            "language": "language-typescript",
            "code": "psjdfnasl\nsadkfjn\naçsdfjn",
            "filePath": "",
            "disableLineNumbers": false,
            "disableFilePath": false
          }
        },
        {
          "command": []
        },
        {
          "command": []
        },
        {
          "command": "$ funoint\n$ int32\n$ int &&34"
        }
      ]
    }
  ]
}
*/

function splitCommands(data: any) {
  return data;
}

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
              {sections[sectionIndex].paragraphsCommandsCode.map((content: any, contentIndex: any) => (
                <li key={contentIndex.toString()}>
                  {Object.keys(content)[0] === 'paragraph' && (
                    <div>
                      <SubsectionTitle>{Object.keys(content)[0]} {contentIndex + 1}</SubsectionTitle>
                      <TextArea 
                        value={content.paragraph} 
                        onChange={(event) => {
                          const newSections = [...sections];
                          newSections[sectionIndex].paragraphsCommandsCode[contentIndex].paragraph = event.target.value;
                          setSections(newSections);
                        }}
                      />
                    </div>
                  )}
                  {Object.keys(content)[0] === 'command' && (
                    <div>
                      <SubsectionTitle>{Object.keys(content)[0]} {contentIndex + 1}</SubsectionTitle>
                      <TextArea
                        value={content.command}
                        onChange={(event) => {
                          const newSections = [...sections];
                          newSections[sectionIndex].paragraphsCommandsCode[contentIndex].command = event.target.value;
                          setSections(newSections);
                        }}
                      >
                      </TextArea> 
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
                          newSections[sectionIndex].paragraphsCommandsCode[contentIndex].codeBlock.language = event.target.value;
                          setSections(newSections);
                        }}
                      >
                        <option value='language-typescript'>TypeScript</option>
                        <option value='language-tsx'>TSX</option>
                        <option value='language-css'>CSS</option>
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
                          newSections[sectionIndex].paragraphsCommandsCode[contentIndex].codeBlock.disableLineNumbers = event.target.checked;
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
                          newSections[sectionIndex].paragraphsCommandsCode[contentIndex].codeBlock.disableFilePath = event.target.checked;
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
                          newSections[sectionIndex].paragraphsCommandsCode[contentIndex].codeBlock.filePath = event.target.value;
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
                          newSections[sectionIndex].paragraphsCommandsCode[contentIndex].codeBlock.code = event.target.value;
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
                  newSections[sectionIndex].paragraphsCommandsCode = [
                    ...sections[sectionIndex].paragraphsCommandsCode,
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
                  newSections[sectionIndex].paragraphsCommandsCode = [
                    ...sections[sectionIndex].paragraphsCommandsCode,
                    { command: [] }
                  ];
                  setSections(newSections);
                }}
              >
                add commands {section.title}
              </Button>
              <Button
                onClick={() => {
                  const newSections = [...sections];
                  newSections[sectionIndex].paragraphsCommandsCode = [
                    ...sections[sectionIndex].paragraphsCommandsCode,
                    { 
                      codeBlock: {
                        language: 'language-typescript',
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
            paragraphsCommandsCode: '' 
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
          const data = { title, seo: '', text: sections };
          const processedData = splitCommands(data);
          // alert(JSON.stringify(data));
          console.log(JSON.stringify(processedData));
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
    paragraphsCommandsCode: [
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
    paragraphsCommandsCode: [
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


// diff
/*

const orderTimersPromisesAsyncAwait = {
  title,
  seo,
  text: [
    {
      subtitle: subtitle1,
      paragraphsCommandsCode: [
        { paragraph: paragraph2 },
        { paragraph: paragraph3 },
        {
          codeBlock: {
            code: code4,
            disableLineNumbers: true,
            language
          }
        },
        { paragraph: paragraph5 },
        {
          codeBlock: {
            code: code6,
            disableLineNumbers: true,
            language
          }
        }
      ]
    },


const test = {
  "title": "page title",
  "sections": [
    {
      "title": "1. Problem",
      "paragraphsCommandsCode": [
        {
          "paragraph": "solve the problem in js"
        },
        {
          "codeBlock": {
            "language": "tsx",
            "code": "const process = dt.next();",
            "filePath": "./app.ts",
            "disableLineNumbers": false,
            "disableFilePath": false
          }
        },
        {
          "paragraph": "solution is aboved"
        }
      ]
    },
	
*/

