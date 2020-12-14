const block1 = `
onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'xyz' 
  };
}
`;

const title = `
React - Simple State Management
`;

const subtitle1 = `
Intro
`;

const paragraph1 = `
The guide aims to explore the useState hook from
react. We\'l build a Navbar that re-renders a list of items 
when hovered over. We\'l also create a form and a table,
wich will share data by lifting the state up.
`;

const subtitle2 = `
Setup
`;

const paragraph2 = `
Install the latest recommended version of *Node.js
`;

const paragraph3 = `
Install the lastest recommended version of *Node.js* and later deno
`;


const commands = [
'$ npx create-react-app progrtmp-simple-state-management',
'$ cd progrtmp-simple-state-management',
'$ npm run start'
];

const paragraph4 = `
When running npm run start, React will lauch the app in 
http://localhost:3000
`;

const subtitle3 = `
Nabvar
`;

const paragraph5 = `
The code bellow blablabla
`;

const data: any = {
  simpleStateManagement: {
    title,
    text: [
      {
        subtitle: subtitle1,
        paragraphsLinksCommandsCode: [ 
          { paragraph: paragraph1 },
        ] 
      },
      {
        subtitle: subtitle2,
        paragraphsLinksCommandsCode: [ 
          { paragraphWithEndLink: paragraph2 },
          { paragraphWithMiddleLink: paragraph3 },
          { command: commands },
          { paragraph: paragraph4 },
        ] 
      },
      {
        subtitle: subtitle3,
        paragraphsLinksCommandsCode: [
          { paragraph: paragraph5 },
          { code: block1 }
        ]
      },
    ],
  },
};

export default data;
