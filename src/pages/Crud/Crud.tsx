import React, {
  useState
} from 'react';
import {
  Container,
  Input
} from './Crud.styles';
import Button from '../../shared/styles/Button.styles';

// function Crud() {
//   const [text, setText] = useState('Page Title');
//   const [numSections, setNumSections] = useState(0);
//   const [sectionsText, setSectionsText] = useState<string[]>([]);
//   return (
//     <Container>
//       <Input
//         type='text'
//         value={text}
//         onChange={(event) => setText(event.target.value)}
//       />

//       <ul>
//         {new Array(numSections).fill(0).map((_, index) => (
//           <li key={index.toString()}>
//             <hr />
//             <Input
//               type='text'
//               value={sectionsText[index]}
//               onChange={(event) => {
//                 const items = [...sectionsText];
//                 items[index] = event.target.value;
//                 setSectionsText(items);
//               }}
//             />
//             <br />
//             <Button>add a paragraph</Button>
//             <Button>add code</Button>
//           </li>
//         ))}
//       </ul>

//       <hr />
//       <Button onClick={() => {
//         setNumSections(numSections + 1);
//         setSectionsText(
//          [...sectionsText, `Section title ${numSections + 1}`]
//         );
//       }}
//       >
//         add new section
//       </Button>
//     </Container>
//   );
// }

function Crud() {
  const [sections, setSections] = useState<any[]>([]);
  return (
    <Container>
      <ul>
        {sections.map((section, index) => (
          <li key={index.toString()}>
            <hr />
            <Input
              type='text'
              value={section.title}
              onChange={(event) => {
                const items = [...sections];
                items[index].title = event.target.value;
                setSections(items);
              }}
            />
            <br />
            <br />
            <Button>add a paragraph</Button>
            <Button>add code</Button>
            <br />
            <br />
          </li>
        ))}
      </ul>

      <Button
        onClick={() => {
          const newSection = {
            title: `section title ${sections.length + 1}`,
            content: []
          };
          setSections([...sections, newSection]);
        }}
      >
        add new section
      </Button>
    </Container>
  );
}

export default Crud;

/*
[
  {
    title: microtask,
    content: [
      { paragraph: 'paragraph exemple' },
      { codePath: './parser.js' },
      { code: 'import Parser from 'parser' },
      { paragraph: 'paragraph example' },
    ]
  },
  {
    title: event loop,
    content: [
      { paragraph: 'paragraph exemple' },
      { codePath: './parser.js' },
      { code: 'import Parser from 'parser' },
      { paragraph: 'paragraph example' },
    ]
  },
]
*/
