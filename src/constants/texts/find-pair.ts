/* eslint-disable max-len */

const filler = `
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
`;

const title = `
JavaScript - Find Pair
`;

const introSubtitle = `
Problem
`;

const introParagraph1 = `
Create a function to return a pair of items inside an array whose sum equals a target number. 
If there is no such pair, the function should return null.
`;

const setupSubtitle = `
Setup
`;

const setupParagraph1 = `
Install the latest recommended version of *Node.js
`;

const setupParagraph2 = `
Install the lastest recommended version of *Node.js* and later deno
`;

const commands = [
  '$ npx create-react-app progrtmp-simple-state-management',
  '$ cd progrtmp-simple-state-management',
  '$ npm run start'
];

const setupParagraph3 = `
After running npm run start, React will lauch the app in 
http://localhost:3000
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
${filler}
`;

const navbarSubtitle = `
.some + .find
`;

const navbarParagraph1 = `
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
${filler}
`;

const navbarCode1 = `
onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'xyz' 
  };
}
`;

const formSubtitle = `
Form
`;

const formParagraph1 = `
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
${filler}
`;

const tableSubtitle = `
Table
`;

const tableParagraph1 = `
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
${filler}
`;

const finalSubtitle = `
FinalCode
`;

const finalParagraph1 = `
You can check the final code by acessing the github repository
`;

const finalParagraph2 = `
And you can also check the application running on codesandbox
`;

const complexStateManagement = {
  title,
  text: [
    {
      subtitle: introSubtitle,
      paragraphsCommandsCode: [
        { paragraph: introParagraph1 }
      ]
    },
    {
      subtitle: setupSubtitle,
      paragraphsCommandsCode: [
        { paragraphWithEndLink: setupParagraph1 },
        { paragraphWithMiddleLink: setupParagraph2 },
        { command: commands },
        { paragraph: setupParagraph3 }
      ]
    },
    {
      subtitle: navbarSubtitle,
      paragraphsCommandsCode: [
        { paragraph: navbarParagraph1 },
        { code: navbarCode1 }
      ]
    },
    {
      subtitle: formSubtitle,
      paragraphsCommandsCode: [
        { paragraph: formParagraph1 }
      ]
    },
    {
      subtitle: tableSubtitle,
      paragraphsCommandsCode: [
        { paragraph: tableParagraph1 }
      ]
    },
    {
      subtitle: finalSubtitle,
      paragraphsCommandsCode: [
        { paragraph: finalParagraph1 },
        { paragraph: finalParagraph2 }
      ]
    }
  ]
};

export default complexStateManagement;